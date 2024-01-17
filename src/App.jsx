import { Container } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import classes from "./style.module.scss";

function App({ router }) {
  return (
    <Container maxWidth={false} className={classes.container}>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;
