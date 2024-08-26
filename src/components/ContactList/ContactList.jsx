import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
  const userContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const filterContact = userContacts.filter((userContact) =>
    userContact.name
      .toLocaleLowerCase()
      .includes(selectNameFilter.toLocaleLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;