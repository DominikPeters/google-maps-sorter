function sortResults() {
  // Select all elements with the class UY7F9
  const elements = Array.from(document.getElementsByClassName('UY7F9'));

  if (elements.length === 0) return;

  // Extract the number of reviews and sort the elements
  const sortedElements = elements.map(element => {
    const reviewsText = element.textContent;
    const reviewsCount = parseInt(reviewsText.replace(/[^\d]/g, ''), 10);
    return { element, reviewsCount };
  }).sort((a, b) => b.reviewsCount - a.reviewsCount);

  // Find the parent container of the elements
  const parentContainer = elements[0].closest('div[aria-label]').parentNode;

  // Reorder the elements in the UI
  sortedElements.forEach(({ element }) => {
    const articleElement = element.closest('div[aria-label]');
    parentContainer.appendChild(articleElement);
  });

  document.querySelector('[aria-label="Results for Restaurants"]').firstChild.scrollIntoView();
}

function injectCSS(css) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}

function addSortingButton() {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('app-vertical-item');
    outerDiv.style.display = '';
    outerDiv.id = 'sorter';

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('sVuEFc');

    const button = document.createElement('button');
    button.setAttribute('aria-label', 'Sort Results');
    button.setAttribute('aria-pressed', 'false');
    button.id = 'sVuEFc';
    button.classList.add('Tc0rEd', 'Zf54rc', 'L6Bbsd');

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('mNcDk', 'bpLs1b');
    buttonDiv.onclick = sortResults;
    buttonDiv.style.backgroundImage = 'unset';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('fill', '#5b5b5b');
    svg.setAttribute('height', '20px');
    svg.setAttribute('width', '20px');
    svg.setAttribute('viewBox', '0 0 460.088 460.088');
    svg.setAttribute('xml:space', 'preserve');

    const svgContent = `
      <g>
        <g>
          <g>
            <path d="M25.555,139.872h257.526V88.761H25.555C11.442,88.761,0,100.203,0,114.316C0,128.429,11.442,139.872,25.555,139.872z"/>
            <path d="M25.555,242.429h257.526v-51.111H25.555C11.442,191.318,0,202.76,0,216.874C0,230.988,11.442,242.429,25.555,242.429z"/>
            <path d="M25.555,293.874v0.001C11.442,293.875,0,305.316,0,319.43s11.442,25.555,25.555,25.555h178.91
              c-2.021-6.224-3.088-12.789-3.088-19.523c0-11.277,2.957-22.094,8.48-31.588H25.555z"/>
            <path d="M450.623,302.611c-12.62-12.621-33.083-12.621-45.704,0l-26.535,26.535V52.926c0-17.849-14.469-32.317-32.318-32.317
              s-32.318,14.469-32.318,32.317v276.22l-26.535-26.535c-12.621-12.62-33.083-12.621-45.704,0
              c-12.621,12.621-12.621,33.083,0,45.704l81.7,81.699c12.596,12.6,33.084,12.643,45.714,0l81.7-81.699
              C463.243,335.694,463.244,315.232,450.623,302.611z"/>
          </g>
        </g>
      </g>
    `;
    svg.innerHTML = svgContent;
    buttonDiv.appendChild(svg);
    button.appendChild(buttonDiv);
    innerDiv.appendChild(button);
    outerDiv.appendChild(innerDiv);

    const originalElement = document.getElementsByClassName('app-vertical-widget-holder')[0];
    originalElement.appendChild(outerDiv);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('load', async () => {
  await delay(5000);
  addSortingButton();
})
