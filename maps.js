function openGoogleMaps() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            
            // Destination coordinates (Change to your target location)
            let destination = "-29.728924116735634, 31.034523107694646"; // Firm Foundation Church Coordinates
            
            // Construct Google Maps URL
            let mapsUrl = `https://www.google.com/maps/dir/-29.7401765,31.052778/Firm+Foundation+Ministries+International,+560+Stonebridge+Dr,+Southgate,+Phoenix,+4068/@-29.7406276,31.0315941,3240m/data=!3m2!1e3!4b1!4m17!1m7!3m6!1s0x1ef705b4d974e8a9:0xbb2fe3a0297b2bae!2sFirm+Foundation+Ministries+International!8m2!3d-29.7290465!4d31.0345715!16s%2Fg%2F11b6d59z_3!4m8!1m1!4e1!1m5!1m1!1s0x1ef705b4d974e8a9:0xbb2fe3a0297b2bae!2m2!1d31.034586!2d-29.729054?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D`;
            
            // Open Google Maps
            window.location.href = mapsUrl;
        }, function(error) {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
