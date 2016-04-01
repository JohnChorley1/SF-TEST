var Content = React.createClass({

    render: function() {

      var svgPic = ' <svg class="currentPic" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs>  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href="img/profile.png" x="-25" width="150" height="100" />  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';

    return (
        <div>

        <div className="boldheader"><h1>Current Bookings</h1></div>

        <div className="row row-offcanvas row-offcanvas-right" >
	      <div className="col-xs-12" >

            <div className='bodyContainer'>

			 <p>This page will show a list of bookings that are currently on-going, for clients this will show
		  all of the pod members they are currently ongoing work with, and for pod members all of the clients
		  that they have ongoing work with.
		  </p>


			<div className="table-responsive">
			 <table id="table" className="table-bordered">
			<tbody>
            <tr className="trcolor">
              <th>Name</th>
              <th>Basic Profile</th>
              <th>Current Job Description</th>
              <th>View/Edit Job</th>
            </tr>
            <tr className="Line">
              <td className="bookingtd">
                <p>Ihtezaz</p>


                 <div dangerouslySetInnerHTML ={{ __html: svgPic}} />



             <form className="vpButton" action="pod-profile.html">
                <button type="submit">View Profile</button>
              </form>
              </td>
              <td className="bookingtd">crashing cars</td>
              <td className="bookingtd">bakery, sharp futuresbakery, sharp futuresbakery, sharp futuresbakery, sharp futuresbakery,
			  sharp futuresbakery, sharp futuresbakery, sharp futures</td>
              <td className="bookingtd">
                <button>Edit Job Details</button>
                <button>Timesheet</button>
                <button>End Job</button>
              </td>
            </tr>
            <tr className="Line">
              <td className="bookingtd">
                <p>Ihtezaz</p>

                 <div dangerouslySetInnerHTML ={{ __html: svgPic}} />

               <form className="vpButton" action="#">
                  <button type="submit" id="bottomPad">View Profile</button>
                </form>
              </td>
              <td className="bookingtd">html, css, javascript</td>
              <td className="bookingtd">the new moston club, sharp futures appthe new moston club, sharp futures appthe new moston
			  club, sharp futures appthe new moston club, sharp futures appthe new moston club, sharp futures
			  appthe new moston club, sharp futures appthe new moston club, sharp futures app</td>
              <td className="bookingtd">
                <button>Edit Job Details</button>
                <button>Timesheet</button>
                <button>End Job</button>
              </td>
            </tr>
			</tbody>
          </table>

          </div>
            </div>

          </div>
      </div>

        </div>
            );
        }
        });


    ReactDOM.render(<Content />, document.getElementById('content'));
