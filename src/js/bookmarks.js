// Bookmark topics for revision
(function() {
  const STORAGE_KEY = 'bharatnotes_bookmarks';

  function getBookmarks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  function saveBookmarks(bm) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bm));
  }

  function isBookmarked(url) {
    return getBookmarks().some(b => b.url === url);
  }

  // Only add to actual topic pages (must have article-body AND topic-tabs)
  var articleBody = document.querySelector('.article-body');
  var topicTabs = document.querySelector('.topic-tabs');
  if (!articleBody || !topicTabs) return;

  var url = window.location.pathname;
  var title = document.title.split('|')[0].trim();
  var bookmarked = isBookmarked(url);

  // Place inside the sidebar "Topic Info" card instead of the header
  var sidebar = document.querySelector('.layout-with-sidebar aside');
  if (!sidebar) return;

  // Find the Topic Info card (first card in sidebar)
  var infoCard = sidebar.querySelector('.card');
  if (!infoCard) return;

  var heroBtn = document.getElementById('btn-bookmark-hero');

  var btn = document.createElement('button');
  btn.id = 'btn-bookmark';
  btn.setAttribute('aria-pressed', bookmarked ? 'true' : 'false');
  btn.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:8px;width:100%;margin-top:12px;padding:12px 16px;min-height:48px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s ease;border:1.5px solid;touch-action:manipulation;letter-spacing:0.01em;';

  function render(active) {
    if (active) {
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" style="flex-shrink:0;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Bookmarked';
      btn.style.background = 'var(--color-accent-pale)';
      btn.style.color = 'var(--color-accent)';
      btn.style.borderColor = 'var(--color-accent)';
      btn.setAttribute('aria-pressed', 'true');
      if (heroBtn) {
        heroBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Bookmarked';
        heroBtn.classList.add('page-header__action-btn--bookmarked');
      }
    } else {
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Bookmark';
      btn.style.background = 'transparent';
      btn.style.color = 'var(--color-text-secondary)';
      btn.style.borderColor = 'var(--color-border)';
      btn.setAttribute('aria-pressed', 'false');
      if (heroBtn) {
        heroBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="flex-shrink:0;"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> Bookmark';
        heroBtn.classList.remove('page-header__action-btn--bookmarked');
      }
    }
  }

  render(bookmarked);

  function toggle() {
    var bm = getBookmarks();
    var idx = bm.findIndex(function(b) { return b.url === url; });
    if (idx >= 0) {
      bm.splice(idx, 1);
      render(false);
    } else {
      bm.unshift({ url: url, title: title, date: new Date().toISOString() });
      if (bm.length > 100) bm.pop();
      render(true);
    }
    saveBookmarks(bm);
  }

  btn.addEventListener('click', toggle);
  if (heroBtn) heroBtn.addEventListener('click', toggle);

  btn.addEventListener('mouseenter', function() {
    btn.style.transform = 'translateY(-1px)';
    btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.transform = 'none';
    btn.style.boxShadow = 'none';
  });

  infoCard.appendChild(btn);
})();
