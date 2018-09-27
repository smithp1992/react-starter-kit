import React, {Component} from "react";
import {connect} from 'react-redux';
import "./Home.scss"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

/* Link Redux State Params with React Props */
const mapStateToProps = (state) => ({});

/* Link Redux Dispatch Functions to React Props */
const mapDispatchToProps = (dispatch) => ({});

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
