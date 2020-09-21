import React from "react";
import PropTypes from "prop-types";
import {
  GridItem,
  CallendarCell,
  CallendarCellReminder,
} from "../styles/components";
import DialogBox from "./DialogBox";
import DialogReminder from "./DialogReminder";
import { useSelector } from "react-redux";

const DayBox = ({ dayinfo, isWeekendProp }) => {
  const [modalOpen, setOpen] = React.useState(false);
  const [modalReminder, setReminderOpen] = React.useState(false);
  const [dayClicked, setDayClicked] = React.useState("");
  const [reminderClicked, setReminderClicked] = React.useState([])
  const daystate = useSelector((state) => state);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalReminderClose = () => {
    setReminderOpen(false);
  };

  const handleModalReminderOpen = (id) => {
    const dayReminder = daystate.filter(x => { return (x.id === id) });
    setReminderClicked(dayReminder[0]);
    setReminderOpen(true);
  };

  const handleDayClicked = (day) => {
    setDayClicked(day);
  };

  console.log(isWeekendProp)

  return (
    <CallendarCell flex="0 1 13%" className="daybox" weekend={isWeekendProp}>
      <GridItem width="100%">
        <span className="day-name">
          {dayinfo.day} - {dayinfo.weekday}
        </span>
      </GridItem>

      {daystate.map(
        (x, index) =>
          x.day === dayinfo.day && (
            <CallendarCellReminder key={index} reminderColor={x.color} onClick={() => {handleModalReminderOpen(x.id)}}>
              {x.time} - {x.reminder_txt}
            </CallendarCellReminder>
          )
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
        closeDialog={handleModalClose}></DialogBox>

      <DialogReminder
        isOpen={modalReminder}
        handleClose={handleModalReminderClose}
        reminder={reminderClicked}></DialogReminder>
    </CallendarCell>
  );
};

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes
DayBox.propTypes = {
  dayinfo: PropTypes.object.isRequired,
};

export default DayBox;
