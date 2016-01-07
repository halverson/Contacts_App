'use strict'

var Contact = {
  'name': '',
  'tel': '',
  'email': ''
}

var newContacts = []
var readContacts = JSON.parse(window.localStorage.getItem('contacts'))
console.log(readContacts)

function save (con) {
  window.localStorage.setItem('contacts', JSON.stringify(con))
}

var option = window.prompt('A - Add new contact  |  P - Print list of existing contacts', 'Type A or P')

if (option.toLowerCase() === 'a') {
  var name = window.prompt('Type the name and surname of the contact', 'Name Surname')
  var tel = window.prompt('Type the phone number of the contact', '021 123 4567')
  var email = window.prompt('Type the email address of the contact', 'name@email.com')
  Contact.name = name
  Contact.tel = tel
  Contact.email = email
  window.alert('Your new contact: ' + Contact.name + ' ' + Contact.tel + ' ' + Contact.email)
  newContacts.push(Contact)
  var finalContacts = newContacts.concat(readContacts)
  save(finalContacts)
  console.log(finalContacts)
}
