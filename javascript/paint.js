const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });

const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const opacity = document.getElementById('opacity');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const fileInput = document.getElementById('fileInput');
const shapeSelect = document.getElementById('shapeSelect');

const toolPencil = document.getElementById('toolPencil');
const toolEraser = document.getElementById('toolEraser');
const toolFill = document.getElementById('toolFill');

let isDrawing = false;
let currentTool = 'pencil';
let startX = 0;
let startY = 0;
let snapshot = null;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';

function resetCanvas() {
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
resetCanvas();

function setActiveTool(button, toolName) {
    document.querySelectorAll('.tool-group button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentTool = toolName;
}

toolPencil.addEventListener('click', () => setActiveTool(toolPencil, 'pencil'));
toolEraser.addEventListener('click', () => setActiveTool(toolEraser, 'eraser'));
toolFill.addEventListener('click', () => setActiveTool(toolFill, 'fill'));

function setColor(hex) {
    colorPicker.value = hex;
}

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            resetCanvas();
            
            let hRatio = canvas.width / img.width;
            let vRatio = canvas.height / img.height;
            let ratio = Math.min(hRatio, vRatio);
            let centerShiftX = (canvas.width - img.width * ratio) / 2;
            let centerShiftY = (canvas.height - img.height * ratio) / 2;

            ctx.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
});

function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
        x: clientX - rect.left,
        y: clientY - rect.top
    };
}

function startDrawing(e) {
    isDrawing = true;
    const coords = getCoordinates(e);
    startX = coords.x;
    startY = coords.y;

    ctx.beginPath();
    ctx.moveTo(startX, startY);

    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (currentTool === 'fill') {
        floodFill(Math.floor(startX), Math.floor(startY), colorPicker.value);
        isDrawing = false;
    } else if (shapeSelect.value === 'none') {
        draw(e);
    }
}

function stopDrawing() {
    if (!isDrawing) return;
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    const coords = getCoordinates(e);
    const x = coords.x;
    const y = coords.y;

    ctx.lineWidth = brushSize.value;

    if (currentTool === 'eraser') {
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = '#ffffff';
    } else {
        ctx.globalAlpha = parseFloat(opacity.value);
        ctx.strokeStyle = colorPicker.value;
    }

    const shape = shapeSelect.value;

    if (shape === 'none') {
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.globalAlpha = 1.0;
        ctx.putImageData(snapshot, 0, 0);
        
        ctx.globalAlpha = parseFloat(opacity.value);
        ctx.beginPath();

        if (shape === 'line') {
            ctx.moveTo(startX, startY);
            ctx.lineTo(x, y);
        } else if (shape === 'rect') {
            ctx.rect(startX, startY, x - startX, y - startY);
        } else if (shape === 'circle') {
            const radius = Math.sqrt(Math.pow(startX - x, 2) + Math.pow(startY - y, 2));
            ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
        }
        ctx.stroke();
    }
}

function floodFill(startX, startY, fillColorHex) {
    ctx.globalAlpha = 1.0;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    const targetPos = (startY * canvas.width + startX) * 4;
    const startR = data[targetPos];
    const startG = data[targetPos + 1];
    const startB = data[targetPos + 2];
    const startA = data[targetPos + 3];

    const fillR = parseInt(fillColorHex.substr(1,2), 16);
    const fillG = parseInt(fillColorHex.substr(3,2), 16);
    const fillB = parseInt(fillColorHex.substr(5,2), 16);

    if (startR === fillR && startG === fillG && startB === fillB) return;

    const pixelStack = [[startX, startY]];

    while (pixelStack.length > 0) {
        const [x, y] = pixelStack.pop();
        const currentPos = (y * canvas.width + x) * 4;

        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;

        if (data[currentPos] === startR &&
            data[currentPos + 1] === startG &&
            data[currentPos + 2] === startB &&
            data[currentPos + 3] === startA) {

            data[currentPos] = fillR;
            data[currentPos + 1] = fillG;
            data[currentPos + 2] = fillB;
            data[currentPos + 3] = 255;

            pixelStack.push([x + 1, y]);
            pixelStack.push([x - 1, y]);
            pixelStack.push([x, y + 1]);
            pixelStack.push([x, y - 1]);
        }
    }
    ctx.putImageData(imgData, 0, 0);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); });
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });
canvas.addEventListener('touchend', stopDrawing);

clearBtn.addEventListener('click', () => {
    if (confirm("¿Seguro que quieres borrar todo el lienzo?")) {
        resetCanvas();
    }
});

saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'mi-dibujo-paint.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});