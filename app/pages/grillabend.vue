<script setup lang="ts">
const title = 'Aurora-Grillabend · 24. Oktober am Römerbrünnchen';
const description = 'Ein persönliches Treffen mit Menschen aus dem Aurora-Kurs. Samstag, 24. Oktober, ab 15 Uhr an der Grillhütte Römerbrünnchen in Saarbrücken. Mit Stefanie & Maik.';
useSeoMeta({
  title, description, ogTitle: title, ogDescription: description,
  ogType: 'website', ogLocale: 'de_DE',
  ogImage: 'https://lichtung.be/images/grillabend/grillhuette-1920.webp',
  ogImageAlt: 'Die Grillhütte Römerbrünnchen mitten im Wald',
  twitterCard: 'summary_large_image',
  robots: 'noindex, nofollow',
});
useHead({
  meta: [{ name: 'theme-color', content: '#f4efe3' }],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/images/grillabend/feuer.svg' }],
});

const photos = [
  { name: 'grillhuette', width: 1920, height: 1440, alt: 'Die offene Grillhütte Römerbrünnchen mit moosbewachsenem Dach, umgeben von Wald', position: '58% 40%' },
  { name: 'waldweg', width: 1600, height: 900, alt: 'Ein Waldweg führt zwischen Bäumen zur Grillhütte', position: '35% 45%' },
  { name: 'brunnen', width: 900, height: 1600, alt: 'Das Römerbrünnchen mit seinem Namensschild an einer bewachsenen Steinmauer', position: '50% 45%' },
  { name: 'waldplatz', width: 1920, height: 1440, alt: 'Steine und ein kleiner Wasserlauf auf dem Waldplatz neben der Grillhütte', position: '50% 50%' },
  { name: 'bachlauf', width: 1920, height: 2560, alt: 'Ein kleiner Bachlauf zwischen Steinen und grünen Bäumen am Römerbrünnchen', position: '50% 50%' },
];
const activePhoto = ref(0);
const paused = ref(false);
const hovered = ref(false);
const focused = ref(false);
const reducedMotion = ref(false);
const pageHidden = ref(false);
const playing = computed(() => !paused.value && !hovered.value && !focused.value && !reducedMotion.value && !pageHidden.value);
let timer: ReturnType<typeof setInterval> | undefined;
let motionQuery: MediaQueryList | undefined;
function selectPhoto(index: number) {
  activePhoto.value = (index + photos.length) % photos.length;
  paused.value = true;
}
function updateMotion() { reducedMotion.value = motionQuery?.matches ?? false; }
function updateVisibility() { pageHidden.value = document.hidden; }
function leaveFocus(event: FocusEvent) {
  if (!(event.currentTarget as HTMLElement).contains(event.relatedTarget as Node | null)) focused.value = false;
}
onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  updateMotion();
  updateVisibility();
  motionQuery.addEventListener('change', updateMotion);
  document.addEventListener('visibilitychange', updateVisibility);
  timer = setInterval(() => {
    if (playing.value) activePhoto.value = (activePhoto.value + 1) % photos.length;
  }, 6000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
  motionQuery?.removeEventListener('change', updateMotion);
  document.removeEventListener('visibilitychange', updateVisibility);
});
</script>

