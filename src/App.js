import CustomizedPlan from "./components/customizedPlan/CustomizedPlan";
import Footer from "./components/Footer";
import MainHero from "./components/mainhero/MainHero";
import Navbar from "./components/Navbar";
import TravelInfo from "./components/travelInfo/TravelInfo";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="App ">
        <Navbar />
        <MainHero />
        <TravelInfo />
        <CustomizedPlan />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
