    import { Radio } from 'antd';
    import { Button } from 'antd';
    import React from 'react'
    import {Input, Space } from 'antd';
    import neon from './pictures/neon.jpg';
    import { Container, InputStyled, DatePickerStyled } from './styles';
    import styled from 'styled-components'
    import { DownOutlined } from '@ant-design/icons';
    import { Dropdown, Menu} from 'antd';
    import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
    //import './responsive.css';
   

    const App = () => (
      <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    );

    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    const menu = (
      <Menu
        items={[
          {
            label: <a>Male</a>,
            key: '0',
          },
          {
            label: <a>Female</a>,
            key: '1',
          },
          
          {
            label: 'Other',
            key: '3',
          },
        ]}
      />
    );
    function TestComponent() {
      return (
          
          <Container>
            <Containern>
              <Newclass>
                <div className='column'>
              
                  <img src={neon} alt=''></img>
                  
                </div>
                <div className='column'>
                  <Width>
                <Info>
                  <Spaced direction="vertical">
                    <h3 style={{color:'white'}}>Registration Info</h3>
                    <InputStyled placeholder="Full Name" />
                    <DatePickerStyled placeholder="Birthdate"  onChange={onChange} />
                    <InputStyled placeholder="Email" />
                      <InputStyled placeholder="Phone" />
                    <Dropdown overlay={menu} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                    <InputStyled placeholder="Select" />
                      <Space>
                    Gender
                  <DownOutlined />
                  </Space>
                </a>
                </Dropdown>
                
                <Space direction="vertical">
        <Input.Password placeholder="input password" />
        <Input.Password
          placeholder="confirm password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Space>
      <br></br>
      <Button type="primary">Sign Up</Button>
                    </Spaced>
                    </Info>
                    </Width>
                    </div>
                </Newclass>
              </Containern>
          </Container>
        
        
      )
    }

    const Containern = styled.div 
    `
    `
    
    const Newclass = styled.div
    `
    display: flex;
    justify-content: center;
    height: 100%;
    `
    const Width = styled.div
    `
    `
  const Spaced = styled(Space) 
  `
  width:100%;
  `

    const Info = styled.div
    `
    background-color: #121213;
    text-color: white;
    padding: 60px;
    height: 500px;

    `
  const Image = styled.div 
  `
  height: -webkit-fill-available;
  `
    export default TestComponent