import React, {Component} from "react";

export class CardDetailsRow extends Component {
    handleChanges = (product, event) => {
        this.props.updateCartQuantity(product, event.target.value);
    }
    render() {
        const {cart, removeFromCart, cartPrice} = this.props;
        if (!cart || cart.length === 0) {
            return <tr>
                <td colSpan="5">Your cart is empty</td>
            </tr>
        } else {
            return <React.Fragment>
                {cart.map(item => (
                    <tr>
                        <td>
                            <input type="number" value={item.quantity} onChange={ (ev) => this.handleChanges(item.product, ev)}/>
                        </td>
                        <td>{item.product.name}</td>
                        <td>${item.product.price.toFixed(2)}</td>
                        <td>${(item.quantity * item.product.price).toFixed(2)}</td>
                        <td>
                            <button className="btn btn-sm btn-danger" onClick={ () => removeFromCart(item.product)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <th colSpan="3" className="text-right">Total:</th>
                    <th colSpan="2">${cartPrice.toFixed(2)}</th>
                </tr>
            </React.Fragment>
        }
    }
}