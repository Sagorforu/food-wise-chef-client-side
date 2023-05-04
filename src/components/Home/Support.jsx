import React from "react";
import {
  FaEnvelopeOpenText,
  FaEnvelopeSquare,
  FaHeadset,
  FaRegEnvelopeOpen,
} from "react-icons/fa";

const Support = () => {
  return (
    <div className="lg:pt-5 lg:px-36 px-2">
      <div>
        <h2 className=" mb-4 text-3xl lg:text-5xl text-center font-bold text-[#383838]">
          Get is touch
        </h2>
        <p className="mb-2 lg:mb-16 text-center px-2 lg:px-40">
          The support section on a company's website offers assistance and
          solutions to customers who have questions or issues with their
          products or services. It includes a knowledge base, FAQs, tutorials,
          troubleshooting guides, and contact information for customer support.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
        <div className="mx-auto bg-orange-100 rounded-2xl bg-opacity-30 w-full text-[#e05f09] p-4 lg:p-10">
          <p>
            <FaEnvelopeOpenText className="lg:font-bold font-semibold text-lg lg:text-2xl" />
          </p>
          <h3 className="lg:font-bold font-semibold text-lg lg:text-2xl mt-4">
            Email Support
          </h3>
          <p className="mt-3 lg:font-medium text-[#383838]">
            Efficient Email Support for Quick Resolutions: Our experienced team
            is dedicated to providing timely and effective solutions to your
            queries through personalized email support, ensuring a seamless
            customer experience.
          </p>
          <div className="mt-3 lg:font-medium text-[#383838]">
            <li>Customer support: support@yourdomain.com</li>
            <li>Redactions: hello@yourdomain.com</li>
          </div>
          <button className="btn btn-outline text-[#e05f09] hover:text-[#f56f16] mt-4 hover:font-bold">Chat Now</button>
        </div>
        <div className="mx-auto bg-orange-100 bg-opacity-30 rounded-2xl w-full text-[#e05f09] p-4 lg:p-10">
          <p>
            <FaHeadset className="lg:font-bold font-semibold text-lg lg:text-2xl" />
          </p>
          <h3 className="lg:font-bold font-semibold text-lg lg:text-2xl mt-4">
            Call Center
          </h3>
          <p className="mt-3 lg:font-medium text-[#383838]">
            Our professional call center team is equipped with the latest
            technology and industry knowledge to deliver exceptional customer
            service, resolving issues and queries with utmost efficiency and
            care.
          </p>
          <div className="mt-3 lg:font-medium text-[#383838]">
            <li>Customer service: +880 0000000000</li>
            <li>Advertise: +880 0114151125</li>
          </div>
          <button className="btn btn-outline text-[#e05f09] hover:text-[#f56f16] mt-4 hover:font-bold">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
