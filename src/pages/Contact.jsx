import "../assets/styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact-container container-fluid">
            <h2>Contact Me</h2>
            <form action="https://formsubmit.co/3380ff4b47603584c420359ddf77932d" method="POST">
                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input type="text" id="surname" name="surname" placeholder="Surname" className="form-control"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Phone Number</label>
                    <input type="tel" id="number" name="number" placeholder="Phone Number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" placeholder="Your message..." className="form-control" rows="5" required></textarea>
                </div>
                <input type="hidden" name="_subject" value="New submission!"/>
                <input type="hidden" name="_captcha" value="false"/>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;