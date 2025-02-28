import { Contract } from '../../src/lib/index';

type Contact = { name: string, company: string };

// eslint-disable-next-line no-unused-vars
class ContactsApp extends Contract {
  contacts = new BoxMap<Address, Contact>();

  myContact = new GlobalStateKey<Contact>();

  setMyContact(name: string, company: string): void {
    const contact: Contact = { name: name, company: company };

    this.myContact.set(contact);
    this.contacts.set(this.txn.sender, contact);
  }

  addContact(name: string, company: string, address: Address): void {
    const contact: Contact = { name: name, company: company };
    this.contacts.set(address, contact);
  }

  updateContactField(field: string, value: string, address: Address): void {
    if (field === 'name') {
      this.contacts.get(address).name = value;
    } else if (field === 'company') {
      this.contacts.get(address).company = value;
    } else throw Error('Invalid field');
  }

  verifyContactName(name: string, address: Address): void {
    assert(this.contacts.get(address).name === name);
  }
}
