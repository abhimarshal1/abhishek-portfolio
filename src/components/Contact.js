import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="sep-txt text-center pt-4 pb-5">
                <span>Contact Me</span>
            </div>
            <div className="form-container mb-5">
                <div className="inner-form-container">
                    <form id="contact-form" onSubmit={()=> true}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" id="message" />
                        </div>
                        <button type="submit" disabled className="btn btn-primary submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
