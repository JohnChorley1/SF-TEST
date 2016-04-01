var Error403 = React.createClass({

  render: function() {
    return (
      <div id="backcol">
        <div className='container' id="containerWidth">
          <h1 id="white">403! Forbidden!!</h1>
          <p id="white">Sorry, you dont have access to this page!</p>
          <p id="white">Please recheck your credentials and try again. Click <a href="/">here</a> to return to our homepage and try again.</p>
          <p id="white">Or alternatively Click <a href="/contact-us">here</a> to contact us and raise a technical issue.</p>
        </div>
      </div>
    )}
});


ReactDOM.render(<Error403 />, document.getElementById('content'));
