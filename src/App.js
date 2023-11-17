import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import Grid from "@mui/material/Grid";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
      <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <InfoSection />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SignUpForm />
      </Grid>
      </Grid>
      </div>
      <Footer />
    </div>
  );
}
