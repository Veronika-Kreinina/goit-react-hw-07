import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <div className={s.container}>
        <div>
          <p className={s.text}>{contact.name}</p>
          <p className={s.text}>{contact.number}</p>
        </div>
        <button className={s.btn} onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
