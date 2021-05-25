const initialstate = {
  token: null,
  task_list: [],
  edit_task: {},
  users:[],
  add:0
};

export const getdetails = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        token: payload.results.token,
      };

    case "GETLIST":
      return {
        ...state,
        task_list: payload.results.map((result) => {
          if (
            state.edit_task &&
            state.edit_task.results &&
            state.edit_task.results.id === result.id
          ) {
            return { ...result, visible: 0 };
          } return { ...result, visible: 1 };
        }),
      };
    case "GETEDIT":
      return {
        ...state,
        edit_task: payload,
        task_list: state.task_list.map((task) => {
          if (payload.results.id === task.id) return { ...task, visible: 0 };
          else return { ...task, visible: 0 };
        }),
        add: 0
      };
    case "GETUSERS":
         return {
           ...state,
           users: payload.results.map((result) => {
             return {name:result.name, id:result.id};
           }),
         };
    case 'UPDATETASK':
      return {
        ...state,
        edit_task: {},
        task_list: state.task_list.map((result) => {
          return { ...result, visible: 1 };
        }),
      };   
      case 'CANCELTASK':
        return {
          ...state,
          edit_task: {},
          task_list: state.task_list.map((result) => {
            return { ...result, visible: 1 };
          }),
          add:0
        }; 
      case 'DELETETASK':
          return {
            ...state,
            edit_task: {},
            task_list: state.task_list.map((result) => {
              return { ...result, visible: 1 };
            }),
            
          }; 
       case 'ADD':
            return {
              ...state,
              edit_task: {},
              add: (state.add===1? 0:1)
            };
       case 'ADDTASK':
                return {
                  ...state,
                  edit_task: {},
                  add: 0,
                };
    default:
      return state;
  }
};
