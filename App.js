const heading = React.createElement("h1", { id: "heading" }, "Hello Namaste React");
// The first argument is the type of element we want to create (in this case, an h1 element).
// The second argument is an object that contains the attributes we want to set on the element (in this case, an id attribute with the value "heading").
// The third argument is the content we want to put inside the element (in this case, the text "Hello Namaste React").

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {},
            "Hello H1 Namaste R eact"
        ),
        React.createElement(
            "h2",
            {},
            "Hello H2 Namaste React"
        )]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement(
            "h3",
            {},
            "Hello H3 Namaste R eact"
        ),
        React.createElement(
            "h4",
            {},
            "Hello H4 Namaste React"
        )]
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // This is how we can render a React element to the DOM. We are rendering the heading element to the root element.