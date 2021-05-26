import React from 'react'
import { connect } from "react-redux"; 
import Dropdown from "./Dropdown";
import { addtask, canceltask } from "../actions";

class AddTask extends React.Component {
  state = {
    assigned_user: "",
    task_date: "",
    task_time: 0,
    is_completed: 0,
    time_zone: 0,
    task_msg: "",
    user_name: "",
    task_date_time_in_utc: "",
  };

  onsubmit = (e) => {
    //const id = this.props.details.results.id;

    const data = {
      assigned_user: this.state.assigned_user,
      task_date: this.state.task_date,
      task_time: this.state.task_time,
      is_completed: this.state.is_completed,
      time_zone: this.state.time_zone,
      task_msg: this.state.task_msg,
    };
    if (data.assigned_user==="")
    data.assigned_user=this.props.details.users[0].id;
    
    this.props.addtask(data);
  };
  onchnage = (e) => {
    if (e.target.name === "task_time") {
      if (e.target.value === "") {
        this.setState({
          ...this.state,
          [e.target.name]: this.state.task_time,
        });
      } else {
        this.timeTodate(e.target.value);
        this.setState({
          ...this.state,
          [e.target.name]: this.timeTodate(e.target.value),
        });
      }
    } else this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  timeTodate = (time) => {
    let t = time.split(":")[0] * 60 * 60;
    t += time.split(":")[1] * 60;

    return t;
  };

  dateTotime = () => {
    let h = parseInt(this.state.task_time / 3600);
    let s = this.state.task_time % 3600;
    let m = parseInt(s / 60);
    m = m <= 9 ? `0${m}` : m;
    h = h <= 9 ? `0${h}` : h;
    return h + ":" + m;
  };

  changeUser = (id, name) => {
    this.setState({ ...this.state, assigned_user: id, user_name: name });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="fonttask">
            <label>
              <b>Task Description</b>
            </label>
            <input
              type="text"
              name="task_msg"
              placeholder="Task Description"
              value={this.state.task_msg ? this.state.task_msg : ""}
              onChange={this.onchnage}
            ></input>
            <i className="fas fa-tasks"></i>
          </div>

          <div className="ui grid">
            <div className="eight wide column">
              <div className="fontdate">
                <label>
                  <b>Date</b>
                </label>
                <input
                  type="date"
                  name="task_date"
                  placeholder="Date"
                  value={this.state.task_date ? this.state.task_date : ""}
                  onChange={this.onchnage}
                ></input>
              </div>
            </div>
            <div className="eight wide column">
              <div className="fonttime">
                <label>
                  <b>Time</b>
                </label>
                <input
                  type="time"
                  name="task_time"
                  placeholder="Time"
                  value={this.state.task_date ? this.dateTotime() : "00:00"}
                  onChange={this.onchnage}
                ></input>
              </div>
            </div>
          </div>
          <div className="fontuser">
            <label>
              <b>Assign User</b>
            </label>

            <Dropdown
              id={this.state.assigned_user}
              onchangeuser={this.changeUser}
            />
          </div>
          <div className="ui grid">
            <div className="row">
              <div className="ten wide column"></div>
              <div className="two wide column">
                <div
                  className="cancelbutton"
                  onClick={this.props.canceltask}
                  style={{ cursor: "pointer" }}
                >
                  Cancel
                </div>
              </div>
              <div className="one wide column"></div>
              <div className="two wide column">
                <button
                  className="ui positive   button"
                  type="submit"
                  onClick={this.onsubmit}
                >
                  Save
                </button>
              </div>
              <div className="one wide column"></div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

const mapStateTOProps = (state) => {
  return { details: state.getdetails };
};

export default connect(mapStateTOProps, { addtask, canceltask })(AddTask);