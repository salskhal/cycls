# Cycls

A modern landing page for Cycls - the definitive platform for commercial AI agents that transforms Python code into scalable, monetizable businesses.

## 🚀 Live Demo

[View Live Site](https://your-live-link-here.com)

## 📋 Overview

Cycls is the definitive platform for commercial AI agents. It bridges the gap between brilliant AI agent code and viable business by transforming Python functions into scalable, monetizable businesses with a single decorator. This landing page showcases how developers can go from AI agent to AI business instantly, eliminating the friction of infrastructure, frontend development, authentication, and payment integrations.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Engaging user interface with hover effects and transitions
- **Code Examples**: Syntax-highlighted code snippets demonstrating platform usage
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **TypeScript**: Full type safety throughout the application

## 🏗️ Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── ui/         # Reusable UI components (shadcn/ui)
│   ├── Hero.tsx    # Hero section component
│   ├── Problem.tsx # Problem statement section
│   ├── How.tsx     # How it works section
│   ├── ForDevAndBusiness.tsx # Developer and business sections
│   ├── Navbar.tsx  # Navigation component
│   └── Footer.tsx  # Footer component
├── lib/            # Utility functions
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cycls
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the Tailwind configuration
2. Updating component styles in individual `.tsx` files
3. Adding custom CSS in `src/index.css`

### Components

All components are located in the `src/components` directory. The UI components in `src/components/ui` are based on shadcn/ui and can be customized as needed.

### Content

To update the content:

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Problem Section**: Edit `src/components/Problem.tsx`
3. **How It Works**: Edit `src/components/How.tsx`
4. **Developer/Business Sections**: Edit `src/components/ForDevAndBusiness.tsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket configured for static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set

---

Built with ❤️ for the Cycls platform
