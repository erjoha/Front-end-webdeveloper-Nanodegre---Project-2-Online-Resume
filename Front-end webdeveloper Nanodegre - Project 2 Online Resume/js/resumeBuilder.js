

var bio = {
		"name" : "Erica Johansson  /",
		"role" : "Front-End Webdeveloper",
	    "welcomeMessage" : "Online resume",
		"contacts" : {
	    "email" : "info@e-johansson.se",
		"mobile" : "073-0407595",
		"portfolio" : "www.e-johansson.se",
		"github" : "erjoha",
		"location" : "Lund"
		
		},
	

		"biopic" : "images/press.jpg",
		"skills" : ["HTML", "CSS", "JavaScript", "ActionScript 3.0", "Bootstrap"],
	
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
  
   

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedportfolio = HTMLportfolio.replace("%data%",bio.contacts.portfolio);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedemail, formattedportfolio, formattedgithub, formattedLocation);

    var formattedbiopic = HTMLbiopic.replace("%data%",bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMessage.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedbiopic, formattedWelcomeMessage);
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skillList)
    {
        var formattedSkill = HTMLskills.replace("%data%", skillList);
        $("#skills").append(formattedSkill);
    });
};





//Work
var work = {
	"jobs" : [
	  {
		  "employer" 	: "Poolia",
		  "title" 		: "Dispatcher",
		  "dates" 		: "January 2016 to Present",
		  "location" 	: "Malmö, Tieto",
		  "description" : "Dispatcher på IT service desk, hos extern kund Tieto. Administrativt arbete i en koordinerande roll, med ansvar att fördela ärenden till olika onsite grupper, samt import och översättning av problems, changar, incidenter och requester i ärendehanteringssystem Tone. Säkerställa att rätt information finns för att avdelning Tieto Ostrava ska kunna starta felsökning, utföra certifiering, teknisk utredning och eller beställning. Uppföljning av pågående ärenden och agerande länk mellan Ostrava, back-office och extern kund Region Skåne. Publicering av material på servicedeskens interna wiki."
	  },
	  {
		  "employer" 	: "Poolia",
		  "title" 		: "Technical Administrator",
		  "dates" 		: "April 2015 to Jan 2016",
		  "location" 	: "Lund, Gambro/Baxter",
		  "description" : "Administrativt arbete på IT avdelning, hos extern kund Gambro/Baxter. Drift av intranät via SharePoint. Skriftlig dokumentation i form av användarinstruktioner avsedda för verksamheten. Skriftlig dokumentation av processer kring beställningshantering, och interna rutiner för Service desken. Ärendehantering i Remedy (work orders), inköp av kringutrustning, telefoner och licenser till anställda, även inköp av hårdvara och licenser till IT avd. Stöttning i olika projekt, administrativt arbete i dokumenthanteringssystem med test-script vid ett migreringsprojekt och front-end utveckling i .NET-miljö, med tillämpning av Bootstrap som ramverk. Sammanställning av listor för skrivare, SLA och Bouning Tickets, samt övriga administrativa sysslor som posthantering och bokning av mötesrum och mat vid workshops. "
	  },
	  {
		  "employer" 	: "Framtiden AB",
		  "title" 		: "Administrator",
		  "dates" 		: "November 2014 to January 2016",
		  "location" 	: "Malmö, Thule",
		  "description" : "Heltidsarbete parallellt med studierna. Administrativt arbete med digitalt material, vid införande av en global mediabank hos extern kund, Thule Group AB. Manuell överföring av data i form av bilder, videor och säljmaterial. Konvertering av filformat, kvalitetssäkring av material och strukturering av information i mappsystem. Avstämning med produktchefer för respektive produktkategori, och rapportering till projektledare.  "
	  },
	
	  
	]
};

// Display the function with the work info
work.display = function () {
    var lengthWork = work.jobs.length;
    for (var job = 0; job < lengthWork; job++) {

        // We create a new div for each work job
        $('#workExperience').append(HTMLworkStart);

        // We create all the variables that we append together
        var $lastWorkEntry = $('.work-entry:last');
        var formattedHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        // We concat employer and title
        $lastWorkEntry.append(formattedHTMLworkEmployer);

        // We append the dates information throught a loop, since it is an array. We have the 'if' to put it online only if there is something in it.
        if (work.jobs[job].dates.length > 0) {
            var len = work.jobs[job].dates.length;
            for (var date = 0; date < len; date++) {
                $lastWorkEntry.append(HTMLworkDates.replace('%data%', work.jobs[job].dates[date]));
            }
        }

        // We append the location and description
        $lastWorkEntry.append(formattedHTMLworkLocation, formattedHTMLworkDescription);
        
        // Append the URL in the <a href> from the work name. Also add the target=_blank property to the link.
        $('.work-entry:last a').attr('href', work.jobs[job].url).attr('target', '_blank');
    }
};
work.display();


