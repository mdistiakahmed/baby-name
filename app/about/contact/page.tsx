import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          We would love to hear from you! Whether you have a question, feedback,
          or need assistance, feel free to reach out to us. We are committed to
          providing excellent service and ensuring your experience with us is
          seamless.
        </p>
        <p className="mb-6">
          You can contact us through the addresses below or send us an email for
          any inquiries.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Our Office Locations
            </h2>
            <p className="mb-4 text-gray-700">
              We have offices in both Bangladesh and Singapore. Our team is
              available across these locations to assist you with any queries or
              concerns.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bangladesh Office</h3>
              <p className="text-gray-700">
                <strong>Address:</strong> Street 12/1, House No: 26, Kawla
                Bazar, Dhaka - 1229, Bangladesh
              </p>
              <p className="text-gray-700 mt-2">
                Our Bangladesh office is strategically located in Dhaka, the
                capital city, providing easy access for both local and
                international clients. Feel free to drop by or reach out to us
                for support and services in Bangladesh.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Singapore Office</h3>
              <p className="text-gray-700">
                <strong>Address:</strong> 24 Sunfu Road, 570310, Singapore
              </p>
              <p className="text-gray-700 mt-2">
                Our Singapore office is located in the heart of the city,
                serving as a hub for clients across Southeast Asia. We welcome
                inquiries from businesses and individuals alike, offering the
                best in customer service and support.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <p className="text-gray-700 mb-4">
              We are a global company with a dedicated team working across our
              offices in Bangladesh and Singapore. We offer expert advice,
              innovative solutions, and responsive customer service. Whether
              you’re in Dhaka, Singapore, or anywhere else, we’re here to help.
            </p>
            <p className="text-gray-700">
              Feel free to contact us by email or visit us at any of our
              offices. We look forward to serving you and providing top-notch
              support for all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
