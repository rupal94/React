import react from "react";
import ReactDom from "react-dom";
import "./index.css";
import Card from "./Card";
import Cdata from "./Cdata";

ReactDom.render(
  <>
    <h1 className="Heading_page"> List of top character</h1>
    {Cdata.map((val) =>
    (
      <Card
        imagesrc={val.imagesrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    )
    )}
  </>
  , document.getElementById("root")
);
