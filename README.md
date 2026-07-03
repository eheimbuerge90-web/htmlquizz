# 🐧 Linux Terminal Mastery Quiz

An interactive, comprehensive quiz application designed to master Linux terminal commands through deliberate practice and deep understanding.

## ✨ Features

### 🎯 Enhanced Learning Experience
- **Deep Explanations**: Every command includes detailed explanations of what it does and why
- **Usage Context**: Learn when and why to use each command in real-world scenarios
- **Practical Examples**: Multiple examples showing command variations and use cases
- **Progressive Difficulty**: Organized from basic navigation to advanced system administration

### 📊 Advanced Quiz Mechanics
- **Real-time Scoring**: Track your accuracy and performance metrics
- **Streak Counter**: Build momentum with consecutive correct answers 🔥
- **Wrong Answer Queue**: Review and retry missed questions
- **Progress Tracking**: Visual progress bars and completion indicators
- **Category Selection**: Focus on specific command types or take the full gauntlet

### 📚 Comprehensive Content
- **15 Categories**: From terminal fundamentals to advanced bash scripting and RHEL/Fedora
- **442 Questions**: Extensive coverage of essential Linux commands — every question audited for a single, deterministic answer
- **Alternative Answers**: Equivalent commands (`apt` vs `apt-get`, `tar xzf` vs `tar -xzf`) are accepted
- **Daily Linux Tips Section**: Real-world workflows and best practices

## 🗂️ Quiz Categories

### 🏠 BASICS (145 questions)
- **Terminal Basics** (20): command anatomy (command → options → arguments), what flags are, short vs long flags, man/--help/whatis/apropos, history & !!, Ctrl+C / Ctrl+R, aliases, $PATH
- **Navigation** (30): pwd, cd, ls, mkdir, rmdir, tree, find, file, du
- **File Operations** (35): cp, mv, rm, touch, cat, ln, rsync, shred, dd
- **Viewing Text** (30): less, head, tail, grep, wc, sort, uniq, nl, cat -A, tac, split, cut
- **Permissions** (30): chmod, chown, chgrp, umask, whoami, groups, sudo, su, setuid/setgid

### 🚀 INTERMEDIATE (117 questions)
- **Pipes & Redirect** (30): >, >>, <, |, 2>, &>, here documents, tee, &&, ||, ;, xargs
- **Processes** (30): ps, pstree, kill, bg, fg, jobs, top, pgrep, pkill, nice, tmux
- **Networking** (30): ping, ip, wget, curl, scp, ssh, ss/netstat, nslookup, dig, tcpdump
- **Packages — Debian/Ubuntu** (27): apt, apt-get, dpkg, PPAs, apt-file

### ⚡ ADVANCED (130 questions)
- **Text Processing** (30): grep, sed, awk, sort, uniq, tr, cut, paste, diff, iconv
- **System Info** (30): uname, df, free, uptime, lscpu, lspci, lsblk, journalctl, /proc
- **Bash Scripting** (30): shebang, conditionals, loops, getopts, arrays, traps, functions, flock
- **Archives & Compress** (20): tar, gzip, gunzip, xz, bzip2, zip, 7z
- **RHEL / Fedora** (20): dnf, rpm, systemctl, firewall-cmd, SELinux

### 📖 DAILY TIPS (50 questions)
- Real-world workflows: morning health checks, log watching, deploy patterns, shell productivity

## 🎨 Beautiful UI/UX

### 🖼️ Evolving Avatar
- Tux levels up with **every correct answer**: progress ring, tick dots, aura hue, and body size all change per point
- **24 named gear evolutions** unlock across each drill — from `chmod +sparkle` and `/boot Boots` to `Root Crown` and `TUX PRIME`
- Pop animation on every evolution; final form shown on the completion screen

### 🎭 Visual Design
- **Gradient Backgrounds**: Beautiful purple-to-blue gradients
- **Card-based Layout**: Clean, modern card interfaces
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Design**: Works perfectly on desktop and mobile
- **Dark Mode Ready**: Built with modern CSS variables

### 📈 Data Visualization
- **Progress Bars**: Visual completion tracking
- **Score Cards**: Color-coded performance metrics
- **Streak Indicators**: Motivational visual feedback
- **Category Grid**: Intuitive navigation with hover effects

## 📖 Daily Linux Life Guide

### 🌅 Morning Routine
- System health checks (uptime, df -h, free -h, ps aux)
- Package updates and maintenance
- Security and performance monitoring

### 💼 Workday Workflows
- File management strategies
- Development environment setup
- System monitoring and troubleshooting

### 📚 Learning Resources
- Essential command combinations
- Text processing pipelines
- System administration best practices

### 🔧 Repository Management
- Adding PPAs and custom repositories
- Package management best practices
- Backup and recovery strategies

## 🚀 Getting Started

1. **Clone and Install**:
   ```bash
   git clone <repository-url>
   cd linux-quiz
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to `http://localhost:3000`

4. **Start Learning**:
   - Choose a category or take the full gauntlet
   - Answer questions and learn from detailed explanations
   - Track your progress and build command mastery

## 🛠️ Technical Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Unicode emojis and SVG icons
- **State Management**: React hooks (useState, useEffect)
- **Data**: Static JSON configuration

## 🎯 Learning Methodology

### 🧠 Spaced Repetition
- Wrong answers are queued for review
- Encourages mastery through repetition
- Builds muscle memory for command syntax

### 📚 Contextual Learning
- Not just "what" but "why" and "when"
- Real-world usage examples
- Progressive difficulty building

### 📊 Performance Tracking
- Immediate feedback on answers
- Accuracy and streak metrics
- Visual progress indicators

## 🤝 Contributing

Contributions welcome! Areas for improvement:
- Additional question categories
- More detailed explanations
- Interactive command demonstrations
- Localization support
- Accessibility enhancements

## 📄 License

This project is open source and available under the MIT License.

---

**Master Linux terminal commands through deliberate practice. Transform from terminal novice to command-line power user! 🚀**
