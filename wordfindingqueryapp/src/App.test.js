

import { shallow } from 'enzyme'

/**
 * Context :
 * 
 * Using the Datamuse API to build a word-finding query engine
 * In this query engine, you can type a word and choose (or not) the search mode :
 * 
 * - ml : Means like
 * - sl : Sounds like
 * - sp : Spelled like
 * 
 * Moreover, We can choose a topic (up to 5) to filter words
 */

/**
 * Main elements on the screen :
 * - SearchBar : Search bar for the user
 * - SearchOptions : Search modes & Topics bar
 * - Results
 */

import App from './App';
import SearchBar from './Components/SearchBar'
import SearchOptions from './Components/SearchOptions'
import SearchResults from './Components/SearchResults'

describe('App', () => {
  let AppWrapper;
  beforeAll(()=> {AppWrapper = shallow(<App />)})

  it('contains a search bar', () => {
    expect(AppWrapper.contains(<SearchBar />)).toBe(true)
  })

  it('contains search options', ()=>{
    expect(AppWrapper.contains(<SearchOptions />)).toBe(true)
  })

  it('contains the search results', () => {
    expect(AppWrapper.contains(<SearchResults />)).toBe(true)
  })

  describe('Can obtain a word from the SearchBar & pass it as a prop to SearchResults', ()=> {
    it('has a function to pass a value/prop to SearchResults', () => {
      
    })
  })
  

})