import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, PhonebookContainer, PhonebookTitle } from './App.styled';
import Contacts from './Phonebook/ContactsList/ContactList';
import { ContactAddForm } from './Phonebook/ContactAddForm/ContactAddForm'; 
import Filter from './Phonebook/Filter/Filter';
import ContactsData from './Phonebook/Data/ContactsData.json';

export class App extends Component {
  state = {
    contacts: ContactsData,
    filter: '',
  };

  nameCheker = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  onFormSubmit = data => {
    if (this.nameCheker(data.name)) {
      return alert(`${data.name} is already in contacts.`);
    }
    this.setState(prevState => {
      const contactId = nanoid();
      return {
        contacts: prevState.contacts.concat({ ...data, id: contactId }),
      };
    });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onFilterContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  render() {
    return (
      <Container>
        <PhonebookContainer>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactAddForm onSubmit={this.onFormSubmit}
          ></ContactAddForm>
        </PhonebookContainer>
        <Filter
          value={this.state.filter}
          onChange={this.onFilterChange}
        ></Filter>
        <Contacts
          title="Contacts"
          contacts={this.onFilterContact()}
          onDelete={this.onDeleteContact}
        ></Contacts>
      </Container>
    );
  }
}
