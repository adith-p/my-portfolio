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

            <a href="mailto:adithprakash008@gmail.com" className="cta-btn">
                Say Hello
            </a>
        </div>
    );
};

export default Contact;

