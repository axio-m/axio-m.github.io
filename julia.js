const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const imgData = ctx.createImageData(width, height);
const data = imgData.data;
const maxIter = 100;

function drawJulia(cRe, cIm) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let zRe = 1.5 * (x - width / 2) / (0.5 * width);
            let zIm = 1.5 * (y - height / 2) / (0.5 * height);
            let i = 0;
            while (i < maxIter && (zRe*zRe+zIm*zIm) <= 4) {
                let oldRe = zRe;
                zRe = zRe * zRe - zIm * zIm + cRe;
                zIm = 2 * oldRe * zIm + cIm;
                i++;
            }
            let pix = (x + y * width) * 4;
            if (i === maxIter) {
                data[pix] = 0;
                data[pix + 1] = 0;
                data[pix + 2] = 0;
            } else {
                data[pix] = (i * 8) % 256;
                data[pix + 1] = (i * 5) % 256;
                data[pix + 2] = (i * 12) % 256;
            }
            data[pix+3] = 255;
        }
    }
    ctx.putImageData(imgData, 0, 0);
}

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const cRe = 2 * (mouseX / width) - 1;
    const cIm = 2 * (mouseY / height) - 1;
    drawJulia(cRe, cIm);
});

drawJulia(-0.7, 0.27015);
