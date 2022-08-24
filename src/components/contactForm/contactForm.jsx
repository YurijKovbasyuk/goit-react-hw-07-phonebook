import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { setContacts } from '../../redux/contacts';
import { useAddContactMutation } from '../../redux/contactsApi';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const dispatch = useDispatch();
  // console.log(isLoading);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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
    dispatch(addContact({ id: loginInputId, name: name, phone: phone }));

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
  // onClick={() => addContact()}
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
          Phone number
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
