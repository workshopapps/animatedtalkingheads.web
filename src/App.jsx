import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blogs';
import Careers from './pages/careers';
import Communities from './pages/communities';
import Faqs from './pages/faqs';
import HelpCenter from './pages/help-center';
import Pricing from './pages/pricing';
import TermsAndCondition from './pages/terms-and-conditions';
import TermsOfService from './pages/terms-of-service';
import PrivacyPolicy from './pages/privacy-policy';
import UploadPodcast from './pages/podcast/upload';
import Customization from './pages/podcast/customization';

import store from './store/store';
import DownloadPodcast from './pages/podcast/download';
import Characters from './pages/podcast/characters';
import Setting from './pages/settings';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/community" element={<Communities />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/podcast/upload" element={<UploadPodcast />} />
        <Route path="/podcast/customize" element={<Customization />} />
        <Route path="/podcast/download" element={<DownloadPodcast />} />
        <Route path="/podcast/characters" element={<Characters />} />
      </Routes>
    </Provider>
  );
}

export default App;
