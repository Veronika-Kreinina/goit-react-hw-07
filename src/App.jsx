import { useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoadind } from "./redux/filtersSlice";
import { fetchContacts } from "./redux/contactsOps";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadind);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Ooops...</p>}
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
