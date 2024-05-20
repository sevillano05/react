import React from 'react'
import { Row, Col } from 'antd'
import { Timestamp } from 'firebase/firestore';



export const ProyectList = ({proyect}) => {
    const formatDate = (timestamp) => {
        if (timestamp instanceof Timestamp) {
          const date = timestamp.toDate();
          return date.toLocaleDateString(); // You can customize the format here
        }};
  return (
    <div>
        <Row justify={'space-around'}>
            <Col span={4} ><h2>{proyect.proyecto}</h2></Col>
            <Col span={4} ><h2>{proyect.cliente}</h2></Col>
            <Col span={4} ><h2>{proyect.ubicacion}</h2></Col>
            <Col span={4} ><h2>{proyect.estado}</h2></Col>
            <Col span={4} ><h2>{formatDate(proyect.actualizacion)}</h2></Col>
            <Col span={4} ><h2>{formatDate(proyect.finalizacion)} </h2></Col>
        </Row>

    </div>
  )
}
