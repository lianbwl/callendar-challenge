import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { Button } from "../styles/components";
import { useSelector } from "react-redux";

const DialogReminder = ({isOpen, handleClose, reminder}) => {
  const daystate = useSelector(state => state);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true}>
      <DialogTitle>
        Day {reminder.day} @ {reminder.time} - Reminder 
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {reminder.reminder_txt}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogReminder;
