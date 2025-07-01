import React from 'react';
import { Calendar, Clock, MapPin, Users, IndianRupee, Globe, CheckCircle } from 'lucide-react';

const EventCard = ({ event, onClick, onRegister, onCancelRegistration, registering }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (time) => {
    return time;
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'seminar':
        return 'bg-green-100 text-green-800';
      case 'conference':
        return 'bg-purple-100 text-purple-800';
      case 'cultural':
        return 'bg-pink-100 text-pink-800';
      case 'competition':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'technical':
        return 'bg-primary-100 text-primary-800';
      case 'career':
        return 'bg-yellow-100 text-yellow-800';
      case 'cultural':
        return 'bg-pink-100 text-pink-800';
      case 'social':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isUpcoming = new Date(event.startDate) > new Date();
  const isRegistrationOpen = event.registrationRequired && 
    (!event.registrationDeadline || new Date(event.registrationDeadline) > new Date()) &&
    (!event.maxParticipants || event.registrationCount < event.maxParticipants);

  const handleRegisterClick = (e) => {
    e.stopPropagation();
    if (event.isRegistered) {
      onCancelRegistration(event._id);
    } else {
      onRegister(event._id);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer border border-gray-100 hover:border-primary-200"
      onClick={() => onClick && onClick(event)}
    >
      {/* Event Banner */}
      {event.banner ? (
        <img
          src={event.banner}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <div className="text-center text-white">
            <Calendar className="h-12 w-12 mx-auto mb-2" />
            <p className="text-sm font-medium">{formatDate(event.startDate)}</p>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.eventType)}`}>
              {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
          </div>
          {event.isRegistered && (
            <CheckCircle className="h-5 w-5 text-green-500" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.shortDescription || event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>{formatDate(event.startDate)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-gray-400" />
            <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            {event.isOnline ? (
              <>
                <Globe className="h-4 w-4 mr-2 text-gray-400" />
                <span>Online Event</span>
              </>
            ) : (
              <>
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="truncate">{event.venue}, {event.city}</span>
              </>
            )}
          </div>

          {event.registrationRequired && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-gray-400" />
              <span>
                {event.registrationCount} registered
                {event.maxParticipants && ` / ${event.maxParticipants} max`}
              </span>
            </div>
          )}

          {event.registrationFee > 0 && (
            <div className="flex items-center text-sm text-gray-600">
              <IndianRupee className="h-4 w-4 mr-2 text-gray-400" />
              <span>₹{event.registrationFee}</span>
            </div>
          )}
        </div>

        {/* Registration Status */}
        {event.registrationRequired && isUpcoming && (
          <div className="pt-4 border-t border-gray-100">
            {event.isRegistered ? (
              <button
                onClick={handleRegisterClick}
                disabled={registering}
                className="w-full bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {registering ? 'Cancelling...' : 'Cancel Registration'}
              </button>
            ) : isRegistrationOpen ? (
              <button
                onClick={handleRegisterClick}
                disabled={registering}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {registering ? 'Registering...' : 'Register Now'}
              </button>
            ) : (
              <div className="text-center text-sm text-gray-500">
                {event.maxParticipants && event.registrationCount >= event.maxParticipants
                  ? 'Event Full'
                  : 'Registration Closed'
                }
              </div>
            )}
          </div>
        )}

        {/* Past Event */}
        {!isUpcoming && (
          <div className="pt-4 border-t border-gray-100">
            <div className="text-center text-sm text-gray-500">
              Event Completed
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
