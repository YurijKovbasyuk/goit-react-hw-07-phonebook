import { useState } from 'react';
import styles from './contactForm.module.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApi';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const checkedForName = contacts.some(
      contact => normalizedName === contact.name.toLowerCase()
    );

    if (checkedForName) {
      return alert(`${name} is already in contacts`);
    }
    addContact({ name, phone });

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
            value={name}
          />
        </label>
        <br />
        <label htmlFor="">
          Number
          <input
            onChange={handleChange}
            type="tel"
            name="phone"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
          />
        </label>
        <br />
        <button className={styles.button} type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
