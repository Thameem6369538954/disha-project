import React, { useState } from "react";
// import { BiHappyHeartEyes } from "react-icons/bi";
import map from "../Images/map.jpg"
import MM from "../Images/MM.png"
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (could be an API call)
    console.log(formData);
    setSubmitted(true); // Set submitted state to true after submission
  };

  return (

    <div className="bg-gradient-to-b from-white">

    <section
    style={{backgroundImage:`url(${map})`}}
    className="  py-16 px-4  font-[poppins] bg-center bg-cover relative" id="con">
        <div className="flex flex-col items-center justify-around">
                              <h1 className="font-[Wonder] text-center  text-3xl sm:text-4xl md:text-5xl lg:text-7xl py-5 text-white">
                              Contact with us
                              </h1>
                        <img src={MM} className="w-70" alt="" />
                      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">

        {/* Left Side: Heading & Paragraph */}
        <div className="mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
          {/* <h2 className="text-3xl font-bold text-[#9f0712] mb-4">Why We Different with Other?</h2> */}
          <p className="text-md text-black p-5 bg-white rounded-xl ">
          We assure to standby the quality of our products with a year round supply in combination with skilled labour and technology. Aged rice is a healthier option.The process of ageing brings about structural changes along with enhanced flavor and texture. Our year-round supply ensures, we empower our people, farmers, and the community who help us grow.We leverage world-class rice processing technologies to ensure customer satisfaction and timely delivery.
          </p>
          <div class="grid grid-cols-2 gap-6 m-2">
  <div class="bg-white p-6 rounded-lg text-center shadow-lg">
    <h3 class="text-lg font-semibold mb-3 text-[#5fcf80]">245</h3>
    <p class="text-sm mb-3 text-gray-700">Happy Customers</p>
    
   </div>
  <div class="bg-white p-6 rounded-lg text-center shadow-lg">
    <h3 class="text-lg font-semibold mb-3 text-[#5fcf80]">358</h3>
    <p class="text-sm mb-3 text-gray-700">Project Clear</p>
    
  </div>
  <div class="bg-white p-6 rounded-lg text-center shadow-lg">
    <h3 class="text-lg font-semibold mb-3 text-[#5fcf80]">78</h3>
    <p class="text-sm mb-3 text-gray-700">Winning Awards</p>
    
  </div>
  <div class="bg-white p-6 rounded-lg text-center shadow-lg">
    <h3 class="text-lg font-semibold mb-3 text-[#5fcf80]">128</h3>
    <p class="text-sm mb-3 text-gray-700">Company Member</p>
    
  </div>
</div>

        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/3 w-full">
          {submitted ? (
            // Show this after submission
            <div className="bg-white p-8 rounded-lg shadow-lg text-center text-[#5fcf80]">
              <h3 className="text-xl font-semibold">Thank you for submitting!</h3>
              <p className="mt-2">We have received your message and will get back to you soon.</p>
            </div>
          ) : (
            // Show the form if not submitted
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5fcf80] text-white py-3 rounded-lg mt-4 hover:bg-[#4CAF50] transition duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default GetInTouch;
