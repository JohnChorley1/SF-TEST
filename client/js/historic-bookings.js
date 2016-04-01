var Content = React.createClass({

    render: function() {

      var svgPic = ' <svg class="historicPic" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs>  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href="img/john.jpg" x="-25" width="150" height="100" />  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';

      var svgPic2 = ' <svg class="historicPic" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs>  <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href="img/matt.jpeg" x="-25" width="150" height="100" />  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';

    return (
       <div>

       <div className="boldheader"><h1>Historic Bookings</h1></div>

		<div className="row row-offcanvas row-offcanvas-right" >
	      <div className="col-xs-12" >

            <div className='bodyContainer'>

			 <p>This page will show a list of bookings that you have had and finished,and should be interactive to say that if you are a client,
                    it will show you pod member bookings, but if you are a pod member it will show you client bookings.
                </p>
                <p>There is another page for current bookings,and the list of bookings that you currently have ongoing will appear here, once again
                    for pod members it will show clients and for clients it will show pod members.
                </p>

		<div className="table-responsive">
			 <table id="table" className="table-bordered">

                    <tr className="trcolor">
                        <th>Name</th>
                        <th>Basic Profile</th>
                        <th>Past Pod Jobs</th>
                        <th>Short Desciption</th>
                        <th>Job Status</th>
                    </tr>
                    <tr className="Line">
                        <td className="bookingtd">
                           <p>Matthew Rathbone </p>

                            <div dangerouslySetInnerHTML ={{ __html: svgPic2}} />

                            <form className="vpButton" action="pod-profile.html">
                                <button type="submit"  id="bottomPad">View Profile</button>
                            </form>
                        </td>
                        <td>Html, js</td>
                        <td>bakery, sharp futuresbakery, sharp futuresbakery, sharp futuresbakery, sharp futuresbakery, sharp futuresbakery,
                            sharp futuresbakery, sharp futures
                        </td>
                        <td>bakery, sharp futuresbakery, sharp futuresbakery, sharp futuresbakery</td>
                        <td>Currently Free
                            <form className="vpButton" action="#">
                                <button type="submit" onclick="/book-now">re-book</button>
                            </form>
                        </td>
                    </tr>
                    <tr className="Line">
                        <td className="bookingtd">
                            <p>John</p>

                             <div dangerouslySetInnerHTML ={{ __html: svgPic}} />

                            <form className="vpButton" action="pod-profile.html">
                            </form>
                        </td>
                        <td className="bookingtd">apple graphic designer</td>
                        <td className="bookingtd">lead designer for apple</td>
                        <td className="bookingtd">I am currently undergoing a project for Apple, leading the graphical interface and providing solutions for a
                            template for the company to use.
                        </td>
                        <td>Currently Busy</td>
                    </tr>
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
