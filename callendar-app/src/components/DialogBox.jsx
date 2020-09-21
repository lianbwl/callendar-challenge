import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import {
  Grid,
  GridItem,
  Button,
} from "../styles/components";
import { useDispatch } from "react-redux";

const DialogBox = ({isOpen, day, reminder, handleReminder, closeDialog}) => {
  const dispatch = useDispatch();
  
  return (
    <Dialog maxWidth="sm" fullWidth={true} open={isOpen}>
      <DialogTitle>
        Day {day} - Reminder
      </DialogTitle>
      <DialogContent>
        <Grid width="100%" direction="column" gapY="15px">
          <GridItem width="100%">
            <TextField
              multiline={true}
              fullWidth={true}
              value={reminder}
              onChange={handleReminder}
            />
          </GridItem>
          <GridItem width="100%">
            <TextField id="time" type="time" />
          </GridItem>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="warn" onClick={closeDialog}>
          Cancel
        </Button>
        <Button
          color="warn"
          onClick={() =>
            dispatch({
              type: "DAY",
              dados: {day: day, reminder_txt: reminder },
            })
          }>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;