import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Team from "./components/Team";
import Selection from "./components/Selection";
import Score from "./components/Score";
import WaveTable from "./components/WaveTable";
import RecordedPerformance from "./components/RecordedPerformance";
import Effects from "./components/Effects";

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
      <Effects/>
      <SocialLinks/>
      
    </div>
  );
}

export default App;
