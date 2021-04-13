import TopHeader from "./components/TopHeader/TopHeader";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import StartTodaySection from "./components/StartTodaySection/StartTodaySection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import RequirementsSection from "./components/RequirementsSection/RequirementsSection";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
    <TopHeader />
    <HeaderBanner />
    <HowItWorksSection />
    <StartTodaySection />
    <ServicesSection />
    <RequirementsSection />
    <Footer />
  </div>
);

export default App;
