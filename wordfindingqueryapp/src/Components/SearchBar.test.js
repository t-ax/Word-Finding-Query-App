import { shallow} from "enzyme";
import SearchBar from './SearchBar'

describe('SearchBar',()=>{
    let SearchBarWrapper;
    beforeAll(() => {
        SearchBarWrapper = shallow(<SearchBar />)
    })

    it('contains an input', ()=>{
        const searchInput = SearchBarWrapper.find('.SearchBarInput');
        expect(searchInput.exists()).toBe(true)
        expect(searchInput.type()).toEqual('input')
    })

    it('contains a search button', () => {
        const searchButton = SearchBarWrapper.find('.SearchBarButton');
        expect(searchButton.exists()).toBe(true);
        expect(searchButton.type()).toEqual('button')
    })

})