import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateService from "./components/CreateService/CreateService";
import DetailService from "./components/DetailService/DetailService";
import YourAccount from "./components/YourAccount/YourAccount";
import Chat from "./components/chat/chat";
import React from "react";
<<<<<<< HEAD
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
=======
>>>>>>> e128078e238f751c68c5c43e852b862bd305d835

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/service" component={CreateService} />
      <Route
        exact
        path="/services/:id"
        render={({ match }) => {
          return <DetailService id={match.params.id} />;
        }}
      />
      <Route exact path="/account" component={YourAccount} />
    </div>
  );
}

export default App;
