import { createContext, useReducer, useContext, useEffect } from "react";

export const UserContext = createContext();

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
}

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, user: action.payload};
        
        // case 'SET_EMAIL':
        //     return {...state, email: action.payload}
        
        case 'SET_LOGGED_IN':
            return {...state, isLoggedIn: action.payload}
    
        default:
            throw new Error('No named action in userReducer');
    }
}



export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null,
        isLoggedIn: false,
    });

    useEffect(()=> {
        localStorage.setItem('devpalUser', JSON.stringify(state))
    }, [state])

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}