import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';
import { useNotifications } from '../contexts/NotificationContext';
import { useChat } from '../contexts/ChatContext';
import NotificationDropdown from './NotificationDropdown';
import ProfileView from './ProfileView';
import ProfileSettings from './ProfileSettings';
import ChatSystem from './ChatSystem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showProfileView, setShowProfileView] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [showChatSystem, setShowChatSystem] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { unreadCount, createSystemNotification } = useNotifications();
  const { getUnreadCount } = useChat();
  const navigate = useNavigate();

  // Create welcome notification for new users
  useEffect(() => {
    if (user && isAuthenticated) {
      const hasSeenWelcome = localStorage.getItem(`welcome_${user.id}`);
      if (!hasSeenWelcome) {
        createSystemNotification(
          `Welcome to SESWA, ${user.firstName}!`,
          'Explore your personalized dashboard and connect with the community.',
          'normal'
        );
        localStorage.setItem(`welcome_${user.id}`, 'true');
      }
    }
  }, [user, isAuthenticated, createSystemNotification]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Colleges', href: '/colleges' },
    { name: 'Contact', href: '/contact' }
  ];

  const userNavigation = [
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const studentNavigation = [
    { name: 'Student Portal', href: '/student/portal', icon: User },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <NotificationDropdown />

                {/* Chat Indicator */}
                {isAuthenticated && (
                  <button
                    onClick={() => setShowChatSystem(true)}
                    className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    title="Messages"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {getUnreadCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getUnreadCount() > 9 ? '9+' : getUnreadCount()}
                      </span>
                    )}
                  </button>
                )}

                {/* Admin Access Link */}
                {!isAuthenticated && (
                  <Link
                    to="/admin/login"
                    className="text-sm text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
                    title="Admin Access"
                  >
                    Admin
                  </Link>
                )}

                {/* Profile Dropdown */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                      <span className="text-white font-medium">
                        {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {user?.firstName} {user?.lastName}
                    </span>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm text-gray-900 font-medium">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {user?.role}
                        </p>
                      </div>
                      
                      {/* Profile Actions */}
                      <button
                        onClick={() => {
                          setShowProfileView(true);
                          setIsProfileOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="h-4 w-4 mr-2" />
                        View Profile
                      </button>

                      <button
                        onClick={() => {
                          setShowProfileSettings(true);
                          setIsProfileOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </button>

                      {/* Portal Links */}
                      {user?.userType === 'student' && (
                        <Link
                          to="/student/portal"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="h-4 w-4 mr-2" />
                          Student Portal
                        </Link>
                      )}

                      {user?.userType === 'alumni' && (
                        <Link
                          to="/alumni/portal"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="h-4 w-4 mr-2" />
                          Alumni Portal
                        </Link>
                      )}

                      {user?.userType === 'representative' && (
                        <Link
                          to="/representative/portal"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="h-4 w-4 mr-2" />
                          Representative Portal
                        </Link>
                      )}

                      {user?.userType === 'admin' && (
                        <Link
                          to="/admin/portal"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Portal
                        </Link>
                      )}
                      

                      
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/join-us"
                  className="btn-primary"
                >
                  Join Us
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {!isAuthenticated ? (
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/join-us"
                    className="block px-3 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center px-3 py-2">
                    <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-800">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {user?.role}
                      </p>
                    </div>
                  </div>
                  
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {user?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Profile View Modal */}
      <ProfileView
        isOpen={showProfileView}
        onClose={() => setShowProfileView(false)}
      />

      {/* Profile Settings Modal */}
      <ProfileSettings
        isOpen={showProfileSettings}
        onClose={() => setShowProfileSettings(false)}
      />

      {/* Chat System Modal */}
      <ChatSystem
        isOpen={showChatSystem}
        onClose={() => setShowChatSystem(false)}
      />
    </header>
  );
};

export default Header;
