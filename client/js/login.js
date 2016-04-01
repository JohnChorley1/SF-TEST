"use strict";
var Content = React.createClass({

  getInitialState: function() {
    return {
      view: 'intro'
    };
  },

  handleClick: function(e) {
    this.setState({
      view: e.target.value
    });
  },

  render: function() {
    if (this.state.view === 'intro') {
      return (
        <div id ='divContainer2'>
        <Intro handleClick={this.handleClick}/>
        </div>
      );
    }
    else if (this.state.view === 'register') {
      return (
        <div id ='divContainer2'>
        <Register handleClick={this.handleClick} url = '/register' />
        </div>
      );
    }
    else if (this.state.view === 'login') {
      return (
        <div id ='divContainer2'>
        <Login handleClick={this.handleClick} url = '/login/'/>
        </div>
      );
    }
  }
});

var Intro = React.createClass({

  render: function() {
    return (

      <div id="introDiv">
            <br/>
            <br/>
            <button id="signInButton" type="button" className="displayBlock"  value='login' onClick={this.props.handleClick}>Sign In</button>
            <button id="registerButton" type="button"  className="displayBlock"  value='register' onClick={this.props.handleClick}> Register</button>
            <a href="index.html">
              <button id="guestButton" type="button" className="buttonlayout" href='/'> Continue As Guest</button>
            </a>
          </div>
    );
  }
});

var Login = React.createClass({

  // getInitialState: function() {
  //   return {
  //     email: "",
  //     password: "",
  //     loading: false,
  //     errors: {}
  //   }
  // },

  // _create: function() {
  //   return $.ajax({
  //     url: this.props.url,
  //     type: 'POST',
  //     data: {
  //       email: this.props.email,
  //       password: this.props.password
  //     },
  //   });
  // },

  // _onSubmit: function(e) {
  //   e.preventDefault();

  //   var errors = this._validate();

  //   if (Object.keys(errors).length != 0) {
  //     this.setState({
  //       errors: errors
  //     });
  //   return;
  //   }

  //   var xhr = this._create();
  //   xhr.done(this._onSuccess)
  //   .fail(this._onError)
  //   .always(this.hideLoading)
  // },

  // hideLoading: function() {
  //   this.setState({
  //     loading: false
  //   });
  // },

  // _onSuccess: function(data) {
  //   //this.refs.logInForm.getDOMNode().reset();
  //   this.setState(this.getInitialState());

  //   console.log('Success', data);
  // },

  // _onError: function(data) {
  //   var message = 'Failed to create the user';
  //   var res = data.responseJSON;

  //   if(res.message) {
  //     message = data.responseJSON.message;
  //   }

  //   if(res.errors) {
  //     this.setState({
  //       errors: res.errors
  //     });
  //   }
  // },

  // _onChange: function(e) {
  //   var state = {};

  //   state[e.target.name] = e.target.value;
  //   this.setState(state);
  // },

  // _validate: function() {
  //   var errors = {};

  //   if(this.state.email === "") {
  //     errors.email = "Email is required";
  //   }

  //   if(this.state.password === "") {
  //     errors.password = "Password is required";
  //   }

  //   return errors;
  // },


  getInitialState: function() {
    return {
      email: '',
      password: '',
      errors: {}
    };
  },
  handleEmailChange: function(e) {
    this.setState({
      email: e.target.value
    });
  },
  handlePasswordChange: function(e) {
    this.setState({
      password: e.target.value

    });
  },

  _onSuccess: function(data) {
    this.setState(this.getInitialState());

    console.log('Success', data);
  },

  _onError: function(data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    if (res.message) {
      message = data.responseJSON.message;
    }
    if (res.errors) {
      this.setState({
        errors: res.errors
      });
    }
  },

  _validate: function() {
    console.log(this.state);
    var errors = {};
    if (!this.state.email) {
      errors.email = "email is required";
    }
    if (!this.state.password) {
      errors.password = "Password is required";
    }
    console.log(errors)
    return Object.keys(errors).length > 0 ? errors : null;
  },

  handleLogin: function(e) {
    e.preventDefault();
    var errors = this._validate();
    if (errors){
      return alert(errors)
    }
    var email = this.state.email;
    var password = this.state.password;
    $.ajax({
      type: 'POST',
      url: this.props.url,
      dataType: 'json',
      data: { email: email, password: password }
    }).done(function(response) {
      if(response.loggedIn){
        return window.location.href = '/pod-profile';
      } else {
        return alert("Authentication failed");
      }
    }).fail(function(response) {
      return alert("Authentication failed");
    });
  },

  handleClick: function(e) {
    this.setState({
      view: e.target.value
    });
  },

  render: function() {

    /*return (
      <div id="logInDiv">
        <form id="logInForm" onSubmit={this._onSubmit}>
            <label>Email:</label>

            <input className="form" id="textField" type="text" name="email" refs="email" maxLength="30" onChange={this._onChange} required/>

            <label>Password:</label>

            <input className="form" id="textField" type="password" name="password" refs="password" onChange={this._onChange} required/>
            <input className="buttonlayout" type="submit" value="Login"/>
            <button className="buttonlayout" type="button" id="backButton" value="intro" onClick={this.props.handleClick}> Back</button>
            <button className="buttonlayout" id="forgotPasswordButton" type="button"> Forgot</button>
          </form>
        </div>
      );*/

    return (

      <div id="logInDiv">
            <form id="logInForm" onSubmit={this.handleLogin}>
              <label> Email: </label>
              <input className="form" id="textField" type="text" maxLength='50' name='email' refs='email' maxLength="30" value={this.state.email} onChange={this.handleEmailChange} required/>
              <label> Password: </label>
              <input className="form" id="textField" type="password" name='password' refs='password' value={this.state.password} onChange={this.handlePasswordChange} maxLength="30"
                     required/>
              <input className="buttonlayout" type="submit" value="Login"/>
              <button className="buttonlayout" type="button" id="backButton" value="intro" onClick={this.props.handleClick}> Back</button>
              <button className="buttonlayout" id="forgotPasswordButton" type="button"> Forgot</button>
            </form>
          </div>
    );
  }
});

var Register = React.createClass({

  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  },

  handleFirstNameChange: function(e) {
    this.setState({
      firstName: e.target.value
    });
  },
  handleLastNameChange: function(e) {
    this.setState({
      lastName: e.target.value
    });
  },
  handleEmailChange: function(e) {
    this.setState({
      email: e.target.value
    });
  },
  handlePasswordChange: function(e) {
    this.setState({
      password: e.target.value
    });
  },

  handleRegister: function(e) {
    e.preventDefault();
    var firstName = this.state.firstName.trim();
    var lastName = this.state.lastName.trim();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    if (!firstName || !lastName || !email || !password) {
      return;
    }
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      },
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  },

  render: function() {
    return (

      <div id="registerDiv">
            <form id="registerForm" onSubmit={this.handleRegister}>
              <label> First name: </label>
              <input className="form" id="firstName" type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
              <label> Last name: </label>
              <input className="form" id="lastName" type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
              <label> Email Address: </label>
              <input className="form" id="email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
              <label> Password: </label>
              <input className="form" id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
              <button className="buttonlayout" type="submit"> Register</button>
              <button className="buttonlayout" type="button" id="registerBackButton" value="intro" onClick={this.props.handleClick}> Back</button>
            </form>
          </div>
    );
  }
});

ReactDOM.render(<Content />, document.getElementById('content'));
