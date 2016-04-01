var Error500 = React.createClass({

  render: function() {
    return (
      <div id="backcol">
        <div className='container' id="containerWidth">
          <h1 id="white">500!! Internal server error!</h1>
          <p id="white">Sorry. it's not you, it's us!</p>
          <p id="white">We seem to be having some problems fetching the information you requested
            Click <a href="/">here</a> to return to our homepage and try again.</p>
        </div>
      </div>
    )}
});


ReactDOM.render(<Error500 />, document.getElementById('content'));
