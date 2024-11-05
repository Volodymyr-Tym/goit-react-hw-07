import Contact from '../Contact/Contact';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { selectContacts, selectFilteredContacts } from '../../redux/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts === null && <h3>Your contact list is empty</h3>}

      {contacts !== null && filteredContacts.length === 0 && (
        <h3>There are no matches</h3>
      )}

      <ul className={styles.user_list}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map(user => {
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
