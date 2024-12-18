// Author: Holden Folk
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { Dashboard } from './screens/Dashboard';
import { LoginPage } from './screens/LoginPage';
import { About } from './screens/About';
import { Contact } from './screens/Contact';
import { ProfilePage } from './screens/ProfilePage';
import { ClubPage } from './screens/ClubPage';
import { ClubCreate } from './screens/ClubCreate';
import { PostPage } from './screens/PostPage';
import { Search } from './screens/Search';
import { Success } from './screens/Success';

const NavigationRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/club/:clubName" element={<ClubPage />} />
        <Route path="/clubcreate" element={<ClubCreate />} />
        <Route path="/club/:clubName/post" element={<PostPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default NavigationRouter;
