import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../redux/contacts';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.value);
  const handleSubmit = e => {
    let loginInputId = nanoid();
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const checkedForName = contacts.some(
      contact => normalizedName === contact.name.toLowerCase()
    );

    if (checkedForName) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(setContacts({ id: loginInputId, name: name, number: number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
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
          Phone
          <input
            onChange={handleChange}
            type="tel"
            name="number"
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </label>
        <br />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
