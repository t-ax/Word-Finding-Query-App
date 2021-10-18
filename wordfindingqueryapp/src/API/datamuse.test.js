
import * as datamuseService from './datamuse'

describe('API', () => {
    it('fetches the data from the API and return an object',() => {
        return datamuseService.fetchWordData("test","","sl")
            .then((data)=>{expect(typeof(data)).toBe("object")})
            .catch((error)=>{expect(false).toBe(true)})
    })
})