import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import CollegesPage from './pages/CollegesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import StudentLoginPage from './pages/StudentLoginPage';
import AlumniLoginPage from './pages/AlumniLoginPage';
import RepresentativeLoginPage from './pages/RepresentativeLoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentRegisterPage from './pages/StudentRegisterPage';
import AlumniRegisterPage from './pages/AlumniRegisterPage';
import RepresentativeRegisterPage from './pages/RepresentativeRegisterPage';
import JoinUsPage from './pages/JoinUsPage';
import AlumniPage from './pages/AlumniPage';
import MentorshipPage from './pages/MentorshipPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
            <Route path="/student/login" element={<StudentLoginPage />} />
            <Route path="/alumni/login" element={<AlumniLoginPage />} />
            <Route path="/representative/login" element={<RepresentativeLoginPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
              <Route path="/register" element={<RegisterPage />} />
            <Route path="/student/register" element={<StudentRegisterPage />} />
            <Route path="/alumni/register" element={<AlumniRegisterPage />} />
            <Route path="/representative/register" element={<RepresentativeRegisterPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />

              {/* Protected Routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
