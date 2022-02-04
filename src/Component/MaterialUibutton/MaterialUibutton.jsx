import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons({ children, ...restProps }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button {...restProps} variant="outlined" color="primary">
        {children}
      </Button>
    </div>
  );
}
