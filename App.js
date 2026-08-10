import React from "react";
import ReactDOM from "react-dom/client";


const Title = <span className="title">Learn React!</span>;

const Heading = () => {
    return (
        <h1 className="head" tabIndex="05">
            {Title}
            Welcome to React!
        </h1>
    );
};

const HeadingComponent = () => {
    return (
        <div id="container">
            <Heading />
            <h1 className="heading">Hello, React Functional Component!</h1>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
