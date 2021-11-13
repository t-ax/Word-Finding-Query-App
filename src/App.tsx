
import React, { useState } from 'react';
import './App.scss';
import SearchBar from './Components/SearchBar'
import SearchOptions from './Components/SearchOptions'
import SearchResults from './Components/SearchResults'
import * as datamuseService from './API/datamuse'

export type getResultsForADefinedSearchWordType = (word: string) => void
export type receivedDataType = {
  word: string;
  score: number;
  numSyllables : number;
}

function App() {
  const [receivedData, setReceivedData] = useState<Array<receivedDataType>>([])
  
  let getResultsForADefinedSearchWord: getResultsForADefinedSearchWordType = function (word) {
    datamuseService.fetchWordData(word,"","rel_rhy")
            .then(data=>{setReceivedData(data)})
            .catch((error)=>{expect(false).toBe(true)})
  }

  
  return (
    <div className="App">
      <div className="header">
        <h1 className="logo">RhymeZone 2.0</h1>
        <div className="links">
          <a href="https://www.rhymezone.com" target="_blank" rel="noreferrer">RhymeZone</a>
          <a href="https://dribbble.com/shots/3148153-Redesign-Dictionary-com?utm_source=Clipboard_Shot&utm_campaign=flama&utm_content=Redesign%20Dictionary.com&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=flama&utm_content=Redesign%20Dictionary.com&utm_medium=Social_Share" target="_blank" rel="noreferrer">Design</a>
          <a href="#" target="_blank" rel="noreferrer">Source Code</a>
          <a href="https://tariqaxel.dev" target="_blank" rel="noreferrer">Portfolio</a>
        </div>
      </div>
      <SearchOptions />
      <SearchBar callback={getResultsForADefinedSearchWord}/>
      <SearchResults data={receivedData}/>
    </div>
  );
}

export default App;
