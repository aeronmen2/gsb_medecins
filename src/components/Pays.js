import React, {useEffect, useState} from 'react'
import Axios from 'axios';

function Pays() {

  const [pays, setPays] = useState([]);

  useEffect(async() => {
    const pays = await Axios.get('http://localhost:3001/pays');
    setPays(pays.data[0]);
  })

  return (
    <div>
      <h1>Pays</h1>

      <thead>
        <th>Id pays</th>
        <th>Libelle</th>
      </thead>

      <tbody>
      {pays.map((pay) => {
      return(
          <React.Fragment>
            <tr>
              <td><img src={`https://countryflagsapi.com/png/${pay?.id}`} alt={"logo"}/></td>
              <td>{pay?.libelle}</td>
            </tr>
          </React.Fragment>
      )
      })}
      </tbody>
    </div>
  )
}

export default Pays;