document.getElementById("slider-rp").addEventListener("input", function() {
    updateDivColor(this, document.getElementById("pipe-rp"),
        document.getElementById("temp-rp1"));
});

document.getElementById("slider-sp").addEventListener("input", function() {
    updateDivColor(this, document.getElementById("pipe-sp"),
        document.getElementById("temp-sp1"));
});

document.getElementById("slider-rp2").addEventListener("input", function() {
    updateDivColor(this, document.getElementById("pipe-rp2"),
        document.getElementById("temp-rp2"), 0.3);
});

document.getElementById("slider-sp2").addEventListener("input", function() {
    updateDivColor(this, document.getElementById("pipe-sp2"),
        document.getElementById("temp-sp2"), 0.3);
});

document.getElementById("slider-rp3").addEventListener("input", function() {
    updateDivColor(this, document.getElementById("pipe-rp3"),
        document.getElementById("temp-rp3"));
});

document.getElementById("slider-sp3").addEventListener("input", function() {
    updateDivColor(this, document.getElementById("pipe-sp3"),
        document.getElementById("temp-sp3"));
});


function updateDivColor(slider, div_pipe, div_temp, opacity = 1.0) {
    const value = slider.value / 100; // Convert to percentage (0 to 1)

    const red = Math.round(255 * value);
    const blue = Math.round(255 * (1 - value));
    const color = `rgba(${red}, 0, ${blue}, ${opacity})`;

    div_pipe.style.backgroundColor = color;
    div_temp.innerHTML  = `${(value*100).toFixed(1)}°C`;
}
