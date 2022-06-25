import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const CartBtn = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <>
      <NavLink to='/cart' className='btn btn-outline-secondary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span> Cart ({state.length})
      </NavLink>
    </>
  )
}

export default CartBtn;