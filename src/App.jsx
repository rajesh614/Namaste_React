import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../index.css";
// import Test from "./Test";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            {/* <Test /> */}
            <h1>Heading</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
