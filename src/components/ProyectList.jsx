import React from 'react'
import { Row, Col, Divider, Typography} from 'antd'
import {LoadingOutlined, CheckCircleTwoTone, FireTwoTone} from '@ant-design/icons'
import { Timestamp } from 'firebase/firestore';



export const ProyectList = ({proyect  }) => {

  const {Text} = Typography;

  const data = {
    maxWidth: '100%',
  };

  const divider = {
    margin: 8,
    width: '95%',
    minWidth:'95%',
  }


  //formato de timestamp
  const formatDate = (timestamp) => {
      if (timestamp instanceof Timestamp) {
        const date = timestamp.toDate();
        return date.toLocaleDateString(); 
  }};
  
  const chooseIcon=(estado) => {
    switch (estado) {
      case 'En curso':
        
        return <h3>{estado} <FireTwoTone twoToneColor="#52c41a"/></h3>;
        
      
      case 'Stand by':
        
        return <h3>{estado} <LoadingOutlined /></h3>;
      
      case 'Finalizado':
        
        return <h3>{estado} <CheckCircleTwoTone twoToneColor="#52c41a" /></h3>;
    
      default:
        return <h3><Text type="danger">Sin asignar</Text></h3>
    }
    
  };
  


  return (
    <div>
      <Divider style={divider}/>
        <Row gutter= {24} justify={'space-around'} style={data} key={proyect.id}>
            <Col span={4} ><h3>{proyect.proyecto}</h3></Col>
            <Col span={4} ><h3>{proyect.cliente}</h3></Col>
            <Col span={4} ><h3>{proyect.ubicacion}</h3></Col>
            <Col span={4} >{chooseIcon(proyect.estado)} </Col>
            <Col span={4} ><h3>{formatDate(proyect.actualizacion)}</h3></Col>
            <Col span={4} ><h3>{formatDate(proyect.finalizacion)} </h3></Col>
        </Row>

    </div>
  )
}

