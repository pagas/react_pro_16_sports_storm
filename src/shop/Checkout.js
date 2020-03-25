import React, {Component} from "react";
import {ValidatedForm} from "./forms/ValidatedForm";

export class Checkout extends Component {
    constructor(props) {
        super(props);
        this.defaultAttrs = {type: "text", required: true};
        this.formModel = [
            {label: "Name"},
            {label: "Email", attrs: {type: "email"}},
            {label: "Address"},
            {label: "City"},
            {label: "Zip/Post Code", name: "zip"},
            {label: "Country"},
        ];
    }

    handleSubmit = (formData) => {
        const {cart, placeOrder, clearCart, history} = this.props;
        const order = {
            ...formData,
            products: cart.map(item => ({quantity: item.quantity, product_id: item.product.id}))
        };
        placeOrder(order);
        clearCart();
        history.push('/shop/thanks');
    };

    handleCancel = () => {
        this.props.history.push('/shop/cart');
    };

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div class="col bg-dark text-white">
                    <div className="navbar-brand">
                        SPORTS STORE
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <ValidatedForm formModel={this.formModel}
                                   defaultAttrs={this.defaultAttrs}
                                   submitCallback={this.handleSubmit}
                                   cancelCallback={this.handleCancel}
                                   submitText="Place Order"
                                   cancelText="Return to Cart"
                    />
                </div>
            </div>
        </div>
    }
}

