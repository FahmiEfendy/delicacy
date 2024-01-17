import { Container, Typography } from "@mui/material";

import classes from "./style.module.scss";
import { RouterProvider } from "react-router-dom";

function App({ router }) {
  return (
    <Container maxWidth={false} className={classes.container}>
      <Typography variant="h3" className={classes.logo}>
        Delicacy
      </Typography>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;
