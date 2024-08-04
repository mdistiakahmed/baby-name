import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          We would love to hear from you! Whether you have a question, feedback,
          or simply want to share your name, feel free to reach out to us.
        </p>

        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              id="message"
              name="message"
              rows={5}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
