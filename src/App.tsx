
import React, { useEffect, useState } from 'react';
import './App.scss';
import SearchBar from './Components/SearchBar'
import SearchOptions from './Components/SearchOptions'
import SearchResults from './Components/SearchResults'
import * as datamuseService from './API/datamuse'
import img_github from './Assets/Images/github.png';
import img_tree from './Assets/Images/warszawianka-Group-of-trees.svg'
import {gsap} from 'gsap';

export type getResultsForADefinedSearchWordType = (word: string) => void
export type receivedDataType = {
  word: string;
  score: number;
  numSyllables : number;
}

function App() {
  const [receivedData, setReceivedData] = useState<Array<receivedDataType>>([])
  
  function Animation_LoadingScreen(){
    let tl=gsap.timeline();
    tl.set('body, .App',{overflow: 'hidden'})

    tl.fromTo('.loadingtxt',{ 
      delay:2,
      opacity: 1, 
      ease: "power1.in",
    },{
      opacity: 0,
      delay: 2,
    })
    
    tl.to('.loadingScreen', {
        duration: 1,
        left: '100%',
        delay: .2,
        ease: "power1.out",
    })

    tl.set('.loadingContainer, .loadingScreen, .loadingtxt', {
        display: "none",
        visibility:"hidden"
    })

    tl.fromTo('.tree',{
      opacity:0,
    },{
      duration:1,
      opacity:1,
      delay: .45,
      stagger: .45,
    })

    tl.fromTo('.SearchBarInput',{
      opacity: 0,
      skewY:5,
      top: '10%',
    },{
      duration: 2,
      top:0,
      skewY:0,
      opacity:1,
    })

    tl.fromTo('.SearchBarButton',{
      opacity: 0,
    },{
      duration: 2,
      opacity:1,
    })

    tl.fromTo('.logo, .links, .links_mobile, .SearchResults',{
      opacity: 0,
      top: '50%',
    },{
      duration: 1,
      opacity:1,
      top:0,
    })

    tl.set('body, .App',{overflow: 'auto'})
  }

  useEffect(()=>{
    Animation_LoadingScreen();
  },[])


  

  let getResultsForADefinedSearchWord: getResultsForADefinedSearchWordType = function (word) {
    datamuseService.fetchWordData(word,"","rel_rhy")
            .then(data=>{setReceivedData(data);})
            .catch((error)=>{expect(false).toBe(true)})
  }

  
  
  return (
    <div className="App">

      <div className="loadingContainer">
          <div className="loadingScreen"></div>
          <div className="loadingtxt">RhymeZone II</div>
      </div>

      <div className="header">
        
        <div className="logo">
          <h1>RhymeZone II</h1>
          <div className="myname">By Tariq Axel</div>
        </div>

        <div className="links">
          <a href="https://www.rhymezone.com" target="_blank" rel="noreferrer">RhymeZone.</a>
          <a href="https://github.com/Tariq-Axel/Word-Finding-Query-App" target="_blank" rel="noreferrer">Source Code.</a>
          <a href="https://www.tariqaxel.com" target="_blank" rel="noreferrer">Portfolio.</a>
        </div>
        
        <div className="links_mobile">
            <a href="https://github.com/Tariq-Axel/Word-Finding-Query-App" target="_blank" rel="noreferrer"><img src={img_github} alt="github"/></a>
          </div>
      </div>


      <div className="trees">
        <img src={img_tree} alt="tree" className="tree"/>
        <img src={img_tree} alt="tree" className="tree" />
        <img src={img_tree} alt="tree" className="tree" />
      </div>

      <SearchOptions />
      <SearchBar callback={getResultsForADefinedSearchWord}/>
      <SearchResults data={receivedData}/>
      
    </div>
  );
}

export default App;
