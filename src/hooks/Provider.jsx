import Context  from "./createContext";
import {Login, Logout} from "./useContext";


function Provider() {
  const theme = {
    background : "yellow",
    color : "red",
    font : "2em"
  } 

    return (
      <Context.Provider value={theme}>
        <Login/><Logout/>
      </Context.Provider>
    );
  }

  export default Provider;