import axios from "./axios";

const head = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

//login
export const login = () => async (dispatch, getstate) => {
  const cred = {
    email: "smithcheryl@yahoo.com",
    password: "12345678",
  };
  try {
    const body = JSON.stringify(cred);

    const res = await axios.post("/login", body, head);
    //console.log(res);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

//Get TaksList
export const gettasklist = () => async (dispatch, getstate) => {
  try {
    const token = "Bearer " + getstate().getdetails.token;

    const res = await axios.get("/task/lead_58be137bfde045e7a0c8d107783c4598", {
      headers: {
        ...head.headers,
        Authorization: token,
      },
    });
    //console.log(res);
    dispatch({
      type: "GETLIST",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

//Get one task
export const gettask = (id) => async (dispatch, getstate) => {
  try {
    const token = "Bearer " + getstate().getdetails.token;

    const res = await axios.get(
      `/task/lead_58be137bfde045e7a0c8d107783c4598/${id}`,
      {
        headers: {
          ...head.headers,
          Authorization: token,
        },
      }
    );
    //console.log(res);
    dispatch({
      type: "GETEDIT",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

//Get userdetails
export const getusers = () => async (dispatch, getstate) => {
  
  try {
    const token = "Bearer " + getstate().getdetails.token;

    const res = await axios.get(`team`, {
      headers: {
        ...head.headers,
        Authorization: token,
      },
    });
    //console.log(res);
    dispatch({
      type: "GETUSERS",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

//update task
export const updatetask = (task_id,data) => async (dispatch, getstate) => {
  try {
    const token = "Bearer " + getstate().getdetails.token;
    const body=JSON.stringify(data);
    const res = await axios.put(
      `/task/lead_58be137bfde045e7a0c8d107783c4598/${task_id}`,body,
      {
        headers: {
          ...head.headers,
          Authorization: token,
        },
      }
    );
    //console.log(res);
    dispatch({
      type: "UPDATETASK",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

//cancel task
export const canceltask =()=>{
  return {
    type: "CANCELTASK",

  };
}

//cancel add
export const add =()=>{
  return {
    type: "ADD",

  };
}

//delete task
export const deletetask = (task_id) => async (dispatch, getstate) => {
  try {
    const token = "Bearer " + getstate().getdetails.token;
    
    const res = await axios.delete(
      `/task/lead_58be137bfde045e7a0c8d107783c4598/${task_id}`,
      {
        headers: {
          ...head.headers,
          Authorization: token,
        },
      }
    );
    //console.log(res);
    dispatch({
      type: "DELETETASK",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};


//add task
export const addtask = (data) => async (dispatch, getstate) => {
  try {
    const token = "Bearer " + getstate().getdetails.token;
    const body=JSON.stringify(data);
    const res = await axios.post(
      `/task/lead_58be137bfde045e7a0c8d107783c4598`,body,
      {
        headers: {
          ...head.headers,
          Authorization: token,
        },
      }
    );
    //console.log(res);
    dispatch({
      type: "ADDTASK",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

