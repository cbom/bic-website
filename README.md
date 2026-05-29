# BIC Website - Bhardwaj Innovation Center

A bilingual (English + Hindi) eLearning website for Bhardwaj Innovation Center.

## 🚀 Quick Start

Simply open `index.html` in a web browser to view the website locally.

## 📁 Project Structure

```
bic-website/
├── index.html              ← Landing page (language selector)
├── en/                     ← English pages
│   ├── index.html          ← Home
│   ├── about.html          ← About BIC
│   ├── courses.html        ← All courses
│   ├── materials.html      ← Study materials index
│   ├── contact.html        ← Contact page
│   └── materials/          ← Lesson pages
│       └── basic-computer/
│           ├── lesson-1.html
│           └── lesson-2.html
├── hi/                     ← Hindi pages (mirror of /en/)
│   ├── index.html
│   ├── about.html
│   ├── courses.html
│   ├── materials.html
│   ├── contact.html
│   └── materials/
│       └── basic-computer/
│           ├── lesson-1.html
│           └── lesson-2.html
├── assets/
│   ├── css/style.css       ← All custom styles
│   ├── js/main.js          ← Language toggle & interactions
│   └── images/             ← Logo, photos (add your own)
└── README.md               ← This file
```

## 🌐 Deployment to GitHub Pages (Free)

### Step 1: Create GitHub Account
1. Go to https://github.com and sign up (free)
2. Verify your email

### Step 2: Create Repository
1. Click "+" → "New repository"
2. Name it `bic-website`
3. Keep it Public
4. Click "Create repository"

### Step 3: Upload Files
1. On the repository page, click "uploading an existing file"
2. Drag and drop the entire `bic-website` folder contents
3. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to repository → Settings → Pages
2. Under "Source", select `main` branch
3. Click Save
4. Your site will be live at: `https://YOUR-USERNAME.github.io/bic-website/`

### Step 5: Custom Domain (Optional)
1. Buy a domain (e.g., from GoDaddy, Namecheap - ₹500-800/year)
2. In GitHub Pages settings, add your domain
3. Add a `CNAME` file with your domain name
4. Update DNS records at your domain provider

## ✏️ How to Update Content

### Adding a New Lesson
1. Copy an existing lesson file (e.g., `en/materials/basic-computer/lesson-1.html`)
2. Rename it (e.g., `lesson-4.html`)
3. Edit the content between the `<div class="lesson-content">` tags
4. Update the sidebar links to include the new lesson
5. Do the same for the Hindi version in `hi/materials/...`
6. Update `materials.html` in both `/en/` and `/hi/` to link to the new lesson

### Updating Contact Information
Search and replace these placeholders in ALL files:
- `Your Address Here` / `आपका पता यहाँ` → Your actual address
- `+91 XXXXX XXXXX` → Your actual phone number
- `info@bic-center.com` → Your actual email
- `YOUR_FORM_ID` → Your Formspree form ID (see below)

### Setting Up Contact Form (Formspree)
1. Go to https://formspree.io and sign up (free)
2. Create a new form
3. Copy the form ID (looks like `xrgbkdwl`)
4. Replace `YOUR_FORM_ID` in `en/contact.html` and `hi/contact.html`

### Updating Google Map
1. Go to Google Maps → Find your location
2. Click "Share" → "Embed a map"
3. Copy the iframe src URL
4. Replace the iframe src in `en/contact.html` and `hi/contact.html`

### Adding Announcements
Edit the announcements section in `en/index.html` and `hi/index.html`:
```html
<div class="announcement-card">
    <strong>Your Title Here</strong>
    <p class="mb-0">Your announcement text here.</p>
</div>
```

## 🔧 Customization

### Changing Colors
Edit `assets/css/style.css` — modify the CSS variables at the top:
```css
:root {
    --primary: #1a73e8;      /* Main blue color */
    --secondary: #34a853;    /* Green accent */
    --accent: #fbbc04;       /* Yellow accent */
}
```

### Adding Images
1. Place images in `assets/images/`
2. Reference them in HTML: `<img src="../assets/images/your-image.jpg" alt="description">`

### Adding a New Course Page
1. Create the page in `en/courses/` (copy an existing one)
2. Create the Hindi version in `hi/courses/`
3. Add a card linking to it in `en/courses.html` and `hi/courses.html`

## 📱 Mobile Testing
The site is mobile-responsive. Test on your phone by:
1. After deploying, open the GitHub Pages URL on your phone
2. Or locally: connect phone to same WiFi, find your PC's IP, and open `http://YOUR-PC-IP:PORT`

## 🆓 Alternative Free Hosting Options

| Platform | How to Deploy |
|----------|--------------|
| **Netlify** | Drag & drop folder at netlify.com/drop |
| **Cloudflare Pages** | Connect GitHub repo |
| **Vercel** | Connect GitHub repo |
| **InfinityFree** | Upload via FTP |

## 📋 Maintenance Checklist

- [ ] Replace all placeholder contact info
- [ ] Set up Formspree form ID
- [ ] Update Google Maps embed
- [ ] Add your logo image
- [ ] Add a favicon
- [ ] Test all links in both languages
- [ ] Test on mobile phone
- [ ] Deploy to GitHub Pages

## 🛠️ Technologies Used

- HTML5 + CSS3
- Bootstrap 5.3 (via CDN)
- Font Awesome 6 (via CDN)
- Google Fonts (Noto Sans Devanagari for Hindi)
- Formspree (contact form)
- No server needed — fully static!
