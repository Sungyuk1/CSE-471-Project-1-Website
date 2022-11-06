import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Team from "./components/Team";
import Selection from "./components/Selection";
import Score from "./components/Score";
import WaveTable from "./components/WaveTable";
import RecordedPerformance from "./components/RecordedPerformance";
import Effects from "./components/Effects";
import Additive from "./components/Additive";
import Piano from "./components/Piano";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Team/>
      <Selection/>
      <Score/>
      <WaveTable/>
      <RecordedPerformance/>
      <Additive/>
      <Piano/>
      <Effects/>
      
    </div>
  );
}

export default App;
