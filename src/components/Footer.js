import React from 'react';
import  './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },   
  menuButton: {
    marginRight: theme.spacing(2),
    padding:2,
  },
  title: {
    flexGrow: 1,
  },
  link1:{
      padding:10,
      textDecoration:'none', 
      color:'gray',

  },
  link:{
    marginLeft:4,
    textDecoration:'none',
    color:'gray',
 
    hover:{
        textDecoration:'none',
        color:'gray',
    }
},
  Appbar:{
      backgroundColor:'white',
      color:'black',
     
  },
  social:{
    marginRight:4,
      color:'gray',

  },
   right:{
     display:'flex',
     float:'right',
     marginLeft:50,
   }
}));

export default function BnavBar() {
  const classes = useStyles();

  return (
 
      <Card className="footer0">
          <div className="footer1">
            <div className="footer2">
          
          <Link className="link1">Contacto</Link>
      
        
          <Link className="link">F.A.Q</Link>
          
          <Link className="link">Términos legales</Link>
        
          <Link className="link">Política de Privacidad</Link>
         
          </div>
        <div className="footer3">
        <a href="https://www.facebook.com/VoiashDiscover/" ><FacebookIcon className="social"/></a>
        <a href="https://www.instagram.com/voiash/" > <InstagramIcon  className="social"/></a>
        <a href="https://www.youtube.com/channel/UC_we-JVlkFTuo-Z__9VtM3A" > <YouTubeIcon  className="social1"/>   </a>
        </div>
         
          </div>
   </Card>
  );
}