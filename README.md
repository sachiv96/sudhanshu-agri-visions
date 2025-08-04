# Sudhanshu Bhatt - Portfolio Website

A modern, dark-themed portfolio website for Sudhanshu Bhatt, showcasing the intersection of agriculture and business innovation.

## 🌟 Features

- **Dark & Blue Theme**: Modern design with navy background and cyan accents
- **Framer Motion Animations**: Smooth, professional animations throughout
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Interactive Elements**: 
  - Rotating inspirational quotes
  - Agricultural memes with personality
  - Animated skill progress bars
  - Floating sidebar widget
  - Dynamic mood indicator
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **Accessible**: WCAG compliant with proper contrast and alt text

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static files (compatible with shared hosting)

## 📦 Installation & Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-sudhanshu

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🏗️ Build & Deployment

### For Hostinger Shared Hosting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Prepare for upload**:
   - The `dist/` folder contains all production files
   - Copy contents of `dist/` folder (not the folder itself)

3. **Upload to Hostinger**:
   - **Method 1 - File Manager**:
     - Login to Hostinger control panel
     - Open File Manager
     - Navigate to `public_html/` directory
     - Upload all files from `dist/` folder
   
   - **Method 2 - FTP**:
     - Use FileZilla or similar FTP client
     - Connect to your hosting account
     - Upload files to `public_html/` directory

4. **Verify deployment**:
   - Visit your domain
   - Check that all sections load properly
   - Test mobile responsiveness

### Important Notes
- The `.htaccess` file is included for proper SPA routing
- All assets are optimized for shared hosting performance
- No server-side dependencies required

## 🎨 Customization

### Content Updates
Edit `/src/data/content.ts` to update:
- Inspirational quotes array
- Agricultural memes
- Skills and proficiency levels  
- Project showcases
- Contact information

### Theme Customization
- **Colors**: Update `/src/index.css` CSS variables
- **Typography**: Modify font imports in `index.html`
- **Components**: Customize in `/src/components/` directory

### Adding New Quotes/Memes
```typescript
// In src/data/content.ts
export const quotes = [
  "Your new inspirational quote here...",
  // ... existing quotes
];

export const memes = [
  {
    text: "When someone asks about...",
    subtitle: "Relatable agriculture humor!",
    emoji: "🌾"
  },
  // ... existing memes
];
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (hamburger menu, stacked layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Desktop**: 1024px+ (full sidebar, multi-column layout)
- **Large Desktop**: 1280px+ (floating sidebar widget)

## 🔧 Performance Optimizations

- **Image Loading**: Lazy loading with proper alt text
- **Code Splitting**: Automatic with Vite
- **CSS Optimization**: Tailwind purges unused styles
- **Caching**: Browser caching headers in `.htaccess`
- **Compression**: GZIP compression enabled

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions) 
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is personal portfolio code. Feel free to use as inspiration but please don't copy directly.

## 🤝 Contact

**Sudhanshu Bhatt**
- Email: sudhanshu.bhatt@email.com
- LinkedIn: [linkedin.com/in/sudhanshu-bhatt](https://linkedin.com/in/sudhanshu-bhatt)
- GitHub: [github.com/sudhanshu-bhatt](https://github.com/sudhanshu-bhatt)

---

Built with ❤️ by Sudhanshu Bhatt | Agriculture thinker. Business doer.
