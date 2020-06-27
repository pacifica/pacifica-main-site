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
        // eslint-disable-next-line no-console
        console.log(
          'SUCCESS!',
          response.status,
          response.text
        )
      },
      (err) => {
        // eslint-disable-next-line no-console
        console.log(
          'FAILED...',
          err
        )
      }
    )
    event.preventDefault()
  }

  // eslint-disable-next-line max-lines-per-function
  render () {
    const nameLabel = 'Name: '
    const emailLabel = 'Email: '
    const messageLabel = 'Message: '
    emailjs.init('user_cLHSBKrOJvUPB3efkm8bb')
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ContactForm-text-block">
          <div className="ContactForm-text">
            <label>
              {nameLabel}
            </label>
          </div>
          <div className="ContactForm-text">
            <input
              name="userName"
              onChange={this.handleChange}
              type="text"
            />
          </div>
        </div>
        <div className="ContactForm-text-block">
          <div className="ContactForm-text">
            <label>
              {emailLabel}
            </label>
          </div>
          <div className="ContactForm-text">
            <input
              name="userEmail"
              onChange={this.handleChange}
              type="email"
            />
          </div>
        </div>
        <hr className="contactform-divider" />
        <div className="ContactForm-text-block">
          <div className="ContactForm-text">
            <label>
              {messageLabel}
            </label>
          </div>
          <div className="ContactForm-text">
            <textarea
              name="userMessage"
              onChange={this.handleChange}
              style={{ height: '150px', width: '100%' }}
            />
          </div>
          <div className="ContactForm-text">
            <input
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    )
  }
}

export default ContactForm
