import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages';
import About from './pages/about';
// import CustomizeAudio from './pages/customize-audio';
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
import PrivacyAbout from './pages/privacy-policy/about';
import PrivacyChanges from './pages/privacy-policy/changes-to-policy';
import PrivacyInformation from './pages/privacy-policy/information';
import PrivacyCookies from './pages/privacy-policy/cookies';
import HowWeUseInformation from './pages/privacy-policy/how-we-use-information';
import UploadPodcast from './pages/podcast/upload';
import Customization from './pages/podcast/customization';
import ApiPage from './pages/api-page';

import store from './store/store';
import DownloadPodcast from './pages/podcast/download';
import Characters from './pages/podcast/characters';
import Setting from './pages/settings';
import Contact from './pages/contact';
import UseCases from './pages/use-cases';
import HowItWorks from './pages/how-it-works';
import { routes } from './libs/links';
import UseCaseArticle from './pages/use-cases/article';
import Scenery from './pages/scenery/Scenery';
import Press from './page
import BlogContent from './pages/blogs/BlogContent';

import Avatars from './pages/av

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.docs} element={<Docs />} />
        <Route path={routes.about} element={<About />} />
        <Route exact path={routes.blog} element={<Blog />} />
        <Route path={`${routes.blogContent}/:id`} element={<BlogContent />} />
        <Route path={routes.careers} element={<Careers />} />
        <Route path={routes.community} element={<Communities />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route exact path={routes.useCases} element={<UseCases />} />
        <Route path={`${routes.useCaseArticle}/:id`} element={<UseCaseArticle />} />
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
        <Route path={routes.exploreBackground} element={<></>} />
        <Route path={routes.press} element={<Press />} />
        <Route path={routes.avatars} element={<Avatars />} />
        <Route path={routes.press} element={<Press />} />
        <Route path={routes.api} element={<ApiPage />} />
        
        {/* privacy-policy nested routes */}
        <Route path={routes.privacyAbout} element={<PrivacyAbout />} />
        <Route path={routes.privaCookies} element={<PrivacyCookies />} />
        <Route path={routes.privacyChangesToPolicy} element={<PrivacyChanges />} />
        <Route path={routes.privacyhowWeUseInformation} element={<HowWeUseInformation />} />
        <Route path={routes.privacyInformation} element={<PrivacyInformation />} />

        <Route path={routes.scenery} element={<Scenery />} />

      </Routes>
    </Provider>
  );
}

export default App;
