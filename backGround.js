const simplex = new SimplexNoise();
const $divs = Array.from(document.querySelectorAll('div'));
const width = 16;
const height = 16;
const res = .05;
let t = 0;
const $bg = document.querySelector('body');

const doit = () => {
    $divs.forEach(($div, i) => {
    const y = Math.floor(i / width);
    const x = i % (width * 2);
    const val = simplex.noise3D(x * res, y * res, t+=0.001);

    $div.style = `
      --noise-abs: ${Math.abs(val)};
      --color: hsl(${val * 180},${30}%,${40 + val * 40}%);
      --noise: ${val};
    `;
  });
}


setInterval(doit, 5500)
doit()