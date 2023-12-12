(function () {
  // Inject the CSS
  const style = document.createElement('style');
  style.innerHTML = `
  .w-16 {
    width: 4rem; /* Sets width to 16 pixels */
  }
  
  .h-16 {
    height: 4rem; /* Sets height to 16 pixels */
  }
  
  .bg-gray-800 {
    background-color: #9f4923; /* Sets background color to a shade of gray */
  }
  
  .rounded-full {
    border-radius: 9999px; /* Creates a circular shape using a large border-radius */
  }
  
  .flex {
    display: flex; /* Uses flexbox for layout */
  }
  
  .items-center {
    align-items: center; /* Centers items along the cross-axis (vertically in this case) */
  }
  
  .justify-center {
    justify-content: center; /* Centers items along the main axis (horizontally in this case) */
  }
  
  .cursor-pointer {
    cursor: pointer; /* Changes cursor to a pointer on hover */
  }
  
  .text-3xl {
    font-size: 1.875rem; /* Sets font size to 3xl */
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
    width: 2.5rem; /* Sets width to 10 pixels */
  }
  
  .h-10 {
    height: 2.5rem; /* Sets height to 10 pixels */
  }
  
  .text-white {
    color: #ffffff; /* Sets text color to white */
  }
  
  .absolute {
    position: absolute; /* Positions the element absolutely */
  }
  
  .bottom-20 {
    bottom: 5rem; /* Positions the element 20 pixels from the bottom */
  }
  
  .right-0 {
    right: 0; /* Positions the element at the right side of its container */
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
    border-radius: 0.375rem; /* Applies a medium rounded border */
  }
  .shadow-md {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a shadow effect */
  }
  .flex {
    display: flex; /* Uses flexbox for layout */
  }
  .flex-col {
    flex-direction: column; /* Sets flex direction to column */
  }
  .transition-all {
    transition-property: all; /* Specifies transitioning for all properties */
  }
  .text-sm {
    font-size: 0.875rem; /* Sets font size to small */
  }
  .flex {
    display: flex; /* Uses flexbox for layout */
  }
  .justify-between {
    justify-content: space-between; /* Distributes items along the main axis, with space between */
  }
  .items-center {
    align-items: center; /* Centers items along the cross-axis (vertically in this case) */
  }
  .p-4 {
    padding: 1rem; /* Applies padding of 4 units */
  }
  .bg-gray-800 {
    background-color: #9f4923; /* Sets background color to a shade of gray */
  }
  .text-white {
    color: #ffffff; /* Sets text color to white */
  }
  .rounded-t-md {
    border-top-left-radius: 0.375rem; /* Applies medium rounded border to the top left corner */
    border-top-right-radius: 0.375rem; /* Applies medium rounded border to the top right corner */
  }
  .bg-transparent {
    background-color: transparent; /* Sets background color to transparent */
  }
  .border-none {
    border: none; /* Removes the border */
  }
  .text-white {
    color: #ffffff; /* Sets text color to white */
  }
  .cursor-pointer {
    cursor: pointer; /* Changes cursor to a pointer on hover */
  }
  .flex-1 {
    flex: 1; /* Allows the element to grow and fill available space */
  }
  .border {
    border-width: 1px; /* Applies a border with the default color */
  }
  .border-gray-300 {
    border-color: #9f4923; /* Sets border color to a shade of gray */
  }
  .rounded-md {
    border-radius: 0.375rem; /* Applies medium rounded corners */
  }
  .px-4 {
    padding-left: 1rem; /* Applies horizontal padding of 4 units */
    padding-right: 1rem;
  }
  .py-2 {
    padding-top: 0.5rem; /* Applies vertical padding of 2 units */
    padding-bottom: 0.5rem;
  }
  .outline-none {
    outline: none; /* Removes the outline when focused */
  }
  .w-3/4 {
    width: 75%; /* Sets width to 75% */
  }
  .overflow-y-auto {
    overflow-y: auto; /* Enables vertical scrollbar if needed */
  }
  .border-t {
    border-top-width: 1px; /* Applies a top border */
    border-color: #9f4923; /* Sets top border color */
  }
  .border-gray-200 {
    border-color: #9f4923; /* Sets border color to a lighter shade of gray */
  }
  .hidden {
    visibility: hidden;
  }
  .space-x-4 {
    margin-right: 1rem; /* Applies horizontal margin between child elements */
  }
  
  .items-center {
    align-items: center; /* Centers items along the cross-axis (vertically in this case) */
  }
  .text-indigo-600 {
    color: #7f9cf5; /* Sets text color to an indigo shade */
  }
  
  .flex {
    display: flex; /* Uses flexbox for layout */
  }
  
  .text-center {
    text-align: center; /* Centers text horizontally */
  }
  
  .text-xs {
    font-size: 0.75rem; /* Sets font size to extra small */
  }
  
  .pt-4 {
    padding-top: 1rem; /* Applies padding-top of 4 units */
  }
  
  .bg-gray-800 {
    background-color: #9f4923; /* Sets background color to a shade of gray */
  }
  
  .text-white {
    color: #ffffff; /* Sets text color to white */
  }
  
  .rounded-md {
    border-radius: 0.375rem; /* Applies medium rounded corners */
  }
  
  .px-4 {
    padding-left: 1rem; /* Applies horizontal padding of 4 units */
    padding-right: 1rem;
  }
  
  .py-2 {
    padding-top: 0.5rem; /* Applies vertical padding of 2 units */
    padding-bottom: 0.5rem;
  }
  
  .cursor-pointer {
    cursor: pointer; /* Changes cursor to a pointer on hover */
  }
  
  .bg-gray-200 {
    background-color: #9f4923; /* Sets background color to a light gray */
  }
  
  .text-black {
    color: #000000; /* Sets text color to black */
  }
  
  .rounded-lg {
    border-radius: 0.5rem; /* Applies large rounded corners */
  }
  
  .py-2 {
    padding-top: 0.5rem; /* Applies vertical padding of 2 units */
    padding-bottom: 0.5rem;
  }
  
  .px-4 {
    padding-left: 1rem; /* Applies horizontal padding of 4 units */
    padding-right: 1rem;
  }
  
  .max-w-[70%] {
    max-width: 70%; /* Sets maximum width to 70% */
  }
  
  .bg-gray-800 {
    background-color: #9f4923; /* Sets background color to a dark gray */
  }
  
  .text-white {
    color: #ffffff; /* Sets text color to white */
  }
  
  .flex {
    display: flex; /* Uses flexbox for layout */
  }
  
  .justify-end {
    justify-content: flex-end; /* Aligns items to the end of the main axis */
  }
  
  .mb-3 {
    margin-bottom: 0.75rem; /* Applies margin-bottom of 3 units */
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
          <span class="flex-1">Copyright by <strong><a href="https://uhurutek.com" target="_blank" >UhuruTek</a></strong></span>
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
    console.log("object");
    chatPopup.classList.toggle('hidden');
    if (!chatPopup.classList.contains('hidden')) {
      document.getElementById('chat-input').focus();
    }
  }
  document.addEventListener('click', function (event) {
    const chatPopup = document.getElementById('chat-popup');
    const chatBubble = document.getElementById('chat-bubble');

    if (!chatPopup.contains(event.target) && !chatBubble.contains(event.target)) {
      if (!chatPopup.classList.contains('hidden')) {
        chatPopup.classList.add('hidden');
      }
    }
  });

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
    const endpoint = 'https://bp.uhurutek.com/api/v1/bots/uhurubot/converse/mahabubu470@gmail.com';
    const data = {
      type: 'text',
      text: message
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const responses = data.responses;
        responses.forEach(response => {
          if (response.type === 'text') {
            reply(response.text);
          } else {
            reply("Bang hoi chua hoc cach tra loi cau hoi nay.");
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Reply to the user
    // setTimeout(function () {
    //   reply('Hello! This is a sample reply.');
    // }, 1000);
  }

  function reply(message) {
    const chatMessages = document.getElementById('chat-messages');
    const replyElement = document.createElement('div');
    replyElement.className = 'flex mb-3';
    replyElement.innerHTML = `
      <div style="border: 1px solid #9f4923;" class=" text-black rounded-lg py-2 px-4 max-w-[70%]">
        ${message}
      </div>
    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
})();