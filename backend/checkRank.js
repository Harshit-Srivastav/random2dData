// Checking the rank of each country on behalf of if it is greater than or equal to 2
const checkRank = (ranks) => {
    ranks['India'] = ranks['India'] >= 2 ? ranks['India']: undefined
    ranks['Germany'] = ranks['Germany'] >= 2 ? ranks['Germany']: undefined
    ranks['Nepal'] = ranks['Nepal'] >= 2 ? ranks['Nepal']: undefined
    ranks['Finland'] = ranks['Finland'] >= 2 ? ranks['Finland']: undefined

    return ranks
}

module.exports = checkRank