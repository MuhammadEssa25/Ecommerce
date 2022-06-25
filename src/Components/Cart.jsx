import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { delCart } from '../redux/action';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
export const Cart = () => {
    var total = 0;
    var title = '';
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()
    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const handleToken = async (token) => {
        const product = { name: title, price: total }
        const response = await axios.post("http://localhost:8080/checkout", {
            product,
            token
        })
        const { status } = response.data
        if (status == 'success') {
            toast.success('You Have Paid Successfully!')
        }
    }
    const itemList = (item) => {
        title = title + item.title
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
    const cartItems = (cartItem) => {
        return(
            <div className='row'>
                <div className="col-md-12">
                <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                    <div className="container py-4">
                        <button onClick={()=> handleClose(cartItem)} className="btn-close float-end" aria-label='close'></button>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} width="180px" height="200px"/>
                            </div>
                            <div className="col-md-4">
                                <h3>{cartItem.title}</h3>
                                <p className='lead fw-bold'>${cartItem.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    const emptyCart = () => {
        return(
            <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart Is Empty</h3>
                </div>
                </div>
                </div>
        )
    }
    const button = () => {
        return(
            <div className="container">
                <div className="row">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-secondary">Your cart</span>
                            <span className="badge bg-secondary rounded-pill">{state.length}</span>
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
                            name='Ecommerce'
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
        )
    }
  return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
  )
}
export default Cart;