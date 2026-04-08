import {Link} from 'react-router-dom';
function ProductCard(props) {
    return ( 
    <>
        <div className="product">
            <img src={props.attels} alt="" />
            <h3>{props.name}</h3>
            <p className="price">{props.cena} &euro;</p>
            <Link to={props.id}>Skatīt produktu...</Link>    
            <button onClick={props.nopirkt}>Pievienot grozam</button>
        </div>
    </> 
    );
}

export default ProductCard;