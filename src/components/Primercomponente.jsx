import React, { useEffect, useState } from 'react'
import { Row, Col} from 'antd'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../firebase/config'
import { ProyectList } from './ProyectList'

export const Primercomponente = () => {
    
    const [proyectos, setProyectos] = useState ([]);

    useEffect(() => {
        const proyectosRef = collection (db, "proyectos");
        getDocs(proyectosRef)
            .then((res) =>{
                setProyectos(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    })
    

  return (
    <div>
        <Row justify={'space-around'}>
            <Col span={4} ><h2>Nombre Del proyecto</h2></Col>
            <Col span={4} ><h2>Cliente</h2></Col>
            <Col span={4} ><h2>Ubicación</h2></Col>
            <Col span={4} ><h2>Estado</h2></Col>
            <Col span={4} ><h2>Actualizado</h2></Col>
            <Col span={4} ><h2>Fecha de finalizacion</h2></Col>
        </Row>
        {proyectos.map((proy) => <ProyectList proyect={proy} key={proy.id}/>)}
        
    </div>
  )
}
