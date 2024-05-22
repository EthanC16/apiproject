import './App.css';
import NasaCME from './NasaCME';
import SolarFlareEvents from './SolarFlareEvents';
import SunImageCarousel from './SolarImages';



const App = () => {
  return (
    <div className="App">
      <div className='header'>
     <h1>SOLAR DATA</h1>
     </div>
     <SunImageCarousel />
     <NasaCME />
     <SolarFlareEvents />

    </div>
  );
}

export default App;
