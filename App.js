import React from "react";

const App = () => (
  <div className="images">
    <div className="image">
      <img src={require("./01.png")} />
      <h3> Title: alex </h3>
      <p> Artist: oswin blue </p>
      <p> Price: $1800 </p>
    </div>
    <div className="image">
      <img src={require("./02.png")} />
      <h3> Title: bob </h3>
      <p> Artist: oswin blue </p>
      <p> Price: $2800 </p>
    </div>
    <div className="image">
      <img src={require("./03.png")} />
      <h3> Title: dave </h3>
      <p> Artist: oswin blue </p>
      <p> Price: $2200 </p>
    </div>
    <div className="image">
      <img src={require("./04.png")} />
      <h3> Title: phil </h3>
      <p> Artist: oswin blue </p>
      <p> Price: $2300 </p>
    </div>
  </div>
);

export default App;
