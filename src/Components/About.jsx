import React from 'react'
import { NavLink } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-dark fw-bold mb-4'>About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, numquam in.
                             Facilis, voluptatibus error asperiores facere reprehenderit, iste vel delectus
                              neque ex ea, nulla minima possimus architecto! Dolore qui laudantium quo totam e
                              ligendi, a eum voluptatum doloribus quae voluptas nihil aut earum distinctio dolore
                              s. Porro ad doloremque enim, repudiandae molestias optio deleniti quia totam explicab
                              o distinctio perspiciatis eos id aspernatur consectetur voluptatibus quis tenetur labore ducim
                              us assumenda necessitatibus veniam quam vero! Fugiat debitis a nisi cum eius! Maiores quaerat ipsum,
                               fuga autem similique ab ratione sed odit excepturi repudiandae perferendis vel esse vitae nobis. Ne
                               que atque mollitia tempore quibusdam optio.
                        </p>
                        <NavLink to='/contact' className="btn btn-outline-secondary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src='/assets/about.jpg' alt='About Us' height='400px' width='400px'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;