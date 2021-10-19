
import * as datamuseService from './datamuse'

describe('API', () => {
    it('fetches the data from the API and returns results',() => {
        return datamuseService.fetchWordData("test","","sl")
            .then((data)=>{expect(data.length === 0).toBe(false)})
            .catch((error)=>{expect(false).toBe(true)})
    })
})