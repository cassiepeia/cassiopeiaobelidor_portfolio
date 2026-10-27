// -------------------------------------------------------------
// 0. TAILWIND CONFIGURATION
// -------------------------------------------------------------
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EFECE2',
          300: '#E4DFD3',
        },
        accent: {
          orange: '#E76F51',
          blue: '#2563EB',
          cyan: '#06B6D4',
        },
        charcoal: {
          800: '#1E232B',
          900: '#11151B',
        }
      },
      boxShadow: {
        'bento': '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'bento-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'phone': '0 25px 60px -15px rgba(20, 25, 35, 0.35), 0 0 0 12px #1f242c, 0 0 0 14px #475569',
      }
    }
  }
};

// -------------------------------------------------------------
// 1. ANIMATED TOPOGRAPHIC CANVAS BACKGROUND
// -------------------------------------------------------------
const canvas = document.getElementById('topo-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let time = 0;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawTopography() {
  ctx.clearRect(0, 0, width, height);
  
  const isDark = document.documentElement.classList.contains('dark');
  ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(30, 35, 43, 0.07)';
  ctx.lineWidth = 1.2;

  const lineCount = 14;
  const step = height / lineCount;

  for (let i = 0; i < lineCount; i++) {
    ctx.beginPath();
    const yBase = i * step + 40;
    ctx.moveTo(0, yBase);

    for (let x = 0; x <= width; x += 30) {
      const wave1 = Math.sin(x * 0.003 + time + i * 0.4) * 35;
      const wave2 = Math.cos(x * 0.006 - time * 0.5) * 20;
      ctx.lineTo(x, yBase + wave1 + wave2);
    }
    ctx.stroke();
  }

  time += 0.004;
  requestAnimationFrame(drawTopography);
}

// -------------------------------------------------------------
// 2. 3D PROJECT CAROUSEL SLIDES DATA & LOGIC
// -------------------------------------------------------------
const projectSlides = [
  {
    title: "HIRAYA BANK",
    badge: "01 Fintech Onboarding",
    desc: "Designed end-to-end identity verification (e-KYC) and instant account opening flow with real-time biometric feedback.",
    screen: `
      <div class="flex items-center gap-4">
        <div class="w-20 h-28 rounded-xl bg-slate-800 border border-slate-700 p-2 flex flex-col justify-between shadow-lg">
          <div class="w-full h-1.5 bg-orange-500 rounded"></div>
          <div class="space-y-1">
            <div class="w-full h-2 bg-slate-600 rounded"></div>
            <div class="w-3/4 h-2 bg-slate-700 rounded"></div>
          </div>
          <div class="w-full py-1 bg-blue-600 rounded text-[7px] text-center font-bold">Verify ID</div>
        </div>
        <div>
          <span class="text-xs uppercase text-orange-400 font-bold tracking-wider">Mobile Prototype</span>
          <h4 class="font-display text-xl font-bold mt-0.5">Biometric KYC Flow</h4>
          <p class="text-xs text-slate-300 mt-1 max-w-sm">99.4% completion rate achieved in cognitive walkthrough testing.</p>
        </div>
      </div>
    `,
    tags: ["Fintech", "e-KYC Flow", "Figma", "Research"]
  },
  {
    title: "HIRAYA BANK DASHBOARD",
    badge: "02 Account Management",
    desc: "Modular card UI enabling zero-lag balance transfers, QR payments, and real-time expense category breakdowns.",
    screen: `
      <div class="flex items-center gap-4">
        <div class="w-20 h-28 rounded-xl bg-slate-800 border border-slate-700 p-2 flex flex-col justify-between shadow-lg">
          <div class="text-[8px] text-slate-400">Total Balance</div>
          <div class="text-[9px] font-bold text-white">₱48,520.00</div>
          <div class="grid grid-cols-2 gap-1">
            <div class="h-4 bg-slate-700 rounded text-[6px] flex items-center justify-center">Send</div>
            <div class="h-4 bg-slate-700 rounded text-[6px] flex items-center justify-center">Pay</div>
          </div>
        </div>
        <div>
          <span class="text-xs uppercase text-emerald-400 font-bold tracking-wider">High-Fidelity Screen</span>
          <h4 class="font-display text-xl font-bold mt-0.5">Financial Hub UI</h4>
          <p class="text-xs text-slate-300 mt-1 max-w-sm">Clear visual hierarchy with low cognitive overhead.</p>
        </div>
      </div>
    `,
    tags: ["Design System", "Dark Mode", "Micro-UX"]
  },
  {
    title: "DESIGN SYSTEM TOKENS",
    badge: "03 Component Library",
    desc: "Comprehensive atomic design library containing 85+ auto-layout components, color tokens, and accessibility standards.",
    screen: `
      <div class="flex items-center gap-4">
        <div class="w-20 h-28 rounded-xl bg-slate-800 border border-slate-700 p-2 flex flex-col justify-around shadow-lg">
          <div class="flex gap-1 justify-center">
            <div class="w-3 h-3 rounded-full bg-orange-500"></div>
            <div class="w-3 h-3 rounded-full bg-blue-500"></div>
            <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <div class="w-full h-3 bg-slate-700 rounded-md"></div>
          <div class="w-full h-3 bg-blue-500/40 rounded-md"></div>
        </div>
        <div>
          <span class="text-xs uppercase text-cyan-400 font-bold tracking-wider">Design Architecture</span>
          <h4 class="font-display text-xl font-bold mt-0.5">Atomic Tokens</h4>
          <p class="text-xs text-slate-300 mt-1 max-w-sm">Seamless developer handoff via synchronized variables.</p>
        </div>
      </div>
    `,
    tags: ["Tokens", "WCAG 2.1", "Atomic UI"]
  }
];

let currentSlide = 0;

function renderSlide(index) {
  const slide = projectSlides[index];
  const container = document.getElementById('project-slide-content');
  const counter = document.getElementById('carousel-counter');
  const tagContainer = document.getElementById('project-tags');

  counter.textContent = `${index + 1} / ${projectSlides.length}`;
  
  container.innerHTML = `
    <div class="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-accent-orange font-mono text-[10px] font-bold mb-3 tracking-wide">
      ${slide.badge}
    </div>
    <div class="my-1">
      ${slide.screen}
    </div>
  `;

  tagContainer.innerHTML = slide.tags.map(t => 
    `<span class="px-2.5 py-1 rounded-md bg-white/10 text-white/90 font-medium">${t}</span>`
  ).join('');

  lucide.createIcons();
}

document.getElementById('carousel-next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % projectSlides.length;
  renderSlide(currentSlide);
});

document.getElementById('carousel-prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + projectSlides.length) % projectSlides.length;
  renderSlide(currentSlide);
});

// -------------------------------------------------------------
// 3. THEME TOGGLE (DARK / LIGHT)
// -------------------------------------------------------------
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  lucide.createIcons();
});

// -------------------------------------------------------------
// 4. CERTIFICATE VERIFICATION MODAL
// -------------------------------------------------------------
const certModal = document.getElementById('cert-modal');
const certContent = document.getElementById('cert-modal-content');

