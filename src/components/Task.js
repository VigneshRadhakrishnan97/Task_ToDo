import React, { Fragment } from "react";
import { connect } from "react-redux";
import {add} from '../actions'

class Task extends React.Component {


  render() {
    return (
      <Fragment>
        <div className="ui top attached menu">
          <div className="ui dropdown icon item">
            TASKS {this.props.count > 0 ? this.props.count : null}
          </div>
          <div className="right menu">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <strong style={{ fontSize: "30px" }} onClick={this.props.add}>
                  <div
                    data-inverted=""
                    data-tooltip="Add Task"
                    data-position="left center"
                  >
                    +
                  </div>
                </strong>
              </div>
              <div className="results"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null,{add})(Task);
