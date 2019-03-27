import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import ItemList from './ItemList';
import * as Yup from 'yup';

const initialValues = {
  item: '',
};

const validationSchema = Yup.object().shape({
  item: Yup.string().required('Item name is required'),
});

const App = () => {
  const [items, setItems] = React.useState([]);

  return (
    <React.Fragment>
      <h2>Regular Maintenance:</h2>
      <ItemList items={items} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          setItems([...items, values.item]);
        }}
      >
        <Form>
          <label htmlFor="item">Item:</label>
          <Field type="text" name="item" />
          <ErrorMessage name="item" />
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default App;

render(<App />, document.getElementById('root'));
