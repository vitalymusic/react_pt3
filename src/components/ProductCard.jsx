function ProductCard(props) {
    return ( 
    <>
        <div className="product">
            <img src={props.attels} alt="" />
            <h3>{props.name}</h3>
            <p className="price">{props.cena} &euro;</p>
            <button onClick={props.nopirkt}>Pievienot grozam</button>
        </div>
    </> 
    );
}

export default ProductCard;