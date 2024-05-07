import CreateMenu from "./components/Menu";
import ShoppingItems from "./components/Items"

//List for nav bar menus
const menus = [
  { name: "Clothing", url: "#", id: 4},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Groceries", url: "#", id: 2},
  { name: "Appliances", url: "#", id: 1},
]; 

//List of items
const items = [
  { name: "Frying pan", url: "https://d2yfrknpbzox7k.cloudfront.net/catalog/product/cache/b409a825fa2f4f883139204ad67aa203/6/0/60003200-s_professional_12-5in_fry_pan_01_26.jpg", id: 4, price:299},
  { name: "Pillow", url: "https://mandauefoam.ph/cdn/shop/products/SofaFiberCushionPPLW1.png?v=1669944628&width=2048", id: 3, price:199},
  { name: "Tumbler", url: "https://image.made-in-china.com/202f0j00AoJfweCldmbB/Double-Wall-Stainless-Steel-Tumber-Stainless-Steel-Auto-Coffee-Tumbler-Stainless-Steel-Cup-with-Lip-and-Straw-Promotional-Stainless-Steel-Mug-with-Straw.jpg", id: 2, price:699},
  { name: "Bag", url: "https://thingsremembered.com.ph/cdn/shop/products/H21bc90139bb8456bbb986916fdecfe3d0.jpg_960x960_1.webp?v=1669684556", id: 1, price:250},
  { name: "Fan", url: "https://fukuda-asia.com/wp-content/uploads/2021/11/FG108-1.jpg", id: 1, price:899},
  { name: "Guitar", url: "https://ddmusic.ph/wp-content/uploads/2021/07/LIGHTFOOT-ST-ELECTRIC-GUITAR-BLACK.jpg", id: 3, price:5999}
];

//List for items that the user will add to cart
const cart = []

function App() {
  return (
    <div>
      <CreateMenu data = {menus} />
      <ShoppingItems data= {items} val={0} cart = {cart}/>

    </div>
  );
}

export default App;
