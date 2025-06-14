# 🎒 its-just-trousers

A web app designed to support transgender students facing discrimination, bullying, or lack of support at school. The project was inspired by a real experience and aims to share helpful links, guidance, and personal stories to support young people navigating difficult environments.

---

## 🎯 Why this app matters

**Filling a gap**: Many transgender young people face bullying, misunderstanding, or isolation at school. This app provides crucial guidance, support, and resources.

**Empowerment**: It helps students feel less alone and more equipped to handle challenges.

**Advocacy**: Promotes awareness and empathy.

---

## 🌟 Features

- ✅ Curated resources for transgender pupils
- ✅ Advice on dealing with bullying, hate crimes, or discrimination
- ✅ Information for pupils attending unsupportive schools
- ✅ Plans to expand with personal storytelling and safe sharing

---

## 📚 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS (optional)
- **Version Control**: Git + GitHub

---

## 🚧 Roadmap

- [x] Create project scaffold with Vite
- [ ] Add resource link cards with categories
- [ ] Add advice for unsupportive school situations
- [ ] Include personal story of the "it's just trousers" incident
- [ ] Add backend for admin/upload (future)

---

## 👩‍💻 Getting Started

To run locally:

```bash
# clone the project
git clone git@github.com:kasiawalsh/its-just-trousers.git

# go into the folder
cd its-just-trousers

# install dependencies
npm install

# run the dev server
npm run dev
```

---

## 👩‍💻 Project Structure

```
src/
├── components/
│   └── ResourceCard.tsx           # Reusable card component for displaying resources
│
├── pages/
│   ├── Home.tsx                   # Landing page
│   ├── Resources.tsx              # Support links and guidance
│   ├── Submit.tsx                 # (Optional) Submit advice or share stories
│   └── LiamsStory.tsx             # 🆕 Personal story page about Liam
│
├── data/
│   └── resources.json             # Static list of external resource links
│
├── App.tsx                        # Routing and layout with SAFE EXIT
├── index.css                      # Global styles (Tailwind or custom)
└── main.tsx                       # App entry point
```

