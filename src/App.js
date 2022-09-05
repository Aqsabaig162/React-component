
import {Container, Header, Component1, Component2,Product, Footer} from './styles'
import img1 from './pictures/Vector.svg'
import gray from './pictures/gray.png'
import { FontStyles } from './styles';
import './styling.css';
//import './fonts';

function App() {
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
        
        <p>500 7th Avenue, Manhatten,<br></br> New York, NY, 10018</p>
        
        <p style={{fontSize: '12px',textDecoration:'underline'}}>john.michael@domain.com</p>
        <p style={{fontSize: '12px',textDecoration:'underline'}}>(456) 8929 1231</p>
        </div>
      </Component1>

      <Component2>
      <div className='com1'>
        <span>Items</span>
       

      <Product>
     <div className='products'>
      <div className='prod'>
     <div><img style={{background:'#D9D9D9',borderRadius:'8px', height:'40px', width:'40px'}} src={gray} alt=''></img></div>
     <div className='mar'>
      <h5 style={{FontFamily: 'Inter', FontStyles: 'normal' , fontWeight: '700', fontStyle: '16px', lineHeight: '150%',display:'block'}}>Product Name</h5>
      <span>WEH34T2</span>
      </div>
     </div>
     </div>
      </Product>

     <div> <img style={{background:'#F2F2F2',borderRadius:'8px', height:'177px', width:'372px'}} src={gray} alt=''></img></div>
       <div className='last'>
      <div>
        <ul><li>Weight</li><li>Size</li><li>Color</li><li>Price</li></ul>
      </div>
      <div className='ul2'>
        <ul><li>0.8 lbs</li><li>10’’ x 14’’ x 8’’</li><li>Magenta</li><li>$10.99</li></ul>
      </div>
      
       </div>
      </div>
      </Component2>
      
      <Product>
     <div className='products'>
      <div className='prod'>
     <div><img style={{background:'#D9D9D9',borderRadius:'8px', height:'40px', width:'40px'}} src={gray} alt=''></img></div>
     <div className='mar'>
      <h5 style={{FontFamily: 'Inter', FontStyles: 'normal' , fontWeight: '700', fontStyle: '16px', lineHeight: '150%',display:'block'}}>Product Name</h5>
      <span>WEH34T2</span>
      </div>
     </div>
     </div>
      </Product>

        <Footer>
         <button>BEGIN</button>
        </Footer>
      </Container>
    </div>

  );
}

export default App;
