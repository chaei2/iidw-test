const pTag1 = document.querySelector('.first-animation');

const textArr1 =
  'FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER FIBER OPTIC CABLE COPPER';

function initTexts(element, textString) {
  const parts = textString.split(/\s+/);
  const duplicated = parts.concat(parts);
  element.innerText = duplicated.join('\u00A0\u00A0\u00A0');
}

initTexts(pTag1, textArr1);

let count1 = 0;

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`;
    count = 0;
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

  return count;
}

function animate() {
  count1++;

  count1 = marqueeText(count1, pTag1, 0.3);

  window.requestAnimationFrame(animate);
}

animate();

function scrollHandler() {
  count1 += 15;
}

window.addEventListener('scroll', scrollHandler);
animate();
