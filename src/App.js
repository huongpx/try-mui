import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import "./App.css";
import TourCard from "./components/TourCard";

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <TourCard></TourCard>
        <TourCard></TourCard>
        <TourCard></TourCard>
        <TourCard></TourCard>
      </Grid>
    </Container>
  );
}

export default App;
