import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages';
import About from './pages/about';
import Docs from './pages/FEdocs';
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
import Contact from './pages/contact';
import UseCases from './pages/use-cases';
import HowItWorks from './pages/how-it-works';
import { routes } from './libs/links';
import Press from './pages/press';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.docs} element={<Docs />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.blog} element={<Blog />} />
        <Route path={routes.careers} element={<Careers />} />
        <Route path={routes.community} element={<Communities />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.useCases} element={<UseCases />} />
        <Route path={routes.howItWorks} element={<HowItWorks />} />
        <Route path={routes.faqs} element={<Faqs />} />
        <Route path={routes.helperCenter} element={<HelpCenter />} />
        <Route path={routes.pricing} element={<Pricing />} />
        <Route path={routes.privacy} element={<PrivacyPolicy />} />
        <Route path={routes.termsCondition} element={<TermsAndCondition />} />
        <Route path={routes.termsService} element={<TermsOfService />} />
        <Route path={routes.settings} element={<Setting />} />
        <Route path={routes.podcastUpload} element={<UploadPodcast />} />
        <Route path={routes.podcastCustomize} element={<Customization />} />
        <Route path={routes.podcastDownload} element={<DownloadPodcast />} />
        <Route path={routes.podcastCharacters} element={<Characters />} />
        <Route path={routes.press} element={<Press />} />
        
      </Routes>
    </Provider>
  );
}

export default App;
