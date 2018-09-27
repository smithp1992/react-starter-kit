import React, {Component} from "react";
import {connect} from 'react-redux';
import "./Error.scss";

class Error extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        Error 404
      </div>
    );
  }
}

/* Link Redux State Params with React Props */
const mapStateToProps = (state) => ({});

/* Link Redux Dispatch Functions to React Props */
const mapDispatchToProps = (dispatch) => ({});

const ErrorPage = connect(mapStateToProps, mapDispatchToProps)(Error);
export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
