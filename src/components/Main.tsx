import Tasks from "./Task";

function Main() {
  return (
    <>
      <div className="container my-5">
        <form action="" className="p-5 bg-dark rounded">
          <h3 className="text-center text-white">To Do App</h3>
          <div className="row mt-5">
            <div className="col-md-6 text-center w-100">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new task"
                />
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
          <Tasks />
        </form>
      </div>
    </>
  );
}

export default Main;
