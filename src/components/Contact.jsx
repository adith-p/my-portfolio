const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Get In Touch</h2>

            <div className="contact-info">
                <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

                <ul>
                    <li className="py-2">
                        <strong>Address:</strong><br />
                        Prasadam, Parakulam, Kannadi, Palakkad, kannadi PO, Kerala
                    </li>
                    <li className="py-1">
                        <strong>Email:</strong> adithprakash008@gmail.com
                    </li>
                    <li className="py-1">
                        <strong>Phone:</strong> +91 88488 62349
                    </li>
                </ul>
            </div>

            <div className="button-container"> {/* Added a new container for buttons */}
                {/* Added a common class for styling */}
                <a href="mailto:adithprakash008@gmail.com" className="cta-btn btn">
                    Say Hello
                </a>
                <a
                    href="https://drive.google.com/file/d/1dJysEaCfNhrp56i5Cbvadu7tCu66RInz/view?usp=sharing"
                    target="_blank"
                    className="cta-btn btn"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Contact;

