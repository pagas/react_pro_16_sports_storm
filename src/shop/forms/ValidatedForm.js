import React, {Component} from "react";
import {ValidationError} from "./ValidationError";
import {GetMessages} from "./ValidationMessages";

export class ValidatedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validationErrors: {}
        }
        this.formElements = {};
    }

    handleSubmit = () => {
        this.setState(state =>{
            const newStat = {...state, validationErrors: {}};
            Object.values(this.formElements).forEach(element => {
                if (!element.checkValidity()) {
                    newStat.validationErrors[element.name] = GetMessages(element);
                }
            });
            return newStat;
        }, () => {
           if (Object.keys(this.state.validationErrors).length === 0) {
               const data = Object.assign(...Object.entries(this.formElements)
                   .map(element => ({[element[0]]: element[1].value})));
               this.props.submitCallback(data);
           }
        });
    };

    registerRef = (element) => {
        if (element !== null) {
            this.formElements[element.name] = element;
        }
    };

    renderElement = (modelItem) => {
        const name = modelItem.name || modelItem.label.toLowerCase();
        return <div className="form-group" key={modelItem.label}>
            <label>{modelItem.label}</label>
            <ValidationError errors={this.state.validationErrors[name]}/>
            <input className="form-control" name={name} ref={this.registerRef}
                {...this.props.defaultAttrs} {...modelItem.attrs}/>
        </div>
    };

    render() {
        return <React.Fragment>
            {this.props.formModel.map(model => this.renderElement(model))}
            <div className="text-center">
                <button className="btn btn-secondary m-1" onClick={this.props.cancelCallback}>
                    {this.props.cancelText || "Cancel"}
                </button>
                <button className="btn btn-primary m-1" onClick={this.handleSubmit}>
                    {this.props.submitText || "Submit"}
                </button>
            </div>

        </React.Fragment>
    }

}