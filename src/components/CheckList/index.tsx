import react, { useState } from 'react';
import * as S from './style';
import 'antd/dist/antd.css';
import { Checkbox, Form, message,} from 'antd';
import Button from '../Button';
import { Link } from 'react-router-dom';

interface CheckListProps{
  currentRoute: string;
}
const  CheckList: React.FC<CheckListProps> = ({
  currentRoute,
}) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const submit = () => {
    message.success('Boa Rota para vocês!');
  }
  return (
    <div>
      <S.containerChecklist>
        
        <Form
          style={{
            width: 500,
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#474A4B'
          }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item name="rota" >
            {currentRoute === '1' ? (
              <h2 style={{ fontWeight: 650, color: '#474A4B'}}>Rota Madalena</h2>
            ) : (
              <h2 style={{ fontWeight: 650, color: '#474A4B'}}>Rota Caxangá</h2>
            )}
            <Checkbox 
              value="A" 
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Marmitas
            </Checkbox>
            <br/>
            <Checkbox
              value="B"
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Bolos
            </Checkbox>
            <br />
            <Checkbox 
              value="C"
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Sanduíches
            </Checkbox>
            <br />
            <Checkbox
              value="D"
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Talheres
            </Checkbox>
            <br />
            <Checkbox
              value="E"
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Copos
            </Checkbox>
            <br />
            <Checkbox
              value="F"
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Suco
            </Checkbox>
            <br />
            <Checkbox 
              value="G"
              style={{ 
                paddingLeft: '5px', 
                lineHeight: '32px', 
                background: '#fff', 
                borderRadius: '10px',
                width: '60%',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}
            >
              Café
            </Checkbox>
            <br />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to="/Home" style={{color: '#8C64FF', }}>
              <Button 
                width={150}
                variant="primary"
                onClick={submit}
                >
                  Finalizar
              </Button>
            </Link>
          </Form.Item>

        </Form>
        </S.containerChecklist>
    </div>
  )
}
export default CheckList;

