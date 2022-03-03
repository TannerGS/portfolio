import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Particles from "./Particles";

import project1 from "../images/cineview.png";
import project2 from "../images/picture-perfect.png";
import project3 from "../images/krypt.png";
import project4 from "../images/nytelock.png";
import project5 from "../images/alien-invasion.png";
import project6 from "../images/sudoku-solver.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#2E2E2E",
    height: "100%",
  },
  card: {
    background: "ACACAC",
    maxWidth: 300,
    marginTop: "2rem",
    marginBottom: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": { 
      boxShadow: "0 16px 70px -12.125px rgba(250,250,250,0.3)"
    }
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
  gridItem: {
    marginBottom: "75px"
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
  },
}));

const handleSubmit = (name) => {
  let projectLink = ''
  switch (name) {
    case 'CineView':
      projectLink = 'https://github.com/TannerGS/cineview_spa';
      break;
    case 'Picture Perfect':
      projectLink = 'https://github.com/TannerGS/picture_perfect';
      break;
    case 'Krypt':
      projectLink = 'https://github.com/TannerGS/krypt-web3.0';
      break;
    case 'Nytelock':
      projectLink = 'https://github.com/TannerGS/nytelock_recreation';
      break;
    case 'Alien Invasion':
      projectLink = 'https://github.com/TannerGS/Alien-Invasion';
      break;
    case 'Sudoku Solver':
      projectLink = 'https://github.com/TannerGS/sudoku_solver';
      break;
    default:
      projectLink = 'https://www.google.com/';
}

  window.open(projectLink);
}
const handleSubmit2 = (name) => {
  let websiteLink = ''
  switch (name) {
    case 'CineView':
      websiteLink = 'https://www.cineviewshows.com/';
      break;
    case 'Picture Perfect':
      websiteLink = 'https://www.pictureperfectsharing.com/';
      break;
    case 'Krypt':
      websiteLink = 'https://github.com/TannerGS/krypt-web3.0';
      break;
    case 'Nytelock':
      websiteLink = 'https://github.com/TannerGS/nytelock_recreation';
      break;
    case 'Alien Invasion':
      websiteLink = 'https://github.com/TannerGS/Alien-Invasion';
      break;
    case 'Sudoku Solver':
      websiteLink = 'https://github.com/TannerGS/sudoku_solver';
      break;
    default:
      websiteLink = 'https://www.google.com/';
}

  window.open(websiteLink);
}

const projects = [
  {
    name: "CineView",
    description: `A TV Show database website for searching for TV Show information. Built using ReactJs, MaterialUi, and the TVMaze API. Deployed with AWS Amplify.`,
    image: project1,
    webLink: true,
  },
  {
    name: "Picture Perfect",
    description: `A social media website for sharing pictures. Built using ReactJs, Sanity.io, and TailwindCss. Deployed with Netlify.`,
    image: project2,
    webLink: true,
  },
  {
    name: "Krypt",
    description: `A web 3.0 app for sending/receiving cryptocurrencies. Built using ReactJs, TailwindCss, Vite, and hardhat.`,
    image: project3,
    webLink: false,
  },
  {
    name: "Nytelock",
    description: `A recreation of a portion of the nytelock website using ReactJs.`,
    image: project4,
    webLink: false,
  },
  {
    name: "Alien Invasion",
    description: `An alien invasion game built using python and pygame.`,
    image: project5,
    webLink: false,
  },
  {
    name: "Sudoku Solver",
    description: `A program written in python using a backtracking algorithm to solve a given sudoku board.`,
    image: project6,
    webLink: false,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Particles />
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project.image}
              />
                <CardContent>
                  <Typography variant="h5" className={classes.heading} gutterBottom>
                    {project.name}
                  </Typography>
                  <Divider className={classes.divider} light />
                  <Typography className={classes.content} variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button onClick={() => handleSubmit(project.name)} size="small">
                  Github
                </Button>
                {project.webLink && (
                  <Button onClick={() => handleSubmit2(project.name)} size="small">
                    Website
                </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