//Projects
var projects = {
  "projects" : [
  
     {
    	 "title": "Project 1 - Portfolio",
		 "titleURL"	: "http://www.eviltwindesigns.net/project2/index.html",
		 "images": ["images/project2.jpg"],
    	 "dates": "206",
    	 "description": "This portfolio is the first  project in Udacity's Front-End Webdeveloper Nanodegree program, an contains a collection of projects created during the diverese courses." 
     },
	
	    {
    	 "title": "Project 2 - B project",
		 "titleURL"	: "http://www.eviltwindesigns.net/project1v2/index.html",
		 "images": ["images/project1.jpg"],
    	 "dates": "2012",
    	 "description": "B-projekt genomfört vt 2012, i kursen “Webbprojekt 15 hp”. Utvecklade en föreningssida, med admingränssnitt från grunden i .NET-miljö. Arbetade med back-end och agerade delvis projektledare. Tekniker: C#, ASP, JavaScript, SQL"
     },
	 
  ]
};

//New updated code to match the rest

projects.display = function () {
    $("#projects").addClass("animated bounceInLeft");

    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);

        var fProjectTitle = HTMLprojectTitle.replace("%data%",project.title);
        var fProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        var fProjectDate = HTMLprojectDates.replace("%data%", project.dates);

        $(".project-entry:last").append(fProjectTitle, fProjectDescription, fProjectDate);

        project.images.forEach(function(projectImages){
            var formattedImage = HTMLprojectImage.replace ("%data%", projectImages);
            $(".project-entry:last").append(formattedImage);
        });
    });
};



//Education
var education = {
		"schools": [
	    {
	    	"name" 		: "Media and communication studies",
	    	"location" 	: "Lunds universitet, Lund",
	    	"dates" 	: "2014 - 2015",
	    	"majors" 	: "Media and communication studies",
	    	"degree" 	: "52,5hp",
	    	"url" 		: "http://www.kom.lu.se/"
	    },
			
			 {
	    	"name" 		: "Informatics Programme",
	    	"location" 	: "Halmstad Högskola, Halmstad",
	    	"dates" 	: "2011 - 2013",
	    	"majors" 	: "Informatics",
	    	"degree" 	: "Bachelor of Social Science with a major in Informatics",
	    	"url" 		: "http://www.hh.se"
	    },
			 
			
			 {
	    	"name" 		: "Informationdesign 30hp",
	    	"location" 	: "Mälardalenshögskola, Eskilstuna",
	    	"dates" 	: "2005",
	    	"majors" 	: "Informationdesign",
	    	"degree" 	: "30hp",
	    	"url" 		: "http://www.mdh.se/"
	    },
	  ],
	"onlineCourses" : [
		   {
			"school" : "Front End Webdeveloper - Udacity",
			"location" : "Los Angeles, CA",
			"title" 	: "Nanodegree",
			"dates" 	: "2016",
			"url"	: "https://www.udacity.com/course/nd001"
		   },	   
		]
	};

education.display = function(){
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(educationInfo){
        var formattedName = HTMLschoolName.replace("%data%",educationInfo.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", educationInfo.degree);
        var formattedLocation = HTMLschoolLocation.replace("%data%", educationInfo.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", educationInfo.majors);
        var formattedDate = HTMLschoolDates.replace("%data%", educationInfo.dates);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree, formattedDate, formattedLocation, formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourseInfo){
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourseInfo.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourseInfo.school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourseInfo.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourseInfo.url);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry:last").append(formattedTitleSchool, formattedOnlineDate, formattedOnlineURL);
    });
};

	


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

//other misc sections

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];
    for (var job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

function inName() {
    var name1 = bio.name.trim().split(" ");
    name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
    name1[1] = name1[1].toUpperCase();
    return name1[0] + " " + name1[1];
}

bio.display();
work.display();
education.display();
projects.display();