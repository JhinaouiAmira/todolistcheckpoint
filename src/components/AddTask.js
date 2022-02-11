import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addTask } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);
  const addRef = useRef();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    if (addRef) addRef.current = "";
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    dispatch(addTask({ text: addRef.current, id: Math.random(), Done: false }));
    handleClose();
  };

  return (
    <div className="a2" >
      <Button className="a3" variant="outlined" onClick={handleClickOpen}>
        ADD NEW TASK{" "}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          New Task
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <input
              id="a1"
              ref={addRef}
              onChange={(e) => {
                addRef.current = e.target.value;
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {" "}
            Cancel{" "}
          </Button>
          <Button onClick={() => dispatch(handleAdd())}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
