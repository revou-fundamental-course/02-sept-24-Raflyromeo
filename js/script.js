/* Function to open the side navigation */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

/* Function to close the side navigation */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Toggle between area and perimeter inputs for each shape section
function setupToggle(idPrefix) {
    document.getElementById(`${idPrefix}-area`).addEventListener("change", function() {
        document.getElementById(`${idPrefix}-area-inputs`).style.display = "block";
        document.getElementById(`${idPrefix}-perimeter-inputs`).style.display = "none";
    });
    document.getElementById(`${idPrefix}-perimeter`).addEventListener("change", function() {
        document.getElementById(`${idPrefix}-area-inputs`).style.display = "none";
        document.getElementById(`${idPrefix}-perimeter-inputs`).style.display = "block";
    });
}

// Initialize toggle for all shapes
setupToggle("triangle");
setupToggle("parallelogram");
setupToggle("circle");
setupToggle("square");
setupToggle("rectangle");
setupToggle("trapezoid");
setupToggle("rhombus");
setupToggle("kite");

function calculateAreaOrPerimeter(idPrefix) {
    const areaInputs = document.getElementById(`${idPrefix}-area-inputs`).querySelectorAll("input");
    const perimeterInputs = document.getElementById(`${idPrefix}-perimeter-inputs`).querySelectorAll("input");
    let result;

    if (document.getElementById(`${idPrefix}-area`).checked) {
        const values = Array.from(areaInputs).map(input => parseFloat(input.value));
        if (idPrefix === "triangle") {
            const [base, height] = values;
            result = 0.5 * base * height;
        } else if (idPrefix === "parallelogram") {
            const [base, height] = values;
            result = base * height;
        } else if (idPrefix === "circle") {
            const [radius] = values;
            result = Math.PI * radius * radius;
        } else if (idPrefix === "square") {
            const [side] = values;
            result = side * side;
        } else if (idPrefix === "rectangle") {
            const [length, width] = values;
            result = length * width;
        } else if (idPrefix === "trapezoid") {
            const [base1, base2, height] = values;
            result = 0.5 * (base1 + base2) * height;
        } else if (idPrefix === "rhombus") {
            const [d1, d2] = values;
            result = 0.5 * d1 * d2;
        } else if (idPrefix === "kite") {
            const [d1, d2] = values;
            result = 0.5 * d1 * d2;
        }
    } else {
        const values = Array.from(perimeterInputs).map(input => parseFloat(input.value));
        if (idPrefix === "triangle") {
            const [a, b, c] = values;
            result = a + b + c;
        } else if (idPrefix === "parallelogram") {
            const [a, b] = values;
            result = 2 * (a + b);
        } else if (idPrefix === "circle") {
            const [radius] = values;
            result = 2 * Math.PI * radius;
        } else if (idPrefix === "square") {
            const [side] = values;
            result = 4 * side;
        } else if (idPrefix === "rectangle") {
            const [length, width] = values;
            result = 2 * (length + width);
        } else if (idPrefix === "trapezoid") {
            const [a, b, c, d] = values;
            result = a + b + c + d;
        } else if (idPrefix === "rhombus") {
            const [side] = values;
            result = 4 * side;
        } else if (idPrefix === "kite") {
            const [a, b] = values;
            result = 2 * (a + b);
        }
    }

    document.getElementById(`${idPrefix}-result`).textContent = `Hasil: ${result}`;
    document.getElementById(`${idPrefix}-result`).style.display = "block"; // Ensure result shows up
}

// Event listeners for calculating the area or perimeter
document.getElementById("triangle-calculate").addEventListener("click", () => calculateAreaOrPerimeter("triangle"));
document.getElementById("parallelogram-calculate").addEventListener("click", () => calculateAreaOrPerimeter("parallelogram"));
document.getElementById("circle-calculate").addEventListener("click", () => calculateAreaOrPerimeter("circle"));
document.getElementById("square-calculate").addEventListener("click", () => calculateAreaOrPerimeter("square"));
document.getElementById("rectangle-calculate").addEventListener("click", () => calculateAreaOrPerimeter("rectangle"));
document.getElementById("trapezoid-calculate").addEventListener("click", () => calculateAreaOrPerimeter("trapezoid"));
document.getElementById("rhombus-calculate").addEventListener("click", () => calculateAreaOrPerimeter("rhombus"));
document.getElementById("kite-calculate").addEventListener("click", () => calculateAreaOrPerimeter("kite"));
