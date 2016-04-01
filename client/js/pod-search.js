// var _ = require('underscore');
var Content = React.createClass({

//     getInitialState: function(){
//         return {
//           data: {
//             username: ''
//           }
//         };
//     },

//      getUsername: function() {
//     //   var songHtml = "<ul style=\"color:blue\">";
//   // _.each(songs, function(value, key){songHtml = songHtml +"<li>" + key + "</li>"});
//   // return songHtml+"</ul>";
//   },


//     loadPodsFromServer: function() {
//       $.ajax({
//         url: this.props.url,
//         dataType: 'json',
//         cache: false,
//         success: function(data) {
//         this.setState({data: {
//           username: data.username
//         }});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//     this.getUsername();
// },

//     componentDidMount: function() {
//       this.loadPodsFromServer();
//     },

    getPodURL: function(e) {
        this.setState({
            view: e.target.value + '?56e69f32cc8df77944069cff'
        });
    },

    render: function() {

         var svgPic = ' <svg   viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs>  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href="img/profile.png" x="-25" width="150" height="100" />  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';
         var svgMatt = ' <svg  viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs>  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href="img/matt.jpeg" x="-25" width="150" height="100" />  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';
         var svgJobs = ' <svg  id="pic2" viewbox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="#8e8db7" /> </svg>';

      return (
        <div>


        <div className="row row-offcanvas row-offcanvas-right">
    <div className="col-xs-12 col-sm-9">
      <div className="row">

		 <p className="pull-right visible-xs">
            <button type="button" className="options" data-toggle="offcanvas">Search</button>
          </p>

          <div className="col-xs-12 col-lg-12 col-md-12">
			<div className='bodyContainer'>
			 <div className="table-responsive">
			 <table id="table">
			    <tbody>
                    <tr className="trcolor">
                        <th>PODs Avaliable</th>
                        <th>Basic Profile</th>
                        <th>Pod Jobs</th>
						<th>Quote</th>
						<th>Hire Now</th>
                    </tr>
                    <tr className="Line">
                        <td>
                            <h4>Matthew Rathbone</h4>
                             <div dangerouslySetInnerHTML ={{ __html: svgMatt}} />
                            <form className="vpButton" action="/pod-profile">
                                <button type="submit" id="bottomPad">View Profile</button>
                            </form>
                        </td>
                        <td>
                            <p id="basictxt"> Skills: js, sarcasm, tugtwejhke , hetkewjh vktw, kuwegt jw </p>
                            <p id="basictxt"> Credits: 25</p>
                            <p id="basictxt"> Location: Manchester</p>
                        </td>
                        <td>
                         <div dangerouslySetInnerHTML ={{ __html: svgJobs}} />
                        </td>
                        <td>
                            <p id="quote"> <b> "Mauris congue ex in diam lacinia, sit amet malesuada nunc iaculis. shjg fyejg uewg " </b> </p>
                        </td>
                        <td>
                            <form className="hireButton" action="/book-now">
                                <input id="hireSize" type="image" src="img/hex.png" alt="Submit" />
                            </form>
                        </td>
                    </tr>
                    <tr className="Line">
                        <td>
                            <h4>John</h4>
                             <div dangerouslySetInnerHTML ={{ __html: svgPic}} />
                            <button id="bottomPad">View Profile</button>
                        </td>
                        <td>
                            <p id="basictxt"> Skills: js, php, html</p>
                            <p id="basictxt"> Credits: 25</p>
                            <p id="basictxt"> Location: Manchester</p>
                        </td>
                        <td>
                         <div dangerouslySetInnerHTML ={{ __html: svgJobs}} />
                        </td>
                        <td>
                            <p id="quote"> <b> "Ytoeut buetbg irgur ebgueb sogheubvwu eug." </b> </p>
                        </td>
                        <td>
                            <form className="hireButton" action="/book-now">
                                <input id="hireSize" type="image" src="img/hex.png" alt="Submit" />
                            </form>
                        </td>
                    </tr>
                    <tr className="Line">
                        <td>
                            <h4>John</h4>
                            <div dangerouslySetInnerHTML ={{ __html: svgPic}} />
                            <button id="bottomPad">View Profile</button>
                        </td>
                        <td>
                            <p id="basictxt"> Skills: js, sarcasm</p>
                            <p id="basictxt"> Credits: 25</p>
                            <p id="basictxt"> Location: Manchester</p>
                        </td>
                        <td>
                             <div dangerouslySetInnerHTML ={{ __html: svgJobs}} />
                        </td>
                        <td>
                            <p id="quote"> <b> "Ytoeut buetbg irgur ebgueb sogheubvwu eug." </b> </p>
                        </td>
                        <td>
                            <form className="hireButton" action="/book-now">
                                <input id="hireSize" type="image" src="img/hex.png" alt="Submit" />
                            </form>
                        </td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
          </div>



       </div>
    </div>

        <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
		<br/>
          <div className="list-group">
           <ul id="sidenav">
                <p> <strong> Pod Members  </strong> </p>
                <p id="leftNavPadding"> <b> Sort By: </b> </p>
                <li>
                    <a className="active" href="#home">Best match</a>
                </li>
                <li>
                    <a href="#news">Distance</a>
                </li>
                <li>
                    <a href="#contact">Skills</a>
                </li>
                <li>
                    <a href="#about">Name</a>
                </li>
                <li>
                    <a href="#about" id="spaceBottom">Credits</a>
                </li>
                <img src="img/search2.png" id="searchbar"/>
                <input id="quick" type="text" placeholder="Quick Search" />
            </ul>
          </div>
        </div>
    </div>

        </div>
    )}
});


ReactDOM.render( <Content />, document.getElementById('content'));
