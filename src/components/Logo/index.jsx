import React from "react";
import { Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import classes from "./style.module.scss";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Typography
        variant="h3"
        className={classes.logo}
        onClick={() => {
          navigate("/");
        }}
      >
        Delicacy
      </Typography>
      <Outlet />
    </React.Fragment>
  );
};

export default Logo;
