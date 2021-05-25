import React from "react";
import { connect } from "react-redux";
import { login, gettasklist } from "../actions";
import List from "./List";
import Task from "./Task";
import Form from "./Form";
import "../style.css";
import _ from "lodash";
import AddTask from "./AddTask";

class App extends React.Component {
  componentDidMount() {
    this.props.login();
  }
  componentDidUpdate(props) {
    this.props.gettasklist();
  }
  shouldComponentUpdate(nProps) {
    if (_.isEqual(nProps.details, this.props.details)) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="four wide column"></div>
          <div className="eight wide column">
            <div className="ui mini message">
              <div className="header">No Login Page</div>
              <p>Default Login will be 'smithcheryl@yahoo.com'</p>
              <p>
                <i>by Vignesh</i>{" "}
              </p>
            </div>
            <Task count={this.props.details.task_list.length} />
            <div className="ui bottom attached segment">
              {this.props.details &&
                Object.values(this.props.details.edit_task).length > 0 && (
                  <Form />
                )}
              {this.props.details && this.props.details.add === 1 && (
                <AddTask />
              )}
              <List />
            </div>
          </div>
          <div className="four wide column"></div>
        </div>
      </div>
    );
  }
}

const mapStateTOProps = (state) => {
  return { details: state.getdetails };
};

export default connect(mapStateTOProps, { login, gettasklist })(App);
