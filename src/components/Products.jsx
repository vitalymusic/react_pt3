import ProductCard from "./ProductCard";
import './products.css';
import { useState } from "react";

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

    let [view,setView] = useState('grid');


    return ( 
    <>
        <h1>Produktu katalogs {view}</h1>
        <div className="buttons">
            <button onClick={()=>{setView("grid")}}>GRID</button>
            <button onClick={()=>{setView("row")}}>ROW</button>
        </div>
        <div className={'product_'+view}>
            {produkti.map((item,i)=>{
                return (
                    <ProductCard name={item.nosaukums} attels={item.attels} cena={item.cena} nopirkt={item.nopirkt} key={i}/>
                )
            })}

           
        </div>
        

    </> );
}

export default Products;