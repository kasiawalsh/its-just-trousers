const Contact = () => {
    return (
      <form
        action="https://formspree.io/f/yourformid"  // replace with your Formspree endpoint
        method="POST"
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-edusa text-gray-800"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-600">Contact Us</h2>
  
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Write your message here..."
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
  

//   Steps:
// Go to Formspree and create a free account.

// Create a new form and get your form endpoint URL.

// Replace "https://formspree.io/f/yourformid" in the form's action attribute with your form's URL.

// When users submit, Formspree sends the form data to your email.