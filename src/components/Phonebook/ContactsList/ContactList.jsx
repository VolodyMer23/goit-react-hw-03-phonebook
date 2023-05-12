import PropTypes from 'prop-types';
import {
  ContactsWrapper,
  ContactsTitle,
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsNumber,
  DeleteBtn,
  DeleteIcon,
} from './ContactList.styled';

function Contacts({ title, contacts, onDelete }) {
  return (
    <ContactsWrapper>
      <ContactsTitle>{title}</ContactsTitle>
      <ContactsList>
        {contacts.map(({ name, number, id }) => {
          return (
            <ContactsItem key={id}>
              <ContactsName>{name}:</ContactsName>
              <ContactsNumber>{number}</ContactsNumber>
              <DeleteBtn aria-label="Delete" onClick={() => onDelete(id)}>
                <DeleteIcon />
              </DeleteBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </ContactsWrapper>
  );
}

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
