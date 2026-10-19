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

  // Draw subtle contour waves
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
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  lucide.createIcons();
});

// -------------------------------------------------------------
// 4. CERTIFICATE VERIFICATION MODAL
// -------------------------------------------------------------
const certModal = document.getElementById('cert-modal');
const certContent = document.getElementById('cert-modal-content');

function openCertModal(type) {
  if (type === 'google') {
    certContent.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl">G</div>
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Verified Credential</span>
            <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white">Google UX Design Professional Certificate</h3>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-cream-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
          <div class="flex justify-between">
            <span class="text-slate-500">Issued To:</span>
            <span class="font-bold text-slate-900 dark:text-white">CASSIOPEIA OBELIDOR</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Issued Date:</span>
            <span class="font-medium text-slate-800 dark:text-slate-200">October 15, 2026</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Curriculum:</span>
            <span class="font-medium text-emerald-600">8 Courses Complete (Foundations to Capstone)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Platform:</span>
            <span class="font-medium">Coursera / Google Career Certificates</span>
          </div>
        </div>

        <div class="space-y-2 pt-2">
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/9Z1EHJYGOR11" target="_blank" rel="noreferrer" class="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-sm">
            <span>Open Coursera Verification Link</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
          <a href="https://www.credly.com/badges/09d24d43-8ccf-48fe-ab45-7ac649b974dd/public_url" target="_blank" rel="noreferrer" class="w-full py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition">
            <span>View Badge on Credly</span>
            <i data-lucide="badge-check" class="w-3.5 h-3.5 text-blue-500"></i>
          </a>
        </div>
      </div>
    `;
  }
  certModal.classList.remove('hidden');
  certModal.classList.add('flex');
  lucide.createIcons();
}

function closeCertModal() {
  certModal.classList.add('hidden');
  certModal.classList.remove('flex');
}

// -------------------------------------------------------------
// 5. PROJECT & CONTACT MODALS
// -------------------------------------------------------------
const projectModal = document.getElementById('project-modal');
function previewProjectDetails() {
  projectModal.classList.remove('hidden');
  projectModal.classList.add('flex');
}
function closeProjectModal() {
  projectModal.classList.add('hidden');
  projectModal.classList.remove('flex');
}

const contactModal = document.getElementById('contact-modal');
function openContactModal() {
  contactModal.classList.remove('hidden');
  contactModal.classList.add('flex');
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

  // Disable button and indicate sending
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
// 6. ONLOAD INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('load', () => {
  lucide.createIcons();
  drawTopography();
  renderSlide(0);
});