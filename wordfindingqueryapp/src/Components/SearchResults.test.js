import { render } from "@testing-library/react";
import SearchResults from './SearchResults'
import { receivedDataType } from "../App";
import { TESTFUNCTION_classifyReceivedDataByNumberOfSyllables } from "./SearchResults";

const FakeDataProp = {
    data: [
        {word: "test0",score: 0,numSyllables : 5},
        {word: "test1",score: 0,numSyllables : 5},
        {word: "test2",score: 0,numSyllables : 4},
        {word: "test3",score: 0,numSyllables : 3},
        {word: "test4",score: 0,numSyllables : 2},
        {word: "test5",score: 0,numSyllables : 4},
        {word: "test6",score: 0,numSyllables : 2},
        {word: "test7",score: 0,numSyllables : 5},
        {word: "test8",score: 0,numSyllables : 2},
        {word: "test9",score: 0,numSyllables : 5},
    ]
}
const FakeExpectedResults = [
    undefined,
    [ 'test4', 'test6', 'test8' ],
    [ 'test3' ],
    [ 'test2', 'test5' ],
    [ 'test0', 'test1', 'test7', 'test9' ]
  ]

describe("SearchResults", ()=>{
    it("classifies received data",()=>{
        let result = TESTFUNCTION_classifyReceivedDataByNumberOfSyllables(FakeDataProp.data);
        expect(result).toEqual(FakeExpectedResults)
    })
    it("renders without crashing", () => {
        render(<SearchResults />)
    })
})