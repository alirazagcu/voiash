import '../App.css';
import pics from '../images/house.jpg';
import { Form, Col, Button, Card ,Table} from 'react-bootstrap';
import {Link,Route,Switch} from 'react-router-dom'
import Details from './Details'
function Groups() {
    return (
        <div className="person">
            <div className="person1">
                <Link to="/profile/reservations/groups/details" className="grouplink">
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgba(0,0,0,.06)' }} className="cardbody"  >
                    <Card.Body>
                        <div className="carddiv">
                       <div><img src={pics} className="cardimage"/></div>
                       <div><h5 className="groupcardtext">Medicina Bellvitge</h5>
                       <p className="grouppara">Riviera Maya - 22/05/2021 00:00 - 1250.00 EUR</p>
                       </div> 
                       </div>
                    </Card.Body>
                </Card>
                </Link>
                <Link className="grouplink">
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgba(0,0,0,.06)' }} className="cardbody"  >
                    <Card.Body>
                        <div className="carddiv">
                       <div><img src={pics} className="cardimage"/></div>
                       <div><h5 className="groupcardtext">Medicina Bellvitge</h5>
                       <p className="grouppara">Riviera Maya - 22/05/2021 00:00 - 1250.00 EUR</p>
                       </div> 
                       </div>
                    </Card.Body>
                </Card>
                </Link>
                <Link className="grouplink">
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgba(0,0,0,.06)' }} className="cardbody"  >
                    <Card.Body>
                        <div className="carddiv">
                       <div><img src={pics} className="cardimage"/></div>
                       <div><h5 className="groupcardtext">Medicina Bellvitge</h5>
                       <p className="grouppara">Riviera Maya - 22/05/2021 00:00 - 1250.00 EUR</p>
                       </div> 
                       </div>
                    </Card.Body>
                </Card>
                </Link>
                <Link className="grouplink">
                <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgba(0,0,0,.06)' }} className="cardbody"  >
                    <Card.Body>
                        <div className="carddiv">
                       <div><img src={pics} className="cardimage"/></div>
                       <div><h5 className="groupcardtext">Medicina Bellvitge</h5>
                       <p className="grouppara">Riviera Maya - 22/05/2021 00:00 - 1250.00 EUR</p>
                       </div> 
                       </div>
                    </Card.Body>
                </Card>
                </Link>
            </div>
            
        </div>
    );
}
export default Groups;
