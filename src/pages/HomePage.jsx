import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BookOpen, Award, ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import Logo from '../components/Logo';
import homeImage from '../assets/home.jpg';

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: homeImage,
      alt: 'SESWA Annual Picnic 2024',
      title: 'Annual Picnic 2024',
      description: 'Community gathering at Eco Park with 200+ participants',
      category: 'events'
    },
    {
      id: 2,
      src: homeImage,
      alt: 'Freshers Welcome Ceremony',
      title: 'Freshers Welcome 2024',
      description: 'Welcoming new engineering students to SESWA family',
      category: 'events'
    },
    {
      id: 3,
      src: homeImage,
      alt: 'WBJEE Counselling Session',
      title: 'WBJEE Guidance Session',
      description: 'Free counselling for engineering entrance exams',
      category: 'academic'
    },
    {
      id: 4,
      src: homeImage,
      alt: 'Cultural Performance',
      title: 'Santal Cultural Program',
      description: 'Traditional dance and music performances',
      category: 'cultural'
    },
    {
      id: 5,
      src: homeImage,
      alt: 'Alumni Meet 2024',
      title: 'Alumni Networking Event',
      description: 'Successful alumni sharing experiences with students',
      category: 'alumni'
    },
    {
      id: 6,
      src: homeImage,
      alt: 'Scholarship Distribution',
      title: 'Scholarship Award Ceremony',
      description: 'Recognizing academic excellence and supporting students',
      category: 'awards'
    },
    {
      id: 7,
      src: homeImage,
      alt: 'Technical Workshop',
      title: 'Technical Skills Workshop',
      description: 'Industry experts conducting hands-on training sessions',
      category: 'academic'
    },
    {
      id: 8,
      src: homeImage,
      alt: 'Community Service',
      title: 'Community Outreach Program',
      description: 'SESWA members contributing to social causes',
      category: 'community'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Single Platform Unity',
      description: 'Bringing all Santal Engineering Students of West Bengal together on one platform since 2003.'
    },
    {
      icon: Calendar,
      title: 'Annual Events',
      description: 'Annual Picnic in January and Freshers Welcome in October for community bonding and networking.'
    },
    {
      icon: BookOpen,
      title: 'Academic Support',
      description: 'WBJEE counselling, scholarship information, and educational resources for student success.'
    },
    {
      icon: Award,
      title: 'Recognition & Awards',
      description: 'Awards for top 3 rank holders in WBJEE, IITJEE and AIEEE to encourage excellence.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '14', label: 'Partner Colleges' },
    { number: '100+', label: 'Events Organized' },
    { number: '200+', label: 'Success Stories' }
  ];

  // Gallery navigation functions
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                Santal Engineering Students' Welfare Association - W.B.
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Established in 2003, bringing all Santal Engineering Students of West Bengal together.
                Supporting academic excellence while preserving our rich cultural heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/join-us"
                  className="bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
                >
                  Join Our Community
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={homeImage}
                  alt="SESWA Community"
                  className="rounded-2xl shadow-2xl w-full max-w-md h-80 object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/20 rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <Logo size="sm" showText={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting Santal engineering students through education, community bonding, and cultural preservation since 2003.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of the legacy that started in 2003. Join our community of Santal engineering students across West Bengal.
          </p>
          <Link
            to="/join-us"
            className="inline-flex items-center bg-white text-primary-700 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Join Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest events, announcements, and community news.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for latest events/news */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Event
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Upcoming Technical Workshop
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for an exciting workshop on modern web development technologies.
              </p>
              <Link
                to="/events"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Opportunity
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                New Internship Openings
              </h3>
              <p className="text-gray-600 mb-4">
                Explore exciting internship opportunities with our partner companies.
              </p>
              <Link
                to="/resources"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                View Opportunities
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Community
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                New Members Welcome
              </h3>
              <p className="text-gray-600 mb-4">
                We're excited to welcome 50+ new members to our community this month.
              </p>
              <Link
                to="/members"
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Meet Members
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Community Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments from our events, celebrations, and community activities.
              See the vibrant spirit of SESWA in action.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs opacity-90">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded-full capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="text-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full capitalize">
                  {selectedImage.category}
                </span>
              </div>

              {/* Image Counter */}
              <div className="mt-4 text-gray-400 text-sm">
                {currentImageIndex + 1} of {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
