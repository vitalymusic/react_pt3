import {Link,useParams} from 'react-router-dom';
import { useState,useEffect } from "react";


function ProductPage() {
    const { productID } = useParams();

    const [productData, setProductData] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+productID)
        .then(res => res.json())
        .then(data => setProductData(data));
    },[])




    return ( 
    <>
        <Link to="/about">Atgriezties uz galveno</Link>
        <h1>{productData.title}</h1>
        <div className="images">   
           {productData?.images?.map((item, i) => (
                <img src={item} key={i} alt={`Product image ${i}`} />
            ))}
        </div>
        <div className="desc">
            {productData.description}
        </div>


         
    </> );
}

export default ProductPage;