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
