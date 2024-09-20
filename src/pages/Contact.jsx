import React from "react";

const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };
    return (
        <section className="flex flex-col justify-center items-center mt-8 mb-32 text-white p-6">
            <h1 className="my-7 text-5xl font-bold text-white">Contact Us</h1>
            <form
                action={handleFormSubmit} // make sure we are using react 19.0.0 or higher
                className="flex flex-col gap-6 bg-[#2d2d2d] p-8 rounded-lg shadow-lg max-w-lg w-full"
            >
                <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="Enter your name"
                    name="username"
                    className="p-4 focus:bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-white text-black"
                />
                <input
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="Enter your email"
                    name="email"
                    className="p-4 focus:bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-white text-black"
                />
                <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Write your message..."
                    required
                    className="p-4 focus:bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-white text-black"
                ></textarea>
                <button
                    type="submit"
                    className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
