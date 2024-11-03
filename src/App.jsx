import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider 
} 
from "react-router-dom";
import JobPage from "./pages/JobPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/job/:id" element={<JobPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
