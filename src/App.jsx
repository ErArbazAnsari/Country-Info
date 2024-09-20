import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import Error from "./pages/Error";
import Loader from "./components/UI/Loader";
import CountryDetails from "./pages/CountryDetails";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            loaderElement: <Loader />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/country",
                    element: <Country />,
                },
                {
                    path: "/country/:name",
                    element: <CountryDetails />,
                },
            ],
        },
    ]);
    return (
        <div className="container mx-auto">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
