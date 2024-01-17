import { Container, Typography } from "@mui/material";

import classes from "./style.module.scss";
import Categories from "./components/Categories";

function App() {
  return (
    <Container maxWidth={false} className={classes.container}>
      <Typography variant="h3" className={classes.logo}>
        Delicacy
      </Typography>
      <Container maxWidth={false} className={classes.container__inner}>
        <Categories />
      </Container>
    </Container>
  );
}

export default App;
