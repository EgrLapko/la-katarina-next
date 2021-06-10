import Head from "next/head";
import { useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";
import { Grid } from "@material-ui/core";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: "90vh" }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
      </Grid>
      <Grid item xs={12}>
        <Parallax bgImage={image2} strength={500}>
          <div style={{ height: "90vh" }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
      </Grid>
    </Grid>
  );
};

export default HomePage;
