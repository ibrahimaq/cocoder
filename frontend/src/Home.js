import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const Home = () => {

    const {state} = useContext(UserContext)
    console.log(state.user);

    return ( 
        <>
            <h1>Home page</h1>
            {state.user && <div>{JSON.stringify(state)}</div>}
        </>
        

     );
}
 
export default Home;