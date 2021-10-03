import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Switch from "@material-ui/core/Switch";
import useStyles from "./styles";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";


import PrimarySearchAppBar from "./navbar";
import Copyright from "./copyright";
import { Paper } from "@material-ui/core";
import Image from './img/Slide.svg';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  

  // Dark Theme
  const [darkMode, setDarkMore] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        // pink and green play nicely together.
        main: "#18191a",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });
  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

  return (
  
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper style={styles.paperContainer}>
        <PrimarySearchAppBar />
        <main className={classes.main}>
          <div className={classes.container}>
          <Switch
              checked={darkMode}
              onChange={() => setDarkMore(!darkMode)}
            />
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                repudiandae cum, ratione similique voluptate quae inventore
                magni a, nostrum numquam quas veritatis modi alias. Quibusdam et
                magnam ut! Velit, officiis.
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Nekoukni na fotky!
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Nekoukni na fotky!
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur, lksdlkhlkhsdlkhf
                        lkhsd
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Ček
                      </Button>
                      <Button size="small" color="primary">
                        Změň
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              Bla Bla Bla
            </Typography>
            <Copyright />
          </footer>
        </main>
        </Paper>
      </ThemeProvider>
  
  );
};
export default App;
