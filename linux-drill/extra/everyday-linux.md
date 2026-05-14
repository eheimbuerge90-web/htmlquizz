# Everyday Linux Usage

This section covers practical, everyday tasks for Linux users, especially on Fedora. It includes system maintenance, application installation, troubleshooting, and tips for getting along with Linux.

## Table of Contents
- [System Maintenance](#system-maintenance)
- [Installing Applications](#installing-applications)
- [Troubleshooting](#troubleshooting)
- [Getting Along with Fedora](#getting-along-with-fedora)

---

## System Maintenance

- **Update your system:**
  - Command: `sudo dnf update`
  - **Explanation:**
    - `sudo`: Run as superuser (admin privileges)
    - `dnf`: Fedora's package manager
    - `update`: Refreshes all installed packages to the latest version
  - **Example Output:**
    ```
    Last metadata expiration check: 0:10:23 ago on Mon 13 May 2026 10:00:00 AM UTC.
    Dependencies resolved.
    ...
    Complete!
    ```
  - **Why:** Keeps your system secure and up-to-date.

- **Clean up unused packages:**
  - Command: `sudo dnf autoremove`
  - **Explanation:** Removes packages installed as dependencies that are no longer needed.
  - **Why:** Frees up disk space and keeps your system tidy.

## Installing Applications

- **Search for a package:**
  - Command: `dnf search <package>`
  - **Example:** `dnf search firefox`
  - **Why:** Find the exact name of the package you want to install.

- **Install a package:**
  - Command: `sudo dnf install <package>`
  - **Example:** `sudo dnf install vim`
  - **Why:** Installs new software from Fedora repositories.

## Troubleshooting

- **Check system logs:**
  - Command: `journalctl -xe`
  - **Explanation:**
    - `journalctl`: Query and display messages from the systemd journal
    - `-x`: Show explanations for log messages
    - `-e`: Jump to the end of the log
  - **Why:** Useful for diagnosing system problems.

- **Check disk usage:**
  - Command: `df -h`
  - **Explanation:**
    - `df`: Disk filesystem usage
    - `-h`: Human-readable sizes
  - **Why:** See if you are running out of space.

## Getting Along with Fedora

- **Get help:**
  - Command: `man <command>`
  - **Example:** `man dnf`
  - **Why:** Shows the manual page for any command.

- **Find files:**
  - Command: `find /path -name <filename>`
  - **Example:** `find ~/Documents -name "report.txt"`
  - **Why:** Locate files anywhere on your system.

- **Get system info:**
  - Command: `uname -a`
  - **Why:** Shows kernel and system information.

---

For more, see Fedora's official documentation: https://docs.fedoraproject.org/