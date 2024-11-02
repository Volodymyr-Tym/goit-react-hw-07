import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim())
  );

  return (
    <>
      {contacts.length === 0 && <h3>Your contact list is empty</h3>}

      {contacts.length !== 0 && filteredContacts.length === 0 && (
        <h3>There are no matches</h3>
      )}

      <ul className={styles.user_list}>
        {filteredContacts.map(user => {
          return (
            <li className={styles.user_card} key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
