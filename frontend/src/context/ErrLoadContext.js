// import { createContext, useReducer, useContext, useEffect} from 'react'

// export const ErrLoadContext = createContext();

// export const useErrLoadcontext = () => {
//     const context = useContext(ErrLoadContext);

//     return context;
// }

// export const errLoadReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOADING':
//             return {loading: action.payload}
        
//         case 'ERROR':
//             return {error: action.payload}

//         default:
//             throw new Error('no such action in authReducer')
//     }
// }

// export const ErrLoadProvider = ({children}) => {
//     const [state, dispatch] = useReducer(errLoadReducer, {
//         error: null,
//         loading: null
//     })
//     console.log('ErrLoadContext State:', state)
//     useEffect(() => {
       
//         console.log(state)
//         }, [])
    
   

//     return (
//         <ErrLoadContext.Provider value={{...state, dispatch}}>
//             {children}
//         </ErrLoadContext.Provider>
//     )
 
// }