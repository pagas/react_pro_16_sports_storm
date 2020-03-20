import React, {Component} from "react";
import {Link} from "react-router-dom";
import {CardDetailsRow} from "./CardDetailsRow";

export class CartDetails extends Component {
    getLinkClass = () => {
        const {cardItems} = this.props;
        return `btn btn-secondary m-1 ${cardItems === 0 ? "disabled" : ""}`;
    }

    render() {
        return <div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <CardDetailsRow {...this.props}>
                    </CardDetailsRow>
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">Continue Shopping</Link>
                <Link className={this.getLinkClass()} to="/shop/checkout">Checkout</Link>
            </div>
        </div>
    }
}