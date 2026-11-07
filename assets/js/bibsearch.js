import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("bibsearch");
  if (!searchInput) return;

  const entries = document.querySelectorAll(".bibliography > li");
  const bibliographyLists = document.querySelectorAll("ol.bibliography");
  const topicButtons = document.querySelectorAll(".bib-topic-filter[data-bib-topic]");
  const searchControl = document.querySelector(".bib-search-control");
  const searchToggle = document.querySelector(".bib-search-toggle");
  let selectedTopic = "";

  const setSearchOpen = (isOpen) => {
    if (!searchControl || !searchToggle) return;
    searchControl.classList.toggle("is-open", isOpen);
    searchToggle.setAttribute("aria-expanded", String(isOpen));
    searchInput.setAttribute("aria-hidden", String(!isOpen));
    searchInput.tabIndex = isOpen ? 0 : -1;
  };

  const updateTopicButtons = () => {
    topicButtons.forEach((topicButton) => {
      topicButton.setAttribute("aria-pressed", String(topicButton.dataset.bibTopic === selectedTopic));
    });
  };

  const updateGroupVisibility = () => {
    bibliographyLists.forEach((list) => {
      const hasVisibleEntry = Array.from(list.children).some((entry) => !entry.classList.contains("unloaded"));
      list.classList.toggle("unloaded", !hasVisibleEntry);

      const heading = list.previousElementSibling;
      if (heading?.matches("h2.bibliography")) {
        heading.classList.toggle("unloaded", !hasVisibleEntry);
      }
    });
  };

  const filterItems = (searchTerm) => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const supportsHighlights = typeof CSS !== "undefined" && CSS.highlights;
    const nonMatchingEntries = supportsHighlights
      ? new Set(highlightSearchTerm({ search: normalizedSearchTerm, selector: ".bibliography > li" }) || [])
      : null;

    entries.forEach((entry) => {
      const entryTopic = entry.querySelector("[data-bib-topic]")?.dataset.bibTopic || "";
      const matchesTopic = !selectedTopic || entryTopic === selectedTopic;
      const matchesSearch =
        !normalizedSearchTerm || (supportsHighlights ? !nonMatchingEntries.has(entry) : entry.innerText.toLowerCase().includes(normalizedSearchTerm));

      entry.classList.toggle("unloaded", !matchesTopic || !matchesSearch);
    });

    updateGroupVisibility();
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1));
    searchInput.value = hashValue;
    setSearchOpen(Boolean(hashValue));
    filterItems(hashValue);
  };

  searchToggle?.addEventListener("click", function () {
    setSearchOpen(true);
    searchInput.focus();
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !this.value) {
      setSearchOpen(false);
      searchToggle?.focus();
    }
  });

  searchInput.addEventListener("blur", function () {
    window.setTimeout(() => {
      if (!this.value && !searchControl?.contains(document.activeElement)) {
        setSearchOpen(false);
      }
    }, 0);
  });

  let timeoutId;
  searchInput.addEventListener("input", function () {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => filterItems(this.value), 300);
  });

  topicButtons.forEach((button) => {
    button.addEventListener("click", function () {
      selectedTopic = selectedTopic === this.dataset.bibTopic ? "" : this.dataset.bibTopic;
      updateTopicButtons();
      filterItems(searchInput.value);
    });
  });

  window.addEventListener("hashchange", updateInputField);
  updateTopicButtons();
  updateInputField();
});
