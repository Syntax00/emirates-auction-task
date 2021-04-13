import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import StartTodaySection from "./components/StartTodaySection/StartTodaySection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import RequirementsSection from "./components/RequirementsSection/RequirementsSection";

const App = () => (
  <div className="App">
    <TopHeader />
    <HeaderBanner />
    <HowItWorksSection />
    <StartTodaySection />
    <ServicesSection />
    <RequirementsSection />
  </div>
);

export default App;
