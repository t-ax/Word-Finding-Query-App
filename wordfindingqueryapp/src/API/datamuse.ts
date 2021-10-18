function fetchWordData(word: string,topics : string,mode: string){
    return new Promise((resolve, reject) =>{
        const url = `https://api.datamuse.com/words?${mode}=${word}&topics=${topics}`
        fetch(url)
            .then((data)=>{resolve(data.json())})
            .catch((error)=>{reject(error)})
    })
}

export {
    fetchWordData
}

