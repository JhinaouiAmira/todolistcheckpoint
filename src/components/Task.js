import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../redux/actions/actions";
import Edit from "./Edit";
function Task({ x }) {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <h2> {x.text} </h2>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => dispatch(deleteTask(x.id))}
        >
          <DeleteIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <Edit task={x} />
        </Fab>
        <Fab aria-label="like" onClick={() => dispatch(doneTask(x.id))}>
          {x.Done ? "Done" : "Undone"}
        </Fab>
      </Box>
    </div>
  );
}

export default Task;
