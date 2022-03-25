import React, { useState, useEffect } from "react";
import Axios from 'axios';
import MapChart from "./MapDep";


function Departements(){

    const [departements, setDepartemens] = useState([]);

    useEffect(async() => {
      const datas = await Axios.get('http://localhost:3001/departement');
      setDepartemens(datas.data[0]);
    }, []);

    return(
        <div>
        <MapChart />
        <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Libelle</th>
            </tr>
        </thead>
        <tbody>
            {departements.map((departement) => {
                return(
                <React.Fragment>
                <tr>
                    <td>{departement.id}</td>
                    <td>{departement.libelle}</td>
                </tr>
                </React.Fragment>
                )
            })}
        </tbody>
        </table>
        </div>
    )}

export default Departements;