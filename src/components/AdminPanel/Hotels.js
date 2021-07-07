import React, { useState, useEffect } from "react";
import "../../App.css";
import PropTypes from "prop-types";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import {
  hotels,
  getAllHoteslsStateClear,
  selectedHotel,
} from "../../store/hotelsReducer";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../material-ui-comps/Loader";
import SnackBar from "../material-ui-comps/SnackBar";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
function createData(name, calories, fat, bar) {
  return { name, calories, fat, bar };
}
const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
    borderRadius: 8,
    boxShadowTop: 2,
    flexGrow: 1,
    boxShodowColor: "red",
  },
  table1: {
    borderRadius: 8,
    boxShadow: "1px 1px 5px 1px gray",
  },
});

export default function Hotels() {
  const classes = useStyles2();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const { isError, isFetching, isSuccess, msg, responseData } = useSelector(
    (state) => state.hotelsState
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(hotels({ type: "get", token: token }));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getAllHoteslsStateClear());
    }
    if (isError) {
      setOpen(true);
      dispatch(getAllHoteslsStateClear());
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (responseData && responseData.length > 0) {
      setRows(responseData);
    }
  }, [responseData && responseData.length, responseData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const hotelClickHandler = (row) => {
    dispatch(selectedHotel(row));
  };

  return isFetching ? (
    <div style={{ marginTop: "300px" }}>
      <Loader />
    </div>
  ) : (
    <TableContainer component={Paper} className={classes.table1}>
      <Table
        size="small"
        className={classes.table}
        aria-label="custom pagination table"
      >
        <TableBody>
          <TableRow>
            <TableCell component="th" className="searchdiv">
              <div className="formcontrol">
                {" "}
                <Form inline>
                  <FormControl type="text" search placeholder="Buscar..." />
                </Form>
              </div>
            </TableCell>
            <TableCell component="th" className="searchdiv"></TableCell>
            <TableCell component="th" className="searchdiv"></TableCell>
            <TableCell component="th" className="searchdiv">
              <div align="right">
                <Link to="/admin/hotels/new">
                  <Button variant="primary">Nuevo</Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell className="pakistan" component="th" scope="row">
                <Link
                  to="/admin/hotels/update"
                  onClick={() => hotelClickHandler(row)}
                  className="linker"
                >
                  <div className="tablelink">
                    <p className="tabeltext">{row.name}</p>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="pakistan" component="th" scope="row">
                <Link
                  to="/admin/hotels/update"
                  onClick={() => hotelClickHandler(row)}
                  className="linker"
                >
                  <div className="tablelink">
                    <p className="tabeltext">{row.country}</p>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="pakistan" component="th" scope="row">
                <Link
                  to="/admin/hotels/update"
                  onClick={() => hotelClickHandler(row)}
                  className="linker"
                >
                  <div className="tablelink">
                    <p className="tabeltext">{row.city}</p>
                  </div>
                </Link>
              </TableCell>
              <TableCell className="pakistan" component="th" scope="row">
                <Link
                  to="/admin/hotels/update"
                  onClick={() => hotelClickHandler(row)}
                  className="linker"
                >
                  <div className="tablelink">
                    <p className="tabeltext">{row.direction}</p>
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <SnackBar open={open} setOpen={setOpen} severity="error" msg={msg} />
    </TableContainer>
  );
}
