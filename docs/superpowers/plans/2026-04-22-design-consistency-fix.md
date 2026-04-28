# Design Consistency Fix — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Surgically fix font inconsistency, color mismatches, padding asymmetry, and section spacing across the entire Umang Hospital site — without changing any content.

**Architecture:** Six focused task groups targeting the CSS foundation first (tokens, fonts, container), then sweeping each component/page for off-brand colors and spacing. All fixes go through `global.css` design tokens where possible so changes propagate automatically. Only components that bypass tokens need individual edits.

**Tech Stack:** React 18, Tailwind CSS v4 (`@theme` in `global.css`), Framer Motion, Vite

**⚠ IMPORTANT:** Do NOT change any visible text, headings, paragraphs, labels, or data values. Only change CSS classes and design tokens.

---

## File Map

| File | Change |
|---|---|
| `frontend/src/style.css` | Remove Vite boilerplate that conflicts with global styles |
| `frontend/src/styles/global.css` | Fix serif font token, h2 mobile size, container max-width, font-sans token |
| `frontend/tailwind.config.js` | Align color palette with global.css teal/orange brand |
| `frontend/index.html` | Clean up redundant Google Fonts import |
| `frontend/src/components/home/AppointmentCTA.jsx` | Fix `text-blue-100/50` off-brand color |
| `frontend/src/components/home/HealthPackagesPreview.jsx` | Fix `bg-blue-50`, `bg-red-50`, `from-blue-500`, `from-rose-500` off-brand |
| `frontend/src/components/home/ServicesSection.jsx` | Fix `from-blue-500`, `bg-blue-50`, `from-emerald-500`, `bg-green-50` |
| `frontend/src/components/home/WhyChooseUs.jsx` | Fix `bg-blue-100/30` background orb |
| `frontend/src/components/home/Testimonials.jsx` | Fix `bg-blue-100` orb + normalize `py-20 lg:py-32` → `py-16 lg:py-24` |
| `frontend/src/components/home/HeroSection.jsx` | Remove `pl-20` asymmetric override on container |
| `frontend/src/components/home/EventHighlights.jsx` | Normalize `py-12 lg:py-16` → `py-16 lg:py-24` |
| `frontend/src/components/home/HealthPackagesPreview.jsx` | Normalize `py-16 lg:py-24` (already correct, verify) |
| `frontend/src/pages/contact/Contact.jsx` | Normalize `py-32` sections → `py-16 lg:py-24` |
| `frontend/src/pages/contact/InquiryHub.jsx` | Normalize `py-32` sections → `py-16 lg:py-24` |

---

## Task 1: Clear style.css Vite Boilerplate

**Files:**
- Modify: `frontend/src/style.css`

The old Vite default `style.css` sets `background-color: #242424`, blue link colors `#646cff`, and a custom `h1` font-size that conflicts with `global.css`.

- [ ] **Step 1.1 — Replace style.css with a clean no-op**

Replace the entire file content with:

```css
/* Project styles are in src/styles/global.css */
```

- [ ] **Step 1.2 — Verify build still runs**

```bash
cd frontend && npm run build 2>&1 | tail -5
```
Expected: no errors, build succeeds.

- [ ] **Step 1.3 — Commit**

```bash
git add frontend/src/style.css
git commit -m "chore: remove Vite boilerplate from style.css — conflicts with global.css"
```

---

## Task 2: Fix Design Tokens in global.css

**Files:**
- Modify: `frontend/src/styles/global.css` (lines 39–40, 122, 131)

Four token fixes in one file:
1. `--font-sans` missing Montserrat fallback
2. `--font-serif` mapped to Figtree (a sans-serif!) — should be Playfair Display
3. `h2` mobile size `text-xl` (20px) is too small — should be `text-2xl`
4. `container-custom` `max-w-[96rem]` (1536px) is too wide — should be `max-w-7xl` (1280px)

- [ ] **Step 2.1 — Fix `--font-sans` fallback (line 39)**

Change:
```css
  --font-sans: "Figtree", sans-serif;
```
To:
```css
  --font-sans: "Figtree", "Montserrat", sans-serif;
```

- [ ] **Step 2.2 — Fix `--font-serif` to use Playfair Display (line 40)**

Change:
```css
  --font-serif: "Figtree", sans-serif;
```
To:
```css
  --font-serif: "Playfair Display", Georgia, serif;
```

