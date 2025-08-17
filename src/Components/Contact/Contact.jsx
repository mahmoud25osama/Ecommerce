import { Helmet } from 'react-helmet';
import heroImg from '../../assets/img/maincontact.6038b3c3.webp';

export default function Contact() {
  return (
    <>
      <Helmet><title>Contact Us</title></Helmet>
      <div className="bg-white pb-5">
        {/* Hero Section */}
        <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center mb-12">
          <img src={heroImg} alt="Contact Banner" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium tracking-wide">We're here to help you shine</p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="container mx-auto flex flex-col md:flex-row gap-12 mb-16 px-4">
          <div className="md:w-1/2 w-full flex flex-col justify-center mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-4">Have a question, feedback, or just want to say hello? Our team is always happy to connect with you. Reach out and we'll get back to you as soon as possible!</p>
            <ul className="text-gray-700 space-y-2">
              <li><i className="fas fa-envelope text-blue-500 mr-2"></i> support@yourbrand.com</li>
              <li><i className="fas fa-phone text-blue-500 mr-2"></i> +1 234 567 890</li>
              <li><i className="fas fa-map-marker-alt text-blue-500 mr-2"></i> 123 Fashion Ave, New York, NY</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg transition">Send Message</button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mb-20">
          <a href="/about" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-8 py-3 rounded-lg shadow transition text-lg border border-blue-200">Learn More About Us</a>
        </div>
      </div>
    </>
  );
}
