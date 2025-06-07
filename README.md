# ♻️ REMWaste Skip Selector – Frontend Challenge

A complete redesign of the “Choose Your Skip Size” page from [wewantwaste.co.uk](https://wewantwaste.co.uk/), focused on delivering a **modern**, **accessible**, and **responsive** user experience — powered by **live data** and built with a clean, scalable architecture.

---

## 🚀 Live Demo & Repository

- **🔗 Live App:** [https://your-live-link.com](https://your-live-link.com)  
- **📁 GitHub Repo:** [https://github.com/beratperson/skip-selector](https://github.com/beratperson/skip-selector)

---

## 📌 Project Highlights

✅ **Modern Tech Stack**  
✅ **Mobile-First & Responsive Design**  
✅ **Dynamic Data (No hardcoding)**  
✅ **Production-Ready Clean Architecture**  
✅ **Component-Based Design & Type Safety**

---

## 🧠 My Approach

### 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data:** Live API consumption via `fetch`

### ♻️ Live Skip Data

All skip size data and pricing is dynamically fetched from the official API:

GET https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


No static or hardcoded business data is used.

### 🎨 UI/UX Strategy

- Focus on **clarity**, **readability**, and **modern aesthetics**
- Fully **mobile-first design** with tailored layout changes
- High **accessibility** standards (semantic HTML, contrast, focus states)
- Visually **distinct from the original** with a fresh, user-friendly approach

---

## 🧩 Project Structure

├── components/ // Reusable UI building blocks
├── app/ // Next.js app pages & routing
├── hooks/ // Custom React hooks (data fetching, selection)
├── types/ // Centralized TypeScript interfaces
├── utils/ // Helper functions (e.g., price formatting)
└── styles/ // Tailwind config and global styles


---

## 📦 Installation & Usage

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit in browser
http://localhost:3000



📱 Responsiveness
This application is fully responsive and tested on:

✅ Desktop browsers

✅ Tablets

✅ Mobile devices (iOS & Android)

The UI gracefully adapts to different screen sizes while preserving functionality.

📌 Notes
⚙️ All business data is dynamically retrieved from the API

🧼 Clean, modular codebase – ready for further production integration

💡 Fully functional selection logic and price summary with VAT & delivery

🔄 Easily extensible for future features like user login, checkout, etc.

🙌 Thanks for Reviewing!
