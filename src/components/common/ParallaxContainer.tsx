import React from "react";
import { Parallax } from "react-parallax";
import { Button, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import LinkComponent from "./LinkComponent";

interface IProps {
  image: string;
  strength?: number;
  title: string;
  route: {
    href: string;
    as: string;
  };
}

const useStyles = makeStyles(() => ({
  containerHeight: {
    height: "100vh",
  },
}));

const ParallaxContainer: React.FC<IProps> = ({
  image,
  strength = 300,
  title,
  route,
}) => {
  const classes = useStyles();
  return (
    <Parallax bgImage={image} strength={strength}>
      <Fade>
        <Grid container alignItems="center" className={classes.containerHeight}>
          <Grid item xs={6}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12}>
                <Typography align="center" variant="h3">
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Button>
                  <Link {...route} underline="none" component={LinkComponent}>
                    Browse Gallery
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Parallax>
  );
};

export default ParallaxContainer;
