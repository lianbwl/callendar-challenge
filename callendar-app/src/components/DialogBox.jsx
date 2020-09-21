import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { Grid, GridItem, Button } from "../styles/components";
import { useDispatch } from "react-redux";

const DialogBox = ({ isOpen, day, closeDialog }) => {
  const [reminder, setReminder] = React.useState("");
  const [reminderColor, setReminderColor] = React.useState("blue");
  const [time, setTime] = React.useState("");
  const [city, setCity] = React.useState("");
  const dispatch = useDispatch();
  const colors = [
    {
      colorName: "blue", 
      color: "#0d7edb"
    },
    {
      colorName: "red", 
      color: "#D53307"
    },
    {
      colorName: "yellow", 
      color: "#9A9738"
    },
    {
      colorName: "green", 
      color: "#184A45"
    }
  ];

  const handleReminder = (event) => {
    let str = event.target.value;
    if (str.length > 30) {
      event.preventDefault();
    } else {
      setReminder(event.target.value);
    }
  };

  const handleReminderColor = (event) => {
    setReminderColor(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  }

  const handleCity = (event) => {
    setCity(event.target.value);
  }

  return (
    <Dialog maxWidth="sm" fullWidth={true} open={isOpen}>
      <DialogTitle>Day {day} - Reminder</DialogTitle>
      <DialogContent>
        <Grid width="100%" direction="column" gapY="15px">
          <GridItem width="100%">
            <TextField
              multiline={true}
              fullWidth={true}
              value={reminder}
              onChange={handleReminder}
              label="Reminder"
            />
          </GridItem>
          <Grid width="100%" gapX="20px">
            <GridItem width="35%">
              <TextField 
                type="time" 
                label="Time" 
                fullWidth={true} 
                value={time}
                onChange={handleTime} />
            </GridItem>
            <GridItem width="35%">
              <TextField 
                type="text" 
                label="City" 
                fullWidth={true} 
                value={city}
                onChange={handleCity}/>
            </GridItem>
            <GridItem width="30%">
              <TextField
                select
                label="Reminder Color"
                value={reminderColor}
                onChange={handleReminderColor}
                fullWidth={true}>
                {colors.map((option) => (
                  <MenuItem key={option.color} value={option.color}>
                    {option.colorName}
                  </MenuItem>
                ))}
              </TextField>
            </GridItem>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="warn" onClick={closeDialog}>
          Cancel
        </Button>
        <Button
          color="warn"
          onClick={() => {
            dispatch({
              type: "DAY",
              dados: { day: day, time: time, city: city, reminder_txt: reminder, color: reminderColor },
            }); closeDialog();
          }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
