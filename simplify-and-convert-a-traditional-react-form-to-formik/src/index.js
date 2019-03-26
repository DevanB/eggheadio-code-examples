import "./index.css";
import React from "react";
import { render } from "react-dom";
import { Field, Form, Formik } from "formik";
import ItemList from "./ItemList";

const App = () => {
  const [items, setItems] = React.useState([]);

  return (
    <React.Fragment>
      <h2>Regular Maintenance:</h2>
      <ItemList items={items} />
      <Formik
        onSubmit={values => {
          setItems([...items, values.item]);
        }}
      >
        <Form>
          <label htmlFor="name">Item:</label>
          <Field type="text" name="item" />
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default App;

render(<App />, document.getElementById("root"));
