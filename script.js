// Încarcă istoricul din MySQL
fetch("get_locations.php?device=test1")
    .then(response => response.json())
    .then(data => {
        data.forEach(point => {
            L.circleMarker([point.latitude, point.longitude], { radius: 5 })
                .addTo(map);
        });
    });