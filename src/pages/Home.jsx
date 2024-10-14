import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
    return (
        <div>
            <section id="home" className="d-flex align-items-center text-light bg-dark">
                <div className="container text-center">
                    <h1>Hi I'm <b>Shepherd</b></h1>
                    <h4>A Web Developer</h4>
                    <button className="btn btn-outline-success mt-3" href="#contact"><a href="#contact" className="text-white">Contact Me</a></button>
                    <div className="social-icons mt-4 row-md">
                        <a href="https://wa.link/0io74s" className="col"><img src="/icons/icons8-whatsapp.svg" alt="WhatsApp" className="img-fluid"/></a>
                        <a href="https://www.instagram.com/kodeshapiro/" className="col"><img src="/icons/icons8-instagram.svg" alt="Instagram" className="img-fluid"/></a>
                        <a href="https://www.linkedin.com/in/shepherd-mhlanga-520652213/" className="col"><img src="/icons/icons8-linkedin.svg" alt="LinkedIn" className="img-fluid"/></a>
                    </div>
                </div>

                <div className="container mt-4">
                    <img src="/images/home-image.jpg" alt="Hero image" className="img-fluid rounded"/>
                </div>
            </section>

            <section id="about" className="container my-5">
                <h2 className="text-center mb-4">About Me</h2>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <img src="/images/about-image.jpg" alt="About me image" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-6">
                        <p>Hello! I'm Shepherd, a passionate and dedicated web developer based in Johannesburg. With a strong background in creating visually appealing and highly functional websites, I specialize in both frontend and backend development. My journey into web development started from a love for technology and a desire to bring ideas to life through code.</p>
                        <p>As a web developer, I have honed my skills in HTML5, CSS3, JavaScript, and various frontend frameworks like React. On the backend, I'm proficient in Node.js with experience in Firebase for database management. My toolkit also includes design tools like Figma, and I'm adept at using Git and GitHub for version control, ensuring smooth collaboration and efficient project management.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3 className="text-center mb-4">Skills & Technologies</h3>
                    <div className="col-md-4">
                        <h4>Frontend</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3 + Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Backend</h4>
                        <ul>
                            <li>Node.js</li>
                            <li>Mongo DB</li>
                            <li>Firebase</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Tools</h4>
                        <ul>
                            <li>Figma</li>
                            <li>Git and Github</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="services" className="bg-dark text-light py-5">
                <h2 className="text-center mb-5">Services</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            {/* <img src="#" alt="Web Design"/> */}
                            <h4>Web Design</h4>
                            <p>I craft visually appealing and user-friendly websites that are optimized for performance and responsiveness across all devices.</p> 
                        </div>

                        <div className="col-md-3 text-center">
                            {/* <img src="#" alt="Custom website"/> */}
                            <h4>Customizable Websites</h4>
                            <p>Get a website tailored to your unique needs and brand identity. I offer flexible solutions that can be customized to grow with your business.</p>
                        </div>

                        <div className="col-md-3 text-center">
                            {/* <img src="#" alt="Ecommerce"/> */}
                            <h4>Ecommerce Solutions</h4>
                            <p>Launch your online store with confidence. I provide end-to-end ecommerce development, from product catalogs to secure payment gateways.</p>
                        </div>

                        <div className="col-md-3 text-center">
                            {/* <img src="#" alt="Website maintainence"/> */}
                            <h4>Website Maintenance & Updates</h4>
                            <p>Keep your website running smoothly with ongoing maintenance, updates, and technical support to ensure optimal performance and security.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="py-5">
                <h2 className="text-center mb-5">Experience</h2>
                <div className="container">
                    <div className="text-center">
                        <img className="company-logo img-fluid img-thumbnail mb-3" src="/icons/apple-touch-icon.png" alt="Company logo"/>
                        <h3 className="company-name">Swift TruckFix Solutions</h3>
                        <a className="company-site" href="https://swifttruckfixsolutions.com/" target="_blank" rel="noopener noreferrer">Visit site</a>
                    </div>
                </div>
            </section>

            <section id="projects">
                <Projects />
            </section>

            <section id="contact" className="bg-dark text-light py-5">
                <Contact />
            </section>
        </div>
    );
}

export default Home;