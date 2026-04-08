import {Link} from 'react-router-dom';
function ProductCard(props) {
    return ( 
    <>
        <div className="product">
            <Link to={props.id}> 
                <img src={props.attels} alt={props.title} />
            </Link> 
           
            <h3>{props.name}</h3>
            <p className="price">{props.cena} &euro;</p>
              
            <button onClick={props.nopirkt}>Pievienot grozam</button>
        </div>
    </> 
    );
}

export default ProductCard;