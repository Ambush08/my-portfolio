import { FaUser, FaEnvelope, FaArrowRight  } from "react-icons/fa";


const Contacts = () => {
  return (
    <section
      id="contacts"
      className="bg-background w-full px-8 py-10 text-heading min-h-screen"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto my-10 space-y-10">
        <div className="flex flex-col items-center space-y-5 pt-8">
          <div className="text-3xl font-bold lg:text-5xl">
            <h2>
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
          </div>
          <div className="text-center opacity-80 tracking-wide">
            <p>
              From strategy execution, I craft digital solutions that move your
              business forward
            </p>
          </div>
        </div>

        <div className="flex items-center w-full sm:w-[75%] lg:w-[65%]">
          <form action="" className="flex flex-col items-start justify-center space-y-6 w-full">
            <div className="flex flex-col items-center gap-6 lg:flex-row w-full">
              <div className="flex flex-col space-y-4 w-full">
                <label htmlFor="">Your name</label>
                <div className="flex items-center justify-start gap-4 border-1 border-gray-500 rounded-lg px-4 py-1">
                  <FaUser size={24} className="text-gray-500"/>
                  <input className="border-none focus:outline-none"
                    type="text"
                    placeholder="Enter your Name"
                    name="name"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <label htmlFor="">Your Email</label>
                <div className="flex items-center justify-start gap-4 border-1 border-gray-500 rounded-lg px-4 py-1">
                  <FaEnvelope size={20} className="text-gray-500"/>
                  <input className="border-none focus:outline-none"
                    type="text"
                    placeholder="Enter your Email"
                    name="email"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full">
              <label htmlFor="">Message</label>
              <div className="flex items-center justify-start gap-4 border-1 border-gray-500 rounded-lg px-4 py-1 h-40 relative">
                <input className="border-none focus:outline-none absolute top-4"
                type="message" placeholder="Enter your message" name="message" />
              </div>
            </div>

            <button className="flex items-center font-semibold gap-1 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent border-primary rounded-lg border-1 py-2 px-2 justify-center">
              Submit 
              <FaArrowRight className="text-primary" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
