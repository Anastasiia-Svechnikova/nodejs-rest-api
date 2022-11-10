const fs = require('fs/promises')
const path = require("node:path");
const { uid } = require('uid')

const contactsPath = path.join(__dirname, "contacts.json");

// const contactsPath = path.join(__dirname, "books.json");


const listContacts = async () => {
  try {
    const result = await getAllContacts()
    return result
  } catch (error) {
    console.log(error)
  }
  
}

const getContactById = async (contactId) => {
  try {
    const data = await getAllContacts()
    const result = data.find(({ id }) => id === contactId)
    return result|| null
  } catch (error) {
    console.log(error)
  }

}

const removeContact = async (contactId) => {
  try {
    const data = await getAllContacts()
    const indexToDelete = data.findIndex(({ id }) => id === contactId)
    if (indexToDelete === -1) {
      return null
    }
    const [result] = data.splice(indexToDelete, 1)
    await updateAllContacts(data)
    return result

  } catch (error) {
    console.log(error)
  }
}

const addContact = async (body) => {
  const {name, email, phone} = body
  try {
    const data = await getAllContacts();
    const id = uid()
    const newContact = { id, name, email, phone }
    await updateAllContacts([...data, newContact])

    return newContact

  } catch (error) {
    console.log(error)
  }

}

const updateContact = async (contactId, body) => { 
  try {
    const data = await getAllContacts()
    const contact = await getContactById(contactId)
    const updatedContact = { ...contact, ...body }
    const indexToUpdate = data.findIndex(({id})=> id === contactId)
    data[indexToUpdate] = updatedContact
    await updateAllContacts(data)

    return updatedContact

  } catch (error) {
    console.log(error)
  }

}


// get all contacts from db/contacts.json and parses them
async function getAllContacts() {
  try {
    const data = await fs.readFile(contactsPath, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

//  write updated data to contacts.json
async function updateAllContacts(data) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(data))
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
