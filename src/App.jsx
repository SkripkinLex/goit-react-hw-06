import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const userContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid(4) };
    dispatch(addContact(finalContact));
  };

  const onDeleteContact = (deleteId) => {
    dispatch(deleteContact(deleteId));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  const filterContact = userContacts.filter((userContact) =>
    userContact.name
      .toLocaleLowerCase()
      .includes(selectNameFilter.toLocaleLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={onAddContact} />
        <SearchBox searchValue={selectNameFilter} handleSearch={handleSearch} />
        <ContactList
          contacts={filterContact}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}

export default App;