document.addEventListener("DOMContentLoaded", function() {
    var currentTime = new Date().getHours();
    var greeting;
    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Good Morning, ";
    } else if (currentTime >= 12 && currentTime < 16) {
        greeting = "Good Afternoon, ";
    } else {
        greeting = "Good Evening, ";
    }
    document.getElementById("greeting").innerHTML = greeting;

    // Retrieve the username from local storage and display it
    username="User";
    var username = localStorage.getItem("username");
    if (username) {
        document.getElementById("username").innerHTML = username;
    }

var lastUpdatedTime = new Date();
    var formattedTime = formatTime(lastUpdatedTime);
    var formattedDate = formatDate(lastUpdatedTime);
    document.getElementById("lastUpdated").innerHTML = "last updated at " + formattedTime+","+" " + formattedDate;
});

function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ampm;
}

function formatDate(date) {
    var day = date.getDate();
    var suffix = getSuffix(day);
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    return day + suffix + ' ' + month + ' ' + year;
}

function getSuffix(day) {
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
           var years = [2017,2018, 2019, 2020, 2021, 2022,2023,2024];
        var revenue = [30, 35, 20,34,5,56,46]; // in thousands
var revenueTrace = {
    x: years,
    y: revenue,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Revenue',
    marker: {
        color: 'blue'
    }
};

// Set layout options
var layout = {
    title: 'Revenue Over Years',
    xaxis: {
        title: 'Year'
    },
    yaxis: {
        title: 'Revenue (in k)'
    }
};

// Plot the graph
Plotly.newPlot('revenueGraph', [revenueTrace], layout);