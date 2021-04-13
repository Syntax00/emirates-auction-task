import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";

const App = () => (
  <div className="App">
    <TopHeader />
    <HeaderBanner />
    <HowItWorksSection />
  </div>
);

export default App;
