<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,1,4&height=200&section=header&text=DevMetrics&fontSize=50&fontAlignY=35&desc=GitHub%20Analytics%20Dashboard&descAlignY=55&animation=twinkling)



A beautiful GitHub analytics dashboard. Enter any username and get instant insights.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=github)](https://parsa-faraji.github.io/devmetrics)
[![Try It](https://img.shields.io/badge/Try%20It-parsa--faraji-purple?style=for-the-badge&logo=github)](https://parsa-faraji.github.io/devmetrics?user=parsa-faraji)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## Features

- **Profile Overview** - Avatar, bio, followers, following, and contribution stats
- **Repository Stats** - Total stars, forks, average repo size, and this year's commits
- **Language Breakdown** - Visual bar chart of programming languages used across all repos
- **Top Repositories** - Your most popular repos by stars with detailed stats
- **Smart Insights** - AI-generated insights about developer skills and activity
- **Shareable URLs** - `?user=username` parameter for easy sharing with others
- **Real-time Data** - Fetches directly from GitHub REST API with no auth required
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Zero Dependencies** - Pure vanilla JavaScript for minimal bundle size

## Insights Generated

DevMetrics analyzes profiles and generates insights like:
- 🌟 Popular developer status (100+ stars)
- 🔧 Polyglot developer (5+ languages)
- 🚀 Has popular repositories
- 🔥 Recent activity level
- 👥 Follower influence
- 💼 Open to opportunities

## Quick Start

1. Clone the repo
   ```bash
   git clone https://github.com/parsa-faraji/devmetrics.git
   ```

2. Open `index.html` in a browser

3. Enter any GitHub username and click Analyze!

## API Usage

DevMetrics uses the public GitHub API:
- No authentication required
- Rate limited to 60 requests/hour for unauthenticated users
- For higher limits, you can add a GitHub token

## Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **API**: GitHub REST API
- **Styling**: CSS3 with CSS Variables
- **Dependencies**: None (zero dependencies!)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## Deployment

Works on any static hosting platform:

| Platform | Link | Notes |
|----------|------|-------|
| **GitHub Pages** | [Live Demo](https://parsa-faraji.github.io/devmetrics) | Recommended - automatic with repo |
| **Netlify** | Deploy in seconds | Drag and drop the repo |
| **Vercel** | Instant deployment | Connect GitHub repo |
| **Any Server** | Upload files | Works anywhere HTML/JS is served |

## Development

No build step required! Simply open `index.html` in your browser:

```bash
git clone https://github.com/parsa-faraji/devmetrics.git
cd devmetrics
# Open index.html in your browser
```

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## Author

Built by [Parsa Faraji Alamouti](https://github.com/parsa-faraji) - [LinkedIn](https://linkedin.com/in/parsa-faraji) | [Portfolio](https://parsa-faraji.dev)

## License

MIT License - see [LICENSE](LICENSE) file for details
