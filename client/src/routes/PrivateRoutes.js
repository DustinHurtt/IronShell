import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FindMentor from "../pages/FindMentor"

const PrivateRoutes = ({logout}) => {

    return (
        <Routes>
            <Route path="/" element={<Home logout={logout} />}  />
            <Route path="/find-mentor" element={<FindMentor />}  />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes> 
        )

}

export default PrivateRoutes

