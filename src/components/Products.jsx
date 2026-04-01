import ProductCard from "./ProductCard";
import './products.css';

function Products() {
    const produkti = [
        {
            nosaukums:"dators 1",
            attels:"https://picsum.photos/id/5/500",
            cena:1300,
            nopirkt:()=>{alert("Nopirkts")}
        },
        {
            nosaukums:"dators 2",
            attels:"https://picsum.photos/id/6/500",
            cena:1800,
            nopirkt:()=>{alert("Nopirkts")}
        },
        {
            nosaukums:"dators 3",
            attels:"https://picsum.photos/id/7/500",
            cena:2300,
            nopirkt:()=>{alert("Nopirkts")}
        }
    ]




    return ( 
    <>
        <h1>Produktu katalogs</h1>
        <div className="product_grid">
            <ProductCard name="Dators 1" attels="https://picsum.photos/id/5/500" cena="1300" nopirkt={()=>{alert("Nopirkts!")}} />
            <ProductCard name="Dators 2" attels="https://picsum.photos/id/6/500" cena="1800" nopirkt={()=>{alert("Nopirkts!")}} />
            <ProductCard name="Dators 3" attels="https://picsum.photos/id/7/500" cena="2300" nopirkt={()=>{alert("Nopirkts!")}} />
        </div>
        

    </> );
}

export default Products;