// ---- DATA ----

const ROADMAPS = [
  { id: 'webdev', icon: '🌐', title: 'Web Development', desc: 'Build websites and full-stack apps.', color: '#7c6aff',
    phases: [
      { level: 'beginner',     label: '01', title: 'Beginner',     skills: ['HTML5', 'CSS3', 'JavaScript', 'Git & GitHub', 'Responsive Design', 'DOM Manipulation'] },
      { level: 'intermediate', label: '02', title: 'Intermediate', skills: ['React.js', 'Node.js', 'REST APIs', 'SQL', 'Tailwind CSS', 'Authentication'] },
      { level: 'advanced',     label: '03', title: 'Advanced',     skills: ['Next.js', 'TypeScript', 'Docker', 'CI/CD', 'GraphQL', 'System Design'] }
    ],
    tools: ['VS Code', 'Postman', 'Vercel', 'MongoDB', 'PostgreSQL', 'Figma'] },

  { id: 'ai', icon: '🤖', title: 'Artificial Intelligence', desc: 'Learn ML, deep learning, and build intelligent systems.', color: '#a78bfa',
    phases: [
      { level: 'beginner',     label: '01', title: 'Beginner',     skills: ['Python', 'NumPy', 'Pandas', 'Statistics', 'Matplotlib'] },
      { level: 'intermediate', label: '02', title: 'Intermediate', skills: ['Scikit-learn', 'Neural Networks', 'TensorFlow', 'Model Evaluation', 'Feature Engineering'] },
      { level: 'advanced',     label: '03', title: 'Advanced',     skills: ['PyTorch', 'Transformers', 'LLMs', 'MLOps', 'Hugging Face', 'FastAPI'] }
    ],
    tools: ['Jupyter', 'Google Colab', 'Kaggle', 'Hugging Face', 'VS Code'] },

  { id: 'datascience', icon: '📊', title: 'Data Science', desc: 'Analyze data and discover insights.', color: '#34d399',
    phases: [
      { level: 'beginner',     label: '01', title: 'Beginner',     skills: ['Python', 'Excel', 'Statistics', 'Pandas', 'Basic SQL'] },
      { level: 'intermediate', label: '02', title: 'Intermediate', skills: ['Advanced SQL', 'Tableau', 'A/B Testing', 'Regression', 'Data Storytelling'] },
      { level: 'advanced',     label: '03', title: 'Advanced',     skills: ['Time Series', 'NLP basics', 'Big Data (Spark)', 'Cloud Platforms', 'dbt'] }
    ],
    tools: ['Jupyter', 'Tableau Public', 'Google Looker Studio', 'BigQuery', 'Kaggle'] },

  { id: 'cybersecurity', icon: '🔐', title: 'Cybersecurity', desc: 'Protect systems and find vulnerabilities.', color: '#f87171',
    phases: [
      { level: 'beginner',     label: '01', title: 'Beginner',     skills: ['Networking Basics', 'TCP/IP', 'Linux CLI', 'Cryptography', 'Python scripting'] },
      { level: 'intermediate', label: '02', title: 'Intermediate', skills: ['Ethical Hacking', 'OWASP Top 10', 'Wireshark', 'Burp Suite', 'CTF Challenges'] },
      { level: 'advanced',     label: '03', title: 'Advanced',     skills: ['Malware Analysis', 'Reverse Engineering', 'Red Teaming', 'Cloud Security', 'Threat Intel'] }
    ],
    tools: ['Kali Linux', 'Wireshark', 'Burp Suite', 'Metasploit', 'TryHackMe', 'Hack The Box'] },

  { id: 'mobile', icon: '📱', title: 'Mobile Development', desc: 'Build apps for iOS and Android.', color: '#38bdf8',
    phases: [
      { level: 'beginner',     label: '01', title: 'Beginner',     skills: ['JavaScript / Dart', 'React Native basics', 'Flutter basics', 'Git', 'Expo'] },
      { level: 'intermediate', label: '02', title: 'Intermediate', skills: ['State Management', 'Navigation', 'REST APIs', 'Firebase', 'Push Notifications'] },
      { level: 'advanced',     label: '03', title: 'Advanced',     skills: ['Native Modules', 'App Store / Play Store', 'CI/CD for Mobile', 'Swift / Kotlin'] }
    ],
    tools: ['Expo', 'Android Studio', 'Xcode', 'Firebase', 'Figma', 'Fastlane'] }
];

