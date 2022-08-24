import styles from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';

function Contact({ id, number, name }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={styles.li}>
      {name + ': ' + number}
      <button
        className={styles.button}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Contact;
