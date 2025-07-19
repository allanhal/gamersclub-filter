setInterval(() => {
  // console.log('Frame', window.filterActive);
  frame();
}, 1000);

function frame() {
  // textToFilter
  chrome.storage.local.get(['textToFilter'], function ({ textToFilter }) {
    console.log('FRAME - Settings retrieved textToFilter', textToFilter);
  });
  // chrome.storage.local.get(['textToFilter'], (result) => {
  //   console.log('Value:', result.textToFilter);
  // });

  // console.log('Frame', window.filterActive);
  // if (!window.filterActive) return;
  // Array.from(document.getElementsByClassName('olx-text olx-text--body-large olx-text--block olx-text--semibold olx-adcard__title')).forEach(
  //   (element) => {
  //     console.log('Element found:', window.textToFilter);

  //     // const array_names = [
  //     //     '9 8 7 4 8 3 1 0 8',
  //     //     'Diego 9989f',
  //     //     '9 87 48 31 08',
  //     //     'diego 989F',
  //     //     '9 87 48 31-08',
  //     //     'DIEGO 9989F',
  //     //     'DIEGO9989F',
  //     //     'Carvalho9989F',
  //     //   ]
  //     const array_names = textToFilter;

  //     console.log('Array names:', array_names);
  //     if (array_names.some((string) => element.innerText.includes(string))) {
  //       const closest = element.closest('section');
  //       if (closest) {
  //         closest.remove();
  //       }
  //     }
  //   }
  // );
}
