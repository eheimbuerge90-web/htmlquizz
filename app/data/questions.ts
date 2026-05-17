export interface Question {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  usage: string;
  examples: string[];
  memoryTip: string;
  outputExample: string;
  category: string;
}

export const questions: Question[] = [
  // NAVIGATION
  {
    id: "nav1",
    question: "Use the `cd` command with no arguments to jump back to your home directory",
    answer: "cd",
    explanation: "`cd` ('change directory') is the command for moving around the filesystem. Your 'home directory' is the personal folder where your settings and files live — typically `/home/yourname` on Linux. With no arguments at all, `cd` is a shortcut to that home directory; it reads the `$HOME` environment variable to figure out where to go. The shell often shows your home as `~` (tilde) in the prompt to save space. After running `cd`, use `pwd` ('print working directory') to confirm where you ended up. This is one of the very first commands every Linux user learns — you'll use it dozens of times a day.",
    usage: "Run it whenever you're lost deep in some subdirectory and want to start fresh from home. Also handy at the top of a script when you want a known starting point.",
    examples: [
      "cd  # the bare command — fastest way home",
      "cd ~  # the tilde is shorthand for your home directory",
      "cd $HOME  # uses the environment variable; useful in scripts",
      "cd ~alice  # go to user 'alice's home directory (if you have access)",
      "cd && ls  # chain commands: go home then list contents"
    ],
    memoryTip: "`cd` = 'change directory'. With nothing after it, think of it as 'come down' to home base. Tilde `~` always means 'my home' — like `~/Documents` is `/home/me/Documents`.",
    outputExample: "$ pwd\n/var/log/nginx\n$ cd\n$ pwd\n/home/alice",
    category: "NAVIGATION"
  },
  {
    id: "nav2",
    question: "Use `cd ..` to move one level up to the parent directory",
    answer: "cd ..",
    explanation: "In every directory on Linux, two special names always exist: `.` (a single dot) means 'this directory I'm in right now', and `..` (two dots) means 'the directory one level up' — the parent. So `cd ..` literally means 'change directory to the parent of where I am'. You can stack these to climb multiple levels at once: `cd ../..` goes up two levels, `cd ../../..` goes up three. You can also mix them with normal paths: `cd ../sibling` means 'go up one, then into a folder called sibling'. This is how relative paths (paths that don't start with `/`) work — they're always interpreted relative to your current directory.",
    usage: "Use it constantly while navigating: you `cd` into a project folder, dig into `src/components/`, and then want to back out. Way faster than typing the full path back.",
    examples: [
      "cd ..  # go up one level — the basic move",
      "cd ../..  # go up two levels in one step",
      "cd ../sibling-folder  # up one, then into a folder next to where you were",
      "ls ..  # peek at the parent directory without leaving the current one",
      "cp file.txt ..  # copy file.txt into the parent directory"
    ],
    memoryTip: "One dot `.` = here. Two dots `..` = up one. Think of `..` as a tiny staircase — two steps means 'one floor up'. This is universal: every Linux path supports it.",
    outputExample: "$ pwd\n/home/alice/projects/myapp\n$ cd ..\n$ pwd\n/home/alice/projects\n$ cd ../..\n$ pwd\n/home",
    category: "NAVIGATION"
  },
  {
    id: "nav3",
    question: "Use the `ls` command (no arguments) to list the names of files and folders in the current directory",
    answer: "ls",
    explanation: "`ls` ('list') shows what's in a directory. With no arguments, it lists the CURRENT directory (the one `pwd` would print). Output is sorted alphabetically (case-sensitively: `A`-`Z` before `a`-`z` in the default `C` locale) and printed in columns that fit your terminal width. `ls` HIDES anything whose name starts with `.` by default — those 'dotfiles' are convention-only hidden, not protected; add `-a` to see them. The terminal output is colored, but piping `ls` into another command strips the color codes (handled by `--color=auto`). Useful one-letter siblings: `-l` long format, `-a` all files, `-h` human sizes, `-S` size sort, `-t` time sort, `-r` reverse.",
    usage: "Checking what's in a folder after `cd`-ing into it. Confirming a file was created. Browsing an unfamiliar directory.",
    examples: [
      "ls  # default: names only, alphabetical, columns",
      "ls /etc  # list a SPECIFIC directory without cd-ing there",
      "ls -l  # long format: permissions, owner, size, date",
      "ls -la  # long format INCLUDING dotfiles",
      "ls *.txt  # only files matching a glob",
      "ls -lh --color=auto  # the everyday combo most people alias as `ll`"
    ],
    memoryTip: "`ls` = LiSt. You'll type it more than any other command. Most distros pre-define `ll` as an alias for `ls -l` — try it in your shell.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Music  Pictures  Videos  notes.txt  todo.md\n$ ls /etc | head -3\nadduser.conf\nalternatives\napt",
    category: "NAVIGATION"
  },
  {
    id: "nav4",
    question: "Use `ls -l` (long format) to show files with their permissions, owner, size, and modification date",
    answer: "ls -l",
    explanation: "`-l` switches `ls` into 'long' format: one file per line with seven columns — permission string, link count, owner, group, size (in bytes), modification time, and name. The permission string looks like `-rwxr-xr-x`; the first character is the file type (`-` regular, `d` directory, `l` symlink, `c` character device, `b` block device), followed by three triplets of read/write/execute for owner, group, and others. Size is in raw bytes by default — add `-h` for human-readable (`1.2K`, `800M`). The 'modification time' is the file's mtime — when its CONTENTS last changed (not access time). Files older than ~6 months show year instead of `HH:MM`. Combine with `-a` (`ls -la`) to include dotfiles, the everyday combo.",
    usage: "Inspecting permissions before chmod-ing. Finding out who owns a file. Checking file sizes. Spotting symlinks (they show `l` and `-> target`).",
    examples: [
      "ls -l  # the basic long format",
      "ls -lh  # human-readable sizes — almost always what you want",
      "ls -la  # include dotfiles",
      "ls -lt  # newest files first (by mtime)",
      "ls -lS  # biggest files first",
      "ls -l --time-style=long-iso  # ISO 8601 timestamps, great for scripts"
    ],
    memoryTip: "`-l` = Long. Pair it with `-h` for human sizes and `-a` for hidden files: `ls -lah` is the everyday Swiss-army combo. Memorize the seven columns: perms, links, owner, group, size, date, name.",
    outputExample: "$ ls -l\ntotal 24\n-rw-r--r-- 1 alice alice 4096 May 17 09:12 README.md\ndrwxr-xr-x 2 alice alice 4096 May 16 18:30 docs\n-rwxr-xr-x 1 alice alice 1240 May 15 10:02 deploy.sh\nlrwxrwxrwx 1 alice alice    9 May 14 11:00 current -> v2.0.1",
    category: "NAVIGATION"
  },
  {
    id: "nav5",
    question: "Use the `pwd` command to print the full path of the directory you're currently in",
    answer: "pwd",
    explanation: "`pwd` ('print working directory') outputs the absolute path of your shell's current location — always starting with `/`. It's the answer to 'where am I?' when your prompt is short or customized to hide the full path. By default `pwd` is a shell BUILT-IN that uses the `$PWD` environment variable; this can disagree with reality if you reached the current directory through a symlink. To resolve through symlinks and show the REAL underlying path, use `pwd -P` ('physical'). The opposite, `pwd -L` ('logical'), is the default. In scripts you'll often see `$(pwd)` or just `$PWD` used to capture the current directory before doing something destructive.",
    usage: "Confirming where you ended up after a chain of `cd`s. Recording the working directory in a script for later reference. Sanity-checking before running `rm -rf .`.",
    examples: [
      "pwd  # the default — logical path",
      "pwd -P  # physical path (follows symlinks to real location)",
      "echo $PWD  # the shell variable holding the same value",
      "echo \"Working in: $(pwd)\"  # capture in a script",
      "cd /var/log && pwd  # confirm cd worked"
    ],
    memoryTip: "`pwd` = Print Working Directory. Three letters, one job. Pair it with `cd` in your mind: `cd` SETS the working directory, `pwd` SHOWS it.",
    outputExample: "$ pwd\n/home/alice/projects/myapp\n$ cd /var/log && pwd\n/var/log",
    category: "NAVIGATION"
  },
  {
    id: "nav6",
    question: "Use `cd /path/to/directory` to change into a specific folder by absolute or relative path",
    answer: "cd /path/to/directory",
    explanation: "`cd` followed by a path moves you there. Two kinds of paths: ABSOLUTE (starts with `/`, e.g. `/var/log`) is interpreted from the filesystem root and works from anywhere; RELATIVE (everything else, e.g. `Documents` or `../sibling`) is interpreted from your current directory. The shell also expands a few shortcuts: `~` becomes your home, `~user` becomes that user's home, `-` is the previous directory, `..` is the parent. If the destination doesn't exist or isn't a directory, `cd` prints an error and leaves you where you are. Many shells (Bash, Zsh) have an `autocd` option that lets you skip typing `cd` entirely — just type the directory name. Tab completion (press Tab after typing a few letters) auto-completes paths and saves enormous time.",
    usage: "Jumping to a project folder. Diving into `/etc` to read configs. Navigating into a subdirectory you just listed with `ls`.",
    examples: [
      "cd /var/log  # absolute path",
      "cd Documents  # relative — must be in current dir",
      "cd ../other-project  # relative, going up first",
      "cd ~/code/myapp  # tilde expands to home",
      "cd \"my folder\"  # quote paths with spaces",
      "cd /etc/ss<TAB>  # tab-complete to /etc/ssh/"
    ],
    memoryTip: "`cd` = Change Directory. Slash-leading = absolute (whole address), no slash = relative (from where you are). Use Tab compulsively — Linux folks rarely type a full path by hand.",
    outputExample: "$ pwd\n/home/alice\n$ cd projects/myapp\n$ pwd\n/home/alice/projects/myapp\n$ cd /etc/ssh\n$ pwd\n/etc/ssh",
    category: "NAVIGATION"
  },
  {
    id: "nav7",
    question: "Use `cd -` (cd dash) to jump back to the PREVIOUS directory you were in",
    answer: "cd -",
    explanation: "The shell stores your previous working directory in the variable `$OLDPWD`. `cd -` is shorthand for `cd $OLDPWD` — it swaps the current and previous directories. Run it twice and you toggle between two places: very useful when you're bouncing between, say, `/etc/nginx` and `/var/log/nginx` while debugging. As a side effect, `cd -` PRINTS the directory it switched to (the new current), unlike a regular `cd` which prints nothing. Don't confuse `cd -` (previous dir) with `cd --` (treats everything after as a path — useful only when a directory's name starts with `-`). For deeper history (more than one previous dir), see `pushd`/`popd`/`dirs`.",
    usage: "Toggling between two related directories. Going back after a quick detour without retyping the path. Sanity-checking which one you were in.",
    examples: [
      "cd -  # back to previous dir; prints the new path",
      "cd /tmp; cd -  # bounce out and back",
      "echo $OLDPWD  # see what `cd -` would jump to",
      "cd /etc/nginx; cd /var/log/nginx; cd -  # toggle between two debug spots",
      "cd -- -weirddir  # use -- to cd into a directory whose name starts with -"
    ],
    memoryTip: "`cd -` = back button. Mental model: dash means 'last one'. For a STACK of previous dirs (more than one), graduate to `pushd`/`popd`.",
    outputExample: "$ pwd\n/home/alice\n$ cd /var/log\n$ pwd\n/var/log\n$ cd -\n/home/alice\n$ cd -\n/var/log",
    category: "NAVIGATION"
  },
  {
    id: "nav8",
    question: "Use `ls -a` to list ALL files including the hidden (dot-prefixed) ones",
    answer: "ls -a",
    explanation: "On Linux, any file whose name starts with `.` is HIDDEN by convention — `ls` skips it. This is not security; the bit is in the NAME, not metadata. Configuration files (`.bashrc`, `.gitconfig`, `.ssh/`) live in your home as dotfiles to keep the listing clean. `-a` (`all`) shows everything INCLUDING the two special entries `.` (current dir) and `..` (parent). The slightly different `-A` ('almost all') shows hidden files but OMITS `.` and `..` — usually the friendlier flag. The most common combo is `ls -la` (long format + all) to inspect dotfile permissions; aliases like `la` or `ll` often expand to this. Hidden files take up space and count for disk usage like any other file.",
    usage: "Inspecting dotfiles in your home directory. Checking for `.git`, `.env`, or `.DS_Store` in a project. Auditing what config files an application leaves behind.",
    examples: [
      "ls -a  # everything including . and ..",
      "ls -A  # hidden files but skip . and ..",
      "ls -la ~  # long format of all home dotfiles",
      "ls -a | grep '^\\.'  # only the hidden ones",
      "ls -ad .*  # list only dotfiles (and . / ..)",
      "ls -la /etc/skel  # peek at the default new-user dotfiles"
    ],
    memoryTip: "Lowercase `-a` = ALL, including `.` and `..`. Capital `-A` = Almost all (no `.` / `..`). For everyday browsing, `-A` is cleaner; for forensic 'what's REALLY here?', use `-a`.",
    outputExample: "$ ls -a\n.   .bashrc   .config  .git      .profile  Documents  notes.txt\n..  .cache    .gitconfig  .ssh    Desktop   Downloads",
    category: "NAVIGATION"
  },
  {
    id: "nav9",
    question: "Use `ls -lh` to list files in long format with HUMAN-READABLE sizes (K, M, G suffixes)",
    answer: "ls -lh",
    explanation: "`-l` alone gives you the long format, but the size column is in raw BYTES — `1572864` is hard to parse. `-h` ('human') converts to suffixed values: `1.5M`, `800K`, `1.2G`. It uses powers of 1024 by default (so `1K` = 1024 bytes); use `--si` if you want decimal powers of 1000 (rare). Note the size column only makes sense for regular files — for directories it shows the size of the directory ENTRY itself (typically 4K, the inode block), NOT the size of the contents. To get total contents size, use `du -sh dirname`. `-h` ignores rounding for very small files; sizes under 1024 show as raw bytes. The everyday combo `ls -lah` adds dotfiles.",
    usage: "Spotting large files at a glance. Everyday directory inspection. Replacement for plain `ls -l` once you've used it once.",
    examples: [
      "ls -lh  # the everyday long format",
      "ls -lah  # +hidden files",
      "ls -lhS  # +sorted by size (biggest first)",
      "ls -lhSr  # +reverse: smallest first",
      "ls -lh --si  # use decimal (1K = 1000), not binary",
      "ls -lh /var/log  # see which log file is fat"
    ],
    memoryTip: "`-lh` = Long + Human. Memorize `ls -lah` (Long, All, Human) — covers 95% of daily `ls` use. For 'biggest first' add `S`: `ls -lahS`.",
    outputExample: "$ ls -lh\ntotal 1.3M\n-rw-r--r-- 1 alice alice 1.2M May 17 09:55 screenshot.png\n-rw-r--r-- 1 alice alice  82K May 16 18:30 report.pdf\n-rw-r--r-- 1 alice alice 4.0K May 15 10:02 notes.txt\ndrwxr-xr-x 2 alice alice 4.0K May 14 11:00 docs",
    category: "NAVIGATION"
  },
  {
    id: "nav10",
    question: "Create a new (empty) directory called `directory_name` with the `mkdir` command",
    answer: "mkdir directory_name",
    explanation: "`mkdir` ('make directory') creates a single empty folder with the name you give it. By default it FAILS if any parent in the path doesn't exist — e.g. `mkdir a/b/c` errors out if `a` or `b` don't exist yet. Add `-p` ('parents') to create the whole chain in one shot, and `-p` also makes the command silent if the target already exists (handy in scripts). You can create multiple directories in one call by listing them: `mkdir docs src tests`. Permissions on the new directory follow your `umask`; override with `-m`, e.g. `mkdir -m 700 secret` to make it owner-only.",
    usage: "Organizing a new project, creating output folders before a script writes into them, or preparing a nested layout like `~/code/2026/projectA/src`.",
    examples: [
      "mkdir reports  # one folder in the current directory",
      "mkdir -p code/2026/projectA/src  # create the whole chain, no error if some parts already exist",
      "mkdir docs src tests  # three folders at once",
      "mkdir -m 700 secret  # create with rwx for owner only",
      "mkdir -pv backups/{daily,weekly,monthly}  # brace expansion + verbose (prints each created)"
    ],
    memoryTip: "'mkdir' = 'make directory'. Like building a new room in your house.",
    outputExample: "$ mkdir myproject\n$ ls -d */\nDesktop/  Documents/  Downloads/  myproject/  Music/  Pictures/",
    category: "NAVIGATION"
  },
  {
    id: "nav11",
    question: "Use `rmdir directory_name` to remove an EMPTY directory (it refuses to touch non-empty ones)",
    answer: "rmdir directory_name",
    explanation: "`rmdir` ('remove directory') is the SAFE way to delete a folder — it deletes only if the folder is completely empty (not even hidden dotfiles inside). If anything's inside, it errors out with `Directory not empty`. Use `-p` to remove a chain of empty parents in one go: `rmdir -p a/b/c` deletes `c`, then `b`, then `a` if each becomes empty. For folders with contents, you'd reach for `rm -r` (recursive, dangerous) or, safer, `find dir -type f -delete && rmdir dir`. `rmdir` ignores `.` and `..` when checking emptiness, but a `.DS_Store` or `.gitkeep` will block it — common foot-gun on macOS-touched directories. To peek at what's blocking: `ls -A dir`.",
    usage: "Cleaning up scratch folders. Removing skeleton directories that turned out to be unused. Scripts that want to fail safely if a folder has contents.",
    examples: [
      "rmdir empty_dir  # the basic case",
      "rmdir a b c  # remove three empty folders at once",
      "rmdir -p tmp/build/cache  # remove cache, then build, then tmp if all empty",
      "rmdir --ignore-fail-on-non-empty dir  # don't error if it's not empty",
      "ls -A dir  # check what's blocking rmdir (any output = blockers)"
    ],
    memoryTip: "`rmdir` = Remove Directory, but only EMPTY ones. Think of it as the safe sibling of `rm -r`. If `rmdir` refuses, that's a feature, not a bug.",
    outputExample: "$ mkdir empty_one\n$ rmdir empty_one\n$ rmdir Documents\nrmdir: failed to remove 'Documents': Directory not empty\n$ ls -A Documents\nnotes.txt  .draft",
    category: "NAVIGATION"
  },
  {
    id: "nav12",
    question: "Print a visual tree of the current directory's structure with the `tree` command",
    answer: "tree",
    explanation: "`tree` walks a directory recursively and prints a tree-shaped picture using `├──`, `└──`, and `│` characters — way easier to read than recursive `ls`. NOT pre-installed on most distros: install with `sudo apt install tree` or `sudo dnf install tree`. Useful flags: `-L N` limits depth to N levels (great for huge trees), `-d` shows only directories, `-a` includes hidden dotfiles, `-I PATTERN` excludes (e.g. `-I 'node_modules|.git'`), `-h` adds human-readable file sizes, `--gitignore` respects `.gitignore` files. Output ends with a summary line: `N directories, M files`. For a no-install alternative: `find . | sort` or `ls -R`.",
    usage: "Showing your project layout in a README or screenshot. Getting an overview of an unfamiliar repo. Confirming a backup contains the expected structure.",
    examples: [
      "tree  # full tree of current dir",
      "tree -L 2  # only 2 levels deep — great for huge projects",
      "tree -d  # just folders, ignore files",
      "tree -I 'node_modules|.git|dist'  # exclude common noise",
      "tree -h --du  # human sizes + directory totals"
    ],
    memoryTip: "`tree` literally draws a tree. Most-used combo: `tree -L 2 -I 'node_modules|.git'` for a clean project overview. Not on the system? `sudo apt install tree` / `sudo dnf install tree`. Alternative: `find . -maxdepth 2`.",
    outputExample: "$ tree -L 2\n.\n├── README.md\n├── package.json\n├── src\n│   ├── index.ts\n│   └── utils.ts\n└── tests\n    └── index.test.ts\n\n2 directories, 5 files",
    category: "NAVIGATION"
  },
  {
    id: "nav13",
    question: "Use `find . -name 'pattern'` to search the current directory (recursively) for files matching a name",
    answer: "find . -name filename",
    explanation: "`find` walks a directory tree recursively and tests every entry against criteria. The first argument is the starting directory (`.` = current); `-name PATTERN` filters by filename, supporting shell-style globs `*` (any chars), `?` (one char), `[abc]` (one of). QUOTE THE PATTERN — `find . -name *.txt` lets the shell expand `*.txt` BEFORE `find` runs, leading to weird errors. `-name` is case-SENSITIVE; use `-iname` for case-insensitive. `-name` matches only the basename (last component); to match against the full path use `-path`. Add `-type f` (regular files only) or `-type d` (directories only). `find` is one of the most powerful Linux tools and also has actions like `-delete`, `-exec CMD {} \\;`, and time-based filters like `-mtime -7` (modified in last 7 days).",
    usage: "Locating a file when you don't remember where you put it. Finding all `*.log` files under `/var`. Cleaning up by combining `-name` with `-delete`.",
    examples: [
      "find . -name '*.txt'  # all .txt files under current dir",
      "find /home -name 'config'  # exact name 'config' under /home",
      "find . -iname '*.JPG'  # case-insensitive: .jpg, .JPG, .Jpg",
      "find . -name '*.tmp' -delete  # find + remove in one step",
      "find /var/log -name '*.log' -mtime -1  # logs modified in last day",
      "find . -type d -name 'node_modules'  # directories only"
    ],
    memoryTip: "ALWAYS quote the pattern (`'*.txt'`) so the shell doesn't expand it. Order is `find WHERE TESTS ACTIONS`. The friendlier modern alternative is `fd` (`sudo apt install fd-find`) — same job, simpler syntax: `fd '\\.txt$'`.",
    outputExample: "$ find . -name '*.txt'\n./notes.txt\n./drafts/old.txt\n./drafts/archive/letter.txt\n$ find /etc -name 'sshd_config'\n/etc/ssh/sshd_config",
    category: "NAVIGATION"
  },
  {
    id: "nav14",
    question: "Use the `file` command to identify what kind of data a file actually contains (regardless of its extension)",
    answer: "file filename",
    explanation: "`file` examines the file's first few bytes ('magic numbers') and contents to classify it: ASCII text, UTF-8, JPEG, ELF binary, shell script, gzip archive, etc. It IGNORES the extension — that's the whole point. A file named `photo.jpg` that's actually a PDF will show up as PDF here. Useful flags: `-i` (or `--mime`) prints the MIME type instead of a sentence (`text/plain; charset=utf-8`); `-b` ('brief') hides the filename column when you just want the type; `-z` peeks INSIDE compressed files. `file` reads the central database `/usr/share/misc/magic` for its rules. Pair with `find` to identify lots of files at once: `find . -type f -exec file {} +`.",
    usage: "Figuring out what a downloaded file really is. Checking whether `script.sh` is `bash` or `sh`. Distinguishing real images from disguised payloads.",
    examples: [
      "file script.sh  # shell script? Python? Perl?",
      "file image.jpg  # JPEG, PNG, or actually something else?",
      "file *  # type-classify everything in the current dir",
      "file -i report.pdf  # MIME type: application/pdf",
      "file -b /usr/bin/ls  # brief mode: just the type, no filename",
      "find . -type f -exec file -b {} +  # classify recursively"
    ],
    memoryTip: "`file` answers 'what AM I?' regardless of name. Magic numbers are tiny byte signatures at the start of files — e.g. `89 50 4E 47` = PNG, `25 50 44 46` = PDF. For deeper inspection, `xxd FILE | head` shows them in hex.",
    outputExample: "$ file *\nbackup.tar.gz:    gzip compressed data, from Unix, original size 102400\ndeploy.sh:        Bourne-Again shell script, ASCII text executable\nlogo.png:         PNG image data, 800 x 600, 8-bit/color RGBA, non-interlaced\nmystery_file:     ELF 64-bit LSB executable, ARM aarch64, dynamically linked\nnotes.txt:        UTF-8 Unicode text",
    category: "NAVIGATION"
  },
  {
    id: "nav15",
    question: "Use `cd /` to jump to the ROOT of the filesystem (the single top-level directory `/`)",
    answer: "cd /",
    explanation: "Linux has ONE filesystem tree rooted at `/` — there are no drive letters like `C:\\`. Everything (hard disks, USB sticks, network shares) is grafted onto this single tree at mount points. `cd /` takes you to the top. From there, `ls` reveals the standard top-level directories defined by the FHS (Filesystem Hierarchy Standard): `/bin` and `/usr/bin` (programs), `/etc` (system config), `/var` (variable data like logs), `/home` (user homes), `/tmp` (scratch space), `/mnt` and `/media` (mount points), `/dev` (devices), `/proc` and `/sys` (kernel virtual filesystems), `/root` (root user's home — NOT to be confused with `/`). Don't confuse `/` (filesystem root) with `~` (your home directory) or `/root` (root user's home). All three are different places.",
    usage: "Exploring system structure. Starting a `find /` from the absolute top. Quick orientation when you're lost in a deeply nested path.",
    examples: [
      "cd /  # the filesystem root",
      "cd / && ls  # see what's at the top",
      "cd /etc  # straight to system config",
      "cd /var/log  # straight to logs",
      "cd /root  # root user's home (needs sudo to enter)",
      "df -h /  # show free space on the root filesystem"
    ],
    memoryTip: "ONE slash `/` = the filesystem root. `~` = your home. `/root` = root user's home (very different). Quick check: `pwd` after `cd /` always prints a single character: `/`.",
    outputExample: "$ cd /\n$ pwd\n/\n$ ls\nbin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var",
    category: "NAVIGATION"
  },
  {
    id: "nav16",
    question: "List the current directory's files sorted by file size with the `ls -S` flag (largest first)",
    answer: "ls -S",
    explanation: "By default `ls` sorts alphabetically. The capital-`S` flag tells it to sort by SIZE in bytes, biggest first. Pair it with `-l` to actually SEE the size column (`-S` alone changes order but the basic listing hides numbers), and `-h` to print sizes as `1.2G` / `800M` / `4.0K` instead of raw bytes. To reverse the order (smallest first) add `-r`. Sort is per-directory: it only sorts the files you're listing, not the whole disk. For finding big files anywhere on disk use `du -sh * | sort -h` or `find / -size +100M` — `ls -S` is just for the current folder.",
    usage: "When your disk is filling up and you want to see at a glance which file in this folder is the fat one. Also useful in Downloads or /var/log to find what to delete.",
    examples: [
      "ls -lSh  # most useful combo: long format + size column + human sizes",
      "ls -S  # just changes order; size isn't visible without -l",
      "ls -lShr  # reverse: smallest first",
      "ls -lSh | head  # top 10 biggest in this folder",
      "ls -lSh /var/log  # find the fattest log file"
    ],
    memoryTip: "Capital-`S` = Size. Lowercase `-s` (different!) prints allocated blocks per file. Memorize: `-lSh` = 'long, by Size, human' — the everyday combo.",
    outputExample: "$ ls -lSh\ntotal 1.2G\n-rw-r--r-- 1 alice alice 800M May 15 10:30 bigmovie.mp4\n-rw-r--r-- 1 alice alice 256M May 14 18:01 backup.zip\n-rw-r--r-- 1 alice alice 1.2M May 15 09:55 screenshot.png\ndrwxr-xr-x 2 alice alice 4.0K May 12 11:20 Documents\n-rw-r--r-- 1 alice alice  142 May 15 10:30 notes.txt",
    category: "NAVIGATION"
  },
  {
    id: "nav17",
    question: "Use `ls -lt | head` to show the most RECENTLY modified files in this directory (newest first)",
    answer: "ls -lt | head",
    explanation: "`-t` sorts `ls` output by MODIFICATION TIME (mtime), newest first. `-l` gives the long format so you can SEE the timestamps. Piping into `head` takes only the first 10 lines — the 10 newest entries. There are three timestamps Linux tracks for each file: `mtime` (content modified, the default for `-t`), `atime` (last read; use `-u`), and `ctime` (metadata changed, e.g. permissions; use `-c`). Add `-r` to reverse (oldest first). `head -N` lets you pick a different count: `ls -lt | head -5`. To find recent files ANYWHERE in a tree (not just this folder) use `find . -type f -mtime -1` (modified in last 24h). Note: `ls -lt` doesn't recurse — it only shows the current directory.",
    usage: "Finding what you were just working on. Spotting which log file was last touched after a service restart. Sorting Downloads by recency.",
    examples: [
      "ls -lt | head  # 10 newest entries here",
      "ls -lt | head -5  # just the 5 newest",
      "ls -lt *.log | head  # newest log files",
      "ls -ltr  # OLDEST first (chronological)",
      "ls -lu | head  # sort by ATIME (last accessed) instead",
      "find . -type f -mtime -1  # files modified in last 24h, recursively"
    ],
    memoryTip: "`-lt` = Long + Time-sorted. Pipe to `head` for top-N. Pair-think: `-t` = newest first, `-tr` = oldest first. To go RECURSIVE switch to `find -mtime`.",
    outputExample: "$ ls -lt | head -4\ntotal 24\n-rw-r--r-- 1 alice alice 1234 May 17 14:30 latest.md\n-rw-r--r-- 1 alice alice  567 May 17 14:25 newer.txt\ndrwxr-xr-x 2 alice alice 4096 May 17 12:00 drafts",
    category: "NAVIGATION"
  },
  {
    id: "nav18",
    question: "Press the `Tab` key after typing the first few letters of a path to AUTO-COMPLETE the rest",
    answer: "cd Doc<TAB>",
    explanation: "Tab completion is a shell feature (in Bash, Zsh, Fish, etc.) that fills in the rest of a filename, directory, command, or argument when you press the Tab key. Type enough letters to make the match unambiguous, then Tab — the shell completes it. If there are MULTIPLE possible completions, the first Tab does nothing (or beeps); a SECOND Tab prints the list. Tab works on commands too (`gre<TAB>` → `grep`), on environment variables (`$HO<TAB>` → `$HOME`), and on flags in newer shells. It saves typing AND prevents typos — you literally cannot mistype a path Tab gave you. Programmable completion (`bash-completion`, `zsh-completions`) extends Tab to complete subcommands and flags for `git`, `apt`, `systemctl`, `docker`, and many more. If Tab seems broken, your shell may not have bash-completion installed (`sudo apt install bash-completion`).",
    usage: "Every single command you type — Tab obsessively. Especially long paths like `/etc/ssh/sshd_config`, where typing it out is slow and error-prone.",
    examples: [
      "cd Doc<TAB>  # completes to Documents/",
      "ls /et<TAB>  # completes to /etc/",
      "cat /etc/pas<TAB>  # completes to /etc/passwd",
      "git che<TAB>  # completes to 'git checkout' (with bash-completion)",
      "cd /usr/lo<TAB><TAB>  # double-Tab: shows both 'local/' and 'lost+found/'",
      "echo $HO<TAB>  # completes the variable name to $HOME"
    ],
    memoryTip: "Tab once = complete; Tab twice = list possibilities. Linux users press Tab more than any other key — train your fingers: type 2-3 letters then Tab, ALWAYS. If nothing happens, hit Tab a second time to see why.",
    outputExample: "$ cd /usr/lo<TAB><TAB>\nlocal/      lost+found/\n$ cd /usr/loc<TAB>\n$ cd /usr/local/",
    category: "NAVIGATION"
  },
  {
    id: "nav19",
    question: "Use `du -sh directory` to show ONE total disk-usage number for a directory in human-readable form",
    answer: "du -sh directory",
    explanation: "`du` ('disk usage') walks a directory recursively, but plain `du` prints a line for every subdirectory inside — overwhelming output. `-s` ('summary') collapses that into a SINGLE number per argument: the total size of the entire tree. `-h` ('human') converts bytes into `1.5G`, `12M`, `800K`. Without `-s`, you get hundreds of lines; with it, one. The size is DISK SPACE used (includes filesystem overhead like inode blocks) — not the same as 'sum of file sizes'. For apparent file size use `--apparent-size`. `du -sh *` is the workhorse pattern: one summary per top-level item in the current directory. Note `du` is SLOW on huge trees because it stats every file — for interactive disk hunting install `ncdu` (`sudo apt install ncdu`).",
    usage: "Finding out how big a project folder is. Comparing two directories' sizes. Hunting the space hog in `/var` or `~/`.",
    examples: [
      "du -sh Documents/  # one number: total size of Documents",
      "du -sh *  # one number per item in the current directory",
      "du -sh .  # total size of current directory",
      "du -sh ~/.cache  # how big is your cache?",
      "du -sh * | sort -h  # sorted smallest to largest",
      "du -sh * | sort -h | tail  # top 10 biggest"
    ],
    memoryTip: "`-sh` = Summary + Human. Pair-think: `du` per folder, `df` per mountpoint (free space). The 'find the disk hog' incantation: `du -sh * | sort -h | tail`.",
    outputExample: "$ du -sh Documents/\n2.3G\tDocuments/\n$ du -sh *\n12M\tCode\n4.5G\tDownloads\n128K\tMusic\n2.1G\tPictures",
    category: "NAVIGATION"
  },
  {
    id: "nav20",
    question: "Use `ls -R` to list files RECURSIVELY — every file in every subdirectory of the current directory",
    answer: "ls -R",
    explanation: "Capital `-R` ('recursive') makes `ls` descend into subdirectories and list their contents too. Output is grouped by directory: each section starts with the directory's path (`./subdir:`) followed by its entries, then a blank line, then the next directory. Be careful — on a large tree (`/`, `~`, `node_modules`) the output can be ENORMOUS and slow. For big trees, `find` is usually better: `find . -type f` lists every file as a single path per line (much easier to pipe). `tree` (if installed) draws a prettier hierarchical view. Combine `-R` with `-l` for long format (`ls -lR`), `-a` for hidden files (`ls -laR`), or pipe to `less` for paged output. NOTE: lowercase `-r` is REVERSE sort, not recursive — easy to mix up.",
    usage: "Quick overview of an unfamiliar directory tree. Generating a flat list of all files for an inventory. Spot-checking that a backup contains the expected files.",
    examples: [
      "ls -R  # recurse from here",
      "ls -lR  # recursive + long format",
      "ls -R | less  # paged (huge trees)",
      "find . -type f  # alternative: one file per line (better for scripts)",
      "ls -R ~/Documents  # recurse from a specific path",
      "tree  # prettier visualization (needs install)"
    ],
    memoryTip: "Capital `-R` = Recursive. Lowercase `-r` = Reverse (different!). For huge trees, switch to `find` or `tree` — `ls -R` was designed for small directories.",
    outputExample: "$ ls -R\n.:\nDocuments  Pictures  projects\n\n./Documents:\nnotes.txt  resume.pdf\n\n./Pictures:\nvacation.jpg\n\n./projects:\nmyapp\n\n./projects/myapp:\nREADME.md  src",
    category: "NAVIGATION"
  },

  // FILE OPS
  {
    id: "file1",
    question: "Use `cp source destination` to copy a file (the original stays, you get a duplicate at the destination)",
    answer: "cp source destination",
    explanation: "`cp` ('copy') reads the bytes of SOURCE and writes them to DESTINATION, leaving the original untouched. Argument ORDER is source-first, destination-second (same as `mv`, opposite of some Windows tools). If DESTINATION is a directory (or ends with `/`), `cp` copies the file INTO it keeping the same filename; if DESTINATION is a regular path, `cp` creates that filename. WARNING: plain `cp` silently OVERWRITES an existing destination — add `-i` to be prompted, or `-n` to never overwrite. By default `cp` does not preserve all metadata (atime, owner) — add `-p` to preserve permissions/timestamps, or `-a` ('archive') to preserve everything plus copy symlinks as symlinks. For directories you MUST add `-r` (recursive) or it errors out. Sparse files, ACLs, and hardlinks each have their own flags — see `man cp`.",
    usage: "Backing up a config before editing. Duplicating a file to experiment on. Copying files between folders.",
    examples: [
      "cp file.txt backup.txt  # rename-style: new file in same dir",
      "cp file.txt /tmp/  # copy file INTO /tmp/ (trailing slash matters)",
      "cp -r dir1 dir2  # recursive: needed for directories",
      "cp file1 file2 file3 dest/  # multiple sources into one dir",
      "cp -i src.txt dst.txt  # interactive: prompt before overwrite",
      "cp -a /etc/nginx /etc/nginx.bak  # archive: preserves perms/timestamps"
    ],
    memoryTip: "`cp` = CoPy. Source first, destination second (same order as `mv`). For directories you NEED `-r`. To avoid blindly overwriting, alias `cp` to `cp -i` in your `.bashrc`.",
    outputExample: "$ cp notes.txt notes-backup.txt\n$ ls\nnotes-backup.txt  notes.txt\n$ cp notes.txt /tmp/\n$ ls /tmp/notes.txt\n/tmp/notes.txt",
    category: "FILE OPS"
  },
  {
    id: "file2",
    question: "Use `mv source destination` to MOVE or RENAME a file (same command does both, depending on the destination)",
    answer: "mv source destination",
    explanation: "`mv` ('move') does double duty: if DESTINATION is a path in a DIFFERENT directory, it's a move; if it's a different filename in the SAME directory, it's a rename. Under the hood (on the same filesystem) `mv` just relinks an inode — no bytes are actually copied, so even huge files rename instantly. Across filesystems (e.g. `/home` → `/mnt/usb`) `mv` falls back to copy-then-delete, which is slower and can leave both copies briefly if interrupted. CRITICAL gotcha: plain `mv` silently OVERWRITES an existing destination — use `-i` to be prompted or `-n` to never overwrite. If DESTINATION is an existing directory, the source goes INSIDE it; if it doesn't exist, the source is renamed TO that path. Unlike `cp`, `mv` doesn't need `-r` for directories — it walks them automatically.",
    usage: "Renaming a file (`mv draft.md final.md`). Moving a finished document into an archive folder. Organizing downloads by moving files into category folders.",
    examples: [
      "mv oldname.txt newname.txt  # rename in place",
      "mv file.txt /home/alice/Documents/  # move into a directory",
      "mv *.log /var/log/archive/  # move all matching files",
      "mv -i a.txt b.txt  # interactive: prompt if b.txt exists",
      "mv -n a.txt b.txt  # no-clobber: skip silently if b.txt exists",
      "mv project project-2026  # rename a whole directory (no -r needed)"
    ],
    memoryTip: "`mv` = MoVe. Same command does both move AND rename — depends on whether the destination is in a different directory. Source first, destination second. `mv` is INSTANT on the same filesystem but COPIES across filesystems.",
    outputExample: "$ ls\ndraft.md\n$ mv draft.md final.md\n$ ls\nfinal.md\n$ mv final.md ~/Documents/\n$ ls ~/Documents/final.md\n/home/alice/Documents/final.md",
    category: "FILE OPS"
  },
  {
    id: "file3",
    question: "Use `rm filename` to PERMANENTLY delete a file (there is NO trash bin — once gone, it's gone)",
    answer: "rm filename",
    explanation: "`rm` ('remove') unlinks a file from the filesystem. THIS IS NOT A RECYCLE BIN. There is no built-in undo, no second chance — once `rm` returns, the file is gone (data forensics aside). For directories you must add `-r` (recursive). The infamous flag `-f` ('force') silences errors AND prompts; the combination `rm -rf` is the most powerful deletion command on Linux and the most dangerous. Whenever a glob is involved (`rm *.log`), pause before pressing Enter — if you mistype, `rm` will obediently delete whatever the glob matched. NEVER run `rm -rf $VAR/` where `$VAR` might be empty; that becomes `rm -rf /` and deletes your system. Safer habits: alias `rm` to `rm -i`, install `trash-cli` (`trash-put file` → recoverable), use `git` so you can revert.",
    usage: "Cleaning up old files. Deleting an unneeded download. Wiping logs you've finished with.",
    examples: [
      "rm unwanted.txt  # delete a single file (NO undo!)",
      "rm -i *.tmp  # interactive: prompt for each file",
      "rm -r old_project/  # recursive: delete a folder + contents",
      "rm -rf node_modules  # force recursive: zero prompts, used in scripts",
      "rm -- -weirdfile  # `--` ends flags, lets you rm a file named '-weirdfile'",
      "trash-put file.txt  # safer alternative: recoverable from trash"
    ],
    memoryTip: "`rm` = ReMove. Permanent. No trash bin. The combo `rm -rf` deletes ANYTHING. Mental rule: before pressing Enter on `rm`, READ THE COMMAND TWICE. Alias `rm` to `rm -i` for a seatbelt.",
    outputExample: "$ ls\nnotes.txt  todo.txt\n$ rm notes.txt\n$ ls\ntodo.txt\n$ rm -i todo.txt\nrm: remove regular file 'todo.txt'? y\n$ ls\n$",
    category: "FILE OPS"
  },
  {
    id: "file4",
    question: "Use `touch filename` to create an EMPTY file (or update an existing file's timestamp to right now)",
    answer: "touch filename",
    explanation: "`touch` is two commands in one: if the file doesn't exist, it CREATES it as a zero-byte file with default permissions (your `umask` applied). If the file DOES exist, it 'touches' the file's timestamps (atime and mtime) to the current time without altering contents — that's the original purpose, back when `make` decided what to rebuild based on file age. Useful flags: `-a` only change ATIME, `-m` only MTIME, `-t YYYYMMDDhhmm` set to a specific time, `-r REFERENCE` copy timestamps from another file, `-c` ('no-create') don't make the file if it doesn't exist. Pass multiple filenames to create many at once: `touch a b c`. To create a file with content in one step, use `echo 'text' > file` instead.",
    usage: "Creating an empty placeholder file (e.g. `.gitkeep`). Refreshing a file's timestamp to trigger a rebuild. Pre-creating files a script will append to.",
    examples: [
      "touch newfile.txt  # create one empty file",
      "touch a.txt b.txt c.txt  # create three at once",
      "touch existing.txt  # bumps timestamps to NOW (file unchanged)",
      "touch -c maybe.txt  # only update if exists; don't create",
      "touch -t 202605170900 file.txt  # set timestamp to 2026-05-17 09:00",
      "touch -r reference.txt new.txt  # copy timestamp from reference"
    ],
    memoryTip: "`touch` literally 'touches' the file to mark it modified now. If the file is missing, touching it conjures it into existence empty. Pair-think `touch` (timestamp + create) vs `> file` (also creates, but truncates if exists).",
    outputExample: "$ touch report.txt\n$ ls -l report.txt\n-rw-r--r-- 1 alice alice 0 May 17 16:42 report.txt\n$ touch report.txt\n$ ls -l report.txt\n-rw-r--r-- 1 alice alice 0 May 17 16:43 report.txt",
    category: "FILE OPS"
  },
  {
    id: "file5",
    question: "Use the `cat` command to print a file's contents straight to the terminal",
    answer: "cat filename",
    explanation: "`cat` is short for 'concatenate' — its original purpose was to stick multiple files together. With ONE filename it just dumps that file's bytes to stdout, which makes it the simplest way to display a small file. With many filenames, it prints them back-to-back (no separators); pipe to a file with `> combined.txt` to actually concatenate. CAUTION: `cat` is wrong for LARGE files — it floods your terminal. Use `less` for paging, or `head`/`tail` for the ends. CAUTION 2: don't `cat | grep` ('useless use of cat'); just `grep PATTERN FILE` directly. Useful flags: `-n` add line numbers, `-A` show non-printing characters (tabs as `^I`, line endings as `$`), `-s` squeeze consecutive blank lines, `-T` show tabs as `^I`. The opposite tool is `tac` (cat backwards — reverses line order).",
    usage: "Quickly looking at a small file. Concatenating two files into a third. Sending a file's contents to another command via a pipe.",
    examples: [
      "cat notes.txt  # display the file",
      "cat /etc/hostname  # peek at a tiny system file",
      "cat part1 part2 part3 > whole  # concatenate into a new file",
      "cat -n script.sh  # display with line numbers",
      "cat -A config.txt  # show tabs (^I), line endings ($)",
      "less bigfile.log  # use `less` instead for huge files"
    ],
    memoryTip: "`cat` = CATenate. For ONE small file, it's a quick view. For BIG files, use `less`. For HEAD/TAIL portions, use `head`/`tail`. Don't write `cat file | grep X` — write `grep X file`.",
    outputExample: "$ cat /etc/hostname\nmachine.local\n$ cat -n notes.txt\n     1\tBuy groceries\n     2\tFinish report\n     3\tCall mom",
    category: "FILE OPS"
  },
  {
    id: "file6",
    question: "Copy with the `-i` (interactive) flag so cp asks before overwriting an existing destination",
    answer: "cp -i source destination",
    explanation: "Plain `cp src dst` silently CLOBBERS `dst` if it already exists — no warning, the old contents are gone forever. `-i` ('interactive') makes `cp` print a `cp: overwrite 'dst'?` prompt instead; you type `y` to proceed or `n` to skip. This is purely a safety net for humans; in scripts you don't want it (the prompt would hang the script). Many distros alias `cp` to `cp -i` for root accounts to add a brake on `cp /etc/foo /etc/bar`. The opposite is `-n` ('no-clobber'): silently skip if destination exists, no prompt. `-i` only checks destinations — source files are never modified.",
    usage: "Whenever you're copying onto a file that might exist and you can't afford to lose it — config files, backups, or homework you're not sure you already saved.",
    examples: [
      "cp -i important.txt backup.txt  # prompts if backup.txt exists",
      "cp -i *.conf /etc/myapp/  # asks for each existing file in the destination",
      "cp -ir project_v1 project_v2  # recursive interactive copy of a whole folder",
      "cp -n src.txt dst.txt  # the no-prompt sibling: skip if dst exists",
      "yes n | cp -i a b  # script trick: auto-answer 'no' to every prompt (skip overwrite)"
    ],
    memoryTip: "`-i` = Interactive ('Inquire before clobbering'). Same `-i` works for `cp`, `mv`, and `rm` — one mnemonic, three commands. Pair-think: `-i` asks, `-n` never overwrites, `-f` forces.",
    outputExample: "$ ls\nbackup.txt  important.txt\n$ cp -i important.txt backup.txt\ncp: overwrite 'backup.txt'? n\n$ cp -i important.txt backup.txt\ncp: overwrite 'backup.txt'? y\n$",
    category: "FILE OPS"
  },
  {
    id: "file7",
    question: "Move (rename) a file with the `-i` flag so mv prompts before overwriting an existing destination",
    answer: "mv -i source destination",
    explanation: "`mv` does double duty: same-directory = RENAME, different-directory = MOVE. Either way, if the destination name already exists, plain `mv` overwrites it without warning. `-i` ('interactive') adds the safety prompt: `mv: overwrite 'dst'?` — type `y` or `n`. Unlike `cp`, `mv` on the same filesystem just relinks the inode (fast, no copying of contents), so even huge files rename instantly. Across filesystems (e.g. `/home` → `/mnt/usb`) `mv` actually copies then deletes — slower, and a power cut mid-move can leave both copies briefly.",
    usage: "Renaming `report-draft.md` to `report.md` when `report.md` might already exist. Moving a folder into a parent that might already contain something with the same name.",
    examples: [
      "mv -i draft.md report.md  # prompts if report.md already exists",
      "mv -i *.png images/  # asks before clobbering same-name files in images/",
      "mv -i ~/Downloads/song.mp3 ~/Music/  # prompts if Music/song.mp3 exists",
      "mv -n a.txt b.txt  # no-clobber sibling: skip silently if b.txt exists",
      "mv --backup=numbered old.txt new.txt  # keep new.txt~1~, new.txt~2~ backups instead of prompting"
    ],
    memoryTip: "Same `-i` rule as `cp -i` / `rm -i`. Think of `mv` as `cp+rm` combined — so the same Inquire flag applies.",
    outputExample: "$ ls\ndraft.md  report.md\n$ mv -i draft.md report.md\nmv: overwrite 'report.md'? y\n$ ls\nreport.md",
    category: "FILE OPS"
  },
  {
    id: "file8",
    question: "Delete a file with `rm -i` so it asks for confirmation before each removal",
    answer: "rm -i filename",
    explanation: "`rm` is permanent — there is NO trash bin, no undelete, no recycle. Once it returns, the bytes are gone (modulo filesystem forensics). `-i` ('interactive') tells `rm` to print `rm: remove 'filename'?` before each file and wait for `y` or `n`. For a folder full of files, that's one prompt per file (annoying but safe); use `-I` (capital, less common) to prompt ONCE for the whole batch when removing more than 3 files or recursing into directories. Pair `-i` with `-r` ('recursive') to delete folders interactively: `rm -ri folder/`. Never combine `-r` with `-f` ('force') on a path with variables in it — `rm -rf $UNSET_VAR/` becomes `rm -rf /`.",
    usage: "When you're cleaning up logs, build artifacts, or any glob like `rm *.bak` and want a chance to back out if the glob expanded to something unexpected.",
    examples: [
      "rm -i *.log  # asks for each .log file before deleting",
      "rm -I *.log  # asks ONCE for the whole batch (less spammy)",
      "rm -ri old_project/  # interactive recursive — confirms each file inside",
      "rm -- -weirdfile  # the -- ends flags, lets you delete a file literally named '-weirdfile'",
      "trash-put file.txt  # safer alternative from the 'trash-cli' package — sends to trash, recoverable"
    ],
    memoryTip: "Capital `-I` = ONE prompt for the batch. Lowercase `-i` = per-file. Both stand for Interactive. Remember: `rm` has no undo — `-i` is your only seatbelt unless you've installed `trash-cli`.",
    outputExample: "$ rm -i notes.txt scratch.txt\nrm: remove regular file 'notes.txt'? n\nrm: remove regular file 'scratch.txt'? y\n$ ls\nnotes.txt",
    category: "FILE OPS"
  },
  {
    id: "file9",
    question: "Use `cp -p source destination` to copy a file while PRESERVING its permissions, ownership, and timestamps",
    answer: "cp -p source destination",
    explanation: "By default, `cp` creates the destination with FRESH metadata: current time as mtime, your user as owner, and permissions filtered by your `umask`. Often that's fine — but for backups, deploys, or moving config files, you want the COPY to look identical to the original. `-p` ('preserve') keeps three things: mode (permission bits), ownership (uid/gid), and timestamps (atime/mtime). To preserve everything (symlinks as symlinks, extended attributes, ACLs), use `-a` ('archive') instead — equivalent to `-dR --preserve=all`. You can selectively preserve specific things with `--preserve=mode,timestamps,links,...`. Preserving ownership requires you to be root (regular users can only own files they create). Without root, `-p` silently skips the ownership part but still preserves mode + timestamps.",
    usage: "Maintain original file metadata when copying important files.",
    examples: [
      "cp -p important.conf backup.conf  # Preserve all attributes",
      "cp -pr /etc /backup  # Backup config with permissions"
    ],
    memoryTip: "cp = copy. Like making a duplicate of something.",
    outputExample: "$ cp file.txt file_copy.txt\n$ ls\nfile.txt  file_copy.txt",
    category: "FILE OPS"
  },
  {
    id: "file10",
    question: "Create a SYMBOLIC link (shortcut) named `link_name` that points to `target` using `ln -s`",
    answer: "ln -s target link_name",
    explanation: "A symbolic link (symlink, soft link) is a small file that just CONTAINS A PATH to another file. Opening the symlink transparently opens the target. `ln -s TARGET LINKNAME` is the syntax — common foot-gun is reversing them; remember source-then-destination, same as `cp`. Symlinks can point at directories AND across filesystems, can be relative or absolute, and can dangle (point to something that no longer exists). In `ls -l` they show as `link -> target`. Difference from HARD links (`ln` without `-s`): hard links share the same INODE — they're indistinguishable copies of the same file, but limited to same filesystem and can't link directories. Symlinks are far more common in practice. Use `ln -sf` to FORCE-replace an existing symlink (it errors otherwise). Use `readlink -f LINK` to follow a symlink to its final target.",
    usage: "Making `/usr/local/bin/python` point at a specific Python version. Creating shortcuts to deeply-buried project folders in your home directory. Letting multiple paths refer to the same config without copying.",
    examples: [
      "ln -s /usr/bin/python3.11 ~/bin/python  # shortcut to a specific Python",
      "ln -s ../shared/config.toml ./config.toml  # relative symlink to a sibling file",
      "ln -sf /opt/app/v2 /opt/app/current  # atomically replace existing symlink (deploy pattern)",
      "readlink -f /usr/bin/python  # follow the chain to the real file",
      "find / -xtype l 2>/dev/null  # find all BROKEN symlinks on the system"
    ],
    memoryTip: "`ln -s TARGET LINKNAME` — same order as `cp` (source first, destination second). Forget it and you'll create the link in the wrong place. Without `-s` you get a HARD link (rare, advanced). Trailing `f` (`-sf`) forces overwrite — essential for the 'current → v2' deploy pattern.",
    outputExample: "$ ln -s /usr/bin/python3.11 mypython\n$ ls -l mypython\nlrwxrwxrwx 1 alice alice 19 May 15 10:00 mypython -> /usr/bin/python3.11\n$ ./mypython --version\nPython 3.11.7\n$ readlink mypython\n/usr/bin/python3.11",
    category: "FILE OPS"
  },
  {
    id: "file11",
    question: "Show disk usage of files and folders in human-readable form using `du -h`",
    answer: "du -h",
    explanation: "`du` ('disk usage') walks a directory and prints how many bytes each subdirectory occupies on disk. By default it shows EVERY subdirectory recursively (often hundreds of lines) and uses 1KB blocks. `-h` ('human') converts to `4.0K`/`12M`/`1.5G`. The killer combo is `du -sh *` — `-s` summary (one number per arg, no recursion), so you get one size per top-level item in the current folder. Use `--max-depth=N` to limit recursion. CAVEATS: `du` shows DISK usage including filesystem overhead (slightly larger than file size); for actual file content size use `du --apparent-size`. `du` is SLOW on big trees because it stats every file — for instant rough numbers use `df -h` (free space per mountpoint) instead. The classic 'find what's eating my disk' pipeline: `du -sh * | sort -h | tail`.",
    usage: "Hunting down the folder that's filling your disk. Comparing two directories' sizes. Auditing project bloat before tarballing.",
    examples: [
      "du -sh *  # one-line size per item in current folder — the everyday command",
      "du -sh ~/Downloads  # how big is my Downloads folder?",
      "du -h --max-depth=1  # current dir + immediate children only",
      "du -sh * | sort -h | tail  # 10 biggest items in current dir",
      "du -hxd1 /  # top-level sizes of / without crossing filesystems"
    ],
    memoryTip: "`du` = Disk Usage. Pair-think: `du` (per-folder) vs `df` (per-mountpoint free space). Memorize `du -sh *` — it answers 'where did my disk go?' in one breath. For interactive disk hunting install `ncdu` (`sudo apt install ncdu`).",
    outputExample: "$ du -sh *\n12M     Documents\n4.5G    Downloads\n128K    Music\n2.1G    Pictures\n42M     Projects\n$ du -sh * | sort -h | tail -3\n42M     Projects\n2.1G    Pictures\n4.5G    Downloads",
    category: "FILE OPS"
  },
  {
    id: "file12",
    question: "Compare two files",
    answer: "diff file1 file2",
    explanation: "'diff' shows differences between two files line by line.",
    usage: "Compare file versions, check for changes, or find differences in configurations.",
    examples: [
      "diff old.conf new.conf  # Show differences",
      "diff -u file1 file2  # Unified format (good for patches)",
      "diff -r dir1 dir2  # Compare directories recursively"
    ],
    memoryTip: "'diff' = 'differences'. Like spotting the differences between two similar pictures.",
    outputExample: "$ diff file1.txt file2.txt\n2c2\n< Hello World\n---\n> Hello Universe\n4a5\n> New line added",
    category: "FILE OPS"
  },
  {
    id: "file13",
    question: "Copy recursively",
    answer: "cp -r source destination",
    explanation: "'cp -r' copies directories and their contents recursively.",
    usage: "Duplicate entire directory trees for backup or project copying.",
    examples: [
      "cp -r project backup/  # Copy entire project",
      "cp -r /etc /backup  # Backup system config",
      "cp -r ~/Documents/* ~/backup/  # Copy all documents"
    ],
    memoryTip: "'cp -r' = 'copy recursive'. The 'r' means it copies everything inside directories too.",
    outputExample: "$ cp -r myproject backup/\n$ ls backup/\nmyproject/",
    category: "FILE OPS"
  },
  {
    id: "file14",
    question: "Move (or rename) an entire directory tree with `mv source_dir destination_dir` (no `-r` needed — mv is recursive by default)",
    answer: "mv source_dir destination_dir",
    explanation: "Common beginner trap: there is NO `mv -r` flag. Unlike `cp` and `rm` (which need `-r` to touch directories), `mv` handles whole directory trees natively because moving a directory on the same filesystem is just renaming one entry — the files inside don't need to be visited. Across filesystems (e.g. `/home` → `/mnt/usb`) `mv` falls back to copy-then-delete and still walks the tree for you. If the destination ends with `/` and exists, `mv source dest/` puts `source` INSIDE `dest`. If it doesn't exist, `mv source dest` RENAMES `source` to `dest`. To overwrite an existing destination directory you'd need `cp -r src dst && rm -rf src` because `mv` refuses to merge two directories — it errors out with 'Directory not empty'.",
    usage: "Renaming a project folder (`mv projectA projectA-archived`), moving a finished folder into an archive directory, or relocating a whole tree to another mountpoint.",
    examples: [
      "mv oldproject newproject  # rename a directory in place",
      "mv project_v1 archive/  # move folder INTO archive/ (note the trailing slash convention)",
      "mv ~/Downloads/photos ~/Pictures/  # cross-folder move on same disk = instant",
      "mv -i src/ backup/  # interactive: prompt if backup/src already exists",
      "mv -v src/ /mnt/usb/  # verbose; on a different filesystem this becomes a real copy+delete"
    ],
    memoryTip: "`mv` already walks directories — no `-r`. Mnemonic: `mv` doesn't need `-r` because moving a folder is usually just renaming one entry, not touching the contents. Compare: `cp -r`, `rm -r`, `mv` (no flag).",
    outputExample: "$ ls\nproject_v1/\n$ mv project_v1 project_v1_archived\n$ ls\nproject_v1_archived/\n$ mv project_v1_archived archive/\n$ ls archive/\nproject_v1_archived/",
    category: "FILE OPS"
  },
  {
    id: "file15",
    question: "Remove recursively",
    answer: "rm -r directory",
    explanation: "'rm -r' removes directories and all their contents recursively.",
    usage: "Delete entire directory trees. Use with extreme caution.",
    examples: [
      "rm -r temp/  # Remove temp directory and contents",
      "rm -rf unwanted/  # Force remove without prompts",
      "rm -ri project/  # Interactive recursive removal"
    ],
    memoryTip: "'rm -r' = 'remove recursive'. Like demolishing a house and everything in it.",
    outputExample: "$ rm -r temp/\n$ ls\n# temp directory is gone",
    category: "FILE OPS"
  },
  {
    id: "file16",
    question: "Copy with verbose output",
    answer: "cp -v source destination",
    explanation: "'cp -v' shows verbose output, displaying what files are being copied.",
    usage: "Monitor copy operations, especially for large or multiple file copies.",
    examples: [
      "cp -v *.txt backup/  # Show each file being copied",
      "cp -rv project/ backup/  # Verbose recursive copy"
    ],
    memoryTip: "'cp -v' = 'copy verbose'. The 'v' makes it 'verbose' - it tells you what it's doing.",
    outputExample: "$ cp -v file.txt backup/\nfile.txt -> backup/file.txt",
    category: "FILE OPS"
  },
  {
    id: "file17",
    question: "Move with verbose output",
    answer: "mv -v source destination",
    explanation: "'mv -v' shows verbose output, displaying what files are being moved.",
    usage: "Monitor move operations and confirm what was moved.",
    examples: [
      "mv -v old.txt new.txt  # Show rename operation",
      "mv -v *.log archive/  # Show each file being moved"
    ],
    memoryTip: "'mv -v' = 'move verbose'. Like the moving company telling you each item they're taking.",
    outputExample: "$ mv -v oldname.txt newname.txt\noldname.txt -> newname.txt",
    category: "FILE OPS"
  },
  {
    id: "file18",
    question: "Remove with verbose output",
    answer: "rm -v filename",
    explanation: "'rm -v' shows verbose output, displaying what files are being removed.",
    usage: "Confirm what files are being deleted during removal operations.",
    examples: [
      "rm -v *.tmp  # Show each temp file being deleted",
      "rm -rv temp/  # Verbose recursive removal"
    ],
    memoryTip: "'rm -v' = 'remove verbose'. Like the garbage collector telling you what they're taking away.",
    outputExample: "$ rm -v unwanted.txt\nremoved 'unwanted.txt'",
    category: "FILE OPS"
  },
  {
    id: "file19",
    question: "Create hard link",
    answer: "ln target link_name",
    explanation: "'ln' creates a hard link, which is another name for the same file on disk.",
    usage: "Create multiple names for the same file, useful for backup or access from different locations.",
    examples: [
      "ln original.txt link.txt  # Create hard link",
      "ln /bin/bash sh  # Another name for bash"
    ],
    memoryTip: "'ln' = 'link'. A hard link is like having two doors to the same room.",
    outputExample: "$ ln file.txt hardlink.txt\n$ ls -li\n12345 -rw-r--r-- 2 user user 1024 Jan 15 10:30 file.txt\n12345 -rw-r--r-- 2 user user 1024 Jan 15 10:30 hardlink.txt",
    category: "FILE OPS"
  },
  {
    id: "file20",
    question: "Show file links",
    answer: "ls -l filename",
    explanation: "The second column in 'ls -l' output shows the number of hard links to a file.",
    usage: "Check how many hard links exist for a file.",
    examples: [
      "ls -l important.txt  # Check link count",
      "ls -li file.txt  # Show inode and link info"
    ],
    memoryTip: "The number after permissions in 'ls -l' shows how many hard links exist. Like counting how many doors lead to the same room.",
    outputExample: "$ ls -l file.txt\n-rw-r--r-- 2 user user 1024 Jan 15 10:30 file.txt\n# The '2' means 2 hard links exist",
    category: "FILE OPS"
  },
  {
    id: "file21",
    question: "Copy and preserve all attributes",
    answer: "cp -a source destination",
    explanation: "'cp -a' archives files, preserving all attributes including permissions, timestamps, and links.",
    usage: "Create exact copies for backup or migration purposes.",
    examples: [
      "cp -a /home /backup  # Archive entire home directory",
      "cp -a project/ backup/  # Preserve all attributes"
    ],
    memoryTip: "'cp -a' = 'copy archive'. Like making a perfect museum replica that preserves everything.",
    outputExample: "$ cp -a original/ backup/\n$ ls -la backup/\n# All permissions, timestamps, and attributes preserved",
    category: "FILE OPS"
  },
  {
    id: "file22",
    question: "Move and create backup",
    answer: "mv --backup source destination",
    explanation: "'mv --backup' creates a backup of the destination file before overwriting it.",
    usage: "Safely overwrite files while keeping the original as backup.",
    examples: [
      "mv --backup new.txt existing.txt  # Backup existing.txt",
      "mv -b file.txt dest/  # Backup if file exists in dest"
    ],
    memoryTip: "'mv --backup' = 'move with backup'. Like keeping the old version in a safe place before replacing it.",
    outputExample: "$ mv --backup newfile.txt oldfile.txt\n$ ls\nnewfile.txt  oldfile.txt~  # ~ indicates backup",
    category: "FILE OPS"
  },
  {
    id: "file23",
    question: "Remove only if newer than",
    answer: "find . -name \"*.tmp\" -newer reference -delete",
    explanation: "Uses 'find' with '-newer' to remove files newer than a reference file.",
    usage: "Clean up temporary files created after a certain point in time.",
    examples: [
      "touch marker && find . -name \"*.tmp\" -newer marker -delete",
      "find /tmp -newer /tmp/cleanup_marker -type f -delete"
    ],
    memoryTip: "'-newer reference' finds files created after the reference file. Like cleaning up everything bought after your last shopping trip.",
    outputExample: "$ touch marker\n$ # create some .tmp files\n$ find . -name \"*.tmp\" -newer marker -delete\n# Only newer .tmp files are removed",
    category: "FILE OPS"
  },
  {
    id: "file24",
    question: "Copy with progress indicator",
    answer: "rsync -av --progress source destination",
    explanation: "'rsync' with progress shows detailed copying progress for large transfers.",
    usage: "Monitor large file or directory copy operations.",
    examples: [
      "rsync -av --progress bigfile.iso /backup/",
      "rsync -av --progress /home /external/drive/"
    ],
    memoryTip: "'rsync --progress' shows a progress bar. Like watching a download progress bar.",
    outputExample: "$ rsync -av --progress largefile.dat backup/\nsending incremental file list\nlargefile.dat\n    524,288,000  45%  50.00MB/s    0:08:15",
    category: "FILE OPS"
  },
  {
    id: "file25",
    question: "Secure delete file",
    answer: "shred -u filename",
    explanation: "'shred' overwrites files multiple times before deletion to prevent recovery.",
    usage: "Securely delete sensitive files that should not be recoverable.",
    examples: [
      "shred -u secret.txt  # Overwrite and delete",
      "shred -n 3 -u confidential.pdf  # 3 overwrites then delete"
    ],
    memoryTip: "'shred' = 'destroy beyond recognition'. Like shredding a document so it can't be pieced back together.",
    outputExample: "$ shred -u secret.txt\n$ # File is overwritten multiple times then deleted",
    category: "FILE OPS"
  },

  // VIEWING TEXT
  {
    id: "view1",
    question: "Use the `less` command to open a file in a scrollable pager you can search and navigate",
    answer: "less filename",
    explanation: "A 'pager' is a program that shows you one screen of text at a time instead of dumping the whole file at once. `less` is the standard Linux pager. When you open a file with it, you can scroll with arrow keys, page with Space (down) and `b` (back), jump to the top with `g` or the bottom with `G`, search forward with `/pattern` and jump to the next match with `n`. Press `q` to quit. Unlike `cat`, `less` doesn't load the whole file into memory, so it handles multi-gigabyte log files without slowing down. The name is a joke: the older tool was called `more`, and 'less is more'.",
    usage: "Reach for `less` whenever you want to read a file but don't want output to fly past in your terminal. It's the right tool for inspecting big log files, browsing config files, or reading any text you haven't seen before.",
    examples: [
      "less /var/log/syslog  # browse a long log file interactively",
      "less +G app.log  # open at the END of the file (newest log lines)",
      "less +F app.log  # follow mode — like 'tail -f' but you can stop and search",
      "journalctl -u nginx | less  # pipe any command's output into less",
      "less -N script.sh  # show line numbers on the left",
      "less -S wide.csv  # don't wrap long lines — scroll right with arrow keys"
    ],
    memoryTip: "`less` is more. Mental model: it's a read-only mini text editor — the same search (`/`), navigation (`g`/`G`), and quit (`q`) keys as `vim`, which is why Linux folks feel at home in it.",
    outputExample: "$ less /var/log/syslog\nMay 15 09:14:01 host CRON[1234]: (root) CMD (run-parts /etc/cron.hourly)\nMay 15 09:14:02 host systemd[1]: Started Session 42 of user alice.\nMay 15 09:14:05 host sshd[2210]: Accepted publickey for alice from 10.0.0.5\nMay 15 09:14:10 host kernel: [12345.678] usb 1-2: new high-speed USB device\n:",
    category: "VIEWING TEXT"
  },
  {
    id: "view2",
    question: "Use the `head` command to print the first 10 lines of a file to the terminal",
    answer: "head filename",
    explanation: "`head` writes the first lines of a file to stdout (the terminal). By default it prints 10 lines, but `-n N` lets you ask for any number. It always starts at the beginning of the file and stops as soon as it has its lines, so it's instant even on a 10-GB file. If you pass multiple filenames, `head` prints each one with a `==> filename <==` banner so you can tell them apart. Piping anything into `head` is a common trick to look at just the first few rows of long output (e.g. `ls -l /usr/bin | head`).",
    usage: "Preview a CSV before processing it so you can see the header row and a few sample lines. Peek at a config file you don't know without dumping the whole thing. Trim noisy output to just the first few lines while exploring.",
    examples: [
      "head report.csv  # see the header and first 9 data rows",
      "head -n 3 /etc/passwd  # just the first three user accounts",
      "head -n 20 *.log  # first 20 lines of every .log file, each labeled",
      "ls -lS /var/log | head  # the 10 biggest files in /var/log",
      "head -c 100 binary.bin  # first 100 BYTES (handy for magic-number checks)"
    ],
    memoryTip: "`head` of a file = the top of the file, like the head of a list. Pair it in your mind with `tail` (bottom). Default for both is 10 lines.",
    outputExample: "$ head -n 5 /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync",
    category: "VIEWING TEXT"
  },
  {
    id: "view3",
    question: "Use the `tail` command to print the last 10 lines of a file (and `-f` to watch it grow live)",
    answer: "tail filename",
    explanation: "`tail` prints the END of a file — the opposite of `head`. By default it shows the last 10 lines; use `-n N` to ask for a different number. Its killer feature is `-f` ('follow'): instead of exiting, `tail` keeps the file open and prints every new line as it gets appended. This is THE standard way to watch a log file in real time. Stop following with Ctrl+C. A common variant is `tail -F` (capital F), which also handles 'log rotation' — when a service rotates its log file (renames it and starts a new one), `-F` keeps following the new file by name, while `-f` would silently keep watching the old, renamed file.",
    usage: "Watch a live web-server or application log while you reproduce a bug. Quickly check the most recent entries in `/var/log/auth.log` after a failed SSH login. Read the final lines of a long output file to see how a job finished.",
    examples: [
      "tail /var/log/auth.log  # most recent 10 auth events",
      "tail -n 50 app.log  # last 50 lines",
      "tail -f /var/log/nginx/access.log  # watch new requests appear live",
      "tail -F /var/log/syslog  # follow across log rotation",
      "tail -n +2 data.csv  # everything FROM line 2 onward (skip CSV header)",
      "tail -f app.log | grep ERROR  # live-watch only the error lines"
    ],
    memoryTip: "`head` of the file vs. `tail` of the file — like a dog: head at the front, tail at the back. `-f` = follow, like following someone in real time.",
    outputExample: "$ tail -n 4 /var/log/auth.log\nMay 15 09:12:01 host sshd[2204]: Failed password for invalid user admin from 203.0.113.7\nMay 15 09:12:02 host sshd[2204]: Connection closed by 203.0.113.7 port 51422\nMay 15 09:14:05 host sshd[2210]: Accepted publickey for alice from 10.0.0.5\nMay 15 09:14:05 host sshd[2210]: pam_unix(sshd:session): session opened for user alice",
    category: "VIEWING TEXT"
  },
  {
    id: "view4",
    question: "Use the `grep` command to print every line of a file that contains a pattern",
    answer: "grep pattern filename",
    explanation: "`grep` reads a file (or stdin) line by line and prints just the lines that match a 'pattern' — a piece of text or a regular expression. It's the single most-used text tool on Linux. By default the pattern is case-sensitive and is treated as a basic regular expression, but most people use it for plain word/phrase searches. If you give it many files, each matching line is prefixed with the filename. Useful flags: `-i` ignore case, `-v` invert (print non-matching lines), `-r` recurse into directories, `-n` show line numbers, `-w` whole-word match. Quote your pattern if it contains spaces or shell-special characters.",
    usage: "Find every line mentioning 'error' in a log file. Search a whole project directory for the word 'TODO'. Filter the output of another command (e.g. `ps aux | grep nginx`) to keep only the lines you care about.",
    examples: [
      "grep error /var/log/apache2/error.log  # all error lines in apache's log",
      "grep -i 'failed' auth.log  # case-insensitive: 'Failed', 'FAILED', 'failed'",
      "grep -r 'TODO' src/  # recursive: every TODO in any file under src/",
      "grep -v '^#' /etc/ssh/sshd_config  # show config WITHOUT comment lines",
      "ps aux | grep nginx  # which nginx processes are running",
      "grep -w 'cat' notes.txt  # match 'cat' but not 'category' or 'concatenate'"
    ],
    memoryTip: "`grep` came from an old `ed` editor command: `g/re/p` — Globally search for a Regular Expression and Print matches. That literal acronym is the name.",
    outputExample: "$ grep -i error app.log\n2026-05-15 09:12:43 ERROR: Database connection refused\n2026-05-15 09:13:01 error: retry 1 of 3\n2026-05-15 09:13:08 Error reported to Sentry: id=abc123",
    category: "VIEWING TEXT"
  },
  {
    id: "view5",
    question: "Use the `wc` command to count lines, words, and bytes in a file",
    answer: "wc filename",
    explanation: "`wc` ('word count') prints three numbers for a file: lines, words, and bytes — in that order. A 'word' is any run of non-whitespace characters; a 'line' is anything ending in a newline character. Flags pick a subset: `-l` only lines, `-w` only words, `-c` only bytes, `-m` only characters (different from bytes when the file uses multi-byte UTF-8). It's most often used with `-l` to answer the question 'how many of these are there?' after grep, find, or sort. With multiple files, `wc` adds a `total` row at the bottom.",
    usage: "Count how many users are in `/etc/passwd`. Count how many ERROR lines today's log has (pipe `grep` into `wc -l`). Get a quick word count for an essay or report.",
    examples: [
      "wc notes.txt  # lines, words, bytes — all three",
      "wc -l /etc/passwd  # how many user accounts are defined?",
      "grep -c ERROR app.log  # OR: grep ERROR app.log | wc -l",
      "ls /usr/bin | wc -l  # how many commands are in /usr/bin?",
      "find . -name '*.py' | wc -l  # how many Python files in this project?",
      "wc -m essay.txt  # character count (proper, UTF-8 aware)"
    ],
    memoryTip: "`wc` = Word Count, but its main job in practice is Line Count via `wc -l`. Mnemonic: 'pipe-it-to-wc-dash-l' is the universal way to answer 'how many?' on the command line.",
    outputExample: "$ wc /etc/passwd\n  47  85 2814 /etc/passwd\n$ wc -l *.txt\n  10 todo.txt\n 142 notes.txt\n 152 total",
    category: "VIEWING TEXT"
  },
  {
    id: "view6",
    question: "Sort file contents",
    answer: "sort filename",
    explanation: "'sort' sorts lines in a file alphabetically or numerically.",
    usage: "Organize data, prepare for further processing, or create sorted lists.",
    examples: [
      "sort names.txt  # Alphabetical sort",
      "sort -n numbers.txt  # Numeric sort",
      "sort -r file.txt  # Reverse sort"
    ],
    memoryTip: "sort = organize. Like arranging items in order.",
    outputExample: "$ sort names.txt\nAlice\nBob\nCharlie",
    category: "VIEWING TEXT"
  },
  {
    id: "view7",
    question: "Collapse CONSECUTIVE duplicate lines into one with the `uniq` command (usually paired with `sort`)",
    answer: "uniq filename",
    explanation: "Crucial gotcha: `uniq` only collapses ADJACENT duplicate lines. `a b a` stays `a b a`. To dedupe a whole file you ALMOST ALWAYS pipe `sort | uniq` so duplicates end up next to each other first. Or use `sort -u` which does both in one step. Useful flags: `-c` prefix each unique line with its count (the foundation of every 'count by group' command-line trick), `-d` only show lines that ARE duplicated (drops singletons), `-u` only show lines that AREN'T duplicated. Classic top-N pipeline: `sort | uniq -c | sort -rn | head` — group, count, sort by count descending, take 10. Works for any 'most frequent X' question.",
    usage: "Counting how many of each value appear in a log (`awk '{print $1}' access.log | sort | uniq -c | sort -rn` = top visitors). Removing duplicate lines from a file. Finding lines that appear MORE than once (`uniq -d`).",
    examples: [
      "sort names.txt | uniq  # dedupe — sort first because uniq only sees adjacent dupes",
      "sort -u names.txt  # one-step dedupe (same result)",
      "sort log.txt | uniq -c | sort -rn | head  # top 10 most-frequent lines",
      "uniq -d sorted.txt  # only lines that appear more than once",
      "awk '{print $1}' access.log | sort | uniq -c | sort -rn  # request count per IP"
    ],
    memoryTip: "`uniq` = UNIQue, but ADJACENT-only. Mantra: 'sort then uniq' or use `sort -u`. The `-c` flag is the secret sauce for any 'count occurrences' question — `sort | uniq -c | sort -rn` is the universal top-N pattern.",
    outputExample: "$ cat colors.txt\nred\nblue\nred\nred\nblue\ngreen\n$ sort colors.txt | uniq -c\n      2 blue\n      1 green\n      3 red\n$ sort colors.txt | uniq -c | sort -rn\n      3 red\n      2 blue\n      1 green",
    category: "VIEWING TEXT"
  },
  {
    id: "view8",
    question: "Print a file with line numbers prepended using the `nl` command",
    answer: "nl filename",
    explanation: "`nl` ('number lines') prefixes each non-blank line with its line number, right-aligned in a 6-character column followed by a tab. By default, blank lines are NOT numbered (so the count reflects 'real' lines of content). To number every line including blanks, use `-ba` (`-b` = body numbering style, `a` = all). Other styles: `-bt` body-only-non-empty (default), `-bn` no numbering. You can also separately style header (`-h`) and footer (`-f`) sections. Compare with `cat -n` (always numbers all lines, simpler) and `cat -b` (numbers only non-blank — same as `nl` default). For grep with line numbers use `grep -n`.",
    usage: "Adding line numbers before printing or pasting code into a chat. Generating a reference report you'll quote line-by-line. Quickly numbering a config file's lines for a discussion.",
    examples: [
      "nl script.sh  # number non-blank lines",
      "nl -ba file.txt  # number every line (blanks too)",
      "cat -n file.txt  # equivalent, simpler (numbers all lines)",
      "nl -nrz file.txt  # zero-padded line numbers (000001, 000002, ...)",
      "awk '{print NR\": \"$0}' file.txt  # alternative via awk"
    ],
    memoryTip: "`nl` = Number Lines. Default skips blanks. For 'number absolutely everything' use `cat -n`. For inline numbering in `less`, press `=` or use `less -N file`.",
    outputExample: "$ cat -e poem.txt\nRoses are red$\n$\nViolets are blue$\n$ nl poem.txt\n     1\tRoses are red\n       \n     2\tViolets are blue\n$ nl -ba poem.txt\n     1\tRoses are red\n     2\t\n     3\tViolets are blue",
    category: "VIEWING TEXT"
  },
  {
    id: "view9",
    question: "Display non-printable characters",
    answer: "cat -A filename",
    explanation: "'cat -A' shows all characters including non-printing ones like tabs (^I) and line endings ($).",
    usage: "Debug files with invisible characters or check for Windows line endings.",
    examples: [
      "cat -A script.sh  # Show all characters",
      "cat -A file.txt | grep '\\\$'  # Find Windows line endings"
    ],
    memoryTip: "cat = concatenate. Like displaying file contents on screen.",
    outputExample: "$ cat file.txt\nHello World",
    category: "VIEWING TEXT"
  },
  {
    id: "view10",
    question: "Print a file with its LINES in REVERSE order using the `tac` command (cat spelled backwards)",
    answer: "tac filename",
    explanation: "`tac` reverses LINE ORDER: line 1 goes to the bottom, last line to the top. Each line's INTERNAL contents are untouched — for that you'd use `rev`. Most common use: viewing log files newest-entry-first when the log appends (chronological → reverse-chronological). For a live-tailing log there are easier choices (`tail -f`, `journalctl -rf`). `tac` works on files OR stdin: `command | tac` reverses any output. It loads the whole input into memory (or temp files); avoid on enormous files unless you have RAM/disk to spare.",
    usage: "Reading appended logs newest-first. Reversing the order of a list. Showing the last-N entries of a pipeline alongside `head` (`pipeline | tac | head -5`).",
    examples: [
      "tac access.log  # log in newest-first order",
      "tac names.txt  # last line printed first",
      "history | tac | head  # show most-recent shell commands, oldest-of-those-first",
      "echo 'one\\ntwo\\nthree' | tac  # three / two / one",
      "rev file.txt  # DIFFERENT — reverses each line's CHARACTERS, not line order"
    ],
    memoryTip: "`tac` = `cat` spelled backwards. Pair-think: `tac` reverses LINE order, `rev` reverses CHARACTER order within each line. Two reversers, very different jobs.",
    outputExample: "$ cat colors.txt\nred\ngreen\nblue\n$ tac colors.txt\nblue\ngreen\nred\n$ printf 'A\\nB\\nC\\n' | tac\nC\nB\nA",
    category: "VIEWING TEXT"
  },
  {
    id: "view11",
    question: "Break a large file into smaller chunks with the `split` command",
    answer: "split filename",
    explanation: "`split` divides a file into many smaller pieces. By default: 1000 lines per chunk, named `xaa`, `xab`, `xac`, ... in the current directory. You'll almost always override that: `-b SIZE` (bytes: `1M`, `500K`, `2G`) for byte-based chunks (binary files), `-l N` for N lines per chunk (text). Add a PREFIX as the second argument so files get sensible names: `split -b 100M big.iso piece_` → `piece_aa`, `piece_ab`, ... To get NUMERIC suffixes use `-d` (`piece_00`, `piece_01`). To set suffix length use `-a N` (default 2 characters = 676 chunks max with letters). Reassemble with plain `cat`: `cat piece_* > big.iso` (note shell glob sorts alphabetically — works because `aa, ab, ac` sort correctly). Verify with checksums (`sha256sum`) on both sides.",
    usage: "Splitting a large file to fit on smaller transport (multiple USB sticks, email attachment size limits). Parallel processing a giant log in chunks. Working around old filesystem size caps.",
    examples: [
      "split -b 100M big.iso piece_  # 100 MB chunks named piece_aa, piece_ab, ...",
      "split -l 1000 huge.csv chunk_  # 1000 lines per file",
      "split -b 5M -d -a 3 file.bin part_  # numeric suffix: part_000, part_001, ...",
      "cat piece_* > rebuilt.iso  # reassemble in alphabetic order",
      "sha256sum big.iso rebuilt.iso  # verify reassembly is bit-identical"
    ],
    memoryTip: "`split` defaults to 1000-line text chunks named `xaa, xab, ...`. Always pass a prefix (second arg) so you get readable filenames. Reassemble with plain `cat prefix_* > original`. For binary files use `-b SIZE`; for line-oriented files use `-l N`.",
    outputExample: "$ ls -lh big.bin\n-rw-r--r-- 1 alice alice 250M May 15 10:00 big.bin\n$ split -b 100M big.bin piece_\n$ ls -lh piece_*\n-rw-r--r-- 1 alice alice 100M May 15 10:00 piece_aa\n-rw-r--r-- 1 alice alice 100M May 15 10:00 piece_ab\n-rw-r--r-- 1 alice alice  50M May 15 10:00 piece_ac\n$ cat piece_* > rebuilt.bin && sha256sum big.bin rebuilt.bin\nd2f1...  big.bin\nd2f1...  rebuilt.bin",
    category: "VIEWING TEXT"
  },
  {
    id: "view12",
    question: "Merge split files",
    answer: "cat xaa xab xac > original_file",
    explanation: "Use 'cat' to concatenate split file pieces back together.",
    usage: "Reassemble files that were split for transfer or storage.",
    examples: [
      "cat part_* > restored_file.txt  # Merge all parts",
      "cat xaa xab xac > original.iso  # Specific pieces"
    ],
    memoryTip: "'cat' concatenates files together. Like gluing puzzle pieces back into a complete picture.",
    outputExample: "$ cat part_aa part_ab part_ac > complete_file.txt\n$ ls -lh complete_file.txt\n-rw-r--r-- 1 user user 2.5M Jan 15 10:30 complete_file.txt",
    category: "VIEWING TEXT"
  },
  {
    id: "view13",
    question: "Search with line numbers",
    answer: "grep -n pattern filename",
    explanation: "'grep -n' shows line numbers along with matching lines.",
    usage: "Find text and know exactly where it appears in the file.",
    examples: [
      "grep -n 'error' logfile.txt  # Show line numbers",
      "grep -n -A 2 -B 2 'function' script.js  # Context around matches"
    ],
    memoryTip: "'grep -n' = 'grep with numbers'. Like having page numbers in a book so you can find things easily.",
    outputExample: "$ grep -n 'ERROR' app.log\n15:ERROR: Database connection failed\n23:ERROR: Invalid user input\n67:ERROR: File not found",
    category: "VIEWING TEXT"
  },
  {
    id: "view14",
    question: "Count pattern occurrences",
    answer: "grep -c pattern filename",
    explanation: "'grep -c' counts how many lines contain the pattern.",
    usage: "Get statistics about how often something appears in files.",
    examples: [
      "grep -c 'error' /var/log/apache2/error.log  # Count errors",
      "grep -c '^#' script.sh  # Count comment lines"
    ],
    memoryTip: "'grep -c' = 'grep count'. Like counting how many times a word appears in a document.",
    outputExample: "$ grep -c 'failed' auth.log\n42",
    category: "VIEWING TEXT"
  },
  {
    id: "view15",
    question: "View file with line numbers",
    answer: "cat -n filename",
    explanation: "'cat -n' displays file contents with line numbers prepended.",
    usage: "Reference specific lines when discussing or debugging code.",
    examples: [
      "cat -n script.sh  # Number all lines",
      "cat -b script.sh  # Number non-blank lines only"
    ],
    memoryTip: "'cat -n' = 'cat numbered'. Like having numbered lines in a legal document.",
    outputExample: "$ cat -n todo.txt\n     1\tBuy groceries\n     2\tFinish project\n     3\tCall mom\n     4\tExercise",
    category: "VIEWING TEXT"
  },
  {
    id: "view16",
    question: "Sort a file in reverse order with the `-r` flag (Z→A or 9→0 instead of A→Z, 0→9)",
    answer: "sort -r filename",
    explanation: "By default `sort` orders lines ascending by string comparison: digits, then uppercase letters, then lowercase, then accented chars. `-r` reverses whatever sort order is in effect. Combine with `-n` to get numeric reverse (biggest number first — useful for 'top 10 largest'), `-h` for human-readable sizes (so `1G` correctly sorts above `999M`), or `-V` for version strings (`v1.10` after `v1.2`). The opposite of `-r` is the default; there's no `-a` flag. Sort reads the entire input before printing — for huge files use `sort -S 1G` to give it more RAM, or `sort --parallel=4` to use multiple cores.",
    usage: "Finding the top-N items (biggest files, most frequent words, latest log lines) by piping output to `sort -r | head`.",
    examples: [
      "sort -r names.txt  # Z to A reverse alphabetical",
      "sort -nr scores.txt | head  # top 10 numerical values",
      "du -sh * | sort -hr  # biggest directories first (human-readable sizes)",
      "ls | sort -Vr  # reverse version-aware sort (v2.0 before v1.10)",
      "sort -k2 -nr data.txt  # sort by 2nd column, numerically, descending"
    ],
    memoryTip: "`-r` = Reverse. Most useful in the combo `sort -nr` (numeric reverse) which answers 'who's on top of the leaderboard?' — pipe to `head` for a top-N list.",
    outputExample: "$ cat scores.txt\n42\n7\n100\n23\n$ sort -nr scores.txt\n100\n42\n23\n7",
    category: "VIEWING TEXT"
  },
  {
    id: "view17",
    question: "Show unique lines with counts",
    answer: "sort filename | uniq -c",
    explanation: "Combines 'sort' and 'uniq -c' to count occurrences of each unique line.",
    usage: "Analyze frequency of items in lists or log analysis.",
    examples: [
      "sort access.log | uniq -c  # Count IP addresses",
      "sort words.txt | uniq -c | sort -nr  # Most frequent words"
    ],
    memoryTip: "'sort | uniq -c' = 'sort and count uniques'. Like taking inventory and counting how many of each item you have.",
    outputExample: "$ sort fruits.txt | uniq -c\n      3 apple\n      1 banana\n      5 orange\n      2 pear",
    category: "VIEWING TEXT"
  },
  {
    id: "view18",
    question: "Extract specific bytes",
    answer: "cut -b 1-10 filename",
    explanation: "'cut -b' extracts specific byte positions from each line.",
    usage: "Extract fixed-width data or specific character positions.",
    examples: [
      "cut -b 1-5 file.txt  # First 5 bytes of each line",
      "cut -b 10- file.txt  # From byte 10 to end"
    ],
    memoryTip: "'cut -b' = 'cut bytes'. Like cutting out specific pieces of paper from a document.",
    outputExample: "$ cut -b 1-10 data.txt\nJohn Doe  \nJane Smith\nBob Johns ",
    category: "VIEWING TEXT"
  },
  {
    id: "view19",
    question: "Extract columns by delimiter",
    answer: "cut -d: -f1 filename",
    explanation: "'cut -d' specifies delimiter and '-f' selects fields/columns.",
    usage: "Extract specific columns from structured text like CSV or passwd files.",
    examples: [
      "cut -d: -f1 /etc/passwd  # Extract usernames",
      "cut -d, -f2,4 data.csv  # Extract columns 2 and 4 from CSV"
    ],
    memoryTip: "'cut -d: -f1' = 'cut delimiter colon field 1'. Like cutting out the first column from a spreadsheet.",
    outputExample: "$ cut -d: -f1 /etc/passwd\nroot\nbin\ndaemon\nmail\nftp",
    category: "VIEWING TEXT"
  },
  {
    id: "view20",
    question: "Paste files side by side",
    answer: "paste file1 file2",
    explanation: "'paste' merges corresponding lines from multiple files side by side.",
    usage: "Combine related data from multiple files or create tabular output.",
    examples: [
      "paste names.txt ages.txt  # Combine name and age files",
      "paste -d, file1 file2  # Use comma as separator"
    ],
    memoryTip: "'paste' = 'paste together'. Like taping two pieces of paper side by side.",
    outputExample: "$ paste names.txt ages.txt\nJohn\t25\nJane\t30\nBob\t35",
    category: "VIEWING TEXT"
  },

  // PERMISSIONS
  {
    id: "perm1",
    question: "Use `chmod` with an octal number like `755` to set read/write/execute permissions on a file",
    answer: "chmod 755 filename",
    explanation: "Every Linux file has three permission slots — owner, group, and others — each with three bits: read (r=4), write (w=2), execute (x=1). Add the bits to get one digit per slot. `chmod` ('change mode') applies those digits. `755` means: owner=7 (4+2+1=rwx, full control), group=5 (4+1=r-x, read+execute), others=5 (r-x). Common patterns: `644` for normal files, `755` for scripts and folders, `600` for private files like SSH keys. After running `chmod`, verify with `ls -l` — the first column shows the new mode like `-rwxr-xr-x`.",
    usage: "Make a downloaded script runnable (`chmod 755 script.sh`), lock down a private key (`chmod 600 ~/.ssh/id_ed25519`), or fix a config file the web server can't read.",
    examples: [
      "chmod 644 notes.txt  # owner can edit, group and others read-only",
      "chmod 755 deploy.sh  # everyone can run it; only owner can edit",
      "chmod 600 ~/.ssh/id_ed25519  # SSH refuses to use the key if anyone else can read it",
      "chmod 700 ~/private  # directory only the owner can enter",
      "chmod 775 /srv/shared  # owner + group can write, others read"
    ],
    memoryTip: "Octal digits: r=4, w=2, x=1. Add them up per slot, in order owner-group-others. `755` = `rwx r-x r-x` = 'I can do anything, you can look and run'.",
    outputExample: "$ chmod 755 deploy.sh\n$ ls -l deploy.sh\n-rwxr-xr-x 1 alice alice 1240 May 15 10:02 deploy.sh",
    category: "PERMISSIONS"
  },
  {
    id: "perm2",
    question: "Use `chown user:group filename` to change which user and group own a file",
    answer: "chown user:group filename",
    explanation: "`chown` ('change owner') reassigns the user and/or group that owns a file. The owner is shown as the third column of `ls -l`; the group is the fourth. Syntax is `chown NEWUSER:NEWGROUP path`. You can omit one side: `chown alice file` changes only the user; `chown :devs file` changes only the group. Because changing ownership can give someone full control of a file, you almost always need `sudo`. Add `-R` to recurse into a directory tree. Common gotcha after extracting a tarball as root — the files end up owned by root and the regular user can't write them.",
    usage: "Hand off a project folder to a new owner, fix files extracted as root, or give the web server (e.g. `www-data`) ownership of `/var/www` so it can write uploads.",
    examples: [
      "sudo chown alice file.txt  # change owner only",
      "sudo chown alice:developers project/  # set both owner and group",
      "sudo chown :www-data /var/www/uploads  # change group only — note the leading colon",
      "sudo chown -R www-data:www-data /var/www/html  # recurse through every file/folder inside",
      "sudo chown --reference=template.conf new.conf  # copy ownership from another file"
    ],
    memoryTip: "`chown` = 'change owner'. Format mirrors `ls -l` columns: `USER:GROUP`. The colon is the separator; either side can be omitted.",
    outputExample: "$ ls -l report.pdf\n-rw-r--r-- 1 root root 18K May 15 09:00 report.pdf\n$ sudo chown alice:staff report.pdf\n$ ls -l report.pdf\n-rw-r--r-- 1 alice staff 18K May 15 09:00 report.pdf",
    category: "PERMISSIONS"
  },
  {
    id: "perm3",
    question: "Show file permissions",
    answer: "ls -l filename",
    explanation: "'ls -l' displays permissions in the first column as rwx for owner/group/others.",
    usage: "Check current permissions and identify security issues.",
    examples: [
      "ls -l file.txt  # Check permissions",
      "ls -ld directory/  # Check directory permissions",
      "ls -l /etc/passwd  # Check system file permissions"
    ],
    memoryTip: "ls = list. Like listing your shopping items.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Pictures  Videos",
    category: "PERMISSIONS"
  },
  {
    id: "perm4",
    question: "Use `chmod +x` to add the execute permission to a file (turning a script into a runnable program)",
    answer: "chmod +x filename",
    explanation: "Linux files have three permission bits each for three classes: read (`r`), write (`w`), execute (`x`) for User/owner, Group, Other. A shell script that lacks the `x` bit cannot be run directly — you'd get `Permission denied` even though you have read access. `chmod +x` ('change mode, add execute') flips on the `x` bit for whoever the umask currently allows (usually all three classes, resulting in `rwxr-xr-x` on a file that was `rw-r--r--`). To be precise about WHO gets execute, use `u+x` (only user/owner), `g+x` (group), `o+x` (others), or `a+x` (all = same as plain `+x` modulo umask). Inverse is `chmod -x` to remove execute. Note: the file must also have a valid shebang line like `#!/bin/bash` to be runnable as `./script.sh`.",
    usage: "After writing a new shell/Python/Node script, you need `chmod +x` once before `./script.sh` will work. Also after `git clone` if the repo's scripts lost the bit (Windows tarballs are the usual culprit).",
    examples: [
      "chmod +x deploy.sh  # turn a script into a runnable program",
      "chmod +x *.sh  # all .sh files in current folder",
      "chmod u+x private.sh  # only owner can execute (not group/others)",
      "chmod a+x public-tool.sh  # explicitly everyone (a = all)",
      "chmod -x script.sh  # remove execute bit again"
    ],
    memoryTip: "`+x` = add eXecute. The three permission bits in `ls -l` are `rwx` — read/write/execute. If you see `-rw-r--r--` and the file won't run, it's missing the `x`. Mnemonic: `+x` = 'plus eXecute'.",
    outputExample: "$ ls -l deploy.sh\n-rw-r--r-- 1 alice alice 142 May 15 10:00 deploy.sh\n$ ./deploy.sh\nbash: ./deploy.sh: Permission denied\n$ chmod +x deploy.sh\n$ ls -l deploy.sh\n-rwxr-xr-x 1 alice alice 142 May 15 10:00 deploy.sh\n$ ./deploy.sh\nDeploying...",
    category: "PERMISSIONS"
  },
  {
    id: "perm5",
    question: "Set permissions recursively",
    answer: "chmod -R 755 directory",
    explanation: "'chmod -R' applies permissions recursively to all files and subdirectories.",
    usage: "Set permissions for entire directory trees consistently.",
    examples: [
      "chmod -R 755 ~/bin  # Make personal scripts executable",
      "chmod -R 644 ~/public_html  # Web files readable",
      "chmod -R g+w shared/  # Group write access to shared folder"
    ],
    memoryTip: "chmod = change permissions. Like adjusting who can access something.",
    outputExample: "$ chmod 755 script.sh\n$ ls -l script.sh\n-rwxr-xr-x 1 user user",
    category: "PERMISSIONS"
  },
  {
    id: "perm6",
    question: "Use the `chgrp` command to change which Unix group owns a file",
    answer: "chgrp group filename",
    explanation: "Every Linux file has TWO owners: a user owner and a group owner. The user owner is one person; the group owner is a named set of accounts (e.g. `developers`, `www-data`, `audio`). The middle triple of `ls -l` perms (`rw-r--r--` → `r--` for group) governs what group members can do. `chgrp NEWGROUP file` reassigns the group-owner — you must already be in `NEWGROUP` (check with `groups`) OR be root. Companion command: `chown user:group file` changes both at once. Add `-R` to recurse into a directory tree. The list of groups lives in `/etc/group`.",
    usage: "Setting `chgrp www-data /var/www/site` so the web server (running as the `www-data` user, in group `www-data`) can read your site files. Sharing a folder between teammates via a shared group like `developers`.",
    examples: [
      "chgrp developers project/  # set the group owner of project/ to 'developers'",
      "sudo chgrp -R www-data /var/www  # recursive — every file inside gets the new group",
      "chown alice:developers report.txt  # change BOTH user and group at once",
      "ls -l report.txt  # second 'word' on the line is the group name",
      "groups  # show which groups YOU are in (you can only chgrp to those, unless root)"
    ],
    memoryTip: "`chgrp` = CHange GRouP. Sibling of `chown` (change owner) and `chmod` (change mode). All three start with `ch` for 'change'. If you get 'Operation not permitted', it usually means you're not a member of the target group — run `groups` to check.",
    outputExample: "$ ls -l report.txt\n-rw-r--r-- 1 alice alice 1024 May 15 10:00 report.txt\n$ sudo chgrp developers report.txt\n$ ls -l report.txt\n-rw-r--r-- 1 alice developers 1024 May 15 10:00 report.txt",
    category: "PERMISSIONS"
  },
  {
    id: "perm7",
    question: "Use the `umask` command to set the default permission bits stripped from newly-created files",
    answer: "umask 022",
    explanation: "Whenever you `touch` a file or `mkdir` a folder, the kernel asks: 'what permissions should the new thing get?' The default starting point is `666` for files (rw for all) and `777` for directories (rwx for all). Then it subtracts the bits in your `umask` ('user mask') to produce the actual permissions. So `umask 022` means: subtract `022` → files end up `644` (`rw-r--r--`) and directories `755` (`rwxr-xr-x`). That's the common default. `umask 077` is paranoid mode: subtract `077` → files `600` (only owner reads/writes), directories `700` (only owner enters). Set in `~/.bashrc` to make it permanent. Each digit is for owner/group/other in that order. `umask` with no args prints the current value.",
    usage: "Hardening a shared server (set `umask 077` in `/etc/profile` so new user files default to private). Loosening permissions on a build server (`umask 002` so group members can edit each other's outputs).",
    examples: [
      "umask  # print current umask, e.g. 0022",
      "umask -S  # symbolic form: u=rwx,g=rx,o=rx (easier to read)",
      "umask 022  # standard: new files 644, new dirs 755",
      "umask 077  # private: new files 600, new dirs 700 — only you",
      "umask 002  # group-friendly: new files 664, new dirs 775 (collaboration on shared dirs)"
    ],
    memoryTip: "`umask` = User MASK. Think 'subtract-from-max'. Numerically: file_max(666) - umask = actual_perm. So umask of `022` → `666 - 022 = 644`. The leading zero you sometimes see (`0022`) is the special-bits digit (setuid/sticky), almost always 0.",
    outputExample: "$ umask\n0022\n$ umask -S\nu=rwx,g=rx,o=rx\n$ touch newfile && ls -l newfile\n-rw-r--r-- 1 alice alice 0 May 15 10:00 newfile\n$ umask 077\n$ touch secret && ls -l secret\n-rw------- 1 alice alice 0 May 15 10:00 secret",
    category: "PERMISSIONS"
  },
  {
    id: "perm8",
    question: "Print the username of the EFFECTIVE user this shell is running as with the `whoami` command",
    answer: "whoami",
    explanation: "`whoami` prints one line: the effective username of the current process. 'Effective' matters here — after `sudo`, your effective user becomes `root` even though your LOGIN user (the one who typed the password) was someone else. `whoami` shows the effective one. To see who originally logged in, use `who am i` (with a space — different command!) or `logname`, which print the real login user. The closely related `id` gives MUCH more info: uid, gid, all supplementary groups, and the SELinux context if applicable. Beginners often confuse `whoami` and `who`: `who` lists ALL users currently logged in across all terminals; `whoami` is only about your shell.",
    usage: "Confirming you've actually become root after `sudo -i`. Scripts that need to branch on 'am I running as root?'. Sanity check after switching users with `su`.",
    examples: [
      "whoami  # who is this shell running as?",
      "sudo whoami  # prints 'root' — proves sudo elevated successfully",
      "who am i  # different! shows the LOGIN user, not effective user",
      "id  # full identity: uid, gid, all groups",
      "[ \"$(whoami)\" = root ] || { echo 'must be root'; exit 1; }  # guard-clause idiom in scripts"
    ],
    memoryTip: "`whoami` = 'who am I?' (one word). Returns EFFECTIVE user. Don't confuse with `who am i` (three words = login user) or `who` (all logged-in users system-wide). For full identity details use `id`.",
    outputExample: "$ whoami\nalice\n$ sudo whoami\nroot\n$ sudo -u bob whoami\nbob\n$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker)",
    category: "PERMISSIONS"
  },
  {
    id: "perm9",
    question: "Open an interactive root shell with `sudo -i` (so you stay as root for multiple commands)",
    answer: "sudo -i",
    explanation: "`sudo COMMAND` runs ONE command as root; you're back to your normal user the moment it finishes. `sudo -i` ('initial login') drops you into a fresh ROOT shell that mimics a real root login: it reads root's `~/.bashrc`, sets `$HOME=/root`, `$PATH` to root's path, and changes the prompt (usually to `#`). You stay in this shell — type `exit` or press `Ctrl+D` to return to your user. Compare alternatives: `sudo su -` is the old-school way (functionally similar). `sudo -s` gives a root shell but KEEPS your environment (your `$HOME`, your aliases) — useful when you want root powers but still your own settings. Never set a root password and use `su` on Ubuntu — the modern pattern is `sudo` only.",
    usage: "When you have a chain of admin tasks (install several packages, edit configs, restart services) and don't want to prefix every line with `sudo`. Also for inspecting `/root` or running commands that need root's clean PATH.",
    examples: [
      "sudo -i  # become root, fresh root environment — prompt changes to #",
      "sudo -s  # root shell but keep YOUR environment ($HOME, aliases)",
      "sudo apt update  # one-off command — no shell switch needed",
      "exit  # leave the root shell, back to your user",
      "sudo -u alice -i  # become 'alice' (not root) with her login environment"
    ],
    memoryTip: "`sudo -i` = `i`nitial-login as root (fresh env). `sudo -s` = `s`hell (your env). `sudo COMMAND` = one-shot. Mental rule: prefer one-shot `sudo COMMAND` 95% of the time — `-i` is for sustained admin sessions only.",
    outputExample: "$ whoami\nalice\n$ sudo -i\n[sudo] password for alice: ******\nroot@ubuntu:~# whoami\nroot\nroot@ubuntu:~# pwd\n/root\nroot@ubuntu:~# exit\nlogout\n$ whoami\nalice",
    category: "PERMISSIONS"
  },
  {
    id: "perm10",
    question: "Use the `groups` command to list which Unix groups your account belongs to",
    answer: "groups",
    explanation: "A user can be in MANY groups simultaneously — one 'primary' group (used as the group-owner of files you create) plus any number of 'supplementary' groups. Membership unlocks access: being in `sudo` lets you run sudo, being in `docker` lets you talk to the Docker daemon, being in `audio` lets you use the sound card on some setups, being in `www-data` lets you edit the web root. `groups` prints them space-separated, primary first. Same info comes from `id -Gn`. A caveat: after `usermod -aG newgroup yourname` you must LOG OUT and back in (or run `newgrp newgroup`) for the new group to appear — group membership is sealed in at login.",
    usage: "Diagnosing 'permission denied' errors (does your account have the right group?). Verifying you're in `sudo` before assuming you can run admin commands. Checking if a fresh user can access docker without `sudo`.",
    examples: [
      "groups  # your group memberships",
      "groups alice  # another user's group memberships",
      "id -Gn  # same info, alternative command",
      "id  # full identity: uid, gid, all groups, plus SELinux context if relevant",
      "getent group docker  # who else is in the 'docker' group?"
    ],
    memoryTip: "`groups` literally answers 'which groups?'. Don't confuse with `getent group NAME` which asks the opposite — 'who's IN this group?'. If you just added yourself to a group with `usermod -aG`, you won't see it in `groups` until next login.",
    outputExample: "$ groups\nalice sudo docker users\n$ groups bob\nbob: bob audio video\n$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker),100(users)",
    category: "PERMISSIONS"
  },
  {
    id: "perm11",
    question: "Check file attributes",
    answer: "lsattr filename",
    explanation: "'lsattr' displays special file attributes like immutable or append-only.",
    usage: "Check filesystem-level attributes that affect file behavior beyond permissions.",
    examples: [
      "lsattr important.txt  # Check attributes",
      "lsattr -d directory/  # Directory attributes",
      "lsattr -R /etc/  # Recursive check"
    ],
    memoryTip: "'lsattr' = 'list attributes'. Like checking the special properties of a file at the filesystem level.",
    outputExample: "$ lsattr config.txt\n----i-------- config.txt",
    category: "PERMISSIONS"
  },
  {
    id: "perm12",
    question: "Make file immutable",
    answer: "sudo chattr +i filename",
    explanation: "'chattr +i' makes a file immutable - cannot be modified, deleted, or renamed.",
    usage: "Protect critical system files from accidental changes or deletion.",
    examples: [
      "sudo chattr +i /etc/shadow  # Protect password file",
      "sudo chattr -i filename  # Remove immutable flag",
      "lsattr filename  # Verify immutable status"
    ],
    memoryTip: "'chattr +i' = 'change attribute immutable'. Like locking a file so even root can't change it accidentally.",
    outputExample: "$ sudo chattr +i critical.conf\n$ rm critical.conf\nrm: cannot remove 'critical.conf': Operation not permitted",
    category: "PERMISSIONS"
  },
  {
    id: "perm13",
    question: "Set ACL permissions",
    answer: "setfacl -m u:user:rw filename",
    explanation: "'setfacl -m' sets access control list permissions for specific users.",
    usage: "Grant fine-grained permissions to individual users beyond standard rwx.",
    examples: [
      "setfacl -m u:john:rw file.txt  # John gets read/write",
      "setfacl -m g:devs:rwx project/  # Dev group full access",
      "getfacl file.txt  # Check ACL permissions"
    ],
    memoryTip: "'setfacl -m' = 'set file ACL modify'. Like creating custom access rules for specific people.",
    outputExample: "$ setfacl -m u:alice:rw document.txt\n$ getfacl document.txt\n# file: document.txt\n# owner: user\n# group: user\nuser::rw-\nuser:alice:rw-\ngroup::r--\nother::r--",
    category: "PERMISSIONS"
  },
  {
    id: "perm14",
    question: "Check ACL permissions",
    answer: "getfacl filename",
    explanation: "'getfacl' displays access control lists showing detailed permissions.",
    usage: "View complex permission setups that go beyond basic owner/group/other permissions.",
    examples: [
      "getfacl file.txt  # Show ACL details",
      "getfacl -d directory/  # Default ACL for directory",
      "getfacl -R directory/  # Recursive ACL display"
    ],
    memoryTip: "'getfacl' = 'get file ACL'. Like reading the detailed permission list that shows exactly who can do what.",
    outputExample: "$ getfacl shared.txt\n# file: shared.txt\n# owner: user\n# group: user\nuser::rw-\nuser:bob:r--\ngroup::r--\ngroup:devs:rw-\nother::---",
    category: "PERMISSIONS"
  },
  {
    id: "perm15",
    question: "Find setuid files",
    answer: "find / -perm -4000",
    explanation: "'find -perm -4000' locates files with the setuid bit set.",
    usage: "Audit system security by finding programs that run with elevated privileges.",
    examples: [
      "find /usr -perm -4000  # Find setuid in /usr",
      "find / -perm -2000  # Find setgid files",
      "find / -perm /6000  # Find any suid/sgid files"
    ],
    memoryTip: "'find -perm -4000' = 'find setuid'. Like searching for programs that can run as root when executed by users.",
    outputExample: "$ find /usr/bin -perm -4000\n/usr/bin/sudo\n/usr/bin/su\n/usr/bin/passwd",
    category: "PERMISSIONS"
  },
  {
    id: "perm16",
    question: "Find world-writable files",
    answer: "find / -perm -2",
    explanation: "'find -perm -2' finds files writable by anyone (world-writable).",
    usage: "Identify security risks from files that anyone can modify.",
    examples: [
      "find /home -perm -2  # Check home directories",
      "find /tmp -perm -2  # Check temp files",
      "find /var -perm -2 ! -type l  # Exclude symlinks"
    ],
    memoryTip: "'find -perm -2' = 'find world-writable'. Like finding files that anyone on the system can modify.",
    outputExample: "$ find /tmp -perm -2 -type f\n/tmp/tempfile.txt\n/tmp/cache.dat",
    category: "PERMISSIONS"
  },
  {
    id: "perm17",
    question: "Check sudo privileges",
    answer: "sudo -l",
    explanation: "'sudo -l' lists commands you are allowed to run with sudo privileges.",
    usage: "Verify what administrative commands you can execute as root.",
    examples: [
      "sudo -l  # List your sudo permissions",
      "sudo -l -U alice  # Check alice's permissions",
      "sudo whoami  # Test sudo access"
    ],
    memoryTip: "'sudo -l' = 'sudo list'. Like checking your admin privileges to see what you can do as root.",
    outputExample: "$ sudo -l\nUser user may run the following commands on this host:\n    (ALL : ALL) ALL",
    category: "PERMISSIONS"
  },
  {
    id: "perm18",
    question: "Change ownership recursively",
    answer: "sudo chown -R user:group directory/",
    explanation: "'chown -R' changes ownership of directory and all contents recursively.",
    usage: "Transfer ownership of entire directory trees to different users or groups.",
    examples: [
      "sudo chown -R www-data:www-data /var/www  # Web server ownership",
      "sudo chown -R :developers /project/  # Change group only",
      "sudo chown -R user:user /home/olduser/  # Transfer user files"
    ],
    memoryTip: "'chown -R' = 'chown recursive'. Like giving away a whole folder and everything inside it to someone else.",
    outputExample: "$ sudo chown -R apache:apache /var/www/html/\n$ ls -ld /var/www/html/\ndrwxr-xr-x 2 apache apache 4096 Jan 15 10:30 /var/www/html/",
    category: "PERMISSIONS"
  },
  {
    id: "perm19",
    question: "Set sticky bit on directory",
    answer: "chmod +t directory/",
    explanation: "'chmod +t' sets the sticky bit, allowing only file owners to delete their own files.",
    usage: "Create shared directories where users can only delete their own files.",
    examples: [
      "chmod +t /tmp/  # Sticky bit on temp directory",
      "chmod 1777 shared/  # Sticky bit with full permissions",
      "ls -ld directory/  # Check for 't' in permissions"
    ],
    memoryTip: "'chmod +t' = 'chmod sticky'. Like a directory where you can only touch your own stuff, not others'.",
    outputExample: "$ chmod +t shared/\n$ ls -ld shared/\ndrwxrwxrwt 2 user user 4096 Jan 15 10:30 shared/",
    category: "PERMISSIONS"
  },
  {
    id: "perm20",
    question: "Show numeric permissions",
    answer: "stat -c '%a' filename",
    explanation: "'stat -c '%a'' displays file permissions in numeric (octal) format.",
    usage: "Get permission numbers for scripting or configuration files.",
    examples: [
      "stat -c '%a' file.txt  # Show octal permissions",
      "stat -c '%a %n' *  # Permissions and filenames",
      "ls -l | awk '{print $1}'  # Alternative method"
    ],
    memoryTip: "'stat -c '%a'' = 'stat octal'. Like getting the numeric code that represents the permission settings.",
    outputExample: "$ stat -c '%a' script.sh\n755",
    category: "PERMISSIONS"
  },

  // PIPES & REDIRECT
  {
    id: "pipe1",
    question: "Save a command's stdout to a file with `>` (overwriting any existing content)",
    answer: "command > file.txt",
    explanation: "Every Unix process has three default channels: stdin (0, where input comes from), stdout (1, where normal output goes), stderr (2, where errors go). The `>` operator redirects stdout from your terminal into a FILE — the file is created if it doesn't exist, and TRUNCATED to zero bytes if it does. Important: `>` only captures stdout (channel 1); error messages on stderr still print to your terminal. Common foot-gun: `cat file > file` empties the file because the shell opens-and-truncates `> file` BEFORE `cat` starts reading. Use `>|` to override `set -o noclobber` if your shell is set to refuse overwriting existing files.",
    usage: "Capturing a command's output for later (`ls > filelist.txt`), generating a config file from a template, or dumping query results to a file.",
    examples: [
      "ls -lh > filelist.txt  # save directory listing — file is overwritten if it existed",
      "echo 'Hello' > greeting.txt  # one-line file creation",
      "date > timestamp.txt  # snapshot current date",
      "make > build.log  # capture stdout; errors still go to terminal",
      "> empty.txt  # zero-byte 'truncate' trick — same as `: > empty.txt`"
    ],
    memoryTip: "`>` = arrow pointing INTO a file. ONE arrow = overwrite. TWO arrows (`>>`) = append. Mnemonic: a single `>` is a sharp 'replace' — it clobbers. Only catches stdout (channel 1); for stderr use `2>`.",
    outputExample: "$ echo 'hello' > greeting.txt\n$ cat greeting.txt\nhello\n$ echo 'world' > greeting.txt\n$ cat greeting.txt\nworld",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe2",
    question: "Append a command's stdout to a file with `>>` (preserving existing content)",
    answer: "command >> file.txt",
    explanation: "Same as `>` but the file is opened in APPEND mode: new output is added to the END of whatever was already there, instead of replacing it. If the file doesn't exist it's created empty first. Like `>`, it only captures stdout — use `2>>` to append stderr. Appending is the right pattern for log files: many writers can append to the same log without stepping on each other (kernel guarantees atomic appends below the pipe-buffer size, usually 4096 bytes per line). Note `>>` does NOT lock the file across processes — if two scripts append giant blobs simultaneously, they can interleave.",
    usage: "Building a log file across many runs of a script. Appending a new line to your `~/.bashrc`. Accumulating timestamps in a daily journal.",
    examples: [
      "echo 'Build started' >> build.log  # add one line to the log",
      "date >> access.log  # append a timestamp; existing log preserved",
      "echo 'export PATH=$PATH:~/bin' >> ~/.bashrc  # add a line to your shell config",
      "make 2>> errors.log  # APPEND stderr to errors.log",
      "command >> out.log 2>&1  # append both stdout and stderr (see pipe6)"
    ],
    memoryTip: "ONE `>` = overwrite. TWO `>>` = append (think 'extra hop, extra arrow'). Pair-think: `> file` is destructive once you press Enter — `>> file` is safe to repeat. When in doubt about a log file, always use `>>`.",
    outputExample: "$ echo 'line 1' > log.txt\n$ echo 'line 2' >> log.txt\n$ echo 'line 3' >> log.txt\n$ cat log.txt\nline 1\nline 2\nline 3",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe3",
    question: "Feed a file as stdin to a command using `<` (input redirection)",
    answer: "command < input.txt",
    explanation: "`<` is the mirror of `>`: it sends the contents of a file INTO a command's stdin. Most commands accept a filename as an argument (`sort file.txt`), making `<` redundant in those cases. But some commands ONLY read stdin (no filename arg), like `mail` or `tr`, and `<` is how you give them a file. Subtle but useful difference: `wc file.txt` prints `42 file.txt` (with the name); `wc < file.txt` prints `42` (just the number) because `wc` only knows about a stream, not a filename. You can chain redirections: `command < input.txt > output.txt 2> errors.txt` sets all three channels at once.",
    usage: "Sending an email body from a file (`mail -s subj you@example.com < body.txt`). Feeding a SQL script into `mysql` or `psql`. Getting `wc` output without a filename suffix for use in scripts.",
    examples: [
      "tr 'a-z' 'A-Z' < notes.txt  # uppercase a file (tr can't take a filename arg)",
      "mysql mydb < schema.sql  # run SQL script against the 'mydb' database",
      "mail -s 'Daily report' boss@co.com < report.txt  # email a file as body",
      "wc -l < /etc/passwd  # line count, no filename in output (cleaner for scripts)",
      "while read line; do echo \"got: $line\"; done < urls.txt  # bash loop over a file"
    ],
    memoryTip: "`<` = arrow pointing FROM a file INTO the command. Mirror image of `>`. Most everyday commands don't need it (they accept filenames), but for tools that ONLY read stdin (`tr`, `mail`, DB clients), `<` is the bridge.",
    outputExample: "$ cat names.txt\ncharlie\nalice\nbob\n$ sort < names.txt\nalice\nbob\ncharlie\n$ wc -l < /etc/passwd\n47",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe4",
    question: "Connect the stdout of one command into the stdin of another using a pipe `|`",
    answer: "command1 | command2",
    explanation: "The `|` ('pipe') character is the heart of Unix philosophy: do one thing well, compose. The kernel creates a buffer (~64KB) and connects command1's stdout to command2's stdin. They run CONCURRENTLY — command2 doesn't wait for command1 to finish; it processes data as it streams. This means infinite output works: `yes | head -3` returns instantly. ONLY stdout flows through the pipe — stderr still prints to your terminal. To pipe stderr too, use `|&` (bash 4+) or `2>&1 |`. Pipes are why `find ... | xargs ...` works for huge result sets and why `tail -f log | grep ERROR` shows live filtered logs.",
    usage: "Filtering output (`ps aux | grep firefox`), counting (`wc -l`), sorting (`sort | uniq -c | sort -nr` finds most common items), transforming text in a chain.",
    examples: [
      "ls | grep '.txt'  # list current dir, keep only lines containing '.txt'",
      "ps aux | grep firefox  # which firefox processes are running?",
      "cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head  # top-10 visitor IPs",
      "echo 'hello' | tr 'a-z' 'A-Z'  # HELLO",
      "find . -type f | wc -l  # count files in this tree"
    ],
    memoryTip: "`|` (vertical bar) = pipe. Reads left-to-right like a flowchart: 'take this, then this, then this'. Stdout of left → stdin of right. The fundamental Unix combinator — small tools, big results.",
    outputExample: "$ ps aux | grep firefox | grep -v grep\nalice   1234  2.1  4.5 ... firefox\nalice   1235  0.1  0.5 ... firefox-content\n$ ls | wc -l\n12",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe5",
    question: "Redirect only stderr (file descriptor 2) to a file with `2>`",
    answer: "command 2> error.log",
    explanation: "Every process has three numbered I/O channels (file descriptors): `0` = stdin, `1` = stdout (normal output), `2` = stderr (error messages). Plain `>` is short for `1>` and only catches stdout. To capture errors, prefix the `>` with the number `2`: `command 2> errors.log`. This lets you SEPARATE normal output from errors — useful because errors in the middle of valid output mess up parsing. To redirect BOTH separately: `command > out.log 2> err.log`. To MERGE both into the same file: `command > all.log 2>&1` (read 'redirect channel 2 to wherever channel 1 currently points'). Modern bash also has `&>` as a shortcut for both.",
    usage: "Silencing noisy errors (`find / -name x 2> /dev/null` discards 'Permission denied' spam). Separating compiler errors from compiler output. Logging script failures.",
    examples: [
      "find / -name passwd 2> /dev/null  # discard 'Permission denied' to /dev/null",
      "make 2> errors.log  # only errors captured; build output still on screen",
      "command > out.log 2> err.log  # separate files for each stream",
      "command > all.log 2>&1  # MERGE: send stderr to wherever stdout goes (the file)",
      "command 2>&1 | grep -i error  # pipe both streams to grep (after merge)"
    ],
    memoryTip: "`1>` = stdout, `2>` = stderr. The number is the file descriptor. `2>&1` means 'channel 2 follows channel 1's current destination'. Order matters: `> file 2>&1` merges to file; `2>&1 > file` keeps stderr on the terminal (because at the time `2>&1` runs, `1` was still the terminal).",
    outputExample: "$ ls /nonexistent\nls: cannot access '/nonexistent': No such file or directory\n$ ls /nonexistent 2> err.log\n$ cat err.log\nls: cannot access '/nonexistent': No such file or directory\n$ ls /nonexistent 2> /dev/null  # error silenced\n$",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe6",
    question: "Send BOTH stdout and stderr to the same file with the `&>` shorthand",
    answer: "command &> file.txt",
    explanation: "`&>` is bash shorthand for 'redirect both stdout (1) and stderr (2) to this file'. It's equivalent to `> file.txt 2>&1` but shorter and harder to mess up. CAVEATS: (1) `&>` is bash/zsh-specific — NOT POSIX, so it won't work in `sh` or `dash` (Debian's /bin/sh). For maximum portability use the longer `> file 2>&1` form. (2) Order matters in the long form: `> file 2>&1` merges stderr INTO the file's stdout destination, but `2>&1 > file` only redirects stdout (stderr was duped from the terminal BEFORE the file open). Always put the file redirection first when using the long form. `&>>` (next question) is the APPEND variant.",
    usage: "Capturing all output of a build, a script, or a cron job into one log file when you don't care which channel produced what. Silencing everything with `&> /dev/null`.",
    examples: [
      "make &> build.log  # capture stdout AND stderr in one file",
      "./script.sh &> /dev/null  # silence everything",
      "command > all.log 2>&1  # POSIX-portable equivalent — works in sh too",
      "command 2>&1 > all.log  # WRONG ORDER — stderr still goes to terminal",
      "command &> >(grep -i error)  # advanced: process substitution to filter combined stream"
    ],
    memoryTip: "`&>` = 'redirect & (and) everything-output-related'. Bash-only. Portable equivalent: `> file 2>&1` (note the order: redirect 1 FIRST, then dup 2 to 1). To APPEND both streams, use `&>>` instead.",
    outputExample: "$ ./buggy.sh &> debug.log\n$ cat debug.log\nStarting...\nls: cannot access '/nope': No such file or directory\nDone, with errors.\n$ ls /nope &> /dev/null  # silently swallow output AND error\n$ echo $?  # but exit code still reflects success/failure\n2",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe7",
    question: "Feed a multi-line block of literal text into a command's stdin using a `<< EOF ... EOF` here-document",
    answer: "command << EOF\ncontent\nEOF",
    explanation: "A 'here-document' (heredoc) is bash syntax for INLINING multi-line input into a command without making a temp file. Syntax: `command << MARKER` on one line, then any number of lines, then `MARKER` ALONE on its own line ends the block. The MARKER is conventionally `EOF` but can be any unquoted word — `END`, `SQL`, `_FIN`. Variable expansion happens inside ($vars and command substitution work) — to DISABLE that and get literal text, QUOTE the marker on the first line: `<< 'EOF'`. The variant `<<-` (dash) STRIPS leading TABS from each line, which lets you indent a heredoc inside an indented script. Use case overlap with `echo` and `cat << EOF > file` is huge — heredocs replace 'awkward escape-everything echo strings'.",
    usage: "Writing config files from a script (`cat << EOF > /etc/myapp.conf ...`). Embedding SQL queries (`mysql -u user db << SQL ... SQL`). Passing multi-line input to `ssh server bash << SCRIPT ... SCRIPT`.",
    examples: [
      "cat << EOF > greeting.txt\nHello\nWorld\nEOF",
      "cat << 'EOF'\n$HOME is not expanded\nEOF",
      "mysql mydb << SQL\nSELECT * FROM users WHERE id = 1;\nSQL",
      "ssh server 'bash -s' << 'REMOTE'\necho running on $(hostname)\nREMOTE",
      "<<- INDENTED\n\t  leading tabs are stripped\n\tINDENTED"
    ],
    memoryTip: "`<<` = here-document (literal text input). Pick any MARKER (convention: `EOF`). Quote it (`<< 'EOF'`) to TURN OFF variable expansion. `<<-` strips leading tabs for clean indented blocks. Cousin: `<<<` (three) = here-STRING (one line of input).",
    outputExample: "$ cat << EOF > note.txt\n> Hello, $USER\n> Today is $(date +%A)\n> EOF\n$ cat note.txt\nHello, alice\nToday is Friday\n$ cat << 'EOF'\n> $USER stays literal\n> EOF\n$USER stays literal",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe8",
    question: "Throw away a command's output by redirecting it to the special device `/dev/null`",
    answer: "command > /dev/null",
    explanation: "`/dev/null` is a special character device that accepts any amount of input and produces nothing — the universal black hole / 'bit bucket'. Redirecting to it discards the data. `command > /dev/null` silences stdout only. `command 2> /dev/null` silences only errors (useful with `find` to drop 'Permission denied' spam). `command > /dev/null 2>&1` (or the shorter `command &> /dev/null`) silences EVERYTHING. The COMMAND still runs and still returns its exit code — only the visible output is suppressed. Reading FROM `/dev/null` gives instant EOF (zero bytes), useful as 'no input' for tools that demand stdin. Don't confuse `/dev/null` (discard) with `/dev/zero` (infinite zero-bytes source).",
    usage: "Silencing chatty commands in scripts. Suppressing 'Permission denied' noise from `find`. Background daemons that you only care about by exit-code, not their banter.",
    examples: [
      "find / -name passwd 2> /dev/null  # find without 'Permission denied' spam",
      "command > /dev/null 2>&1  # discard EVERYTHING — caller only sees exit code",
      "command &> /dev/null  # same, bash shorthand",
      "if ping -c1 host > /dev/null 2>&1; then echo up; fi  # silent reachability check",
      "command < /dev/null  # provide empty stdin (instant EOF)"
    ],
    memoryTip: "`/dev/null` = the bit bucket. Anything written there vanishes. Reading from it = empty. Mnemonic: 'write-only black hole'. To silence ONLY errors, use `2> /dev/null`. To silence everything, `> /dev/null 2>&1` or `&> /dev/null`.",
    outputExample: "$ find / -name passwd 2>&1 | wc -l\n452\n$ find / -name passwd 2> /dev/null | wc -l\n3\n$ ls /nope > /dev/null 2>&1\n$ echo $?  # exit code preserved\n2",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe9",
    question: "Chain commands so the second runs ONLY IF the first succeeded using `&&`",
    answer: "command1 && command2",
    explanation: "`&&` is logical AND: command2 runs only if command1's exit code is 0 (success). Every Unix command returns an integer exit code on completion; convention is 0=success, non-zero=failure. `&&` checks that code and short-circuits if it's non-zero. This is the bedrock of safe scripting — `cd /tmp && rm -rf junk/` will NEVER run the rm if cd fails (e.g. /tmp doesn't exist). Pair with `||` (logical OR) for if-success-else patterns: `cmd && echo ok || echo fail`. Beware of subtle trap: `A && B || C` is NOT exactly 'if A then B else C' — if B FAILS, C still runs. For real if/else use `if A; then B; else C; fi`. Chains: `A && B && C` runs all three only if each previous one succeeded.",
    usage: "Defensive scripting: `mkdir build && cd build && make`. Compound install steps: `./configure && make && sudo make install`. Conditional execution: `test -f file && cat file`.",
    examples: [
      "mkdir build && cd build  # cd only if mkdir succeeded (no orphan directory bug)",
      "make && sudo make install  # install only if build succeeded",
      "ping -c1 host && echo reachable  # echo only if ping returned 0",
      "command || echo 'FAILED'  # opposite: echo only if command FAILED",
      "test -f config.toml && source config.toml || echo 'no config'"
    ],
    memoryTip: "`&&` = 'and only then'. Mirror operator: `||` = 'or else'. Mental model: short-circuit boolean logic — bash stops evaluating once the result is decided. Every chain step DEPENDS on its predecessor's exit code; use `;` instead if you want sequential-but-independent.",
    outputExample: "$ true && echo ok\nok\n$ false && echo ok\n$ true || echo nope\n$ false || echo nope\nnope\n$ mkdir /tmp/test && cd /tmp/test && pwd\n/tmp/test",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe10",
    question: "Run multiple commands sequentially, regardless of each one's success, using `;` (semicolon)",
    answer: "command1 ; command2",
    explanation: "`;` is the simplest command separator: run command1, wait for it to finish, then run command2 — INDEPENDENT of whether command1 succeeded or failed. Compare: `&&` (run next only on success), `||` (run next only on failure), `&` (run in background, don't wait). `;` is what you want when commands are unrelated: `date; uptime; df -h`. Dangerous when commands SHOULD be related — `cd /tmp ; rm -rf *` will run the rm in your CURRENT directory if the cd fails, which is exactly the kind of accident `&&` prevents. Treat `;` as 'I really don't care what the previous one did'.",
    usage: "Running a series of independent reports/checks. Cleanup sequences where each step is independently safe. One-liners with unrelated commands.",
    examples: [
      "date ; uptime ; free -h  # three independent reports",
      "echo 'start' ; ./script.sh ; echo 'end'  # bracket a script with markers",
      "cd /tmp && rm -rf junk  # SAFER than cd /tmp ; rm -rf junk",
      "make ; make test ; make install  # WRONG — should be && so test/install skip on build fail",
      "a ; b ; c  # equivalent to running them on separate lines"
    ],
    memoryTip: "`;` = 'next, no matter what'. `&&` = 'next only if win'. `||` = 'next only if lose'. `&` = 'next in parallel'. When chaining commands that depend on each other, NEVER use `;` — use `&&`.",
    outputExample: "$ false ; echo 'still ran'\nstill ran\n$ false && echo 'will not run'\n$ date ; uptime\nFri May 15 14:32:10 UTC 2026\n 14:32:10 up 3 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe11",
    question: "APPEND both stdout and stderr to a file with the `&>>` operator (don't overwrite)",
    answer: "command &>> file.txt",
    explanation: "`&>>` is the append-mode sibling of `&>`: both stdout and stderr go to the file, and the file is OPENED IN APPEND MODE rather than truncated. New output is added to the end. Like `&>`, it's bash/zsh-specific. The POSIX-portable equivalent is `>> file 2>&1`. Use this for log files that accumulate across many script runs — `&>` would wipe the log every time. Caveat: if multiple processes write to the same log concurrently, very long lines can interleave. For high-volume multi-writer logs, prefer `syslog`/`journald` or `logger` over raw file appends.",
    usage: "Accumulating output from a script across many cron runs into a single log. Adding to an existing build log without losing old entries. Persistent error logs.",
    examples: [
      "./hourly-job.sh &>> /var/log/job.log  # accumulate run output across executions",
      "make &>> build.log  # append (won't wipe previous build output)",
      "command >> all.log 2>&1  # POSIX-portable append-both",
      "echo '--- run at '$(date)' ---' >> log; ./script &>> log  # tag each run",
      "logger -t myapp 'message'  # alternative: write to syslog (rotated automatically)"
    ],
    memoryTip: "`&>` truncates. `&>>` appends. Same difference as `>` vs `>>` but for both streams. Bash-only — for portable scripts use `>> file 2>&1`. For real production logging, use syslog/journald instead of raw appends.",
    outputExample: "$ ./script.sh &>> log\n$ ./script.sh &>> log\n$ cat log\nRun 1 starting...\nRun 1 done\nRun 2 starting...\nRun 2 done\n$ # versus &> would only have kept the LAST run",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe12",
    question: "Run a fallback command ONLY IF the first one FAILED using `||` (logical OR)",
    answer: "command1 || command2",
    explanation: "`||` is logical OR: command2 runs only if command1's exit code is NON-ZERO (failure). It's the mirror of `&&`. Common idioms: `command || exit 1` (bail out of a script on failure), `command || echo 'failed'` (notification), `cd /tmp || { echo 'no /tmp'; exit 1; }` (fallback with multiple lines). Combined `A && B || C` looks like if/else but has a subtle bug: if A succeeds AND B fails, C also runs. For real if/else logic in scripts, prefer `if A; then B; else C; fi`. Useful 'create-if-missing' pattern: `[ -f file ] || touch file`.",
    usage: "Failure handling in scripts (`command || exit 1`). Default-if-missing (`[ -d /tmp/cache ] || mkdir -p /tmp/cache`). Trying alternates (`primary-tool || backup-tool`).",
    examples: [
      "command || echo 'FAILED'  # notify on failure",
      "[ -d /tmp/cache ] || mkdir -p /tmp/cache  # create only if missing",
      "ping -c1 host || echo 'host unreachable'",
      "command || exit 1  # bail on failure (very common in scripts)",
      "true && echo A || echo B  # prints A; but if A's echo fails (rare), B also runs"
    ],
    memoryTip: "`||` = 'or else'. Mirror of `&&` ('and then'). The pair (`&&`/`||`) is bash's short-circuit boolean logic. For complex branches use proper `if`/`then`/`else` — chained `&&`/`||` has a subtle pitfall when the middle command fails.",
    outputExample: "$ true || echo 'fallback'\n$ false || echo 'fallback'\nfallback\n$ ping -c1 invalid.host || echo 'unreachable'\nping: invalid.host: Name or service not known\nunreachable\n$ [ -d /tmp/work ] || mkdir /tmp/work  # idempotent setup",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe13",
    question: "APPEND only stderr to a file with `2>>` (preserving existing content of the error log)",
    answer: "command 2>> error.log",
    explanation: "`2>>` is the append-mode of `2>`: only stderr (file descriptor 2) is redirected, and the file is opened in append mode so old content is preserved. Stdout still prints to your terminal. Useful for accumulating error logs from a recurring task. Combined patterns: `command >> out.log 2>> err.log` keeps separated logs and appends both; `command 2>> err.log` lets you watch normal output live while errors silently accumulate elsewhere. For a single combined log use `&>>`. For one-shot error capture (truncating each time) use `2>`.",
    usage: "Daily/hourly cron jobs that should leave an error trail across runs. Background services where you check the err log periodically. Building up a record of intermittent failures.",
    examples: [
      "./hourly-backup.sh 2>> /var/log/backup-errors.log  # accumulate errors only",
      "command >> out.log 2>> err.log  # separate logs, both appended",
      "command 2>> err.log  # errors append to log, stdout still on terminal",
      "command 2>>(logger -t myapp)  # bash: pipe stderr to syslog via process substitution",
      "make 2>> build-errors.log  # add today's build errors to the log"
    ],
    memoryTip: "`2>>` = stderr append. `>>` (no digit) = stdout append. Either you stack arrows or you don't. The digit `2` always means stderr; you can also `1>` (stdout, redundant) or `0<` (stdin, equivalent to `<`).",
    outputExample: "$ ls /nope 2>> errors.log\n$ ls /also-nope 2>> errors.log\n$ cat errors.log\nls: cannot access '/nope': No such file or directory\nls: cannot access '/also-nope': No such file or directory",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe14",
    question: "Use the `tee` command to view output on the screen AND save it to a file at the same time",
    answer: "command | tee file.txt",
    explanation: "`tee` reads stdin and writes to BOTH stdout AND each file argument — like a T-junction in plumbing. So `command | tee log.txt` shows the output live while also saving it. Without tee, redirecting to a file (`> log.txt`) hides the output; with tee, you see and save simultaneously. Useful flags: `-a` ('append') so the file isn't truncated on each run. To pipe further AFTER tee, just add more pipes: `command | tee log.txt | grep ERROR` lets the full log save while grep filters for the screen. Killer trick: `sudo` doesn't propagate through `>` — `sudo command > /etc/protected.file` FAILS because the redirect is done by your shell, not sudo. Workaround: `command | sudo tee /etc/protected.file`.",
    usage: "Watching a long build's output live while keeping a copy. Saving a session log without losing the on-screen feedback. The `sudo tee` trick for writing to root-owned files.",
    examples: [
      "make 2>&1 | tee build.log  # save build output while watching live",
      "command | tee -a session.log  # append (don't truncate)",
      "echo 'new value' | sudo tee /sys/devices/.../setting  # the sudo-redirect workaround",
      "command | tee log.txt | grep ERROR  # full log saved, only errors on screen",
      "command | tee >(grep ERROR > errors.log) > all.log  # tee + process substitution"
    ],
    memoryTip: "`tee` = T-pipe-junction (one stream in, two out). Use cases: (1) see-AND-save, (2) the famous `sudo tee` trick for writing to root-owned files. Append mode: `-a`. Tee writes to stdout AND files; pipe AFTER tee still works.",
    outputExample: "$ ls -la | tee listing.txt | head -3\ntotal 24\ndrwxr-xr-x 4 alice alice 4096 May 15 10:00 .\ndrwxr-xr-x 5 root  root  4096 May  1 09:00 ..\n$ cat listing.txt  # full output was saved\ntotal 24\ndrwxr-xr-x 4 alice alice 4096 May 15 10:00 .\ndrwxr-xr-x 5 root  root  4096 May  1 09:00 ..\n-rw-r--r-- 1 alice alice  142 May 15 10:00 README.md\ndrwxr-xr-x 2 alice alice 4096 May 15 10:00 src",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe15",
    question: "Use `tee` with multiple filenames to write the same output to several files at once",
    answer: "command | tee file1.txt file2.txt",
    explanation: "`tee` accepts MULTIPLE file arguments — each one receives a copy of the input. Useful when you need the same output in several places, or when archiving with different rotation policies. Add `-a` to append to all listed files. Combine with bash PROCESS SUBSTITUTION `>(cmd)` to fan out to other COMMANDS, not just files: `tee >(gzip > out.gz) >(sha256sum > out.sha)` writes a compressed copy AND a checksum file in one pass. This pattern is essential for backup pipelines where you don't want to re-read a huge input multiple times.",
    usage: "Mirroring backups to two destinations in one pass. Computing checksum AND saving file in a single read. Sending log output to local file AND syslog simultaneously.",
    examples: [
      "dmesg | tee boot.log archive/boot-$(date +%F).log",
      "command | tee -a log1 log2 log3  # append to all three",
      "command | tee >(gzip > out.gz) > out.txt  # raw + compressed in one pass",
      "cat big.bin | tee >(sha256sum > big.sha) > /backup/big.bin  # checksum-while-copying",
      "echo 'shared msg' | tee /tmp/a /tmp/b /tmp/c  # same content in three files"
    ],
    memoryTip: "Multiple files = multiple copies. The killer pattern is `tee >(cmd1) >(cmd2)` for fan-out to OTHER commands (bash-only process substitution). For real archival pipelines, this is how you avoid reading a giant input twice.",
    outputExample: "$ date | tee a.txt b.txt c.txt\nFri May 15 14:32:10 UTC 2026\n$ cat a.txt b.txt c.txt\nFri May 15 14:32:10 UTC 2026\nFri May 15 14:32:10 UTC 2026\nFri May 15 14:32:10 UTC 2026\n$ echo hi | tee >(rev) > out.txt\nih\n$ cat out.txt\nhi",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe16",
    question: "Use here document",
    answer: "command << EOF\ncontent\nEOF",
    explanation: "'<< EOF' creates a here document, feeding multiple lines as input until EOF marker.",
    usage: "Provide multi-line input to commands that read from stdin.",
    examples: [
      "cat << EOF > file.txt\nLine 1\nLine 2\nEOF",
      "mail user@domain.com << EOF\nSubject: Test\n\nHello World\nEOF",
      "sql_command << SQL\nSELECT * FROM users;\nQUIT;\nSQL"
    ],
    memoryTip: "'<< EOF' = 'here document'. Like writing a letter directly in the command, ending with your signature (EOF).",
    outputExample: "$ cat << END\n> Hello\n> World\n> END\nHello\nWorld",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe17",
    question: "Use here string",
    answer: "command <<< 'string input'",
    explanation: "'<<<' feeds a string directly as input to a command.",
    usage: "Provide single or simple multi-line strings as command input.",
    examples: [
      "grep 'pattern' <<< 'line1\nline2\nline3'  # Search in string",
      "wc -c <<< 'hello world'  # Count characters in string",
      "sort <<< $'z\nb\na'  # Sort string with newlines"
    ],
    memoryTip: "'<<<' = 'here string'. Like feeding a string directly into a command's input stream.",
    outputExample: "$ wc -w <<< 'The quick brown fox'\n4",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe18",
    question: "Chain multiple pipes",
    answer: "command1 | command2 | command3",
    explanation: "Multiple '|' can chain several commands together in a pipeline.",
    usage: "Create complex data processing workflows with multiple transformation steps.",
    examples: [
      "cat file.txt | grep 'error' | wc -l  # Count error lines",
      "ps aux | grep apache | awk '{print $2}' | xargs kill  # Kill apache processes",
      "find . -name '*.log' | xargs grep 'ERROR' | sort | uniq -c  # Analyze logs"
    ],
    memoryTip: "'|' chain = 'pipeline assembly line'. Like passing work through multiple stations, each doing their part.",
    outputExample: "$ cat names.txt | sort | uniq | wc -l\n15",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe19",
    question: "Redirect input and output",
    answer: "command < input.txt > output.txt",
    explanation: "Combine input redirection '<' with output redirection '>' in one command.",
    usage: "Process files and save results in a single operation.",
    examples: [
      "sort < unsorted.txt > sorted.txt  # Sort file to new file",
      "grep 'pattern' < data.txt > results.txt  # Filter data",
      "cat < file1.txt >> file2.txt  # Append file1 to file2"
    ],
    memoryTip: "'< input > output' = 'in and out'. Like taking input from one file and sending results to another.",
    outputExample: "$ sort < names.txt > sorted_names.txt\n$ head -3 sorted_names.txt\nAlice\nBob\nCharlie",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe20",
    question: "Discard all output",
    answer: "command > /dev/null 2>&1",
    explanation: "'2>&1' redirects stderr to stdout, then '>' sends both to /dev/null.",
    usage: "Run commands silently, suppressing all output for background or automated tasks.",
    examples: [
      "backup.sh > /dev/null 2>&1  # Silent backup",
      "cron_job > /dev/null 2>&1  # Quiet cron jobs",
      "ping -c 1 host > /dev/null 2>&1 && echo 'Host up'  # Test connectivity quietly"
    ],
    memoryTip: "'> /dev/null 2>&1' = 'black hole redirect'. Like throwing everything into a trash can that never fills up.",
    outputExample: "$ noisy_command > /dev/null 2>&1\n$ (no output displayed)",
    category: "PIPES & REDIRECT"
  },

  // PROCESSES
  {
    id: "proc1",
    question: "List every running process on the system with the `ps aux` command (a snapshot of all processes for all users)",
    answer: "ps aux",
    explanation: "`ps` ('process status') is the classic Linux command for listing processes. A PROCESS is just a running program — every command you launch, every background service, every daemon — and each one is identified by a PID (Process ID, a unique number). The flags `aux` are BSD-style (note: no leading dash): `a` = show processes of ALL users (not just yours), `u` = use user-oriented format (adds USER, %CPU, %MEM, START columns), `x` = include processes that have no controlling terminal (daemons, services). Output columns: USER (owner), PID, %CPU (current CPU usage), %MEM (resident memory share), VSZ (virtual memory size in KB), RSS (resident-set size — RAM actually in use, KB), TTY (controlling terminal or `?` for none), STAT (state: R=running, S=sleeping, D=uninterruptible IO, Z=zombie, T=stopped), START (wall-clock start time), TIME (cumulative CPU time used), COMMAND. `ps` shows a one-time snapshot — for a live updating view, use `top` or `htop`.",
    usage: "You suspect a runaway program is eating CPU and you need to find its PID before you can `kill` it. You want to confirm whether `nginx` or `postgres` is actually running. You need a one-shot text dump of every process so you can grep or save it.",
    examples: [
      "ps aux  # everything, everyone — the standard fallback",
      "ps aux | grep firefox  # find firefox PIDs (note: ignore the grep line itself)",
      "ps aux --sort=-%cpu | head  # the 10 worst CPU offenders right now",
      "ps aux --sort=-%mem | head  # the 10 worst memory offenders",
      "ps -ef  # same idea, System V style — wider COMMAND column, useful on AIX/Solaris-like boxes",
      "ps -u alice  # only processes owned by user alice"
    ],
    memoryTip: "Two ps dialects exist: BSD (`ps aux`, no dashes) and System V (`ps -ef`, with dashes). Mixing them looks weird but both work on Linux. Mnemonic for `aux`: All Users eXtended. Sister tools: `top`/`htop` (live view), `pgrep` (find PID by name), `pstree` (tree view).",
    outputExample: "$ ps aux | head -5\nUSER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot           1  0.0  0.1 168720 11264 ?        Ss   May14   0:02 /sbin/init splash\nroot         412  0.0  0.0  35200  6144 ?        Ss   May14   0:00 /lib/systemd/systemd-journald\nalice       1872  0.2  0.4 412000 65536 tty1     Sl   09:14   0:18 /usr/bin/gnome-shell\nalice       2412 12.5  3.1 2400000 524288 ?       Sl   09:15   1:42 /usr/lib/firefox/firefox",
    category: "PROCESSES"
  },
  {
    id: "proc2",
    question: "Display all processes as an indented tree showing parent-child relationships with the `pstree` command",
    answer: "pstree",
    explanation: "Every process on Linux (except PID 1) is started BY another process — its PARENT. The parent's PID is called the PPID. `pstree` draws this family tree with ASCII art, so you can see at a glance who spawned what. At the root is PID 1 — usually `systemd` on modern distros — the first process the kernel launches at boot; every other process descends from it. This is incredibly useful for understanding how things hang together: e.g. you'll see your terminal emulator → bash → the command you just ran. Identical sibling children get collapsed as `4*[chrome]` to keep the tree readable. `pstree` is usually pre-installed but lives in the `psmisc` package if not. Add `-p` to show PIDs next to each name, `-a` to show command-line arguments, `-T` to hide threads. Compare to `ps --forest` which gives a similar tree from `ps`.",
    usage: "Figuring out which terminal a stray process belongs to by tracing it upward. Understanding why a web server has dozens of worker processes (they share a parent). Debugging 'who started this?' — e.g. an unwanted cron job whose grandparent is `cron`.",
    examples: [
      "pstree  # the full tree, names only",
      "pstree -p  # add PIDs in parentheses — most useful flag",
      "pstree -a  # also show the command-line arguments of each process",
      "pstree alice  # only the branches owned by user alice",
      "pstree -p 1234  # tree rooted at PID 1234 (just that subtree)",
      "ps -ef --forest  # alternative tree view from plain ps"
    ],
    memoryTip: "`pstree` = process tree. PID 1 (systemd/init) is the root ancestor of EVERYTHING. Family relations: PID = your ID, PPID = parent's ID. If a parent dies before its child, the child becomes an ORPHAN and is adopted by PID 1.",
    outputExample: "$ pstree -p | head -15\nsystemd(1)-+-NetworkManager(612)-+-{NetworkManager}(641)\n           |                    `-{NetworkManager}(642)\n           |-cron(1000)\n           |-sshd(1432)---sshd(2001)---sshd(2002)---bash(2003)---vim(2412)\n           |-systemd-journal(412)\n           |-gnome-shell(1872)-+-firefox(2412)-+-{firefox}(2413)\n           |                   |               `-4*[{firefox}]\n           |                   `-gnome-terminal(2500)---bash(2501)---pstree(3000)\n           `-systemd-logind(700)",
    category: "PROCESSES"
  },
  {
    id: "proc3",
    question: "Politely ask a process to terminate by sending it the default SIGTERM signal with `kill PID`",
    answer: "kill PID",
    explanation: "Despite the scary name, `kill` doesn't actually 'kill' anything — it sends a SIGNAL. A signal is a tiny asynchronous message the kernel delivers to a process; the process can either handle it (run cleanup code) or be killed by the kernel if it doesn't. By default, `kill PID` sends SIGTERM (signal 15), which is the POLITE 'please shut down now' request — the program can flush its buffers, close files, and exit cleanly. If that fails (process is hung, ignoring the signal, or stuck in an uninterruptible kernel call), escalate to `kill -9 PID` which sends SIGKILL (signal 9) — this CANNOT be caught or ignored, the kernel just terminates the process immediately. Always try SIGTERM first; SIGKILL skips cleanup and can leave temp files, locked databases, or orphaned children behind. You need the PID first — get it from `ps aux | grep`, `pgrep`, `pidof`, or `top`. You can only kill processes you own; root can kill anything.",
    usage: "Firefox is frozen and the X close button isn't responding — find its PID and `kill` it. A test script forgot to clean up its child and you need to stop it. A SSH session is hung and you want to end it.",
    examples: [
      "kill 1234  # send SIGTERM — the polite shutdown request",
      "kill -15 1234  # same thing, signal 15 explicitly",
      "kill -9 1234  # the nuclear option (SIGKILL) — when SIGTERM was ignored",
      "kill -HUP 1234  # 'hang up' — many daemons reload their config on this",
      "kill %1  # kill background job number 1 from `jobs` (no PID needed)",
      "kill -0 1234  # send no signal, just check if PID 1234 exists (exit code 0 = yes)"
    ],
    memoryTip: "Escalation ladder: SIGTERM (15, 'please stop') → wait a few seconds → SIGKILL (9, 'die now'). Family tree of killing tools: `kill PID` (one PID), `killall name` (all processes matching name exactly), `pkill pattern` (all matching a regex), `xkill` (click a GUI window to kill it).",
    outputExample: "$ pgrep firefox\n2412\n2418\n$ kill 2412\n$ pgrep firefox\n2418\n$ kill 2418\n$ pgrep firefox\n$ # (no output = no firefox processes left)\n$ kill 99999\nbash: kill: (99999) - No such process",
    category: "PROCESSES"
  },
  {
    id: "proc4",
    question: "Run a command in the background by appending an ampersand: `command &`",
    answer: "command &",
    explanation: "Adding `&` at the end of a command tells your shell: 'start this, then immediately return the prompt — don't wait for it to finish'. The shell forks a child process that runs concurrently. It prints `[N] PID` where N is the bash JOB NUMBER (shell-local, used with `fg %N`/`bg %N`/`kill %N`) and PID is the OS process ID. Caveat: the background job is still attached to your TERMINAL — closing the terminal or logging out sends it a `SIGHUP` ('hangup') and usually kills it. To survive logout, prefix with `nohup` (`nohup cmd &`) which redirects output to `nohup.out` and ignores SIGHUP, OR use `disown` after backgrounding, OR use `tmux`/`screen` for proper detachable sessions. The job's stdout STILL prints to your terminal (interleaved with your prompts) unless you redirect: `cmd > out.log 2>&1 &`.",
    usage: "Starting a long copy/build/download while continuing to work in the same terminal. Running multiple things in parallel from a script. Quick one-off background jobs (for daemons, use systemd instead).",
    examples: [
      "./long-script.sh &  # start, return to prompt; output still mixes into terminal",
      "./build.sh > build.log 2>&1 &  # redirect output to a file so it doesn't spam you",
      "nohup ./server.py > server.log 2>&1 &  # survives terminal closing",
      "jobs  # see what's running in the background",
      "wait  # block until ALL background jobs finish (useful in scripts)"
    ],
    memoryTip: "`&` at end = run in background, hand prompt back NOW. `;` separator runs sequentially. `&&` runs next ONLY if previous succeeded. Don't confuse the three. For long-running things you'll log out from, use `nohup ... &` or `tmux`/`screen`.",
    outputExample: "$ sleep 30 &\n[1] 12345\n$ jobs\n[1]+  Running                 sleep 30 &\n$ # 30 seconds later, next time you press Enter:\n[1]+  Done                    sleep 30",
    category: "PROCESSES"
  },
  {
    id: "proc5",
    question: "Bring a background or stopped job back to the foreground with `fg %job_number`",
    answer: "fg %job_number",
    explanation: "After you've sent a job to the background (with `&` or by pressing `Ctrl+Z` while it was running), `fg` ('foreground') pulls it back — meaning the shell waits for it again and its stdin/stdout/stderr re-attach to your terminal. Without an argument, `fg` resumes the MOST RECENT job; with `%N` it picks job N as shown by `jobs`. You can also use `%name` to match by command name (`%vim`, `%./build`). Important: `fg` is a SHELL BUILTIN — it only works on jobs of the current shell. You can't `fg` a process from another terminal; for that you'd need `reptyr` or `screen -r`.",
    usage: "You suspended a long-running command with Ctrl+Z to do something else, and now want to keep watching it. You backgrounded a job and want to interact with its prompt again.",
    examples: [
      "fg  # bring the most recent job back to the foreground",
      "fg %1  # bring job number 1 forward (numbers come from `jobs`)",
      "fg %vim  # bring the suspended vim back",
      "jobs  # see job numbers first",
      "Ctrl+Z then fg  # suspend foreground job, then resume it (just a no-op pair, but useful trick)"
    ],
    memoryTip: "`fg` = ForeGround. `bg` = BackGround. `Ctrl+Z` = suspend (a one-key pause button — the job stops but stays in your `jobs` list). Once suspended, choose: `fg` to resume in foreground, `bg` to resume in background, or `kill %N` to terminate.",
    outputExample: "$ sleep 30\n^Z\n[1]+  Stopped                 sleep 30\n$ jobs\n[1]+  Stopped                 sleep 30\n$ bg\n[1]+ sleep 30 &\n$ fg %1\nsleep 30\n# (now in foreground; Ctrl+C to kill, Ctrl+Z to suspend again)",
    category: "PROCESSES"
  },
  {
    id: "proc6",
    question: "Resume a stopped job in the BACKGROUND with the `bg %job_number` command",
    answer: "bg %job_number",
    explanation: "When you press `Ctrl+Z` on a running foreground command, the kernel sends it `SIGTSTP` and the job goes to STOPPED state — frozen, not consuming CPU. `bg` ('background') tells that stopped job to keep running, but in the background so you get your prompt back. Common pattern: start something you forgot to background, hit `Ctrl+Z` to pause it, then type `bg` to let it continue without blocking your terminal. Like `fg`, `bg` is a SHELL BUILTIN — `%N` selects which job, no argument means most recent stopped job.",
    usage: "You launched `./big-build` in the foreground, realized you didn't want to wait, hit Ctrl+Z, and now want it to continue running while you do other work. Or resuming a job you suspended on purpose.",
    examples: [
      "Ctrl+Z  # suspend the foreground job (sends SIGTSTP)",
      "bg  # resume it, but in the background",
      "bg %2  # specifically resume job 2",
      "jobs  # confirm what's running where",
      "disown %1  # detach job 1 from this shell so it survives logout"
    ],
    memoryTip: "Workflow: `Ctrl+Z` (pause) → `bg` (continue in background). Trio to memorize: `Ctrl+Z` pauses, `fg` foregrounds, `bg` backgrounds. `&` at command-launch time is equivalent to start-then-Ctrl+Z-then-bg.",
    outputExample: "$ ./long-build.sh\n^Z\n[1]+  Stopped                 ./long-build.sh\n$ bg\n[1]+ ./long-build.sh &\n$ jobs\n[1]+  Running                 ./long-build.sh &\n# build keeps going, prompt is yours",
    category: "PROCESSES"
  },
  {
    id: "proc7",
    question: "List the current shell's background and stopped jobs with the `jobs` command",
    answer: "jobs",
    explanation: "`jobs` is a shell builtin that prints the job table for the CURRENT shell only — backgrounded jobs (started with `&`) and stopped jobs (paused with Ctrl+Z). Each line: `[N]+  STATUS  COMMAND`. The `+` marks the most recent job (default target of `fg`/`bg`); `-` marks the previous one. Status is `Running`, `Stopped`, or `Done`. Add `-l` to include the PID, `-r` for only running, `-s` for only stopped. Jobs disappear from the list once they finish AND you've returned to the prompt (the shell prints a `Done` line at that point). `jobs` does NOT show processes from other shells or sessions — for that use `ps aux` or `pgrep`.",
    usage: "Confirming what's still running in this terminal before you log out (or `disown`ing things you want to survive). Checking job numbers before `fg %N` or `kill %N`.",
    examples: [
      "jobs  # current shell's job table",
      "jobs -l  # add PID column",
      "jobs -r  # only running jobs",
      "jobs -s  # only stopped (suspended) jobs",
      "ps -aux | grep -v grep | grep yourname  # alternative: all your processes everywhere"
    ],
    memoryTip: "`jobs` = this shell's jobs only. For system-wide use `ps` or `pgrep`. The `+` next to a job means 'default target' — `fg` with no argument grabs it. The `[N]` number is what you pass with `%N`.",
    outputExample: "$ sleep 100 &\n[1] 12345\n$ sleep 200 &\n[2] 12346\n$ sleep 300\n^Z\n[3]+  Stopped                 sleep 300\n$ jobs\n[1]   Running                 sleep 100 &\n[2]-  Running                 sleep 200 &\n[3]+  Stopped                 sleep 300\n$ jobs -l\n[1]  12345 Running             sleep 100 &\n[2]- 12346 Running             sleep 200 &\n[3]+ 12347 Stopped             sleep 300",
    category: "PROCESSES"
  },
  {
    id: "proc8",
    question: "Watch processes live in a real-time monitor with the `top` command (CPU/memory usage)",
    answer: "top",
    explanation: "`top` is the always-installed, no-extras-needed real-time process viewer. It updates every 3 seconds by default. The header shows uptime, load averages (1/5/15-minute CPU run-queue length), task counts, %CPU and %Mem aggregates, and swap usage. Below: a sortable table — PID, USER, PR (priority), NI (nice value), VIRT/RES/SHR (virtual/resident/shared memory in KB), S (state: R=running, S=sleeping, D=uninterruptible-sleep-on-IO, Z=zombie, T=stopped), %CPU, %MEM, TIME+ (total CPU time used), and COMMAND. Inside top: `q` quit, `M` sort by %MEM, `P` sort by %CPU (default), `T` sort by TIME, `k` then a PID to kill it, `r` to renice, `1` to expand per-CPU breakdown, `c` toggle full command line. For a friendlier color version see `htop` (covered in daily15).",
    usage: "Finding the process eating CPU when the fan won't stop. Identifying memory hogs before they trigger the OOM killer. Quick triage on a server where `htop` isn't installed.",
    examples: [
      "top  # interactive — press q to quit",
      "top -u alice  # only processes owned by user 'alice'",
      "top -p 1234,5678  # watch only these PIDs",
      "top -b -n 1  # batch mode, one snapshot (for scripts/cron)",
      "top -o %MEM  # start sorted by memory instead of CPU"
    ],
    memoryTip: "Inside top: M=Memory sort, P=Processor (CPU) sort, q=quit, k=kill. Always available on every Linux box. If `htop` is installed, prefer it. Load average rule of thumb: load over `nproc` (number of CPUs) means the system is saturated.",
    outputExample: "$ top\ntop - 14:32:18 up 3 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28\nTasks: 312 total,   2 running, 310 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  4.2 us,  1.1 sy,  0.0 ni, 94.5 id,  0.2 wa,  0.0 hi,  0.0 si\nMiB Mem :  16384.0 total,   2104.5 free,   6321.8 used,   7957.7 buff/cache\nMiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   8512.3 avail Mem\n\n   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n  1234 alice     20   0 2400000 524288 102400 S  12.5   3.1   0:42.10 firefox\n  5678 alice     20   0  819200 122880  20480 R   2.3   0.7   0:08.20 bash\n     1 root      20   0  168720  11264   8192 S   0.0   0.1   0:02.41 systemd",
    category: "PROCESSES"
  },
  {
    id: "proc9",
    question: "Find the PIDs of processes whose name matches a pattern using the `pgrep process_name` command",
    answer: "pgrep process_name",
    explanation: "`pgrep` ('process grep') is the modern shortcut for the classic `ps aux | grep name | awk '{print $2}'` pipeline. You give it a name pattern (substring match against the process NAME by default — typically the first 15 characters of the executable), and it prints the matching PIDs, one per line. This makes it perfect for piping into `kill` or using in scripts. By default it matches only the process name; add `-f` to match against the FULL command line (useful when many processes share a name like `python` but you want a specific script). Add `-l` to print PID AND name, `-a` to print PID and full command line, `-u USER` to filter by owner, `-n` for the newest matching process, `-o` for the oldest. Unlike piping to `grep`, `pgrep` does NOT accidentally match itself in the output.",
    usage: "You need the PID of the running nginx to send it a signal: `kill -HUP $(pgrep nginx)`. You wrote a Python service and need to check if your specific script is running among ten other python processes. Scripting: 'is the backup daemon still alive?'.",
    examples: [
      "pgrep firefox  # all PIDs of firefox processes",
      "pgrep -l ssh  # PIDs and names of anything matching 'ssh' (sshd, ssh-agent, etc.)",
      "pgrep -a python  # PID + full command line — disambiguate multiple python scripts",
      "pgrep -f 'python myserver.py'  # match the full command line, not just the executable name",
      "pgrep -u alice firefox  # firefox processes belonging only to user alice",
      "kill $(pgrep -f badscript.sh)  # kill every process running badscript.sh in one shot"
    ],
    memoryTip: "`pgrep` = process + grep. Sibling commands: `pkill` (same matching, but kills), `pidof PROGRAM` (similar but exact-match on executable name, and returns space-separated). Use `pgrep -f` when the executable is generic (python, java, node) and you need to match by script name.",
    outputExample: "$ pgrep firefox\n2412\n2500\n$ pgrep -l ssh\n1432 sshd\n2001 sshd\n2412 ssh-agent\n$ pgrep -af 'python.*server'\n3821 python /opt/myapp/server.py --port 8080\n3822 python /opt/myapp/server.py --port 8081\n$ pgrep nonexistent\n$ echo $?\n1",
    category: "PROCESSES"
  },
  {
    id: "proc10",
    question: "Send a signal (default SIGTERM) to every process matching a name with the `pkill process_name` command",
    answer: "pkill process_name",
    explanation: "`pkill` is `pgrep` + `kill` rolled into one. It uses the SAME matching rules as `pgrep` (name substring by default, or full command line with `-f`), but instead of printing PIDs it sends them a signal. The default signal is SIGTERM (polite shutdown), so the program gets a chance to clean up. Use `-9` to send SIGKILL (force). Use `-HUP` to reload daemon config. CAUTION: a too-broad pattern can kill more than you intended — `pkill ssh` would kill your sshd, your ssh-agent, AND your current ssh session. Use `pgrep` first with the same arguments to PREVIEW what would die. Use `-c` to count matches, `-e` to echo what was killed. Like `pgrep`, it won't kill itself. Sibling tool `killall` is similar but requires an EXACT name match by default (less footgun-prone).",
    usage: "Firefox has multiple processes you don't want to track down individually: `pkill firefox`. A misbehaving user's processes need to all go: `sudo pkill -u baduser`. Reload nginx config: `sudo pkill -HUP nginx`.",
    examples: [
      "pkill firefox  # SIGTERM all firefox processes — graceful shutdown",
      "pkill -9 firefox  # SIGKILL — when firefox is completely frozen",
      "pkill -f 'python myscript.py'  # match the full command line",
      "pkill -HUP nginx  # tell nginx to reload its config (no restart, no downtime)",
      "sudo pkill -u baduser  # kill every process owned by baduser",
      "pgrep -fa python  # ALWAYS preview with pgrep first before pkill -f"
    ],
    memoryTip: "`pkill` = process kill (by pattern). Triple of related tools: `pgrep` (find), `pkill` (find + kill by pattern), `killall` (kill by exact name). RULE: always run `pgrep` with your intended pattern BEFORE running `pkill` — you can't un-kill processes.",
    outputExample: "$ pgrep -a firefox  # preview first\n2412 /usr/lib/firefox/firefox\n2500 /usr/lib/firefox/firefox -contentproc -childID 1\n$ pkill firefox\n$ pgrep firefox\n$ # (empty — they're all gone)\n$ pkill -9 frozen_app  # nuclear option",
    category: "PROCESSES"
  },
  {
    id: "proc11",
    question: "Open the real-time interactive process monitor with the `top` command and use its keyboard shortcuts",
    answer: "top",
    explanation: "While `top` is the universal live process viewer (see proc8 for the column reference), most of its power comes from KEYBOARD COMMANDS you press WHILE it is running. The screen refreshes every 3 seconds by default; shortcuts every Linux user should memorize: `h` opens built-in help, `q` quits, `space` forces an immediate refresh, `d` then a number changes refresh delay (e.g. `d 1 Enter` for 1-second updates), `P` sorts by %CPU (default), `M` sorts by %MEM, `T` sorts by cumulative TIME, `N` sorts by PID, `R` reverses the sort, `k` then a PID prompts to kill (default SIGTERM, press Enter), `r` then PID then a niceness value renices, `c` toggles between short program name and full command line, `1` toggles per-CPU-core display in the header, `u` filters by username, `W` saves your current settings to `~/.toprc`. `top` is ALWAYS installed on every Linux distribution — it ships in the `procps` core package, so you can rely on it on any box, even minimal containers or rescue shells.",
    usage: "Your laptop fan suddenly spins up — open `top`, press `P`, see what is at the top. The system feels sluggish — open `top`, press `M`, find the memory hog before the OOM killer strikes. SSHed to a tiny VM where `htop` is not installed — `top` is always there.",
    examples: [
      "top  # launch interactive — quit with q",
      "top -d 1  # update every 1 second instead of 3",
      "top -u alice  # only show alice's processes",
      "top -p 1234,5678  # watch just these two PIDs",
      "top -b -n 1 > snapshot.txt  # batch mode: one snapshot to file — useful for cron",
      "top -H -p 1234  # show individual THREADS of PID 1234"
    ],
    memoryTip: "Inside top, capital letters sort: P=Processor (CPU), M=Memory, T=Time, N=Number (PID). Lowercase do other things: k=kill, r=renice, q=quit, h=help. `top` is your fallback when `htop` is missing.",
    outputExample: "$ top -b -n 1 | head -10\ntop - 14:32:18 up 3 days, load average: 0.42, 0.31, 0.28\nTasks: 312 total,   2 running, 310 sleeping\n%Cpu(s):  4.2 us,  1.1 sy, 94.5 id\nMiB Mem :  16384.0 total,   2104.5 free,   6321.8 used\n   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n  2412 alice     20   0 2400000 524288 102400 S  12.5   3.1   1:42.10 firefox\n  3821 alice     20   0  819200 122880  20480 R   2.3   0.7   0:08.20 node\n     1 root      20   0  168720  11264   8192 S   0.0   0.1   0:02.41 systemd",
    category: "PROCESSES"
  },
  {
    id: "proc12",
    question: "Visualize the parent/child process hierarchy starting from a specific PID with `pstree -p PID`",
    answer: "pstree",
    explanation: "Building on proc2: `pstree` becomes a debugging tool when you focus it on a SPECIFIC subtree. Give it a PID and it draws only that process and its descendants. `pstree -p 1234` shows PID 1234 plus every child, grandchild, and so on, with PIDs in parentheses. This answers questions like 'why is this nginx process spawning 8 children?' or 'when I killed the parent, did all the children also die or are some orphans now?'. Add `-a` to see the actual command-line ARGUMENTS each process was started with — incredibly useful when a generic name like `python` or `node` does not tell you which script is running. Add `-T` to suppress kernel threads (the `{name}` curly-brace entries), `-c` to NOT collapse identical children. `pstree` ships in the `psmisc` package. Sister tool: `ps -ef --forest` produces an ASCII tree with full ps columns.",
    usage: "A web server has spawned dozens of worker processes — see them all at once with `pstree -p $(pgrep -o nginx)`. Diagnosing why a daemon's children are not dying when you kill the parent (orphans get re-parented to PID 1). Tracking which terminal/shell launched a particular process by following the chain upward.",
    examples: [
      "pstree -p 1234  # tree rooted at PID 1234, with PIDs",
      "pstree -pa $(pgrep -o sshd)  # all sshd descendants + arguments",
      "pstree -T  # hide kernel threads — cleaner output",
      "pstree -c -p  # do NOT collapse identical children — see every one",
      "pstree -s 5678  # the REVERSE: show only the chain of ANCESTORS of PID 5678",
      "ps -ef --forest | less  # equivalent tree with full ps columns"
    ],
    memoryTip: "`pstree -p PID` = the subtree under PID. `pstree -s PID` = the ancestors of PID (think 's' for 'show parents'). Compare proc2 (whole tree, names only) vs proc12 (subtree, with PIDs/args) — same tool, different angles.",
    outputExample: "$ pstree -pa $(pgrep -o nginx)\nnginx,1832 -g daemon off;\n  |-nginx,1833 \\_ worker process\n  |-nginx,1834 \\_ worker process\n  |-nginx,1835 \\_ worker process\n  `-nginx,1836 \\_ worker process\n$ pstree -s 2412\nsystemd---gnome-shell---firefox(2412)",
    category: "PROCESSES"
  },
  {
    id: "proc13",
    question: "Print custom-selected columns for a specific PID using `ps -p PID -o pid,cmd,etime,%cpu`",
    answer: "ps -p PID -o pid,cmd,etime,cpu",
    explanation: "Default `ps aux` gives you a fixed set of columns. When you want SPECIFIC information about a SPECIFIC process, use `-p PID` to select the process and `-o COL1,COL2,...` to pick exactly which columns to print. The `-o` (output format) flag accepts a comma-separated list of column SPECIFIERS — over 100 are available. The most useful ones: `pid`, `ppid` (parent PID), `user`, `cmd` (command + args), `comm` (command only, no args), `%cpu`, `%mem`, `etime` (elapsed wall-clock time since start, format `[[dd-]hh:]mm:ss`), `etimes` (elapsed time in plain seconds — easier for scripts), `stat` (state code), `nice` (niceness value), `pri` (kernel priority), `rss` (resident memory in KB), `vsz` (virtual memory), `tty`, `start` (start time). The output keeps your specified column order, so this is ideal for scripts that parse `ps` output predictably.",
    usage: "Scripting a healthcheck: 'is this PID still running and how long has it been up?'. Investigating a process you have a PID for (from a `.pid` file or a log) and want only the relevant facts, not 60 columns of noise. Building a custom 'who's eating what' report by piping `ps -eo ...` into `sort` and `head`.",
    examples: [
      "ps -p 1234 -o pid,cmd,%cpu,%mem  # everything you need about one PID",
      "ps -p 1234 -o etime=  # uptime only, no header (= suppresses the column label)",
      "ps -eo pid,ppid,user,comm --sort=-%cpu | head  # whole system, custom columns, sorted by CPU",
      "ps -p $(pgrep -o nginx) -o pid,etimes,rss,cmd  # nginx info: PID, seconds-up, memory, cmd",
      "ps --no-headers -p 1234 -o stat  # check state code (R/S/Z/D) — handy in scripts",
      "ps -eo user,%cpu --sort=-%cpu --no-headers | awk '{a[$1]+=$2} END{for(u in a) print u, a[u]}'  # CPU per user"
    ],
    memoryTip: "Mnemonic: `-p` for PID, `-o` for Output format. Append `=` to a column name to hide the header (great for scripting). `etime` is human-readable, `etimes` is plain seconds — pick the right one for the job.",
    outputExample: "$ ps -p 1234 -o pid,user,etime,%cpu,%mem,cmd\n    PID USER         ELAPSED %CPU %MEM CMD\n   1234 alice       02:14:33 12.5  3.1 /usr/lib/firefox/firefox\n$ ps -p 1234 -o etime=\n02:14:33\n$ ps --no-headers -p 1234 -o stat\nSl",
    category: "PROCESSES"
  },
  {
    id: "proc14",
    question: "List every file, socket, and pipe a process has open using `lsof -p PID`",
    answer: "lsof -p PID",
    explanation: "On Linux, EVERYTHING is a file — regular files, directories, network sockets, pipes between processes, even devices like `/dev/null` and your terminal. When a process opens any of these, the kernel hands it back a small integer called a FILE DESCRIPTOR (FD): 0 is stdin, 1 is stdout, 2 is stderr, and 3+ are everything else the program has opened. `lsof` ('LiSt Open Files') reveals this hidden state. With `-p PID` it lists every open FD for that process. Columns: COMMAND, PID, USER, FD (number plus a mode hint like `r`=read, `w`=write, `u`=read+write, plus special names like `cwd`=current working directory, `txt`=the executable itself, `mem`=memory-mapped file), TYPE (REG=regular file, DIR=directory, CHR=character device, FIFO=named pipe, IPv4/IPv6/unix=socket), DEVICE, SIZE, NODE (inode), NAME. NOT always pre-installed — on Debian/Ubuntu install with `sudo apt install lsof`. Usually requires root to inspect other users' processes. Modern alternative: `ls -l /proc/PID/fd/` shows the same info.",
    usage: "A process is holding a deleted file open (and disk space is not freed): `lsof -p PID | grep deleted`. Finding which log file your daemon is currently writing to. Diagnosing 'too many open files' errors by counting FDs: `lsof -p PID | wc -l`. Figuring out which PID has a USB drive busy when `umount` complains.",
    examples: [
      "sudo lsof -p 1234  # everything PID 1234 has open",
      "sudo lsof -p 1234 | grep deleted  # find 'leaked' deleted files still held open",
      "lsof -c nginx  # all open files for every process named nginx",
      "sudo lsof /var/log/syslog  # which processes have this file open?",
      "sudo lsof -i :8080  # which process is bound to TCP port 8080?",
      "sudo lsof +D /mnt/usb  # everything open under this directory (why can't I unmount?)"
    ],
    memoryTip: "`lsof` = LiSt Open Files. Two flag styles: `-p PID` filters by process, `-i :PORT` filters by network port, `-c NAME` filters by command name. Without flags it dumps EVERY open file system-wide — slow and huge. The `cwd` FD is the process's working directory; the `txt` FD is the executable binary itself.",
    outputExample: "$ sudo lsof -p 1234 | head -8\nCOMMAND    PID  USER   FD   TYPE DEVICE  SIZE/OFF    NODE NAME\nfirefox   1234 alice  cwd    DIR    8,1     4096  131073 /home/alice\nfirefox   1234 alice  rtd    DIR    8,1     4096       2 /\nfirefox   1234 alice  txt    REG    8,1   720384 1577891 /usr/lib/firefox/firefox\nfirefox   1234 alice  mem    REG    8,1  2104320 1577900 /usr/lib/x86_64-linux-gnu/libc.so.6\nfirefox   1234 alice    0u   CHR  136,2      0t0       5 /dev/pts/2\nfirefox   1234 alice    1u   CHR  136,2      0t0       5 /dev/pts/2\nfirefox   1234 alice    7u  IPv4 234567      0t0     TCP 192.168.1.5:55123->142.250.185.46:443 (ESTABLISHED)",
    category: "PROCESSES"
  },
  {
    id: "proc15",
    question: "Block your shell or script until a background process finishes with the `wait PID` builtin",
    answer: "wait PID",
    explanation: "`wait` is a shell BUILTIN (not an external program) that pauses the current shell until child processes finish. With no argument, `wait` blocks until ALL backgrounded children of the current shell exit. With one or more PIDs, it waits only for those specific children. After `cmd &`, the special variable `$!` holds the PID of the most recently backgrounded job — so the pattern `cmd & pid=$!` lets you capture it for later `wait`. The exit status of `wait $pid` is the exit status of that child, so you can check whether it succeeded: `wait $pid; if [ $? -ne 0 ]; then echo failed; fi`. Without `wait`, a script that exits would leave its background children RUNNING (orphaned to PID 1), which is rarely what you want. Bash 5+ supports `wait -n` (wait for ANY one of the listed jobs to finish, useful for thread-pool patterns) and `wait -f` (in some versions).",
    usage: "Parallel script: kick off 4 downloads with `&`, then `wait` to block until all are done before proceeding. Capturing the exit code of a backgrounded long-running job. Cron jobs that fork helpers but must not return before they finish.",
    examples: [
      "long_job & wait  # background it, then immediately block — pointless alone, but a template",
      "for url in $URLS; do curl -O \"$url\" & done; wait  # parallel downloads, return only when all done",
      "build1 & p1=$!; build2 & p2=$!; wait $p1 $p2; echo done  # capture PIDs explicitly",
      "task & if wait $!; then echo success; else echo \"failed with $?\"; fi  # check exit status",
      "(slow_thing &); wait  # this does NOT work — wait only sees children of THIS shell, not subshell",
      "wait -n  # bash 5+: return as soon as ANY one background job completes"
    ],
    memoryTip: "Anchor the pattern in muscle memory: `cmd & pid=$!` saves the PID, `wait $pid` waits for it, exit status of `wait` = exit status of the child. `wait` only waits for IMMEDIATE children of the current shell — not grandchildren and not jobs in subshells.",
    outputExample: "$ for i in 1 2 3; do (sleep $i; echo \"task $i done\") & done; wait; echo all-done\n[1] 3001\n[2] 3002\n[3] 3003\ntask 1 done\ntask 2 done\n[1]   Done                    ( sleep $i; echo \"task $i done\" )\n[2]-  Done                    ( sleep $i; echo \"task $i done\" )\ntask 3 done\n[3]+  Done                    ( sleep $i; echo \"task $i done\" )\nall-done",
    category: "PROCESSES"
  },
  {
    id: "proc16",
    question: "Show the FULL untruncated command line of every process (no width cutoff) with `ps auxww`",
    answer: "ps aux",
    explanation: "By DEFAULT, `ps aux` truncates the COMMAND column to your terminal width — long Java or Python command lines get cut off with no warning, so you can't see the actual arguments. The fix is `-w` (wide) — and `-ww` (super wide) tells `ps` to ignore terminal width entirely and print the FULL command line, however long. So `ps auxww` is the version you actually want when troubleshooting 'which python script is THIS one?' or 'what JVM flags did the deploy script use?'. Two other ways to get the full command: (1) read `/proc/PID/cmdline` directly — but it uses NUL (`\\0`) bytes between arguments, so pipe through `tr '\\0' ' '`; (2) `pgrep -af PATTERN` matches and prints full command lines without `ps` quirks. A separate column `comm` (vs `cmd`/`args`) gives ONLY the executable name with no arguments — useful when you don't care about flags.",
    usage: "A monitoring alert says 'java is using 4GB' — you need to see the JVM flags to know WHICH java service. Diagnosing an old crontab where the command is too long to fit on screen. Auditing what arguments a daemon was actually started with versus what you THINK is in its config.",
    examples: [
      "ps auxww  # ALL processes, ALL users, full command line, no truncation",
      "ps -p 1234 wwo cmd=  # full command for one PID, no header, no other columns",
      "cat /proc/1234/cmdline | tr '\\0' ' '; echo  # raw kernel-provided argv",
      "pgrep -af python  # PID and full command for everything matching python",
      "ps -eo pid,comm,cmd | grep -v grep | grep myscript  # comm is short name, cmd is full",
      "ps auxww --sort=-%mem | head  # 10 heaviest memory users, full commands"
    ],
    memoryTip: "Width flag stack: no `w` = truncated to terminal width, one `w` = double width, `ww` = unlimited. `cmd` (alias `args`) = name + arguments, `comm` = name only, no args. `/proc/PID/cmdline` is the kernel's authoritative source; the NUL separator trips many one-liners.",
    outputExample: "$ ps auxww | grep java | grep -v grep\nappuser   8421  3.2  8.5 6234112 1392640 ?     Sl   May14   2:14:53 /usr/lib/jvm/java-17-openjdk/bin/java -Xms512m -Xmx2g -XX:+UseG1GC -Dspring.profiles.active=prod -Dserver.port=8443 -Djava.io.tmpdir=/var/tmp/myapp -jar /opt/myapp/myapp.jar --config=/etc/myapp/prod.yml\n$ cat /proc/8421/cmdline | tr '\\0' ' '; echo\n/usr/lib/jvm/java-17-openjdk/bin/java -Xms512m -Xmx2g -XX:+UseG1GC -Dspring.profiles.active=prod ...",
    category: "PROCESSES"
  },
  {
    id: "proc17",
    question: "Send a specific named signal (HUP/USR1/INT/QUIT/etc.) to a process with `kill -SIGNAL PID`",
    answer: "kill -SIGNAL PID",
    explanation: "Signals are the kernel's way of poking a process with a message. Each signal has a NUMBER and a NAME — you can use either (`kill -9` and `kill -KILL` and `kill -SIGKILL` are identical). The signal catalog you should know: SIGTERM (15, polite shutdown — DEFAULT for `kill`), SIGKILL (9, unblockable instant death — kernel just removes the process, no cleanup), SIGHUP (1, 'hangup' — historically meant the terminal closed, now commonly used by daemons as 'reload your config'), SIGINT (2, what Ctrl+C sends — interrupt), SIGQUIT (3, what Ctrl+\\ sends — quit AND dump core), SIGSTOP (19, freeze — like Ctrl+Z but unblockable), SIGCONT (18, unfreeze a stopped process), SIGUSR1 / SIGUSR2 (10/12, application-defined — many tools use these for things like log rotation or stats dumping). Programs can install HANDLERS for catchable signals; SIGKILL and SIGSTOP are the only two that cannot be caught, blocked, or ignored. Get the full list with `kill -l` (proc24).",
    usage: "Tell nginx to reopen its log files after `logrotate` without restarting: `kill -USR1 $(pidof nginx)`. Politely shut down a daemon, then escalate to `-9` if it ignores you. Pause a long-running CPU job briefly while you do something else: `kill -STOP PID` then later `kill -CONT PID`. Trigger a Go program's pprof dump: `kill -USR1 PID`.",
    examples: [
      "kill -TERM 1234  # signal 15, polite shutdown (also the default)",
      "kill -KILL 1234  # signal 9, unblockable — last resort",
      "kill -HUP $(pidof nginx)  # 'reload config' for many daemons",
      "kill -USR1 $(pidof nginx)  # nginx-specific: reopen log files (used by logrotate)",
      "kill -STOP 1234; sleep 5; kill -CONT 1234  # freeze a process for 5 seconds then resume",
      "kill -INT 1234  # same as the user pressing Ctrl+C on the process"
    ],
    memoryTip: "TERM = polite request, KILL = forced. HUP = 'hangup', repurposed as 'reload config'. USR1/USR2 = the developer picks what they mean — check the program's man page. SIGKILL (9) and SIGSTOP (19) are the only signals a process can NEVER ignore or catch.",
    outputExample: "$ kill -TERM 1234\n$ sleep 2; pgrep -lf myapp\n$ # (empty — myapp received SIGTERM, ran its shutdown handlers, and exited cleanly)\n$\n$ kill -HUP $(pidof nginx)\n$ tail -1 /var/log/nginx/error.log\n2026/05/17 14:32:18 [notice] 8421#8421: signal 1 (SIGHUP) received from kill, reconfiguring",
    category: "PROCESSES"
  },
  {
    id: "proc18",
    question: "Memorize the full job-control workflow: `command &`, `Ctrl+Z`, `fg`, `bg`, `jobs`, `kill %N`",
    answer: "command &   # background\nfg  # foreground",
    explanation: "Putting all the job-control pieces (proc4-7) together as one mental model: a JOB is the shell's name for a command you launched, identified by a small JOB NUMBER like `[1]`, `[2]` etc. — separate from the kernel's PID. Lifecycle: start in foreground by typing `command` (shell waits for it); switch to background by ending the line with `&` (shell prints `[N] PID` and returns prompt); SUSPEND a running foreground job with `Ctrl+Z` (sends SIGTSTP, job is frozen, listed as `Stopped`); RESUME a stopped job in the foreground with `fg` (re-attaches stdin/stdout to your terminal); RESUME a stopped job in the background with `bg` (it keeps running but you get your prompt back). Reference jobs with `%N` (number) or `%name` (matching command name). `jobs` lists them. `kill %1` kills job 1 without needing its PID. CAUTION: jobs are tied to YOUR SHELL — closing the terminal sends SIGHUP to all of them (proc4 has the `nohup`/`disown` workarounds). Job numbers reset per shell; they're not the same as PIDs.",
    usage: "You started a long compile, realized you need the terminal for something else — `Ctrl+Z`, then `bg`. You have several long jobs running and want to bring the second one back into focus — `fg %2`. Quick local parallelism without writing a script: launch three commands with `&`, then `wait`.",
    examples: [
      "long_task &  # start in background, prompt returns immediately",
      "long_task  # then Ctrl+Z to suspend, then `bg` to keep running, or `fg` to resume",
      "jobs -l  # list jobs with their PIDs",
      "fg %vim  # bring the suspended vim back (by name match)",
      "kill %2  # kill job 2 without looking up its PID",
      "disown %1  # detach job 1 from the shell so it survives logout"
    ],
    memoryTip: "Cheat sheet card: START background = `&`; PAUSE foreground = `Ctrl+Z`; LIST = `jobs`; FOREGROUND = `fg [%N]`; BACKGROUND from stopped = `bg [%N]`; KILL by job = `kill %N`; SURVIVE LOGOUT = `disown` or `nohup`. Job numbers are SHELL-local; PIDs are SYSTEM-wide.",
    outputExample: "$ sleep 100 &\n[1] 5678\n$ sleep 200\n^Z\n[2]+  Stopped                 sleep 200\n$ jobs\n[1]-  Running                 sleep 100 &\n[2]+  Stopped                 sleep 200\n$ bg %2\n[2]+ sleep 200 &\n$ jobs\n[1]-  Running                 sleep 100 &\n[2]+  Running                 sleep 200 &\n$ kill %1\n[1]-  Terminated              sleep 100",
    category: "PROCESSES"
  },
  {
    id: "proc19",
    question: "Launch a command with a friendlier (lower) CPU priority using `nice -n 10 command`",
    answer: "nice -n 10 command",
    explanation: "Every process has a NICENESS VALUE — an integer from -20 (highest priority, greedy) to +19 (lowest priority, very 'nice' to others) that hints to the kernel scheduler how aggressively to give it CPU time. Default is 0. POSITIVE niceness means 'be nice — let other processes run first when there's contention'. NEGATIVE niceness means 'I'm important — preempt others'. `nice -n 10 cmd` STARTS a new command with niceness +10. CRUCIAL GOTCHA: only root can SET niceness BELOW 0 (raise priority); regular users can only LOWER priority (positive values) or keep it the same. Once a process is running, use `renice` (proc25) to change its niceness. Niceness only matters under CPU contention — on an idle system it's invisible. Cousin: I/O scheduling priority with `ionice` (separate dimension — a process can be CPU-nice but I/O-greedy). View current niceness as the `NI` column in `top` or `ps -o ni`.",
    usage: "Running a backup at night that competes with daytime workloads — `nice -n 19 backup.sh` so it yields whenever something more important needs CPU. Heavy `make -j8` compile is slowing your editor — relaunch with `nice -n 10 make -j8`. Encoding a video in the background without making the system feel laggy: `nice -n 15 ffmpeg ...`.",
    examples: [
      "nice -n 19 backup.sh  # most yielding — runs only when nothing else needs CPU",
      "nice -n 10 make -j$(nproc)  # background-friendly compile",
      "sudo nice -n -5 important_daemon  # boost priority (root only)",
      "nice ./script  # shorthand: with no -n, nice defaults to +10",
      "nice -n 19 ionice -c3 rsync src/ dst/  # CPU-nice AND idle-priority I/O — invisible background copy",
      "ps -eo pid,ni,cmd --sort=-ni | head  # show the nicest (most yielding) processes"
    ],
    memoryTip: "Range: -20 (mean, hog the CPU) ↔ 0 (default) ↔ +19 (super nice, last in line). Mnemonic: a HIGH nice number = a NICE process. Only root can go negative. To change a RUNNING process's niceness, use `renice` (proc25). For I/O priority instead of CPU, use `ionice`.",
    outputExample: "$ nice -n 15 sha256sum bigfile.iso &\n[1] 8421\n$ ps -p 8421 -o pid,ni,%cpu,cmd\n    PID  NI %CPU CMD\n   8421  15  4.2 sha256sum bigfile.iso\n$ nice -n -5 anything\nnice: cannot set niceness: Permission denied\n$ sudo nice -n -5 anything  # now allowed",
    category: "PROCESSES"
  },
  {
    id: "proc20",
    question: "List which processes are listening on which TCP ports with `sudo netstat -tlnp` (or modern `ss -tlnp`)",
    answer: "netstat -tlnp",
    explanation: "`netstat` is the classic tool for inspecting network state: open sockets, listening ports, routing tables, interface stats. The flags `tlnp` are the most common combo: `-t` TCP only (skip UDP, Unix sockets), `-l` LISTENING sockets only (skip ESTABLISHED connections), `-n` numeric — show IPs and ports as numbers, do NOT do reverse DNS or service-name lookup (much faster, more reliable), `-p` show PID/program name (requires root for processes you don't own — hence the `sudo`). Columns: Proto, Recv-Q/Send-Q (bytes queued), Local Address (IP:port the process is bound to — `0.0.0.0` means 'all interfaces', `127.0.0.1` means 'localhost only'), Foreign Address (the other end — `*:*` for listeners), State (LISTEN for servers), PID/Program. NOT pre-installed on modern distros — `netstat` is deprecated in favor of `ss` (same output, MUCH faster, ships with `iproute2` which IS standard). Same idea: `sudo ss -tlnp`. On Debian/Ubuntu netstat lives in `net-tools` (install with `sudo apt install net-tools`).",
    usage: "'Address already in use' error when starting a server — find what's already on that port. Auditing what services a machine exposes to the network. Investigating which application is sending unexpected outbound connections (drop `-l` to see ESTABLISHED instead of just listeners).",
    examples: [
      "sudo netstat -tlnp  # the classic — TCP listeners with PID/program",
      "sudo ss -tlnp  # MODERN equivalent — same idea, faster, always installed",
      "sudo ss -tulnp  # add UDP listeners too (`-u`)",
      "sudo netstat -anp | grep ESTABLISHED  # actual active connections, both directions",
      "sudo lsof -i :8080  # answer 'who has port 8080?' with one command",
      "sudo ss -tnp state established '( dport = :443 )'  # all outbound HTTPS connections"
    ],
    memoryTip: "Acronym `tlnp`: TCP, Listening, Numeric, Process. Replace `t` with `u` for UDP, drop `l` to see active connections, drop `n` to resolve names (slow!). Prefer `ss` over `netstat` on any modern system — same flags work. To find what owns a specific port, `sudo lsof -i :PORT` is often quickest.",
    outputExample: "$ sudo ss -tlnp\nState   Recv-Q  Send-Q   Local Address:Port    Peer Address:Port  Process\nLISTEN  0       128            0.0.0.0:22             0.0.0.0:*      users:((\"sshd\",pid=1432,fd=3))\nLISTEN  0       511            0.0.0.0:80             0.0.0.0:*      users:((\"nginx\",pid=8421,fd=6))\nLISTEN  0       511            0.0.0.0:443            0.0.0.0:*      users:((\"nginx\",pid=8421,fd=7))\nLISTEN  0       128          127.0.0.1:5432           0.0.0.0:*      users:((\"postgres\",pid=712,fd=5))\nLISTEN  0       128               [::]:22                [::]:*      users:((\"sshd\",pid=1432,fd=4))",
    category: "PROCESSES"
  },

  // NETWORKING
  {
    id: "net1",
    question: "Test whether a remote machine is reachable over the network with the `ping` command",
    answer: "ping hostname",
    explanation: "`ping` sends tiny network messages called ICMP echo requests to a host and waits for replies. ICMP (Internet Control Message Protocol) is a low-level protocol routers and operating systems use for status checks, so a successful ping proves the network path is alive end-to-end. Each reply shows the round-trip time in milliseconds, plus a TTL (time to live, how many router hops were allowed). On Linux `ping` runs forever until you hit `Ctrl+C` — use `-c N` to stop after N packets. If pings time out, the host could be offline, blocked by a firewall (many cloud servers drop ICMP by default), or unreachable by routing.",
    usage: "First step in any 'is the network broken?' diagnosis. Ping your router to check the LAN, then ping `8.8.8.8` to test the internet, then ping a hostname to test DNS — each failure points at a different layer.",
    examples: [
      "ping google.com  # run until Ctrl+C",
      "ping -c 4 192.168.1.1  # send 4 packets to the router, then stop",
      "ping -i 0.2 host  # 5 pings per second (root only below 0.2s)",
      "ping -s 1400 host  # large payload — useful for finding MTU issues",
      "ping6 ::1  # ping over IPv6 (or use `ping -6`)"
    ],
    memoryTip: "`ping` is named after sonar: a submarine pings a target and listens for the echo. Time between ping and echo = round-trip latency. No echo = no contact.",
    outputExample: "$ ping -c 3 google.com\nPING google.com (142.250.185.46) 56(84) bytes of data.\n64 bytes from lga25s71-in-f14: icmp_seq=1 ttl=118 time=14.2 ms\n64 bytes from lga25s71-in-f14: icmp_seq=2 ttl=118 time=14.6 ms\n64 bytes from lga25s71-in-f14: icmp_seq=3 ttl=118 time=14.1 ms\n\n--- google.com ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max/mdev = 14.103/14.305/14.601/0.214 ms",
    category: "NETWORKING"
  },
  {
    id: "net2",
    question: "List your network interfaces and their IP addresses using `ip addr show`",
    answer: "ip addr show",
    explanation: "A 'network interface' is a virtual or physical doorway through which packets enter or leave your machine: Ethernet ports (`eth0`, `enp3s0`), WiFi adapters (`wlan0`, `wlp2s0`), the loopback `lo` (always 127.0.0.1, used for talking to yourself), VPNs (`tun0`), and Docker bridges (`docker0`). `ip addr show` (often abbreviated `ip a`) prints every interface with its state (UP/DOWN), MAC address (the hardware-burned-in unique ID), and any IPv4/IPv6 addresses assigned. The `inet` line is your IPv4 address; `inet6` is IPv6. The `ip` command replaced the older `ifconfig` years ago and is what every modern distro ships.",
    usage: "Find your machine's LAN IP before SSH'ing in from another device, verify WiFi connected and got a DHCP lease, or check if a VPN interface came up.",
    examples: [
      "ip addr show  # full listing of every interface",
      "ip a  # short alias, same output",
      "ip addr show eth0  # only the eth0 interface",
      "ip -4 addr  # IPv4 addresses only",
      "ip -br addr  # one-line-per-interface summary — much easier to skim"
    ],
    memoryTip: "`ip addr` = 'IP addresses'. The `ip` tool has sub-commands: `ip addr` (addresses), `ip link` (interface up/down/MAC), `ip route` (routing table), `ip neigh` (ARP). Same pattern every time.",
    outputExample: "$ ip -br addr\nlo               UNKNOWN        127.0.0.1/8 ::1/128\neth0             UP             192.168.1.42/24 fe80::a00:27ff:fe4e:5/64\nwlan0            DOWN\ndocker0          DOWN           172.17.0.1/16",
    category: "NETWORKING"
  },
  {
    id: "net3",
    question: "Download a file from an HTTP/HTTPS URL using the `wget` command",
    answer: "wget URL",
    explanation: "`wget` ('web get') is a non-interactive downloader: feed it a URL and it saves the file to the current directory using the URL's last path component as the filename. Compared to its sibling `curl`: `wget` defaults to SAVE-to-file, follows links recursively, and resumes interrupted downloads with `-c`; `curl` defaults to PRINT-to-stdout and is more flexible for API calls. Both ship on almost every system (sometimes only one — `wget` on Debian/Ubuntu by default, `curl` on RHEL/Fedora; install the other with apt/dnf). Useful flags: `-c` (continue partial download), `-O newname` (save with a specific name), `-O- ` (print to stdout, like curl's default), `-q` (quiet), `--limit-rate=1m` (throttle), `-r --level=N` (recursive mirror, N levels deep — handy for whole-site downloads but also great for accidentally hammering a server, be polite).",
    usage: "Downloading ISO images, release tarballs, or any single file from a URL. Resuming a download that got cut off. Mirroring a small website for offline reading.",
    examples: [
      "wget https://example.com/file.zip  # save as file.zip in current dir",
      "wget -c https://example.com/big.iso  # resume an interrupted download",
      "wget -O myname.tar.gz https://example.com/release.tar.gz  # rename on save",
      "wget -q -O- https://example.com/index.html | grep title  # print to stdout, no progress",
      "wget -r -np -k https://site.com/docs/  # mirror docs subtree (no parent, fix links)"
    ],
    memoryTip: "`wget` = 'web get' — defaults to SAVE to file. Mirror-image of `curl` which defaults to PRINT to stdout. `wget -c` resumes; `wget -O-` makes it act like curl. If neither is installed: `sudo apt install wget` or `sudo dnf install wget`.",
    outputExample: "$ wget https://example.com/file.zip\n--2026-05-15 14:32:10--  https://example.com/file.zip\nResolving example.com (example.com)... 93.184.216.34\nConnecting to example.com (example.com)|93.184.216.34|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 4194304 (4.0M) [application/zip]\nSaving to: 'file.zip'\n\nfile.zip          100%[==============>]   4.00M  12.5MB/s    in 0.3s\n\n2026-05-15 14:32:10 (12.5 MB/s) - 'file.zip' saved [4194304/4194304]",
    category: "NETWORKING"
  },
  {
    id: "net4",
    question: "Copy a file to a remote server over SSH using `scp file user@host:destination`",
    answer: "scp file user@host:destination",
    explanation: "`scp` ('secure copy') uses SSH under the hood to copy files between local and remote machines. Syntax: `scp SOURCE DEST` where either side can be `user@host:/path`. The colon is what tells `scp` 'this is remote' — a path without a colon is local. If `destination` ends with `/` or is an existing directory, the file is placed INSIDE it with its original name. Authentication is whatever your SSH config uses (typically a key in `~/.ssh/`). Add `-r` for recursive (whole folders), `-P PORT` for non-default SSH ports (capital P, unlike `ssh`'s lowercase `-p`), and `-i ~/.ssh/somekey` to use a specific key. NOTE: modern OpenSSH versions consider `scp` legacy and recommend `rsync` or `sftp` for new work, but `scp` is still everywhere and totally usable.",
    usage: "Pushing a built binary to a server. Pulling log files off a remote box for local analysis. Quick one-shot transfers when you don't need rsync's resume/delta features.",
    examples: [
      "scp report.pdf alice@server.com:/home/alice/  # upload to alice's home",
      "scp alice@server.com:/var/log/app.log .  # download to current dir",
      "scp -r project/ alice@server.com:/backups/  # whole folder, recursive",
      "scp -P 2222 file.txt alice@server.com:~/  # non-default SSH port",
      "rsync -avP file user@host:dest/  # better alternative: resume on failure, progress bar"
    ],
    memoryTip: "`scp` = Secure CoPy (over SSH). The COLON is the magic — `host:path` = remote, plain `path` = local. Capital `-P` for port (different from `ssh`'s `-p`). For anything beyond simple one-shot copies, prefer `rsync -avP`.",
    outputExample: "$ scp report.pdf alice@server.com:~/\nalice@server.com's password:\nreport.pdf                                100% 2456KB  12.3MB/s   00:00\n$ scp -r project/ alice@server.com:/backups/\nproject/README.md                         100% 1234     45.6KB/s   00:00\nproject/src/main.py                       100% 8901    234.5KB/s   00:00",
    category: "NETWORKING"
  },
  {
    id: "net5",
    question: "Open an encrypted remote shell on another machine with `ssh user@hostname`",
    answer: "ssh user@hostname",
    explanation: "`ssh` ('secure shell') logs you into a remote machine over an encrypted TCP connection (default port 22). You end up with a shell on the OTHER computer — every command runs there, not locally. Authentication: usually a SSH key pair (public key in `~/.ssh/authorized_keys` on the remote, private key in `~/.ssh/id_ed25519` locally) or password. Generate a key with `ssh-keygen -t ed25519`, copy it to the remote with `ssh-copy-id user@host`. Useful flags: `-p PORT` non-default port (lowercase p, unlike scp's `-P`), `-i ~/.ssh/keyfile` specific key, `-X`/`-Y` GUI forwarding (run remote graphical apps on your screen), `-L 8080:localhost:80` tunnel a remote port to your local machine, `-J jumphost user@target` connect via a jump-host (bastion). Common config lives in `~/.ssh/config` — set up host aliases there so you can type `ssh prod` instead of long command lines.",
    usage: "Logging into servers to administer them. Running a quick one-off command remotely: `ssh user@host 'df -h'`. Port-forwarding to access a remote-only service from your laptop.",
    examples: [
      "ssh alice@server.com  # interactive remote shell",
      "ssh alice@server.com 'df -h /'  # run a single remote command and exit",
      "ssh -p 2222 alice@server.com  # custom port",
      "ssh -L 8080:localhost:80 user@host  # tunnel: localhost:8080 → host:80",
      "ssh-copy-id alice@server.com  # install your public key for password-free login"
    ],
    memoryTip: "`ssh` = Secure SHell. Always `user@host` (omit `user@` if local username matches). For password-free login: `ssh-keygen` then `ssh-copy-id`. For frequently-used hosts, set up aliases in `~/.ssh/config`. To run one command without an interactive shell, just append the command in quotes.",
    outputExample: "$ ssh alice@server.com\nalice@server.com's password:\nWelcome to Ubuntu 24.04.1 LTS\nLast login: Fri May 15 09:00:01 2026 from 192.168.1.42\nalice@server:~$ hostname\nserver.com\nalice@server:~$ exit\nlogout\nConnection to server.com closed.\n$",
    category: "NETWORKING"
  },
  {
    id: "net6",
    question: "List listening TCP ports and the processes serving them with `sudo netstat -tlnp`",
    answer: "netstat -tlnp",
    explanation: "`netstat` is the classic network statistics tool. Flag breakdown: `-t` TCP only (omit for UDP+unix sockets too; add `-u` for UDP), `-l` only LISTENING sockets (otherwise you also see established connections), `-n` numeric (don't resolve hostnames or service names — much faster), `-p` show which PROCESS owns each socket (NEEDS sudo to see other users' processes). Modern replacement: `ss -tlnp` — same flags, faster, ships everywhere now. `netstat` itself is being deprecated; some minimal containers don't have it (install with `sudo apt install net-tools`). Output columns: Proto, Recv-Q/Send-Q (kernel buffer queues), Local Address (the `0.0.0.0:80` means 'listening on all interfaces, port 80'; `127.0.0.1:80` means 'only loopback'), Foreign Address, State (LISTEN/ESTABLISHED), PID/Program.",
    usage: "Answering 'what's already using port 80?' before starting a web server. Auditing 'what services is this box exposing to the network?'. Confirming a daemon actually came up and bound to its port.",
    examples: [
      "sudo netstat -tlnp  # listening TCP ports + owning process — the classic combo",
      "sudo netstat -tulnp  # add UDP too",
      "sudo ss -tlnp  # modern replacement (preferred — faster, fewer dependencies)",
      "sudo ss -tlnp 'sport = :80'  # only port 80 listeners",
      "sudo lsof -i :443  # alternative: who's using port 443?"
    ],
    memoryTip: "`netstat -tlnp` mnemonic: 'TCP Listening Numeric Process'. Modern equivalent: `ss -tlnp` (Socket Statistics — same flags). If neither is installed: `sudo apt install net-tools` or `iproute2`. Alternative for 'who's on port X?': `sudo lsof -i :X` or `sudo fuser X/tcp`.",
    outputExample: "$ sudo netstat -tlnp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address      Foreign Address  State    PID/Program name\ntcp        0      0 127.0.0.1:631      0.0.0.0:*        LISTEN   1234/cupsd\ntcp        0      0 0.0.0.0:22         0.0.0.0:*        LISTEN   1456/sshd\ntcp        0      0 0.0.0.0:80         0.0.0.0:*        LISTEN   2104/nginx: master\ntcp6       0      0 :::22              :::*             LISTEN   1456/sshd",
    category: "NETWORKING"
  },
  {
    id: "net7",
    question: "Resolve a domain name to its IP address(es) using the `nslookup` command",
    answer: "nslookup domain",
    explanation: "`nslookup` ('name server lookup') queries your DNS resolver and prints the IP address(es) for a hostname. It also prints which DNS SERVER answered (so you can tell if your laptop is using the router's DNS, an ISP DNS, or a public one like 8.8.8.8 / 1.1.1.1). For richer/easier output, modern admins prefer `dig` (from `dnsutils` / `bind-utils`); for one-line answers there's also `host`. To query a SPECIFIC DNS server instead of your default: `nslookup example.com 8.8.8.8`. To look up record types other than A: `nslookup -type=mx example.com` (mail servers), `nslookup -type=txt example.com` (TXT, includes SPF/DMARC), `nslookup -type=ns example.com` (authoritative servers). If DNS is broken on your machine, `nslookup` will time out or say 'connection timed out; no servers could be reached'.",
    usage: "Confirming a domain points at the IP you expect. Diagnosing 'is it DNS?' when a service is unreachable. Testing what a different DNS server (e.g. Google's 8.8.8.8) would resolve a name to.",
    examples: [
      "nslookup google.com  # default DNS answers with the A record",
      "nslookup google.com 8.8.8.8  # query Google's public DNS specifically",
      "nslookup -type=mx gmail.com  # mail exchanger records",
      "nslookup -type=txt example.com  # TXT records (SPF, DMARC, verification)",
      "dig +short example.com  # alternative — terser output, one IP per line"
    ],
    memoryTip: "`nslookup` = Name Server LOOKUP. Modern preference: `dig` (more detailed) or `host` (terser). Two-line check: `nslookup domain` then `nslookup domain 8.8.8.8` — if first fails and second works, your local DNS resolver is broken, not the world.",
    outputExample: "$ nslookup google.com\nServer:         192.168.1.1\nAddress:        192.168.1.1#53\n\nNon-authoritative answer:\nName:   google.com\nAddress: 142.250.185.46\nName:   google.com\nAddress: 2607:f8b0:4006:80f::200e\n\n$ nslookup -type=mx gmail.com 8.8.8.8\nServer:         8.8.8.8\nAddress:        8.8.8.8#53\n\nNon-authoritative answer:\ngmail.com       mail exchanger = 5 gmail-smtp-in.l.google.com.\ngmail.com       mail exchanger = 10 alt1.gmail-smtp-in.l.google.com.",
    category: "NETWORKING"
  },
  {
    id: "net8",
    question: "Print the kernel routing table with `ip route show` (where outgoing packets get sent)",
    answer: "ip route show",
    explanation: "Every outgoing packet asks the kernel: 'where do I go?' The routing table answers. Each entry is a destination network plus the interface and gateway to use. The MOST important entry is the `default via X dev Y` line — that's where everything-not-matched-elsewhere goes, i.e. your internet gateway. `ip route show` (also `ip r` or `ip r s` for short) prints them. Other entries you'll see: `192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.42` (the LAN you're directly on), `169.254.0.0/16 dev wlan0 scope link metric 1000` (link-local fallback). `metric` is the cost — when two routes match, the lower metric wins. The older `route -n` command shows the same info in a different layout.",
    usage: "Troubleshooting 'why can't I reach the internet?' (no default route, or the wrong one). Diagnosing VPN issues (does the VPN install a default route?). Checking which interface a specific destination would use.",
    examples: [
      "ip route show  # full routing table",
      "ip route  # shorter, same thing",
      "ip route get 8.8.8.8  # which interface/gateway would the kernel use to reach 8.8.8.8?",
      "ip route get 192.168.1.5  # confirm LAN traffic doesn't go through gateway",
      "sudo ip route add 10.0.0.0/24 via 192.168.1.254  # add a static route (temp; lost on reboot)"
    ],
    memoryTip: "`ip route` is part of the modern `iproute2` suite. Old `route -n` is deprecated but still works. Top of the table = most-specific match wins; `default` matches anything else. If `ip route show default` is empty, you have NO internet route — that's the bug.",
    outputExample: "$ ip route show\ndefault via 192.168.1.1 dev wlan0 proto dhcp metric 600\n169.254.0.0/16 dev wlan0 scope link metric 1000\n192.168.1.0/24 dev wlan0 proto kernel scope link src 192.168.1.42 metric 600\n$ ip route get 8.8.8.8\n8.8.8.8 via 192.168.1.1 dev wlan0 src 192.168.1.42 uid 1000",
    category: "NETWORKING"
  },
  {
    id: "net9",
    question: "Test whether a specific TCP port on a host is reachable using `telnet host port` (or modern `nc -zv host port`)",
    answer: "telnet host port",
    explanation: "`telnet` was originally an interactive remote-login protocol (predecessor of SSH, unencrypted, never use it for actual logins). Today its main use is as a 'is this TCP port open?' probe: `telnet host 80` either connects (port is listening — you'll see 'Connected to host') or fails (refused/timeout = port is closed or firewalled). Once connected you can type literal protocol commands — useful for poking at HTTP, SMTP, IMAP servers manually. Caveats: not always installed (`sudo apt install telnet` / `sudo dnf install telnet`); to QUIT once connected, press `Ctrl+]` then type `quit`. Modern preferred tool: `nc -zv host port` ('netcat zero-IO verbose') — does the connection check and reports without going interactive, exits with success/failure. Even more modern: `curl -v telnet://host:port` works too.",
    usage: "Quick port-open check from a server (does the firewall block 443?). Manually crafting an HTTP request to debug a misbehaving web server. Confirming an SMTP relay accepts connections.",
    examples: [
      "telnet google.com 443  # is 443 open? exit with Ctrl+] then 'quit'",
      "nc -zv google.com 443  # modern: just reports success/failure, no interactive shell",
      "nc -zv host 1-1000  # scan a range of ports",
      "echo 'GET / HTTP/1.0' | nc google.com 80  # manual HTTP request",
      "curl -v telnet://host:port  # one more way to do the same check"
    ],
    memoryTip: "`telnet` as a LOGIN tool is dead (use ssh). `telnet HOST PORT` as a 'is the port open?' tester is still useful. Modern equivalent: `nc -zv HOST PORT` (cleaner, scriptable). Inside an interactive telnet session, escape with `Ctrl+]` then type `quit`.",
    outputExample: "$ telnet google.com 443\nTrying 142.250.185.46...\nConnected to google.com.\nEscape character is '^]'.\n^]\ntelnet> quit\nConnection closed.\n\n$ nc -zv google.com 443\nConnection to google.com (142.250.185.46) 443 port [tcp/https] succeeded!\n\n$ nc -zv google.com 9999\nnc: connect to google.com port 9999 (tcp) failed: Connection refused",
    category: "NETWORKING"
  },
  {
    id: "net10",
    question: "Show ALL TCP connections (listening + established) with owning processes using `sudo ss -antp` (modern) or `sudo netstat -antp` (legacy)",
    answer: "sudo ss -antp",
    explanation: "Unlike net6 which used `-l` to show ONLY listening sockets, dropping `-l` shows EVERY TCP socket — listening servers AND active connections (ESTABLISHED, TIME_WAIT, CLOSE_WAIT, etc.). Flag breakdown for `ss -antp`: `-a` ALL (don't filter by state), `-n` numeric (no DNS/service name lookup — much faster), `-t` TCP, `-p` show process. Same for legacy `netstat -antp`. Useful states to recognize: LISTEN (server waiting), ESTABLISHED (open connection), TIME_WAIT (recently closed, kernel holding briefly to handle delayed packets — lots of these is usually normal after a busy server), CLOSE_WAIT (the OTHER side closed but our app hasn't closed its socket — often a BUG in your app), SYN_SENT (we're connecting), SYN_RECV (someone's connecting to us). Filter by state: `ss -ntp state established`. Filter by port: `ss -ntp 'dport = :443'` (destination port). Count connections per state: `ss -ant | awk '{print $1}' | sort | uniq -c`. `ss` is faster than `netstat` because it reads directly from the kernel via netlink rather than parsing `/proc/net/*`.",
    usage: "Investigating 'who is currently connected to my server?', counting connections during load tests, finding leaked CLOSE_WAIT sockets that indicate an app bug, or auditing outbound connections.",
    examples: [
      "sudo ss -antp  # all TCP connections with process",
      "sudo netstat -antp  # legacy equivalent",
      "sudo ss -ntp state established  # only ESTABLISHED connections",
      "sudo ss -ntp 'dport = :443'  # only outbound HTTPS",
      "sudo ss -ant | awk 'NR>1 {print $1}' | sort | uniq -c  # count per state",
      "sudo ss -ntp state close-wait  # find leaked CLOSE_WAIT sockets (app bug)"
    ],
    memoryTip: "`ss -antp` = All TCP Numeric Process. Add `state established` / `state listening` / etc. to filter. Modern, fast — `netstat` is being phased out. Watch CLOSE_WAIT — many lingering ones means an APP isn't closing sockets properly.",
    outputExample: "$ sudo ss -antp | head\nState        Recv-Q Send-Q  Local Address:Port    Peer Address:Port      Process\nLISTEN       0      128         0.0.0.0:22              0.0.0.0:*          users:((\"sshd\",pid=1432,fd=3))\nLISTEN       0      511         0.0.0.0:80              0.0.0.0:*          users:((\"nginx\",pid=2401,fd=6))\nESTAB        0      0      192.168.1.42:55232    142.250.185.46:443        users:((\"firefox\",pid=2412,fd=22))\nESTAB        0      0      192.168.1.42:22         192.168.1.5:48201       users:((\"sshd\",pid=8923,fd=4))\nTIME-WAIT    0      0      192.168.1.42:55321    142.250.185.46:443\nCLOSE-WAIT   0      0           127.0.0.1:8080      127.0.0.1:55321       users:((\"myapp\",pid=4521,fd=12))",
    category: "NETWORKING"
  },
  {
    id: "net11",
    question: "Send a BOUNDED number of pings (and stop automatically) with `ping -c 4 hostname` (POSIX-friendly version of `ping`)",
    answer: "ping -c 4 hostname",
    explanation: "By default `ping HOST` runs FOREVER on Linux until you press Ctrl+C — fine for interactive use but useless in scripts or one-shot checks. `-c COUNT` sends exactly COUNT packets and exits, printing summary stats: packet loss %, min/avg/max/mdev round-trip-time. Exit code is 0 only if AT LEAST ONE packet got a reply, non-zero if 100% loss — so `ping -c 3 host >/dev/null 2>&1 && echo up || echo down` is the standard 'is this reachable?' health check. Other timing flags: `-i SECONDS` interval between sends (root for < 0.2s); `-W SECONDS` per-packet timeout (default 10s — make this small in scripts so total wall time is bounded); `-w SECONDS` total deadline regardless of packets (the kill-switch). Combine: `ping -c 1 -W 2 host` = 'try once, give up after 2 seconds, success/failure'. Pair with `-q` for quiet (only the summary, no per-packet lines) when scripting. Modern alt for scripting: `nping` (from nmap) or just `nc -zv -w 2 host PORT` to test a specific port rather than ICMP.",
    usage: "Health-check scripts ('is the database server up?'), measuring sustained latency over N packets, or any one-shot reachability test that should TERMINATE.",
    examples: [
      "ping -c 4 google.com  # exactly 4 packets, then stop with summary",
      "ping -c 1 -W 2 host >/dev/null 2>&1 && echo up || echo down  # script health check",
      "ping -c 100 -q -i 0.2 host  # 100 fast pings, summary only",
      "ping -c 4 -W 1 host  # 4 packets, max 1s wait each",
      "for h in web1 web2 db1; do ping -c 1 -W 1 $h >/dev/null && echo \"$h UP\" || echo \"$h DOWN\"; done",
      "fping -c 3 web1 web2 web3  # PARALLEL ping of many hosts (install fping)"
    ],
    memoryTip: "`-c N` Count of packets, `-i SEC` Interval, `-W SEC` Wait-per-packet, `-w SEC` Whole-deadline. Exit code: 0 = at least one reply, non-zero = all lost. For HOSTS-IN-PARALLEL use `fping -c N host1 host2 ...`. For port-level health checks, `nc -zv -w 2 host PORT` is more direct.",
    outputExample: "$ ping -c 4 google.com\nPING google.com (142.250.185.46) 56(84) bytes of data.\n64 bytes from lga25s71-in-f14: icmp_seq=1 ttl=118 time=14.2 ms\n64 bytes from lga25s71-in-f14: icmp_seq=2 ttl=118 time=14.6 ms\n64 bytes from lga25s71-in-f14: icmp_seq=3 ttl=118 time=14.1 ms\n64 bytes from lga25s71-in-f14: icmp_seq=4 ttl=118 time=14.5 ms\n\n--- google.com ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3005ms\nrtt min/avg/max/mdev = 14.103/14.350/14.601/0.214 ms\n$ echo $?\n0",
    category: "NETWORKING"
  },
  {
    id: "net12",
    question: "Perform a concise DNS lookup (name → IP or IP → name) with the `host domain.com` command",
    answer: "host google.com",
    explanation: "`host` is the friendliest, terse DNS resolver — give it a HOSTNAME and it prints the IPv4 A record, IPv6 AAAA record, and any mail-server MX records on a few short lines. Give it an IP ADDRESS and it does a REVERSE LOOKUP (PTR record) returning the canonical hostname. Compare to `dig` (more detailed, scriptable, default for admins) and `nslookup` (interactive, also widely available). All three resolve through `/etc/resolv.conf` to find a DNS server unless you specify one (`host google.com 8.8.8.8` queries Google's public resolver). Useful flags: `-v` verbose (raw DNS protocol details); `-t TYPE` look up a specific record type (`-t MX` mail, `-t TXT` text/SPF/DMARC, `-t NS` name servers, `-t CNAME` aliases, `-t SOA` zone info); `-a` ALL types. From the `bind-utils` (Fedora/RHEL) or `dnsutils` (Debian/Ubuntu) package — install if missing. Reverse lookups don't always work: only configured if the IP's owner published a PTR record. Failed reverse looks like 'reverse mapping checking ... 3(NXDOMAIN)'.",
    usage: "Quick sanity check that DNS is working, finding the IP behind a website name, identifying a remote IP that appeared in your logs (reverse lookup), or confirming MX records are correct after a DNS change.",
    examples: [
      "host google.com  # forward lookup: name → IP + IPv6 + mail",
      "host 8.8.8.8  # reverse lookup: IP → hostname (PTR)",
      "host -t MX gmail.com  # specifically mail exchanger records",
      "host -t TXT example.com  # TXT records (SPF, DMARC, domain verification)",
      "host google.com 1.1.1.1  # use Cloudflare's public DNS, not your default",
      "host -a example.com  # show ALL record types"
    ],
    memoryTip: "Three DNS tools: `host` (terse, friendly), `dig` (detailed, admin-default), `nslookup` (interactive/legacy). `host NAME` forward. `host IP` reverse. `-t TYPE` for specific record (MX/TXT/NS/CNAME). `host NAME @SERVER` queries a specific resolver.",
    outputExample: "$ host google.com\ngoogle.com has address 142.250.185.46\ngoogle.com has IPv6 address 2607:f8b0:4004:81d::200e\ngoogle.com mail is handled by 10 smtp.google.com.\n$ host 8.8.8.8\n8.8.8.8.in-addr.arpa domain name pointer dns.google.\n$ host -t MX gmail.com\ngmail.com mail is handled by 5 gmail-smtp-in.l.google.com.\ngmail.com mail is handled by 10 alt1.gmail-smtp-in.l.google.com.\n$ host -t TXT example.com | head -3\nexample.com descriptive text \"v=spf1 -all\"\nexample.com descriptive text \"_dmarc.example.com\"",
    category: "NETWORKING"
  },
  {
    id: "net13",
    question: "Show every router (hop) packets pass through to reach a destination with `traceroute hostname`",
    answer: "traceroute hostname",
    explanation: "`traceroute` reveals the network path: each ROUTER (hop) between your machine and the destination. It works by sending packets with deliberately tiny TTL (Time To Live) values — TTL=1 expires at the first hop, which sends back an ICMP 'Time Exceeded' message revealing itself; TTL=2 reaches hop 2; and so on. Each hop shows three round-trip times (one per probe). `*` instead of a time means that hop didn't reply (often firewalled — many routers drop ICMP responses on purpose). Hops are NOT the bottleneck just because they're slow — only consistent loss or HUGE jumps in latency between hops point at a problem; one slow hop with fast subsequent hops is usually rate-limiting at the slow hop, not a real network slowdown. Modern alternative: `mtr HOST` (My TraceRoute) keeps the trace running and updates loss/latency per hop continuously — far more useful for diagnosing intermittent issues. On Windows the equivalent is `tracert`. Some networks block traceroute entirely — use `-T` (TCP traceroute) or `-I` (ICMP) variants if UDP (default) fails. Install with `apt install traceroute` if missing.",
    usage: "Diagnosing slow connections by seeing which hop is laggy, identifying that a route problem is on YOUR side vs. the ISP, or proving a packet IS reaching the destination's network.",
    examples: [
      "traceroute google.com  # default UDP trace",
      "traceroute -n google.com  # numeric only — skip reverse DNS (faster)",
      "traceroute -T -p 443 google.com  # TCP traceroute to port 443 (bypasses some firewalls)",
      "traceroute -I google.com  # ICMP echo (like Windows tracert)",
      "mtr -r -c 10 google.com  # MTR report mode: 10 cycles, batch output",
      "traceroute -m 20 host  # cap at 20 hops (default 30)"
    ],
    memoryTip: "`traceroute` = path discovery via expiring TTL packets. Each hop = one router. `*` = hop didn't reply (often firewalled, not necessarily down). Modern preferred: `mtr` (continuous trace with rolling loss/latency). Variants: `-T` TCP, `-I` ICMP, `-U` UDP (default).",
    outputExample: "$ traceroute -n google.com\ntraceroute to google.com (142.250.185.46), 30 hops max, 60 byte packets\n 1  192.168.1.1     1.234 ms  1.142 ms  1.089 ms\n 2  10.0.0.1        5.678 ms  5.523 ms  5.421 ms\n 3  72.14.213.69    8.234 ms  8.012 ms  7.891 ms\n 4  108.170.250.34  12.345 ms  12.103 ms  11.987 ms\n 5  * * *\n 6  142.250.185.46  14.234 ms  14.103 ms  13.987 ms\n$ mtr -r -c 3 google.com\nStart: 2026-05-17T14:35:00\nHOST: web1                            Loss%   Snt   Last   Avg  Best  Wrst StDev\n  1.|-- 192.168.1.1                    0.0%     3    1.2   1.1   1.0   1.2   0.1\n  2.|-- 10.0.0.1                       0.0%     3    5.7   5.5   5.4   5.7   0.2",
    category: "NETWORKING"
  },
  {
    id: "net14",
    question: "Bring a network interface UP or DOWN using `sudo ip link set eth0 up` (or `down`)",
    answer: "sudo ip link set eth0 up",
    explanation: "`ip link` manages the LINK LAYER (Layer 2) of a network interface — whether it's enabled, its MAC address, its MTU, etc. — separately from `ip addr` which manages IP addresses. `ip link set IFACE up` enables the interface; `down` disables it (a frequent quick-fix when an interface gets stuck — `down` then `up` is the Linux 'turn it off and on again'). View all interfaces with `ip link show` (or just `ip link`). Each interface has FLAGS in angle brackets: `UP` (administratively enabled, you set it), `LOWER_UP` (the underlying CABLE/wireless is connected — set by hardware), `BROADCAST`, `MULTICAST`, `RUNNING`. UP without LOWER_UP usually means 'enabled but cable unplugged' or 'wifi radio not associated'. Modify MAC: `sudo ip link set eth0 address aa:bb:cc:dd:ee:ff` (must be down first). Change MTU: `sudo ip link set eth0 mtu 9000` (for jumbo frames). Rename: `sudo ip link set eth0 name net0`. The legacy alternative was `ifconfig eth0 up` — still works on systems with `net-tools` installed but deprecated. To persist changes across reboot, configure via NetworkManager (`nmcli`), systemd-networkd, or `/etc/network/interfaces` depending on distro.",
    usage: "Disabling a misbehaving interface to force a re-DHCP, troubleshooting 'it stopped working' by toggling, changing MTU for jumbo frames, or spoofing a MAC address.",
    examples: [
      "sudo ip link set eth0 up  # bring interface up",
      "sudo ip link set eth0 down  # take it down (kills active connections)",
      "ip link show  # list all interfaces with state and flags",
      "ip link show eth0  # just one interface",
      "sudo ip link set eth0 mtu 9000  # enable jumbo frames",
      "sudo ip link set eth0 address aa:bb:cc:11:22:33  # change MAC (must be down)"
    ],
    memoryTip: "`ip link` = LAYER 2 (link). `ip addr` = LAYER 3 (IP). Verbs: `set IFACE up`/`down`, `set IFACE mtu N`, `set IFACE address MAC`, `set IFACE name NEW`. Flags to know: `UP` (admin enabled), `LOWER_UP` (cable/wifi connected — hardware), `RUNNING`.",
    outputExample: "$ ip link show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff\n$ sudo ip link set eth0 down\n$ ip link show eth0\n2: eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff\n$ sudo ip link set eth0 up\n$ ip link show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff",
    category: "NETWORKING"
  },
  {
    id: "net15",
    question: "Ask the kernel which route it WOULD use to reach a specific IP with `ip route get DEST_IP`",
    answer: "ip route get 8.8.8.8",
    explanation: "While `ip route show` (net8) dumps the WHOLE routing table, `ip route get IP` answers the more targeted question: 'if I sent a packet to IP right now, which route does the kernel pick?' The kernel evaluates its rules (multiple tables, source-based routing, metric tiebreakers) and tells you exactly: the destination, the gateway used (`via X`), the outgoing interface (`dev Y`), the SOURCE address the kernel would use (`src Z`), and any uid/oif constraints. Invaluable for debugging multi-interface setups (VPN + LAN + WAN simultaneously): `ip route get 10.0.0.5` may show traffic goes via VPN; `ip route get 8.8.8.8` may show the LAN gateway. Add `from IP` to ask 'what if a packet had this source?': `ip route get to 8.8.8.8 from 10.0.0.5`. Combined with `ip rule list` (which prints policy-based routing rules — the META rules that pick which routing table to consult), this is THE pair for unraveling complex routing. The legacy alternative is `route -n` which only shows the main table and can't answer 'what would happen for IP X?'.",
    usage: "Debugging 'why does traffic go through the wrong interface?', confirming VPN catches expected destinations, or auditing the effective route for a specific IP.",
    examples: [
      "ip route get 8.8.8.8  # which path to public DNS?",
      "ip route get 10.0.0.5  # which path to a LAN/VPN IP?",
      "ip route get to 1.1.1.1 from 192.168.1.42  # specify source IP",
      "ip route show  # the whole routing table (net8)",
      "ip rule list  # policy rules that select WHICH table to use",
      "ip route show table all | head -20  # ALL tables, not just 'main'"
    ],
    memoryTip: "`ip route show` = whole table. `ip route get DEST` = 'for THIS dest, which rule wins?'. Pair with `ip rule list` for policy-based routing (multiple tables). Read fields: `via GW` (gateway), `dev IF` (interface), `src ADDR` (source IP we'd use).",
    outputExample: "$ ip route get 8.8.8.8\n8.8.8.8 via 192.168.1.1 dev wlan0 src 192.168.1.42 uid 1000\n    cache\n$ ip route get 10.0.0.5\n10.0.0.5 via 10.8.0.1 dev tun0 src 10.8.0.42 uid 1000\n    cache\n$ ip rule list\n0:      from all lookup local\n100:    from 10.8.0.0/24 lookup vpn\n32766:  from all lookup main\n32767:  from all lookup default",
    category: "NETWORKING"
  },
  {
    id: "net16",
    question: "Capture packets going through network interface `eth0` with `sudo tcpdump -i eth0`",
    answer: "tcpdump -i eth0",
    explanation: "`tcpdump` is the venerable packet sniffer: it asks the kernel to copy every packet (or only matching ones) crossing an interface to your terminal. Needs `sudo` because raw packet capture is privileged. The `-i IFACE` flag picks which interface — common names are `eth0`/`enp3s0` (wired), `wlan0`/`wlp2s0` (wireless), `lo` (loopback, traffic to/from your own machine), or `any` (all interfaces). Find your interfaces with `ip link show`. Useful flags: `-n` skip DNS resolution (much faster, IPs only), `-c N` stop after N packets, `-w file.pcap` save to a binary file for Wireshark, `-r file.pcap` replay one. After `-i IFACE` you can add a BPF filter expression in quotes: `'port 443'`, `'host 8.8.8.8'`, `'tcp and not port 22'`. Install with `sudo apt install tcpdump` or `sudo dnf install tcpdump` if missing.",
    usage: "Diagnosing why an app can't reach a server (are packets even leaving? are responses coming back?). Confirming a port is in use. Capturing traffic into a `.pcap` file for graphical inspection in Wireshark later.",
    examples: [
      "sudo tcpdump -i any -n -c 20  # 20 packets on any interface, no DNS lookup",
      "sudo tcpdump -i eth0 'port 53'  # only DNS traffic",
      "sudo tcpdump -i eth0 'host 8.8.8.8 and tcp'  # only TCP to/from 8.8.8.8",
      "sudo tcpdump -i eth0 -w capture.pcap  # save raw packets for Wireshark",
      "sudo tcpdump -r capture.pcap 'port 443'  # replay a pcap with a filter"
    ],
    memoryTip: "`tcpdump` = TCP DUMP (but it captures UDP/ICMP/etc. too — name is historical). Always needs `sudo`. The filter syntax is called BPF — `host X`, `port N`, `tcp`, `udp`, combined with `and`/`or`/`not`. For visual analysis save with `-w` and open in Wireshark.",
    outputExample: "$ sudo tcpdump -i eth0 -n -c 5\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes\n14:35:20.123456 IP 192.168.1.42.54321 > 8.8.8.8.53: 12345+ A? example.com. (29)\n14:35:20.130012 IP 8.8.8.8.53 > 192.168.1.42.54321: 12345 1/0/0 A 93.184.216.34 (45)\n14:35:20.131245 IP 192.168.1.42.41234 > 93.184.216.34.443: Flags [S], seq 1234567\n14:35:20.140891 IP 93.184.216.34.443 > 192.168.1.42.41234: Flags [S.], seq 7654321, ack 1234568\n14:35:20.141012 IP 192.168.1.42.41234 > 93.184.216.34.443: Flags [.], ack 1, win 502\n5 packets captured",
    category: "NETWORKING"
  },
  {
    id: "net17",
    question: "Manually assign an additional IP address to a network interface with `sudo ip addr add 192.168.1.50/24 dev eth0`",
    answer: "sudo ip addr add 192.168.1.50/24 dev eth0",
    explanation: "`ip addr add IP/PREFIX dev IFACE` attaches a new IPv4/IPv6 address to an interface, AT RUNTIME. The `/PREFIX` is the netmask in CIDR notation: `/24` = 255.255.255.0 (256 addresses), `/16` = 255.255.0.0, `/32` = a single host. Linux supports MULTIPLE IPs on one interface — useful for hosting many sites on one box without VLANs, or temporarily bringing up a service IP. View with `ip addr show eth0`; new IPs show as `scope global secondary` to mark them as not the primary. Remove with `ip addr del IP/PREFIX dev IFACE` (same syntax, swap verb). To wipe ALL non-link-local addresses from an interface: `sudo ip addr flush dev eth0`. CRITICAL: this is RUNTIME only — gone on reboot. For persistent configuration, use NetworkManager (`nmcli`), systemd-networkd's `*.network` files in `/etc/systemd/network/`, Netplan on Ubuntu (`/etc/netplan/*.yaml`), or `/etc/network/interfaces` on classic Debian. Foot-gun: if you remove the interface's PRIMARY address (the one your default route depends on), you lose connectivity instantly — bad if you're SSHed in! Always test on console first.",
    usage: "Temporarily adding a service IP for a quick test or migration, bringing up an extra IP on a load-balancer host, or fixing a DHCP misconfiguration manually.",
    examples: [
      "sudo ip addr add 192.168.1.50/24 dev eth0  # add a secondary IPv4",
      "sudo ip addr add 2001:db8::1/64 dev eth0  # add an IPv6 address",
      "sudo ip addr del 192.168.1.50/24 dev eth0  # remove that IP",
      "sudo ip addr flush dev eth0  # wipe ALL addresses on eth0 (caution!)",
      "ip addr show eth0  # verify after",
      "sudo ip addr add 10.0.0.5/32 dev lo  # bind a service IP to loopback (common for keepalived/HA)"
    ],
    memoryTip: "`ip addr add IP/PREFIX dev IFACE` adds; `ip addr del` removes; `ip addr flush` wipes. CIDR `/24` = 256 addresses, `/32` = single host. RUNTIME ONLY — gone on reboot. For persistence: NetworkManager / netplan / systemd-networkd / `/etc/network/interfaces`. Don't remove the PRIMARY IP if you're SSHed in!",
    outputExample: "$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.42/24 brd 192.168.1.255 scope global dynamic eth0\n$ sudo ip addr add 192.168.1.50/24 dev eth0\n$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.42/24 brd 192.168.1.255 scope global dynamic eth0\n    inet 192.168.1.50/24 scope global secondary eth0\n$ ping -c1 192.168.1.50  # other hosts on the LAN can now reach this IP too\n64 bytes from 192.168.1.50: icmp_seq=1 ttl=64 time=0.045 ms",
    category: "NETWORKING"
  },
  {
    id: "net18",
    question: "Test whether a specific TCP port on a host is reachable (no shell, just connect/fail) with `nc -zv host port`",
    answer: "nc -zv hostname port",
    explanation: "`nc` (netcat) is the 'Swiss army knife of networking' — it can do raw TCP/UDP I/O, port scanning, banner grabbing, file transfer, and chat. For health checks the magic combo is `-z -v -w SECS`: `-z` ZERO I/O mode (just open and close — don't actually send data), `-v` VERBOSE (print a one-line result so you can read it), `-w N` timeout in N seconds (default is no timeout — connections to dead IPs can hang forever without this). Exit code is 0 if connection succeeded, non-zero if refused/timed out — so `nc -zv -w 2 host 443 && echo open || echo closed` is the standard scriptable port check. To scan a port RANGE: `nc -zv -w 1 host 1-1000` tries every port from 1 to 1000 (slow — for serious scanning use `nmap`). For UDP add `-u` (but UDP detection is unreliable — UDP has no handshake, so `nc -zu` only confirms 'no ICMP-unreachable came back' which doesn't mean the port is open). To actually SEND/receive data and inspect a service: drop `-z` and netcat becomes interactive: `echo 'GET / HTTP/1.0\\r\\n\\r\\n' | nc google.com 80` — manual HTTP. Multiple `nc` implementations exist (BSD nc default on most Linux; `ncat` from nmap is more powerful); flags differ slightly between them.",
    usage: "Confirming a firewall opened, validating that a port-forward works, or scripting reachability checks for services.",
    examples: [
      "nc -zv google.com 443  # is 443 reachable?",
      "nc -zv -w 2 host 22  # SSH check with 2-second timeout",
      "nc -zv -w 1 host 80 443 8080  # check multiple ports (some nc versions)",
      "nc -zv host 1-1024  # scan port range (slow — use nmap for serious scanning)",
      "echo -e 'GET / HTTP/1.0\\r\\n\\r\\n' | nc -w 2 example.com 80 | head  # manual HTTP",
      "for p in 22 80 443 3306; do nc -zv -w 1 server $p 2>&1 | grep -E 'succeeded|failed'; done"
    ],
    memoryTip: "`nc -zv host port` = Zero-I/O + Verbose port check. ALWAYS add `-w SEC` timeout or it can hang forever. Exit 0 = open, non-zero = closed/filtered. UDP with `-u` is unreliable (no handshake). For real port scans, use `nmap`. Modern alt: `ncat` (from nmap-ncat).",
    outputExample: "$ nc -zv google.com 443\nConnection to google.com (142.250.185.46) 443 port [tcp/https] succeeded!\n$ nc -zv -w 2 google.com 12345\nnc: connect to google.com (142.250.185.46) port 12345 (tcp) failed: Connection refused\n$ for p in 22 80 443 3306 5432; do nc -zv -w 1 web1 $p 2>&1 | head -1; done\nConnection to web1 22 port [tcp/ssh] succeeded!\nConnection to web1 80 port [tcp/http] succeeded!\nConnection to web1 443 port [tcp/https] succeeded!\nnc: connect to web1 port 3306 (tcp) failed: Connection refused\nnc: connect to web1 port 5432 (tcp) failed: Connection refused",
    category: "NETWORKING"
  },
  {
    id: "net19",
    question: "Make a quick HTTP request and print just the response body or headers with `curl -fsSL url` (and `-I` for headers only)",
    answer: "curl -fsSL https://example.com",
    explanation: "`curl` is the Swiss-army HTTP client (also supports FTP, SCP, IMAP, etc.) — the everyday tool for web API testing and downloads. The flag combo `-fsSL` is so common it should be muscle memory: `-f` FAIL silently on HTTP errors (exit non-zero on 4xx/5xx rather than printing the error page); `-s` SILENT (no progress bar); `-S` show ERRORS even with `-s` (so you don't get silent failures); `-L` follow REDIRECTS (curl doesn't by default — without `-L` you'd see a 301 page and no real content). Other essentials: `-o FILE` save to file (vs default print to stdout), `-O` save with the URL's filename (like wget), `-I` HEAD request — fetch only response HEADERS (great for checking status codes, content-type, length), `-X METHOD` HTTP verb (POST/PUT/DELETE), `-d 'data'` body, `-H 'Header: value'` custom header, `-u user:pass` basic auth, `-k` skip TLS cert verification (DANGEROUS — only for local debugging), `-v` verbose (show full request and response headers), `-w '%{http_code}'` extract specific data after the request. Pipe-safe: `curl URL | jq .` for JSON, `curl URL | sh` for installing scripts (NEVER do this with untrusted URLs — you're running arbitrary code as your user). Modern alt: `wget` (more file-download oriented) or `httpie` (`http GET URL` — friendlier).",
    usage: "API testing from the command line, downloading single files in scripts, checking HTTP status codes, debugging redirect chains, or installing scripts via the `curl | sh` pattern (with caution).",
    examples: [
      "curl https://example.com  # GET the page, print body to stdout",
      "curl -fsSL https://example.com  # canonical 'fail-on-error, silent, follow-redirect' download",
      "curl -I https://example.com  # HEAD request — headers only, no body",
      "curl -X POST -d '{\"name\":\"Alice\"}' -H 'Content-Type: application/json' https://api.example.com/users",
      "curl -o file.zip https://example.com/file.zip  # save to file",
      "curl -w '%{http_code}\\n' -o /dev/null -s https://example.com  # just the status code"
    ],
    memoryTip: "`-fsSL` = Fail + Silent + Show-errors + Follow-redirects. `-I` HEAD. `-X` method. `-d` body. `-H` header. `-u user:pass` basic auth. `-w` extract field. The fail-fast pattern: `curl -fsSL URL` exits non-zero on 4xx/5xx — never silently use HTML error pages as data.",
    outputExample: "$ curl -I https://example.com\nHTTP/2 200\ncontent-type: text/html; charset=UTF-8\ncontent-length: 1256\ndate: Sat, 17 May 2026 14:35:22 GMT\nlast-modified: Thu, 17 Oct 2019 07:18:26 GMT\n\n$ curl -w '%{http_code} %{time_total}s %{size_download}b\\n' -o /dev/null -s https://example.com\n200 0.103s 1256b\n$ curl -fsS https://api.github.com/users/torvalds | jq -r '.public_repos'\n9",
    category: "NETWORKING"
  },
  {
    id: "net20",
    question: "Perform a detailed DNS lookup with full record info using `dig domain.com` (the admin's DNS tool)",
    answer: "dig google.com",
    explanation: "`dig` (Domain Information Groper) is the professional DNS lookup tool — more detailed than `host`, more scriptable than `nslookup`. By default it shows the full DNS response: HEADER (status, flags, query/answer counts), QUESTION section (what you asked), ANSWER section (the records), AUTHORITY section (which servers are authoritative), ADDITIONAL section (glue records), and timing/server info. For terse output add `+short` (just the data — perfect for scripts: `dig +short google.com` returns one IP per line). Specify record TYPE as the last arg: `dig google.com MX` (mail), `dig google.com TXT` (text), `dig google.com NS` (name servers), `dig google.com ANY` (everything — many servers refuse). Specify server with `@SERVER`: `dig @8.8.8.8 google.com` queries Google's public DNS, useful for comparing what your local resolver vs the world sees. Reverse DNS: `dig -x 8.8.8.8`. Useful options: `+trace` walks the DNS hierarchy from root servers (great for debugging delegation issues — slow but illuminating); `+norecurse` for asking authoritative servers directly; `+nocmd +noall +answer` for minimal output. Install with `apt install dnsutils` (Debian) or `dnf install bind-utils` (Fedora). For a one-line scripty alt: `host -t TYPE domain`.",
    usage: "Debugging DNS propagation after a record change, comparing what different resolvers see, checking SPF/DKIM/DMARC records, or tracing a delegation chain root-down.",
    examples: [
      "dig google.com  # full detailed lookup",
      "dig +short google.com  # just the answer, scripting-friendly",
      "dig google.com MX  # mail exchanger records",
      "dig google.com TXT +short  # TXT records (SPF, DMARC)",
      "dig @8.8.8.8 google.com  # query Google's DNS specifically",
      "dig +trace example.com  # walk delegation from root — diagnose propagation"
    ],
    memoryTip: "`dig` = DNS power tool. `+short` for scripts, `TYPE` (MX/TXT/NS/CNAME/SOA) at end, `@SERVER` to query a specific resolver, `+trace` to walk delegation, `-x IP` reverse lookup. Concise alt: `host`. Both ship in dnsutils/bind-utils package.",
    outputExample: "$ dig +short google.com\n142.250.185.46\n$ dig google.com MX +short\n10 smtp.google.com.\n$ dig google.com\n; <<>> DiG 9.18.28 <<>> google.com\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345\n;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;google.com.\t\t\tIN\tA\n\n;; ANSWER SECTION:\ngoogle.com.\t\t300\tIN\tA\t142.250.185.46\n\n;; Query time: 14 msec\n;; SERVER: 192.168.1.1#53(192.168.1.1) (UDP)\n;; WHEN: Sat May 17 14:35:22 UTC 2026\n;; MSG SIZE  rcvd: 55",
    category: "NETWORKING"
  },

  // TEXT PROCESSING
  {
    id: "text1",
    question: "Find lines containing a pattern",
    answer: "grep pattern file",
    explanation: "'grep' searches for lines matching a pattern. It's one of the most powerful text processing tools.",
    usage: "Search through files for specific content, filter output, or find configuration entries.",
    examples: [
      "grep 'error' /var/log/apache2/error.log  # Find error lines",
      "grep -r 'TODO' .  # Search recursively for TODO comments",
      "grep -i 'linux' file.txt  # Case-insensitive search"
    ],
    memoryTip: "grep = search. Like using find function to search for text.",
    outputExample: "$ grep 'pattern' file.txt\nline with pattern",
    category: "TEXT PROCESSING"
  },
  {
    id: "text2",
    question: "Replace every occurrence of `old` with `new` in a file using `sed 's/old/new/g' file`",
    answer: "sed 's/old/new/g' file",
    explanation: "`sed` ('stream editor') reads input line by line, applies an editing PROGRAM to each line, and prints the result. Its most common command is `s` (substitute): `s/PATTERN/REPLACEMENT/FLAGS`. Flags after the closing slash: `g` ('global') replaces ALL matches on each line (without `g`, only the first match per line is replaced); `i` case-insensitive; a number `2` replaces just the Nth match; combine like `gi`. PATTERN is a regex (BRE by default; `-E` switches to ERE for `+`, `?`, `|`, `()`). By default `sed` prints to stdout and does NOT modify the file. To EDIT IN PLACE add `-i`: `sed -i 's/old/new/g' file` (GNU); on macOS BSD-sed requires `-i ''`. Always make a backup the first few times: `sed -i.bak 's/.../.../' file` keeps `file.bak` as the original. Delimiters don't have to be `/` — use `s|old|new|` if your pattern contains slashes, e.g. paths: `s|/old/path|/new/path|g`.",
    usage: "Search-and-replace across config files. Stripping out unwanted lines (`sed '/pattern/d'` deletes matching lines). Quick reformatting in pipes (`command | sed 's/foo/bar/g'`).",
    examples: [
      "sed 's/old/new/g' file.txt  # print result to stdout — file unchanged",
      "sed -i 's/old/new/g' file.txt  # modify the file IN PLACE (GNU sed)",
      "sed -i.bak 's/old/new/g' file.txt  # in-place, but save original as file.txt.bak",
      "sed '/^#/d' config.ini  # delete every comment line (starts with #)",
      "sed -E 's/[0-9]+/NUM/g' file  # extended regex: replace any number with 'NUM'"
    ],
    memoryTip: "`sed` = Stream EDitor. `s/old/new/g` mnemonic: 'substitute / old / with / new / globally'. Without `g`, only the FIRST match per line is replaced. Without `-i`, the FILE is NOT modified — sed only prints to stdout. Always test once without `-i` before doing the destructive edit.",
    outputExample: "$ cat hello.txt\nhello world\nhello again\n$ sed 's/hello/goodbye/' hello.txt\ngoodbye world\ngoodbye again\n$ sed 's/o/O/g' hello.txt\nhellO wOrld\nhellO again\n$ sed -i.bak 's/hello/hi/g' hello.txt\n$ cat hello.txt\nhi world\nhi again\n$ cat hello.txt.bak\nhello world\nhello again",
    category: "TEXT PROCESSING"
  },
  {
    id: "text3",
    question: "Extract specific columns",
    answer: "awk '{print $1}' file",
    explanation: "'awk' is a programming language designed for text processing and data extraction.",
    usage: "Extract and manipulate columnar data, perform calculations on text files, or format output.",
    examples: [
      "awk '{print $1, $3}' file.txt  # Print columns 1 and 3",
      "awk '$3 > 100 {print $1}' file.txt  # Print lines where column 3 > 100",
      "awk '{sum += $2} END {print sum}' file.txt  # Sum column 2"
    ],
    memoryTip: "'awk' = powerful text processor. Like using advanced filtering to extract exactly what you need.",
    outputExample: "$ awk '{print $1}' people.txt\nJohn\nJane\nBob",
    category: "TEXT PROCESSING"
  },
  {
    id: "text4",
    question: "Sort lines in a file",
    answer: "sort file",
    explanation: "'sort' arranges lines in alphabetical or numerical order.",
    usage: "Organize data for readability, prepare for further processing, or create sorted lists.",
    examples: [
      "sort names.txt  # Alphabetical sort",
      "sort -n numbers.txt  # Numeric sort",
      "sort -k 2 file.txt  # Sort by second column"
    ],
    memoryTip: "sort = organize. Like arranging items in order.",
    outputExample: "$ sort names.txt\nAlice\nBob\nCharlie",
    category: "TEXT PROCESSING"
  },
  {
    id: "text5",
    question: "Collapse adjacent duplicate lines with the `uniq` command (must `sort` first for non-adjacent duplicates)",
    answer: "sort file | uniq",
    explanation: "`uniq` reads input line-by-line and collapses CONSECUTIVE identical lines into a single occurrence. This adjacency requirement is the #1 gotcha: `uniq` will NOT find non-adjacent duplicates — you must `sort` first so duplicates cluster together. The canonical pattern is `sort file | uniq`. Useful flags: `-c` (count — prefix each unique line with its occurrence count, see daily21), `-d` (DUPLICATES only — show only lines that appear more than once), `-u` (UNIQUE only — opposite, show lines that appear exactly once), `-i` (case-insensitive comparison), `-f N` (skip first N fields when comparing), `-w N` (compare only first N chars). To deduplicate WITHOUT sorting (preserve original order), use `awk '!seen[$0]++' file` instead. To count and rank: `sort | uniq -c | sort -rn` (see daily21).",
    usage: "Cleaning up duplicate lines in a list, finding which entries repeat, counting frequency of items, or finding the truly-unique lines in a file.",
    examples: [
      "sort users.txt | uniq  # deduplicate (sort required for non-adjacent dups)",
      "sort file.txt | uniq -c  # count occurrences of each unique line",
      "sort file.txt | uniq -d  # show only lines that have DUPLICATES",
      "sort file.txt | uniq -u  # show only lines that appear EXACTLY ONCE",
      "awk '!seen[$0]++' file.txt  # dedup WITHOUT sorting (preserve order)",
      "sort -u file.txt  # sort + uniq combined — same result as `sort | uniq`"
    ],
    memoryTip: "`uniq` only collapses ADJACENT duplicates — always `sort` first or use `sort -u` (sort + uniq in one). Flags: `-c` count, `-d` only duplicates, `-u` only unique. Order-preserving dedup: `awk '!seen[$0]++'`.",
    outputExample: "$ cat names.txt\nalice\nbob\nalice\nalice\ncharlie\nbob\n$ uniq names.txt  # NOT what you want — adjacent only\nalice\nbob\nalice\ncharlie\nbob\n$ sort names.txt | uniq  # correct\nalice\nbob\ncharlie\n$ sort names.txt | uniq -c\n      3 alice\n      2 bob\n      1 charlie",
    category: "TEXT PROCESSING"
  },
  {
    id: "text6",
    question: "Use the `tr` command to translate characters (e.g. lowercase to uppercase) from stdin",
    answer: "tr 'a-z' 'A-Z' < file",
    explanation: "`tr` ('translate') is a single-character substitution and deletion tool. Critical detail: `tr` ONLY reads from stdin — it does NOT take a filename as an argument. You must use `< file` (input redirection) or pipe into it. It takes two character SETS: every character in set 1 is replaced by the corresponding character in set 2. Ranges like `a-z` and POSIX classes like `[:lower:]`, `[:digit:]`, `[:space:]` are supported. Common modes: `tr A B` swap chars, `tr -d X` delete chars in set, `tr -s X` squeeze consecutive duplicates into one, `tr -c A B` complement (translate everything NOT in set A). `tr` is for ONE-character-at-a-time work; for word/pattern substitution use `sed`.",
    usage: "Quick case conversion in scripts. Stripping carriage returns from Windows-format files (`tr -d '\\r'`). Replacing delimiters (commas to newlines). Normalizing whitespace (`tr -s ' '`).",
    examples: [
      "tr 'a-z' 'A-Z' < notes.txt  # uppercase the file",
      "tr -d '\\r' < windows.txt > unix.txt  # strip CRs from a Windows file",
      "echo 'a,b,c,d' | tr ',' '\\n'  # turn comma list into one-per-line",
      "echo 'hello   world' | tr -s ' '  # squeeze multiple spaces to one",
      "tr -dc 'a-zA-Z0-9' < /dev/urandom | head -c 16  # random 16-char password"
    ],
    memoryTip: "`tr` = TRanslate. Remember: NO FILENAME ARG — always use `<` or a pipe. Pair-think: `tr` for chars, `sed` for patterns, `awk` for fields/columns.",
    outputExample: "$ echo 'Hello World' | tr 'a-z' 'A-Z'\nHELLO WORLD\n$ echo 'a,b,c' | tr ',' '\\n'\na\nb\nc\n$ echo 'aaabbbccc' | tr -s 'abc'\nabc",
    category: "TEXT PROCESSING"
  },
  {
    id: "text7",
    question: "Use the `cut` command with `-d:` (delimiter) and `-f1` to extract just the first colon-separated field",
    answer: "cut -d: -f1 file",
    explanation: "`cut` extracts COLUMNS from each line. Two modes: by FIELD (split on a delimiter) or by CHARACTER position. Field mode: `-d X` sets the delimiter (one character: `,`, `:`, tab, etc.), `-f N` picks field number N (1-indexed), `-f 1,3` picks several, `-f 2-` picks 2-to-end. Character mode: `-c 1-10` keeps columns 1-10 of each line. CAVEAT: `cut` cannot handle multi-char delimiters or quoted CSV fields — for those use `awk` or a real CSV tool like `csvkit`. Typical victim is `/etc/passwd` which is `name:x:uid:gid:gecos:home:shell` — `cut -d: -f1` extracts just usernames.",
    usage: "Pulling one column out of a structured file. Getting just usernames from `/etc/passwd`, just IPs from a log, or just one field from a TSV report.",
    examples: [
      "cut -d: -f1 /etc/passwd  # all usernames on the system",
      "cut -d, -f2,4 sales.csv  # columns 2 and 4 of a simple CSV (no quoted commas!)",
      "cut -c1-10 longlog.txt  # first 10 characters of every line (e.g. extract dates)",
      "echo 'a:b:c:d' | cut -d: -f3-  # 'c:d' — from field 3 to end",
      "ps aux | tr -s ' ' | cut -d' ' -f2,11  # PID and command name (after squeezing spaces)"
    ],
    memoryTip: "`cut` -d=Delimiter, -f=Field, -c=Character. The most common use is `cut -d: -f1` on `/etc/passwd`. If you need multi-char delimiters or smart CSV parsing, escalate to `awk` or `csvkit`.",
    outputExample: "$ head -3 /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\n$ cut -d: -f1 /etc/passwd | head -3\nroot\ndaemon\nbin",
    category: "TEXT PROCESSING"
  },
  {
    id: "text8",
    question: "Merge corresponding lines from two files side by side with `paste file1 file2`",
    answer: "paste file1 file2",
    explanation: "`paste` is the COLUMN-OPPOSITE of `cat`: where `cat` concatenates vertically (line 1 of file1, line 2 of file1, ..., line 1 of file2, ...), `paste` joins horizontally (line 1 of file1 + tab + line 1 of file2, line 2 of file1 + tab + line 2 of file2, ...). Default delimiter is a TAB; change with `-d CHAR` (`-d,` for CSV, `-d:` for colon-style). For multiple delimiters that cycle, give multiple chars: `paste -d',;' a b c` uses `,` then `;` then back to `,`. The `-s` flag is the OTHER mode: SERIAL — instead of pasting files side-by-side, it joins all lines of EACH file into one long line per file (so a 100-line file becomes one tab-separated line). To paste all lines of one file into a single comma-list: `paste -sd, file`. Files don't need to be the same length — `paste` continues with the longer one, filling missing values with the delimiter. For real database-style JOINs (matching on a key field), use `join` instead.",
    usage: "Combining columns from related files (names + ages + emails), turning a list into a comma-separated string with `-sd,`, or building tabular reports from separate data files.",
    examples: [
      "paste names.txt ages.txt  # tab-separated: name<TAB>age",
      "paste -d, names.txt ages.txt  # CSV: name,age",
      "paste -d: file1 file2 file3  # three files joined with colons",
      "paste -s file.txt  # SERIAL: all lines of file.txt on ONE tab-separated line",
      "paste -sd, file.txt  # all lines as a comma-separated list",
      "ls | paste -sd, -  # convert filenames to comma list (- = stdin)"
    ],
    memoryTip: "`paste a b` = column merge (HORIZONTAL). `cat a b` = vertical concatenate. `-d CHAR` change delimiter (default TAB). `-s` SERIAL mode = each file's lines onto ONE line. For key-based joins (like SQL JOIN), use `join` instead.",
    outputExample: "$ cat names.txt\nAlice\nBob\nCharlie\n$ cat ages.txt\n30\n25\n40\n$ paste names.txt ages.txt\nAlice\t30\nBob\t25\nCharlie\t40\n$ paste -d, names.txt ages.txt\nAlice,30\nBob,25\nCharlie,40\n$ paste -sd, names.txt\nAlice,Bob,Charlie\n$ ls *.txt | paste -sd, -\nages.txt,names.txt,scores.txt",
    category: "TEXT PROCESSING"
  },
  {
    id: "text9",
    question: "Compare two files line-by-line to see what changed with `diff file1 file2` (or `diff -u` for the patch format)",
    answer: "diff file1 file2",
    explanation: "`diff` is the standard 'what changed?' tool — feed it two files (or directories) and it prints the lines that differ. Output formats: DEFAULT 'normal' format uses `a/c/d` (add/change/delete) markers — readable but hard to parse; UNIFIED format with `-u` (or `-u3` for 3 lines of context) is the modern standard — what `git diff` and patches use, easier to read because added/removed lines are inline with `+`/`-` prefixes against a backdrop of unchanged context lines. SIDE-BY-SIDE with `-y` puts both files in columns (`-y -W 100` for 100-column wide output) — great for review. To compare DIRECTORIES recursively use `diff -r dir1 dir2`. Other useful flags: `-q` brief (just say 'differ or not'), `-i` ignore case, `-w` ignore whitespace, `-B` ignore blank lines, `--brief` same as `-q`. The output is COLORLESS — pipe through `colordiff` or use `git diff --no-index file1 file2` for colored output. Exit code: 0 = identical, 1 = different, 2 = error. So in scripts: `if diff -q a b >/dev/null; then echo same; fi`. To produce a PATCH file you can apply later: `diff -u original.txt new.txt > changes.patch`, then `patch original.txt < changes.patch` reapplies them.",
    usage: "Reviewing what changed between two config versions, generating a patch to send to a maintainer, comparing two directory snapshots, or sanity-checking a deploy artifact against a known-good version.",
    examples: [
      "diff old.conf new.conf  # default format",
      "diff -u old.conf new.conf  # unified format (preferred — git/patch style)",
      "diff -r dir1/ dir2/  # recursive directory comparison",
      "diff -q file1 file2  # brief: just 'differ' or silent",
      "diff -y -W 100 a.txt b.txt  # side-by-side, 100 cols wide",
      "diff -u original.txt new.txt > changes.patch  # produce a patch file"
    ],
    memoryTip: "`diff` = file differences. `-u` UNIFIED format (preferred, like git diff), `-y` side-by-side, `-r` recursive (dirs), `-q` brief, `-i`/`-w`/`-B` ignore case/whitespace/blanks. Exit code: 0 same, 1 different. Generate patches with `>`, apply with `patch`. Color: pipe to `colordiff` or use `git diff --no-index`.",
    outputExample: "$ cat old.txt\nline 1\nline 2\nline 3\n$ cat new.txt\nline 1\nLINE 2 modified\nline 3\nline 4 added\n$ diff -u old.txt new.txt\n--- old.txt\t2026-05-17 14:32:18.000000000 +0000\n+++ new.txt\t2026-05-17 14:32:42.000000000 +0000\n@@ -1,3 +1,4 @@\n line 1\n-line 2\n+LINE 2 modified\n line 3\n+line 4 added\n$ diff -q old.txt new.txt\nFiles old.txt and new.txt differ\n$ echo $?\n1",
    category: "TEXT PROCESSING"
  },
  {
    id: "text10",
    question: "Count words/lines/characters",
    answer: "wc file",
    explanation: "'wc' counts lines, words, and characters in files.",
    usage: "Get statistics about file contents or check file sizes.",
    examples: [
      "wc file.txt  # Show lines, words, chars",
      "wc -l file.txt  # Count only lines",
      "wc -w *.txt  # Count words in all txt files"
    ],
    memoryTip: "wc = word count. Like counting words in a document.",
    outputExample: "$ wc -l file.txt\n42 file.txt",
    category: "TEXT PROCESSING"
  },
  {
    id: "text11",
    question: "Replace text globally",
    answer: "sed 's/old/new/g' file",
    explanation: "'sed' stream editor performs text transformations on files or streams.",
    usage: "Make bulk text replacements, format output, or perform complex text manipulation.",
    examples: [
      "sed 's/foo/bar/g' file.txt  # Replace all occurrences",
      "sed -i 's/old/new/g' file.txt  # Edit file in place",
      "sed '5d' file.txt  # Delete line 5"
    ],
    memoryTip: "'sed' = stream editor. Like automatically find-and-replace across a whole file.",
    outputExample: "$ sed 's/error/ERROR/g' log.txt\nERROR: Something failed\nERROR: Connection timeout",
    category: "TEXT PROCESSING"
  },
  {
    id: "text12",
    question: "Process columns in files",
    answer: "awk '{print $1}' file",
    explanation: "'awk' is a powerful text processing language for extracting and formatting data.",
    usage: "Extract specific columns, perform calculations, or format output from structured data.",
    examples: [
      "awk '{print $1, $3}' file.txt  # Print columns 1 and 3",
      "awk '$2 > 100 {print}' data.txt  # Print lines where column 2 > 100",
      "awk '{sum += $1} END {print sum}' numbers.txt  # Sum column 1"
    ],
    memoryTip: "'awk' = advanced text processor. Like using a spreadsheet formula on text files.",
    outputExample: "$ awk '{print $1}' users.txt\njohn\njane\nbob",
    category: "TEXT PROCESSING"
  },
  {
    id: "text13",
    question: "Sort and remove duplicates",
    answer: "sort file | uniq",
    explanation: "Combine 'sort' and 'uniq' to sort lines and remove consecutive duplicates.",
    usage: "Clean up lists and remove duplicate entries.",
    examples: [
      "sort file.txt | uniq  # Sorted unique lines",
      "sort file.txt | uniq -d  # Show only duplicates",
      "sort file.txt | uniq -c  # Count occurrences"
    ],
    memoryTip: "'sort | uniq' = deduplicate. Like removing duplicate entries from a list.",
    outputExample: "$ sort names.txt | uniq\nAlice\nBob\nCharlie\nDave",
    category: "TEXT PROCESSING"
  },
  {
    id: "text14",
    question: "Extract using field separator",
    answer: "cut -d: -f1 file",
    explanation: "'cut' extracts specific fields from each line using a delimiter.",
    usage: "Extract columns from CSV, passwd, or other delimited files.",
    examples: [
      "cut -d: -f1 /etc/passwd  # Extract usernames",
      "cut -d, -f2 data.csv  # Extract column 2 from CSV",
      "cut -d' ' -f1,3 file.txt  # Extract fields 1 and 3"
    ],
    memoryTip: "'cut -d' = cut by delimiter. Like cutting a string at specific separators.",
    outputExample: "$ cut -d: -f1 /etc/passwd\nroot\nbin\ndaemon",
    category: "TEXT PROCESSING"
  },
  {
    id: "text15",
    question: "Character translation",
    answer: "tr 'a-z' 'A-Z' < file",
    explanation: "'tr' translates or deletes characters from input.",
    usage: "Convert cases, remove characters, or replace character sets.",
    examples: [
      "tr 'a-z' 'A-Z' < file.txt  # Convert to uppercase",
      "tr -d ' ' < file.txt  # Remove spaces",
      "tr ',' '\\n' < file.txt  # Convert commas to newlines"
    ],
    memoryTip: "'tr' = translate characters. Like using find-and-replace at the character level.",
    outputExample: "$ echo 'hello world' | tr 'a-z' 'A-Z'\nHELLO WORLD",
    category: "TEXT PROCESSING"
  },
  {
    id: "text16",
    question: "Join lines from files",
    answer: "paste file1 file2",
    explanation: "'paste' merges lines from multiple files side by side.",
    usage: "Combine related data from multiple files into columns.",
    examples: [
      "paste names.txt ages.txt  # Combine two files",
      "paste -d, file1 file2  # Use comma as separator",
      "paste -d'\\t' *  # Tab-delimited merge"
    ],
    memoryTip: "'paste' = tape together. Like pasting columns side by side.",
    outputExample: "$ paste names.txt ages.txt\nJohn\t25\nJane\t30\nBob\t35",
    category: "TEXT PROCESSING"
  },
  {
    id: "text17",
    question: "Format text with printf",
    answer: "printf '%s: %d\\n' name age",
    explanation: "'printf' formats and prints text with control over spacing and alignment.",
    usage: "Create formatted output with specific alignment and padding.",
    examples: [
      "printf '%-10s %5d\\n' name age  # Left-aligned name, right-aligned age",
      "printf '%x' 255  # Convert to hexadecimal",
      "printf '%.2f' 3.14159  # Round to 2 decimal places"
    ],
    memoryTip: "'printf' = formatted print. Like using a template to format output nicely.",
    outputExample: "$ printf '%s: %d\\n' User 42\nUser: 42",
    category: "TEXT PROCESSING"
  },
  {
    id: "text18",
    question: "Filter with regular expressions",
    answer: "grep -E 'regex' file",
    explanation: "'grep -E' uses extended regular expressions for powerful pattern matching.",
    usage: "Find complex patterns, validate formats, or extract specific data.",
    examples: [
      "grep -E '^[0-9]+' file.txt  # Lines starting with digits",
      "grep -E '(error|warning)' log.txt  # Lines with error or warning",
      "grep -E '[a-z]+@[a-z]+\\.[a-z]+' file.txt  # Email-like patterns"
    ],
    memoryTip: "'grep -E' = extended patterns. Like using powerful search rules to find things.",
    outputExample: "$ grep -E '^[0-9]' file.txt\n123 some text\n456 another line",
    category: "TEXT PROCESSING"
  },
  {
    id: "text19",
    question: "Reverse the characters on each line of a file with the `rev` command",
    answer: "rev file",
    explanation: "`rev` flips each line CHARACTER by character: `hello world` becomes `dlrow olleh`. It works line-by-line, so multi-line files keep their line order — only the contents of each line are reversed. `rev` is rarely used alone; it shines in clever pipes. Classic trick: sort by SUFFIX by doing `rev | sort | rev` (reverse, do normal sort which now compares suffixes-as-prefixes, reverse back). Another: extract the LAST field of an unknown-delimiter line by `rev | cut -d: -f1 | rev` — flips the line, takes what's now the first field, flips back. NOT to be confused with `tac` (text/cat backwards), which reverses LINE ORDER but keeps each line intact.",
    usage: "Sorting by file extension (suffix-based sort). Extracting the last field when you don't know the field count. Toy obfuscation. Comparing palindromes (`[ \"$x\" = \"$(echo $x | rev)\" ]`).",
    examples: [
      "echo 'hello world' | rev  # dlrow olleh",
      "rev file.txt  # reverse every line of the file",
      "ls *.txt | rev | sort | rev  # sort filenames by suffix",
      "echo 'a/b/c/last' | rev | cut -d/ -f1 | rev  # extract 'last' (the basename)",
      "tac file.txt  # DIFFERENT — reverses LINE ORDER, not characters"
    ],
    memoryTip: "`rev` = REVerse each line's chars. `tac` = `cat` spelled backwards = reverse line order. So two reversers exist; remember the difference: rev = per-character, tac = per-line.",
    outputExample: "$ echo 'hello world' | rev\ndlrow olleh\n$ printf 'one\\ntwo\\nthree\\n' | rev\neno\nowt\neerht\n$ printf 'one\\ntwo\\nthree\\n' | tac\nthree\ntwo\none",
    category: "TEXT PROCESSING"
  },
  {
    id: "text20",
    question: "Convert tab characters in a file to spaces using the `expand` command",
    answer: "expand file.txt",
    explanation: "Some files use ACTUAL tab characters (`\\t`, hex 09) for indentation; others use spaces. They look identical on screen but mix differently. `expand` replaces every tab with enough spaces to reach the next tab stop (default every 8 columns). Use `-t N` to set a custom width — `-t 4` is common for code. `-t 2,4,6` lets you set staggered stops. The reverse tool is `unexpand` (spaces→tabs), but it's less useful since most editors handle tabs fine. Without redirection, `expand` prints to stdout — to MODIFY a file in place, you need `expand file.txt | sponge file.txt` (sponge is from `moreutils`) or `expand file.txt > tmp && mv tmp file.txt`.",
    usage: "Preparing text for tools that don't understand tabs (some old terminals, certain printers). Normalizing source code from mixed-whitespace contributors. Aligning columns in a report before email.",
    examples: [
      "expand file.txt  # tabs → 8 spaces (default), prints to stdout",
      "expand -t 4 src.c  # use 4 spaces per tab (common for code)",
      "expand file.txt > file.expanded.txt  # save the expanded version",
      "printf 'a\\tb\\tc\\n' | expand -t 4  # 'a   b   c' (3-space gaps to reach col 4, 8)",
      "unexpand -a file.txt  # the reverse: spaces back to tabs (rarely needed)"
    ],
    memoryTip: "`expand` = expand tabs (which are 'compressed' indentation) into spaces. Pair-think: `expand` (tab→space), `unexpand` (space→tab). Default tab width is 8 — set with `-t N`. To overwrite the original file, pipe through `sponge` (or use a temp file).",
    outputExample: "$ printf 'col1\\tcol2\\tcol3\\n' > demo.txt\n$ cat -A demo.txt  # show the actual tab characters\ncol1^Icol2^Icol3$\n$ expand -t 4 demo.txt\ncol1    col2    col3\n$ expand -t 4 demo.txt | cat -A\ncol1    col2    col3$",
    category: "TEXT PROCESSING"
  },

  // SYSTEM INFO
  {
    id: "sys1",
    question: "Print the kernel name, version, and machine architecture with `uname -a` (everything in one line)",
    answer: "uname -a",
    explanation: "`uname` ('Unix name') prints info about the running KERNEL, NOT the distribution. `-a` ('all') is the everyday combo: kernel name (`Linux`), hostname, kernel release (`6.8.0-31-generic`), kernel build date, machine architecture (`x86_64`, `aarch64`, `armv7l`), and OS name. Individual flags pick subsets: `-r` release, `-m` machine, `-s` kernel name, `-n` hostname, `-o` operating system. Important distinction: `uname` does NOT tell you 'is this Ubuntu or Fedora?' — for that read `/etc/os-release` (`cat /etc/os-release` or `lsb_release -a` if installed). Common confusion: a 'Linux 6.8' kernel can be running on Ubuntu, Fedora, Arch, or Alpine — they all share the kernel; only userland differs.",
    usage: "Confirming kernel version before installing a kernel-specific package or driver. Checking architecture before downloading the right binary (`x86_64` vs `aarch64`). Quick 'where am I?' on an unfamiliar server.",
    examples: [
      "uname -a  # everything in one line",
      "uname -r  # just kernel release (e.g. 6.8.0-31-generic)",
      "uname -m  # just machine arch (x86_64 / aarch64 / armv7l)",
      "cat /etc/os-release  # DIFFERENT — distribution info, not kernel",
      "hostnamectl  # combined kernel+distro+hostname (systemd)"
    ],
    memoryTip: "`uname` = Unix Name (of the kernel). `-a` = All. For DISTRO info you need `/etc/os-release` or `lsb_release -a`, NOT uname. Mnemonic: 'uname tells you about the kernel; os-release tells you about the OS flavor'.",
    outputExample: "$ uname -a\nLinux laptop 6.8.0-31-generic #31-Ubuntu SMP PREEMPT_DYNAMIC Sat Apr 20 00:40:06 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux\n$ uname -r\n6.8.0-31-generic\n$ uname -m\nx86_64\n$ cat /etc/os-release | head -3\nPRETTY_NAME=\"Ubuntu 24.04.1 LTS\"\nNAME=\"Ubuntu\"\nVERSION_ID=\"24.04\"",
    category: "SYSTEM INFO"
  },
  {
    id: "sys2",
    question: "Show free and used disk space on each mounted filesystem with `df -h`",
    answer: "df -h",
    explanation: "`df` ('disk free') reports usage per MOUNTED FILESYSTEM, not per directory. One row per mount with: filesystem device (`/dev/sda1`, `tmpfs`, `overlay`), total size, used, available, percent used, and mountpoint. `-h` formats sizes as `12G`/`450M` (human-readable). Other useful flags: `-T` add filesystem TYPE column (ext4, btrfs, xfs, tmpfs), `-i` show INODE counts instead of bytes (you can run out of inodes before bytes if you create millions of tiny files), `-x tmpfs` exclude virtual filesystems for less clutter. Cousin command: `du` reports usage per FOLDER (walks the tree). Pair them mentally: `df` for 'is the disk full?'; `du` for 'where in the disk did the space go?'.",
    usage: "Checking before a big install or download. Diagnosing 'No space left on device' errors (which mount is full?). Confirming a new disk got mounted where you wanted.",
    examples: [
      "df -h  # human-readable size per mounted filesystem",
      "df -hT  # add filesystem type column (ext4, xfs, tmpfs, ...)",
      "df -i  # inode usage (run out of these = same error as no space)",
      "df -h /  # only the root filesystem",
      "df -h --total  # add a TOTAL row at the bottom"
    ],
    memoryTip: "`df` = Disk Free (per FILESYSTEM). Pair-think: `df` (mounts) vs `du` (folders). 'No space left on device' = check `df -h` first, then `df -i` (inode exhaustion is the sneaky cause).",
    outputExample: "$ df -hT\nFilesystem     Type      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p2 ext4      450G  142G  286G  34% /\ntmpfs          tmpfs     7.9G  3.2M  7.9G   1% /run\n/dev/nvme0n1p1 vfat      511M  6.1M  505M   2% /boot/efi\ntmpfs          tmpfs     7.9G   42M  7.9G   1% /run/user/1000",
    category: "SYSTEM INFO"
  },
  {
    id: "sys3",
    question: "Show RAM and swap usage in human-readable units with `free -h`",
    answer: "free -h",
    explanation: "`free` reads `/proc/meminfo` and summarizes memory into a small table. Columns: `total` (physical RAM), `used` (allocated and not freeable), `free` (untouched), `shared` (tmpfs and shared memory), `buff/cache` (kernel caches — looks 'used' but is instantly reclaimable), and the all-important `available` (a realistic estimate of how much RAM a new program could grab without swapping, accounting for reclaimable cache). `-h` formats numbers as `4.0Gi` instead of `4194304`. The second row, `Swap:`, shows your swap file/partition usage. A big `used` plus small `available` plus growing `Swap.used` means you're running out — that's when the OOM killer wakes up.",
    usage: "Quick health check before launching a heavy build or VM. Diagnosing 'why is my machine slow' (often: swap is being thrashed). Verifying after enabling zswap or zram.",
    examples: [
      "free -h  # human-readable GiB/MiB",
      "free -m  # force MiB units (numeric)",
      "free -s 2  # refresh every 2 seconds — watch usage change live (Ctrl+C to quit)",
      "free -h -t  # add a TOTAL row that includes swap",
      "watch -n1 free -h  # alternative live view via watch"
    ],
    memoryTip: "Look at the `available` column, NOT `free`. `free` is misleadingly small because Linux uses spare RAM for caches; `available` is the honest 'room for new work'. Mnemonic: 'free is a liar, available is the truth'.",
    outputExample: "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:            15Gi       6.2Gi       2.1Gi       342Mi       7.4Gi       8.5Gi\nSwap:          2.0Gi          0B       2.0Gi",
    category: "SYSTEM INFO"
  },
  {
    id: "sys4",
    question: "Print how long the system has been running, plus current load averages, with the `uptime` command",
    answer: "uptime",
    explanation: "`uptime` prints a single tight line: current time, days/hours since boot, number of logged-in users, and three LOAD AVERAGES. Load average is the most important and least understood number on Linux: it's the average count of processes that were either RUNNING or WAITING for CPU/disk over the last 1, 5, and 15 minutes. Rough rule of thumb: compare against `nproc` (number of logical CPUs). Load equal to nproc = fully busy but not overloaded. Load 2× nproc = significant queueing, things will feel slow. The 1/5/15 ordering lets you SEE the trend: `0.42, 1.20, 2.80` is RECOVERING from a spike; `2.80, 1.20, 0.42` is JUST STARTING a spike. Variants: `uptime -p` ('pretty', e.g. `up 3 days, 4 hours, 21 minutes`), `uptime -s` ('since', prints the absolute boot date). The same info appears at the top of `top`, `w`, and `htop`.",
    usage: "Quick 'how long has this box been up?' check, and especially: 'is the system overloaded right now?' (compare load averages to CPU count). Pre-flight check before launching a heavy job — don't pile onto a server already at 8× load.",
    examples: [
      "uptime  # the standard one-line summary",
      "uptime -p  # pretty: 'up 3 days, 4 hours, 21 minutes'",
      "uptime -s  # absolute: '2026-05-12 09:43:21'",
      "nproc  # how many CPUs — compare against load avg to interpret",
      "watch -n5 uptime  # refresh every 5 seconds to watch load trend"
    ],
    memoryTip: "Load average's three numbers are 1/5/15 MINUTE averages in that order. Compare each to `nproc` (total CPUs). Trend reading: middle number HIGHER than first = recovering; LOWER than first = climbing. Don't confuse load with CPU % — load includes processes waiting for disk too.",
    outputExample: "$ uptime\n 14:32:18 up 3 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28\n$ uptime -p\nup 3 days, 4 hours, 21 minutes\n$ uptime -s\n2026-05-12 10:11:32\n$ nproc\n12   # so load 0.42 means we're using ~4% of CPU capacity — plenty of headroom",
    category: "SYSTEM INFO"
  },
  {
    id: "sys5",
    question: "Print CPU architecture, cores, and feature info with the `lscpu` command",
    answer: "lscpu",
    explanation: "`lscpu` reads `/proc/cpuinfo` and `/sys/devices/system/cpu/` and reformats them into a clean summary: `Architecture` (x86_64, aarch64, ...), `Model name` (e.g. 'Intel Core i7-9750H'), `Socket(s)` × `Core(s) per socket` × `Thread(s) per core` = total CPU count, frequency range, cache sizes (L1/L2/L3), and a `Flags` line listing CPU features like `sse4_2`, `avx2`, `aes` (used for hardware crypto). On VMs you'll also see `Hypervisor vendor` (KVM, VMware, etc.). The raw `/proc/cpuinfo` lists every logical CPU separately and is harder to read; `lscpu` is the friendly version.",
    usage: "Before installing software with CPU requirements (does this machine support AVX2 for that ML library?). Sizing concurrency in a build (`make -j$(nproc)`). Confirming you're on the architecture you think you are after a fresh OS install.",
    examples: [
      "lscpu  # full summary",
      "lscpu | grep '^CPU(s):'  # just the total logical CPU count",
      "lscpu | grep -i avx  # check for AVX instruction support",
      "nproc  # shorter way to get just the logical CPU count for scripts",
      "cat /proc/cpuinfo  # raw, per-core data (much longer)"
    ],
    memoryTip: "`lscpu` follows the `ls*` family pattern: `ls`=list-files, `lsblk`=list-block-devices, `lspci`=list-PCI, `lsusb`=list-USB, `lscpu`=list-CPU. Once you spot the pattern, you'll guess these correctly forever.",
    outputExample: "$ lscpu\nArchitecture:        x86_64\nCPU op-mode(s):      32-bit, 64-bit\nByte Order:          Little Endian\nCPU(s):              12\nThread(s) per core:  2\nCore(s) per socket:  6\nSocket(s):           1\nVendor ID:           GenuineIntel\nModel name:          Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nCPU MHz:             2600.000\nL1d cache:           192 KiB\nL2 cache:            1.5 MiB\nL3 cache:            12 MiB\nFlags:               fpu vme ... sse4_2 ... avx avx2 aes",
    category: "SYSTEM INFO"
  },
  {
    id: "sys6",
    question: "List all PCI devices (graphics card, NIC, sound, etc.) with the `lspci` command",
    answer: "lspci",
    explanation: "PCI ('Peripheral Component Interconnect') is the bus that connects expansion hardware to your CPU: GPUs, sound cards, network cards (NICs), NVMe SSD controllers, USB controllers themselves. `lspci` walks `/sys/bus/pci/` and prints one line per device with `BUS:DEVICE.FUNCTION  class  vendor:device  name`. Examples of classes: `VGA compatible controller` (your GPU), `Ethernet controller` (wired network), `Network controller` (Wi-Fi), `Audio device`. Add `-v` (verbose), `-vv`, or `-vvv` for more detail including the kernel driver in use (`Kernel driver in use: nvidia`). On most distros you don't need root for the basic view, but `-v` and friends sometimes need `sudo` to read protected config-space.",
    usage: "Figuring out which GPU you have (and whether the right driver is loaded). Diagnosing why Wi-Fi or sound isn't working ('which driver does this NIC use?'). Confirming what's on a server you don't have physical access to.",
    examples: [
      "lspci  # one-line-per-device summary",
      "lspci | grep -i vga  # find the graphics card",
      "lspci | grep -i ethernet  # find the wired NIC",
      "sudo lspci -v  # verbose: kernel driver, IRQ, memory regions",
      "lspci -k  # show kernel driver and modules per device"
    ],
    memoryTip: "`ls*` family: `lspci` = list PCI. Sister commands: `lsusb`, `lscpu`, `lsblk`, `lsmod`. All print 'what hardware/kernel objects are present'. If `lspci` shows a device but `-k` shows no driver, that's typically why the device isn't working.",
    outputExample: "$ lspci\n00:00.0 Host bridge: Intel Corporation Coffee Lake HOST and DRAM Controller\n00:02.0 VGA compatible controller: Intel Corporation UHD Graphics 630\n00:14.0 USB controller: Intel Corporation Cannon Lake PCH USB 3.1 xHCI\n00:1f.6 Ethernet controller: Intel Corporation Ethernet Connection (7) I219-LM\n01:00.0 VGA compatible controller: NVIDIA Corporation TU117M [GeForce GTX 1650 Mobile]",
    category: "SYSTEM INFO"
  },
  {
    id: "sys7",
    question: "List currently-connected USB devices with the `lsusb` command",
    answer: "lsusb",
    explanation: "`lsusb` lists every USB device the kernel currently sees: keyboards, mice, webcams, flash drives, Yubikeys, your printer, your phone. Each line shows `Bus N Device M: ID VID:PID NAME`. `VID:PID` (vendor + product ID, four hex digits each) is the most useful field for googling 'why doesn't Linux see my X' or for `udev` rules. The hierarchy (which hub holds which device) is hidden in the flat default — use `-t` for a tree view. `-v` prints the full USB descriptor (often needs `sudo` for some fields). Common counterpart: `dmesg | tail` right after plugging something in to see what driver bound to it.",
    usage: "Did Linux actually detect the USB stick you just plugged in? Which port is your webcam on? What's the VID:PID of your weird vendor keyboard so you can write a udev rule for it?",
    examples: [
      "lsusb  # flat list of all USB devices",
      "lsusb -t  # tree view: which device is on which hub",
      "lsusb -v 2>/dev/null | less  # full descriptor, paged (sudo for complete data)",
      "lsusb -d 1234:5678  # show only the device with that VID:PID",
      "watch -n1 lsusb  # see device list update live as you plug/unplug"
    ],
    memoryTip: "`ls*` family: `lsusb` = list USB. Counterpart for storage: `lsblk` (shows USB sticks as block devices once mounted). If a device isn't in `lsusb`, the cable/port is the problem. If it's in `lsusb` but the OS can't use it, check `dmesg`.",
    outputExample: "$ lsusb\nBus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 001 Device 003: ID 046d:c52b Logitech, Inc. Unifying Receiver\nBus 001 Device 005: ID 0781:5567 SanDisk Corp. Cruzer Blade\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub",
    category: "SYSTEM INFO"
  },
  {
    id: "sys8",
    question: "List currently-loaded kernel modules (drivers) with the `lsmod` command",
    answer: "lsmod",
    explanation: "The Linux kernel is modular: drivers and features (Wi-Fi, filesystems like `ext4`/`btrfs`, virtualization like `kvm`) live in separate `.ko` files in `/lib/modules/$(uname -r)/`. They're loaded on demand or at boot. `lsmod` prints what's currently loaded. Columns: `Module` (name), `Size` (in bytes), `Used by` (count of dependents and their names). High `Used by` count means many things depend on this module. `lsmod` is just a friendly view of `/proc/modules`. Manual load: `sudo modprobe MODULENAME`. Manual unload (if nothing depends on it): `sudo modprobe -r MODULENAME`. Detail on one module: `modinfo MODULENAME`.",
    usage: "Diagnosing 'I plugged in hardware but it doesn't work' — is the driver even loaded? Checking what filesystem modules your kernel supports right now. Confirming `nvidia` vs `nouveau` is loaded on a GPU box.",
    examples: [
      "lsmod  # list loaded modules",
      "lsmod | grep -i nvidia  # is the NVIDIA driver loaded?",
      "lsmod | grep ext4  # is the ext4 filesystem driver loaded?",
      "modinfo i915  # everything known about the i915 (Intel GPU) module",
      "sudo modprobe -r MODULENAME  # unload (only if Used-by count is 0)"
    ],
    memoryTip: "`ls*` family: `lsmod` = list MODules. Related verbs: `modprobe` (load/unload), `modinfo` (describe). If hardware is in `lspci`/`lsusb` but isn't working, the next stop is checking `lsmod` for its driver — and `dmesg` for why the driver didn't bind.",
    outputExample: "$ lsmod | head\nModule                  Size  Used by\nnvidia_uvm           1404928  0\nnvidia_drm             77824  4\nbluetooth             786432  20 btusb,btrtl,btintel\next4                  933888  1\nbtrfs                1937408  0\nxhci_pci               24576  0\nxhci_hcd              315392  1 xhci_pci",
    category: "SYSTEM INFO"
  },
  {
    id: "sys9",
    question: "Print every environment variable (and value) currently set in your shell with the `env` command",
    answer: "env",
    explanation: "Environment variables are NAME=VALUE pairs the shell exports to every child process — used to configure tools (e.g., `EDITOR=nano`, `PATH=/usr/bin:...`), pass secrets in containers, tweak locale (`LANG=en_US.UTF-8`), and more. `env` prints them, ONE PER LINE, in the format `NAME=value`. They come from `/etc/environment` (system-wide), `~/.profile`/`~/.bash_profile` (login shells), `~/.bashrc` (interactive shells), `export VAR=value` (current session), or are inherited from the parent process. The output is unsorted — pipe through `sort` for readability. To inspect ONE variable use `echo \"$NAME\"` or `printenv NAME`. To inspect a SPECIFIC process's environment: `cat /proc/PID/environ | tr '\\0' '\\n'` (variables are separated by NUL bytes in the kernel). `env` with arguments RUNS a command in a modified environment — `env -i CMD` runs CMD with EMPTY environment (good for debugging), `env VAR=value CMD` runs CMD with VAR added/overridden without affecting your shell. Removing a variable: `unset NAME` (and not `export NAME=`).",
    usage: "Debugging why an app picks up the wrong config, auditing what secrets/configs are exposed to a child process, or inspecting CI/cron environments.",
    examples: [
      "env  # print all environment variables",
      "env | sort  # alphabetical",
      "env | grep -i path  # variables containing 'path'",
      "env -i bash -c 'env'  # run bash with EMPTY env — see what's truly required",
      "env VAR=value LANG=C ./script.sh  # run script with specific env, no side effects",
      "cat /proc/$$/environ | tr '\\0' '\\n' | sort  # MY shell's env from kernel POV"
    ],
    memoryTip: "`env` = print environment. `env -i CMD` = empty env (debug). `env VAR=VAL CMD` = override for one command. `export NAME=value` to set + export, `unset NAME` to remove. Per-process env in `/proc/PID/environ` (NUL-separated — pipe through `tr '\\0' '\\n'`).",
    outputExample: "$ env | sort | head\nHOME=/home/alice\nLANG=en_US.UTF-8\nLOGNAME=alice\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nPWD=/home/alice\nSHELL=/bin/bash\nTERM=xterm-256color\nUSER=alice\nXDG_RUNTIME_DIR=/run/user/1000\n_=/usr/bin/env\n$ env -i bash -c 'env'\nPWD=/home/alice\nSHLVL=1\n_=/usr/bin/env",
    category: "SYSTEM INFO"
  },
  {
    id: "sys10",
    question: "Show system hostname",
    answer: "hostname",
    explanation: "'hostname' displays or sets the system's hostname.",
    usage: "Check the system's network name.",
    examples: [
      "hostname  # Show current hostname",
      "hostname -i  # Show IP address",
      "hostname -f  # Show fully qualified domain name"
    ],
    memoryTip: "'hostname' = system name. Like asking 'what is my computer called?'",
    outputExample: "$ hostname\nmycomputer\n$ hostname -i\n192.168.1.100",
    category: "SYSTEM INFO"
  },
  {
    id: "sys11",
    question: "Show current system time",
    answer: "date",
    explanation: "'date' displays the current system date and time.",
    usage: "Check current date/time, format timestamps for logging.",
    examples: [
      "date  # Current date and time",
      "date +%Y-%m-%d  # Specific format",
      "date +%s  # Unix timestamp"
    ],
    memoryTip: "'date' = show date/time. Like checking a clock to see what time it is.",
    outputExample: "$ date\nMon Jan 15 10:30:45 UTC 2024",
    category: "SYSTEM INFO"
  },
  {
    id: "sys12",
    question: "Show system uptime",
    answer: "uptime",
    explanation: "'uptime' shows how long the system has been running and current load average.",
    usage: "Check system reliability, load, and performance.",
    examples: [
      "uptime  # System uptime and load",
      "uptime -p  # Pretty format",
      "w  # Uptime and logged-in users"
    ],
    memoryTip: "'uptime' = how long running. Like checking how long the server has been up.",
    outputExample: "$ uptime\n 10:30:45 up 45 days, 12:34,  2 users,  load average: 0.15, 0.12, 0.10",
    category: "SYSTEM INFO"
  },
  {
    id: "sys13",
    question: "List logged-in users",
    answer: "w",
    explanation: "'w' shows who is logged in and what they are doing.",
    usage: "Monitor user activity and system access.",
    examples: [
      "w  # All logged-in users",
      "w username  # Specific user",
      "who  # Simpler format"
    ],
    memoryTip: "'w' = who's logged in. Like checking a visitor log to see who's in the building.",
    outputExample: "$ w\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU  WHAT\njohn     pts/0    192.168.1.100    10:00    5.00s  0.20s  0.10s bash",
    category: "SYSTEM INFO"
  },
  {
    id: "sys14",
    question: "Print kernel ring buffer messages with the `dmesg` command (hardware/driver/boot logs from the kernel itself)",
    answer: "dmesg",
    explanation: "The kernel is the core program that talks to your hardware. As it boots and as drivers load USB sticks, network cards, disks, etc., the kernel writes short status lines into an in-memory buffer called the 'ring buffer' (called a ring because once it fills up, new entries overwrite the oldest). `dmesg` ('display message') prints that buffer to the terminal. Each line is prefixed with a timestamp like `[   12.345678]` which is seconds since boot. On modern systems you usually need root to read it: `sudo dmesg`. Tip: `dmesg -T` rewrites the boot-time timestamps as human-readable dates, and `dmesg -w` keeps it open and follows new messages as they arrive (like `tail -f`).",
    usage: "Use when you plug in a USB device and want to see if Linux detected it, when WiFi or a disk misbehaves, when the system OOM-killed a process (you'll see 'Out of memory' lines), or when investigating why a boot failed.",
    examples: [
      "sudo dmesg | tail -20  # last 20 kernel messages — handy right after plugging in hardware",
      "sudo dmesg -T  # human-readable timestamps instead of seconds-since-boot",
      "sudo dmesg -w  # follow live, like tail -f (Ctrl+C to stop)",
      "sudo dmesg | grep -i usb  # only USB-related lines",
      "sudo dmesg --level=err,warn  # only errors and warnings"
    ],
    memoryTip: "`dmesg` = 'display message'. Think of it as the kernel's diary: every time hardware sneezes, it scribbles a note here. First place to look when 'the computer is doing something weird at the hardware level'.",
    outputExample: "$ sudo dmesg -T | tail -3\n[Wed May 15 14:02:11 2026] usb 1-2: new high-speed USB device number 5 using xhci_hcd\n[Wed May 15 14:02:11 2026] usb-storage 1-2:1.0: USB Mass Storage device detected\n[Wed May 15 14:02:12 2026] sd 6:0:0:0: [sdb] 30310400 512-byte logical blocks: (15.5 GB/14.5 GiB)",
    category: "SYSTEM INFO"
  },
  {
    id: "sys15",
    question: "Check inode usage",
    answer: "df -i",
    explanation: "'df -i' shows filesystem inode usage (number of files limit).",
    usage: "Check if filesystem is full at the inode level (can happen even with space left).",
    examples: [
      "df -i  # Show inode usage",
      "df -i /home  # Specific filesystem",
      "df -i | sort -k5 -rn  # Sort by inode usage"
    ],
    memoryTip: "'df -i' = disk inodes. Like counting file slots instead of disk space.",
    outputExample: "$ df -i\nFilesystem     Inodes   IUsed IFree IUse% Mounted on\n/dev/sda1    131072   65536 65536   50% /",
    category: "SYSTEM INFO"
  },
  {
    id: "sys16",
    question: "Show last login times",
    answer: "lastlog",
    explanation: "'lastlog' shows the last login time for each user.",
    usage: "Audit user activity and check system access.",
    examples: [
      "lastlog  # All users",
      "lastlog -u username  # Specific user",
      "lastlog | head -5  # First 5 entries"
    ],
    memoryTip: "'lastlog' = last logins. Like checking an access log to see when people logged in.",
    outputExample: "$ lastlog\nUsername         Port     From             Latest\nroot             pts/0    192.168.1.1     Mon Jan 15 09:00:00 +0000 2024",
    category: "SYSTEM INFO"
  },
  {
    id: "sys17",
    question: "Show system boot logs",
    answer: "journalctl --boot",
    explanation: "'journalctl' displays systemd journal entries (modern logging system).",
    usage: "Check system logs, boot messages, and service events.",
    examples: [
      "journalctl --boot  # Current boot logs",
      "journalctl -n 20  # Last 20 entries",
      "journalctl -u service_name  # Specific service logs"
    ],
    memoryTip: "'journalctl' = system journal. Like reading the system's diary of events.",
    outputExample: "$ journalctl -n 5 --no-pager\nJan 15 10:30:00 hostname systemd[1]: Started Daily Security Audit",
    category: "SYSTEM INFO"
  },
  {
    id: "sys18",
    question: "Show memory usage",
    answer: "free -h",
    explanation: "'free' shows RAM and swap usage in human-readable format.",
    usage: "Monitor memory availability and usage patterns.",
    examples: [
      "free -h  # Human readable",
      "free -m  # Megabytes",
      "free -w  # Wide display with buffers"
    ],
    memoryTip: "'free -h' = free memory. Like checking how much RAM is available.",
    outputExample: "$ free -h\n              total        used        free      shared  buff/cache\nMem:           7.8G        3.2G        2.1G        256M        2.5G",
    category: "SYSTEM INFO"
  },
  {
    id: "sys19",
    question: "Show process limits",
    answer: "ulimit -a",
    explanation: "'ulimit' displays and sets shell resource limits.",
    usage: "Check maximum files, process limits, and stack sizes.",
    examples: [
      "ulimit -a  # Show all limits",
      "ulimit -n 4096  # Set max open files",
      "ulimit -v 2000000  # Set max virtual memory"
    ],
    memoryTip: "'ulimit' = user limits. Like setting speed limits on different system resources.",
    outputExample: "$ ulimit -a\ncore file size          (blocks, -c) 0\nmax locked memory       (kbytes, -l) 65536\nopen files              (-n) 1024",
    category: "SYSTEM INFO"
  },
  {
    id: "sys20",
    question: "Show Linux release info",
    answer: "cat /etc/os-release",
    explanation: "'/etc/os-release' contains the Linux distribution and version information.",
    usage: "Determine which Linux distribution is running.",
    examples: [
      "cat /etc/os-release  # Full info",
      "lsb_release -a  # Alternative",
      "hostnamectl  # Modern format"
    ],
    memoryTip: "'cat /etc/os-release' = system info file. Like reading the system's identification card.",
    outputExample: "$ cat /etc/os-release\nNAME=\"Ubuntu\"\nVERSION=\"22.04.1 LTS (Jammy Jellyfish)\"\nID=ubuntu",
    category: "SYSTEM INFO"
  },

  // PACKAGES
  {
    id: "pkg1",
    question: "Install a package on Debian/Ubuntu with `apt install`",
    answer: "apt-get install package_name",
    explanation: "A 'package' is a bundle of software (binaries, configs, docs) plus metadata listing what other packages it needs. APT (Advanced Package Tool) is the package manager that ships with Debian, Ubuntu, Mint, and friends. `apt install` (and the older `apt-get install`) downloads the named package from configured 'repositories' (online servers full of .deb files), automatically pulls in every dependency, verifies signatures, unpacks files into `/usr`, `/etc`, etc., and runs post-install scripts. You need root, so prefix with `sudo`. On Fedora/RHEL the equivalent is `dnf install`; on Arch it's `pacman -S`.",
    usage: "Adding any software you don't already have: editors, web servers, language runtimes, dev tools. Usually the first command after `apt update` on a fresh system.",
    examples: [
      "sudo apt install git  # install one package",
      "sudo apt install -y nginx curl  # install several without the y/n prompt",
      "sudo apt install ./mypkg.deb  # install a local .deb (resolves its deps from repos)",
      "sudo apt install nginx=1.24.0-1  # pin to a specific version",
      "sudo apt install --no-install-recommends vim  # skip 'recommended' extras"
    ],
    memoryTip: "`apt install` = 'app store install'. APT is your distro's shop; `install` puts something on the shelf into your system. Always run `sudo apt update` first so APT knows what's currently on offer.",
    outputExample: "$ sudo apt install git\nReading package lists... Done\nBuilding dependency tree... Done\nThe following additional packages will be installed:\n  git-man liberror-perl\nAfter this operation, 30.4 MB of additional disk space will be used.\nDo you want to continue? [Y/n] Y\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 git amd64 1:2.43.0-1 [3,679 kB]\nFetched 3,679 kB in 1s (5,123 kB/s)\nSelecting previously unselected package git.\nSetting up git (1:2.43.0-1) ...\nProcessing triggers for man-db (2.12.0-1) ...",
    category: "PACKAGES"
  },
  {
    id: "pkg2",
    question: "Uninstall a package on Debian/Ubuntu with `apt remove` (and wipe its configs with `apt purge`)",
    answer: "apt-get remove package_name",
    explanation: "`apt remove` (the modern face of `apt-get remove`) uninstalls a package's program files from places like `/usr/bin` and `/usr/lib`, but deliberately leaves its configuration files in `/etc` behind so if you ever reinstall, your tweaks survive. If you also want the configs gone, use `apt purge` instead (purge = remove + scrub the config files in `/etc`). Neither command removes dependencies that were pulled in automatically; for that you run `apt autoremove`, which sweeps up 'orphan' packages no longer required by anything you explicitly asked for. You always need root, hence `sudo`. On Fedora/RHEL the equivalent is `dnf remove` (configs there are usually saved as `.rpmsave` files instead). Removing a package will also stop and disable any systemd services it shipped.",
    usage: "Freeing disk space by getting rid of software you tried once and never used. Completely wiping a misbehaving daemon (Apache, MySQL) including its `/etc/` config before a fresh reinstall. Cleaning up the long tail of dependencies after removing a big package like `texlive`.",
    examples: [
      "sudo apt remove vim  # uninstall vim, keep its files in /etc",
      "sudo apt purge nginx  # uninstall AND delete /etc/nginx configs",
      "sudo apt autoremove  # remove orphan dependencies nothing needs anymore",
      "sudo apt remove --purge nginx nginx-common  # purge several at once",
      "sudo apt autoremove --purge  # orphans plus their configs (a deep clean)"
    ],
    memoryTip: "`remove` keeps configs as a souvenir; `purge` is the scorched-earth version that scrubs `/etc/` too. Equivalent on RHEL/Fedora: `dnf remove PACKAGE`. Pair with `apt autoremove` after to mop up the dependencies that came along for the ride.",
    outputExample: "$ sudo apt remove vim\nReading package lists... Done\nBuilding dependency tree... Done\nThe following packages will be REMOVED:\n  vim\n0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.\nAfter this operation, 3,521 kB disk space will be freed.\nDo you want to continue? [Y/n] Y\n(Reading database ... 184231 files currently installed.)\nRemoving vim (2:9.0.1378-2) ...\nProcessing triggers for man-db (2.12.0-1) ...",
    category: "PACKAGES"
  },
  {
    id: "pkg3",
    question: "Refresh the list of available packages and versions from configured repositories with `sudo apt update` (Debian/Ubuntu)",
    answer: "apt-get update",
    explanation: "`apt update` (or the older `apt-get update`) does NOT install or upgrade anything — it downloads fresh metadata from every repository listed in `/etc/apt/sources.list` and `/etc/apt/sources.list.d/*.list`, storing it under `/var/lib/apt/lists/`. This metadata is the catalog of what's available: package names, versions, descriptions, and dependencies. APT (Advanced Package Tool) uses that cached catalog for every subsequent `install`, `upgrade`, `search`, and `show`. Without an `update`, you're working from a stale catalog and may try to install versions that have moved or miss security fixes; APT will eventually warn 'N packages can be upgraded'. The standard pattern is `sudo apt update && sudo apt upgrade` — refresh first, then install upgrades. `apt update` is a network operation, so it can be slow on slow links; the data is cached and reused until the next `update`. Needs `sudo` to write into `/var/lib/apt/lists/`.",
    usage: "Always FIRST after a fresh boot or before installing anything you haven't installed today, before an `apt upgrade`, and after editing your sources list to point at a new repo.",
    examples: [
      "sudo apt update  # refresh the package catalog",
      "sudo apt update && sudo apt upgrade  # the standard 'patch the system' combo",
      "sudo apt update 2>&1 | grep -i security  # focus on security-channel hits",
      "sudo apt -o Acquire::http::Timeout=30 update  # tighten the per-mirror timeout",
      "sudo apt update --error-on=any  # exit non-zero on ANY warning (useful in CI)",
      "ls /var/lib/apt/lists/  # see the cached metadata files themselves"
    ],
    memoryTip: "`apt update` = refresh the SHOP CATALOG. `apt upgrade` = actually BUY the new versions. Two separate steps on Debian/Ubuntu, unlike `dnf upgrade` which does both. Stale catalog → mysterious 'Unable to locate package' errors.",
    outputExample: "$ sudo apt update\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://archive.ubuntu.com/ubuntu noble-updates InRelease [128 kB]\nGet:3 http://security.ubuntu.com/ubuntu noble-security InRelease [128 kB]\nGet:4 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [342 kB]\nFetched 598 kB in 2s (271 kB/s)\nReading package lists... Done\nBuilding dependency tree... Done\n42 packages can be upgraded. Run 'apt list --upgradable' to see them.",
    category: "PACKAGES"
  },
  {
    id: "pkg4",
    question: "Install the newer versions of every installed package after `apt update` with `sudo apt upgrade` (Debian/Ubuntu)",
    answer: "apt-get upgrade",
    explanation: "`apt upgrade` walks every installed package, compares the installed version to the one in the freshly cached metadata (so you should `apt update` first), and downloads + installs whatever is newer. By default it will NEVER remove a package to satisfy a new dependency — if doing the upgrade requires removing something else, that package is 'kept back' and skipped. `apt full-upgrade` (formerly `apt-get dist-upgrade`) drops that constraint: it WILL remove packages when necessary to complete the upgrade, which is sometimes the only way to cross a major version boundary. Use plain `upgrade` for routine patching; reach for `full-upgrade` only when you understand what will be removed. After upgrades involving the kernel, libc, or systemd, a reboot may be required — check `/var/run/reboot-required` (it exists if Ubuntu thinks you should reboot). `apt list --upgradable` shows what WOULD be upgraded without doing anything (dry-run-ish).",
    usage: "Routine weekly/monthly patching, applying security errata, or catching up a long-dormant VM. Always after `sudo apt update`.",
    examples: [
      "sudo apt update && sudo apt upgrade  # the standard combo",
      "sudo apt upgrade -y  # unattended (good in scripts/cron)",
      "sudo apt full-upgrade  # allow REMOVING packages to complete the upgrade",
      "sudo apt list --upgradable  # what WOULD upgrade — safe preview",
      "sudo apt upgrade --only-upgrade nginx  # upgrade just one package",
      "[ -f /var/run/reboot-required ] && echo 'Reboot needed'  # post-upgrade check"
    ],
    memoryTip: "`upgrade` = safe (keeps packages held back), `full-upgrade` = allows REMOVALS, more powerful but riskier. Compare with Fedora's `dnf upgrade` which does both refresh + install in one shot. Always preview with `apt list --upgradable` if you're nervous.",
    outputExample: "$ sudo apt upgrade\nReading package lists... Done\nBuilding dependency tree... Done\nCalculating upgrade... Done\nThe following packages have been kept back:\n  ubuntu-drivers-common\nThe following packages will be upgraded:\n  bash bash-completion curl git libc-bin libc6 libssl3 openssl\n8 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.\nNeed to get 12.4 MB of archives.\nAfter this operation, 18.4 kB of additional disk space will be used.\nDo you want to continue? [Y/n]",
    category: "PACKAGES"
  },
  {
    id: "pkg5",
    question: "Find a package by keyword in name or description with `apt search keyword` (Debian/Ubuntu)",
    answer: "apt-cache search package_name",
    explanation: "`apt search` (and the older `apt-cache search`) searches the local APT metadata cache — built up by `apt update` — for the keyword in package names and short descriptions. Output is one block per match: `package/suite version arch` then a short summary. The newer `apt search` uses 'fuzzy' matching and colorized output that's nicer for interactive use, while `apt-cache search` is more scripting-friendly. Add `--names-only` (or `-n`) to restrict matching to names only — useful when a common word like 'web' returns thousands of hits. To search by file (which package ships `/usr/bin/foo`?), `apt search` won't help — use `apt-file search PATH` (after `sudo apt install apt-file && sudo apt-file update`) or `dpkg -S PATH` for already-installed files. No sudo needed since this is a read-only query against the cached lists in `/var/lib/apt/lists/`.",
    usage: "Discovering tools when you know what they do but not what they're called, comparing alternatives (`apt search markdown editor`), or auditing what's available before committing to install.",
    examples: [
      "apt search nginx  # find packages mentioning nginx",
      "apt search --names-only ^python3-flask  # name-only regex search",
      "apt-cache search 'web server' | head  # older form, scripting-friendly",
      "apt search markdown | grep -i editor  # narrow a broad keyword",
      "apt list --installed | grep python  # list ALREADY-installed packages by pattern",
      "apt-file search /usr/bin/curl  # which (uninstalled) package ships this file?"
    ],
    memoryTip: "`apt search` = catalog text search. Add `--names-only` for tighter results. To search by FILE not keyword, use `apt-file search` or `dpkg -S`. The 'WARNING: apt does not have a stable CLI' line on scripts is why scripts still prefer `apt-cache search` / `apt-get install`.",
    outputExample: "$ apt search git\nSorting... Done\nFull Text Search... Done\ngit/noble,now 1:2.43.0-1 amd64 [installed]\n  fast, scalable, distributed revision control system\n\ngit-all/noble 1:2.43.0-1 all\n  fast, scalable, distributed revision control system (all subpackages)\n\ngit-annex/noble 10.20240227-1 amd64\n  manage files with git, without checking their contents into git\n\ngit-cola/noble 4.4.1-1 all\n  highly caffeinated git GUI",
    category: "PACKAGES"
  },
  {
    id: "pkg6",
    question: "Display detailed metadata (version, dependencies, size, description) about a package with `apt show package_name` (Debian/Ubuntu)",
    answer: "apt-cache show package_name",
    explanation: "`apt show` prints the full record for a package from the cached metadata: Version, Priority, Section, Maintainer, Architecture, Installed-Size, Depends, Recommends, Suggests, Conflicts, Description, Download-Size, and Homepage URL. If multiple versions are available (e.g., from `noble` and `noble-updates`), only the candidate version is shown by default — `apt-cache show pkg` shows all of them. This is the right command to vet what you're about to install: read the description, click the Homepage if curious, scan the Depends line for surprises. `dpkg -s pkg` prints similar info but ONLY for installed packages (queries the local dpkg database, not the repo cache). For a quick 'is this installed and what version?' check, `dpkg -s pkg | grep -E '^(Package|Version|Status)'` is fast. No sudo needed; pure cache read.",
    usage: "Reading what a package does before installing, checking which version is the candidate, copying the project URL out of the metadata, or inspecting a package's dependency list before adding it to a server.",
    examples: [
      "apt show nginx  # full metadata for the candidate version",
      "apt-cache show nginx  # full metadata for ALL available versions",
      "apt show nginx 2>/dev/null | grep ^Version  # quick version grab",
      "apt show nginx | grep -E '^(Depends|Recommends)'  # dependency line(s)",
      "dpkg -s nginx  # installed version + status (no repo data)",
      "apt-cache policy nginx  # candidate + installed + repo priority info"
    ],
    memoryTip: "`apt show` = read the BOX before you BUY. RHEL/Fedora equivalent: `dnf info`. For installed-only info from the LOCAL dpkg DB use `dpkg -s`; for repo policy + version table use `apt-cache policy`.",
    outputExample: "$ apt show git\nPackage: git\nVersion: 1:2.43.0-1ubuntu7\nPriority: optional\nSection: vcs\nOrigin: Ubuntu\nMaintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>\nInstalled-Size: 21.7 MB\nDepends: libc6 (>= 2.34), libcurl3-gnutls (>= 7.56.1), liberror-perl, git-man (>> 1:2.43.0), git-man (<< 1:2.43.0-.)\nRecommends: less, ssh-client | lsh-client, patch\nSuggests: gettext-base, git-daemon-run | git-daemon-sysvinit, git-doc, git-el\nDownload-Size: 3,816 kB\nHomepage: https://git-scm.com/\nDescription: fast, scalable, distributed revision control system",
    category: "PACKAGES"
  },
  {
    id: "pkg7",
    question: "Check whether a specific package is installed by filtering `dpkg -l | grep package_name` (Debian/Ubuntu)",
    answer: "dpkg -l | grep package_name",
    explanation: "`dpkg` is the low-level package manager APT calls under the hood — it manages the local installed-package database at `/var/lib/dpkg/`. `dpkg -l` (or `--list`) prints every installed package as one line per package, with a two-letter status code at the start: the first letter is the DESIRED state (`i` = install, `h` = hold, `r` = remove, `p` = purge), the second is the ACTUAL state (`i` = installed, `c` = config-files only, `u` = unpacked, `n` = not installed, `f` = failed, `h` = half-installed). Most installed packages show `ii` (want-install, is-installed). Piping into `grep` filters down to packages whose name or description matches your keyword. A cleaner alternative is `dpkg -s pkg` (status of one specific package — exits 0 if installed) or `dpkg -l pkg` (list one package without grep). For repo-aware listing use `apt list --installed`. No sudo needed.",
    usage: "Pre-flight checking before a deploy script ('is curl installed?'), auditing what's on a server, or generating a packages manifest to copy to another machine.",
    examples: [
      "dpkg -l | grep -i nginx  # case-insensitive search across all installed",
      "dpkg -l nginx  # status of one specific package (no grep needed)",
      "dpkg -s nginx >/dev/null 2>&1 && echo INSTALLED || echo MISSING  # script-friendly check",
      "apt list --installed 2>/dev/null | grep ^python  # APT-style version of the same",
      "dpkg -l | awk '/^ii/ {print $2}' > /tmp/installed.txt  # clean manifest of installed pkgs",
      "command -v git >/dev/null && echo found  # check executable on PATH (faster but not the same)"
    ],
    memoryTip: "`dpkg -l` = list local DB. The two-letter status code: first = WANT, second = HAVE — `ii` is the normal happy state. For scripts, `dpkg -s pkg` exits 0 iff installed, no piping needed.",
    outputExample: "$ dpkg -l | grep -i nginx\nii  libnginx-mod-http-image-filter  1.24.0-2ubuntu7   amd64        HTTP image filter dynamic module\nii  nginx                           1.24.0-2ubuntu7   all          small, powerful, scalable web/proxy server\nii  nginx-common                    1.24.0-2ubuntu7   all          small, powerful, scalable web/proxy server - common files\nii  nginx-core                      1.24.0-2ubuntu7   amd64        nginx web/proxy server (standard version)",
    category: "PACKAGES"
  },
  {
    id: "pkg8",
    question: "Show the installed AND available versions of a package, plus the repos offering it, with `apt-cache policy package_name` (Debian/Ubuntu)",
    answer: "apt-cache policy package_name",
    explanation: "`apt-cache policy` is the diagnostic for 'which version is installed, which version WOULD APT install if I ran `apt install`, and where do all those candidates come from?'. The output has three sections: `Installed:` (current version, or `(none)`), `Candidate:` (the version APT would pick — the highest-priority available), and `Version table:` listing each available version with the repository (source) URL and a priority number (500 is normal repo, 100 is backports, etc.). This is the right tool to debug 'why isn't APT installing the version I expect?' — usually because your sources list isn't pointing where you think, or because of `apt-mark hold`, or because Ubuntu has multiple suites enabled with different priorities. With NO package name, `apt-cache policy` dumps the policy for every configured source. No sudo needed.",
    usage: "Debugging weird APT version choices, confirming a package will install from the repo you intend (not a random PPA), or checking whether your `hold` is still in effect.",
    examples: [
      "apt-cache policy nginx  # full picture for one package",
      "apt-cache policy  # the global view: every source's priority",
      "apt-cache policy python3 | grep -E 'Installed|Candidate'  # quick installed vs. candidate",
      "apt-cache madison nginx  # tabular per-version+repo view (one line per version)",
      "dpkg -s nginx | grep Version  # installed version only, from local DB",
      "apt list -a nginx  # newer apt's view of available versions"
    ],
    memoryTip: "`apt-cache policy` = the COURT case for a package: who wants to install it, who CAN install it, what's the priority. `Installed:` (none) means not installed; `Candidate:` shows what `apt install` would do. Use to investigate 'wrong version got picked' mysteries.",
    outputExample: "$ apt-cache policy nginx\nnginx:\n  Installed: 1.24.0-2ubuntu7\n  Candidate: 1.24.0-2ubuntu7.3\n  Version table:\n     1.24.0-2ubuntu7.3 500\n        500 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages\n        500 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages\n *** 1.24.0-2ubuntu7 100\n        100 /var/lib/dpkg/status",
    category: "PACKAGES"
  },
  {
    id: "pkg9",
    question: "Reclaim disk space by deleting downloaded .deb files in the APT cache with `sudo apt clean` (Debian/Ubuntu)",
    answer: "apt-get clean",
    explanation: "Every time APT installs or upgrades a package, the `.deb` archive is downloaded to `/var/cache/apt/archives/` and kept there 'in case you need it again' — for offline reinstalls, packaging another machine, or rolling back. On a long-lived server this directory can grow to hundreds of MB or more. `apt clean` deletes EVERY cached .deb (`/var/cache/apt/archives/*.deb` and the partial subdir), reclaiming all of that space. `apt autoclean` is the gentler variant: it only removes .debs for versions that are no longer downloadable from any source (so the in-use versions are kept). NEITHER affects the package metadata in `/var/lib/apt/lists/` — `apt update` will still work. `apt clean` does NOT remove installed packages — only the cached installer files. Running `clean` frequently is harmless; it just means the next `apt install` of the same package re-downloads it. Needs sudo because `/var/cache/apt/archives/` is root-owned.",
    usage: "Recovering disk space on a small VM after a big upgrade, prepping a Docker image (last step of a Dockerfile to shrink layers), or making room before a kernel update.",
    examples: [
      "sudo apt clean  # delete EVERY cached .deb — maximum free space",
      "sudo apt autoclean  # only delete .debs no longer obtainable from any repo (safer)",
      "du -sh /var/cache/apt/archives  # see how big the cache is right now",
      "sudo apt-get clean && sudo apt-get autoremove  # clean cache + drop orphan deps",
      "sudo rm -rf /var/lib/apt/lists/*  # nuke metadata too (next 'apt update' rebuilds it)",
      "RUN apt-get clean && rm -rf /var/lib/apt/lists/*  # classic Dockerfile shrink-line"
    ],
    memoryTip: "`apt clean` = empty the DOWNLOAD folder. Does NOT touch installed software. Companion: `apt autoremove` (drops orphan DEPS) — these two are commonly run together to free space. RHEL equivalent: `dnf clean all`.",
    outputExample: "$ du -sh /var/cache/apt/archives\n412M\t/var/cache/apt/archives\n$ sudo apt clean\n$ du -sh /var/cache/apt/archives\n8.0K\t/var/cache/apt/archives",
    category: "PACKAGES"
  },
  {
    id: "pkg10",
    question: "Pin a package to its current version so `apt upgrade` will skip it with `sudo apt-mark hold package_name` (Debian/Ubuntu)",
    answer: "apt-mark hold package_name",
    explanation: "`apt-mark` sets per-package flags in the dpkg database. `hold` tells APT 'never upgrade or remove this package, even if a newer version is available or another package wants it gone'. Held packages are SKIPPED by `apt upgrade` (you'll see 'The following packages have been kept back: ...' in the output). Common uses: pinning a kernel version to avoid an in-place reboot, pinning a database server (MySQL, Postgres) so it doesn't auto-major-upgrade and break replication, or freezing nginx during a compatibility test. Reverse with `apt-mark unhold pkg`. Inspect current holds with `apt-mark showhold`. Other useful marks: `auto` (package was installed as a dependency — eligible for `autoremove`), `manual` (you explicitly wanted it — never autoremoved). A package's mark is written to `/var/lib/apt/extended_states` (auto/manual) or to dpkg's selections file (hold).",
    usage: "Stopping a critical service from being auto-upgraded mid-night, pinning kernels on bare metal, or freezing a package while you reproduce a bug.",
    examples: [
      "sudo apt-mark hold nginx  # freeze nginx — never upgrade",
      "sudo apt-mark unhold nginx  # release the hold; will upgrade on next run",
      "apt-mark showhold  # list currently held packages",
      "sudo apt-mark auto $(dpkg -l | awk '/^ii/ {print $2}' | grep -i ^linux-image-)  # mark old kernels auto so autoremove cleans them",
      "sudo apt-mark manual nginx  # mark as user-installed (won't be autoremoved)",
      "echo 'nginx hold' | sudo dpkg --set-selections  # alt low-level form"
    ],
    memoryTip: "`apt-mark hold` = FREEZE this package. Sibling commands: `unhold` (thaw), `auto`/`manual` (autoremove eligibility), `showhold`/`showauto`/`showmanual` (audit). Compare with Fedora `sudo dnf versionlock add PKG`.",
    outputExample: "$ sudo apt-mark hold nginx\nnginx set on hold.\n$ apt-mark showhold\nnginx\n$ sudo apt upgrade\n...\nThe following packages have been kept back:\n  nginx\n0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.",
    category: "PACKAGES"
  },
  {
    id: "pkg11",
    question: "Install a locally downloaded .deb file with `sudo dpkg -i package.deb` (or better, `sudo apt install ./package.deb`) (Debian/Ubuntu)",
    answer: "dpkg -i package.deb",
    explanation: "`dpkg -i` ('install') extracts and configures a `.deb` file directly into the system. The catch: `dpkg` is the LOW-LEVEL tool and does NOT resolve dependencies — if your .deb depends on `libfoo` and that's missing, `dpkg -i` aborts in a 'broken' state. The fix is `sudo apt --fix-broken install` (a.k.a. `apt install -f`), which pulls in the missing deps from configured repos. The MODERN preferred way is `sudo apt install ./package.deb` — note the `./` so APT knows it's a local file path, not a package name — which uses APT's dependency resolver from the start and avoids the dance. Useful when installing third-party packages (Google Chrome, VS Code, Slack, ngrok) downloaded from a vendor's site. Always verify the .deb's authenticity (signature/checksum) before installing — anything you `dpkg -i` runs maintainer scripts as root.",
    usage: "Installing third-party .debs (Chrome, Slack, Zoom, VS Code, ngrok), installing your own built package, or installing in an air-gapped environment.",
    examples: [
      "sudo apt install ./google-chrome.deb  # modern: APT resolves deps automatically",
      "sudo dpkg -i ./mypkg.deb  # low-level — may leave system 'broken' if deps missing",
      "sudo apt install -f  # fix broken state after a failed dpkg -i",
      "sudo dpkg -i ./*.deb  # install every .deb in cwd (e.g., from a download bundle)",
      "dpkg-deb -c ./mypkg.deb  # PEEK inside the .deb without installing (list contents)",
      "dpkg-deb -I ./mypkg.deb  # print the .deb's control/metadata file"
    ],
    memoryTip: "Prefer `sudo apt install ./file.deb` over `dpkg -i` — APT resolves deps; dpkg doesn't. If you do use dpkg and it breaks: `sudo apt install -f` cleans up. Always `./` for a local file, otherwise APT looks in repos for that name.",
    outputExample: "$ sudo apt install ./google-chrome-stable_current_amd64.deb\nReading package lists... Done\nNote, selecting 'google-chrome-stable' instead of './google-chrome-stable_current_amd64.deb'\nThe following additional packages will be installed:\n  fonts-liberation libu2f-udev libvulkan1\nAfter this operation, 270 MB of additional disk space will be used.\nDo you want to continue? [Y/n] Y\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 libu2f-udev all 1.1.10-3 [9,160 B]\nSelecting previously unselected package google-chrome-stable.\nSetting up google-chrome-stable (124.0.6367.118-1) ...",
    category: "PACKAGES"
  },
  {
    id: "pkg12",
    question: "List the packages a given package depends on with `apt-cache depends package_name` (Debian/Ubuntu)",
    answer: "apt-cache depends package_name",
    explanation: "Every Debian package declares its relationships to others in five flavors: `Depends:` (REQUIRED — must be installed for this package to work), `PreDepends:` (must be installed AND fully configured first), `Recommends:` (strongly suggested, installed by default unless `--no-install-recommends`), `Suggests:` (loosely related, never auto-installed), and `Breaks/Conflicts:` (cannot coexist). `apt-cache depends PKG` walks one level and prints all of these for the candidate version, one per line. Add `--recurse` to walk the full dependency tree (can be huge — pipe through `head` or `wc -l`). The inverse query is `apt-cache rdepends PKG` ('reverse depends') which tells you 'who depends ON this package?' — invaluable before removing something. The `--installed` flag limits to packages currently on disk. No sudo needed. A common gotcha: a `|` in the output (e.g., `mail-transport-agent | postfix`) means 'either-or' — any one of the alternatives satisfies the dep.",
    usage: "Auditing what a package would pull in before installing, understanding why a system has a particular package installed, or finding what else uses a library you want to remove.",
    examples: [
      "apt-cache depends nginx  # one level — direct deps + recommends + suggests",
      "apt-cache depends --recurse --no-recommends --no-suggests nginx | sort -u  # full clean tree",
      "apt-cache rdepends libssl3  # who needs libssl3? (before removing it)",
      "apt-cache rdepends --installed --recurse libssl3 | wc -l  # how many installed things use it",
      "apt show nginx | grep -E '^Depends|^Recommends'  # alt: read from `apt show` output",
      "debtree nginx | dot -Tpng -o tree.png  # visualize the dep graph (debtree package)"
    ],
    memoryTip: "`depends` = what I need. `rdepends` = who needs me (reverse). Five flavors: Depends/PreDepends (must), Recommends/Suggests (nice-to-have), Conflicts/Breaks (must NOT). `|` in a dep line means alternatives.",
    outputExample: "$ apt-cache depends nginx\nnginx\n  Depends: <httpd>\n    apache2\n  |Depends: libnginx-mod-http-geoip2\n   Depends: libnginx-mod-http-image-filter\n   Depends: libnginx-mod-stream\n   Depends: libnginx-mod-mail\n   Depends: nginx-common\n   Depends: nginx-core\n  PreDepends: lsb-base",
    category: "PACKAGES"
  },
  {
    id: "pkg13",
    question: "Add a third-party PPA or repository source with `sudo add-apt-repository 'ppa:user/ppa-name'` (Debian/Ubuntu)",
    answer: "apt-add-repository 'ppa:user/ppa-name'",
    explanation: "A PPA ('Personal Package Archive') is an Ubuntu-only hosting service on Launchpad where developers publish .deb packages outside the official Ubuntu repos — commonly used to get newer versions than Ubuntu ships, or community-maintained software. `add-apt-repository` (Ubuntu only; install via `software-properties-common`) does three things in one shot: (1) creates a new file under `/etc/apt/sources.list.d/`, (2) imports the PPA's GPG signing key into `/etc/apt/trusted.gpg.d/`, and (3) automatically runs `apt update` afterwards. On Debian (no PPAs by default) you can still use `add-apt-repository` for regular `deb` lines, OR manually drop a `.sources` file in `/etc/apt/sources.list.d/` and import a key. PPAs run code as root via maintainer scripts — only add PPAs from sources you TRUST. Remove with `add-apt-repository --remove`. The modern, more secure pattern uses `signed-by=/path/to/key.gpg` in the sources file so the key only signs that one repo, not the whole system.",
    usage: "Getting newer versions than Ubuntu ships (e.g., `ppa:deadsnakes/ppa` for newer Pythons), installing community software not in main repos, or adding a vendor's apt repo (Docker, Tailscale, etc.).",
    examples: [
      "sudo add-apt-repository ppa:deadsnakes/ppa  # add a PPA + auto-update",
      "sudo add-apt-repository --remove ppa:deadsnakes/ppa  # remove it cleanly",
      "sudo add-apt-repository 'deb https://download.docker.com/linux/ubuntu noble stable'  # arbitrary apt source",
      "sudo apt install software-properties-common  # provides add-apt-repository (if missing)",
      "ls /etc/apt/sources.list.d/  # see which third-party repos are active",
      "sudo apt-key list  # legacy: list trusted signing keys (deprecated, use /etc/apt/trusted.gpg.d/)"
    ],
    memoryTip: "PPAs = Ubuntu-only third-party repos. `add-apt-repository` adds source file + key + auto-update in one command. SECURITY: anything you add can install root code on every `apt upgrade` — only add what you trust. Prefer the modern `signed-by=` pattern.",
    outputExample: "$ sudo add-apt-repository ppa:deadsnakes/ppa\nThis PPA contains newer Python versions for various Ubuntu releases.\n More info: https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa\nPress [ENTER] to continue or Ctrl-c to cancel.\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 https://ppa.launchpadcontent.net/deadsnakes/ppa/ubuntu noble InRelease [18.1 kB]\n...\nReading package lists... Done",
    category: "PACKAGES"
  },
  {
    id: "pkg16",
    question: "List every active APT repository on the system with `grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/` (Debian/Ubuntu)",
    answer: "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list",
    explanation: "APT's source list is split between TWO locations: `/etc/apt/sources.list` (the main file, traditionally maintained by your distro) and `/etc/apt/sources.list.d/*.list` (one file per third-party repo — Chrome, Docker, PPAs you've added). Newer systems also use `.sources` files in DEB822 format under the same directory. Each entry starts with `deb` (for binary packages) or `deb-src` (for source packages). The `grep -R '^deb'` recursive search prints every active line across both locations, ignoring commented-out lines (which start with `#`). On Ubuntu 24.04+ the main config moved to `/etc/apt/sources.list.d/ubuntu.sources` using the new DEB822 format, so you may need to also grep there: `grep -R 'URIs:' /etc/apt/sources.list.d/`. To inspect priorities and repo state, `apt-cache policy` (no args) prints every source with its priority. No sudo needed.",
    usage: "Auditing third-party repos before a security review, debugging why APT picks an unexpected version, or copying a working sources config to another machine.",
    examples: [
      "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/  # legacy .list files",
      "grep -R 'URIs:' /etc/apt/sources.list.d/  # modern DEB822 .sources files",
      "apt-cache policy  # priority view of every active source",
      "ls -la /etc/apt/sources.list.d/  # one file per third-party repo",
      "apt list --installed | grep -v noble/  # packages NOT from default Ubuntu (third-party sources)",
      "cat /etc/apt/sources.list.d/google-chrome.list  # peek at a specific third-party source"
    ],
    memoryTip: "Two locations: `/etc/apt/sources.list` (distro) + `/etc/apt/sources.list.d/*` (third party). Ubuntu 24.04 mostly uses `.sources` files (DEB822 multi-line). Tip: `apt-cache policy` gives a priority-aware view if you don't want to grep raw files.",
    outputExample: "$ grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list 2>/dev/null\n/etc/apt/sources.list:deb http://archive.ubuntu.com/ubuntu noble main restricted universe multiverse\n/etc/apt/sources.list:deb http://archive.ubuntu.com/ubuntu noble-updates main restricted universe multiverse\n/etc/apt/sources.list:deb http://security.ubuntu.com/ubuntu noble-security main restricted universe multiverse\n/etc/apt/sources.list.d/google-chrome.list:deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/google.gpg] http://dl.google.com/linux/chrome/deb/ stable main\n/etc/apt/sources.list.d/docker.list:deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable",
    category: "PACKAGES"
  },
  {
    id: "pkg17",
    question: "Read the offline manual page for any command with `man command_name`",
    answer: "man command",
    explanation: "`man` (short for 'manual') opens the offline documentation for a command, function, file format, or system call — every Linux box ships with hundreds of these. Pages are organized into numbered SECTIONS: 1 = user commands (most common), 2 = system calls, 3 = library functions, 4 = device files, 5 = file formats and configs, 6 = games, 7 = misc/overview, 8 = sysadmin commands. So `man 5 passwd` gives the FILE FORMAT for `/etc/passwd`, while `man 1 passwd` gives the password-changing COMMAND. Inside the pager use `/text` to search forward, `n`/`N` to jump between hits, `space`/`b` to page down/up, `q` to quit. If no page exists, install `man-db` and the package's docs (some distros split docs out — `apt install nginx-doc`). For a one-line summary, `whatis cmd`; to search descriptions, `apropos keyword` (same as `man -k`). `--help` after a command (e.g., `ls --help`) gives a quick flag list — much shorter than the man page. The modern friendlier alternative is `tldr CMD` (separate package `tldr-pages`).",
    usage: "Learning a command's options the first time you use it, looking up an obscure flag, or reading config-file formats like `man 5 sshd_config` and `man 5 crontab`.",
    examples: [
      "man ls  # the everyday command page",
      "man 5 passwd  # specifically section 5 — file format of /etc/passwd",
      "man -k 'list directory'  # apropos: search descriptions for a phrase",
      "man -f ls  # whatis: one-line description",
      "man bash  # epic 5000+-line shell reference",
      "ls --help | less  # quick flag summary alternative"
    ],
    memoryTip: "`man` = MANUAL. Section numbers matter when names collide: `man 1 passwd` (command) vs `man 5 passwd` (file format). Navigation in less: `/` search, `n`/`N` next/prev, `space`/`b` page, `q` quit. Companion: `apropos`, `whatis`, `--help`, `tldr`.",
    outputExample: "$ man ls\nLS(1)                                        User Commands                                        LS(1)\n\nNAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n\nDESCRIPTION\n       List information about the FILEs (the current directory by default).  Sort entries alphabetically\n       if none of -cftuvSUX nor --sort is specified.\n\n       Mandatory arguments to long options are mandatory for short options too.\n\n       -a, --all\n              do not ignore entries starting with .\n\n       -A, --almost-all\n              do not list implied . and ..\n Manual page ls(1) line 1 (press h for help or q to quit)",
    category: "PACKAGES"
  },
  {
    id: "pkg14",
    question: "Detect broken/unsatisfied package dependencies on the system with `sudo apt-get check` (Debian/Ubuntu)",
    answer: "apt-get check",
    explanation: "`apt-get check` does a quick consistency pass on the installed-package database: it reads the dpkg status file and verifies that every installed package's `Depends:` are satisfied. If something is broken — typically because a `dpkg -i` aborted, a previous transaction crashed, or you force-removed a package others needed — `check` reports it as `unmet dependencies` and you'll need a recovery step. The standard fixes, in order to try: (1) `sudo apt --fix-broken install` (or `apt install -f`) — APT tries to satisfy missing deps by pulling them from repos and may offer to remove offenders; (2) `sudo dpkg --configure -a` — runs the post-install scripts for any package stuck in 'half-configured' state; (3) `sudo apt --fix-missing install` — retries previously failed downloads. A package stuck in `half-installed` or `half-configured` can block ALL future apt operations, so fixing it is urgent. No sudo needed for `check` itself (read-only), but sudo for the fixes.",
    usage: "Diagnosing 'something is broken — apt complains every time' situations, after a crashed transaction, or after you used `dpkg --remove --force-depends`.",
    examples: [
      "sudo apt-get check  # quick health check",
      "sudo apt --fix-broken install  # the everyday recovery command (alias: apt install -f)",
      "sudo dpkg --configure -a  # finish configuring packages stuck mid-install",
      "sudo apt --fix-missing install  # retry downloads that failed mid-transaction",
      "dpkg -l | awk '$1 !~ /^ii$/ {print}'  # spot packages NOT in clean 'ii' state",
      "sudo apt update && sudo apt --fix-broken install && sudo dpkg --configure -a  # full recovery dance"
    ],
    memoryTip: "Recovery order: `apt-get check` (diagnose) → `apt --fix-broken install` (resolve deps) → `dpkg --configure -a` (finish half-configured packages). Anything other than `ii` in `dpkg -l` first column = potential trouble.",
    outputExample: "$ sudo apt-get check\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\n# (silent = healthy. If broken you'll see:)\n# E: Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution).",
    category: "PACKAGES"
  },
  {
    id: "pkg15",
    question: "List every file shipped by a package (installed or not) with `apt-file list package_name` (Debian/Ubuntu)",
    answer: "apt-file list package_name",
    explanation: "`apt-file` is a separate tool (install with `sudo apt install apt-file && sudo apt-file update`) that downloads and indexes the FILE LISTS of every package in your enabled repos — not just installed ones. `apt-file list PKG` prints all files inside a package, even if you've never installed it; `apt-file search PATH` reverses the lookup ('which package ships /usr/bin/foo?'), which is invaluable when you hit 'command not found'. Compare to the built-in `dpkg -L PKG`, which only works for INSTALLED packages because it reads the local dpkg DB. The complementary search direction: `dpkg -S /path` (installed-only) vs `apt-file search /path` (whole repo universe). After enabling new repos or major changes, rerun `sudo apt-file update` to refresh the index. The data lives in `/var/cache/apt/apt-file/`.",
    usage: "Finding which package to install when a command is missing, exploring what a third-party package will install before committing, or auditing config locations across non-installed packages.",
    examples: [
      "sudo apt install apt-file && sudo apt-file update  # one-time setup",
      "apt-file list nginx  # every file the nginx package ships",
      "apt-file search /usr/bin/curl  # which package provides /usr/bin/curl?",
      "apt-file search bin/htop  # broader path search",
      "dpkg -L nginx  # alternative: installed-only file list",
      "dpkg -S /etc/nginx/nginx.conf  # installed-only reverse search"
    ],
    memoryTip: "Two pairs: `apt-file list` ↔ `apt-file search` (repo-wide), `dpkg -L` ↔ `dpkg -S` (installed only). Repo-wide tools need an explicit cache update. Fedora equivalents: `dnf repoquery -l PKG` and `dnf provides PATH`.",
    outputExample: "$ apt-file list nginx | head -10\nnginx: /etc/init.d/nginx\nnginx: /etc/logrotate.d/nginx\nnginx: /etc/nginx/conf.d/default.conf\nnginx: /etc/nginx/fastcgi.conf\nnginx: /etc/nginx/fastcgi_params\nnginx: /etc/nginx/mime.types\nnginx: /etc/nginx/nginx.conf\nnginx: /etc/nginx/scgi_params\nnginx: /etc/nginx/uwsgi_params\nnginx: /usr/sbin/nginx\n$ apt-file search /usr/bin/curl\ncurl: /usr/bin/curl",
    category: "PACKAGES"
  },

  // BASH SCRIPTING
  {
    id: "bash1",
    question: "Start a bash script with the `#!/bin/bash` shebang line and an `echo` command",
    answer: "#!/bin/bash\necho 'Hello World'",
    explanation: "A 'shell script' is just a plain text file full of commands you'd otherwise type into a terminal — saved so you can re-run them on demand. The very first line is the 'shebang' (sometimes spelled 'hashbang'): the two characters `#!` followed by the absolute path of the interpreter that should run the file. `#!/bin/bash` tells the kernel 'feed the rest of this file to /bin/bash'. Without a shebang, the file would either run under whichever shell happens to invoke it (unpredictable) or refuse to execute at all. To actually run a script you must (1) make it executable with `chmod +x script.sh` and (2) call it as `./script.sh`. `echo` is a builtin that prints its arguments to stdout followed by a newline. For maximum portability you'll often see `#!/usr/bin/env bash` instead, which looks up bash on `$PATH` — handy on macOS where Apple's `/bin/bash` is ancient.",
    usage: "Automating any sequence of shell commands you find yourself typing repeatedly: nightly backups, project setup, deployment steps, batch file conversions.",
    examples: [
      "#!/bin/bash\necho 'Starting backup'\ntar -czf backup.tar.gz /home  # archive home directory",
      "#!/usr/bin/env bash\n# portable shebang — finds bash on PATH instead of hardcoding /bin/bash\necho \"Running on $(hostname)\"",
      "#!/bin/bash\nset -euo pipefail  # strict mode (recommended top line)\necho 'Safer script'",
      "#!/bin/bash\n# A comment — anything after # is ignored by bash\necho \"Hello, $USER\"  # $USER is an env var holding your username",
      "$ chmod +x hello.sh  # mark executable\n$ ./hello.sh  # run it (must prefix ./ for current dir)"
    ],
    memoryTip: "`#!` = SHE-BANG (`#` = sharp/hash, `!` = bang). The line says 'use THIS interpreter for the rest of the file'. Must be the VERY FIRST line — even one blank line above it disables it.",
    outputExample: "$ cat hello.sh\n#!/bin/bash\necho 'Hello World'\n$ chmod +x hello.sh\n$ ./hello.sh\nHello World",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash2",
    question: "Test that a regular file exists using `if [ -f file ]` with the `-f` file-test operator",
    answer: "if [ -f file ]; then echo 'exists'; fi",
    explanation: "An `if` statement runs commands only when a condition is true. The condition itself is just a command — `if` looks at that command's 'exit code' (the number 0-255 a program returns when it finishes; 0 means success, anything else is failure). `[` is actually a builtin command (an alias for `test`) that evaluates a condition and returns 0/1. You MUST have spaces around `[` and `]`. The `-f` flag asks 'is this an existing regular file?' (not a directory, not a broken symlink). Other handy testers: `-d` (directory exists), `-e` (any kind of file exists), `-r` (readable), `-w` (writable), `-x` (executable), `-s` (file is non-empty), `-z STRING` (string is empty), `-n STRING` (string is non-empty). The full block is `if CONDITION; then ACTIONS; fi` — `fi` (if backwards) closes the block. Foot-gun: ALWAYS quote variable expansions inside `[ ]` (e.g. `[ -f \"$file\" ]`) — an unquoted empty variable causes a syntax error. The bash-only `[[ ]]` form (double brackets) is safer because it handles unquoted vars correctly, but `[ ]` is POSIX-portable.",
    usage: "Sanity-check inputs before acting on them: don't `source` a config that's not there, don't `cd` into a directory that doesn't exist, don't process a file that's missing.",
    examples: [
      "if [ -f config.txt ]; then\n  source config.txt  # load variables from the file\nfi",
      "if [ -d /backup ]; then\n  cd /backup\nelse\n  echo '/backup missing' >&2; exit 1\nfi",
      "if [ ! -e \"$path\" ]; then  # ! negates: true when path does NOT exist\n  echo 'creating' && touch \"$path\"\nfi",
      "[ -x /usr/local/bin/foo ] && /usr/local/bin/foo  # one-liner: run only if executable",
      "if [[ -f $file && -r $file ]]; then echo readable; fi  # [[ ]] = bash, no quoting needed"
    ],
    memoryTip: "`-f` = File (regular), `-d` = Directory, `-e` = Exists (any type). Always spell it `if [ -f \"$x\" ]; then ... ; fi`. Mnemonic for the closers: `fi` ends `if`, `done` ends `do`, `esac` ends `case` — keywords spelled backwards.",
    outputExample: "$ touch /tmp/hello\n$ if [ -f /tmp/hello ]; then echo 'exists'; else echo 'missing'; fi\nexists\n$ if [ -f /tmp/nope ]; then echo 'exists'; else echo 'missing'; fi\nmissing",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash3",
    question: "Iterate over all `.txt` files in the current directory with `for file in *.txt; do ... done`",
    answer: "for file in *.txt; do echo $file; done",
    explanation: "A `for` loop walks through a list of words and runs the body once per word, with the loop variable bound to each word in turn. `*.txt` is a 'glob' (filename pattern) — before the loop runs, bash EXPANDS it into the actual list of matching filenames in the current directory. So if you have `a.txt b.txt c.txt`, bash literally rewrites the loop as `for file in a.txt b.txt c.txt`. If NOTHING matches, bash leaves the literal string `*.txt` untouched by default — set `shopt -s nullglob` if you want an empty list instead. Each iteration: `$file` (or `${file}` to be explicit) holds the current name; `do` starts the body; `done` closes the loop (matching `for` like `fi` matches `if`). Foot-gun: ALWAYS quote `\"$file\"` inside the body — filenames with spaces (`my photo.jpg`) otherwise get split into two arguments. You can also iterate over: numeric ranges with brace expansion `{1..10}`, the script's arguments with `\"$@\"`, or arrays. For C-style counter loops use `for ((i=0; i<10; i++)); do ... done`.",
    usage: "Batch processing: converting all images, renaming files, running a command against each directory, sending a list of items to a tool one at a time.",
    examples: [
      "for f in *.jpg; do\n  convert \"$f\" \"${f%.jpg}.png\"  # ${f%.jpg} strips the suffix\ndone",
      "for i in {1..5}; do\n  echo \"Run $i\"  # brace expansion: 1 2 3 4 5\ndone",
      "for dir in */; do  # trailing / matches only directories\n  echo \"Found dir: $dir\"\ndone",
      "for arg in \"$@\"; do  # iterate over script arguments safely\n  echo \"arg=$arg\"\ndone",
      "for ((i=0; i<3; i++)); do echo \"i=$i\"; done  # C-style numeric loop"
    ],
    memoryTip: "`for VAR in LIST; do ... done`. The glob `*.txt` is expanded BEFORE the loop starts, not while it runs. Always QUOTE `\"$file\"` — filenames with spaces will betray you otherwise.",
    outputExample: "$ touch a.txt b.txt 'two words.txt'\n$ for f in *.txt; do echo \"got: $f\"; done\ngot: a.txt\ngot: b.txt\ngot: two words.txt",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash4",
    question: "Prompt the user and capture their typed line into a variable with `read -p 'Enter name: ' name`",
    answer: "read -p 'Enter name: ' name",
    explanation: "`read` is a bash builtin (not an external command) that reads ONE LINE from stdin and assigns it to one or more variables. The `-p PROMPT` flag prints `PROMPT` to stderr right before reading — handy because there's no newline after the prompt, so the cursor sits on the same line waiting for input. Crucial flags: `-s` (silent — don't echo what's typed, used for passwords), `-r` (raw — don't treat backslash as an escape; ALWAYS use this in scripts), `-t SECS` (timeout — exit non-zero if no input after N seconds), `-n N` (read exactly N chars, no Enter needed — for single-key prompts like 'y/n'), `-a NAME` (read whitespace-split words into array). By default, if you pass multiple variable names, the first word goes to the first variable, the second to the second, and the rest of the line goes to the LAST one. With NO variable name, the line goes into the magic `$REPLY` variable. Without `-r`, a backslash in the input is treated as a line-continuation; `read -r` is the safe default.",
    usage: "Interactive scripts that need a username/path/y-n choice, hidden password prompts, single-key menus, or timeout-bounded confirmations.",
    examples: [
      "read -rp 'Enter your name: ' username\necho \"Hello $username\"  # always use -r in scripts",
      "read -srp 'Enter password: ' password; echo  # -s = silent, echo adds the missing newline",
      "read -rp 'Continue? [y/N] ' -n1 ans; echo  # single-key prompt, no Enter needed",
      "read -rp 'Path: ' -t 10 path || { echo 'Timed out'; exit 1; }  # 10-second timeout",
      "read -ra args  # read a whitespace-split line into the array `args`",
      "while IFS= read -r line; do echo \"got: $line\"; done < file.txt  # line-by-line file read"
    ],
    memoryTip: "Flag cheat-sheet: `-p` PROMPT, `-r` RAW (use always), `-s` SILENT (password), `-n N` exactly N chars, `-t SECS` timeout, `-a ARR` into array. No variable name? Read into magic `$REPLY`. For file reading: `while IFS= read -r line` is the canonical safe loop.",
    outputExample: "$ read -rp 'Enter name: ' name\nEnter name: Alice\n$ echo \"Hello $name\"\nHello Alice\n$ read -srp 'Password: ' pw; echo\nPassword: \n$ echo \"got ${#pw} chars\"\ngot 12 chars",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash5",
    question: "Capture a command's output into a variable using command substitution `var=$(command)`",
    answer: "files=$(ls *.txt)",
    explanation: "Command substitution runs a command, captures its stdout, strips trailing newlines, and inserts the result wherever you wrote `$(command)`. The modern syntax is `$(command)`; the older backtick form `` `command` `` works identically but doesn't nest cleanly and is harder to read. Common uses: capturing a timestamp (`d=$(date +%F)`), capturing a file count (`n=$(ls | wc -l)`), or computing a path (`config=$(realpath ./config.yml)`). Critical gotcha: when you USE the captured value, QUOTE it (`echo \"$files\"`) — otherwise bash word-splits the value on whitespace, which silently breaks names with spaces. If you want the output as an ARRAY (one word per element), use `arr=( $(cmd) )` for whitespace-split or `mapfile -t arr < <(cmd)` to split by newlines (safer for filenames). `$()` can nest cleanly: `echo \"date is $(date +%F) and there are $(ls | wc -l) files\"`. The captured command runs in a SUBSHELL, so variable assignments inside it DON'T leak out.",
    usage: "Storing dynamic values (current date, hostname, count of matching files), building filenames from data, or passing the output of one command as a literal argument to another.",
    examples: [
      "today=$(date +%F)\nbackup=\"backup-$today.tar.gz\"  # produce backup-2026-05-17.tar.gz",
      "count=$(grep -c ERROR app.log)\necho \"$count errors found\"  # capture a number",
      "user_home=$(getent passwd alice | cut -d: -f6)  # nested chains work fine",
      "mapfile -t files < <(find . -name '*.log')  # array of paths, one per element, NEWLINE-safe",
      "for f in $(ls *.txt); do : ; done  # UNSAFE if names have spaces — prefer for f in *.txt",
      "size=$(stat -c%s \"$f\")  # file size in bytes"
    ],
    memoryTip: "`$(cmd)` modern, `` `cmd` `` legacy. Always QUOTE the result on use: `\"$var\"`. Captured command runs in a SUBSHELL — variables set inside don't leak out. For multi-word/newline output, prefer `mapfile -t arr < <(cmd)` over `arr=($(cmd))`.",
    outputExample: "$ today=$(date +%F)\n$ echo \"Today is $today\"\nToday is 2026-05-17\n$ count=$(grep -c -E 'ERROR|FATAL' /var/log/syslog 2>/dev/null || echo 0)\n$ echo \"$count error lines\"\n47 error lines\n$ mapfile -t pyfiles < <(find . -name '*.py')\n$ echo \"${#pyfiles[@]} python files\"\n23 python files",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash6",
    question: "Access command-line arguments passed to a script using `$1`, `$2`, ..., `$@`, and `$#`",
    answer: "echo \"First arg: $1\"",
    explanation: "When you invoke a script as `./myscript foo bar baz`, bash makes the arguments available as POSITIONAL PARAMETERS: `$0` = the script's own name/path, `$1` = `foo`, `$2` = `bar`, `$3` = `baz`. `$#` is the COUNT of arguments (3 in this example — note `$0` does NOT count). `$@` and `$*` both mean 'all arguments' but differ when quoted: `\"$@\"` expands to `\"$1\" \"$2\" \"$3\"` (each arg preserved as a separate word — what you almost always want), while `\"$*\"` expands to `\"$1 $2 $3\"` as a single string joined by the first character of `$IFS`. For argument numbers > 9 you MUST use braces: `${10}`, `${11}` — `$10` is actually `$1` followed by literal `0`. The `shift` builtin drops `$1` and renumbers the rest (shift N drops the first N). Critical: ALWAYS quote `\"$1\"`, `\"$2\"`, `\"$@\"` to handle args with spaces. For real flag parsing (`-v`, `--help`) use `getopts` (POSIX, short flags only) or write a `while case` loop. Foot-gun: defining a function changes `$1`, `$2`, etc. to the FUNCTION's args, hiding the script's args.",
    usage: "Making scripts accept input — filenames to process, options like `--verbose`, target hosts to ssh into. Foundational pattern for any reusable script.",
    examples: [
      "echo \"Script: $0\"\necho \"First arg: $1\"\necho \"All args ($#): $@\"  # standard intro",
      "if [ $# -lt 2 ]; then echo \"Usage: $0 SRC DEST\" >&2; exit 1; fi  # argument count check",
      "while [ $# -gt 0 ]; do echo \"processing: $1\"; shift; done  # consume args one by one",
      "for f in \"$@\"; do  # safely iterate over args with spaces\n  echo \"file: $f\"\ndone",
      "echo \"Tenth arg: ${10}\"  # MUST use braces past 9",
      "case \"${1:-}\" in -v|--verbose) verbose=1; shift;; esac  # simple flag handling"
    ],
    memoryTip: "`$0` script name, `$1`..`$9` positional, `${10}` and up need BRACES, `$#` count, `\"$@\"` all-as-words (use), `\"$*\"` all-as-one-string (avoid). Functions REDEFINE `$1`/`$2` inside — they don't see the script's args.",
    outputExample: "$ cat args.sh\n#!/bin/bash\necho \"name: $0\"\necho \"count: $#\"\necho \"first: $1\"\necho \"all: $@\"\nfor a in \"$@\"; do echo \"  arg: [$a]\"; done\n$ ./args.sh hello 'two words' three\nname: ./args.sh\ncount: 3\nfirst: hello\nall: hello two words three\n  arg: [hello]\n  arg: [two words]\n  arg: [three]",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash7",
    question: "Send normal output to one file and error messages to another with `command > out.txt 2> err.txt`",
    answer: "command > output.txt 2> error.txt",
    explanation: "Every Linux process has three default file descriptors (FDs): FD 0 = stdin (input), FD 1 = stdout (normal output), FD 2 = stderr (error/diagnostic output). Many beginners think 'everything the program prints' goes to one place — but it doesn't. `ls /tmp /nope` prints the listing to FD 1 and 'No such file' to FD 2. Redirection operators: `> file` redirects FD 1 (stdout) to `file`, truncating it first; `>> file` appends instead of truncating; `2> file` redirects FD 2 (stderr); `2>&1` says 'send FD 2 to wherever FD 1 currently goes' (the `&` means 'this is an FD, not a filename'); `&> file` is bash shorthand for 'both stdout AND stderr to file'. Discard with `/dev/null` (the bit bucket). ORDER MATTERS for `> file 2>&1` (good — both go to file) vs. `2>&1 > file` (bad — stderr goes to the OLD stdout, then stdout gets redirected). `< file` redirects stdin from a file. For 'both, but separately', use `> out 2> err` as in the question.",
    usage: "Splitting normal output from errors in a build (`make > build.log 2> build.err`), suppressing only error messages (`2>/dev/null`), logging everything from a cron job, or feeding a file as stdin to a command.",
    examples: [
      "command > out.txt 2> err.txt  # stdout → out.txt, stderr → err.txt (separate)",
      "command > all.log 2>&1  # BOTH to one file; equivalent: command &> all.log",
      "command >> append.log 2>&1  # append both (don't truncate)",
      "command 2>/dev/null  # discard errors, keep stdout on terminal",
      "command 1>/dev/null  # discard stdout, keep errors visible",
      "command < input.txt > output.txt  # read from input, write to output"
    ],
    memoryTip: "FDs: 0=in, 1=out, 2=err. `>` overwrite stdout, `>>` append, `2>` errors, `2>&1` 'errors go where stdout goes' (order matters — put it AFTER `> file`). `&>` is the bash 'both' shortcut. `/dev/null` = throw away. To DISCARD errors but keep stdout: `cmd 2>/dev/null`.",
    outputExample: "$ ls /tmp /nope > out.txt 2> err.txt\n$ cat out.txt\n/tmp:\nfile1\nfile2\n$ cat err.txt\nls: cannot access '/nope': No such file or directory\n$ ls /tmp /nope &> combined.txt\n$ cat combined.txt\nls: cannot access '/nope': No such file or directory\n/tmp:\nfile1\nfile2",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash8",
    question: "Define a reusable bash function with `name() { commands; }` (no `function` keyword needed)",
    answer: "function_name() { echo 'Hello'; }",
    explanation: "A bash function is a named block of code you can invoke like a command. Two equivalent syntaxes: `name() { ...; }` (POSIX, portable) and `function name { ...; }` (bash-only). Inside the function: arguments come in as `$1`, `$2`, ... and `$#` — they SHADOW the script's own positional parameters. Use `local var=...` to declare a variable scoped to the function (otherwise `var=...` is GLOBAL and leaks out — a common bug source). To 'return' a value, you have two options: (1) print to stdout and have the caller capture with `result=$(myfunc)`, or (2) set a global variable. The `return N` statement only sets an EXIT CODE (0-255), not a string — `return` is to functions what `exit` is to scripts. Functions can be tested with `if myfunc; then ...`. Define functions BEFORE you call them; bash reads top-to-bottom. To list defined functions: `declare -F`. To see a function's body: `declare -f myfunc`.",
    usage: "DRY: avoiding copy-paste, breaking a script into testable pieces, building a tiny library of helpers (logging, error reporting, cleanup) you `source` from multiple scripts.",
    examples: [
      "log() { echo \"[$(date +%F\\ %T)] $*\" >> /var/log/myapp.log; }\nlog 'started backup'  # reusable logger",
      "die() { echo \"FATAL: $*\" >&2; exit 1; }\n[ -f config.yml ] || die 'config missing'  # error-and-exit helper",
      "backup() {\n  local src=$1 dest=$2  # local: doesn't leak\n  tar -czf \"$dest\" \"$src\"\n}\nbackup /etc /tmp/etc.tgz",
      "is_root() { [ \"$(id -u)\" -eq 0 ]; }\nis_root && echo 'root' || echo 'not root'  # boolean function via exit code",
      "add() { echo $(( $1 + $2 )); }\nsum=$(add 3 4)  # 'return' a value by printing it",
      "declare -F  # list all defined functions"
    ],
    memoryTip: "`name() { ... }` defines, `name args` calls. `$1`..`$#` SHADOW the script's args inside. `local x=...` to avoid leaking variables. `return N` sets exit code (0-255), not a string — to 'return' data, echo it and let the caller use `$(...)`. Define before use.",
    outputExample: "$ greet() { local name=$1; echo \"Hello, ${name:-stranger}\"; }\n$ greet World\nHello, World\n$ greet\nHello, stranger\n$ count() { echo $#; }\n$ count a b 'c d e'\n3\n$ declare -F\ndeclare -f count\ndeclare -f greet",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash9",
    question: "Branch on whether a command succeeded by putting it directly after `if`: `if command; then ... fi`",
    answer: "if command; then echo 'success'; fi",
    explanation: "Every Linux command returns an 'exit code' when it finishes: 0 means SUCCESS, any non-zero value (1-255) means FAILURE — different non-zero codes can signal different kinds of failure (1 = general, 2 = misuse, 126/127 = perms/not-found, 130 = killed by Ctrl-C, etc.). The `if` statement in bash does NOT take a boolean expression — it takes a COMMAND and branches on its exit code: `if command` runs `command` and treats exit 0 as 'true', anything else as 'false'. `[ ... ]` (a.k.a. `test`) is just another command that returns 0/1, so `if [ -f foo ]` works the same way. The previous command's exit code lives in the magic variable `$?` (but using `if cmd; then` directly is cleaner than `cmd; if [ $? -eq 0 ]`). One-liner alternative: `cmd && success_action || failure_action` — but that's subtly buggy if `success_action` itself fails. Always use `set -e` (exit on error) or explicit `if`/`||` checks in production scripts. Strict mode opener: `set -euo pipefail`.",
    usage: "Validating preconditions (`if command -v git`), wrapping risky operations, deciding between branches based on whether a tool ran successfully, conditional logic in deployment scripts.",
    examples: [
      "if mkdir newdir; then echo 'created'; else echo 'failed' >&2; fi  # branch on exit code",
      "if command -v jq >/dev/null; then echo 'jq present'; fi  # is a command installed?",
      "if grep -q ERROR app.log; then echo 'errors found'; fi  # -q for quiet, exit code only",
      "command && success || failure  # one-liner — but watch out, `failure` runs if SUCCESS fails too",
      "cmd; rc=$?; if [ $rc -ne 0 ]; then echo \"cmd failed with $rc\"; fi  # capture $? if needed",
      "set -euo pipefail  # strict mode: exit on first failure, unset var, or pipe failure"
    ],
    memoryTip: "`if CMD; then ... fi` — `if` takes a COMMAND, not an expression. Exit code: 0 = success/true, non-zero = failure/false. `$?` holds the LAST exit code. The clean idiom is `if cmd; then ...`; the messy alternative is `cmd; if [ $? -eq 0 ]; then ...`. Strict-mode top line: `set -euo pipefail`.",
    outputExample: "$ if mkdir /tmp/newdir; then echo created; else echo failed; fi\ncreated\n$ if mkdir /tmp/newdir; then echo created; else echo failed; fi\nmkdir: cannot create directory '/tmp/newdir': File exists\nfailed\n$ if grep -q ^root /etc/passwd; then echo 'root user exists'; fi\nroot user exists\n$ true; echo $?\n0\n$ false; echo $?\n1",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash10",
    question: "Read a file one line at a time with `while IFS= read -r line; do ... done < file.txt`",
    answer: "while IFS= read -r line; do echo $line; done < file.txt",
    explanation: "The canonical line-by-line read loop in bash. Breaking it down: `while CMD; do BODY; done` runs `BODY` while `CMD` returns 0. `read -r line` reads one line into the variable `line`; the `-r` ('raw') flag stops bash from treating backslash as an escape — without `-r`, a trailing `\\` would be eaten as a line-continuation marker. `IFS=` (set just for THIS command, no export) tells `read` not to trim leading/trailing whitespace from the line. `< file.txt` redirects stdin from a file, so `read` pulls each line until EOF (when it returns non-zero and the loop exits). The big foot-gun this idiom avoids: `cat file.txt | while read line; ...` works but the loop runs in a SUBSHELL — any variables you set inside DON'T survive after the loop. Using `<` instead of `cat | while` keeps the loop in the main shell. To handle a file that may not end in a newline (so the last line could be missed by some `read` versions), bash users sometimes write `while IFS= read -r line || [ -n \"$line\" ]; do ...`. For per-FIELD parsing (CSV-ish), `IFS=, read -r col1 col2 col3` splits on commas.",
    usage: "Processing log files, importing CSV-ish data line-by-line, walking a list of items in a file, or stream-processing the output of a slow command.",
    examples: [
      "while IFS= read -r line; do echo \"got: $line\"; done < file.txt  # safe canonical form",
      "while IFS=: read -r user _ uid _ _ home _; do echo \"$user $uid $home\"; done < /etc/passwd  # split on : per line",
      "while IFS= read -r line; do echo \"$line\"; done < <(curl -s https://example.com)  # process subst, no subshell",
      "find . -name '*.log' -print0 | while IFS= read -r -d '' f; do echo \"$f\"; done  # NUL-delim for any-filename safety",
      "tail -f /var/log/syslog | while read -r line; do [[ $line == *ERROR* ]] && echo \"$line\"; done  # live filter",
      "n=0; while read -r _; do n=$((n+1)); done < file.txt; echo $n  # count lines (subshell-safe)"
    ],
    memoryTip: "Memorize: `while IFS= read -r line; do ... done < file`. `IFS=` keeps whitespace, `-r` keeps backslashes. Avoid `cat file | while read`; that creates a subshell and variables LEAK away. For maximum filename safety with `find`, use `-print0` + `read -d ''`.",
    outputExample: "$ cat hosts.txt\nweb1\nweb2 prod\ndb1\n$ while IFS= read -r line; do echo \"checking: $line\"; done < hosts.txt\nchecking: web1\nchecking: web2 prod\nchecking: db1\n$ while IFS=: read -r user _ uid _ name home _; do [ \"$uid\" -ge 1000 ] && echo \"$user ($uid) $name\"; done < /etc/passwd\nalice (1000) Alice Liddell\nbob (1001) Bob Builder",
    category: "BASH SCRIPTING"
  },

  // ARCHIVES & COMPRESS
  {
    id: "arch1",
    question: "Bundle a folder into a single uncompressed `.tar` archive with `tar -cvf archive.tar files/`",
    answer: "tar -cvf archive.tar files/",
    explanation: "The word `tar` is short for 'Tape ARchive' — born in the 1970s when sysadmins literally wrote backups to magnetic tape reels. Today nobody uses tape, but the tool stuck around because it solves one problem perfectly: take many files and folders and glue them into ONE file (a 'tarball'), preserving their names, permissions, timestamps, and folder layout. Important distinction: 'archiving' means bundling, 'compressing' means shrinking — and plain `tar -cvf` only archives, it does NOT make the result smaller. To shrink the result you add a compression flag (`-z` gzip, `-j` bzip2, `-J` xz) — see arch5. Decode the flags here: `c`=Create, `v`=Verbose (print each file as it's added), `f`=Filename follows. The classic rule is to put `f` LAST among the letters so the next argument is parsed as the archive name.",
    usage: "Bundling a folder before emailing/uploading it. Snapshotting a project layout when the files are already small (logs, source code). Piping into another compressor like `xz` or `zstd` for a custom workflow.",
    examples: [
      "tar -cvf project.tar project/  # bundle a whole folder",
      "tar -cvf notes.tar *.txt *.md  # archive only matching files",
      "tar -cvf backup.tar /etc /home/alice  # multiple source paths in one archive",
      "tar -cvf - files/ | gzip > files.tar.gz  # tar to stdout, pipe through gzip",
      "tar -cvf - files/ | ssh host 'cat > /backups/files.tar'  # stream to a remote host"
    ],
    memoryTip: "`tar -cvf` = 'See Vee File' (Create Verbose Filename). Without `-z`/`-j`/`-J` there is NO compression — `.tar` is just a bundle, like a ZIP with no compression. Debian/Ubuntu use the same `tar` command; this is portable across all Linux distros.",
    outputExample: "$ tar -cvf project.tar project/\nproject/\nproject/README.md\nproject/src/\nproject/src/main.py\nproject/tests/test_main.py\n$ ls -lh project.tar\n-rw-r--r-- 1 alice alice 24K May 17 09:12 project.tar",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch2",
    question: "Unpack an uncompressed `.tar` archive with `tar -xvf archive.tar`",
    answer: "tar -xvf archive.tar",
    explanation: "Extracting a tarball means the opposite of creating one: take the single bundle file and lay its contents back out as real files and folders on disk. Decode the flags: `x`=eXtract, `v`=Verbose (print every file as it comes out, useful for confidence), `f`=Filename of the archive follows. By default, files are extracted into the CURRENT directory — so `cd` to where you want them first, or use `-C target/` to extract elsewhere (see arch12). Modern `tar` auto-detects compression on extract, so `tar -xvf foo.tar.gz` works even without the `-z` flag (this is why you often see the same `-xvf` used for both `.tar` and `.tar.gz`). Watch out for 'tar bombs' — old archives that put files directly at the top level can scatter junk all over your cwd; preview first with `tar -tvf` (see arch11).",
    usage: "Opening a downloaded source code release. Restoring a backup tarball. Unpacking an archive a colleague sent you over email.",
    examples: [
      "tar -xvf backup.tar  # extract into current directory",
      "tar -xvf archive.tar -C /tmp/restore  # extract to a specific folder",
      "tar -xvf archive.tar.gz  # modern tar auto-detects gzip",
      "tar -xvf archive.tar path/inside/archive.txt  # extract only one file",
      "mkdir out && tar -xvf archive.tar -C out  # contain the mess in a subfolder"
    ],
    memoryTip: "`tar -xvf` = 'eXtract Vee File'. Flip `x` to `c` and you're back to Create. Same command on Debian/Ubuntu, RHEL/Fedora, macOS — `tar` is one of the most portable Unix tools.",
    outputExample: "$ tar -xvf project.tar\nproject/\nproject/README.md\nproject/src/\nproject/src/main.py\nproject/tests/test_main.py\n$ ls project/\nREADME.md  src  tests",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch3",
    question: "Compress a single file in-place with the `gzip` command (replacing it with a `.gz` version)",
    answer: "gzip file.txt",
    explanation: "`gzip` (GNU zip) shrinks ONE file using the DEFLATE algorithm — the same compression scheme inside `.zip` files and HTTP gzip transfer-encoding. Run `gzip file.txt` and three things happen: the file is compressed, the new file is named `file.txt.gz`, and the original `file.txt` is REMOVED. That deletion surprises people, so remember `-k` (keep) if you want to keep the original. Levels run from `-1` (fastest, weakest) to `-9` (slowest, smallest); the default is `-6`. Gzip only compresses individual files — it has no concept of folders. To compress a directory you first bundle it with `tar` and then gzip the bundle (usually in one step: `tar -czf folder.tar.gz folder/`, see arch5). Gzip compresses fast but not as tightly as bzip2 (arch7) or xz (arch8).",
    usage: "Shrinking a big log file before uploading it. Rotating logs (logrotate gzips old logs by default). Reducing storage on rarely-accessed text/data files.",
    examples: [
      "gzip large.log  # large.log -> large.log.gz, original removed",
      "gzip -k large.log  # keep both large.log AND large.log.gz",
      "gzip -9 backup.sql  # maximum compression, slowest",
      "gzip -c file.txt > file.txt.gz  # -c writes to stdout, original preserved",
      "gzip *.log  # compress every .log file in current directory"
    ],
    memoryTip: "`gzip` = GNU zip. Replaces the original by default — use `-k` to KEEP it. The reverse is `gunzip` (arch4) or `gzip -d`. On Debian/Ubuntu and RHEL/Fedora alike — `gzip` ships with every standard Linux base.",
    outputExample: "$ ls -lh server.log\n-rw-r--r-- 1 alice alice 12M May 17 10:00 server.log\n$ gzip server.log\n$ ls -lh server.log*\n-rw-r--r-- 1 alice alice 1.4M May 17 10:00 server.log.gz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch4",
    question: "Decompress a `.gz` file back to its original with the `gunzip` command",
    answer: "gunzip file.txt.gz",
    explanation: "`gzip` and `gunzip` are a pair: one compresses a single file into `file.gz`, the other reverses it. `gunzip file.gz` REPLACES `file.gz` with `file` (the original .gz is gone). To keep the compressed copy too, use `gunzip -k file.gz` (`-k` = keep) or pipe via `-c` (write to stdout) into a file. `gunzip` is just `gzip -d` under the hood — same binary, different name. Important: `gzip`/`gunzip` only compress ONE file. For a whole folder you tar first, then gzip — usually done in one step with `tar -czf folder.tar.gz folder/` (extract with `tar -xzf folder.tar.gz`). To read a `.gz` log without decompressing, use `zcat`, `zless`, or `zgrep`.",
    usage: "Restoring a downloaded `.gz` file. Reading rotated log archives (`/var/log/syslog.1.gz` style). One step before passing a single compressed file to a tool that doesn't speak gzip.",
    examples: [
      "gunzip file.txt.gz  # decompress — .gz file is removed, file.txt appears",
      "gunzip -k file.txt.gz  # keep both .gz and the decompressed copy",
      "gunzip -c file.txt.gz > newname.txt  # decompress to stdout, save with a new name",
      "gunzip *.gz  # decompress all .gz files in current dir",
      "zcat /var/log/syslog.1.gz | grep ERROR  # read a .gz log directly, no decompress step"
    ],
    memoryTip: "`gunzip` = G-UNzip (undo gzip). Equivalent: `gzip -d` (decompress). For .bz2 use `bunzip2`; for .xz use `unxz`. To AVOID decompressing first when grepping logs, use the `z`-prefixed tools: `zcat`, `zgrep`, `zless`.",
    outputExample: "$ ls -lh report.txt.gz\n-rw-r--r-- 1 alice alice 1.2K May 15 10:00 report.txt.gz\n$ gunzip report.txt.gz\n$ ls -lh report.txt*\n-rw-r--r-- 1 alice alice 4.5K May 15 10:00 report.txt\n$ zcat backup.tar.gz | tar -tv | head  # peek inside without extracting",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch5",
    question: "Create a gzip-compressed tar archive of a directory with `tar -czvf archive.tar.gz directory/`",
    answer: "tar -czvf archive.tar.gz directory/",
    explanation: "`tar` ('tape archive', a name from the 1970s when this thing wrote to magnetic tape) PACKS many files+folders into ONE file. By itself `tar` doesn't compress — you combine it with gzip/bzip2/xz via a flag. Decode `-czvf`: `c`=Create, `z`=use gZip, `v`=Verbose (print each file), `f`=Filename follows. Order matters in some old `tar`s: put `f` last so the next argument is taken as the filename. The full mnemonic for the four flags: 'See Zee Vee File'. To EXTRACT swap `c` for `x` (`tar -xzvf`). To LIST contents without extracting use `-t`. For bzip2 use `j` instead of `z` (output `.tar.bz2`); for xz use `J` (output `.tar.xz`). xz compresses smallest, gzip is fastest, bzip2 is in between. Modern tar auto-detects compression on extract, so `tar -xvf any.tar.gz` works without `-z`.",
    usage: "Backing up a folder before risky changes (`tar -czvf backup-$(date +%F).tar.gz important/`). Bundling source code for distribution. Shipping logs to support.",
    examples: [
      "tar -czvf project.tar.gz project/  # gzip — the everyday default",
      "tar -cjvf project.tar.bz2 project/  # bzip2 — better compression, slower",
      "tar -cJvf project.tar.xz project/   # xz — best compression, slowest",
      "tar -czvf - project/ | ssh server 'cat > /backups/project.tar.gz'  # stream over SSH",
      "tar -tzvf project.tar.gz | head  # peek inside without extracting"
    ],
    memoryTip: "`tar -czvf` mnemonic: 'See Zee Vee File' (Create gZip Verbose Filename). For extract: `tar -xzvf` = 'eXtract Zee Vee File'. Compression letters: `z`=gzip, `j`=bzip2 (bJip2... close enough), `J`=xz. Modern tar auto-detects on extract, but always specify on CREATE.",
    outputExample: "$ tar -czvf backup.tar.gz project/\nproject/\nproject/README.md\nproject/src/\nproject/src/main.py\nproject/src/utils.py\nproject/tests/\nproject/tests/test_main.py\n$ ls -lh backup.tar.gz\n-rw-r--r-- 1 alice alice 12K May 15 10:00 backup.tar.gz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch6",
    question: "Extract a gzip-compressed tarball with `tar -xzvf archive.tar.gz`",
    answer: "tar -xzvf archive.tar.gz",
    explanation: "This is the inverse of arch5. Decode the flags: `x`=eXtract, `z`=use gZip (decompress on the fly), `v`=Verbose, `f`=Filename follows. The `-z` flag tells `tar` to pipe the archive bytes through `gunzip` first, then unpack the decompressed tar stream. Modern GNU `tar` auto-detects the compression and lets you skip `-z` entirely (`tar -xvf archive.tar.gz` just works), but old systems and BSD `tar` may not — so the safe habit is to always specify the algorithm explicitly. Sister flags for other compressors: `-j` for bzip2 (`.tar.bz2`), `-J` for xz (`.tar.xz`), and on newer tars `--zstd` for zstd. Like plain extract (arch2), files land in your CURRENT directory by default — use `-C target/` to redirect (arch12) and preview with `-t` first (arch11) if you don't trust the archive.",
    usage: "Unpacking a downloaded source release (`linux-6.8.tar.gz`). Restoring a gzipped backup. Extracting node_modules or vendor caches shipped as `.tgz`.",
    examples: [
      "tar -xzvf backup.tar.gz  # standard extract of a gzip tarball",
      "tar -xjvf backup.tar.bz2  # bzip2 variant (-j)",
      "tar -xJvf backup.tar.xz  # xz variant (capital -J)",
      "tar -xzvf src.tar.gz -C /opt/src  # extract somewhere specific",
      "tar -xvf any.tar.gz  # modern tar auto-detects gzip without -z"
    ],
    memoryTip: "`tar -xzvf` = 'eXtract Zee Vee File'. Same letters as create (arch5) but `c` flips to `x`. Compression letters: lowercase `z`=gzip, lowercase `j`=bzip2, UPPERCASE `J`=xz. Identical command on Debian/Ubuntu and RHEL/Fedora.",
    outputExample: "$ tar -xzvf project.tar.gz\nproject/\nproject/README.md\nproject/src/main.py\nproject/tests/test_main.py\n$ du -sh project.tar.gz project/\n4.2K  project.tar.gz\n28K   project/",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch7",
    question: "Compress a single file with the `bzip2` command for tighter compression than gzip",
    answer: "bzip2 file.txt",
    explanation: "`bzip2` is another single-file compressor, like `gzip` (arch3), but it uses a different algorithm — the Burrows-Wheeler transform — that typically squeezes text-heavy data 10-15% smaller than gzip, at the cost of being noticeably slower (both compressing AND decompressing). Like gzip, it REPLACES the original with `file.bz2` unless you pass `-k` (keep). The reverse command is `bunzip2` (or `bzip2 -d`). For folders you tar first, then bzip2 — typically in one step with `tar -cjf folder.tar.bz2 folder/` (note the `j` flag, picked because `b` was already used for something else). Bzip2 was the standard 'better than gzip' choice for years but has largely been displaced by `xz` (arch8), which compresses even smaller, and by `zstd`, which is faster than gzip and often smaller too. You'll still see `.bz2` on older Linux source releases and rotated logs.",
    usage: "Shrinking large text logs or SQL dumps where the extra CPU is worth a smaller upload. Decompressing older `.bz2` source tarballs you encounter in the wild.",
    examples: [
      "bzip2 dump.sql  # dump.sql -> dump.sql.bz2, original removed",
      "bzip2 -k dump.sql  # keep both files",
      "bzip2 -9 archive.txt  # max compression (default is already -9)",
      "bzip2 -c data.csv > data.csv.bz2  # write to stdout, keep original",
      "bunzip2 data.csv.bz2  # reverse: decompress back to data.csv"
    ],
    memoryTip: "`bzip2` = the 'middle child' compressor: better than gzip, worse than xz. Replaces the original unless you use `-k`. Same on Debian/Ubuntu and RHEL/Fedora (install via `sudo apt install bzip2` or `sudo dnf install bzip2` if missing).",
    outputExample: "$ ls -lh data.csv\n-rw-r--r-- 1 alice alice 25M May 17 10:30 data.csv\n$ bzip2 data.csv\n$ ls -lh data.csv*\n-rw-r--r-- 1 alice alice 3.1M May 17 10:30 data.csv.bz2",
    category: "ARCHIVES & COMPRESS"
  },
  // DAILY TIPS & BEST PRACTICES
  {
    id: "daily1",
    question: "Use the `uptime` command to check how long the system has been running and its current load average",
    answer: "uptime",
    explanation: "`uptime` is a one-line health check. It prints the current wall-clock time, then how long the system has been running since the last boot, then how many users are logged in, then three 'load average' numbers. Load average is the average number of processes that wanted CPU time over the last 1, 5, and 15 minutes. As a rule of thumb: if load average is well under the number of CPU cores, the box is idle; if it's much higher, processes are queueing for CPU and the system feels sluggish. So on a 4-core machine, a load of 0.5 is fine, 4.0 is fully busy, 8.0 is overloaded.",
    usage: "Run it first thing when logging in to a server to confirm it hasn't rebooted unexpectedly, and to spot whether the box is currently under heavy load before you start running expensive commands.",
    examples: [
      "uptime  # the classic one-liner",
      "uptime -p  # 'pretty' form: 'up 3 weeks, 2 days, 5 hours'",
      "uptime -s  # exact timestamp the system booted",
      "w  # 'uptime' plus a list of who's logged in and what they're running",
      "cat /proc/loadavg  # raw load numbers if you're scripting"
    ],
    memoryTip: "`uptime` = how long it's been 'up'. The three load numbers go newest to oldest (1 min, 5 min, 15 min) — read them like 'right now / recently / a while ago' to see if load is rising or falling.",
    outputExample: "$ uptime\n 10:34:52 up 45 days,  3:21,  2 users,  load average: 0.52, 0.48, 0.45",
    category: "DAILY TIPS"
  },
  {
    id: "daily2",
    question: "Show disk space usage of every mounted filesystem in human-readable sizes with `df -h`",
    answer: "df -h",
    explanation: "`df` ('disk free') reports, for every filesystem currently mounted, how big it is, how much is used, and how much is left. A 'filesystem' here means a storage area Linux has attached at some directory — your root `/`, a separate `/home`, a mounted USB stick, etc. By default `df` prints sizes in 1K blocks which are hard to read; the `-h` flag means 'human-readable' and turns those blocks into `G`, `M`, `K`. The `Use%` column is the one to watch — once a filesystem crosses ~90% used, things like log writes and package installs start failing in ugly ways. Ignore the lines starting with `tmpfs` and `devtmpfs` for now — those are RAM-backed pseudo-filesystems the kernel creates, not your actual disk.",
    usage: "Run it first thing when a server feels weird, before installing a big package, or when an app suddenly errors out with 'No space left on device'. Pair it with `du` (which measures a single directory) when you need to find WHAT is eating the space.",
    examples: [
      "df -h  # all filesystems, human sizes — the daily go-to",
      "df -h /home  # only the filesystem that holds /home",
      "df -hT  # add the 'Type' column (ext4, xfs, btrfs...)",
      "df -h --total  # add a grand-total row at the bottom",
      "df -i  # switch to inode counts instead of bytes — for 'no space' errors when df -h still shows free space"
    ],
    memoryTip: "`df` = 'disk free', `-h` = 'human'. Mnemonic: `du` measures a Directory's Usage; `df` measures the whole Disk's Free space. One zooms in, one zooms out.",
    outputExample: "$ df -h\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p2  234G  112G  111G  51% /\n/dev/nvme0n1p1  511M  6.1M  505M   2% /boot/efi\ntmpfs           7.8G   45M  7.7G   1% /run\n/dev/sdb1        29G   18G   12G  61% /media/usb",
    category: "DAILY TIPS"
  },
  {
    id: "daily3",
    question: "Show total, used, and available memory (RAM and swap) in human-readable units with `free -h`",
    answer: "free -h",
    explanation: "`free` reads `/proc/meminfo` (the kernel's live memory report) and summarises it. Linux memory is split into two pools: physical RAM (the `Mem:` row) and swap (the `Swap:` row — disk space the kernel can pretend is RAM when memory runs low). The `-h` flag turns raw kilobytes into `Gi`/`Mi`. The most confusing column for newcomers is `free` — it looks low because Linux deliberately fills idle RAM with disk cache (the `buff/cache` column) to speed things up. The column that actually matters is `available`: it estimates how much memory new programs could grab without swapping. So 'free' RAM near 0 is fine; 'available' near 0 is a real problem.",
    usage: "Use it during the daily server check, before launching a memory-hungry job (Postgres, a JVM, a big build), or when an app is mysteriously slow — if `available` is tiny and `Swap used` is climbing, you're memory-pressured.",
    examples: [
      "free -h  # human-readable RAM + swap snapshot",
      "free -m  # force megabytes regardless of size",
      "free -g  # force gigabytes (loses precision under 1G)",
      "free -h -s 2  # refresh every 2 seconds (Ctrl+C to stop)",
      "free -h -t  # add a 'Total:' row (RAM + swap combined)"
    ],
    memoryTip: "`free` answers 'how free is my RAM?'. Trick: look at `available`, not `free`. Linux philosophy: 'free RAM is wasted RAM' — the kernel caches aggressively, and `available` already accounts for cache it can reclaim.",
    outputExample: "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:            15Gi       4.2Gi       512Mi       320Mi        10Gi        10Gi\nSwap:          2.0Gi          0B       2.0Gi",
    category: "DAILY TIPS"
  },
  {
    id: "daily4",
    question: "Get a quick snapshot of all running processes with `ps aux | head` (showing top 10 lines)",
    answer: "ps aux | head",
    explanation: "`ps` (process status) is the classic snapshot-of-processes tool. The combo `aux` is BSD-style flags (note: no leading dash): `a` = show processes of ALL users (not just yours), `u` = USER-oriented format with extra columns like %CPU and %MEM, `x` = include processes WITHOUT a controlling terminal (daemons, system services). Together they're the everyday 'show me everything' incantation. The output columns: USER, PID (process ID — every process has a unique integer), %CPU, %MEM, VSZ (virtual memory size in KB), RSS (resident set size — actual physical RAM in KB), TTY (terminal, or `?` for daemons), STAT (state: R running, S sleeping, D uninterruptible sleep, Z zombie, T stopped — uppercase letters can have lowercase modifiers like `s` for session leader, `+` for foreground), START, TIME (cumulative CPU time), COMMAND. Pipe to `head` to peek at the first lines, or to `grep PATTERN` to filter. For LIVE updating use `top` or `htop` instead.",
    usage: "Spotting an unusual process at a glance, getting a quick PID for `kill`, taking a snapshot during a slow-down to compare against later, or piping into `grep` to find a specific app.",
    examples: [
      "ps aux | head  # first 10 lines for a quick peek",
      "ps aux | head -20  # first 20 lines including headers",
      "ps aux | grep -i firefox | grep -v grep  # find firefox processes (excluding the grep itself)",
      "ps aux --sort=-%cpu | head  # top CPU users (- for descending)",
      "ps aux --sort=-rss | head  # top memory consumers",
      "ps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head  # custom columns"
    ],
    memoryTip: "`ps aux` = All users, User format, also no-tty (daemons). Top CPU: `ps aux --sort=-%cpu | head`. Top RAM: `--sort=-rss`. For live updating, switch to `top` or `htop`. The `aux` mnemonic: 'AUXiliary view of processes'.",
    outputExample: "$ ps aux | head\nUSER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot           1  0.1  0.0 167400 11944 ?        Ss   May15   0:14 /sbin/init\nroot           2  0.0  0.0      0     0 ?        S    May15   0:00 [kthreadd]\nroot          11  0.0  0.0      0     0 ?        I<   May15   0:00 [rcu_par_gp]\nsystemd+     682  0.0  0.0  90252  6024 ?        Ss   May15   0:00 /lib/systemd/systemd-resolved\nalice       1842  2.3  4.1 2880340 658432 ?      Sl   09:01   0:42 /usr/lib/firefox/firefox\nalice       2104  0.1  0.2  24400  4892 pts/0    Ss   09:30   0:00 -bash",
    category: "DAILY TIPS"
  },
  {
    id: "daily5",
    question: "Refresh package lists and install all available upgrades with `sudo apt update && sudo apt upgrade` (Debian/Ubuntu)",
    answer: "sudo apt update && sudo apt upgrade",
    explanation: "On Debian-family systems (Debian, Ubuntu, Mint, Pop!_OS, Kali, Raspberry Pi OS) this is THE patching command. It's actually TWO commands joined with `&&` (which means 'only run the second if the first succeeded'). Step 1: `sudo apt update` re-downloads the catalog of available packages from every repository in `/etc/apt/sources.list*` and stores it under `/var/lib/apt/lists/` — this does NOT install anything, it just refreshes 'what's out there'. Step 2: `sudo apt upgrade` compares installed package versions to the now-fresh catalog and installs the newer versions of everything (excluding any upgrade that would require removing another package — those are 'held back'). For a more thorough upgrade that DOES allow removals to complete cross-package dependency changes, use `sudo apt full-upgrade` (formerly `dist-upgrade`). Always preview with `apt list --upgradable` if you want to see what's coming. After a kernel/libc/systemd upgrade you'll need to reboot (`[ -f /var/run/reboot-required ] && echo reboot needed`). Equivalent on Fedora/RHEL: `sudo dnf upgrade`.",
    usage: "Weekly or monthly server patching, refreshing a freshly installed VM before installing other software, or applying security errata.",
    examples: [
      "sudo apt update && sudo apt upgrade  # the standard combo",
      "sudo apt update && sudo apt upgrade -y  # unattended (good for scripts/cron)",
      "sudo apt update && apt list --upgradable  # preview pending upgrades without installing",
      "sudo apt update && sudo apt full-upgrade  # allow REMOVALS to satisfy upgrade dependencies",
      "sudo apt update && sudo apt upgrade && sudo apt autoremove  # patch + clean up orphan deps",
      "[ -f /var/run/reboot-required ] && echo 'reboot to finish'  # post-upgrade reboot check"
    ],
    memoryTip: "Two-step pattern on Debian: `update` (refresh CATALOG) → `upgrade` (apply new VERSIONS). On RHEL/Fedora a single `dnf upgrade` does both. Use `&&` not `;` so step 2 is skipped if step 1 fails. Add `autoremove` afterwards to drop orphan dependency packages.",
    outputExample: "$ sudo apt update && sudo apt upgrade\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://security.ubuntu.com/ubuntu noble-security InRelease [128 kB]\nFetched 128 kB in 1s (193 kB/s)\nReading package lists... Done\n42 packages can be upgraded. Run 'apt list --upgradable' to see them.\n...\nThe following packages will be upgraded:\n  bash curl git libc6 libssl3 linux-image-generic openssh-server\n7 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 87.5 MB of archives.\nDo you want to continue? [Y/n] Y",
    category: "DAILY TIPS"
  },
  {
    id: "daily6",
    question: "Free disk space by removing 'orphan' dependency packages no longer needed with `sudo apt autoremove` (Debian/Ubuntu)",
    answer: "sudo apt autoremove",
    explanation: "When APT installs a package, it also pulls in any libraries and helpers that package needs ('dependencies') and marks them as 'automatically installed'. Later, if you uninstall the original package, those auto-installed deps are typically still on disk — orphans nobody depends on anymore. `apt autoremove` finds and removes those orphans. By default it keeps config files in `/etc/`; add `--purge` to wipe configs too. Common scenario: after a kernel upgrade you'll have multiple old kernels installed (`linux-image-*` and `linux-headers-*` packages) — `autoremove` is the standard way to clean out the obsolete ones, often recovering hundreds of MB. Always READ the list of packages to be removed BEFORE confirming — autoremove occasionally proposes removing something you actually want (especially if it was originally a dependency but you now consider it primary). To prevent autoremove from touching a specific package, mark it manual: `sudo apt-mark manual PKG`. The Fedora/RHEL equivalent is `sudo dnf autoremove`.",
    usage: "Cleaning up after removing a big package (texlive, gnome-shell), reclaiming space after kernel upgrades, or routine monthly housekeeping.",
    examples: [
      "sudo apt autoremove  # interactive — shows what will be removed",
      "sudo apt autoremove --purge  # also delete config files of removed packages",
      "sudo apt autoremove -y  # unattended — only safe in scripts after reviewing",
      "sudo apt update && sudo apt upgrade && sudo apt autoremove  # the full housekeeping triple",
      "sudo apt-mark manual nginx  # keep nginx safe from future autoremoves",
      "apt-mark showauto | head  # which packages are currently 'auto' (autoremove-eligible)"
    ],
    memoryTip: "`autoremove` = auto-installed but no longer needed → REMOVE. Often the bulk of space gain after kernel upgrades. Compare with `apt clean` (removes downloaded .deb cache, NOT installed packages). The full sweep: `update && upgrade && autoremove`.",
    outputExample: "$ sudo apt autoremove\nReading package lists... Done\nThe following packages will be REMOVED:\n  linux-headers-6.5.0-15 linux-headers-6.5.0-15-generic\n  linux-image-6.5.0-15-generic linux-modules-6.5.0-15-generic\n  linux-modules-extra-6.5.0-15-generic\n0 upgraded, 0 newly installed, 5 to remove and 0 not upgraded.\nAfter this operation, 487 MB disk space will be freed.\nDo you want to continue? [Y/n] Y\n(Reading database ... 184231 files currently installed.)\nRemoving linux-image-6.5.0-15-generic (6.5.0-15.15) ...\n...",
    category: "DAILY TIPS"
  },
  {
    id: "daily7",
    question: "Reclaim disk space by deleting cached .deb files no longer obtainable with `sudo apt autoclean` (Debian/Ubuntu)",
    answer: "sudo apt autoclean",
    explanation: "Every time APT installs or upgrades a package, the `.deb` archive is downloaded to `/var/cache/apt/archives/` and kept there indefinitely. Two cleanup commands exist: `apt clean` deletes EVERY cached .deb (maximum space reclaimed, every future install re-downloads); `apt autoclean` is the gentler variant that only removes .debs for versions no longer downloadable from ANY enabled repo — so the cache stays useful for current versions while purging obsolete ones. `autoclean` is safe to run regularly with no downside; `clean` is fine too but means slower next-install. Neither command affects INSTALLED packages or package metadata — only the cache of downloaded installer files. Check the current cache size with `du -sh /var/cache/apt/archives`. The Fedora/RHEL equivalent is `dnf clean packages` (gentle) or `dnf clean all` (everything).",
    usage: "Routine housekeeping to keep disk usage reasonable, freeing space before a kernel upgrade, or as the last layer of a Dockerfile to shrink the image.",
    examples: [
      "sudo apt autoclean  # remove obsolete cached .debs (safe everyday cleanup)",
      "sudo apt clean  # remove EVERY cached .deb (maximum reclaim)",
      "du -sh /var/cache/apt/archives  # see how big the cache is before/after",
      "sudo apt update && sudo apt upgrade && sudo apt autoclean  # routine combo",
      "ls /var/cache/apt/archives/*.deb | wc -l  # how many cached .debs",
      "sudo apt-get clean && sudo rm -rf /var/lib/apt/lists/*  # Dockerfile shrink-line"
    ],
    memoryTip: "`autoclean` = remove only OBSOLETE cached .debs (gentle, no downside). `clean` = remove ALL cached .debs (maximum space, slight re-download cost). Neither removes installed packages — only cached installer files. Companion: `autoremove` for orphan packages.",
    outputExample: "$ du -sh /var/cache/apt/archives\n412M\t/var/cache/apt/archives\n$ sudo apt autoclean\nReading package lists... Done\nBuilding dependency tree... Done\nDel curl 8.5.0-2ubuntu10.3 amd64 [228 kB]\nDel libc6 2.39-0ubuntu8.3 amd64 [3,247 kB]\nDel linux-image-6.5.0-15-generic 6.5.0-15.15 amd64 [14.2 MB]\n$ du -sh /var/cache/apt/archives\n267M\t/var/cache/apt/archives",
    category: "DAILY TIPS"
  },
  {
    id: "daily8",
    question: "List every file in a directory (including hidden ones) in long format with `ls -la`",
    answer: "ls -la",
    explanation: "`ls` with two flags: `-l` ('long' format — one file per line with permissions, owner, size, mtime) and `-a` ('all' — include hidden files whose names start with a dot like `.bashrc`, `.git`, `.env`). The two flags combine into `-la` (order doesn't matter; `-al` is identical). The output starts with a `total NNN` line — that's the count of 512-byte BLOCKS used by everything listed (rarely useful to memorize). Each remaining line has columns: permissions (`drwxr-xr-x` — first char is type: `-` regular file, `d` directory, `l` symlink, `b`/`c` block/char device, `s` socket, `p` named pipe; next 9 chars are user/group/other permissions in `rwx` triples), hard link count, owner, group, size in bytes, last-modified timestamp, name. Add `-h` for human-readable sizes (`-lah` = the daily workhorse: `1.2K`, `3.4M`, `5.6G` instead of raw bytes). Add `-t` to sort newest first instead of alphabetically. Hidden files convention: a leading `.` was originally an accident in early Unix and stuck — used for user config (`.bashrc`), version control (`.git`), and dotenv (`.env`).",
    usage: "Inspecting permissions before chmod-ing, finding hidden config files, checking who owns what in a shared directory, or seeing modification times.",
    examples: [
      "ls -la  # everything, long format",
      "ls -lah  # add human-readable sizes — the everyday combo",
      "ls -lat  # sort by modification time, newest first",
      "ls -laS  # sort by size, largest first",
      "ls -la --color=auto  # colored output (usually default via alias)",
      "ls -la | grep '^d'  # only directories (filter by first char)"
    ],
    memoryTip: "`-l` long, `-a` all (include `.dotfiles`), `-h` human sizes, `-t` newest first, `-S` biggest first, `-r` reverse. The everyday combo: `ls -lah`. The first char of the permission string tells you what it is: `-` file, `d` directory, `l` symlink.",
    outputExample: "$ ls -lah\ntotal 28K\ndrwxr-xr-x  5 alice alice 4.0K May 17 10:30 .\ndrwxr-xr-x 15 alice alice 4.0K May 14 10:00 ..\n-rw-------  1 alice alice  680 May 17 09:15 .bash_history\n-rw-r--r--  1 alice alice  220 May 14 10:00 .bashrc\ndrwxr-xr-x  8 alice alice 4.0K May 17 10:28 .git\n-rw-r--r--  1 alice alice  142 May 15 11:30 notes.txt\nlrwxrwxrwx  1 alice alice    9 May 17 10:30 link -> notes.txt\ndrwxr-xr-x  3 alice alice 4.0K May 15 14:20 src/",
    category: "DAILY TIPS"
  },
  {
    id: "daily9",
    question: "Search recursively for files matching a name pattern with `find . -name '*.txt'`",
    answer: "find . -name \"*.txt\"",
    explanation: "`find` is the recursive filesystem search tool. Syntax: `find STARTING_DIR EXPRESSION` — it walks every directory under STARTING_DIR and prints paths matching the expression. The starting dir `.` means 'current directory'; you can use `/var/log`, `~`, or any path. `-name 'PATTERN'` matches the BASENAME (last path component) against a shell glob — QUOTE the pattern or your shell will expand it before find sees it. Common companion tests: `-type f` (regular files only — skip directories and symlinks), `-type d` (directories only), `-size +100M` (bigger than 100 MB), `-mtime -1` (modified within the last 24 hours), `-newer FILE` (modified after FILE). Combine with `-and`/`-or`/`!` (negate); tests without an operator are implicit AND. Actions: `-print` (default — print path), `-delete` (DELETE — irreversible!), `-exec CMD {} \\;` (run CMD per file, replacing `{}` with the path; end with `\\;`), `-exec CMD {} +` (faster batch form). Beware case: `-name` is case-sensitive; use `-iname` for case-insensitive. Use `-maxdepth N` to limit how deep find recurses.",
    usage: "Locating a file when you only remember part of its name, finding all logs to delete, hunting big files filling up disk, or running an action on every matching file (`-exec`).",
    examples: [
      "find . -name '*.txt'  # all .txt files under current dir",
      "find . -type f -name '*.log' -size +10M  # big log files",
      "find /var/log -name '*.log' -mtime +7  # logs older than 7 days",
      "find ~ -iname '*resume*'  # case-insensitive — matches Resume.pdf, resume.docx",
      "find . -name '*.py' -exec wc -l {} +  # line-count every .py file",
      "find . -name 'node_modules' -type d -prune -o -name '*.js' -print  # skip node_modules"
    ],
    memoryTip: "`find PATH EXPRESSION` — actions at the end. `-name` glob (case-sens), `-iname` case-insens, `-type f/d`, `-mtime ±N` days, `-size ±N[k/M/G]`. Quote globs to stop shell expansion. Use `-exec ... {} +` (batch) over `\\;` (one-per-file) for speed. Modern faster alternative: `fd PATTERN`.",
    outputExample: "$ find . -name '*.txt'\n./notes.txt\n./backup/data.txt\n./archive/old.txt\n./src/README.txt\n$ find . -name '*.txt' -size +1k\n./backup/data.txt\n$ find /var/log -name '*.log' -mtime -1 -type f\n/var/log/syslog\n/var/log/auth.log\n/var/log/nginx/access.log",
    category: "DAILY TIPS"
  },
  {
    id: "daily10",
    question: "Create a directory tree including any missing parent directories with `mkdir -p path/to/deep/dir`",
    answer: "mkdir -p project",
    explanation: "Plain `mkdir foo/bar/baz` FAILS if any intermediate directory (`foo`, `foo/bar`) doesn't already exist — you get `No such file or directory`. The `-p` ('parents') flag fixes this: it creates every missing directory in the path, and it silently SUCCEEDS if the target already exists (so it's idempotent — safe to run twice). This makes `mkdir -p` the standard 'ensure this directory exists' pattern in scripts: no need to check `[ -d dir ]` first. You can also create MULTIPLE separate trees in one call: `mkdir -p src/{components,utils,tests}` uses brace expansion to make three sibling directories at once. Add `-v` to verbosely show each directory that's created (silent on already-exists). Default permissions for new directories are `0777 minus your umask` (typically `0755`); override with `-m`: `mkdir -m 0700 -p ~/.secret`. ALWAYS use `-p` in scripts unless you specifically need the error on pre-existence.",
    usage: "Bootstrapping a project directory layout, ensuring a log/cache/output dir exists before writing to it in a script, or extracting/copying files into a path that may or may not exist yet.",
    examples: [
      "mkdir -p ~/projects/myapp/src  # creates ~/projects and ~/projects/myapp if missing",
      "mkdir -p logs cache output  # multiple separate dirs",
      "mkdir -p src/{api,web,worker}/{handlers,models,tests}  # brace expansion — 9 dirs in one call",
      "mkdir -pv build/{debug,release}  # -v shows each created path",
      "mkdir -p -m 0700 ~/.config/myapp  # create with restricted perms (owner-only)",
      "mkdir -p \"$(dirname \"$file\")\"  # ensure the parent dir of $file exists"
    ],
    memoryTip: "`-p` = parents + idempotent (no error if exists). Standard 'ensure this dir' idiom in scripts. Companion with `-v` for verbosity, `-m MODE` for perms. Use BRACE expansion `{a,b,c}` to create many siblings in one call: `mkdir -p src/{api,web,worker}`.",
    outputExample: "$ mkdir -pv src/{api,web}/{handlers,tests}\nmkdir: created directory 'src'\nmkdir: created directory 'src/api'\nmkdir: created directory 'src/api/handlers'\nmkdir: created directory 'src/api/tests'\nmkdir: created directory 'src/web'\nmkdir: created directory 'src/web/handlers'\nmkdir: created directory 'src/web/tests'\n$ tree src/\nsrc/\n├── api\n│   ├── handlers\n│   └── tests\n└── web\n    ├── handlers\n    └── tests",
    category: "DAILY TIPS"
  },
  {
    id: "daily11",
    question: "Show modified, staged, and untracked files in a git repository with `git status`",
    answer: "git status",
    explanation: "`git status` is the dashboard for a git repository — what's the current branch, what changes are pending, what's ready to commit. It shows three categories: (1) 'Changes to be committed' — files you've STAGED (added to the index via `git add`), ready to be included in the next commit; (2) 'Changes not staged for commit' — files you've modified but not yet staged; (3) 'Untracked files' — files git has never heard of (new files you haven't `git add`-ed). Special cases: deleted files appear in both staged/unstaged depending on what you've done; merged-in-progress conflicts show up here too. The command prints suggested next-step commands at the top of each section — read them, they're useful pointers. For a terse one-line-per-file form, use `git status -s` ('short') or `--porcelain` (machine-readable). The 'porcelain' name is git jargon for 'stable command-line interface, won't change between versions'. Showing per-line: `M` modified, `A` added/staged-new, `D` deleted, `??` untracked, `R` renamed. First letter = INDEX (staged), second letter = WORKING TREE (unstaged).",
    usage: "The most-run git command — check before EVERY commit, between switching tasks, after a merge to spot conflicts, or just to remember what you were doing.",
    examples: [
      "git status  # full human-readable status",
      "git status -s  # short: two-letter status + filename per line",
      "git status --porcelain  # machine-readable for scripts",
      "git status --branch -s  # short form + branch info on first line",
      "git status -uall  # show untracked files INSIDE untracked dirs (default: just the dir)",
      "git status --ignored  # also list files ignored by .gitignore"
    ],
    memoryTip: "Three buckets: STAGED (`Changes to be committed`), MODIFIED (`not staged`), UNTRACKED. Short form: first char = INDEX/staged, second = WORKING TREE/unstaged. `M ` = staged-modified, ` M` = unstaged-modified, `MM` = both. Run before EVERY commit.",
    outputExample: "$ git status\nOn branch main\nYour branch is up to date with 'origin/main'.\n\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n\tmodified:   src/app.js\n\tnew file:   src/utils.js\n\nChanges not staged for commit:\n  (use \"git add <file>...\" to update what will be committed)\n  (use \"git restore <file>...\" to discard changes in working directory)\n\tmodified:   README.md\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tdraft.txt\n\n$ git status -s\nM  src/app.js\nA  src/utils.js\n M README.md\n?? draft.txt",
    category: "DAILY TIPS"
  },
  {
    id: "daily12",
    question: "Install all Node.js project dependencies declared in `package.json` with `npm install`",
    answer: "npm install",
    explanation: "`npm` (Node Package Manager) is the default package manager for the Node.js JavaScript ecosystem. `npm install` (or its shorter alias `npm i`) reads `package.json` from the current directory — that file declares the project's name, version, and which third-party packages it needs — and installs all those packages (and their transitive dependencies) into a local `node_modules/` folder. `package-lock.json` records the EXACT versions installed so teammates and CI get the same tree (the lockfile is the SOURCE OF TRUTH; commit it). With no args, `npm install` installs everything from package.json. With a package name (`npm install lodash`), it adds that package to dependencies AND installs. Use `--save-dev` (`-D`) for dev-only dependencies (build tools, test runners). For RELIABLE CI installs use `npm ci` instead — it's faster, refuses to modify package.json/lock, and starts from a clean slate. Foot-guns: `node_modules` is enormous (often hundreds of MB) — always gitignore it. `npm install` can run arbitrary install scripts as your user — be cautious with unknown packages.",
    usage: "Setting up a freshly cloned JavaScript/TypeScript project, adding a new library, or refreshing after a dependency update.",
    examples: [
      "npm install  # install everything from package.json + package-lock.json",
      "npm install lodash  # add lodash to dependencies",
      "npm install --save-dev jest  # add jest as dev dependency",
      "npm install -g typescript  # install globally (system-wide CLI)",
      "npm ci  # CLEAN install from lockfile — preferred in CI",
      "npm install --omit=dev  # production install: skip devDependencies"
    ],
    memoryTip: "`npm install` reads package.json. `npm ci` reads package-lock.json (faster, clean, CI-safe). `--save-dev` (`-D`) for dev deps, `-g` for global. ALWAYS gitignore `node_modules/`. Modern alternatives: `pnpm`, `yarn`, `bun` — same idea, different tradeoffs.",
    outputExample: "$ npm install\nnpm WARN deprecated some-old-pkg@1.0.0: please upgrade\nadded 487 packages, and audited 488 packages in 12s\n\n42 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n$ npm install --save-dev eslint\nadded 81 packages, and audited 569 packages in 4s\n$ ls -la node_modules/ | wc -l\n489",
    category: "DAILY TIPS"
  },
  {
    id: "daily13",
    question: "Run the `install` recipe from a project's Makefile with `sudo make install`",
    answer: "make install",
    explanation: "`make` is a classic Unix build tool that reads a `Makefile` (or `makefile`) in the current directory and runs the recipe(s) you ask for. A Makefile is a plain text file listing 'TARGETS' (things to build or do) and the SHELL COMMANDS to produce each. Standard targets by convention: `all` (default — build everything), `install` (copy built binaries/files into system locations like `/usr/local/bin`, `/etc`, `/usr/share/man`), `uninstall` (reverse of install), `clean` (delete build artifacts), `test`/`check` (run tests). The classic source-build dance is `./configure && make && sudo make install`. The `install` step typically needs SUDO because it writes to `/usr/local/` or similar — without sudo you get permission errors. Bypass: pass `PREFIX=$HOME/.local` to install into your home dir without root. CAUTION: `make install` installs files OUTSIDE the package manager — `dpkg`/`rpm` don't know they're there, so `apt list --installed` won't show them. Use `checkinstall` (Debian) to wrap `make install` in a real .deb if you want package-manager tracking.",
    usage: "Installing software from source (when no package exists), running developer-defined project tasks (a Makefile is the lingua franca of repo task runners), or following an open-source project's build instructions.",
    examples: [
      "make  # default target (usually 'all' — just builds)",
      "make install  # install built files into system paths",
      "sudo make install  # needed if installing to /usr/local/",
      "make install PREFIX=$HOME/.local  # install to ~/.local, no sudo",
      "make clean  # delete build artifacts",
      "make -j$(nproc) all  # parallel build using every CPU core"
    ],
    memoryTip: "Conventional targets: `all` (build), `install` (system-install), `clean` (delete artifacts), `test`. `sudo` for system paths. `make -jN` parallel build. Classic source dance: `./configure && make && sudo make install`. Bypass sudo with `PREFIX=$HOME/.local`.",
    outputExample: "$ ./configure --prefix=/usr/local\n...\nconfig.status: creating Makefile\n$ make -j$(nproc)\ngcc -O2 -c src/main.c -o build/main.o\ngcc -O2 -c src/util.c -o build/util.o\ngcc -O2 build/main.o build/util.o -o myapp\n$ sudo make install\ninstall -d /usr/local/bin\ninstall -m 0755 myapp /usr/local/bin/\ninstall -d /usr/local/share/man/man1\ninstall -m 0644 doc/myapp.1 /usr/local/share/man/man1/\n$ which myapp\n/usr/local/bin/myapp",
    category: "DAILY TIPS"
  },
  {
    id: "daily14",
    question: "Watch processes in real time (CPU%, MEM%, refreshing display) with the always-installed `top` command",
    answer: "top",
    explanation: "`top` is the classic, ALWAYS-installed live process viewer (no install needed — it's in `procps` which is mandatory on every Linux distro). It refreshes every 3 seconds by default, showing: a header with uptime + load averages + tasks + CPU + memory summary, then a sortable list of processes. Key columns: PID, USER, PR (priority), NI (nice value), VIRT (virtual memory), RES (resident/physical memory), %CPU, %MEM, TIME+ (cumulative CPU time), COMMAND. INTERACTIVE keys while top is running: `q` quit, `P` sort by CPU% (default), `M` sort by MEM%, `T` sort by TIME, `k` then a PID to kill a process, `r` then PID + new nice to renice, `1` toggle per-CPU view, `c` toggle full command line vs. just the name, `u` then username to filter by user, `h` help. Pass `-b -n 1` for batch mode (one snapshot, no interactive) — useful when piping output to a file. For a friendlier interface with mouse + colors install `htop` (see daily15) or try newer `btop`. To monitor a specific PID: `top -p 1234`. To watch only one user: `top -u alice`.",
    usage: "Diagnosing 'why is the system slow?', finding the runaway CPU process, getting a PID to kill, or watching memory pressure during a heavy job.",
    examples: [
      "top  # interactive — press q to quit, P/M to sort",
      "top -u alice  # only processes owned by user alice",
      "top -p 1234,5678  # watch only these PIDs",
      "top -b -n 1 | head -20  # ONE snapshot for logging/piping",
      "top -d 1  # refresh every 1 second instead of 3",
      "top -o %MEM  # sort by memory from the start"
    ],
    memoryTip: "`top` = always installed, live snapshot. Keys: `q` quit, `P` CPU sort, `M` MEM sort, `k` kill, `1` per-CPU, `c` full cmdline. For prettier UI install `htop` or `btop`. Batch one-shot: `top -b -n 1`. Refresh rate: `-d N` seconds.",
    outputExample: "$ top\ntop - 09:42:18 up 2 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28\nTasks: 142 total,   1 running, 141 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  3.2 us,  0.8 sy,  0.0 ni, 95.8 id,  0.1 wa,  0.0 hi,  0.1 si,  0.0 st\nMiB Mem :  15938.5 total,   1238.1 free,   4521.4 used,  10179.0 buff/cache\nMiB Swap:   2048.0 total,   2048.0 free,      0.0 used.  10987.4 avail Mem\n\n    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n   1842 alice     20   0 2880340 658432 142328 S   2.3   4.0   0:42.10 firefox\n   2104 alice     20   0   24400   4892   3624 S   0.0   0.0   0:00.42 bash\n      1 root      20   0  167400  11944   8392 S   0.0   0.1   0:14.32 systemd",
    category: "DAILY TIPS"
  },
  {
    id: "daily15",
    question: "Launch the prettier color-coded interactive process monitor `htop` (a friendlier `top`)",
    answer: "htop",
    explanation: "`top` is the classic, always-installed process viewer — but its keys are cryptic and its display is a wall of monochrome text. `htop` ('h' was the author's initial, Hisham Muhammad) is a third-party rewrite that adds: color-coded CPU/memory bars at the top, mouse support, arrow-key scrolling through the process list, F-key shortcuts shown at the bottom (F9=kill, F6=sort, F5=tree view), and search with `/`. You almost certainly need to install it first: `sudo apt install htop` on Debian/Ubuntu, `sudo dnf install htop` on Fedora/RHEL. Once running, press `q` to quit, `F5` to toggle parent→child tree view, `F9` then a signal number to kill the highlighted process, and `t` to toggle the tree.",
    usage: "Use whenever you'd reach for `top` — finding a runaway process eating CPU, killing a frozen app, or watching memory pressure during a heavy build. The visual bars make 'CPU is pinned on core 3 only' immediately obvious in a way `top` never does.",
    examples: [
      "htop  # interactive monitor — q to quit",
      "htop -u alice  # show only processes owned by user 'alice'",
      "htop -p 1234,5678  # watch only these PIDs",
      "htop -t  # start in tree view (parent→child)",
      "htop -s PERCENT_MEM  # start sorted by memory usage"
    ],
    memoryTip: "`htop` = 'Hisham's top' (the author) but easier to remember as 'highlighted top' — colorful version of `top`. If `htop` isn't installed, fall back to plain `top`, which is on every system.",
    outputExample: "$ htop\n  CPU[|||||||||                28.4%]   Tasks: 142, 312 thr; 2 running\n  Mem[||||||||||||||||      6.2G/16G]   Load average: 0.42 0.31 0.28\n  Swp[                       0K/2.0G]   Uptime: 03:14:22\n\n  PID USER      PRI  NI  VIRT   RES  S CPU% MEM%   TIME+  Command\n 1234 alice      20   0 2400M  512M S 12.5  3.2  0:42.10 firefox\n 5678 alice      20   0  800M  120M S  2.3  0.7  0:08.20 bash\n\n F1Help  F2Setup  F3Search  F4Filter  F5Tree  F6Sort  F9Kill  F10Quit",
    category: "DAILY TIPS"
  },
  {
    id: "daily16",
    question: "Watch a log file in real-time as new lines are appended with `tail -f /var/log/app.log`",
    answer: "tail -f logs",
    explanation: "`tail` by default prints the LAST 10 lines of a file. The `-f` ('follow') flag changes its behaviour: after printing those last lines, tail KEEPS RUNNING and prints any new lines as they're written to the file — perfect for live log watching. Stop with Ctrl-C. Useful variants: `-n N` (or `-NN`) prints the last N lines instead of 10 (`tail -n 100 file` or `tail -100 file`); combine with `-f`: `tail -n 200 -f log`. The plain `-f` will not 'follow' across file rotation — if logrotate moves the file out from under you, tail silently stops seeing new lines. Use `-F` (capital F) instead, which re-opens the file when it gets renamed (the everyday choice for production log watching). To follow MULTIPLE files at once, pass several paths: `tail -f /var/log/{syslog,nginx/access.log}` — tail prints a header before lines from each. Pair with `grep` for live filtering: `tail -f app.log | grep -i error --line-buffered` (the `--line-buffered` keeps grep from buffering and delaying output). Modern alternative: `less +F file` lets you press Ctrl-C to STOP following but stay in the pager.",
    usage: "Watching a web server's access log while reproducing a bug, tailing application logs during deployment, or live-monitoring `/var/log/syslog` during troubleshooting.",
    examples: [
      "tail -f /var/log/syslog  # follow syslog live",
      "tail -F /var/log/nginx/access.log  # capital F: survives log rotation",
      "tail -n 200 -f app.log  # show last 200, then follow",
      "tail -f app.log | grep --line-buffered ERROR  # live error filter",
      "tail -f /var/log/{syslog,auth.log}  # follow several files at once",
      "less +F /var/log/syslog  # follow inside less — Ctrl-C to pause-and-search"
    ],
    memoryTip: "`-f` follow, `-F` follow-and-handle-rotation (USE THIS for production logs). `-n N` last N lines. `--line-buffered` on `grep` to avoid lag when filtering live. Modern alt: `less +F`. Server convention: `tail -F` is your friend.",
    outputExample: "$ tail -F /var/log/nginx/access.log\n192.168.1.42 - - [17/May/2026:09:32:01 +0000] \"GET / HTTP/1.1\" 200 612 \"-\" \"curl/8.6.0\"\n192.168.1.42 - - [17/May/2026:09:32:05 +0000] \"GET /api/health HTTP/1.1\" 200 24 \"-\" \"kube-probe/1.30\"\n10.0.0.7   - - [17/May/2026:09:32:08 +0000] \"POST /api/login HTTP/1.1\" 401 32 \"-\" \"PostmanRuntime/7.36\"\n# (continues live as new requests arrive — Ctrl-C to stop)",
    category: "DAILY TIPS"
  },
  {
    id: "daily17",
    question: "List which TCP ports are open and which process is listening with `sudo ss -tlnp` (modern replacement for `netstat`)",
    answer: "ss -tlnp",
    explanation: "`ss` ('socket statistics') is the modern utility for inspecting network sockets — it READS DIRECTLY from kernel structures via netlink and is much faster than the older `netstat` (which is now legacy and may not be installed by default on some distros). The flag combo `-tlnp` is the everyday 'what's listening?' incantation: `-t` TCP only (use `-u` for UDP, or `-tu` for both), `-l` LISTENING sockets only (skip ESTABLISHED/TIME_WAIT etc.), `-n` NUMERIC — show port numbers and IPs raw, don't resolve to names (faster, no DNS), `-p` PROCESS — show which PID/program owns each socket. Showing process info requires sudo for sockets owned by other users; without sudo you only see your own. Common columns: State, Recv-Q, Send-Q, Local Address:Port, Peer Address:Port, Process. `0.0.0.0:80` means 'listening on port 80 on ALL interfaces'; `127.0.0.1:80` means 'localhost only'; `[::]:80` is IPv6 'all interfaces'. The old equivalent `netstat -tlnp` still works but expect it to disappear over time.",
    usage: "Answering 'why is port X already in use?', auditing what's exposed on a server before opening firewall rules, or matching a process to its listening port.",
    examples: [
      "sudo ss -tlnp  # all TCP listeners + owning process",
      "sudo ss -tulnp  # TCP and UDP listeners",
      "ss -tuln  # without -p — no process info, no sudo needed",
      "sudo ss -tlnp | grep :80  # what's on port 80?",
      "ss -s  # one-line summary: total sockets per state",
      "sudo netstat -tlnp  # legacy equivalent (if netstat is installed)"
    ],
    memoryTip: "`ss -tlnp` = TCP + Listening + Numeric + Process. Modern, fast, replaces `netstat`. Need sudo for process info on other users' sockets. Same flag pattern works for UDP: `ss -ulnp`. To see ESTABLISHED connections instead of listeners, drop `-l`: `ss -tnp`.",
    outputExample: "$ sudo ss -tlnp\nState   Recv-Q  Send-Q  Local Address:Port  Peer Address:Port  Process\nLISTEN  0       4096    127.0.0.53%lo:53    0.0.0.0:*          users:((\"systemd-resolve\",pid=682,fd=14))\nLISTEN  0       128     0.0.0.0:22          0.0.0.0:*          users:((\"sshd\",pid=1234,fd=3))\nLISTEN  0       511     0.0.0.0:80          0.0.0.0:*          users:((\"nginx\",pid=2401,fd=6),(\"nginx\",pid=2400,fd=6))\nLISTEN  0       128     [::]:22             [::]:*             users:((\"sshd\",pid=1234,fd=4))\nLISTEN  0       4096    *:443               *:*                users:((\"nginx\",pid=2401,fd=7),(\"nginx\",pid=2400,fd=7))",
    category: "DAILY TIPS"
  },
  {
    id: "daily18",
    question: "Search recursively through all files in a directory for a text pattern with `grep -r 'pattern' .`",
    answer: "grep -r \"pattern\" .",
    explanation: "`grep` (Globally search a Regular Expression and Print) is the everyday text search tool. By default it searches ONE file (or stdin); `-r` ('recursive') makes it walk into subdirectories. The pattern is by default a Basic Regular Expression (BRE); use `-E` for Extended (`grep -E 'a|b'`) or `-F` for FIXED strings (no regex — faster and safer for literal searches). `-i` case-insensitive. `-n` show line numbers. `-l` list ONLY filenames (no matching lines). `-L` opposite — files WITHOUT a match. `-c` count of matches per file. `-w` whole-word match. `-A 2` / `-B 2` / `-C 2` show 2 lines of After/Before/Context around matches. `-v` invert — show lines that DON'T match. `--include='*.py'` limit to matching filenames; `--exclude-dir=node_modules` skip dirs. By default grep follows symlinks; add `-R` (capital) to do that explicitly. The output format is `filename:line` (path:matchline). Modern faster alternatives: `ripgrep` (`rg`) is much faster, respects `.gitignore` by default, and is now the default in many editors; `ag` (the_silver_searcher) is similar. Install with `apt install ripgrep`.",
    usage: "Finding every reference to a variable or function across a codebase, locating a config value, hunting TODO comments, or searching log files for an error pattern.",
    examples: [
      "grep -rn 'TODO' .  # find every TODO with line numbers",
      "grep -rn --include='*.py' 'def main' .  # search Python files only",
      "grep -rli 'password' .  # case-insensitive, list files with at least one hit",
      "grep -rn --exclude-dir=node_modules --exclude-dir=.git 'fetch' .  # skip junk dirs",
      "grep -rnC 2 'ERROR' /var/log  # show 2 lines of context around each match",
      "rg 'pattern' .  # ripgrep — same idea, much faster, respects .gitignore"
    ],
    memoryTip: "`grep -r PATTERN DIR`. Useful flags pile up: `-r` recurse, `-n` line numbers, `-i` case-insens, `-l` filenames only, `-w` whole word, `-C N` context. Use `-F` for literal strings (no regex headaches). Modern: install `ripgrep` (`rg`) — same concept, 10x faster.",
    outputExample: "$ grep -rn 'TODO' --include='*.js' --include='*.ts' src/\nsrc/app.js:23:    // TODO: fix this bug\nsrc/utils/parse.ts:14:  // TODO: handle edge case\nsrc/utils/parse.ts:88:  // TODO: optimize\nsrc/components/Header.tsx:42:  // TODO: a11y review\n$ grep -rn 'TODO' src/ | wc -l\n12\n$ grep -rlni 'password' .\n./config/secrets.example.json\n./README.md\n./scripts/setup.sh",
    category: "DAILY TIPS"
  },
  {
    id: "daily19",
    question: "Replace every occurrence of `old` with `new` in a stream/file using `sed 's/old/new/g'`",
    answer: "sed 's/old/new/g'",
    explanation: "`sed` ('stream editor') reads text line-by-line, applies a 'script' of editing commands, and writes the result to stdout. The most common command by far is SUBSTITUTION: `s/PATTERN/REPLACEMENT/FLAGS`. PATTERN is a Basic Regular Expression by default (`-E` enables Extended regex with `+`, `?`, `()` not needing backslashes); REPLACEMENT can reference capture groups with `\\1`, `\\2`. FLAGS: `g` GLOBAL (every match on the line, not just first), `i` case-insensitive (GNU sed), `Ng` start replacing from the Nth match. Without `-i`, `sed` only PRINTS the modified output — your file is unchanged. `sed -i` (in-place) overwrites the file. `sed -i.bak` creates a `.bak` backup before overwriting — RECOMMENDED for one-shot edits because there's no undo. The slash `/` is the standard delimiter but you can use ANY character if your pattern contains slashes: `sed 's|/old/path|/new/path|g'` is cleaner than escaping. Beyond substitution, sed has `d` (delete line), `p` (print), `a\\text` (append after), `i\\text` (insert before), `-n` to suppress default output, address ranges (`5,10s/a/b/` apply only to lines 5-10), and `1,/PATTERN/d` ranges.",
    usage: "Batch-replacing config values across files, fixing typos in a checked-in file, transforming output mid-pipeline, or stripping comments/blank lines from a file.",
    examples: [
      "echo 'cat cat cat' | sed 's/cat/dog/g'  # → dog dog dog",
      "sed 's/old/new/g' file.txt  # print to stdout (file unchanged)",
      "sed -i 's/old/new/g' file.txt  # edit IN PLACE — irreversible",
      "sed -i.bak 's/old/new/g' file.txt  # in-place with .bak backup — safer",
      "sed -E 's|^([a-z]+)=.*|\\1|' .env  # extract keys; -E for extended regex + |delim",
      "sed -i '/^#/d; /^$/d' config.conf  # delete comment lines AND blank lines"
    ],
    memoryTip: "`sed 's/old/new/g'`: SUBSTITUTE, with `g` for GLOBAL (all matches per line). No `-i` = print to stdout (safe). With `-i` = overwrite file. `-i.bak` makes a backup first — always use this for one-shot edits. Change delimiter to `|` or `#` if pattern has `/`.",
    outputExample: "$ cat greet.txt\nHello cat\ngoodbye CAT\ncat-meets-cat\n$ sed 's/cat/dog/g' greet.txt\nHello dog\ngoodbye CAT\ndog-meets-dog\n$ sed 's/cat/dog/gi' greet.txt\nHello dog\ngoodbye dog\ndog-meets-dog\n$ sed -i.bak 's/cat/dog/g' greet.txt\n$ cat greet.txt\nHello dog\ngoodbye CAT\ndog-meets-dog\n$ ls\ngreet.txt  greet.txt.bak",
    category: "DAILY TIPS"
  },
  {
    id: "daily20",
    question: "Process columnar text data using `awk '{print $1}' file` (or a richer pattern-action program)",
    answer: "awk '{print $1}' file.txt",
    explanation: "`awk` is a small but powerful pattern-action LANGUAGE — not just a tool. It reads input line-by-line, splits each line into FIELDS on whitespace (or any delimiter you set with `-F`), and runs your program on every line. Fields are referenced as `$1`, `$2`, ... and the WHOLE line is `$0`. `NF` is the field count of the current line; `NR` is the current line number. Program structure: `'PATTERN { ACTION }'` — both optional, but at least one. `pattern` filters lines; `action` is what to do. `{print $1}` with no pattern means 'for every line, print field 1'. Use `-F','` (or `-F'\\t'`) to change the field separator (e.g., CSV/TSV). Patterns can be regex (`/ERROR/ {print}` for error lines), expressions (`$3 > 100 {print}` for lines where column 3 > 100), or special blocks `BEGIN {...}` (before reading any line) and `END {...}` (after the last line — great for totals). Arithmetic, arrays, and string functions are all built in. For ANYTHING beyond a one-liner, awk is more elegant than chaining sed/grep/cut.",
    usage: "Extracting a column from `ps`/`df`/`ls` output, summing a column of numbers, filtering CSV/TSV data, converting tabular output between formats, or quick stats without firing up Python.",
    examples: [
      "awk '{print $1}' file.txt  # print first column (whitespace-separated)",
      "awk -F: '{print $1}' /etc/passwd  # split on `:`, print field 1 (username)",
      "ps aux | awk '$3 > 5 {print $2, $11}'  # PIDs + commands using > 5% CPU",
      "awk '{sum += $2} END {print sum}' data.txt  # sum the second column",
      "awk -F, 'NR>1 {print $2}' file.csv  # CSV — skip header (NR>1), print 2nd column",
      "awk '/ERROR/ {count++} END {print count}' app.log  # count ERROR lines"
    ],
    memoryTip: "`awk 'PATTERN { ACTION }' FILE`. Fields: `$1`,`$2`,...,`$NF` (last); whole line `$0`. Specials: `NR` line number, `NF` field count, `FS`/`-F` separator, `BEGIN`/`END` blocks. Sum a column: `awk '{s+=$N} END {print s}'`. Tab-separated: `-F'\\t'`.",
    outputExample: "$ ps aux | awk 'NR>1 {print $2, $3, $11}' | sort -k2 -nr | head\n1842 12.3 /usr/lib/firefox/firefox\n3201  5.2 /usr/bin/node\n2104  0.0 -bash\n$ df -h | awk 'NR>1 && $5+0 > 80 {print $6, $5}'  # filesystems over 80% full\n/        91%\n/home    87%\n$ awk -F: '$3 >= 1000 {print $1, $3}' /etc/passwd  # human users (UID >= 1000)\nalice 1000\nbob 1001",
    category: "DAILY TIPS"
  },
  {
    id: "daily21",
    question: "Count how often each line appears in a file with the `sort | uniq -c` pipeline",
    answer: "sort | uniq -c",
    explanation: "`uniq` removes ADJACENT duplicate lines — that's why you MUST `sort` first, otherwise non-adjacent duplicates won't be collapsed. The `-c` flag ('count') prefixes each unique line with the number of times it appeared. This idiom is the classic 'frequency table' in shell: `sort file | uniq -c` produces lines like `   42 something`, where 42 is the count. The very common follow-up is `| sort -rn` to sort numerically (`-n`) and reverse (`-r`) so the most frequent lines bubble to the top — giving you a 'top 10 of anything' in three short commands: `sort | uniq -c | sort -rn | head`. Useful `uniq` flag variants: `-d` (show ONLY duplicates), `-u` (show ONLY lines that appear exactly once), `-i` (case-insensitive), `-f N` (skip first N fields when comparing). To count BY a specific column rather than the whole line, pre-filter with `awk` or `cut`: `awk '{print $1}' log | sort | uniq -c | sort -rn | head` gives the top sources by first column. Modern alternative `datamash count` exists but is rarely installed.",
    usage: "Finding the top error messages in a log, IP addresses making the most requests, the most-changed files in a git repo, or any 'top N of X' analysis in a few seconds.",
    examples: [
      "sort access.log | uniq -c | sort -rn | head  # most repeated log lines",
      "awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head  # top IPs",
      "grep ERROR app.log | sort | uniq -c | sort -rn  # error message frequency",
      "git log --pretty=format:'%an' | sort | uniq -c | sort -rn  # commits per author",
      "sort users.txt | uniq -d  # only show LINES THAT REPEAT",
      "sort users.txt | uniq -u  # only LINES THAT APPEAR ONCE"
    ],
    memoryTip: "`sort | uniq -c | sort -rn | head` = the 'top N of anything' incantation. Must SORT first because uniq only collapses ADJACENT duplicates. `-c` count, `-d` only-duplicates, `-u` only-unique, `-i` case-insens. Pre-filter with `awk '{print $COL}'` to group by a specific column.",
    outputExample: "$ awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head\n  4231 192.168.1.42\n  2187 10.0.0.7\n   942 203.0.113.5\n   514 198.51.100.22\n   312 192.168.1.101\n   201 8.8.8.8\n$ grep -oP 'level=\\w+' app.log | sort | uniq -c | sort -rn\n  4218 level=info\n   892 level=warn\n   201 level=error\n    14 level=fatal",
    category: "DAILY TIPS"
  },
  {
    id: "daily22",
    question: "Edit your personal scheduled task list (cron jobs) with `crontab -e`",
    answer: "crontab -e",
    explanation: "`crontab` ('cron table') manages your per-user list of scheduled tasks. `crontab -e` opens YOUR personal crontab in your `$EDITOR` (defaults to `vi` — set `EDITOR=nano` to change). When you save and exit, cron parses the file and immediately starts honoring the schedule — no restart needed. Each non-comment line is a job with 6 fields: `MIN HOUR DOM MON DOW COMMAND` (see bash26 for cron syntax depth). `crontab -l` LISTS your current jobs (read-only); `crontab -r` REMOVES the entire crontab — DANGEROUS, no confirmation. With `-u USERNAME` (requires root) you can edit ANOTHER user's crontab. The actual file lives at `/var/spool/cron/crontabs/USERNAME` (Debian) or `/var/spool/cron/USERNAME` (RHEL) but you should never edit it directly — always use `crontab -e` so cron validates the syntax. Job output is EMAILED to the user by default (sometimes you'll find a forgotten cron job filling up `/var/mail/USERNAME`); redirect `>> log 2>&1` to suppress. System-wide jobs live in `/etc/crontab` and `/etc/cron.d/` (different syntax — includes a username field). Modern alternative: systemd timers (better logging, more features) but cron is universal.",
    usage: "Adding nightly backups, periodic monitoring, log rotation scripts you wrote yourself, or any 'do this on a schedule' task.",
    examples: [
      "crontab -e  # edit YOUR crontab",
      "crontab -l  # list current jobs (read-only, no editor)",
      "crontab -r  # REMOVE all jobs — DANGEROUS, no prompt",
      "sudo crontab -e -u alice  # edit alice's crontab (as root)",
      "EDITOR=nano crontab -e  # use nano instead of vi",
      "crontab -l | grep -v '^#'  # show only active job lines"
    ],
    memoryTip: "`-e` edit, `-l` list, `-r` remove all. `EDITOR=nano` to escape vi. Personal crontab is per-user; system jobs go in `/etc/cron.d/`. Always validate with `crontab -l` after editing. Watch `/var/mail/$USER` for cron job output if you forgot to redirect it.",
    outputExample: "$ EDITOR=nano crontab -e\ncrontab: installing new crontab\n$ crontab -l\n# m h  dom mon dow   command\n30 2  *   *   *     /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1\n0  *  *   *   *     /usr/local/bin/heartbeat.sh\n*/15 * *   *   *    /opt/health-check.sh >/dev/null 2>&1\n@reboot              /opt/start-services.sh",
    category: "DAILY TIPS"
  },
  {
    id: "daily23",
    question: "Inspect a service's current state (running/stopped/failed) and recent logs with `systemctl status servicename`",
    answer: "systemctl status nginx",
    explanation: "`systemctl` is the front-end to `systemd` — the init system that boots Linux and supervises services on every modern mainstream distro (Ubuntu, Debian, Fedora, RHEL, Arch, openSUSE). `systemctl status SERVICE` is the diagnostic command: it shows whether the service is `active (running)`, `active (exited)`, `inactive (dead)`, or `failed`; the PID; the unit file location; whether it's `enabled`/`disabled` at boot; CPU/memory usage; and the LAST 10 lines of its journal (the captured stdout/stderr/log calls). The header dot is colored: green for active, red for failed, white for inactive. Read-only — no sudo required just to look (though you may need sudo to see the journal portion if you're not in the `systemd-journal` group). Other essential `systemctl` verbs: `start`/`stop` (now only), `restart` (stop+start), `reload` (re-read config if supported), `enable`/`disable` (boot persistence), `enable --now` (both), `is-active`/`is-enabled` (one-word answers for scripts). For DEEP debugging, follow up with `journalctl -xeu SERVICE` (logs with errors highlighted). `systemctl list-units --failed` shows everything currently broken — useful health check.",
    usage: "Diagnosing why a service won't run, confirming a fresh install is up, checking after a config change, or auditing what's enabled on a server.",
    examples: [
      "systemctl status nginx  # state + 10 log lines",
      "sudo systemctl restart nginx  # stop and start (apply config changes)",
      "sudo systemctl enable --now nginx  # start now + persist on boot",
      "systemctl is-active nginx  # one-word answer (script-friendly)",
      "systemctl list-units --failed  # show every FAILED service",
      "systemctl --user status myapp  # for user (non-root) services"
    ],
    memoryTip: "`systemctl status` = the service dashboard. Verbs: `start/stop` (now), `enable/disable` (boot), `--now` (both), `restart/reload`. Scripts: `is-active`, `is-enabled`. Health check: `systemctl list-units --failed`. Pair with `journalctl -xeu SERVICE` for deep logs.",
    outputExample: "$ systemctl status nginx\n● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; preset: enabled)\n     Active: active (running) since Sat 2026-05-17 09:32:01 UTC; 1h 14min ago\n       Docs: man:nginx(8)\n    Process: 2400 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)\n    Process: 2401 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)\n   Main PID: 2402 (nginx)\n      Tasks: 3 (limit: 9468)\n     Memory: 4.8M\n        CPU: 1.142s\n     CGroup: /system.slice/nginx.service\n             ├─2402 \"nginx: master process /usr/sbin/nginx -g daemon on; master_process on;\"\n             ├─2403 \"nginx: worker process\"\n             └─2404 \"nginx: worker process\"\n\nMay 17 09:32:01 server1 systemd[1]: Starting nginx.service ...\nMay 17 09:32:01 server1 systemd[1]: Started nginx.service.",
    category: "DAILY TIPS"
  },
  {
    id: "daily24",
    question: "Read the journal logs for a specific systemd service with `sudo journalctl -u servicename`",
    answer: "journalctl -u nginx",
    explanation: "`journalctl` is the reader for systemd's journal — the structured, binary log database that captures EVERY service's stdout/stderr plus syslog-style messages, kernel ring buffer, audit events, and more. It REPLACES the older `/var/log/messages` / `/var/log/syslog` on systemd-based distros (those files may not even exist on Fedora). `-u UNIT` ('unit') filters output to a single service. By default `journalctl` shows EVERYTHING since the journal began (potentially gigabytes) and opens in a pager — use `-n N` for the last N lines, `--since '1 hour ago'` for time-bound, `-f` to follow live (like `tail -f`), `-r` for reverse chronological. Add `-e` to jump to the END of the pager and `-x` to include explanatory hints for known errors — `journalctl -xeu nginx` is the canonical 'just show me the last errors with context' command. `-p err` filters by syslog priority (emerg/alert/crit/err/warning/notice/info/debug). Non-root users see only their own services by default; sudo (or membership of `systemd-journal` group) is required for system services. The journal persists across reboots if you set `Storage=persistent` in `/etc/systemd/journald.conf` (default on Fedora; not default on Debian historically).",
    usage: "Investigating why a service failed, watching live activity during a load test, or pulling 'what happened around 3am' for an incident report.",
    examples: [
      "sudo journalctl -u nginx  # all nginx logs (paged)",
      "sudo journalctl -u nginx -n 50  # just last 50 lines",
      "sudo journalctl -u nginx -f  # live follow (Ctrl-C to stop)",
      "sudo journalctl -u nginx --since '1 hour ago'  # time-bound",
      "sudo journalctl -xeu nginx  # the canonical 'recent errors with context'",
      "sudo journalctl -u nginx -p err --since today  # errors only, today"
    ],
    memoryTip: "`journalctl -u UNIT` = logs for one service. Stack flags: `-n N` last N, `-f` follow, `-e` end of pager, `-x` explain, `-r` reverse, `-p err` errors-only, `--since/--until` time bounds. The standard 'why did this fail?' incantation: `journalctl -xeu SERVICE`.",
    outputExample: "$ sudo journalctl -u nginx -n 5\nMay 17 09:32:01 server1 systemd[1]: Starting nginx.service - A high performance web server...\nMay 17 09:32:01 server1 nginx[2400]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nMay 17 09:32:01 server1 nginx[2400]: nginx: configuration file /etc/nginx/nginx.conf test is successful\nMay 17 09:32:01 server1 systemd[1]: Started nginx.service - A high performance web server.\nMay 17 10:14:22 server1 nginx[2402]: 2026/05/17 10:14:22 [error] 2403#2403: *7 open() \"/var/www/html/missing.css\" failed (2: No such file or directory)\n$ sudo journalctl -u nginx -p err --since today | wc -l\n14",
    category: "DAILY TIPS"
  },
  {
    id: "daily25",
    question: "List sockets (listening or active) showing process info with `sudo ss -tulnp`",
    answer: "ss -tulnp",
    explanation: "`ss` (socket statistics) is the modern, fast replacement for `netstat`. It pulls socket data directly from the kernel via netlink, no parsing of /proc files. The flag combo `-tulnp` is the everyday 'show me everything that's bound to a port' command: `-t` TCP, `-u` UDP, `-l` LISTENING only (drop this to see ALL connections including ESTABLISHED), `-n` NUMERIC (don't resolve port numbers to /etc/services names like '80→http'), `-p` show the owning PROCESS (needs sudo for other users' sockets). Compare to `daily17` which is `-tlnp` (TCP only) — `-tulnp` adds UDP. Other useful incantations: `ss -s` ONE-LINE SUMMARY of socket counts per state; `ss -tnp state established` only established TCP connections; `ss -tnp '( sport = :22 or dport = :22 )'` filter by port; `ss -K dst 1.2.3.4` KILL connections (requires CAP_NET_ADMIN). For 'who is connected to my server right now?': `sudo ss -tnp state established`. For 'is port X taken?': `sudo ss -tlnp | grep :80`.",
    usage: "Auditing listening ports, finding which process holds a port, counting active connections per service, or investigating 'address already in use' errors.",
    examples: [
      "sudo ss -tulnp  # TCP+UDP listeners with process info",
      "sudo ss -tnp state established  # active TCP connections only",
      "sudo ss -tnp | grep :443  # who's connected to HTTPS?",
      "ss -s  # one-line socket summary",
      "sudo ss -tlnp '( sport = :80 or sport = :443 )'  # specific ports",
      "ss -tnp | wc -l  # rough count of TCP connections"
    ],
    memoryTip: "`ss -tulnp` = TCP + UDP + Listening + Numeric + Process. Drop `-l` to see active connections. `ss -s` for summary. Need sudo for process info on other users' sockets. Modern replacement for legacy `netstat`. Filter syntax: `'( sport = :80 )'`.",
    outputExample: "$ sudo ss -tulnp\nNetid   State    Recv-Q  Send-Q   Local Address:Port  Peer Address:Port  Process\nudp     UNCONN   0       0        127.0.0.53%lo:53    0.0.0.0:*          users:((\"systemd-resolve\",pid=682,fd=13))\nudp     UNCONN   0       0        0.0.0.0:68          0.0.0.0:*          users:((\"systemd-network\",pid=678,fd=21))\ntcp     LISTEN   0       128      127.0.0.53%lo:53    0.0.0.0:*          users:((\"systemd-resolve\",pid=682,fd=14))\ntcp     LISTEN   0       128      0.0.0.0:22          0.0.0.0:*          users:((\"sshd\",pid=1234,fd=3))\ntcp     LISTEN   0       511      0.0.0.0:80          0.0.0.0:*          users:((\"nginx\",pid=2401,fd=6),(\"nginx\",pid=2400,fd=6))\ntcp     LISTEN   0       4096     127.0.0.1:5432      0.0.0.0:*          users:((\"postgres\",pid=1789,fd=7))",
    category: "DAILY TIPS"
  },
  {
    id: "daily26",
    question: "Run multiple commands sequentially regardless of success/failure by separating them with `;` (semicolon)",
    answer: "command1 ; command2",
    explanation: "The semicolon `;` is the simplest command separator in bash — it just runs the next command after the previous one FINISHES, no matter whether that previous command succeeded or failed. Useful when the commands are INDEPENDENT and you don't care about chaining their success. Compare with three close relatives: `&&` (run next ONLY IF previous succeeded — exits non-zero), `||` (run next ONLY IF previous FAILED), and `&` (run previous in the background and IMMEDIATELY proceed). A newline at end of line has the same effect as `;` — that's why you can stack commands by just typing them on separate lines in a script. Common gotcha: `cd /missing ; rm -rf *` — if `cd` fails, `rm -rf *` runs in your CURRENT directory and could delete everything you have. THIS IS DANGEROUS. Prefer `cd /missing && rm -rf *` in scripts so the second step only runs if the first succeeded. A cute pattern: `{ cmd1; cmd2; cmd3; }` groups commands so they share a redirect: `{ ls; date; uptime; } > snapshot.txt`.",
    usage: "Quick one-liners where you don't need conditional logic, grouping commands for a single redirect, or putting multiple statements on one line in scripts.",
    examples: [
      "echo first ; echo second ; echo third  # always all three",
      "{ date; uptime; df -h; } > daily-snapshot.txt  # group + single redirect",
      "cd /tmp && rm -rf scratch  # PREFER this over `cd /tmp ; rm -rf scratch` for safety",
      "make ; echo \"done at $(date)\"  # second runs even if make fails",
      "(cd /tmp; ls)  # subshell — cd doesn't affect calling shell",
      "git pull; git submodule update; npm install  # three independent steps"
    ],
    memoryTip: "`;` = unconditional sequence (no matter what). `&&` = continue ONLY on success. `||` = continue ONLY on failure. `&` = run in background. `{ a; b; c; }` groups (note spaces and trailing `;`). For ANY destructive second step, prefer `&&` over `;` for safety.",
    outputExample: "$ false ; echo 'still runs'\nstill runs\n$ false && echo 'this would NOT run'\n# (no output — false failed, && short-circuited)\n$ { date; uptime; } > snap.txt\n$ cat snap.txt\nSat May 17 11:14:22 UTC 2026\n 11:14:22 up 2 days,  5:48,  1 user,  load average: 0.42, 0.31, 0.28\n$ cd /missing ; pwd\nbash: cd: /missing: No such file or directory\n/home/alice  # ⚠️ note: we're still in /home/alice (cd failed but `;` ran pwd anyway)",
    category: "DAILY TIPS"
  },
  {
    id: "daily27",
    question: "Run the next command ONLY IF the previous one succeeded by chaining with `&&` (logical AND)",
    answer: "command1 && command2",
    explanation: "`&&` is short-circuit logical AND: bash runs the left command, and only if it exited with code 0 (success) runs the right one. This makes `&&` the SAFE way to chain dependent steps. The classic example: `cd /tmp/work && rm -rf *` is safe — if `cd` fails, the destructive `rm` is skipped. Compare to `cd /tmp/work ; rm -rf *` which still runs the `rm` even when `cd` failed — potentially wiping your CURRENT directory. Chain many commands: `cmd1 && cmd2 && cmd3` stops at the first failure. Useful patterns: `command -v jq >/dev/null && echo 'jq present'` (only echo if command exists), `[ -f config.yml ] && source config.yml` (only source if file exists), `make && make test && make install` (typical build chain). The exit code of the WHOLE chain is the exit code of the last command that ran. Counterparts: `||` runs next ONLY ON FAILURE (the 'else' direction). The tempting `cmd && success_action || failure_action` 'if/else' pattern is SUBTLY BROKEN — if `success_action` itself fails, `failure_action` ALSO runs. Use real `if/then/else` when correctness matters.",
    usage: "Build/test/deploy chains, conditional logic in one-liners, safe preconditions before destructive operations, or skipping a step when a tool is missing.",
    examples: [
      "mkdir project && cd project  # only cd if mkdir succeeded",
      "git pull && npm install && npm test  # stop at first failure",
      "[ -f /etc/foo.conf ] && source /etc/foo.conf  # source only if exists",
      "make && sudo make install  # only install if build succeeded",
      "ping -c1 -W2 host >/dev/null 2>&1 && echo up || echo down  # one-liner if/else (with caveat)",
      "command -v jq >/dev/null && echo 'jq is installed'  # tool check"
    ],
    memoryTip: "`&&` = AND-then, only on SUCCESS. `||` = OR-else, only on FAILURE. Use `&&` for SAFE chains: `cd dir && rm -rf *` won't wipe wrong directory if cd fails. The `cmd && a || b` 'if/else' one-liner has a corner-case bug — when correctness matters, use real `if`.",
    outputExample: "$ true && echo 'success ran'\nsuccess ran\n$ false && echo 'this would NOT print'\n# (no output)\n$ mkdir /tmp/work && cd /tmp/work && touch a b c && ls\na  b  c\n$ ping -c1 -W2 8.8.8.8 >/dev/null 2>&1 && echo 'internet up' || echo 'down'\ninternet up\n$ [ -f .env ] && source .env || echo 'no .env (continuing with defaults)'\nno .env (continuing with defaults)",
    category: "DAILY TIPS"
  },
  {
    id: "daily28",
    question: "Run a fallback command ONLY IF the previous one failed by chaining with `||` (logical OR)",
    answer: "command1 || command2",
    explanation: "`||` is short-circuit logical OR: bash runs the left command, and only if it exited non-zero (failure) runs the right one. It's the 'fallback' or 'else' direction — pair it with `&&` for if/then/else logic. Common uses: error handling without verbose if/else (`curl -fsS URL || die 'fetch failed'`), default-on-missing patterns (`mkdir -p dir || exit 1`), or recovery actions (`cd /work || cd /tmp`). Under `set -e` (strict mode, see bash11), the LEFT side of `||` is EXEMPT from auto-exit-on-error — that's the standard escape hatch: `risky_command || true` means 'run risky_command but don't kill the script on its failure'. Be aware that `cmd1 && cmd2 || cmd3` is NOT a faithful if/then/else: if `cmd2` itself fails, `cmd3` also runs (because `cmd2`'s failure cascades). For real if/then/else use `if cmd1; then cmd2; else cmd3; fi`. The braces grouping pattern works here too: `cmd || { echo 'cleanup'; rm -f /tmp/lock; exit 1; }` lets the fallback be a multi-step block.",
    usage: "Inline error handling, providing defaults when something fails, opting out of strict mode for one command, or graceful degradation patterns.",
    examples: [
      "curl -fsS https://api.example.com || { echo 'fetch failed' >&2; exit 1; }  # block fallback",
      "mkdir -p ~/data || exit 1  # bail if creation impossible",
      "grep -q PATTERN file || echo 'not found'  # echo only when grep finds nothing",
      "risky_cmd || true  # explicit opt-out of `set -e` for ONE command",
      "cd /work || cd /tmp || cd /  # fall back through alternatives",
      "[ -f .env ] || cp .env.example .env  # create default if missing"
    ],
    memoryTip: "`||` = OR-else, runs on FAILURE. Use for fallback paths and recovery. Under `set -e`, LEFT side is exempt from auto-exit — that's how `cmd || true` opts out. Group multi-step fallbacks: `cmd || { cleanup; exit 1; }`. The `&& A || B` 'if/else' pattern has a corner case — use real `if` when it matters.",
    outputExample: "$ false || echo 'fallback ran'\nfallback ran\n$ true || echo 'this would NOT print'\n# (no output)\n$ cat missing.txt || echo 'file missing, using defaults'\ncat: missing.txt: No such file or directory\nfile missing, using defaults\n$ grep -q 'somepattern' file.txt || echo 'pattern not found'\npattern not found\n$ set -e; false || true; echo 'survived'\nsurvived",
    category: "DAILY TIPS"
  },
  {
    id: "daily29",
    question: "Send one command's output directly into another command's input with the pipe `command1 | command2`",
    answer: "command1 | command2",
    explanation: "The pipe `|` is the iconic Unix operator that connects two processes: the stdout (standard output) of the left command becomes the stdin (standard input) of the right command. The two processes run IN PARALLEL — bash starts both, hooks them up, and waits. This is the foundational Unix idea of 'small tools that do one thing well, chained together'. The pipe only passes stdout, NOT stderr; to pipe BOTH use `cmd 2>&1 | next` or the shorthand `cmd |& next`. Pipes can chain indefinitely: `ps aux | grep firefox | grep -v grep | awk '{print $2}'`. By default, bash WAITS for the whole pipeline to finish and reports the exit code of the LAST command — that's why `set -o pipefail` is recommended (makes the pipeline exit non-zero if ANY stage failed). Foot-guns: (1) huge intermediate output can fill pipe BUFFERS and stall, (2) any command in a pipeline runs in a SUBSHELL on most bash configurations so variables set inside don't survive (workaround: process substitution `< <(cmd)` or `mapfile`). Pipes work because Unix programs are LINE-ORIENTED by convention.",
    usage: "Filtering large output (`| grep`), counting (`| wc -l`), formatting (`| column -t`), paging (`| less`), processing chains, or any 'narrow down then transform' task.",
    examples: [
      "ps aux | grep -v grep | grep firefox  # find firefox processes (exclude the grep itself)",
      "cat /etc/passwd | sort | head -5  # first 5 sorted users",
      "ls -la | less  # page through a long listing",
      "history | grep ssh | tail -10  # last 10 ssh commands you ran",
      "cmd 2>&1 | tee log.txt  # pipe BOTH stdout and stderr into tee (saves to file + screen)",
      "set -o pipefail; false | grep x  # pipefail makes the whole pipeline fail (exit 1)"
    ],
    memoryTip: "`|` connects stdout → stdin. Only STDOUT travels through (use `|&` or `2>&1 |` for stderr too). Pipeline runs in PARALLEL. Last command's exit code wins unless `set -o pipefail`. Subshells in pipes can swallow variables — use process substitution or mapfile for those cases.",
    outputExample: "$ ls /etc | head -5\nadduser.conf\nalternatives\napparmor.d\napt\nbash.bashrc\n$ ls /etc | wc -l\n237\n$ ps aux | grep nginx | grep -v grep\nroot   2400  0.0  0.0 56012  1432 ? Ss 09:32 0:00 nginx: master process /usr/sbin/nginx\nwww-data 2401 0.0 0.1 56428 4892 ? S  09:32 0:00 nginx: worker process\nwww-data 2402 0.0 0.1 56428 4892 ? S  09:32 0:00 nginx: worker process\n$ cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -3\n  4231 192.168.1.42\n  2187 10.0.0.7\n   942 203.0.113.5",
    category: "DAILY TIPS"
  },
  {
    id: "daily30",
    question: "Run a command in the background so the shell prompt returns immediately by appending `&`",
    answer: "command &",
    explanation: "Appending `&` to a command launches it as a background JOB and returns control to the shell right away. Bash prints `[N] PID` where N is the job number (per-shell) and PID is the process ID. The background job inherits the shell's stdin/stdout/stderr, so its output STILL APPEARS in your terminal unless you redirect (`command > out.log 2>&1 &` is the polite form). Manage background jobs: `jobs` lists them, `fg %N` brings job N to the foreground (or `fg` for the most recent), `bg %N` resumes a STOPPED job in the background, `kill %N` sends SIGTERM to the job. A foreground job can be paused with Ctrl-Z (sends SIGTSTP) and resumed in background with `bg`. WARNING: when you LOG OUT or close the terminal, child processes typically receive SIGHUP and die. To survive logout, use `nohup cmd &` (ignores SIGHUP, redirects to `nohup.out`), `disown %N` after `&` (removes from shell's job table), or a proper detached tool like `tmux`/`screen`/`systemd-run`. For long-lived services, write a systemd unit instead — that's what it's for. `&` is for quick concurrent runs in interactive shells; not a substitute for service management.",
    usage: "Running long tasks while keeping the terminal usable, kicking off several parallel jobs, or starting a quick local dev server in the foreground console.",
    examples: [
      "sleep 60 &  # background sleep — prompt returns instantly",
      "./server > server.log 2>&1 &  # redirect output, then background",
      "long_task & long_task & long_task & wait  # run three in parallel, wait for all",
      "nohup long_task > out.log 2>&1 &  # survives logout (still dies on terminal close in some setups)",
      "jobs  # list current background jobs",
      "fg %1  # bring job 1 to foreground"
    ],
    memoryTip: "`&` = background. `jobs` list, `fg %N` foreground, `bg %N` resume in background, `kill %N` terminate. For LOGOUT-survival use `nohup ... &` or `disown` or `tmux`/`screen`. For persistent services, write a systemd unit. Always REDIRECT output (`> log 2>&1`) when backgrounding non-interactive jobs.",
    outputExample: "$ sleep 60 &\n[1] 12345\n$ sleep 30 &\n[2] 12346\n$ jobs\n[1]-  Running                 sleep 60 &\n[2]+  Running                 sleep 30 &\n$ fg %1\nsleep 60\n^Z  # press Ctrl-Z to stop\n[1]+  Stopped                 sleep 60\n$ bg %1  # resume in background\n[1]+ sleep 60 &\n$ kill %1\n[1]+  Terminated              sleep 60",
    category: "DAILY TIPS"
  },
  {
    id: "daily31",
    question: "Save a command's normal output to a file, overwriting it, with `command > file.txt`",
    answer: "command > file.txt",
    explanation: "The `>` operator redirects the LEFT command's stdout (FD 1) into the FILE on the right, TRUNCATING (emptying) the file first if it exists, or creating it if it doesn't. Stderr is unaffected and still prints to the terminal — to capture errors too, use `2>` (errors to file) or `&>` (both, bash shorthand) or `> file 2>&1` (POSIX). Critically, `>` SILENTLY DESTROYS the previous contents of the file — if you meant to append, use `>>` instead. To prevent accidents, enable `set -o noclobber` in your shell which makes `>` REFUSE to overwrite an existing file (use `>|` to override per-command). To DISCARD output entirely, redirect to `/dev/null` (the bit-bucket): `noisy_cmd > /dev/null`. The redirection happens BEFORE the command runs: `> file cmd` is identical to `cmd > file`. Foot-gun: `cmd > file` with file == an INPUT FILE truncates the input before cmd reads it, leaving you with an empty file. Workaround: `cmd file > tmp && mv tmp file`, or use `sponge` (from `moreutils`): `cmd file | sponge file`.",
    usage: "Capturing a command's output for later, generating files from script output, saving snapshots, or writing the output of one tool that another will read.",
    examples: [
      "ls > files.txt  # save listing to file (overwrites)",
      "date > timestamp.txt  # snapshot current time",
      "echo 'hello' > greeting.txt  # create simple file",
      "make > build.log 2>&1  # capture both stdout and stderr",
      "cmd > /dev/null  # discard output completely",
      "set -o noclobber; ls > existing.txt  # errors out instead of truncating"
    ],
    memoryTip: "`>` = overwrite (TRUNCATES first!). `>>` = append. `2>` = stderr. `&>` = both. `> /dev/null` = throw away. Enable `set -o noclobber` to refuse overwrites. NEVER `> samefile` you're reading — it empties the file first.",
    outputExample: "$ echo 'first' > log.txt\n$ echo 'second' > log.txt  # OVERWRITES — 'first' is gone\n$ cat log.txt\nsecond\n$ ls /etc > etc-listing.txt\n$ wc -l etc-listing.txt\n237 etc-listing.txt\n$ noisy_script > /dev/null 2>&1  # silently discard everything\n$ set -o noclobber; echo x > log.txt\nbash: log.txt: cannot overwrite existing file\n$ echo x >| log.txt  # force overwrite with >|",
    category: "DAILY TIPS"
  },
  {
    id: "daily32",
    question: "Append a command's output to a file (without overwriting) using `command >> file.txt`",
    answer: "command >> file.txt",
    explanation: "The double-arrow `>>` operator is the APPEND form of `>`: instead of truncating the destination file, it writes new output AT THE END, preserving existing contents. If the file doesn't exist, `>>` creates it (just like `>`). This is the operator you want for LOG files, history captures, and any case where successive runs should accumulate rather than overwrite. The stderr-append equivalent is `2>>` (append stderr to file). To append BOTH stdout and stderr to the same file: `cmd >> all.log 2>&1` (the ordering matters — `2>&1` AFTER `>> log`). Common usage in scripts: `echo \"[$(date)] event happened\" >> /var/log/myapp.log` for ad-hoc logging. There's no append protection equivalent to `noclobber` — appends are always allowed. For a thread-safe atomic append across processes use `flock`: `flock /tmp/lock.lock -c 'echo line >> file'`. The system `logger` command (see bash30) is a more durable alternative because it goes through syslog/journal with proper rotation and timestamping.",
    usage: "Building log files over time, accumulating output from a loop, appending entries to a manifest or report, adding lines to a config file from a script.",
    examples: [
      "echo \"[$(date)] starting\" >> /var/log/myapp.log  # timestamped event",
      "for h in host1 host2 host3; do ssh $h uptime >> uptimes.log; done  # accumulate",
      "date >> history.log  # add a line, keep history",
      "cmd >> output.log 2>&1  # append BOTH stdout and stderr",
      "printf '%s\\n' \"new line\" >> config.txt  # append a single line",
      "command >> file.txt 2>> errors.log  # split stdout/stderr to separate logs"
    ],
    memoryTip: "`>>` append (preserve existing). `>` overwrite (TRUNCATE). `2>>` append stderr. `>> file 2>&1` for both. No `noclobber` equivalent — appends always work. For multi-process safety use `flock`. For audit-quality logs prefer `logger` over `>> file.log`.",
    outputExample: "$ echo first > log.txt\n$ echo second >> log.txt\n$ echo third >> log.txt\n$ cat log.txt\nfirst\nsecond\nthird\n$ for i in 1 2 3; do echo \"run $i at $(date +%T)\" >> runs.log; sleep 1; done\n$ cat runs.log\nrun 1 at 11:14:22\nrun 2 at 11:14:23\nrun 3 at 11:14:24\n$ make >> build.log 2>&1  # both stdout and stderr appended",
    category: "DAILY TIPS"
  },
  {
    id: "daily33",
    question: "Send only the error (stderr) output of a command to a file with `command 2> error.log`",
    answer: "command 2> error.log",
    explanation: "Every process has three file descriptors: 0 = stdin, 1 = stdout (normal output), 2 = stderr (error/diagnostic output). The `2>` redirect sends FD 2 to a file, leaving stdout untouched (still on terminal or wherever you redirect it separately). Common pattern: `command > out.txt 2> err.txt` — normal output in one file, errors in another. To DISCARD only errors (quiet a noisy command's complaints but keep its real output), use `2> /dev/null`. To redirect stderr to stdout for piping or unified handling, use `2>&1` (read as 'FD 2 goes to wherever FD 1 currently goes'). The `&` here means 'this is a FILE DESCRIPTOR, not a filename starting with 1'. Order matters: `cmd > log 2>&1` redirects stdout to log FIRST, then sends stderr to the new location of stdout → both in log. `cmd 2>&1 > log` does the OPPOSITE: sends stderr to old stdout (terminal), then redirects stdout to log — leaving stderr on screen. Bash shortcut for 'both to file': `cmd &> log` and 'both append': `cmd &>> log`. APPEND stderr: `2>>`.",
    usage: "Separating clean output from error messages in a script, silencing noisy warnings (`2>/dev/null`), keeping a separate error log for diagnostics, or capturing failure details for review.",
    examples: [
      "ls /tmp /nope 2> errors.log  # listing on terminal, error to file",
      "find / -name 'foo' 2>/dev/null  # SILENCE all 'Permission denied' noise",
      "make > build.out 2> build.err  # split clean output and errors",
      "make > build.log 2>&1  # both to ONE file (order matters!)",
      "cmd 2>&1 | grep -i error  # merge to stdout then filter with grep",
      "cmd 2>> errors.log  # APPEND stderr instead of overwrite"
    ],
    memoryTip: "FD numbers: 0 stdin, 1 stdout, 2 stderr. `2>` redirect stderr (overwrite), `2>>` append, `2>&1` 'stderr follows stdout' (the `&` says 'this is FD, not filename'). `2>/dev/null` = discard errors. `&>` and `&>>` = both, bash shorthand. Order matters: put `2>&1` AFTER `> file`, not before.",
    outputExample: "$ ls /tmp /nope > out.txt 2> err.txt\n$ cat out.txt\n/tmp:\nfile1\nfile2\n$ cat err.txt\nls: cannot access '/nope': No such file or directory\n$ find /etc -name '*.conf' 2>/dev/null | head -3\n/etc/adduser.conf\n/etc/apparmor.d/abstractions/...\n/etc/apt/apt.conf.d/01-vendor-ubuntu\n$ ls /nope /tmp 2>&1 | grep -i error\nls: cannot access '/nope': No such file or directory",
    category: "DAILY TIPS"
  },
  {
    id: "daily34",
    question: "Send BOTH stdout and stderr to the same file using bash's `&>` shorthand (or POSIX `> file 2>&1`)",
    answer: "command &> output.log",
    explanation: "Capturing both streams to one file is a frequent need: log everything from a build, silence everything from a noisy script, or save complete output for postmortem. Bash provides the shorthand `&> file` ('both to file', overwrite) and `&>> file` (append). The POSIX-portable form (works in `sh`, `dash`, older shells) is `> file 2>&1` (overwrite) and `>> file 2>&1` (append). The `2>&1` reads as 'redirect FD 2 to wherever FD 1 currently goes' — so the ORDER MATTERS: `> file 2>&1` is correct (set stdout to file, THEN make stderr follow); `2>&1 > file` is WRONG (sends stderr to old stdout, then redirects only stdout — leaving stderr on terminal). The `&>` shorthand avoids that ordering trap and is the everyday choice in bash scripts. To discard everything from a noisy command: `cmd &> /dev/null` or POSIX `cmd > /dev/null 2>&1`. To both LOG and SEE the output, use `tee`: `cmd 2>&1 | tee log.txt` writes to the file AND prints to terminal. To put each stream in its own file but merged interleaving order, use process substitution: `cmd 1> >(tee out.log) 2> >(tee err.log >&2)`.",
    usage: "Capturing complete output of a build (`make &> build.log`), silencing a script's output (`cmd &> /dev/null`), or producing a single canonical log file from a deploy script.",
    examples: [
      "make &> build.log  # all output (stdout + stderr) into build.log",
      "make >> build.log 2>&1  # append form (POSIX)",
      "./deploy.sh &> deploy-$(date +%F).log  # dated log file",
      "noisy_cmd &> /dev/null  # silence completely",
      "cmd 2>&1 | tee run.log  # capture everything to file AND see live output",
      "cmd &>> daily.log  # append both streams"
    ],
    memoryTip: "Two forms: bash shorthand `&> file` (overwrite) / `&>> file` (append), or POSIX `> file 2>&1` / `>> file 2>&1`. ORDER matters: `2>&1` must come AFTER `> file`. To see AND save, replace with `| tee`. For silence: `&> /dev/null`.",
    outputExample: "$ ls /tmp /nope &> all.log\n$ cat all.log\nls: cannot access '/nope': No such file or directory\n/tmp:\nfile1\nfile2\n$ ./build.sh &> build.log\n$ tail -3 build.log\nCompiling src/main.c ... ok\nLinking ... ok\nbuild successful in 4.2s\n$ noisy_cmd &> /dev/null  # silent\n$ echo $?  # we can still check exit code\n0",
    category: "DAILY TIPS"
  },
  {
    id: "daily35",
    question: "Open the offline manual page for any command with `man command_name`",
    answer: "man command",
    explanation: "`man` is the offline documentation viewer that ships with every Linux system. Each command/file format/library function has a 'man page' — a structured document with NAME, SYNOPSIS, DESCRIPTION, OPTIONS, EXAMPLES, SEE ALSO, and AUTHOR sections. Pages are organized into 9 numbered SECTIONS: 1 user commands, 2 system calls, 3 library functions, 4 special files (in /dev), 5 file formats (like `/etc/passwd`, `crontab`), 6 games, 7 misc (overviews like `signal(7)`, `regex(7)`), 8 sysadmin commands, 9 kernel routines. When names collide (e.g., `passwd` exists as both a COMMAND in section 1 and a FILE FORMAT in section 5), specify the section: `man 5 passwd`. Navigation inside the pager (less): `/text` search forward, `?text` search backward, `n`/`N` next/prev match, `space`/`b` page down/up, `g`/`G` go to start/end, `q` quit. Useful related tools: `man -k 'word'` (a.k.a. `apropos`) searches descriptions; `man -f cmd` (a.k.a. `whatis`) gives a one-line summary; `info cmd` is GNU's alternative format with more depth (but few people use it); `tldr cmd` is a community-driven cheat-sheet alternative — `sudo apt install tldr` to install. For a quick flag list without the man page formality, most commands also support `--help`.",
    usage: "Reading a command's documentation the first time you use it, looking up an obscure flag, or learning the format of a config file (section 5).",
    examples: [
      "man ls  # the everyday command page",
      "man 5 passwd  # the FILE FORMAT of /etc/passwd (not the command)",
      "man -k 'list directory'  # apropos: search descriptions",
      "man -f ls  # whatis: one-line summary",
      "man bash  # epic 5000+ line shell reference",
      "tldr ls  # community cheat-sheet alternative (install tldr first)"
    ],
    memoryTip: "`man` = MANUAL. 9 sections; collisions resolved by `man N name` (e.g., `man 5 passwd`). Navigation in less: `/` search, `n` next, `space` page, `q` quit. Quick alternatives: `cmd --help` for flag summary, `tldr CMD` for cheat-sheet, `apropos KEYWORD` to search.",
    outputExample: "$ man ls\nLS(1)                        User Commands                        LS(1)\n\nNAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n\nDESCRIPTION\n       List information about the FILEs (the current directory by default).\n       Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.\n\n       Mandatory arguments to long options are mandatory for short options too.\n\n       -a, --all\n              do not ignore entries starting with .\n\n       -A, --almost-all\n              do not list implied . and ..\n Manual page ls(1) line 1 (press h for help or q to quit)",
    category: "DAILY TIPS"
  },
  {
    id: "daily36",
    question: "Find which executable a command name resolves to with `which command` or the better `command -v command`",
    answer: "command -v git",
    explanation: "When you type a command, bash searches the `$PATH` directories in order for a matching executable. Three tools tell you which one wins: `which CMD` is the classic — an EXTERNAL program that searches PATH and prints the path. `type CMD` is a bash BUILTIN that's smarter: it also reports aliases, shell functions, and shell builtins (`type ls` might show `ls is aliased to 'ls --color=auto'`). `command -v CMD` is the POSIX-portable preferred form for SCRIPTS: it prints the path (or alias/function definition) on success, prints nothing and exits non-zero on failure — perfect for `if command -v jq >/dev/null; then ...; fi`. WHICH HAS BUGS: it doesn't see aliases or functions, behaves differently across distros, and has historically returned non-zero exit codes that surprise scripts. `whereis CMD` is different again — finds binary + man page + source. To see ALL matches in PATH (not just the first one that wins), use `type -a CMD` (bash builtin) or `which -a CMD`. To see what your shell will RUN for a name including aliases: `type CMD`. Modern shell scripts almost always use `command -v`.",
    usage: "Confirming you're running the version you think (Python: pyenv vs system?), debugging 'wrong tool runs' issues, checking 'is this command installed?' in a script, or auditing your PATH ordering.",
    examples: [
      "command -v git  # POSIX, script-friendly — exit non-zero if missing",
      "type ls  # bash builtin — shows aliases too",
      "type -a python  # show ALL matches in PATH order, not just the winner",
      "which python  # classic — external program",
      "whereis git  # binary + man page + source paths",
      "command -v jq >/dev/null || { echo 'install jq first' >&2; exit 1; }  # tool-check idiom"
    ],
    memoryTip: "`command -v` (POSIX, scripts), `type` (bash builtin, shows aliases/functions), `which` (classic but quirky), `whereis` (binary + man + source). Prefer `command -v` in scripts: `if command -v CMD >/dev/null; then ...; fi`. Use `type -a` to see EVERY match in PATH.",
    outputExample: "$ command -v git\n/usr/bin/git\n$ type ls\nls is aliased to `ls --color=auto'\n$ type -a python\npython is /usr/local/bin/python\npython is /usr/bin/python\n$ which python\n/usr/local/bin/python\n$ whereis git\ngit: /usr/bin/git /usr/lib/git-core /usr/share/man/man1/git.1.gz\n$ if command -v jq >/dev/null; then echo 'jq present'; else echo 'install jq'; fi\njq present",
    category: "DAILY TIPS"
  },
  {
    id: "daily37",
    question: "Search your shell command history for a past command with `history | grep keyword` (or interactively with Ctrl-R)",
    answer: "history | grep keyword",
    explanation: "Bash records every interactive command you type in a HISTORY file (typically `~/.bash_history`) and exposes it via the `history` builtin. `history` alone prints the whole history with line numbers; `history N` prints the last N entries. Piping to `grep` filters by keyword — invaluable when you remember 'I ran something with ssh and a specific port' but can't recall the exact form. Once you spot the number you want, run `!N` to re-execute that line (e.g., `!102` re-runs entry 102). `!!` re-runs the LAST command (the classic `sudo !!` after forgetting sudo). `!ssh` runs the most recent command starting with 'ssh'. Even better than grep-ing: INTERACTIVE incremental search with Ctrl-R — press Ctrl-R, start typing, bash shows the most recent match; Ctrl-R again steps backward through older matches; Enter to run, arrow keys to edit before running. Ctrl-G or Esc cancels. By default history is saved on shell EXIT — set `PROMPT_COMMAND='history -a'` in `.bashrc` to save after EVERY command (useful across many terminals). Tune via shell vars: `HISTSIZE` (in-memory size), `HISTFILESIZE` (file size), `HISTCONTROL=ignoredups:erasedups`.",
    usage: "Re-running a complex command you typed earlier without retyping, recovering 'what was that command I used yesterday?', or auditing your own shell activity.",
    examples: [
      "history | grep -i ssh  # case-insensitive search for ssh commands",
      "history 20  # last 20 commands",
      "history | tail -10  # alternative for last 10",
      "!!  # re-run the last command",
      "sudo !!  # re-run last command WITH sudo (when you forgot)",
      "!ssh  # re-run the most recent command starting with 'ssh'"
    ],
    memoryTip: "`history` prints history. `history | grep X` searches. `!N` re-run entry N, `!!` re-run last, `!STR` re-run most recent matching prefix. INTERACTIVE search: Ctrl-R then type, Ctrl-R again for older, Enter to run. Save after every command: `PROMPT_COMMAND='history -a'` in `.bashrc`.",
    outputExample: "$ history | grep ssh\n  102  ssh alice@web1\n  113  ssh -p 2222 deploy@staging\n  142  ssh-keygen -t ed25519\n  187  ssh -L 8080:localhost:80 alice@web1\n$ !187\nssh -L 8080:localhost:80 alice@web1\n$ history 5\n  201  ls\n  202  pwd\n  203  history | grep ssh\n  204  !187\n  205  history 5",
    category: "DAILY TIPS"
  },
  {
    id: "daily38",
    question: "Re-run your previous command prefixed with `sudo` using the `sudo !!` shortcut (history expansion)",
    answer: "sudo !!",
    explanation: "`!!` is bash 'history expansion' — it gets replaced with the LAST command you ran, before that line is executed. `sudo !!` therefore re-runs the previous command with `sudo` prepended. The classic use: you type `apt update`, get 'Permission denied' or 'lock file' errors, and instead of retyping you just `sudo !!`. Bash prints the expanded command before running it so you can confirm what's about to happen. Related history expansions: `!N` re-run entry number N, `!-N` re-run N commands back, `!STR` re-run most recent starting with STR, `!?STR` re-run most recent CONTAINING STR, `^old^new^` replace `old` with `new` in the last command and re-run (`echo helo` → `^helo^hello^`). The `!$` references the LAST WORD of the previous command (`ls long/path/file.txt; cat !$` = `cat long/path/file.txt`), `!*` all args of the previous command, `!:N` the Nth word. Foot-gun: history expansion happens BEFORE the command runs, so `!!` in a sudoers context or with sensitive commands can SURPRISE you. Disable with `set +H` if you find it dangerous. Some prefer the alias `alias please='sudo $(history -p !!)'` for safer behaviour.",
    usage: "Quick recovery when you forgot `sudo`, repeating an edit with a different prefix, or any 'do that again but slightly different' pattern.",
    examples: [
      "apt update  # 'Permission denied'\nsudo !!  # retry with sudo",
      "vim /etc/hosts  # 'readonly file' — :q out\nsudo !!  # reopen with sudo",
      "echo $PATH  # noticed nothing\n!! >> /tmp/path.log  # rerun and append to file",
      "^helo^hello  # fix typo in last command",
      "ls long/path/file; cat !$  # !$ = last arg of previous command",
      "set +H  # disable history expansion if you find it scary"
    ],
    memoryTip: "`!!` = the last command. `sudo !!` = redo with sudo. `!STR` re-run most recent starting with STR. `!$` = last arg of previous command. `^old^new^` = swap and rerun. Bash echoes the expansion before running — read it. Disable with `set +H` if dangerous.",
    outputExample: "$ apt update\nReading package lists... Done\nE: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)\nE: Unable to lock directory /var/lib/apt/lists/\n$ sudo !!\nsudo apt update\n[sudo] password for alice: \nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://security.ubuntu.com/ubuntu noble-security InRelease [128 kB]\n$ mkdir /tmp/work\n$ cd !$\ncd /tmp/work\n$ pwd\n/tmp/work",
    category: "DAILY TIPS"
  },
  {
    id: "daily39",
    question: "Apply changes to `.bashrc` (or any sourced file) immediately in your CURRENT shell with `source ~/.bashrc`",
    answer: "source ~/.bashrc",
    explanation: "`source FILE` (also written as `. FILE` — a dot followed by space and the path, identical meaning) reads the file and executes its commands IN THE CURRENT SHELL — not in a subshell. This is the key difference from `bash FILE` or `./FILE` which spawn a NEW shell to run the file, so any variables/aliases/functions they define DON'T affect the current session. After editing `~/.bashrc` to add an alias or export an env var, `source ~/.bashrc` applies the changes immediately so you don't have to close and reopen the terminal. Common config files to source: `~/.bashrc` (per-shell interactive), `~/.bash_profile` or `~/.profile` (login shell), `~/.zshrc` (zsh equivalent), project-specific `.env` files (`set -a; source .env; set +a` to auto-export all variables defined in the file). `source` runs in the CURRENT directory by default — be wary of sourcing untrusted files: they can `cd`, modify your shell, set malicious aliases, etc. To 'unsource' an alias: `unalias name`; to unset a variable: `unset VAR`; to undo a function: `unset -f funcname`.",
    usage: "Reloading shell config after edits, loading environment variables from a `.env` file into the current shell, activating a Python virtualenv (which is also a sourced shell script), or running setup scripts that need to MODIFY the current shell.",
    examples: [
      "source ~/.bashrc  # reload bash config after edits",
      ". ~/.bashrc  # dot syntax — identical, POSIX-portable",
      "set -a; source .env; set +a  # load .env and auto-export every var",
      "source venv/bin/activate  # enter a Python venv (it's just a sourced shell script)",
      "source ~/.bash_aliases  # load aliases file",
      "alias myalias='echo hello'  # define inline\nsource <(echo 'alias x=ls')  # source from a string (bash trick)"
    ],
    memoryTip: "`source FILE` (or `. FILE`) runs in CURRENT shell — settings stick. `bash FILE` or `./FILE` runs in SUBSHELL — settings disappear. Use source after editing `.bashrc`, for `.env` files, and for Python venv activate. Foot-gun: sourcing an untrusted file is like running it with shell access.",
    outputExample: "$ echo 'alias hello=\"echo Hello World\"' >> ~/.bashrc\n$ hello\nbash: hello: command not found\n$ source ~/.bashrc\n$ hello\nHello World\n$ cat .env\nDB_HOST=localhost\nDB_PORT=5432\nAPI_KEY=secret\n$ set -a; source .env; set +a\n$ echo $DB_HOST\nlocalhost\n$ env | grep -E '^(DB|API)' | wc -l\n3",
    category: "DAILY TIPS"
  },
  {
    id: "daily40",
    question: "Create a typing shortcut for a long command with `alias short='long command'` (and put it in `~/.bashrc` to persist)",
    answer: "alias ll='ls -la'",
    explanation: "An alias is a shell-level name → command mapping that's expanded when you type it. `alias name='value'` defines one. Aliases are LITERAL TEXT SUBSTITUTION: when bash sees `ll`, it expands to `ls -la` and runs that. The substitution only happens at the START of a command (so `echo ll` doesn't expand). Aliases set in your shell session disappear on logout — to persist, add them to `~/.bashrc` (or `~/.bash_aliases` if `.bashrc` sources it; some distros do by default). `alias` alone lists all defined aliases; `unalias NAME` removes one. Aliases canNOT take ARGUMENTS in the middle of their definition (`alias greet='echo hello $1'` does NOT work the way you'd hope — `$1` doesn't refer to args you pass) — for that you need a SHELL FUNCTION: `greet() { echo \"hello $1\"; }`. Functions are nearly always more powerful than aliases and should be preferred for anything beyond trivial substitution. Aliases are recursive but the same name is only expanded once (so `alias ls='ls --color=auto'` doesn't loop). To call the real underlying command bypassing an alias, prefix with a BACKSLASH: `\\ls` or use `command ls`.",
    usage: "Saving keystrokes on frequently-typed commands, customizing default flags (e.g., `alias rm='rm -i'` to confirm before deleting), or creating per-project shortcuts.",
    examples: [
      "alias ll='ls -lah'  # detailed listing with human sizes",
      "alias gs='git status'  # 2-letter git shortcut",
      "alias rm='rm -i'  # SAFETY: confirm before deleting",
      "alias ..='cd ..'  # 2-dot shortcut for going up",
      "alias  # list all currently defined aliases",
      "unalias rm  # remove the rm alias for this session (\\rm bypasses temporarily)"
    ],
    memoryTip: "`alias name='value'` literal substitution at start of command. Add to `~/.bashrc` to persist. Reload with `source ~/.bashrc` (see daily39). Aliases can't take middle-of-command args — use a FUNCTION for that. Bypass alias with `\\name` or `command name`.",
    outputExample: "$ alias ll='ls -lah'\n$ ll | head\ntotal 28K\ndrwxr-xr-x  5 alice alice 4.0K May 17 10:30 .\ndrwxr-xr-x 15 alice alice 4.0K May 14 10:00 ..\n-rw-r--r--  1 alice alice  220 May 14 10:00 .bashrc\n$ alias\nalias gs='git status'\nalias ll='ls -lah'\nalias rm='rm -i'\nalias ..='cd ..'\n$ \\ls -la | wc -l  # \\ bypasses alias for this call\n28",
    category: "DAILY TIPS"
  },

  // NAVIGATION — extended
  {
    id: "nav21",
    question: "Use `pushd /path` to jump to a directory while saving your current one on a STACK (so you can `popd` back later)",
    answer: "pushd /tmp",
    explanation: "Think of `pushd` as `cd` with a bookmark trail. The shell keeps a 'directory stack' — a list of remembered directories you can pop back to in order. `pushd /tmp` SAVES your current directory at the top of the stack and `cd`s to `/tmp`. Run `pushd` repeatedly with different paths and you build up a chain you can unwind with `popd`. With NO arguments, `pushd` swaps the top two entries (toggle between two directories). With `+N` it rotates the stack — jumping to the Nth saved entry. View the stack any time with `dirs -v`. Unlike plain `cd`, `pushd` always PRINTS the new stack contents — that's how you confirm it worked. Stack is per-shell; it's lost when you close the terminal.",
    usage: "Jumping between several directories during debugging. Building a breadcrumb trail when you don't know how deep you'll go. Avoiding the chore of remembering or retyping previous paths.",
    examples: [
      "pushd /tmp  # save current, cd to /tmp",
      "pushd /etc/nginx  # save /tmp on stack, cd to /etc/nginx",
      "pushd  # no args: swap top two, toggling",
      "pushd +1  # rotate to the second stack entry",
      "dirs -v  # show the full stack with indexes",
      "popd  # pop one entry and cd back"
    ],
    memoryTip: "`pushd` PUSHES a directory onto the stack; `popd` POPS one off. Pair-think `pushd`/`popd`/`dirs` — three commands, one mental model: a stack of bookmarks.",
    outputExample: "$ pwd\n/home/alice/projects\n$ pushd /tmp\n/tmp ~/projects\n$ pushd /var/log\n/var/log /tmp ~/projects\n$ dirs -v\n 0  /var/log\n 1  /tmp\n 2  ~/projects",
    category: "NAVIGATION"
  },
  {
    id: "nav22",
    question: "Use `popd` to remove the top of the directory stack and `cd` to the entry beneath it",
    answer: "popd",
    explanation: "`popd` is the counterpart to `pushd`. It POPS (removes) the top entry from the directory stack and `cd`s into the new top. So each `popd` 'unwinds' one `pushd`. Like `pushd`, it prints the updated stack so you can see where you ended up. Variations: `popd +N` removes the Nth entry WITHOUT changing your current directory (handy for cleaning the stack); `popd -N` removes from the bottom. To clear the entire stack without changing directories use `dirs -c`. If the stack is empty, `popd` errors with `popd: directory stack empty` — that's your sign to use plain `cd`. The stack lives inside your shell process; opening a new terminal gives you a fresh empty stack.",
    usage: "Returning from a `pushd` jump. Walking back up through a chain of saved directories. Cleaning a stale entry from the middle of the stack.",
    examples: [
      "popd  # remove top, cd to new top",
      "popd  # do it again to unwind another pushd",
      "popd +1  # remove the 2nd entry, stay where you are",
      "popd -0  # remove the BOTTOM entry",
      "dirs -c  # clear the stack entirely",
      "dirs -v  # peek at the stack before popd-ing"
    ],
    memoryTip: "`popd` POPs and lands. `pushd /tmp` then `popd` is the canonical 'jump and return' pattern. Empty stack = use plain `cd`.",
    outputExample: "$ dirs -v\n 0  /var/log\n 1  /tmp\n 2  ~/projects\n$ popd\n/tmp ~/projects\n$ popd\n~/projects\n$ popd\nbash: popd: directory stack empty",
    category: "NAVIGATION"
  },
  {
    id: "nav23",
    question: "Use `dirs -v` to print the directory stack with one numbered entry per line (your `pushd` bookmarks)",
    answer: "dirs -v",
    explanation: "`dirs` shows the shell's directory stack — the list maintained by `pushd` and `popd`. Without flags it prints everything on ONE line separated by spaces (hard to read). `-v` ('verbose') puts each entry on its own line with a STACK INDEX in front (0 = top, the current directory). Those indexes are how you address specific stack slots: `pushd +N` rotates to entry N; `popd +N` removes entry N without changing directory. Useful related flags: `-c` CLEARS the entire stack; `-l` shows full paths instead of `~`-abbreviated ones; `-p` is like `-v` but without indexes. The stack is per-shell, lost on terminal close. The top entry (index 0) is always your current directory and matches `pwd`.",
    usage: "Inspecting what `pushd` has remembered before deciding which one to pop or rotate to. Sanity-checking your stack state when you've been bouncing around a lot.",
    examples: [
      "dirs -v  # numbered, one per line — the useful form",
      "dirs  # default: everything on one line",
      "dirs -c  # clear the entire stack",
      "dirs -l  # full paths, no ~ shortening",
      "pushd +2  # rotate to the entry shown as 2 in `dirs -v`",
      "popd +1  # remove entry 1 from the stack"
    ],
    memoryTip: "`dirs -v` = View the stack of dirs, numbered. Index 0 is always 'here'. To use the numbers, pair with `pushd +N` (rotate) or `popd +N` (remove).",
    outputExample: "$ pushd /tmp; pushd /var/log; dirs -v\n 0  /var/log\n 1  /tmp\n 2  ~/projects\n$ pushd +2\n~/projects /var/log /tmp",
    category: "NAVIGATION"
  },
  {
    id: "nav24",
    question: "Use `cd ~username` (tilde + username) to jump into another user's home directory",
    answer: "cd ~user",
    explanation: "The shell performs 'tilde expansion' on any word starting with `~`. By itself `~` becomes YOUR home directory (the value of `$HOME`). Followed by a username (`~alice`, `~root`) it becomes THAT user's home — the shell looks up the user in `/etc/passwd` to find where they live. Conventionally normal users live in `/home/USERNAME` and the root user in `/root`, but `~user` works regardless of the actual path. If the user doesn't exist, the `~user` is left unchanged (no error). Whether you can actually `cd` into someone else's home depends on permissions — most users keep their home `drwx------` (700), so only the owner and root can enter. Even when you can't `cd` in, `echo ~alice` still prints the path (it's pure shell expansion, no filesystem check).",
    usage: "Jumping to another user's home as root or sudoer. Looking up a user's home path (`echo ~alice`). Writing scripts that reference home directories by username.",
    examples: [
      "cd ~alice  # cd to alice's home (needs permission)",
      "cd ~root  # cd to root's home (typically /root) — needs sudo or root shell",
      "echo ~alice  # print the path WITHOUT cd-ing",
      "ls ~alice/Documents  # list a file under another user's home",
      "sudo -u alice ls ~alice  # list as alice to bypass permission walls",
      "getent passwd alice | cut -d: -f6  # alternative: look up the home directly"
    ],
    memoryTip: "`~` alone = your home. `~user` = that user's home. The shell turns the tilde into a path BEFORE the command runs — confirm with `echo ~user`.",
    outputExample: "$ echo ~alice\n/home/alice\n$ echo ~root\n/root\n$ sudo -u alice bash -c 'cd ~ && pwd'\n/home/alice",
    category: "NAVIGATION"
  },
  {
    id: "nav25",
    question: "Use the `realpath` command to print the ABSOLUTE, canonical path of a file (symlinks and `..` resolved)",
    answer: "realpath filename",
    explanation: "`realpath` converts any path — relative, with `..`, with symlinks — into the single canonical absolute path it actually refers to. 'Canonical' means: starts with `/`, no `.`/`..`, all symlinks resolved to their final target. By default the path you give must exist (`-e` makes that strict; `-m` allows missing components). Useful flags: `--relative-to=DIR` prints the path RELATIVE to another directory (great for building portable references); `-s` ('strip') keeps symlinks unresolved (so it just normalizes the path). `realpath` is part of GNU coreutils — preinstalled on every modern distro. The cousin `readlink -f` does almost the same job but is more about following symlinks specifically. In scripts, `SCRIPT_DIR=\"$(realpath \"$(dirname \"$0\")\")\"` is the canonical 'where is this script?' idiom.",
    usage: "Getting a stable absolute path in a script regardless of where it was launched. Resolving symlinks to find the actual file. Producing portable relative paths between two directories.",
    examples: [
      "realpath ./config.yml  # absolute path of a relative one",
      "realpath /usr/bin/python  # follow symlinks to the real binary",
      "realpath --relative-to=/etc /etc/nginx/nginx.conf  # → nginx/nginx.conf",
      "realpath -e mightnotexist.txt  # error out if path doesn't exist",
      "realpath -s symlink.txt  # don't follow symlinks (just normalize)",
      "DIR=\"$(realpath \"$(dirname \"$0\")\")\"  # script's own dir, in a script"
    ],
    memoryTip: "`realpath` = the REAL path. Pair-think: `realpath` (canonical absolute) vs `readlink -f` (follow links). For a script's own location, `realpath \"$0\"` is bullet-proof.",
    outputExample: "$ pwd\n/home/alice\n$ realpath ./projects/../docs/notes.md\n/home/alice/docs/notes.md\n$ realpath /usr/bin/python\n/usr/bin/python3.12\n$ realpath --relative-to=/etc /etc/nginx/nginx.conf\nnginx/nginx.conf",
    category: "NAVIGATION"
  },
  {
    id: "nav26",
    question: "Use `readlink -f symlink` to follow a chain of symlinks all the way to the final real file and print its path",
    answer: "readlink -f symlink",
    explanation: "A symlink is a tiny file whose 'contents' is another path — open the symlink and you transparently open the target. Symlinks can CHAIN: link → link → real file. Plain `readlink` prints only the IMMEDIATE target string (one hop). `readlink -f` ('follow') keeps following until it reaches a real file (or dies trying), and prints that final canonical path. The `-f` mode tolerates missing components except for the LAST one; use `-e` ('exists') for stricter checking that fails on any missing piece, or `-m` to allow even the last component to be missing. Common use: many distros put `/usr/bin/vi`, `/usr/bin/python` etc. as symlinks managed by the `alternatives` system — `readlink -f` reveals which binary actually runs. Closely related: `realpath` (almost the same thing, slightly different defaults).",
    usage: "Finding the real binary behind `/usr/bin/foo`. Debugging an `alternatives`-managed command. Resolving a chain of `current → release-v2 → release-v2.0.1` deploy symlinks.",
    examples: [
      "readlink -f /usr/bin/vi  # final binary at the end of the chain",
      "readlink /usr/bin/vi  # ONE hop only (e.g. /etc/alternatives/vi)",
      "readlink -e /usr/bin/vi  # error if any part of the chain is broken",
      "ls -l /usr/bin/vi  # see the immediate link without using readlink",
      "find / -xtype l 2>/dev/null  # find all BROKEN symlinks on the system",
      "readlink -f /opt/app/current  # follow a deploy 'current' symlink"
    ],
    memoryTip: "`readlink -f` = Follow the link, fully. Without `-f`, you get just the first hop (often `/etc/alternatives/...`) which is rarely what you want. For a quick view of the immediate link target, plain `ls -l` shows `link -> target`.",
    outputExample: "$ ls -l /usr/bin/vi\nlrwxrwxrwx 1 root root 20 May 14 /usr/bin/vi -> /etc/alternatives/vi\n$ readlink /usr/bin/vi\n/etc/alternatives/vi\n$ readlink -f /usr/bin/vi\n/usr/bin/vim.basic",
    category: "NAVIGATION"
  },
  {
    id: "nav27",
    question: "Use `ls -d */` to list ONLY the subdirectories of the current directory (no regular files)",
    answer: "ls -d */",
    explanation: "Two pieces working together: `*/` is a SHELL GLOB pattern that matches only names ending in a slash — and only directories can match (the kernel attaches the trailing slash conceptually). `-d` tells `ls` 'show the directory entry itself, don't recurse INTO it' — without `-d`, `ls` would list the CONTENTS of each matched directory instead of the names. Combining the two gets you exactly directory names. Note that `*/` doesn't match hidden directories (those starting with `.`); for those use `ls -d .*/ */`. To include long format (permissions, size, date) use `ls -ld */`. Alternative for the same job: `find . -maxdepth 1 -type d` (filters by type, more explicit).",
    usage: "Getting a clean folder-only listing for a script. Counting subdirectories. Eyeballing project structure without file clutter.",
    examples: [
      "ls -d */  # visible subdirectories only",
      "ls -d .*/ */  # include hidden directories too",
      "ls -ld */  # long format (perms, owner, date)",
      "ls -d */ | wc -l  # how many subdirs are there?",
      "find . -maxdepth 1 -type d  # alternative using find",
      "echo */  # the raw shell glob (same matches, space-separated)"
    ],
    memoryTip: "`-d` = don't Descend (show the entry, not its contents). `*/` = glob that only matches directories (the trailing slash is the trick). Without `-d`, `ls */` would dump every directory's contents instead of names.",
    outputExample: "$ ls -d */\napp/  docs/  node_modules/  src/  tests/\n$ ls -ld */\ndrwxr-xr-x 2 alice alice 4096 May 17 09:00 app/\ndrwxr-xr-x 3 alice alice 4096 May 16 18:30 docs/\ndrwxr-xr-x 9 alice alice 4096 May 15 10:02 node_modules/",
    category: "NAVIGATION"
  },
  {
    id: "nav28",
    question: "Use `ls -1` (digit one) to print one filename per line — the friendly format for piping into other commands",
    answer: "ls -1",
    explanation: "By default `ls` prints filenames in multi-column format when output is a terminal, and one-per-line when output is a pipe — so for INTERACTIVE viewing it's columned, but `ls | wc -l` already 'just works'. `-1` (the digit one, NOT lowercase L) forces one-entry-per-line ALWAYS, even on a terminal. Useful when you want the output to look identical interactive vs piped, or when copy-pasting needs newline separators. The CAUTION: don't use `ls` output to feed file-processing scripts — filenames can contain spaces, newlines, or `*`/`?` that confuse later commands. The robust alternatives are `find -print0` paired with `xargs -0`, or shell globs. But for human-readable counts and simple lists, `ls -1` is fine. Combine with `-a` to include dotfiles, `-A` for almost-all, `-r` to reverse, `-t` to sort by time.",
    usage: "Producing a clean newline-separated list to scroll through. Counting items with `wc -l`. Feeding into `grep` to filter.",
    examples: [
      "ls -1  # one per line",
      "ls -1 *.log | wc -l  # count matching files",
      "ls -1 | grep '^test_'  # filter to lines starting with 'test_'",
      "ls -1a  # one per line, include dotfiles",
      "ls -1t | head  # newest 10, one per line",
      "for f in *; do echo \"$f\"; done  # safer alternative when filenames are weird"
    ],
    memoryTip: "`-1` is the digit ONE (looks like a lowercase L — easy mistake). Mnemonic: 'one column, one entry per line'. For scripts that handle weird filenames safely, prefer shell globs (`for f in *`) over `ls`.",
    outputExample: "$ ls -1\nREADME.md\napp\ndocs\npackage.json\nsrc\ntests\n$ ls -1 *.md | wc -l\n3",
    category: "NAVIGATION"
  },
  {
    id: "nav29",
    question: "Use `find . -maxdepth 2 -type d` to list every subdirectory but stop descending after 2 levels",
    answer: "find . -maxdepth 2 -type d",
    explanation: "`find` normally walks a directory tree to UNLIMITED depth — which is overkill for an overview and slow on huge trees. `-maxdepth N` tells `find` to stop after N levels (the starting directory `.` is depth 0). So `-maxdepth 1` is 'just this directory's immediate contents'; `-maxdepth 2` is 'this directory plus its grandchildren'. `-type d` filters the matches to only DIRECTORIES (other types: `f` regular file, `l` symlink, `c` character device, `b` block device, `p` named pipe, `s` socket). The starting `.` itself is included unless you exclude it with `-mindepth 1`. Order matters: `-maxdepth` MUST appear before other tests for predictable behavior. `-prune` is the more powerful way to skip entire subtrees by name (e.g. always skip `node_modules`).",
    usage: "Quickly mapping a project's layout. Avoiding a slow descent into giant folders like `node_modules`. Getting a controlled listing of only the top few levels.",
    examples: [
      "find . -maxdepth 2 -type d  # the everyday shallow dir overview",
      "find . -maxdepth 1 -type d ! -path .  # JUST direct children, no '.'",
      "find . -mindepth 1 -maxdepth 1 -type d  # same idea, cleaner",
      "find . -maxdepth 3 -name node_modules -prune -o -type d -print  # skip node_modules",
      "find /etc -maxdepth 2 -type f -name '*.conf'  # shallow config search",
      "find . -maxdepth 2 -type d | wc -l  # count directories at depth ≤ 2"
    ],
    memoryTip: "`-maxdepth N` caps recursion. `.` (the start) is depth 0; immediate children are depth 1. Put `-maxdepth` BEFORE other tests for clarity. For 'skip this subtree entirely' use `-prune` instead.",
    outputExample: "$ find . -maxdepth 2 -type d\n.\n./src\n./src/lib\n./docs\n./tests\n./tests/fixtures",
    category: "NAVIGATION"
  },
  {
    id: "nav30",
    question: "Use `(cd /path && command)` — parentheses + `cd` — to run a command in another directory without permanently changing yours",
    answer: "(cd /tmp && command)",
    explanation: "Parentheses `(...)` create a SUBSHELL — a child process that inherits the current environment but is otherwise independent. Anything that changes state inside (current directory, exported variables, shell options) affects only the subshell, never the parent. So `(cd /tmp && ls)` jumps to `/tmp`, runs `ls`, and the parent shell stays right where it was — no need to remember to `cd` back. The `&&` ensures `ls` only runs if `cd` succeeded (if `/tmp` didn't exist, `&&` short-circuits). Useful even when you DO want side effects elsewhere: `(cd build && make)` runs make in `build/` without polluting your `$PWD`. Compare to braces `{ cd /tmp; ls; }` which run in the CURRENT shell (no subshell, so the `cd` sticks). Subshells cost a fork, but that's negligible.",
    usage: "Running a single command in another directory without bothering to cd back. Sandboxing environment changes in scripts. Running multiple commands in a temp dir that cleans up automatically.",
    examples: [
      "(cd /tmp && ls)  # ls in /tmp, stay where you are",
      "(cd build && make)  # build without polluting your shell's CWD",
      "(cd /etc && grep -r 'password' .)  # one-off grep in /etc",
      "(cd $(mktemp -d) && wget URL && ls)  # download in a throwaway dir",
      "{ cd /tmp; ls; }  # DIFFERENT: braces = NOT a subshell, cd persists",
      "(set -e; cd /tmp && rm -f *.tmp)  # subshell-local 'set -e'"
    ],
    memoryTip: "Parens `(...)` = SUBSHELL sandbox; changes inside (including `cd`) don't leak out. Braces `{...}` = same shell, changes DO persist. Pair-think: parens for 'temporary side trip', braces for 'group commands'.",
    outputExample: "$ pwd\n/home/alice\n$ (cd /tmp && pwd && ls | head -2)\n/tmp\nsystemd-private-abc\nvscode-ipc.sock\n$ pwd\n/home/alice",
    category: "NAVIGATION"
  },

  // FILE OPS — extended
  {
    id: "file26",
    question: "Install a script into /usr/local/bin with executable permissions",
    answer: "install -m 755 script.sh /usr/local/bin/",
    explanation: "install copies files and sets permissions, ownership, and timestamps in one step. -m sets the mode directly.",
    usage: "Use in Makefiles and install scripts when you want the right permissions in one atomic step.",
    examples: [
      "install -m 755 script.sh /usr/local/bin/",
      "install -d -m 750 /opt/myapp  # Create dir with perms",
      "install -o root -g root -m 644 conf /etc/conf"
    ],
    memoryTip: "install = cp + chmod + chown in one shot.",
    outputExample: "$ sudo install -m 755 script.sh /usr/local/bin/\n$ ls -l /usr/local/bin/script.sh\n-rwxr-xr-x 1 root root 421 May 14 script.sh",
    category: "FILE OPS"
  },
  {
    id: "file27",
    question: "Empty a file without deleting it",
    answer: "truncate -s 0 filename",
    explanation: "truncate -s 0 sets the file size to zero bytes, preserving the inode, permissions, and ownership.",
    usage: "Clear a log that an open process is still writing to without breaking its file handle.",
    examples: [
      "truncate -s 0 app.log  # Empty the log",
      ": > app.log  # Same idea with shell redirection",
      "truncate -s 1G blob  # Grow/shrink to exact size"
    ],
    memoryTip: "truncate -s 0 = chop the file down to 0 bytes.",
    outputExample: "$ truncate -s 0 app.log\n$ wc -c app.log\n0 app.log",
    category: "FILE OPS"
  },
  {
    id: "file28",
    question: "Create a 10 MiB file of zeros for testing",
    answer: "dd if=/dev/zero of=test.bin bs=1M count=10",
    explanation: "dd copies bs-sized blocks from input to output. /dev/zero supplies endless null bytes; here we write 10 blocks of 1 MiB each.",
    usage: "Generate test files, scratch disks, swap files, or measure I/O speed.",
    examples: [
      "dd if=/dev/zero of=test.bin bs=1M count=10",
      "dd if=/dev/urandom of=random.bin bs=1M count=5  # Random data",
      "dd if=image.iso of=/dev/sdX bs=4M status=progress  # Write ISO to USB"
    ],
    memoryTip: "dd = 'data duplicator' (or, jokingly, 'disk destroyer' — double-check of=).",
    outputExample: "$ dd if=/dev/zero of=test.bin bs=1M count=10\n10+0 records in\n10+0 records out\n10485760 bytes (10 MB) copied, 0.012 s, 874 MB/s",
    category: "FILE OPS"
  },
  {
    id: "file29",
    question: "Create nested directories app/{logs,data}/2026 in one go",
    answer: "mkdir -p app/{logs,data}/2026",
    explanation: "-p makes parents as needed and the brace expansion app/{logs,data}/2026 expands to two paths before mkdir runs.",
    usage: "Scaffold a directory layout in one command.",
    examples: [
      "mkdir -p app/{logs,data}/2026",
      "mkdir -p {dev,staging,prod}/{config,secrets}",
      "mkdir -p project/src/{lib,tests}"
    ],
    memoryTip: "Brace expansion = combinations; -p = make parents.",
    outputExample: "$ mkdir -p app/{logs,data}/2026\n$ tree app\napp\n├── data\n│   └── 2026\n└── logs\n    └── 2026",
    category: "FILE OPS"
  },
  {
    id: "file30",
    question: "Make a quick backup copy of config.yml as config.yml.bak",
    answer: "cp config.yml{,.bak}",
    explanation: "Brace expansion expands config.yml{,.bak} into two arguments — the original and original+.bak — which cp then uses as src and dst.",
    usage: "Snapshot a config before editing.",
    examples: [
      "cp config.yml{,.bak}  # Quick backup",
      "mv file{,.old}  # Same trick to rename",
      "cp -a /etc/nginx{,.bak}  # Recursive copy with attrs"
    ],
    memoryTip: "{,.bak} = expand to '' and '.bak' — instant backup.",
    outputExample: "$ cp config.yml{,.bak}\n$ ls\nconfig.yml  config.yml.bak",
    category: "FILE OPS"
  },
  {
    id: "file31",
    question: "Find and delete all .tmp files under the current directory",
    answer: "find . -name '*.tmp' -delete",
    explanation: "find walks the tree, matches *.tmp, and -delete removes each match without spawning rm.",
    usage: "Clean up scratch files before committing.",
    examples: [
      "find . -name '*.tmp' -delete",
      "find /var/cache -mtime +30 -delete  # Old cache files",
      "find . -type d -empty -delete  # Drop empty dirs"
    ],
    memoryTip: "find ... -delete = filter then remove, no rm pipe needed.",
    outputExample: "$ find . -name '*.tmp' -delete\n$ find . -name '*.tmp'\n(none)",
    category: "FILE OPS"
  },
  {
    id: "file32",
    question: "Show detailed metadata (size, blocks, inode, timestamps) for a file",
    answer: "stat filename",
    explanation: "stat prints inode-level info: device, inode, links, mode, owner, size, allocated blocks, and atime/mtime/ctime.",
    usage: "Debug permission issues, see when a file was last modified, or check hard-link counts.",
    examples: [
      "stat config.yml  # Full metadata",
      "stat -c '%n %s %y' *.log  # Custom format",
      "stat -c '%a' file  # Octal permissions only"
    ],
    memoryTip: "stat = file statistics from the inode.",
    outputExample: "$ stat config.yml\n  File: config.yml\n  Size: 421       Blocks: 8\nAccess: (0644/-rw-r--r--)",
    category: "FILE OPS"
  },
  {
    id: "file33",
    question: "Force-replace an existing symlink to point somewhere new",
    answer: "ln -sf newtarget linkname",
    explanation: "-s makes it symbolic and -f removes any existing destination first, so the link is recreated to the new target.",
    usage: "Atomically retarget a 'current' symlink during a deploy.",
    examples: [
      "ln -sf /opt/app/releases/v2 /opt/app/current",
      "ln -sfn /target /linkname  # -n: don't follow if linkname is itself a dir",
      "ln -sf ../shared/log logs"
    ],
    memoryTip: "-s symbolic, -f force-replace.",
    outputExample: "$ ln -sf /opt/app/v2 /opt/app/current\n$ readlink /opt/app/current\n/opt/app/v2",
    category: "FILE OPS"
  },
  {
    id: "file34",
    question: "Extract just the filename from a full path",
    answer: "basename /var/log/syslog.1",
    explanation: "basename strips the leading directory components from a path and (optionally) a suffix.",
    usage: "In scripts when you need to derive output names from input paths.",
    examples: [
      "basename /var/log/syslog.1  # syslog.1",
      "basename /tmp/a.txt .txt  # a",
      "for f in *.md; do echo \"$(basename \"$f\" .md).html\"; done"
    ],
    memoryTip: "basename = the 'base' name with no directory.",
    outputExample: "$ basename /var/log/syslog.1\nsyslog.1",
    category: "FILE OPS"
  },
  {
    id: "file35",
    question: "Extract the directory portion of a path",
    answer: "dirname /var/log/syslog.1",
    explanation: "dirname strips the last path component, returning everything up to (but not including) the final slash.",
    usage: "Pair with basename in scripts to split a path into folder and filename.",
    examples: [
      "dirname /var/log/syslog.1  # /var/log",
      "cd \"$(dirname \"$0\")\"  # cd to the script's own dir",
      "mkdir -p \"$(dirname output/sub/file.txt)\""
    ],
    memoryTip: "dirname = the 'dir' portion of the name.",
    outputExample: "$ dirname /var/log/syslog.1\n/var/log",
    category: "FILE OPS"
  },

  // VIEWING TEXT — extended
  {
    id: "view21",
    question: "Display a CSV file aligned into pretty columns",
    answer: "column -t -s, file.csv",
    explanation: "column -t formats input into a table; -s, sets the input field separator to a comma.",
    usage: "Make CSV or other delimited data readable on the terminal.",
    examples: [
      "column -t -s, users.csv  # Comma separated",
      "mount | column -t  # Tabular mount info",
      "column -t -s$'\\t' tsvfile  # Tab separated"
    ],
    memoryTip: "column -t = tabular; -s = separator.",
    outputExample: "$ column -t -s, users.csv\nid  name   role\n1   alice  admin\n2   bob    user",
    category: "VIEWING TEXT"
  },
  {
    id: "view22",
    question: "View a binary file as a hex dump",
    answer: "xxd filename",
    explanation: "xxd renders bytes as side-by-side hex and ASCII columns, useful for inspecting binary data and file headers.",
    usage: "Identify file formats by magic bytes or debug binary protocols.",
    examples: [
      "xxd image.png | head  # First 256 bytes",
      "xxd -s 0x10 -l 32 file  # 32 bytes starting at offset 16",
      "xxd -r dump.hex > file  # Reverse a hex dump back to binary"
    ],
    memoryTip: "xxd = hex dump (think 'eXamine heX Dump').",
    outputExample: "$ xxd hello.png | head -1\n00000000: 8950 4e47 0d0a 1a0a 0000 000d 4948 4452  .PNG........IHDR",
    category: "VIEWING TEXT"
  },
  {
    id: "view23",
    question: "Show non-printing characters and line endings in a file",
    answer: "cat -E filename",
    explanation: "cat -E appends a $ at the end of each line, making trailing spaces and missing final newlines visible.",
    usage: "Debug invisible whitespace issues that break configs or scripts.",
    examples: [
      "cat -E file.txt  # End-of-line markers",
      "cat -A file.txt  # Show tabs, EOLs, and non-print chars",
      "cat -T file.txt  # Tabs as ^I"
    ],
    memoryTip: "-E = End-of-line $ marker.",
    outputExample: "$ cat -E sample.txt\nhello $\nworld   $",
    category: "VIEWING TEXT"
  },
  {
    id: "view24",
    question: "Page through a file with line numbers visible in less",
    answer: "less -N filename",
    explanation: "less is a forward/backward pager; -N adds line numbers on the left.",
    usage: "Reading logs or source files where you want to reference specific lines.",
    examples: [
      "less -N server.log  # Paged with line numbers",
      "less +F server.log  # Follow mode like tail -f",
      "less +/error server.log  # Jump to first match"
    ],
    memoryTip: "-N = numbered lines in less.",
    outputExample: "$ less -N server.log\n      1 [INFO] starting...\n      2 [WARN] cache miss\n      3 [ERR] timeout",
    category: "VIEWING TEXT"
  },
  {
    id: "view25",
    question: "Print every line except the last 5 of a file",
    answer: "head -n -5 filename",
    explanation: "Negative -n with head means 'all lines except the last N'.",
    usage: "Trim a trailer (signatures, copyright blocks) before processing.",
    examples: [
      "head -n -5 report.txt  # Skip last 5 lines",
      "head -n -1 csv  # Drop the trailer row",
      "head -c -100 file  # All but the last 100 bytes"
    ],
    memoryTip: "head -n -N = head excluding the last N lines.",
    outputExample: "$ head -n -2 file\nline 1\nline 2\nline 3",
    category: "VIEWING TEXT"
  },
  {
    id: "view26",
    question: "Print a file starting from line 5",
    answer: "tail -n +5 filename",
    explanation: "tail -n +N means 'starting at line N', useful for skipping headers.",
    usage: "Strip header rows from CSV exports before piping to awk or sort.",
    examples: [
      "tail -n +2 users.csv  # Skip CSV header",
      "tail -n +10 file  # From line 10 onward",
      "tail -n +5 file | head -n 3  # Lines 5-7"
    ],
    memoryTip: "tail -n +N = tail starting at line N (the + means 'from').",
    outputExample: "$ tail -n +2 users.csv\n1,alice,admin\n2,bob,user",
    category: "VIEWING TEXT"
  },
  {
    id: "view27",
    question: "Print lines 10 through 20 of a file using sed",
    answer: "sed -n '10,20p' filename",
    explanation: "sed -n suppresses default output; the '10,20p' command prints only the lines in that range.",
    usage: "Slice a specific window out of a big file without loading it all into a pager.",
    examples: [
      "sed -n '10,20p' file",
      "sed -n '/START/,/END/p' file  # Between patterns",
      "sed -n '50p' file  # Just line 50"
    ],
    memoryTip: "-n + Np = quiet, then print only line N (or range).",
    outputExample: "$ sed -n '2,3p' file\nline 2\nline 3",
    category: "VIEWING TEXT"
  },
  {
    id: "view28",
    question: "Print the 5th line of a file using awk",
    answer: "awk 'NR==5' filename",
    explanation: "NR is awk's built-in record number. Matching NR==5 prints only that line.",
    usage: "Quick one-liner when you know the exact line number you want.",
    examples: [
      "awk 'NR==5' file",
      "awk 'NR>=10 && NR<=20' file  # Range",
      "awk 'NR%10==0' file  # Every 10th line"
    ],
    memoryTip: "NR = number of records (lines) so far.",
    outputExample: "$ awk 'NR==5' file\nfifth line content",
    category: "VIEWING TEXT"
  },
  {
    id: "view29",
    question: "Compare two sorted files and show lines unique to each plus common",
    answer: "comm file1 file2",
    explanation: "comm reads two sorted files and prints three columns: lines only in file1, lines only in file2, lines in both.",
    usage: "Diff word lists, sorted IDs, or quick set comparisons.",
    examples: [
      "comm sorted1 sorted2",
      "comm -12 a b  # Lines in both",
      "comm -23 a b  # Only in a"
    ],
    memoryTip: "comm = common; suppress columns with -1/-2/-3.",
    outputExample: "$ comm a.txt b.txt\napple\n\tbanana\n\t\tcherry",
    category: "VIEWING TEXT"
  },
  {
    id: "view30",
    question: "Check whether two files are byte-for-byte identical",
    answer: "cmp file1 file2",
    explanation: "cmp does a byte-level compare and prints the first byte where they differ — silent and exit 0 if identical.",
    usage: "Lightweight binary equality check; faster than diff for big files.",
    examples: [
      "cmp build/a.out backup/a.out  # Quick equality check",
      "cmp -l a b  # List every differing byte",
      "cmp -s a b && echo same  # Silent for use in scripts"
    ],
    memoryTip: "cmp = compare bytes; silent = identical.",
    outputExample: "$ cmp a.bin b.bin\na.bin b.bin differ: byte 42, line 3",
    category: "VIEWING TEXT"
  },

  // PERMISSIONS — extended
  {
    id: "perm21",
    question: "Set the setuid bit on an executable so it runs as the file's owner",
    answer: "chmod u+s /usr/local/bin/tool",
    explanation: "u+s adds the setuid bit, making the program execute with the privileges of its owner (often root). Use with extreme caution.",
    usage: "Rare — only for trusted binaries that need elevated privileges (e.g. passwd).",
    examples: [
      "chmod u+s tool  # Setuid",
      "chmod 4755 tool  # Same thing in octal (the 4)",
      "find / -perm -4000 -type f  # Audit setuid binaries"
    ],
    memoryTip: "u+s = setUid; the 4 in 4755 is the SUID octal bit.",
    outputExample: "$ ls -l tool\n-rwsr-xr-x 1 root root 12K tool",
    category: "PERMISSIONS"
  },
  {
    id: "perm22",
    question: "Set the setgid bit on a directory so new files inherit its group",
    answer: "chmod g+s directory",
    explanation: "g+s on a directory makes every file created inside inherit the directory's group instead of the creator's primary group.",
    usage: "Shared project directories where all files should belong to a 'dev' group.",
    examples: [
      "chmod g+s /srv/shared",
      "chmod 2775 /srv/shared  # 2 = setgid octal",
      "find / -perm -2000 -type d  # Audit setgid dirs"
    ],
    memoryTip: "g+s on a dir = group-inherit-sticky; 2 is the SGID bit.",
    outputExample: "$ ls -ld shared\ndrwxr-sr-x 2 user dev 4096 shared",
    category: "PERMISSIONS"
  },
  {
    id: "perm23",
    question: "Show your user id, group id, and group memberships",
    answer: "id",
    explanation: "id prints uid, gid, and the list of supplementary groups for the current (or given) user.",
    usage: "Verify which groups a user is in before granting access.",
    examples: [
      "id  # Current user",
      "id alice  # Specific user",
      "id -nG  # Just group names"
    ],
    memoryTip: "id = identity (uid + gids).",
    outputExample: "$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),130(docker)",
    category: "PERMISSIONS"
  },
  {
    id: "perm24",
    question: "Start a new shell with a different primary group",
    answer: "newgrp groupname",
    explanation: "newgrp launches a subshell where the named group becomes your effective primary group, so newly created files belong to it.",
    usage: "Switch to a project group temporarily without logging out.",
    examples: [
      "newgrp docker  # Use docker group without re-login",
      "newgrp dev  # Files you create now belong to 'dev'",
      "exit  # Leave the newgrp shell"
    ],
    memoryTip: "newgrp = new (primary) group for this shell.",
    outputExample: "$ newgrp docker\n$ id -gn\ndocker",
    category: "PERMISSIONS"
  },
  {
    id: "perm25",
    question: "Change the current user's password",
    answer: "passwd",
    explanation: "passwd prompts for the current password, then the new one twice; with sudo and a username, root can change any user's password.",
    usage: "Rotate your password periodically or after a leak.",
    examples: [
      "passwd  # Change your own",
      "sudo passwd alice  # As root, change alice's",
      "sudo passwd -l alice  # Lock an account"
    ],
    memoryTip: "passwd = the password utility.",
    outputExample: "$ passwd\nChanging password for alice.\nCurrent password: \nNew password:",
    category: "PERMISSIONS"
  },
  {
    id: "perm26",
    question: "Safely edit the sudoers file",
    answer: "sudo visudo",
    explanation: "visudo locks the sudoers file, opens it in your editor, and validates the syntax before saving — preventing a broken sudo.",
    usage: "Any time you grant or revoke sudo rights.",
    examples: [
      "sudo visudo  # Edit /etc/sudoers",
      "sudo visudo -f /etc/sudoers.d/alice  # Edit a drop-in",
      "sudo visudo -c  # Just syntax-check existing file"
    ],
    memoryTip: "visudo = vi for sudoers, with safety checks.",
    outputExample: "$ sudo visudo\n# (editor opens with /etc/sudoers; saves only if syntax is valid)",
    category: "PERMISSIONS"
  },
  {
    id: "perm27",
    question: "Generate a modern SSH keypair (ed25519)",
    answer: "ssh-keygen -t ed25519",
    explanation: "ssh-keygen creates an asymmetric keypair; -t ed25519 picks the small, fast modern algorithm preferred over older RSA defaults.",
    usage: "Set up passwordless SSH and signing.",
    examples: [
      "ssh-keygen -t ed25519 -C 'work@laptop'  # With a comment",
      "ssh-keygen -t ed25519 -f ~/.ssh/work  # Custom filename",
      "ssh-keygen -p -f ~/.ssh/id_ed25519  # Change passphrase"
    ],
    memoryTip: "ssh-keygen -t ed25519 = generate modern SSH key.",
    outputExample: "$ ssh-keygen -t ed25519\nGenerating public/private ed25519 key pair.\nEnter file in which to save the key (~/.ssh/id_ed25519):",
    category: "PERMISSIONS"
  },
  {
    id: "perm28",
    question: "Show password-aging info for a user",
    answer: "sudo chage -l alice",
    explanation: "chage manages password aging; -l lists the current settings (last change, expiry, warning days).",
    usage: "Audit compliance with password rotation policies.",
    examples: [
      "sudo chage -l alice",
      "sudo chage -M 90 alice  # Force rotation every 90 days",
      "sudo chage -E 2026-12-31 alice  # Set account expiry"
    ],
    memoryTip: "chage = change age (password lifetime).",
    outputExample: "$ sudo chage -l alice\nLast password change                : May 14, 2026\nPassword expires                    : never",
    category: "PERMISSIONS"
  },
  {
    id: "perm29",
    question: "Show your umask in symbolic (rwx) form",
    answer: "umask -S",
    explanation: "umask without args shows the octal mask; -S prints the implied permissions in symbolic form for readability.",
    usage: "Confirm what permissions new files will get in the current shell.",
    examples: [
      "umask -S  # u=rwx,g=rx,o=rx",
      "umask  # Octal form (e.g. 0022)",
      "umask 027  # Tighten to no world access"
    ],
    memoryTip: "-S = Symbolic umask display.",
    outputExample: "$ umask -S\nu=rwx,g=rx,o=rx",
    category: "PERMISSIONS"
  },
  {
    id: "perm30",
    question: "Run a single command as another user",
    answer: "sudo -u alice command",
    explanation: "sudo -u runs the command as the specified user instead of root, useful for testing as an unprivileged account.",
    usage: "Run scripts or web requests as the service user without logging out.",
    examples: [
      "sudo -u www-data php artisan migrate",
      "sudo -u postgres psql",
      "sudo -u alice -i  # Interactive login shell"
    ],
    memoryTip: "sudo -u USER = substitute user.",
    outputExample: "$ sudo -u www-data whoami\nwww-data",
    category: "PERMISSIONS"
  },

  // PIPES & REDIRECT — extended
  {
    id: "pipe21",
    question: "Pipe both stdout and stderr from a command into grep",
    answer: "command 2>&1 | grep error",
    explanation: "2>&1 duplicates stderr onto stdout so the pipe carries both streams, then grep filters the combined output.",
    usage: "Search the full output of a chatty command for a keyword without missing errors.",
    examples: [
      "make 2>&1 | grep -i error",
      "command 2>&1 | tee build.log",
      "{ cmd1; cmd2; } 2>&1 | less"
    ],
    memoryTip: "2>&1 = redirect fd 2 (stderr) into fd 1 (stdout).",
    outputExample: "$ make 2>&1 | grep -i error\nerror: missing semicolon at line 42",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe22",
    question: "Make a pipeline fail if any stage fails, not just the last",
    answer: "set -o pipefail",
    explanation: "Normally a pipeline's exit code is the last command's. pipefail changes it to the rightmost non-zero exit code, so early failures aren't masked.",
    usage: "Always set in scripts that pipe through grep/awk/head where you care if upstream broke.",
    examples: [
      "set -o pipefail",
      "set -euo pipefail  # Strict mode bundle",
      "trap 'echo failed at $LINENO' ERR"
    ],
    memoryTip: "pipefail = the pipe's exit code reflects any stage that failed.",
    outputExample: "$ set -o pipefail; false | true; echo $?\n1",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe23",
    question: "Run one command for each line of a file, substituting it into a placeholder",
    answer: "xargs -I {} cmd {} < list.txt",
    explanation: "xargs -I {} replaces {} with each input token; cmd is invoked once per line with that argument in place of the placeholder.",
    usage: "Apply an arbitrary command to a list of inputs that you can't just append.",
    examples: [
      "cat urls.txt | xargs -I {} curl -O {}",
      "find . -name '*.bak' | xargs -I {} mv {} /tmp/",
      "xargs -I {} echo 'processing {}' < jobs.txt"
    ],
    memoryTip: "-I {} = the placeholder gets each input substituted in.",
    outputExample: "$ echo -e 'a\\nb' | xargs -I {} echo hi {}\nhi a\nhi b",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe24",
    question: "Run up to 4 commands in parallel from a list of inputs",
    answer: "xargs -P 4 -n 1 cmd < list.txt",
    explanation: "-P 4 runs four xargs children at once; -n 1 passes one input per invocation. Together you get a quick parallel pool.",
    usage: "Speed up an embarrassingly-parallel batch job like downloading many URLs.",
    examples: [
      "cat urls.txt | xargs -P 8 -n 1 wget",
      "ls *.flac | xargs -P 4 -I {} ffmpeg -i {} -codec:a libmp3lame {}.mp3",
      "seq 1 100 | xargs -P 16 -n 1 -I {} curl -s api/{}"
    ],
    memoryTip: "-P = parallel workers; -n = inputs per call.",
    outputExample: "$ time seq 1 4 | xargs -P 4 -n 1 sleep\nreal    0m1.012s",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe25",
    question: "Create a named pipe (FIFO) called /tmp/myfifo",
    answer: "mkfifo /tmp/myfifo",
    explanation: "A named pipe (FIFO) lives in the filesystem; writers and readers can connect to it asynchronously without sharing a parent process.",
    usage: "Stream data between unrelated programs without a temp file.",
    examples: [
      "mkfifo /tmp/myfifo",
      "cat file > /tmp/myfifo &  # Writer",
      "grep error < /tmp/myfifo  # Reader"
    ],
    memoryTip: "mkfifo = make a named (filesystem-visible) FIFO pipe.",
    outputExample: "$ mkfifo /tmp/myfifo\n$ ls -l /tmp/myfifo\nprw-r--r-- 1 user user 0 May 14 myfifo",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe26",
    question: "Send all output from the rest of a script to a log file",
    answer: "exec > script.log 2>&1",
    explanation: "exec without a command redirects the current shell's file descriptors, so every command after that line writes to the log.",
    usage: "Top of a cron or systemd script to capture everything in one place.",
    examples: [
      "exec > /var/log/job.log 2>&1",
      "exec >> /var/log/job.log 2>&1  # Append",
      "exec > >(tee -a log) 2>&1  # And to terminal too"
    ],
    memoryTip: "exec > file = from now on, stdout goes here.",
    outputExample: "$ cat job.sh\nexec > job.log 2>&1\necho 'running'\n$ ./job.sh\n$ cat job.log\nrunning",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe27",
    question: "Truncate (or create) a file via redirection",
    answer: ": > filename",
    explanation: "The colon is a no-op command that produces no output; redirecting its output to a file opens it for writing, which truncates or creates it.",
    usage: "Clear a log file without rm or truncate.",
    examples: [
      ": > app.log  # Truncate",
      "> app.log  # Some shells allow this shorthand",
      ": >> file  # Just ensure file exists (touch alternative)"
    ],
    memoryTip: "Colon = silent true; > = open empty for writing.",
    outputExample: "$ : > app.log\n$ wc -c app.log\n0 app.log",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe28",
    question: "Suppress just stderr from a noisy command",
    answer: "command 2>/dev/null",
    explanation: "Redirecting fd 2 to /dev/null silently discards error messages while leaving stdout intact.",
    usage: "Hide expected 'permission denied' noise from find without losing real output.",
    examples: [
      "find / -name target 2>/dev/null",
      "command 2>/dev/null | grep something",
      "command 2>>error.log  # Or capture them instead"
    ],
    memoryTip: "2>/dev/null = drop stderr into the void.",
    outputExample: "$ find / -name passwd 2>/dev/null | head -1\n/etc/passwd",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe29",
    question: "Append a command's output to a log via tee, while still seeing it",
    answer: "command | tee -a app.log",
    explanation: "tee writes to both stdout and a file; -a appends instead of overwriting.",
    usage: "Watch live output and keep a copy for later.",
    examples: [
      "make 2>&1 | tee -a build.log",
      "tail -f /var/log/syslog | tee saved.log",
      "echo hi | tee -a a.log b.log"
    ],
    memoryTip: "tee = T-junction in the pipe; -a = append.",
    outputExample: "$ echo hello | tee -a hi.log\nhello\n$ cat hi.log\nhello",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe30",
    question: "Capture stdout into a variable in bash",
    answer: "var=$(command)",
    explanation: "Command substitution $(...) runs the command and returns its stdout (trailing newlines stripped) as a string for assignment.",
    usage: "Use a command's output as input to another step in a script.",
    examples: [
      "now=$(date +%F)",
      "files=$(ls *.log)  # Word-split-prone; prefer arrays",
      "mapfile -t lines < <(grep error log)  # Better for multi-line"
    ],
    memoryTip: "$(...) = capture command stdout into a value.",
    outputExample: "$ user=$(whoami) && echo $user\nalice",
    category: "PIPES & REDIRECT"
  },

  // PROCESSES — extended
  {
    id: "proc21",
    question: "Start a long-running job that keeps running after you log out using `nohup command &`",
    answer: "nohup command &",
    explanation: "When you close a terminal (or your SSH connection drops), the kernel sends SIGHUP ('hangup' — signal 1) to every process attached to that terminal, which by default kills them. `nohup` ('no hangup') is a tiny wrapper program that launches your command with SIGHUP IGNORED, so it survives the terminal closing. The `&` at the end backgrounds it so you get your shell back immediately — important because `nohup` itself does NOT background, it only handles the signal. `nohup` also redirects: it detaches stdin from the terminal, and (if you didn't redirect) sends stdout and stderr to a file called `nohup.out` in the current directory (or `~/nohup.out` if cwd isn't writable). It prints a one-line notice telling you this. ALTERNATIVES: `disown` (proc22) after `&` does the same thing for a job already running. `tmux`/`screen` (proc23) give you a full detachable session — better for interactive work. `systemd-run --user --scope ...` for serious 'I want this to be a real service' use.",
    usage: "You're SSH'd into a server, kicked off a 6-hour data import, and don't want it to die if your laptop loses WiFi. Running a long-running training job on a shared box without keeping your terminal open. Quick one-shot daemonization without writing a systemd unit.",
    examples: [
      "nohup ./backup.sh &  # output goes to nohup.out by default",
      "nohup python serve.py > serve.log 2>&1 &  # redirect output explicitly",
      "nohup make all > build.log 2>&1 & disown  # belt and suspenders: nohup AND disown",
      "nohup bash -c 'sleep 30; rm -rf /tmp/cache; echo done' > /tmp/cleanup.log 2>&1 &  # delayed cleanup",
      "ssh server 'nohup ./long.sh > out.log 2>&1 & echo $!'  # kick off remotely, get the PID",
      "tail -f nohup.out  # follow the default log file while the job runs"
    ],
    memoryTip: "`nohup` = NO HangUP. Always pair with `&` to background. Always redirect output (`> log 2>&1`) unless you're happy with `nohup.out`. For serious detached use prefer `tmux`/`screen` (proc23) or a `systemd` user service. After-the-fact alternative: background normally then `disown` (proc22).",
    outputExample: "$ nohup ./long-import.sh &\n[1] 12345\nnohup: ignoring input and appending output to 'nohup.out'\n$ exit  # close SSH session\n# ...later, reconnect...\n$ ps -p 12345\n    PID TTY          TIME CMD\n  12345 ?        00:14:21 long-import.sh\n$ tail nohup.out\nRow 4123421 imported\nRow 4123422 imported",
    category: "PROCESSES"
  },
  {
    id: "proc22",
    question: "Detach an already-running background job from the shell with the `disown %job_number` builtin",
    answer: "disown %1",
    explanation: "`disown` is a SHELL BUILTIN that removes a job from the current shell's JOB TABLE. Once disowned, the shell no longer tracks the job, no longer reports its status changes, and crucially does NOT send it SIGHUP when the shell exits — so the job survives logout. This is the 'I forgot to use `nohup`' rescue: you started something with `&`, now want to log off, and don't want to lose it. Difference from `nohup`: `nohup` works at LAUNCH time and also redirects output to `nohup.out`; `disown` works AFTER the job is already running but does NOT redirect — if the terminal closes, output going to the terminal is lost (or worse, the job dies trying to write to a vanished tty unless you redirect stdout/stderr beforehand). Best-practice rescue: background → `Ctrl+Z` if needed → `bg` → redirect output if it matters → `disown`. Flags: `disown %1` (one job), `disown -a` (all jobs), `disown -h %1` (keep in job table but mark not to receive SIGHUP).",
    usage: "You ran `./build.sh` without `&`, hit Ctrl+Z, did `bg`, and now want to log out without killing it. SSH dropping in 30 seconds and you have a critical job already running with `&` — quick `disown %1` and you're safe. Cleaning up the job table before exiting an interactive shell.",
    examples: [
      "long_task & disown  # one-liner: background AND disown immediately",
      "Ctrl+Z; bg; disown %1  # rescue a job you forgot to background",
      "disown -a  # disown every job at once before logging out",
      "disown -h %1  # keep in job table but stop SIGHUP delivery",
      "long_task > out.log 2>&1 & disown  # redirect first, then disown — output survives",
      "jobs  # before disowning, check which job number is which"
    ],
    memoryTip: "Compare with `nohup` (proc21): `nohup cmd &` works at LAUNCH (and handles output); `disown` works AFTER. Mnemonic: 'disown the kid so they can leave the house when the shell closes.' For interactive sessions, prefer `tmux` (proc23) — much more flexible.",
    outputExample: "$ sleep 1000 &\n[1] 4567\n$ jobs\n[1]+  Running                 sleep 1000 &\n$ disown %1\n$ jobs\n$ # (empty — the shell no longer tracks it, but it's still running)\n$ ps -p 4567\n    PID TTY          TIME CMD\n   4567 pts/2    00:00:00 sleep",
    category: "PROCESSES"
  },
  {
    id: "proc23",
    question: "Start a persistent named terminal session that survives disconnects with `tmux new -s work`",
    answer: "tmux new -s work",
    explanation: "`tmux` ('TERMINAL MULTIPLEXER') lets one terminal hold MULTIPLE shells you can split, switch between, DETACH from, and RE-ATTACH to later — even from a different machine. The key feature: a tmux session runs INSIDE the tmux SERVER (a daemon), so when your SSH drops, you reconnect and `tmux attach` to find your shells exactly as you left them. This makes `nohup`/`disown` mostly obsolete for interactive use. Vocabulary: a SESSION is the top-level container (name it with `-s`), it holds one or more WINDOWS (like tabs), each window holds one or more PANES (splits). The default PREFIX KEY is `Ctrl+b` — press and release, then type a command key. Essentials after the prefix: `d` detach, `c` new window, `n`/`p` next/previous window, `%` split vertically, `\"` split horizontally, `o` cycle panes, `x` close pane, `[` enter scroll/copy mode (q to exit). NOT pre-installed on most distros — `sudo apt install tmux`. Cousin: `screen` is the older alternative.",
    usage: "Long SSH session for development on a remote server — survive your laptop going to sleep. Running training jobs in tmux so you can detach and reattach over days. Pair programming over `tmux` shared sessions. Splitting one terminal into editor + logs + shell.",
    examples: [
      "tmux new -s work  # create a named session and attach to it",
      "Ctrl+b d  # detach (session keeps running)",
      "tmux ls  # list sessions: 'work: 3 windows (created Mon May 5 14:22:11 2025)'",
      "tmux attach -t work  # re-attach by name; -d to forcibly detach other clients",
      "tmux kill-session -t work  # stop a session and everything in it",
      "tmux new-session -d -s build './build.sh'  # start detached session running a command"
    ],
    memoryTip: "Naming sessions with `-s` is essential; nameless sessions get numbers and become impossible to identify. Detach = `Ctrl+b d`, list = `tmux ls`, attach = `tmux a` (short for attach). Learn one feature per week — start with split panes (`Ctrl+b %` and `Ctrl+b \"`).",
    outputExample: "$ tmux new -s work\n# (cleared screen, status bar at bottom: [work] 0:bash*  \"laptop\" 14:32 17-May-26)\n# work happens here, then Ctrl+b d\n[detached (from session work)]\n$ tmux ls\nwork: 1 windows (created Sun May 17 14:32:18 2026)\n$ tmux attach -t work\n# (you're back, exactly where you left off — even if a 6-hour command is still running)",
    category: "PROCESSES"
  },
  {
    id: "proc24",
    question: "Print the full signal name/number table (or look up a specific one) with the `kill -l` command",
    answer: "kill -l",
    explanation: "`kill -l` ('list') prints every signal the kernel supports with its NUMBER and NAME. About 30 standard signals plus REAL-TIME signals (RTMIN-RTMAX, 33-64). Standards: 1 SIGHUP, 2 SIGINT (Ctrl+C), 3 SIGQUIT (Ctrl+\\), 9 SIGKILL, 10 SIGUSR1, 11 SIGSEGV (segfault), 12 SIGUSR2, 13 SIGPIPE (writing to closed pipe), 14 SIGALRM, 15 SIGTERM, 17 SIGCHLD (child state change), 18 SIGCONT (continue), 19 SIGSTOP, 20 SIGTSTP (Ctrl+Z). Use `kill -l N` to translate a number to a name, or `kill -l NAME` for the reverse. Bash recognizes either form: `kill -9`, `kill -KILL`, `kill -SIGKILL` all do the same thing. Signal numbers differ between OSes — prefer names in portable scripts.",
    usage: "Before sending a signal, double-check 'what number is SIGUSR1?' with `kill -l USR1`. Reading a core dump message that says 'killed by signal 11' — translate to SIGSEGV. Writing a signal handler and need the full list. Confirming the kernel on this machine supports a particular signal.",
    examples: [
      "kill -l  # the whole signal table, four columns wide",
      "kill -l 15  # 'TERM' — translate number to name",
      "kill -l TERM  # '15' — translate name to number",
      "kill -l 9  # 'KILL'",
      "trap -l  # same idea from bash's `trap` builtin (signal handling)",
      "man 7 signal  # the canonical reference page with detailed semantics"
    ],
    memoryTip: "`kill -l` reads as 'kill list' — same letter that lists files in `ls`, jobs in `jobs`, etc. Pair it with `kill -SIGNAL PID` (proc17) — proc24 tells you WHICH signals exist, proc17 tells you HOW to send them.",
    outputExample: "$ kill -l\n 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP\n 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1\n11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM\n16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP\n21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ\n...\n$ kill -l 11\nSEGV\n$ kill -l TERM\n15",
    category: "PROCESSES"
  },
  {
    id: "proc25",
    question: "Change the priority of an ALREADY-RUNNING process with `sudo renice -n 5 -p PID`",
    answer: "sudo renice -n 5 -p 1234",
    explanation: "Counterpart to `nice` (proc19): where `nice -n N cmd` sets niceness at LAUNCH time, `renice` changes the niceness of a process that's already running. Same -20-to-+19 scale, same rule: only root can LOWER the value (raise actual priority); regular users can only INCREASE the value (lower priority) and only on their own processes. Targets: `-p PID` one process, `-u USER` every process owned by a user, `-g PGID` every process in a process group. Useful 'soft throttle' for runaway processes when you don't want to kill them outright. Note: `renice` is a separate executable (not a builtin) — it calls the `setpriority(2)` syscall. After renicing, verify with `ps -p PID -o pid,ni,cmd` or check the `NI` column in `top`. The change is INSTANT — the scheduler picks it up on the next decision cycle.",
    usage: "A nightly backup is running at niceness 0 and your interactive shell is laggy — `sudo renice -n 19 -p $(pgrep backup)` and the system feels normal again. A user's runaway script — `sudo renice -n 15 -u baduser` knocks them down across the board.",
    examples: [
      "sudo renice -n 5 -p 1234  # PID 1234 becomes more yielding",
      "renice -n 10 -p $$  # be nicer to the SYSTEM from THIS shell (and its children)",
      "sudo renice -n 19 -u nightly-backups  # whole user account, nicest priority",
      "sudo renice -n -5 -p 4567  # boost priority (root only)",
      "renice -n 15 -g 8421  # whole process group (e.g. all children of a daemon)",
      "ps -eo pid,ni,cmd --sort=ni | head  # confirm the change took effect"
    ],
    memoryTip: "Mnemonic: RE-NICE = change niceness LATER. Range/rules identical to `nice` (proc19). Decision tree: launching new? `nice`. Already running? `renice`. Don't own it or going below 0? `sudo renice`. Verify with the `NI` column (in ps, top, or htop).",
    outputExample: "$ ps -p 1234 -o pid,ni,cmd\n    PID  NI CMD\n   1234   0 ./build.sh\n$ sudo renice -n 10 -p 1234\n1234 (process ID) old priority 0, new priority 10\n$ ps -p 1234 -o pid,ni,cmd\n    PID  NI CMD\n   1234  10 ./build.sh\n$ renice -n -5 -p 1234\nrenice: failed to set priority for 1234 (process ID): Permission denied",
    category: "PROCESSES"
  },
  {
    id: "proc26",
    question: "Measure how long a command takes (wall-clock + CPU) with the `time` shell builtin (or `/usr/bin/time -v` for detail)",
    answer: "time command",
    explanation: "There are TWO `time`s on Linux. The bash BUILTIN (`time cmd`) prints three numbers when the command finishes: REAL (wall-clock — what your watch would show), USER (CPU seconds spent in user-mode code), SYS (CPU seconds spent in kernel calls on this process's behalf). USER+SYS is total CPU consumed; if USER+SYS < REAL, the process was waiting on I/O, network, or sleep; if USER+SYS > REAL, it used multiple cores in PARALLEL (very interesting!). The SEPARATE PROGRAM `/usr/bin/time` (GNU time) supports `-v` for VERBOSE output — adds maximum RSS (peak memory), context switches, page faults, exit status, and more — much more useful for performance debugging. Invoke as `/usr/bin/time` (full path) so bash doesn't intercept it as the builtin. Format customizable with `-f 'FORMAT'`. The builtin can time COMPOUND statements: `time { cmd1; cmd2; }` or `time (cmd1; cmd2)`. To time a pipeline: `time (cmd1 | cmd2)`. Caveat: `time cmd > file` redirects ONLY cmd's output, not the timing output, because the builtin prints to STDERR after.",
    usage: "Quick benchmarks ('which is faster, sed or awk?'), confirming a deployment script finished in expected time, or comparing two algorithms.",
    examples: [
      "time ./build.sh  # 3-line summary: real/user/sys",
      "time { sleep 1; sleep 1; }  # time a compound block (builtin)",
      "/usr/bin/time -v ./script.sh  # GNU time with memory, page faults, etc.",
      "/usr/bin/time -f 'elapsed=%E max-rss=%M kb' cmd  # custom format",
      "time (curl -s https://x.example | wc -c)  # time a pipeline",
      "for i in 1 2 3; do time cmd; done 2>&1 | grep real  # repeat + extract wall-clock"
    ],
    memoryTip: "Three numbers: REAL (your watch), USER (your code's CPU), SYS (kernel's CPU). USER+SYS > REAL = parallelism. USER+SYS < REAL = waiting (I/O, sleep, network). For peak memory and detailed stats use `/usr/bin/time -v` (full path — bypasses the builtin). Quick alt for repeated benchmarks: `hyperfine`.",
    outputExample: "$ time ./build.sh\n\nreal    0m12.483s\nuser    0m45.221s   # USER+SYS > REAL → parallel build using ~4 cores\nsys     0m2.108s\n$ /usr/bin/time -v sleep 1\n\tCommand being timed: \"sleep 1\"\n\tUser time (seconds): 0.00\n\tSystem time (seconds): 0.00\n\tPercent of CPU this job got: 0%\n\tElapsed (wall clock) time (h:mm:ss or m:ss): 0:01.00\n\tMaximum resident set size (kbytes): 2304\n\tVoluntary context switches: 2\n\tInvoluntary context switches: 1\n\tExit status: 0",
    category: "PROCESSES"
  },
  {
    id: "proc27",
    question: "Find which process is holding a specific network port with `sudo lsof -i :8080`",
    answer: "sudo lsof -i :8080",
    explanation: "Standard answer to 'Error: bind: address already in use' or 'why can't I start my server on port 8080?'. `lsof` ('LiSt Open Files') with `-i :PORT` filters its output to sockets bound to that specific port — both LISTENING servers and ESTABLISHED connections. Columns: COMMAND, PID, USER, FD (file descriptor + mode), TYPE (IPv4/IPv6), DEVICE, SIZE/OFF, NODE (the protocol, TCP/UDP), NAME (the address:port). Add protocol restriction: `-i tcp:8080` or `-i udp:53`. Restrict to LISTENING sockets with `-sTCP:LISTEN`. Modern alternative using `ss`: `sudo ss -tnlp 'sport = :8080'` is faster and ships in iproute2 (always installed). The classic netstat form: `sudo netstat -tlnp | grep :8080`. Need sudo to see processes owned by other users; without it `lsof` only shows your own. Once you have the PID, `kill PID` (or `kill -9` if stubborn) frees the port. To find what process opens a SPECIFIC file rather than port, drop `-i`: `lsof /var/log/syslog`. To find every network connection a process has, use `-p PID` (proc14).",
    usage: "Diagnosing 'port already in use' before starting your dev server, finding the runaway process listening on an unexpected port, or auditing what's exposed to the network.",
    examples: [
      "sudo lsof -i :8080  # who has port 8080?",
      "sudo lsof -i tcp:443  # restrict to TCP",
      "sudo lsof -i :8080 -sTCP:LISTEN  # only the LISTENING server, not active connections",
      "sudo ss -tnlp 'sport = :8080'  # modern faster alternative",
      "sudo lsof -nP -iTCP -sTCP:LISTEN  # ALL TCP listeners (-n no DNS, -P no port name lookup)",
      "sudo fuser 8080/tcp  # alternative — print just the PID(s) owning the port"
    ],
    memoryTip: "`lsof -i :PORT` = list open NET sockets on that port. Need sudo to see other users'. Modern alternative: `ss -tnlp 'sport = :PORT'`. To find the binding by file path instead, drop `-i`: `lsof /path`. To free a stuck port: find PID then `kill PID`.",
    outputExample: "$ sudo lsof -i :8080\nCOMMAND  PID   USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME\nnode    8421   app    22u  IPv4 0x12abc      0t0  TCP *:8080 (LISTEN)\nnode    8421   app    23u  IPv4 0x12abd      0t0  TCP 127.0.0.1:8080->127.0.0.1:55232 (ESTABLISHED)\nnode    8421   app    24u  IPv4 0x12abe      0t0  TCP 127.0.0.1:8080->127.0.0.1:55233 (ESTABLISHED)\n$ sudo ss -tnlp 'sport = :8080'\nState   Recv-Q Send-Q Local Address:Port Peer Address:Port  Process\nLISTEN  0      511          0.0.0.0:8080      0.0.0.0:*     users:((\"node\",pid=8421,fd=22))",
    category: "PROCESSES"
  },
  {
    id: "proc28",
    question: "Watch every system call a running process makes (open files, reads, writes, network) with `sudo strace -p PID`",
    answer: "sudo strace -p 1234",
    explanation: "`strace` is the system-call tracer. EVERY interaction a Linux process has with the outside world — opening files, reading bytes, sending network packets, allocating memory, creating processes — happens through a SYSTEM CALL into the kernel. strace shows each one in real time. Two modes: trace a NEW command (`strace ./prog args`) or ATTACH to a running PID (`strace -p PID` — needs sudo for other users' processes). Output format: `syscall(arg1, arg2, ...) = return_value`. Useful flags: `-f` follow forks (child processes); `-e openat` (or `-e trace=openat,read`) filter to specific syscalls; `-e trace=file` everything file-related; `-e trace=network` network only; `-c` SUMMARY at end (count of each syscall + total time) — invaluable for performance profiling; `-T` show time spent in each syscall; `-t` add timestamps; `-s 256` longer string truncation; `-o file` save output to file (default stderr). Install with `apt install strace`. Less invasive but less detailed alternative: `ltrace` (library calls instead of syscalls), or modern eBPF tools like `bpftrace`. CAUTION: strace slows the target process down a lot — fine for debugging, bad for production performance work.",
    usage: "Debugging 'why does my program seem stuck?' (strace usually shows it stuck in `read()` or `poll()`), finding which file a script CAN'T find (look for `ENOENT` errors), or counting which syscalls dominate a slow program.",
    examples: [
      "sudo strace -p 1234  # attach to a running process",
      "strace ./prog  # trace a new process from launch",
      "strace -f -e trace=openat ./prog  # follow forks, only show file opens",
      "strace -c -p 1234  # summarize syscall counts — Ctrl-C to print",
      "strace -e trace=network -p 1234  # only network syscalls",
      "strace -tt -T -o trace.log -p 1234  # timestamped trace to file"
    ],
    memoryTip: "`strace -p PID` attach, `strace cmd` launch. `-f` follow children, `-e trace=GROUP` filter, `-c` summary, `-o file` save. Look for `= -1 ENOENT` lines for 'file not found'. Slow: turn it OFF in production. Modern alternatives: `ltrace`, `bpftrace`, `perf`.",
    outputExample: "$ sudo strace -p 4567 2>&1 | head -10\nstrace: Process 4567 attached\nrecvfrom(8, \"\", 4096, 0, NULL, NULL) = 0\nepoll_wait(7, [], 1024, 100)            = 0\nepoll_wait(7, [], 1024, 100)            = 0\nwrite(2, \"heartbeat sent\\n\", 15)        = 15\n...\n$ strace -c -e trace=file ls / 2>&1 | tail\n% time     seconds  usecs/call     calls    errors syscall\n------ ----------- ----------- --------- --------- ----------------\n 89.46    0.000142          12        12           openat\n  4.43    0.000007           3         2           stat\n  3.78    0.000006           2         3           newfstatat\n  2.33    0.000004           2         2           access\n------ ----------- ----------- --------- --------- ----------------\n100.00    0.000159          19        19           total",
    category: "PROCESSES"
  },
  {
    id: "proc29",
    question: "Get a one-shot snapshot of the top CPU-consuming processes with `ps -eo pid,user,%cpu,cmd --sort=-%cpu | head`",
    answer: "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head",
    explanation: "This is the scriptable, no-curses alternative to `top` for 'which processes are eating CPU right now?'. Breakdown: `ps -e` shows every process (system-wide); `-o COL1,COL2,...` chooses custom columns instead of the default set; `--sort=KEY` sorts the output (prefix with `-` for DESCENDING — biggest first); piping to `head` keeps just the top 10 lines (header + 9 winners). The sort key can be any column: `%cpu`, `%mem`, `rss` (memory in KB), `vsz` (virtual size), `etime` (uptime — oldest first by default, newest with `-etime`), `pid`. Useful column choices: `pid,ppid,user,%cpu,%mem,rss,etime,comm` is a comprehensive snapshot. Why is this better than `top`? It's PIPEABLE — chain into `grep`, `awk`, `tee`, save to file, email it, ship it to monitoring. `top -b -n 1` (batch mode, one iteration) is a less ergonomic alternative. Caveat: `%cpu` from `ps` is the AVERAGE since the process started, not the instantaneous use — for live numbers stick with `top`/`htop`. For sub-second precision use `pidstat` (from `sysstat`).",
    usage: "Cron-friendly snapshot for alerting ('email me if any process exceeds 50% CPU'), one-shot dump in an incident report, or comparing two moments in time without watching `top`.",
    examples: [
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head  # top 9 CPU consumers",
      "ps -eo pid,user,%mem,rss,cmd --sort=-%mem | head  # top memory hogs",
      "ps -eo pid,user,etime,cmd --sort=-etime | head  # oldest processes (longest-running)",
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu --no-headers | head -5 | awk '{print $1,$3,$4}'  # scriptable extract",
      "ps -eo user,%cpu --sort=-%cpu --no-headers | awk '{a[$1]+=$2} END {for (u in a) print u, a[u]}' | sort -k2 -nr  # CPU PER USER",
      "watch -n 2 'ps -eo pid,%cpu,cmd --sort=-%cpu | head'  # poll every 2s — poor man's top"
    ],
    memoryTip: "`ps -e -o COL,COL,... --sort=-KEY | head` = custom-ranked snapshot. `-` before key = DESCENDING. Useful keys: `%cpu`, `%mem`, `rss`, `etime`. `--no-headers` for clean scripting. Modern alternative for ongoing data: `pidstat 1` (every second, sub-process precision).",
    outputExample: "$ ps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head\n    PID USER     %CPU %MEM CMD\n   2412 alice    14.0  3.1 /usr/lib/firefox/firefox\n   1822 alice     8.3  0.7 node server.js\n   3201 alice     5.2  0.4 code .\n    684 root      2.1  0.5 /usr/sbin/sssd\n   1432 root      1.0  0.1 sshd: /usr/sbin/sshd\n    682 systemd-resolve 0.8  0.0 /usr/lib/systemd/systemd-resolved\n      1 root      0.1  0.1 /sbin/init\n     11 root      0.0  0.0 [rcu_par_gp]\n     19 root      0.0  0.0 [migration/0]\n$ ps -eo user,%cpu --sort=-%cpu --no-headers | awk '{a[$1]+=$2} END {for (u in a) print u, a[u]}'\nalice 27.5\nroot 3.2\nsystemd-resolve 0.8",
    category: "PROCESSES"
  },
  {
    id: "proc30",
    question: "Make a daemon re-read its config WITHOUT restarting (zero-downtime) by sending SIGHUP: `sudo kill -HUP $(pidof nginx)`",
    answer: "sudo kill -HUP $(pidof nginx)",
    explanation: "SIGHUP (signal 1) was historically the 'terminal hangup' signal, but many modern daemons (nginx, apache, sshd, rsyslog, postfix, dnsmasq, haproxy, postgresql) repurpose it as 'reload your configuration file'. The daemon re-parses its config but does NOT drop existing connections — graceful, zero-downtime config changes. By contrast, `restart` STOPS then STARTS the service, terminating in-flight requests. Use `pidof DAEMON` to get the (master/parent) PID; alternatively `cat /var/run/nginx.pid` reads the PID file most daemons write. The systemd-aware equivalent is `sudo systemctl reload SERVICE` which calls the unit file's `ExecReload=` (usually SIGHUP under the hood) — preferred when systemd manages the service because it logs the action. Not every daemon supports reload — check the man page; some only support `restart`. Verify the reload happened by `tail`ing the error/access log and looking for a 'reloading configuration' message. Foot-gun: if your config file has a SYNTAX ERROR, a reload may leave the daemon running with the OLD config silently — always check `nginx -t` (or equivalent) FIRST before reloading.",
    usage: "Applying new TLS certificates, adding a new virtual host, deploying a config change in production without dropping connections, or rotating log file paths.",
    examples: [
      "sudo nginx -t && sudo kill -HUP $(pidof nginx)  # test config FIRST, then reload",
      "sudo systemctl reload nginx  # higher-level — preferred when systemd-managed",
      "sudo killall -HUP rsyslogd  # match by name (kills all matching)",
      "sudo kill -HUP $(cat /var/run/nginx.pid)  # via the PID file",
      "sudo systemctl reload-or-restart nginx  # reload if possible, restart otherwise",
      "sudo journalctl -fu nginx  # follow the journal to watch the reload happen"
    ],
    memoryTip: "SIGHUP (1) = 'hang up the phone' → repurposed as 'reload config'. Use `sudo systemctl reload SERVICE` when possible (logged, systemd-aware). ALWAYS validate config (`nginx -t`, `apachectl configtest`) BEFORE reloading — a syntax-error reload silently no-ops on some daemons.",
    outputExample: "$ sudo nginx -t\nnginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n$ sudo kill -HUP $(pidof nginx)\n$ sudo tail -3 /var/log/nginx/error.log\n2026/05/17 14:32:18 [notice] 8421#8421: signal 1 (SIGHUP) received from 12345, reconfiguring\n2026/05/17 14:32:18 [notice] 8421#8421: reconfiguring\n2026/05/17 14:32:18 [notice] 8421#8421: reload completed",
    category: "PROCESSES"
  },

  // NETWORKING — extended
  {
    id: "net21",
    question: "Download a file with curl, saving it with the server-suggested name",
    answer: "curl -O https://example.com/file.tar.gz",
    explanation: "-O writes the downloaded body to a local file using the URL's basename. Use -o NAME for an explicit name.",
    usage: "Quick CLI download without launching wget.",
    examples: [
      "curl -O https://example.com/file.tar.gz",
      "curl -L -O url  # Follow redirects",
      "curl -fsSL url | sh  # Pipe an install script (carefully!)"
    ],
    memoryTip: "-O = save as Original filename.",
    outputExample: "$ curl -O https://example.com/file.tar.gz\n  % Total    % Received   Time\n100  1.2M  100  1.2M     0:02",
    category: "NETWORKING"
  },
  {
    id: "net22",
    question: "Send a POST request with a JSON body using curl",
    answer: "curl -X POST -H 'Content-Type: application/json' -d '{\"k\":\"v\"}' https://api/x",
    explanation: "-X sets the method, -H adds headers, -d supplies the body. curl handles the rest of the HTTP framing.",
    usage: "Test REST endpoints from the command line or in scripts.",
    examples: [
      "curl -X POST -H 'Content-Type: application/json' -d '{\"id\":1}' https://api/x",
      "curl -X POST --data-urlencode 'q=hello' https://api/x",
      "curl -X POST -d @body.json -H 'CT: application/json' url  # body from file"
    ],
    memoryTip: "-X method, -H header, -d data.",
    outputExample: "$ curl -X POST -d '{\"k\":\"v\"}' https://httpbin.org/post\n{ \"json\": {\"k\":\"v\"}, ... }",
    category: "NETWORKING"
  },
  {
    id: "net23",
    question: "Forward localhost:8080 through an SSH server to an internal host",
    answer: "ssh -L 8080:internal:80 user@gateway",
    explanation: "-L LOCAL:HOST:REMOTE opens a tunnel: traffic to your local port is forwarded over SSH to host:remote from the gateway's perspective.",
    usage: "Reach a service behind a bastion without VPN.",
    examples: [
      "ssh -L 8080:internal:80 user@gateway",
      "ssh -L 5432:db.internal:5432 user@bastion",
      "ssh -L 8080:localhost:80 user@webhost  # Tunnel to webhost's own port 80"
    ],
    memoryTip: "-L = Local forward; localport:targethost:targetport.",
    outputExample: "$ ssh -L 8080:internal:80 user@gateway\n$ curl localhost:8080  # Hits internal:80 via the gateway",
    category: "NETWORKING"
  },
  {
    id: "net24",
    question: "Open a reverse tunnel exposing your local service on a remote host",
    answer: "ssh -R 9000:localhost:3000 user@remote",
    explanation: "-R reverses the direction: remote:9000 forwards back to your laptop's :3000. Often used for demos behind NAT.",
    usage: "Let a teammate hit your dev server through a server they can reach.",
    examples: [
      "ssh -R 9000:localhost:3000 user@remote",
      "ssh -R 0.0.0.0:9000:localhost:3000 user@remote  # Bind on all interfaces (needs GatewayPorts)",
      "ssh -N -R 9000:localhost:3000 user@remote  # No interactive shell"
    ],
    memoryTip: "-R = Reverse forward; the remote opens the listening port.",
    outputExample: "$ ssh -R 9000:localhost:3000 user@remote\nremote$ curl localhost:9000  # Hits your laptop's :3000",
    category: "NETWORKING"
  },
  {
    id: "net25",
    question: "Install your SSH public key on a remote host",
    answer: "ssh-copy-id user@host",
    explanation: "ssh-copy-id appends your default public key to the remote user's ~/.ssh/authorized_keys after one interactive password.",
    usage: "Switch from password auth to key-based auth in one step.",
    examples: [
      "ssh-copy-id user@host",
      "ssh-copy-id -i ~/.ssh/work.pub user@host",
      "ssh-copy-id -p 2222 user@host"
    ],
    memoryTip: "ssh-copy-id = copy your identity (public key) to the host.",
    outputExample: "$ ssh-copy-id user@host\nNumber of key(s) added: 1\nNow try logging into the machine.",
    category: "NETWORKING"
  },
  {
    id: "net26",
    question: "Run a continuous traceroute that updates loss/latency per hop",
    answer: "mtr hostname",
    explanation: "mtr combines traceroute and ping into one live display, refreshing every second so flaky hops become obvious.",
    usage: "Diagnose where packet loss or latency spikes appear along a route.",
    examples: [
      "mtr example.com",
      "mtr --report --report-cycles 10 host  # Snapshot report",
      "mtr -4 host  # Force IPv4"
    ],
    memoryTip: "mtr = 'my traceroute' (continuous).",
    outputExample: "$ mtr example.com\n  Host                Loss   Avg\n1. router.local      0.0%   1ms\n2. isp.gw            0.0%   8ms\n3. example.com       0.0%   25ms",
    category: "NETWORKING"
  },
  {
    id: "net27",
    question: "Get just the IP address(es) for a hostname",
    answer: "dig +short example.com",
    explanation: "+short trims dig's verbose output to only the answer values, perfect for scripts.",
    usage: "Pipe IPs to scripts or quickly check DNS without parsing.",
    examples: [
      "dig +short example.com",
      "dig +short AAAA example.com  # IPv6",
      "dig +short MX example.com  # Mail servers"
    ],
    memoryTip: "+short = compact DNS answers only.",
    outputExample: "$ dig +short example.com\n93.184.216.34",
    category: "NETWORKING"
  },
  {
    id: "net28",
    question: "Show per-interface receive/transmit statistics",
    answer: "ip -s link",
    explanation: "ip -s link adds statistics (packets, bytes, errors, drops) to the standard link listing.",
    usage: "Spot interfaces with high error or drop counts.",
    examples: [
      "ip -s link",
      "ip -s link show eth0",
      "ip -s -s link  # Even more detail"
    ],
    memoryTip: "-s = statistics for the link output.",
    outputExample: "$ ip -s link show eth0\neth0: ...\n    RX: bytes packets errors\n    12345  100      0\n    TX: bytes packets errors\n    98765  80       0",
    category: "NETWORKING"
  },
  {
    id: "net29",
    question: "Look up domain registration details",
    answer: "whois example.com",
    explanation: "whois queries registry servers for ownership, nameservers, creation/expiry dates of a domain.",
    usage: "Investigate ownership or expiration when troubleshooting DNS or domain takeover.",
    examples: [
      "whois example.com",
      "whois 8.8.8.8  # IP ownership",
      "whois -h whois.arin.net 8.8.8.8  # Specific server"
    ],
    memoryTip: "whois = 'who is registered as owner?'",
    outputExample: "$ whois example.com\nDomain Name: EXAMPLE.COM\nRegistrar: IANA\nUpdated Date: 2026-01-08",
    category: "NETWORKING"
  },
  {
    id: "net30",
    question: "Show the local ARP / neighbor table",
    answer: "ip neigh",
    explanation: "ip neigh prints the kernel's neighbor cache mapping IPs to MAC addresses on the local segment.",
    usage: "Verify a device is actually reachable on the LAN and confirm its MAC.",
    examples: [
      "ip neigh",
      "ip neigh show dev eth0",
      "ip neigh flush all  # Wipe and re-resolve"
    ],
    memoryTip: "ip neigh = neighbor (ARP) table.",
    outputExample: "$ ip neigh\n192.168.1.1 dev eth0 lladdr aa:bb:cc:dd:ee:ff REACHABLE",
    category: "NETWORKING"
  },

  // PACKAGES — extended (Debian/Ubuntu)
  {
    id: "pkg18",
    question: "List every currently installed package on the system with `apt list --installed` (Debian/Ubuntu)",
    answer: "apt list --installed",
    explanation: "`apt list` is APT's friendly listing command. By default it lists everything available (installed + repo); `--installed` restricts output to packages actually on disk. Each line shows `package/suite version architecture [installed,...]`. The annoying 'WARNING: apt does not have a stable CLI interface' message goes to stderr — that's why you often see `2>/dev/null` appended. For scripts, prefer the dpkg-native forms like `dpkg-query -W -f='${binary:Package}\\n'` which are guaranteed stable. Pipe to `grep` for searches, `wc -l` for a count, or `sort` to alphabetize. Note that 'installed' also includes packages installed automatically as dependencies — append `--manual-installed` to list only what YOU explicitly asked for, which is useful when migrating to a new machine: you only need to re-install your manuals; APT will re-pull their deps. No sudo needed.",
    usage: "Auditing a server before a migration, generating a manifest to install on a sibling machine, or grepping for 'is X installed?'.",
    examples: [
      "apt list --installed 2>/dev/null  # all installed packages",
      "apt list --installed 2>/dev/null | wc -l  # total count",
      "apt list --installed 2>/dev/null | grep ^python  # filter by name",
      "apt list --installed --manual-installed 2>/dev/null  # only YOUR explicit installs",
      "dpkg-query -W -f='${binary:Package}\\n' | sort > /tmp/manifest.txt  # script-friendly manifest",
      "apt list --installed 2>/dev/null | awk -F/ '{print $1}' > installed.txt  # names only"
    ],
    memoryTip: "`apt list --installed` for humans; `dpkg-query -W -f='${binary:Package}\\n'` for scripts. `--manual-installed` filter separates 'I wanted this' from 'pulled in as dep'. Pipe to `wc -l` to see how big the install base is.",
    outputExample: "$ apt list --installed 2>/dev/null | head\nListing...\nadduser/now 3.137ubuntu1 all [installed,automatic]\napt/now 2.7.14build2 amd64 [installed]\nbase-files/now 13ubuntu10.1 amd64 [installed]\nbase-passwd/now 3.6.3build1 amd64 [installed]\nbash/now 5.2.21-2ubuntu4 amd64 [installed]\nbsdutils/now 1:2.39.3-9ubuntu6.1 amd64 [installed]\nbusybox-initramfs/now 1:1.36.1-6ubuntu3 amd64 [installed]\n...\n$ apt list --installed 2>/dev/null | wc -l\n812",
    category: "PACKAGES"
  },
  {
    id: "pkg19",
    question: "Preview which packages have newer versions available without upgrading them with `apt list --upgradable` (Debian/Ubuntu)",
    answer: "apt list --upgradable",
    explanation: "After `apt update` has refreshed the package catalogs, `apt list --upgradable` is the safe DRY-RUN preview of what `apt upgrade` would touch. Each line shows `package/suite NEWER_VERSION arch [upgradable from: OLDER_VERSION]`. Run it before any upgrade on production to know exactly what's about to change — especially to spot a kernel or libc bump that will need a reboot. The numbers can also feed monitoring: `apt list --upgradable 2>/dev/null | tail -n +2 | wc -l` gives a clean count of pending upgrades, often used as a Nagios/Prometheus metric. To see only security-related upgrades (Ubuntu): `apt list --upgradable 2>/dev/null | grep -- -security`. Held packages (via `apt-mark hold`) still appear in this list with `[upgradable]` even though they won't actually upgrade — cross-reference with `apt-mark showhold`. Run `apt update` first or you'll get stale data.",
    usage: "Pre-checking before patching a server, generating a daily 'pending updates' report, or finding out whether a security errata is waiting.",
    examples: [
      "sudo apt update && apt list --upgradable  # standard preview",
      "apt list --upgradable 2>/dev/null | tail -n +2 | wc -l  # count of pending upgrades",
      "apt list --upgradable 2>/dev/null | grep security  # security upgrades only (Ubuntu)",
      "apt list --upgradable 2>/dev/null | awk -F/ '/upgradable/ {print $1}'  # just names",
      "apt-get -s upgrade  # alternative: full simulated upgrade transaction (-s = simulate)",
      "apt-mark showhold  # cross-reference with held packages"
    ],
    memoryTip: "Dry-run pattern: `apt update` (refresh) → `apt list --upgradable` (preview) → `apt upgrade` (apply). For a more thorough simulation, `apt-get -s upgrade` shows the full transaction without doing it.",
    outputExample: "$ apt list --upgradable 2>/dev/null\nListing...\nbash/noble-updates 5.2.21-2ubuntu4.1 amd64 [upgradable from: 5.2.21-2ubuntu4]\ncurl/noble-updates,noble-security 8.5.0-2ubuntu10.4 amd64 [upgradable from: 8.5.0-2ubuntu10.3]\nlibc6/noble-updates,noble-security 2.39-0ubuntu8.4 amd64 [upgradable from: 2.39-0ubuntu8.3]\nlibssl3/noble-updates,noble-security 3.0.13-0ubuntu3.5 amd64 [upgradable from: 3.0.13-0ubuntu3.4]\nlinux-generic/noble-updates 6.8.0-40.40 amd64 [upgradable from: 6.8.0-38.38]\nopenssh-server/noble-updates,noble-security 1:9.6p1-3ubuntu13.6 amd64 [upgradable from: 1:9.6p1-3ubuntu13.4]\n6 upgradable packages",
    category: "PACKAGES"
  },
  {
    id: "pkg20",
    question: "List every file installed on disk by a package with `dpkg -L package_name` (Debian/Ubuntu)",
    answer: "dpkg -L package_name",
    explanation: "`dpkg -L` ('list files') queries the LOCAL dpkg database at `/var/lib/dpkg/info/PKG.list` and prints every path the package owns: binaries, libraries, configs, docs, systemd unit files, even the empty directories the package created. Useful flags-combos: pipe to `grep` to filter (e.g., `grep ^/etc` for configs, `grep bin/` for executables, `grep /share/man` for man pages). `dpkg -L` works only for INSTALLED packages — for the repo-wide equivalent (any package, installed or not), use `apt-file list PKG` (needs `apt-file` installed and indexed). The inverse query — 'which package owns this path?' — is `dpkg -S /path` for local files or `apt-file search /path` for repo-wide. No sudo needed. A common trick after install: `dpkg -L PKG | xargs ls -ld 2>/dev/null` to see ownership/perms of every shipped file.",
    usage: "Locating a binary the package shipped, finding config files to back up, or auditing what disappears when you uninstall.",
    examples: [
      "dpkg -L nginx  # every path nginx ships",
      "dpkg -L curl | grep bin  # just the binaries",
      "dpkg -L nginx | grep ^/etc  # just config files",
      "dpkg -L nginx | xargs ls -ld 2>/dev/null  # detailed listing of each file",
      "dpkg -L nginx | grep /share/doc  # documentation",
      "apt-file list nginx  # alternative that works on UNINSTALLED packages too"
    ],
    memoryTip: "Vocabulary: `dpkg -L PKG` (List files), `dpkg -S PATH` (Search owner), `dpkg -l` (lowercase L = LIST installed packages — different!). For repo-wide, swap dpkg for apt-file.",
    outputExample: "$ dpkg -L curl | head\n/.\n/usr\n/usr/bin\n/usr/bin/curl\n/usr/share\n/usr/share/doc\n/usr/share/doc/curl\n/usr/share/doc/curl/NEWS.Debian.gz\n/usr/share/doc/curl/changelog.Debian.gz\n/usr/share/doc/curl/copyright\n$ dpkg -L curl | wc -l\n14",
    category: "PACKAGES"
  },
  {
    id: "pkg21",
    question: "Find which installed package owns a given file path with `dpkg -S /path/to/file` (Debian/Ubuntu)",
    answer: "dpkg -S /usr/bin/curl",
    explanation: "`dpkg -S` ('search') asks the local dpkg database 'which installed package shipped this path?' The argument can be a full path (`/usr/bin/curl`), a substring (`libssl`), or even a glob (some shells expand it — quote to pass literally). Output is `package: path` per hit, and substring searches can return MANY hits because multiple packages can ship paths containing the same string. `$(which CMD)` pairs nicely: `dpkg -S $(which curl)` translates a command name into the owning package. If `dpkg -S` returns 'no path found matching pattern', the file wasn't installed by any dpkg-known package — it was created by a user, a service, `pip`, `npm`, `make install`, or similar. For NOT-installed packages use `apt-file search PATH` (repo-wide). No sudo needed. The reverse direction is `dpkg -L PKG` (list files of a package).",
    usage: "Tracing 'where did this file come from?' on a stranger system, deciding which package to reinstall when a binary acts up, or verifying that a file isn't an unexpected leftover.",
    examples: [
      "dpkg -S /usr/bin/curl  # exact path",
      "dpkg -S $(which python3)  # command-name → package",
      "dpkg -S libssl  # substring search (will return many)",
      "dpkg -S /etc/nginx/nginx.conf  # config file owner",
      "dpkg -S /tmp/myfile  # 'no path found' → not from a package",
      "apt-file search /usr/bin/htop  # if not installed yet"
    ],
    memoryTip: "`dpkg -S` = Search the local DB by path. `dpkg -L` = List files in a package. Reverse pair on the repo side: `apt-file search` / `apt-file list`. Quick rule: lower-case sea(rch) → -S; upper-case List → -L.",
    outputExample: "$ dpkg -S /usr/bin/curl\ncurl: /usr/bin/curl\n$ dpkg -S libssl\nlibssl3t64:amd64: /usr/lib/x86_64-linux-gnu/libssl.so.3\nlibssl3t64:amd64: /usr/share/doc/libssl3t64\n$ dpkg -S /tmp/test.txt\ndpkg-query: no path found matching pattern /tmp/test.txt",
    category: "PACKAGES"
  },
  {
    id: "pkg22",
    question: "Finish configuring any packages stuck in 'half-configured' state after a crashed install with `sudo dpkg --configure -a` (Debian/Ubuntu)",
    answer: "sudo dpkg --configure -a",
    explanation: "Every dpkg install has two phases: (1) UNPACK files onto disk, and (2) CONFIGURE — run the package's `postinst` script to set up services, create users, generate keys, etc. If something interrupts phase 2 (Ctrl-C, OOM kill, power loss, full disk), the package is left in a 'half-configured' state and BLOCKS every future apt/dpkg operation with 'dpkg was interrupted, you must manually run sudo dpkg --configure -a'. That's the command: `--configure -a` iterates every package and runs the post-install script for anything still mid-flight. If a postinst script keeps failing, try `sudo apt --fix-broken install` (`apt install -f`) which is more aggressive — it can also propose removing the offending package to escape the wedge. As a last resort `sudo dpkg --remove --force-remove-reinstreq PKG` forces a removal. Always run `apt update` first if the failure was network-related.",
    usage: "Recovering after an `apt upgrade` you killed with Ctrl-C, after a disk-full OOM during install, or after rebooting mid-upgrade.",
    examples: [
      "sudo dpkg --configure -a  # finish all pending configurations",
      "sudo apt --fix-broken install  # more aggressive: can remove a problem package",
      "sudo apt-get -f install  # same as above, older syntax",
      "dpkg -l | grep -v ^ii  # find non-clean packages (not 'ii' state)",
      "sudo apt install --reinstall NAME  # if reconfigure keeps failing for one package",
      "sudo dpkg --remove --force-remove-reinstreq NAME  # last resort to unwedge"
    ],
    memoryTip: "Two-phase install: UNPACK then CONFIGURE. If config phase breaks, `dpkg --configure -a` retries it. If THAT fails, `apt install -f` is the next escalation. Status code `ii` in `dpkg -l` = healthy; anything else = potential trouble.",
    outputExample: "$ sudo apt install something\nE: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.\n$ sudo dpkg --configure -a\nSetting up linux-image-6.8.0-40-generic (6.8.0-40.40) ...\n/etc/kernel/postinst.d/dkms:\nSetting up nginx (1.24.0-2ubuntu7.3) ...\nProcessing triggers for man-db (2.12.0-1) ...\nProcessing triggers for libc-bin (2.39-0ubuntu8.3) ...\n$ sudo apt install something  # now works",
    category: "PACKAGES"
  },
  {
    id: "pkg23",
    question: "List all packages pinned to their current version (excluded from automatic upgrades) with `apt-mark showhold` (Debian/Ubuntu)",
    answer: "apt-mark showhold",
    explanation: "When you (or someone before you) pinned a package with `apt-mark hold PKG`, APT records that fact in dpkg's `selections` file and refuses to upgrade or remove the package on routine `apt upgrade`. `apt-mark showhold` prints the current hold list, one package per line. This is something to check whenever you inherit a system or see 'kept back' messages — a hold can mask a long-standing missing security update. Inspect each: do you still need the pin? If the original reason is gone (a bug was fixed upstream, the dependency was loosened), `sudo apt-mark unhold PKG` releases it. The related read-only queries are `apt-mark showauto` (packages installed as autoinstalled dependencies, eligible for autoremove) and `apt-mark showmanual` (packages YOU explicitly installed). No sudo needed for the `show*` queries.",
    usage: "Auditing a server before patching to know what won't be touched, finding old kernel pins, or onboarding a new system.",
    examples: [
      "apt-mark showhold  # list of held packages",
      "apt-mark showhold | wc -l  # how many holds in place",
      "apt-mark showmanual  # packages you (or scripts) explicitly installed",
      "apt-mark showauto  # packages installed as deps, eligible for autoremove",
      "sudo apt-mark unhold $(apt-mark showhold)  # release every hold at once",
      "for p in $(apt-mark showhold); do apt-cache policy $p; done  # see installed vs available for each held pkg"
    ],
    memoryTip: "Three `show*` queries: `showhold` (pinned), `showmanual` (you wanted), `showauto` (came as dep). Holds are persistent — they survive reboots and OS upgrades. Always audit them on a system you didn't build yourself.",
    outputExample: "$ apt-mark showhold\nlinux-image-6.5.0-15-generic\nmysql-server-8.0\nnginx\n$ for p in $(apt-mark showhold); do apt-cache policy $p | grep -E 'Installed|Candidate'; echo; done\n  Installed: 6.5.0-15.15\n  Candidate: 6.5.0-15.15\n\n  Installed: 8.0.36-0ubuntu0.22.04.1\n  Candidate: 8.0.37-0ubuntu0.22.04.1\n\n  Installed: 1.24.0-1\n  Candidate: 1.24.0-2ubuntu7.3",
    category: "PACKAGES"
  },
  {
    id: "pkg24",
    question: "Release a package from a hold so it can upgrade normally again with `sudo apt-mark unhold package_name` (Debian/Ubuntu)",
    answer: "sudo apt-mark unhold package_name",
    explanation: "`apt-mark unhold` reverses an earlier `apt-mark hold`, restoring the package to normal apt upgrade flow. The hold flag is stored in dpkg's selections file; unholding removes it. After unholding, the next `apt upgrade` will pick up any newer version that was previously skipped — verify with `apt-mark showhold` (should no longer list the package) and `apt list --upgradable` (should now show it). Use this when the reason for the original pin is gone — a bug has been fixed upstream, you've finished a compatibility test, or you're decommissioning the version constraint. Unholding does NOT trigger an immediate upgrade; you still need `sudo apt upgrade` (or `apt install PKG` to force it now). To clear ALL holds in one shot, pass the output of `showhold` as args: `sudo apt-mark unhold $(apt-mark showhold)` — but be sure you actually want every hold gone. Needs sudo because it writes to dpkg's DB.",
    usage: "Re-enabling upgrades on a previously frozen service, unfreezing a kernel after a hardware compatibility test, or recovering an old system where the original admin pinned everything.",
    examples: [
      "sudo apt-mark unhold nginx  # release one package",
      "sudo apt-mark unhold nginx mysql-server-8.0  # release several at once",
      "sudo apt-mark unhold $(apt-mark showhold)  # release EVERY hold",
      "apt-mark showhold  # confirm the hold is gone",
      "sudo apt install --only-upgrade nginx  # force immediate upgrade of just nginx",
      "echo 'nginx install' | sudo dpkg --set-selections  # low-level equivalent"
    ],
    memoryTip: "`apt-mark unhold` = lift the freeze. Does NOT upgrade by itself — run `apt upgrade` (or `apt install --only-upgrade PKG`) to actually move the version forward. To wipe ALL holds: `sudo apt-mark unhold $(apt-mark showhold)`.",
    outputExample: "$ apt-mark showhold\nnginx\nmysql-server-8.0\n$ sudo apt-mark unhold nginx\nCanceled hold on nginx.\n$ apt-mark showhold\nmysql-server-8.0\n$ apt list --upgradable 2>/dev/null | grep nginx\nnginx/noble-updates 1.24.0-2ubuntu7.3 amd64 [upgradable from: 1.24.0-1]",
    category: "PACKAGES"
  },
  {
    id: "pkg25",
    question: "Download and unpack the upstream source code (plus Debian packaging) for a package with `apt source package_name` (Debian/Ubuntu)",
    answer: "apt source package_name",
    explanation: "`apt source` fetches the source `.tar` plus the `.dsc` (Debian source control) and Debian-specific patches/packaging metadata, then unpacks it into a directory under your current working directory — typically `package-version/`. Requirements: (1) you must have `deb-src` lines enabled in `/etc/apt/sources.list` (commented by default on Ubuntu — uncomment and re-run `apt update`), and (2) you don't need sudo because the source goes into the current working directory, not the system. The companion `sudo apt build-dep PKG` installs every build dependency (compilers, dev headers, etc.) needed to actually compile the package. Once unpacked you can read the code, apply patches, edit `debian/changelog`, then rebuild a custom `.deb` with `dpkg-buildpackage -b -us -uc`. `apt source --compile PKG` does the unpack+build in one shot. This is how distro maintainers iterate; for everyday users it's mostly for reading code or fixing one bug locally.",
    usage: "Inspecting how a package is actually built, applying a local patch, or building a customized .deb from official sources.",
    examples: [
      "apt source curl  # fetch + unpack curl source",
      "sudo apt build-dep curl  # install build deps (compilers, dev libs)",
      "apt source --compile curl  # source + immediate dpkg-buildpackage",
      "apt source --download-only curl  # tar/dsc files only, don't unpack",
      "cd curl-* && dpkg-buildpackage -b -us -uc  # rebuild after editing",
      "grep '^deb-src' /etc/apt/sources.list  # check if source repos are enabled"
    ],
    memoryTip: "`apt source` needs `deb-src` enabled in sources.list. Pair with `apt build-dep PKG` to install everything needed to compile. The result is a directory you can edit + rebuild with `dpkg-buildpackage`.",
    outputExample: "$ apt source curl\nReading package lists... Done\nNOTICE: 'curl' packaging is maintained in the 'Git' version control system at:\nhttps://salsa.debian.org/debian/curl.git\nPlease use:\ngit clone https://salsa.debian.org/debian/curl.git\nto retrieve the latest (possibly unreleased) updates to the package.\nNeed to get 4,148 kB of source archives.\nGet:1 http://archive.ubuntu.com/ubuntu noble/main curl 8.5.0-2ubuntu10 (dsc) [2,612 B]\nGet:2 http://archive.ubuntu.com/ubuntu noble/main curl 8.5.0-2ubuntu10 (tar) [4,142 kB]\nGet:3 http://archive.ubuntu.com/ubuntu noble/main curl 8.5.0-2ubuntu10 (diff) [3,196 B]\ndpkg-source: info: extracting curl in curl-8.5.0\ndpkg-source: info: unpacking curl_8.5.0.orig.tar.xz",
    category: "PACKAGES"
  },
  {
    id: "pkg26",
    question: "Remove a previously added PPA so its packages no longer appear with `sudo add-apt-repository --remove ppa:user/ppa-name` (Debian/Ubuntu)",
    answer: "sudo add-apt-repository --remove ppa:user/ppa-name",
    explanation: "`add-apt-repository --remove` deletes the source `.list` file under `/etc/apt/sources.list.d/` that the PPA created, so APT stops considering its packages on the next update. It does NOT downgrade any packages that you already installed FROM that PPA — they remain at their PPA versions until you actively replace them. Critical follow-up: run `sudo apt update` (so APT forgets the PPA's metadata) and consider running `sudo ppa-purge ppa:user/ppa-name` from the `ppa-purge` package, which uninstalls AND reverts every package back to the version available from the official Ubuntu repos. Without ppa-purge you can be left with 'phantom' packages from a now-disabled PPA that future upgrades can't update because no enabled repo has a newer version. The GPG key imported when you added the PPA is NOT removed automatically — clean it up by deleting the corresponding file under `/etc/apt/trusted.gpg.d/` if you want to be tidy.",
    usage: "Cleaning up after a PPA test, removing an abandoned third-party source, or reverting a system to use only the official Ubuntu repos.",
    examples: [
      "sudo add-apt-repository --remove ppa:deadsnakes/ppa  # remove the source file",
      "sudo apt update  # refresh metadata after removal",
      "sudo apt install ppa-purge && sudo ppa-purge ppa:deadsnakes/ppa  # nuke and revert packages too",
      "ls /etc/apt/sources.list.d/  # confirm the source file is gone",
      "sudo rm /etc/apt/sources.list.d/deadsnakes-ubuntu-ppa-*.list  # manual fallback",
      "ls /etc/apt/trusted.gpg.d/ | grep -i deadsnakes  # leftover key file (delete if you want)"
    ],
    memoryTip: "`--remove` only deletes the SOURCE — not the installed packages. To also revert installed packages back to official versions, use `ppa-purge`. After any removal, `sudo apt update` to refresh caches.",
    outputExample: "$ sudo add-apt-repository --remove ppa:deadsnakes/ppa\nFound existing deb entry in /etc/apt/sources.list.d/deadsnakes-ubuntu-ppa-noble.list\nRemoving from /etc/apt/sources.list.d/deadsnakes-ubuntu-ppa-noble.list:\ndeb https://ppa.launchpadcontent.net/deadsnakes/ppa/ubuntu/ noble main\n$ sudo apt update\nIgn:1 https://ppa.launchpadcontent.net/deadsnakes/ppa/ubuntu noble InRelease\nHit:2 http://archive.ubuntu.com/ubuntu noble InRelease\nReading package lists... Done",
    category: "PACKAGES"
  },
  {
    id: "pkg27",
    question: "Print a package's full data sheet (version, deps, size, description, homepage) with `apt show package_name` (Debian/Ubuntu)",
    answer: "apt show package_name",
    explanation: "`apt show` is the friendly, human-targeted version of `apt-cache show`: same metadata fields (Package, Version, Priority, Section, Maintainer, Installed-Size, Depends, Recommends, Description, Homepage, Download-Size), but only the CANDIDATE version is printed by default — the version APT would install if you ran `apt install`. Pass `-a` (or `--all-versions`) to also see older or alternative-suite versions. This is one of the most useful commands when picking software: read the description carefully, scan Depends/Recommends for surprises (this is where you spot 'this 'small' tool will pull in a whole desktop environment'), and check the Homepage URL to learn about the project. `apt show` prints to stdout; the leading 'WARNING: apt does not have a stable CLI' goes to stderr, which is why scripts use `apt-cache show` instead. No sudo needed; pure read.",
    usage: "Vetting a package before installing, copying the project URL/license, or quickly comparing two competing packages.",
    examples: [
      "apt show nginx  # candidate version only",
      "apt show -a nginx  # ALL available versions side by side",
      "apt show nginx 2>/dev/null | grep -E '^(Version|Depends|Homepage)'  # extract key fields",
      "apt show nginx 2>/dev/null | grep ^Installed-Size  # how much disk it'll use",
      "for p in vim nano micro; do apt show $p 2>/dev/null | head -3; done  # compare candidates",
      "apt-cache show nginx  # scripting-friendly equivalent (no stderr warning)"
    ],
    memoryTip: "`apt show` = the BOX for a package — read before BUYING. RHEL equivalent: `dnf info`. For repo-stable-CLI scripts use `apt-cache show`. To inspect an INSTALLED package's local DB record only, `dpkg -s pkg`.",
    outputExample: "$ apt show nginx\nPackage: nginx\nVersion: 1.24.0-2ubuntu7.3\nPriority: optional\nSection: web\nOrigin: Ubuntu\nMaintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>\nInstalled-Size: 96.3 kB\nProvides: httpd, httpd-cgi\nDepends: libnginx-mod-http-geoip2 (>= 1.24.0-2ubuntu7.3), libnginx-mod-http-image-filter (= 1.24.0-2ubuntu7.3), libnginx-mod-mail (= 1.24.0-2ubuntu7.3), libnginx-mod-stream (= 1.24.0-2ubuntu7.3), nginx-common (= 1.24.0-2ubuntu7.3), nginx-core (= 1.24.0-2ubuntu7.3) | nginx-full (= 1.24.0-2ubuntu7.3) | nginx-light (= 1.24.0-2ubuntu7.3) | nginx-extras (= 1.24.0-2ubuntu7.3)\nDownload-Size: 8,594 B\nAPT-Manual-Installed: yes\nAPT-Sources: http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages\nDescription: small, powerful, scalable web/proxy server",
    category: "PACKAGES"
  },

  // TEXT PROCESSING — extended
  {
    id: "text21",
    question: "Print only the second comma-separated field of a CSV file",
    answer: "awk -F, '{print $2}' file.csv",
    explanation: "-F, sets the field separator to comma so $1, $2... reference CSV columns.",
    usage: "Quick CSV column extraction without spinning up Python.",
    examples: [
      "awk -F, '{print $2}' file.csv",
      "awk -F, 'NR>1{print $1}' file.csv  # Skip header",
      "awk -F'\\t' '{print $3}' tsvfile  # Tab-separated"
    ],
    memoryTip: "-F = input field separator.",
    outputExample: "$ cat users.csv\nid,name\n1,alice\n2,bob\n$ awk -F, 'NR>1{print $2}' users.csv\nalice\nbob",
    category: "TEXT PROCESSING"
  },
  {
    id: "text22",
    question: "Sum the numbers in the first column of a file",
    answer: "awk '{sum+=$1} END {print sum}' file",
    explanation: "awk accumulates $1 across all lines; the END block runs after the last line and prints the total.",
    usage: "Quick aggregations without exporting to a spreadsheet.",
    examples: [
      "awk '{sum+=$1} END {print sum}' bytes.txt",
      "awk -F, '{s+=$3} END {printf \"%.2f\\n\", s}' file",
      "awk '{c++; s+=$1} END {print s/c}' file  # Average"
    ],
    memoryTip: "{accumulate} END {print} = streaming reduce.",
    outputExample: "$ printf '10\\n20\\n30\\n' | awk '{s+=$1} END {print s}'\n60",
    category: "TEXT PROCESSING"
  },
  {
    id: "text23",
    question: "Replace every occurrence of 'old' with 'new' in place, keeping a .bak",
    answer: "sed -i.bak 's/old/new/g' file",
    explanation: "-i edits the file in place; the optional suffix .bak makes sed save the original to file.bak first.",
    usage: "Safe scripted edits where you want a rollback file.",
    examples: [
      "sed -i.bak 's/old/new/g' config.yml",
      "sed -i 's/foo/bar/g' *.txt  # No backup",
      "sed -i -e 's/a/b/' -e 's/c/d/' file  # Multiple substitutions"
    ],
    memoryTip: "-i.bak = in-place edit with a .bak safety net.",
    outputExample: "$ sed -i.bak 's/old/new/g' file\n$ ls\nfile  file.bak",
    category: "TEXT PROCESSING"
  },
  {
    id: "text24",
    question: "Delete every line containing 'DEBUG' from a file",
    answer: "sed '/DEBUG/d' file",
    explanation: "The /pattern/d sed command deletes any line that matches the pattern.",
    usage: "Strip debug noise from logs or sample configs.",
    examples: [
      "sed '/DEBUG/d' app.log",
      "sed -i '/^#/d' config  # Delete comment lines",
      "sed '/^$/d' file  # Drop blank lines"
    ],
    memoryTip: "/pattern/d = delete (don't print) matching lines.",
    outputExample: "$ printf 'INFO ok\\nDEBUG hi\\nWARN slow\\n' | sed '/DEBUG/d'\nINFO ok\nWARN slow",
    category: "TEXT PROCESSING"
  },
  {
    id: "text25",
    question: "Show three lines after each grep match (context)",
    answer: "grep -A 3 pattern file",
    explanation: "-A N prints N lines after each match. Pair with -B (before) or -C (both) for full context windows.",
    usage: "See surrounding lines when investigating logs.",
    examples: [
      "grep -A 3 'error' app.log",
      "grep -B 2 -A 5 'panic' kernel.log",
      "grep -C 1 'TODO' src/*.py"
    ],
    memoryTip: "-A After, -B Before, -C Context (both).",
    outputExample: "$ grep -A 1 hi sample\nhi there\nfollowing line",
    category: "TEXT PROCESSING"
  },
  {
    id: "text26",
    question: "List only the filenames where grep found a match",
    answer: "grep -l pattern *.txt",
    explanation: "-l (lowercase L) prints just the names of files that contained at least one match, no matched lines.",
    usage: "Find which configs reference a deprecated setting.",
    examples: [
      "grep -l TODO src/*.py",
      "grep -rl 'secret_key' .  # Recursive",
      "grep -L 'license' *.md  # Files WITHOUT a match"
    ],
    memoryTip: "-l = list matching files only.",
    outputExample: "$ grep -l error *.log\napp.log\ndb.log",
    category: "TEXT PROCESSING"
  },
  {
    id: "text27",
    question: "Print only the matching part of each line",
    answer: "grep -o pattern file",
    explanation: "-o (only-matching) prints just the substrings that match, one per line.",
    usage: "Extract values like IPs, IDs, or URLs out of free-form text.",
    examples: [
      "grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' access.log  # IPs",
      "grep -o 'href=\"[^\"]*\"' index.html",
      "grep -oP '\\bUUID-\\w+\\b' file"
    ],
    memoryTip: "-o = output only the match.",
    outputExample: "$ echo 'visit 1.2.3.4 and 5.6.7.8' | grep -oE '[0-9.]+'\n1.2.3.4\n5.6.7.8",
    category: "TEXT PROCESSING"
  },
  {
    id: "text28",
    question: "Use Perl-compatible regex with grep",
    answer: "grep -P 'regex' file",
    explanation: "-P enables PCRE features like \\d, \\w, lookaheads, and non-greedy quantifiers.",
    usage: "When basic and extended regex aren't expressive enough.",
    examples: [
      "grep -P '\\d{3}-\\d{4}' file  # Phone-like patterns",
      "grep -P '(?<=Bearer )\\S+' headers  # Lookbehind",
      "grep -Pi '\\bemail\\b.*@' file"
    ],
    memoryTip: "-P = Perl regex flavor.",
    outputExample: "$ echo abc123 | grep -P '\\d+'\nabc123",
    category: "TEXT PROCESSING"
  },
  {
    id: "text29",
    question: "Strip all whitespace characters from a string",
    answer: "tr -d '[:space:]'",
    explanation: "tr -d deletes any character in the set; [:space:] matches spaces, tabs, newlines.",
    usage: "Sanitize tokens or generate compact identifiers from messy input.",
    examples: [
      "echo ' a b c ' | tr -d '[:space:]'  # abc",
      "tr -d '\\r' < windows.txt > unix.txt  # Strip CR",
      "echo 'Hi!' | tr -d '[:punct:]'  # Hi"
    ],
    memoryTip: "-d = delete; [:space:] = POSIX whitespace class.",
    outputExample: "$ echo ' a b c ' | tr -d '[:space:]'\nabc",
    category: "TEXT PROCESSING"
  },
  {
    id: "text30",
    question: "Convert a UTF-8 file to ASCII, transliterating special chars",
    answer: "iconv -f UTF-8 -t ASCII//TRANSLIT file",
    explanation: "iconv converts between character encodings; //TRANSLIT approximates characters that can't be represented (e.g. é → e).",
    usage: "Sanitize filenames or text exports that downstream tools can't render.",
    examples: [
      "iconv -f UTF-8 -t ASCII//TRANSLIT file > out.txt",
      "iconv -f WINDOWS-1252 -t UTF-8 legacy.txt",
      "iconv -l | head  # List encodings"
    ],
    memoryTip: "iconv -f FROM -t TO; //TRANSLIT = best-effort.",
    outputExample: "$ echo 'café' | iconv -f UTF-8 -t ASCII//TRANSLIT\ncafe",
    category: "TEXT PROCESSING"
  },

  // SYSTEM INFO — extended
  {
    id: "sys21",
    question: "Print full distro release info",
    answer: "lsb_release -a",
    explanation: "lsb_release prints distributor info (ID, release, codename); -a shows all of it. Not installed everywhere — /etc/os-release is the modern fallback.",
    usage: "Identify which distro and version you're on in scripts.",
    examples: [
      "lsb_release -a",
      "lsb_release -cs  # Just the codename (e.g. jammy)",
      "cat /etc/os-release  # Modern equivalent"
    ],
    memoryTip: "lsb_release = Linux Standard Base release info.",
    outputExample: "$ lsb_release -a\nDistributor ID: Ubuntu\nDescription:    Ubuntu 24.04 LTS\nCodename:       noble",
    category: "SYSTEM INFO"
  },
  {
    id: "sys22",
    question: "Use the `lsblk` command to list block devices (disks + partitions) as a tree",
    answer: "lsblk",
    explanation: "A 'block device' is anything Linux treats as random-access storage: SSDs, HDDs, USB sticks, SD cards, RAID arrays, LVM logical volumes. They live under `/dev/` with names like `sda` (first SATA/USB disk), `sda1` (its first partition), `nvme0n1` (first NVMe SSD), or `nvme0n1p2` (its second partition). `lsblk` ('list block devices') prints them as a tree so you can see at a glance: disk → partitions → mountpoint. It hides loop devices and RAM disks by default for clarity. Unlike `fdisk -l`, it doesn't need root for the basic view. Output columns: NAME (device), SIZE, TYPE (disk/part/lvm), MOUNTPOINT (where it's attached in the filesystem, or empty if unmounted).",
    usage: "Run this FIRST when you plug in a USB stick to find its device name (e.g. `/dev/sdb1`) before mounting or formatting. Also use it to confirm your drive layout before partitioning, or to see which partition holds `/`.",
    examples: [
      "lsblk  # the basic tree view — start here",
      "lsblk -f  # add FSTYPE, LABEL, UUID — what you need to write /etc/fstab",
      "lsblk -o NAME,SIZE,MOUNTPOINT,FSTYPE,MODEL  # pick exact columns",
      "lsblk /dev/sda  # only one device's tree",
      "lsblk -p  # show full /dev/ paths instead of short names"
    ],
    memoryTip: "`lsblk` = 'list block (devices)'. Mental model: `ls` lists files, `lsblk` lists chunks-of-storage. The tree shape (`├─` and `└─`) shows which partitions belong to which physical disk.",
    outputExample: "$ lsblk\nNAME        SIZE TYPE MOUNTPOINT\nsda         500G disk\n├─sda1        1G part /boot\n└─sda2      499G part /\nsdb          16G disk\n└─sdb1       16G part /media/usb\nnvme0n1     1T   disk\n├─nvme0n1p1 512M part /boot/efi\n└─nvme0n1p2 999G part /home",
    category: "SYSTEM INFO"
  },
  {
    id: "sys23",
    question: "Show filesystem UUIDs and types",
    answer: "blkid",
    explanation: "blkid reads block devices and prints their UUID, TYPE, and LABEL — exactly what you need for /etc/fstab.",
    usage: "Build a stable fstab entry that doesn't depend on /dev/sdX ordering.",
    examples: [
      "sudo blkid",
      "sudo blkid /dev/sda1",
      "blkid -o export /dev/sda1  # Shell-friendly"
    ],
    memoryTip: "blkid = block ID (UUID/label).",
    outputExample: "$ sudo blkid\n/dev/sda1: UUID=\"abcd-1234\" TYPE=\"ext4\"",
    category: "SYSTEM INFO"
  },
  {
    id: "sys24",
    question: "Find the mount info for a given path",
    answer: "findmnt /var",
    explanation: "findmnt walks the mount table and prints the matching entry — source device, mountpoint, filesystem, options.",
    usage: "Diagnose mount issues or confirm a bind mount target.",
    examples: [
      "findmnt /var",
      "findmnt -t ext4  # All ext4 mounts",
      "findmnt --target /  # Tree view from root"
    ],
    memoryTip: "findmnt = find mount entry.",
    outputExample: "$ findmnt /var\nTARGET SOURCE FSTYPE OPTIONS\n/var   /dev/sda3 ext4  rw,relatime",
    category: "SYSTEM INFO"
  },
  {
    id: "sys25",
    question: "List the recent login history on this machine with the `last` command (reads /var/log/wtmp)",
    answer: "last",
    explanation: "Every login (SSH, console, screen unlock on some setups) gets recorded by `login`/`sshd` into the binary file `/var/log/wtmp`. `last` parses that file and prints one row per login: USER, TTY (`pts/0` = SSH/terminal multiplexer pseudo-terminal, `tty1` = physical console), FROM (source IP for remote, blank for local), LOGIN time, LOGOUT time (or `still logged in`), and DURATION. It also shows special rows: `reboot system boot` marks each reboot; `shutdown system down` marks clean shutdowns. Related: `lastb` reads `/var/log/btmp` (FAILED logins, needs sudo) — useful for spotting brute-force attempts. `lastlog` shows only the MOST RECENT login per user.",
    usage: "After a security alert, answering 'who's been logging in?'. Confirming a server's recent reboot history. Building monthly access reports.",
    examples: [
      "last  # full login history (newest first)",
      "last -n 10  # only the most recent 10 entries",
      "last alice  # only logins by user alice",
      "last reboot  # only reboot markers — shows uptime patterns",
      "sudo lastb -n 20  # most recent FAILED logins (brute-force evidence)"
    ],
    memoryTip: "`last` = LAST logins (most recent first). Sibling triad: `last` (successful), `lastb` (bad/failed, needs sudo), `lastlog` (one row per user). All three read /var/log/{wtmp,btmp,lastlog}.",
    outputExample: "$ last -n 3\nalice    pts/0   192.168.1.10   Sat May 14 09:00   still logged in\nbob      pts/1   10.0.0.5       Sat May 14 08:42 - 09:15  (00:33)\nreboot   system boot 6.8.0-31      Sat May 14 08:30   still running\n\nwtmp begins Mon May 13 09:14:00 2026",
    category: "SYSTEM INFO"
  },
  {
    id: "sys26",
    question: "Show virtual memory, IO, and CPU stats every second",
    answer: "vmstat 1",
    explanation: "vmstat prints aggregate system stats. The trailing number is the refresh interval in seconds.",
    usage: "Identify whether a slowdown is CPU, memory pressure, or IO bound.",
    examples: [
      "vmstat 1",
      "vmstat 1 5  # 5 samples then exit",
      "vmstat -SM 1  # Memory in MiB"
    ],
    memoryTip: "vmstat = virtual memory + system stats.",
    outputExample: "$ vmstat 1\nprocs ---memory---  ---cpu---\n r b   free buff cache  us sy id\n 1 0   123M  10M  500M  10  2 85",
    category: "SYSTEM INFO"
  },
  {
    id: "sys27",
    question: "Show extended per-disk I/O statistics with `iostat -xz 1` (refresh every 1 second, hide idle disks)",
    answer: "iostat -xz 1",
    explanation: "`iostat` (from the `sysstat` package — install with `sudo apt install sysstat` or `sudo dnf install sysstat`) reports CPU usage and disk I/O. Flags: `-x` extended stats (you'll see `%util`, `await`, `r/s`, `w/s` — the columns you actually want), `-z` zero-suppression (hides devices with no activity, so you focus on the busy ones), `1` = refresh interval in seconds. Key columns: `r/s` reads per second, `w/s` writes per second, `rkB/s`/`wkB/s` throughput, `await` average ms per I/O (over ~10ms on an SSD means trouble), `%util` percent of wall-time the disk was busy (90%+ means saturated). Compare with `vmstat` for system-wide and `iotop` for per-process I/O.",
    usage: "Diagnosing 'why is the server slow?' when CPU and RAM look fine — usually a disk is saturated. Comparing I/O before and after a tuning change. Spotting which of several disks holds the hot data.",
    examples: [
      "iostat -xz 1  # extended, hide idle, refresh each second — the everyday combo",
      "iostat -xz 2 5  # 5 samples then exit, 2 seconds apart",
      "iostat -m  # use MB/s instead of KB/s",
      "iostat -h  # human-readable units",
      "iotop -o  # PER-PROCESS I/O (different command; install iotop) — needs sudo"
    ],
    memoryTip: "`iostat` = I/O STATistics. Pair-think: `vmstat`=system-wide, `iostat`=per-disk, `iotop`=per-process, `mpstat`=per-CPU. All four ship in the `sysstat` package — the standard performance toolkit.",
    outputExample: "$ iostat -xz 1\nLinux 6.8.0  (host)   05/15/2026  _x86_64_  (12 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           4.21    0.00    1.12    0.42    0.00   94.25\n\nDevice    r/s   w/s   rkB/s   wkB/s   await %util\nnvme0n1  12.0  34.5   384.0  1840.0   1.42   3.10\nsda       0.0   3.2     0.0   256.0   0.85   0.95",
    category: "SYSTEM INFO"
  },
  {
    id: "sys28",
    question: "Show a concise table of all detected hardware with `sudo lshw -short`",
    answer: "sudo lshw -short",
    explanation: "`lshw` ('list hardware') is the most thorough hardware inventory tool — it pulls from DMI/SMBIOS (the BIOS-level data), sysfs, /proc, and direct device queries. By default it prints a verbose tree (hundreds of lines). `-short` collapses it to a one-row-per-device table with columns `H/W path`, `Device` (kernel name like `eth0` or `/dev/sda`), `Class` (system/processor/memory/network/storage), and `Description`. Needs `sudo` to read full data — without root it skips firmware fields. Install with `sudo apt install lshw` or `sudo dnf install lshw` (not always preinstalled). `-C CLASS` filters: `-C network`, `-C disk`, `-C memory`. `-html` and `-json` give machine-readable formats.",
    usage: "First-day inventory of an unfamiliar server. Building an asset spreadsheet. Confirming installed RAM matches what you paid for ('do I really have 32GB or 2x16?'). Checking exact NIC model before downloading a driver.",
    examples: [
      "sudo lshw -short  # the compact table — start here",
      "sudo lshw -C network  # only NICs (wired and wireless)",
      "sudo lshw -C disk -C storage  # disks and controllers",
      "sudo lshw -json > inventory.json  # machine-readable inventory",
      "sudo dmidecode -t memory  # alternative: just RAM slot info from BIOS"
    ],
    memoryTip: "`lshw` = LiSt HardWare. Cousins for narrower jobs: `lscpu`, `lspci`, `lsusb`, `lsblk`. Use `lshw` when you want everything at once; use the specific `ls*` tool when you only care about one bus.",
    outputExample: "$ sudo lshw -short\nH/W path           Device      Class       Description\n=========================================================\n                               system      ThinkPad T490\n/0                             bus         20N3CTO1WW\n/0/0                           memory      128KiB BIOS\n/0/4                           processor   Intel Core i7-9750H\n/0/15                          memory      16GiB System Memory\n/0/100/2                       display     UHD Graphics 630\n/0/100/14/0/2      wlp0s20f3   network     Wireless 9560\n/0/100/1f.6        eno1        network     Ethernet I219-LM\n/0/100/1d/0        nvme0       storage     SM981/PM981/PM983\n/0/100/1d/0/0      /dev/nvme0n1 disk      512GB",
    category: "SYSTEM INFO"
  },
  {
    id: "sys29",
    question: "View detailed memory usage from the kernel",
    answer: "cat /proc/meminfo",
    explanation: "/proc/meminfo is the kernel's authoritative memory breakdown: total, free, cached, buffers, slab, dirty pages, swap, etc.",
    usage: "Investigate memory leaks or unexpected caching beyond what free shows.",
    examples: [
      "cat /proc/meminfo",
      "grep -E 'MemTotal|MemAvailable|Cached' /proc/meminfo",
      "awk '/MemAvailable/ {print $2/1024 \" MB\"}' /proc/meminfo"
    ],
    memoryTip: "/proc/meminfo = the kernel's memory page.",
    outputExample: "$ head -3 /proc/meminfo\nMemTotal:       16384000 kB\nMemFree:         1024000 kB\nMemAvailable:    8192000 kB",
    category: "SYSTEM INFO"
  },
  {
    id: "sys30",
    question: "Show only error-level entries in the system journal",
    answer: "journalctl -p err",
    explanation: "-p priority filters by syslog severity (emerg…debug); err shows level 3 and above.",
    usage: "Skim a noisy journal for actual problems.",
    examples: [
      "journalctl -p err -b  # Errors since current boot",
      "journalctl -p warning..err",
      "journalctl -p err --since '1 hour ago'"
    ],
    memoryTip: "-p = priority level filter.",
    outputExample: "$ journalctl -p err -b -n 3\nMay 14 10:12 host kernel: usb 1-2: error",
    category: "SYSTEM INFO"
  },

  // BASH SCRIPTING — extended (practical workflows)
  {
    id: "bash11",
    question: "Turn on bash strict mode at the top of a script with `set -euo pipefail`",
    answer: "set -euo pipefail",
    explanation: "By default bash is forgiving: a failing command, an undefined variable, or a broken pipe stage are SILENT — the script just keeps running, often producing wrong results without any error. `set -euo pipefail` combines three safety nets: `-e` (errexit): exit immediately if any command returns non-zero — no more chains of broken steps; `-u` (nounset): treat reading an unset variable as an error instead of an empty string — catches typos; `-o pipefail`: the exit code of a pipeline is the exit code of the LAST command that failed (not just the last command), so `failing | grep x` actually fails. Many scripts also add `IFS=$'\\n\\t'` to make word-splitting safer (no spaces in IFS). `set -e` has well-known corner cases: it does NOT trigger if the failing command is part of an `if`, `while`, `until`, `||`, `&&`, `!`, or has its return value used. To temporarily allow failures inside a strict-mode script, wrap the risky command: `if ! risky_cmd; then ...; fi` or `risky_cmd || true`. Strict mode is the single highest-leverage thing you can add to a script.",
    usage: "First substantive line of EVERY non-trivial bash script. Especially crucial in cron jobs and CI scripts where silent failure causes 'why didn't the deploy work?' incidents.",
    examples: [
      "#!/usr/bin/env bash\nset -euo pipefail\nIFS=$'\\n\\t'  # canonical strict-mode preamble",
      "set -e\nfalse  # script exits here, never reaches the next line\necho 'never printed'",
      "set -u\necho \"$UNSET_VAR\"  # script exits: 'UNSET_VAR: unbound variable'",
      "set -o pipefail\nfalse | tee /tmp/x  # pipeline exit code is 1 (false's), not 0 (tee's)",
      "risky_cmd || true  # explicit opt-out of -e for this one command",
      "set +e; risky_block; set -e  # temporarily disable -e around a block"
    ],
    memoryTip: "`-e -u -o pipefail` = Errexit + Unset-vars + Pipefail. `IFS=$'\\n\\t'` is a common companion that protects against word-splitting on spaces. To opt out: `cmd || true`. To inspect: `set -o` lists all options.",
    outputExample: "$ cat strict.sh\n#!/usr/bin/env bash\nset -euo pipefail\nfalse\necho 'never seen'\n$ bash strict.sh; echo \"exit=$?\"\nexit=1\n$ bash -c 'set -u; echo \"$NOPE\"'\nbash: NOPE: unbound variable\n$ bash -c 'set -o pipefail; false | true'; echo $?\n1",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash12",
    question: "Run cleanup code automatically when the script exits with `trap 'cleanup' EXIT`",
    answer: "trap 'cleanup' EXIT",
    explanation: "`trap` registers a handler that runs when the shell receives a specific 'signal' (a Unix interrupt: SIGINT for Ctrl-C, SIGTERM for `kill PID`, SIGHUP when terminal closes, etc.) or pseudo-signal. The `EXIT` pseudo-signal is special: it fires when the shell terminates FOR ANY REASON — clean exit, `exit 1`, error under `set -e`, or killed by a signal — so it's the ideal place for cleanup that MUST happen. Common pattern: at the top of the script, create a temp dir with `tmp=$(mktemp -d)` then immediately `trap 'rm -rf \"$tmp\"' EXIT` so the temp dir is deleted no matter what. The `ERR` pseudo-signal fires only on a command failure (under `set -e`), useful for logging where the failure happened: `trap 'echo \"failed at line $LINENO\"' ERR`. The handler can be a quoted command string OR a function name. Use `trap '' SIGNAL` (empty string) to IGNORE a signal — and `trap - SIGNAL` to reset to default. View installed traps with bare `trap`. Pitfall: an `EXIT` trap set in a subshell only applies to that subshell.",
    usage: "Removing temp files, releasing flock locks, sending failure notifications to Slack, restoring a config file you modified — anything that MUST run even if the script crashes halfway.",
    examples: [
      "tmp=$(mktemp -d)\ntrap 'rm -rf \"$tmp\"' EXIT  # the classic temp-dir pattern",
      "trap 'echo \"FAILED at line $LINENO\" >&2' ERR  # report where errors happen",
      "trap 'kill 0' INT TERM  # on Ctrl-C, kill all jobs in this process group",
      "cleanup() { rm -f /var/run/myapp.lock; }\ntrap cleanup EXIT  # function as handler",
      "trap '' INT  # IGNORE Ctrl-C (the user can't kill us cleanly — use sparingly!)",
      "trap  # list all installed traps in this shell"
    ],
    memoryTip: "`trap CMD SIGNAL` = run CMD when SIGNAL fires. Pseudo-signals: `EXIT` (always on exit), `ERR` (on command failure), `DEBUG` (before each command). Reset with `trap - SIGNAL`. Ignore with `trap '' SIGNAL`. Use `mktemp -d` + `trap 'rm -rf' EXIT` as the standard temp-dir idiom.",
    outputExample: "$ cat with-trap.sh\n#!/usr/bin/env bash\nset -euo pipefail\ntmp=$(mktemp -d)\ntrap 'echo \"cleaning $tmp\"; rm -rf \"$tmp\"' EXIT\necho \"working in $tmp\"\ntouch \"$tmp/file\"\nfalse  # provoke an error\n$ bash with-trap.sh; echo \"exit=$?\"\nworking in /tmp/tmp.AbcDe\ncleaning /tmp/tmp.AbcDe\nexit=1\n$ ls /tmp/tmp.AbcDe\nls: cannot access '/tmp/tmp.AbcDe': No such file or directory",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash13",
    question: "Parse short flags like `-f filename` in a script using the `getopts` builtin",
    answer: "while getopts \"f:\" opt; do case $opt in f) file=$OPTARG;; esac; done",
    explanation: "`getopts` is bash's built-in flag parser (NOT to be confused with the external `getopt` command, which is different and weirder). The spec string `\"f:v\"` declares two flags: `-f` (with required argument, indicated by the colon) and `-v` (no argument). On each call, `getopts` looks at the next positional parameter; if it's a known flag, it stores the letter in `$opt` and (if the flag takes a value) the value in `$OPTARG`, then bumps the index `$OPTIND`. When there are no more flags, `getopts` returns non-zero — that ends the `while` loop. After the loop you should `shift $((OPTIND-1))` to drop everything getopts consumed, leaving any non-flag arguments as `$1`, `$2`, ... Limitations: getopts only handles SHORT options (`-f`, not `--file`); it can't handle long flags. For long flags either write a manual `while case` loop or use external `getopt`. Standard pattern: a `case` inside the loop, one branch per flag, plus `\\?)` for unknown flags and `:)` for missing required values.",
    usage: "Adding `-h`, `-v`, `-f FILE`, etc. flags to a script in 5 lines, without pulling in a dependency.",
    examples: [
      "while getopts 'f:vh' opt; do\n  case $opt in\n    f) file=$OPTARG ;;\n    v) verbose=1 ;;\n    h) usage; exit 0 ;;\n    \\?) echo \"bad flag\" >&2; exit 1 ;;\n    :) echo \"$OPTARG needs an arg\" >&2; exit 1 ;;\n  esac\ndone\nshift $((OPTIND-1))",
      "OPTIND=1  # reset before reusing getopts inside a function",
      "getopts ':hf:' opt  # leading colon: enables ':' case for missing-arg",
      "shift $((OPTIND-1))  # leaves non-flag args as $@",
      "echo \"remaining args: $@\"  # after the shift, positional args are the non-flag inputs",
      "while [[ $# -gt 0 ]]; do case $1 in --file) file=$2; shift 2;; esac; done  # manual loop for LONG flags"
    ],
    memoryTip: "Spec `\"f:v\"` = `-f` needs arg (colon after), `-v` doesn't. Letter goes in `$opt`, value in `$OPTARG`, position in `$OPTIND`. After the loop: `shift $((OPTIND-1))` to drop consumed flags. SHORT FLAGS ONLY — for `--long` flags, write a manual `while case` loop.",
    outputExample: "$ cat opts.sh\n#!/usr/bin/env bash\nverbose=0; file=\nwhile getopts 'f:vh' opt; do\n  case $opt in\n    f) file=$OPTARG ;;\n    v) verbose=1 ;;\n    h) echo \"usage: $0 [-f FILE] [-v]\"; exit 0 ;;\n  esac\ndone\nshift $((OPTIND-1))\necho \"file=$file verbose=$verbose remaining=$@\"\n$ ./opts.sh -f data.txt -v extra arg\nfile=data.txt verbose=1 remaining=extra arg",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash14",
    question: "Provide a fallback when a variable is unset or empty using `${var:-default}` parameter expansion",
    answer: "${var:-default}",
    explanation: "Parameter expansion is the bash mini-language that goes inside `${...}` for transforming variable values. The `:-` form means: if `$var` is unset OR empty, the WHOLE expression evaluates to `default`, without changing `$var`. Drop the colon (`${var-default}`) and 'empty' no longer counts as missing — only truly UNSET triggers the fallback. Other useful forms in the same family: `${var:=default}` (set `$var` to `default` AND return it — actually assigns), `${var:+something}` (return `something` only if `$var` IS set and non-empty — opposite logic), `${var:?error msg}` (exit with an error if unset/empty — covered in bash15). This is the idiomatic way to give defaults in scripts, replacing `[ -z \"$x\" ] && x=default` boilerplate. Works great with `$1`: `name=\"${1:-stranger}\"` gives a default if the user didn't pass an argument. Combine with command substitution: `host=\"${HOSTNAME:-$(hostname)}\"`.",
    usage: "Setting defaults for environment variables (`port=\"${PORT:-8080}\"`), positional args, or configuration values pulled from `~/.config`.",
    examples: [
      "echo \"Hello, ${NAME:-stranger}\"  # default if NAME unset OR empty",
      "port=\"${PORT:-8080}\"  # default port for an app",
      "branch=\"${1:-main}\"  # default if no argument passed",
      "log_dir=\"${LOG_DIR:=/var/log/myapp}\"  # set AND default (note := instead of :-)",
      ": \"${HOME:?must be set}\"  # error and exit if HOME is empty",
      "msg=\"${USE_COLOR:+[colored]} hello\"  # 'colored' only if USE_COLOR set"
    ],
    memoryTip: "`:-` use-default (no assign), `:=` assign-and-use, `:+` use-only-if-set (opposite), `:?` error-if-empty. With colon: 'unset OR empty' triggers; without colon: only 'unset' triggers. The leading `:` is the no-op command (useful when you only care about side effects).",
    outputExample: "$ unset NAME\n$ echo \"${NAME:-stranger}\"\nstranger\n$ NAME=\"\"; echo \"${NAME:-stranger}\"\nstranger\n$ NAME=Alice; echo \"${NAME:-stranger}\"\nAlice\n$ unset PORT; port=\"${PORT:=8080}\"; echo \"port=$port PORT=$PORT\"\nport=8080 PORT=8080\n$ : \"${MUST_SET:?required}\"\nbash: MUST_SET: required",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash15",
    question: "Hard-fail a script when a required variable is missing using `${var:?error message}`",
    answer: "${var:?missing var}",
    explanation: "The `:?` parameter expansion is the loud sibling of `:-`. If `$var` is unset or empty, bash prints `bash: var: <your message>` to stderr and EXITS the (non-interactive) script with a non-zero status. In an interactive shell it just prints the error without exiting. The leading `:` (the no-op/null command) is a common idiom — it lets you use the expansion purely for its side effect (the error/exit) without needing to assign it anywhere: `: \"${API_TOKEN:?API_TOKEN is required}\"` reads as 'evaluate, ignore, but trigger the check'. This is much cleaner than the verbose alternative `[ -z \"$API_TOKEN\" ] && { echo 'need API_TOKEN' >&2; exit 1; }`. Pair it with `${1:?usage: $0 <arg>}` to make script arguments mandatory. Without the colon, `${var?msg}` only triggers when `$var` is UNSET (an empty-string `$var` would pass). With the colon, empty also fails. Put these checks at the top of the script BEFORE any destructive work.",
    usage: "Guarding destructive operations behind required environment variables, enforcing required script arguments, or making config defaults loud about what's missing.",
    examples: [
      ": \"${API_TOKEN:?API_TOKEN env var is required}\"  # canonical guard, top of script",
      "TARGET=\"${1:?Usage: $0 <hostname>}\"  # required positional argument",
      ": \"${DB_PASSWORD:?Set DB_PASSWORD before running}\"  # secrets check",
      "host=\"${HOST:?HOST must be set}\"; port=\"${PORT:?PORT must be set}\"  # multiple checks in a row",
      ": \"${1:?} \"${2:?}\"  # bare colon — uses default message",
      "[ -z \"${API_TOKEN:-}\" ] && { echo 'need API_TOKEN' >&2; exit 1; }  # verbose alternative"
    ],
    memoryTip: "`:?` = error-if-empty (LOUD). `:-` = use-if-empty (QUIET). Use `: \"${VAR:?msg}\"` as the top-of-script preflight pattern — the leading `:` is the null command so the expansion only runs for its check effect. Exits the script; does NOT just print a warning.",
    outputExample: "$ cat req.sh\n#!/usr/bin/env bash\nset -euo pipefail\n: \"${API_TOKEN:?API_TOKEN env var is required}\"\necho \"using token: $API_TOKEN\"\n$ bash req.sh\nreq.sh: line 3: API_TOKEN: API_TOKEN env var is required\n$ echo $?\n1\n$ API_TOKEN=sk-abc bash req.sh\nusing token: sk-abc",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash16",
    question: "Replace every occurrence of a substring inside a variable with `${var//search/replace}` (built-in string substitution)",
    answer: "${var//search/replace}",
    explanation: "Bash has built-in string substitution that runs entirely in the shell — no `sed` subprocess needed, which is faster and works on variables that might contain newlines/specials. The forms: `${var/search/replace}` replaces the FIRST match only; `${var//search/replace}` replaces ALL matches (double slash = global). `search` can be a literal string OR a glob pattern: `${file//*.tmp/}` would strip a `.tmp` suffix glob, for example. Anchor patterns: `${var/#prefix/replace}` only matches at the START, `${var/%suffix/replace}` only at the END. Leave `replace` empty to DELETE: `${var//foo/}` removes every `foo`. Related patterns in the same family: `${var#prefix}` / `${var##prefix}` strip a matching PREFIX (shortest / longest match); `${var%suffix}` / `${var%%suffix}` strip a matching SUFFIX. The `#`/`##` and `%`/`%%` distinction: single = shortest match, double = longest. These are how you write basename/dirname-style operations without forking external commands.",
    usage: "Cleaning filenames (spaces to underscores), stripping prefixes/suffixes from paths, sanitizing user input, building variants of a value.",
    examples: [
      "path=/home/alice/file.txt\necho \"${path//alice/bob}\"  # → /home/bob/file.txt — replace all",
      "name='my photo.jpg'\necho \"${name// /_}\"  # → my_photo.jpg — spaces to underscores",
      "log='ERROR: ERROR: failed'\necho \"${log/ERROR/WARN}\"  # → WARN: ERROR: failed — first only",
      "file=image.png; echo \"${file%.png}.jpg\"  # → image.jpg — change extension",
      "path=/tmp/foo/bar.txt; echo \"${path##*/}\"  # → bar.txt — basename",
      "path=/tmp/foo/bar.txt; echo \"${path%/*}\"  # → /tmp/foo — dirname"
    ],
    memoryTip: "`/` first, `//` all, `/#` anchor at start, `/%` anchor at end. Family includes `#`/`##` (strip prefix, short/long match) and `%`/`%%` (strip suffix). These are FASTER than `sed`/`tr` because they don't fork — use for variables, not for files.",
    outputExample: "$ s='one two three'\n$ echo \"${s// /-}\"\none-two-three\n$ file='IMG_1234.JPG'\n$ echo \"${file,,}\"  # bonus: lowercase\nimg_1234.jpg\n$ path=/home/alice/notes.txt\n$ echo \"basename=${path##*/} dir=${path%/*} ext=${path##*.}\"\nbasename=notes.txt dir=/home/alice ext=txt",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash17",
    question: "Branch cleanly on one of several string values with a `case ... in ... esac` statement",
    answer: "case \"$1\" in start) ... ;; stop) ... ;; *) usage;; esac",
    explanation: "`case` is the bash equivalent of a `switch` statement — pattern-match a value against several alternatives. Syntax: `case VALUE in PATTERN1) actions1 ;; PATTERN2) actions2 ;; *) default ;; esac` (`esac` is 'case' backwards). The terminator `;;` ends one branch; `;&` falls through to the NEXT branch (like missing `break` in C); `;;&` continues testing remaining patterns. PATTERNS are GLOBS, not regex: `*.txt` matches any `.txt`, `[0-9]*` matches anything starting with a digit, `start|begin` matches either word (pipe = OR). Patterns are tested in order, first match wins, the rest are skipped. The `*)` catch-all is conventional but not required — without it, unmatched values silently fall through. ALWAYS QUOTE the value: `case \"$x\" in` — unquoted, an empty or unset `$x` becomes a syntax error. case is much cleaner than chained `if/elif/else` when you're testing one variable against many values, especially for subcommand dispatch (e.g., `myscript start|stop|status`).",
    usage: "Subcommand dispatch (`myscript build|test|deploy`), file-extension routing, state machine logic, or readable multi-branch logic.",
    examples: [
      "case \"$1\" in\n  start) echo 'starting'; start_service ;;\n  stop)  echo 'stopping'; stop_service ;;\n  status) status_service ;;\n  *) echo \"usage: $0 {start|stop|status}\" >&2; exit 1 ;;\nesac",
      "case \"$file\" in *.tar.gz|*.tgz) tar -xzf \"$file\" ;; *.zip) unzip \"$file\" ;; *) echo 'unknown'; esac  # extract by extension",
      "case \"$env\" in dev|test|staging) target='nonprod' ;; prod) target='prod' ;; *) die 'bad env' ;; esac  # multi-pattern with |",
      "case \"$(uname -s)\" in Linux*) os=linux ;; Darwin*) os=mac ;; *) os=unknown ;; esac  # OS detection",
      "case \"$ans\" in [Yy]*) echo yes ;; [Nn]*) echo no ;; *) echo 'try again' ;; esac  # y/yes/Y/YES match",
      "case x in a) echo a ;& b) echo 'falls through' ;; esac  # ;& fallthrough — rarely used"
    ],
    memoryTip: "`case VAL in PAT) ACT ;; *) DEFAULT ;; esac`. Patterns are GLOBS (not regex). `|` means OR. `;;` ends a branch, `;&` falls through, `;;&` keeps testing. Always quote the value. `esac` = `case` reversed (along with `fi`, `done`).",
    outputExample: "$ cat svc.sh\n#!/usr/bin/env bash\ncase \"$1\" in\n  start) echo 'starting service' ;;\n  stop)  echo 'stopping service' ;;\n  restart) echo 'restarting' ;;\n  *) echo \"usage: $0 {start|stop|restart}\" >&2; exit 1 ;;\nesac\n$ ./svc.sh start\nstarting service\n$ ./svc.sh foo; echo $?\nusage: ./svc.sh {start|stop|restart}\n1",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash18",
    question: "Declare an associative array (string-keyed map) with `declare -A map` (bash 4+)",
    answer: "declare -A map",
    explanation: "Bash has TWO kinds of arrays: INDEXED (integer keys, like a list) and ASSOCIATIVE (string keys, like a Python dict or hash map). Indexed arrays don't need declaration: `arr=(a b c)`. Associative arrays REQUIRE explicit declaration with `declare -A name` BEFORE assignment — otherwise bash treats the assignment as indexed and converts the string keys to 0 (a notorious gotcha that produces wrong results silently). Associative arrays need bash 4+ (released 2009; absent on macOS's default bash 3.x — use `brew install bash` or rewrite). Syntax: `declare -A url=([dev]=https://dev [prod]=https://prod)` for initialization, `url[staging]=https://stg` to add a key, `${url[dev]}` to read, `${!url[@]}` for all KEYS, `${url[@]}` for all VALUES, `${#url[@]}` for COUNT, `unset url[dev]` to delete a key. Always quote when iterating: `for k in \"${!url[@]}\"; do echo \"$k -> ${url[$k]}\"; done`. Pure POSIX `sh` has NO associative arrays — you have to use parallel indexed arrays or prefixed variables instead.",
    usage: "Lookup tables (env name → URL, hostname → IP, command → handler function), counting occurrences (key = item, value = count), or implementing a simple cache.",
    examples: [
      "declare -A url=([dev]=https://dev.example [prod]=https://example.com)\necho \"${url[prod]}\"  # → https://example.com",
      "declare -A count\nfor word in apple banana apple cherry apple; do ((count[$word]++)); done\nfor w in \"${!count[@]}\"; do echo \"$w=${count[$w]}\"; done",
      "declare -A handler=([build]=do_build [test]=do_test [deploy]=do_deploy)\n\"${handler[$1]:-die}\"  # subcommand dispatch via map",
      "[[ -v url[dev] ]] && echo 'dev key exists'  # check for KEY existence (bash 4.2+)",
      "for k in \"${!url[@]}\"; do echo \"$k -> ${url[$k]}\"; done  # iterate over keys",
      "unset url[dev]  # delete a single key"
    ],
    memoryTip: "`-A` Associative (string keys), `-a` indexed (integer). Associative arrays MUST be declared BEFORE use — `declare -A name` first. `${!arr[@]}` = all KEYS, `${arr[@]}` = all VALUES. Bash 4+ only — macOS default bash is 3.x.",
    outputExample: "$ declare -A url=([dev]=https://dev.x [prod]=https://x)\n$ url[staging]=https://staging.x\n$ echo \"${url[dev]}\"\nhttps://dev.x\n$ for k in \"${!url[@]}\"; do echo \"$k -> ${url[$k]}\"; done\nstaging -> https://staging.x\ndev -> https://dev.x\nprod -> https://x\n$ echo \"keys: ${#url[@]}\"\nkeys: 3",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash19",
    question: "Read every line of a file into a bash array with `mapfile -t lines < file.txt`",
    answer: "mapfile -t lines < file.txt",
    explanation: "`mapfile` (alias `readarray`, same builtin, two names) reads stdin line-by-line and stores each line as one element of the named array. The `-t` flag strips the trailing newline from each element — almost always what you want. Without `-t`, every element would carry `\\n` at the end and confuse downstream code. Other flags: `-n N` (read at most N lines), `-s N` (skip the first N lines), `-O N` (start writing at index N — useful for appending), `-c N` and `-C callback` (call a function every N lines). `mapfile` is a bash 4+ builtin and is MUCH faster than the old loop-and-append pattern (`while read line; do arr+=(\"$line\"); done`). For input from a pipeline use process substitution: `mapfile -t errs < <(grep ERROR app.log)`. With no array name, the default name is `MAPFILE`. After reading, access elements with `${lines[0]}`, count with `${#lines[@]}`, iterate with `for l in \"${lines[@]}\"; do ...; done`. CAUTION: on macOS default bash (3.x) `mapfile` doesn't exist; install newer bash or use `IFS=$'\\n' read -d '' -a arr < <(cmd)`.",
    usage: "Bulk-loading config lists, processing line-oriented files with random access, deduplicating lines, or buffering command output before processing.",
    examples: [
      "mapfile -t lines < users.txt\necho \"first: ${lines[0]} (of ${#lines[@]})\"  # canonical load",
      "mapfile -t errors < <(grep ERROR app.log)  # from a pipeline via process subst",
      "mapfile -t -n 10 first_ten < big.log  # only the first 10 lines",
      "mapfile -t -s 1 data < table.csv  # skip the header line",
      "for l in \"${lines[@]}\"; do echo \">> $l\"; done  # iterate safely (always quote)",
      "mapfile -t paths < <(find . -name '*.txt')  # all *.txt paths into array, newline-safe"
    ],
    memoryTip: "`mapfile -t arr < file` = lines into array, no trailing `\\n`. Default array name is `MAPFILE` if you omit. `< <(cmd)` = process substitution for piping into mapfile (you can't pipe into a builtin and keep the array). Bash 4+ only. Iteration: `for l in \"${arr[@]}\"; do ...; done`.",
    outputExample: "$ cat hosts.txt\nweb1\nweb2\ndb1\n$ mapfile -t hosts < hosts.txt\n$ echo \"count: ${#hosts[@]}\"\ncount: 3\n$ echo \"${hosts[1]}\"\nweb2\n$ for h in \"${hosts[@]}\"; do echo \"checking $h\"; done\nchecking web1\nchecking web2\nchecking db1\n$ mapfile -t errs < <(grep -i error /var/log/syslog 2>/dev/null)\n$ echo \"found ${#errs[@]} error lines\"\nfound 7 error lines",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash20",
    question: "Do integer arithmetic in bash with `(( expression ))` — e.g. `(( i++ ))` to increment a counter",
    answer: "(( i++ ))",
    explanation: "`(( ... ))` is bash's ARITHMETIC EVALUATION context. Inside the double parens you write C-like math: `+ - * / %` (modulo), `**` (power), `++ --` (inc/dec), `+= -= *= /=` (compound assign), comparison `< <= > >= == !=`, logical `&& || !`, bitwise `& | ^ ~ << >>`, ternary `? :`. Variables DON'T need `$` inside (`(( i = i + 1 ))` not `(( $i = $i + 1 ))`). The return code is 0 if the expression result is NON-ZERO (truthy), 1 if zero — so `(( i > 5 ))` works as a boolean in `if`. There's also `$((...))` which is arithmetic EXPANSION: it returns the value of the expression as text, suitable for substitution into strings: `n=$((a + b))`. KEY DIFFERENCE: `(( expr ))` is a STATEMENT (no `$`), `$(( expr ))` is an EXPRESSION (use the result). Bash arithmetic is INTEGER only — no floats. For floats use `bc -l` or awk. Foot-gun under `set -e`: `(( i++ ))` when `i=0` returns 1 (because the OLD value was zero/false), which under `set -e` exits the script. Workaround: `(( i++ )) || true` or use `((++i))` (pre-increment).",
    usage: "Loop counters, arithmetic comparisons, building filenames with computed indexes, simple math without calling `expr` or `bc`.",
    examples: [
      "i=0; (( i++ )); echo $i  # → 1, but careful: returns 1 (the old value)",
      "(( total = price * 1.0 ))  # ❌ NO FLOATS — would set total=price",
      "if (( count > 100 )); then echo 'too many'; fi  # arithmetic comparison",
      "n=$(( 2 ** 10 ))  # n=1024 — arithmetic expansion (use $(()) when capturing)",
      "for (( i=0; i<10; i++ )); do echo $i; done  # C-style for loop",
      "(( i++ )) || true  # prevent set -e from killing on pre-zero increment"
    ],
    memoryTip: "`(( expr ))` STATEMENT (no $ on vars inside), `$((expr))` EXPRESSION (use result). C operators work: `++ -- += *= **`, comparisons, ternary. INTEGER ONLY — use `bc -l` or `awk` for floats. Under `set -e`, `(( i++ ))` can exit when `i` was 0 — prefer `((++i))` or append `|| true`.",
    outputExample: "$ i=0\n$ (( i++ )); echo $i\n1\n$ ((i+=10)); echo $i\n11\n$ if (( i > 5 )); then echo big; fi\nbig\n$ echo $((2**16))\n65536\n$ for ((j=0; j<3; j++)); do echo \"j=$j\"; done\nj=0\nj=1\nj=2",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash21",
    question: "Make a timestamped gzip-compressed tarball backup with `tar -czf \"backup-$(date +%F).tar.gz\" /data`",
    answer: "tar -czf \"backup-$(date +%F).tar.gz\" /data",
    explanation: "This is the canonical 'nightly backup' one-liner. `tar` (Tape ARchive) is the standard bundling tool on Linux. Flags: `-c` create, `-z` gzip-compress on the fly, `-f FILE` use FILE as the archive name (`-f` MUST be the LAST flag before the filename — common typo). `$(date +%F)` is command substitution: `date +%F` is shorthand for `date +%Y-%m-%d` which prints today's date as `2026-05-17`. So if today is 2026-05-17 you end up with `backup-2026-05-17.tar.gz`. Add `%H%M` or `%H-%M-%S` to the date format for hour-precision (`%F-%H%M%S`) — useful if you might run the backup multiple times per day. By default tar stores the path as given, so `tar -czf x.tgz /data` includes leading `/data/` in every path; passing `-C /data .` instead makes paths relative. Pair with `find ... -mtime +30 -delete` to rotate old backups, or pipe the tar straight to `ssh remote 'cat > backup.tgz'` for off-site copies. ALWAYS quote the filename — spaces or special chars from a poorly-chosen format string could break the command.",
    usage: "Nightly backups via cron, ad-hoc snapshots before a risky change, or capturing logs for support.",
    examples: [
      "tar -czf \"backup-$(date +%F).tar.gz\" /data  # daily: 2026-05-17",
      "tar -czf \"snap-$(date +%F-%H%M%S).tgz\" /etc  # second-precision: 2026-05-17-093015",
      "tar -czf - /data | ssh backup@host 'cat > /var/backups/data.tgz'  # stream off-site",
      "tar -czf - /data | gpg -c > backup.tgz.gpg  # encrypt during creation",
      "tar -cJf \"backup-$(date +%F).tar.xz\" /data  # use xz (smaller but slower than gz)",
      "find /var/backups -name 'backup-*.tar.gz' -mtime +30 -delete  # rotate 30+ days old"
    ],
    memoryTip: "`tar -czf` = Create, gZip, File. `$(date +%F)` = today YYYY-MM-DD. `%H%M%S` for sub-day precision. Companion: rotate old backups with `find ... -mtime +N -delete`. To stream off-site: `tar -czf - DIR | ssh host 'cat > backup.tgz'`.",
    outputExample: "$ tar -czf \"backup-$(date +%F).tar.gz\" /etc\n$ ls -lh backup-*.tar.gz\n-rw-r--r-- 1 alice alice 1.8M May 17 09:32 backup-2026-05-17.tar.gz\n$ tar -tzf backup-2026-05-17.tar.gz | head\netc/\netc/passwd\netc/hostname\netc/hosts\netc/group\netc/shadow",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash22",
    question: "Delete files older than N days with `find DIR -name 'pattern' -mtime +N -delete`",
    answer: "find /var/log -name '*.log' -mtime +7 -delete",
    explanation: "`find` walks a directory tree applying tests. `-mtime +7` matches files whose modification time is MORE THAN 7×24 hours ago; `-mtime -7` is LESS than 7 days ago; `-mtime 7` is EXACTLY 7 days (between 7×24 and 8×24 hours). Variants for other timestamps: `-atime` (access time), `-ctime` (status change time), `-mmin` (in minutes). The `-delete` action removes matching entries in-place. CRITICAL HABIT: always test the find first by replacing `-delete` with `-print` (or just removing it) to see what WOULD be deleted before letting find run wild. `-delete` is irreversible. Put `-delete` LAST in the expression — find evaluates left-to-right, and if you put `-delete` before other tests, you can end up deleting everything tried so far. To delete BOTH files and directories, add `-depth` (depth-first so directories are visited after their contents). Combine with `-name 'glob'` (filename match), `-type f` (regular files only — don't delete directories or symlinks), and `-mindepth 1` (skip the starting directory itself).",
    usage: "Log rotation (delete logs > 7 days), cleaning temp files in `/tmp`, dropping old backups, or scheduled cron-based housekeeping.",
    examples: [
      "find /var/log -name '*.log' -mtime +7 -print  # DRY RUN — preview first!",
      "find /var/log -name '*.log' -type f -mtime +7 -delete  # delete after preview",
      "find /tmp -mindepth 1 -mmin +60 -delete  # /tmp files older than 60 minutes",
      "find /var/backups -name 'backup-*.tar.gz' -mtime +30 -delete  # keep last 30 days",
      "find . -name '*.pyc' -delete  # clean compiled Python (no time filter)",
      "find /var/log -name '*.log' -mtime +7 -exec rm -v {} +  # alternative with -exec, shows what's deleted"
    ],
    memoryTip: "`-mtime +N` = older than N days, `-mtime -N` = newer than N days, `-mtime N` = exactly N. `+` more, `-` less, bare = equals. ALWAYS preview with `-print` before `-delete`. Add `-type f` to avoid deleting directories. Put `-delete` LAST in the expression.",
    outputExample: "$ find /var/log -name '*.log' -mtime +7 -print | head\n/var/log/old/app-2026-04-01.log\n/var/log/old/app-2026-04-02.log\n/var/log/old/app-2026-04-08.log\n/var/log/audit/audit.log.4\n/var/log/audit/audit.log.5\n$ find /var/log -name '*.log' -type f -mtime +7 -delete\n# (silent — files removed)\n$ find /var/log -name '*.log' -mtime +7 | wc -l\n0",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash23",
    question: "Batch-rename a glob of files using a for loop + parameter expansion: `for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done`",
    answer: "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done",
    explanation: "The loop globs every `.txt` file in the current directory and runs `mv` on each. The trick is `${f%.txt}`: bash parameter expansion `${var%pattern}` strips the SHORTEST matching SUFFIX. So if `f=notes.txt`, `${f%.txt}` is `notes`, and `${f%.txt}.md` becomes `notes.md`. Use `%%` instead of `%` for the LONGEST match (greedy). Use `#`/`##` for PREFIX stripping (`${f#prefix}` / `${f##prefix}`). ALWAYS quote `\"$f\"` and `\"${f%.txt}.md\"` — filenames with spaces would break the `mv` otherwise. If you want to rename WITHIN names (not just suffix), use the substitution form `${f//search/replace}`: `for f in IMG_*.jpg; do mv \"$f\" \"${f/IMG_/photo-}\"; done`. The Perl-based `rename` command (in `rename` or `prename` packages) does this with full regex, but isn't installed everywhere. Foot-gun: if NO files match the glob, the loop still runs ONCE with the literal `*.txt` as `$f` — set `shopt -s nullglob` at the top of the script to make non-matching globs produce an empty list instead.",
    usage: "Renaming a batch of files after a project rename, swapping extensions after a format conversion, adding a prefix/suffix to a series, or fixing inconsistent naming.",
    examples: [
      "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done  # change extension",
      "shopt -s nullglob; for f in *.jpg; do mv \"$f\" \"${f%.jpg}.jpeg\"; done  # safer: empty glob = empty loop",
      "for f in IMG_*.JPG; do mv \"$f\" \"photo-${f#IMG_}\"; done  # strip prefix, add new one",
      "for f in *.JPG; do mv \"$f\" \"${f%.JPG}.jpg\"; done  # downcase extension",
      "n=0; for f in *.tmp; do mv \"$f\" \"item-$((n++)).tmp\"; done  # number them sequentially",
      "rename 's/\\.txt$/.md/' *.txt  # if 'rename' is installed (Perl regex, very powerful)"
    ],
    memoryTip: "`${f%.txt}` = strip suffix (one `%` shortest, `%%` longest). `${f#prefix}` = strip prefix. `${f/old/new}` = substitute. ALWAYS quote `\"$f\"`. Set `shopt -s nullglob` so non-matching globs give an empty list instead of literal `*.txt`. Power user: `rename` Perl command for regex renames.",
    outputExample: "$ touch a.txt b.txt 'two words.txt'\n$ for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done\n$ ls\na.md  b.md  'two words.md'\n$ shopt -s nullglob; for f in *.nope; do echo \"got $f\"; done\n# (silent — nullglob made the empty list)\n$ for f in IMG_*.jpg; do mv \"$f\" \"vacation-${f#IMG_}\"; done\n$ ls\nvacation-1234.jpg vacation-1235.jpg",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash24",
    question: "Mirror all script output to BOTH the terminal and a log file with `exec > >(tee -a script.log) 2>&1`",
    answer: "exec > >(tee -a script.log) 2>&1",
    explanation: "`exec` without a command REPLACES the current shell's file descriptors. `exec > FILE` redirects this shell's stdout (FD 1) to FILE for every subsequent command — not just one. `>(cmd)` is PROCESS SUBSTITUTION: bash launches `cmd` and gives you a path-like handle (`/dev/fd/63`) that connects to its stdin. So `exec > >(tee -a script.log)` says 'from now on, this script's stdout goes into a `tee -a script.log` process, which copies it to script.log AND to its own stdout (the terminal)'. The trailing `2>&1` makes stderr follow stdout into the same tee, so error messages are also logged. The result: every line printed by the rest of the script (whether stdout or stderr) appears on screen AND is appended to `script.log`. Put this near the TOP of the script, after `set -euo pipefail` but before real work. Variant for keeping stderr separate: `exec > >(tee -a out.log) 2> >(tee -a err.log >&2)`. To send a TIMESTAMPED log, pipe through `ts` (from `moreutils`): `exec > >(ts '[%F %T]' >> script.log) 2>&1`. Foot-gun: process substitution is BASH ONLY — won't work in pure `sh`/dash. Also, the `tee` may exit slightly after the parent script, so the last lines can land out of order.",
    usage: "Cron/deploy scripts that should leave a permanent log AND show output when run interactively. Avoids manual `>> log 2>&1` on every command.",
    examples: [
      "exec > >(tee -a script.log) 2>&1  # canonical 'log everything'",
      "LOG=\"/var/log/myapp-$(date +%F).log\"\nexec > >(tee -a \"$LOG\") 2>&1  # daily log file",
      "exec > >(tee -a out.log) 2> >(tee -a err.log >&2)  # separate stdout/stderr logs",
      "exec > >(ts '[%F %T]' >> script.log) 2>&1  # timestamped (requires `moreutils`)",
      "{ stuff; more_stuff; } 2>&1 | tee -a script.log  # block-scoped alternative (no exec)",
      "exec 3>&1  # save original stdout to FD 3 — used when you want to UNDO the redirect later"
    ],
    memoryTip: "`exec > FILE` = redirect THIS shell's stdout for the rest of its life. `>(cmd)` = process substitution (bash-only). `tee -a FILE` = read stdin, write to terminal AND append to FILE. Combo: `exec > >(tee -a log) 2>&1`. Put it after strict-mode at the top of the script.",
    outputExample: "$ cat logged.sh\n#!/usr/bin/env bash\nset -euo pipefail\nexec > >(tee -a /tmp/run.log) 2>&1\necho 'starting'\nls /nope  # produces an error\necho 'done'\n$ ./logged.sh\nstarting\nls: cannot access '/nope': No such file or directory\ndone\n$ cat /tmp/run.log\nstarting\nls: cannot access '/nope': No such file or directory\ndone",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash25",
    question: "Run a fallback action if a command fails using `command || { echo failed; exit 1; }`",
    answer: "command || { echo failed; exit 1; }",
    explanation: "The `||` (logical OR) operator short-circuits: it runs the RIGHT side ONLY IF the left side exited NON-ZERO (failure). Its sibling `&&` runs the right side only on SUCCESS. Together they let you write inline error handling without a full `if/then/else`. The `{ ... ; }` braces group multiple commands into ONE conditional block — note the required SPACES after `{` and before `}`, and the required `;` (or newline) before the closing brace. Without the braces, only the very next command would be conditional. The classic chain `cmd && echo ok || echo fail` is SUBTLY BROKEN: if `echo ok` itself fails (rare but possible), `echo fail` also fires. Safer: `if cmd; then echo ok; else echo fail; fi`. Common patterns: `curl -fsS URL || die 'fetch failed'` (require a successful fetch), `mkdir -p dir || exit 1` (bail if directory creation fails), `[ -f file ] || { echo missing; exit 2; }` (precondition). Under `set -e`, the LEFT side of `||` is excluded from auto-exit-on-error, which is how you opt out of strict mode for one command: `risky_cmd || true`.",
    usage: "Inline error handling, preflight checks, graceful fallback paths, or short-circuit logic in scripts.",
    examples: [
      "curl -fsS https://example.com/api || { echo 'fetch failed' >&2; exit 1; }  # block exit",
      "mkdir -p /var/run/myapp || exit 1  # single statement, no braces needed",
      "command -v jq >/dev/null || { echo 'install jq first' >&2; exit 1; }  # tool check",
      "risky_cmd || true  # explicit opt-out of set -e for one command",
      "[ -f config.yml ] || die 'config.yml missing'  # precondition (die is a custom function)",
      "ping -c1 -W2 host >/dev/null && echo up || echo down  # if/else one-liner (with the caveat above)"
    ],
    memoryTip: "`cmd || action` = run action ON FAILURE. `cmd && action` = run action ON SUCCESS. `{ a; b; }` groups multiple commands (note spaces + closing `;`). Under `set -e`, the LEFT side of `||` is exempt — that's how `risky || true` opts out. The `&& X || Y` pattern is NOT a clean if/else — use real `if` when it matters.",
    outputExample: "$ false || echo recovered\nrecovered\n$ true || echo recovered\n# (no output — left side succeeded)\n$ false || { echo 'first'; echo 'second'; exit 1; }\nfirst\nsecond\n$ echo $?\n1\n$ curl -fsS https://nope.invalid || echo 'fallback path'\nfallback path",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash26",
    question: "Schedule a script to run every day at 02:30 with a cron line `30 2 * * * /usr/local/bin/job.sh`",
    answer: "30 2 * * * /usr/local/bin/job.sh",
    explanation: "`cron` is the classic Unix scheduler — a daemon that wakes up every minute and runs any commands whose schedule matches the current time. Each crontab line has SIX fields: `MIN HOUR DAY-OF-MONTH MONTH DAY-OF-WEEK COMMAND`. `*` means 'every value' in that field. So `30 2 * * *` means 'at minute 30 of hour 2, every day, every month, every weekday' — i.e., 02:30 daily. Other syntax: `*/N` = every N units (`*/5 * * * *` = every 5 minutes), comma-list (`0,30 * * * *` = at :00 and :30), range (`0 9-17 * * 1-5` = top of every hour 9-17 weekdays). Cron runs jobs in a VERY MINIMAL environment — `$PATH` is short, no `.bashrc` is sourced — so always use absolute paths in your commands and set `PATH=` at the top of the crontab if needed. To install jobs use `crontab -e` (edit your user's table, opens in `$EDITOR`); list with `crontab -l`; remove with `crontab -r`. System-wide alternatives: drop files into `/etc/cron.d/`, `/etc/cron.daily/`, `/etc/cron.hourly/`. Output is emailed to the user unless redirected: `30 2 * * * /path/job.sh >> /var/log/job.log 2>&1`. On modern systems consider `systemd timers` for better logging and triggers.",
    usage: "Nightly backups, daily log rotation, monthly reports, periodic health checks, or any time-based automation.",
    examples: [
      "30 2 * * * /usr/local/bin/backup.sh  # daily at 02:30",
      "0 3 * * 0 /usr/local/bin/weekly.sh  # 03:00 every Sunday (0=Sun, 7=Sun also valid)",
      "0 9-17 * * 1-5 /opt/heartbeat.sh  # hourly during work hours, weekdays only",
      "15 0 1 * * /opt/monthly-report.sh  # 00:15 on the 1st of every month",
      "30 2 * * * /usr/local/bin/job.sh >> /var/log/job.log 2>&1  # always log output",
      "@reboot /opt/start-on-boot.sh  # special: run at boot (also @daily, @weekly, @hourly)"
    ],
    memoryTip: "Five fields: `min hour dom mon dow`. `*` every, `*/N` every N, `,` list, `-` range. Mnemonic: 'My Hat Doesn't Match Dad's' (Min Hour Dom Mon Dow). Edit with `crontab -e`, list with `crontab -l`. ALWAYS use absolute paths; cron has a minimal $PATH.",
    outputExample: "$ crontab -e\n# (opens editor; add your line)\n$ crontab -l\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n30 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1\n0 3 * * 0 /usr/local/bin/weekly-cleanup.sh\n*/15 * * * * /usr/local/bin/health-check.sh\n@reboot /opt/setup-network.sh",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash27",
    question: "Schedule a cron job to run every 15 minutes using the step syntax `*/15 * * * * /path/to/cmd`",
    answer: "*/15 * * * * /path/to/cmd",
    explanation: "The `*/N` syntax in any cron field means 'every N units, starting at 0'. Put `*/15` in the minute field and the job fires at minute 0, 15, 30, and 45 of every hour — four times per hour, 96 times per day. Replace the slash with a list to fire at specific minutes only: `0,15,30,45 * * * *` is equivalent but more verbose. The same works in the hour field: `0 */6 * * *` runs at 00:00, 06:00, 12:00, 18:00. For sub-minute precision (e.g., every 30 seconds) classic cron CAN'T do it — you'd run a script every minute that itself sleeps for 30s and runs the work twice, OR use `systemd timers` which support sub-minute precision, OR a long-running daemon. Two important foot-guns: (1) very frequent jobs that take LONGER than their interval can pile up — wrap with `flock` (`/usr/bin/flock -n /var/lock/myjob.lock /path/job.sh`) to prevent overlap, and (2) the OUTPUT of frequent cron jobs gets emailed to the user EVERY TIME by default — always redirect `>> log 2>&1` or `>/dev/null 2>&1` to silence. As with all cron, use absolute paths and don't rely on shell aliases or `.bashrc` setup.",
    usage: "Health checks, monitoring polls, periodic syncs, queue drainers, near-real-time data ingestion.",
    examples: [
      "*/15 * * * * /opt/healthcheck.sh >/dev/null 2>&1  # every 15 min, silenced",
      "*/2 * * * * /opt/sync.sh  # every 2 minutes",
      "0 */6 * * * /opt/longjob.sh  # every 6 hours on the hour",
      "*/5 9-17 * * 1-5 /opt/work-hours-poll.sh  # every 5 min during weekday work hours",
      "*/15 * * * * /usr/bin/flock -n /var/lock/myjob.lock /opt/myjob.sh  # prevent overlap",
      "*/15 * * * * /opt/job.sh >> /var/log/job.log 2>&1  # log every run"
    ],
    memoryTip: "`*/N` = every N units in that field. Always silence frequent jobs (`>/dev/null 2>&1`) unless you want N emails per hour. Use `flock` to prevent overlapping runs of long-running jobs. For sub-minute scheduling, classic cron can't — use systemd timers.",
    outputExample: "$ crontab -l\n*/15 * * * * /opt/healthcheck.sh >> /var/log/healthcheck.log 2>&1\n*/5 9-17 * * 1-5 /usr/bin/flock -n /var/lock/poll.lock /opt/poll.sh\n0 */6 * * * /opt/sync.sh\n$ tail /var/log/healthcheck.log\n[2026-05-17 09:15:01] OK status=200\n[2026-05-17 09:30:01] OK status=200\n[2026-05-17 09:45:02] OK status=200",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash28",
    question: "Mirror a directory to a remote host (deleting files removed at the source) with `rsync -avz --delete src/ user@host:/dst/`",
    answer: "rsync -avz --delete src/ user@host:/dst/",
    explanation: "`rsync` is the smart file synchronizer — it transfers ONLY the differences between source and destination, making repeat syncs almost free. Key flags: `-a` (archive) preserves permissions, timestamps, symlinks, owners, and recurses (it's a bundle of `-rlptgoD`); `-v` is verbose (shows each file); `-z` compresses during transfer (good for slow links); `--delete` makes the destination a TRUE MIRROR by deleting files at the dst that no longer exist in src (DANGEROUS — always dry-run first!). CRUCIAL: the TRAILING SLASH on the source. `src/` means 'the CONTENTS of src'; without the slash (`src`) it means 'src itself' and you'd get `/dst/src/` on the destination. Get this wrong and you put files in the wrong place. Always preview with `--dry-run` (`-n`) before adding `--delete`. Other useful flags: `-P` (progress + resume partial files), `--exclude 'PATTERN'` (skip matching files, repeat for multiple patterns), `--exclude-from FILE`, `-e 'ssh -p 2222'` (custom SSH command), `-H` (preserve hard links), `--bwlimit=1000` (cap KB/s on shared links). Works on local-to-local, local-to-remote, remote-to-local, and inside a tunnel.",
    usage: "Deploys, snapshot backups, replicating a build artifact tree, syncing a website root, or pulling logs from a server for analysis.",
    examples: [
      "rsync -avz --delete src/ user@host:/dst/  # one-way mirror (note the trailing slash on src/)",
      "rsync -avz --dry-run --delete src/ host:/dst/  # PREVIEW first — print what WOULD change",
      "rsync -avzP --exclude '*.log' --exclude 'node_modules' src/ host:/dst/  # ignore patterns",
      "rsync -avz -e 'ssh -p 2222 -i ~/.ssh/deploy.pem' src/ deploy@host:/srv/app/  # custom SSH",
      "rsync -avhP host:/backup/2026-05/ ./local/  # pull from remote to local",
      "rsync -avz --bwlimit=2000 huge/ host:/dst/  # cap at ~2 MB/s"
    ],
    memoryTip: "`-a archive, -v verbose, -z compress, --delete mirror, -P progress`. TRAILING SLASH on src/ = 'contents of src'; NO slash = 'the dir itself'. ALWAYS `--dry-run` before `--delete`. Mnemonic: 'rsync = remote sync' — incrementally moves DIFFERENCES, not full copies.",
    outputExample: "$ rsync -avzP --dry-run --delete src/ user@web1:/var/www/\nsending incremental file list\nindex.html\n        4,521 100%   4.31MB/s    0:00:00 (xfr#1, to-chk=12/14)\ncss/style.css\n        8,193 100%   7.81MB/s    0:00:00 (xfr#2, to-chk=11/14)\ndeleting old-page.html\n\nsent 13,012 bytes  received 87 bytes  3,742.57 bytes/sec\ntotal size is 245,318  speedup is 18.73 (DRY RUN)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash29",
    question: "Walk through script arguments while consuming them with `while [[ $# -gt 0 ]]; do ...; shift; done`",
    answer: "while [[ $# -gt 0 ]]; do echo \"$1\"; shift; done",
    explanation: "When you need flag parsing more flexible than `getopts` (especially LONG flags like `--name VALUE` or `--name=VALUE`), the standard pattern is a manual loop. `$#` is the count of positional arguments remaining; `$1` is the next one in line. The `shift` builtin DROPS `$1` and renumbers — `$2` becomes the new `$1`, `$3` the new `$2`, etc. — and decrements `$#`. So the loop continues until all arguments are consumed. Inside the loop you typically use a `case` on `$1` to decide what each flag means and call `shift` (or `shift 2` for flags with a value) to advance. The bash-only `[[ ... ]]` is preferred over `[ ... ]` here because it doesn't word-split and has nicer syntax — fall back to `[ \"$#\" -gt 0 ]` for POSIX `sh`. To avoid clobbering the original args (which functions can do), save them first with `args=(\"$@\")` then iterate `for a in \"${args[@]}\"; do ...`. For READ-ONLY iteration without consuming, just `for arg in \"$@\"; do ...; done`. ALWAYS quote `\"$@\"` and `\"$1\"` — otherwise spaces in arg values get split into multiple words.",
    usage: "Parsing scripts with long flags (`--config FILE`, `--verbose`), implementing subcommand dispatch, or pre-processing args before passing remaining ones to another tool.",
    examples: [
      "while [[ $# -gt 0 ]]; do\n  case \"$1\" in\n    -v|--verbose) verbose=1; shift ;;\n    -f|--file) file=\"$2\"; shift 2 ;;\n    --file=*) file=\"${1#--file=}\"; shift ;;\n    --) shift; break ;;  # explicit end of flags\n    -*) echo \"unknown: $1\" >&2; exit 1 ;;\n    *) args+=(\"$1\"); shift ;;\n  esac\ndone",
      "for arg in \"$@\"; do echo \"arg=$arg\"; done  # read-only iteration (no consume)",
      "while [[ $# -gt 0 ]]; do echo \"$1\"; shift; done  # simple drain",
      "args=(\"$@\")  # save for later (functions/subshells)\nfor a in \"${args[@]}\"; do : ; done",
      "shift 2  # advance two positions in one go (good for flag-value pairs)",
      "[[ \"$#\" -eq 0 ]] && { echo 'no args'; exit 1; }  # require at least one arg"
    ],
    memoryTip: "`$#` count, `$1` next, `shift` consume one (or `shift N`). `[[ $# -gt 0 ]]` keeps looping while args remain. Always QUOTE `\"$1\"` and `\"$@\"`. Combine with `case` for flag parsing. Save first if you need them later: `args=(\"$@\")`.",
    outputExample: "$ cat parse.sh\n#!/usr/bin/env bash\npositional=()\nwhile [[ $# -gt 0 ]]; do\n  case \"$1\" in\n    -v|--verbose) verbose=1; shift ;;\n    --file) file=\"$2\"; shift 2 ;;\n    *) positional+=(\"$1\"); shift ;;\n  esac\ndone\necho \"verbose=${verbose:-0} file=${file:-} pos=(${positional[*]})\"\n$ ./parse.sh -v --file config.yml foo bar\nverbose=1 file=config.yml pos=(foo bar)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash30",
    question: "Send a message from a shell script to the system log/journal with `logger \"message\"`",
    answer: "logger \"deploy completed\"",
    explanation: "`logger` is the command-line interface to the system log — on modern Linux that means systemd's journal (viewable with `journalctl`), on older systems it means classic syslog (writing to `/var/log/syslog` or `/var/log/messages`). One line per call, properly timestamped and tagged so it sits alongside service logs and survives log rotation. Useful flags: `-t TAG` adds a tag prefix so you can grep your script's lines out of a busy journal (`journalctl -t mydeploy`); `-p FACILITY.PRIORITY` sets the syslog facility (user, daemon, cron, local0-7) and severity (emerg, alert, crit, err, warning, notice, info, debug); `-i` includes the PID; `-s` ALSO prints to stderr so you see it locally; `-f FILE` reads each line of FILE and logs them; with NO message arg, `logger` reads from stdin (great for piping). Best practice: in cron/deploy scripts, log start/finish events with a unique tag so postmortems are searchable: `logger -t backup -p user.notice 'backup completed in 142s'` then later `journalctl -t backup --since today`. Cheap, durable audit trail. Pre-installed everywhere.",
    usage: "Audit trails from cron jobs and deploy scripts, durable error logging that survives reboots, or integrating shell-script events with central log aggregation.",
    examples: [
      "logger 'deploy completed'  # basic — appears in journalctl",
      "logger -t mydeploy -p user.notice 'starting deploy v1.2.3'  # tagged + priority",
      "logger -i -t mybackup \"backup duration=${dur}s files=${count}\"  # include PID",
      "logger -s -t myapp 'config reloaded'  # ALSO print to stderr so you see it interactively",
      "some_cmd 2>&1 | logger -t mycron  # pipe a command's output into the journal",
      "journalctl -t mydeploy --since today  # later: read back your script's events"
    ],
    memoryTip: "`logger MSG` writes one line to journal/syslog. `-t TAG` for greppability, `-p FAC.SEV` for priority, `-i` for PID, `-s` to also print to stderr. Read back with `journalctl -t TAG`. The durable companion to `echo` — survives reboots, integrates with log shippers.",
    outputExample: "$ logger -t mybackup -p user.notice 'backup started'\n$ # ... script runs ...\n$ logger -t mybackup -p user.notice 'backup completed in 142s, 1247 files'\n$ journalctl -t mybackup --since today\nMay 17 02:30:00 server1 mybackup[18234]: backup started\nMay 17 02:32:22 server1 mybackup[18234]: backup completed in 142s, 1247 files\n$ tail /etc/passwd | logger -t userdump  # pipe to logger\n$ journalctl -t userdump -n 3\nMay 17 09:45:01 server1 userdump[19112]: nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin\nMay 17 09:45:01 server1 userdump[19112]: alice:x:1000:1000:Alice:/home/alice:/bin/bash\nMay 17 09:45:01 server1 userdump[19112]: bob:x:1001:1001:Bob:/home/bob:/bin/bash",
    category: "BASH SCRIPTING"
  },

  // ARCHIVES & COMPRESS — extended
  {
    id: "arch8",
    question: "Compress a single file with the `xz` command for the smallest possible output",
    answer: "xz file.txt",
    explanation: "`xz` uses the LZMA2 algorithm (the same one inside 7-Zip) and typically produces files 25-30% smaller than gzip on text data — at the cost of being noticeably slower and using more RAM during compression. Like `gzip` and `bzip2`, plain `xz file.txt` REPLACES the original, leaving you with `file.txt.xz`; pass `-k` to keep both. Compression levels run from `-0` (fastest, weakest) to `-9` (slowest, smallest), with `-6` as the default. The big modern win is `-T0` (use all CPU threads), which makes xz competitive on speed for big files. Decompress with `unxz` (arch9) or `xz -d`. For folders the usual pattern is `tar -cJf folder.tar.xz folder/` — note the CAPITAL `J` (lowercase `j` is bzip2). `.tar.xz` is the standard format for Linux kernel source tarballs precisely because of how small it gets.",
    usage: "Shipping a large source code release where every megabyte saves real download time. Long-term cold-storage archives. Packaging RPMs and Debian source bundles (which often use xz internally).",
    examples: [
      "xz big.log  # big.log -> big.log.xz, original removed",
      "xz -k big.log  # keep both big.log and big.log.xz",
      "xz -9 -T0 huge.sql  # max compression, all CPU threads",
      "xz -c report.txt > report.txt.xz  # stdout mode, keep original",
      "tar -cJf src.tar.xz src/  # tar+xz a folder in one step"
    ],
    memoryTip: "`xz` = eXtra Zip-tight (the smallest of gzip/bzip2/xz). Same `-k` rule to keep the original. Use `-T0` to parallelize. Available out of the box on RHEL/Fedora and Debian/Ubuntu.",
    outputExample: "$ ls -lh kernel.tar\n-rw-r--r-- 1 alice alice 1.2G May 17 11:00 kernel.tar\n$ xz -T0 kernel.tar\n$ ls -lh kernel.tar.xz\n-rw-r--r-- 1 alice alice 142M May 17 11:00 kernel.tar.xz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch9",
    question: "Decompress a `.xz` file back to its original with the `unxz` command",
    answer: "unxz file.txt.xz",
    explanation: "`unxz` is to `xz` what `gunzip` is to `gzip`: same binary under the hood (it's literally `xz -d` with a friendlier name), and it does the reverse of arch8. `unxz file.txt.xz` REPLACES the `.xz` file with the decompressed `file.txt`. To keep the compressed copy too, use `unxz -k`. The `z`-family of tools applies here as well: `xzcat` (or `xz -dc`) streams the decompressed bytes to stdout WITHOUT touching disk — useful for piping into `grep`, `less`, or `tar`. The equivalents are `xzgrep` and `xzless`. If the file is actually a `.tar.xz` (compressed tarball), do NOT use `unxz` first and then `tar` — just use `tar -xJf` (arch6) which does both steps at once. `xz` is parallel-friendly on decompress too: `unxz -T0` uses all cores, though decompression is already quite fast.",
    usage: "Opening a `.xz` log archive from a vendor. Decompressing a downloaded kernel source `.tar.xz` (combined with `tar`). Restoring an `.xz` backup file.",
    examples: [
      "unxz backup.sql.xz  # backup.sql.xz -> backup.sql, original removed",
      "unxz -k backup.sql.xz  # keep both files",
      "xz -d backup.sql.xz  # exactly the same as unxz",
      "xzcat /var/log/old.log.xz | grep ERROR  # peek inside without writing to disk",
      "tar -xJf linux-6.8.tar.xz  # one step: decompress + untar"
    ],
    memoryTip: "`unxz` = UN-xz (undo xz). Equivalent: `xz -d`. The stream-without-touching-disk cousin is `xzcat`. Cross-distro: same on RHEL/Fedora and Debian/Ubuntu (part of the `xz` package).",
    outputExample: "$ ls -lh backup.sql.xz\n-rw-r--r-- 1 alice alice 18M May 17 11:30 backup.sql.xz\n$ unxz backup.sql.xz\n$ ls -lh backup.sql*\n-rw-r--r-- 1 alice alice 142M May 17 11:30 backup.sql",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch10",
    question: "Create an xz-compressed tarball of a directory with `tar -cJf archive.tar.xz directory/`",
    answer: "tar -cJf archive.tar.xz directory/",
    explanation: "This is arch5's cousin but using xz instead of gzip for tighter (but slower) compression. Decode the flags: `c`=Create, `J`=use xz (CAPITAL J — the most-forgotten letter in all of tar), `f`=Filename follows. The result is a `.tar.xz` file: tar bundles all the files, then xz compresses the whole bundle as a single stream. Compare the three compressors for a folder: `-z` makes `.tar.gz` (fastest), `-j` makes `.tar.bz2` (middle), `-J` makes `.tar.xz` (smallest). To speed up xz inside tar, export `XZ_OPT='-T0'` so xz uses all CPU threads, or `XZ_OPT='-9 -T0'` for maximum compression in parallel. Extracting is `tar -xJf` (or just `tar -xf` on modern tar — auto-detection works). `.tar.xz` is the default for Linux kernel source releases and many distro source packages.",
    usage: "Packaging a release tarball to upload to a release page or mirror. Creating a long-term backup destined for slow/expensive storage. Sharing a folder with someone over a slow link.",
    examples: [
      "tar -cJf project.tar.xz project/  # standard xz tarball",
      "tar -cvJf project.tar.xz project/  # add -v to print file list as you go",
      "XZ_OPT='-9 -T0' tar -cJf big.tar.xz big/  # max compression, all cores",
      "tar -cJf - project/ | ssh host 'cat > /backups/project.tar.xz'  # stream to remote",
      "tar -cJf src.tar.xz --exclude='*.o' src/  # skip object files"
    ],
    memoryTip: "Capital `J` = xz (compression letters: `z`=gzip, lowercase `j`=bzip2, capital `J`=xz). Same `tar` on Debian/Ubuntu and RHEL/Fedora. Combine with `XZ_OPT=-T0` for parallel speed.",
    outputExample: "$ tar -cJf project.tar.xz project/\n$ ls -lh project*\ndrwxr-xr-x 4 alice alice 4.0K May 17 12:00 project\n-rw-r--r-- 1 alice alice 8.4K May 17 12:00 project.tar.xz\n$ tar -tJf project.tar.xz | head -3\nproject/\nproject/README.md\nproject/src/main.py",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch11",
    question: "List the contents of a tarball WITHOUT extracting using `tar -tf archive.tar.gz`",
    answer: "tar -tf archive.tar.gz",
    explanation: "Before extracting an unfamiliar archive, you should look inside it — especially if you don't fully trust the source. Decode the flags: `t`=lisT contents (table of contents), `f`=Filename follows. Modern `tar` auto-detects the compression algorithm, so `-tf` works on `.tar`, `.tar.gz`, `.tar.bz2`, and `.tar.xz` alike. Add `-v` for a long listing with permissions, owner, size, and date (`tar -tvf`), similar to `ls -l`. This lets you spot 'tar bombs' (archives with no top-level folder that scatter files into your cwd) and absolute-path archives (paths starting with `/` that could overwrite system files — modern tar strips leading `/` on extract for safety, but always check). You can also pipe the listing to `grep` to find a single file inside a huge archive, then extract just that one (see arch13).",
    usage: "Auditing a downloaded tarball before extracting. Counting files in a backup. Confirming a specific config is present before restoring.",
    examples: [
      "tar -tf archive.tar.gz  # bare list of paths",
      "tar -tvf archive.tar.gz | head  # long listing with sizes/perms",
      "tar -tf backup.tar.gz | wc -l  # count files",
      "tar -tf backup.tar.gz | grep nginx.conf  # is this file inside?",
      "tar -tf release.tar.xz | head -5  # peek at top-level structure"
    ],
    memoryTip: "`-t` = Table of contents (think 'Tar Toc'). Always preview an unknown archive with `-tvf` before extracting — saves you from accidental file-bombing. Same command on Debian/Ubuntu and RHEL/Fedora.",
    outputExample: "$ tar -tvf backup.tar.gz | head -5\ndrwxr-xr-x alice/alice  0 2026-05-17 12:00 project/\n-rw-r--r-- alice/alice 1024 2026-05-17 12:00 project/README.md\ndrwxr-xr-x alice/alice  0 2026-05-17 12:00 project/src/\n-rw-r--r-- alice/alice 4096 2026-05-17 12:00 project/src/main.py\n-rw-r--r-- alice/alice 2048 2026-05-17 12:00 project/src/utils.py",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch12",
    question: "Extract a tarball into a SPECIFIC target directory (not cwd) with `tar -xzf archive.tar.gz -C /tmp/restore`",
    answer: "tar -xzf archive.tar.gz -C /tmp/restore",
    explanation: "By default `tar -xzf` extracts into the CURRENT working directory — fine when you `cd` to the right place first, dangerous when you forget. The `-C target/` flag tells tar to CHANGE directory to `target/` BEFORE extracting, so the archive's contents land there. The target directory must EXIST first — tar won't create it. Use `mkdir -p target && tar -xzf foo.tar.gz -C target` as the safe idiom. Two foot-guns this avoids: (1) 'tar bombs' (archives without a top-level wrapper directory) scatter files into your cwd — extracting into a fresh subdir contains the damage; (2) accidentally overwriting cwd files with same-named files from the archive. Always preview with `tar -tf archive.tar.gz | head` first to see whether the archive has a top-level directory (good) or dumps files at the root (tar bomb). The `-C` works for create AND extract: `tar -czf foo.tar.gz -C /src .` packages everything in `/src` WITHOUT including `/src/` as a leading path.",
    usage: "Extracting a downloaded source release into `/tmp` for inspection, restoring a backup into a sandbox before promoting it, or unpacking a tar bomb safely.",
    examples: [
      "tar -xzf archive.tar.gz -C /tmp/restore  # extract into /tmp/restore",
      "mkdir -p out && tar -xzf archive.tar.gz -C out  # safer: create dir first",
      "tar -xJf linux-6.8.tar.xz -C ~/src  # extract xz tarball into ~/src",
      "tar -xzf src.tar.gz -C /tmp/staging app/config.yml  # one file, into a specific dir",
      "tar -czf - -C /src .  # CREATE without leading '/src/' in paths",
      "tar -tf unknown.tar.gz | head -3  # ALWAYS preview before extracting"
    ],
    memoryTip: "`-C DIR` = Change directory before doing the operation. Target dir must EXIST. Safe extract idiom: `mkdir -p target && tar -xzf foo.tgz -C target`. Preview unknown archives with `tar -tf` first to detect tar bombs (no top-level dir).",
    outputExample: "$ mkdir -p /tmp/restore\n$ tar -xzf backup.tar.gz -C /tmp/restore\n$ ls /tmp/restore\nproject/\n$ ls /tmp/restore/project/\nREADME.md  src/  tests/\n$ # compare: extracting at cwd would have polluted current dir\n$ pwd\n/home/alice  # untouched",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch13",
    question: "Pull just ONE file out of a multi-GB tarball with `tar -xzf archive.tar.gz path/inside/archive/file.txt`",
    answer: "tar -xzf backup.tar.gz etc/nginx/nginx.conf",
    explanation: "Extracting a giant backup just to recover one config file is wasteful. Pass the archive-relative path(s) as extra arguments AFTER the archive filename and tar extracts ONLY those — much faster, far less disk. The path must match EXACTLY how it's stored INSIDE the archive: preview first with `tar -tf archive.tar.gz | grep file` to find the exact path (paths usually start with the top-level directory name, e.g. `project/src/main.py`, NOT `/project/src/main.py` or `./project/...`). For pattern matching use `--wildcards` with a glob: `tar --wildcards -xzf big.tgz '*.yml'` extracts every `.yml` file. Combine with `-C target/` (arch12) to put the extracted file into a specific directory. The extracted file recreates ANY intermediate directories needed (e.g. extracting `etc/nginx/nginx.conf` creates `./etc/nginx/` on disk). To extract to stdout instead of files use `--to-stdout` (or `-O`): `tar -xzOf foo.tgz path/file.txt | less` is a great way to peek at a config without writing it. Auto-detection means you can use the same syntax for `.tar.gz`, `.tar.bz2`, `.tar.xz`.",
    usage: "Recovering a single config from yesterday's full system backup, pulling out a specific source file from a downloaded source tarball, or extracting one icon from a giant asset bundle.",
    examples: [
      "tar -xzf backup.tar.gz etc/nginx/nginx.conf  # one specific file",
      "tar -xzf src.tar.gz src/main.py src/utils.py  # several files at once",
      "tar --wildcards -xzf big.tgz '*.yml'  # glob match — quote it!",
      "tar -xzf backup.tar.gz -C /tmp etc/nginx/nginx.conf  # extract into /tmp",
      "tar -xzOf backup.tar.gz etc/hosts | less  # extract to STDOUT, view in pager",
      "tar -tf backup.tar.gz | grep -i nginx  # FIND the exact path first"
    ],
    memoryTip: "Append the archive-INTERNAL path as args to extract only those. Find the exact path first with `tar -tf | grep`. `--wildcards 'glob'` for patterns. `-O` (or `--to-stdout`) extracts to stdout instead of file — perfect for `| less` peeks.",
    outputExample: "$ tar -tf backup.tar.gz | grep nginx.conf\netc/nginx/nginx.conf\n$ tar -xzf backup.tar.gz etc/nginx/nginx.conf\n$ ls etc/nginx/\nnginx.conf\n$ tar -xzOf backup.tar.gz etc/hostname\nweb1.example.com\n$ tar --wildcards -xzf src.tar.gz 'project/*.md'\n$ find project -name '*.md'\nproject/README.md\nproject/CHANGELOG.md",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch14",
    question: "Create a `.zip` archive of a directory tree with `zip -r archive.zip directory/`",
    answer: "zip -r archive.zip directory/",
    explanation: "`zip` produces the universal `.zip` format that Windows, macOS, mobile devices, and email clients all open natively without extra software — making it the default choice for files you'll share off Linux. Crucially, `zip` does NOT recurse by default; you must pass `-r` (recursive) to include directory contents. Without `-r`, zip just stores the empty directory and skips its contents. Other useful flags: `-9` MAXIMUM compression (slowest), `-1` FASTEST (worst compression), `-e` (encrypt with a password prompt — uses ZipCrypto, the old format that's weak; use `7z` for serious encryption), `-x 'PATTERN'` exclude files (`-x '*.log' '*.tmp'`), `-X` skip extended attributes for cleaner cross-platform archives, `-q` quiet, `-FS` 'filesystem sync' mode (update archive to MATCH the filesystem, removing entries for files that no longer exist). NOT pre-installed on minimal Debian — `sudo apt install zip unzip`. Compared to `tar`: ZIP preserves Unix permissions less faithfully and stores compressed entries individually (no shared dictionary), so it usually compresses slightly worse than `.tar.gz` on text. For Linux-to-Linux, prefer tar; for sharing, prefer zip.",
    usage: "Bundling files to email/upload, sharing with Windows/macOS coworkers, producing a release asset that anyone can open, or zipping logs for a support ticket.",
    examples: [
      "zip -r project.zip project/  # the everyday recursive zip",
      "zip -9 -r tight.zip project/  # maximum compression (slow)",
      "zip -er secret.zip secrets/  # password-protected (weak encryption — use 7z for real security)",
      "zip -r src.zip src/ -x 'src/node_modules/*' '*.log'  # exclude patterns",
      "zip -j flat.zip docs/*.pdf  # -j junk paths: store just filenames, no directory structure",
      "zip -FS archive.zip dir/  # filesystem-sync: drop entries not in dir, add new"
    ],
    memoryTip: "`-r` recursive (required for directories — easy to forget!). `-9` max compression. `-x 'PAT'` exclude. `-e` encrypted (weak). Install with `apt install zip unzip` if missing. For Linux→Linux backup, prefer `tar -czf`. For cross-platform sharing, prefer `.zip`.",
    outputExample: "$ zip -r project.zip project/\n  adding: project/ (stored 0%)\n  adding: project/README.md (deflated 32%)\n  adding: project/src/ (stored 0%)\n  adding: project/src/main.py (deflated 65%)\n  adding: project/src/utils.py (deflated 71%)\n  adding: project/tests/test_main.py (deflated 58%)\n$ ls -lh project.zip\n-rw-r--r-- 1 alice alice 8.4K May 17 11:42 project.zip\n$ unzip -l project.zip | tail -3\n    1024  2026-05-17 11:30   project/README.md\n    4096  2026-05-17 11:30   project/src/main.py\n    2048  2026-05-17 11:30   project/src/utils.py",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch15",
    question: "Extract a `.zip` archive into the current directory with `unzip archive.zip` (or `-d target` for a specific dir)",
    answer: "unzip archive.zip",
    explanation: "`unzip` reads a `.zip` file and writes its contents to disk. Default: extract into the CURRENT directory. To extract elsewhere use `-d TARGET` (note: NOT `-C` like tar — different flag). To LIST contents without extracting use `-l` (or `-v` for verbose). For PASSWORD-protected archives use `-P PASSWORD` (visible in process list — bad) or just `unzip secret.zip` which prompts. Useful flags: `-o` overwrite WITHOUT prompting (otherwise unzip asks for each existing file); `-n` NEVER overwrite (skip existing); `-q` quiet (suppress per-file output); `-j` junk paths (extract flat, ignoring directory structure inside the zip); `-x PATTERN` exclude files. Be careful with `unzip foo.zip` from an UNTRUSTED source — like tar bombs, an archive can contain absolute paths or `../` traversals that escape your cwd. Modern `unzip` mostly blocks these, but it's worth previewing with `-l` first. Not always pre-installed; `sudo apt install unzip` on Debian. Modern faster alternative: `7z x foo.zip` (from `p7zip-full`) can also extract many other formats.",
    usage: "Opening any downloaded `.zip` (release archives, repository snapshots, vendor bundles, support files from another team).",
    examples: [
      "unzip archive.zip  # extract into cwd",
      "unzip archive.zip -d /tmp/dest  # extract into /tmp/dest (note: -d, not -C)",
      "unzip -l archive.zip  # list contents WITHOUT extracting",
      "unzip -o archive.zip  # overwrite without prompts",
      "unzip -j docs.zip -d ~/Documents  # junk paths — extract files flat",
      "unzip -P 'secret' encrypted.zip  # password (visible in ps — careful)"
    ],
    memoryTip: "`unzip foo.zip` extract to cwd. `-d TARGET` extract elsewhere (NOT `-C` like tar!). `-l` LIST contents. `-o` overwrite, `-n` never overwrite, `-j` JUNK paths (flat extract). Preview unknown archives with `-l` first. Modern alt: `7z x file.zip`.",
    outputExample: "$ unzip -l project.zip\nArchive:  project.zip\n  Length      Date    Time    Name\n---------  ---------- -----   ----\n        0  2026-05-17 11:30   project/\n     1024  2026-05-17 11:30   project/README.md\n     4096  2026-05-17 11:30   project/src/main.py\n     2048  2026-05-17 11:30   project/src/utils.py\n---------                     -------\n     7168                     4 files\n$ unzip project.zip -d /tmp/restore\nArchive:  project.zip\n   creating: /tmp/restore/project/\n  inflating: /tmp/restore/project/README.md\n   creating: /tmp/restore/project/src/\n  inflating: /tmp/restore/project/src/main.py\n  inflating: /tmp/restore/project/src/utils.py",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch16",
    question: "Create a `.7z` archive (often tightest compression, supports strong encryption) with `7z a archive.7z directory/`",
    answer: "7z a archive.7z directory/",
    explanation: "`7z` (from `p7zip-full` on Debian/Ubuntu, `p7zip-plugins` on Fedora) supports the `.7z` format which usually compresses tighter than gzip and bzip2 — comparable to xz — using LZMA/LZMA2. It also handles many OTHER formats (`.zip`, `.tar`, `.rar` read-only, `.iso`, etc.) so it's a Swiss Army knife. The command verbs are SHORT and unusual: `a` (ADD/create), `x` (eXtract preserving paths — most common), `e` (extract IGNORING paths — flat), `l` (LIST), `t` (TEST integrity), `d` (DELETE files from existing archive), `u` (UPDATE existing). Compression level: `-mx=N` where N is 0 (store) to 9 (ultra) — default is `-mx=5`. ENCRYPTION: `-p` prompts for password and encrypts content; add `-mhe=on` to also encrypt the FILE NAMES (otherwise they're visible even with a password) — `7z a -p -mhe=on secret.7z private/`. Solid mode (`-ms=on`, the default) treats all files as one stream for better compression; downside: extracting one file requires decompressing everything before it. Foot-gun: 7z does NOT preserve Unix permissions/ownership well — for Linux backups stick with `tar -cJf`.",
    usage: "Distributing a large release where every byte matters, strong-encrypted file sharing, or extracting weird formats other tools can't open.",
    examples: [
      "7z a archive.7z directory/  # standard create",
      "7z a -mx=9 tight.7z big/  # maximum compression",
      "7z a -p -mhe=on secret.7z private/  # password + ENCRYPTED FILENAMES",
      "7z x archive.7z  # extract preserving paths",
      "7z l archive.7z  # list contents",
      "7z t archive.7z  # test integrity"
    ],
    memoryTip: "Verbs: `a` add (create), `x` eXtract (with paths), `e` extract flat, `l` list, `t` test. `-mx=9` max compress. `-p` password + `-mhe=on` to hide filenames too. Multi-format reader: extracts `.zip`, `.iso`, `.rar`, etc. Doesn't preserve Unix perms perfectly — prefer `tar` for Linux backups.",
    outputExample: "$ 7z a -mx=9 -mhe=on -p archive.7z project/\n7-Zip [64] 22.01\nEnter password (will not be echoed):\nVerify password (will not be echoed):\nScanning the drive:\n4 folders, 12 files, 2.4 MiB total\n\nUpdating archive: archive.7z\n\nFiles read from disk: 12\nArchive size: 142836 bytes (140 KiB)\nEverything is Ok\n$ 7z l archive.7z\nEnter password (will not be echoed):\n   Date      Time    Attr         Size   Compressed  Name\n------------------- ----- ------------ ------------  ------------------------\n2026-05-17 11:30:00 D....            0            0  project\n2026-05-17 11:30:00 ....A         1024          824  project/README.md",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch17",
    question: "Read the contents of a gzipped text file WITHOUT decompressing to disk first using `zcat file.txt.gz`",
    answer: "zcat file.txt.gz",
    explanation: "`zcat` is `cat` for `.gz` files — it streams decompressed output to stdout WITHOUT writing the uncompressed version to disk. Saves disk space AND time on huge log files. Like other z-family tools, it's just a wrapper around `gzip -dc`. The whole z-family follows the same pattern: `zcat` (= cat for .gz), `zless` (= less for .gz, interactive pager), `zmore` (= more for .gz), `zgrep` (= grep for .gz, see arch18), `zdiff` (= diff for two .gz files), `znew` (re-compress old .Z files as .gz). The xz family is the same with `xz` prefix: `xzcat`, `xzless`, `xzgrep`. The bzip2 family uses `bz` prefix: `bzcat`, `bzless`, `bzgrep`. The universal alternative is `gzip -dc file.gz` (decompress to stdout — that's literally what zcat is). Modern tools like `ripgrep` (`rg`) natively handle compressed files: `rg PATTERN file.gz` works directly. Beware: passing MULTIPLE `.gz` files to `zcat` concatenates them in order, no separators — pipe through `cat` or use loops if you need per-file boundaries.",
    usage: "Tailing/searching a rotated log without leaving an uncompressed copy on a tight disk, piping a .gz log into other tools, or peeking at the contents of an archive.",
    examples: [
      "zcat /var/log/syslog.1.gz | head -50  # first 50 lines without decompressing",
      "zcat *.log.gz | grep -i error  # search across many gzipped logs",
      "zcat huge.csv.gz | wc -l  # line-count without writing to disk",
      "zless /var/log/syslog.1.gz  # PAGER version (interactive scrolling, /search)",
      "zcat /var/log/auth.log.{1,2,3}.gz | grep 'Failed password' | wc -l  # multiple files",
      "xzcat report.txt.xz | head  # .xz equivalent (xz family)"
    ],
    memoryTip: "`z`-family: `zcat`/`zless`/`zmore`/`zgrep`/`zdiff` for `.gz`. `xz`-family for `.xz`. `bz`-family for `.bz2`. All decompress on the fly, no temp file. Equivalent: `gzip -dc file.gz`. Modern `ripgrep` (`rg`) handles compressed files natively.",
    outputExample: "$ ls -lh /var/log/syslog.1.gz\n-rw-r----- 1 syslog adm 412K May 16 06:25 /var/log/syslog.1.gz\n$ zcat /var/log/syslog.1.gz | wc -l\n42103\n$ zcat /var/log/syslog.1.gz | head -3\nMay 15 06:25:11 web1 systemd[1]: Starting Daily apt download activities...\nMay 15 06:25:11 web1 systemd[1]: apt-daily.service: Deactivated successfully.\nMay 15 06:25:11 web1 systemd[1]: Finished Daily apt download activities.\n$ zless /var/log/syslog.1.gz  # opens in less — scroll, /search, q to quit",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch18",
    question: "Search inside a gzipped log file WITHOUT decompressing it first using `zgrep pattern file.log.gz`",
    answer: "zgrep pattern file.log.gz",
    explanation: "`zgrep` is `grep` for compressed files — it decompresses on the fly and applies grep, never writing the uncompressed data to disk. All the usual grep flags work: `-i` case-insensitive, `-c` count matches per file, `-l` only filenames with matches, `-v` invert (lines NOT matching), `-h` suppress filename headers when searching multiple files, `-E` extended regex, `-A N`/`-B N`/`-C N` context lines. Especially valuable for rotated log files (`/var/log/syslog.1.gz`, `/var/log/syslog.2.gz`, etc.) — you can search across the whole rotation: `zgrep -i error /var/log/syslog*.gz`. For `.xz` files use `xzgrep`; for `.bz2` use `bzgrep`. To search BOTH plaintext and gzipped logs in one go on modern systems: `zgrep -i error /var/log/syslog*` (zgrep falls through to plain grep on uncompressed files). Modern faster alternative: `ripgrep` (`rg`) natively handles `.gz`/`.bz2`/`.xz` with `--search-zip` (or just by default on newer versions). For LARGE archives, zgrep is much faster than `gunzip file.gz; grep pattern file; gzip file`.",
    usage: "Searching rotated logs for an error pattern, hunting for a specific request ID across yesterday's compressed access log, or auditing historical archives.",
    examples: [
      "zgrep -i error /var/log/syslog.1.gz  # case-insensitive error search",
      "zgrep -hE 'panic|oops' *.log.gz  # multi-pattern, hide filenames",
      "zgrep -c failed /var/log/auth.log.*.gz  # count failures per file",
      "zgrep -l 'OutOfMemory' *.gz  # WHICH files have the pattern (filenames only)",
      "zgrep -C 3 'segfault' /var/log/kern.log.*.gz  # 3 lines of context",
      "rg --search-zip 'pattern' /var/log/  # modern faster alternative"
    ],
    memoryTip: "`zgrep` = grep on `.gz`. `xzgrep` for `.xz`, `bzgrep` for `.bz2`. All grep flags work (`-i`/`-c`/`-l`/`-v`/`-E`/`-C N`). Search rotated logs: `zgrep PATTERN /var/log/syslog*.gz`. Modern: `rg --search-zip` handles all compression formats with one command.",
    outputExample: "$ zgrep -hE 'error|fail' /var/log/syslog.{1,2,3}.gz | wc -l\n247\n$ zgrep -c -i error /var/log/auth.log.*.gz\n/var/log/auth.log.1.gz:42\n/var/log/auth.log.2.gz:38\n/var/log/auth.log.3.gz:51\n$ zgrep -C 1 'OOM' /var/log/kern.log.1.gz\nMay 16 03:14:22 web1 kernel: oom_reaper: reaped process 4321 (java)\nMay 16 03:14:22 web1 kernel: Out of memory: Killed process 4321 (java) total-vm:8388608kB\nMay 16 03:14:22 web1 systemd[1]: java.service: Main process exited",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch19",
    question: "Skip patterns when creating a tarball with `tar --exclude='*.log' -czf archive.tar.gz directory/`",
    answer: "tar --exclude='*.log' -czf archive.tar.gz directory/",
    explanation: "`--exclude='PATTERN'` tells tar to skip any path matching the glob — saves space and time when you don't need junk files (logs, caches, `node_modules`, `.git`, build artifacts) in your archive. CRUCIAL: place `--exclude` BEFORE the source directory in the command, and ALWAYS quote the pattern so the shell doesn't expand it before tar sees it. Multiple `--exclude` flags can be stacked. For a long list of patterns, use `--exclude-from=ignore.txt` (one pattern per line, blank lines and `#` comments OK). Patterns match against the archive-internal path, anchored anywhere — `--exclude='*.log'` excludes files at any depth. To exclude an entire DIRECTORY use `--exclude='node_modules'` (matches the directory name itself, so its contents are skipped wholesale). `.gitignore`-style respect: `--exclude-vcs` automatically skips `.git`, `.svn`, `.hg`, etc. — handy for source code releases. Combine with `-czf`/`-cJf` to compress as you exclude. Verify with `tar -tzf archive.tar.gz | grep PATTERN` afterwards.",
    usage: "Producing a source-only project archive (no logs, no node_modules, no build/), creating a slimmed-down backup, or building a deployment artifact.",
    examples: [
      "tar --exclude='*.log' -czf archive.tar.gz dir/  # one pattern",
      "tar --exclude='*.log' --exclude='*.tmp' --exclude='node_modules' -czf src.tar.gz project/  # multiple",
      "tar --exclude-from=.tarignore -czf release.tar.gz project/  # patterns in a file",
      "tar --exclude-vcs -czf clean.tar.gz src/  # auto-skip .git, .svn, etc.",
      "tar --exclude='build/*' --exclude='dist/*' -czf src.tar.gz project/  # whole directories",
      "tar -czf src.tar.gz src/ && tar -tzf src.tar.gz | grep -c node_modules  # verify (should be 0)"
    ],
    memoryTip: "`--exclude='PAT'` (QUOTE it!) before the source dir. Stack multiple `--exclude` or use `--exclude-from=file`. Special: `--exclude-vcs` skips all VCS dirs automatically. To exclude directories: `--exclude='node_modules'` (name match, contents skipped). Always verify with `tar -tzf | grep PAT`.",
    outputExample: "$ tar --exclude='*.log' --exclude='node_modules' --exclude-vcs -czf release.tar.gz project/\n$ tar -tzf release.tar.gz | head\nproject/\nproject/README.md\nproject/src/\nproject/src/main.py\nproject/tests/\nproject/tests/test_main.py\n$ tar -tzf release.tar.gz | grep -E '(log|node_modules|\\.git)' | wc -l\n0\n$ tar -tzf release.tar.gz | wc -l\n42  # vs ~50000 without excludes (node_modules removed)",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch20",
    question: "Compress files MUCH faster on multi-core machines using parallel gzip with the `pigz` command",
    answer: "pigz bigfile",
    explanation: "`pigz` (pronounced 'pig-zee') stands for 'parallel implementation of gzip' — it produces standard `.gz` files using ALL your CPU cores in parallel, often 4-8x faster than vanilla `gzip` (which is single-threaded). The output is fully compatible with `gunzip` / `zcat` / `tar -xzf` etc. — readers don't know or care that it was created with pigz. Same flags as gzip: `-1` to `-9` for compression level, `-k` to keep the original, `-d` to decompress (parallel too — though decompression is bottlenecked by I/O so less dramatic). Install: `sudo apt install pigz` on Debian, `sudo dnf install pigz` on Fedora. Common integration with tar: `tar -c dir | pigz > dir.tar.gz` (manual) or `tar -I pigz -cf dir.tar.gz dir/` (tar with `-I` to specify the compressor — works for any external compressor including `pigz`, `xz`, `zstd`). For xz parallelism use `xz -T0`. For maximum speed AND smaller files, consider `zstd` — newer algorithm, often faster than pigz AND smaller output than gzip; install `sudo apt install zstd` then `zstd -T0 file` (uses all cores natively). On modern hardware, `zstd` is usually the right answer; `pigz` is the right answer if you MUST produce `.gz` for compatibility.",
    usage: "Compressing a multi-GB database dump in seconds instead of minutes, parallelizing CI build artifact compression, or producing the largest backup tarballs in the time budget.",
    examples: [
      "pigz huge.log  # all cores, produces huge.log.gz",
      "pigz -k -p 8 huge.log  # keep original, use 8 threads explicitly",
      "tar -I pigz -cf backup.tar.gz dir/  # tar + parallel gzip via -I",
      "tar -c dir | pigz > dir.tar.gz  # same idea via pipe",
      "pigz -d archive.tar.gz  # parallel decompress",
      "zstd -T0 -19 huge.log  # modern alternative — usually faster AND smaller than gzip"
    ],
    memoryTip: "`pigz` = Parallel gzIp Z — multi-core gzip, output is standard `.gz`. Same flags as gzip (`-k`, `-9`, `-d`). Tar integration: `tar -I pigz -cf ...`. Modern even-better alternative: `zstd -T0` (faster + smaller, but produces `.zst`, less universal). For xz parallel: `xz -T0`.",
    outputExample: "$ ls -lh big.log\n-rw-r--r-- 1 alice alice 2.4G May 17 12:00 big.log\n$ time gzip -k big.log\nreal    0m38.421s\nuser    0m37.892s\nsys     0m0.521s\n$ rm big.log.gz\n$ time pigz -k big.log\nreal    0m6.103s    # 6x faster on 8-core box\nuser    0m44.123s\nsys     0m1.482s\n$ ls -lh big.log.gz  # compatible with normal gunzip\n-rw-r--r-- 1 alice alice 412M May 17 12:00 big.log.gz",
    category: "ARCHIVES & COMPRESS"
  },

  // DAILY TIPS — extended
  {
    id: "daily41",
    question: "Search your shell command history interactively (incrementally) by pressing `Ctrl+R`",
    answer: "Ctrl+R",
    explanation: "Press Ctrl+R and bash enters INCREMENTAL SEARCH MODE — your prompt changes to `(reverse-i-search)\\`': ` and you start typing. As you type each character, bash narrows down to the MOST RECENT history entry that contains your text so far. Press Ctrl+R AGAIN to step backward to the next older match. Press Enter to RUN the highlighted command immediately. Press Esc (or right/left arrow) to put the command on your prompt for EDITING before running. Press Ctrl+G to CANCEL the search and return to an empty prompt. Press Ctrl+S for FORWARD search (sometimes blocked by terminal flow control — if so, `stty -ixon` in `.bashrc` re-enables it). Ctrl+R is one of the highest-leverage shell skills: way faster than scrolling with up-arrow through 1000 entries or piping `history | grep`. In zsh and fish the same keystroke does the same thing, with prettier UI. The search uses the `readline` library so it works in `bash`, `psql`, `python -i`, `node`, and many other interactive REPLs. Modern alternative: install `fzf` and its bash integration; then Ctrl+R becomes a fuzzy-search UI with full preview.",
    usage: "Re-running a long command you typed earlier, finding 'that one ssh command with the port forward', or recovering complex pipelines without retyping.",
    examples: [
      "Ctrl+R  # then type 'ssh' — bash highlights most recent ssh command",
      "Ctrl+R  # press again to step to OLDER matches",
      "Esc (or arrow key) at the search prompt to EDIT before running",
      "Ctrl+G to CANCEL the search",
      "history | grep ssh  # non-interactive alternative",
      "stty -ixon && Ctrl+S  # forward search (enable by disabling flow control)"
    ],
    memoryTip: "Ctrl+R = Reverse search (incremental). Type to narrow, Ctrl+R again for older match, Enter to run, Esc to edit, Ctrl+G to cancel. Ctrl+S for forward (enable via `stty -ixon`). HUGE productivity unlock — works in bash + zsh + most REPLs. Modern UI: install `fzf` integration.",
    outputExample: "$ # press Ctrl+R\n(reverse-i-search)`': \n# type 's'\n(reverse-i-search)`s': systemctl status nginx\n# type 'sh'\n(reverse-i-search)`sh': ssh -L 8080:localhost:80 alice@web1\n# press Ctrl+R again to step backward\n(reverse-i-search)`sh': ssh -p 2222 deploy@staging\n# press Enter to run or Esc to edit\n$ ssh -p 2222 deploy@staging",
    category: "DAILY TIPS"
  },
  {
    id: "daily42",
    question: "Reuse the LAST ARGUMENT of the previous command with `!$` (or Alt+. for an interactive shortcut)",
    answer: "!$",
    explanation: "`!$` is a bash history-expansion shortcut: it stands for the LAST WORD of the previous command. Type `mkdir /very/long/path/here` then `cd !$` and bash expands to `cd /very/long/path/here` — no retyping. Bash prints the expanded form before running so you can see what happened. Other useful history-word references: `!^` = FIRST argument of the previous command, `!*` = ALL args of the previous command (everything except the command name), `!:N` = the Nth WORD (0 = command itself, 1 = first arg, etc.), `!:N-M` = words N through M, `!!` = the whole previous command. Even handier in interactive use: press `Esc .` (Esc then dot) or `Alt+.` to INSERT the last argument of the previous command at the cursor — press it REPEATEDLY to cycle through 'last arg of N-th-previous command'. This is much friendlier than `!$` because you SEE what gets inserted before running. Combine with `^old^new^`: replaces `old` with `new` in the previous command and re-runs. Foot-gun: history expansion happens at PARSE time, so it's seen even inside comments. Disable with `set +H` if scary.",
    usage: "Avoiding the retype of long paths after `ls`/`cat`/`vim`, chaining commands that operate on the same file, or quickly making `.bak` copies.",
    examples: [
      "mkdir /tmp/new/deep && cd !$  # cd into the path you just created",
      "vim /etc/nginx/nginx.conf  # edit\nsudo cp !$ !$.bak  # backup the same file",
      "ls /var/log  # list\ncd !$  # enter it",
      "echo a b c d  # last arg is 'd'\necho !$  # echoes 'd'",
      "echo a b c d\necho !*  # echoes 'a b c d' (all args)",
      "Alt+.  # interactive: insert last arg at cursor (repeat to cycle older)"
    ],
    memoryTip: "`!$` last arg of last command. `!^` first arg. `!*` all args. `!!` whole last command. `!:N` Nth word. INTERACTIVE alternative: `Alt+.` (or `Esc .`) inserts last arg AT THE CURSOR — press repeatedly to cycle backwards. Friendlier than `!$` because you see what's inserted.",
    outputExample: "$ ls /var/log\nauth.log  nginx  syslog\n$ cd !$\ncd /var/log\n$ pwd\n/var/log\n$ vim /etc/hosts\n$ sudo cp !$ !$.bak\nsudo cp /etc/hosts /etc/hosts.bak\n$ ls /etc/hosts*\n/etc/hosts  /etc/hosts.bak\n$ echo one two three\none two three\n$ echo !* !$ !^\necho one two three three one\none two three three one",
    category: "DAILY TIPS"
  },
  {
    id: "daily43",
    question: "Clear the visible terminal screen (preserving scrollback and your typed command) by pressing `Ctrl+L`",
    answer: "Ctrl+L",
    explanation: "Ctrl+L is a readline shortcut that clears the visible screen and redraws your prompt at the top. Critically, it PRESERVES (1) your scrollback history (you can scroll up to see what was cleared), and (2) any text you've already typed at the prompt. Compare with the `clear` command: similar effect but issued as an external command (slower, and only works at an empty prompt). Compare with `reset`: nuclear option — resends the entire terminal initialization sequence, useful after a binary file got cat'd into your terminal and made everything unreadable. To CLEAR THE SCROLLBACK too (so up-arrow can't recover), use `clear -x` (some terminals support this — depends on your terminfo) or the terminal-specific command (in many terminals, `printf '\\033[2J\\033[3J\\033H'`). Other useful readline shortcuts to learn alongside: Ctrl+A start of line, Ctrl+E end, Ctrl+U erase to start, Ctrl+K erase to end, Ctrl+W erase one word back, Alt+B/F move by word, Ctrl+R reverse search, Ctrl+_ undo. These work in bash, zsh, and any program using GNU readline.",
    usage: "Tidying the screen mid-task without losing your command, hiding sensitive output before a screenshare, or just getting a fresh visual.",
    examples: [
      "Ctrl+L  # clear visible screen (keep scrollback + typed text)",
      "clear  # command form — only works at empty prompt",
      "reset  # full terminal reset (after binary got cat'd into terminal)",
      "printf '\\033c'  # alternative reset escape sequence",
      "printf '\\033[2J\\033[3J\\033[H'  # clear screen + scrollback + home cursor",
      "tput clear  # portable clear via terminfo"
    ],
    memoryTip: "Ctrl+L = clear visible (keep scrollback + typed text). `clear` command similar but slower. `reset` for mangled terminals. Other readline must-knows: Ctrl+A (start), Ctrl+E (end), Ctrl+U (erase to start), Ctrl+K (erase to end), Ctrl+W (erase word), Ctrl+R (search).",
    outputExample: "$ ls\nfile1  file2  file3\nfile4  file5  file6\n$ # press Ctrl+L\n$ █                    # screen clears, cursor returns to top\n# scrolling up still shows the ls output\n$ echo 'partial command' # type something\n$ echo 'partial command'  # press Ctrl+L — your text is preserved at top",
    category: "DAILY TIPS"
  },
  {
    id: "daily44",
    question: "Jump the cursor instantly to the START of a long command line by pressing `Ctrl+A` (and `Ctrl+E` for end)",
    answer: "Ctrl+A",
    explanation: "Ctrl+A and Ctrl+E are the most useful pair of readline cursor shortcuts: Ctrl+A jumps to the BEGINNING of the line, Ctrl+E jumps to the END. Far faster than holding the arrow keys on a long command. They work in bash, zsh, and ANY program using GNU readline (psql, mysql, python -i, node -i, irb). For WORD-by-word motion: Alt+B (back) and Alt+F (forward). Other essential readline shortcuts that complete the editing repertoire: Ctrl+U (erase from cursor to START of line — handy to abandon a long command without losing the typed history of OTHER commands), Ctrl+K (erase from cursor to END of line), Ctrl+W (erase ONE WORD backward), Alt+D (erase one word forward), Ctrl+Y (paste — 'yank' — what you just deleted with Ctrl+U/K/W), Ctrl+T (transpose two chars), Alt+T (transpose two words), Ctrl+_ (undo). The deleted text from Ctrl+U/K/W goes onto a 'kill ring' so you can paste it elsewhere with Ctrl+Y. The same shortcuts work on macOS in iTerm/Terminal — they're a Unix-wide convention. Customise via `~/.inputrc`. Bonus: in many terminals Home/End keys also work but Ctrl+A/E are more reliable across SSH sessions and minimal terminals.",
    usage: "Editing the start of a long pipe (`sudo ` prefix), fixing a typo at the start of a 200-character command, or efficient command-line editing without arrow-key flailing.",
    examples: [
      "Ctrl+A  # cursor to start",
      "Ctrl+E  # cursor to end",
      "Alt+B  # back one word",
      "Alt+F  # forward one word",
      "Ctrl+U  # erase from cursor to start of line",
      "Ctrl+K  # erase from cursor to end of line"
    ],
    memoryTip: "Ctrl+A = beginning (Alpha), Ctrl+E = End. By WORD: Alt+B/Alt+F. ERASE: Ctrl+U (to start), Ctrl+K (to end), Ctrl+W (one word back), Alt+D (one word forward). PASTE killed text: Ctrl+Y. UNDO: Ctrl+_. Works in bash, zsh, and most REPLs.",
    outputExample: "$ apt update && sudo apt upgrade -y && sudo apt autoremove -y  # forgot sudo at start\n# press Ctrl+A — cursor jumps to before 'apt'\n$ █apt update && sudo apt upgrade -y && sudo apt autoremove -y\n# type 'sudo '\n$ sudo █apt update && sudo apt upgrade -y && sudo apt autoremove -y\n# press Ctrl+E to jump back to end, or Enter to run",
    category: "DAILY TIPS"
  },
  {
    id: "daily45",
    question: "Find which command you need by searching man-page descriptions for a keyword with `apropos keyword`",
    answer: "apropos compress",
    explanation: "`apropos KEYWORD` (Latin for 'about; with reference to') searches the SHORT DESCRIPTION lines of every installed man page for the keyword. It's the answer to 'I know what I want to DO, but I don't know what command to use'. The exact same effect is `man -k KEYWORD` — they share an underlying database. Output format: `name (section) - short description`, one match per line. The (section) number tells you which `man N name` to read for full docs. `apropos -e WORD` matches WHOLE words only (no substring inside other words). Multiple keywords are AND-ed by default; use `-o` for OR. The database is built from man-page metadata by `mandb` (Debian) or `makewhatis` (RHEL); if `apropos` returns 'nothing appropriate', run `sudo mandb` (or `sudo /usr/sbin/makewhatis`) to rebuild it. Companion: `whatis CMD` (or `man -f CMD`) gives a one-line summary of a SPECIFIC command. The modern fuzzy-search alternative: `tldr` plus `tldr --list | fzf` for interactive discovery.",
    usage: "Discovering a new tool by what it does, learning about related commands you didn't know existed (`apropos signal` reveals kill, killall, trap, signal(7)), or browsing the toolbox you already have installed.",
    examples: [
      "apropos compress  # find compression tools",
      "apropos -e socket  # exact whole-word match",
      "apropos disk usage  # multiple keywords (AND)",
      "man -k regex  # identical to apropos regex",
      "whatis ls  # one-line summary of a specific command",
      "sudo mandb  # rebuild the apropos database (if results seem missing)"
    ],
    memoryTip: "`apropos KEYWORD` ↔ `man -k KEYWORD` (same thing). `apropos` = 'about' a topic. Companion: `whatis CMD` ↔ `man -f CMD` = one-line summary of a specific command. If 'nothing appropriate', run `sudo mandb` to rebuild the index. Modern alt: `tldr --list | fzf`.",
    outputExample: "$ apropos compress\nbzip2 (1)            - a block-sorting file compressor, v1.0.8\ngzip (1)             - compress or expand files\nlz4 (1)              - lz4, unlz4, lz4cat - Compress or decompress .lz4 files\nxz (1)               - Compress or decompress .xz and .lzma files\nzstd (1)             - zstd, zstdmt, unzstd, zstdcat, zstdgrep ...\nzcat (1)             - compress or expand files\n$ apropos -e socket | head\nss (8)               - another utility to investigate sockets\nsocket (2)           - create an endpoint for communication\nsocket (7)           - Linux socket interface\n$ whatis grep\ngrep (1)             - print lines that match patterns",
    category: "DAILY TIPS"
  },
  {
    id: "daily46",
    question: "Check whether a command is installed (script-friendly, POSIX-portable) with `command -v cmd`",
    answer: "command -v git",
    explanation: "`command -v CMD` is the POSIX-standard way to test whether a command exists. It prints the path of the executable (or the alias/function definition if `CMD` is one of those) and exits 0 on success; on failure it prints nothing and exits non-zero. Crucially, it works in EVERY POSIX shell — `sh`, `dash`, `bash`, `zsh`, `ksh` — making it the canonical script idiom. Compare to `which` (external program, behavior varies across distros, doesn't see aliases/functions, surprising exit codes — AVOID in scripts) and `type` (bash builtin, sees everything but bash-only). Standard usage pattern: `if command -v jq >/dev/null 2>&1; then ... else echo 'install jq'; fi` — redirect to `/dev/null` because we only care about the exit code, not the output. To show ALL matches in $PATH (not just the winner), use `type -a CMD` (bash) or `which -a CMD`. To set defaults based on what's installed: `EDITOR=$(command -v nvim || command -v vim || command -v nano)`. `command` is also a SHELL BUILTIN that runs a command BYPASSING aliases and functions of the same name — useful when an alias is shadowing the real command.",
    usage: "Tool-presence checks in scripts, choosing the best installed editor/pager, gating optional features on whether their dependencies are present.",
    examples: [
      "command -v git >/dev/null || { echo 'install git first' >&2; exit 1; }  # require",
      "if command -v nvim >/dev/null; then EDITOR=nvim; else EDITOR=vim; fi  # pick best",
      "command -v docker >/dev/null && docker ps  # only run docker ps if installed",
      "command ls  # run the real `ls` bypassing any alias",
      "type -a python  # show all 'python' matches in PATH (bash builtin)",
      "for c in jq curl git; do command -v $c >/dev/null || echo \"missing: $c\"; done"
    ],
    memoryTip: "`command -v CMD` = POSIX-portable, script-friendly tool check. Exit 0 if exists, non-zero if not. `which` is quirky, AVOID in scripts. `type` is bash-only but shows aliases. `command CMD` also runs the REAL command bypassing aliases — useful escape hatch.",
    outputExample: "$ command -v git\n/usr/bin/git\n$ command -v nonexistent; echo $?\n1\n$ if command -v jq >/dev/null 2>&1; then echo 'jq installed'; else echo 'install jq'; fi\njq installed\n$ EDITOR=$(command -v nvim || command -v vim || command -v nano)\n$ echo $EDITOR\n/usr/bin/vim\n$ for c in git jq nope curl; do command -v $c >/dev/null || echo \"missing: $c\"; done\nmissing: nope",
    category: "DAILY TIPS"
  },
  {
    id: "daily47",
    question: "Re-run a command on a timer and watch its output update in place with `watch -n 1 'command'`",
    answer: "watch -n 1 'kubectl get pods'",
    explanation: "`watch` clears the screen, runs the given command, displays its output, sleeps, and repeats — giving you a live dashboard from any one-shot command. Default refresh interval is 2 seconds; change with `-n SECONDS` (e.g., `-n 0.5` for twice-per-second on modern watch, or `-n 5` for low-frequency). Key flags: `-d` ('differences') highlights what changed since the last refresh — invaluable for spotting state transitions; `-d=permanent` keeps the highlight on changed positions even after they stop changing; `-t` removes the header so the output uses the full screen; `-c` interprets ANSI color escape sequences from the watched command (without it, watch strips colors); `-x` runs the command via exec rather than shell (useful if your command has tricky quoting); `-g` exits when the output FIRST changes (useful for 'wait until X happens' scripts); `-e` exits when the command's exit code is non-zero. QUOTE the command argument — otherwise the shell expands it once and watch re-runs the static result. Stop with Ctrl-C. `watch` is in the `procps` package on most distros, usually preinstalled. The systemd-era replacement for many `watch` uses is `journalctl -f -u SERVICE` (live log following).",
    usage: "Monitoring a Kubernetes pod start sequence, watching disk usage during a long-running job, tracking active connection counts, or waiting for a file to appear.",
    examples: [
      "watch -n 1 'kubectl get pods'  # refresh kubectl every second",
      "watch -d -n 5 'free -h'  # memory snapshot every 5s with diffs highlighted",
      "watch -c 'systemctl status nginx'  # keep ANSI colors",
      "watch -g 'curl -s -o /dev/null -w \"%{http_code}\" http://localhost'  # exit when HTTP code changes",
      "watch -n 1 'date; echo; df -h /'  # multi-command via quoting + semicolons",
      "watch 'ls -lt /var/log/ | head -10'  # newest logs, top 10"
    ],
    memoryTip: "`watch -n SECONDS 'cmd'` = re-run on a clock. `-d` highlight diffs, `-c` keep colors, `-t` no header, `-g` exit on change, `-e` exit on error. ALWAYS quote the command. Stop with Ctrl-C. Modern equivalent for service logs: `journalctl -f -u SERVICE`.",
    outputExample: "$ watch -n 1 -d 'free -h'\nEvery 1.0s: free -h                       server1: Sat May 17 11:30:14 2026\n\n               total        used        free      shared  buff/cache   available\nMem:            15Gi       4.3Gi       498Mi       320Mi        11Gi        10Gi  ← highlighted (changed)\nSwap:          2.0Gi          0B       2.0Gi\n\n$ watch -g 'docker ps -q | wc -l'  # exit when running container count changes\nEvery 2.0s: docker ps -q | wc -l                                     11:31:00\n3\n# (when count changes, watch exits)",
    category: "DAILY TIPS"
  },
  {
    id: "daily48",
    question: "Add a real-time progress bar with throughput and ETA to any pipe by inserting `pv` (pipe viewer)",
    answer: "pv file.iso | dd of=/dev/sdX bs=4M",
    explanation: "`pv` (pipe viewer) is a tiny utility that sits inside a Unix pipe and prints throughput stats to stderr while passing data through unchanged on stdout. It transforms blind 'is this dd / cp / tar / ssh actually doing anything?' moments into a visible progress bar with ETA, byte counter, and current rate. Install with `sudo apt install pv` or `sudo dnf install pv` — not preinstalled by default. Basic forms: `pv FILE > /dev/null` (read a file, show progress); `pv FILE | next-command` (pipe with progress); `pv < FILE | next-command` (same with stdin). Useful flags: `-s SIZE` tells pv the expected total when it can't determine the size automatically (e.g., when reading from a stream — `pv -s 4G < /dev/urandom > big.bin`); `-L RATE` THROTTLES throughput (`pv -L 1M < src > dst` caps at 1 MB/s); `-r` shows ONLY throughput (no progress bar — useful for unbounded streams); `-t` elapsed time; `-N NAME` adds a label (handy when several `pv` are in the same pipeline). Combine multiple `pv` blocks in a pipeline to see intermediate throughput: `pv -N 'in' SRC | gzip | pv -N 'gz' > DEST`. `pv` is fast enough that adding it almost never hurts performance — it's mostly free observability for shell pipelines.",
    usage: "Watching a slow `dd` to a USB drive, monitoring a multi-GB `tar | ssh` transfer, throttling a bandwidth-heavy operation, or just sanity-checking that a pipeline is actually moving data.",
    examples: [
      "pv file.iso | dd of=/dev/sdX bs=4M  # progress for a USB write",
      "pv -s 4G < /dev/urandom > big.bin  # progress with known total size",
      "pv -L 1M < big.iso > /tmp/copy  # throttle to 1 MB/s",
      "tar -czf - src/ | pv | ssh host 'cat > src.tgz'  # progress mid-ssh",
      "pv -N 'read' src | gzip | pv -N 'gzipped' > dst.gz  # labeled multi-stage",
      "pv access.log | wc -l  # see speed of line-counting a big log"
    ],
    memoryTip: "`pv` = Pipe Viewer. Drop it into any pipeline to get throughput + ETA. `-s SIZE` to set total when piping from a stream; `-L RATE` to throttle; `-N NAME` to label. Install with `apt install pv` / `dnf install pv` — not on by default. Multiple `pv`s in one pipeline let you see slow STAGES.",
    outputExample: "$ pv file.iso > /dev/null\n 1.34GiB 0:00:08 [ 168MiB/s] [=================>      ] 62% ETA 0:00:05\n$ pv -s 2G < /dev/zero > /tmp/big.bin\n 2.00GiB 0:00:11 [ 188MiB/s] [=========================>] 100%\n$ tar -czf - /etc | pv -s $(du -sb /etc | awk '{print $1}') | ssh backup 'cat > etc.tgz'\n 8.41MiB 0:00:02 [4.10MiB/s] [========================>] 100%",
    category: "DAILY TIPS"
  },
  {
    id: "daily49",
    question: "Find the biggest files/folders in the current directory with `du -sh * | sort -h`",
    answer: "du -sh * | sort -h",
    explanation: "`du` ('disk usage') reports how much space files and directories actually consume on disk. The flag combo `-sh` is the everyday form: `-s` SUMMARY (one line per arg, not a recursive listing of every subfile), `-h` HUMAN-readable sizes (4.0K, 12M, 1.4G instead of raw bytes). Glob `*` expands to every non-hidden entry in the current directory. Piping to `sort -h` is the trick: `sort -h` ('human-numeric sort', added in GNU coreutils ~2009) UNDERSTANDS the K/M/G suffixes — without `-h`, sort would compare lexically and `1.0G` would come before `100K`. Want hidden files too? `du -sh .[!.]* * 2>/dev/null | sort -h` (the dotglob avoids `.` and `..`). For TOP 10 biggest with reversed order: `du -sh * | sort -h | tail` (or `sort -rh | head`). For TRUE 'biggest files anywhere under here' (not just direct children), recurse with find: `find . -type f -printf '%s %p\\n' | sort -rn | head` (bytes raw — no human format). Difference from `df`: `du` measures USED space per path; `df` measures filesystem totals (see daily2). They can disagree — `du` counts what files reference, `df` includes unlinked-but-open files and filesystem overhead.",
    usage: "Hunting for the giant folder filling up your disk (typical culprits: `node_modules`, `~/.cache`, `~/Downloads`, `/var/log`), deciding what to delete first, or pre-cleanup audit.",
    examples: [
      "du -sh * | sort -h  # biggest children of current dir, human-readable",
      "du -sh * | sort -hr | head  # TOP 10 biggest (descending)",
      "du -sh .* * 2>/dev/null | sort -h  # include hidden files/dirs",
      "du -sh */ | sort -h  # DIRECTORIES only (trailing slash)",
      "sudo du -sh /var/* 2>/dev/null | sort -h | tail  # biggest under /var",
      "find . -type f -printf '%s %p\\n' | sort -rn | head -10  # biggest INDIVIDUAL files (recursive)"
    ],
    memoryTip: "`du -sh * | sort -h` = the disk-hog hunter. `-s` summary (one line per arg), `-h` human size. `sort -h` understands K/M/G suffixes. To recurse and find biggest individual FILES (not folders): `find . -type f -printf '%s %p\\n' | sort -rn | head`. Modern alternative: `ncdu` (interactive disk-usage explorer).",
    outputExample: "$ du -sh * | sort -h\n4.0K\tREADME.md\n4.0K\tpackage.json\n12K\tdocs/\n96K\tdist/\n12M\tsrc/\n840M\tnode_modules/\n$ du -sh * | sort -hr | head -3\n840M\tnode_modules/\n12M\tsrc/\n96K\tdist/\n$ sudo du -sh /var/* 2>/dev/null | sort -h | tail -3\n412M\t/var/cache\n1.8G\t/var/lib\n4.2G\t/var/log",
    category: "DAILY TIPS"
  },
  {
    id: "daily50",
    question: "Open the previous command in your `$EDITOR` to tweak and re-run it with the `fc` builtin",
    answer: "fc",
    explanation: "`fc` ('fix command' — a bash/POSIX builtin) opens the previous command in your `$EDITOR` so you can edit it on multiple lines, fix typos, refactor a long pipeline, then save+quit to RUN the edited version. Vastly nicer than trying to edit a 200-character one-liner with arrow keys on a tiny prompt. The default editor is whatever `$FCEDIT` or `$EDITOR` is set to (commonly vi, vim, nano, or emacs); override per-invocation with `fc -e EDITOR`. Useful variants: `fc -l` LISTS the recent history with line numbers (similar to `history`); `fc -l -10` lists the last 10; `fc N` edits a specific history entry; `fc N M` edits the range N-M as ONE BLOCK (all commands concatenated, then run as one shell script after save) — great for promoting a sequence of one-off commands into a script. `fc -s old=new` replaces `old` with `new` in the last command and runs it WITHOUT opening the editor — same idea as the `^old^new^` history-expansion shortcut. To start an editing session with a CUSTOM editor for ONE call: `EDITOR=nano fc`. In an interactive session, the bash key sequence `Ctrl-X Ctrl-E` ALSO opens the current line (still being typed) in the editor — perfect for composing a multi-line block before running.",
    usage: "Editing a long pipeline you just typed and want to refactor, turning a series of recent commands into a one-shot block, or composing a multi-line command in a real editor.",
    examples: [
      "fc  # edit last command in $EDITOR, run on save",
      "fc -l  # list last ~16 commands with line numbers",
      "fc -l 100 110  # list entries 100-110",
      "fc 102  # edit command #102 only",
      "fc 100 105  # edit commands 100-105 as ONE block, run as a script",
      "fc -s old=new  # substitute + re-run last (no editor) — same as ^old^new^"
    ],
    memoryTip: "`fc` = Fix Command, opens last command in $EDITOR; save+quit to run. `fc -l` list, `fc N` edit entry, `fc N M` edit range as one block. Interactive: `Ctrl-X Ctrl-E` opens the CURRENT (still-typing) line in editor. Customize: `EDITOR=nano` before fc.",
    outputExample: "$ echo 'a complicated pipe' | grep something | awk '{print $2}' | sort -u | head\nbash: head: command was wrong — let's say there's a typo to fix\n$ fc\n# (editor opens with the above command — fix it, save+quit)\necho 'a complicated pipe' | grep something | awk '{print $2}' | sort -u | head -5\n# (the corrected command then RUNS automatically)\n\n$ fc -l -5\n  198\techo hello\n  199\tls\n  200\tcd src\n  201\tcat main.c\n  202\tfc\n$ fc -s 'echo hello'='echo HELLO'\necho HELLO\nHELLO",
    category: "DAILY TIPS"
  },

  // RHEL / FEDORA
  {
    id: "rhel1",
    question: "Install a package from the configured repositories with `sudo dnf install package_name` (RHEL/Fedora)",
    answer: "sudo dnf install package_name",
    explanation: "`dnf` (Dandified YUM) is the high-level package manager on Fedora and RHEL 8+, replacing the older `yum` command (the binary `yum` is still there as a symlink for muscle memory). A 'package' is a bundle of files plus metadata in `.rpm` format; a 'repository' (repo) is a server-hosted catalog of those packages defined in `/etc/yum.repos.d/*.repo`. When you run `dnf install`, it (1) downloads metadata if stale, (2) resolves dependencies — every other package needed for yours to work — and (3) downloads + extracts everything via `rpm` under the hood. `sudo` is required because writes go to `/usr`, `/etc`, and the RPM database in `/var/lib/rpm`. The `-y` flag auto-answers yes to the confirmation prompt — handy in scripts, dangerous in interactive shells because you can't review what's about to change. `dnf` is preinstalled on Fedora, CentOS Stream, AlmaLinux, and Rocky.",
    usage: "Installing a web server (`sudo dnf install nginx`), pulling in a compiler toolchain on a fresh VM, or grabbing a single utility you noticed is missing (`sudo dnf install htop`).",
    examples: [
      "sudo dnf install nginx  # standard interactive install with a y/N prompt",
      "sudo dnf install -y vim git curl  # install three packages, no prompt (good for scripts)",
      "sudo dnf install ./local-pkg.rpm  # install a downloaded RPM and auto-pull its deps from repos",
      "sudo dnf install --best --allowerasing podman  # let dnf remove conflicting packages to satisfy deps",
      "sudo dnf install 'dnf-command(config-manager)'  # install by capability rather than name",
      "sudo dnf reinstall nginx  # reinstall to repair a broken/modified package"
    ],
    memoryTip: "`dnf` = Dandified Yum, Fedora/RHEL's apt. Mental map: `dnf install` ~ `apt install`, `dnf remove` ~ `apt remove`, `dnf upgrade` ~ `apt upgrade`, `dnf search` ~ `apt search`. Underneath dnf calls `rpm`, the way apt calls `dpkg`.",
    outputExample: "$ sudo dnf install nginx\nLast metadata expiration check: 0:12:33 ago on Fri 17 May 2026 09:45:12.\nDependencies resolved.\n================================================================================\n Package                Architecture   Version              Repository     Size\n================================================================================\nInstalling:\n nginx                  x86_64         1:1.24.0-1.fc40      fedora        34 k\nInstalling dependencies:\n nginx-core             x86_64         1:1.24.0-1.fc40      fedora       579 k\n nginx-filesystem       noarch         1:1.24.0-1.fc40      fedora        11 k\n\nTransaction Summary\n================================================================================\nInstall  3 Packages\n\nTotal download size: 624 k\nIs this ok [y/N]: y\n...\nComplete!",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel2",
    question: "Uninstall a package and any dependencies it pulled in with `sudo dnf remove package_name` (RHEL/Fedora)",
    answer: "sudo dnf remove package_name",
    explanation: "`dnf remove` (alias `dnf erase`) uninstalls the named package plus any dependency that was originally installed FOR it and is no longer required by anything else — these orphans are called 'leaves' or 'userinstalled=false' in dnf-speak. Unlike Debian's `apt remove`, dnf does NOT leave behind configuration files; those are uninstalled too (the closest equivalent of `apt purge` is just `dnf remove`). Beware: removing a package can cascade and uninstall things you actually care about — dnf shows the full removal list at the prompt, READ IT before pressing y. If you accidentally remove something critical, `sudo dnf history undo last` rolls back the most recent transaction. Use `dnf autoremove` afterwards (or instead) to drop dependencies that were installed only as deps and are now orphaned. `sudo` is needed because dnf modifies system directories and the RPM database.",
    usage: "Cleaning up a service you no longer need (`sudo dnf remove httpd`), removing an experimental package, or freeing disk space by removing big unused dev tools.",
    examples: [
      "sudo dnf remove nginx  # remove nginx + any deps it uniquely needed",
      "sudo dnf remove -y old-pkg  # no prompt — only safe in scripts",
      "sudo dnf autoremove  # remove orphaned dependency packages no app needs",
      "sudo dnf remove 'kernel-5.*'  # glob removal of old kernels (keep the running one!)",
      "sudo dnf history undo last  # oops — roll back the most recent remove",
      "rpm -e --nodeps pkg  # nuclear option: remove ignoring deps (can break system)"
    ],
    memoryTip: "`dnf remove` = uninstall plus auto-clean of orphan deps. Compare with `apt remove` (keeps configs) and `apt purge` (removes configs). On dnf, remove already behaves like purge. Pair with `dnf autoremove` for full cleanup.",
    outputExample: "$ sudo dnf remove nginx\nDependencies resolved.\n================================================================================\n Package             Architecture  Version             Repository       Size\n================================================================================\nRemoving:\n nginx               x86_64        1:1.24.0-1.fc40     @fedora        110 k\nRemoving unused dependencies:\n nginx-core          x86_64        1:1.24.0-1.fc40     @fedora        2.0 M\n nginx-filesystem    noarch        1:1.24.0-1.fc40     @fedora          0  \n\nTransaction Summary\n================================================================================\nRemove  3 Packages\n\nFreed space: 2.1 M\nIs this ok [y/N]: y\nComplete!",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel3",
    question: "Upgrade every installed package to the newest available version with `sudo dnf upgrade` (RHEL/Fedora)",
    answer: "sudo dnf upgrade",
    explanation: "`dnf upgrade` (alias `dnf update` — same thing on dnf, unlike apt where they differ) compares every installed package against the repository metadata and pulls in the newer versions. It also handles obsoletes — packages that have been renamed or replaced — so it can swap `pkg-old` for `pkg-new` automatically. By default dnf caches metadata for ~48 hours; pass `--refresh` to force a fresh check before upgrading. Kernel upgrades install a NEW kernel alongside the running one (so a botched kernel doesn't brick the system) — you'll need to reboot to use it. After a big upgrade, check `needs-restarting -r` (from `dnf-utils`) or just reboot if the kernel or glibc changed. Major-version upgrades (Fedora 39 → 40) need `dnf system-upgrade`, not `dnf upgrade`. Run this on a routine schedule; sudo is required because it rewrites system files.",
    usage: "Routine weekly/monthly patching on a server, applying security fixes, or refreshing a freshly installed VM before doing other work.",
    examples: [
      "sudo dnf upgrade  # interactive upgrade of every outdated package",
      "sudo dnf upgrade -y  # unattended — pair with cron or a reboot policy",
      "sudo dnf upgrade --refresh  # force re-download of repo metadata first",
      "sudo dnf upgrade nginx  # upgrade just one package (and its deps)",
      "sudo dnf upgrade --security  # apply only security errata (RHEL)",
      "sudo dnf check-update  # dry-run: list what WOULD upgrade, exit 100 if any"
    ],
    memoryTip: "`dnf upgrade` = the whole-system bump. Compare: `apt update && apt upgrade` is a two-step on Debian (refresh metadata, then install); `dnf upgrade` does both in one shot but `--refresh` forces an extra-fresh metadata pull. `check-update` is the safe dry-run.",
    outputExample: "$ sudo dnf upgrade\nLast metadata expiration check: 0:00:32 ago on Sat 17 May 2026 08:01:11.\nDependencies resolved.\n================================================================================\n Package              Arch     Version              Repository        Size\n================================================================================\nUpgrading:\n kernel-core          x86_64   6.8.9-300.fc40       updates           37 M\n kernel-modules       x86_64   6.8.9-300.fc40       updates           45 M\n glibc                x86_64   2.39-7.fc40          updates          2.1 M\n openssl-libs         x86_64   3.2.2-1.fc40         updates          2.4 M\n\nTransaction Summary\n================================================================================\nUpgrade  4 Packages\n\nTotal download size: 87 M\nIs this ok [y/N]:",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel4",
    question: "Search the repositories for packages matching a keyword with `dnf search keyword` (RHEL/Fedora)",
    answer: "dnf search keyword",
    explanation: "`dnf search` queries the metadata of every enabled repository for packages whose NAME or SUMMARY (short description) contains the keyword. The output is grouped into two sections: 'Name & Summary Matched' (strong hits) and just 'Name Matched' or 'Summary Matched' (weaker). Add `--all` (or `search all`) to also search the long DESCRIPTION field — slower but catches more. No `sudo` needed; this is a read-only operation against cached metadata, although the very first run after install may trigger a metadata download. If your search returns nothing, try a broader term or run `sudo dnf makecache` to refresh the cache. For exact-name listings use `dnf list` with a glob (`dnf list 'python3-*'`). To see WHICH packages provide a specific file or capability, use `dnf provides` instead.",
    usage: "Finding a tool when you only remember roughly what it does (`dnf search markdown`), discovering plugins for an installed package, or browsing what's available in a new repo.",
    examples: [
      "dnf search editor  # find text editors in repos",
      "dnf search nginx  # name & summary matches for nginx",
      "dnf search --all 'web server'  # also search long descriptions (slower, more hits)",
      "dnf search 'python3-flask*'  # glob-style — quote it so the shell doesn't expand",
      "dnf list 'python3-*' | head -20  # alternative: list packages by name pattern",
      "dnf list --available --upgrades  # what upgrades are pending"
    ],
    memoryTip: "`dnf search` reads NAME+SUMMARY; add `--all` for full description. Mental map: `dnf search` ~ `apt search`, `dnf list <glob>` ~ `apt list <glob>`, `dnf provides <path>` ~ `apt-file search <path>`.",
    outputExample: "$ dnf search nginx\nLast metadata expiration check: 0:23:08 ago on Sat 17 May 2026 07:52:01.\n========================== Name Exactly Matched: nginx ==========================\nnginx.x86_64 : A high performance web server and reverse proxy server\n=========================== Name & Summary Matched: nginx ===========================\nnginx-core.x86_64 : nginx minimal core\nnginx-mod-http-image-filter.x86_64 : Nginx HTTP image filter module\nnginx-mod-stream.x86_64 : Nginx stream modules\npagure.noarch : A git-centered forge using nginx and python3",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel5",
    question: "Show detailed info (version, repo, size, description) about a package with `dnf info package_name` (RHEL/Fedora)",
    answer: "dnf info package_name",
    explanation: "`dnf info` is the long-form metadata dump for a package: name, epoch/version/release (the full version triple), architecture (x86_64, aarch64, noarch), source RPM, repository it came from, install size, license, project URL, and the full description. If the package is installed, dnf shows both the installed version AND any newer version available in the repo, so you can spot upgrades at a glance. Use `--installed` to limit output to the local copy, or `--available` for the repo copy only. The output reads like a man-page entry for the package and is the standard way to vet something before installing — check the URL, license, and description. No sudo needed. The closest Debian/Ubuntu equivalent is `apt show pkg`.",
    usage: "Reading what a package actually does before you install it, checking which version is installed vs. available, or pasting metadata into a bug report.",
    examples: [
      "dnf info nginx  # full metadata — installed and/or available versions",
      "dnf info --installed nginx  # only the version already on disk",
      "dnf info --available nginx  # only repo versions, hide installed",
      "dnf info kernel | grep ^Version  # quick version grab",
      "dnf list --installed nginx  # short one-line summary (alt view)",
      "rpm -qi nginx  # query-info via rpm directly (no repo data)"
    ],
    memoryTip: "`dnf info` ~ `apt show`. It's the 'man page' for a package — read it before installing anything you don't recognize. The `rpm -qi` form does the same against the LOCAL database (no repo metadata).",
    outputExample: "$ dnf info nginx\nLast metadata expiration check: 0:31:14 ago on Sat 17 May 2026 07:52:01.\nAvailable Packages\nName         : nginx\nEpoch        : 1\nVersion      : 1.24.0\nRelease      : 1.fc40\nArchitecture : x86_64\nSize         : 34 k\nSource       : nginx-1.24.0-1.fc40.src.rpm\nRepository   : fedora\nSummary      : A high performance web server and reverse proxy server\nURL          : https://nginx.org\nLicense      : BSD-2-Clause\nDescription  : Nginx is a web server and a reverse proxy server for HTTP,\n             : SMTP, POP3 and IMAP protocols...",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel6",
    question: "View the log of every install/upgrade/remove transaction with `dnf history` (RHEL/Fedora)",
    answer: "dnf history",
    explanation: "`dnf history` is one of dnf's superpowers over old yum/apt: it keeps a numbered ledger of EVERY transaction (install, upgrade, remove, reinstall) with the timestamp, the user who ran it, the command line, and how many packages were altered. Each transaction has an ID you can drill into with `dnf history info ID` for the full file-level change list, and — crucially — undo with `dnf history undo ID`, which reverses just that transaction (reinstalls what was removed, removes what was installed). You can also `dnf history rollback ID` to revert ALL transactions newer than ID (everything since that point). The data lives in `/var/lib/dnf/history.sqlite`. `dnf history` itself is read-only and needs no sudo; `undo`/`rollback` write to the system, so they do. Beware: undo can fail if package versions are no longer available in any repo.",
    usage: "Tracing 'when did this break?', undoing a bad upgrade, or auditing what an admin script did overnight.",
    examples: [
      "dnf history  # paginated list of all transactions (newest first)",
      "dnf history list nginx  # only transactions that touched nginx",
      "sudo dnf history info 42  # exact files/packages in transaction 42",
      "sudo dnf history undo 42  # reverse just transaction 42",
      "sudo dnf history undo last  # undo the most recent transaction (alias for the highest ID)",
      "sudo dnf history rollback 40  # revert ALL transactions newer than 40"
    ],
    memoryTip: "`dnf history` = the time machine for packages. `info` to inspect, `undo` to reverse one txn, `rollback` to time-travel to a past state. No equivalent in stock `apt` — this is a real Red Hat win.",
    outputExample: "$ dnf history\nID     | Command line              | Date and time    | Action(s)      | Altered\n-------------------------------------------------------------------------------\n    44 | upgrade                   | 2026-05-17 08:01 | Upgrade        |    4\n    43 | install htop              | 2026-05-15 14:22 | Install        |    1\n    42 | install nginx             | 2026-05-14 09:10 | Install        |    3\n    41 | remove apache2            | 2026-05-13 19:48 | Erase          |    1\n    40 | -y upgrade                | 2026-05-10 03:00 | Upgrade        |   22 EE",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel7",
    question: "Find which package (installed or installable) ships a given file or capability with `dnf provides /path/to/file` (RHEL/Fedora)",
    answer: "dnf provides /usr/bin/curl",
    explanation: "`dnf provides` (alias `dnf whatprovides`) answers 'which package contains this file?' by searching repo metadata — so it works for packages you DON'T have installed yet. Pass it a full path (`/usr/bin/curl`), a glob (`'*/nginx.conf'` — quote it so the shell doesn't expand), or a capability name like a library soname (`'libssl.so.3()(64bit)'`). The reverse, `rpm -qf /path`, only queries the LOCAL RPM database, so it only works for files already on your system; `dnf provides` works against the whole repo universe. Multiple packages can ship the same path (e.g., `python3-pip` and `pip` both provide `/usr/bin/pip`), so expect a list. No sudo needed. This is the answer to 'command not found — what do I install?' on RHEL/Fedora.",
    usage: "Translating 'bash: foobar: command not found' into a package name, finding which package to install to satisfy a missing library, or tracing where a rogue config file came from.",
    examples: [
      "dnf provides /usr/bin/curl  # which package ships curl?",
      "dnf provides '*/nginx.conf'  # glob — quote it!",
      "dnf provides 'libssl.so.3()(64bit)'  # capability lookup",
      "dnf provides /bin/sh  # often answers `bash`",
      "rpm -qf /usr/bin/curl  # local-DB-only equivalent (only works if installed)",
      "dnf whatprovides curl  # same as `provides`, longer name"
    ],
    memoryTip: "`dnf provides PATH` = 'who shipped this?' across all repos. `rpm -qf PATH` = 'who shipped this?' but only for installed files. Debian equivalents: `apt-file search` (repo-wide) and `dpkg -S` (installed only).",
    outputExample: "$ dnf provides /usr/bin/curl\nLast metadata expiration check: 0:42:01 ago on Sat 17 May 2026 07:52:01.\ncurl-8.6.0-1.fc40.x86_64 : A utility for getting files from remote servers\nRepo        : fedora\nMatched from:\nFilename    : /usr/bin/curl\n\ncurl-8.6.0-3.fc40.x86_64 : A utility for getting files from remote servers\nRepo        : updates\nMatched from:\nFilename    : /usr/bin/curl",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel8",
    question: "Wipe cached repository metadata and downloaded packages with `sudo dnf clean all` (RHEL/Fedora)",
    answer: "sudo dnf clean all",
    explanation: "dnf caches two things under `/var/cache/dnf/`: (1) repository metadata — the lists of available packages — and (2) the actual downloaded `.rpm` files for transactions in progress. `dnf clean all` deletes BOTH, forcing dnf to re-fetch metadata from every enabled repo on the next operation. This fixes a surprising number of weird states: 'Error: Failed to download metadata', stale upgrade info, signature errors after a repo URL change, or just freeing the few hundred MB the cache can balloon to. The narrower forms (`clean metadata`, `clean packages`, `clean dbcache`, `clean expire-cache`) let you nuke only one slice. After cleaning, the next dnf run will be slower because it must re-download metadata; run `sudo dnf makecache` to pre-warm. Needs sudo because `/var/cache/dnf` is owned by root.",
    usage: "Recovering after a flaky repo update, freeing disk space on a small VM, or scripting a clean state before automated tests.",
    examples: [
      "sudo dnf clean all  # nuke metadata + packages + dbcache",
      "sudo dnf clean metadata  # only repo metadata",
      "sudo dnf clean packages  # only the downloaded .rpm files",
      "sudo dnf clean expire-cache  # mark metadata stale without deleting it",
      "sudo dnf makecache  # re-warm the cache after a clean",
      "du -sh /var/cache/dnf  # see how much the cache is using"
    ],
    memoryTip: "`dnf clean all` = forget everything. Pair with `dnf makecache` to immediately re-fetch. Equivalent on Debian: `sudo apt clean` (packages) + `sudo rm -rf /var/lib/apt/lists/*` (metadata).",
    outputExample: "$ sudo dnf clean all\n47 files removed\n$ sudo dnf makecache\nFedora 40 - x86_64                          1.2 MB/s |  82 MB     01:08\nFedora 40 - x86_64 - Updates               890 kB/s |  34 MB     00:39\nMetadata cache created.",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel9",
    question: "Install a curated package set (like a full build toolchain) with `sudo dnf group install \"Development Tools\"` (RHEL/Fedora)",
    answer: "sudo dnf group install \"Development Tools\"",
    explanation: "A 'group' is a named bundle of related packages defined in the repo metadata — think of it as a meta-package or a tag. Common groups include 'Development Tools' (gcc, make, autoconf, git, rpm-build, etc.), 'GNOME Desktop', 'Server with GUI', 'Container Management', and many more. Each group has REQUIRED (mandatory) and OPTIONAL packages; by default `dnf group install` only pulls the mandatory ones. Add `--with-optional` to pull both. ALWAYS quote the group name because most contain spaces. List what's available with `dnf group list` (or `dnf group list --hidden` to see unmaintained ones). Remove a group with `dnf group remove` to uninstall everything that came with it. Under the hood, group state is tracked in `/var/lib/dnf/groups.json`. Sudo required.",
    usage: "Setting up a build/dev environment on a fresh VM in one command, installing a desktop on a headless install, or bootstrapping a CI image.",
    examples: [
      "sudo dnf group install \"Development Tools\"  # full C/C++ build toolchain",
      "sudo dnf group install --with-optional \"Development Tools\"  # plus optional extras",
      "dnf group list  # see installed and available groups",
      "dnf group list --hidden  # include hidden/legacy groups",
      "dnf group info \"Development Tools\"  # see exactly which packages are in the group",
      "sudo dnf group remove \"GNOME Desktop\"  # uninstall the whole group"
    ],
    memoryTip: "Group = meta-package = 'one install, many packages'. Quote names with spaces. `info` to inspect, `install` to apply, `remove` to undo. Debian equivalent: `apt install build-essential` (a single meta-package, not a 'group').",
    outputExample: "$ sudo dnf group install \"Development Tools\"\nLast metadata expiration check: 0:01:43 ago on Sat 17 May 2026 09:10:22.\nDependencies resolved.\n================================================================================\n Package          Architecture   Version              Repository        Size\n================================================================================\nInstalling Groups:\n Development Tools\nInstalling group/module packages:\n autoconf         noarch         2.71-7.fc40          fedora           714 k\n automake         noarch         1.16.5-13.fc40       fedora           695 k\n binutils         x86_64         2.41-37.fc40         updates          6.0 M\n gcc              x86_64         14.0.1-0.16.fc40     updates           38 M\n make             x86_64         4.4.1-2.fc40         fedora           588 k\n...\nTransaction Summary\n================================================================================\nInstall  47 Packages\n\nTotal download size: 142 M\nIs this ok [y/N]:",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel10",
    question: "List every package currently installed on the system with `rpm -qa` (RHEL/Fedora)",
    answer: "rpm -qa",
    explanation: "`rpm` is the low-level package manager that dnf calls under the hood. The flags `-q` ('query' mode) and `-a` ('all') together mean 'query every package installed' — output is one NEVRA (Name-Epoch-Version-Release-Architecture) per line, like `nginx-1.24.0-1.fc40.x86_64`. This is a read-only query against the local RPM database at `/var/lib/rpm/`, so no sudo needed and it's safe to run anywhere. The list isn't sorted by default (it's in DB-insertion order) — pipe to `sort` if you want alphabetical. Use `--queryformat` (or `--qf`) to customize the output columns: package names only, with install dates, sizes, etc. `dnf list --installed` is a higher-level alternative with prettier output but slower. Useful for inventories, diffing two systems, or piping into `grep` to check whether something specific is on a machine.",
    usage: "Auditing what's installed before a migration, checking whether a specific package is present (`rpm -qa | grep nginx`), counting installed packages, or generating a manifest to recreate on another host.",
    examples: [
      "rpm -qa | wc -l  # how many packages are installed?",
      "rpm -qa | sort  # alphabetical full list",
      "rpm -qa | grep -i nginx  # is nginx installed?",
      "rpm -qa --queryformat '%{NAME}\\n' | sort  # names only, no versions",
      "rpm -qa --last | head  # 10 most recently installed packages",
      "rpm -qa --qf '%{INSTALLTIME:date} %{NAME}\\n' | sort  # install date + name"
    ],
    memoryTip: "`rpm -qa` = Query All. Build a vocabulary: `-q` always means query, then add `-a` (all), `-f FILE` (which pkg owns this file), `-l PKG` (list files), `-i PKG` (info). Debian equivalent: `dpkg -l` or `dpkg --list`.",
    outputExample: "$ rpm -qa | head -5\nbasesystem-11-20.fc40.noarch\nfilesystem-3.18-8.fc40.x86_64\nglibc-2.39-7.fc40.x86_64\nbash-5.2.26-3.fc40.x86_64\nnginx-1.24.0-1.fc40.x86_64\n$ rpm -qa | wc -l\n812",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel11",
    question: "Find which INSTALLED package owns a specific file with `rpm -qf /path/to/file` (RHEL/Fedora)",
    answer: "rpm -qf /etc/nginx/nginx.conf",
    explanation: "`rpm -qf` ('query file') asks the local RPM database 'which installed package owns this path?' It expects a full path; relative paths or filenames won't work. Pair with `$(which cmd)` to look up a binary by name: `rpm -qf $(which curl)`. Returns 'file ... is not owned by any package' if the file was created by a user, a service, or installed outside RPM (e.g., `pip`, `npm`, `make install`). This is the LOCAL counterpart to `dnf provides PATH`, which searches all REPOS — use `rpm -qf` when you know the file exists on your system and you want a fast lookup, and `dnf provides` when the file doesn't exist locally yet but you want to know which package would install it. No sudo needed.",
    usage: "Figuring out 'which package do I need to investigate / reinstall / patch?' when a binary or config behaves oddly. Useful before editing a system file — knowing the owning package warns you the next upgrade might overwrite your edits.",
    examples: [
      "rpm -qf /etc/nginx/nginx.conf  # which package shipped this config?",
      "rpm -qf $(which curl)  # binary lookup via $(which ...)",
      "rpm -qf /lib/systemd/system/sshd.service  # systemd unit owner",
      "rpm -qf /usr/bin/python3  # multiple-version Python? Find out which",
      "rpm -qf ~/.bashrc  # NOT owned — user-created file → 'not owned by any package'",
      "for f in /etc/cron.d/*; do rpm -qf \"$f\"; done  # audit a directory"
    ],
    memoryTip: "`rpm -qf` = Query File owner. Memorize the trio: `rpm -qa` (all installed), `rpm -qf PATH` (who owns this), `rpm -ql PKG` (list files in this). Debian equivalent: `dpkg -S /path` or `dpkg --search /path`.",
    outputExample: "$ rpm -qf /etc/nginx/nginx.conf\nnginx-filesystem-1:1.24.0-1.fc40.noarch\n$ rpm -qf $(which curl)\ncurl-8.6.0-1.fc40.x86_64\n$ rpm -qf /tmp/myfile.txt\nfile /tmp/myfile.txt is not owned by any package",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel12",
    question: "List every file installed by a package with `rpm -ql package_name` (RHEL/Fedora)",
    answer: "rpm -ql nginx",
    explanation: "`rpm -ql` ('query list-files') prints every path the package owns: binaries, libraries, configs, man pages, systemd unit files, even empty directories the package depends on. Filter with `grep` to find specific kinds of files (`grep /etc` for configs, `grep bin/` for executables, `grep /share/man` for man pages). Related siblings worth knowing: `rpm -qc PKG` shows ONLY config files (great for 'what should I back up before reinstalling?'), `rpm -qd PKG` shows ONLY documentation files, and `rpm -qL PKG` shows license files. All of these work against the local RPM database, no sudo, no network. If you want to see contents of a package that ISN'T installed, download the `.rpm` and use `rpm -qlp ./pkg.rpm` (note the `-p`).",
    usage: "Finding where a package put its binaries or config, locating the right man page, or auditing a package before installing/removing it.",
    examples: [
      "rpm -ql nginx  # every file the package owns",
      "rpm -ql nginx | grep /etc  # just config paths",
      "rpm -qc nginx  # ONLY config files (no binaries/docs)",
      "rpm -qd nginx  # ONLY documentation files",
      "rpm -ql nginx | xargs ls -ld 2>/dev/null  # detailed listing of every file",
      "rpm -qlp ./downloaded.rpm  # list contents of an .rpm file not yet installed"
    ],
    memoryTip: "`rpm -ql` = Query List. Mnemonic group: -ql (all files), -qc (configs), -qd (docs), -qi (info), -qf (which pkg owns file). For an UNINSTALLED .rpm file add `-p` (package file mode).",
    outputExample: "$ rpm -ql nginx | head -10\n/etc/logrotate.d/nginx\n/etc/nginx/conf.d\n/etc/nginx/default.d\n/etc/nginx/fastcgi.conf\n/etc/nginx/fastcgi_params\n/etc/nginx/koi-utf\n/etc/nginx/koi-win\n/etc/nginx/mime.types\n/etc/nginx/nginx.conf\n/usr/lib/systemd/system/nginx.service\n$ rpm -qc nginx | head -3\n/etc/logrotate.d/nginx\n/etc/nginx/fastcgi.conf\n/etc/nginx/nginx.conf",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel13",
    question: "Start a systemd service immediately (without changing whether it starts at boot) with `sudo systemctl start servicename` (RHEL/Fedora)",
    answer: "sudo systemctl start nginx",
    explanation: "`systemd` is the init system that boots Linux and supervises services on modern RHEL/Fedora/Ubuntu/Arch. Each service is described by a 'unit file' (`*.service`) in `/usr/lib/systemd/system/` (vendor) or `/etc/systemd/system/` (admin overrides). `systemctl` is the command you use to interact with systemd. `start` launches the unit RIGHT NOW but does NOT make it persistent across reboots — for that you need `enable` (see rhel14). After starting, verify with `systemctl status nginx` or `systemctl is-active nginx`. If the service fails to start, `journalctl -xeu nginx` is your debug command. `sudo` is required because systemd manages system-wide state. Common companion verbs: `stop`, `restart` (stop+start), `reload` (re-read config without dropping connections — only some services support it), `try-restart` (restart only if already running).",
    usage: "Bringing up a service after installing it, after editing its config, or after debugging a crash. Also the first action when a service is unexpectedly down.",
    examples: [
      "sudo systemctl start nginx  # launch now, but boot state unchanged",
      "sudo systemctl stop nginx  # stop now (still starts at boot if enabled)",
      "sudo systemctl restart nginx  # stop then start — drops connections briefly",
      "sudo systemctl reload nginx  # re-read config without dropping conns (nginx supports this)",
      "systemctl status nginx  # see active/inactive/failed + last log lines (no sudo needed to read)",
      "systemctl is-active nginx  # one-word answer: active / inactive / failed"
    ],
    memoryTip: "`start`/`stop`/`restart` = NOW only. `enable`/`disable` = boot only. `enable --now` / `disable --now` = both. If something looks broken, run `systemctl status` first, then `journalctl -xeu UNIT` for the full log.",
    outputExample: "$ sudo systemctl start nginx\n$ systemctl status nginx\n● nginx.service - The nginx HTTP and reverse proxy server\n     Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; preset: disabled)\n     Active: active (running) since Sat 2026-05-17 09:32:01 UTC; 4s ago\n   Main PID: 4821 (nginx)\n      Tasks: 3 (limit: 4567)\n     Memory: 4.8M\n        CPU: 22ms\n     CGroup: /system.slice/nginx.service\n             ├─4821 \"nginx: master process /usr/sbin/nginx\"\n             ├─4822 \"nginx: worker process\"\n             └─4823 \"nginx: worker process\"",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel14",
    question: "Make a service start automatically at every boot AND start it right now with `sudo systemctl enable --now servicename` (RHEL/Fedora)",
    answer: "sudo systemctl enable --now nginx",
    explanation: "`systemctl enable UNIT` creates a symlink from a target's `.wants/` directory (usually `/etc/systemd/system/multi-user.target.wants/`) to the unit file — that's how systemd remembers which services to auto-start at the right point in the boot sequence. By itself, `enable` only schedules the unit for future boots; the service stays in its current state right now. The `--now` flag is sugar that runs `start` immediately afterwards, so this single command both persists across reboots AND launches the service. The mirror is `disable --now` which combines `disable` + `stop`. Check the current persistence state with `systemctl is-enabled UNIT` (prints `enabled`, `disabled`, `masked`, or `static`). 'Masked' is stronger than disabled — it makes the unit impossible to start by anyone. Common foot-gun: a fresh `dnf install` does NOT auto-enable services on Fedora/RHEL (unlike Debian) — you must enable explicitly.",
    usage: "Wiring up a freshly installed service in ONE command, or reversing it cleanly with `disable --now`. Standard pattern after `dnf install` on RHEL/Fedora.",
    examples: [
      "sudo systemctl enable --now nginx  # start now + persist on boot",
      "sudo systemctl disable --now nginx  # stop now + don't start at boot",
      "sudo systemctl enable nginx  # boot-only — does NOT start now",
      "sudo systemctl is-enabled nginx  # check: enabled / disabled / masked / static",
      "sudo systemctl mask nginx  # forbid the service entirely (stronger than disable)",
      "sudo systemctl unmask nginx  # undo a mask"
    ],
    memoryTip: "`enable --now` = persist + run. Verb cheat-sheet: `start/stop` (now only), `enable/disable` (boot only), `--now` (both at once), `mask/unmask` (forbid/permit). Default on RHEL/Fedora is that nothing auto-enables — you opt in explicitly.",
    outputExample: "$ sudo systemctl enable --now nginx\nCreated symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /usr/lib/systemd/system/nginx.service.\n$ systemctl is-enabled nginx\nenabled\n$ systemctl is-active nginx\nactive",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel15",
    question: "Tell systemd to re-read unit files after you've edited one with `sudo systemctl daemon-reload` (RHEL/Fedora)",
    answer: "sudo systemctl daemon-reload",
    explanation: "systemd parses every `.service` (and `.timer`, `.socket`, `.mount`) file once at boot and caches them in memory. If you edit a unit file by hand — say to change `ExecStart=` or add an `Environment=` line — systemd is STILL using the cached version until you tell it to re-read. `daemon-reload` forces systemd to re-parse all unit files without restarting anything. After that, you usually need `systemctl restart UNIT` to actually apply the change to the running service (or `reload` if the service supports it). Beginners frequently edit `/etc/systemd/system/foo.service`, run `systemctl restart foo`, see no change, and get confused — the missing step is `daemon-reload`. systemd itself nags you about this with a 'Warning: The unit file ... has changed on disk' message. The stronger `daemon-reexec` actually re-executes the systemd binary itself (used after a systemd package upgrade, rare). `systemctl edit UNIT` opens a drop-in override file in your editor AND auto-reloads when you exit — strongly preferred over editing the original unit file because vendor upgrades won't clobber your changes.",
    usage: "Right after manually editing any unit file under `/etc/systemd/system/`. Also after creating a new `.service` file you wrote yourself.",
    examples: [
      "sudo systemctl daemon-reload  # re-parse all unit files",
      "sudo systemctl daemon-reload && sudo systemctl restart nginx  # apply your edit",
      "sudo systemctl edit nginx  # opens an override editor AND auto-reloads — preferred",
      "sudo systemctl edit --full nginx  # edit the FULL unit (copy to /etc) instead of override",
      "sudo systemctl daemon-reexec  # re-execute systemd itself (after systemd pkg upgrade)",
      "sudo systemctl revert nginx  # discard local edits, fall back to vendor unit"
    ],
    memoryTip: "Edit unit → `daemon-reload` → `restart`. Or just use `systemctl edit UNIT` which is the modern way and handles the reload for you. `reload` (no daemon) = reload the SERVICE'S config; `daemon-reload` = reload systemd's own knowledge of unit files.",
    outputExample: "$ sudo vim /etc/systemd/system/myapp.service\n$ sudo systemctl restart myapp\nWarning: The unit file, source configuration file or drop-ins of myapp.service changed on disk. Run 'systemctl daemon-reload' to reload units.\n$ sudo systemctl daemon-reload\n$ sudo systemctl restart myapp\n# (no output — success)",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel16",
    question: "View the most recent logs for a single systemd service with explanatory hints using `journalctl -xeu servicename` (RHEL/Fedora)",
    answer: "journalctl -xeu nginx",
    explanation: "`journalctl` reads the systemd journal — the structured, binary log stream that systemd captures from every service's stdout/stderr and from syslog-style calls. It REPLACES the old `/var/log/messages` + `/var/log/syslog` style logs on systemd systems (those files may not even exist on Fedora). The three flags chain meaningfully: `-u nginx` filters to just one unit, `-e` jumps to the END (newest entries) so you see what just happened, and `-x` ('explain') annotates known systemd errors with hints — extra lines that link to docs or suggest fixes. Output opens in `less` by default, so press `q` to quit, `/` to search, `G`/`g` for end/start. To follow live (like `tail -f`), use `-f`. To bound by time, `--since '10 min ago'` or `--since today`. Non-root users can only see their own services' logs by default; add `sudo` to see everything, or add yourself to the `systemd-journal` group. This is THE command for debugging 'why did my service fail?'.",
    usage: "Debugging why `systemctl start foo` failed, watching a service in real time while you reproduce a bug, or pulling 'what happened around 3am last night' for an incident.",
    examples: [
      "sudo journalctl -xeu nginx  # newest entries for nginx + error explanations",
      "sudo journalctl -fu nginx  # follow live (Ctrl-C to stop) — like tail -f",
      "sudo journalctl -u nginx --since '10 min ago'  # bounded by time",
      "sudo journalctl -u nginx --since today --until '1 hour ago'  # time range",
      "sudo journalctl -p err -b  # only errors from THIS boot",
      "sudo journalctl -k  # kernel ring buffer (like dmesg)"
    ],
    memoryTip: "Mnemonic `-xeu`: e(X)plain + (E)nd + (U)nit. The trio I reach for first when `systemctl status` shows a service failed. Add `-f` for follow, `-b` for current boot, `-p err` to filter by priority.",
    outputExample: "$ sudo journalctl -xeu nginx\nMay 17 09:32:01 server1 systemd[1]: Starting nginx.service - The nginx HTTP and reverse proxy server...\nMay 17 09:32:01 server1 nginx[4820]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nMay 17 09:32:01 server1 nginx[4820]: nginx: configuration file /etc/nginx/nginx.conf test failed\nMay 17 09:32:01 server1 systemd[1]: nginx.service: Control process exited, code=exited, status=1/FAILURE\n░░ Subject: Unit process exited\n░░ Defined-By: systemd\n░░ The process \" /usr/sbin/nginx -t\" exited with status 1.\nMay 17 09:32:01 server1 systemd[1]: nginx.service: Failed with result 'exit-code'.\nMay 17 09:32:01 server1 systemd[1]: Failed to start nginx.service - The nginx HTTP and reverse proxy server.",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel17",
    question: "Show every active firewall rule in the default zone with `sudo firewall-cmd --list-all` (RHEL/Fedora)",
    answer: "sudo firewall-cmd --list-all",
    explanation: "`firewalld` is the default dynamic firewall manager on RHEL/Fedora; under the hood it programs `nftables` (or older `iptables`) rules. Its key concept is the 'zone' — a named set of trust rules, e.g., `public` (default on most servers, trust little), `home` (trust more), `trusted` (trust everything), `drop` (block everything silently). Each network interface is bound to exactly one zone. `--list-all` prints the WHOLE state of the default zone: which services are allowed (named bundles like `ssh`, `http`), which raw ports, source addresses, rich rules, and forwarding settings. To inspect a specific zone, append `--zone=NAME`. `firewall-cmd` runs against the LIVE runtime configuration by default; to inspect what's on disk, add `--permanent`. The reason `sudo` is needed even to list rules is that the firewall state lives in a privileged D-Bus service.",
    usage: "Auditing what's open on a server during a security review, double-checking a rule you just added, or debugging why a port is unreachable.",
    examples: [
      "sudo firewall-cmd --list-all  # full state of the default zone",
      "sudo firewall-cmd --list-all --zone=public  # specific zone",
      "sudo firewall-cmd --get-active-zones  # which zones are bound to which interfaces",
      "sudo firewall-cmd --get-default-zone  # zone used by default for new interfaces",
      "sudo firewall-cmd --list-services  # just the named services line",
      "sudo firewall-cmd --list-ports  # just the raw port list"
    ],
    memoryTip: "Think 'zones over interfaces' on firewalld. `--list-all` = everything in the active zone, `--get-active-zones` = which zones are live, `--permanent` = on-disk vs runtime. RHEL/Fedora default = `public` zone, which allows only `ssh` and `dhcpv6-client`.",
    outputExample: "$ sudo firewall-cmd --list-all\npublic (active)\n  target: default\n  icmp-block-inversion: no\n  interfaces: eth0\n  sources: \n  services: ssh dhcpv6-client http\n  ports: 8080/tcp\n  protocols: \n  forward: yes\n  masquerade: no\n  forward-ports: \n  source-ports: \n  icmp-blocks: \n  rich rules:",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel18",
    question: "Permanently open TCP port 8080 through firewalld with `sudo firewall-cmd --add-port=8080/tcp --permanent` (RHEL/Fedora)",
    answer: "sudo firewall-cmd --add-port=8080/tcp --permanent",
    explanation: "firewalld has TWO configurations: a runtime (in-memory, lost on reboot) and a permanent (on-disk, survives reboot). By DEFAULT, every `firewall-cmd` change touches only runtime — handy when testing because a wrong rule disappears on reboot. Adding `--permanent` writes the rule to the on-disk zone file under `/etc/firewalld/zones/`, but does NOT apply it live until you run `sudo firewall-cmd --reload`. So the standard two-step is: (1) add with `--permanent`, (2) `--reload` to pull the permanent config into runtime. A shortcut to write to BOTH at once without a reload is to run the command twice — once with `--permanent` and once without. Use `--add-service=NAME` instead of `--add-port` when a named service exists (e.g., `http`, `https`, `mysql`) — it's more readable and ports may change. List available services with `firewall-cmd --get-services`. Always pair add with `--list-all` to confirm the rule landed.",
    usage: "Opening a port for a new application server, or whitelisting a custom service after install. Standard step when standing up a web app on a fresh RHEL/Fedora box.",
    examples: [
      "sudo firewall-cmd --add-port=8080/tcp --permanent  # persist the rule",
      "sudo firewall-cmd --reload  # apply permanent rules to runtime — REQUIRED after --permanent",
      "sudo firewall-cmd --add-service=http --permanent  # named service is cleaner than --add-port",
      "sudo firewall-cmd --add-port=8080/tcp  # runtime-only — gone after reboot, good for tests",
      "sudo firewall-cmd --remove-port=8080/tcp --permanent && sudo firewall-cmd --reload  # undo",
      "sudo firewall-cmd --add-port=8080/tcp --zone=public --permanent  # target a specific zone"
    ],
    memoryTip: "Two-config rule: `--permanent` writes disk, `--reload` activates. Without `--permanent`, rules vanish on reboot (great for testing). With ONLY `--permanent` and no reload, rules exist on disk but aren't active yet.",
    outputExample: "$ sudo firewall-cmd --add-port=8080/tcp --permanent\nsuccess\n$ sudo firewall-cmd --reload\nsuccess\n$ sudo firewall-cmd --list-ports\n8080/tcp",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel19",
    question: "Check whether SELinux is currently blocking actions on the system with `getenforce` (RHEL/Fedora)",
    answer: "getenforce",
    explanation: "SELinux (Security-Enhanced Linux) is a Mandatory Access Control layer built into the kernel on Red Hat-family distros. It's a SECOND set of permissions on top of normal Unix `rwx` permissions — every process and every file has a security 'context' (`user:role:type:level`, e.g., `system_u:object_r:httpd_sys_content_t:s0`), and the kernel checks whether the type-of-the-process is allowed to do the action against the type-of-the-file. `getenforce` prints one of three runtime modes: `Enforcing` (rules are applied AND violations blocked — the default), `Permissive` (violations are logged to `/var/log/audit/audit.log` but NOT blocked — useful for debugging), or `Disabled` (SELinux is off entirely, requires reboot to enable). For more detail use `sestatus` which also prints the policy name and the boot-time mode from `/etc/selinux/config`. `setenforce 0` flips to permissive at runtime (good for testing whether SELinux is your problem); `setenforce 1` re-enforces. Disabling SELinux permanently means editing `/etc/selinux/config` and rebooting — usually a bad idea on RHEL.",
    usage: "Diagnosing 'permission denied' errors that don't make sense from `ls -l` perspective (often SELinux), or confirming SELinux is on before a compliance audit.",
    examples: [
      "getenforce  # one-word answer: Enforcing / Permissive / Disabled",
      "sestatus  # detailed: current mode, mode from config, policy name, MLS status",
      "sudo setenforce 0  # switch to permissive AT RUNTIME (gone on reboot)",
      "sudo setenforce 1  # back to enforcing",
      "sudo ausearch -m AVC -ts recent  # see recent SELinux denials (root needed for audit log)",
      "sudo sealert -a /var/log/audit/audit.log  # human-readable denial analysis (needs setroubleshoot)"
    ],
    memoryTip: "Three modes: Enforcing (block + log), Permissive (just log), Disabled (off). `getenforce` = quick check, `sestatus` = detailed, `setenforce 0/1` = runtime toggle. If a service breaks 'for no reason' on RHEL, suspect SELinux and check `/var/log/audit/audit.log` for `AVC denied` lines.",
    outputExample: "$ getenforce\nEnforcing\n$ sestatus\nSELinux status:                 enabled\nSELinuxfs mount:                /sys/fs/selinux\nSELinux root directory:         /etc/selinux\nLoaded policy name:             targeted\nCurrent mode:                   enforcing\nMode from config file:          enforcing\nPolicy MLS status:              enabled\nPolicy deny_unknown status:     allowed\nMemory protection checking:     actual (secure)\nMax kernel policy version:      33",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel20",
    question: "Reset SELinux file labels under a directory back to the policy default with `sudo restorecon -Rv /var/www/html` (RHEL/Fedora)",
    answer: "sudo restorecon -Rv /var/www/html",
    explanation: "Every file on an SELinux system has a security 'context' (label) tagged onto its extended attributes — visible with `ls -Z`. The policy says, for example, that files under `/var/www/html` should have the `httpd_sys_content_t` type so that the Apache process (which runs as `httpd_t`) is allowed to read them. When you create or move files in 'normal' ways — `cp` from `/tmp`, `tar -x` from a backup, `mv` from your home dir — the new files carry the SOURCE'S context, not the destination's, and SELinux then blocks the web server from reading 'its own' files with confusing 403 errors. `restorecon` fixes this by looking up the policy default for each path and re-tagging the file. Flags: `-R` recurses into subdirectories, `-v` prints what was relabeled, `-F` forces relabeling even when only a small piece changed, `-n` dry-runs without writing. The whole-system equivalent is `sudo fixfiles relabel` or creating `/.autorelabel` and rebooting. To see what context a path SHOULD have, use `matchpathcon PATH`. To set a NEW policy mapping (not just restore), use `semanage fcontext` then `restorecon`.",
    usage: "Fixing 403 Forbidden after moving website files into `/var/www/`, debugging service failures right after a file copy/restore, or after extracting a tarball into a system directory.",
    examples: [
      "sudo restorecon -Rv /var/www/html  # recurse + verbose, the everyday combo",
      "sudo restorecon -v /etc/nginx/nginx.conf  # single file",
      "sudo restorecon -RFv /var/www/html  # force (-F) re-label everything",
      "matchpathcon /var/www/html  # what context SHOULD this path have?",
      "ls -Z /var/www/html  # see the CURRENT contexts to compare",
      "sudo semanage fcontext -a -t httpd_sys_content_t '/srv/web(/.*)?' && sudo restorecon -Rv /srv/web  # teach SELinux about a new path, then relabel"
    ],
    memoryTip: "`restorecon` = RESTORE the CONtext. Workflow: `ls -Z` to see, `matchpathcon` to learn what it should be, `restorecon -Rv` to fix, `semanage fcontext` to teach the policy a new location. The `-Rv` pair (recurse + verbose) is muscle memory.",
    outputExample: "$ ls -Z /var/www/html/index.html\nunconfined_u:object_r:user_home_t:s0 /var/www/html/index.html\n$ sudo restorecon -Rv /var/www/html\nRelabeled /var/www/html/index.html from unconfined_u:object_r:user_home_t:s0 to system_u:object_r:httpd_sys_content_t:s0\nRelabeled /var/www/html/style.css from unconfined_u:object_r:user_home_t:s0 to system_u:object_r:httpd_sys_content_t:s0\n$ ls -Z /var/www/html/index.html\nsystem_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html",
    category: "RHEL/FEDORA"
  }
];

export const categories = [
  { id: "NAVIGATION", name: "Navigation", count: 30 },
  { id: "FILE OPS", name: "File Operations", count: 35 },
  { id: "VIEWING TEXT", name: "Viewing Text", count: 30 },
  { id: "PERMISSIONS", name: "Permissions", count: 30 },
  { id: "PIPES & REDIRECT", name: "Pipes & Redirect", count: 30 },
  { id: "PROCESSES", name: "Processes", count: 30 },
  { id: "NETWORKING", name: "Networking", count: 30 },
  { id: "PACKAGES", name: "Packages (Debian/Ubuntu)", count: 27 },
  { id: "RHEL/FEDORA", name: "RHEL / Fedora", count: 20 },
  { id: "TEXT PROCESSING", name: "Text Processing", count: 30 },
  { id: "SYSTEM INFO", name: "System Info", count: 30 },
  { id: "BASH SCRIPTING", name: "Bash Scripting & Practice", count: 30 },
  { id: "ARCHIVES & COMPRESS", name: "Archives & Compress", count: 20 },
  { id: "DAILY TIPS", name: "Daily Linux Tips", count: 50 }
];