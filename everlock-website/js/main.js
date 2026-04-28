// ─── MOBILE MENU ───
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

// ─── HERO MINI CALCULATOR ───
function heroCalc() {
  const len = parseFloat(document.getElementById('heroLen').value) || 0;
  const wid = parseFloat(document.getElementById('heroWid').value) || 0;
  const result = document.getElementById('heroResult');
  if (len > 0 && wid > 0) {
    const perimeter = 2 * (len + wid);
    const panels = Math.ceil(perimeter / 12) * 2; // rough estimate, 2 rows
    const price = Math.round(panels * 48 / 50) * 50;
    result.innerHTML = `<strong>~${perimeter} linear ft</strong> perimeter · ~${panels} panels estimated · <strong>Starts around $${price.toLocaleString()}</strong>`;
  } else {
    result.textContent = 'Enter your home\'s dimensions above for an instant estimate.';
  }
}

// ─── ADDON TOGGLE ───
const addonState = {};
function toggleAddon(id) {
  addonState[id] = !addonState[id];
  const el = document.getElementById(id);
  if (addonState[id]) el.classList.add('checked');
  else el.classList.remove('checked');
  runCalc();
}

// ─── FULL CALCULATOR ───
const productPricing = {
  deluxe:  { panelPrice: 46,  railPrice: 18, name: 'Everlock Deluxe® Vinyl' },
  everrock:{ panelPrice: 78,  railPrice: 22, name: 'EverRock® Simulated Rock' },
  thermal: { panelPrice: 98,  railPrice: 22, name: 'Thermal EverRock™' },
  gorilla: { panelPrice: 110, railPrice: 24, name: 'Gorilla Thermal™' },
  novik:   { panelPrice: 82,  railPrice: 20, name: 'Novik Faux Brick / Stone' }
};

function runCalc() {
  const len = parseFloat(document.getElementById('calcLen').value) || 0;
  const wid = parseFloat(document.getElementById('calcWid').value) || 0;
  const heightIn = parseInt(document.getElementById('calcHeight').value) || 16;
  const porches = parseInt(document.getElementById('calcPortch').value) || 0;
  const product = document.getElementById('calcProduct').value;
  const zip = document.getElementById('calcZip').value;

  if (len <= 0 || wid <= 0) {
    document.getElementById('outputStatus').textContent = 'Enter dimensions';
    document.getElementById('outputItems').innerHTML = '<div style="text-align:center;padding:32px 0;color:var(--text-muted);"><div style="font-size:40px;margin-bottom:12px;">📏</div><div style="font-size:14px;">Enter your home dimensions to see your material estimate and pricing.</div></div>';
    document.getElementById('outputTotal').style.display = 'none';
    document.getElementById('outputCtas').style.display = 'none';
    return;
  }

  const perimeter = 2 * (len + wid) + (porches * 8);
  const panelRows = Math.ceil(heightIn / 16);
  const panelsPerRow = Math.ceil(perimeter / 12);
  const totalPanels = panelsPerRow * panelRows;
  const railSets = Math.ceil(perimeter / 12);
  const vents = addonState['addonVents'] ? Math.ceil(perimeter / 20) : 0;
  const hasDoor = addonState['addonDoor'] ? 1 : 0;
  const hasCorners = addonState['addonCorners'] ? 1 : 0;

  const p = productPricing[product];
  let total = (totalPanels * p.panelPrice) + (railSets * p.railPrice * 2);
  if (vents > 0) total += vents * 38;
  if (hasDoor) total += 129;
  if (hasCorners) total += 89;

  // Shipping estimate
  let shipping = 0;
  if (zip.length === 5) {
    const zipNum = parseInt(zip);
    if (zipNum >= 90000) shipping = Math.round(total * 0.12);
    else if (zipNum >= 70000) shipping = Math.round(total * 0.08);
    else shipping = Math.round(total * 0.09);
  }

  document.getElementById('outputStatus').textContent = 'Quote Ready ✓';

  const rows = [
    ['Home Perimeter', `${perimeter} linear feet`],
    ['Panel Height', `${heightIn}" (${panelRows} ${panelRows > 1 ? 'rows' : 'row'})`],
    [`Panels — ${p.name}`, `${totalPanels} panels`],
    ['Rail Kit', `${railSets} sets (top + bottom)`],
  ];
  if (vents > 0) rows.push([`Automatic Vents`, `${vents} units`]);
  if (hasDoor) rows.push(['EZ Access® Door', '1 unit']);
  if (hasCorners) rows.push(['Corner Trim Kit', '1 set (4 corners)']);
  if (zip.length === 5) rows.push([`Est. Shipping (ZIP ${zip})`, `~$${shipping.toLocaleString()}`]);

  document.getElementById('outputItems').innerHTML = rows.map(([label, val]) =>
    `<div class="output-row"><span class="output-row-label">${label}</span><span class="output-row-val">${val}</span></div>`
  ).join('');

  const grandTotal = total + shipping;
  document.getElementById('outputPrice').textContent = `$${Math.round(grandTotal / 50) * 50 < 1000 ? Math.round(grandTotal / 50) * 50 : (Math.round(grandTotal / 100) * 100).toLocaleString()}${shipping > 0 ? '' : ' + shipping'}`;
  document.getElementById('outputTotal').style.display = 'block';
  document.getElementById('outputCtas').style.display = 'flex';
}

function emailQuote() {
  const len = document.getElementById('calcLen').value;
  const wid = document.getElementById('calcWid').value;
  const product = document.getElementById('calcProduct');
  const productName = product.options[product.selectedIndex].text;
  const email = prompt('Enter your email address and we\'ll send your full quote:');
  if (email && email.includes('@')) {
    alert(`✓ Quote sent to ${email}\n\nOr call us directly: 800-843-3336\nMon–Fri 8am–5pm CT`);
  }
}

// ─── PERSONA TABS ───
function switchPersona(name, btn) {
  document.querySelectorAll('.persona-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.persona-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('persona-' + name).classList.add('active');
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      if (document.getElementById('mobileNav').classList.contains('open')) toggleMenu();
    }
  });
});