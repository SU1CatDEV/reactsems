import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme/actions";
import { useCallback } from "react";

export default function ThemeExample() {
  const dispatch = useDispatch();

  // Use useSelector to access state
  const { theme } = useSelector((state) => state.theme);

  const setTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return (
    <div
        style={theme ? {color: "white", backgroundColor: "#202020"} : {color:"black", "backgroundColor": "white"}}
    >
      <h4>Dark mode?</h4>
      <input
        type="checkbox"
        checked={theme}
        onChange={setTheme}
      />
    </div>
  );
}
