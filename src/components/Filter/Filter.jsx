import { Fragment } from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

function Filter() {
  const value = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Fragment>
      <p className={css.p}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </Fragment>
  );
}

export default Filter;
