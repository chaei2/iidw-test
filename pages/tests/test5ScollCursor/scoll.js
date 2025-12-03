const pTag1 = document.querySelector('.first-animation');
const pTag2 = document.querySelector('.second-animation');

const textArr1 =
  'FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE';
const textArr2 =
  'FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE FIBER OPTIC CABLE COPPER CABLE';

function initTexts(element, textString) {
  const parts = textString.split(/\s+/);
  const duplicated = parts.concat(parts);
  element.innerText = duplicated.join('\u00A0\u00A0\u00A0\u00A0');
  // textArray.push(...textArray);
  // for (let n = 0; n < textArray.length; n++) {
  //   element.innerText += `${textArray[n]}\u00A0\u00A0\u00A0\u00A0`;
  // }
}

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translateX(0)`;
    return 0;
  }
  element.style.transform = `translateX(${direction * count}px)`;
  return count;
}

function animate() {
  count1++;
  count2++;

  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);

  window.requestAnimationFrame(animate);
}

animate();

// 스크롤 무조건 되어야 작동함-> 즉 스크롤이 안되는 페이지면 작동하지 않음
window.addEventListener('scroll', () => {
  count1 += 10;
  count2 += 10;
});
