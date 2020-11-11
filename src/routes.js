import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Erro from "./pages/Erro";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import {autenticado} from './auth'


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    autenticado() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{pathname: '/', state:{from:props.location}}}/>
    )
  )}/>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/filmes/:id" component={Filme}/>
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
