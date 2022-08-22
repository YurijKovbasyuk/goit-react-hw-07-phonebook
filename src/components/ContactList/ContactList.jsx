import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactsApi';

function ContactList() {
  // const contacts = useSelector(state => state.contacts.value);
  // const contacts = [];
  const { data: contacts = [] } = useGetContactsQuery();

  const filter = useSelector(state => state.filter.value);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <ul className={styles.cont}>
        {visibleContacts.map(contact => {
          const { id, phone, name } = contact;
          return <Contact key={id} number={phone} name={name} id={id} />;
        })}
      </ul>
    </div>
  );
}

export default ContactList;