const certDetails = {
  google: {
    badgeImg: "google-ux-design-professional-certificate-v-3.png",
    category: "Verified Credential",
    title: "Google UX Design Professional Certificate",
    issuedTo: "CASSIOPEIA OBELIDOR",
    date: "October 15, 2026",
    curriculum: "8 Courses Complete",
    platform: "Coursera / Google Career Certificates",
    primaryLink: "https://www.coursera.org/account/accomplishments/professional-cert/9Z1EHJYGOR11",
    primaryText: "Open Coursera Verification Link",
    credlyLink: "https://www.credly.com/badges/09d24d43-8ccf-48fe-ab45-7ac649b974dd/public_url"
  },
  genai: {
    badgeImg: "generative-ai-for-ui-ux-design-specialization.png",
    category: "Specialized Credential",
    title: "Generative AI for UI UX Design",
    issuedTo: "CASSIOPEIA OBELIDOR",
    date: "October 21, 2026",
    curriculum: "AI-Powered Wireframing, Prompt Architecture & Generative Workflows",
    platform: "Coursera Specialization",
    primaryLink: "https://www.coursera.org/account/accomplishments/specialization/THDMZRQA0R4E",
    primaryText: "Open Coursera Verification Link",
    credlyLink: "https://www.credly.com/badges/ea4fa101-1c28-46ff-866f-3f6aae034d01/public_url"
  },
  figma: {
    badgeImg: "badge-figma.png",
    category: "Technical Mastery",
    title: "Professional Figma UI / UX Design",
    issuedTo: "CASSIOPEIA OBELIDOR",
    date: "Verified",
    curriculum: "Design Systems, Auto-Layout 5.0, Interactive Tokens & Responsive Handoff",
    platform: "Coursera / Design Curriculum",
    primaryLink: "https://www.coursera.org/account/accomplishments/specialization",
    primaryText: "Open Coursera Verification Link",
    credlyLink: "https://www.credly.com"
  }
};

