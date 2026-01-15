/**
 * DevMetrics - GitHub Analytics Dashboard
 */

(function() {
    'use strict';

    const API_BASE = 'https://api.github.com';

    const languageColors = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        Python: '#3572A5',
        Java: '#b07219',
        'C++': '#f34b7d',
        C: '#555555',
        'C#': '#178600',
        Go: '#00ADD8',
        Rust: '#dea584',
        Ruby: '#701516',
        PHP: '#4F5D95',
        Swift: '#F05138',
        Kotlin: '#A97BFF',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Shell: '#89e051',
        Jupyter: '#DA5B0B',
        Vue: '#41b883',
        Dart: '#00B4AB',
        R: '#198CE7'
    };

    const elements = {
        username: document.getElementById('username'),
        analyze: document.getElementById('analyze'),
        dashboard: document.getElementById('dashboard'),
        loading: document.getElementById('loading'),
        error: document.getElementById('error'),
        errorMsg: document.getElementById('errorMsg')
    };

    function init() {
        elements.analyze.addEventListener('click', analyze);
        elements.username.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') analyze();
        });

        // Check URL params
        const params = new URLSearchParams(window.location.search);
        const user = params.get('user');
        if (user) {
            elements.username.value = user;
            analyze();
        }
    }

    async function analyze() {
        const username = elements.username.value.trim();
        if (!username) return;

        showLoading();

        try {
            const [user, repos] = await Promise.all([
                fetchUser(username),
                fetchRepos(username)
            ]);

            renderProfile(user);
            renderStats(repos);
            renderLanguages(repos);
            renderTopRepos(repos);
            renderInsights(user, repos);

            showDashboard();

            // Update URL
            history.replaceState(null, '', `?user=${username}`);
        } catch (error) {
            showError(error.message);
        }
    }

    async function fetchUser(username) {
        const res = await fetch(`${API_BASE}/users/${username}`);
        if (!res.ok) throw new Error('User not found');
        return res.json();
    }

    async function fetchRepos(username) {
        const res = await fetch(`${API_BASE}/users/${username}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error('Could not fetch repositories');
        return res.json();
    }

    function renderProfile(user) {
        document.getElementById('avatar').src = user.avatar_url;
        document.getElementById('name').textContent = user.name || user.login;
        document.getElementById('login').textContent = `@${user.login}`;
        document.getElementById('bio').textContent = user.bio || 'No bio available';
        document.getElementById('followers').textContent = formatNumber(user.followers);
        document.getElementById('following').textContent = formatNumber(user.following);
        document.getElementById('publicRepos').textContent = user.public_repos;
    }

    function renderStats(repos) {
        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);
        const totalSize = repos.reduce((sum, r) => sum + r.size, 0);
        const avgSize = repos.length > 0 ? Math.round(totalSize / repos.length) : 0;

        document.getElementById('totalStars').textContent = formatNumber(totalStars);
        document.getElementById('totalForks').textContent = formatNumber(totalForks);
        document.getElementById('avgRepoSize').textContent = formatBytes(avgSize * 1024);

        // Estimate commits (repos created + updated indicator)
        const recentRepos = repos.filter(r => {
            const updated = new Date(r.pushed_at);
            const yearAgo = new Date();
            yearAgo.setFullYear(yearAgo.getFullYear() - 1);
            return updated > yearAgo;
        });
        document.getElementById('totalCommits').textContent = `${recentRepos.length} active`;
    }

    function renderLanguages(repos) {
        const languages = {};
        repos.forEach(repo => {
            if (repo.language) {
                languages[repo.language] = (languages[repo.language] || 0) + 1;
            }
        });

        const total = Object.values(languages).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6);

        // Render bar
        const bar = document.getElementById('languageBar');
        bar.innerHTML = sorted.map(([lang, count]) => {
            const percent = (count / total * 100).toFixed(1);
            const color = languageColors[lang] || '#8b949e';
            return `<div class="lang-segment" style="width: ${percent}%; background: ${color};" title="${lang}: ${percent}%"></div>`;
        }).join('');

        // Render legend
        const legend = document.getElementById('languageLegend');
        legend.innerHTML = sorted.map(([lang, count]) => {
            const percent = (count / total * 100).toFixed(1);
            const color = languageColors[lang] || '#8b949e';
            return `
                <div class="legend-item">
                    <span class="legend-dot" style="background: ${color}"></span>
                    <span>${lang}</span>
                    <span class="legend-percent">${percent}%</span>
                </div>
            `;
        }).join('');
    }

    function renderTopRepos(repos) {
        const topRepos = [...repos]
            .filter(r => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5);

        const container = document.getElementById('reposList');
        container.innerHTML = topRepos.map(repo => `
            <a href="${repo.html_url}" target="_blank" class="repo-item">
                <div>
                    <div class="repo-name">${repo.name}</div>
                    <div class="repo-desc">${repo.description || 'No description'}</div>
                </div>
                <div class="repo-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                </div>
            </a>
        `).join('');
    }

    function renderInsights(user, repos) {
        const insights = [];
        const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const languages = [...new Set(repos.map(r => r.language).filter(Boolean))];
        const hasPopularRepo = repos.some(r => r.stargazers_count >= 10);
        const recentActivity = repos.filter(r => {
            const pushed = new Date(r.pushed_at);
            const monthAgo = new Date();
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return pushed > monthAgo;
        }).length;

        // Generate insights
        if (totalStars >= 100) {
            insights.push({ icon: '🌟', text: `Popular developer with ${totalStars} total stars!` });
        } else if (totalStars >= 10) {
            insights.push({ icon: '⭐', text: `Rising developer with ${totalStars} stars earned` });
        }

        if (languages.length >= 5) {
            insights.push({ icon: '🔧', text: `Polyglot developer using ${languages.length} different languages` });
        }

        if (hasPopularRepo) {
            const popular = repos.find(r => r.stargazers_count >= 10);
            insights.push({ icon: '🚀', text: `Has a popular repo: ${popular.name}` });
        }

        if (recentActivity >= 3) {
            insights.push({ icon: '🔥', text: `Very active! ${recentActivity} repos updated this month` });
        } else if (recentActivity > 0) {
            insights.push({ icon: '💪', text: `Active developer with ${recentActivity} recent updates` });
        }

        if (user.followers >= 100) {
            insights.push({ icon: '👥', text: `Influential with ${user.followers} followers` });
        }

        if (user.hireable) {
            insights.push({ icon: '💼', text: 'Open to job opportunities!' });
        }

        if (insights.length === 0) {
            insights.push({ icon: '🌱', text: 'Growing developer - keep building!' });
        }

        const container = document.getElementById('insights');
        container.innerHTML = insights.map(i => `
            <div class="insight-item">
                <span class="insight-icon">${i.icon}</span>
                <span class="insight-text">${i.text}</span>
            </div>
        `).join('');
    }

    function formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    }

    function formatBytes(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    function showLoading() {
        elements.dashboard.style.display = 'none';
        elements.error.style.display = 'none';
        elements.loading.style.display = 'block';
    }

    function showDashboard() {
        elements.loading.style.display = 'none';
        elements.error.style.display = 'none';
        elements.dashboard.style.display = 'grid';
    }

    function showError(message) {
        elements.loading.style.display = 'none';
        elements.dashboard.style.display = 'none';
        elements.errorMsg.textContent = message;
        elements.error.style.display = 'block';
    }

    init();
})();
