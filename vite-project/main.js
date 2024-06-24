const form = document.forms.namedItem("regForm");
const users = [];

form.onsubmit = (event) => {
  event.preventDefault();
  const fm = new FormData(form);

  const data = {
    id: crypto.randomUUID(),
    email: fm.get('email'),
    name: fm.get('name'),
    surname: fm.get('surname'),
    password: fm.get('password')
  };

  fetch('http://localhost:8080/users', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    users.push(data);
    window.location.href = 'signin.html';
  })

  form.reset();
};
