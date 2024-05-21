import React from 'react'
import { Row, Col, Divider, Typography, Space} from 'antd'
import {LoadingOutlined, CheckCircleTwoTone, FireTwoTone} from '@ant-design/icons'
import { Borrar } from './Borrar';
import { EditProject } from './editForm';





export const ProyectList = ({proyect}) => {

  const {Text} = Typography;

  const data = {
    maxWidth: '100%',
  };

  const divider = {
    margin: 8,
    width: '95%',
    minWidth:'95%',
  }

  
  const chooseIcon=(estado) => {
    switch (estado) {
      case 'En curso':
        
        return <Space><FireTwoTone twoToneColor="#52c41a"/><h3>{estado} </h3></Space>;
        
      
      case 'Stand by':
        
        return <Space ><h3>{estado} </h3><LoadingOutlined /></Space>;
      
      case 'Finalizado':
        
        return <Space><CheckCircleTwoTone twoToneColor="#52c41a" /><h3>{estado} </h3></Space>;
    
      default:
        return <h3><Text type="danger">Sin asignar</Text></h3>
    }
    
  };

 


  return (
    <div>
      <Divider style={divider}/>
        <Row gutter= {24} justify={'space-around'} style={data}  align={'middle'}>
            <Col span={4} ><h3>{proyect.proyecto}</h3></Col>
            <Col span={4} ><h3>{proyect.cliente}</h3></Col>
            <Col span={4} ><h3>{proyect.ubicacion}</h3></Col>
            <Col span={4} >{chooseIcon(proyect.estado)} </Col>
            <Col span={2}><Borrar id={proyect.id}/></Col>
            <Col span={2}><EditProject proyect={proyect} id={proyect.id}/></Col>

            
        </Row>
        
        

    </div>
  )
}

