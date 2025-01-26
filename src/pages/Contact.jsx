import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-6 text-center">
      <h1 className="text-3xl font-bold">Get in Touch</h1>
      <p className="mt-4 text-lg">We'd love to hear from you!</p>
      <form className="mt-10 max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
          rows="5"
        ></textarea>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
