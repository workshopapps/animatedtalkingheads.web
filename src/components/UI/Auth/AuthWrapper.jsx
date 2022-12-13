import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { UserAuth } from "../../../context/AuthContext"

const AuthWrapper = ({children}) => {

    const [firstRender, setFirstRender] = useState(true)

    const { user } = UserAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!user && !firstRender) return navigate("/sign-in");   
    }, [user]);

    console.log(!user)

    useEffect(() => {
        setFirstRender(false)
    }, [])

    return (
        <div>{children}</div>
    )
}

AuthWrapper.propTypes = {
    children: PropTypes.element,
};

export default AuthWrapper