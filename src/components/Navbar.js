import React,{useState,useEffect} from 'react';
import { Dropdown,Nav } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import {Popup} from 'reactjs-popup'
import icon from '../images/logo.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    backgroundColor: 'white',
    height: 57.19,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.8,
  },
  icon: {
    color: 'gray',
    marginRight: 8,
    
  },
  drop:{
    marginTop:33,
  },
  icons: {
    color: 'gray',
    marginRight: 2,
    textDecoration:'none', 
   "&:hover":{
     color:'black', 
     fontWeight:'bold',
     textDecoration:'none',
  }},
  icon1: {
    width: 110.95,
    height: 38.19,
    marginLeft: 25,

  },
  divicon: {
   
    width:'100%',
    textAlign: 'right',
  },
  divicon1: {
    
    width:'100%',
    display:'flex',
    justifyContent:'right'
  },
  divicon3: {
   
   width:'90%'
  },
  divicon4: {
    display:'flex',
    justifyContent:'right'
  },
  remove:{
   textDecoration:'none', 
   color:'gray',
   "&:hover":{
     color:'black', 
     fontWeight:'bold',
     textDecoration:'none', 
   }
  }
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState()
  const SignOut = () => {
    setShow(false)
  }
  useEffect(() => {
    setShow(true)
  }, []);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);}
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Link to="/"><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className={classes.icon1} src={icon} />
          </IconButton></Link>
          {show ?( <div className={classes.divicon}><NotificationsIcon className={classes.icon} />
       <PersonRoundedIcon className={classes.icon}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
      <Menu
      className={classes.drop}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/profile/information/personal" className={classes.remove}><MenuItem onClick={handleClose} >Perfil</MenuItem></Link>
        <Link to="/profile/reservations/groups" className={classes.remove}><MenuItem onClick={handleClose}>Grupos</MenuItem></Link>
        <Link to="/profile/information/payment-methods" className={classes.remove}><MenuItem onClick={handleClose}>Métodos de pago</MenuItem></Link>
        <hr/>
        <Link to="/admin" className={classes.remove}> <MenuItem onClick={handleClose}>Admin</MenuItem></Link>
        <hr/>
        <MenuItem onClick={SignOut}>Cerrar sesión</MenuItem>
      </Menu></div>):(<div  className={classes.divicon1}><div className={classes.divicon3}></div><div className={classes.divicon4}><Nav.Link as={Link}  to="/login" className={classes.icons} ><h6 >Iniciar</h6></Nav.Link>
      <Nav.Link to="/register" as={Link}  className={classes.icons} ><h6 >Registrarse</h6></Nav.Link></div></div>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
// import styles from './Navbar.css';
// import { Link } from 'react-router-dom';

// 
// import { Button, Navbar, NavDropdown, Form, Nav, FormControl } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function NavBar() {
//     return (


//             <Navbar collapseOnSelect expand="sm" bg="light" variant="dark" fixed="top" >
//                 <div>
//                 <Navbar.Brand href="#" as={Link} to='/'><img className="icon" src={icon} /></Navbar.Brand>
//                 </div>

//                     {/* <div className="Navitem">
//                     <NotificationsIcon className="profile" />
//                        <PersonRoundedIcon className="profile" />

//                     </div> */}
//             </Navbar> 

//     );
// }
// export default NavBar;