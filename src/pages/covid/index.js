import React, { useEffect } from "react"
import { connect } from "react-redux"
import LayoutWrapper from "../../components/layout/layoutWrapper"
import CustomizedProgressBars from "../../components/loader"
import OverallCovidData from "../../components/OverallCovidData"
import {
  GetCovidAffectedCounteriesInfo,
  GetCovidGlobalInfo,
} from "../../redux/actions/covidActions"
import CovidAccordions from "../../components/covidAccordian"
import { Box, Container } from "@material-ui/core"

function Covid(props) {
  const {
    apiData,
    isApiLoading,
    isApiLoadingForCovidCountries,
    getCovidGlobalInfo,
    apiDataOfCovidCountries,
    apiFailedForGlobeInfo,
    apiFailedForCovidCounties,
    getCovidAffectedCounteriesInfo,
  } = props

  useEffect(() => {
    getCovidGlobalInfo()
    getCovidAffectedCounteriesInfo()
  }, [])

  return (
    <div>
      {isApiLoading ? (
        <CustomizedProgressBars />
      ) : (
        apiData && (
          <>
            <Box component="h1">Worldwide report</Box>
            <OverallCovidData apiData={apiData} />
          </>
        )
      )}
      <Container>
        <Box component="h1">Covid-19 countries report</Box>
        {isApiLoadingForCovidCountries ? (
          <CustomizedProgressBars />
        ) : (
          apiDataOfCovidCountries && (
            <CovidAccordions apiData={apiDataOfCovidCountries} />
          )
        )}
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    apiData: state.covid.apiData,
    isApiLoading: state.covid.isApiLoading,
    isApiLoadingForCovidCountries: state.covid.isApiLoadingForCovidCountries,
    apiDataOfCovidCountries: state.covid.apiDataOfCovidCountries,
    apiFailedForCovidCounties: state.covid.apiFailedForCovidCounties,
    apiFailedForGlobeInfo: state.covid.apiFailedForGlobeInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCovidGlobalInfo: () => dispatch(GetCovidGlobalInfo()),
    getCovidAffectedCounteriesInfo: () =>
      dispatch(GetCovidAffectedCounteriesInfo()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutWrapper(Covid))
