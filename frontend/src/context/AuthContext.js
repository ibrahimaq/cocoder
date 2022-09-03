import { createContext, useReducer, useContext, useEffect} from 'react'

export const AuthContext = createContext();

export const useAuthcontext = () => {
    const context = useContext(AuthContext);

    return context;
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload}
        
        case 'LOGOUT':
            return {user: null}

        default:
            throw new Error('no such action in authReducer')
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {user: null})
    console.log('AuthContext State:', state)
    useEffect(() => {
       
        //check if user exists in localStorage
        const user = JSON.parse(localStorage.getItem('user'))
        if (user){
            dispatch({type: 'LOGIN'})
        }

        }, [])
    
   

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
 
}