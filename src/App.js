import React, { Component } from 'react';
import ContactDetails from './ContactDetails'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'',
      contactData:[{
        id: 1,
        name: 'Apple',
        phoneNumber: 'IOS',
        image: 'https://cdn.worldvectorlogo.com/logos/apple.svg'
      }, {
        id: 2,
        name: 'Google',
        phoneNumber: 'Android',
        image: 'https://cdn.worldvectorlogo.com/logos/android.svg'
      }, {
        id: 3,
        name: 'Microsoft',
        phoneNumber: 'Windows mobile',
        image: 'https://cdn.worldvectorlogo.com/logos/windows.svg'
      }, {
        id: 4,
        name: 'Blackberry',
        phoneNumber: 'Blackberry OS',
        image: 'https://cdn.worldvectorlogo.com/logos/bbm-blackberry-messenger.svg'
      }
    ]
    }
  }

  handleChange(e){
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    let {contactData, value} = this.state; 
    let filterContacts = contactData.filter((contact) =>
      contact.name.toLowerCase().indexOf(value) !== -1
    )
    
    return (
      <div className="App">
        <h1>Fetch Contact Details</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        {
          filterContacts.map((contact) =>(
            <ContactDetails contactData={contact} key={contact.id}/>
          ))
        }
        
      </div>
    );
  }
}

export default App;
