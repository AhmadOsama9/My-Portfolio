const Contact = () => (
  <section id="contact" className="py-20 bg-neutral-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-neutral-100 text-center mb-12">
        Contact Me
      </h2>
      <div className="text-center">
        <p className="text-lg text-neutral-300 mb-8">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <a
          href="mailto:ahmedosamaa975@gmail.com"
          className="bg-primary-400 text-neutral-900 px-6 py-3 rounded-full font-semibold hover:bg-primary-500 transition-colors"
        >
          Send an Email
        </a>
      </div>
    </div>
  </section>
);

export default Contact;