import css from './MyContacts.module.css';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsSearch from './ContactsSearch/ContactsSearch';
import ContactsList from './ContactsList/ContactsList';

const MyContacts = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactsForm />
      </div>
      <div className={css.block}>
        <h2 className={css.title}>Contacts</h2>
        <ContactsSearch />
        {<ContactsList />}
      </div>
    </div>
  );
};

export default MyContacts;
