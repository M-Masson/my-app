import Logements from '../logements/logement';
import array from '../../data/logements.json';
import { Navigate } from "react-router-dom";
import React from 'react'
import { useParams } from 'react-router-dom'

function LogementId (){
    const { id } = useParams()
    const logementsdata = array.find(logement => logement.id === id)

    if(!logementsdata){
        return <Navigate to="/error" replace={true} />
       
    }
    
    return <Logements logement={logementsdata} />
}

export default LogementId