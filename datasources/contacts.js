const contacts = require('../data/contacts.json');
const data = require('../data/data.json')
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class ContactAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getContacts(args) {
    return _.filter(contacts, args);
  }

  getContactById(id) {
    const contact = _.filter(contacts, { id: parseInt(id) });
    return contact[0];
  }

  toggleContact(id) {
    const contact = _.filter(contacts, { id: parseInt(id) });
    contact[0].favourite = !contact[0].favourite;
    return contact[0];
  }

  addContact(contact) {
    contact.id = 5;
    contacts.push(contact);
    return contact;

  }
}

module.exports = ContactAPI;
