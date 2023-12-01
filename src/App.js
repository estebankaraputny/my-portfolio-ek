import './App.css';
import BotonNav from './components/buttonNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
            <ul className='list-nav'>
              <BotonNav 
              href="#inicio">
                Inicio
              </BotonNav>
              <BotonNav
              href="#proyectos">
                Proyectos
              </BotonNav>
              <BotonNav href="#sobremi">
                Sobre mí
              </BotonNav>
              <BotonNav
              href="#contacto">
                Contacto
              </BotonNav>
            </ul>
        </nav>
      </header>
      <main>
        <div>
          <h2>Hi, my name is Esteban</h2>
          <p>Front-End Developer</p>
          <a href="#dsad" >Downloand Cv</a>
        </div>
        <div>
          <div>
            <img src="./image/logo192.png" />
          </div>
          <div>
            <h3>Mis redes</h3>
            <ul>

            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
