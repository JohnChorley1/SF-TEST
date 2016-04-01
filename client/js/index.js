var Content = React.createClass({

  render: function() {
    return (


      <div className="row row-offcanvas row-offcanvas-right" >
  	<div className="col-xs-12" >
  	<div className="row">
  	<div className="col-xs-12 col-lg-12"><h1 id="introheading"> Hello!<br/>Welcome to POD</h1>

    <div className="row">
    <div className="col-xs-12 col-lg-12">
		<div className="text-center">
      <img id="hexstyle" src="img/newhex/lookaround.png" alt="logo" />

         <a href="/login">
            <img id="hexstyle" src="img/newhex/login.png" alt="logo" />
         </a>

         <a href="">
            <img id="hexstyle" src="img/newhex/aboutus.png" alt="logo" />
         </a>
    </div>
    </div>
    </div>
    <div>

			<p id="introtext"> People On Demand (POD) are Manchester based creatives available for work in the digital sector.
			Please have a look at individual profiles and search through the wide range of skills on offer. Enquire, Click, Hire. Simple!
      </p>

			<p id="introtext"> SharpFutures is a social enterprise that supports young people into employment in the creative digital sector.
			By offering a range of interventions including Apprenticeships, Work Experience and Volunteering, SharpFutures nurture
			the transition into work, whilst responding to the fluctuating needs of creative digital businesses. We seed ideas
			through services for education, nurture the best talent by offering employment opportunities and real work experience,
			and we grow through the sale of this services.
      </p>

			</div>
		  </div>

    </div>
    </div>
    </div>


    );
  }
});


ReactDOM.render(<Content />, document.getElementById('content'));
