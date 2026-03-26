// BharatNotes Prelims Quiz Engine
// Modes: sprint (10 Qs, 10 min), full (100 Qs, 120 min), pyq, topic
(function () {
  const STORAGE_KEY = 'bharatnotes_prelims';
  const container = document.getElementById('quiz-container');
  const resultsEl = document.getElementById('quiz-results');
  if (!container) return;

  // ── Sample question bank (replace with JSON data file later) ──
  const QUESTIONS = [
    {
      q: "Which Article of the Indian Constitution deals with the amendment procedure?",
      a: ["Article 352", "Article 368", "Article 370", "Article 356"],
      correct: 1,
      explain: "Article 368 deals with the power of Parliament to amend the Constitution and the procedure therefor.",
      subject: "polity"
    },
    {
      q: "The Panchayati Raj system was constitutionalised by which Amendment?",
      a: ["71st Amendment", "72nd Amendment", "73rd Amendment", "74th Amendment"],
      correct: 2,
      explain: "The 73rd Constitutional Amendment Act, 1992 gave constitutional status to Panchayati Raj institutions by adding Part IX to the Constitution.",
      subject: "polity"
    },
    {
      q: "Which of the following is NOT a Fundamental Right under the Indian Constitution?",
      a: ["Right to Equality", "Right to Property", "Right to Freedom of Religion", "Right against Exploitation"],
      correct: 1,
      explain: "Right to Property was removed from Fundamental Rights by the 44th Amendment (1978). It is now a legal right under Article 300A.",
      subject: "polity"
    },
    {
      q: "The concept of Directive Principles of State Policy was borrowed from the Constitution of which country?",
      a: ["USA", "UK", "Ireland", "Australia"],
      correct: 2,
      explain: "The Directive Principles of State Policy (Part IV) were inspired by the Irish Constitution, which in turn drew from the Spanish Constitution.",
      subject: "polity"
    },
    {
      q: "Which Schedule of the Indian Constitution contains the list of languages recognised by the Constitution?",
      a: ["Sixth Schedule", "Seventh Schedule", "Eighth Schedule", "Ninth Schedule"],
      correct: 2,
      explain: "The Eighth Schedule originally contained 14 languages; currently it lists 22 languages after additions by various amendments.",
      subject: "polity"
    },
    {
      q: "The Reserve Bank of India was established in which year?",
      a: ["1930", "1935", "1947", "1949"],
      correct: 1,
      explain: "The Reserve Bank of India was established on April 1, 1935, based on the recommendations of the Hilton Young Commission (1926).",
      subject: "economy"
    },
    {
      q: "Which of the following is the largest component of India's GDP by sector?",
      a: ["Agriculture", "Industry", "Services", "Manufacturing"],
      correct: 2,
      explain: "The services sector contributes approximately 54% of India's GDP, making it the largest component, followed by industry (~26%) and agriculture (~18%).",
      subject: "economy"
    },
    {
      q: "The Chipko Movement originated in which state?",
      a: ["Himachal Pradesh", "Uttarakhand", "Rajasthan", "Madhya Pradesh"],
      correct: 1,
      explain: "The Chipko Movement started in 1973 in Chamoli district of Uttarakhand (then part of Uttar Pradesh). It was led by Sunderlal Bahuguna and Chandi Prasad Bhatt.",
      subject: "environment"
    },
    {
      q: "Which protocol is associated with the phasedown of hydrofluorocarbons (HFCs)?",
      a: ["Kyoto Protocol", "Montreal Protocol (Kigali Amendment)", "Paris Agreement", "Basel Convention"],
      correct: 1,
      explain: "The Kigali Amendment (2016) to the Montreal Protocol addresses the phasedown of HFCs, which are potent greenhouse gases used in refrigeration and air conditioning.",
      subject: "environment"
    },
    {
      q: "ISRO's launch vehicle used for placing heavy satellites in Geostationary Transfer Orbit is:",
      a: ["PSLV", "GSLV Mk III (LVM3)", "SLV-3", "ASLV"],
      correct: 1,
      explain: "GSLV Mk III, now renamed LVM3 (Launch Vehicle Mark 3), is ISRO's heaviest rocket capable of placing 4-tonne class satellites in GTO and has been used for Chandrayaan missions.",
      subject: "science-tech"
    },
    {
      q: "The Battle of Plassey was fought in which year?",
      a: ["1757", "1764", "1857", "1799"],
      correct: 0,
      explain: "The Battle of Plassey was fought on 23 June 1757 between the British East India Company (led by Robert Clive) and the Nawab of Bengal (Siraj ud-Daulah).",
      subject: "history-culture"
    },
    {
      q: "Which Indian classical dance form originated in Kerala?",
      a: ["Bharatanatyam", "Kathakali", "Odissi", "Manipuri"],
      correct: 1,
      explain: "Kathakali is a classical dance-drama form that originated in Kerala. It is known for elaborate costumes, detailed gestures, and well-defined body movements.",
      subject: "history-culture"
    },
    {
      q: "The Tropic of Cancer passes through how many Indian states?",
      a: ["6", "7", "8", "9"],
      correct: 2,
      explain: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.",
      subject: "geography"
    },
    {
      q: "Which ocean current is responsible for the warm and humid climate of the western coast of Europe?",
      a: ["Labrador Current", "Gulf Stream (North Atlantic Drift)", "Canary Current", "Benguela Current"],
      correct: 1,
      explain: "The Gulf Stream and its extension, the North Atlantic Drift, carry warm water from the Gulf of Mexico to the western coast of Europe, giving it a milder climate than expected for its latitude.",
      subject: "geography"
    },
    {
      q: "The United Nations Security Council has how many permanent members?",
      a: ["4", "5", "6", "10"],
      correct: 1,
      explain: "The UNSC has 5 permanent members (P5): USA, UK, France, Russia, and China. They hold veto power. There are also 10 non-permanent members elected for 2-year terms.",
      subject: "international-relations"
    }
  ];

  let state = {
    mode: null,
    questions: [],
    current: 0,
    answers: {},
    startTime: null,
    timerInterval: null,
    timeLimit: 0
  };

  // ── Load saved stats ──
  function getStats() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"total":0,"correct":0,"subjects":{}}');
  }
  function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  // ── Render stats dashboard ──
  function renderStats() {
    const stats = getStats();
    const el = document.getElementById('prelims-stats');
    if (!el) return;
    const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
    el.innerHTML = `
      <div class="card" style="text-align:center;">
        <div style="font-size:var(--text-3xl); font-weight:var(--font-extrabold); color:var(--color-brand);">${stats.total}</div>
        <div style="font-size:var(--text-sm); color:var(--color-text-muted);">Questions Attempted</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:var(--text-3xl); font-weight:var(--font-extrabold); color:var(--color-accent);">${accuracy}%</div>
        <div style="font-size:var(--text-sm); color:var(--color-text-muted);">Overall Accuracy</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:var(--text-3xl); font-weight:var(--font-extrabold); color:#16a34a;">${stats.correct}</div>
        <div style="font-size:var(--text-sm); color:var(--color-text-muted);">Correct Answers</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:var(--text-3xl); font-weight:var(--font-extrabold); color:var(--color-text-muted);">${stats.total - stats.correct}</div>
        <div style="font-size:var(--text-sm); color:var(--color-text-muted);">Incorrect</div>
      </div>
    `;

    // Update per-subject accuracy bars
    document.querySelectorAll('.topic-quiz-card').forEach(card => {
      const subj = card.dataset.subject;
      const sd = stats.subjects[subj];
      const scoreEl = card.querySelector('.topic-score');
      const barEl = card.querySelector('.accuracy-bar');
      if (sd && sd.total > 0) {
        const pct = Math.round((sd.correct / sd.total) * 100);
        if (scoreEl) scoreEl.textContent = `${pct}% (${sd.total} Qs)`;
        if (barEl) barEl.style.width = pct + '%';
      }
    });
  }

  // ── Shuffle array ──
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Start quiz ──
  function startQuiz(mode, subject) {
    let pool = QUESTIONS;
    if (subject) pool = pool.filter(q => q.subject === subject);
    pool = shuffle(pool);

    let count = 10, timeMin = 10;
    if (mode === 'full') { count = Math.min(pool.length, 100); timeMin = 120; }
    if (mode === 'pyq') { count = Math.min(pool.length, 20); timeMin = 24; }

    state.mode = mode;
    state.questions = pool.slice(0, count);
    state.current = 0;
    state.answers = {};
    state.startTime = Date.now();
    state.timeLimit = timeMin * 60 * 1000;

    // Hide landing, show quiz
    document.querySelectorAll('section > .container > div:not(#quiz-container):not(#quiz-results)').forEach(el => el.hidden = true);
    container.hidden = false;
    resultsEl.hidden = true;

    const modeLabel = document.getElementById('quiz-mode-label');
    if (mode === 'sprint') modeLabel.textContent = '10-Question Sprint';
    else if (mode === 'full') modeLabel.textContent = 'Full Mock Test';
    else if (mode === 'pyq') modeLabel.textContent = 'PYQ Practice';
    else modeLabel.textContent = subject ? subject.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Practice';

    startTimer();
    renderQuestion();
  }

  // ── Timer ──
  function startTimer() {
    const timerEl = document.getElementById('quiz-timer');
    const barEl = document.getElementById('timer-bar');

    state.timerInterval = setInterval(() => {
      const elapsed = Date.now() - state.startTime;
      const remaining = Math.max(0, state.timeLimit - elapsed);
      const mins = Math.floor(remaining / 60000);
      const secs = Math.floor((remaining % 60000) / 1000);
      timerEl.textContent = `${mins}:${String(secs).padStart(2, '0')}`;
      barEl.style.width = ((remaining / state.timeLimit) * 100) + '%';

      if (remaining <= 0) {
        clearInterval(state.timerInterval);
        endQuiz();
      }
    }, 1000);
  }

  // ── Render question ──
  function renderQuestion() {
    const q = state.questions[state.current];
    const progress = document.getElementById('quiz-progress');
    progress.textContent = `Question ${state.current + 1} of ${state.questions.length}`;

    document.getElementById('q-text').textContent = q.q;
    const optContainer = document.getElementById('q-options');
    optContainer.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];
    q.a.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.style.cssText = 'display:block; width:100%; text-align:left; padding:var(--space-3) var(--space-4); margin-bottom:var(--space-2); border:2px solid var(--color-border); border-radius:var(--radius-md); background:var(--color-surface); cursor:pointer; font-size:var(--text-sm); transition:all 150ms;';
      btn.innerHTML = `<strong>${labels[i]}.</strong> ${opt}`;

      // Restore selection
      if (state.answers[state.current] === i) {
        btn.style.borderColor = 'var(--color-brand)';
        btn.style.background = '#f0fdf4';
      }

      btn.addEventListener('click', () => selectAnswer(i));
      optContainer.appendChild(btn);
    });

    // Feedback
    document.getElementById('quiz-feedback').hidden = true;

    // Nav buttons
    document.getElementById('q-prev').hidden = state.current === 0;
    document.getElementById('q-next').textContent = state.current === state.questions.length - 1 ? 'Finish' : 'Next';
  }

  // ── Select answer ──
  function selectAnswer(idx) {
    state.answers[state.current] = idx;
    const q = state.questions[state.current];

    // Highlight options
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((btn, i) => {
      btn.style.borderColor = 'var(--color-border)';
      btn.style.background = 'var(--color-surface)';
      btn.style.pointerEvents = 'none';

      if (i === q.correct) {
        btn.style.borderColor = '#16a34a';
        btn.style.background = '#f0fdf4';
      }
      if (i === idx && i !== q.correct) {
        btn.style.borderColor = '#ef4444';
        btn.style.background = '#fef2f2';
      }
    });

    // Show feedback
    const fb = document.getElementById('quiz-feedback');
    fb.hidden = false;
    const isCorrect = idx === q.correct;
    fb.style.background = isCorrect ? '#f0fdf4' : '#fef2f2';
    fb.style.borderLeft = `4px solid ${isCorrect ? '#16a34a' : '#ef4444'}`;
    fb.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong><br><span style="font-size:var(--text-sm);">${q.explain}</span>`;
  }

  // ── Navigation ──
  document.getElementById('q-next').addEventListener('click', () => {
    if (state.current < state.questions.length - 1) {
      state.current++;
      renderQuestion();
    } else {
      endQuiz();
    }
  });

  document.getElementById('q-prev').addEventListener('click', () => {
    if (state.current > 0) {
      state.current--;
      renderQuestion();
    }
  });

  document.getElementById('quiz-quit').addEventListener('click', endQuiz);

  // ── End quiz ──
  function endQuiz() {
    clearInterval(state.timerInterval);
    container.hidden = true;
    resultsEl.hidden = false;

    const total = state.questions.length;
    let correct = 0;
    const stats = getStats();

    state.questions.forEach((q, i) => {
      const ans = state.answers[i];
      const isCorrect = ans === q.correct;
      if (isCorrect) correct++;

      // Update per-subject stats
      if (ans !== undefined) {
        stats.total++;
        if (isCorrect) stats.correct++;

        if (!stats.subjects[q.subject]) stats.subjects[q.subject] = { total: 0, correct: 0 };
        stats.subjects[q.subject].total++;
        if (isCorrect) stats.subjects[q.subject].correct++;
      }
    });

    saveStats(stats);

    const elapsed = Date.now() - state.startTime;
    const mins = Math.floor(elapsed / 60000);
    const secs = Math.floor((elapsed % 60000) / 1000);

    // Prelims scoring: +2 correct, -0.66 wrong
    const attempted = Object.keys(state.answers).length;
    const wrong = attempted - correct;
    const score = (correct * 2) - (wrong * 0.66);
    const maxScore = total * 2;

    document.getElementById('result-score').textContent = `${score.toFixed(1)}/${maxScore}`;
    document.getElementById('result-accuracy').textContent = attempted ? Math.round((correct / attempted) * 100) + '%' : '0%';
    document.getElementById('result-time').textContent = `${mins}m ${secs}s`;

    // Review
    const reviewEl = document.getElementById('result-review');
    let reviewHTML = '<h3 style="font-family:var(--font-serif); color:var(--color-brand-dark); margin-bottom:var(--space-4);">Review</h3>';
    state.questions.forEach((q, i) => {
      const ans = state.answers[i];
      const isCorrect = ans === q.correct;
      const icon = ans === undefined ? '⬜' : (isCorrect ? '✅' : '❌');
      reviewHTML += `<div style="padding:var(--space-2) 0; border-bottom:1px solid var(--color-border); font-size:var(--text-sm);">
        <span>${icon}</span> <strong>Q${i + 1}:</strong> ${q.q.substring(0, 80)}...
        ${!isCorrect && ans !== undefined ? `<br><span style="color:#ef4444; font-size:var(--text-xs);">${q.explain}</span>` : ''}
      </div>`;
    });
    reviewEl.innerHTML = reviewHTML;
  }

  // ── Start buttons ──
  document.querySelectorAll('.start-quiz').forEach(btn => {
    btn.addEventListener('click', () => {
      startQuiz(btn.dataset.mode, btn.dataset.subject || null);
    });
  });

  // ── Init ──
  renderStats();
})();
