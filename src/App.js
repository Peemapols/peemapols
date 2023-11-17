import './App.css';
import Nav from './Components/Nav';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Contact from './Components/Contact';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
])


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
