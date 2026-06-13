# Abdullah Abouella Portfolio

A bilingual personal portfolio for Abdullah Abouella, positioned around the person behind the systems: operational thinking, database-first product design, HR/payroll platforms, reporting workflows, and AI automation.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Important install note

This package intentionally does **not** include `node_modules` or `package-lock.json`.

If you previously extracted the project over an older folder and npm still tries to use an internal registry, delete the old install files first:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm config set registry https://registry.npmjs.org/
npm install
```

Best practice: extract this ZIP into a fresh folder before running `npm install`.

## Project Structure

```text
src/
  components/      UI sections, proof sections, and interactive components
  context/         Language provider and RTL handling
  data/            English/Arabic copy, projects, skills, demos
  utils/           Calendly integration helper
public/
  screenshots/     Project screenshots used in case studies
  abdo-logo.jpg    Portfolio logo
```

## Notes

- The portfolio supports English and Arabic layouts.
- Project screenshots are presented as case-study proof and optimized as web images.
- Calendly opens as a popup for booking a meeting.
- Lara is used as the bilingual portfolio assistant name and can guide visitors in Arabic and English.
- The public resume download points to `public/Abdullah_Abouella_Resume.docx`, matching the latest uploaded resume file.
- The copy now follows the updated EN/AR direction for operations-first software, Builder DNA, work-behind-screens proof, Lara, AI workflow automation, capabilities, About, Why Work With Me, and the final CTA.

## Owner

Abdullah Abouella  
Business Systems Engineer · Software Developer · AI Automation Specialist
