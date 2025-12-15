const pTag = document.querySelector('#scollText');

const TextArr =
  'FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE';

function initText(element, textString) {
  const parts = textString.split(/\s+/);
  const duplicated = parts.concat(parts);
  element.innerText = duplicated.join('\u00A0\u00A0\u00A0\u00A0\u00A0');
}

initText(pTag, TextArr);

let count = 0;
let loop = 0;

function measure() {
  // 한 바퀴 길이
  loop = pTag.scrollWidth / 2;

  //  시작부터 왼쪽에서
  pTag.style.transform = `translate3d(-${loop}px, 0, 0)`;
}

function marqueeText(count, element, direction) {
  // loop만큼 가면 다시 0
  if (count > loop) count = 0;
  element.style.transform = `translate3d(${direction * count - loop}px, 0, 0)`;
  return count;
}

function animate() {
  count++;
  // 흐름
  count = marqueeText(count, pTag, 0.5);
  requestAnimationFrame(animate);
}

window.addEventListener('scroll', () => {
  count += 10;
});
window.addEventListener('resize', measure);

// 폭 계산 먼저, 그 다음 애니메이션 시작
window.addEventListener('load', () => {
  measure();
  animate();
});
