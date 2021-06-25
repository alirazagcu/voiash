import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Nav} from  'react-bootstrap';
import {Link} from 'react-router-dom';
import Profile from './Profile.js';
function RouteConfig1() {
    return (
        <Router>
            <div className="profile">
            <Nav variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/" as={Link} to="ppp">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  >Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  disabled>
                        Disabled
                      </Nav.Link>
                </Nav.Item>
            </Nav>     
        </div>
            <div className="comp">
                <Switch>
                    <Route exact path="/ppp" component={Profile} />
                    <Route path="*" component={() => <h2>404 Not Found</h2>} />
                </Switch>
            </div>
           
        </Router>

    );
}
export default RouteConfig1;