(function () {

  // Inject the CSS
  const style = document.createElement('style');
  style.innerHTML = `
  .bot-w-16 {
    width: 4rem; 
  }
  .bot-h-16 {
    height: 4rem; 
  }
  .bot-rounded-full {
    border-radius: 9999px; 
  }
  .bot-justify-center {
    justify-content: center;
  }
  
  .bot-cursor-pointer {
    cursor: pointer; 
  }
  
  .bot-text-3xl {
    font-size: 1.875rem;
  }  
  #chat-widget-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    flex-direction: column;
  }
  #chat-popup {
    height: 70vh;
    max-height: 70vh;
    transition: all 0.3s;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    #chat-popup {
      position: fixed;
      top: 10;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 90%;
      max-height: 90%;
      border-radius: 0;
    }
  }
  .bot-w-10 {
    width: 2.5rem; 
  }
  
  .bot-h-10 {
    height: 2.5rem; 
  }  
  .bot-absolute {
    position: absolute; 
  }
  .bot-right-0 {
    right: 0; 
  }
  
  .bot-w-96 {
    width: 24rem; 
  }
  .bot-flex-col {
    flex-direction: column;
  }
  .bot-transition-all {
    transition-property: all; 
  }
  .bot-text-sm {
    font-size: 0.875rem; 
  }
  .bot-bottom-20 {
    bottom: 5rem;
  }
  .bot-bg-white {
    background-color: #ffffff; 
  }
  .bot-shadow-md {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }
  .bot-flex-col {
    flex-direction: column; 
  }
  .bot-justify-between {
    justify-content: space-between; 
  }
  .bot-items-center {
    align-items: center; 
  }
  .bot-p-4 {
    padding: 1rem; 
  }
  .bot-rounded-t-md {
    border-top-left-radius: 0.375rem; 
    border-top-right-radius: 0.375rem;
  }
  .bot-bg-transparent {
    background-color: transparent; 
  }
  .bot-border-none {
    border: none; 
  }
  .bot-flex-1 {
    flex: 1; 
  }
  .bot-border {
    border-width: 1px; 
  }
  .bot-border-gray-300 {
    border-color: #9f4923; 
  }
  .bot-outline-none {
    outline: none; 
  }
  .bot-overflow-y-auto {
    overflow-y: auto; 
  }
  .bot-border-t {
    border-top-width: 1px; 
    border-color: #9f4923; 
  }
  .bot-border-gray-200 {
    border-color: #9f4923; 
  }
  .bot-hidden {
    visibility: hidden;
  }
  .bot-space-x-4 {
    margin-right: 1rem; 
  }
  .bot-text-center {
    text-align: center; 
  }
  
  .bot-text-xs {
    font-size: 0.75rem; 
  }
  
  .bot-pt-4 {
    padding-top: 1rem; 
  }
  .bot-rounded-md {
    border-radius: 0.375rem; 
  }
  .bot-py-2 {
    padding-top: 0.5rem; 
    padding-bottom: 0.5rem;
  }
  
  .bot-bg-gray-200 {
    background-color: #d76227; 
  }
  
  .bot-text-black {
    color: #000000; 
  }
  
  .bot-rounded-lg {
    border-radius: 0.5rem; 
  }
  
  .bot-px-4 {
    padding-left: 1rem; 
    padding-right: 1rem;
  }
  .bot-px-2 {
    padding-left: 0.5rem; 
    padding-right: 0.5rem;
  }
  .bot-max-w-[70%] {
    max-width: 70%; 
  }
  .bot-bg-gray-800 {
    background-color: #9f4923; 
  }
  .bot-text-white {
    color: #ffffff; 
  }
  .bot-flex {
    display: flex; 
  }
  .bot-justify-end {
    justify-content: flex-end; 
  }
  .bot-mb-3 {
    margin-bottom: 0.75rem; 
  }
  .bot-card {
    width: 300px;
    padding: 20px;
    border: 1px solid #9f4923;
    border-radius: 8px;
    text-align: center;
  }
  .bot-card img {
      width: 100%;
      height: auto;
      margin-bottom: 15px;
  }
  .bot-actions a {
      display: block;
      margin-bottom: 10px;
      text-decoration: none;
      font-weight: bold;
  }
  .bot-carousel {
    position: relative;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
  }
  .bot-carousel-container {
    display: flex;
    transition: transform 0.5s ease;
  }
  .bot-slide {
    min-width: 100%;
    display: none;
  }
  .bot-slide img {
    width: 100%;
    height: auto;
  }
  .bot-slide:first-child {
    display: block;
  }
  .bot-prev,
  .bot-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1;
  }
  .bot-prev {
    left: 0;
  }

  .bot-next {
    right: 0;
  }

  
  `;
  const faScript = document.createElement('script');
  faScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js';
  document.head.appendChild(faScript);
  document.head.appendChild(style);

  // Create chat widget container
  const chatWidgetContainer = document.createElement('div');
  chatWidgetContainer.id = 'chat-widget-container';
  document.body.appendChild(chatWidgetContainer);

  chatWidgetContainer.innerHTML = `
    <!-- Chat Bubble -->
    <div id="chat-bubble" class="bot-w-16 bot-h-16 bot-bg-gray-800 bot-rounded-full bot-flex bot-items-center bot-justify-center bot-cursor-pointer bot-text-3xl">
      <svg xmlns="http://www.w3.org/2000/svg" class="bot-w-10 bot-h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>

    <!-- Chat Popup -->
    <div id="chat-popup" class="bot-hidden bot-absolute bot-bottom-20 bot-right-0 bot-w-96 bot-bg-white bot-rounded-md bot-shadow-md bot-flex bot-flex-col bot-transition-all bot-text-sm">
      <div id="chat-header" class="bot-flex bot-justify-between bot-items-center bot-p-4 bot-bg-gray-200 bot-text-white bot-rounded-t-md">
        <h3 class="m-0 text-lg">UhuruTek Bot</h3>
        <button id="close-popup" class="bot-bg-transparent bot-border-none bot-text-white cursor-pointer">
          <i class="far fa-window-close"></i>
        </button>
      </div>
      <div id="chat-messages" class="bot-flex-1 bot-p-4 bot-overflow-y-auto"></div>
      <div id="chat-input-container" class="bot-p-4 bot-border-t bot-border-gray-200">
        <div class="bot-flex bot-space-x-4 bot-items-center">
          <input type="text" id="chat-input" style="border: 1px solid #9f4923;" class="bot-flex-1 bot-rounded-md bot-px-4 bot-py-2 bot-outline-none w-3/4" placeholder="Type your message...">
          <button id="chat-submit" style="margin-left: 3px; bot-border: 1px solid #9f4923;" class="rounded bot-px-4 bot-py-2 cursor-pointer">
          <i class="fas fa-paper-plane" style="color: #9f4923;"></i>
        </button>
        
        </div>
        <div class="bot-flex bot-text-center bot-text-xs bot-pt-4">
          <span class="bot-flex-1">Powered by <strong><a href="https://uhurutek.com" target="_blank" ><img src="https://uhurutek.com/assets/img/uhurutek_logo.svg" width="90" alt="Uhurutek Logo">
          </a></strong></span>
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  const chatInput = document.getElementById('chat-input');
  const chatSubmit = document.getElementById('chat-submit');
  const chatMessages = document.getElementById('chat-messages');
  const chatBubble = document.getElementById('chat-bubble');
  const chatPopup = document.getElementById('chat-popup');
  const closePopup = document.getElementById('close-popup');

  chatSubmit.addEventListener('click', function () {
    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';

    onUserRequest(message);
  });

  chatInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      chatSubmit.click();
    }
  });

  chatBubble.addEventListener('click', function () {
    togglePopup();
  });

  closePopup.addEventListener('click', function () {
    togglePopup();
  });
  function togglePopup() {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.classList.toggle('bot-hidden');
    if (!chatPopup.classList.contains('bot-hidden')) {
      document.getElementById('chat-input').focus();
    }
  }

  /* click outside close popup */

  // document.addEventListener('click', function (event) {
  //   const chatPopup = document.getElementById('chat-popup');
  //   const chatBubble = document.getElementById('chat-bubble');

  //   if (!chatPopup.contains(event.target) && !chatBubble.contains(event.target)) {
  //     if (!chatPopup.classList.contains('bot-hidden')) {
  //       chatPopup.classList.add('bot-hidden');
  //     }
  //   }
  // });

  function onUserRequest(message) {
    // Display user message
    const messageElement = document.createElement('div');
    messageElement.className = 'bot-flex bot-justify-end bot-mb-3';
    messageElement.innerHTML = `
      <div class="bot-bg-gray-800 bot-text-white bot-rounded-lg bot-py-2 bot-px-4 bot-max-w-[70%]">
        ${message}
      </div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = '';
    fetchBotResponse(message)
  }

  function fetchBotResponse(message) {
    fetch('https://bp.uhurutek.com/api/v1/bots/uhurubot/converse/mahabubu470@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'text',
        text: message
      })
    })
      .then(response => response.json())
      .then(data => {
        decisionFileTypes(data.responses)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  //! TODO File type need to be define high level
  function decisionFileTypes(responses) {
    responses.forEach(response => {
      if (response.type === 'text') {
        replyText(response.text);
      } else if (response.type === 'file') {
        replyFile(response);
      } else if (response.type === 'video') {
        replyVideo(response);
      } else if (response.type === 'card') {
        replyCard(response);

      } else if (response.type === "carousel") {
        replayCarousel(response)
      } else if (response.type === "audio") {
        replyAudio(response)
      }
      else {
        replyText('Sorry, I did not understand your request. Please try again.');
      }
    });
  }

  function replyText(message) {
    message = message.replace(/(?:\r\n|\r|\n)/g, '<br>');
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'bot-flex bot-mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" bot-text-black bot-rounded-lg bot-px-4 bot-py-2 bot-max-w-[70%]">
       ${message}
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function replyFile(file) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'bot-flex bot-mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" bot-text-black bot-rounded-lg bot-py-2 bot-px-4 bot-max-w-[70%]"> 
        <a href="${file.file}" target="_blank">${file.title}</a>
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function replyVideo(video) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'bot-flex bot-mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" bot-text-black bot-rounded-lg bot-py-2 bot-px-2 bot-max-w-[70%]"> 
        <video width="320" height="240" controls>
          <source src="${video.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function replyCard(cards) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'bot-flex bot-mb-3';

    const actions = cards.actions.map(response => `<a href="${response.url}" target="_blank">${response.title}</a>`).join('');

    replyElement.innerHTML = `
        <div class="bot-card">
            <h6>${cards.title}</h6>
            <p>${cards.subtitle}</p>
            <img src="${cards.image}" alt="Image">
            <div class="bot-actions">
                ${actions}
            </div>
        </div>
    `;

    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function replyAudio(audio) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'bot-flex bot-mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" bot-text-black bot-rounded-lg bot-py-2 bot-px-2 bot-max-w-[70%]"> 
        <audio controls>
          <source src="${audio.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  function replayCarousel(carousels) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'bot-flex bot-mb-3';
    // Create a variable to keep track of the current card index
    let currentCardIndex = 0;
    function showCard(index) {
      const cards = carousels.items[index];
      const actions = cards.actions.map(response => `<a href="${response.url}" target="_blank">${response.title}</a>`).join('');

      replyElement.innerHTML = `
            <div class="bot-carousel">
                <div class="bot-carousel-container">
                    <div class="bot-card">
                        <h6>${cards.title}</h6>
                        <p>${cards.subtitle}</p>
                        <img src="${cards.image}" alt="Image">
                        <div class="bot-actions">
                            ${actions}
                        </div>
                    </div>
                </div>
                <button class="bot-prev">&#10094;</button>
                <button class="bot-next">&#10095;</button>
            </div>
        `;
    }
    function showNextCard() {
      currentCardIndex = (currentCardIndex + 1) % carousels.items.length;
      showCard(currentCardIndex);
    }
    function showPreviousCard() {
      currentCardIndex = (currentCardIndex - 1 + carousels.items.length) % carousels.items.length;
      showCard(currentCardIndex);
    }
    replyElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('bot-next')) {
        showNextCard();
      } else if (event.target.classList.contains('bot-prev')) {
        showPreviousCard();
      }
    });
    // Show the initial card
    showCard(currentCardIndex);
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

})();