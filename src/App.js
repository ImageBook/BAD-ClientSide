import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './components/About/About';
import AndroidAppServices from './components/AndroidAppServices/AndroidAppServices';
import AdNetworkBlog from './components/Blog/AdNetworkBlog';
import AnnouncementBlog from './components/Blog/AnnouncementBlog';
import Blog from './components/Blog/Blog';
import BusinessBlog from './components/Blog/BusinessBlog';
import Casestudies from './components/Blog/Casestudies/Casestudies';
import CaseStudies1 from './components/Blog/Casestudies/CaseStudies1';
import CaseStudies2 from './components/Blog/Casestudies/Casestudies2';
import CaseStudies3 from './components/Blog/Casestudies/Casestudies3';
import CaseStudies4 from './components/Blog/Casestudies/Casestudies4';
import CaseStudies5 from './components/Blog/Casestudies/Casestudies5';
import CaseStudies6 from './components/Blog/Casestudies/Casestudies6';
import CombinatorBlog from './components/Blog/CombinatorBlog';
import Design from './components/Blog/Design/Design';
import Design1 from './components/Blog/Design/design1';
import Development from './components/Blog/Development/Development';
import FirstMobileAppBlog from './components/Blog/FirstMobileAppBlog';
import Flutter from './components/Blog/Flutter';
import Guide2 from './components/Blog/Guides/Guide2';
import Guide3 from './components/Blog/Guides/Guide3';
import Guides from './components/Blog/Guides/Guides';
import HowMuchAppWorth from './components/Blog/HowMuchAppWorth';
import IndividualBlog from './components/Blog/IndividualBlog';
import IosDesignBlog from './components/Blog/IosDesignBlog';
import KnnBlog from './components/Blog/KnnBlog';
import Marketing from './components/Blog/Marketing/Marketing';
import Marketing2 from './components/Blog/Marketing/Marketing2';
import MockupMistakeBlog from './components/Blog/MockupMistakeBlog';
import PopularApiBlog from './components/Blog/PopularApiBlog';
import RejectedAppBlog from './components/Blog/RejectedAppBlog';
import Strategy from './components/Blog/Strategy/Strategy';
import UpdateBlog from './components/Blog/UpdateBlog';
import Careers from './components/Careers/Careers';
import CrossPlatformServices from './components/CrossPlatformServices/CrossPlatformServices';
import Dashboard from './components/Dashboard/Dashboard';
import RequireAdmin from './components/Dashboard/RequireAdmin';
// import RequireAdmin from './components/Dashboard/RequireAdmin';
import EnterpriseDevelopment from './components/EnterpriseDevelopment/EnterpriseDevelopment';
import Home from './components/Home/Home';
import IOSAppService from './components/IOSAppServices/IOSAppService';
import IphoneAppDevService from './components/iPhoneAppDevService/IphoneAppDevService';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import MobileAppConsulting from './components/MobileAppConsulting/MobileAppConsulting';
import MobileAppService from './components/MobileAppService/MobileAppService';
import MvpStartupService from './components/MvpStartupService/MvpStartupService';
import OurTeam from './components/OurTeam/OurTeam';
// import ArDartPage from './components/Portfolio/ArDartPage/ArDartPage';
// import CakemixPage from './components/Portfolio/CakemixPage/CakemixPage';
import ColioPage from './components/Portfolio/ColioPage/ColioPage';
import DigitalBasePage from './components/Portfolio/DigitalBasePage/DigitalBasePage';
// import GroundCentralPage from './components/Portfolio/GroundCentralPage/GroundCentralPage';
// import HalsaPage from './components/Portfolio/HalsaPage/HalsaPage';
import HirebuddyPage from './components/Portfolio/HirebuddyPage/HirebuddyPage';
import Portfolio from './components/Portfolio/Portfolio';
import VpromisePage from './components/Portfolio/VpromisePage/VpromisePage';
// import ReefillPage from './components/Portfolio/ReefillPage/ReefillPage';
// import RunonPage from './components/Portfolio/RunonPage/RunonPage';
import Services from './components/Services/Services';
import ScrollToTop from './components/Shared/ScrollToTop';
import UIUXService from './components/UIUXService/UIUXService';
import WebAppService from './components/WebAppService/WebAppService';
import WebDesignService from './components/WebDesignService/WebDesignService';
import WebsiteDevelopment from './components/WebsiteDevelopment/WebsiteDevelopment';

