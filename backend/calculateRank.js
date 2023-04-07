const calculateRank = (matrix) => {
    const ranks = { India: 0, Nepal: 0, Germany: 0, Finland: 0 }
    for (let i = 0; i < matrix.length; i++) {
        let currentCountry = matrix[i][0];
        let currentCount = 1;
        for (let j = 1; j < matrix[i].length; j++) {
          if (matrix[i][j] === currentCountry) {
            currentCount++;
          } else {
            if (currentCount > ranks[currentCountry]) {
              ranks[currentCountry] = currentCount;
            }
            currentCountry = matrix[i][j];
            currentCount = 1;
          }
        }
        if (currentCount > ranks[currentCountry]) {
          ranks[currentCountry] = currentCount;
        }
      }     
      return ranks
}


module.exports = calculateRank