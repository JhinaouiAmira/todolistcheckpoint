import Task from "./Task";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function ListTask() {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  // console.log(tasks);
  const [status, setStatus] = useState("all");

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => setStatus("all")}>ALL</Button>
          <Button onClick={() => setStatus("done")}>DONE</Button>
          <Button onClick={() => setStatus("undone")}>UNDONE</Button>
        </ButtonGroup>
      </Box>
      {status == "all"
        ? tasks.map((el) => <Task x={el} key={el.id} />)
        : status == "done"
        ? tasks.filter((el) => el.Done).map((el) => <Task x={el} key={el.id} />)
        : tasks
            .filter((el) => !el.Done)
            .map((el) => <Task x={el} key={el.id} />)}
    </div>
  );
}

export default ListTask;
