import css from './ContactsSearch.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'redux/contactsSlice';

const ContactsSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector(state => state.contacts.query);

  const onQueryChange = query => {
    dispatch(setQuery(query));
  };

  return (
    <div className={css.group}>
      <label>Find contacts by name:</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={query}
        onChange={e => onQueryChange(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
};

export default ContactsSearch;

ContactsSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
