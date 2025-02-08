import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="h-32"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Headshot Section */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
                alt="Photographer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-light">Your Name</h2>
              <p className="text-gray-600">Professional Photographer</p>
            </div>
          </div>

          {/* Biography Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light mb-6">About Me</h1>
              <div className="prose max-w-none space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Welcome to my world of photography. With over [X] years of experience
                  capturing life's most precious moments, I've developed a unique style
                  that combines artistic vision with technical expertise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey in photography began [your story here]. Since then,
                  I've had the privilege of working with amazing clients and capturing
                  countless memorable moments. My work focuses on [your specialties],
                  and I'm passionate about [what drives you].
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not behind the camera, you can find me [personal interests
                  or hobbies]. I believe that these experiences enhance my
                  photography by [how it influences your work].
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4">Expertise</h2>
              <ul className="list-none space-y-2">
                <li className="text-gray-600">• Landscape Photography</li>
                <li className="text-gray-600">• Portrait Photography</li>
                <li className="text-gray-600">• Event Photography</li>
                <li className="text-gray-600">• Fine Art Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;