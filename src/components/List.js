import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import _ from "lodash";
import { gettasklist, getusers } from "../actions";

class List extends React.Component {
  componentDidUpdate(props) {
    if (!_.isEqual(props.details, this.props.details)) {
      this.props.getusers();
    }
  }

  render() {
    return (
      <div className="ui middle aligned divided list">
        <Item
          List={this.props.details.task_list}
          users={this.props.details.users}
        />
      </div>
    );
  }
}

const mapStateTOProps = (state) => {
  return { details: state.getdetails };
};

export default connect(mapStateTOProps, { gettasklist, getusers })(List);
