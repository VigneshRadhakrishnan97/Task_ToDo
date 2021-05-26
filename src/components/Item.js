import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import {gettask} from '../actions'

class Item extends React.Component {

  state={id:0};
  getusername=(id)=>{

    let name =
      this.props.users &&
      this.props.users.length > 0 &&
      this.props.users.find((user) => user.id === id) ? (
        this.props.users.find((user) => user.id === id).name
      ) : (
        <p>
          No Name-<small> ID was replaced by Name </small>
        </p>
      );
    
    return name;
  }



  render() {
    return this.props.List.map((li) =>
      li.visible === 1 ? (
        <div
          key={li.id}
          className="item"
          onMouseOver={() => this.setState({ id: li.id })}
          onMouseOut={() => this.setState({ id: 0 })}
        >
          <div className="right floated content">
            <div
              style={{ display: li.id === this.state.id ? "" : "none" }}
              onClick={() => {
                this.props.gettask(li.id);
              }}
              data-inverted=""
              data-tooltip="Edit Task"
            >
              <i className="fas fa-pencil-alt box"></i>
            </div>
          </div>
          <img
            className="ui avatar image"
            src={li.user_icon}
            alt={li.user_name}
          ></img>
          <div className="content">
            <div>{li.task_msg}</div>
            <Moment style={{ color: "red" }} format="DD/MM/YYYY">
              {li.task_date}
            </Moment>
          </div>
        </div>
      ) : null
    );
  }
}


export default connect(null, {gettask})(Item);
