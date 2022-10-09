import { Box, Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../components/UI/Theme";
import {Typography} from "@mui/material";
import {Grid} from "@mui/material";
import AboutCard from "./UI/AboutCard.js";
import {storyText} from "./UI/stories.js"


export default function About () {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{textAlign: "center" , marginTop: "30px"}}>
      <Typography variant="h1">Our Mission</Typography>
    </Box>
    <Box sx={{textAlign: "center" , marginTop: "20px"}}>
      <Typography variant="h3">
        To bring you back up and beyond.
      </Typography>
    </Box>
    <Box sx={{textAlign: "center" , margin: "40px auto", width: "50rem", minWidth: "300px"}}>
      <Grid container spacing={6}>
        {storyText.map(story => 
          <Grid item xs={6}>
          <AboutCard 
          name={story.name}
          skills={story.skills}
          description={story.description}
          imagePath={story.imagePath}/>
          </Grid>
          )}
      </Grid>
    </Box>
    <Box sx={{textAlign: "center" , marginTop: "20px"}}>
      <Typography variant="p">
      </Typography>
    </Box>

    <Button variant="contained" color="success">
        Submit
      </Button>
    </ThemeProvider>

  )
}