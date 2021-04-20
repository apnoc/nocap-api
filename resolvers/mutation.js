
module.exports = {
    toggleContact: (parent, {id}, {dataSources}, info) => {
        return dataSources.contactAPI.toggleContact(id);
      },
    addNewContact: (parent, { contact }, {dataSources}, info) => {
        return dataSources.contactAPI.addContact( contact );
    }
}
