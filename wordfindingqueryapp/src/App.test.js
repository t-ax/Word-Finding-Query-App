

import { shallow, mount } from 'enzyme'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';

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
  let AppShallowWrapper;
  beforeAll(()=> {AppShallowWrapper = shallow(<App />)})

  it('contains a search bar', () => {
    expect(AppShallowWrapper.find(SearchBar).length).toBe(1)
  })

  it('contains search options', ()=>{
    expect(AppShallowWrapper.contains(<SearchOptions />)).toBe(true)
  })

  it('contains the search results', () => {
    expect(AppShallowWrapper.find(SearchResults).length).toBe(1)
  })

  describe('Can obtain a word from the SearchBar & display the data in SearchResults', ()=> {
    it('returns the data when we click on the search button', async () => {
      render(<App />);
      const searchBarInput = screen.getByTestId('SearchBarInput');
      const searchBarButton = screen.getByTestId('SearchBarButton')
      const searchResults = screen.getByTestId('SearchResults');
      
      userEvent.type(searchBarInput,'test')
      userEvent.click(searchBarButton)
      await waitFor(() =>
        expect(searchResults.childElementCount > 5).toBe(true)
      )
    })
  })
  

})