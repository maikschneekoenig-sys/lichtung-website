<script setup lang="ts">
const menuOpen = ref(false);
const menuButton = useTemplateRef<HTMLButtonElement>("menuButton");
const copyStatus = ref("");
let copyTimer: ReturnType<typeof setTimeout> | undefined;

const navigation = [
  { label: "Die Idee", target: "#die-idee" },
  { label: "Unsere Werte", target: "#werte" },
  { label: "Unsere Ziele", target: "#ziele" },
];

const values = [
  {
    title: "Annahme",
    icon: "accessibility_new",
    text: "Du darfst sein, wie du bist.",
  },
  {
    title: "Liebe",
    icon: "favorite_border",
    text: "Einander mit offenem Herzen begegnen.",
  },
  {
    title: "Ehrlichkeit",
    icon: "verified",
    text: "Echt sein. Und einander vertrauen.",
  },
  { title: "Freiheit", icon: "explore", text: "Den eigenen Weg gehen dürfen." },
  {
    title: "Verbundenheit",
    icon: "link",
    text: "Mit uns selbst, miteinander und der Welt.",
  },
  {
    title: "Gemeinschaft",
    icon: "groups",
    text: "Zusammen wachsen und Leben teilen.",
  },
  {
    title: "Natur",
    icon: "park",
    text: "Im Einklang mit dem, was uns umgibt.",
  },
  {
    title: "Unterstützung",
    icon: "handshake",
    text: "Füreinander da sein und uns stärken.",
  },
];

const goals = [
  {
    icon: "holiday_village",
    text: "Aufbau einer lebendigen Gemeinschaft in Deutschland",
  },
  {
    icon: "self_improvement",
    text: "Räume für Begegnung, Heilung und persönliche Entwicklung",
  },
  {
    icon: "agriculture",
    text: "Verbindung von Landwirtschaft, Technik und neuem Lernen",
  },
  {
    icon: "event",
    text: "Gemeinsame Projekte, Veranstaltungen und Sichtbarkeit",
  },
  {
    icon: "volunteer_activism",
    text: "Ein Miteinander, in dem Menschen ihre Gaben einbringen können",
  },
];

function closeMenuWithEscape(event: KeyboardEvent) {
  if (event.key === "Escape" && menuOpen.value) {
    menuOpen.value = false;
    menuButton.value?.focus();
  }
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText("ankommen@lichtung.be");
    copyStatus.value = "E-Mail-Adresse kopiert.";
  } catch {
    copyStatus.value = "Bitte kopiere die Adresse direkt: ankommen@lichtung.be";
  }
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => {
    copyStatus.value = "";
  }, 6000);
}

onMounted(() => window.addEventListener("keydown", closeMenuWithEscape));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", closeMenuWithEscape);
  clearTimeout(copyTimer);
});
</script>

