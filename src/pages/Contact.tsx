import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form Submitted:", data);
    alert("Message sent successfully! ✅");
    reset(); // Clears the form after submission 
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="h-32"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let’s discuss your needs and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-600">contact@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-600">Boston, MA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
