import { shallow} from "enzyme";
import SearchBar from './SearchBar'

describe('SearchBar',()=>{
    let SearchBarWrapper;
    beforeAll(() => {
        SearchBarWrapper = shallow(<SearchBar />)
    })

    it('has an input', ()=>{
        const input = SearchBarWrapper.find('.SearchBarInput');
        expect(input.exists()).toBe(true)
        expect(input.type()).toEqual('input')
    })

    it('has a search button', () => {
        const button = SearchBarWrapper.find('.SearchBarButton');
        expect(button.exists()).toBe(true);
        expect(button.type()).toEqual('button')
    })

    it('returns the data when we click on the search button', () => {
        
    })
})