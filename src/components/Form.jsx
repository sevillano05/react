import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Modal, Select } from 'antd';
import{addDoc, collection, getDoc} from 'firebase/firestore'
import{db} from '../firebase/config';


export const AddProject = () => {


  const collectionRef = collection(db, 'proyectos' )

  

  const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
  
  const [form] = Form.useForm();
  const onFinish =  async (values) => {
    console.log('Received values of form: ', values);
    try {
      await addDoc(collectionRef, values)
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  return (
    <div>
<Button type="primary" onClick={showModal}>
        Añadir nuevo Proyecto
      </Button>
      <Modal
        title="Nuevo Proyecto"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose="true"
        footer={null}
        okButtonProps={{
          disabled: false,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
     <Form
      {...formItemLayout}
      form={form}
      name="Añadir Proyecto"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="proyecto"
        label="Nombre del proyecto"
        rules={[{},
          {
            required: true,
            message: 'Porfavor introduzca el nombre del proyecto',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="ubicacion"
        label="Ubicacion del proyecto"
        rules={[{},
          {
            required: true,
            message: 'Porfavor introduzca la ubicacion del proyecto',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="cliente"
        label="Cliente"
        tooltip="El nombre de la empresa, o de la persona en cuestion"
        rules={[
          {
            required: true,
            message: 'Porfavor agregue el cliente',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="estado"
        label="Estatus"
        rules={[
          {
            required: true,
            message: 'Seleccione el estatus del proyecto',
          },
        ]}
      >
        <Select placeholder="Seleccione el estatus">
          <Option value="En curso">En curso</Option>
          <Option value="Stand by">Stand by</Option>
          <Option value="Finalizado">Finalizado</Option>
        </Select>
      </Form.Item>

           <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Crear
        </Button>
      </Form.Item>
    </Form>
        
      </Modal>
</div>
  );
};
