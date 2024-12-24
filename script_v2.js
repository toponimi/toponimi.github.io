const svgContainer = d3.select("#map");

// Load the SVG file dynamically
fetch("images/bg-svg.svg")
    .then(response => response.text())
    .then(data => {
        // Parse the SVG content and add it to the map
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, "image/svg+xml");
        const mapContent = svgDoc.documentElement;

        // Append the SVG content to the container
        svgContainer.node().appendChild(mapContent);

        // Add POIs programmatically (example)
        svgContainer.append("circle")
            .attr("cx", 200)
            .attr("cy", 300)
            .attr("r", 5)
            .attr("class", "poi");
        svgContainer.append("circle")
            .attr("cx", 400)
            .attr("cy", 150)
            .attr("r", 5)
            .attr("class", "poi");

        // Initialize zoom functionality here after loading
        initializeZoom(svgContainer);
    });

function initializeZoom(svgContainer) {
    const g = svgContainer.append("g"); // Create a group for zoomable content
    const pois = d3.selectAll(".poi");

    // Move all map content to the zoomable group
    g.append(() => svgContainer.node().firstChild);

    // Initialize zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.5, 5]) // Limit zoom level
        .on("zoom", (event) => {
            g.attr("transform", event.transform); // Apply zoom transform
            updatePOISizes(event.transform.k); // Adjust POI sizes
        });

    svgContainer.call(zoom);

    // Function to update POI sizes based on zoom level
    function updatePOISizes(scale) {
        pois.attr("transform", `scale(${1 / scale})`); // Inverse scale
    }
}
