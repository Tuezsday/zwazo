import React, { useRef, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { PhotoGallery } from "../components/PhotoGallery";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const portfolioRef = useRef<HTMLElement | null>(null); // Ref for the portfolio section (gurl wut lol)

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navigation */}
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-center">
            Life of Levi
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Through the lens of imagination and reality
          </p>
          <button
            className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 text-lg"
            onClick={scrollToPortfolio} // Corrected function name babes
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Portfolio Section */}
      <section ref={portfolioRef} id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Portfolio</h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
