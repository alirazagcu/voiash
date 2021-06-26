import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const vertical = "top";
const horizontal = "center";
export default function PositionedSnackbar({ open, setOpen, severity, msg }) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={6000}
        key="topright"
      >
        <Alert onClose={() => setOpen(false)} severity={severity}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
