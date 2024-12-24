// Adjust SVG viewBox dynamically for fullscreen display
function loadSvgFullScreen() {
    const svg = document.getElementById("map");
    const svgContainer = d3.select("#map");
    const photoIconUrl = "icons/picture-small.png";

    // Load the SVG dynamically (replace "your-map-file.svg" with your actual file path)
    fetch("images/bg-svg.svg")
        .then(response => response.text())
        .then(data => {
            // Parse and inject the SVG content
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(data, "image/svg+xml");
            const svgContent = svgDoc.documentElement;
            const mapContent = svgDoc.documentElement;

            // Replace the placeholder SVG with the loaded SVG content
            svg.innerHTML = '';
            svg.appendChild(svgContent);

            // Make the SVG responsive by setting viewBox
            const bbox = svgContent.getBBox(); // Get the bounding box of the SVG content
            svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

            // Append the SVG content to the container
            svgContainer.node().appendChild(mapContent);

            const gMap = svgContainer.append("g").attr("id", "map-layer");

            gMap.append(() => svgContainer.node().firstChild);



            const poisData = [
              { 'id': 0, x: 525, y: 86, label: "Nuraxi de Mobas", icon: "icons/nuraghe.png", photos: ["images/compressed/Nuraghe is Mobas/DJI_0840-min.JPG", "images/compressed/Nuraghe is Mobas/DJI_0841-min.JPG", "images/compressed/Nuraghe is Mobas/DJI_0842-min.JPG", "images/compressed/Nuraghe is Mobas/DJI_0843-min.JPG"] },
              { 'id': 1, x: 383, y: 160, label: "Calaxinas", icon: "icons/olive-oil.png", photos: [] },
                {'id': 1, 'x': 287, 'y': 152, label: 'Tuvixeddu', icon: "images/blank.png", photos:[]},
                {'id': 2, 'x': 298, 'y': 183, label: 'Sa aqua sassa', icon: "images/blank.png", photos:[]},
                {'id': 3, 'x': 494, 'y': 149, label: 'Barecca', icon: "images/blank.png", photos:[]},
                {'id': 4, 'x': 620, 'y': 162, label: 'Su Salis', icon: "images/blank.png", photos:[]},
                {'id': 5, 'x': 602, 'y': 208, label: 'Pizzicorru', icon: "images/blank.png", photos:[]},
                {'id': 6, 'x': 498, 'y': 242, label: 'Bia de Baressa', icon: "images/blank.png", photos:[]},
                {'id': 7, 'x': 494, 'y': 212, label: '', icon: "icons/wheat_and_grass.png", photos:[]},
                {'id': 8, 'x': 397, 'y': 284, label: 'Bruncu Onnis', icon: "images/blank.png", photos:[]},
                {'id': 9, 'x': 329, 'y': 251, label: '', icon: "icons/olive-oil.png", photos:[]},
                {'id': 10, 'x': 225, 'y': 307, label: '', icon: "icons/tree.png", photos:[]},
                {'id': 11, 'x': 494, 'y': 314, label: 'Pala Porceddu', icon: "images/blank.png", photos:[]},
                {'id': 12, 'x': 651, 'y': 290, label: '', icon: "icons/wheat_and_grass.png", photos:[]},
                {'id': 13, 'x': 757, 'y': 351, label: 'Cua ponti', icon: "images/blank.png", photos:[]},
                {'id': 14, 'x': 635, 'y': 328, label: 'Su bruncu de Maria Seddori', icon: "images/blank.png", photos:[]},
                {'id': 15, 'x': 556, 'y': 380, label: 'Sa corti de is baccas', icon: "images/blank.png", photos:[]},
                {'id': 16, 'x': 449, 'y': 392, label: '', icon: "icons/wheat_and_grass.png", photos:[]},
                {'id': 17, 'x': 420, 'y': 419, label: 'Tuvixeddu', icon: "images/blank.png", photos:[]},
                {'id': 18, 'x': 341, 'y': 439, label: 'Su parisi de Monti', icon: "images/blank.png", photos:[]},
                {'id': 19, 'x': 285, 'y': 483, label: 'Billiconi', icon: "images/blank.png", photos:[]},
                {'id': 20, 'x': 306, 'y': 402, label: 'Nuraxi de su sensu', icon: "icons/nuraghe.png", photos:[]},
                {'id': 21, 'x': 210, 'y': 349, label: 'Sedda cuaddus', icon: "images/blank.png", photos:[]},
                {'id': 22, 'x': 213, 'y': 411, label: '', icon: "icons/wheat_and_grass.png", photos:[]},
                {'id': 23, 'x': 204, 'y': 466, label: '', icon: "icons/tree.png", photos:[]},
                {'id': 24, 'x': 161, 'y': 439, label: '', icon: "icons/tree.png", photos:[]},
                {'id': 25, 'x': 149, 'y': 479, label: 'Crabili', icon: "images/blank.png", photos:[]},
                {'id': 26, 'x': 194, 'y': 520, label: '', icon: "icons/tree.png", photos:[]},
                {'id': 27, 'x': 157, 'y': 572, label: '', icon: "icons/tree.png", photos:[]},
                {'id': 28, 'x': 178, 'y': 623, label: '', icon: "icons/tree.png", photos:[]},
                {'id': 29, 'x': 291, 'y': 574, label: 'Bia de pala cabras', icon: "images/blank.png", photos:[]},
                {'id': 30, 'x': 260, 'y': 534, label: 'Sa cora de Sisiniu Longu', icon: "images/blank.png", photos:[]},
                {'id': 31, 'x': 402, 'y': 531, label: 'Purgatoriu', icon: "images/blank.png", photos:[]},
                {'id': 32, 'x': 389, 'y': 456, label: 'Su tuvu mannu', icon: "images/blank.png", photos:[]},
                {'id': 33, 'x': 469, 'y': 473, label: 'Bia de monti', icon: "images/blank.png", photos:["images/compressed/Capanni Monti/DJI_0834-min.JPG", "images/compressed/Capanni Monti/DJI_0836-min.JPG", "images/compressed/Capanni Monti/DJI_0838-min.JPG", "images/compressed/Capanni Monti/DJI_0835-min.JPG", "images/compressed/Capanni Monti/DJI_0837-min.JPG", "images/compressed/Capanni Monti/DJI_0839-min.JPG"]},
                {'id': 34, 'x': 473, 'y': 500, label: 'Is melas', icon: "images/blank.png", photos:["images/compressed/Is Mebas/dji_fly_20241205_201434_80_1734082473489_photo-min.jpg", "images/compressed/Is Mebas/dji_fly_20241205_201730_85_1734082454125_photo-min.jpg", "images/compressed/Is Mebas/dji_fly_20241205_201758_87_1734082448053_photo-min.jpg"]},
                {'id': 35, 'x': 372, 'y': 622, label: 'Bingia beccia', icon: "images/blank.png", photos:[]},
                {'id': 36, 'x': 384, 'y': 696, label: 'Pala nuraxi', icon: "images/blank.png", photos:[]},
                {'id': 37, 'x': 298, 'y': 672, label: 'Sa cora de is cannas', icon: "images/blank.png", photos:[]},
                {'id': 38, 'x': 192, 'y': 723, label: 'Bruncu de su sensu', icon: "images/blank.png", photos:[]},
                {'id': 39, 'x': 493, 'y': 534, label: 'Ussaredda', icon: "images/blank.png", photos:[]},
                {'id': 40, 'x': 564, 'y': 527, label: '', icon: "icons/olive-oil.png", photos:[]},
                {'id': 41, 'x': 543, 'y': 452, label: 'San Lorenzo', icon: "images/blank.png", photos:['images/compressed/Chiesetta San Lorenzo/DJI_0579-min.JPG', 'images/compressed/Chiesetta San Lorenzo/DJI_0581-min.JPG']},
                {'id': 42, 'x': 589, 'y': 433, label: 'Santu Miali', icon: "icons/grape.png", photos:[]},
                {'id': 43, 'x': 660, 'y': 459, label: 'Is argiolas', icon: "images/blank.png", photos:[]},
                {'id': 44, 'x': 573, 'y': 575, label: 'Putzu Enuri', icon: "images/blank.png", photos:[]},
                {'id': 45, 'x': 670, 'y': 615, label: 'Bingias beccias', icon: "images/blank.png", photos:[]},
                {'id': 46, 'x': 660, 'y': 598, label: 'Funtana piccia', icon: "icons/water.png", photos:[]},
                {'id': 47, 'x': 676, 'y': 522, label: '', icon: "icons/wheat_and_grass.png", photos:[]},
                {'id': 48, 'x': 750, 'y': 503, label: 'Putzu Erbeis', icon: "images/blank.png", photos:[]},
                {'id': 49, 'x': 701, 'y': 554, label: 'Nuraghe San Pietro', icon: "icons/nuraghe.png", photos:["images/compressed/Nuraghe Santu Pedru/DJI_0179-min.JPG", "images/compressed/Nuraghe Santu Pedru/DJI_0198-min.JPG"]},
                {'id': 50, 'x': 763, 'y': 634, label: 'Sa cruxi santa', icon: "images/blank.png", photos:[]},
                {'id': 51, 'x': 722, 'y': 704, label: 'Funtana bella', icon: "icons/water.png", photos:[]},
                {'id': 52, 'x': 664, 'y': 737, label: 'Bia de Siddi', icon: "images/blank.png", photos:[]},
                {'id': 53, 'x': 600, 'y': 810, label: 'Scrocca', icon: "images/blank.png", photos:[]},
                {'id': 54, 'x': 577, 'y': 723, label: 'Canali turtiri', icon: "images/blank.png", photos:[]},
                {'id': 55, 'x': 562, 'y': 673, label: 'Peibia de pobatziu', icon: "images/blank.png", photos:[]},
                {'id': 56, 'x': 504, 'y': 741, label: 'Is olias', icon: "icons/olive-oil.png", photos:[]},
                {'id': 57, 'x': 951, 'y': 466, label: 'Pardu turri', icon: "images/blank.png", photos:[]},
                {'id': 58, 'x': 1077, 'y': 570, label: 'Puzzu sassu', icon: "images/blank.png", photos:[]},
                {'id': 59, 'x': 1084, 'y': 646, label: 'Padru picciu', icon: "images/blank.png", photos:[]},
                {'id': 60, 'x': 871, 'y': 723, label: 'Cubeddu', icon: "images/blank.png", photos:[]},
                {'id': 61, 'x': 912, 'y': 760, label: 'Pardu occi', icon: "images/blank.png", photos:[]},
                {'id': 62, 'x': 798, 'y': 822, label: 'Is enas', icon: "images/blank.png", photos:[]},
                {'id': 63, 'x': 854, 'y': 880, label: 'Su cungiau biancu', icon: "images/blank.png", photos:[]},
                {'id': 64, 'x': 902, 'y': 930, label: 'Acqua frius', icon: "images/blank.png", photos:[]},
                {'id': 65, 'x': 996, 'y': 770, label: 'Bia aregus', icon: "images/blank.png", photos:[]},
                {'id': 66, 'x': 960, 'y': 729, label: 'Funtana noba', icon: "images/blank.png", photos:[]},
                {'id': 67, 'x': 1238, 'y': 747, label: 'Sa spina arba', icon: "images/blank.png", photos:[]},
                {'id': 68, 'x': 1125, 'y': 757, label: 'Genna de pranu', icon: "images/blank.png", photos:[]},
                {'id': 69, 'x': 1032, 'y': 818, label: '', icon: "icons/wheat_and_grass.png", photos:[]},
                {'id': 70, 'x': 1026, 'y': 880, label: 'Bruncu a pitzus', icon: "images/blank.png", photos:[]},
                {'id': 71, 'x': 1115, 'y': 831, label: 'Pixina pidoni', icon: "images/blank.png", photos:[]},
                {'id': '1', 'x': 1226, 'y': 790, label: 'Funtana de is anadis', icon: "images/blank.png", photos:[]},
                {'id': '2', 'x': 1340, 'y': 763, label: 'Is truiscus', icon: "images/blank.png", photos:[]},
                {'id': '3', 'x': 1319, 'y': 816, label: 'Dexiottu mois', icon: "images/blank.png", photos:[]},
                {'id': '4', 'x': 1301, 'y': 879, label: 'Sa tella', icon: "images/blank.png", photos:[]},
                {'id': '5', 'x': 1291, 'y': 923, label: 'Abasso de su planu de s\'argiola', icon: "images/blank.png", photos:[]},
                {'id': '6', 'x': 1340, 'y': 837, label: 'Sirissi', icon: "images/blank.png", photos:[]},
                {'id': '7', 'x': 1410, 'y': 862, label: 'Su benazu mannu', icon: "images/blank.png", photos:[]},
                {'id': '8', 'x': 1470, 'y': 927, label: 'Nuraxi de Sirissi', icon: "icons/nuraghe.png", photos:['images/compressed/Nuraghe Sirissi/DJI_0863-min.JPG', 'images/compressed/Nuraghe Sirissi/DJI_0865-min.JPG', 'images/compressed/Nuraghe Sirissi/DJI_0867-min.JPG']},
                {'id': '9', 'x': 1348, 'y': 962, label: 'Tea arriusu', icon: "images/blank.png", photos:[]},
            ];

            // Now place POIs *also inside gMap*
            const poiGroups = gMap.selectAll("g.poi-group")
              .data(poisData)
              .enter()
              .append("g")
              .attr("class", "poi-group")
              // For now, just position them at (x, y) with NO extra scaling:
              .attr("transform", d => `translate(${d.x}, ${d.y})`);

            // Inside each <g> (poi-group), add an <image> and a <text>
            poiGroups.each(function (d) {
              const poiG = d3.select(this);

              // An icon 30×30, centered at (0,0)
              poiG.append("image")
                .attr("href", d.icon)
                .attr("width", 35)
                .attr("height", 35)
                .attr("x", -20)
                .attr("y", -15);

              // A text label
              poiG.append("text")
                .attr("text-anchor", "middle")
                .attr("y", 33)  // below the icon
                .text(d.label);

              poiG.attr("id", d.id)
              poiG.attr("photos", d.photos)


              if (d.photos && d.photos.length > 0) {
                poiG.append("image")
                  .attr("class", "photo-icon")
                  .attr("href", photoIconUrl)
                  .attr("width", 20)
                  .attr("height", 20)
                  .attr("x", -5)
                  .attr("y", 0) // Positioned above the main icon
                  .style("display", "block")// show by default
                  //.style("opacity", 1) // Hidden by opacity
                  //.style("animation", "bounce 1s ease"); //
                poiG.on("click", function (event) {
                    // Retrieve the photos array for this POI
                    const photos = d.photos;

                    // Call the function to show a fullscreen slideshow
                    showFullscreenSlideshow(photos);
                });
              }






            });

            //initializeZoom(svgContainer);

            //d3.selectAll(".poi").each(function() {
            //  d3.select(this).raise();
            //});

            d3.selectAll(".photo-icon").each(function() {
              d3.select(this).raise();
            });
            console.log("initialized");


            const zoom = d3.zoom()
              .scaleExtent([0.9, 5])  // min 1×, max 5×
              .on("zoom", onZoom);

            // Attach it
            d3.select("#map").call(zoom);

            visible = false;

            function onZoom(event) {
              const { x, y, k } = event.transform;

              // 1) Transform the entire map (including POIs) by (translate + scale)
              gMap.attr("transform", `translate(${x},${y}) scale(${k})`);

              // 2) For each POI group, *undo* that scale so it remains visually 1×:
              //    We'll place each POI at map coords (d.x, d.y), but then scale(1/k).
              //    That yields a net scale of (k * 1/k) = 1 for the POI's icon.
              gMap.selectAll(".poi-group")
                .attr("transform", d => {
                  return `translate(${d.x},${d.y}) scale(${(1/k)**(k/15)})`;
                });

              // Show or hide the photo icons based on zoom level

            /*
              if (k >= 1.5 && visible==false){
                gMap.selectAll(".photo-icon")
                .style("display", "block")
                .style("opacity", 1) // Animate opacity
                .style("animation", "bounce 1s ease"); // Trigger animation
                visible=true
              }

              if (k < 1.5 && visible==true){
                gMap.selectAll(".photo-icon")
                .style("display", "none")
                .style("opacity", 0) // Animate opacity
                .style("animation","none"); // Trigger animation
                visible=false
              }
                /*
              /*
             gMap.selectAll(".photo-icon").filter(function () {
                const element = d3.select(this);
                const hasValue = element.attr("href"); // Check if the 'href' attribute (image source) is defined

                // Check if the element is within the viewport
                const bbox = this.getBoundingClientRect();
                const isVisible = bbox.top >= 0 && bbox.left >= 0 && bbox.bottom <= window.innerHeight && bbox.right <= window.innerWidth;

                return hasValue && isVisible; // Return only elements with a value and visible on screen
             }).style("display", k >= 1.5 ? "block" : "none")
                .style("opacity", k >= 1.5 ? 1 : 0) // Animate opacity
                .style("animation", k >= 1.5 ? "bounce 1s ease" : "none"); // Trigger animation
            */
            }


            //poiGroups.on("click", function (event) {
            //    const poi = d3.select(this); // Get the clicked POI
            //    const poiId = poi.attr("id"); // Retrieve the ID or other attributes
            //    showPhotoWindow(this.__data__); // Show an alert (or trigger custom behavior)
            //  });


    })
    .catch(err => console.error("Error loading SVG:", err));

}






// Function to maintain constant POI size




// Load the SVG when the page is ready
document.addEventListener("DOMContentLoaded", loadSvgFullScreen);