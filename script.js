// ─────────────────────────────────────────────
//  SPICE GARDEN — Restaurant Booking System
//  script.js
// ─────────────────────────────────────────────

// ── DATA ────────────────────────────────────────────────────────────────

const menuItems = [
  // Starters
  { name: 'Paneer Tikka',           emoji: '🧀', price: '₹380', cat: 'starter', desc: 'Marinated cottage cheese cubes grilled in a tandoor with bell peppers, onion and aromatic spices.', tag: "Chef's Pick" },
  { name: 'Chicken 65',             emoji: '🍗', price: '₹420', cat: 'starter', desc: 'Crispy fried chicken tossed in a tangy, spicy South Indian masala with curry leaves.', tag: 'Best Seller' },
  { name: 'Hara Bhara Kabab',       emoji: '🌿', price: '₹320', cat: 'starter', desc: 'Soft patties made with spinach, peas and paneer, pan-fried to golden perfection.', tag: 'Veg' },
  { name: 'Seekh Kabab',            emoji: '🍢', price: '₹460', cat: 'starter', desc: 'Minced lamb with ginger, garlic and fresh herbs skewered and cooked over charcoal.', tag: 'Signature' },

  // Main Course
  { name: 'Butter Chicken',         emoji: '🍛', price: '₹540', cat: 'main', desc: 'Tender chicken in a rich, velvety tomato-cream sauce with a blend of aromatic spices. A national favourite.', tag: 'Best Seller' },
  { name: 'Dal Makhani',            emoji: '🫘', price: '₹380', cat: 'main', desc: 'Black lentils slow-cooked overnight in a buttery tomato gravy — the jewel of Punjabi cuisine.', tag: 'Classic' },
  { name: 'Rogan Josh',             emoji: '🍖', price: '₹620', cat: 'main', desc: 'Kashmiri slow-braised lamb in a deep red sauce of whole spices, fennel and dried ginger.', tag: 'Signature' },
  { name: 'Palak Paneer',           emoji: '🥬', price: '₹420', cat: 'main', desc: 'Fresh cottage cheese cubes in a vibrant, spiced spinach gravy — wholesome and flavourful.', tag: 'Veg' },
  { name: 'Chettinad Chicken',      emoji: '🌶️', price: '₹580', cat: 'main', desc: 'Fiery South Indian curry from Tamil Nadu with kalpasi, marathi mokku and fresh coconut.', tag: 'Spicy' },
  { name: 'Biryani Hyderabadi',     emoji: '🍚', price: '₹660', cat: 'main', desc: 'Dum-cooked basmati rice with tender mutton, saffron, fried onions and whole spices.', tag: 'Must Try' },

  // Breads
  { name: 'Garlic Naan',            emoji: '🫓', price: '₹80',  cat: 'bread', desc: 'Soft leavened bread baked in a tandoor, brushed with garlic butter and fresh coriander.', tag: 'Popular' },
  { name: 'Laccha Paratha',         emoji: '🫓', price: '₹90',  cat: 'bread', desc: 'Multi-layered whole wheat bread with a flaky, crispy texture, cooked on a tawa.', tag: 'Classic' },
  { name: 'Amritsari Kulcha',       emoji: '🫓', price: '₹120', cat: 'bread', desc: 'Stuffed bread from the streets of Amritsar, filled with spiced potato and onion.', tag: 'Signature' },

  // Desserts
  { name: 'Gulab Jamun',            emoji: '🟤', price: '₹180', cat: 'dessert', desc: 'Soft milk-solid dumplings soaked in rose-flavoured sugar syrup. The quintessential Indian sweet.', tag: 'Classic' },
  { name: 'Rasmalai',               emoji: '🍮', price: '₹220', cat: 'dessert', desc: 'Soft chena patties soaked in chilled, saffron-infused sweetened milk with pistachios.', tag: 'Must Try' },
  { name: 'Kulfi Falooda',          emoji: '🍦', price: '₹260', cat: 'dessert', desc: 'Dense Indian ice cream on a bed of chilled vermicelli, rose syrup and basil seeds.', tag: 'New' },

  // Drinks
  { name: 'Mango Lassi',            emoji: '🥭', price: '₹180', cat: 'drinks', desc: 'Thick blended yoghurt with sweet Alphonso mango pulp, a pinch of cardamom and cream.', tag: 'Popular' },
  { name: 'Masala Chai',            emoji: '☕', price: '₹80',  cat: 'drinks', desc: 'Classic Indian spiced tea brewed with ginger, cardamom, cloves and full-cream milk.', tag: 'Classic' },
  { name: 'Fresh Lime Soda',        emoji: '🍋', price: '₹100', cat: 'drinks', desc: 'Hand-squeezed lime with chilled soda, black salt and your choice of sweet or salted.', tag: 'Light' },
];

