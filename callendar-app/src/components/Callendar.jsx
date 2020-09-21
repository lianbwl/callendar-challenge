import React from "react";
import PropTypes from "prop-types";
import { Grid, GridItem } from "../styles/components";
import DayBox from "./DayBox";

const Callendar = ({ days }) => {

  const isWeekend = (weekday) => {
    if (weekday === "Saturday" || weekday === "Sunday") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Grid width="100%" direction="column">
      <GridItem width="100%" flexWrap="wrap">
        {days.map((day, index) => (
          <DayBox
            key={index}
            dayinfo={day}
            isWeekendProp={isWeekend(day.weekday)}></DayBox>
        ))}
      </GridItem>  
    </Grid>
  );
};

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes
Callendar.propTypes = {
  days: PropTypes.array.isRequired,
};

export default Callendar;
