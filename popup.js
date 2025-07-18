function filter() {
  chrome.tabs.executeScript({
    file: 'alert.js',
  });
}

// document.getElementById('filter').addEventListener('click', filter);
document.getElementById('filter-text').addEventListener('click', () => {
  // if (window.filterActive) {
  //   window.filterActive = false;
  // } else {
  //   window.filterActive = true;
  // }

  window.filterActive = !window.filterActive;

  console.log('Filter active:', window.filterActive);
  chrome.tabs.executeScript({
    file: 'change_filter.js',
  });
});
document.getElementById('add-text').addEventListener('click', addText);

window.filterActive = true;

var textToFilter = [
  '9 8 7 4 8 3 1 0 8',
  'Diego 9989f',
  '9 87 48 31 08',
  'diego 989F',
  '9 87 48 31-08',
  'DIEGO 9989F',
  'DIEGO9989F',
  'Carvalho9989F',
];

textToFilter.forEach((text) => {
  addText(text);
});

function addText(text) {
  if (!text) {
    text = prompt('Digite o texto:');
  }
  // console.log('Texto adicionado:', text);
  if (text) {
    const newDiv = document.createElement('div');
    const newLi = `
      <div style="display: flex; justify-content: space-between; width: 100%; font-size: 20px">
          <span style="width: auto">${text}</span>
          <div style="pointer-events: pointer; cursor: pointer; display: flex; align-items: center; justify-content: center" id="remove-text-${text}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash-icon lucide-trash"
            >
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
        </div>
    `;
    newDiv.innerHTML = newLi;
    document.querySelector('#text-list').appendChild(newDiv);
    // document.querySelector('#text-list div').appendChild(newDiv);
    document.getElementById(`remove-text-${text}`).addEventListener('click', () => {
      // remove(`remove-text-${text}`);
      document.getElementById(`remove-text-${text}`).parentElement.parentElement.remove();
      // console.log(`Item with text "${text}" removed.`);
      textToFilter = textToFilter.filter((item) => item !== text);
      // console.log('Texto removido do array:', textToFilter);
    });

    textToFilter.push(text);
    // console.log('Texto adicionado ao array:', textToFilter);
  }
}
