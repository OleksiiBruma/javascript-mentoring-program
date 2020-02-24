import React, { useState } from "react";
import {
  Button,
  DialogActions,
  DialogTitle,
  Dialog as MUIDialog
} from "@material-ui/core";

const Dialog = ({ handleConfirm, text }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        {text}
      </Button>
      <MUIDialog open={open} onClose={handleClose}>
        <DialogTitle>{"Are you sure?"}</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleConfirm} color="primary">
            Sure
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </MUIDialog>
    </div>
  );
};

export default Dialog;
