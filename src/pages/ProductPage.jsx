import {useParams} from 'react-router-dom';
function ProductPage() {
    const { productID } = useParams();

    return ( 
    <>
        <h1>produkta lapa {productID}</h1>
         
    </> );
}

export default ProductPage;