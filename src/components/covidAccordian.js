import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import { Box } from "@material-ui/core"
import theme from "../../theme"

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  boxWithSpan: {
    paddingRight: theme.spacing(2),
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export default function CovidAccordions(props) {
  const { apiData } = props
  const [expanded, setExpanded] = React.useState("panel1")
  console.log(apiData)
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    apiData &&
    apiData.map((country, index) => (
      <Accordion
        square
        expanded={expanded === index}
        onChange={handleChange(index)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{country.country}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <Box component="div">
              <Box component="span">&nbsp; Cases:&nbsp;</Box>
              <Box component="span">&nbsp;{country.cases}</Box>
            </Box>
            <Box component="div">
              <Box component="span">&nbsp; Active:&nbsp;</Box>
              <Box component="span">&nbsp;{country.active}</Box>
            </Box>
            <Box component="div">
              <Box component="span">&nbsp; Critical:&nbsp;</Box>
              <Box component="span">&nbsp;{country.critical}</Box>
            </Box>
            <Box component="div">
              <Box component="span">&nbsp; Deaths:&nbsp;</Box>
              <Box component="span">&nbsp;{country.deaths}</Box>
            </Box>
            <Box component="div">
              <Box component="span">&nbsp; Today cases:&nbsp;</Box>
              <Box component="span">&nbsp;{country.todayCases}</Box>
            </Box>
            <Box component="div">
              <Box component="span">&nbsp; Today deaths:&nbsp;</Box>
              <Box component="span">&nbsp;{country.todayDeaths}</Box>
            </Box>
          </ul>
        </AccordionDetails>
      </Accordion>
    ))
  )
}
