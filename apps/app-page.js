(function () {
  function appSlug() {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = params.get("app");
    if (fromQuery) {
      return fromQuery.toLowerCase();
    }

    var segments = window.location.pathname.split("/").filter(Boolean);
    var appsIndex = segments.indexOf("apps");
    if (appsIndex !== -1 && segments[appsIndex + 1]) {
      return segments[appsIndex + 1].toLowerCase();
    }

    return "";
  }

  function pageType() {
    var explicit = document.body.dataset.pageType;
    if (explicit) {
      return explicit;
    }

    return window.location.pathname.indexOf("/privacy") !== -1 ? "privacy" : "support";
  }

  function text(tag, value, className) {
    var el = document.createElement(tag);
    if (className) {
      el.className = className;
    }
    el.textContent = value;
    return el;
  }

  function renderSection(section) {
    var panel = document.createElement("section");
    panel.className = "panel";
    panel.appendChild(text("h2", section.heading));

    if (section.body) {
      panel.appendChild(text("p", section.body));
    }

    if (section.items && section.items.length) {
      var list = document.createElement("ul");
      list.className = "list";
      section.items.forEach(function (item) {
        list.appendChild(text("li", item));
      });
      panel.appendChild(list);
    }

    if (section.subsections && section.subsections.length) {
      section.subsections.forEach(function (subsection) {
        panel.appendChild(text("h3", subsection.heading));
        panel.appendChild(text("p", subsection.body));
      });
    }

    return panel;
  }

  function render(app, type) {
    var page = app[type];
    document.title = page.title;

    var root = document.getElementById("app-page");
    root.textContent = "";

    var topbar = document.createElement("header");
    topbar.className = "topbar";

    var brand = document.createElement("a");
    brand.className = "brand";
    brand.href = "../support/?app=" + encodeURIComponent(appSlug());
    brand.appendChild(text("span", app.shortName.slice(0, 1), "mark"));
    brand.appendChild(text("span", app.name));

    var nav = document.createElement("nav");
    nav.className = "nav";
    nav.setAttribute("aria-label", "Primary");

    var supportLink = document.createElement("a");
    supportLink.href = "../support/?app=" + encodeURIComponent(appSlug());
    supportLink.textContent = "Support";
    nav.appendChild(supportLink);

    var privacyLink = document.createElement("a");
    privacyLink.href = "../privacy/?app=" + encodeURIComponent(appSlug());
    privacyLink.textContent = "Privacy";
    nav.appendChild(privacyLink);

    topbar.appendChild(brand);
    topbar.appendChild(nav);

    var hero = document.createElement("section");
    hero.className = "hero";
    hero.appendChild(text("p", type === "privacy" ? "Privacy Policy" : "Support", "eyebrow"));
    hero.appendChild(text("h1", page.headline));
    hero.appendChild(text("p", page.intro, "lede"));

    var meta = document.createElement("section");
    meta.className = "panel";
    meta.appendChild(text("p", "Last updated: " + app.lastUpdated, "meta"));

    root.appendChild(topbar);
    root.appendChild(hero);
    root.appendChild(meta);

    page.sections.forEach(function (section) {
      root.appendChild(renderSection(section));
    });

    var contact = document.createElement("section");
    contact.className = "contact";
    contact.appendChild(text("h2", "Contact"));
    var contactText = document.createElement("p");
    contactText.appendChild(document.createTextNode("Email: "));
    var mail = document.createElement("a");
    mail.href = "mailto:" + app.contactEmail;
    mail.textContent = app.contactEmail;
    contactText.appendChild(mail);
    contact.appendChild(contactText);
    root.appendChild(contact);

    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.appendChild(text("p", "App support and privacy pages are provided for App Store review, beta testers, and customers."));
    root.appendChild(footer);
  }

  var slug = appSlug();
  var app = window.APP_PAGE_DATA && window.APP_PAGE_DATA[slug];
  if (!app) {
    var root = document.getElementById("app-page");
    root.appendChild(text("h1", "App page not found"));
    root.appendChild(text("p", "Check the app parameter in the URL."));
    return;
  }

  render(app, pageType());
}());
