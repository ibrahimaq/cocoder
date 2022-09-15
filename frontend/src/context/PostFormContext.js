// import { createContext, useReducer, useContext, useEffect} from 'react'

// export const PostForm = createContext();

// export const usePostContext = () => {
//     const context = useContext(PostForm);

//     return context;
// }

// export const postReducer = (state, action) => {
//     switch (action.type) {
//         case 'Edit':
//             return {user: action.payload}
        
//         case 'LOGOUT':
//             return {user: null}

//         default:
//             throw new Error('no such action in postReducer')
//     }
// }

// export const AuthPostProvider = ({children}) => {
//     const [state, dispatch] = useReducer(postReducer, {postForm: null})
//     console.log('PostForm State:', state)
//     useEffect(() => {
       
//         //check if user exists in localStorage
//         const user = JSON.parse(localStorage.getItem('post'))
//         if (user){
//             dispatch({type: 'LOGIN', payload: user})
//         }

//         }, [])
    
   

//     return (
//         <PostForm.Provider value={{...state, dispatch}}>
//             {children}
//         </PostForm.Provider>
//     )
 
// }