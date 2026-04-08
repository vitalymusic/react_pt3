import ProductCard from "./ProductCard";
import './products.css';
import { useState,useEffect } from "react";

function Products() {
    
    let [products, setProducts] = useState([])
    let [categories, setCategories] = useState([])
    let [activeCategory, setActiveCategory] = useState('https://dummyjson.com/products/category/beauty')

    let [view,setView] = useState('grid');


    useEffect(()=>{
        fetch(activeCategory)
            .then(res => res.json())
            .then(data => setProducts(data.products))
    },[activeCategory])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))   
    },[])


    return ( 
    <>
        <h1>Produktu katalogs {view}</h1>
        <div className="categoriesButtons">
            {categories?.map((category,i)=>{
                return(
                    <button key={i} onClick={()=>{
                            setActiveCategory(category.url)
                    }}>{category.name}</button>
                )
            })}
        </div>

        <div className="buttons">
            <button 
                onClick={()=>{setView("grid")}} 
                className={view=="grid"?"active_btn":""}>GRID</button>
            <button 
                onClick={()=>{setView("row")}} 
                className={view=="row"?"active_btn":""}>ROW</button>
        </div>
        <div className={'product_'+view}>
            {products.map((item,i)=>{
                return (
                    <ProductCard name={item.title} attels={item.thumbnail} cena={item.price} nopirkt={item.nopirkt} key={i} id={"/product/"+item.id}/>
                )
            })}

           
        </div>
        

    </> );
}

export default Products;