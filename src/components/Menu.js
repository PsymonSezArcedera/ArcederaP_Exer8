import React from 'react';
import './App.css';

//Functionn for creating menu
function CreateMenu(props){
    let menuItems = props.data

    return(
        <header>
        <ul class="navbar">
            <h2 id="lazado">LAZADO</h2>
            {
            menuItems.map((items) =>{
                return <li key ={items.id}id = "navItems"><a href= {items.url}>{items.name}</a></li>
            })
        }
        </ul>
        </header>
    )
}

export default CreateMenu