import React from 'react'
import './styling.css';
import arrow from './pictures/arrow.right.svg'
import arrowdown from './pictures/down.svg'
import arrowup from './pictures/Uparrow.svg'
import arrowrightside from './pictures/arrowrightside.svg'
import arrowleftside from './pictures/arrowleftside.svg'
function NewComponent() {
  return (
    <div>
        <div  className='pad'>
        <div className='com1'>
            <div className='spannew'>
    <span >Shipping</span>
    </div>
    <div className='first'>
    <div>
    <h4 style={{FontFamily: 'Inter', FontStyles: 'normal' , fontWeight: '700', fontStyle: '16px', lineHeight: '150%'}}>John Michael</h4>
    </div>
    <div style={{display:'inline-flex'}} >
      <h3 style={{color: '#29007C', fontSize: '26px'}}>Fed</h3>
      <h3 style={{color: '#FF5A00',fontSize: '26px'}}>Ex</h3>
    </div>
    </div>
    <div className='second'>
    <div>
    <div className='newcomsec'>
    <div><p style={{fontSize: '12px',textDecoration:'underline'}}>john.michael@domain.com</p></div>
    <div><p style={{fontSize: '12px',textDecoration:'underline'}}>(456) 8929 1231</p></div>
    </div>
    <p>500 7th Avenue, Manhatten, New York, NY, 10018</p>
    
    
    
    </div>
    <div>
    <span style={{color: '#FF0000',fontSize:'11px', fontWeight:'700', paddingRight:'10px'}}>Overnight</span>

    </div>
    </div>
    </div>
    </div>
     
     <div className=' com1 pad'>
    <div className='spannew '>
    <span >parcels</span>

    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
    <h5>Medium</h5>
    <div  className='pnewcom'>
     <div className='bluearrow'>
        <div><a>Print Shipping Label</a>
    <img style={{paddingLeft:'10px'}} src={arrow} alt=''></img></div>
    <div><a>Print Shipping Label</a>
    <img style={{paddingLeft:'10px'}} src={arrow} alt=''></img></div>
    <div><a>Print Shipping Label</a>
    <img style={{paddingLeft:'10px'}} src={arrow} alt=''></img></div>
    </div>
    </div>
    </div>

    <div className='mid'>
     <div> <span style={{color: '#808191'}}>10” x 8” x 6”</span>
     </div>
     <div>
        <img src={arrowup} alt=''></img>
     </div>
    </div>
    <div style={{display:'flex'}}>
    <div className='prod1'>
    <div className='productt'>sddsf</div>
    <div className='productt'>sfdsf</div>
    <div className='productt'>xscc</div>
    </div>
    <div className='prod2'>
    <div className='productt'></div>
    <div className='productt'></div>
    </div>
    </div>

    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div><h5>Small</h5></div>
        <div><img src={arrowdown} alt=''></img></div>
    </div>
    <div> <span style={{color: '#808191'}}>8” x 6” x 4”</span></div>
    </div>
     <div className='pad btnclass'>
        <div><button className='btn11'><img style={{paddingRight:'10px'}} src={arrowleftside} alt=''></img>Pack</button></div>
        <div><button style={{paddingLeft:'10px'}} className='btn22'>  Review <img style={{paddingLeft:'5px'}} src={arrowrightside} alt=''></img></button></div>
     </div>
    </div>
  )
}

export default NewComponent