import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BookOpen, Award } from 'lucide-react';
import Logo from '../components/Logo';
import homeImage from '../assets/home.jpg';

const HomePage = () => {
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
    { number: '50+', label: 'Partner Colleges' },
    { number: '100+', label: 'Events Organized' },
    { number: '200+', label: 'Success Stories' }
  ];

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
    </div>
  );
};

export default HomePage;
