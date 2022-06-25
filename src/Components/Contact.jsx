import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
export const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src='/assets/contact.jpg' alt='Contact Us' width='400px' height='400px' />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='How we can Help you?'></textarea>
                            </div>
                            <button onClick={send=> {toast.success('Message Send Successfully!')}} className='btn btn-outline-secondary'>Send Message</button>
                            <div><Toaster
                            position="bottom-right"
                            reverseOrder={true}
                        /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact  