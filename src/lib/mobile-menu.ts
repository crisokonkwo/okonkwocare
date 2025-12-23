export function initMobileMenu() {
  const button = document.getElementById("menu-button");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close");

  if (!button || !drawer || !overlay || !closeBtn) return;

  let lastFocused: HTMLElement | null = null;
  let scrollY = 0;

  const getFocusable = (): HTMLElement[] =>
    Array.from(
      drawer.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el): el is HTMLElement => (el as HTMLElement).offsetParent !== null);

  // iOS-safe scroll lock (prevents background scroll/bounce)
  const lockScroll = () => {
    scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
  };

  const open = () => {
    lastFocused = document.activeElement as HTMLElement;
    drawer.classList.remove("hidden");
    drawer.setAttribute("data-open", "true");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Close menu");
    lockScroll();

    // Focus first actionable element in panel
    const focusables = getFocusable();
    if (focusables.length) focusables[0].focus();
  };

  const close = () => {
    drawer.setAttribute("data-open", "false");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
    unlockScroll();

    // Wait for animation, then hide (keeps CSS-only animation intact)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const delay = reduceMotion ? 0 : 220;
    window.setTimeout(() => drawer.classList.add("hidden"), delay);

    if (lastFocused && typeof lastFocused.focus === "function")
      lastFocused.focus();
  };

  const toggle = () => {
    const isOpen = drawer.getAttribute("data-open") === "true";
    isOpen ? close() : open();
  };

  // Toggle handlers
  button.addEventListener("click", toggle);
  overlay.addEventListener("click", close);
  closeBtn.addEventListener("click", close);

  // Close menu when clicking a nav link (route change intent)
  drawer.querySelectorAll("[data-nav-link]").forEach((a) => {
    a.addEventListener("click", () => close());
  });

  // Close on Escape + focus trap
  drawer.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }

    if (e.key !== "Tab") return;

    const focusables = getFocusable();
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Close on back/forward navigation
  window.addEventListener("popstate", () => {
    if (drawer.getAttribute("data-open") === "true") close();
  });

  // Close on Astro view transition navigation (if enabled later)
  document.addEventListener("astro:before-swap", () => {
    if (drawer.getAttribute("data-open") === "true") close();
  });
}
