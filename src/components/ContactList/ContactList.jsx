import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contactsItems = useSelector(selectContacts);
  const filtersName = useSelector(selectFilters);
  const fileredData = contactsItems.filter((item) =>
    item.name.toLowerCase().includes(filtersName.toLowerCase())
  );

  return (
    <div>
      <ul className={s.list}>
        {fileredData.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact key={contact.id} contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
