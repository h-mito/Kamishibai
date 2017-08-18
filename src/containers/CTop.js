import {connect} from "react-redux"
import Top from "../components/Top"
import {history_push} from "../actions/index"

const mapStateToProps = (state) => {
  return {
    history: state.history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGoCounter: () => {
      dispatch(history_push("/counter"))
    },
    onGoAbout: () => {
      dispatch(history_push("/about"))
    },
  }
}


const CTop = connect(mapStateToProps, mapDispatchToProps)(Top)

export default CTop
