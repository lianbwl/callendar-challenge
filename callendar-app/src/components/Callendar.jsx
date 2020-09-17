
import React from "react";
import PropTypes from "prop-types";
import {
	Grid,
  GridItem
} from "../styles/components";
import DayBox from "./DayBox";

const Callendar = ({ days }) => {

  return (
      <Grid width="100%" direction="column">
          <GridItem width="100%" flexWrap="wrap">
            {days.map((dayinfo, index) => (
                <DayBox key={index} info={dayinfo}></DayBox>
              )
            )}
          </GridItem>
      </Grid>
  )
}

// https://www.npmjs.com/package/prop-types para ver outros tipos de validacoes
Callendar.propTypes = {
	days: PropTypes.array.isRequired,
};

export default Callendar;