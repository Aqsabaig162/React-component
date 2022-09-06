
import {Container, Header, Component1, Component2,Product, Footer} from './styles'
import img1 from './pictures/Vector.svg'
import gray from './pictures/gray.png'
import ProductDetails from './ProductDetails';

import './styling.css';
//import './fonts';

function SideComponent() {
  return (
    <div className="App">
      <Container>
        <Header  className='header'>
        <div>
        <h4 style={{fontFamily:''}}>Order Details</h4>
        </div>
        <div>
        <a style={{alignItems:'center'}}>
          <img src={img1} alt=''></img>
        </a>
        </div>
        </Header>

      <Component1>
        <div style={{width: '100%'}}>
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
    </div>
      </Component1>

      <Component2>
      <div className='com1'>
        <span>Items</span>
       
       <div style={{}}>
      <ProductDetails></ProductDetails>
      </div>
     <div> <img style={{background:'#F2F2F2',borderRadius:'8px', height:'177px', width:'408px'}} src={gray} alt=''></img></div>
       <div className='last'>
      <div>
        <ul><li>Weight</li><li>Size</li><li>Color</li><li>Price</li></ul>
      </div>
      <div className='ul2'>
        <ul>
          <li style={{paddingLeft:'50px'}}>0.8 lbs</li>
          <li  style={{paddingLeft:'5px'}}>10’’ x 14’’ x 8’’</li>
          <li style={{paddingLeft:'40px'}}>Magenta</li>
          <li style={{paddingLeft:'50px'}}>$10.99</li>
        </ul>
      </div>
      
       </div>
      </div>
      </Component2>
      <div></div>
      <ProductDetails></ProductDetails>

        <Footer>
         <button>BEGIN</button>
        </Footer>
      </Container>
    </div>

  );
}

export default SideComponent;
