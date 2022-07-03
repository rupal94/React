import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";

function App() {
    return (
        <>
            <h1 className="Heading_page"> List of top character</h1>
            {Cdata.map((val) =>
            (
                <Card
                    key={val.id}
                    imagesrc={val.imagesrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            )
            )}
        </>
    );
}
export default App;