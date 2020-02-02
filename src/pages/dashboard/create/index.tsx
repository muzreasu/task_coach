import { Field, Form, FormikProps, withFormik } from 'formik';
import * as React from "react";
import { useState } from "react";
import { boards } from "../../../data/boards";

interface IFormValues {
  name: string;
}

interface IMyFormProps {
  initialName?: string;
}

const InnerForm = (props: FormikProps<IFormValues>) => {
  const { isSubmitting } = props;
  return (
    <Form>
      <Field type="text" name="name" />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

const MyForm = withFormik<IMyFormProps, IFormValues>({
  mapPropsToValues: props => {
    return {
      name: props.initialName || '',
    };
  },

  handleSubmit: values => {
    boards.push(values.name);
  },
})(InnerForm);

const createBoard = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const showAddBoard = () => {
    setIsActive(!isActive);
  };

  const boardList = boards.map((board) => {
    return (
      <li key={name}>
        {board}
      </li>
    );
  });

  return (
    <div>
      <button onClick={showAddBoard}>
        create board
      </button>
      {isActive && <MyForm />}
      {boardList}
    </div>
  );
};

export default createBoard;


