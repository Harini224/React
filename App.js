/*

nested structure of React.createElement

<div className="container">
<h1>Hello, I am in first row</h1>
<div className="row">
 <h1>Hello, me!</h1>
 <div>
   <h2>Hello, I am in second row</h2>
 </div>
</div>
</div>

*/

const container = React.createElement("div", { className: "container" }, [
  React.createElement("h1", {}, "Hello, I am in first row"),
  React.createElement("div", { className: "row" },[
    React.createElement("h1", {}, "Hello, me!"),
    React.createElement("div", {}, [
      React.createElement("h2", {}, "Hello, I am in second row"),
    ]),
  ]
  )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);


// const heading = React.createElement('h1',{},'Hello, me!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);