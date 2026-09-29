/**
 * Draws an editor-style "typing code" animation onto a 2D canvas used as the hero monitor's screen texture.
 * Colours follow the site's gradient palette (pink / purple / cyan / blue).
 */

export const SCREEN_WIDTH = 1024;
export const SCREEN_HEIGHT = 576;

const C = {
  bg: '#0b0b12',
  bar: '#15151f',
  gutter: '#4b4b63',
  text: '#e4e4e6',
  comment: '#6b7280',
  keyword: '#f472b6',
  fn: '#60a5fa',
  string: '#22d3ee',
  prop: '#c084fc',
  punct: '#9ca3af',
};

// Each line is a list of [text, colour] tokens.
const CODE = [
  [['// where code meets creativity', C.comment]],
  [['const ', C.keyword], ['gurmehak', C.text], [' = {', C.punct]],
  [['  role', C.prop], [': ', C.punct], ["'Software Engineer'", C.string], [',', C.punct]],
  [['  stack', C.prop], [': [', C.punct], ["'Go'", C.string], [', ', C.punct], ["'React'", C.string], [', ', C.punct], ["'Next.js'", C.string], [', ', C.punct], ["'Node'", C.string], ['],', C.punct]],
  [['  based', C.prop], [': ', C.punct], ["'Bengaluru, India'", C.string], [',', C.punct]],
  [['};', C.punct]],
  [],
  [['export function ', C.keyword], ['build', C.fn], ['(idea) {', C.punct]],
  [['  return ', C.keyword], ['idea', C.text]],
  [['    .', C.punct], ['design', C.fn], ['()', C.punct]],
  [['    .', C.punct], ['code', C.fn], ['()', C.punct]],
  [['    .', C.punct], ['ship', C.fn], ['();', C.punct]],
  [['}', C.punct]],
];

const TOTAL_CHARS = CODE.reduce((n, line) => n + line.reduce((m, [t]) => m + t.length, 0) + 1, 0);
const CHARS_PER_SECOND = 28;
const HOLD_FULL = 3.5; // seconds the finished snippet stays up before retyping
const CYCLE = HOLD_FULL + TOTAL_CHARS / CHARS_PER_SECOND + 1.5;

const FONT_SIZE = 25;
const LINE_HEIGHT = 34;
const TOP = 78;
const GUTTER_X = 34;
const CODE_X = 84;

const drawChrome = (ctx) => {
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

  ctx.fillStyle = C.bar;
  ctx.fillRect(0, 0, SCREEN_WIDTH, 44);
  ['#f87171', '#fbbf24', '#34d399'].forEach((colour, i) => {
    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.arc(26 + i * 24, 22, 7, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = C.bg;
  ctx.fillRect(110, 8, 190, 36);
  ctx.font = `20px ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`;
  ctx.fillStyle = C.text;
  ctx.fillText('portfolio.js', 128, 32);
};

/**
 * Which frame to show at time `t` (seconds). `key` only changes when the picture does, so callers can skip
 * redraws and texture uploads. `still` shows the finished snippet with no animation (prefers-reduced-motion).
 */
export const getCodeFrame = (t, still = false) => {
  const phase = still ? 0 : t % CYCLE;
  const visible =
    phase > HOLD_FULL ? Math.min(TOTAL_CHARS, Math.floor((phase - HOLD_FULL) * CHARS_PER_SECOND)) : TOTAL_CHARS;
  const cursorOn = still || Math.floor(t * 2) % 2 === 0;
  return { visible, cursorOn, key: `${visible}:${cursorOn}` };
};

export const drawCodeScreen = (ctx, { visible, cursorOn }) => {
  drawChrome(ctx);
  ctx.font = `${FONT_SIZE}px ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`;
  ctx.textBaseline = 'alphabetic';

  let remaining = visible;
  let cursor = { x: CODE_X, y: TOP };

  CODE.forEach((line, i) => {
    const y = TOP + i * LINE_HEIGHT;
    ctx.fillStyle = C.gutter;
    ctx.fillText(String(i + 1).padStart(2, ' '), GUTTER_X, y);

    const reached = remaining > 0;
    let x = CODE_X;
    for (const [text, colour] of line) {
      if (remaining <= 0) break;
      const shown = text.slice(0, remaining);
      ctx.fillStyle = colour;
      ctx.fillText(shown, x, y);
      x += ctx.measureText(shown).width;
      remaining -= shown.length;
    }
    if (reached) cursor = { x, y }; // cursor sits after the last character typed so far
    remaining -= 1; // newline
  });

  if (cursorOn) {
    ctx.fillStyle = C.string;
    ctx.fillRect(cursor.x + 2, cursor.y - FONT_SIZE + 4, 3, FONT_SIZE);
  }
};
