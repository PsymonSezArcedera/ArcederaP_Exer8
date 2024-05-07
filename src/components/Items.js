import React from 'react';
import './App.css';
import { useState } from "react";


function ShoppingItems(props){
    let shoppingItems = props.data
    let cartItems = props.cart

    function addCart(products){
        setVal((prev) => prev+products.price)
    }
    
    function addItem(products){
        setItem((items) => {
            const nval = [...items, {name:products.name, quantity:1}];
            console.log(nval);
            return nval;
        });
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
                <h2>Total: {val}</h2>
                <ol class = "cartitems">
                    {
                        items.map((items) =>{
                            return <div class = "cartitemcard">
                                <h4>{items.name}</h4>
                                <h5>QTY: {items.quantity}</h5>
                                <button>ADD</button>
                            </div>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default ShoppingItems