function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="contact-hero">
        <h1>Let's Grow Together</h1>
        <p>
          Have a question about our plants, inventory, or delivery? Send us a message and we’ll
          help you find the perfect greenery for your space.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Contact details</h2>
          <p>Our nursery is happy to answer your questions and support your plant journey.</p>
          <ul>
            <li>Email: hello@greenrootsnursery.com</li>
            <li>Phone: (555) 782-4499</li>
            <li>Hours: Mon–Fri, 9am–6pm</li>
          </ul>
        </div>

        <form className="contact-form">
          <label>
            Your name
            <input type="text" placeholder="Jane Doe" />
          </label>

          <label>
            Email address
            <input type="email" placeholder="jane@example.com" />
          </label>

          <label>
            Message
            <textarea rows="6" placeholder="Tell us what you're looking for..."></textarea>
          </label>

          <button type="button">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
