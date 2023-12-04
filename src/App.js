import './App.css';
import BotonNav from './components/buttonNav';
import BotonRedes from './components/buttonNetwork';
import myPhoto from './image/myphoto.png';
import ImagenesTools from './components/imgTools';
import Curso from './components/studyCurse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
            <ul className='list-nav'>
              <BotonNav 
              href="#inicio">
                Home
              </BotonNav>
              <BotonNav
              href="#proyectos">
                Projects
              </BotonNav>
              <BotonNav href="#sobremi">
                About me
              </BotonNav>
              <BotonNav
              href="#contacto">
                Contact
              </BotonNav>
            </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content-information">
          <div className="content-perfil">
            <h2 className="my-name">Hi, my name is Esteban</h2>
            <div className="contenedor-rol">
              <p className="my-rol">
                Front-End Developer
                <span className="span-maquina">
                &nbsp;
                </span>
              </p>
            </div>
          </div>
          <div className="content-img-and-networks">
            <div>
              <img src={myPhoto} className="my-photo" alt="Foto de Esteban Karaputny" />
            </div>
            <div className='content-networks'>
              <h3 className="title-networks">My networks</h3>
              <ul className="my-networks">
                <BotonRedes 
                  link="#redI" 
                  clase="button"
                  childNumber="child1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" fill="#0288d1" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                  </svg>
                </BotonRedes>
                <BotonRedes 
                  link="#redL"
                  clase="button"
                  childNumber="child2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill="#ff00ff"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </BotonRedes>
                <BotonRedes 
                  link="#redG"
                  clase="button"
                  childNumber="child3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512" fill="#fff"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                </BotonRedes>
              </ul>
            </div>
          </div>
        </div>
        <div className='content-tools'>
          <h3 className='title-tools'>
            Tools
          </h3>
          <div className='tools'>
            <ImagenesTools
            name="HTML5"
            image="html.png"
            nameTool="HTML5"
            />
            <ImagenesTools 
            name="CSS3"
            image="css.png"
            nameTool="CSS3"
            />
            <ImagenesTools 
            name="JavaScript"
            image="js.png"
            nameTool="JS"
            />
            <ImagenesTools 
            name="Bootstrap"
            image="bootstrap.png"
            nameTool="Bootstrap"
            />
            <ImagenesTools 
            name="React"
            image="react.png"
            nameTool="React.Js"
            />
            <ImagenesTools 
            name="Github"
            image="github.png"
            nameTool="Github"
            />
            <ImagenesTools 
            name="Canva"
            image="canva.png"
            nameTool="Canva"
            />
          </div>
        </div>
        <div className='content-sobre-mi'>
          <h3 className='title-tools'>About me</h3>
          <div className='content-info-about'>
            <div className='presentacion'>
              <div className="jupiter"></div>
              <p className='description-me'>Me considero una persona que puede aportar gran valor al equipo de trabajo, entre algunas de mis fortalezas están la motivación, liderazgo, comunicación, el trabajo en equipo, la empatía, el manejo de emociones, entre otras. También, aspiro a un puesto de trabajo con un ambiente agradable, con posibilidades de mejora constantemente, aprendiendo y fortaleciendo mis conocimientos junto a mis compañeros.</p>
              <a href='./image/cv-de-Esteban-Karaputny.pdf' class="btn" download="Cv de Esteban Karaputny">
                <strong>Download CV</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </a>
            </div>
            <div className='content-education'>
              <h3 className='education-title'>Education</h3>
              <div className='target-education'>
                <Curso 
                  nameCurse="Universidad Nacional Alturo Jauretche"
                  contenidoCurse="Ingeníeria en Informática"
                  dateCurse="02/2022 - En curso"
                />
                <Curso 
                  nameCurse="#TúEmpleo - Fundación EMPUJAR"
                  contenidoCurse="Capacitación de habilidades blandas, Entrenamiento laboral, Líder en proyecto empresarial de remasterización web en Argenpack Corrugados S.A."
                  dateCurse="07/2023 - 12/2023"
                />
                <Curso 
                  nameCurse="Bootcamp Front-End Developer - Oracle, Alura Latam"
                  contenidoCurse="Curso asincrónico de Developer Front-End (HTML5, CSS, JS, REACT, GIT, Metodologías, Responsive Design)."
                  dateCurse="05/2023 - 10/2023"
                />
                <Curso 
                  nameCurse="Bootcamp Front-End Developer - Accenture, Mindhub, Eidos"
                  contenidoCurse="Desarrolador Front-End, Bootcamp intensivo. (HTML5, CSS3, JS, GITHUB, BOOTSTRAP, Metodologías, Responsive Design, etc.)."
                  dateCurse="09/2022 - 01/2023"
                />
                <Curso 
                  nameCurse="#SéProgramar - Instituto Nacional de Tecnología Industrial"
                  contenidoCurse="Introducción a la Programación (JavaScript, Ruby)."
                  dateCurse="02/2022 - En curso"
                />
                <Curso 
                  nameCurse="Curso Desarrollo Web - Fundación EDUCANDO"
                  contenidoCurse="Curso introducción al desarrollo web. (HTML5, CSS, BOOSTRAP, JS)."
                  dateCurse="05/2021 - 08/2021"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='content-projects'>

        </div>
        <div className='content-contact'>

        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
