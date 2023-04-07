import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [matrix, setMatrix] = useState([])
  const [ranks, setRanks] = useState({})
  const [error, setError] = useState('')

  const handleToggle = async () => {
    try {
      setError('')
      const res = await axios.get('http://localhost:5000/api/get-countries-tags')
      if(res.data) { 
        setMatrix(res.data.matrix)
        setRanks(res.data.rank)
      } 
    } catch(e) {
      setError('Error!!')
    }
  
  }


  return (
    <div style={{marginTop: "1.5rem"}}>
       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <table>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((country, j) => <td key={`${i}-${j}`}>{country}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ margin: "10px 0" }} onClick={handleToggle}>Toggle</button>
      <h4 style={{ margin: 0 }}>Ranks:</h4>
      <ul>
        {Object.entries(ranks).map(([country, rank]) => (
          <span style={{ textAlign: "center", listStyle: "none" }} key={country}>{` ${country} ${rank} `}</span>
        ))}
      </ul>
    </div>
      {error ? <span style={{textAlign: 'center'}}>{error}</span> : ''}
    </div>
  );
}

export default App;
