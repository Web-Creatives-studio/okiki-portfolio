export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's <span className="text-accent">Connect</span></h2>
        <p className="text-xl text-text-muted max-w-xl mx-auto mb-12">
          Interested in starting a project, automating your workflows, or building an intelligent chatbot? Fill out the form or email me directly at <a href="mailto:okikiola.olodude@email.com" className="text-accent font-semibold hover:underline">okikiola.olodude@email.com</a>.
        </p>

        <form className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" required className="w-full bg-primary-darker border border-gray-700 text-text p-4 rounded-xl focus:ring-2 focus:ring-accent outline-none" />
          <input type="email" placeholder="Your Email" required className="w-full bg-primary-darker border border-gray-700 text-text p-4 rounded-xl focus:ring-2 focus:ring-accent outline-none" />
          <textarea placeholder="Your Message..." rows="6" required className="w-full bg-primary-darker border border-gray-700 text-text p-4 rounded-xl focus:ring-2 focus:ring-accent outline-none"></textarea>
          <button type="submit" className="w-full bg-accent text-primary-darker font-bold py-4 rounded-xl hover:bg-opacity-80 transition duration-300 text-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}