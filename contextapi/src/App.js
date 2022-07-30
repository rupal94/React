import React, { createContext } from "react";
import CompA from "./Component/CompA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (<>
    <FirstName.Provider value={"Rupal"}>
      <LastName.Provider value={"Deshmukh"}>
        <CompA />
      </LastName.Provider>
    </FirstName.Provider>
  </>);
}

export default App;
export { FirstName ,LastName};