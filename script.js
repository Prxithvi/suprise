let currentPage = 1;

// Function to show the next page
function showNextPage() {
  document.getElementById(`page${currentPage}`).classList.add('hidden');
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.remove('hidden');
}

// Function to handle the "Yes" button
function handleYes() {
  alert('Yay! I’m so happy you said yes! 🌸');
}

// Function to handle the "No" button
function handleNo() {
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');

  // Move the "No" button randomly
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80}%`;
  noButton.style.top = `${Math.random() * 80}%`;

  // Add more "Yes" buttons
  const newYesButton = yesButton.cloneNode(true);
  document.getElementById('page8').appendChild(newYesButton);
}

// Create falling daisies
function createDaisies() {
  const daisyContainer = document.getElementById('daisies');
  for (let i = 0; i < 50; i++) {
    const daisy = document.createElement('div');
    daisy.classList.add('daisy');
    daisy.style.left = `${Math.random() * 100}vw`;
    daisy.style.animationDuration = `${Math.random() * 5 + 5}s`;
    daisyContainer.appendChild(daisy);
  }
}

// Start the falling daisies
createDaisies();
