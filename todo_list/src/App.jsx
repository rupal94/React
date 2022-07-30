import React from "react";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import Todos from "./Component/Todos"


function App() {
    const onDelete = (Todo)=>
    {
        alert("on delete"+Todo);
        
    }

    let TodosData =
        [
            {
                sno: 1,
                title: "Go To Home",
                desc: "Go to home by bike",
            },
            {
                sno: 2,
                title: "Go To class",
                desc: "Go to class by bike",
            },
            {
                sno: 3,
                title: "Go To Mall",
                desc: "Go to Mall by bike",
            },
        ]
    return (<>
        <Nav welcomePage={true} />
        <Todos TodosData={TodosData} onDelete={onDelete} />
        <Footer />
    </>);
}

export default App;