import React from "react";
import pics from '../../images/house.jpg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {  Button,Form,Row,Col,Card } from "react-bootstrap";
import { useState } from 'react';
 
const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
      borderRadius: 8,
      boxShadowTop: 2, 
      flexGrow: 1,
      boxShodowColor:'red',
    },
    table1: {
      
      borderRadius: 8,
      boxShadow :"1px 1px 5px 1px gray"
    },
    header:{
        fontSize:50,
        fontWieght:'bold',
        color:'black'
    }
  });
  
export default function GroupsExperiences(props) {
    const classes = useStyles2();
 

    const [data, setData] = useState([
        {
            key: "1",
            num: pics,
            name: "Mandala Disco Bottle Service (Diamond)",
           
            address: "5 horas"
        },
        {
            key: "2",
            num: pics,
            name: "Mandala Disco Bottle Service (Diamond)",
         
            address: "5 horas"
        },
        {
            key: "3",
            num: pics,
            name: "Mandala Disco Bottle Service (Diamond)",
           
            address: "5 horas"
        },
        {
            key: "4",
            num: pics,
            name: "Mandala Disco Bottle Service (Diamond)",
          
            address: "5 horas"
        },
        {
            key: "5",
            num: pics,
            name: "Mandala Disco Bottle Service (Diamond)",
         
            address: "5 horas"
        },
        {
            key: "6",
            num: pics,
            name: "Mandala Disco Bottle Service (Diamond)",
        
            address: "5 horas"
        }
 ]);
 
 const [showdata, setShowdata] = useState([
   
]);
const [ind,setInd]=useState([]);
const [second,setSecond]=useState()
  
    const add = (e) => {
        let user = data.find(u => u.key === e);
        console.log(user)  
        let row = user
        let newStateArray = [...showdata];
        newStateArray.push(row);
        setShowdata(newStateArray);
    };

    const remove = (a) => {
        a.preventDefault()
        console.log("asdadvdfe")
        document.querySelectorAll('#table .select:checked').forEach(e => {
          e.parentNode.parentNode.remove()
        });
        }
      
            function handleRemove(id) {
                const newList = showdata.filter((item) => item.key !== id);
             
                setShowdata(newList);
              }
    console.log(second)
    return (
        <div className="grouptable">
          
            <Row className="marginbootm">
                <Col className="tablebutton">
                <Form.Control as="select" onChange={e=> (setSecond(e.target.value),add(e.target.value))}>
                {data.map((row,a) => (
                                                <option value={row.key}>{row.name}</option>
                ))}
                </Form.Control>
                                      
                </Col>
            </Row>
            {showdata.map((row,a) => (
            <Card className="GroupExpo"><div className="GroupExp">
                <div className="GroupExp0">
                      <div  className="GroupExp1">
                           <img src={row.num} className="selectedpic"/>
                       </div>
                       <div  className="GroupExp2">
                           <p  className="GroupExp3">
                                              {row.name}
                           </p>
                           <p  className="GroupExp4">
                           {row.address}
                               </p>
                       </div>
                       </div>
                       <div className="GroupExp5">
                       <div  className="GroupExp6">
                          <RemoveCircleIcon className="largesize" onClick={() => handleRemove(row.key)}/>
                       </div>
                       </div>
                </div></Card>
             ) )}
        
        </div>
    );
}
