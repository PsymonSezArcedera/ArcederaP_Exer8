import React from 'react';
import './App.css';
import { useState } from "react";


function ShoppingItems(props){
    let shoppingItems = props.data
    let cartItems = props.cart

    function addCart(products){
        setVal((prev) => prev+1)
    }
    
    function addItem(products){
        setItem((items) => {
            const nval = [...items, {name:products.name, quantity:1}];
            console.log(nval);
            return nval;
        });
    }

    function deleteItem(product){
        setItem((items) =>{
            const nval = items.filter((item) => item !== product);
            return nval;
        })
        setVal((prev) => prev-1)
    }


    const [val,setVal] = useState(props.val);
    const [items, setItem] = useState(cartItems)


    return(
        <div>
            <ol class="allitems">
                {
                    shoppingItems.map((products) =>{
                        return <div class = "itemcard">
                            <img src={products.url} alt="Item" class="itemimage"></img>
                            <div class = "itemdetails"><h4>{products.name}</h4><h4>₱ {products.price}</h4></div>
                            <button class="addtocart" onClick={() => {addCart(products);addItem(products)}}><span>ADD</span></button>
                        </div>
                    })
                }
            </ol>

            <div class = "shoppingcart">
                <div class="total"><h2>Total: {val}</h2></div>
                <ol class = "cartitems">
                    {
                        items.map((items) =>{
                            return <div class = "cartitemcard">
                                <h4>{items.name}</h4>
                                <h5>QTY: {items.quantity}</h5>
                                <button onClick={()=>{deleteItem(items)}}>DELETE</button>
                            </div>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default ShoppingItems