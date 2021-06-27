import React, { useState, useEffect } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Popup } from "reactjs-popup";
import icon from "../images/logo.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/logoutReducer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    backgroundColor: "white",
    height: 57.19,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.8,
  },
  icon: {
    color: "gray",
    marginRight: 8,
  },
  drop: {
    marginTop: 33,
  },
  icons: {
    color: "gray",
    marginRight: 2,
    textDecoration: "none",
    "&:hover": {
      color: "black",
      fontWeight: "bold",
      textDecoration: "none",
    },
  },
  icon1: {
    width: 110.95,
    height: 38.19,
    marginLeft: 25,
  },
  divicon: {
    width: "100%",
    textAlign: "right",
  },
  divicon1: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
  },
  divicon3: {
    width: "90%",
  },
  divicon4: {
    display: "flex",
    justifyContent: "right",
  },
  remove: {
    textDecoration: "none",
    color: "gray",
    "&:hover": {
      color: "black",
      fontWeight: "bold",
      textDecoration: "none",
    },
  },
}));

export default function Navbar({}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [registerMenu, setReisterMenu] = useState(null);
  const token = localStorage.getItem("token");
  // const isAdmin = localStorage.getItem("isAdmin");
  const [isAdmin, setIsAdmin] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { isError, isFetching, isSuccess, msg, responseData } = useSelector(
    (state) => state.loginState
  );

  useEffect(() => {
    if (responseData && responseData.user && responseData.user.isAdmin) {
      setIsAdmin(responseData.user.isAdmin);
    }
  }, [responseData])

  return (
    <div className={classes.root}>
      <AppBar className={classes.Appbar} position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img className={classes.icon1} src={icon} />
            </IconButton>
          </Link>
          {token ? (
            <div className={classes.divicon}>
              <NotificationsIcon className={classes.icon} />
              <PersonRoundedIcon
                className={classes.icon}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => setAnchorEl(event.currentTarget)}
              />
              <Menu
                className={classes.drop}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <Link
                  to="/profile/information/personal"
                  className={classes.remove}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>Perfil</MenuItem>
                </Link>
                <Link
                  to="/profile/reservations/groups"
                  className={classes.remove}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>Grupos</MenuItem>
                </Link>
                <Link
                  to="/profile/information/payment-methods"
                  className={classes.remove}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Métodos de pago
                  </MenuItem>
                </Link>
                {isAdmin ? <hr /> : null}
                {isAdmin ? (
                  <Link to="/admin" className={classes.remove}>
                    {" "}
                    <MenuItem onClick={() => setAnchorEl(null)}>Admin</MenuItem>
                  </Link>
                ) : null}
                <hr />
                <MenuItem
                  onClick={() => {
                    localStorage.setItem("token", "");
                    history.push("/");
                    setAnchorEl(null);
                    if (
                      responseData &&
                      responseData.user &&
                      responseData.user.userId
                    ) {
                      const apiObject = {
                        id: responseData.user.userId,
                        token: responseData.token,
                      };
                      dispatch(logOut(apiObject));
                    }
                  }}
                >
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className={classes.divicon1}>
              <div className={classes.divicon3}></div>
              <div className={classes.divicon4}>
                <Nav.Link as={Link} to="/login" className={classes.icons}>
                  <h6>Iniciar</h6>
                </Nav.Link>
                <Nav.Link
                  onClick={(event) => setReisterMenu(event.currentTarget)}
                  as={Link}
                  className={classes.icons}
                >
                  <h6>Registrarse</h6>
                </Nav.Link>
                <Menu
                  className={classes.drop}
                  id="simple-menu"
                  anchorEl={registerMenu}
                  keepMounted
                  open={Boolean(registerMenu)}
                  onClose={() => setReisterMenu(null)}
                >
                  <Link to="/register" className={classes.remove}>
                    <MenuItem onClick={() => setReisterMenu(null)}>
                      User
                    </MenuItem>
                  </Link>
                  <Link to="/registeradmin" className={classes.remove}>
                    <MenuItem onClick={() => setReisterMenu(null)}>
                      Admin
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
