import SubjectList from "./SubjectList";
import CreateMenu from "./components/Menu";
import ShoppingItems from "./components/Items"

const menus = [
  { name: "Clothing", url: "#", id: 4},
  { name: "Gadgets", url: "#", id: 3},
  { name: "Groceries", url: "#", id: 2},
  { name: "Appliances", url: "#", id: 1},
]; 

const items = [
  { name: "Frying pan", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 4, price:200},
  { name: "Pillow", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 3, price:300},
  { name: "Tumbler", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 2, price:700},
  { name: "Fan", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 1, price:250},
  { name: "Fan", url: "https://fukuda-asia.com/wp-content/uploads/2021/11/FG108-1.jpg", id: 1, price:100},
  
];

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
