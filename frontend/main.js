async function uploadLog() {
  const file = document.getElementById("logFile").files[0];
  const formData = new FormData();
  formData.append("logFile", file);

  const response = await fetch('http://localhost:3000/logs/upload', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  document.getElementById("logContent").innerText = result.content;
}

async function addCase() {
  const data = {
    customer_name: document.getElementById('customer').value,
    issue: document.getElementById('issue').value,
    status: document.getElementById('status').value
  };

  await fetch('http://localhost:3000/cases', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  fetchCases();
}

async function fetchCases() {
  const res = await fetch('http://localhost:3000/cases');
  const cases = await res.json();
  const list = document.getElementById("caseList");
  list.innerHTML = '';
  cases.forEach(c => {
    const li = document.createElement("li");
    li.innerText = `${c.customer_name}: ${c.issue} (${c.status})`;
    list.appendChild(li);
  });
}

async function searchFaqs(q) {
  const res = await fetch(`http://localhost:3000/faqs/search?q=${q}`);
  const faqs = await res.json();
  const list = document.getElementById("faqList");
  list.innerHTML = '';
  faqs.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${f.question}</strong><br>${f.answer}`;
    list.appendChild(li);
  });
}

async function loadLanguage(lang) {
  const res = await fetch(`i18n/${lang}.json`);
  const dict = await res.json();
  document.title = dict.title;
  document.getElementById("add_case_title").innerText = dict.add_case;
  document.getElementById("submit_btn").innerText = dict.submit;
  document.getElementById("dashboardTitle").innerText = dict.title;
}

async function drawChart() {
  const res = await fetch('http://localhost:3000/reports/cases-by-status');
  const data = await res.json();
  const ctx = document.getElementById('statusChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.status),
      datasets: [{
        label: 'Support Cases by Status',
        data: data.map(d => d.count)
      }]
    }
  });
}

function initialize() {
  fetchCases();
  drawChart();
  loadLanguage('en');
}
