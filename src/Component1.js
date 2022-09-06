import React from 'react'
import './styling.css';
import {Container} from './styles'
function Component1() {
  return (
    <Container>
    <div className='com1'>
    <span>Shipping</span>
    <div className='first'>
    <div>
    <h5 style={{FontFamily: 'Inter', FontStyles: 'normal' , fontWeight: '700', fontStyle: '16px', lineHeight: '150%'}}>John Michael</h5>
    </div>
    <div style={{display:'inline-flex'}} >
      <h3 style={{color: '#29007C'}}>Fed</h3>
      <h3 style={{color: '#FF5A00'}}>Ex</h3>
    </div>
    </div>
    <div className='second'>
    <div>
    <p>500 7th Avenue, Manhatten,<br></br> New York, NY, 10018</p>
    
    <p style={{fontSize: '12px',textDecoration:'underline'}}>john.michael@domain.com</p>
    <p style={{fontSize: '12px',textDecoration:'underline'}}>(456) 8929 1231</p>
    </div>
    <div>
    <span style={{color: '#FF0000',fontSize:'11px', fontWeight:'700'}}>Overnight</span>

    </div>
    </div>
    </div>
    </Container>
  )
}

export default Component1