# CISH Website

A modern web application built with Next.js and React, featuring a responsive design and modern development practices.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 🛠️ Tech Stack

### Core Technologies
- [Next.js 15.5](https://nextjs.org/) - React Framework
- [React 19](https://react.dev/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

### Key Dependencies
- `class-variance-authority` - For managing component variants
- `lucide-react` - Beautiful & consistent icons
- `tailwind-merge` - Utility for merging Tailwind classes
- `clsx` - For conditional class names

### Development Tools
- ESLint - Code linting
- Prettier - Code formatting
- TypeScript - Type checking
- Lefthook - Git hooks

## 🧩 Atomic Design Structure

This project follows the **Atomic Design** methodology to create a scalable and maintainable component architecture. The component structure is organized as follows:

- **Atoms**: Basic building blocks (buttons, inputs, labels, etc.)
- **Molecules**: Groups of atoms functioning together as a unit (search bar with button, form field with label, etc.)
- **Organisms**: Complex UI components composed of molecules and/or atoms (header, card, navigation)
- **Templates**: Page-level objects that place components into a layout
- **Pages**: Specific instances of templates with real content

## 🚀 Project Structure

```
.
├── src/                    # Source code
│   ├── app/               # App router pages and layouts
│   ├── components/        # Reusable UI components
│   │   ├── atoms/        # Basic UI elements
│   │   ├── molecules/    # Groups of atoms working together
│   │   ├── organisms/    # Complex components combining molecules
│   │   └── templates/    # Page-level layouts
│   ├── lib/              # Utility functions and configs
│   ├── styles/           # Global styles and Tailwind config
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── .gitignore            # Git ignore file
```

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs)