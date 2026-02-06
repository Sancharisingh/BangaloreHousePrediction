const API_BASE_URL = "http://127.0.0.1:5000";

// Load locations on page load
window.onload = function () {
    fetch(API_BASE_URL + "/get_location_names")
        .then(response => response.json())
        .then(data => {
            const locationSelect = document.getElementById("location");
            data.locations.forEach(loc => {
                const option = document.createElement("option");
                option.text = loc;
                option.value = loc;
                locationSelect.add(option);
            });
        });
};

function predictPrice() {
    const sqft = document.getElementById("sqft").value;
    const bhk = document.getElementById("bhk").value;
    const bath = document.getElementById("bath").value;
    const location = document.getElementById("location").value;

    const formData = new FormData();
    formData.append("total_sqft", sqft);
    formData.append("bhk", bhk);
    formData.append("bath", bath);
    formData.append("location", location);

    fetch(API_BASE_URL + "/predict_home_price", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText =
            "Estimated Price: ₹ " + data.estimated_price + " Lakhs";
    });
}
