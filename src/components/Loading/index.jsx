import { Box, CircularProgress } from "@mui/material";

import classes from "./style.module.scss";

const Loading = () => {
  return (
    <Box className={classes.container}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
