import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"; 
import { useNavigate, Link } from "react-router-dom";


function MedecinInfo() {

    const {idMedecin} = useParams();
    console.log(idMedecin);
    const[medecin, setMedecin] = useState();

    useEffect(async () => {
        
        const medecin = await Axios.post("http://localhost:3001/medecininfo",{
        idMedecin : idMedecin,
        });
        setMedecin(medecin.data[0][0]);
    }, [])
    console.log(medecin);

  return (

    <div className='medecininfo'>
        <ul>
            <li>{medecin?.id}</li>
            <li>{medecin?.prenom}</li>
            <li>{medecin?.nom}</li>
            <li>{medecin?.tel}</li>
            <li>{medecin?.adresse}</li>
        </ul>
    </div>
  )
}

export default MedecinInfo;