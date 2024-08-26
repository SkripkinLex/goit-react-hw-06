import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "../ContactList/ContactList.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p>
          <FaUser /> {contact.name}
        </p>
        <p>
          <FaPhone /> {contact.number}
        </p>
      </div>

      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;