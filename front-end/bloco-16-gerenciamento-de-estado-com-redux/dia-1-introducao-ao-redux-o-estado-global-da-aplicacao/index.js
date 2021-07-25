import { createStore } from "redux";
import meuReducer from "./reducer";

const store = createStore(meuReducer);

document.getElementById("next").addEventListener("click", () => {
  store.dispatch({ type: "NEXT_COLOR" });
});
document.getElementById("previous").addEventListener("click", () => {
  store.dispatch({ type: "PREVIOUS_COLOR" });
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(store.getState());
  document.getElementById("value").innerHTML = colors[index];
  document.getElementById("container").style.backgroundColor = colors[index];
});
