import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Camera, Clock, MapPin } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  location?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Behind the Scenes: Mountain Sunrise Shoot',
    excerpt: 'An early morning adventure capturing the perfect sunrise shot in the Rocky Mountains. Learn about the preparation, challenges, and techniques used to create this stunning image.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    category: 'Behind the Scenes',
    location: 'Rocky Mountains, Colorado'
  },
  {
    id: 2,
    title: 'The Art of Long Exposure Photography',
    excerpt: 'Dive into my creative process for capturing stunning long exposure shots. From equipment selection to post-processing techniques.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d',
    category: 'Creative Process'
  },
  {
    id: 3,
    title: 'Essential Gear in My Camera Bag',
    excerpt: 'A detailed look at the photography equipment I use daily and why each piece is crucial for my work.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848',
    category: 'Equipment'
  }
];

function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-black">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="h-32"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">Behind the Lens</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the stories, techniques, and creative process behind my photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.date}</span>
                  </span>
                  {post.location && (
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{post.location}</span>
                    </span>
                  )}
                </div>
                <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                  {post.category}
                </span>
                <h2 className="text-2xl font-light group-hover:text-gray-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-black hover:text-gray-600 transition-colors duration-300 inline-flex items-center space-x-2">
                  <span>Read More</span>
                  <span className="text-sm">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;