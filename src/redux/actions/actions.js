import { EDIT_TASK, ADD_TASK, DELETE_TASK,DONE_TASK } from "./actionsTypes";

export const addTask = (newTask) => {
  console.log(newTask, 'newTask');
  return { type: ADD_TASK, payload: newTask };
};
export const editTask = (newTask, id) => {
  return {
    type: EDIT_TASK,
    payload: { newTask, id },
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const doneTask=(id)=>{
    return{
        type: DONE_TASK,
        payload: id ,
    }
}
