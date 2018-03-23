import {Store} from "./pages/Store";

require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Home } from './pages/Home';
import { BaseLayout } from "./pages/BaseLayout";
import { Index } from './pages/BaseLayout';
import 'font-awesome/css/font-awesome.min.css';


render(
    <Router history={browserHistory}>
        <Route path="/" component={BaseLayout}>
            <IndexRoute component={ Home }/>
           <Route path="/store" component={Store} />

        </Route>
    </Router>,
    document.getElementById('app'));