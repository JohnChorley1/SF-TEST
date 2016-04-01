var BookNow = React.createClass({
  // Get the initial state of the book now form
  getInitialState: function() {
    return {
      type: "info",
      companyName: "",
      companyLocation: "",
      travel: "",
      companyWebsite: "",
      clientName: "",
      clientNumber: "",
      clientEmail: "",
      jobRole: "",
      startDate: "",
      endDate: "",
      weeklyHours: "",
      skillSetsRequired: "",
      equipmentRequired: "",
      personalMessage: "",
      optionalMessage: ""
    }
  },

  // Form submission callback
  handleSubmit: function(e) {
    e.preventDefault();

    // Auto scroll to the top of the page to show the status message
    document.getElementById('heading').scrollIntoView();
    this.setState({
      type: "info",
      message: "Sending..."
    }, this.sendFormData);
  },

  // Submits the form data to the web server
  sendFormData: function() {
    // Prepare the form data for submitting it.
    var formData = {
      companyName: React.findDOMNode(this.refs.companyName).value,
      companyLocation: React.findDOMNode(this.refs.companyLocation).value,
      travel: React.findDOMNode(this.refs.travel).value,
      companyWebsite: React.findDOMNode(this.refs.companyWebsite).value,
      clientName: React.findDOMNode(this.refs.clientName).value,
      clientNumber: React.findDOMNode(this.refs.clientNumber).value,
      clientEmail: React.findDOMNode(this.refs.clientEmail).value,
      jobRole: React.findDOMNode(this.refs.jobRole).value,
      startDate: React.findDOMNode(this.refs.startDate).value,
      endDate: React.findDOMNode(this.refs.endDate).value,
      weeklyHours: React.findDOMNode(this.refs.weeklyHours).value,
      skillSetsRequired: React.findDOMNode(this.refs.skillSetsRequired).value,
      equipmentRequired: React.findDOMNode(this.refs.equipmentRequired).value,
      personalMessage: React.findDOMNode(this.refs.personalMessage).value,
      optionalMessage: React.findDOMNode(this.refs.optionalMessage).value

    };

    // Extract checked values from the fields required
    formData.areas = this.getSelected('areas');
    formData.when = this.getSelected('when');

    // Send the form data
    var xmlhttp = new XMLHttpRequest();
    var _this = this;

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);

        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({
            type: 'success',
            message: 'We have received your message and will get in touch shortly. Thanks!'
          });
        } else {
          _this.setState({
            type: 'danger',
            message: 'Sorry, there has been an error. Please try again later or send us an email'
          });
        }
      }
    };
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
  },

  // This transforms an object into the URL querystring
  requestBuildQueryString: function(params) {
    var queryString = [];

    for (var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  },

  // This extracts selected values from checkboxes and radios
  getSelected: function(fieldName) {
    var fields = document.getElementsByName(fieldName);
    var selectedFields = [];

    for ( var i = 0; i < fields.length; i++ ) {
      if (fields[i].checked === true) {
        selectedFields.push(fields[i].value);
      }
    }
    return selectedFields.join(', ');
  },

  // Render the component
  render: function() {
    if (this.state.type && this.state.message) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
        {this.state.message}
      </div>;
    }

    return (
      <div>
        <h1>Booking Form</h1>
        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12">
            <div className="container">
              <p>This form is enquire to book a POD member that you like. Please fill in all of the elements and
                  text text fields on this page and it will send an email to the admin. We will be in touch shortly.
                  Thank you for enquiring.
              </p>

              <div className="form">

                <legend id="legend">
                  <b><strong>POD Enquiry Form</strong></b>
                </legend>

                {status}

                <form action="" onSubmit={this.handleSubmit}>

                  <div className="form-group">
                    <label className="formLabel">Your company name <font className="astrex">*</font>:</label>
                    <input className="form1" name="companyName" ref="companyName" placeholder="SharpFutures" required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">Your company location <font className="astrex">*</font>:</label>
                    <input className="form1" name="companyLocation" ref="companyLocation" placeholder="Manchester" required type="text" />
                  </div>

                  <label className="formLabel">Will travel expenses be covered&#63;<font className="astrex">*</font>:</label>
                  <div className="form-group">
                    <label id="travel" className="radio-inline"><input name="when" ref="when" type="radio" value="yes" /><span>Yes</span></label>
                    <label id="travel" className="radio-inline"><input name="when" ref="when" type="radio" value="no" /><span>No</span></label>
                    <label id="travel" className="radio-inline"><input name="when" ref="when" type="radio" value="negotiable" /><span>Negotiable</span></label>
                  </div>

                  <div className="form-group">
                    <label className="formLabel">Your company website *</label>
                    <input className="form1" name="companyWebsite" ref="companyWebsite" placeholder="example.com" required type="text" />
                  </div>

                  <legend id="legendLeft">Contact Details</legend>

                  <div className="form-group">
                    <label className="formLabel">Your name<font className="astrex">*</font>:</label>
                    <input className="form1" name="clientName" ref="clientName" placeholder="John Smith" required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">Your telephone number<font className="astrex">*</font>:</label>
                    <input className="form1" name="clientNumber" ref="clientNumber" placeholder="01613387345" required type="number" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">You email address<font className="astrex">*</font>:</label>
                    <input className="form1" name="clientEmail" ref="clientEmail" placeholder="email@address.com" required type="email" />
                  </div>

                  <legend id="legendLeft">Job details</legend>

                  <div className="form-group">
                    <label className="formLabel">Job role required<font className="astrex">*</font>:</label>
                    <input className="form1" name="jobRole" ref="jobRole" placeholder="Web developer" required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">When is the required start date&#63; <font className="astrex">*</font>:</label>
                    <input className="form1" name="startDate" ref="startDate" placeholder="1st June 2016" required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">When is the end date&#63; <font className="astrex">*</font>:</label>
                    <input className="form1" name="endDate" ref="endDate" placeholder="1st July 2016" required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">How many hours a week&#63; <font className="astrex">*</font>:</label>
                    <input className="form1" name="weeklyHours" ref="weeklyHours" placeholder="34.5" required type="number" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">What skill sets are required&#63; <font className="astrex">*</font>:</label>
                    <input className="form1" name="skillSetsRequired" ref="skillSetsRequired" placeholder="HTML, JavaScript, CSS" required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">What equipment is required&#63; <font className="astrex">*</font>:</label>
                    <input className="form1" name="equipmentRequired" ref="equipmentRequired" placeholder="N/A if not required" required type="text" />
                  </div>

                  <legend id="legendLeft">Other details</legend>

                  <div className="form-group">
                    <label className="formLabel">Your personal message, if you have one <font className="astrex">*</font>:</label>
                    <textarea id="personalMessage" rows="10" cols="70" name="personalMessage" ref="personalMessage" placeholder="Here you can write any information needed regarding the job, maybe post the whole job specs in here, or what day to day tasks the POD member will be doing." required type="text" />
                  </div>

                  <div className="form-group">
                    <label className="formLabel">Optional message, if you have one</label>
                    <textarea id="optionalMessage" rows="6" cols="70" name="optionalMessage" ref="optionalMessage" placeholder="Here you can add any optional/additional information you feel your 'yet to be' employee may need." type="text" />
                  </div>

                  <div className="form-group">
                    <button className="profilesButton" id="enquireButton" onClick="" type="submit">Send your Enquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<BookNow />, document.getElementById('content'));
