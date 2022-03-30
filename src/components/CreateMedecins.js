import React, { useState }from 'react';
import Axios from 'axios';


function CreateMedecins() {

    return(
        <form>
            <label>
                Nom:
                <input type="text" name="nom" />
            </label>

            <label>
                Prénom:
                <input type="text" name="prenom" />
            </label>

            <label>
                Adresse:
                <input type="text" name="adresse" />
            </label>

            <label>
                Téléphone:
                <input type="text" name="tel" />
            </label>

            <label>
                Spécialité Complémentaire:
                <input type="text" name="specialiteComplementaire" />
            </label>

            <label>
                Département:
                <input type="text" name="dep" />
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default CreateMedecins;