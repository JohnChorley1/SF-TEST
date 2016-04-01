'use strict';
var ContactForm = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      number: '',
      email: '',
      enquiryType: '',
      personalMessage: '',
      loading: false,
      errors: {}
    };
  },

  _create: function () {
    return $.ajax({
      url: '/api/contact-form/submit',
      type: 'POST',
      data: {
        name: this.state.name,
        number: this.state.number,
        email: this.state.email,
        enquiryType: this.state.enquiryType,
        personalMessage: this.state.personalMessage
      },
      beforeSend: function () {
        this.setState({
          loading: true
        });
      }.bind(this)
    })
  },

  _onSubmit: function(e) {
    e.preventDefault();

    var errors = this._validate();

    if (Object.keys(errors).length !== 0) {
      this.setState({
        errors: errors
      });
      return;
    }
    var xhr = this._create();
    xhr.done(this._onSuccess)
      .fail(this._onError)
      .always(this.hideLoading)
  },

  hideLoading: function() {
    this.setState({
      loading: false
    });
  },

  _onSuccess: function(data) {
    this.refs.contact_form.getDOMNode().reset();
    this.setState(this.getInitialState());

    console.log('Contact form success', data);
  },

  _onError: function(data) {
    var message = 'Failed to send contact form';
    var res = data.responseJSON;

    if (res.message) {
      message = data.responseJSON.message;
    }

    if(res.errors) {
      this.setState({
        errors: res.errors
      });
    }
  },

  _handleClick: function(e) {
    e.preventDefault();
  },

  _onChange: function(e) {
    var state = {};
    state[e.target.name] = $.trim(e.target.value);
    this.setState(state);
  },

  _validate: function() {
    var errors = {};

    if (this.state.name === '') {
      errors.name = 'Name is required';
    }

    if (this.state.number === '') {
      errors.number = 'Your telephone number is required';
    }

    if (this.state.email === '') {
      errors.email = 'Email address is required';
    }

    if (this.state.enquiryType === '') {
      errors.enquiryType = 'Enquiry Type is required, please select one of the options.';
    }

    if (this.state.personalMessage === '') {
      errors.personalMessage = 'Personal message is required';
    }

    return errors;
  },

  _formGroupClass: function(field) {
    var className = 'formLabel';

    if(field) {
      className += 'has-error';
    }
    return className;
  },

  render: function() {
    return (
      <div>
        <h1>Contact form</h1>
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12">
            <div className="container">
              <p>If you are having any technical difficulties on our website, or have any feedback suggestions for improvements or just
                  simply need to get in contact with us, please fill in the following form and we will get bak to you as soon as possible.
              </p>

            <form ref="contact_form" onSubmit={this._onSubmit} method="POST">
              <div className={this._formGroupClass(this.state.errors.name)}>

                <label className="formLabel">Your Name<font className="astrex">*</font>:</label>
                <input className="form1" id="name" ref="name" name="name" type="text" placeholder="John Smith" onChange={this._onChange} required />

              </div>
              <div className={this._formGroupClass(this.state.errors.number)}>

                <label className="formLabel">Telephone number:</label>
                <input className="form1" id="number" type="number" ref="number" name="number" placeholder="01617463524" onChange={this._onChange} />

              </div>
              <div className={this._formGroupClass(this.state.errors.email)}>

                <label className="formLabel">Email Address<font className="astrex">*</font>:</label>
                <input className="form1" id="email" type="email" name="email" ref="email" placeholder="email@address.com" onChange={this._onChange}  required />

              </div>
              <div className={this._formGroupClass(this.state.errors.enquiryType)}>

                <label className="formLabel">You enquiry type<font className="astrex">*</font>:</label>

                <select id="enquiryType" onChange={this._onChange} >
                  <option value="1">General Enquiry</option>
                  <option value="2">Technical Issues</option>
                  <option value="3">Contact Us</option>
                  <option value="4">Invoice/Finance Query</option>
                </select>

              </div>
              <div className={this._formGroupClass(this.state.errors.personalMessage)}>

                <label className="formLabel">Personal Message<font className="astrex">*</font>:</label>
                <textarea id="personalMessage" rows="10" cols="80" name="personalMessage" ref="personalMessage" onChange={this._onChange} />

              </div>
              <button className="profilesButton" onClick={this._handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

ReactDOM.render(<ContactForm />, document.getElementById('content'));
