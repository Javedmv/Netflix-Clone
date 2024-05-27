import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rawpost from './components/Rawpost/Rawpost';
import { originals, ActionMovies} from './urls';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Rawpost urls={originals} title='Netflix Originals'  />
      <Rawpost urls={ActionMovies} title='Action' isSmall/>
    </>
  );
}

export default App;
