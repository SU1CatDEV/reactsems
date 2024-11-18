import { useContext } from "react";
import { MyThemeContext } from "../context";

export default function Example() {
const contextValue = useContext(MyThemeContext);
console.log(contextValue); // { theme: 'dark' }
return <span>Example</span>;
}
