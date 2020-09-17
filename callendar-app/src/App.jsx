import React, { useEffect } from "react";
import {
	Grid,
	GridItem,
	Wrapper,
  Title
} from "./styles/components";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Callendar from "./components/Callendar";

function App() {

  const [callendarDays, setCallendarDays] = React.useState([]);
  const [weekday, setWeekday] = React.useState([
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]);
  const [monthName, setMonthName] = React.useState("");
  
  useEffect(() => {
    getMonthDays();
  }, []);

  const getWeekDay = (y,m,d) => {
    let date = new Date(y, m, d).getDay();
    return weekday[date];
  }

  const getMonthDays = () => {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    let getDaysLastMonth = new Date(year, month +1, 0)
    let daysinmonth = getDaysLastMonth.getDate();
    let monthstart = new Date(year, month, 1).getDay();
    let monthends = new Date(year, month, daysinmonth).getDay();

    const monthInfo = []

    for (let i = 1; i <= daysinmonth; i++) {
      monthInfo.push({
        day: i, 
        weekday: getWeekDay(year, month, i), 
        reminders: [ {txt: "walk with dog", time: "11h00"}, {txt: "walk with dog", time: "11h00"} ]
      })
    }

    for (let j = 1; j <= monthstart; j++) {
      monthInfo.unshift({
        day: "X", 
        weekday: weekday[monthstart - j], 
        reminders: []
      })
    }

    for (let k = monthends + 1; k <= 6; k++) {
      monthInfo.push({
        day: "X", 
        weekday: weekday[k], 
        reminders: []
      })
    }

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    setCallendarDays(monthInfo);
    setMonthName(monthNames[month]);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Wrapper width="80%">
          <Grid
            alignCenter
            alignY="center"
            direction="column"
            alignX="space-between">

              <GridItem width="100%">
                <Title>
                  My Calendar - {monthName}
                </Title>
              </GridItem>

              <Callendar days={callendarDays}></Callendar>

          </Grid>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
