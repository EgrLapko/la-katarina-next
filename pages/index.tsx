import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import { Grid, Typography, Link } from "@material-ui/core";
import ParallaxContainer from "../src/components/common/ParallaxContainer";
import { routes } from "utils/routing";
import SmoothNavigationMenu from "../src/components/common/SmoothNavigationMenu";

const image1 = "http://pic.yupoo.com/yehorlapko/1626b847/d2f4d309.jpg";

const parallaxElements = [
  {
    id: 1,
    title: "Computer Art",
    section: "compartSection",
    image: "http://pic.yupoo.com/yehorlapko/321ee0da/75f63af9.jpg",
    query: "comp-art",
  },
  {
    id: 2,
    title: "Portraits",
    section: "portraitsSection",
    image: "http://pic.yupoo.com/yehorlapko/dd4926f3/3afbe677.jpg",
    query: "portraits",
  },
  {
    id: 3,
    title: "Shamans",
    section: "shamansSection",
    image: "http://pic.yupoo.com/yehorlapko/6614de51/34aa5f9b.jpg",
    query: "shamans",
  },
];

const sections = [
  { id: "compartSection", text: "Computer Art" },
  { id: "portraitsSection", text: "Portraits" },
  { id: "compartSection", text: "shamansSection" },
];

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Parallax bgImage={image1} strength={500}>
          <Fade>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ height: "100vh" }}
            >
              <Grid item container spacing={4}>
                <Grid item xs={12}>
                  <Grid container justify="center" alignItems="flex-start">
                    <Grid item xs={12}>
                      <Typography variant="h3" align="center" paragraph>
                        KATARINA BLAZHIEVSKAYA
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center">
                        PHOTOGRAPHER
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} justify="center">
                    {/* <SmoothNavigationMenu sections={sections} /> */}
                    <Grid item>
                      <Link href="" underline="none" color="textPrimary">
                        <Typography variant="h5">Computer art</Typography>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="" underline="none" color="textPrimary">
                        <Typography variant="h5">Portraits</Typography>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="" underline="none" color="textPrimary">
                        <Typography variant="h5">Shamans</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fade>
        </Parallax>
      </Grid>
      {parallaxElements.map((item) => {
        return (
          <Grid item id={item.section} key={item.id} xs={12}>
            <ParallaxContainer
              image={item.image}
              title={item.title}
              route={routes.imageGallery(item.query)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomePage;
