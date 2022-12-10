import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { UserAuth } from "../../../context/AuthContext"

const AuthWrapper = ({children}) => {

    const { user } = UserAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) return navigate("/sign-in");   
    }, [user]);

    return (
        <div>{children}</div>
    )
}

AuthWrapper.propTypes = {
    children: PropTypes.element,
};

export default AuthWrapper