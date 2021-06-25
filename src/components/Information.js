import '../App.css';
import {NavLink } from 'react-router-dom';
import Personal from './Personal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Location from './Location';
import Contact from './Contact';
import PaymentMethod from './Payment-methods';
import Payments from './Payments';
function Information() {
    return (
        <div className="Personal">
            <div className="personalnavbar">
            <div className="personaldiv" >
            <div><NavLink to="/profile/information/personal" className="linkss2" activeStyle={{
                        fontWeight: "bold",
                        backgroundColor:'rgb(240, 239, 239)',
                    }}>Personal</NavLink></div>
                    <div><NavLink to="/profile/information/location" className="linkss2" activeStyle={{
                        fontWeight: "bold",
                        backgroundColor:'rgb(240, 239, 239)',
                    }}>Ubicación</NavLink></div>
                    <div><NavLink to="/profile/information/contact" className="linkss2" activeStyle={{
                        fontWeight: "bold",
                        backgroundColor:'rgb(240, 239, 239)',
                    }}>Contacto</NavLink></div>
                    <div><NavLink to="/profile/information/payment-methods" className="linkss2" activeStyle={{
                        fontWeight: "bold",
                        backgroundColor:'rgb(240, 239, 239)',
                    }}>Métodos de pago</NavLink></div>
                    <div><NavLink to="/profile/information/payments" className="linkss2" activeStyle={{
                        fontWeight: "bold",
                        backgroundColor:'rgb(240, 239, 239)',
                    }}>Pagos</NavLink></div></div>
            </div>
            <div className="personalform">
            <Switch>
            <Route exact path="/profile/information/personal" component={Personal} />
            <Route exact path="/profile/information/location" component={Location} />
            <Route exact path="/profile/information/contact" component={Contact} />
            <Route exact path="/profile/information/payment-methods" component={PaymentMethod} />
            <Route exact path="/profile/information/payments" component={Payments} />
            </Switch>
            </div>
        </div>
    );
}

export default Information;




