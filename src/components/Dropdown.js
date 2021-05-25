import React from "react";
import { connect } from "react-redux";
import { getusers } from "../actions";

class Dropdown extends React.Component {
  componentDidMount() {
    this.props.getusers();
  }

  renderList = () => {
    return this.props.details.users.map((user) => {
      return (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      );
    });
  };
  render() {
    return (
      <select 
        className="dropdownbox"
        onChange={(e) => {
          this.props.onchangeuser(e.target.value, e.target.name);
        }}
        value={this.props.id}
      >
        {this.props.details.users ? this.renderList() : null}
      </select>
    );
  }
}

const mapStateTOProps = (state) => {
  return { details: state.getdetails };
};

export default connect(mapStateTOProps, { getusers })(Dropdown);
