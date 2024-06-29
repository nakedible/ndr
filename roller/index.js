import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/dice-box.es.min.js";

let Box = new DiceBox("#dice-box", {
    assetPath: "assets/",
    origin: "https://unpkg.com/@3d-dice/dice-box@1.0.8/dist/",
    theme: "default",
    themeColor: "#feea03",
    offscreen: true,
    scale: 6
});

const button = document.getElementById("rollem");

const result = document.getElementById("result");

const formatter = new Intl.NumberFormat(undefined, { signDisplay: "exceptZero" });

Box.init().then(async (world) => {
    button.disabled = false;
});

Box.onRollComplete = (results) => {
    const pos = results[0].value;
    const neg = results[1].value;
    const posClass = pos == 2 ? 'F' : pos == 12 ? 'C' : 'N';
    const negClass = neg == 2 ? 'F' : neg == 12 ? 'C' : 'N';
    result.textContent = `Result: ${pos} – ${neg} = ${formatter.format(pos - neg)} ${posClass}${negClass}`;
}

// const colors = [
//     "#348888",
//     "#22BABB",
//     "#9EF8EE",
//     "#FA7F08",
//     "#F24405",
//     "#F25EB0",
//     "#B9BF04",
//     "#F2B705",
//     "#F27405",
//     "#F23005"
// ];

button.addEventListener("click", (e) => {
    result.textContent = "Rolling...";
    Box.clear();
    Box.add("2d6", { themeColor: "#434343" });
    Box.add("2d6", { themeColor: "#F23005" });
});
