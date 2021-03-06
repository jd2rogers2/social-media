import React from 'react';

class authInput extends React.Component {
  state = {
    email: "",
    name: "",
    password: ""
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.formAction(this.state);
    this.setState({
      email: "",
      name: "",
      password: ""
    })
  }
  // show if sign up form
  renderName = () => (
    <React.Fragment >
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name"
        value={this.state.name} onChange={this.handleChange} required/>
    </React.Fragment>
  )
  render () {
    return (
      <React.Fragment>
        <h1>{this.props.title} <button type="button" onClick={this.props.hide}>Hide</button></h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            value={this.state.email} onChange={this.handleChange} required/>

          {this.props.formShown === "login" ? null : this.renderName()}

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            value={this.state.password} onChange={this.handleChange} required/>

          <input type="submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default authInput;
