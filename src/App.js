import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rawpost from './components/Rawpost/Rawpost';
import { originals, ActionMovies, ComedyMovies, HorrorMovies, Documentaries} from './urls';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Rawpost urls={originals} title='Netflix Originals'  />
      <Rawpost urls={ActionMovies} title='Action' isSmall/>
      <Rawpost urls={ComedyMovies} title='Comedy Movie' isSmall/>
      <Rawpost urls={HorrorMovies} title='Horror Movies' isSmall/>
      <Rawpost urls={Documentaries} title='Documentaries' isSmall/>
    </>
  );
}

export default App;
