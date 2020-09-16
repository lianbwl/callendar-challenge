
import React from "react";
import PropTypes from "prop-types";
import {
	Grid,
  GridItem
} from "../styles/components";
import DayBox from "./DayBox";

const Callendar = ({ days }) => {

  return (
    <GridItem width="100%" content="stretch">
      {days.map((dayinfo) => {
        return (
          <DayBox info={dayinfo}></DayBox>
        )
      })}
    </GridItem>
  )
}

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes
Callendar.propTypes = {
	days: PropTypes.array.isRequired,
};

export default Callendar;