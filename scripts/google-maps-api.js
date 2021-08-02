let map;

function initMap() {
    let location = {
        lat: 55.7137815944869,
        lng: 37.572979182868025
    };

    let options = {
        center: location,
        zoom: 17,
    };

    map = new google.maps.Map(document.getElementById("map"), options);

    let marker = new google.maps.Marker({
        map: map,
        position: location,
        title: "Domeo",
    });

    let info = new google.maps.InfoWindow({
        content: `
            <h3>График работы:</h3>
            <p>
                С 9.00 до 22.00<br>
                без выходных
            </p>
        `
    });

    marker.addListener("click", () => {
        info.open(map, marker);
    });
}