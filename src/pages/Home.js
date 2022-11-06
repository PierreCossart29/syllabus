import '../App.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-body">
          <h1>Syllabus</h1>
          <Link to="/jeu">
              <button className="Syllabes-button">
                Syllabes
              </button>
          </Link>
          <Link to="/jeu-mots">
              <button className="Mots-button">
                  Mots
              </button>
          </Link>
      </header>
    </div>
  );
}

export default Home;
