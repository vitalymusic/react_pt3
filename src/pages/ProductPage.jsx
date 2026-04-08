import {Link,useParams} from 'react-router-dom';
function ProductPage() {
    const { productID } = useParams();

    return ( 
    <>
        <Link to="/about">Atgriezties uz galveno</Link>
        <h1>produkta lapa {productID}</h1>

         
    </> );
}

export default ProductPage;