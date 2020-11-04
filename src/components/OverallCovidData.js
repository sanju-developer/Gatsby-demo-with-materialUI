import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { Box } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    padding:theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
  },
  paper1: {
    color: theme.palette.text.covidNormal,
  },
  paper2:{
    color: theme.palette.text.covidDanger,
  },
  paper3:{
    color: theme.palette.text.covidSuccess,
  },
  box:{
    margin:theme.spacing(0)
  }
}))

function OverallCovidData({ apiData }) {
  const classes = useStyles()

  function FormRow({ apiData }) {
    return (
      <React.Fragment>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className={classes.paper && classes.paper1}>
            <Box component="h1" className={classes.box}>Cases</Box>
            {apiData.cases}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className={classes.paper && classes.paper2}>
            <Box component="h1" className={classes.box}>Deaths</Box>
            {apiData.deaths}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className={classes.paper && classes.paper3}>
            <Box component="h1" className={classes.box}>Recovered</Box>
            {apiData.recovered}
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} md={12} sm={12} spacing={3}>
          <FormRow apiData={apiData} />
        </Grid>
      </Grid>
    </div>
  )
}

export default OverallCovidData
