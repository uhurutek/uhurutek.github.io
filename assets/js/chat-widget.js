(function () {

  // Inject the CSS
  const style = document.createElement('style');
  style.innerHTML = `
  .w-16 {
    width: 4rem; 
  }
  
  .h-16 {
    height: 4rem; 
  }
  
  .bg-gray-800 {
    background-color: #9f4923; 
  }
  
  .rounded-full {
    border-radius: 9999px; 
  }
  
  .flex {
    display: flex; 
  }
  
  .items-center {
    align-items: center; 
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .cursor-pointer {
    cursor: pointer; 
  }
  
  .text-3xl {
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
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
    }
  }
  .w-10 {
    width: 2.5rem; 
  }
  
  .h-10 {
    height: 2.5rem; 
  }
  
  .text-white {
    color: #ffffff; 
  }
  
  .absolute {
    position: absolute; 
  }
  
  .bottom-20 {
    bottom: 5rem; 
  }
  
  .right-0 {
    right: 0; 
  }
  
  .w-96 {
    width: 24rem; 
  }
  
  .bg-white {
    background-color: #ffffff; 
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .shadow-md {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .transition-all {
    transition-property: all; 
  }
  .text-sm {
    font-size: 0.875rem; 
  }
  .absolute {
    position: absolute; 
  }
  .bottom-20 {
    bottom: 5rem;
  }
  .right-0 {
    right: 0; 
  }
  .w-96 {
    width: 24rem;
  }
  .bg-white {
    background-color: #ffffff; 
  }
  .rounded-md {
    border-radius: 0.375rem; 
  }
  .shadow-md {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  }
  .flex {
    display: flex; 
  }
  .flex-col {
    flex-direction: column; 
  }
  .transition-all {
    transition-property: all; 
  }
  .text-sm {
    font-size: 0.875rem; 
  }
  .flex {
    display: flex; 
  }
  .justify-between {
    justify-content: space-between; 
  }
  .items-center {
    align-items: center; 
  }
  .p-4 {
    padding: 1rem; 
  }
  .bg-gray-800 {
    background-color: #9f4923; 
  }
  .text-white {
    color: #ffffff; 
  }
  .rounded-t-md {
    border-top-left-radius: 0.375rem; 
    border-top-right-radius: 0.375rem;
  }
  .bg-transparent {
    background-color: transparent; 
  }
  .border-none {
    border: none; 
  }
  .text-white {
    color: #ffffff;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .flex-1 {
    flex: 1; 
  }
  .border {
    border-width: 1px; 
  }
  .border-gray-300 {
    border-color: #9f4923; 
  }
  .rounded-md {
    border-radius: 0.375rem; 
  }
  .px-4 {
    padding-left: 1rem; 
    padding-right: 1rem;
  }
  .py-2 {
    padding-top: 0.5rem; 
    padding-bottom: 0.5rem;
  }
  .outline-none {
    outline: none; 
  }
  .w-3/4 {
    width: 75%; 
  }
  .overflow-y-auto {
    overflow-y: auto; 
  }
  .border-t {
    border-top-width: 1px; 
    border-color: #9f4923; 
  }
  .border-gray-200 {
    border-color: #9f4923; 
  }
  .hidden {
    visibility: hidden;
  }
  .space-x-4 {
    margin-right: 1rem; 
  }
  
  .items-center {
    align-items: center; 
  }
  .text-indigo-600 {
    color: #7f9cf5; 
  }
  
  .flex {
    display: flex; 
  }
  
  .text-center {
    text-align: center; 
  }
  
  .text-xs {
    font-size: 0.75rem; 
  }
  
  .pt-4 {
    padding-top: 1rem; 
  }
  
  .bg-gray-800 {
    background-color: #9f4923; 
  }
  
  .text-white {
    color: #ffffff; 
  }
  
  .rounded-md {
    border-radius: 0.375rem; 
  }
  
  .px-4 {
    padding-left: 1rem; 
    padding-right: 1rem;
  }
  
  .py-2 {
    padding-top: 0.5rem; 
    padding-bottom: 0.5rem;
  }
  
  .cursor-pointer {
    cursor: pointer; 
  }
  
  .bg-gray-200 {
    background-color: #9f4923; 
  }
  
  .text-black {
    color: #000000; 
  }
  
  .rounded-lg {
    border-radius: 0.5rem; 
  }
  
  .py-2 {
    padding-top: 0.5rem; 
    padding-bottom: 0.5rem;
  }
  
  .px-4 {
    padding-left: 1rem; 
    padding-right: 1rem;
  }
  
  .max-w-[70%] {
    max-width: 70%; 
  }
  
  .bg-gray-800 {
    background-color: #9f4923; 
  }
  
  .text-white {
    color: #ffffff; 
  }
  
  .flex {
    display: flex; 
  }
  
  .justify-end {
    justify-content: flex-end; 
  }
  
  .mb-3 {
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
    <div id="chat-bubble" class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer text-3xl">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>

    <!-- Chat Popup -->
    <div id="chat-popup" class="hidden absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md flex flex-col transition-all text-sm">
      <div id="chat-header" class="flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-md">
        <h3 class="m-0 text-lg">UhuruTek Bot</h3>
        <button id="close-popup" class="bg-transparent border-none text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div id="chat-messages" class="flex-1 p-4 overflow-y-auto"></div>
      <div id="chat-input-container" class="p-4 border-t border-gray-200">
        <div class="flex space-x-4 items-center">
          <input type="text" id="chat-input" style="border: 1px solid #9f4923;" class="flex-1 rounded-md px-4 py-2 outline-none w-3/4" placeholder="Type your message...">
          <button id="chat-submit" style="margin-left: 3px; border: 1px solid #9f4923;" class="rounded px-4 py-2 cursor-pointer">
          <i class="fas fa-paper-plane" style="color: #9f4923;"></i>
        </button>
        
        </div>
        <div class="flex text-center text-xs pt-4">
          <span class="flex-1">Powered by <strong><a href="https://uhurutek.com" target="_blank" ><img src="https://uhurutek.com/assets/img/uhurutek_logo.svg" width="90" alt="Uhurutek Logo">
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
    chatPopup.classList.toggle('hidden');
    if (!chatPopup.classList.contains('hidden')) {
      document.getElementById('chat-input').focus();
    }
  }

  /* without modal click close modal */

  // document.addEventListener('click', function (event) {
  //   const chatPopup = document.getElementById('chat-popup');
  //   const chatBubble = document.getElementById('chat-bubble');

  //   if (!chatPopup.contains(event.target) && !chatBubble.contains(event.target)) {
  //     if (!chatPopup.classList.contains('hidden')) {
  //       chatPopup.classList.add('hidden');
  //     }
  //   }
  // });

  function onUserRequest(message) {
    // Display user message
    const messageElement = document.createElement('div');
    messageElement.className = 'flex justify-end mb-3';
    messageElement.innerHTML = `
      <div class="bg-gray-800 text-white rounded-lg py-2 px-4 max-w-[70%]">
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
    replyElement.className = 'flex mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" text-black rounded-lg py-2 px-4 max-w-[70%]">
       <p> ${message}</p>
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function replyFile(file) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'flex mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" text-black rounded-lg py-2 px-4 max-w-[70%]">
        <a href="${file.file}" target="_blank">${file.title}</a>
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function replyVideo(video) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'flex mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" text-black rounded-lg py-2 px-4 max-w-[70%]">
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
    replyElement.className = 'flex mb-3';

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
    replyElement.className = 'flex mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" text-black rounded-lg py-2 px-4 max-w-[70%]">
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
    replyElement.className = 'flex mb-3';
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