function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

function displayLocation(latitude, longitude) {
    const locationElement = document.getElementById("location");
    locationElement.innerText = "Latitude: " + latitude + ", Longitude: " + longitude;
}

function displayError(error) {
    const locationElement = document.getElementById("location");
    locationElement.innerText = "Error getting location: " + error.message;
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        displayLocation(latitude, longitude);
    }, function (error) {
        displayError(error);
    });
} else {
    displayError({ message: "Geolocation is not supported in your browser" });
}


showTime();