import React, { useState } from 'react';
import { FileText, Briefcase, GraduationCap, BookOpen, TrendingUp, Download, Heart } from 'lucide-react';
import { useResources } from '../hooks/useResources';
import ResourceFilters from '../components/ResourceFilters';
import ResourceCard from '../components/ResourceCard';
import ResourceModal from '../components/ResourceModal';
import Pagination from '../components/Pagination';

const ResourcesPage = () => {
  const { resources, loading, error, pagination, searchResources, loadPage, likeResource, downloadResource } = useResources();
  const [selectedResource, setSelectedResource] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liking, setLiking] = useState(false);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  const handleFilter = (filters) => {
    searchResources(filters);
  };

  const handleClearFilters = () => {
    searchResources({});
  };

  const handlePageChange = (page) => {
    loadPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLike = async (resourceId) => {
    setLiking(true);
    await likeResource(resourceId);
    setLiking(false);
  };

  const handleDownload = async (resourceId) => {
    await downloadResource(resourceId);
  };

  // Mock statistics for now
  const stats = [
    { icon: FileText, label: 'Study Materials', value: '150+', color: 'text-blue-600' },
    { icon: Briefcase, label: 'Job Opportunities', value: '45+', color: 'text-green-600' },
    { icon: GraduationCap, label: 'Internships', value: '30+', color: 'text-purple-600' },
    { icon: BookOpen, label: 'Blogs & Articles', value: '80+', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access study materials, job opportunities, internships, and educational content
            curated by our community members and mentors.
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

        {/* Filters */}
        <ResourceFilters
          onFilter={handleFilter}
          onClear={handleClearFilters}
          loading={loading}
        />

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 text-center">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}

        {/* Resources Grid */}
        {!loading && !error && (
          <>
            {resources.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {resources.map((resource) => (
                    <ResourceCard
                      key={resource._id}
                      resource={resource}
                      onClick={handleResourceClick}
                      onLike={handleLike}
                      onDownload={handleDownload}
                      liking={liking}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.pages}
                  onPageChange={handlePageChange}
                  loading={loading}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or clearing the filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Resource Modal */}
        <ResourceModal
          resource={selectedResource}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onLike={handleLike}
          onDownload={handleDownload}
          liking={liking}
        />
      </div>
    </div>
  );
};

export default ResourcesPage;
