import {receivedDataType} from '../App'

function fetchWordData(word: string,topics: string,mode: string): Promise<Array<receivedDataType>>{
    return new Promise((resolve, reject) =>{
        const url = `https://api.datamuse.com/words?${mode}=${word}&topics=${topics}&max=1000`
        fetch(url)
            .then((data)=>{return data.json()})
            .then((convertedData) => {resolve(convertedData)})
            .catch((error)=>{reject(error)})
    })
}

export {
    fetchWordData
}

