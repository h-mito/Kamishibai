import {connect} from "react-redux"
import App from "../components/App"

const mapStateToProps = (state) => {
  return {
    history: state.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {

    },
    onChangeType: () => {
    },
  }
}


const CApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default CApp
