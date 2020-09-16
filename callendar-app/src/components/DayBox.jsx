
import React from "react";
import PropTypes from "prop-types";
import {
	Grid,
  GridItem,
  CallendarCell,
  CallendarCellReminder
} from "../styles/components";

const DayBox = ({ info }) => { 
  console.log(info);

  return (
      <Grid
        flex="auto" direction="column" content="stretch" padY="2px">
          <GridItem width="100%">
            <CallendarCell className="daybox">
              <GridItem width="100%">
                <span className="day-number">{info.day.reminder}</span>
              </GridItem>
              <GridItem>
                <CallendarCellReminder reminderColor="#F55555">
                  <span>11h00</span> - Walk dog 
                </CallendarCellReminder>
              </GridItem>
            </CallendarCell>
          </GridItem>
      </Grid>
  )
}

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes

// DayBox.propTypes = {
// 	data: PropTypes.array.isRequired,
// };

export default DayBox;