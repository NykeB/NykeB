const SONGS_PER_PAGE = 10;

let currentPage = 1;
let filteredSongs = [...songs];

const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const yearFilter = document.getElementById("yearFilter");
const resetFilters = document.getElementById("resetFilters");
const catalogCount = document.getElementById("catalogCount");

function youtubeEmbed(url) {
  if (!url) return "";
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function uniqueValues(key) {
  return [...new Set(songs.map(song => song[key]).filter(Boolean))];
}

function populateFilters() {
  uniqueValues("genre")
    .sort((a, b) => a.localeCompare(b, "it"))
    .forEach(genre => {
      genreFilter.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
    });

  uniqueValues("year")
    .sort((a, b) => b - a)
    .forEach(year => {
      yearFilter.insertAdjacentHTML("beforeend", `<option value="${year}">${year}</option>`);
    });
}

function songMatchesSearch(song, query) {
  if (!query) return true;
  const searchable = [
    song.title,
    song.comment,
    song.genre,
    song.year,
    ...(song.payoffs || [])
  ].join(" ").toLowerCase();

  return searchable.includes(query.toLowerCase());
}

function applyFilters() {
  const query = searchInput.value.trim();
  const selectedGenre = genreFilter.value;
  const selectedYear = yearFilter.value;

  filteredSongs = songs.filter(song => {
    const matchesSearch = songMatchesSearch(song, query);
    const matchesGenre = !selectedGenre || song.genre === selectedGenre;
    const matchesYear = !selectedYear || String(song.year) === selectedYear;
    return matchesSearch && matchesGenre && matchesYear;
  });

  currentPage = 1;
  renderSongs();
  renderPagination();
}

function renderSongs() {
  const container = document.getElementById("songs");
  const start = (currentPage - 1) * SONGS_PER_PAGE;
  const pageSongs = filteredSongs.slice(start, start + SONGS_PER_PAGE);

  catalogCount.textContent = filteredSongs.length === 1
    ? "1 canzone trovata"
    : `${filteredSongs.length} canzoni trovate`;

  if (!pageSongs.length) {
    container.innerHTML = `
      <article class="empty-state">
        <h3>Nessuna canzone trovata</h3>
        <p>Prova a cambiare ricerca, genere o anno.</p>
      </article>
    `;
    return;
  }

  container.innerHTML = pageSongs.map(song => `
    <article class="song-card">
      <img class="cover" src="${song.cover}" alt="Copertina ${song.title}" loading="lazy" />

      <div class="song-info">
        <h3>${song.title}</h3>
        <p class="comment">${song.comment}</p>
        <p class="song-meta"><span>Genere</span> ${song.genre || "Non indicato"} <span>Anno</span> ${song.year || "N/D"}</p>
        <ul class="payoffs">
          ${(song.payoffs || []).map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <iframe class="player" src="${youtubeEmbed(song.youtube)}" title="Player YouTube ${song.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
    </article>
  `).join("");
}

function renderPagination() {
  const totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);
  const pagination = document.getElementById("pagination");

  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }

  pagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button class="page-btn ${page === currentPage ? "active" : ""}" data-page="${page}">Pagina ${page}</button>`;
  }).join("");

  pagination.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      currentPage = Number(button.dataset.page);
      renderSongs();
      renderPagination();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
  });
}

searchInput.addEventListener("input", applyFilters);
genreFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);
resetFilters.addEventListener("click", () => {
  searchInput.value = "";
  genreFilter.value = "";
  yearFilter.value = "";
  applyFilters();
});

document.getElementById("year").textContent = new Date().getFullYear();
populateFilters();
applyFilters();
