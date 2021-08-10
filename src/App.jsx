import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import HomeLayout from "./layouts/Home";

const Home = lazy(() => import("./views/Home"));
const Detail = lazy(() => import("./views/Detail"));

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <HomeLayout>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route path="*">
                <Redirect from="*" to="/" />
              </Route>
            </Switch>
          </Suspense>
        </HomeLayout>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
