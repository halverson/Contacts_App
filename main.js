'use strict'

class Contact {
  constructor (name, tel, email) {
    this.name = name
    this.tel = tel
    this.email = email
  }

  Name () {
    console.log('Name: ' + this.name)
  }

  Tel () {
    console.log('Phone Number: ' + this.tel)
  }

  Email () {
    console.log('Email Address: ' + this.email)
  }
}

var option = window.prompt('A - Add new contact  |  P - Print list of existing contacts', 'Type A or P')

if (option.toLowerCase() === 'a') {
  var newC = new Contact()
  var name = window.prompt('Type the name and surname of the contact', 'Name Surname')
  var tel = window.prompt('Type the phone number of the contact', '021 123 4567')
  var email = window.prompt('Type the email address of the contact', 'name@email.com')
  newC.name = name
  newC.tel = tel
  newC.email = email
  window.alert('Your new contact: ' + newC.name + ' ' + newC.tel + ' ' + newC.email)
}
