import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Search The Universe</h1>
      <header className="App-header">
        <Dictionary />
      </header>
      <h2>"Somewhere, something incredible is waiting to be known"</h2>
      <p>~Carl Sagan</p>
      <footer>
        <a href="https://github.com/Kykysan/dictionary-project-shecodes" target="_blank" rel="noreferrer">Open source code</a> by Kylee San Miguel
      </footer>
      </div>
    </div>
  );
}

