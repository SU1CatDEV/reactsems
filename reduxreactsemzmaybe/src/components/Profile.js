import { useDispatch, useSelector } from "react-redux";
import { exampleAction } from "../store/profile/actions";
import { useCallback } from "react";

export default function Profile() {
  const dispatch = useDispatch();

  // Use useSelector to access state
  const { showName, name } = useSelector((state) => state.profile);

  const setShowName = useCallback(() => {
    dispatch(exampleAction());
  }, [dispatch]);

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
    </div>
  );
}