- [ ] **Step 2.3 — Fix h2 mobile breakpoint (line 122)**

Change:
```css
  h2 { @apply text-xl md:text-4xl lg:text-5xl; }
```
To:
```css
  h2 { @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl; }
```

- [ ] **Step 2.4 — Fix container max-width (line 131)**

Change:
```css
    @apply container mx-auto px-4 sm:px-8 lg:px-12 max-w-[96rem];
```
To:
```css
    @apply container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl;
```

- [ ] **Step 2.5 — Remove unused font imports from global.css (line 1)**

The import at line 1 loads Outfit, Cormorant Garamond, and Inter — none are used in the project. Playfair Display is NOT in this import but IS in index.html. Clean up:

Change:
```css
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Montserrat:wght@100..900&family=Outfit:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
```
To:
```css
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Montserrat:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
```

- [ ] **Step 2.6 — Verify build still runs**

```bash
cd frontend && npm run build 2>&1 | tail -5
```
Expected: no errors.

- [ ] **Step 2.7 — Commit**

```bash
git add frontend/src/styles/global.css
git commit -m "fix: set Playfair Display as serif font, fix h2 mobile size, reduce container max-width to 7xl"
```

---

## Task 3: Align tailwind.config.js Colors with Brand Tokens

**Files:**
- Modify: `frontend/tailwind.config.js`

`tailwind.config.js` has a sky-blue primary (`#0ea5e9`) and amber accent (`#fbbf24`) that contradict the `global.css` @theme teal/orange brand palette. Since the project uses Tailwind v4 with `@theme`, `global.css` wins at runtime — but the config mismatch can cause IDEs and tooling to suggest wrong completions. Align them.

- [ ] **Step 3.1 — Replace color palette in tailwind.config.js**

