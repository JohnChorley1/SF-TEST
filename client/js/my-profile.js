var Content = React.createClass({

    getInitialState: function(){
        return {
          view: 'show',
          firstName: '',
          lastName: '',
          skills: []
        // workHistory:[]
        };
    },

   handleButton: function(e) {
    e.preventDefault();
    this.setState({
      view: e.target.value
    });
  },

      componentDidMount: function() {
      this.serverRequest = $.get(this.props.url, function (data) {
      var firstName = data.firstName;
      var lastName = data.lastName;
      this.setState({
        firstName: firstName,
        lastName:  lastName
      });
    }.bind(this));
  },

       componentWillUnmount: function() {
         this.serverRequest.abort();
  },

     render: function() {

        var svgTest = ' <svg id="myProfilepic" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs>  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href="img/AlanSugar.jpg" x="-25" width="150" height="100"/>  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';


         return (

        <div id="backcol">

            <h1 id="name">{this.state.firstName + ' ' + this.state.lastName}</h1>

	            <div id="marginBottom">
                  <div class="row">
                 <div class="col-md-12 col-sm-12 col-xs-12">
                     <div dangerouslySetInnerHTML ={{ __html: svgTest}} />
                     </div>
                     </div>
                </div>
            <br/>
            <br/>
             <div class="row">
            <div id="profileInfo">
                <h3 id="title">Client/Company Name</h3>
                <h4 id="title2">Main purpose of businesss</h4>
				<p id="text"> Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.
                    Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying
                    earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but
                    inhabit fortune windows. Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.
                </p>
                <h4 id="title4">Bio</h4>
                <p id="text"> Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.
                    Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying
                    earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but
                    inhabit fortune windows. Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.
                </p>
                <h4 id="title4">Testmonials</h4>
                <p id="text">Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.
                    Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying
                    earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but
                    inhabit fortune windows. Unpleasant astonished an diminution up partiality. Noisy an their of meant.
                </p>
                </div>
            </div>
        </div>
         );
     }
});

ReactDOM.render(<Content url= {'/loadPodProfile/' + '1'} />, document.getElementById('content'));
