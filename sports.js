function Load() {
    const team = document.getElementById('team').value;
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${team}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => ShowData(data['teams']));
}


function ShowData(Data) {
    // console.log(data);
    const div1 = document.getElementById('teamInfo');
    div1.innerText = '';
    data = Data[0];
    {
        // console.log(d.strCountry);
        const div = document.createElement('div');
        const yearFormed = data.intFormedYear;
        const alterName = data.strAlternate;
        const country = data.strCountry;
        const details = data.strDescriptionEN;
        const league = data.strLeague;
        const stadium = data.strStadium;
        const stadiumLocation = data.strStadiumLocation;
        const bdgesrc = data.strTeamBadge;
        const bannersrc = data.strTeamBanner;
        div.innerHTML = `
        <img src ="${bdgesrc}" > <br>
        <h1>Team Name: ${alterName} </h1><br>
        <b>Established:</b> ${yearFormed} <br>
        <b>Origin:</b> ${country}<br>
        <b>League:</b> ${league} <br>
        <b>Home Stadium:</b> ${stadium} , ${stadiumLocation}<br>
        <b>Details:</b><p>${details}</p>
        `;
        div.classList.add('teamClass');
        div1.appendChild(div);
    }
}