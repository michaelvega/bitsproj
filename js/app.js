document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('funFactButton');
  const factDisplay = document.getElementById('factDisplay');

  const facts = [
    'I can solve a Rubik\'s cube in under 2 minutes',
    'I’ve read the entire Harry Potter series three times.',
    'I once participated in a foot race.',
    // Add more fun facts about yourself here
  ];

  button.onclick = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
  };
});