function openCertModal(type) {
  const cert = certDetails[type] || certDetails.google;

  certContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center gap-3">
        <div class="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
          <img 
            src="${cert.badgeImg}" 
            alt="${cert.title} Badge" 
            class="w-full h-full object-contain"
          />
        </div>
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">${cert.category}</span>
          <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">${cert.title}</h3>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-cream-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
        <div class="flex justify-between">
          <span class="text-slate-500">Issued To:</span>
          <span class="font-bold text-slate-900 dark:text-white">${cert.issuedTo}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">Issued Date:</span>
          <span class="font-medium text-slate-800 dark:text-slate-200">${cert.date}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">Curriculum:</span>
          <span class="font-medium text-emerald-600 text-right max-w-[240px] truncate">${cert.curriculum}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-500">Platform:</span>
          <span class="font-medium">${cert.platform}</span>
        </div>
      </div>

      <div class="space-y-2 pt-2">
        <a href="${cert.primaryLink}" target="_blank" rel="noreferrer" class="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm">
          <span>${cert.primaryText}</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
        ${cert.credlyLink ? `
          <a href="${cert.credlyLink}" target="_blank" rel="noreferrer" class="w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition">
            <span>View Badge on Credly</span>
            <i data-lucide="badge-check" class="w-3.5 h-3.5 text-blue-500"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  certModal.classList.remove('hidden');
  certModal.classList.add('flex');
  lucide.createIcons();
}

function closeCertModal() {
  certModal.classList.add('hidden');
  certModal.classList.remove('flex');
}

// -------------------------------------------------------------
// 5. DYNAMIC CASE STUDIES DATA (3 INDEPENDENT PROJECTS)
// -------------------------------------------------------------
const caseStudiesData = [
  // -----------------------------------------------------------
  // PROJECT 1: HIRAYA BANK - e-KYC ONBOARDING
  // -----------------------------------------------------------
  {
    id: "hiraya-kyc",
    badge: "01 Fintech Onboarding",
    title: "HIRAYA BANK — Onboarding & e-KYC",
    tagline: "What's your end-game? Seamless Mobile Banking & Guided e-KYC Onboarding",
    client: "Google Career Capstone",
    duration: "7 months",
    date: "February 2024",
    role: "UX Lead & Interaction Designer",
    slidesLink: "https://docs.google.com/presentation/d/YOUR_SLIDES_ID_1/view",
    userFlowImg: "user-flow-diagram.png",
    flowDesc: "Happy path from phone authentication to MPIN setup with conditional recovery branches.",
    version: "v2.4 Prototype",
    device: "Mobile Viewport • 390 × 844 px",
    heroPreview: `
      <div class="w-16 h-28 rounded-xl bg-slate-950 border border-slate-700 p-1.5 flex flex-col justify-between shadow-lg transform -rotate-3 scale-95">
        <div class="w-full h-1 bg-accent-orange rounded"></div>
        <div class="space-y-1">
          <div class="w-full h-1.5 bg-slate-700 rounded"></div>
          <div class="w-3/4 h-1.5 bg-slate-800 rounded"></div>
        </div>
        <div class="w-full py-0.5 bg-blue-600 rounded text-[5px] text-center font-bold">Verify</div>
      </div>
      <div class="w-18 h-32 rounded-xl bg-slate-950 border border-accent-orange/60 p-2 flex flex-col justify-between shadow-xl z-10 transform scale-105">
        <div class="flex justify-between text-[6px] text-slate-400">
          <span>9:41</span>
          <i data-lucide="wifi" class="w-2 h-2 text-slate-400"></i>
        </div>
        <div class="h-10 border border-dashed border-accent-orange bg-orange-500/10 rounded flex flex-col items-center justify-center">
          <i data-lucide="camera" class="w-3 h-3 text-accent-orange mb-0.5"></i>
          <span class="text-[5px] text-accent-orange font-bold">ID Biometrics</span>
        </div>
        <div class="w-full py-1 bg-accent-orange rounded text-[6px] text-center font-bold text-white">Continue</div>
      </div>
    `,
    vision: "HIRAYA BANK is a next-generation mobile banking experience designed for unbanked and digital-first Filipinos. The goal was to eliminate onboarding abandonment through an assisted 3-step e-KYC flow featuring real-time camera alignment guides and instant validation.",
    challenges: [
      "Eliminate high user drop-off during rigid manual document scanning.",
      "Design an accessible, non-intimidating interface for first-time digital savers.",
      "Address security hesitations and fear of sensitive identity theft.",
      "Provide instantaneous validation feedback with zero cryptic error prompts."
    ],
    researchQuestions: [
      "What is the product and who is it for?",
      "What friction causes users to abandon camera identification?",
      "Which users are the most vulnerable to onboarding drop-offs?",
      "What security cues make users feel their credentials are encrypted?",
      "How do competitors handle identity rejection fallbacks?",
      "What micro-copy reduces anxiety during verification countdowns?"
    ],
    personas: [
      {
        role: "College Student",
        age: 21,
        edu: "4th Year BSIT",
        town: "Naga City, Cam Sur",
        family: "Youngest of two siblings",
        occ: "Full-Time Student",
        quote: `"I just want a quick and stress-free way to verify my account without submitting endless documents that students don't have."`,
        goals: [
          "Open an active digital account using a School ID or PhilSys card.",
          "Complete biometric face-scan without repetitive lighting errors.",
          "Clear status confirmation immediately upon document submission."
        ],
        frustrations: [
          "Being asked for electric bills or employment certificates.",
          "Cryptic scan errors with no guidance on how to fix glare.",
          "Waiting days to access allowance funds sent by parents."
        ],
        scenario: "Opening a student savings account from a dormitory room to receive allowance directly without visiting a physical branch."
      },
      {
        role: "Remote Freelancer",
        age: 25,
        edu: "BS in Multimedia Arts",
        town: "Legazpi City, Albay",
        family: "Single, Living independently",
        occ: "Freelance UI Designer",
        quote: `"I need a digital banking flow that verifies my account in minutes so I can receive international client remittances without branch delays."`,
        goals: [
          "Open an active multi-currency digital savings account within 5 minutes.",
          "Complete e-KYC document scanning smoothly on first attempt using only a Philippine Passport.",
          "Receive real-time status notifications instead of waiting days for customer support emails."
        ],
        frustrations: [
          "Repetitive camera scan errors caused by minimal document glare with no actionable instructions.",
          "Requirement to upload billing statements under their own name despite living in rented co-living spaces.",
          "Long verification countdowns that trigger anxiety regarding identity security."
        ],
        scenario: "As a remote contractor working with global clients, opening an active digital savings wallet is critical for bi-weekly earnings. During typical bank registrations, document uploads frequently fail without indicating whether lighting or alignment was the issue."
      },
      {
        role: "MSME Merchant",
        age: 39,
        edu: "BS in Business Administration",
        town: "Naga City, Cam Sur",
        family: "Married, 2 Children",
        occ: "Retail Store Owner",
        quote: `"Managing our physical store leaves zero time to wait in bank queues. I need a straightforward app that secures my transactions seamlessly."`,
        goals: [
          "Authenticate quickly and generate an instant merchant QR Ph code for store checkout.",
          "Set a simple 6-digit MPIN and biometric login for fast cashier cash-ins.",
          "Clear visual indicators assuring that scanned government documents are kept encrypted."
        ],
        frustrations: [
          "Overly complicated registration pages with small input text and ambiguous tech jargon.",
          "Session timeouts that force the user to start the entire registration process over from scratch.",
          "Unclear requirements on valid ID secondary pages causing rejection delays."
        ],
        scenario: "Operating a busy retail shop requires continuous attention at the counter. The merchant needs to set up a digital banking account between inventory restocking."
      }
    ],
    usabilityCards: [
      { icon: "lock", color: "rose", title: "Not Secure.", desc: "Users hesitated to upload valid IDs without visual verification badges or encrypted privacy reassurance icons." },
      { icon: "fingerprint", color: "purple", title: "Too Many Taps.", desc: "Multi-step forms caused fatigue; users preferred single-screen forms that automatically jump to the next input." },
      { icon: "flame", color: "amber", title: "Unclear Status.", desc: "Spinning loaders without percentage progress caused users to close the app thinking it had crashed." },
      { icon: "mouse-pointer", color: "blue", title: "No Nested Menus.", desc: "Replaced deep drop-down pickers with flat segmented pill selectors for faster one-tap selection." }
    ],
    takeaways: "Designing HIRAYA BANK's onboarding journey highlighted that the most polished UI is meaningless if users feel anxious during verification. True UX accessibility lies in clear recovery pathways, reassurance at every tap, and reducing cognitive friction through intuitive defaults.",
    screens: [
      {
        tag: "Screen 01 • Camera Viewfinder",
        title: "Guided e-KYC Frame & Auto-Capture",
        desc: "Assists first-time savers by automatically framing valid government IDs with real-time contrast and glare detection, removing failed capture friction.",
        specs: ["Sub-2s recognition", "Glare angle detection", "One-handed thumb zone"],
        phoneUi: `
          <div class="flex items-center justify-between text-[8px] text-slate-400 font-mono">
            <span>9:41</span>
            <div class="flex gap-1 items-center">
              <i data-lucide="wifi" class="w-2.5 h-2.5"></i>
              <span class="w-3 h-1.5 bg-slate-400 rounded-xs"></span>
            </div>
          </div>
          <div class="space-y-1">
            <span class="text-[9px] font-bold text-white block">Position Government ID</span>
            <p class="text-[7px] text-slate-400">Align front side within frame</p>
          </div>
          <div class="h-28 border-2 border-dashed border-accent-orange bg-orange-500/10 rounded-lg flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-orange/20 to-transparent animate-pulse"></div>
            <i data-lucide="camera" class="w-5 h-5 text-accent-orange mb-1 relative z-10"></i>
            <span class="text-[8px] font-semibold text-accent-orange relative z-10">Scanning ID Details...</span>
          </div>
          <button class="w-full py-2 bg-accent-orange text-white rounded-lg text-[8px] text-center font-bold shadow-md">
            Capture ID
          </button>
        `
      },
      {
        tag: "Screen 02 • Optical Verification",
        title: "Instant OCR Field Extraction",
        desc: "Parses extracted identity data into pre-filled editable form fields so users review their information without manual keystrokes.",
        specs: ["Instant field population", "Inline typo corrections", "Bank-grade TLS 1.3 encryption"],
        phoneUi: `
          <div class="flex items-center justify-between text-[8px] text-slate-400 font-mono">
            <span>9:41</span>
            <i data-lucide="shield-check" class="w-2.5 h-2.5 text-emerald-400"></i>
          </div>
          <div class="space-y-1.5">
            <span class="text-[9px] font-bold text-white block">Confirm Extracted Details</span>
            <div class="p-1.5 rounded bg-slate-900 border border-slate-800 space-y-0.5">
              <span class="text-[6px] text-slate-400">Full Name</span>
              <p class="text-[7px] font-semibold text-slate-200">Cassiopeia Obelidor</p>
            </div>
            <div class="p-1.5 rounded bg-slate-900 border border-slate-800 space-y-0.5">
              <span class="text-[6px] text-slate-400">ID Number</span>
              <p class="text-[7px] font-semibold text-slate-200">•••• •••• 4091</p>
            </div>
          </div>
          <button class="w-full py-2 bg-blue-600 text-white rounded-lg text-[8px] text-center font-bold shadow-md">
            Confirm & Proceed
          </button>
        `
      },
      {
        tag: "Screen 03 • Security Setup",
        title: "6-Digit MPIN & Biometric Passcode",
        desc: "Flat, accessible numeric keypad designed for one-handed entry with immediate visual confirmation dots and biometric linking.",
        specs: ["Encrypted key-press hashing", "Masked input feedback", "Touch & Face ID toggle"],
        phoneUi: `
          <div class="flex items-center justify-between text-[8px] text-slate-400 font-mono">
            <span>9:41</span>
            <i data-lucide="lock" class="w-2.5 h-2.5 text-accent-orange"></i>
          </div>
          <div class="text-center space-y-1">
            <span class="text-[9px] font-bold text-white block">Create 6-Digit MPIN</span>
            <div class="flex justify-center gap-1.5 my-1">
              <span class="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span class="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span class="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span class="w-2 h-2 rounded-full bg-slate-700"></span>
              <span class="w-2 h-2 rounded-full bg-slate-700"></span>
              <span class="w-2 h-2 rounded-full bg-slate-700"></span>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-1 px-2 text-[8px] font-bold text-center">
            <div class="p-1.5 bg-slate-800/80 rounded">1</div>
            <div class="p-1.5 bg-slate-800/80 rounded">2</div>
            <div class="p-1.5 bg-slate-800/80 rounded">3</div>
            <div class="p-1.5 bg-slate-800/80 rounded">4</div>
            <div class="p-1.5 bg-slate-800/80 rounded">5</div>
            <div class="p-1.5 bg-slate-800/80 rounded">6</div>
          </div>
        `
      },
      {
        tag: "Screen 04 • Dashboard Ready",
        title: "Instant Account Activation & Card Hub",
        desc: "Unlocks immediate account services with generated virtual debit credentials, instant QR transfers, and an emergency balance mask toggle.",
        specs: ["Zero-lag activation", "One-tap QR generator", "Real-time ledger updates"],
        phoneUi: `
          <div class="flex items-center justify-between text-[8px] text-slate-400 font-mono">
            <span>9:41</span>
            <span class="text-[7px] text-emerald-400 font-bold">● Active</span>
          </div>
          <div class="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white space-y-2 shadow-md">
            <div class="flex justify-between items-center text-[6px]">
              <span>Hiraya Savings</span>
              <i data-lucide="credit-card" class="w-2.5 h-2.5"></i>
            </div>
            <div class="text-[10px] font-bold font-mono">₱25,000.00</div>
            <div class="text-[6px] tracking-widest text-orange-100">•••• 8821</div>
          </div>
          <div class="grid grid-cols-2 gap-1.5">
            <button class="py-1.5 bg-slate-800 rounded text-[7px] font-semibold text-slate-200">Send Money</button>
            <button class="py-1.5 bg-accent-orange rounded text-[7px] font-bold text-white">Scan QR Ph</button>
          </div>
        `
      }
    ]
  },

  // -----------------------------------------------------------
  // PROJECT 2: HIRAYA BANK DASHBOARD - FINANCIAL HUB
  // -----------------------------------------------------------
  {
    id: "hiraya-dashboard",
    badge: "02 Account Management",
    title: "Financial Hub & Dashboard",
    tagline: "Modular Card Architecture for Real-Time Balance & QR Payments",
    client: "Salesforce Internship / Capstone",
    duration: "4 months",
    date: "July 2025",
    role: "Product Designer & UI Specialist",
    slidesLink: "https://docs.google.com/presentation/d/YOUR_SLIDES_ID_2/view",
    userFlowImg: "user-flow-dashboard.png",
    flowDesc: "Transaction flow from home widget, QR scanning, biometric authorization, to real-time e-receipt generation.",
    version: "v3.1 Production",
    device: "Mobile Viewport • 390 × 844 px",
    heroPreview: `
      <div class="w-28 h-36 rounded-xl bg-slate-950 border border-emerald-500/60 p-2.5 flex flex-col justify-between shadow-xl z-10">
        <div class="flex justify-between text-[6px] text-slate-400">
          <span>Total Balance</span>
          <span class="text-emerald-400 font-bold">● Active</span>
        </div>
        <div class="text-[12px] font-bold text-white font-mono">₱48,520.00</div>
        <div class="grid grid-cols-2 gap-1 text-[6px]">
          <div class="py-1 bg-emerald-600/30 text-emerald-300 rounded text-center font-bold">Transfer</div>
          <div class="py-1 bg-blue-600/30 text-blue-300 rounded text-center font-bold">Pay QR</div>
        </div>
        <div class="space-y-1 pt-1 border-t border-slate-800">
          <div class="w-full h-1 bg-slate-800 rounded"></div>
          <div class="w-2/3 h-1 bg-slate-800 rounded"></div>
        </div>
      </div>
    `,
    vision: "To empower users with full visibility over their spending, instant QR Ph transfers, and automated micro-savings pots through a clutter-free card-based interface that works flawlessly in low-bandwidth conditions.",
    challenges: [
      "Overwhelming financial jargon and clustered transaction histories causing cognitive overload.",
      "Delayed transaction confirmation screens leading to accidental duplicate money transfers.",
      "Hidden account settings and confusing QR code payment activation buttons.",
      "Difficulty tracking monthly expense breakdowns without manual calculator computing."
    ],
    researchQuestions: [
      "How do users prioritize balance visibility versus transaction history on mobile?",
      "What visual indicators prevent accidental double-tap fund transfers?",
      "Which layout reduces time-to-transfer during physical merchant checkouts?",
      "How can dark mode optimize battery usage while retaining color-coded financial metrics?",
      "What insights do users expect from automatic spending categorization?",
      "How do we balance quick access with strict financial authorization layers?"
    ],
    personas: [
      {
        role: "Digital Daily Spender",
        age: 23,
        edu: "BS Accountancy Graduate",
        town: "Naga City, Cam Sur",
        family: "Eldest of three",
        occ: "Junior Auditor",
        quote: `"I want to see my available balance immediately when I open the app and send money via QR code in fewer than three taps."`,
        goals: [
          "Check instant account balances without tapping through multiple sub-menus.",
          "Scan merchant QR Ph codes smoothly at checkout counters.",
          "Categorize expenses automatically into food, bills, and transit."
        ],
        frustrations: [
          "Apps that hide transaction receipts behind complex archive tabs.",
          "Laggy balance refreshes that don't reflect fund transfers instantly.",
          "Intrusive promotional pop-ups blocking the main account dashboard."
        ],
        scenario: "Standing at a grocery cashier with a long queue behind, the user needs to pay via QR quickly. Cluttered dashboards with slow load times create extreme stress and slow down the checkout line."
      },
      {
        role: "Online Micro-Seller",
        age: 32,
        edu: "BS Information Systems",
        town: "Iriga City, Bicol",
        family: "Married with 1 Child",
        occ: "E-Commerce Store Manager",
        quote: `"I manage dozens of daily transfers. I need an instant search tool to confirm client payments without waiting for bank SMS alerts."`,
        goals: [
          "Filter incoming customer transactions by date, sender name, and amount.",
          "Download proof-of-payment receipts directly as shareable images.",
          "Maintain multiple business sub-wallets under one dashboard."
        ],
        frustrations: [
          "Generic transaction entries showing only random reference numbers instead of sender names.",
          "Inability to generate instant official transaction receipts.",
          "Unresponsive transfer buttons during peak evening hours."
        ],
        scenario: "Balancing multiple online orders every evening requires fast verification of customer deposits. Unclear transaction descriptions force the user to cross-reference multiple spreadsheets manually."
      },
      {
        role: "Budget-Conscious Saver",
        age: 28,
        edu: "BS Nursing",
        town: "Daet, Camarines Norte",
        family: "Lives with parents",
        occ: "Registered Nurse",
        quote: `"I want an app that visually separates my emergency savings from my daily allowance so I don't accidentally overspend."`,
        goals: [
          "Lock designated savings into high-yield goal vaults.",
          "Receive visual alerts when nearing monthly dining out budgets.",
          "One-tap toggle to hide account balances in public places."
        ],
        frustrations: [
          "Lumping all funds into a single balance number, leading to accidental spending.",
          "Complex savings setup requiring physical bank branch authorizations.",
          "Lack of privacy shields when opening the app on public transit."
        ],
        scenario: "Opening a banking app on a crowded commuter van makes the user uncomfortable having their account balance displayed in huge font. A dedicated privacy toggle is essential for commuting safety."
      }
    ],
    usabilityCards: [
      { icon: "eye-off", color: "rose", title: "Balance Privacy.", desc: "Added an instant eye-toggle to mask sensitive balance figures when opening the app in public environments." },
      { icon: "zap", color: "purple", title: "Instant QR Tap.", desc: "Placed the QR scanner as a permanent thumb-level floating action button for sub-2-second checkout payments." },
      { icon: "pie-chart", color: "amber", title: "Smart Categories.", desc: "Automated color-coded tags (Dining, Utilities, Shopping) to eliminate manual spending calculations." },
      { icon: "check-check", color: "blue", title: "Zero Duplicates.", desc: "Engineered haptic confirmation sliders that prevent accidental double-tap money transfers." }
    ],
    takeaways: "Developing the Financial Hub proved that simplicity in finance is hard work. Prioritizing instant confirmation states and giving users granular control over their privacy transforms banking apps from stressful utility tools into trusted daily companions.",
    screens: [
      {
        tag: "Screen 01 • Financial Hub",
        title: "Modular Balance & Quick Action Cards",
        desc: "Instant card carousel separating main savings, micro-vaults, and active cards with quick QR access.",
        specs: ["Instant balance masking", "One-tap statements", "Real-time ledger updates"],
        phoneUi: `
          <div class="flex justify-between text-[8px] text-slate-400 font-mono">
            <span>9:41</span>
            <span class="text-emerald-400 font-bold">● Active</span>
          </div>
          <div class="p-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 text-white space-y-1.5 shadow-md mt-2">
            <div class="flex justify-between text-[6px]">
              <span>Primary Wallet</span>
              <i data-lucide="eye" class="w-2.5 h-2.5"></i>
            </div>
            <div class="text-[11px] font-bold font-mono">₱48,520.00</div>
          </div>
          <div class="grid grid-cols-2 gap-1.5 mt-3">
            <button class="py-1.5 bg-slate-800 rounded text-[7px] text-slate-200">Send Money</button>
            <button class="py-1.5 bg-emerald-600 rounded text-[7px] font-bold text-white">Scan QR Ph</button>
          </div>
        `
      },
      {
        tag: "Screen 02 • Spending Analytics",
        title: "Automated Category Breakdown",
        desc: "Color-coded micro-charts dividing expenses into Dining, Bills, and Transit with budget limit thresholds.",
        specs: ["Auto-categorization engine", "Budget threshold warnings", "Exportable CSV reports"],
        phoneUi: `
          <div class="flex justify-between text-[8px] text-slate-400 font-mono">
            <span>Analytics</span>
            <span class="text-slate-400 text-[7px]">Oct 2026</span>
          </div>
          <div class="h-16 flex items-end gap-1.5 justify-center py-2 border-b border-slate-800">
            <div class="w-3 bg-rose-500 rounded-t h-8"></div>
            <div class="w-3 bg-blue-500 rounded-t h-12"></div>
            <div class="w-3 bg-amber-500 rounded-t h-6"></div>
            <div class="w-3 bg-emerald-500 rounded-t h-10"></div>
          </div>
          <div class="text-[7px] text-slate-300 space-y-1 mt-2">
            <div class="flex justify-between"><span>Dining & Food</span><span class="font-bold text-white">42%</span></div>
            <div class="flex justify-between"><span>Utilities & Bills</span><span class="font-bold text-white">28%</span></div>
          </div>
        `
      },
      {
        tag: "Screen 03 • QR Ph Scanner",
        title: "Sub-2s Merchant Checkout",
        desc: "Integrated camera scanner with automatic merchant recognition, amount verification, and haptic feedback confirmation.",
        specs: ["National QR Ph compliance", "Instant fee-free transfer", "Dynamic merchant logo display"],
        phoneUi: `
          <div class="flex justify-between text-[8px] text-slate-400 font-mono">
            <span>Scan to Pay</span>
            <i data-lucide="zap" class="w-2.5 h-2.5 text-accent-orange"></i>
          </div>
          <div class="h-24 border-2 border-dashed border-emerald-500 bg-emerald-500/10 rounded-lg flex flex-col items-center justify-center p-2 mt-2">
            <i data-lucide="qr-code" class="w-6 h-6 text-emerald-400 mb-1"></i>
            <span class="text-[7px] font-semibold text-emerald-300">Align QR Ph Code</span>
          </div>
          <div class="p-1 rounded bg-slate-900 border border-slate-800 text-[6px] text-slate-400 text-center mt-2">
            Zero fees to all BancNet & QR Ph merchants
          </div>
        `
      },
      {
        tag: "Screen 04 • Smart Vaults",
        title: "Goal-Oriented Micro-Savings",
        desc: "Locked high-interest vault buckets with progress radial bars and automated round-up deposits on every daily purchase.",
        specs: ["Automated change round-ups", "Flexible lock-in terms", "Visual celebration milestones"],
        phoneUi: `
          <div class="flex justify-between text-[8px] text-slate-400 font-mono">
            <span>Target Vaults</span>
            <span class="text-accent-orange font-bold text-[7px]">+ New Vault</span>
          </div>
          <div class="p-2 rounded bg-slate-900 border border-slate-800 space-y-1 mt-2">
            <div class="flex justify-between text-[7px]"><span>Emergency Fund</span><span class="font-bold text-white">₱15,000 / ₱30k</span></div>
            <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div class="bg-accent-orange h-full w-1/2"></div></div>
          </div>
          <div class="p-2 rounded bg-slate-900 border border-slate-800 space-y-1 mt-1.5">
            <div class="flex justify-between text-[7px]"><span>Figma Config 2027</span><span class="font-bold text-white">₱22,000 / ₱25k</span></div>
            <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div class="bg-emerald-500 h-full w-[88%]"></div></div>
          </div>
        `
      }
    ]
  },

  // -----------------------------------------------------------
  // PROJECT 3: ATOMIC DESIGN SYSTEM & COMPONENT TOKENS
  // -----------------------------------------------------------
  {
    id: "design-system",
    badge: "03 Component Library",
    title: "ATOMIC TOKENS — Enterprise Design System",
    tagline: "Scalable Component Library, Design Tokens, & Frictionless Developer Handoff",
    client: "Design System Architecture",
    duration: "3 months",
    date: "May 2026",
    role: "Design Systems Engineer & UI Lead",
    slidesLink: "https://docs.google.com/presentation/d/YOUR_SLIDES_ID_3/view",
    userFlowImg: "user-flow-tokens.png",
    flowDesc: "Token lifecycle from design variable definition in Figma, JSON export, to Flutter/Tailwind front-end compilation.",
    version: "v4.0 Architecture",
    device: "Figma Canvas • Auto-Layout 5.0",
    heroPreview: `
      <div class="w-32 h-36 rounded-xl bg-slate-950 border border-cyan-500/60 p-2.5 flex flex-col justify-around shadow-xl z-10">
        <div class="flex gap-1.5 justify-center">
          <div class="w-3.5 h-3.5 rounded-full bg-cyan-400"></div>
          <div class="w-3.5 h-3.5 rounded-full bg-purple-400"></div>
          <div class="w-3.5 h-3.5 rounded-full bg-amber-400"></div>
        </div>
        <div class="w-full h-3 bg-slate-800 rounded border border-slate-700 flex items-center px-1">
          <span class="text-[5px] text-cyan-300 font-mono">--color-primary</span>
        </div>
        <div class="w-full h-3 bg-slate-800 rounded border border-slate-700 flex items-center px-1">
          <span class="text-[5px] text-purple-300 font-mono">--radius-pill: 9999px</span>
        </div>
        <div class="w-full py-1 bg-cyan-500/20 text-cyan-300 text-[6px] text-center font-bold rounded">
          Sync Tokens (JSON)
        </div>
      </div>
    `,
    vision: "To establish a standardized design language containing 85+ modular components, WCAG AA accessibility color pairings, and automated variable tokens that cut developer handoff time by 60%.",
    challenges: [
      "Inconsistent button paddings, border radii, and color hex values across disparate screens.",
      "Manual and error-prone CSS redlining during developer handoff meetings.",
      "Poor dark-mode contrast ratios that failed accessibility audits on low-cost Android displays.",
      "Lack of interactive states (hover, pressed, disabled, loading) causing front-end developer guesswork."
    ],
    researchQuestions: [
      "What token taxonomy best bridges Figma Variables with Flutter/React codebases?",
      "How do we maintain accessible contrast ratios across both Light and Dark mode palettes?",
      "Which components exhibit the highest reusability across web and mobile surfaces?",
      "How can auto-layout 5.0 eliminate static pixel frames for responsive layouts?",
      "What documentation format enables front-end engineers to inspect tokens independently?",
      "How do we version-control component library updates without breaking legacy screens?"
    ],
    personas: [
      {
        role: "Front-End Developer",
        age: 27,
        edu: "BS Computer Science",
        town: "Naga City, Cam Sur",
        family: "Single",
        occ: "Flutter Mobile Developer",
        quote: `"I want design files that use exact design tokens and variables so I don't have to guess hex codes and padding values."`,
        goals: [
          "Export synchronized JSON token variables directly into Flutter ThemeData.",
          "Inspect component states (default, active, error) in one organized Figma page.",
          "Reduce UI review iterations and pixel-pushing revision cycles."
        ],
        frustrations: [
          "Design frames with detached component instances and arbitrary pixel margins.",
          "Ambiguous responsive behavior across varying mobile screen viewports.",
          "Undocumented micro-interaction curve specifications."
        ],
        scenario: "Implementing a new screen often stalls when designs contain custom hardcoded color shades instead of standardized palette tokens, leading to code inconsistencies and broken dark-mode themes."
      },
      {
        role: "Junior UI Designer",
        age: 22,
        edu: "BS Information Technology",
        town: "Legazpi City, Albay",
        family: "Youngest sibling",
        occ: "Associate Product Designer",
        quote: `"I need a structured component kit so I can build prototypes quickly without rebuilding input fields from scratch."`,
        goals: [
          "Drag-and-drop auto-layout components that snap naturally into any phone frame.",
          "Switch button variants and states with a single click in Figma properties.",
          "Ensure designs are automatically WCAG compliant out of the box."
        ],
        frustrations: [
          "Static groups instead of flexible auto-layout frames that break when editing text.",
          "Unlabeled color libraries with dozens of identical gray shades.",
          "Lack of clear documentation on when to use specific icon styles."
        ],
        scenario: "Designing rapid wireframes for client sprints becomes tedious when basic inputs and headers must be reconstructed from raw rectangles rather than pulled from a verified component library."
      },
      {
        role: "Product Quality Lead",
        age: 34,
        edu: "BS Computer Engineering",
        town: "Naga City, Cam Sur",
        family: "Married",
        occ: "QA & Accessibility Analyst",
        quote: `"Accessibility is not an afterthought. Every button and text pairing must pass automated WCAG 2.1 AA audits."`,
        goals: [
          "Verify contrast ratios automatically across all component variants.",
          "Ensure touch targets meet minimum 48x48dp mobile ergonomics.",
          "Maintain unified spacing scales (4pt, 8pt, 16pt, 24pt, 32pt) across the app."
        ],
        frustrations: [
          "Inaccessible light-gray text on white backgrounds failing legibility standards.",
          "Tiny tap areas causing mis-taps on compact mobile screens.",
          "Inconsistent font hierarchies across different feature modules."
        ],
        scenario: "Conducting pre-launch QA checks reveals dozens of accessibility violations because designers picked colors manually without adhering to tokenized contrast rules."
      }
    ],
    usabilityCards: [
      { icon: "layers", color: "rose", title: "Atomic Tokens.", desc: "Structured variables into Primitive, Semantic, and Component-level tokens for foolproof scalability." },
      { icon: "check-circle", color: "purple", title: "WCAG AA Checked.", desc: "Audited every color pair to guarantee minimum 4.5:1 contrast across both Light and Dark themes." },
      { icon: "sliders", color: "amber", title: "Auto-Layout 5.0.", desc: "Every component is 100% fluid, automatically adjusting padding based on text content and viewport width." },
      { icon: "code", color: "blue", title: "Zero Guesswork.", desc: "Exported tokens directly to JSON/CSS variables, reducing front-end development turnaround by 60%." }
    ],
    takeaways: "Building an atomic design system proved that good systems design is fundamentally about empathy for your teammates. By creating unified, accessible, and automated tokens, we freed designers and engineers to focus on solving user problems rather than arguing over pixel margins.",
    screens: [
      {
        tag: "Screen 01 • Design Tokens Hub",
        title: "Primitive & Semantic Token Table",
        desc: "Central repository defining global color variables, typography scales, elevation shadows, and corner radii.",
        specs: ["W3C Token Spec compliant", "Bidirectional Figma-to-Code sync", "Dark/Light variable modes"],
        phoneUi: `
          <div class="text-[8px] font-mono text-cyan-400 font-bold mb-1">Tokens Matrix</div>
          <div class="space-y-1.5 text-[7px]">
            <div class="p-1 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span class="text-slate-400">primary-500</span>
              <span class="font-mono text-cyan-300">#06B6D4</span>
            </div>
            <div class="p-1 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span class="text-slate-400">surface-card</span>
              <span class="font-mono text-slate-200">#1E232B</span>
            </div>
            <div class="p-1 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span class="text-slate-400">radius-md</span>
              <span class="font-mono text-amber-300">12px</span>
            </div>
          </div>
          <button class="w-full py-1.5 bg-cyan-600 rounded text-[7px] font-bold text-white mt-3">Export JSON</button>
        `
      },
      {
        tag: "Screen 02 • Component State Variants",
        title: "Button & Input Matrix",
        desc: "Exhaustive component states mapping default, hover, active, focus, loading, and disabled permutations.",
        specs: ["Zero detached components", "Accessible focus rings", "Fluid container responsiveness"],
        phoneUi: `
          <div class="text-[8px] font-mono text-slate-400 mb-1">Button Component</div>
          <div class="space-y-1.5">
            <button class="w-full py-1.5 bg-cyan-500 text-white rounded text-[7px] font-bold">Default State</button>
            <button class="w-full py-1.5 bg-cyan-600 text-white rounded text-[7px] font-bold shadow-inner">Active Pressed</button>
            <button class="w-full py-1.5 bg-slate-800 text-slate-500 rounded text-[7px] cursor-not-allowed">Disabled State</button>
          </div>
        `
      },
      {
        tag: "Screen 03 • Color Contrast Grid",
        title: "WCAG 2.1 AA Compliance Checker",
        desc: "Pre-tested foreground and background color combinations guaranteeing at least 4.5:1 ratio for normal body text.",
        specs: ["Automated contrast validation", "Color-blindness simulation modes", "Tokenized semantic states"],
        phoneUi: `
          <div class="text-[8px] font-mono text-slate-400 mb-1">Accessibility Checker</div>
          <div class="space-y-1 text-[7px]">
            <div class="p-1.5 rounded bg-emerald-950/60 border border-emerald-800 flex items-center justify-between">
              <span class="text-emerald-300">Text on Dark Surface</span>
              <span class="px-1 rounded bg-emerald-500 text-slate-950 font-bold">12.4:1 Pass</span>
            </div>
            <div class="p-1.5 rounded bg-blue-950/60 border border-blue-800 flex items-center justify-between">
              <span class="text-blue-300">Button Label Contrast</span>
              <span class="px-1 rounded bg-blue-500 text-white font-bold">7.1:1 Pass</span>
            </div>
          </div>
        `
      },
      {
        tag: "Screen 04 • Dev Handoff Inspect",
        title: "Zero-Latency Developer Mode",
        desc: "Interactive spec panel revealing exact padding tokens, typography classes, and direct Flutter ThemeData exports.",
        specs: ["CSS & Flutter snippet generation", "Asset SVG auto-packaging", "Click-to-copy variable names"],
        phoneUi: `
          <div class="text-[8px] font-mono text-slate-400 mb-1">Developer Inspect</div>
          <div class="p-2 rounded bg-slate-900 border border-slate-800 font-mono text-[6px] text-cyan-300 space-y-1">
            <p>padding: EdgeInsets.symmetric(</p>
            <p class="pl-2">horizontal: AppSpacing.md,</p>
            <p class="pl-2">vertical: AppSpacing.sm,</p>
            <p>);</p>
          </div>
          <button class="w-full py-1 bg-slate-800 text-slate-200 rounded text-[7px] font-bold mt-2">Copy Code Snippet</button>
        `
      }
    ]
  }
];

let activeCaseStudyIndex = 0;
let activePersonaIndex = 0;

// -------------------------------------------------------------
// 6. POPULATE & RENDER MODAL ACCORDING TO SELECTED PROJECT
// -------------------------------------------------------------
function previewProjectDetails(index) {
  // Use currentSlide if no direct index passed
  const studyIndex = (typeof index === 'number') ? index : currentSlide;
  activeCaseStudyIndex = studyIndex;
  activePersonaIndex = 0;

  const data = caseStudiesData[studyIndex] || caseStudiesData[0];
  const projectModal = document.getElementById('project-modal');

  // I-reset ang scroll sa pinakataas bago mag-populate
  const modalScrollContainer = projectModal.querySelector('.overflow-y-auto');
  if (modalScrollContainer) {
    modalScrollContainer.scrollTop = 0;
  }

  // 1. Update Header, Metadata, and Hero Preview
  document.getElementById('modal-badge').textContent = data.badge;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-tagline').textContent = data.tagline;
  document.getElementById('modal-client').textContent = data.client;
  document.getElementById('modal-duration').textContent = data.duration;
  document.getElementById('modal-date').textContent = data.date;
  document.getElementById('modal-role').textContent = data.role;

  // I-update ang dynamic Hero Preview Box
  const heroMockup = document.getElementById('modal-hero-mockup');
  const heroVersion = document.getElementById('modal-hero-version');
  const heroDevice = document.getElementById('modal-hero-device');
  if (heroMockup && data.heroPreview) heroMockup.innerHTML = data.heroPreview;
  if (heroVersion && data.version) heroVersion.textContent = data.version;
  if (heroDevice && data.device) heroDevice.textContent = data.device;

  // 2. Update Vision & Numbered Challenges
  document.getElementById('modal-vision').textContent = data.vision;
  document.getElementById('modal-challenges').innerHTML = data.challenges.map((c, i) => `
    <li class="flex items-start gap-2.5">
      <span class="font-bold text-rose-500 font-mono text-xs mt-0.5">${i + 1})</span>
      <span>${c}</span>
    </li>
  `).join('');

  // 3. Update Kickoff Research Questions
  document.getElementById('modal-questions').innerHTML = data.researchQuestions.map(q => `
    <div class="p-4 rounded-xl bg-cream-50 dark:bg-slate-900 border-l-4 border-rose-500 text-xs italic text-slate-700 dark:text-slate-300 font-serif">
      "${q}"
    </div>
  `).join('');

  // 4. Update Personas Tabs Titles
  for (let i = 0; i < 3; i++) {
    const tabBtn = document.getElementById(`persona-tab-${i}`);
    if (tabBtn && data.personas[i]) {
      tabBtn.textContent = `${i + 1}. ${data.personas[i].role}`;
    }
  }
  renderPersona(0);

  // 5. Update Flow Diagram Image & Links
  const flowImg = document.getElementById('modal-flow-img');
  const flowDesc = document.getElementById('modal-flow-desc');
  const flowLink = document.getElementById('modal-flow-link');

  if (flowImg) {
    flowImg.src = data.userFlowImg;
    flowImg.alt = `${data.title} Flow Diagram`;
  }
  if (flowDesc) {
    flowDesc.textContent = data.flowDesc;
  }
  if (flowLink) {
    flowLink.href = data.userFlowImg;
  }

  // 6. Update Usability Iteration Cards
  document.getElementById('modal-usability-cards').innerHTML = data.usabilityCards.map(c => `
    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
      <div class="w-8 h-8 rounded-xl bg-${c.color}-100 dark:bg-${c.color}-950/60 text-${c.color}-600 flex items-center justify-center">
        <i data-lucide="${c.icon}" class="w-4 h-4"></i>
      </div>
      <h4 class="font-display font-bold text-xs text-slate-900 dark:text-white">${c.title}</h4>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">${c.desc}</p>
    </div>
  `).join('');

  // 7. Update Takeaways & Process Deck Link
  document.getElementById('modal-takeaways').textContent = data.takeaways;
  const deckBtn = document.getElementById('modal-deck-link');
  if (deckBtn) {
    deckBtn.href = data.slidesLink;
  }

  // 8. I-initialize ang Screens Carousel na naka-link sa napiling project
  currentScreenIndex = 0;
  renderScreenSlide(0);

  // Open Modal
  projectModal.classList.remove('hidden');
  projectModal.classList.add('flex');

  // I-scroll muli sa pinakataas pagkatapos ma-render
  requestAnimationFrame(() => {
    if (modalScrollContainer) modalScrollContainer.scrollTop = 0;
  });

  lucide.createIcons();
}

function closeProjectModal() {
  const projectModal = document.getElementById('project-modal');
  projectModal.classList.add('hidden');
  projectModal.classList.remove('flex');

  // I-reset din ang scroll sa pag-close
  const modalScrollContainer = projectModal.querySelector('.overflow-y-auto');
  if (modalScrollContainer) {
    modalScrollContainer.scrollTop = 0;
  }
}

// -------------------------------------------------------------
// 7. PERSONA RENDERER
// -------------------------------------------------------------
function switchPersona(index) {
  activePersonaIndex = index;
  renderPersona(index);
}

function renderPersona(index) {
  const data = caseStudiesData[activeCaseStudyIndex] || caseStudiesData[0];
  const p = data.personas[index] || data.personas[0];

  // Update tabs visual state
  for (let i = 0; i < 3; i++) {
    const tab = document.getElementById(`persona-tab-${i}`);
    if (tab) {
      if (i === index) {
        tab.className = "persona-tab px-3 py-1 rounded-lg font-bold bg-white dark:bg-charcoal-800 text-slate-900 dark:text-white shadow-2xs transition";
      } else {
        tab.className = "persona-tab px-3 py-1 rounded-lg font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition";
      }
    }
  }

  // Populate card details
  document.getElementById('persona-role').textContent = p.role;
  document.getElementById('persona-demographics').innerHTML = `
    <p><span class="font-bold text-slate-900 dark:text-white">Age:</span> ${p.age}</p>
    <p><span class="font-bold text-slate-900 dark:text-white">Education:</span> ${p.edu}</p>
    <p><span class="font-bold text-slate-900 dark:text-white">Hometown:</span> ${p.town}</p>
    <p><span class="font-bold text-slate-900 dark:text-white">Family:</span> ${p.family}</p>
    <p><span class="font-bold text-slate-900 dark:text-white">Occupation:</span> ${p.occ}</p>
  `;
  document.getElementById('persona-quote').textContent = p.quote;
  document.getElementById('persona-goals').innerHTML = p.goals.map(g => `<li>${g}</li>`).join('');
  document.getElementById('persona-frustrations').innerHTML = p.frustrations.map(f => `<li>${f}</li>`).join('');
  document.getElementById('persona-scenario').textContent = p.scenario;
}

// -------------------------------------------------------------
// 8. CONTACT FORM MODAL & FORMSPREE SUBMISSION
// -------------------------------------------------------------
const contactModal = document.getElementById('contact-modal');

function openContactModal() {
  contactModal.classList.remove('hidden');
  contactModal.classList.add('flex');
  lucide.createIcons();
}

function closeContactModal() {
  contactModal.classList.add('hidden');
  contactModal.classList.remove('flex');
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('contact-submit-btn');
  const fb = document.getElementById('contact-feedback');

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>Sending...</span>`;

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xnpjrrnp", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      fb.textContent = "Message sent! Cassiopeia will reach out promptly.";
      fb.className = "p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium text-center";
      fb.classList.remove('hidden');
      form.reset();

      setTimeout(() => {
        closeContactModal();
        fb.classList.add('hidden');
      }, 2000);
    } else {
      throw new Error("Form submission error");
    }
  } catch (error) {
    fb.textContent = "Failed to send message. Please try again.";
    fb.className = "p-2.5 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-medium text-center";
    fb.classList.remove('hidden');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<span>Send Message</span><i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>`;
    lucide.createIcons();
  }
}

// -------------------------------------------------------------
// 10. HIGH-FIDELITY SCREENS CAROUSEL DATA & CONTROLLER
// -------------------------------------------------------------
let currentScreenIndex = 0;

function renderScreenSlide(index) {
  const currentProject = caseStudiesData[activeCaseStudyIndex] || caseStudiesData[0];
  const screens = currentProject.screens || [];
  
  if (!screens.length) return;

  const slide = screens[index] || screens[0];
  const container = document.getElementById('final-screen-slide');
  const counter = document.getElementById('screen-counter');
  const dots = document.getElementById('screen-dots');

  if (!container) return;

  counter.textContent = `${index + 1} / ${screens.length}`;

  container.innerHTML = `
    <!-- Mockup Frame -->
    <div class="w-52 h-76 rounded-2xl bg-slate-950 border-2 border-slate-700 p-4 flex flex-col justify-between shadow-2xl shrink-0">
      ${slide.phoneUi}
    </div>

    <!-- Screen Details & Annotations -->
    <div class="space-y-4 flex-1 text-xs">
      <div>
        <span class="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
          ${slide.tag}
        </span>
        <h4 class="font-display font-bold text-lg text-white">
          ${slide.title}
        </h4>
      </div>

      <p class="text-slate-300 leading-relaxed text-xs sm:text-sm">
        ${slide.desc}
      </p>

      <div class="flex flex-wrap gap-2 pt-1">
        ${slide.specs.map(spec => `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[11px] text-slate-200">
            <i data-lucide="check" class="w-3 h-3 text-accent-orange"></i>
            ${spec}
          </span>
        `).join('')}
      </div>
    </div>
  `;

  // Render navigation dots
  dots.innerHTML = screens.map((_, i) => `
    <button type="button" onclick="goToScreenSlide(${i})" class="w-2.5 h-2.5 rounded-full transition-all ${i === index ? 'bg-accent-orange w-6' : 'bg-slate-700 hover:bg-slate-500'}" aria-label="Go to screen ${i + 1}"></button>
  `).join('');

  lucide.createIcons();
}

function nextScreenSlide() {
  const screens = (caseStudiesData[activeCaseStudyIndex] || caseStudiesData[0]).screens || [];
  if (!screens.length) return;
  currentScreenIndex = (currentScreenIndex + 1) % screens.length;
  renderScreenSlide(currentScreenIndex);
}

function prevScreenSlide() {
  const screens = (caseStudiesData[activeCaseStudyIndex] || caseStudiesData[0]).screens || [];
  if (!screens.length) return;
  currentScreenIndex = (currentScreenIndex - 1 + screens.length) % screens.length;
  renderScreenSlide(currentScreenIndex);
}

function goToScreenSlide(index) {
  currentScreenIndex = index;
  renderScreenSlide(currentScreenIndex);
}

// -------------------------------------------------------------
// 9. INITIALIZATION ON LOAD
// -------------------------------------------------------------
window.addEventListener('load', () => {
  lucide.createIcons();
  drawTopography();
  renderSlide(0);
});