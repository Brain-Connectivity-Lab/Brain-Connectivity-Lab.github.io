# Brain Connectivity Lab Website

A modern, responsive website for the Brain Connectivity Lab at New Jersey Institute of Technology, featuring cutting-edge research in functional brain connectivity using fMRI and computational neuroscience.

## 🧠 Features

- **Modern Design**: Dark theme with orange accents for a professional, academic look
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Multi-page Navigation**: Home, People, Research, Publications, Resources, News, Contact
- **LabBot Integration**: AI chatbot interface for research inquiries
- **Interactive Elements**: Smooth transitions, hover effects, and micro-interactions
- **GitHub Pages Ready**: Configured for easy deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/brain-connectivity-lab.git
cd brain-connectivity-lab
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

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── LabBotModal.tsx     # AI chatbot modal
├── pages/
│   ├── Home.tsx            # Landing page with hero section
│   ├── People.tsx          # Team members and profiles
│   ├── Research.tsx        # Research areas and methods
│   ├── Publications.tsx    # Academic publications
│   ├── Resources.tsx       # Software tools and datasets
│   ├── News.tsx           # Lab news and events
│   └── Contact.tsx        # Contact information and form
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles (Tailwind)
```

## 🎨 Design System

### Colors
- **Background**: Dark royal black (#171717)
- **Text**: Pure white (#FFFFFF)
- **Accent**: Orange (#FF7800)
- **Secondary**: Gray variations for depth

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- **System**: 8px base unit
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. Update the `vite.config.ts` base URL to match your repository name:
```typescript
base: '/your-repository-name/',
```

2. Build and deploy:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your static files ready for deployment

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📝 Content Management

### Updating Content

1. **People**: Edit the `people` array in `src/pages/People.tsx`
2. **Research Areas**: Modify `researchAreas` in `src/pages/Research.tsx`
3. **Publications**: Update `publications` array in `src/pages/Publications.tsx`
4. **News**: Add new items to `news` array in `src/pages/News.tsx`
5. **Contact Info**: Edit contact details in `src/pages/Contact.tsx`

### Adding Images

- Use Pexels URLs for stock photos (already implemented)
- For custom images, add to `public/` folder and reference as `/image-name.jpg`
- Ensure all images are optimized for web (WebP format recommended)

## 🤖 LabBot Integration

The LabBot chatbot is ready for integration with your preferred AI service:

1. Update the API endpoint in `src/components/LabBotModal.tsx`
2. Replace the placeholder response with actual AI integration
3. Configure authentication if required

## 🔧 Customization

### Colors
Update Tailwind config in `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      'custom-orange': '#FF7800',
      'custom-dark': '#171717',
    }
  }
}
```

### Fonts
Change fonts in `index.html` and update CSS classes accordingly.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🧪 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Vite** - Build tool
- **ESLint** - Code linting

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions about the website or technical issues:
- Email: bbiswal@njit.edu
- Create an issue on GitHub

---

Built with ❤️ for advancing brain connectivity research at NJIT.