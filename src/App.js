import './App.css';
import NasaCME from './NasaCME';
import SolarFlareEvents from './SolarFlareEvents';
import SunImageCarousel from './SolarImages';



const App = () => {
  return (
    <div className="App">
     <h1>SOLAR DATA</h1>
     <SunImageCarousel />
     <NasaCME />
     <SolarFlareEvents />

    </div>
  );
}

export default App;
