const Contact = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center border border-gray-300">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
        <p className="text-gray-800 mb-4">
          You can contact Liam's family directly by sending an email to:
        </p>
        <a
          href="mailto:kasia_walsh@yahoo.co.uk?subject=I can offer help&body=Hello, I would like to..."
          className="text-green-600 font-semibold underline hover:text-green-800"
        >
          itsjusttrousers@gmail.com
        </a>
        <p className="text-gray-500 mt-4">
          If the email link doesn't work, please copy and paste the email address into your email client.
        </p>
      </div>
    );
  };
  
  export default Contact;