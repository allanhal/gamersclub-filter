function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js',
  });
}

document.getElementById('filter').addEventListener('click', hello);
