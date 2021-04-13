import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import StartTodaySection from "./components/StartTodaySection/StartTodaySection";

const App = () => (
  <div className="App">
    <TopHeader />
    <HeaderBanner />
    <HowItWorksSection />
    <StartTodaySection />
  </div>
);

export default App;
