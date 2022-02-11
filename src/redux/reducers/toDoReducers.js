//importation
import { ADD_TASK, DELETE_TASK, EDIT_TASK,DONE_TASK } from "../actions/actionsTypes";

//initial State
const initialState = {
  tasks: [
    { text: "task1", id: Math.random(), Done: false },
    { text: "task2", id: Math.random(), Done: false },
    { text: "task3", id: Math.random(), Done: false },
    { text: "task4", id: Math.random(), Done: false },
    { text: "task5", id: Math.random(), Done: false },
    { text: "task6", id: Math.random(), Done: false },
  
  ],
};

//pure function
const taskReducer = (state = initialState, actions) => {
  console.log("actions", actions);
  const { type, payload } = actions;
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
      // return {...state,tasks:state.tasks.splice(payload,1)};
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id == payload.id ? { ...el, text: payload.newTask } : el
        ),
      };
case DONE_TASK:
  return {...state,tasks:state.tasks.map((el)=>(el.id==payload?{...el,Done: !el.Done}:el))}

    default:
      return state;
  }
};
export default taskReducer;
