import React, { useEffect, useState } from 'react'
import '../App.css';
import { Row, Col, Layout, theme, Space, Input} from 'antd'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../firebase/config'
import { ProyectList } from './ProyectList'
import{AddProject} from './Form'



export const Primercomponente = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    const contentStyle = {
        textAlign: 'center',
        padding: '24',
        color: '#000',
        width: '95% ',
        background: colorBgContainer,
        backgroundColor: '#ffffff',
        borderRadius: borderRadiusLG,
        //display: 'flex',
    }
    
      
    const categoria ={
        maxWidth: '100%',
        margin: 0,
    };
    
    const {Content} = Layout;
    
    const [proyectos, setProyectos] = useState ([]);
    const [proyectosMostrados, setProyectosMostrados] = useState ([])

    const [busqueda, setBuscar] = useState ("");
    
    
    
    useEffect(() => {
        const proyectosRef =  collection (db, "proyectos");
        getDocs(proyectosRef)
            .then((res) =>{
                const array=res.docs.map((doc) => ( { ...doc.data(), id: doc.id }));
                setProyectos(array)
                setProyectosMostrados(array)
            })
    }, [])

    useEffect(() => {
        if (!busqueda){
            setProyectosMostrados(proyectos)
        }else{
            const resultado = !busqueda ? proyectos : proyectos.filter((dato)=> dato.proyecto.includes(busqueda))
            if (resultado.length>0) {
                setProyectosMostrados(resultado)
            }
        }
    }, [busqueda])

    const handleBuscar = (e) => {
        setBuscar(e.target.value)
    }
        

    //console.log(proyectosMostrados)

    

  return (
    <div>
        <div>
            <Space size= {350} wrap>
                <h2 >CRUD Proyectos</h2>
                <AddProject></AddProject>
                <Input  placeholder="Nombre del proyecto" onChange={handleBuscar}/>
            </Space>
        </div>

        <Content style={contentStyle} >
            <Row gutter={24} justify={'space-around'} style={categoria} align={'center'}>
                <Col span={4} ><h2>Proyecto</h2></Col>
                <Col span={4} ><h2>Cliente</h2></Col>
                <Col span={4} ><h2>Ubicación</h2></Col>
                <Col span={4} ><h2>Estado</h2></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                
            </Row>
            {proyectosMostrados.map((proy) => <ProyectList proyect={proy} key={proy.id} />)}
        
        </Content>
    </div>

    
  )
}
