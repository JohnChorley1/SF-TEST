//ID
var response = '';
$.ajax({
    type: "GET",
    url: "/getPodId/",
    async: false,
    success: function(data) {
        response = data;
    }
});

var Content = React.createClass({

            getInitialState: function() {
                return {
                    firstName: '',
                    lastName: '',
                    img: '',
                    skills: [],
                    description: '',
                    jobTitle: '',
                    profession: '',
                    timeWorked: '',
                    companyName: '',
                    testimonials: ''
                };
            },

            componentDidMount: function() {

                this.requestDataPOD = $.get(this.props.urlPod, function(data) {
                    var firstName = data.firstName;
                    var lastName = data.lastName;
                    var skills = data.info.skills;
                    this.setState({
                        firstName: firstName,
                        lastName: lastName,
                        skills: skills
                    });
                }.bind(this));

                this.requestDataProfile = $.get(this.props.urlProfile, function(profile) {
                    var desc = profile.desc
                    var jobTitle = profile.workHistory.jobTitle;
                    var companyName = profile.workHistory.companyName;
                    var timeWorked = profile.workHistory.timeWorked;
                    var img = profile.imgURL;

                    this.setState({
                        description: desc,
                        jobTitle: jobTitle,
                        timeWorked: timeWorked,
                        companyName: companyName,
                        img: img
                    });
                }.bind(this));
            },

            componentWillUnmount: function() {
                this.requestDataPOD.abort();
                this.requestDataProfile.abort();
            },
            //----------------------------------------------------------------------------------------------------------------------------------//
            skillsData: function() {

                var array = [];

                for (var i = 0; i < this.state.skills.length; i++) {

                    array.push(<li key={this.state.skills.id}>{this.state.skills[i]}</li>);
                }

                if (this.state.skills === []) {
                    return "No skills available!";
                }
                else {
                    return array;
                }
            },

            workHistory: function() {

                if (this.state.jobTitle === '' && this.state.companyName === '' && this.state.timeWorked === '') {

                    return (<p> No jobs found! </p>);
                }
                else {
                    return (
                        <div>
                            <h4 id="">{this.checkJobTitleField()}</h4>
                                Company Name: {this.checkCompanyNameField()}
                                Time Worked: {this.checkTimeWorkedField()}
                        </div>
                    );
                }
            },

            checkNameField: function() {
                if (this.state.firstName === '' || this.state.lastName === '') {
                    return <p>No name found!</p>;
                }
                else {
                    return <p>{this.state.firstName + ' ' + this.state.lastName}</p>;
                }
            },

            checkProfessionField: function() {
                if (this.state.profession === '') {
                    return <p>No profession found!</p>;
                }
                else {
                    return <h2>{this.state.profession}</h2>;
                }
            },

    checkDescriptionField: function() {
        if (this.state.description === '') {
            return <p>No description has been set!</p>;
        }
        else {
            return <p>{this.state.description}</p>;
        }
    },

    checkTestimonialsField: function() {
        if (this.state.testimonials === '') {
            return <p>No testimonials found!</p>;
        }
        else {
            return <p>{this.state.testimonials}</p>;
        }
    },

    checkJobTitleField: function() {

        if (this.state.jobTitle === '') {
            return <p>no job title found!</p>;
        }
        else {
            return this.state.jobTitle;
        }
    },

    checkTimeWorkedField: function() {

        if (this.state.timeWorked === '') {
            return <p>no time worked found!</p>;
        }
        else {
            return <p>{this.state.timeWorked}</p>;
        }
    },

    checkCompanyNameField: function() {

        if (this.state.jobTitle === '') {
            return <p>No company name found!</p>;
        }
        else {
            return <p>{this.state.companyName}</p>;
        }
    },

    bioData: function() {

        return (
            <div>
                    <h4>{this.checkProfessionField()}</h4>
                    <h4>Bio</h4>
                    {this.checkDescriptionField()}
                    <h4>Testmonials</h4>
                    {this.checkTestimonialsField()}
            </div>
        );
    },

    ImageUploads: function() {
        var title = this.state.firstName + ' ' + "'s Portfolio Image";
        for (var i = 1; i < 2; i++) {

            var content = <a href="img/36519.jpg" key={[i]} data-lightbox={'image-' + i} data-title={title}><img src="img/36519.jpg" height="260" width="260"></img></a>;

        }

        return <div id="portfolio-upload-work-divs">
                    <h4>Images</h4>
                    <input id="fileupload" type="file" />
                    {content}
                    <div id='clearBoth'></div>
         </div>;
    },

    profileImage: function() {
        var img = this.state.img;
        var svgTest = '<svg id="Profilepic" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">  <defs> <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">  <image xlink:href=' + img + ' x="-25" width="150" height="100"/>  </pattern>  </defs>  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />  </svg>';
        return <div dangerouslySetInnerHTML ={{ __html: svgTest}} />;
    },

    render: function() {

        //Portfolio

        var VideoUploads =

            <div id="portfolio-upload-work-divs">
                    <h4>Videos</h4>
                    <input id="fileupload" type="file" multiple="multiple" />
                    <div id="clearBoth"></div>
                </div>;

        var AudioUploads =
            <div id="portfolio-upload-work-divs">
                    <h4>Audio</h4>
                    <input id="fileupload" type="file" multiple="multiple" />
                    <div id="clearBoth"></div>
                </div>;

        return (
            <div>

           <div className="row row2 mb-t-25">
        <div className="col-md-3 col-lg-offset-1 col-lg-2 col-sm-12 col-xs-12">

            <div className="text-center">
                 <h1 className="center">{this.state.firstName + ' ' + this.state.lastName}</h1>
                 {this.profileImage()}
                <form action="book-now.html">
                    <button className="vpButton" id="enquire" type="submit">Enquire to Hire</button>
                </form>
            </div>

        </div>
        <div className="col-lg-8 col-md-9 col-sm-12">
            <div className="row row2">
                <div className="padd-10 col-md-4 col-sm-12 col-xs-12" id="skills">
                    <h3 id="title">Skills</h3>
                    <ul id="skilllist">
                    {this.skillsData()}
                    </ul>
                </div>
                <div className="padd-10 col-md-4 col-sm-12 col-xs-12" id="bio">
                    {this.bioData()}
                </div>
                <div className="padd-10 col-md-4 col-sm-12 col-xs-12" id="workHistory">
                    <h3 id="title">Work History</h3>
                   {this.workHistory()}
                </div>
            </div>
        </div>
    </div>


         <div id = "portfolio" >
            <h1>Portfolio</h1> <p> This section of the profile page will allow the POD member to upload any work they have completed and think is relevant, to show the world there skills!
            You will be able to upload images, gifs, videos, music / audio, any links to external websites. </p>
            {this.ImageUploads()}
            {VideoUploads}
            {AudioUploads}

        </div>

        </div>

    );
}
});

ReactDOM.render(<Content  urlPod= {'/getPods/' + response} urlProfile = {'/loadProfile/' + response} />, document.getElementById('content'));
