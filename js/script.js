// Fungsi untuk membuka side navigation
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

// Fungsi untuk menutup side navigation
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Fungsi untuk setup toggle antara perhitungan luas dan keliling
function setupToggle(idPrefix) {
    document.getElementById(`${idPrefix}-area`).addEventListener("change", function() {
        // Tampilkan input area, sembunyikan input perimeter
        document.getElementById(`${idPrefix}-area-inputs`).style.display = "block";
        document.getElementById(`${idPrefix}-perimeter-inputs`).style.display = "none";
    });
    document.getElementById(`${idPrefix}-perimeter`).addEventListener("change", function() {
        // Tampilkan input perimeter, sembunyikan input area
        document.getElementById(`${idPrefix}-area-inputs`).style.display = "none";
        document.getElementById(`${idPrefix}-perimeter-inputs`).style.display = "block";
    });
}

// Setup toggle untuk berbagai bangun datar
setupToggle("triangle");
setupToggle("parallelogram");
setupToggle("circle");
setupToggle("square");
setupToggle("rectangle");
setupToggle("trapezoid");
setupToggle("rhombus");
setupToggle("kite");

// Fungsi untuk menghitung luas atau keliling
function calculateAreaOrPerimeter(idPrefix) {
    const areaInputs = document.getElementById(`${idPrefix}-area-inputs`).querySelectorAll("input");
    const perimeterInputs = document.getElementById(`${idPrefix}-perimeter-inputs`).querySelectorAll("input");
    let result;

    // Jika opsi hitung luas dipilih
    if (document.getElementById(`${idPrefix}-area`).checked) {
        const values = Array.from(areaInputs).map(input => parseFloat(input.value));
        // Hitung luas berdasarkan tipe bangun datar
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
        // Jika opsi hitung keliling dipilih
        const values = Array.from(perimeterInputs).map(input => parseFloat(input.value));
        // Hitung keliling berdasarkan tipe bangun datar
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

    // Tampilkan hasil di elemen yang sesuai
    document.getElementById(`${idPrefix}-result`).textContent = `Hasil: ${result}`;
    document.getElementById(`${idPrefix}-result`).style.display = "block"; 

    // Reset input setelah perhitungan
    areaInputs.forEach(input => input.value = "");
    perimeterInputs.forEach(input => input.value = "");
}

// Tambahkan event listener untuk menghitung luas/keliling pada tombol hitung
document.getElementById("triangle-calculate").addEventListener("click", () => calculateAreaOrPerimeter("triangle"));
document.getElementById("parallelogram-calculate").addEventListener("click", () => calculateAreaOrPerimeter("parallelogram"));
document.getElementById("circle-calculate").addEventListener("click", () => calculateAreaOrPerimeter("circle"));
document.getElementById("square-calculate").addEventListener("click", () => calculateAreaOrPerimeter("square"));
document.getElementById("rectangle-calculate").addEventListener("click", () => calculateAreaOrPerimeter("rectangle"));
document.getElementById("trapezoid-calculate").addEventListener("click", () => calculateAreaOrPerimeter("trapezoid"));
document.getElementById("rhombus-calculate").addEventListener("click", () => calculateAreaOrPerimeter("rhombus"));
document.getElementById("kite-calculate").addEventListener("click", () => calculateAreaOrPerimeter("kite"));

// Fungsi untuk mereset input pada setiap bangun datar
document.getElementById("triangle-clear").addEventListener("click", function () {
    document.getElementById("triangle-base").value = '';
    document.getElementById("triangle-height").value = '';
    document.getElementById("triangle-side-a").value = '';
    document.getElementById("triangle-side-b").value = '';
    document.getElementById("triangle-side-c").value = '';
    document.getElementById("triangle-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("parallelogram-clear").addEventListener("click", function () {
    document.getElementById("parallelogram-base").value = '';
    document.getElementById("parallelogram-height").value = '';
    document.getElementById("parallelogram-side-a").value = '';
    document.getElementById("parallelogram-side-b").value = '';
    document.getElementById("parallelogram-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("circle-clear").addEventListener("click", function () {
    document.getElementById("circle-radius").value = '';
    document.getElementById("circle-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("square-clear").addEventListener("click", function () {
    document.getElementById("square-side").value = '';
    document.getElementById("square-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("rectangle-clear").addEventListener("click", function () {
    document.getElementById("rectangle-length").value = '';
    document.getElementById("rectangle-width").value = '';
    document.getElementById("rectangle-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("trapezoid-clear").addEventListener("click", function () {
    document.getElementById("trapezoid-base1").value = '';
    document.getElementById("trapezoid-base2").value = '';
    document.getElementById("trapezoid-height").value = '';
    document.getElementById("trapezoid-side-a").value = '';
    document.getElementById("trapezoid-side-b").value = '';
    document.getElementById("trapezoid-side-c").value = '';
    document.getElementById("trapezoid-side-d").value = '';
    document.getElementById("trapezoid-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("rhombus-clear").addEventListener("click", function () {
    document.getElementById("rhombus-diagonal1").value = '';
    document.getElementById("rhombus-diagonal2").value = '';
    document.getElementById("rhombus-side").value = '';
    document.getElementById("rhombus-result").textContent = 'Hasil akan ditampilkan di sini';
});

document.getElementById("kite-clear").addEventListener("click", function () {
    document.getElementById("kite-diagonal1").value = '';
    document.getElementById("kite-diagonal2").value = '';
    document.getElementById("kite-side-a").value = '';
    document.getElementById("kite-side-b").value = '';
    document.getElementById("kite-result").textContent = 'Hasil akan ditampilkan di sini';
});
