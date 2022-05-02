const keysArea = document.querySelector("#keys");
const valuesArea = document.querySelector("#values");
const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
  g: "gesdrwesf",
};

const keysOptions = Object.keys(state).map(
  (key) => `<option value=${key}>${key}</option>`
);
const valueOptions = Object.values(state).map(
  (val) => `<option value=${val}>${val}</option>`
);
keysArea.innerHTML = keysOptions;
valuesArea.innerHTML = valueOptions;

keysArea.addEventListener("change", (e) => {
  const key = e.target.value;
  valuesArea.value = state[key];
});

valuesArea.addEventListener("change", (e) => {
  const value = e.target.value;
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  keysArea.value = getKeyByValue(state, value);
});
