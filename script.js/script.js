// Interactive pricing table - active selection state 
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const status = document.getElementById('selectionStatus');

  function selectCard(card) {
    // clear previous selection
    cards.forEach((c) => {
        c.classList.remove('selected');
        c.setAttribute('aria-pressed', 'false');
    });
    
    // mark the clicked card as selected 
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');

    const planName = card.querySelector('h2').textContent;
    status.textContent = 'You selected the ${planName} plan.';
  }

  cards.forEach((card) => {
    // click / tap on the card or its button selects the plan
    card.addEventListener('click', () => selectCard(card));

    // keyboard support (Enter / Space) since the card has role="button"
    card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
     e.preventDefault();
     selectCard(card);
    }
    });
  });
});