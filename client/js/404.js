var Error404 = React.createClass({

  render: function() {
    return (
      <div id="backcol">
        <div className='container' id="containerWidth">
          <h1 id="white">404!! Page not found</h1>
          <p id="white">Unfortunately the page you are looking for has not been found!</p>
          <p id="white">Click <a href="/">here</a> to return to our homepage.</p>
        </div>
      </div>
    )}
});


ReactDOM.render(<Error404 />, document.getElementById('content'));