const tables = [
  { id: 'T1', name: 'Table 1',    emoji: '🪑', cap: '2 Guests',  occupied: false },
  { id: 'T2', name: 'Table 2',    emoji: '🪑', cap: '2 Guests',  occupied: true  },
  { id: 'T3', name: 'Table 3',    emoji: '🛋️', cap: '4 Guests',  occupied: false },
  { id: 'T4', name: 'Table 4',    emoji: '🛋️', cap: '4 Guests',  occupied: false },
  { id: 'T5', name: 'Booth A',    emoji: '🍽️', cap: '4 Guests',  occupied: true  },
  { id: 'T6', name: 'Booth B',    emoji: '🍽️', cap: '6 Guests',  occupied: false },
  { id: 'T7', name: 'Terrace 1',  emoji: '🌿', cap: '6 Guests',  occupied: false },
  { id: 'T8', name: 'Private',    emoji: '👑', cap: '10 Guests', occupied: false },
];

const testimonials = [
  {
    text: 'The Butter Chicken here is unlike anything I have tasted in Delhi. Rich, perfectly balanced and absolutely authentic. We celebrated our anniversary here and the staff made it truly magical.',
    name: 'Akshay Devel',
    city: 'Delhi',
    stars: '★★★★★'
  },
  {
    text: 'The Hyderabadi Biryani was cooked to perfection — each grain separate, the lamb tender, and the aroma was out of this world. The ambience is warm and elegant. Highly recommended.',
    name: 'Abhay Singh',
    city: 'Mumbai',
    stars: '★★★★★'
  },
  {
    text: 'We had a corporate lunch for 15 people and the service was impeccable. Every dish from the Dal Makhani to the Rogan Josh was exceptional. This is hands down the best Indian restaurant in Gurugram.',
    name: 'Priyanshu Gangwar',
    city: 'Bengaluru',
    stars: '★★★★★'
  },
];

// ── STATE ────────────────────────────────────────────────────────────────

let currentStep    = 1;
let selectedOccasion = '';
let selectedTable  = null;

// ── INIT ─────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', function () {
  // Set minimum booking date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bookDate').setAttribute('min', today);

  renderMenu('all');
  renderTables();
  renderTestimonials();

  // Smooth scroll for all internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// ── RENDER MENU ──────────────────────────────────────────────────────────

function renderMenu(filter) {
  var grid  = document.getElementById('menuGrid');
  var items = filter === 'all'
    ? menuItems
    : menuItems.filter(function (i) { return i.cat === filter; });

  grid.innerHTML = items.map(function (item) {
    return (
      '<div class="menu-card">' +
        '<div class="menu-emoji">' + item.emoji + '</div>' +
        '<div class="menu-card-top">' +
          '<div class="menu-name">' + item.name + '</div>' +
          '<div class="menu-price">' + item.price + '</div>' +
        '</div>' +
        '<div class="menu-desc">' + item.desc + '</div>' +
        '<span class="menu-tag">' + item.tag + '</span>' +
      '</div>'
    );
  }).join('');
}

function filterMenu(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  renderMenu(cat);
}

// ── RENDER TABLES ────────────────────────────────────────────────────────

