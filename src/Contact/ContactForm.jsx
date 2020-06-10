import './index.scss'
import React from 'react'
import emailjs from 'emailjs-com'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userEmail: '',
      userMessage: '',
      userName: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static shouldComponentUpdate () {
    return false
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState((prevState) => ({ ...prevState, [name]: value }))
  }

  handleSubmit (event) {
    emailjs.send(
      'gmail',
      'pacifica_contact_form',
      this.state
    ).then(
      (response) => {
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        )
      },
      (err) => {
        console.log(
          'FAILED...',
          err
        )
      }
    )
    // Alert(`A name was submitted: ${JSON.stringify(this.state)}`)
    event.preventDefault()
  }

  render () {
    const nameLabel = 'Name: '
    const emailLabel = 'Email: '
    const messageLabel = 'Message: '
    emailjs.init('user_cLHSBKrOJvUPB3efkm8bb')
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="ContactForm-text">
          <label>
            {nameLabel}
          </label>
          <input
            name="userName"
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div class="ContactForm-text">
          <label>
            {emailLabel}
          </label>
          <input
            name="userEmail"
            onChange={this.handleChange}
            type="email"
          />
        </div>
        <hr className="contactform-divider" />
        <div class="ContactForm-text">
          <label class="ContactForm-text">
            {messageLabel}
          </label>
          <textarea
            name="userMessage"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Send"
          />
        </div>
      </form>
    )
  }
}

export default ContactForm
