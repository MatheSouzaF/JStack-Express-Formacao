const { uuid } = require("uuidv4");
const contacts = [
  {
    id: uuid(),
    name: 'Matheus',
    email: 'matheus@gmail.com',
    phone: '11999999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
