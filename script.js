const header = document.querySelector('[data-header]');
const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const planSelect = document.querySelector('[data-plan-select]');
const form = document.querySelector('[data-form]');
const formNote = document.querySelector('[data-form-note]');

const setHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

burger?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  burger.classList.toggle('is-active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    burger?.classList.remove('is-active');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
});

document.querySelectorAll('[data-plan]').forEach((button) => {
  button.addEventListener('click', () => {
    if (planSelect) {
      planSelect.value = button.dataset.plan;
    }
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || 'Спасибо';
  formNote.textContent = `${name}, заявка подготовлена. Подключите вашу CRM или почту в script.js, чтобы получать обращения.`;
  formNote.classList.add('is-success');
  form.reset();
});