function renderTables() {
  var grid = document.getElementById('tableGrid');
  grid.innerHTML = tables.map(function (t) {
    return (
      '<div class="table-card ' + (t.occupied ? 'occupied' : '') + '" ' +
           'id="tcard-' + t.id + '" onclick="selectTable(\'' + t.id + '\')">' +
        '<div class="table-badge"></div>' +
        '<div class="table-icon">' + t.emoji + '</div>' +
        '<div class="table-name">' + t.name + '</div>' +
        '<div class="table-cap">'  + t.cap  + '</div>' +
      '</div>'
    );
  }).join('');
}

function selectTable(id) {
  var table = tables.find(function (t) { return t.id === id; });
  if (!table || table.occupied) return;

  selectedTable = table;

  document.querySelectorAll('.table-card').forEach(function (c) {
    c.classList.remove('selected');
  });

  document.getElementById('tcard-' + id).classList.add('selected');
  document.getElementById('tableErr').classList.remove('show');
}

// ── RENDER TESTIMONIALS ───────────────────────────────────────────────────

function renderTestimonials() {
  var grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = testimonials.map(function (t) {
    return (
      '<div class="testimonial-card">' +
        '<div class="quote-mark">"</div>' +
        '<p class="testimonial-text">' + t.text + '</p>' +
        '<div class="testimonial-author">' +
          '<div class="author-avatar">' + t.name.charAt(0) + '</div>' +
          '<div>' +
            '<div class="author-name">' + t.name + ' &mdash; ' + t.city + '</div>' +
            '<div class="author-stars">' + t.stars + '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// ── OCCASION PICKER ───────────────────────────────────────────────────────

function selectOccasion(el) {
  document.querySelectorAll('.occasion-pill').forEach(function (p) {
    p.classList.remove('selected');
  });
  el.classList.add('selected');
  selectedOccasion = el.textContent.trim();
}

// ── STEP NAVIGATION ───────────────────────────────────────────────────────

function goToStep(step) {
  // Validate current step before moving forward
  if (step > currentStep && !validateStep(currentStep)) return;

  // Hide all steps
  document.querySelectorAll('.form-step').forEach(function (s) {
    s.classList.remove('active');
  });

  // Show target step
  document.getElementById('step' + step).classList.add('active');

  // Update tab indicators
  document.querySelectorAll('.step-tab').forEach(function (t) {
    t.classList.remove('active');
    if (parseInt(t.getAttribute('data-step')) === step) {
      t.classList.add('active');
    }
  });

  if (step === 4) buildSummary();
  currentStep = step;

  // Scroll to booking section on mobile
  if (window.innerWidth < 900) {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ── VALIDATION ────────────────────────────────────────────────────────────

function validateStep(step) {
  var valid = true;

  if (step === 1) {
    if (!getVal('firstName')) { showErr('firstNameErr', 'firstName'); valid = false; }
    if (!getVal('lastName'))  { showErr('lastNameErr',  'lastName');  valid = false; }

    var emailVal = document.getElementById('email').value.trim();
    if (!emailVal || !emailVal.includes('@') || !emailVal.includes('.')) {
      showErr('emailErr', 'email');
      valid = false;
    }

    if (!getVal('phone')) { showErr('phoneErr', 'phone'); valid = false; }
  }

  if (step === 2) {
    if (!getVal('bookDate')) { showErr('dateErr',   'bookDate'); valid = false; }
    if (!getVal('bookTime')) { showErr('timeErr',   'bookTime'); valid = false; }
    if (!getVal('guests'))   { showErr('guestsErr', 'guests');   valid = false; }
  }

  if (step === 3) {
    if (!selectedTable) {
      document.getElementById('tableErr').classList.add('show');
      valid = false;
    }
  }

  return valid;
}

function getVal(id) {
  return document.getElementById(id).value.trim() !== '';
}

function showErr(errId, inputId) {
  document.getElementById(errId).classList.add('show');
  document.getElementById(inputId).classList.add('error');

  // Remove error on next input
  document.getElementById(inputId).addEventListener('input', function () {
    document.getElementById(errId).classList.remove('show');
    document.getElementById(inputId).classList.remove('error');
  }, { once: true });
}

// ── BUILD SUMMARY ─────────────────────────────────────────────────────────

function buildSummary() {
  var rows = [
    ['Guest Name',       document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value],
    ['Email',            document.getElementById('email').value],
    ['Phone',            document.getElementById('phone').value],
    ['Occasion',         selectedOccasion || 'None'],
    ['Date',             document.getElementById('bookDate').value],
    ['Time',             document.getElementById('bookTime').value],
    ['Guests',           document.getElementById('guests').value],
    ['Table',            selectedTable ? selectedTable.name + ' (' + selectedTable.cap + ')' : '—'],
    ['Dietary Pref.',    document.getElementById('dietPref').value || 'No preference'],
    ['Special Requests', document.getElementById('requests').value || 'None'],
  ];

  document.getElementById('summaryCard').innerHTML = rows.map(function (row) {
    return (
      '<div class="summary-row">' +
        '<span class="summary-label">' + row[0] + '</span>' +
        '<span class="summary-val">'   + row[1] + '</span>' +
      '</div>'
    );
  }).join('');
}

// ── CONFIRM BOOKING ───────────────────────────────────────────────────────

function confirmBooking() {
  var termsBox = document.getElementById('agreeTerms');

  if (!termsBox.checked) {
    document.getElementById('termsErr').classList.add('show');
    return;
  }

  // Mark table as occupied in data
  var tableObj = tables.find(function (t) { return t.id === selectedTable.id; });
  if (tableObj) tableObj.occupied = true;
  renderTables();

  // Generate unique reference number
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var ref = 'SG-';
  for (var i = 0; i < 6; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById('bookingRef').textContent = ref;

  // Build success summary
  var successRows = [
    ['Name',       document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value],
    ['Date',       document.getElementById('bookDate').value],
    ['Time',       document.getElementById('bookTime').value],
    ['Guests',     document.getElementById('guests').value],
    ['Table',      selectedTable.name],
    ['Occasion',   selectedOccasion || 'None'],
  ];

  document.getElementById('successSummary').innerHTML = successRows.map(function (row) {
    return (
      '<div class="summary-row">' +
        '<span class="summary-label">' + row[0] + '</span>' +
        '<span class="summary-val">'   + row[1] + '</span>' +
      '</div>'
    );
  }).join('');

  // Show success screen
  document.getElementById('bookingForm').style.display    = 'none';
  document.getElementById('successScreen').classList.add('show');

  showToast('Booking confirmed! Your reference: ' + ref);

  // Scroll into view
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── RESET FORM ────────────────────────────────────────────────────────────

function resetForm() {
  // Reset all input values
  var fields = ['firstName', 'lastName', 'email', 'phone', 'bookDate', 'bookTime', 'guests', 'dietPref', 'requests'];
  fields.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });

  // Reset state
  selectedOccasion = '';
  selectedTable    = null;
  currentStep      = 1;

  document.getElementById('agreeTerms').checked = false;

  // Reset UI selections
  document.querySelectorAll('.occasion-pill').forEach(function (p) { p.classList.remove('selected'); });
  document.querySelectorAll('.table-card').forEach(function (c) { c.classList.remove('selected'); });
  document.querySelectorAll('.error-msg').forEach(function (e) { e.classList.remove('show'); });
  document.querySelectorAll('input.error, select.error').forEach(function (el) { el.classList.remove('error'); });

  // Hide success, show form
  document.getElementById('successScreen').classList.remove('show');
  document.getElementById('bookingForm').style.display = 'block';

  // Reset to step 1
  document.querySelectorAll('.form-step').forEach(function (s) { s.classList.remove('active'); });
  document.getElementById('step1').classList.add('active');

  document.querySelectorAll('.step-tab').forEach(function (t) { t.classList.remove('active'); });
  document.querySelector('.step-tab[data-step="1"]').classList.add('active');
}

// ── TOAST NOTIFICATION ────────────────────────────────────────────────────

function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 4500);
}

// ── MOBILE NAV ────────────────────────────────────────────────────────────

function openNav() {
  document.getElementById('navOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById('navOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close overlay when clicking the background
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('navOverlay').addEventListener('click', function (e) {
    if (e.target === this) closeNav();
  });
});
