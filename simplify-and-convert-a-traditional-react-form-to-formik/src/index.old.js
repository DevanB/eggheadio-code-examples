import React from "react";
import { render } from "react-dom";
import ItemList from "../../simplify-and-convert-a-react-hooks-based-form-to-formik/src/ItemList";
import "./index.css";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const handleChange = event => setValue(event.target.value);

  return (
    <React.Fragment>
      <h2>Regular Maintenance:</h2>
      <ItemList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item:</label>
        <input type="text" name="item" value={value} onChange={handleChange} />
        <input type="submit" value="Add Item" />
      </form>
    </React.Fragment>
  );
};

export default App;

render(<App />, document.getElementById("root"));
