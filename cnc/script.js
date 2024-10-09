function showDetails(id) {
    const detailedDescription = document.getElementById(id);
    if (detailedDescription.style.display === "block") {
        detailedDescription.style.display = "none";
    } else {
        detailedDescription.style.display = "block";
    }
}
