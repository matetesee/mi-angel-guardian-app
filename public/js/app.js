(function () {
  "use strict";

  var STORAGE_KEY = "maga_state_v2";
  var OLD_STORAGE_KEY = "maga_state_v1";

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

  var ANGEL_NUMBERS = {
    1: { num: "111", title: "Nuevos comienzos", text: "Es momento de plantar semillas nuevas. Tus pensamientos se están manifestando muy rápido: enfocá tu mente en lo que sí querés." },
    2: { num: "222", title: "Equilibrio y confianza", text: "Todo se está alineando de a poco, aunque no lo veas todavía. Mantené la fe y cuidá tus vínculos más cercanos." },
    3: { num: "333", title: "Guía y expresión", text: "Estás rodeado de guía espiritual. Es un buen momento para expresarte con libertad y confiar en tu creatividad." },
    4: { num: "444", title: "Protección angelical", text: "Tus ángeles están muy cerca tuyo, trabajando en silencio para sostenerte. No estás solo en lo que estás atravesando." },
    5: { num: "555", title: "Cambios en camino", text: "Se acerca una transformación importante. Soltá lo que ya cumplió su ciclo para dejar espacio a lo nuevo." },
    6: { num: "666", title: "Reequilibrio", text: "Es momento de balancear lo material con lo espiritual. Revisá en qué estás poniendo tu energía últimamente." },
    7: { num: "777", title: "Alineación espiritual", text: "Estás en sintonía con tu camino. La suerte y las señales se multiplican cuando seguís confiando en tu intuición." },
    8: { num: "888", title: "Abundancia", text: "Un ciclo de abundancia y recompensas está por abrirse. Lo que sembraste con esfuerzo empieza a dar frutos." },
    9: { num: "999", title: "Cierre de ciclo", text: "Algo importante está llegando a su fin para darle lugar a un capítulo nuevo. Soltar con gratitud acelera la transición." },
  };

  var BADGES = [
    { key: "iniciado", icon: "fa-seedling", label: "Iniciado", check: function (s) { return !!s.angelKey; } },
    { key: "conectado", icon: "fa-bolt", label: "Conectado", check: function (s) { return (s.streak && s.streak.count || 0) >= 3; } },
    { key: "iluminado", icon: "fa-sun", label: "Iluminado", check: function (s) { return (s.streak && s.streak.count || 0) >= 7; } },
    { key: "devoto", icon: "fa-crown", label: "Fiel Devoto", check: function (s) { return (s.streak && s.streak.longest || 0) >= 30; } },
    { key: "coleccionista", icon: "fa-gem", label: "Coleccionista", check: function (s) { return (s.favorites || []).length >= 5; } },
    { key: "escritor", icon: "fa-pen-nib", label: "Alma Escritora", check: function (s) { return (s.journal || []).length >= 5; } },
    { key: "numerologia", icon: "fa-hashtag", label: "Numerología", check: function (s) { return !!s.birthdate; } },
    { key: "explorador", icon: "fa-compass", label: "Explorador", check: function (s) { return Object.keys(s.messageHistory || {}).length >= 5; } },
    { key: "vidente", icon: "fa-eye", label: "Vidente", check: function (s) { return Object.keys(s.oracleHistory || {}).length >= 5; } },
  ];

  var MONTHS_ES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

  var ORACLE_CARDS = [
    { icon: "fa-shield-heart", title: "Protección", text: "Estás cubierto por una luz protectora. Nada de lo que temés tiene más poder que la fuerza que te acompaña hoy." },
    { icon: "fa-hand-holding-heart", title: "Confianza", text: "Es momento de confiar en el proceso, aunque no veas el camino completo. Un paso a la vez es suficiente." },
    { icon: "fa-spa", title: "Sanación", text: "Una vieja herida está lista para cerrar. Permitite sentir para poder soltar." },
    { icon: "fa-coins", title: "Abundancia", text: "La abundancia no es solo dinero: hoy notá todo lo que ya tenés y merecés." },
    { icon: "fa-lightbulb", title: "Claridad", text: "La respuesta que buscabas va a aparecer en un momento de calma, no de ansiedad." },
    { icon: "fa-dove", title: "Perdón", text: "Perdonar no es olvidar, es liberarte del peso que ya no te pertenece." },
    { icon: "fa-seedling", title: "Nuevos comienzos", text: "Un ciclo nuevo se abre frente a vos. Animate a dar el primer paso, aunque sea pequeño." },
    { icon: "fa-hourglass-half", title: "Paciencia", text: "Lo que estás construyendo necesita tiempo. No te compares con el ritmo de nadie más." },
    { icon: "fa-fire", title: "Coraje", text: "Tenés más valor del que creés. Hoy es un buen día para animarte a eso que venís postergando." },
    { icon: "fa-heart", title: "Gratitud", text: "Agradecer lo pequeño abre la puerta a que lleguen cosas más grandes." },
    { icon: "fa-eye", title: "Intuición", text: "Tu primera corazonada de hoy merece más atención de la que le estás dando." },
    { icon: "fa-feather", title: "Renacimiento", text: "Algo en vos está renaciendo. Dejá atrás la versión que ya cumplió su propósito." },
  ];

  var ZODIAC_ICON = "fa-star-and-crescent";
  var ZODIAC_SIGNS = [
    { key: "aries", name: "Aries", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { key: "tauro", name: "Tauro", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { key: "geminis", name: "Géminis", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { key: "cancer", name: "Cáncer", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { key: "leo", name: "Leo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { key: "virgo", name: "Virgo", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { key: "libra", name: "Libra", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { key: "escorpio", name: "Escorpio", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { key: "sagitario", name: "Sagitario", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
    { key: "capricornio", name: "Capricornio", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
    { key: "acuario", name: "Acuario", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { key: "piscis", name: "Piscis", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
  ];

  var HOROSCOPE_TEMPLATES = [
    "Hoy es un buen día para escuchar tu intuición antes de tomar decisiones importantes en el amor.",
    "Tu energía está alta: aprovechá para avanzar en ese proyecto que venías postergando.",
    "Evitá discusiones innecesarias hoy; el silencio a veces dice más que las palabras.",
    "El dinero pide organización: revisá tus gastos antes de hacer una nueva compra.",
    "En el amor, la sinceridad va a abrirte puertas que creías cerradas.",
    "Es un día ideal para el descanso y la introspección, no fuerces nada.",
    "Una noticia inesperada puede cambiar tus planes de la semana; mantené la mente abierta.",
    "Tu creatividad está en su punto más alto, dejate inspirar por lo que ves a tu alrededor.",
    "Cuidá tu energía: rodeate de personas que sumen, no que resten.",
    "El trabajo en equipo te va a traer mejores resultados que ir en soledad hoy.",
    "Un vínculo del pasado podría reaparecer; vos decidís qué lugar darle.",
    "Confiá en tu proceso: los resultados están más cerca de lo que pensás.",
  ];

  function defaultState() {
    return {
      answers: [],
      angelKey: null,
      favorites: [],
      lastDailyIndex: null,
      lastDailyDate: null,
      lastOracleIndex: null,
      lastOracleDate: null,
      name: null,
      birthdate: null,
      journal: [],
      streak: { count: 0, longest: 0, lastVisitDate: null },
      messageHistory: {},
      oracleHistory: {},
    };
  }

  var state = loadState();
  var oracleRevealedToday = false;

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) raw = localStorage.getItem(OLD_STORAGE_KEY);
      var base = defaultState();
      if (!raw) return base;
      var parsed = JSON.parse(raw);
      return Object.assign(base, parsed, {
        streak: Object.assign(base.streak, parsed.streak || {}),
        messageHistory: parsed.messageHistory || {},
        oracleHistory: parsed.oracleHistory || {},
        journal: parsed.journal || [],
        favorites: parsed.favorites || [],
      });
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function dateKey(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function formatDateEs(key) {
    var parts = key.split("-");
    var y = parts[0], m = parseInt(parts[1], 10) - 1, d = parseInt(parts[2], 10);
    return d + " " + MONTHS_ES[m] + " " + y;
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
    if (name === "perfil") renderPerfil();
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

  function resetAll() {
    if (confirm("¿Reiniciar tu perfil y borrar toda tu información guardada?")) {
      state = defaultState();
      saveState();
      showScreen("home");
    }
  }
  document.getElementById("btn-reset").addEventListener("click", resetAll);
  document.getElementById("btn-perfil-reset").addEventListener("click", resetAll);

  // ---------- Onboarding ----------
  var onboardingEl = document.getElementById("onboarding");

  function maybeShowOnboarding() {
    if (!state.name) {
      onboardingEl.hidden = false;
    } else {
      onboardingEl.hidden = true;
    }
  }

  document.getElementById("btn-onboarding-continue").addEventListener("click", function () {
    var name = document.getElementById("onb-name").value.trim();
    var birthdate = document.getElementById("onb-birthdate").value;
    if (!name) {
      document.getElementById("onb-name").focus();
      return;
    }
    state.name = name;
    if (birthdate) state.birthdate = birthdate;
    saveState();
    onboardingEl.hidden = true;
    afterBoot();
  });

  // ---------- Streak & message history ----------
  function bumpStreak() {
    var today = dateKey(new Date());
    if (state.streak.lastVisitDate !== today) {
      var y = new Date();
      y.setDate(y.getDate() - 1);
      var yesterdayKey = dateKey(y);
      if (state.streak.lastVisitDate === yesterdayKey) {
        state.streak.count = (state.streak.count || 0) + 1;
      } else {
        state.streak.count = 1;
      }
      state.streak.longest = Math.max(state.streak.longest || 0, state.streak.count);
      state.streak.lastVisitDate = today;
    }
    var daily = getDailyMessage();
    state.messageHistory[today] = daily.index;
    saveState();
    updateStreakChip();
  }

  function updateStreakChip() {
    document.getElementById("streak-chip-count").textContent = state.streak.count || 0;
  }

  // ---------- Home ----------
  function renderHome() {
    document.getElementById("home-greeting").textContent = state.name
      ? "Hola, " + state.name + " ✨"
      : "Descubre a tu Ángel Guardián";

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

    var streakTile = document.createElement("div");
    streakTile.className = "status-tile";
    streakTile.innerHTML = '<i class="fa-solid fa-fire"></i><span class="tile-title">' + (state.streak.count || 0) + (state.streak.count === 1 ? " día seguido" : " días seguidos") + '</span><span class="tile-sub">Racha máxima: ' + (state.streak.longest || 0) + '</span>';
    streakTile.addEventListener("click", function () { showScreen("perfil"); });

    var journalTile = document.createElement("div");
    journalTile.className = "status-tile";
    journalTile.innerHTML = '<i class="fa-solid fa-feather-pointed"></i><span class="tile-title">Diario</span><span class="tile-sub">' + state.journal.length + (state.journal.length === 1 ? " reflexión" : " reflexiones") + '</span>';
    journalTile.addEventListener("click", function () {
      showScreen("perfil");
      switchPerfilTab("diario");
    });

    grid.appendChild(angelTile);
    grid.appendChild(msgTile);
    grid.appendChild(streakTile);
    grid.appendChild(journalTile);
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

  // ---------- Angel number ----------
  function digitalRoot(n) {
    n = Math.abs(n);
    while (n > 9) {
      n = String(n).split("").reduce(function (a, d) { return a + Number(d); }, 0);
    }
    return n === 0 ? 9 : n;
  }

  function computeAngelNumber(birthdate) {
    var digits = birthdate.replace(/-/g, "");
    var sum = digits.split("").reduce(function (a, d) { return a + Number(d); }, 0);
    var root = digitalRoot(sum);
    return ANGEL_NUMBERS[root];
  }

  function renderAngelNumberBlock(container, editable) {
    if (state.birthdate) {
      var res = computeAngelNumber(state.birthdate);
      container.innerHTML =
        '<div class="number-pill">' + res.num + "</div>" +
        "<strong>" + res.title + "</strong>" +
        "<p>" + res.text + "</p>";
    } else if (editable) {
      container.innerHTML = '<p class="tile-sub">Cargá tu fecha de nacimiento arriba y guardá para descubrir tu número angelical.</p>';
    } else {
      container.innerHTML =
        '<div class="number-empty"><p>Todavía no cargaste tu fecha de nacimiento.</p>' +
        '<button class="btn-secondary" id="btn-goto-perfil-number">Agregarla en Mi Perfil</button></div>';
      var btn = container.querySelector("#btn-goto-perfil-number");
      if (btn) btn.addEventListener("click", function () { showScreen("perfil"); });
    }
  }

  // ---------- Zodiac & horoscope ----------
  function computeZodiacSign(birthdate) {
    var parts = birthdate.split("-");
    var month = parseInt(parts[1], 10);
    var day = parseInt(parts[2], 10);
    for (var i = 0; i < ZODIAC_SIGNS.length; i++) {
      var z = ZODIAC_SIGNS[i];
      if (z.startMonth <= z.endMonth) {
        if ((month === z.startMonth && day >= z.startDay) || (month === z.endMonth && day <= z.endDay) || (month > z.startMonth && month < z.endMonth)) {
          return z;
        }
      } else {
        if ((month === z.startMonth && day >= z.startDay) || (month === z.endMonth && day <= z.endDay) || month > z.startMonth || month < z.endMonth) {
          return z;
        }
      }
    }
    return null;
  }

  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) {
      h = (h * 31 + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function getHoroscope(signKey) {
    var seed = hashStr(signKey + dateKey(new Date()));
    return HOROSCOPE_TEMPLATES[seed % HOROSCOPE_TEMPLATES.length];
  }

  function renderHoroscopeBlock(container, editable) {
    if (state.birthdate) {
      var z = computeZodiacSign(state.birthdate);
      container.innerHTML =
        '<div class="number-pill"><i class="fa-solid ' + ZODIAC_ICON + '"></i> ' + z.name + "</div>" +
        "<p>" + getHoroscope(z.key) + "</p>";
    } else if (editable) {
      container.innerHTML = '<p class="tile-sub">Cargá tu fecha de nacimiento arriba y guardá para ver tu horóscopo del día.</p>';
    } else {
      container.innerHTML =
        '<div class="number-empty"><p>Todavía no cargaste tu fecha de nacimiento.</p>' +
        '<button class="btn-secondary" id="btn-goto-perfil-horoscope">Agregarla en Mi Perfil</button></div>';
      var btn = container.querySelector("#btn-goto-perfil-horoscope");
      if (btn) btn.addEventListener("click", function () { showScreen("perfil"); });
    }
  }

  // ---------- Text to speech ----------
  function speak(text, btn) {
    if (!("speechSynthesis" in window)) {
      alert("Tu navegador no soporta la lectura en voz alta.");
      return;
    }
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      document.querySelectorAll(".speak-btn.speaking").forEach(function (b) { b.classList.remove("speaking"); });
      return;
    }
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "es-ES";
    u.rate = 0.95;
    u.onend = function () { if (btn) btn.classList.remove("speaking"); };
    u.onerror = function () { if (btn) btn.classList.remove("speaking"); };
    if (btn) btn.classList.add("speaking");
    window.speechSynthesis.speak(u);
  }

  document.getElementById("btn-speak-prayer").addEventListener("click", function () {
    speak(document.getElementById("angel-prayer").textContent, this);
  });
  document.getElementById("btn-speak-daily").addEventListener("click", function () {
    speak(document.getElementById("daily-message-text").textContent, this);
  });

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
    renderAngelNumberBlock(document.getElementById("angel-number-content"), false);
    renderHoroscopeBlock(document.getElementById("angel-horoscope-content"), false);
  }

  // ---------- Messages ----------
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
    state.messageHistory[state.lastDailyDate] = idx;
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

    renderCalendar();
  }

  function renderCalendar() {
    var calList = document.getElementById("cal-list");
    var hint = document.getElementById("cal-empty-hint");
    var keys = Object.keys(state.messageHistory).sort().reverse().slice(0, 30);
    calList.innerHTML = "";
    if (keys.length === 0) {
      hint.hidden = false;
      return;
    }
    hint.hidden = true;
    keys.forEach(function (key) {
      var idx = state.messageHistory[key];
      var row = document.createElement("div");
      row.className = "fav-item";
      row.innerHTML = '<p><span class="fav-item-date">' + formatDateEs(key) + "</span>" + DAILY_MESSAGES[idx] + "</p>";
      calList.appendChild(row);
    });
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

  // ---------- Oracle (angelic cards) ----------
  function getOracleCard() {
    var today = dateKey(new Date());
    if (state.lastOracleDate === today && state.lastOracleIndex != null) {
      return { index: state.lastOracleIndex, card: ORACLE_CARDS[state.lastOracleIndex] };
    }
    var idx = Math.floor(Math.random() * ORACLE_CARDS.length);
    state.lastOracleDate = today;
    state.lastOracleIndex = idx;
    saveState();
    return { index: idx, card: ORACLE_CARDS[idx] };
  }

  function renderOracle() {
    var wrap = document.getElementById("oracle-card");
    var shuffleBtn = document.getElementById("btn-oracle-shuffle");
    var today = dateKey(new Date());
    if (state.lastOracleDate !== today) oracleRevealedToday = false;

    if (!oracleRevealedToday) {
      shuffleBtn.hidden = true;
      wrap.innerHTML =
        '<div class="oracle-facedown"><i class="fa-solid fa-star"></i></div>' +
        "<h4>Tu carta angelical de hoy te espera</h4>" +
        '<p class="oracle-reveal-hint">Respirá hondo y tocá el mazo para revelarla.</p>' +
        '<button class="btn-primary" id="btn-oracle-reveal">Revelar mi carta <i class="fa-solid fa-hand-sparkles"></i></button>';
      document.getElementById("btn-oracle-reveal").addEventListener("click", function () {
        var o = getOracleCard();
        state.oracleHistory[dateKey(new Date())] = o.index;
        saveState();
        oracleRevealedToday = true;
        renderOracle();
        renderBadges();
      });
    } else {
      var o = getOracleCard();
      shuffleBtn.hidden = false;
      wrap.innerHTML =
        '<i class="fa-solid ' + o.card.icon + ' oracle-icon"></i>' +
        '<div class="oracle-title">' + o.card.title + "</div>" +
        '<p class="oracle-text">' + o.card.text + "</p>" +
        '<button class="speak-btn" id="btn-speak-oracle" title="Escuchar en voz alta"><i class="fa-solid fa-volume-high"></i></button>';
      document.getElementById("btn-speak-oracle").addEventListener("click", function () {
        speak(o.card.title + ". " + o.card.text, this);
      });
    }
  }

  function shuffleOracle() {
    var idx;
    do {
      idx = Math.floor(Math.random() * ORACLE_CARDS.length);
    } while (idx === state.lastOracleIndex && ORACLE_CARDS.length > 1);
    state.lastOracleIndex = idx;
    state.lastOracleDate = dateKey(new Date());
    state.oracleHistory[state.lastOracleDate] = idx;
    saveState();
    renderOracle();
  }

  document.getElementById("btn-oracle-shuffle").addEventListener("click", shuffleOracle);

  document.querySelectorAll("[data-msgtab]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll("[data-msgtab]").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var which = tab.dataset.msgtab;
      document.getElementById("messages-daily").hidden = which !== "daily";
      document.getElementById("messages-oracle").hidden = which !== "oracle";
      document.getElementById("messages-fav").hidden = which !== "fav";
      document.getElementById("messages-cal").hidden = which !== "cal";
      if (which === "fav" || which === "cal") renderMessages();
      if (which === "oracle") renderOracle();
    });
  });

  // ---------- Perfil ----------
  function switchPerfilTab(which) {
    document.querySelectorAll("[data-perfiltab]").forEach(function (t) {
      t.classList.toggle("active", t.dataset.perfiltab === which);
    });
    document.getElementById("perfil-perfil").hidden = which !== "perfil";
    document.getElementById("perfil-diario").hidden = which !== "diario";
  }

  document.querySelectorAll("[data-perfiltab]").forEach(function (tab) {
    tab.addEventListener("click", function () { switchPerfilTab(tab.dataset.perfiltab); });
  });

  function renderBadges() {
    var grid = document.getElementById("badges-grid");
    grid.innerHTML = "";
    BADGES.forEach(function (b) {
      var unlocked = b.check(state);
      var chip = document.createElement("div");
      chip.className = "badge-chip" + (unlocked ? " unlocked" : "");
      chip.innerHTML = '<i class="fa-solid ' + b.icon + '"></i><span>' + b.label + "</span>";
      grid.appendChild(chip);
    });
  }

  function renderZodiacLine() {
    var line = document.getElementById("perfil-zodiac-line");
    if (state.birthdate) {
      var z = computeZodiacSign(state.birthdate);
      line.innerHTML = 'Tu signo: <i class="fa-solid ' + ZODIAC_ICON + '"></i> ' + z.name;
    } else {
      line.textContent = "";
    }
  }

  function renderStats() {
    var grid = document.getElementById("stats-grid");
    var stats = [
      { num: Object.keys(state.messageHistory || {}).length, label: "días activos" },
      { num: (state.journal || []).length, label: "reflexiones" },
      { num: (state.favorites || []).length, label: "favoritos" },
      { num: Object.keys(state.oracleHistory || {}).length, label: "cartas reveladas" },
    ];
    grid.innerHTML = stats.map(function (s) {
      return '<div class="stat-tile"><span class="stat-num">' + s.num + '</span><span class="stat-label">' + s.label + "</span></div>";
    }).join("");
  }

  function renderPerfil() {
    document.getElementById("perfil-name").value = state.name || "";
    document.getElementById("perfil-birthdate").value = state.birthdate || "";
    renderZodiacLine();
    renderAngelNumberBlock(document.getElementById("perfil-number-content"), true);
    document.getElementById("streak-current").textContent = state.streak.count || 0;
    document.getElementById("streak-longest").textContent = state.streak.longest || 0;
    renderStats();
    renderBadges();
    renderJournal();
  }

  document.getElementById("btn-perfil-save").addEventListener("click", function () {
    var name = document.getElementById("perfil-name").value.trim();
    var birthdate = document.getElementById("perfil-birthdate").value;
    state.name = name || state.name;
    state.birthdate = birthdate || null;
    saveState();
    renderPerfil();
    renderHome();
  });

  // ---------- Journal ----------
  function renderJournal() {
    var list = document.getElementById("journal-list");
    var hint = document.getElementById("journal-empty-hint");
    list.innerHTML = "";
    if (!state.journal.length) {
      hint.hidden = false;
      return;
    }
    hint.hidden = true;
    state.journal.forEach(function (entry) {
      var row = document.createElement("div");
      row.className = "fav-item";
      row.innerHTML = '<p><span class="fav-item-date">' + formatDateEs(entry.date) + "</span>" + entry.text + '</p><button aria-label="Borrar"><i class="fa-solid fa-trash"></i></button>';
      row.querySelector("button").addEventListener("click", function () {
        state.journal = state.journal.filter(function (e) { return e.id !== entry.id; });
        saveState();
        renderJournal();
        renderBadges();
      });
      list.appendChild(row);
    });
  }

  document.getElementById("btn-journal-save").addEventListener("click", function () {
    var textarea = document.getElementById("journal-text");
    var text = textarea.value.trim();
    if (!text) return;
    state.journal.unshift({ id: Date.now(), date: dateKey(new Date()), text: text });
    saveState();
    textarea.value = "";
    renderJournal();
    renderBadges();
  });

  // ---------- Ambient sound (Web Audio, synthesized — no external files) ----------
  var audioCtx = null;
  var audioNodes = null;
  var soundPlaying = false;

  function startAmbientSound() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();

    var master = audioCtx.createGain();
    master.gain.value = 0;
    master.connect(audioCtx.destination);
    master.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 1.5);

    var filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 800;
    filter.connect(master);

    var freqs = [174, 261.6, 329.6];
    var oscillators = freqs.map(function (f) {
      var osc = audioCtx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;
      var g = audioCtx.createGain();
      g.gain.value = 1 / freqs.length;
      osc.connect(g);
      g.connect(filter);
      osc.start();
      return osc;
    });

    var lfo = audioCtx.createOscillator();
    lfo.frequency.value = 0.08;
    var lfoGain = audioCtx.createGain();
    lfoGain.gain.value = 300;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    audioNodes = { master: master, filter: filter, oscillators: oscillators, lfo: lfo };
    soundPlaying = true;
  }

  function stopAmbientSound() {
    if (!audioNodes) return;
    var now = audioCtx.currentTime;
    audioNodes.master.gain.linearRampToValueAtTime(0, now + 0.8);
    var nodes = audioNodes;
    setTimeout(function () {
      nodes.oscillators.forEach(function (o) { try { o.stop(); } catch (e) {} });
      try { nodes.lfo.stop(); } catch (e) {}
    }, 900);
    audioNodes = null;
    soundPlaying = false;
  }

  document.getElementById("btn-sound-toggle").addEventListener("click", function () {
    var btn = this;
    if (soundPlaying) {
      stopAmbientSound();
      btn.setAttribute("aria-pressed", "false");
    } else {
      startAmbientSound();
      btn.setAttribute("aria-pressed", "true");
    }
  });

  // ---------- PWA install prompt ----------
  var deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    document.getElementById("btn-install").hidden = false;
  });
  document.getElementById("btn-install").addEventListener("click", function () {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.finally && deferredInstallPrompt.finally(function () {});
    deferredInstallPrompt = null;
    document.getElementById("btn-install").hidden = true;
  });
  window.addEventListener("appinstalled", function () {
    document.getElementById("btn-install").hidden = true;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () {});
    });
  }

  // ---------- Boot ----------
  function afterBoot() {
    bumpStreak();
    showScreen("home");
  }

  maybeShowOnboarding();
  if (state.name) {
    afterBoot();
  } else {
    showScreen("home");
  }
})();