const RESOURCES = [
  { id: 'r1',  title: 'The Odin Project',                    desc: 'Free full-stack web dev curriculum with hands-on projects.',          field: 'Web Dev',       category: 'course',   difficulty: 'Beginner',     link: 'https://www.theodinproject.com',    icon: '📘' },
  { id: 'r2',  title: 'freeCodeCamp Web Dev',                desc: 'Interactive lessons covering HTML, CSS, and JavaScript.',             field: 'Web Dev',       category: 'course',   difficulty: 'Beginner',     link: 'https://www.freecodecamp.org',      icon: '🎓' },
  { id: 'r3',  title: 'MDN Web Docs',                        desc: 'The definitive reference for HTML, CSS, and JavaScript.',             field: 'Web Dev',       category: 'docs',     difficulty: 'Beginner',     link: 'https://developer.mozilla.org',     icon: '📖' },
  { id: 'r4',  title: 'Traversy Media – React Crash Course', desc: 'Popular YouTube crash courses on React, Node, and more.',            field: 'Web Dev',       category: 'video',    difficulty: 'Intermediate', link: 'https://youtube.com/@TraversyMedia', icon: '▶️' },
  { id: 'r5',  title: 'Frontend Mentor',                     desc: 'Real-world frontend challenges with professional designs.',           field: 'Web Dev',       category: 'practice', difficulty: 'Intermediate', link: 'https://www.frontendmentor.io',     icon: '🏋️' },
  { id: 'r6',  title: 'JavaScript.info',                     desc: 'Comprehensive, modern JavaScript tutorial from basics to advanced.', field: 'Web Dev',       category: 'docs',     difficulty: 'Beginner',     link: 'https://javascript.info',           icon: '📖' },
  { id: 'r7',  title: 'fast.ai – Practical Deep Learning',   desc: 'Top-down, practical approach to deep learning — free.',              field: 'AI',            category: 'course',   difficulty: 'Intermediate', link: 'https://www.fast.ai',               icon: '📘' },
  { id: 'r8',  title: 'Google ML Crash Course',              desc: "Google's free machine learning course with TensorFlow.",             field: 'AI',            category: 'course',   difficulty: 'Beginner',     link: 'https://developers.google.com/machine-learning/crash-course', icon: '🎓' },
  { id: 'r9',  title: '3Blue1Brown – Neural Networks',       desc: 'Beautiful visual explanations of neural networks.',                  field: 'AI',            category: 'video',    difficulty: 'Beginner',     link: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi', icon: '▶️' },
  { id: 'r10', title: 'Kaggle Learn',                        desc: 'Free micro-courses on Python, ML, and data viz with live notebooks.', field: 'AI',           category: 'practice', difficulty: 'Beginner',     link: 'https://www.kaggle.com/learn',      icon: '🏋️' },
  { id: 'r11', title: 'Hugging Face Course',                 desc: 'Learn Transformers and NLP with the Hugging Face ecosystem.',         field: 'AI',            category: 'course',   difficulty: 'Advanced',     link: 'https://huggingface.co/course',     icon: '📘' },
  { id: 'r12', title: 'Kaggle Competitions',                 desc: 'Practice on real datasets and compete in ML challenges.',            field: 'Data Science',  category: 'practice', difficulty: 'Intermediate', link: 'https://www.kaggle.com',            icon: '🏋️' },
  { id: 'r13', title: 'Pandas Documentation',                desc: 'Official Pandas docs — the essential Python data library.',          field: 'Data Science',  category: 'docs',     difficulty: 'Beginner',     link: 'https://pandas.pydata.org/docs',    icon: '📖' },
  { id: 'r14', title: 'StatQuest with Josh Starmer',         desc: 'Stats and ML concepts explained clearly on YouTube.',                field: 'Data Science',  category: 'video',    difficulty: 'Beginner',     link: 'https://www.youtube.com/@statquest', icon: '▶️' },
  { id: 'r15', title: 'SQL Murder Mystery',                  desc: 'Learn SQL by solving a fun detective story.',                        field: 'Data Science',  category: 'practice', difficulty: 'Beginner',     link: 'https://mystery.knightlab.com',     icon: '🏋️' },
  { id: 'r16', title: 'Mode SQL Tutorial',                   desc: 'Free interactive SQL tutorial on real datasets.',                    field: 'Data Science',  category: 'course',   difficulty: 'Beginner',     link: 'https://mode.com/sql-tutorial',     icon: '📘' },
  { id: 'r17', title: 'TryHackMe',                           desc: 'Learn cybersecurity through gamified rooms.',                        field: 'Cybersecurity', category: 'practice', difficulty: 'Beginner',     link: 'https://tryhackme.com',             icon: '🏋️' },
  { id: 'r18', title: 'Hack The Box Academy',                desc: 'Free modules covering pentesting and web exploitation.',             field: 'Cybersecurity', category: 'course',   difficulty: 'Intermediate', link: 'https://academy.hackthebox.com',    icon: '🎓' },
  { id: 'r19', title: 'OWASP Top 10',                        desc: 'Guide to the most critical web app security risks.',                 field: 'Cybersecurity', category: 'docs',     difficulty: 'Intermediate', link: 'https://owasp.org/www-project-top-ten', icon: '📖' },
  { id: 'r20', title: 'NetworkChuck – Hacking for Beginners',desc: 'YouTube series on ethical hacking and networking.',                 field: 'Cybersecurity', category: 'video',    difficulty: 'Beginner',     link: 'https://www.youtube.com/@NetworkChuck', icon: '▶️' },
  { id: 'r21', title: 'PicoCTF',                             desc: 'Free beginner-friendly cybersecurity CTF challenges.',              field: 'Cybersecurity', category: 'practice', difficulty: 'Beginner',     link: 'https://picoctf.org',               icon: '🏋️' },
  { id: 'r22', title: 'React Native Docs',                   desc: 'Official React Native docs — best starting point for mobile dev.',  field: 'Mobile',        category: 'docs',     difficulty: 'Beginner',     link: 'https://reactnative.dev/docs/getting-started', icon: '📖' },
  { id: 'r23', title: 'Flutter & Dart – freeCodeCamp',       desc: '37 hours of free Flutter and Dart content on YouTube.',             field: 'Mobile',        category: 'video',    difficulty: 'Beginner',     link: 'https://www.youtube.com/watch?v=VPvVD8t02U8', icon: '▶️' },
  { id: 'r24', title: 'Flutter Documentation',               desc: "Google's official Flutter docs with codelabs and API ref.",         field: 'Mobile',        category: 'docs',     difficulty: 'Beginner',     link: 'https://docs.flutter.dev',          icon: '📖' },
  { id: 'r25', title: 'Expo Go',                             desc: 'Build and test React Native apps on your phone instantly.',          field: 'Mobile',        category: 'practice', difficulty: 'Intermediate', link: 'https://expo.dev',                  icon: '🏋️' },
  { id: 'r26', title: 'The Net Ninja – Flutter Course',      desc: 'Free Flutter series on YouTube for complete beginners.',            field: 'Mobile',        category: 'video',    difficulty: 'Beginner',     link: 'https://www.youtube.com/@NetNinja', icon: '▶️' },
  { id: 'r27', title: 'CS50 by Harvard',                     desc: "Harvard's legendary intro to computer science — free to audit.",   field: 'Web Dev',       category: 'course',   difficulty: 'Beginner',     link: 'https://cs50.harvard.edu',          icon: '🎓' },
  { id: 'r28', title: 'GitHub Skills',                       desc: 'Free interactive courses on Git and GitHub Actions.',               field: 'Web Dev',       category: 'course',   difficulty: 'Beginner',     link: 'https://skills.github.com',         icon: '📘' },
  { id: 'r29', title: 'LeetCode Free Problems',              desc: 'Practice data structures with free coding problems.',               field: 'AI',            category: 'practice', difficulty: 'Intermediate', link: 'https://leetcode.com/problemset',   icon: '🏋️' },
  { id: 'r30', title: 'MIT OCW – Linear Algebra',            desc: "Gilbert Strang's famous linear algebra lectures.",                  field: 'Data Science',  category: 'video',    difficulty: 'Intermediate', link: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010', icon: '▶️' },
];

// ---- STATE ----

let currentPage = 'home';
let activeField = 'all';
let bookmarks = JSON.parse(localStorage.getItem('sp_bookmarks') || '[]');
let isDark = localStorage.getItem('sp_theme') !== 'light';
let authMode = 'login';

// ---- NAV / PAGES ----

function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links button[id^="nav-"]').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('nav-' + page);
  if (btn) btn.classList.add('active');
  currentPage = page;
  window.scrollTo(0, 0);
  if (page === 'roadmaps')  renderRoadmaps();
  if (page === 'resources') filterResources();
  if (page === 'bookmarks') renderBookmarks();
}

function closeMobile() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

// ---- THEME ----

function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

function toggleTheme() {
  isDark = !isDark;
  localStorage.setItem('sp_theme', isDark ? 'dark' : 'light');
  applyTheme();
}

// ---- AUTH ----

function getUsers()       { return JSON.parse(localStorage.getItem('sp_users') || '[]'); }
function saveUsers(u)     { localStorage.setItem('sp_users', JSON.stringify(u)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem('sp_user') || 'null'); }
function setCurrentUser(u){ localStorage.setItem('sp_user', JSON.stringify(u)); }

function buildNavAuth() {
  const el = document.getElementById('navAuth');
  const user = getCurrentUser();
  if (!user) {
    el.innerHTML = `
      <button class="btn-nav-ghost" onclick="openAuth('login')">Log in</button>
      <button class="btn-nav" onclick="openAuth('register')">Sign up</button>
    `;
  } else {
    el.innerHTML = `
      <div class="user-menu">
        <button class="user-avatar" onclick="document.getElementById('userDrop').classList.toggle('open')">${user.name[0].toUpperCase()}</button>
        <div class="user-dropdown" id="userDrop">
          <span>${user.name}</span>
          <button onclick="logout()">Log out</button>
        </div>
      </div>
    `;
  }
}

function logout() {
  localStorage.removeItem('sp_user');
  buildNavAuth();
}

function openAuth(mode) {
  authMode = mode;
  const isReg = mode === 'register';
  document.getElementById('authErr').textContent = '';
  document.getElementById('authErr').classList.remove('show');
  document.getElementById('inName').value = '';
  document.getElementById('inEmail').value = '';
  document.getElementById('inPass').value = '';
  document.getElementById('authTitle').textContent  = isReg ? 'Create Account' : 'Welcome back';
  document.getElementById('authSub').textContent    = isReg ? 'Join Skill Path and save your progress.' : 'Log in to access your saved resources.';
  document.getElementById('nameGroup').style.display = isReg ? 'flex' : 'none';
  document.getElementById('authSubmit').textContent  = isReg ? 'Create Account' : 'Log in';
  document.getElementById('authSwitch').innerHTML    = isReg
    ? 'Already have an account? <a onclick="openAuth(\'login\')">Log in</a>'
    : 'No account? <a onclick="openAuth(\'register\')">Sign up</a>';
  document.getElementById('authOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAuth() {
  document.getElementById('authOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function submitAuth() {
  const err   = document.getElementById('authErr');
  const email = document.getElementById('inEmail').value.trim();
  const pass  = document.getElementById('inPass').value;
  let msg = null;

  if (authMode === 'register') {
    const name = document.getElementById('inName').value.trim();
    if (!name || !email || !pass) { msg = 'Please fill in all fields.'; }
    else if (pass.length < 6)    { msg = 'Password must be at least 6 characters.'; }
    else {
      const users = getUsers();
      if (users.find(u => u.email === email)) { msg = 'Email already registered.'; }
      else { users.push({ name, email, password: pass }); saveUsers(users); setCurrentUser({ name, email }); }
    }
  } else {
    if (!email || !pass) { msg = 'Please fill in all fields.'; }
    else {
      const found = getUsers().find(u => u.email === email && u.password === pass);
      if (!found) { msg = 'Incorrect email or password.'; }
      else { setCurrentUser({ name: found.name, email: found.email }); }
    }
  }

  if (msg) { err.textContent = msg; err.classList.add('show'); }
  else { closeAuth(); buildNavAuth(); }
}

// ---- ROADMAPS ----

function renderRoadmaps() {
  document.getElementById('roadmapGrid').innerHTML = ROADMAPS.map(r => `
    <div class="roadmap-card" style="--card-color:${r.color}" onclick="openRoadmap('${r.id}')">
      <span class="card-icon">${r.icon}</span>
      <div class="card-title">${r.title}</div>
      <div class="card-desc">${r.desc}</div>
      <div class="card-link">View Roadmap →</div>
      <span class="card-arrow">↗</span>
    </div>
  `).join('');
}

function openRoadmap(id) {
  const r = ROADMAPS.find(x => x.id === id);
  document.getElementById('mIcon').textContent  = r.icon;
  document.getElementById('mTitle').textContent = r.title + ' Roadmap';
  document.getElementById('mDesc').textContent  = r.desc;
  document.getElementById('mPhases').innerHTML  = r.phases.map(p => `
    <div class="phase">
      <div class="phase-head">
        <div class="phase-num ${p.level}">${p.label}</div>
        <div class="phase-title">${p.title}</div>
      </div>
      <div class="chips">${p.skills.map(s => `<span class="chip">${s}</span>`).join('')}</div>
    </div>
  `).join('');
  document.getElementById('mTools').innerHTML = r.tools.map(t => `<span class="tool-chip">${t}</span>`).join('');
  document.getElementById('roadmapOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRoadmap() {
  document.getElementById('roadmapOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- RESOURCES ----

const catLabel = { course: 'Course', video: 'Video', docs: 'Docs', practice: 'Practice' };

function resourceCard(r) {
  const saved = bookmarks.includes(r.id);
  return `
    <div class="resource-card" id="rc_${r.id}">
      <div class="res-top">
        <div class="res-icon">${r.icon}</div>
        <div>
          <div class="res-title">${r.title}</div>
          <div class="res-desc">${r.desc}</div>
        </div>
      </div>
      <div class="res-footer">
        <div class="res-badges">
          <span class="badge-cat cat-${r.category}">${catLabel[r.category]}</span>
          <span class="badge-diff diff-${r.difficulty.toLowerCase()}">${r.difficulty}</span>
        </div>
        <div class="res-actions">
          <button class="btn-bookmark ${saved ? 'saved' : ''}" onclick="toggleBookmark('${r.id}')">🔖</button>
          <a href="${r.link}" target="_blank" class="btn-visit">Visit ↗</a>
        </div>
      </div>
    </div>
  `;
}

function filterResources() {
  const q    = document.getElementById('searchInput').value.toLowerCase();
  const diff = document.getElementById('diffFilter').value;
  const list = RESOURCES.filter(r =>
    (activeField === 'all' || r.field === activeField) &&
    (diff === 'all' || r.difficulty === diff) &&
    (!q || r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q))
  );
  const grid = document.getElementById('resourcesGrid');
  const none = document.getElementById('noResults');
  if (!list.length) { grid.innerHTML = ''; none.style.display = 'block'; }
  else { none.style.display = 'none'; grid.innerHTML = list.map(resourceCard).join(''); }
}

function setField(field, btn) {
  activeField = field;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterResources();
}

// ---- BOOKMARKS ----

function toggleBookmark(id) {
  bookmarks = bookmarks.includes(id) ? bookmarks.filter(x => x !== id) : [...bookmarks, id];
  localStorage.setItem('sp_bookmarks', JSON.stringify(bookmarks));
  document.querySelectorAll(`#rc_${id} .btn-bookmark`).forEach(b => {
    b.className = 'btn-bookmark' + (bookmarks.includes(id) ? ' saved' : '');
  });
  if (currentPage === 'bookmarks') renderBookmarks();
}

function renderBookmarks() {
  const saved = RESOURCES.filter(r => bookmarks.includes(r.id));
  document.getElementById('bmCount').textContent = bookmarks.length;
  const grid  = document.getElementById('bmGrid');
  const empty = document.getElementById('bmEmpty');
  if (!saved.length) { grid.innerHTML = ''; empty.style.display = 'block'; }
  else { empty.style.display = 'none'; grid.innerHTML = saved.map(resourceCard).join(''); }
}

function clearBookmarks() {
  bookmarks = [];
  localStorage.setItem('sp_bookmarks', JSON.stringify(bookmarks));
  renderBookmarks();
}

// ---- EVENTS ----

document.getElementById('themeBtn').addEventListener('click', toggleTheme);

document.getElementById('burger').addEventListener('click', function() {
  this.classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
});

document.getElementById('authOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeAuth(); });
document.getElementById('roadmapOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeRoadmap(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeAuth(); closeRoadmap(); } });

document.addEventListener('click', e => {
  if (!e.target.closest('.user-menu')) document.getElementById('userDrop')?.classList.remove('open');
});

// ---- INIT ----
applyTheme();
buildNavAuth();
