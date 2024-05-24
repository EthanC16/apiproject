import './App.css';
import NasaCME from './NasaCME';
import SolarFlareEvents from './SolarFlareEvents';
import SunImage from './SolarImages';



const App = () => {
  return (
    <div className="App">
      <div className='header'>
     <h1>SOLAR DATA</h1>
     </div>
     <SunImage />
     <div>
      <h2>The DONKI API</h2>
      <p>The following information is fectched using one of NASA's Open API. The Space Weather Database of Notifications, Knowledge and Information, also known as DONKI, is a comprehensive on-line tool for space weather forecasters, scientists and the general space science community. </p>
     </div>
     <NasaCME />
     <SolarFlareEvents />

    </div>
  );
}

export default App;
