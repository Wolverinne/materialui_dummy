import "./App.css";
import { Container, Grid } from "@mui/material";
import TourCard from "./components/TourCard";
import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <div className="App">
      <SearchAppBar sx={{marginY:5}}/>
      <Container>
        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
