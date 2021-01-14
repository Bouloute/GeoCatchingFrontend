import riddle from './png/003-location.png';
import history from './png/004-castle.png';
import artists from './png/005-artist.png';
import others from './png/006-question.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Joliette Catching</h1>
      <div className="bandeau">Bandeau explicatif</div>



      <div className="cards">

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src={riddle} alt="Art Catching" />
          </div>
          <div className="card-title">
            <h2>
                Art Catching
            </h2>
          </div>
          
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src={history} alt="Histoire" />
          </div>
          <div className="card-title">
            <h2>
                Histoire
            </h2>
          </div>
          
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src={artists} alt="Artistes" />
          </div>
          <div className="card-title">
            <h2>
                Artistes
            </h2>
          </div>
        </div>

        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src={others} alt="Autres" />
          </div>
          <div className="card-title">
            <h2>
                Autres
            </h2>
          </div>
        </div>

      </div>



      <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
  );
}

export default App;
