const killfeed = document.getElementById("killfeed");
const hoverRectangle = document.getElementById("hoverRectangle");

// Show the killfeed and rectangle on hover
hoverRectangle.addEventListener("mouseenter", () => {
    killfeed.style.display = "block";
});

// Hide the killfeed and rectangle on mouseout
hoverRectangle.addEventListener("mouseout", () => {
    killfeed.style.display = "none";
});

// Fetch data from killfeed.txt (you can replace this with your own data source)
fetch("/killfeed.txt")
    .then(response => response.text())
    .then(data => {
        // Split the data into lines
        const lines = data.split("\n");
        
        // Display the killfeed data
        killfeed.innerHTML = lines.map(line => `<p>${line}</p>`).join("");
    })
    .catch(error => console.error(error));
