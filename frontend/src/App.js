import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./componenets/UserList";
import AddUser from "./componenets/AddUser";
import EditUser from "./componenets/EditUser";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="add" element={<AddUser/>}/>
      <Route path="edit/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
