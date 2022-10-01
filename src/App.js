
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './Layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetils from './components/FriendDetails/FriendDetils';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        {
          path: "/friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          },
          element: <FriendDetils></FriendDetils>,
        },
        {
          path: "/posts",
          loader: async()=>{
            return fetch("https://jsonplaceholder.typicode.com/posts")
          },
          element: <Posts></Posts>
        },
        {
          path: "/post/:postId",
          loader: async({params})=>{
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails></PostDetails>
        }
      ],
    },

    { path: "/products", element: <Products></Products> },
    { path: "*", element: <div> This Route not found</div> },
  ]);
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
