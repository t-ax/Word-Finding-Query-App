
import './App.css';
import SearchBar from './Components/SearchBar'
import SearchOptions from './Components/SearchOptions'
import SearchResults from './Components/SearchResults'

function App() {

  function defineSearchWord() {
    
  }

  return (
    <div className="App">
      <SearchOptions />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
