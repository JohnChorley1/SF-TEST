var AfterBookNow = React.createClass({
  getInitialState: function() {
    return {
      FinancialManagerName: '',
      FinancialManagerEmail: '',
      FinancialManagerNumber: '',
      PurchaseOrderReference: '',
      OptionalMessage: ''
    };
  },

  _create: function() {
    return $.ajax({
      url: '/api/after-book-now',
      type: 'POST',
      data: {
        FinancialManagerName: this.state.FinancialManagerName,
        FinancialManagerEmail: this.state.FinancialManagerEmail,
        FinancialManagerNumber: this.state.FinancialManagerNumber,
        PurchaseOrderReference: this.state.PurchaseOrderReference,
        OptionalMessage: this.state.optionalMessage
      }
    })
  },

  _onChange: function(e) {
    var state = {};
    state[e.target.name] = $.trim(e.target.value);
    this.setState(state);
  },

  _onError: function(data) {
    var message = 'Failed to send request';
    var res = data.responseJSON;
    if(res.message) {
      message = data.responseJSON.message;
    }

    if (res.errors) {
      this.setState({
        errors: res.errors
      });
    }
  },

  _onSuccess: function(data) {
    this.refs.after_booking_form.getDOMNode().reset();
    this.setState(this.getInitialState());

    console.log('Successfully sent', data);
  },

  render: function() {
    return (
      <div>
        <h1>Final booking of a POD member</h1>

        <div className="row row-offcanvas row-offcanvas-right">
          <div className="col-xs-12">
            <div className="container">
              <p>
                The POD member you have enquired about has accepted your request to be hired! Only one thing left to do, you need to
                fill out the details in this form so that we can get all of the information required from you to make this booking official.
                After you have filled out this form we can go ahead and inform the POD member of there official starting date.
              </p>

              <form className="form" ref="after_booking_form">
                <legend id="legend">
                  <b><strong>Pod Booking form</strong></b>
                </legend>

                <legend id="legendLeft">Financial Details</legend>
                  <label className="formLabel">Financial Managers Name</label>
                  <input className="form1" id="FinancialManagersName" ref="FinancialManagerName" type="text" name="FinancialManagerName" placeholder="Financial Manager's Name" required />

                  <label className="formLabel">Financial Managers Email</label>
                  <input className="form1" id="FinancialManagerEmail" ref="FincancialManagerEmail" name="FinancialManagerEmail" placeholder="Financial Managers Email" required />

                  <label className="formLabel">Financial Managers Phone Number</label>
                  <input className="form1" id="FinancialManagerNumber" ref="FinancialManagerNumber" name="FinancialManagerNumber" placeholder="Financial Managers Contact Number" required />

                  <label className="formLabel">Purchase Order Reference: </label>
                  <input className="form1" id="PurchaseOrderReference" ref="PurchaseOrderReference" name="PurchaseOrderReference" placeholder="" />

                  <label className="formLabel">Optional Message</label>
                  <textarea id="optionalMessage" rows="6" cols="70" name="optionalMessage" ref="optionalMessage" />

                  <button className="profilesbutton" id="enquireButton" type="submit" onClick="a()"> Enquire</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

ReactDOM.render(<AfterBookNow />, document.getElementById('content'));