<template>
  <div class="grillabend">
    <a class="skip-link" href="#grillabend-inhalt">Zum Inhalt springen</a>
    <header class="g-header g-wrap">Eine Einladung von Stefanie &amp; Maik</header>

    <main id="grillabend-inhalt" class="g-wrap">
      <section class="g-hero" aria-labelledby="grillabend-title">
        <div class="g-hero-copy">
          <h1 id="grillabend-title">Aurora-Grillabend</h1>
          <p class="g-lead">Gemeinsam grillen, uns kennenlernen und über unsere Erfahrungen mit dem Aurora-Kurs austauschen.</p>

          <dl class="g-facts">
            <div>
              <dt>Wann?</dt>
              <dd><strong>Samstag, 24. Oktober · ab 15 Uhr</strong></dd>
            </div>
            <div>
              <dt>Wo?</dt>
              <dd>
                <strong>Grillhütte Römerbrünnchen</strong>
                <span>Scheidter Str., 66123 Saarbrücken</span>
                <span><strong>Bitte beachtet: Das Gelände ist nicht barrierefrei.</strong></span>
              </dd>
            </div>
            <div>
              <dt>Wie?</dt>
              <dd><strong>Ganz ungezwungen am Steingrill</strong><span>Gemeinsam grillen und reden – ohne festes Programm und ohne offiziellen Rahmen.</span></dd>
            </div>
          </dl>
        </div>

        <section
          class="g-slideshow" aria-label="Bilder vom Römerbrünnchen" aria-roledescription="Karussell"
          @mouseenter="hovered = true" @mouseleave="hovered = false"
          @focusin="focused = true" @focusout="leaveFocus"
          @keydown.left.prevent="selectPhoto(activePhoto - 1)" @keydown.right.prevent="selectPhoto(activePhoto + 1)"
        >
          <div class="g-photo-frame">
            <div v-for="(photo, index) in photos" :key="photo.name" class="g-slide" :class="{ 'is-active': activePhoto === index }" :aria-hidden="activePhoto !== index" role="group" aria-roledescription="Folie" :aria-label="`${index + 1} von ${photos.length}`">
              <img :src="`/images/grillabend/${photo.name}-1920.webp`" :srcset="`/images/grillabend/${photo.name}-800.webp 800w, /images/grillabend/${photo.name}-1920.webp ${photo.width}w`" sizes="(max-width: 800px) 100vw, 50vw" :alt="photo.alt" :style="{ objectPosition: photo.position }" :fetchpriority="index === 0 ? 'high' : 'auto'" :loading="index === 0 ? 'eager' : 'lazy'" :width="photo.width" :height="photo.height" />
            </div>
          </div>
          <div class="g-photo-controls">
            <p :aria-live="playing ? 'off' : 'polite'">Römerbrünnchen <span>· {{ activePhoto + 1 }} / {{ photos.length }}</span></p>
            <div class="g-photo-buttons">
              <button v-if="!reducedMotion" class="g-play" type="button" :aria-label="paused ? 'Automatischen Bildwechsel starten' : 'Automatischen Bildwechsel pausieren'" @click="paused = !paused"><span aria-hidden="true">{{ paused ? '▷' : 'Ⅱ' }}</span></button>
              <button type="button" aria-label="Vorheriges Bild" @click="selectPhoto(activePhoto - 1)"><span aria-hidden="true">←</span></button>
              <button type="button" aria-label="Nächstes Bild" @click="selectPhoto(activePhoto + 1)"><span aria-hidden="true">→</span></button>
            </div>
          </div>
        </section>
      </section>

      <div class="g-details">
        <section class="g-invitation" aria-labelledby="einladung-title">
          <h2 id="einladung-title">Hallo ihr Lieben!</h2>
          <p>Wir, Stefanie und Maik, kannten uns schon vor Aurora und haben uns bewusst gemeinsam für den Aurora-Kurs entschieden.</p>
          <p>Einige von euch haben sich in der Gruppe einen persönlichen Austausch gewünscht. Deshalb möchten wir euch gerne zu einem gemeinsamen Nachmittag und Abend einladen.</p>
          <p>Was hat sich durch den Kurs bei euch bewegt? Was beschäftigt euch gerade? Lasst uns gemütlich zusammensitzen und schauen, welche Gespräche sich ergeben.</p>
          <p>Wir freuen uns auf euch!<br /><strong>Stefanie &amp; Maik</strong></p>
        </section>
        <div class="g-practical">
          <section aria-labelledby="mitbringen-title">
            <h2 id="mitbringen-title">Was ihr mitbringen solltet</h2>
            <p>Bringt bitte euer <strong>Grillzeug und eure Softdrinks</strong> selbst mit. Um Feuerholz und Wasser kümmern wir uns.</p>
            <p>Denkt außerdem an <strong>ausreichend warme Kleidung und Decken zum Sitzen</strong>.</p>
          </section>
          <section aria-labelledby="anmeldung-title">
            <h2 id="anmeldung-title">Gebt Maik kurz Bescheid</h2>
            <p>Meldet euch bitte <strong>bei Maik per Telegram</strong>, wenn ihr dabei seid, damit wir genügend Wasser für alle mitbringen können.</p>
          </section>
        </div>
      </div>
    </main>
    <footer class="g-footer g-wrap">Ein privates Treffen von Stefanie &amp; Maik.</footer>
  </div>
</template>

