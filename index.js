function startTime() {
    let today = new Date();

    document.getElementById('lublin').innerHTML = new Date().toLocaleString("pl-PL", {timeZone: "Europe/Warsaw"});
    document.getElementById('nowyJork').innerHTML = new Date().toLocaleString("pl-PL", {timeZone: "America/New_York"});
    document.getElementById('sydney').innerHTML = new Date().toLocaleString("pl-PL", {timeZone: "Australia/Sydney"});

    let t = setTimeout(startTime, 500);
}