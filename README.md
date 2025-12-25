
## Next.js Course Practice Repository

This repository contains all exercises, examples, and mini-projects completed while following a Next.js (App Router + TypeScript) Udemy course.

The goal of this repo is to document my learning progress and serve as a reference for core Next.js concepts such as:

- Server Components vs Client Components  
- Server Actions  
- Route Handlers  
- Middleware  
- Data fetching & caching  
- Dynamic routing  
- Forms & mutations  
- Production builds  

Each section of the project corresponds to a lesson or concept covered in the course.

---

## Screenshots

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/0eb7c397-6130-4f72-883b-55b0015b0617" />
<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/01648169-fc57-483a-a22f-5f8f0da23733" />
<img width="1916" height="1013" alt="image" src="https://github.com/user-attachments/assets/0308567d-e222-40e4-b74d-dbb7ba824250" />
<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/e9982f1a-f67c-40e1-a8e9-7a47c32a82c5" />

---
## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

The app will automatically reload as you make changes.

---

## What This Project Covers

This repository includes practical implementations of:

### Next.js Fundamentals
- App Router structure  
- Layouts and nested routes  
- Dynamic routes  
- Metadata and fonts  

### Server & Client Components
- When to use Server vs Client components  
- Data fetching in Server Components  
- Component boundaries and best practices  

### Data Fetching & Caching
- Static vs dynamic rendering  
- `fetch()` caching behavior  
- Revalidation strategies  
- Build-time vs runtime data  

### Server Actions
- Form submissions without API routes  
- Mutations using server actions  
- `useFormStatus` & `useFormState`  
- Revalidating paths after mutations  

### Route Handlers (API Routes)
- GET and POST handlers  
- Request & response handling  
- Using `NextRequest` and `NextResponse`  
- Testing with Thunder Client  

### Middleware
- Middleware setup  
- Route matching  
- Redirecting users  
- Basic access control logic  

### Production Build
```bash
npm run build
npm start
```
- Static vs dynamic routes  
- Understanding caching behavior  

---

## Project Structure

```
.
├── app/
│   ├── actions/          # Server actions
│   ├── api/              # Route handlers
│   ├── components/       # Reusable components
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── ...
│
├── middleware.ts         # Middleware logic
├── public/               # Static assets
├── README.md
└── package.json
```

---

## Testing & Development

During development:

```bash
npm run dev
```

For production testing:

```bash
npm run build
npm start
```

This simulates how the app behaves when deployed.

---

## Deployment

This project is designed to work perfectly with Vercel, the official Next.js hosting platform.

For deployment:
1. Push to GitHub  
2. Import into Vercel  
3. Deploy  

### Documentation
[Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)

---

## Learning Resources

- Next.js Documentation  
- Next.js App Router Guide  
- Vercel Platform  
- Udemy – Next.js Course  

---

## Purpose of This Repository

- Practice modern Next.js  
- Understand real-world app structure  
- Learn server actions & caching  
- Prepare for production-level projects  
- Serve as a reference for future projects  
```
