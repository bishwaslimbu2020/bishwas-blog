import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePage from "./pages/SinglePage";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout=()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/singlePage/:id",
        element:<SinglePage/>
      },{
        path:"/write",
        element:<Write/>
      },
    ]
  },{
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<Register/>
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App