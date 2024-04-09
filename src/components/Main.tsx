import React, { useState } from "react";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    newTask && setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index, task) {
    setEditIndex(index);
    setEditedTask(task);
  }

  function saveTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? editedTask : task
    );
    setTasks(updatedTasks);
    setEditIndex(-1);
    setEditedTask("");
  }

  return (
    <>
      <div className="container my-5">
        <div className="p-5 bg-dark rounded">
          <h3 className="text-center text-white">To Do App</h3>
          <div className="row mt-5">
            <div className="col-md-6 text-center w-100">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new task"
                  value={newTask}
                  onChange={handleInputChange}
                />
                <button className="btn btn-primary" onClick={addTask}>
                  Add
                </button>
              </div>
            </div>
          </div>
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li className="list-group-item" key={index}>
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      className="form-control"
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button
                      className="btn btn-success mt-2 btn-sm float-end"
                      onClick={() => saveTask(index)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      className="form-check-input me-1 text"
                      type="checkbox"
                      value=""
                      id={`checkbox-${index}`}
                      key={`checkbox-${index}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox-${index}`}
                    >
                      {task}
                    </label>
                    <button
                      className="btn btn-danger btn-sm float-end"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success btn-sm float-end me-3"
                      onClick={() => editTask(index, task)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
