import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './pages';
import About from './pages/about';
import CustomizeAudio from './pages/podcast/customization';
import Docs from './pages/FEdocs';
import Blog from './pages/blogs';
import Careers from './pages/careers';
import Communities from './pages/communities';
import Faqs from './pages/faqs';
import HelpCenter from './pages/help-center';
import Pricing from './pages/pricing';
import GetStarted from './pages/pricing-getstarted';
import Checkout from './pages/pricing-checkout';
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
import ExploreAvatar from './pages/explore-avatar';
import ApiPage from './pages/api-page';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import ForgotPassword from './pages/forgot-password';
import { AuthContextProvider } from './context/AuthContext';
import store from './store/store';
import DownloadPodcast from './pages/podcast/download';
import AnimatedPodcast from './pages/podcast/animated-podcast';
import Characters from './pages/podcast/characters';
import SettingsAppearance from './pages/settings/components/Appearance';
import SettingsIntegration from './pages/settings/components/IntegrationAndApps';
import SettingsCommunity from './pages/settings/components/Community';
import SettingsVoxclips from './pages/settings/components/VoxClips';
import SettingsAccessibility from './pages/settings/components/Accessibility';
import Contact from './pages/contact';
import UseCases from './pages/use-cases';
import HowItWorks from './pages/how-it-works';
import { routes } from './libs/links';
import UseCaseArticle from './pages/use-cases/article';
import Scenery from './pages/scenery/Scenery';
import Press from './pages/press';
import BlogContent from './pages/blogs/BlogContent';
import Avatars from './pages/avatar';
import PressNewsPage from './pages/press/news-page';
import Watchnow from './pages/press/watch-now';
import Term from './pages/term-of-use/Terms';
import Policy from './pages/term-of-use/Policy';
import PrivateRoute from './components/pages/PrivateRoute/PrivateRoute';
import { Uploads } from './pages/dashboard/uploads';
import InProgress from './pages/dashboard/in_progress';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedVideos from './pages/new-dashboard/animated-videos';
import UploadedAudios from './pages/new-dashboard/uploaded-audios';
import Inprogress from './pages/new-dashboard/In-progress';
import Dashboard from './pages/new-dashboard/dashboard';
import Account from './pages/account';
import Billing from './pages/account/billing';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="242770028639-lnmal90ggd16l96p9dghm5g4tife0q80.apps.googleusercontent.com">
        <AuthContextProvider>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.docs} element={<Docs />} />
            <Route path={routes.about} element={<About />} />
            <Route exact path={routes.blog} element={<Blog />} />
            <Route path={`${routes.blogContent}/:id`} element={<BlogContent />} />
            <Route path={routes.careers} element={<Careers />} />
            <Route path={routes.community} element={<Communities />} />
            <Route path={routes.customizeAudio} element={<CustomizeAudio />} />
            <Route path={routes.exploreAvatar} element={<ExploreAvatar />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route exact path={`${routes.useCases}/:page`} element={<UseCases />} />
            <Route exact path={`${routes.useCaseArticle}/:id`} element={<UseCaseArticle />} />
            <Route path={routes.howItWorks} element={<HowItWorks />} />
            <Route path={routes.faqs} element={<Faqs />} />
            <Route path={routes.helperCenter} element={<HelpCenter />} />
            <Route path={routes.privacy} element={<PrivacyPolicy />} />
            <Route path={routes.termsCondition} element={<TermsAndCondition />} />
            <Route path={routes.termsService} element={<TermsOfService />} />
            <Route path={routes.term} element={<Term />} />
            <Route path={routes.policy} element={<Policy />} />
            <Route path={routes.settingsAppearance} element={<SettingsAppearance />} />
            <Route path={routes.settingsAppearance} element={<SettingsAppearance />} />
            <Route path={routes.settingsIntegration} element={<SettingsIntegration />} />
            <Route path={routes.settingsCommunity} element={<SettingsCommunity />} />
            <Route path={routes.settingsVoxclips} element={<SettingsVoxclips />} />
            <Route path={routes.settingsAccessibility} element={<SettingsAccessibility />} />
            <Route path={routes.podcastCharacters} element={<Characters />} />
            <Route path={routes.pricing} element={<Pricing />} />
            <Route path={routes.getStarted} element={<GetStarted />} />
            <Route element={<PrivateRoute />}>
              <Route path={routes.podcastCustomize} element={<Customization />} />
              <Route path={routes.podcastDownload} element={<DownloadPodcast />} />
              <Route path={routes.animatedPodcast} element={<AnimatedPodcast />} />
              <Route path={routes.podcastUpload} element={<UploadPodcast />} />
              <Route path={routes.dashboard_audios} element={<Uploads />} />
              <Route path={routes.dashboard_progress} element={<InProgress />} />
              <Route path={routes.checkout} element={<Checkout />} />
              {/* new dashboard routes  */}
              <Route path={routes.animated_videos} element={<AnimatedVideos />} />
              <Route path={routes.uploaded_audios} element={<UploadedAudios />} />
              <Route path={routes.in_progress} element={<Inprogress />} />
              <Route path={routes.dashboard} element={<Dashboard />} />
              {/* new dashboard routes  */}
            </Route>
            <Route path={routes.exploreBackground} element={<></>} />
            <Route path={routes.avatars} element={<Avatars />} />
            <Route path={routes.api} element={<ApiPage />} />
            <Route path={routes.press} element={<Press />} />
            <Route path={routes.pressNewsPage} element={<PressNewsPage />} />
            <Route path={routes.pressWatchnow} element={<Watchnow />} />
            <Route path={routes.signUp} element={<SignUp />} />
            <Route path={routes.signIn} element={<SignIn />} />
            <Route path={routes.ForgotPassword} element={<ForgotPassword />} />

            {/* privacy-policy nested routes */}
            <Route path={routes.privacyAbout} element={<PrivacyAbout />} />
            <Route path={routes.privaCookies} element={<PrivacyCookies />} />
            <Route path={routes.privacyChangesToPolicy} element={<PrivacyChanges />} />
            <Route path={routes.privacyhowWeUseInformation} element={<HowWeUseInformation />} />
            <Route path={routes.privacyInformation} element={<PrivacyInformation />} />
            <Route path={routes.scenery} element={<Scenery />} />

            <Route path={routes.myAccount} element={<Account />} />
            <Route path={routes.myBilling} element={<Billing />} />

          </Routes>
        </AuthContextProvider>
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
