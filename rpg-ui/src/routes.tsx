import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home/home";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route Component = { Home }  path="/"/>
       </BrowserRouter>
   )
}

export default Routes;