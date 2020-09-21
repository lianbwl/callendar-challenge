import React from "react";
import PropTypes from "prop-types";
import {
  GridItem,
  CallendarCell,
  CallendarCellReminder,
} from "../styles/components";
import DialogBox from "./DialogBox";
import { useSelector } from "react-redux";

const DayBox = ({ dayinfo }) => {
  const [modalOpen, setOpen] = React.useState(false);
  const [dayClicked, setDayClicked] = React.useState("");
  const [reminderText, setReminderText] = React.useState("");
  const daystate = useSelector(state => state);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleDayClicked = (day) => {
    setDayClicked(day);
  };

  const handleReminderText = (event) => {
    setReminderText(event.target.value);
  };

  return (
    <CallendarCell flex="0 1 13%" className="daybox">
      <GridItem width="100%">
        <span className="day-name">
          {dayinfo.day} - {dayinfo.weekday}
        </span>
      </GridItem>

      {daystate.map((x, index) => (x.day === dayinfo.day) && 
        <CallendarCellReminder key={index} reminderColor="#F55555"> 
          {x.reminder_txt}
        </CallendarCellReminder>
      )}

      <a
        className="plus-reminder"
        onClick={() => {
          handleModalOpen();
          handleDayClicked(dayinfo.day);
        }}>
        + reminder
      </a>

      <DialogBox
        isOpen={modalOpen}
        day={dayClicked}
        reminder={reminderText}
        handleReminder={handleReminderText}
        closeDialog={handleModalClose}></DialogBox>
    </CallendarCell>
  );
};

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes
DayBox.propTypes = {
  dayinfo: PropTypes.object.isRequired,
};

export default DayBox;