Replace the entire file with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fbfc',
          100: '#d4f1f5',
          200: '#a8e3ec',
          300: '#6acdd9',
          400: '#35b3c4',
          500: '#1E97B2',  // Brand Teal
          600: '#1a8299',
          700: '#196b7e',
          800: '#1a5667',
          900: '#1b4856',
          950: '#0d2f3a',
        },
        accent: {
          50:  '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd24a',
          400: '#ffbf20',
          500: '#FFA600',  // Brand Orange
          600: '#e09000',
          700: '#b86d02',
          800: '#955408',
          900: '#7b440b',
          950: '#472300',
        },
        brand: {
          dark:   '#0f172a',
          teal:   '#1E97B2',
          orange: '#FFA600',
        },
      },
      fontFamily: {
        sans:  ['Figtree', 'Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float':  'float 6s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3.2 — Verify build**

```bash
cd frontend && npm run build 2>&1 | tail -5
```
Expected: no errors.

- [ ] **Step 3.3 — Commit**

```bash
git add frontend/tailwind.config.js
git commit -m "fix: align tailwind.config.js colors with global.css brand teal/orange palette"
```

---

## Task 4: Fix Off-Brand Colors in Home Components

**Files:**
- Modify: `frontend/src/components/home/AppointmentCTA.jsx` (line 78)
- Modify: `frontend/src/components/home/HealthPackagesPreview.jsx` (lines 12–13, 31–32)
- Modify: `frontend/src/components/home/ServicesSection.jsx` (lines 8–9)
- Modify: `frontend/src/components/home/WhyChooseUs.jsx` (line 52)
- Modify: `frontend/src/components/home/Testimonials.jsx` (line 154)

### 4a — AppointmentCTA.jsx

- [ ] **Step 4.1 — Fix `text-blue-100/50` (line 78)**

Change:
```jsx
className="text-base md:text-xl text-blue-100/50 mb-12 max-w-xl mx-auto font-light leading-relaxed"
```
To:
```jsx
className="text-base md:text-xl text-primary-100/60 mb-12 max-w-xl mx-auto font-light leading-relaxed"
```

### 4b — HealthPackagesPreview.jsx

The three health package cards have `color` (gradient) and `bgLight` (tag background) defined as data. Cards 1 and 3 use off-brand blue and rose.

- [ ] **Step 4.2 — Fix package 1: Basic Health Check**

Change:
```js
  {
    title: "Basic Health Check",
    desc: "Essential screening for 40+ vital parameters.",
    tag: "Essential",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
```
To:
```js
  {
    title: "Basic Health Check",
    desc: "Essential screening for 40+ vital parameters.",
    tag: "Essential",
    icon: ShieldCheck,
    color: "from-primary-400 to-primary-600",
    bgLight: "bg-primary-50",
```

- [ ] **Step 4.3 — Fix package 3: Premium Heart Check**

Change:
```js
  {
    title: "Premium Heart Check",
    desc: "Advanced cardiac risk assessment with 60+ tests.",
    tag: "Advanced",
    icon: Heart,
    color: "from-rose-500 to-red-600",
    bgLight: "bg-red-50",
```
To:
```js
  {
    title: "Premium Heart Check",
    desc: "Advanced cardiac risk assessment with 60+ tests.",
    tag: "Advanced",
    icon: Heart,
    color: "from-accent-400 to-accent-600",
    bgLight: "bg-accent-50",
```

### 4c — ServicesSection.jsx

- [ ] **Step 4.4 — Fix Home Care service card colors**

Change:
```js
  { icon: Home, title: "Home Care", path: "/services/ipd-opd", desc: "Nursing, physiotherapy, and elderly care at your doorstep. Professional medical staff available round the clock.", img: ASSETS.NURSE_CARE, accent: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50' },
```
To:
```js
  { icon: Home, title: "Home Care", path: "/services/ipd-opd", desc: "Nursing, physiotherapy, and elderly care at your doorstep. Professional medical staff available round the clock.", img: ASSETS.NURSE_CARE, accent: 'from-primary-400 to-primary-600', bg: 'bg-primary-50' },
```

- [ ] **Step 4.5 — Fix Telemedicine service card colors**

Change:
```js
  { icon: Video, title: "Telemedicine", path: "/services/telemedicine", desc: "Connect with top specialists via secure video calls. Get expert medical advice from the comfort of your home.", img: ASSETS.TELEMEDICINE, accent: 'from-emerald-500 to-green-500', bg: 'bg-green-50' },
```
To:
```js
  { icon: Video, title: "Telemedicine", path: "/services/telemedicine", desc: "Connect with top specialists via secure video calls. Get expert medical advice from the comfort of your home.", img: ASSETS.TELEMEDICINE, accent: 'from-primary-500 to-accent-500', bg: 'bg-accent-50' },
```

### 4d — WhyChooseUs.jsx

- [ ] **Step 4.6 — Fix background orb color (line 52)**

Change:
```jsx
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] -ml-80 -mb-80 pointer-events-none" />
```
To:
```jsx
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[100px] -ml-80 -mb-80 pointer-events-none" />
```

### 4e — Testimonials.jsx

- [ ] **Step 4.7 — Fix background orb color (line 154)**

Change:
```jsx
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
```
To:
```jsx
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary-100/60 rounded-full blur-[120px]" />
```

- [ ] **Step 4.8 — Verify build**

```bash
cd frontend && npm run build 2>&1 | tail -5
```
Expected: no errors.

- [ ] **Step 4.9 — Commit**

```bash
git add frontend/src/components/home/AppointmentCTA.jsx frontend/src/components/home/HealthPackagesPreview.jsx frontend/src/components/home/ServicesSection.jsx frontend/src/components/home/WhyChooseUs.jsx frontend/src/components/home/Testimonials.jsx
git commit -m "fix: replace off-brand blue/rose/green colors with primary/accent brand palette in home components"
```

---

## Task 5: Fix Container Asymmetry in HeroSection

**Files:**
- Modify: `frontend/src/components/home/HeroSection.jsx` (line 444)

The bottom trust-badges bar uses `container-custom pb-7 pl-20`. The `pl-20` (80px) hard-overrides the left side, making the trust badges misaligned vs the rest of the hero content which uses `container-custom` without overrides.

- [ ] **Step 5.1 — Remove `pl-20` override**

Change:
```jsx
        <div className="container-custom pb-7 pl-20">
```
To:
```jsx
        <div className="container-custom pb-7">
```

- [ ] **Step 5.2 — Verify build**

```bash
cd frontend && npm run build 2>&1 | tail -5
```
Expected: no errors.

- [ ] **Step 5.3 — Commit**

```bash
git add frontend/src/components/home/HeroSection.jsx
git commit -m "fix: remove pl-20 asymmetric padding override from HeroSection trust bar"
```

---

## Task 6: Normalize Section Vertical Spacing

**Files:**
- Modify: `frontend/src/components/home/EventHighlights.jsx` (line 107)
- Modify: `frontend/src/components/home/Testimonials.jsx` (line 150)
- Modify: `frontend/src/pages/contact/Contact.jsx` (lines 144, 163, 378, 425)
- Modify: `frontend/src/pages/contact/InquiryHub.jsx` (lines 92, 113, 231)

Standard for content sections: `py-16 lg:py-24`. Dark hero/CTA sections with their own dramatic feel keep their values. `py-32` (128px) on interior contact sections is excessive.

### 6a — EventHighlights.jsx

- [ ] **Step 6.1 — Normalize EventHighlights padding**

Change:
```jsx
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
```
To:
```jsx
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
```

### 6b — Testimonials.jsx

- [ ] **Step 6.2 — Normalize Testimonials padding**

Change:
```jsx
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
```
To:
```jsx
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
```

### 6c — Contact.jsx

- [ ] **Step 6.3 — Normalize first interior section (line 144)**

Change:
```jsx
      <div className="bg-white py-24 border-b border-gray-50">
```
To:
```jsx
      <div className="bg-white py-16 lg:py-24 border-b border-gray-50">
```

- [ ] **Step 6.4 — Normalize map/form section (line 163)**

Change:
```jsx
      <section className="py-32 bg-gray-50 overflow-hidden">
```
To:
```jsx
      <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
```

- [ ] **Step 6.5 — Normalize second py-32 section (line 378)**

Change:
```jsx
      <section className="py-32 bg-gray-50 overflow-hidden">
```
To:
```jsx
      <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
```

- [ ] **Step 6.6 — Normalize third py-32 section (line 425)**

Change:
```jsx
      <section className="py-32 bg-white">
```
To:
```jsx
      <section className="py-16 lg:py-24 bg-white">
```

### 6d — InquiryHub.jsx

- [ ] **Step 6.7 — Normalize dark strip section (line 92)**

Change:
```jsx
      <div className="bg-[#030712] py-16 border-b border-white/5 relative overflow-hidden">
```
To (already reasonable, leave `py-16`):
```jsx
      <div className="bg-[#030712] py-16 border-b border-white/5 relative overflow-hidden">
```
_(no change needed here — py-16 is already standard)_

- [ ] **Step 6.8 — Normalize contact form section (line 113)**

Change:
```jsx
      <section className="py-32 bg-white">
```
To:
```jsx
      <section className="py-16 lg:py-24 bg-white">
```

- [ ] **Step 6.9 — Normalize inquiry form section (line 231)**

Change:
```jsx
      <section id="inquiry-form" className="py-32 bg-white">
```
To:
```jsx
      <section id="inquiry-form" className="py-16 lg:py-24 bg-white">
```

- [ ] **Step 6.10 — Normalize dark CTA section (line 430)**

Change:
```jsx
      <section className="py-32 bg-[#0f172a] text-white">
```
To:
```jsx
      <section className="py-16 lg:py-24 bg-[#0f172a] text-white">
```

- [ ] **Step 6.11 — Verify build**

```bash
cd frontend && npm run build 2>&1 | tail -5
```
Expected: no errors.

- [ ] **Step 6.12 — Commit**

```bash
git add frontend/src/components/home/EventHighlights.jsx frontend/src/components/home/Testimonials.jsx frontend/src/pages/contact/Contact.jsx frontend/src/pages/contact/InquiryHub.jsx
git commit -m "fix: normalize section vertical spacing to py-16 lg:py-24 standard across home and contact pages"
```

---

## Verification Checklist (after all tasks)

Run the dev server and spot-check these pages visually:

```bash
cd frontend && npm run dev
```

| Check | Expected |
|---|---|
| Home page headings | Display in Playfair Display (serif, elegant) |
| Home section spacing | Consistent top/bottom rhythm, no giant gaps |
| Health Packages cards | Teal + orange palette, no blue/rose |
| Services cards | Teal palette, no blue/green |
| Appointment CTA subtext | Readable teal-tinted white, not blue |
| Hero trust bar | Aligned left with rest of content |
| Contact page | No oversized py-32 gaps |
| All pages | Container max-width consistent, equal left/right padding |

---

## Final Commit

```bash
git add -A
git commit -m "feat: design consistency pass — font tokens, brand colors, container width, section spacing"
```
