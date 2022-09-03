import { useAuthcontext } from "../context/AuthContext";

export const useLogout = () => {

    const {dispatch} = useAuthcontext();

    const logout = () => {
        localStorage.removeItem('user');

        dispatch({type: 'LOGOUT'});

    }

    return {logout}
}