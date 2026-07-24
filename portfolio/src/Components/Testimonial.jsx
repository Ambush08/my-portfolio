import ClientTestimonies from './ClientTestimonies';
import {testimonies} from '../Backend/data';


const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-background-two px-8 py-10 w-full min-h-screen">
      <div className="flex flex-col items-center justify-center gap-5 max-w-6xl mx-auto my-10 py-8 text-heading">
        <div className="flex flex-col items-center justify-center space-y-5 ">
          <div className="text-primary border-b-2 border-b-primary pb-2 font-semibold">
            <h2>TESTIMONIALS</h2>
          </div>
          <div className="text-4xl font-extrabold lg:text-6xl">
            <h1>
              What{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Clients{" "}
              </span>
              Say
            </h1>
          </div>
          <div className="text-center opacity-80 lg:text-lg">
            <p>
              Here's what some of my amazing clients have to say about working
              with me and the results we achieved together.
            </p>
          </div>
        </div>

        <ClientTestimonies testimonies={testimonies}/>
      </div>
    </section>
  );
};

export default Testimonial;
