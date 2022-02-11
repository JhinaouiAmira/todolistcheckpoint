import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions/actions";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
function Edit({ task }) {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(newTask, task.id));
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Fab
        color="secondary"
        aria-label="edit"
        variant="primary"
        onClick={handleShow}
      >
        <EditIcon />
      </Fab>
      {/* <Button variant="primary" onClick={handleShow}></Button> */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={newTask}
            placeholder="type text"
            onChange={(e) => setNewTask(e.target.value)}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
