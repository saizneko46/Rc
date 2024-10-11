// Display dynamic text
const dynamicTextElement = document.querySelector('.dynamic-text');
let textIndex = 0;
const texts = ['Ekstrakurikuler Berkualitas', 'Prestasi Membanggakan', 'Siswa Berkarakter'];

function changeText() {
  dynamicTextElement.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
}
setInterval(changeText, 3000);

// Display current time
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
                                                    
