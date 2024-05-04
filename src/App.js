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
  { name: "Frying pan", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 4},
  { name: "Pillow", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 3},
  { name: "Tumbler", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 2},
  { name: "Fan", url: "https://i.ebayimg.com/00/s/MTEyNVgxNjAw/z/fZAAAOSwvEFjV~wQ/$_1.PNG", id: 1},
];



function App() {
  
  return (
    <div>
      <CreateMenu data = {menus} />
      <ShoppingItems data= {items} />
    </div>
  );
}

export default App;
