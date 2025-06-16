const Contact = () => {
  return (
    <form
      action="https://formsubmit.co/kasia_walsh@yahoo.co.uk"
      method="POST"
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-edusa text-gray-800 border-2 border-gray-300 mt-2"
    >
      <input type="hidden" name="_captcha" value="false" />{" "}
      {/* Disable captcha, if you want */}
      <input
        type="hidden"
        name="_next"
        value="/thank-you"
      />{" "}
      {/* Redirect after submit */}
      <input
        type="hidden"
        name="_subject"
        value="New contact form submission!"
      />{" "}
      {/* Custom email subject */}
      <h2 className="text-2xl font-bold mb-4 text-green-600">Contact Us</h2>
      <label htmlFor="email" className="block mb-2 font-semibold">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="font-sans w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="you@example.com"
      />
      <label htmlFor="message" className="block mb-2 font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        maxLength={500}
        className="font-sans w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Write your message here (max 500 characters)..."
      />
      <button
        type="submit"
        className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;