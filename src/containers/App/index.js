import React from "react"
import { BasketPage } from "../../modules"
import { connect } from "react-redux"

import {
  incrementItem,
  decrementItem,
  deleteItem,
  checkDiscount,
} from "../../Actions"

const App = props => {
  return <BasketPage {...props} />
}

const mapStateToProps = store => {
  return { ...store }
}

const mapDispatchToProps = dispatch => {
  return {
    increment(state, id, numberOfItems) {
      dispatch(incrementItem(state, id, numberOfItems))
    },
    decrement(state, id, numberOfItems) {
      dispatch(decrementItem(state, id, numberOfItems))
    },
    deleteItem(state, id) {
      dispatch(deleteItem(state, id))
    },
    checkDiscount(value, code) {
      dispatch(checkDiscount(value, code))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