<style scoped>
.grillabend { color: #263d32; background: #f4efe3; }
.g-wrap { width: min(1200px, calc(100% - 80px)); margin-inline: auto; }
.g-header { padding-block: 33px 27px; color: #5c665b; font: 13px/1.5 var(--sans); }
.g-hero { display: grid; grid-template-columns: 1fr 1fr; align-items: start; gap: 56px; padding-block: 16px 43px; }
.g-hero-copy { padding-top: 10px; }
h1 { font-size: clamp(45px, 4.6vw, 68px); font-weight: 500; letter-spacing: -1.7px; line-height: 1.05; margin-bottom: 20px; }
.g-lead { max-width: 490px; font-size: 23px; line-height: 1.45; color: #515e51; }
.g-facts { margin: 30px 0 0; }
.g-facts > div { display: grid; grid-template-columns: 66px 1fr; gap: 14px; padding-block: 17px; border-top: 1px solid #ced0c1; }
.g-facts dt { padding-top: 4px; font: 15px/1.5 var(--sans); font-weight: 600; }
.g-facts dd { margin: 0; font-size: 22px; line-height: 1.3; }
.g-facts strong { font-weight: 600; }
.g-facts dd > span { display: block; font-size: 19px; line-height: 1.4; color: #515e51; margin-top: 5px; }
.g-slideshow { min-width: 0; }
.g-photo-frame { position: relative; height: 490px; overflow: hidden; border-radius: 160px 3px 3px 3px; background: #d9ddcc; }
.g-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.1s ease; }
.g-slide.is-active { opacity: 1; }
.g-slide img { width: 100%; height: 100%; object-fit: cover; }
.g-photo-controls { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-top: 8px; }
.g-photo-controls p { font: 12px/1.5 var(--sans); color: #515e51; }
.g-photo-controls p > span { margin-left: 5px; white-space: nowrap; }
.g-photo-buttons { display: flex; }
.g-photo-buttons button { background: transparent; border: 0; color: #263d32; width: 44px; height: 44px; padding: 0; display: grid; place-items: center; font: 23px var(--sans); }
.g-photo-buttons .g-play { font-size: 16px; }
.g-photo-buttons button:hover { background: #e3e4d7; }
.g-photo-buttons button:focus-visible { outline-offset: 0; }
.g-details { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; padding-block: 38px 40px; border-top: 1px solid #ced0c1; }
.g-details h2 { font-size: 31px; font-weight: 600; letter-spacing: -.3px; line-height: 1.15; margin-bottom: 13px; }
.g-details p { font-size: 21px; line-height: 1.5; color: #515e51; }
.g-details p + p { margin-top: 14px; }
.g-details strong { color: #263d32; font-weight: 600; }
.g-practical section + section { margin-top: 30px; }
.g-footer { border-top: 1px solid #ced0c1; padding-block: 21px 28px; font: 12px/1.5 var(--sans); color: #5c665b; }
@media (max-width: 1050px) {
  .g-wrap { width: calc(100% - 56px); }
  .g-hero { gap: 30px; }
  h1 { font-size: 48px; }
  .g-facts > div { grid-template-columns: 58px 1fr; gap: 8px; }
  .g-details { gap: 36px; }
  .g-photo-frame { height: 500px; border-top-left-radius: 110px; }
}
@media (max-width: 800px) {
  .g-wrap { width: calc(100% - 40px); }
  .g-header { padding-block: 25px 14px; font-size: 12px; }
  .g-hero { grid-template-columns: 1fr; gap: 22px; padding-block: 12px 29px; }
  .g-hero-copy { padding: 0; }
  h1 { font-size: clamp(40px, 11.4vw, 58px); letter-spacing: -1px; margin-bottom: 15px; }
  .g-lead { font-size: 21px; max-width: none; }
  .g-facts { margin-top: 22px; }
  .g-facts > div { grid-template-columns: 54px 1fr; gap: 12px; padding-block: 15px; }
  .g-facts dt { font-size: 14px; }
  .g-facts dd { font-size: 22px; }
  .g-facts dd > span { font-size: 19px; }
  .g-photo-frame { height: auto; aspect-ratio: 1.1; border-top-left-radius: 100px; }
  .g-photo-controls p { font-size: 11px; }
  .g-photo-controls p > span { margin-left: 2px; }
  .g-details { grid-template-columns: 1fr; gap: 30px; padding-block: 30px; }
  .g-details h2 { font-size: 29px; }
  .g-details p { font-size: 21px; }
  .g-practical section + section { margin-top: 27px; }
  .g-footer { font-size: 11px; }
}
@media (prefers-reduced-motion: reduce) { .g-slide { transition: none; } }
</style>
