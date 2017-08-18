import {connect} from "react-redux"
import Counter from "../components/Counter"
import {counter_increment, counter_decrement} from "../actions/index"

const mapStateCounterrops = (state) => {
  return {
    counter: state.counter,

  }
}

const mapDispatchCounterrops = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(counter_increment())
    },
    onDecrement: () => {
      dispatch(counter_decrement())
    },
  }
}


const CCounter = connect(mapStateCounterrops, mapDispatchCounterrops)(Counter)

export default CCounter
