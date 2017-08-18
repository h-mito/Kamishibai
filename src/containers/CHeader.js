import {connect} from "react-redux"
import Header from "../components/Header"
import {history_back} from "../actions/index"

const mapStateToProps = (state, ownProps) => {
  return {
    history: state.history,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onGoBack: () => {
      dispatch(history_back())
    },

  }
}

const CHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export default CHeader
