import styles from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts';

function Contact({ id, number, name }) {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContacts(id));
  };
  return (
    <li className={styles.li}>
      {name + ': ' + number}
      <button
        className={styles.button}
        onClick={() => {
          deleteContact();
        }}
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
