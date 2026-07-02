const mocData = [
  {
    title: 'Gunship on Coruscant',
    url: 'https://rebrickable.com/mocs/MOC-268026/Yuzujinx/gunship-on-coruscant/',
    parts: 90,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Alt',
    description: 'A cinematic city flyer packed with futuristic detail and rapid play appeal.'
  },
  {
    title: 'Venator + Swamp Speeder (31173) [FREE]',
    url: 'https://rebrickable.com/mocs/MOC-265135/Yuzujinx/venator-swamp-speeder-31173-free/',
    parts: 132,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Free',
    description: 'A dynamic two-model build that combines fleet action and swamp patrol.'
  },
  {
    title: "Jabba's Palace - Rancor Pit (75433) [FREE] {ADD-ON}",
    url: 'https://rebrickable.com/mocs/MOC-267676/Yuzujinx/jabbas-palace-rancor-pit-75433-free-add-on/',
    parts: 77,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Free',
    description: 'An iconic add-on featuring Jabba, a vicious rancor, and palace atmosphere.'
  },
  {
    title: 'Corellian YT-1300 Freighter (75460) [FREE]',
    url: 'https://rebrickable.com/mocs/MOC-267651/Yuzujinx/corellian-yt-1300-freighter-75460-free/',
    parts: 129,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Free',
    description: 'A beloved freighter redesign with recognizable details and bold lines.'
  },
  {
    title: 'Venator (75433) [FREE] Midi Scale',
    url: 'https://rebrickable.com/mocs/MOC-267517/Yuzujinx/venator-75433-free-midi-scale/',
    parts: 371,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Free',
    description: 'A chunky midi-scale cruiser with a standout command bridge and engine detail.'
  },
  {
    title: 'All sides are the same with Sidious',
    url: 'https://rebrickable.com/mocs/MOC-267189/Yuzujinx/all-sides-are-the-same-with-sidious/',
    parts: 335,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Showcase',
    description: 'A dramatic dark-side vignette that brings Sith drama to minifigure scale.'
  },
  {
    title: 'Hi Five ReBrickBot',
    url: 'https://rebrickable.com/mocs/MOC-267094/Yuzujinx/hi-five-rebrickbot/',
    parts: 16,
    theme: 'Technic',
    year: 2026,
    badge: 'Mini',
    description: 'A playful micro build with just enough parts to spark a smile.'
  },
  {
    title: 'Havoc Marauder (Bad Batch)',
    url: 'https://rebrickable.com/mocs/MOC-267089/Yuzujinx/havoc-marauder-bad-batch/',
    parts: 56,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Action',
    description: 'A sleek combat ship inspired by the Bad Batch universe with sharp attitude.'
  },
  {
    title: 'Snowspeeder VS Tie',
    url: 'https://rebrickable.com/mocs/MOC-267082/Yuzujinx/snowspeeder-vs-tie/',
    parts: 68,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Duel',
    description: 'A fast-paced battle scene that pairs two classic starfighters together.'
  },
  {
    title: 'Y Wing',
    url: 'https://rebrickable.com/mocs/MOC-267074/Yuzujinx/y-wing/',
    parts: 68,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Classic',
    description: 'A compact tribute to the iconic Rebel bomber with a strong cockpit profile.'
  },
  {
    title: 'TIE Bomber [MOD]',
    url: 'https://rebrickable.com/mocs/MOC-267052/Yuzujinx/tie-bomber-mod/',
    parts: 65,
    theme: 'Star Wars',
    year: 2026,
    badge: 'Mod',
    description: 'An updated TIE Bomber design that emphasizes new wings and a modular layout.'
  },
  {
    title: 'Table Soccer',
    url: 'https://rebrickable.com/mocs/MOC-267051/Yuzujinx/table-soccer/',
    parts: 526,
    theme: 'Sports',
    year: 2026,
    badge: 'Play',
    description: 'A large-scale table soccer build with realistic details and room to play.'
  }
];

const themeFilters = ['All', 'Star Wars', 'Technic', 'Sports'];

const cardsContainer = document.querySelector('.card-grid');
const searchInput = document.querySelector('#search');
const tagsContainer = document.querySelector('.tag-list');

function roundText(value) {
  return value.toLocaleString();
}

function createCard(moc) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-media">
      <span class="card-tag">${moc.badge}</span>
      <h3 class="card-title">${moc.title}</h3>
      <p class="card-caption">${moc.description}</p>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="meta-pill">${moc.theme}</span>
        <span class="meta-pill">${moc.year}</span>
        <span class="meta-pill">${roundText(moc.parts)} parts</span>
      </div>
      <div class="card-actions">
        <a class="btn btn-link" href="${moc.url}" target="_blank" rel="noopener noreferrer">View on Rebrickable</a>
      </div>
    </div>
  `;
  return card;
}

function renderGallery(filter = 'All', query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = mocData.filter((moc) => {
    const matchesTheme = filter === 'All' || moc.theme === filter;
    const matchesQuery =
      moc.title.toLowerCase().includes(normalizedQuery) ||
      moc.description.toLowerCase().includes(normalizedQuery) ||
      moc.theme.toLowerCase().includes(normalizedQuery);
    return matchesTheme && matchesQuery;
  });

  cardsContainer.innerHTML = '';
  if (filtered.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'No matching MOCs found. Try a different keyword or theme.';
    empty.style.color = 'var(--muted)';
    cardsContainer.appendChild(empty);
    return;
  }

  filtered.forEach((moc) => cardsContainer.appendChild(createCard(moc)));
}

function createFilterTags() {
  themeFilters.forEach((theme) => {
    const tag = document.createElement('button');
    tag.type = 'button';
    tag.className = 'tag';
    if (theme === 'All') tag.classList.add('active');
    tag.textContent = theme;
    tag.addEventListener('click', () => {
      document.querySelectorAll('.tag').forEach((item) => item.classList.remove('active'));
      tag.classList.add('active');
      renderGallery(theme, searchInput.value);
    });
    tagsContainer.appendChild(tag);
  });
}

searchInput.addEventListener('input', () => {
  const activeTheme = document.querySelector('.tag.active')?.textContent || 'All';
  renderGallery(activeTheme, searchInput.value);
});

createFilterTags();
renderGallery();
