import ContactForm from './contactForm/contactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from 'components/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
