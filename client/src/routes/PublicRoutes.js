// import { useState } from 'react';
import { 
    // BrowserRouter, 
    Navigate, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
// import Login from '../pages/Login';
import AboutPage from "../pages/AboutPage"

const PublicRoutes = (props) => {

    // const [errorMessage, setErrorMessage] = useState("");

    // <BrowserRouter>

    return (
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/login" element={<Landing register={props.register} login={props.login} setErrorMessage={props.setErrorMessage} />} />
            <Route path="/signup" element={<Landing register={props.register} login={props.login} setErrorMessage={props.setErrorMessage} />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
        )

    }

export default PublicRoutes