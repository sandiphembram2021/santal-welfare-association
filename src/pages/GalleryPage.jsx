import React, { useState } from 'react';
import { 
  Camera, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar,
  MapPin,
  Users,
  Download,
  Share2
} from 'lucide-react';
import homeImage from '../assets/home.jpg';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extended gallery data
  const galleryImages = [
    {
      id: 1,
      src: homeImage,
      alt: 'SESWA Annual Picnic 2024',
      title: 'Annual Picnic 2024',
      description: 'Community gathering at Eco Park with 200+ participants celebrating our cultural heritage',
      category: 'events',
      date: '2024-01-26',
      location: 'Eco Park, New Town',
      photographer: 'SESWA Media Team'
    },
    {
      id: 2,
      src: homeImage,
      alt: 'Freshers Welcome Ceremony',
      title: 'Freshers Welcome 2024',
      description: 'Welcoming new engineering students to SESWA family with traditional ceremonies',
      category: 'events',
      date: '2024-08-15',
      location: 'IIEST Shibpur',
      photographer: 'Student Committee'
    },
    {
      id: 3,
      src: homeImage,
      alt: 'WBJEE Counselling Session',
      title: 'WBJEE Guidance Session',
      description: 'Free counselling for engineering entrance exams with expert guidance',
      category: 'academic',
      date: '2024-06-20',
      location: 'Community Hall',
      photographer: 'Academic Team'
    },
    {
      id: 4,
      src: homeImage,
      alt: 'Cultural Performance',
      title: 'Santal Cultural Program',
      description: 'Traditional dance and music performances showcasing our rich heritage',
      category: 'cultural',
      date: '2024-03-15',
      location: 'Cultural Center',
      photographer: 'Cultural Committee'
    },
    {
      id: 5,
      src: homeImage,
      alt: 'Alumni Meet 2024',
      title: 'Alumni Networking Event',
      description: 'Successful alumni sharing experiences and career guidance with current students',
      category: 'alumni',
      date: '2024-02-10',
      location: 'Hotel Hindusthan',
      photographer: 'Alumni Relations'
    },
    {
      id: 6,
      src: homeImage,
      alt: 'Scholarship Distribution',
      title: 'Scholarship Award Ceremony',
      description: 'Recognizing academic excellence and supporting deserving students',
      category: 'awards',
      date: '2024-04-05',
      location: 'Auditorium',
      photographer: 'Official Photographer'
    },
    {
      id: 7,
      src: homeImage,
      alt: 'Technical Workshop',
      title: 'Technical Skills Workshop',
      description: 'Industry experts conducting hands-on training sessions on latest technologies',
      category: 'academic',
      date: '2024-05-12',
      location: 'Tech Lab',
      photographer: 'Workshop Team'
    },
    {
      id: 8,
      src: homeImage,
      alt: 'Community Service',
      title: 'Community Outreach Program',
      description: 'SESWA members contributing to social causes and community development',
      category: 'community',
      date: '2024-07-08',
      location: 'Rural Areas',
      photographer: 'Volunteer Team'
    },
    {
      id: 9,
      src: homeImage,
      alt: 'Sports Tournament',
      title: 'Inter-College Sports Meet',
      description: 'Annual sports competition bringing together students from all partner colleges',
      category: 'sports',
      date: '2024-09-22',
      location: 'Sports Complex',
      photographer: 'Sports Committee'
    },
    {
      id: 10,
      src: homeImage,
      alt: 'Graduation Ceremony',
      title: 'Graduation Celebration',
      description: 'Celebrating the achievements of graduating SESWA members',
      category: 'events',
      date: '2024-05-30',
      location: 'College Campus',
      photographer: 'Event Team'
    },
    {
      id: 11,
      src: homeImage,
      alt: 'Cultural Festival',
      title: 'Sohrai Festival Celebration',
      description: 'Traditional Santal harvest festival celebrated with community participation',
      category: 'cultural',
      date: '2024-11-15',
      location: 'Community Ground',
      photographer: 'Festival Committee'
    },
    {
      id: 12,
      src: homeImage,
      alt: 'Workshop Session',
      title: 'Career Development Workshop',
      description: 'Professional development session focusing on interview skills and resume building',
      category: 'academic',
      date: '2024-10-18',
      location: 'Training Center',
      photographer: 'Career Team'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'cultural', name: 'Cultural', count: galleryImages.filter(img => img.category === 'cultural').length },
    { id: 'academic', name: 'Academic', count: galleryImages.filter(img => img.category === 'academic').length },
    { id: 'alumni', name: 'Alumni', count: galleryImages.filter(img => img.category === 'alumni').length },
    { id: 'community', name: 'Community', count: galleryImages.filter(img => img.category === 'community').length },
    { id: 'sports', name: 'Sports', count: galleryImages.filter(img => img.category === 'sports').length },
    { id: 'awards', name: 'Awards', count: galleryImages.filter(img => img.category === 'awards').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    const actualIndex = galleryImages.findIndex(img => img.id === filteredImages[index].id);
    setCurrentImageIndex(actualIndex);
    setSelectedImage(galleryImages[actualIndex]);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            SESWA Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant community through photos capturing memorable moments, 
            cultural celebrations, academic achievements, and community activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => (
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
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                  <Camera className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold text-sm mb-2">{image.title}</h3>
                  <p className="text-xs opacity-90 mb-2">{image.description}</p>
                  <div className="flex items-center justify-center text-xs opacity-75">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(image.date)}</span>
                  </div>
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

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Gallery Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">{galleryImages.length}</div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">{categories.length - 1}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
              <div className="text-gray-600">Events Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">2024</div>
              <div className="text-gray-600">Current Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Image Info Panel */}
              <div className="lg:w-80 bg-white lg:bg-black lg:bg-opacity-80 text-gray-900 lg:text-white p-6 lg:overflow-y-auto">
                <h3 className="text-xl font-bold mb-3">{selectedImage.title}</h3>
                <p className="text-sm lg:text-gray-300 mb-4">{selectedImage.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary-600 lg:text-primary-400" />
                    <span>{formatDate(selectedImage.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary-600 lg:text-primary-400" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="h-4 w-4 mr-2 text-primary-600 lg:text-primary-400" />
                    <span>{selectedImage.photographer}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full capitalize">
                    {selectedImage.category}
                  </span>
                </div>

                {/* Image Counter */}
                <div className="mt-6 pt-4 border-t border-gray-300 lg:border-gray-600 text-sm lg:text-gray-400">
                  Photo {currentImageIndex + 1} of {galleryImages.length}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
