import { Button, FormControl,FormLabel,Typography} from "@mui/material"
import { Card } from "@mui/material"
import { ThemeProvider } from '@emotion/react';
import theme from "../components/UI/Theme"
import { Box } from "@mui/material";
import {questions} from "../components/UI/questions.js"
import {FormControlLabel,RadioGroup,Radio} from "@mui/material"
import { TextareaAutosize } from "@mui/material";


export default function Skills() {

    return (
      <>
      <Box sx={{textAlign:"center", margin: "30px auto"}}>
      <Typography variant="h2">
        Skills and Goals
      </Typography>
      <Typography variant="h3"sx={{marginTop: "10px"}} >
        Pivot to something great.
      </Typography>
      

      {questions.map(question => {
        return <>
        <ThemeProvider theme={theme}>
        <Typography variant="h6">
        <Box sx={{}}>
        <Card sx={{margin: "30px auto", width: "30rem", padding: "20px"}}>
        <FormControl>

          <FormLabel id="demo-radio-buttons-group-label">
            {question.question}
          </FormLabel>

          {question.answers.length !== 0 ?
          <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group">
            <FormControlLabel value="yes" control={<Radio />} label="Yes"  />
            <FormControlLabel value="no" control={<Radio />} label="No"  />
          </RadioGroup>
          : <TextareaAutosize aria-label="maximum height" style={{width:400, margin: "0 auto", height:50}}></TextareaAutosize>}
        </FormControl>
        </Card>
        </Box>


        </Typography>
        </ThemeProvider>
      </>})}

      <Button href="/" variant="contained" color="success">
        Submit
      </Button>
      </Box>
      </>
    )
  };