function App() {
  return (
    <div className='bg-white'>
      <div className='font max-w-7xl mx-auto'>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
            {/* <Route path='/runon' element={<RunonPage></RunonPage>}></Route> */}
            <Route path='/digital-base' element={<DigitalBasePage></DigitalBasePage>}></Route>
            <Route path='/hirebuddy' element={<HirebuddyPage></HirebuddyPage>}></Route>
            <Route path='/colio' element={<ColioPage></ColioPage>}></Route>
            <Route path='/vpromise' element={<VpromisePage></VpromisePage>}></Route>
            {/* <Route path='/halsa-life' element={<HalsaPage></HalsaPage>}></Route> */}
            {/* <Route path='/ar-dart' element={<ArDartPage></ArDartPage>}></Route> */}
            {/* <Route path='/ground-central' element={<GroundCentralPage></GroundCentralPage>}></Route> */}
            {/* <Route path='/reefill' element={<ReefillPage></ReefillPage>}></Route> */}
            {/* <Route path='/cakemix' element={<CakemixPage></CakemixPage>}></Route> */}
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/about/team' element={<OurTeam></OurTeam>}></Route>
            <Route path='/about/careers' element={<Careers></Careers>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            {/* <Route path='/signup' element={<SignUp></SignUp>}></Route> */}
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/blog/casestudies' element={<Casestudies></Casestudies>}></Route>
            <Route path='/blog/design' element={<Design></Design>}></Route>
            <Route path='/blog/development' element={<Development></Development>}></Route>
            <Route path='/blog/guides' element={<Guides></Guides>}></Route>
            <Route path='/blog/marketing' element={<Marketing></Marketing>}></Route>
            <Route path='/blog/strategy' element={<Strategy></Strategy>}></Route>
            <Route path='/blog/:id' element={<IndividualBlog></IndividualBlog>}></Route>
            <Route path='/blog-update/:id' element={<UpdateBlog></UpdateBlog>}></Route>
            <Route path='/dashboard' element={
              <RequireAdmin>
                <Dashboard></Dashboard>
              </RequireAdmin>
            }></Route>
            <Route path='/casestudies/ground-central-double-revenue/' element={<CaseStudies1></CaseStudies1>}></Route>
            <Route path='/casestudies/mobile-apps-saving-lives/' element={<CaseStudies2></CaseStudies2>}></Route>
            <Route path='/guides-allcategories/make-your-business-as-successfull-as-uber/' element={<CaseStudies3></CaseStudies3>}></Route>
            <Route path='/casestudies/recent-media-mentions-for-apps-built-by-messapps/' element={<CaseStudies4></CaseStudies4>}></Route>
            <Route path='/casestudies/runon-healthy-daily-routine/' element={<CaseStudies5></CaseStudies5>}></Route>
            <Route path='/strategy/restaurant-apps-closer-look-numbers-2/' element={<CaseStudies6></CaseStudies6>}></Route>
            <Route path='/allcategories/marketing/ios-app-development-submitting-update-2/' element={<Guide2></Guide2>}></Route>
            <Route path='/allcategories/development/finding-ios-devices-udid-via-itunes-2/' element={<Guide3></Guide3>}></Route>
            <Route path='/allcategories/marketing/ios-app-development-submitting-update-2/' element={<Marketing2></Marketing2>}></Route>
            <Route path='/allcategories/strategy/how-much-app-worth/' element={<HowMuchAppWorth></HowMuchAppWorth>}></Route>
            <Route path='/allcategories/development/flutter/' element={<Flutter></Flutter>}></Route>
            <Route path='/allcategories/development/kmm-new-approach-to-cross-platform-app-development/' element={<KnnBlog></KnnBlog>}></Route>
            <Route path='/allcategories/development/most-popular-apis-for-seo-software/' element={<PopularApiBlog></PopularApiBlog>}></Route>
            <Route path='/allcategories/marketing/top-15-mobile-app-ad-networks-and-platforms/' element={<AdNetworkBlog></AdNetworkBlog>}></Route>
            <Route path='/allcategories/our-client-got-accepted-to-y-combinator/' element={<CombinatorBlog></CombinatorBlog>}></Route>
            <Route path='/allcategories/bi-in-mobile-app-development/' element={<BusinessBlog></BusinessBlog>}></Route>
            <Route path='/allcategories/design/first-wireframe/' element={<FirstMobileAppBlog></FirstMobileAppBlog>}></Route>
            <Route path='/allcategories/strategy/attracting-investors-through-design/' element={<Design1></Design1>}></Route>
            <Route path='/allcategories/strategy/making-a-mockup/' element={<MockupMistakeBlog></MockupMistakeBlog>}></Route>
            <Route path='/allcategories/design/overview-of-ios-design-guidelines/' element={<IosDesignBlog></IosDesignBlog>}></Route>
            <Route path='/allcategories/strategy/apps-get-rejected/' element={<RejectedAppBlog></RejectedAppBlog>}></Route>
            <Route path='/allcategories/accept-cryptocurrency/' element={<AnnouncementBlog></AnnouncementBlog>}></Route>
            <Route path='/services/iphone-app-development' element={<IphoneAppDevService></IphoneAppDevService>}></Route>
            <Route path='/services/web-design' element={<WebDesignService></WebDesignService>}></Route>
            <Route path='/services/android-app-development' element={<AndroidAppServices></AndroidAppServices>}></Route>
            <Route path='/services/web-app-development' element={<WebAppService></WebAppService>}></Route>
            <Route path='/services/ui-ux-design' element={<UIUXService></UIUXService>}></Route>
            <Route path='/services/website-development' element={<WebsiteDevelopment></WebsiteDevelopment>}></Route>
            <Route path='/services/cross-platform-app-development' element={<CrossPlatformServices></CrossPlatformServices>}></Route>
            <Route path='/services/enterprise-app-development' element={<EnterpriseDevelopment></EnterpriseDevelopment>}></Route>
            <Route path='/services/ios-app-design' element={<IOSAppService></IOSAppService>}></Route>
            <Route path='/services/mvp-for-startups' element={<MvpStartupService></MvpStartupService>}></Route>
            <Route path='/services/mobile-app-development' element={<MobileAppService></MobileAppService>}></Route>
            <Route path='/services/mobile-app-consulting' element={<MobileAppConsulting></MobileAppConsulting>}></Route>
          </Routes>
        </ScrollToTop>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
