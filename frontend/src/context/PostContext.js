import { createContext, useReducer, useContext, useEffect } from 'react'

export const PostContext = createContext();

export const usePostContext = () => {
    const context = useContext(PostContext);

    if(!context){
        throw Error('usePostContext must be used inside PostContextProvider')
    }

    return context;
}

export const postReducer = (state, action) => {
    switch (action.type) {
        case 'POST':
            return {...state, post: action.payload}
        
        case 'EDITING':
            return {...state, editing: action.payload}

        case 'SUCCESS':
            return {...state, success: action.payload}

        case 'ERROR':
            return {...state, error: action.payload}

        default:
            throw Error('no such action in postReducer')
    }
}

export const PostContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(postReducer, {post: null, editing: false, success: null, error: null})

    useEffect(() => {
        console.log('Post State: ', state)
        
    }, [state])
    
    
    
   

    return (
        <PostContext.Provider value={{...state, dispatch}}>
            {children}
        </PostContext.Provider>
    )
 
}