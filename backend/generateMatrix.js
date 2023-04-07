const generateMatrix = (arr) => {  
    let rows = 3
    let cols = 3
    let dynamicArrayMatrix = new Array(rows)   
    for(let i = 0; i < rows; i++) {
        dynamicArrayMatrix[i] = new Array(cols)
    }    
    for(let i = 0; i < rows; i++) {
        for(let j=0; j<cols; j++){
            let x = Math.floor(Math.random() * 4)
            dynamicArrayMatrix[i][j] = arr[x]
        }
    }
    return dynamicArrayMatrix 
}

module.exports = generateMatrix