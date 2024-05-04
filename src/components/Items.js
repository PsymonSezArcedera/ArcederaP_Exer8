import React from 'react';
import './App.css';

function ShoppingItems(props){
    let shoppingItems = props.data
    return(
        <div>
            <ol class="allitems">
                {
                    shoppingItems.map((products) =>{
                        return <div class = "itemcard">
                            <img src={products.url} alt="Item" id="itemimage"></img>
                            <div class = "itemdetails"><h4>{products.name}</h4></div>
                            <button class="addtocart"><span>ADD</span></button>
                        </div>
                    })
                }
            </ol>
        </div>
    )
}

export default ShoppingItems