import { useId } from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(
      addContact({ id: values.id, name: values.name, number: values.number })
    );
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div className="s.wrapper">
          <label className={s.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={s.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className="s.wrapper">
          <label className={s.label} htmlFor={numberId}>
            Number
          </label>
          <Field className={s.input} type="text" name="number" id={numberId} />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
