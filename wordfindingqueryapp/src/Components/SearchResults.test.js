import { render } from "@testing-library/react";
import SearchResults from './SearchResults'

describe("SearchResults", ()=>{
    it("renders without crashing", () => {
        render(<SearchResults />)
    })
})