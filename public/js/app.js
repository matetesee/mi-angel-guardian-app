(function () {
  "use strict";

  var STORAGE_KEY = "maga_state_v1";

  var ANGELS = {
    miguel: {
      name: "Arcángel Miguel",
      virtue: "Protección y coraje",
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="#FFD700" d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z"/><path fill="#7A00A8" d="M12 5 6 8v4c0 3.6 2.7 6.3 6 7.3 3.3-1 6-3.7 6-7.3V8l-6-3Z"/></svg>',
      message: "Tu ángel es un guerrero de luz que camina delante tuyo abriendo paso. Cuando sientas miedo o dudes de tu fuerza, es momento de recordar que ya venciste batallas antes y volverás a hacerlo.",
      prayer: "Arcángel Miguel, cubrime con tu espada de luz, aleja de mi camino todo lo que quiera detenerme y dame el valor para avanzar un paso más hoy.",
    },
    gabriel: {
      name: "Arcángel Gabriel",
      virtue: "Claridad y mensajes",
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="#F25FB9" d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8l-5 4V6a1 1 0 0 1 1-1Z"/><circle cx="9" cy="10" r="1.2" fill="#fff"/><circle cx="13" cy="10" r="1.2" fill="#fff"/><circle cx="17" cy="10" r="1.2" fill="#fff"/></svg>',
      message: "Tu ángel trabaja como mensajero: te acerca señales, ideas claras y palabras en el momento justo. Prestá atención a lo que se repite frente a tus ojos, ahí está la respuesta que buscabas.",
      prayer: "Arcángel Gabriel, ayudame a escuchar con el corazón abierto y a reconocer los mensajes que me enviás cada día, por más pequeños que parezcan.",
    },
    rafael: {
      name: "Arcángel Rafael",
      virtue: "Sanación y calma",
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="#74bb67" d="M12 21s-7-4.35-9.3-9C1.2 8.7 3 5 6.7 5c2 0 3.5 1.3 4.3 2.6C11.8 6.3 13.3 5 15.3 5 19 5 20.8 8.7 19.3 12 17 16.65 12 21 12 21Z"/><path fill="#fff" d="M11 9h2v3h3v2h-3v3h-2v-3H8v-2h3V9Z"/></svg>',
      message: "Tu ángel envuelve tus heridas -del cuerpo y del alma- con una luz esmeralda que calma antes de sanar. Date permiso de descansar; no todo se resuelve empujando, a veces se resuelve soltando.",
      prayer: "Arcángel Rafael, poné tus manos de luz sobre lo que en mí necesita sanar y dame la paciencia para permitir que el proceso de curación siga su tiempo.",
    },
    uriel: {
      name: "Arcángel Uriel",
      virtue: "Sabiduría interior",
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><circle cx="12" cy="9" r="5" fill="#FFD700"/><path fill="#7A00A8" d="M12 2v2M12 14v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 9h2M20 9h2M4.9 13.1l1.4-1.4M17.7 4.3l1.4-1.4" stroke="#7A00A8" stroke-width="1.4" stroke-linecap="round"/><path fill="#7A00A8" d="M8 20h8l-1.5-3h-5L8 20Z"/></svg>',
      message: "Tu ángel ilumina el camino con destellos de claridad repentina. Las respuestas que necesitás ya están dentro tuyo: confía en esa voz serena que aparece cuando el ruido de afuera se detiene.",
      prayer: "Arcángel Uriel, encendé en mí la luz de la sabiduría para reconocer la verdad detrás de cada situación y tomar decisiones desde la calma, no desde el miedo.",
    },
    chamuel: {
      name: "Arcángel Chamuel",
      virtue: "Amor y vínculos",
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="#F25FB9" d="M12 20s-7.5-4.6-9.5-9.4C1.3 7.1 3.4 4 6.8 4c2 0 3.5 1.1 4.2 2.4C11.7 5.1 13.2 4 15.2 4c3.4 0 5.5 3.1 4.3 6.6C17.5 15.4 12 20 12 20Z"/></svg>',
      message: "Tu ángel teje puentes entre corazones. Te acompaña para sanar relaciones, atraer vínculos sinceros y, sobre todo, recordarte que merecés amor -empezando por el que te das a vos mismo.",
      prayer: "Arcángel Chamuel, ayudame a ver con ojos de amor a quienes me rodean y a mí mismo, y guía hacia mi vida a las personas que vienen a sumar paz.",
    },
    jofiel: {
      name: "Arcángel Jofiel",
      virtue: "Belleza y creatividad",
      icon: '<svg viewBox="0 0 24 24" width="40" height="40"><path fill="#DA43F2" d="m12 2 2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4L12 2Z"/></svg>',
      message: "Tu ángel es artista y ve la belleza incluso en lo que parece un caos. Te inspira para crear, embellecer tu entorno y mirar tu propia historia con ojos más amables.",
      prayer: "Arcángel Jofiel, ayudame a ver belleza donde antes veía dificultad y a expresar con libertad todo lo creativo que llevo dentro.",
    },
  };

  var QUESTIONS = [
    {
      q: "Cuando enfrentás un problema grande, ¿qué es lo primero que necesitás?",
      options: [
        { t: "Valor para no achicarme", icon: "fa-shield-halved", angel: "miguel" },
        { t: "Entender qué me quiere decir la situación", icon: "fa-comment-dots", angel: "gabriel" },
        { t: "Calma para no reaccionar de más", icon: "fa-leaf", angel: "rafael" },
        { t: "Claridad para decidir bien", icon: "fa-lightbulb", angel: "uriel" },
      ],
    },
    {
      q: "¿Qué te cuesta más soltar?",
      options: [
        { t: "El control de lo que pasa a mi alrededor", icon: "fa-hand", angel: "miguel" },
        { t: "Vínculos que ya no me hacen bien", icon: "fa-heart-crack", angel: "chamuel" },
        { t: "El rencor o el dolor pasado", icon: "fa-heart-pulse", angel: "rafael" },
        { t: "La necesidad de que todo salga perfecto", icon: "fa-paintbrush", angel: "jofiel" },
      ],
    },
    {
      q: "¿Cómo sabés que algo es importante para vos?",
      options: [
        { t: "Siento un impulso fuerte de defenderlo", icon: "fa-fist-raised", angel: "miguel" },
        { t: "Aparecen señales una y otra vez", icon: "fa-signs-post", angel: "gabriel" },
        { t: "Me trae paz en vez de ansiedad", icon: "fa-spa", angel: "rafael" },
        { t: "Lo siento con el corazón, no con la cabeza", icon: "fa-heart", angel: "chamuel" },
      ],
    },
    {
      q: "Elegí la palabra que más te representa hoy",
      options: [
        { t: "Fuerza", icon: "fa-bolt", angel: "miguel" },
        { t: "Sabiduría", icon: "fa-brain", angel: "uriel" },
        { t: "Ternura", icon: "fa-heart", angel: "chamuel" },
        { t: "Inspiración", icon: "fa-star", angel: "jofiel" },
      ],
    },
    {
      q: "¿Qué tipo de mensajes sentís que recibís más seguido?",
      options: [
        { t: "Números o señales repetidas", icon: "fa-hashtag", angel: "gabriel" },
        { t: "Sueños que se sienten reales", icon: "fa-moon", angel: "uriel" },
        { t: "Una sensación física de alivio", icon: "fa-wind", angel: "rafael" },
        { t: "Personas que aparecen justo a tiempo", icon: "fa-people-arrows", angel: "chamuel" },
      ],
    },
    {
      q: "¿Qué área de tu vida sentís que más necesita ayuda ahora?",
      options: [
        { t: "Mi salud o descanso", icon: "fa-bed", angel: "rafael" },
        { t: "Mis relaciones y el amor", icon: "fa-people-roof", angel: "chamuel" },
        { t: "Mis decisiones y rumbo", icon: "fa-map-signs", angel: "uriel" },
        { t: "Mi seguridad y protección", icon: "fa-shield-heart", angel: "miguel" },
      ],
    },
    {
      q: "¿Cómo te recargás cuando estás agotado?",
      options: [
        { t: "Haciendo algo creativo con las manos", icon: "fa-palette", angel: "jofiel" },
        { t: "En silencio, meditando o rezando", icon: "fa-hands-praying", angel: "uriel" },
        { t: "Hablando con alguien de confianza", icon: "fa-comments", angel: "chamuel" },
        { t: "Descansando sin culpa", icon: "fa-mug-hot", angel: "rafael" },
      ],
    },
    {
      q: "Si tu ángel te mandara una sola señal hoy, ¿cuál te gustaría recibir?",
      options: [
        { t: "Una pluma blanca en mi camino", icon: "fa-feather", angel: "gabriel" },
        { t: "Una sensación repentina de fuerza", icon: "fa-hand-fist", angel: "miguel" },
        { t: "Un momento de belleza inesperada", icon: "fa-gem", angel: "jofiel" },
        { t: "Un abrazo que no esperaba", icon: "fa-people-arrows", angel: "chamuel" },
      ],
    },
  ];

  var DAILY_MESSAGES = [
    "Hoy no caminás solo: hay una luz invisible ordenando cada paso a tu favor.",
    "Lo que estás pidiendo ya está en camino, aunque todavía no lo veas.",
    "Soltá el control por un momento; hay fuerzas de luz trabajando por vos.",
    "Tu ángel te recuerda: descansar también es un acto de fe.",
    "Cada señal que ignorás como casualidad es, en realidad, una respuesta.",
    "Hoy es un buen día para perdonar, empezando por vos mismo.",
    "La protección que pediste ya te está rodeando en este momento.",
    "No necesitás tener todas las respuestas hoy, solo dar el próximo paso.",
    "Confía: lo que se fue estaba dejando espacio para algo mejor.",
    "Tu corazón sabe el camino incluso cuando tu mente duda.",
    "Hay un mensaje esperándote en algo pequeño que verás hoy. Prestá atención.",
    "Sos más fuerte que la tormenta que estás cruzando ahora mismo.",
    "Pedí ayuda sin culpa; hasta la luz necesita quien la refleje.",
    "Hoy tu ángel te invita a mirar con más ternura tu propia historia.",
    "Todo lo que sembraste con amor está por florecer.",
  ];

  var state = loadState();

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { answers: [], angelKey: null, favorites: [], lastDailyIndex: null, lastDailyDate: null };
      var parsed = JSON.parse(raw);
      parsed.answers = parsed.answers || [];
      parsed.favorites = parsed.favorites || [];
      return parsed;
    } catch (e) {
      return { answers: [], angelKey: null, favorites: [], lastDailyIndex: null, lastDailyDate: null };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  // ---------- Navigation ----------
  var screens = document.querySelectorAll(".screen");
  var tabButtons = document.querySelectorAll(".tab-btn");

  function showScreen(name) {
    screens.forEach(function (s) {
      s.hidden = s.id !== "screen-" + name;
    });
    tabButtons.forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === name);
    });
    if (name === "home") renderHome();
    if (name === "angel") renderAngel();
    if (name === "messages") renderMessages();
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.dataset.tab === "quiz") {
        startQuiz();
      } else {
        showScreen(btn.dataset.tab);
      }
    });
  });

  document.getElementById("btn-start-quiz").addEventListener("click", startQuiz);
  document.getElementById("btn-empty-start").addEventListener("click", startQuiz);
  document.getElementById("btn-retake").addEventListener("click", startQuiz);

  document.getElementById("btn-reset").addEventListener("click", function () {
    if (confirm("¿Reiniciar tu perfil y borrar tu ángel guardián guardado?")) {
      state = { answers: [], angelKey: null, favorites: [], lastDailyIndex: null, lastDailyDate: null };
      saveState();
      showScreen("home");
    }
  });

  // ---------- Home ----------
  function renderHome() {
    var startBtn = document.getElementById("btn-start-quiz");
    startBtn.innerHTML = state.angelKey
      ? 'Repetir el test <i class="fa-solid fa-rotate"></i>'
      : 'Descubrir mi ángel <i class="fa-solid fa-arrow-right"></i>';

    var grid = document.getElementById("home-status-grid");
    grid.innerHTML = "";

    var angelTile = document.createElement("div");
    angelTile.className = "status-tile";
    if (state.angelKey) {
      var a = ANGELS[state.angelKey];
      angelTile.innerHTML = '<i class="fa-solid fa-feather-pointed"></i><span class="tile-title">' + a.name + "</span><span class=\"tile-sub\">Tu ángel guardián</span>";
      angelTile.addEventListener("click", function () { showScreen("angel"); });
    } else {
      angelTile.innerHTML = '<i class="fa-solid fa-feather-pointed"></i><span class="tile-title">Sin descubrir</span><span class="tile-sub">Hacé el test</span>';
      angelTile.addEventListener("click", startQuiz);
    }

    var msgTile = document.createElement("div");
    msgTile.className = "status-tile";
    var favWord = state.favorites.length === 1 ? "guardado" : "guardados";
    msgTile.innerHTML = '<i class="fa-solid fa-envelope-open-text"></i><span class="tile-title">Mensaje del día</span><span class="tile-sub">' + state.favorites.length + " " + favWord + "</span>";
    msgTile.addEventListener("click", function () { showScreen("messages"); });

    grid.appendChild(angelTile);
    grid.appendChild(msgTile);
  }

  // ---------- Quiz ----------
  var quizIndex = 0;
  var quizScores = {};

  function startQuiz() {
    quizIndex = 0;
    quizScores = {};
    Object.keys(ANGELS).forEach(function (k) { quizScores[k] = 0; });
    showScreen("quiz");
    renderQuestion();
  }

  document.getElementById("btn-quiz-back").addEventListener("click", function () {
    if (quizIndex === 0) {
      showScreen("home");
    } else {
      quizIndex--;
      renderQuestion();
    }
  });

  function renderQuestion() {
    var total = QUESTIONS.length;
    var item = QUESTIONS[quizIndex];
    document.getElementById("quiz-step-label").textContent = (quizIndex + 1) + "/" + total;
    document.getElementById("quiz-progress-fill").style.width = Math.round(((quizIndex) / total) * 100) + "%";
    document.getElementById("quiz-question").textContent = item.q;

    var wrap = document.getElementById("quiz-options");
    wrap.innerHTML = "";
    item.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.innerHTML = '<i class="fa-solid ' + opt.icon + '"></i><span>' + opt.t + "</span>";
      btn.addEventListener("click", function () { answerQuestion(opt.angel); });
      wrap.appendChild(btn);
    });
  }

  function answerQuestion(angelKey) {
    quizScores[angelKey] = (quizScores[angelKey] || 0) + 1;
    quizIndex++;
    if (quizIndex >= QUESTIONS.length) {
      document.getElementById("quiz-progress-fill").style.width = "100%";
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  var LOADING_PHRASES = [
    "Conectando con tu ángel...",
    "Leyendo tus respuestas...",
    "Interpretando las señales...",
    "Alineando tu energía...",
  ];

  function finishQuiz() {
    showScreen("loading");
    var phraseEl = document.getElementById("loading-text");
    var i = 0;
    var interval = setInterval(function () {
      i = (i + 1) % LOADING_PHRASES.length;
      phraseEl.textContent = LOADING_PHRASES[i];
    }, 700);

    setTimeout(function () {
      clearInterval(interval);
      var best = null, bestScore = -1;
      Object.keys(quizScores).forEach(function (k) {
        if (quizScores[k] > bestScore) { bestScore = quizScores[k]; best = k; }
      });
      state.angelKey = best;
      state.answers = quizScores;
      saveState();
      showScreen("angel");
    }, 2400);
  }

  // ---------- Angel result ----------
  function renderAngel() {
    var empty = document.getElementById("angel-empty");
    var result = document.getElementById("angel-result");
    if (!state.angelKey) {
      empty.hidden = false;
      result.hidden = true;
      return;
    }
    empty.hidden = true;
    result.hidden = false;
    var a = ANGELS[state.angelKey];
    document.getElementById("angel-symbol").innerHTML = a.icon;
    document.getElementById("angel-name").textContent = a.name;
    document.getElementById("angel-virtue").textContent = a.virtue;
    document.getElementById("angel-message").textContent = a.message;
    document.getElementById("angel-prayer").textContent = a.prayer;
    document.getElementById("angel-affirmation").textContent = getDailyMessage().text;
  }

  // ---------- Messages ----------
  function dateKey(d) {
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  function getDailyMessage() {
    var today = dateKey(new Date());
    if (state.lastDailyDate === today && state.lastDailyIndex != null) {
      return { index: state.lastDailyIndex, text: DAILY_MESSAGES[state.lastDailyIndex] };
    }
    var idx = Math.floor(Math.random() * DAILY_MESSAGES.length);
    state.lastDailyDate = today;
    state.lastDailyIndex = idx;
    saveState();
    return { index: idx, text: DAILY_MESSAGES[idx] };
  }

  function shuffleDailyMessage() {
    var idx;
    do {
      idx = Math.floor(Math.random() * DAILY_MESSAGES.length);
    } while (idx === state.lastDailyIndex && DAILY_MESSAGES.length > 1);
    state.lastDailyIndex = idx;
    state.lastDailyDate = dateKey(new Date());
    saveState();
    renderMessages();
  }

  function renderMessages() {
    var current = getDailyMessage();
    document.getElementById("daily-message-text").textContent = current.text;
    var favBtn = document.getElementById("btn-fav-daily");
    var isFav = state.favorites.indexOf(current.index) !== -1;
    favBtn.classList.toggle("active", isFav);
    favBtn.innerHTML = isFav ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';

    document.getElementById("fav-count").textContent = state.favorites.length ? "(" + state.favorites.length + ")" : "";

    var favList = document.getElementById("fav-list");
    var hint = document.getElementById("fav-empty-hint");
    favList.innerHTML = "";
    if (state.favorites.length === 0) {
      hint.hidden = false;
    } else {
      hint.hidden = true;
      state.favorites.forEach(function (idx) {
        var row = document.createElement("div");
        row.className = "fav-item";
        row.innerHTML = "<p>" + DAILY_MESSAGES[idx] + '</p><button aria-label="Quitar"><i class="fa-solid fa-trash"></i></button>';
        row.querySelector("button").addEventListener("click", function () {
          state.favorites = state.favorites.filter(function (v) { return v !== idx; });
          saveState();
          renderMessages();
        });
        favList.appendChild(row);
      });
    }
  }

  document.getElementById("btn-new-message").addEventListener("click", shuffleDailyMessage);

  document.getElementById("btn-fav-daily").addEventListener("click", function () {
    var current = getDailyMessage();
    var pos = state.favorites.indexOf(current.index);
    if (pos === -1) state.favorites.push(current.index);
    else state.favorites.splice(pos, 1);
    saveState();
    renderMessages();
  });

  document.querySelectorAll(".msg-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".msg-tab").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var which = tab.dataset.msgtab;
      document.getElementById("messages-daily").hidden = which !== "daily";
      document.getElementById("messages-fav").hidden = which !== "fav";
      if (which === "fav") renderMessages();
    });
  });

  // ---------- Boot ----------
  showScreen("home");
})();
