import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
export const Checkout = (props) => {
    const state = useSelector((state) => state.handleCart)
    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        )
    }
    const handleToken = async (token) => {
        const product = { name: 'All products', price: total }
        const response = await axios.post("http://localhost:8080/checkout", {
            product,
            token
        })
        console.log(response);
        const { status } = response.data
        if (status == 'success') {
            toast.success('You Have Paid Successfully!')
        }
    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Contact Number</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">+1</span>
                                        <input type="number" className="form-control" id="contact_number" placeholder="Contact Number" required="" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="">
                                        <option>Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                        <option >Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                        <hr className="my-4" />
                        <StripeCheckout
                            name='All Products'
                            billingAddres
                            shippingAddress
                            description={`Your Total Is Rs.  ${total}`}
                            amount={total * 100}
                            token={handleToken}
                            stripeKey="pk_test_51LC0wcDIGVZEwjbiSJ8z8q45gSLn5zSF6PNsqZsYduGc5Rn1VFdTq5pi027BhiRtFLJAaWp0fggufV26D7to4T9G00Lv1hD3pe">
                        </StripeCheckout>
                        <div><Toaster
                            position="bottom-center"
                            reverseOrder={false}
                        /></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout;  