<template>
  <div>
    <a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
    <header class="site-header">
      <div class="header-inner">
        <a
          class="brand"
          href="#start"
          aria-label="Die Lichtung – zur Startseite"
          @click="menuOpen = false"
        >
          <img src="/images/lichtung-logo.png" width="55" height="44" alt="" />
          <span
            >DIE LICHTUNG<small>MENSCHEN · NATUR · GEMEINSCHAFT</small></span
          >
        </a>
        <button
          ref="menuButton"
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="hauptnavigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? "Schließen" : "Menü" }}
          <span
            class="menu-lines"
            :class="{ open: menuOpen }"
            aria-hidden="true"
            ><i /><i
          /></span>
        </button>
        <nav
          id="hauptnavigation"
          class="main-nav"
          :class="{ 'is-open': menuOpen }"
          aria-label="Hauptnavigation"
        >
          <a
            v-for="item in navigation"
            :key="item.target"
            :href="item.target"
            @click="menuOpen = false"
            >{{ item.label }}</a
          >
          <a
            class="button button-small"
            href="#kontakt"
            @click="menuOpen = false"
            >Mitgestalten <span aria-hidden="true">↗</span></a
          >
        </nav>
      </div>
    </header>

    <main id="inhalt">
      <section id="start" class="hero" aria-labelledby="hero-title">
        <div class="hero-landscape" aria-hidden="true" />
        <div class="hero-side-note note-left" aria-hidden="true">
          Gemeinsam<br />mehr möglich.<span>♡</span>
        </div>
        <div class="hero-side-note note-right" aria-hidden="true">
          Mehr Mensch.<br />Mehr Leben.
        </div>
        <div class="hero-content">
          <p class="eyebrow hero-eyebrow">
            <span /> EINE GEMEINSCHAFT IM ENTSTEHEN <span />
          </p>
          <img
            class="hero-emblem"
            src="/images/lichtung-logo.png"
            width="200"
            height="161"
            alt="Menschen um ein Lagerfeuer, umgeben von Wald und Sonne"
          />
          <h1 id="hero-title">DIE LICHTUNG</h1>
          <p class="hero-tagline">Ein Leben in Annahme und Liebe.</p>
          <LeafDivider />
          <p class="hero-description">
            Für ein ehrliches, liebevolles und<br class="desktop-break" />
            naturverbundenes Miteinander.
          </p>
          <a class="button" href="#die-idee"
            >Entdecke die Lichtung <span aria-hidden="true">↓</span></a
          >
        </div>
        <div class="hero-footnote">
          <span>MENSCHEN</span><i /> <span>NATUR</span><i /><span
            >GEMEINSCHAFT</span
          ><i /><span>ZUKUNFT</span>
        </div>
      </section>

      <section
        id="die-idee"
        class="introduction section-wrap"
        aria-labelledby="idea-title"
      >
        <img
          class="intro-branch decoration"
          src="/images/blattzweig.png"
          alt=""
          width="184"
          height="169"
          loading="lazy"
        />
        <p class="eyebrow">DIE IDEE HINTER DER LICHTUNG</p>
        <h2 id="idea-title">Eine Lichtung.<br />Raum für <em>uns alle.</em></h2>
        <p class="intro-copy">
          Die Lichtung ist eine entstehende Gemeinschaft für Menschen, die sich
          nach einem ehrlichen, liebevollen und naturverbundenen Miteinander
          sehnen.
        </p>
        <p class="intro-small">
          Ein Ort, an dem wir ankommen dürfen. An dem wir miteinander wachsen,
          unsere Gaben teilen und gemeinsam eine lebenswertere Zukunft
          gestalten.
        </p>
        <LeafDivider />
      </section>

      <section id="werte" class="values-section" aria-labelledby="values-title">
        <div class="section-wrap">
          <div class="section-heading">
            <div>
              <p class="eyebrow">WAS UNS VERBINDET</p>
              <h2 id="values-title">Unsere Werte</h2>
            </div>
            <p>
              Das, was wir miteinander leben möchten.<br />Jeden Tag. Auf unsere
              eigene, menschliche Art.
            </p>
          </div>
          <ul class="values-grid">
            <li v-for="value in values" :key="value.title" class="value-item">
              <NatureIcon :name="value.icon" />
              <h3>{{ value.title }}</h3>
              <p>{{ value.text }}</p>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="ziele"
        class="goals-section section-wrap"
        aria-labelledby="goals-title"
      >
        <div class="vision-art">
          <div
            class="vision-image"
            role="img"
            aria-label="Illustration einer sonnigen Lichtung zwischen grünen Wäldern"
          />
          <div class="vision-quote">
            <p>Eine lebenswertere<br />Zukunft gestalten.</p>
            <span aria-hidden="true">♡</span>
          </div>
          <span class="art-caption"
            >VERWURZELT IN DER NATUR. OFFEN FÜR MORGEN.</span
          >
        </div>
        <div class="goals-content">
          <p class="eyebrow">WAS WIR GEMEINSAM BEWEGEN MÖCHTEN</p>
          <h2 id="goals-title">Unsere Ziele</h2>
          <p class="section-lead">
            Aus einer gemeinsamen Sehnsucht<br />wächst eine lebendige Vision.
          </p>
          <ul class="goals-list">
            <li v-for="goal in goals" :key="goal.icon">
              <NatureIcon :name="goal.icon" /><span>{{ goal.text }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="kontakt" class="invitation" aria-labelledby="contact-title">
        <div class="invitation-inner section-wrap">
          <img
            class="invitation-branch decoration"
            src="/images/blattzweig.png"
            alt=""
            width="184"
            height="169"
            loading="lazy"
          />
          <p class="eyebrow">MITDENKEN. MITFÜHLEN. MITGESTALTEN.</p>
          <h2 id="contact-title">Du bist <em>eingeladen.</em></h2>
          <p class="invitation-copy">
            Wir freuen uns über Menschen, die mitdenken,<br
              class="desktop-break"
            />
            mitfühlen und mitgestalten möchten.
          </p>
          <p class="invitation-small">
            Du fühlst dich angesprochen? Lass uns einander kennenlernen.
          </p>
          <a class="button" href="mailto:ankommen@lichtung.be"
            >Schreib uns <NatureIcon name="mail_outline"
          /></a>
          <div class="email-row">
            <a href="mailto:ankommen@lichtung.be">ankommen@lichtung.be</a
            ><button
              type="button"
              class="copy-button"
              aria-label="E-Mail-Adresse kopieren"
              @click="copyEmail"
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="13" rx="2" />
                <path
                  d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3"
                />
              </svg>
            </button>
          </div>
          <p class="copy-status" role="status">{{ copyStatus }}</p>
          <div class="initiators">
            <span class="initiators-label">DIE MENSCHEN HINTER DER IDEE</span>
            <div class="initiator">
              <span class="initials" aria-hidden="true">S</span>
              <div>
                <span>Stefanie Schwartz</span><small>Initiatorin</small>
              </div>
            </div>
            <div class="initiator">
              <span class="initials" aria-hidden="true">M</span>
              <div><span>Maik Schneekönig</span><small>Initiator</small></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="section-wrap footer-main">
        <a class="footer-brand" href="#start"
          >DIE LICHTUNG<small>Ein Leben in Annahme und Liebe.</small></a
        >
        <p>Menschen · Natur · Gemeinschaft · Zukunft</p>
        <a href="#start" class="back-top" aria-label="Zurück nach oben">↑</a>
      </div>
      <div class="section-wrap footer-bottom">
        <span>Eine Gemeinschaft im Entstehen.</span
        ><a href="mailto:ankommen@lichtung.be">ankommen@lichtung.be</a>
      </div>
    </footer>
  </div>
</template>
