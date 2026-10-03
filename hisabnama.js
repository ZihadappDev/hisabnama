/* ============ ভাষা (বাংলা / English) ============ */
const L = {
  app:['হিসেবনামা','Hisabnama'], menu:['মেনু','Menu'],
  nHome:['🏠 হোম','🏠 Home'], nHist:['🕘 হিস্ট্রি','🕘 History'], nArch:['🗂 আর্কাইভ','🗂 Archive'],
  nBak:['💾 ব্যাকাপ','💾 Backup'], nAbout:['ℹ️ এবাউট','ℹ️ About'], nContact:['✉️ কন্টাক্ট আস','✉️ Contact Us'], nSet:['⚙️ সেটিংস','⚙️ Settings'],
  life:['লাইফটাইম খরচ','Lifetime expense'], addNew:['+ নতুন খরচ যোগ করুন','+ Add new expense'],
  ph1:['খরচের নাম','Expense name'], ph2:['কত টাকা? (৳)','Amount (৳)'], addBtn:['খরচ যোগ করুন','Add expense'],
  curM:['চলতি মাসের খরচা','This month\'s expenses'], dlPdf:['⬇ ডাউনলোড (PDF)','⬇ Download (PDF)'],
  catT:['খাত অনুযায়ী সামারি','Summary by category'], dlSum:['⬇ সামারি PDF','⬇ Summary PDF'],
  histT:['খরচের ইতিহাস','Expense History'], byM:['মাস ভিত্তিক','By month'], byY:['সাল ভিত্তিক','By year'], byA:['লাইফটাইম','Lifetime'],
  hdl:['⬇ PDF ডাউনলোড (A4)','⬇ Download PDF (A4)'],
  nArch2:['আর্কাইভ','Archive'], archN:['মুছে ফেলা খরচ ৩০ দিন এখানে থাকে, তারপর নিজে থেকেই মুছে যায়।','Deleted expenses stay here for 30 days, then are removed automatically.'],
  restore:['নির্বাচিতগুলো রিস্টোর করুন','Restore selected'],
  bakT:['ব্যাকাপ ও রিস্টোর','Backup & Restore'], bkBtn:['JSON ব্যাকাপ ডাউনলোড','Download JSON backup'], riBtn:['ব্যাকাপ ফাইল যুক্ত করুন','Import backup file'],
  bakN:['ব্যাকাপে আর্কাইভসহ সব ডেটা থাকে। ফাইল যুক্ত করলে বর্তমান ডেটার সাথে মিশে যায়, কিছু মুছে যায় না।','Backup includes archived data. Importing merges with current data; nothing is deleted.'],
  aboutT:['হিসেবনামা সম্পর্কে','About Hisabnama'],
  aboutP:['প্রতিদিনের ছোট ছোট খরচ সহজে লিখে রাখা এবং মাস শেষে টাকা কোথায় গেল তা বোঝার জন্য এই অ্যাপ। সব ডেটা আপনার ব্রাউজারেই থাকে, ইন্টারনেট ছাড়াই চলে।','An app to log small daily expenses and see where your money went at month end. All data stays in your browser and works offline.'],
  madeBy:['তৈরি করেছেন: আব্দুল্লাহ আল জিহাদ','Created by: Abdullah Al Zihad'],
  conT:['যোগাযোগ করুন','Contact us'], phN:['আপনার নাম','Your name'], phE:['আপনার ইমেইল (উত্তর পেতে)','Your email (for reply)'], phM:['আপনার বার্তা','Your message'], send:['পাঠান','Send'],
  nSet2:['সেটিংস','Settings'], thm:['থিম কালার','Theme color'], dark:['ডার্ক মোড','Dark mode'], lang:['ভাষা','Language'],
  footP:['নিজের আয়ের টাকা কোথায় যাচ্ছে তা পরিষ্কার দেখতে এবং অপ্রয়োজনীয় খরচ কমাতে এই অ্যাপটি তৈরি করা হয়েছে।','Built to see clearly where your income goes and to cut unnecessary spending.'],
  ok:['ঠিক আছে','OK'], yes:['হ্যাঁ, মুছুন','Yes, delete'], no:['বাতিল','Cancel'],
  nHelp:['❓ হেল্প','❓ Help'], helpT:['ব্যবহারের গাইডলাইন','How to use'], upd:['আপডেট করুন','Update'],
  erase:['🗑 Erase All Data','🗑 Erase All Data'], erased:['সব ডেটা মুছে ফেলা হয়েছে।','All data erased.'],
  eraseQ:['সতর্কতা: এতে এ পর্যন্ত দেওয়া সব খরচ ও আর্কাইভ চিরতরে মুছে যাবে।\nআগে "ব্যাকাপ" মেনু থেকে JSON ব্যাকাপ ডাউনলোড করে রাখুন। তবুও মুছবেন?','Warning: this permanently deletes ALL expenses and archive.\nPlease download a JSON backup from the Backup menu first. Erase anyway?'],
  per:['সময়কাল','Period'], tA:['সর্বোচ্চ একক খরচ','Highest single expense'],
  /* ডাইনামিক */
  mSuf:[' মাসের খরচ','\'s expense'], none:['কোনো খরচ নেই','No expenses'], archE:['আর্কাইভ খালি','Archive is empty'], delAt:['মুছেছেন: ','Deleted: '],
  delQ:['সতর্কতা: "%t" (%a) মুছে ফেলবেন?\nএটি আর্কাইভে ৩০ দিন থাকবে, চাইলে রিস্টোর করা যাবে।','Warning: delete "%t" (%a)?\nIt will stay in Archive for 30 days and can be restored.'],
  selR:['রিস্টোর করতে খরচ নির্বাচন করুন।','Select expenses to restore.'], rsd:['টি খরচ ফিরিয়ে আনা হয়েছে।',' expense(s) restored.'],
  saveErr:['ডেটা সংরক্ষণ করা যায়নি।','Could not save data.'], bkErr:['ব্যাকাপ ডাউনলোড করা যায়নি।','Could not download backup.'],
  badF:['ফাইলটি সঠিক ব্যাকাপ নয়।','This is not a valid backup file.'], addedN:['টি নতুন খরচ যুক্ত হয়েছে।',' new expense(s) added.'],
  noPdf:['ডাউনলোডের জন্য কোনো খরচ নেই।','Nothing to download.'], pdfLib:['PDF লাইব্রেরি লোড হয়নি। ইন্টারনেট দিয়ে পেজ রিফ্রেশ করে আবার চেষ্টা করুন।','PDF library not loaded. Refresh the page with internet and try again.'],
  pdfErr:['PDF তৈরি করা যায়নি। আবার চেষ্টা করুন।','Could not create PDF. Please try again.'],
  sending:['পাঠানো হচ্ছে…','Sending…'], sent:['✔ বার্তা পাঠানো হয়েছে। ধন্যবাদ!','✔ Message sent. Thank you!'], fail:['সরাসরি পাঠানো যায়নি, ইমেইল অ্যাপ খুলছে…','Could not send directly, opening email app…'],
  myMail:['আমার ইমেইল: ','My email: '], subj:['হিসেবনামা: ','Hisabnama: '],
  yr:['জানু-ডিসে. ','Jan-Dec '], lt:['লাইফটাইম','Lifetime'],
  /* PDF */
  sumT:['সামারি','Summary'], listT:['খরচের তালিকা','Expense List'], tot:['মোট খরচ','Total expense'], cnt:['মোট এন্ট্রি','Total entries'],
  tM:['সর্বোচ্চ খরচের মাস','Highest spending month'], tY:['সর্বোচ্চ খরচের সাল','Highest spending year'], tC:['সর্বোচ্চ খরচের খাত','Top category'],
  avg:['গড় খরচ/এন্ট্রি','Average per entry'], cat:['খাত','Category'], amt:['টাকা','Amount'], pct:['শতাংশ','Share'],
  date:['তারিখ ও সময়','Date & Time'], desc:['বিবরণ','Description'], grand:['সর্বমোট: ','Grand total: '], sign:['খরচকারীর স্বাক্ষর','Signature of the spender']
};
const C = ['খাবার','মুদিখানা','যাতায়াত','বিল/রেন্ট','কেনাকাটা','স্বাস্থ্য ও চিকিৎসা','শিক্ষা','বিনোদন ও ভ্রমণ','ব্যক্তিগত যত্ন','দান ও সদকা','পোষা প্রাণী ও বাগান','মেরামত ও রক্ষণাবেক্ষণ','অফিস ও ব্যবসা','সাবস্ক্রিপশন ও ইউটিলিটি','পরিবার ও শিশুযত্ন','বিনিয়োগ ও সঞ্চয়','ঋণ ও কিস্তি','কর ও আইনি','জরুরি','অন্যান্য'];
const CE = ['Food','Grocery','Transport','Bills & Rent','Shopping','Health & Medical','Education','Entertainment & Travel','Personal Care','Donations & Charity','Pets & Gardening','Maintenance & Repairs','Office & Business','Subscriptions & Utility','Family & Childcare','Investments & Savings','Debt & EMI','Taxes & Legal','Emergency','Other'];
const MNB = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const MNE = ['January','February','March','April','May','June','July','August','September','October','November','December'];

