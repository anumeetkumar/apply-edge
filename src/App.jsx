import { Container, Typography } from "@mui/material";
import "./App.css";
import CommonButton from "./lib/componants/form/CommonButton";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to ApplyEdge
      </Typography>
      <CommonButton variant="contained" color="primary">
        Get Started
      </CommonButton>
    </Container>
  );
}

export default App;
