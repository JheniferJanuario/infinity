import './Explorar.css';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import Menu from '../components/Menu';

function Explorar() {
  return (
    <div className="Background">
      <NavBar />
      <div className="Container">
        <Menu />
        <Cards />
      </div>
    </div>
  );
}

export default Explorar;