/* ============ সাহায্যকারী ============ */
const $ = s => document.querySelector(s);
const K = 'hn_data', SK = 'hn_set', p = n => String(n).padStart(2, '0');
let D, S;
try { D = JSON.parse(localStorage.getItem(K)) || []; } catch { D = []; }
try { S = JSON.parse(localStorage.getItem(SK)) || {}; } catch { S = {}; }
if (!Array.isArray(D)) D = []; if (typeof S !== 'object' || !S) S = {};
const en = () => S.l === 'en';
const t = k => L[k] ? L[k][en() ? 1 : 0] : k;
const bn = s => en() ? String(s) : String(s).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
const esc = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');
const cn = c => { const i = C.indexOf(c); return i < 0 || !en() ? c : CE[i]; };
const mn = i => (en() ? MNE : MNB)[i];
const money = n => '৳' + bn(Number(n).toLocaleString('en-US', {maximumFractionDigits: 2}));
const now = () => { const d = new Date(); return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`; };
const fmt = s => { const d = new Date(s), h = d.getHours() % 12 || 12;
  return bn(`${p(d.getDate())} ${mn(d.getMonth())} ${d.getFullYear()}, ${p(h)}:${p(d.getMinutes())}`) + (d.getHours() < 12 ? ' AM' : ' PM'); };
const ml = ym => mn(+ym.slice(5,7) - 1) + ', ' + bn(ym.slice(0,4));

// আর্কাইভে ৩০ দিনের বেশি থাকা খরচ নিজে থেকে মুছে যাবে
D = D.filter(e => e && !e.del || (e && Date.now() - new Date(e.del) < 30 * 864e5));

/* ============ নিজস্ব পপ-আপ (alert/confirm এর বদলে) ============ */
const dlg = (msg, q) => new Promise(r => {
  $('#mp').textContent = msg; $('#mn').hidden = !q; $('#md').hidden = false;
  $('#my').textContent = t(q ? 'yes' : 'ok'); $('#mn').textContent = t('no');
  const c = v => { $('#md').hidden = true; r(v); };
  $('#my').onclick = () => c(true); $('#mn').onclick = () => c(false);
});
const say = m => dlg(m, 0), ask = m => dlg(m, 1);

const save = () => { try { localStorage.setItem(K, JSON.stringify(D)); localStorage.setItem(SK, JSON.stringify(S)); }
  catch { say(t('saveErr')); } };
const act = () => D.filter(e => !e.del).sort((a, b) => b.dt.localeCompare(a.dt));
const sum = l => l.reduce((s, e) => s + e.amount, 0);
const item = e => `<div class="it"><div class="i"><b>${esc(e.title)}</b><small class="c">${esc(cn(e.cat))}</small><small>${fmt(e.dt)}</small></div><span class="amt">${money(e.amount)}</span><button class="ed" data-id="${e.id}">✏️</button><button class="del" data-id="${e.id}">✕</button></div>`;
const list = l => l.length ? l.map(item).join('') : `<p class="empty">${t('none')}</p>`;

/* ============ থিম ও ভাষা ============ */
const COL = ['#10B981','#0EA5E9','#8B5CF6','#F59E0B'];
function theme() {
  const c = S.c || COL[0], r = document.documentElement;
  r.style.setProperty('--a', c);
  r.dataset.d = S.d ? 1 : 0;
  $('#dk').checked = !!S.d; $('#lg').value = en() ? 'en' : 'bn';
  document.querySelectorAll('#sw button').forEach(b => b.classList.toggle('on', b.dataset.c === c));
}
$('#sw').innerHTML = COL.map(c => `<button style="background:${c}" data-c="${c}" aria-label="${c}"></button>`).join('');
$('#sw').onclick = e => { const b = e.target.closest('button'); if (b) { S.c = b.dataset.c; save(); theme(); } };
$('#dk').onchange = e => { S.d = e.target.checked; save(); theme(); };
$('#lg').onchange = e => { S.l = e.target.value; save(); i18n(); go(cv); };
function i18n() {
  document.documentElement.lang = en() ? 'en' : 'bn';
  document.title = t('app');
  document.querySelectorAll('[data-i]').forEach(x => x.textContent = t(x.dataset.i));
  document.querySelectorAll('[data-p]').forEach(x => x.placeholder = t(x.dataset.p));
  const v = $('#cat').value;
  $('#cat').innerHTML = C.map(c => `<option value="${c}">${cn(c)}</option>`).join('');
  if (v) $('#cat').value = v;
  $('#hb').textContent = t('nHist').replace(/^\S+\s/, '');
  $('#hp').innerHTML = HELP[en() ? 1 : 0].map(x => `<h4>${x[0]}</h4><p>${x[1]}</p>`).join('');
}

/* ============ পেজ নেভিগেশন ============ */
let cv = 'home';
const toggle = o => { $('#side').classList.toggle('open', o); $('#ov').hidden = !o; };
$('#menu').onclick = () => toggle(true);
$('#ov').onclick = () => toggle(false);
function go(v) {
  cv = v;
  document.querySelectorAll('.view').forEach(x => x.classList.toggle('on', x.id === 'v-' + v));
  toggle(false);
  if (v === 'home') rh(); else if (v === 'history') rhis(); else if (v === 'archive') rar();
  window.scrollTo(0, 0);
}
$('#side').onclick = e => { const b = e.target.closest('button'); if (b && b.dataset.v) go(b.dataset.v); };

/* ============ হোম ============ */
let eid = null;
const HELP = [[
 ['শুরু করুন','হোম পেইজে "+ নতুন খরচ যোগ করুন" চাপুন। খাত বাছুন, খরচের নাম ও টাকা লিখে "খরচ যোগ করুন" চাপুন। তারিখ ও সময় নিজে থেকেই বসে যায়।'],
 ['খরচ সংশোধন','তালিকায় খরচের পাশে ✏️ চাপুন। নাম, খাত বা টাকা বদলে "আপডেট করুন" চাপুন।'],
 ['মোছা ও রিস্টোর','✕ চাপলে খরচ আর্কাইভে ৩০ দিন থাকে। আর্কাইভ থেকে টিক দিয়ে "রিস্টোর" করলে ফিরে আসে।'],
 ['সামারি ও ফিল্টার','হোমের সামারি কার্ডে মাস, সাল বা লাইফটাইম বেছে খাত অনুযায়ী খরচ ও শতাংশ দেখুন। "সামারি PDF" চাপলে নির্বাচিত সময়ের সামারি নামবে (শুধু সামারি, তালিকা নয়)।'],
 ['হিস্ট্রি ও PDF','হিস্ট্রিতে মাস, সাল বা লাইফটাইম বেছে "PDF ডাউনলোড" চাপুন। প্রথম পাতায় সামারি, পরের পাতা থেকে খরচের তালিকা। প্রিন্ট করে খরচকারীর স্বাক্ষর দিতে পারবেন।'],
 ['ব্যাকাপ','নিয়মিত "JSON ব্যাকাপ ডাউনলোড" করে রাখুন। নতুন ফোন বা ব্রাউজারে "ব্যাকাপ ফাইল যুক্ত করুন" দিলে ডেটা ফিরে আসবে।'],
 ['সেটিংস','থিম কালার, ডার্ক মোড ও ভাষা (বাংলা/English) বদলানো যায়। "Erase All Data" সব ডেটা মুছে দেয়, তাই আগে ব্যাকাপ নিন।'],
 ['গুরুত্বপূর্ণ','ডেটা শুধু এই ব্রাউজারেই থাকে। ব্রাউজারের ডেটা ক্লিয়ার করলে হারাতে পারে, তাই ব্যাকাপ রাখুন।']
],[
 ['Getting started','On Home, tap "+ Add new expense", pick a category, enter the name and amount, then tap "Add expense". Date and time are added automatically.'],
 ['Edit an expense','Tap ✏️ beside an expense, change the name, category or amount, then tap "Update".'],
 ['Delete & restore','Tapping ✕ moves it to Archive for 30 days. Tick items in Archive and tap "Restore" to bring them back.'],
 ['Summary & filter','On the Home summary card choose a month, year or lifetime to see spending and share by category. "Summary PDF" downloads only the summary for the selected period (no list).'],
 ['History & PDF','In History choose a month, year or lifetime and tap "Download PDF". Page 1 is the summary; the expense list starts on page 2. Print it to sign as the spender.'],
 ['Backup','Download a JSON backup regularly. On a new phone or browser, import the file to get your data back.'],
 ['Settings','Change theme color, dark mode and language (Bangla/English). "Erase All Data" deletes everything, so back up first.'],
 ['Important','Data is stored only in this browser. Clearing browser data may erase it, so keep backups.']
]];
const yrs = sel => { const cur = sel.value;
  const ys = [...new Set(act().map(e => e.dt.slice(0, 4)).concat(now().slice(0, 4)))].sort().reverse();
  sel.innerHTML = ys.map(y => `<option value="${y}">${bn(y)}</option>`).join(''); if (cur) sel.value = cur; };
const scp = (m, mo, y) => { const a = act(), v = m.value;
  if (m.value === 'm') { const k = mo.value || now().slice(0, 7); return { l: a.filter(e => e.dt.startsWith(k)), s: ml(k) }; }
  if (v === 'y') return { l: a.filter(e => e.dt.startsWith(y.value)), s: t('yr') + bn(y.value) };
  return { l: a, s: t('lt') }; };
const scH = () => scp($('#sm'), $('#smo'), $('#sy'));
function rh() {
  const ym = now().slice(0, 7), a = act(), m = a.filter(e => e.dt.startsWith(ym));
  $('#mL').textContent = ml(ym) + t('mSuf');
  $('#mT').textContent = money(sum(m));
  $('#lT').textContent = money(sum(a));
  $('#hl').innerHTML = list(m);
  yrs($('#sy')); if (!$('#smo').value) $('#smo').value = ym;
  $('#smo').hidden = $('#sm').value !== 'm'; $('#sy').hidden = $('#sm').value !== 'y';
  const { l } = scH(), tt = sum(l), s = {};
  l.forEach(e => s[e.cat] = (s[e.cat] || 0) + e.amount);
  $('#cats').innerHTML = Object.entries(s).sort((x, y) => y[1] - x[1]).map(([c, v]) => {
    const pc = tt ? v / tt * 100 : 0;
    return `<div class="cr"><span>${esc(cn(c))}</span><div class="bar"><i style="width:${pc}%"></i></div><b>${money(v)}</b><em>${bn(pc.toFixed(1))}%</em></div>`; }).join('')
    || `<p class="empty">${t('none')}</p>`;
}
['#sm', '#smo', '#sy'].forEach(s => $(s).onchange = rh);
const closeF = () => { eid = null; $('#f').reset(); $('#f').hidden = true; $('#sb').textContent = t('addBtn'); };
$('#tog').onclick = () => { if (!$('#f').hidden) return closeF(); $('#f').hidden = false; $('#ti').focus(); };
$('#f').onsubmit = e => {
  e.preventDefault();
  const o = { cat: $('#cat').value, title: $('#ti').value.trim(), amount: +$('#am').value };
  const x = eid && D.find(y => y.id === eid);
  if (x) Object.assign(x, o);
  else D.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), ...o, dt: now() });
  save(); closeF(); rh();
};
document.addEventListener('click', async e => {
  const ed = e.target.closest('.ed');
  if (ed) {
    const x = D.find(y => y.id === ed.dataset.id); if (!x) return;
    go('home'); eid = x.id;
    $('#cat').value = x.cat; $('#ti').value = x.title; $('#am').value = x.amount;
    $('#sb').textContent = t('upd'); $('#f').hidden = false; $('#f').scrollIntoView({ block: 'center' });
    return;
  }
  const b = e.target.closest('.del'); if (!b) return;
  const x = D.find(y => y.id === b.dataset.id); if (!x) return;
  if (await ask(t('delQ').replace('%t', x.title).replace('%a', money(x.amount)))) { x.del = now(); save(); go(cv); }
});
const curM = () => { const ym = now().slice(0, 7); return [act().filter(e => e.dt.startsWith(ym)), ml(ym)]; };
$('#dl').onclick = () => { const [l, s] = curM(); pdf(l, s, 'full'); };
$('#cd').onclick = () => { const { l, s } = scH(); pdf(l, s, 'sum'); };
$('#hb').onclick = () => go('history');
$('#er').onclick = async () => { if (await ask(t('eraseQ'))) { D = []; save(); closeF(); go('home'); say(t('erased')); } };

/* ============ হিস্ট্রি ============ */
function scope() {
  const m = $('#hm').value, a = act();
  if (m === 'm') { const v = $('#hmo').value || now().slice(0, 7); return { l: a.filter(e => e.dt.startsWith(v)), s: ml(v) }; }
  if (m === 'y') { const y = $('#hy').value; return { l: a.filter(e => e.dt.startsWith(y)), s: t('yr') + bn(y) }; }
  return { l: a, s: t('lt') };
}
function rhis() {
  const cur = $('#hy').value;
  const ys = [...new Set(act().map(e => e.dt.slice(0, 4)).concat(now().slice(0, 4)))].sort().reverse();
  $('#hy').innerHTML = ys.map(y => `<option value="${y}">${bn(y)}</option>`).join('');
  if (cur) $('#hy').value = cur;
  if (!$('#hmo').value) $('#hmo').value = now().slice(0, 7);
  const m = $('#hm').value;
  $('#hmo').hidden = m !== 'm'; $('#hy').hidden = m !== 'y';
  const { l, s } = scope();
  $('#hs').textContent = s; $('#ht').textContent = money(sum(l));
  if (m === 'm') { $('#hlist').innerHTML = list(l); return; }
  const g = {}; l.forEach(e => (g[e.dt.slice(0, 7)] = g[e.dt.slice(0, 7)] || []).push(e));
  $('#hlist').innerHTML = Object.keys(g).sort().reverse().map(k =>
    `<h3 style="margin-top:8px">${ml(k)} — ${money(sum(g[k]))}</h3>` + g[k].map(item).join('')).join('') || list([]);
}
['#hm', '#hmo', '#hy'].forEach(s => $(s).onchange = rhis);
$('#hd').onclick = () => { const { l, s } = scope(); pdf(l, s, 'full'); };

/* ============ PDF (A4) ============ */
const bx = (k, v) => `<td style="border:1px solid #E2E8F0;padding:10px;width:50%;vertical-align:top"><div style="font-size:11px;color:#64748B">${k}</div><div style="font-size:15px;font-weight:700">${v}</div></td>`;
function sumH(l, sub) {
  const T = sum(l), c = {}, m = {}, y = {};
  l.forEach(e => { const k = e.dt.slice(0, 7);
    c[e.cat] = (c[e.cat] || 0) + e.amount; m[k] = (m[k] || 0) + e.amount; y[k.slice(0, 4)] = (y[k.slice(0, 4)] || 0) + e.amount; });
  const top = o => Object.entries(o).sort((a, b) => b[1] - a[1])[0] || ['-', 0];
  const tm = top(m), ty = top(y), tc = top(c), mx = l.reduce((a, e) => e.amount > a.amount ? e : a, l[0]);
  return `<h2 style="margin:0 0 10px">${t('sumT')}</h2>
  <table style="width:100%;border-collapse:collapse"><tr>${bx(t('per'), esc(sub))}${bx(t('tot'), money(T))}</tr>
  <tr>${bx(t('cnt'), bn(l.length))}${bx(t('avg'), money(l.length ? T / l.length : 0))}</tr>
  <tr>${bx(t('tC'), esc(cn(tc[0])) + '<br>' + money(tc[1]))}${bx(t('tA'), money(mx.amount) + '<br><span style="font-size:11px;font-weight:500">' + esc(mx.title) + '</span>')}</tr>
  <tr>${bx(t('tM'), (tm[0] === '-' ? '-' : ml(tm[0])) + '<br>' + money(tm[1]))}${bx(t('tY'), bn(ty[0]) + '<br>' + money(ty[1]))}</tr></table>`;
}
async function pdf(l, sub, mode) {
  if (!l.length) return say(t('noPdf'));
  if (typeof html2pdf === 'undefined') return say(t('pdfLib'));
  l = [...l].sort((a, b) => a.dt.localeCompare(b.dt));
  const sig = `<div style="margin-top:60px;text-align:right"><div style="display:inline-block;border-top:1px solid #0F172A;padding-top:6px;min-width:200px;text-align:center;font-size:14px">${t('sign')}</div></div>`;
  const rows = mode === 'sum' ? '' : `<div class="html2pdf__page-break"></div>
    <h2 style="margin:0 0 10px">${t('listT')}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
    <tr style="background:#F1F5F9;text-align:left"><th style="padding:8px">${t('date')}</th><th>${t('cat')}</th><th>${t('desc')}</th><th style="text-align:right;padding-right:8px">${t('amt')}</th></tr>
    ${l.map(e => `<tr style="border-bottom:1px solid #E2E8F0"><td style="padding:8px">${fmt(e.dt)}</td><td>${esc(cn(e.cat))}</td><td>${esc(e.title)}</td><td style="text-align:right;padding-right:8px">${money(e.amount)}</td></tr>`).join('')}</table>
    <h3 style="text-align:right;margin:14px 8px">${t('grand')}${money(sum(l))}</h3>`;
  const b = document.createElement('div');
  b.style.cssText = "font-family:'Noto Sans Bengali',sans-serif;color:#0F172A;padding:20px;width:700px;background:#fff";
  b.innerHTML = `<h1 style="text-align:center;margin:0">${t('histT')}</h1>
    <h3 style="text-align:center;color:#64748B;margin:4px 0 20px;font-weight:500">${esc(sub)}</h3>${sumH(l, sub)}${rows}${sig}`;
  try {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    await html2pdf().set({ margin: [8, 8, 14, 8], filename: 'hisabnama-' + (mode === 'sum' ? 'summary-' : '') + now().slice(0, 10) + '.pdf',
      image: { type: 'jpeg', quality: .95 }, html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4' }, pagebreak: { mode: ['css', 'legacy'], avoid: 'tr' } })
      .from(b).toPdf().get('pdf').then(pd => {
        const n = pd.getNumberOfPages(), w = pd.internal.pageSize.getWidth(), h = pd.internal.pageSize.getHeight();
        for (let i = 1; i <= n; i++) { pd.setPage(i); pd.setFontSize(8); pd.setTextColor(150);
          pd.text('Created with Hisabnama', w / 2, h - 6, { align: 'center' }); }
      }).save();
  } catch (err) { console.error(err); say(t('pdfErr')); }
}

/* ============ আর্কাইভ ============ */
function rar() {
  const a = D.filter(e => e.del).sort((x, y) => y.del.localeCompare(x.del));
  $('#al').innerHTML = a.length ? a.map(e => `<label class="it"><input type="checkbox" class="ck" value="${e.id}"><div class="i"><b>${esc(e.title)}</b><small class="c">${esc(cn(e.cat))}</small><small>${t('delAt')}${fmt(e.del)}</small></div><span class="amt">${money(e.amount)}</span></label>`).join('')
    : `<p class="empty">${t('archE')}</p>`;
}
$('#rs').onclick = () => {
  const ids = [...document.querySelectorAll('.ck:checked')].map(c => c.value);
  if (!ids.length) return say(t('selR'));
  D.forEach(e => { if (ids.includes(e.id)) delete e.del; });
  save(); rar(); say(bn(ids.length) + t('rsd'));
};

/* ============ ব্যাকাপ ও রিস্টোর ============ */
$('#bk').onclick = () => {
  try {
    const u = URL.createObjectURL(new Blob([JSON.stringify(D, null, 2)], { type: 'application/json' }));
    const a = document.createElement('a');
    a.href = u; a.download = 'hisabnama-backup-' + now().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(u), 5000);
  } catch (err) { console.error(err); say(t('bkErr')); }
};
$('#ri').onclick = () => $('#rf').click();
$('#rf').onchange = e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result); if (!Array.isArray(d)) throw 0;
      let n = 0;
      d.forEach(x => { if (x && x.id && x.title && x.dt && +x.amount > 0 && !D.some(y => y.id == x.id)) {
        D.push({ id: String(x.id), cat: String(x.cat || 'অন্যান্য'), title: String(x.title).slice(0, 80), amount: +x.amount, dt: String(x.dt), ...(x.del ? { del: String(x.del) } : {}) }); n++; } });
      save(); rh(); say(bn(n) + t('addedN'));
    } catch { say(t('badF')); }
    e.target.value = '';
  };
  r.readAsText(f);
};

/* ============ কন্টাক্ট ফর্ম ============ */
$('#cf').onsubmit = async e => {
  e.preventDefault();
  const name = $('#cn').value.trim(), mail = $('#ce').value.trim(), msg = $('#cm').value.trim();
  const out = $('#cmsg'), btn = $('#cs'); btn.disabled = true; out.textContent = t('sending');
  try {
    const r = await fetch('https://formsubmit.co/ajax/abdullahzihad94@gmail.com', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email: mail, message: msg, _subject: t('subj') + name }) });
    const j = await r.json();
    if (!r.ok || String(j.success) === 'false') throw 0;
    out.textContent = t('sent'); e.target.reset();
  } catch {
    out.textContent = t('fail');
    location.href = 'mailto:abdullahzihad94@gmail.com?subject=' + encodeURIComponent(t('subj') + name) +
      '&body=' + encodeURIComponent(msg + (mail ? '\n\n' + t('myMail') + mail : ''));
  }
  btn.disabled = false;
};

theme(); i18n(); rh();