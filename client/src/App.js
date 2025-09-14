
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Person from './components/getuser/Person.jsx';
import AddUser from './components/adduser/AddUser.jsx';
import Edit from './components/updateuser/Edit.jsx';


function App() {
  const route= createBrowserRouter([
    {
      path:"/",
      element:<Person/>
    },
  {
     path:"/add",
      element:<AddUser/>
  },
    {
       path:"/edit/:id",
      element:<Edit/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
