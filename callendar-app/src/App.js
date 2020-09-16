import React, { useEffect } from "react";
import "./App.css";
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

  useEffect(() => {
		setCallendarDays([
      {
        day: {
          reminder: "Teste 1"
        }
      },
      {
        day: {
          reminder: "Teste 2"
        }
      },
    ]);
  }, []);

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
                  My Callendar
                </Title>
              </GridItem>

              <GridItem width="100%" content="stretch">
                <Callendar days={callendarDays}></Callendar>
              </GridItem>

          </Grid>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
