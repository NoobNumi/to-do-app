function Tasks() {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckbox"
            key="firstCheckbox"
          />
          <label className="form-check-label" htmlFor="firstCheckbox">
            First checkbox
          </label>
          <button className="btn btn-danger btn-sm float-end">Delete</button>
        </li>

        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="secondCheckbox"
            key="secondCheckbox"
          />
          <label className="form-check-label" htmlFor="secondCheckbox">
            Second checkbox
          </label>
          <button className="btn btn-danger btn-sm float-end">Delete</button>
        </li>
        <li className="list-group-item">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            id="thirdCheckbox"
            key="thirdCheckbox"
          />
          <label className="form-check-label" htmlFor="thirdCheckbox">
            Third checkbox
          </label>
          <button className="btn btn-danger btn-sm float-end">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default Tasks;
