import DiceBox from "https://unpkg.com/@3d-dice/dice-box@1.0.14/dist/dice-box.es.min.js";

let Box = new DiceBox("#dice-box", {
    assetPath: "assets/",
    origin: "https://unpkg.com/@3d-dice/dice-box@1.0.14/dist/",
    theme: "default",
    themeColor: "#feea03",
    offscreen: true,
    scale: 6
});

const button = document.getElementById("rollem");
const modifierSelect = document.getElementById("modifier");
const logList = document.getElementById("log-list");
const critsToggle = document.getElementById("crits-toggle");
const logToggle = document.getElementById("log-toggle");
const rollLog = document.querySelector(".roll-log");

const formatter = new Intl.NumberFormat(undefined, { signDisplay: "exceptZero" });

Box.init().then(async (world) => {
    button.disabled = false;
});

function updateLogVisibility() {
    rollLog.classList.toggle("visible", logToggle.checked);
}

function updateCritsVisibility() {
    document.querySelectorAll('.code').forEach(code => {
        code.style.display = critsToggle.checked ? 'inline' : 'none';
    });
}

Box.onRollComplete = (results) => {
    const pos = results[0].value;
    const neg = results[1].value;
    const mod = parseInt(modifierSelect.value);
    const total = pos - neg + mod;
    
    const posClass = pos === 2 ? 'f' : pos === 12 ? 'c' : 'n';
    const negClass = neg === 2 ? 'f' : neg === 12 ? 'c' : 'n';
    const modOp = mod === 0 ? '' : mod > 0 ? '+' : '-';
    const modVal = mod === 0 ? '' : mod > 0 ? mod : -mod;
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="pos">${pos}</span>
        <span class="operator">-</span>
        <span class="neg">${neg}</span>
        <span class="operator">${modOp}</span>
        <span class="mod ${mod > 0 ? 'positive' : mod < 0 ? 'negative' : ''}">${modVal}</span>
        <span class="operator">=</span>
        <span class="result ${total > 0 ? 'positive' : total < 0 ? 'negative' : ''}">${formatter.format(total)}</span>
        <span class="code" style="display: ${critsToggle.checked ? 'inline' : 'none'}"><span class="${posClass}">${posClass.toUpperCase()}</span><span class="${negClass}">${negClass.toUpperCase()}</span></span>
    `;
    
    logList.insertBefore(li, logList.firstChild);
    
    // Limit the log to the last 10 rolls
    if (logList.children.length > 10) {
        logList.removeChild(logList.lastChild);
    }
}

button.addEventListener("click", (e) => {
    Box.clear();
    Box.add("2d6", { themeColor: "#434343" });
    Box.add("2d6", { themeColor: "#F23005" });
});

logToggle.addEventListener("change", updateLogVisibility);
critsToggle.addEventListener("change", updateCritsVisibility);

// Initial visibility setup
updateLogVisibility();
updateCritsVisibility();
