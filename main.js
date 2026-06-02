document.documentElement.classList.remove('no-js');

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

const checkoutForm = document.querySelector('[data-checkout-form]');
if (checkoutForm) {
  const requiredChecks = checkoutForm.querySelectorAll('[data-required-check]');
  const submit = checkoutForm.querySelector('[data-submit-order]');
  const note = checkoutForm.querySelector('[data-checkout-note]');
  const validate = () => {
    const ok = Array.from(requiredChecks).every(c => c.checked);
    submit.disabled = !ok;
    submit.classList.toggle('btn-disabled', !ok);
    if (note) note.textContent = ok ? 'Alle Pflichtbestätigungen sind gesetzt. Im Livebetrieb würde jetzt der Zahlungsanbieter geöffnet.' : 'Bitte bestätige zuerst alle Pflichtfelder.';
  };
  requiredChecks.forEach(c => c.addEventListener('change', validate));
  validate();

  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Demo: Hier muss dein echter Zahlungsanbieter-Link rein, z. B. elopage, CopeCart, Stripe Payment Link oder Shopify Checkout.');
  });
}

const withdrawalForm = document.querySelector('[data-withdrawal-form]');
if (withdrawalForm) {
  const preview = document.querySelector('[data-withdrawal-preview]');
  withdrawalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(withdrawalForm);
    const name = data.get('name') || '—';
    const order = data.get('order') || '—';
    const email = data.get('email') || '—';
    preview.innerHTML = `
      <div class="success-box">
        <strong>Demo-Bestätigung vorbereitet.</strong><br>
        Name: ${String(name).replace(/[<>]/g, '')}<br>
        Bestellung: ${String(order).replace(/[<>]/g, '')}<br>
        E-Mail: ${String(email).replace(/[<>]/g, '')}<br><br>
        Im Livebetrieb muss hier automatisch eine elektronische Eingangsbestätigung mit Datum und Uhrzeit versendet werden.
      </div>`;
  });
}
