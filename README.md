# 🎬 Streaming-Style Portfolio Website

A modern, interactive portfolio website inspired by Netflix and other streaming platforms. Features a dark theme, smooth animations, and an engaging user experience that showcases your professional work in a unique, entertainment-focused format.

## ✨ Features

### 🎨 Design & UI
- **Netflix-inspired dark theme** with sleek typography
- **Card-style project previews** with hover effects
- **Floating avatar host** that guides users through sections
- **Responsive design** that works on all devices
- **Smooth animations** and transitions throughout

### 📱 Sections
- **Hero Section** - Welcome area with animated avatar
- **Featured Projects** - Showcase your best work with play buttons
- **Experience Playlist** - Timeline of your professional journey
- **Skills Library** - Technical skills organized by category
- **Certifications Channel** - Professional achievements
- **About Me** - Personal story and statistics
- **Contact** - Get in touch form and information

### 🚀 Interactive Elements
- **Animated skill bars** that fill on scroll
- **Project modals** with detailed information
- **Resume download** functionality
- **Mobile-responsive navigation** with hamburger menu
- **Scroll-triggered animations**
- **Interactive avatar** with changing messages

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Navigate** to the Portfolio-Website folder on your Desktop
2. **Double-click** on `index.html` to open in your web browser, or
3. **Serve** the files using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Visit** `http://localhost:8000` in your browser

## 🎯 Customization

### Personal Information
Update the following in `index.html`:

1. **Contact Information** (lines 400-420):
   - Email address
   - Phone number
   - Location

2. **About Me Section** (lines 350-380):
   - Personal description
   - Statistics (projects, experience, satisfaction)

3. **Experience Timeline** (lines 150-200):
   - Job titles and companies
   - Dates and descriptions
   - Skills and technologies

4. **Projects** (lines 80-140):
   - Project names and descriptions
   - Technology tags
   - Project images (replace placeholder URLs)

5. **Skills** (lines 250-320):
   - Add or modify skill categories
   - Update skill levels (data-level attribute)
   - Add new skill icons

6. **Certifications** (lines 330-350):
   - Add your certifications
   - Update dates and organizations

### Styling
Modify `styles.css` to:
- Change color scheme (search for color values)
- Adjust animations and transitions
- Modify layout and spacing
- Update typography

### Functionality
Enhance `script.js` to:
- Add real project links
- Implement actual contact form submission
- Add more interactive features
- Connect to external APIs

## 📱 Responsive Design

The website is fully responsive and includes:
- **Mobile-first approach** with breakpoints at 768px and 480px
- **Touch-friendly navigation** with hamburger menu
- **Optimized layouts** for different screen sizes
- **Readable typography** across all devices

## 🎨 Color Scheme

- **Primary Red**: #e50914 (Netflix red)
- **Secondary Teal**: #4ecdc4
- **Background Dark**: #0a0a0a
- **Card Background**: #1a1a1a
- **Text Light**: #ffffff
- **Text Muted**: #cccccc

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 File Structure

```
Portfolio-Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch and save
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration
3. Automatic HTTPS and CDN

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Netflix's user interface design
- Icons provided by Font Awesome
- Fonts from Google Fonts
- Design patterns from modern streaming platforms

---

**Happy coding! 🎬✨**

*Transform your portfolio into an engaging, streaming-style experience that stands out from the crowd.*
