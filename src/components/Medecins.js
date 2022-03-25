import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';

function Medecins(){

    const [medecins, setMedecins] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(async() => {
      const datas = await Axios.get('http://localhost:3001/medecins');
      setMedecins(datas.data[0]);
      setLoading(false);
    }, []);

    if (isLoading) {
        return <div className="App"><CircularProgress /></div>;
      }

      const columns = [
        { field: 'id', headerName: 'Identifiant', flex: 0.3 },
        { field: 'nom', headerName: 'Nom', flex: 0.5 },
        { field: 'prenom', headerName: 'Prénom', flex: 0.5 },
        { field: 'adresse', headerName: 'Adresse', flex: 1},
        { field: 'tel', headerName: 'Téléphone', flex: 0.5 },
        { field: 'specialiteComplementaire', headerName: 'Specialité Complémentaire', flex: 0.6 },
        { field: 'libelle', headerName: 'Département', flex: 0.5 },
        { field: "Modify", 

            renderCell: (cellValues) => {
                const idMedecin = cellValues.row.id;
                 return (<Link className="modify" to={`/medecininfo/${idMedecin}`}>Modifier</Link>)}
            },

        { field: "Delete", 

            renderCell: (cellValues) => {
                const idMedecin = cellValues.row.id;
                 return (<Link className="delete" to={`/medecininfo/${idMedecin}`}>Supprimer</Link>)}
            }
      ];


    return(
        <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={medecins} columns={columns}  components={{Toolbar: GridToolbar}} />
        </div>
    )}

export default Medecins;
