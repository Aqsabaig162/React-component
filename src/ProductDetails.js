import {
    ListItemContainer,
    OrderContainer,
    OrderHeaderContainer,
    QuantityContainer,
    InnerText,
    ProductTitleContainer,
    ListTitle
} from './styles'

import Uparrow from './pictures/Uparrow.svg'


const ProductDetails= () => {
    return (
        <>
            <div style={{ cursor: 'pointer' }}>
                <ListItemContainer >
                    <OrderContainer>
                        <OrderHeaderContainer>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'inline-block', width: '60px' }}><QuantityContainer> <InnerText></InnerText></QuantityContainer></div>
                                <div style={{ display: 'inline-block' }}>
                                    <ProductTitleContainer>Product Name</ProductTitleContainer>
                                    <ListTitle style={{ color: '#808191', paddingLeft: '1rem', paddingBottom: '0rem', fontSize: '12px' }} >134FADJAF8</ListTitle >
                                </div>
                            </div>
                            <div>
                                
                                <QuantityContainer style={{display : 'inline-block',background:'none'}}><img src={Uparrow} alt='FilterIcon'></img> </QuantityContainer>
                            </div>
                        </OrderHeaderContainer>
                    </OrderContainer>
                </ListItemContainer>
            </div>
        </>
    );
}
export default ProductDetails;
