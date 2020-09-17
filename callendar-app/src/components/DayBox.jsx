
import React from "react";
import PropTypes from "prop-types";
import {
	Grid,
  GridItem,
  CallendarCell,
  CallendarCellReminder
} from "../styles/components";

const DayBox = ({ info }) => { 

  return (  
      (info.weekday === "Sunday" || info.weekday === "Saturday") ? (
        <CallendarCell flex="0 1 13%" className="daybox">
          <GridItem width="100%">
            <span className="day-name">{info.day} - {info.weekday}</span>
          </GridItem>

          {info.reminders.map(x => x.txt ? (
            <CallendarCellReminder reminderColor="#F55555">
              <span>{x.time}</span> -  {x.txt}
            </CallendarCellReminder>
          ) : (""))}
        </CallendarCell>
      ) : (
        <CallendarCell flex="0 1 13%" className="daybox" spanColor="#0d7edb">
          <GridItem width="100%">
            <span className="day-name">{info.day} - {info.weekday}</span>
          </GridItem>

          {info.reminders.map(x => x.txt ? (
            <CallendarCellReminder reminderColor="#F55555">
              <span>{x.time}</span> -  {x.txt}
            </CallendarCellReminder>
          ) : (""))}
        </CallendarCell>
      )
    
  )
}

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes

DayBox.propTypes = {
	info: PropTypes.object.isRequired,
};

export default DayBox;