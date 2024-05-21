import React from 'react'
import { collection, deleteDoc, getDoc, doc } from 'firebase/firestore'
import {db} from '../firebase/config'
import { Popconfirm, Button, message } from 'antd';
import {QuestionCircleOutlined, DeleteOutlined} from '@ant-design/icons'

export const Borrar = ({id}) => {

    const borrar = (e) =>{
        const deleteRef =  doc (db, "proyectos",id);
        /*getDoc (deleteRef)
            .then((res)=>{
                if (res.exists) {
                    console.log(res.data())
                }
            });*/
            
                

                
        deleteDoc(deleteRef)
            .then((res) =>{
                //message.success('Proyecto borrado id: ' + i);
                 window.location.reload();
                
            }).catch((error) => {
                message.success('Error al eliminar el proyecto');
              });

      }
    
  return (
  <div>
    <Popconfirm
        placement="topRight"
        title={'Borrar proyecto'}
        description={'Seguro desea borrar este proyecto'}
        icon={<QuestionCircleOutlined style={{color: 'red',}}/>}
        onConfirm={borrar}
        okText="Si"
        cancelText="No"
    >
        <Button type="default"><DeleteOutlined /></Button>
    </Popconfirm>
  </div>
  )
}
