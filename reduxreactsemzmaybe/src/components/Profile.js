import { useDispatch, useSelector } from "react-redux";
import { exampleAction } from "../store/profile/actions";
import { useCallback, useState } from "react";
import { CHANGE_NAME } from "../store/profile/actions";

export default function Profile() {
  const dispatch = useDispatch();

  // Use useSelector to access state
  const { showName, name } = useSelector((state) => state.profile);
  const [value, setValue] = useState('');

  const setShowName = useCallback(() => {
    dispatch(exampleAction());
  }, [dispatch]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = useCallback(() => {
    dispatch({ type: CHANGE_NAME, payload: value })
  }, [dispatch, value]);

  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div>
        <button onClick={setName}>Change Name</button>
      </div>
    </div>
  );
}
