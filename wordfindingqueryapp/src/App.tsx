
import React, { useState } from 'react';
import './App.css';
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
    datamuseService.fetchWordData(word,"","sl")
            .then(data=>{setReceivedData(data)})
            .catch((error)=>{expect(false).toBe(true)})
  }

  
  return (
    <div className="App">
      <SearchOptions />
      <SearchBar callback={getResultsForADefinedSearchWord}/>
      <SearchResults data={receivedData}/>
    </div>
  );
}

export default App;
