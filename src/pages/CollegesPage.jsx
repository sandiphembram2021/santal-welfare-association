import React, { useState } from 'react';
import { Search, MapPin, Calendar, ExternalLink, Users, GraduationCap, Building } from 'lucide-react';
import { colleges, searchColleges, getCollegesByType } from '../data/colleges';

const CollegesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [filteredColleges, setFilteredColleges] = useState(colleges);

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, selectedType);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    applyFilters(searchQuery, type);
  };

  const applyFilters = (query, type) => {
    let filtered = colleges;

    if (query) {
      filtered = searchColleges(query);
    }

    if (type !== 'all') {
      filtered = filtered.filter(college => college.type === type);
    }

    setFilteredColleges(filtered);
  };

  const stats = [
    { icon: Building, label: 'Total Colleges', value: colleges.length, color: 'text-primary-600' },
    { icon: GraduationCap, label: 'Government Colleges', value: getCollegesByType('Government').length, color: 'text-green-600' },
    { icon: Users, label: 'Private Colleges', value: getCollegesByType('Private').length, color: 'text-blue-600' },
    { icon: MapPin, label: 'Locations', value: '10+', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Our College Network
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SESWA members are studying and working across these prestigious engineering institutions 
            in West Bengal and neighboring states.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search colleges by name or location..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => handleTypeFilter('all')}
                className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                  selectedType === 'all'
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleTypeFilter('Government')}
                className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                  selectedType === 'Government'
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Government
              </button>
              <button
                onClick={() => handleTypeFilter('Private')}
                className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                  selectedType === 'Private'
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Private
              </button>
            </div>
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <div key={college.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{college.name}</h3>
                    <p className="text-gray-600 text-sm">{college.fullName}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    college.type === 'Government' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {college.type}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{college.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{college.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Established {college.established}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{college.branches.length} Branches</span>
                  </div>
                </div>

                {/* Branches */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Popular Branches:</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.branches.slice(0, 3).map((branch, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {branch.replace(' Engineering', '')}
                      </span>
                    ))}
                    {college.branches.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{college.branches.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    SESWA Members Present
                  </div>
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or clearing the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setFilteredColleges(colleges);
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center bg-primary-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Is Your College Missing?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            If your engineering college is not listed here and you'd like to represent SESWA 
            at your institution, please get in touch with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/register"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Become a Representative
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesPage;
