# DevMetrics

A beautiful GitHub analytics dashboard. Enter any username and get instant insights.

![DevMetrics](https://img.shields.io/badge/GitHub-Analytics-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

<div align="center">

## Demo

![DevMetrics Dashboard](https://via.placeholder.com/800x500/0d1117/58a6ff?text=DevMetrics+Dashboard)

**[Live Demo](https://parsa-faraji.github.io/devmetrics)** | **[Try with your username](https://parsa-faraji.github.io/devmetrics?user=parsa-faraji)**

</div>

---

## Features

- **Profile Overview** - Avatar, bio, followers, following
- **Repository Stats** - Total stars, forks, average repo size
- **Language Breakdown** - Visual bar chart of programming languages used
- **Top Repositories** - Your most popular repos by stars
- **Smart Insights** - AI-generated insights about the developer
- **Shareable URLs** - `?user=username` parameter for easy sharing
- **Real-time Data** - Fetches directly from GitHub API

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

- Vanilla JavaScript
- GitHub REST API
- CSS3 with CSS Variables
- No dependencies

## Deploy

Works on any static hosting:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## Author

Built by [Parsa Faraji Alamouti](https://github.com/parsa-faraji)

## License

MIT License
