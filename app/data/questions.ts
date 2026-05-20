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
  {
    "id": "nav1",
    "question": "You are five directories deep inside a project folder. What single command — with no arguments and no path — returns you instantly to your home directory?",
    "answer": "cd ~ (or just cd)",
    "explanation": "Every user has a personal home folder — like your own desk drawer where your files and settings live. No matter how deep you've wandered through subfolders, one magic word brings you straight back to your personal folder without needing to remember how you got there.",
    "usage": "Fastest reset to your home directory from anywhere on the filesystem.",
    "examples": [
      "cd  # the bare command — fastest way home",
      "cd ~  # tilde is shorthand for your home directory",
      "cd $HOME  # uses the environment variable; useful in scripts",
      "cd ~alice  # go to user 'alice's home directory (if you have access)",
      "cd && ls  # chain commands: go home then list contents"
    ],
    "memoryTip": "`cd` = 'change directory'. With nothing after it, think of it as 'come down' to home base. Tilde `~` always means 'my home' — like `~/Documents` is `/home/me/Documents`.",
    "outputExample": "$ pwd\n/var/log/nginx\n$ cd\n$ pwd\n/home/alice",
    "category": "NAVIGATION"
  },
  {
    "id": "nav2",
    "question": "You are inside ~/code/myapp/src/components and want to move up exactly one level to ~/code/myapp/src. What command navigates to the parent of your current directory without typing any path?",
    "answer": "cd ..",
    "explanation": "Imagine directories as floors in a building. You're on the fourth floor and want to go one floor up. Instead of riding the elevator all the way to the lobby and then back up, you just step up one flight. That's exactly what this command does — moves you to the folder that contains your current folder.",
    "usage": "Navigate to the parent directory of your current location — the bread-and-butter move for backtracking through nested folders.",
    "examples": [
      "cd ..  # go up one level — the basic move",
      "cd ../..  # go up two levels in one step",
      "cd ../sibling-folder  # up one, then into a folder next to where you were",
      "ls ..  # peek at the parent directory without leaving the current one",
      "cp report.txt ..  # copy report.txt into the parent directory"
    ],
    "memoryTip": "One dot `.` = here. Two dots `..` = up one. Think of `..` as a tiny staircase — two steps means 'one floor up'. This is universal: every Linux path supports it.",
    "outputExample": "$ pwd\n/home/alice/projects/myapp\n$ cd ..\n$ pwd\n/home/alice/projects\n$ cd ../..\n$ pwd\n/home",
    "category": "NAVIGATION"
  },
  {
    "id": "nav3",
    "question": "You've just changed into an unfamiliar directory and want to see the names of all files and folders it contains, displayed alphabetically in columns. What command shows the directory contents with no extra details?",
    "answer": "ls (or ls -la for details)",
    "explanation": "Think of this command as asking \"what's in this drawer?\" It shows you all the items in your current folder, laid out neatly in columns — like reading a table of contents. It intentionally hides files whose names start with a dot (configuration files), keeping the display clean for everyday use.",
    "usage": "Quick visual inventory of a directory's contents — the most-used command on any Linux system.",
    "examples": [
      "ls  # default: names only, alphabetical, columns",
      "ls /etc  # list a specific directory without cd-ing there",
      "ls -l  # long format: permissions, owner, size, date",
      "ls -la  # long format including dotfiles",
      "ls *.txt  # only files matching a glob pattern",
      "ls -lh --color=auto  # the everyday combo most people alias as 'll'"
    ],
    "memoryTip": "`ls` = LiSt. You'll type it more than any other command. Most distros pre-define `ll` as an alias for `ls -l` — try it in your shell.",
    "outputExample": "$ ls\nDesktop  Documents  Downloads  Music  Pictures  Videos  notes.txt  todo.md\n$ ls /etc | head -3\nadduser.conf\nalternatives\napt",
    "category": "NAVIGATION"
  },
  {
    "id": "nav4",
    "question": "You want to see every file in the current directory along with its permissions, owner, size in bytes, and last modification date — one file per line. What command produces this detailed view?",
    "answer": "ls -l",
    "explanation": "The basic directory listing only shows names. This command is like switching from a bookshelf view to a spreadsheet view — you see each item on its own row with columns telling you who owns it, how big it is, when it was last changed, and whether others are allowed to read it.",
    "usage": "Inspect permissions, ownership, and modification times for all files in the current directory in a single glance.",
    "examples": [
      "ls -l  # the basic long format",
      "ls -lh  # human-readable sizes — almost always what you want",
      "ls -la  # include dotfiles",
      "ls -lt  # newest files first (by mtime)",
      "ls -lS  # biggest files first",
      "ls -l --time-style=long-iso  # ISO 8601 timestamps, great for scripts"
    ],
    "memoryTip": "`-l` = Long. Pair it with `-h` for human sizes and `-a` for hidden files: `ls -lah` is the everyday Swiss-army combo. Memorize the seven columns: perms, links, owner, group, size, date, name.",
    "outputExample": "$ ls -l\ntotal 24\n-rw-r--r-- 1 alice alice 4096 May 17 09:12 README.md\ndrwxr-xr-x 2 alice alice 4096 May 16 18:30 docs\n-rwxr-xr-x 1 alice alice 1240 May 15 10:02 deploy.sh\nlrwxrwxrwx 1 alice alice    9 May 14 11:00 current -> v2.0.1",
    "category": "NAVIGATION"
  },
  {
    "id": "nav5",
    "question": "Your terminal prompt shows only a shortened path and you're unsure exactly where in the filesystem you are. What command prints the full absolute path of your current location?",
    "answer": "pwd",
    "explanation": "This command answers the single question \"where am I right now?\" — printing your exact address in the filesystem from the top level all the way down to where you're standing. It's the equivalent of looking at your GPS coordinates rather than just a street name.",
    "usage": "Print the full absolute path of your current working directory — your definitive 'you are here' marker.",
    "examples": [
      "pwd  # the default — logical path",
      "pwd -P  # physical path (resolves symlinks to real location)",
      "echo $PWD  # the shell variable holding the same value",
      "echo \"Working in: $(pwd)\"  # capture in a script",
      "cd /var/log && pwd  # confirm cd worked"
    ],
    "memoryTip": "`pwd` = Print Working Directory. Three letters, one job. Pair it with `cd` in your mind: `cd` SETS the working directory, `pwd` SHOWS it.",
    "outputExample": "$ pwd\n/home/alice/projects/myapp\n$ cd /var/log && pwd\n/var/log",
    "category": "NAVIGATION"
  },
  {
    "id": "nav6",
    "question": "You want to navigate directly to /etc/nginx without stepping through each parent folder one level at a time. What command jumps you there in a single step?",
    "answer": "cd /etc/nginx",
    "explanation": "Instead of walking a route step by step (go to the street, then the block, then the building), you're giving your shell a complete address and asking it to take you directly there. You can give either a complete address from the top of the system, or a shorthand starting from where you already are.",
    "usage": "Jump directly to any directory by absolute or relative path — the primary way to navigate the filesystem.",
    "examples": [
      "cd /var/log  # absolute path",
      "cd Documents  # relative — must be in current dir",
      "cd ../other-project  # relative, going up first",
      "cd ~/code/myapp  # tilde expands to home",
      "cd \"my folder\"  # quote paths with spaces",
      "cd /etc/ss<TAB>  # tab-complete to /etc/ssh/"
    ],
    "memoryTip": "`cd` = Change Directory. Slash-leading = absolute (whole address), no slash = relative (from where you are). Use Tab compulsively — Linux folks rarely type a full path by hand.",
    "outputExample": "$ pwd\n/home/alice\n$ cd projects/myapp\n$ pwd\n/home/alice/projects/myapp\n$ cd /etc/ssh\n$ pwd\n/etc/ssh",
    "category": "NAVIGATION"
  },
  {
    "id": "nav7",
    "question": "You were just working in /etc/nginx, then changed to /var/log/nginx to check something. What single command takes you back to /etc/nginx without retyping that path?",
    "answer": "cd -",
    "explanation": "Your shell remembers the last place you were before moving to your current location — like a browser's back button that only remembers one step. This command swaps you back to that previous location and tells you where it sent you.",
    "usage": "Instantly jump back to your previous working directory — the fastest way to toggle between two locations.",
    "examples": [
      "cd -  # back to previous dir; prints the new path",
      "cd /tmp; cd -  # bounce out and back",
      "echo $OLDPWD  # see what 'cd -' would jump to",
      "cd /etc/nginx; cd /var/log/nginx; cd -  # toggle between two debug spots",
      "cd -- -weirddir  # use -- to cd into a directory whose name starts with -"
    ],
    "memoryTip": "`cd -` = back button. Mental model: dash means 'last one'. For a STACK of previous dirs (more than one), graduate to `pushd`/`popd`.",
    "outputExample": "$ pwd\n/home/alice\n$ cd /var/log\n$ pwd\n/var/log\n$ cd -\n/home/alice\n$ cd -\n/var/log",
    "category": "NAVIGATION"
  },
  {
    "id": "nav8",
    "question": "You suspect a project folder contains hidden configuration files starting with a dot. What command lists every file and folder in the current directory, including those hidden dot-prefixed entries?",
    "answer": "ls -a",
    "explanation": "On Linux, files whose names begin with a period are invisible in a normal directory listing — not because they're locked away, but simply because the listing tool skips them by convention to reduce clutter. Think of them as items stored in a drawer with a sticky note saying \"don't show.\" This command removes that filter and shows absolutely everything.",
    "usage": "Reveal all files including hidden dot-prefixed entries — essential for finding configuration files and diagnosing 'empty' directory issues.",
    "examples": [
      "ls -a  # everything including . and ..",
      "ls -A  # hidden files but skip . and ..",
      "ls -la ~  # long format of all home dotfiles",
      "ls -a | grep '^\\.'  # only the hidden ones",
      "ls -ad .*  # list only dotfiles (and . / ..)",
      "ls -la /etc/skel  # peek at the default new-user dotfiles"
    ],
    "memoryTip": "Lowercase `-a` = ALL, including `.` and `..`. Capital `-A` = Almost all (no `.` / `..`). For everyday browsing, `-A` is cleaner; for forensic 'what's REALLY here?', use `-a`.",
    "outputExample": "$ ls -a\n.   .bashrc   .config  .git      .profile  Documents  notes.txt\n..  .cache    .gitconfig  .ssh    Desktop   Downloads",
    "category": "NAVIGATION"
  },
  {
    "id": "nav9",
    "question": "You run a directory listing and see raw byte counts like 1572864 in the size column, making it hard to compare file sizes at a glance. What command shows the same long-format listing but converts sizes to K, M, and G suffixes?",
    "answer": "ls -lh",
    "explanation": "Imagine reading a ruler where all measurements are in millimeters — technically correct, but 1,572,864 mm is harder to picture than 1.5 km. This command is like switching to a friendlier scale: instead of raw byte counts, you see sizes like 1.5M or 800K that you can immediately compare without mental math.",
    "usage": "Everyday directory inspection showing permissions, timestamps, and sizes formatted for human reading.",
    "examples": [
      "ls -lh  # the everyday long format",
      "ls -lah  # +hidden files",
      "ls -lhS  # +sorted by size (biggest first)",
      "ls -lhSr  # +reverse: smallest first",
      "ls -lh --si  # use decimal (1K = 1000), not binary",
      "ls -lh /var/log  # see which log file is fat"
    ],
    "memoryTip": "`-lh` = Long + Human. Memorize `ls -lah` (Long, All, Human) — covers 95% of daily `ls` use. For 'biggest first' add `S`: `ls -lahS`.",
    "outputExample": "$ ls -lh\ntotal 1.3M\n-rw-r--r-- 1 alice alice 1.2M May 17 09:55 screenshot.png\n-rw-r--r-- 1 alice alice  82K May 16 18:30 report.pdf\n-rw-r--r-- 1 alice alice 4.0K May 15 10:02 notes.txt\ndrwxr-xr-x 2 alice alice 4.0K May 14 11:00 docs",
    "category": "NAVIGATION"
  },
  {
    "id": "nav10",
    "question": "You need to create a new empty folder named myproject in your current directory to hold a new application's files. What command creates that directory?",
    "answer": "mkdir myproject",
    "explanation": "This command is like telling the filing cabinet to open a new drawer and label it. It creates an empty folder with whatever name you give it. You can even create a whole chain of nested folders in one go if you use the right option.",
    "usage": "Create a new empty directory — or an entire chain of nested directories at once with -p.",
    "examples": [
      "mkdir myproject  # one folder in the current directory",
      "mkdir -p code/2026/projectA/src  # create the whole chain, no error if some parts already exist",
      "mkdir docs src tests  # three folders at once",
      "mkdir -m 700 secrets  # create with rwx for owner only",
      "mkdir -pv backups/{daily,weekly,monthly}  # brace expansion + verbose (prints each created)"
    ],
    "memoryTip": "'mkdir' = 'make directory'. Like building a new room in your house.",
    "outputExample": "$ mkdir myproject\n$ ls -d */\nDesktop/  Documents/  Downloads/  myproject/  Music/  Pictures/",
    "category": "NAVIGATION"
  },
  {
    "id": "nav11",
    "question": "You created a scratch folder called tmp-scratch that is now empty and you want to delete it safely — getting an error if it still contains files. What command removes only an empty directory?",
    "answer": "rmdir tmp-scratch",
    "explanation": "This is a cautious way to remove a folder that refuses to work if there's anything still inside. Think of it as a bouncer at the door: it only lets the folder be deleted when it's completely vacant. It's the safe counterpart to the much more powerful (and dangerous) recursive delete.",
    "usage": "Safely remove an empty directory — fails with an error if any files remain inside, preventing accidental data loss.",
    "examples": [
      "rmdir tmp-scratch  # the basic case",
      "rmdir build logs tmp  # remove three empty folders at once",
      "rmdir -p tmp/build/cache  # remove cache, then build, then tmp if all empty",
      "rmdir --ignore-fail-on-non-empty dir  # don't error if it's not empty",
      "ls -A tmp-scratch  # check what's blocking rmdir (any output = blockers)"
    ],
    "memoryTip": "`rmdir` = Remove Directory, but only EMPTY ones. Think of it as the safe sibling of `rm -r`. If `rmdir` refuses, that's a feature, not a bug.",
    "outputExample": "$ mkdir empty_one\n$ rmdir empty_one\n$ rmdir Documents\nrmdir: failed to remove 'Documents': Directory not empty\n$ ls -A Documents\nnotes.txt  .draft",
    "category": "NAVIGATION"
  },
  {
    "id": "nav12",
    "question": "You want to see a visual tree diagram of a project's folder structure — showing all nested subdirectories and files indented and connected by branch lines. What command (if installed) produces this view?",
    "answer": "tree",
    "explanation": "Instead of getting a flat list of filenames, this command draws a diagram that looks like an actual tree with branches — every folder and file indented under its parent with connecting lines. It's the equivalent of showing someone a map instead of an address, making the relationships between folders immediately obvious.",
    "usage": "Render a visual hierarchy of any directory — ideal for documentation, onboarding, and structure audits.",
    "examples": [
      "tree  # full tree of current dir",
      "tree -L 2  # only 2 levels deep — great for huge projects",
      "tree -d  # just folders, ignore files",
      "tree -I 'node_modules|.git|dist'  # exclude common noise",
      "tree -h --du  # human sizes + directory totals"
    ],
    "memoryTip": "`tree` literally draws a tree. Most-used combo: `tree -L 2 -I 'node_modules|.git'` for a clean project overview. Not on the system? `sudo apt install tree` / `sudo dnf install tree`. Alternative: `find . -maxdepth 2`.",
    "outputExample": "$ tree -L 2\n.\n├── README.md\n├── package.json\n├── src\n│   ├── index.ts\n│   └── utils.ts\n└── tests\n    └── index.test.ts\n\n2 directories, 5 files",
    "category": "NAVIGATION"
  },
  {
    "id": "nav13",
    "question": "You need to locate all files with a .log extension anywhere inside /var/log and its subdirectories. What command searches recursively by filename pattern starting from that directory?",
    "answer": "find /var/log -name \"*.log\"",
    "explanation": "This command is like sending a search party through every room, closet, and drawer in a building looking for items whose labels match a pattern you specify. Unlike a simple directory listing, it digs through every level of nesting automatically and reports back every match it finds, no matter how deeply buried.",
    "usage": "Recursively search a directory tree for files matching a name pattern — the go-to tool for locating files anywhere on disk.",
    "examples": [
      "find /var/log -name '*.log'  # all .log files under /var/log",
      "find /home -name 'config'  # exact name 'config' under /home",
      "find . -iname '*.JPG'  # case-insensitive: .jpg, .JPG, .Jpg",
      "find . -name '*.tmp' -delete  # find + remove in one step",
      "find /var/log -name '*.log' -mtime -1  # logs modified in last day",
      "find . -type d -name 'node_modules'  # directories only"
    ],
    "memoryTip": "ALWAYS quote the pattern (`'*.log'`) so the shell doesn't expand it. Order is `find WHERE TESTS ACTIONS`. The friendlier modern alternative is `fd` (`sudo apt install fd-find`) — same job, simpler syntax: `fd '\\.log$'`.",
    "outputExample": "$ find . -name '*.txt'\n./notes.txt\n./drafts/old.txt\n./drafts/archive/letter.txt\n$ find /etc -name 'sshd_config'\n/etc/ssh/sshd_config",
    "category": "NAVIGATION"
  },
  {
    "id": "nav14",
    "question": "You downloaded a file called data.bin and aren't sure whether it's a text file, a compressed archive, or a binary executable. What command inspects the file's actual content to identify its true type?",
    "answer": "file data.bin",
    "explanation": "File extensions like .txt or .jpg are just labels — any file can be renamed to have any extension. This command looks inside the file at its actual content (the first few bytes, which act like a fingerprint) and tells you what the data really is, regardless of what the filename says it is.",
    "usage": "Identify the true content type of any file by examining its internal byte signatures — works regardless of filename extension.",
    "examples": [
      "file deploy.sh  # shell script? Python? Perl?",
      "file logo.png  # JPEG, PNG, or actually something else?",
      "file *  # type-classify everything in the current dir",
      "file -i report.pdf  # MIME type: application/pdf",
      "file -b /usr/bin/ls  # brief mode: just the type, no filename",
      "find . -type f -exec file -b {} +  # classify recursively"
    ],
    "memoryTip": "`file` answers 'what AM I?' regardless of name. Magic numbers are tiny byte signatures at the start of files — e.g. `89 50 4E 47` = PNG, `25 50 44 46` = PDF. For deeper inspection, `xxd FILE | head` shows them in hex.",
    "outputExample": "$ file *\nbackup.tar.gz:    gzip compressed data, from Unix, original size 102400\ndeploy.sh:        Bourne-Again shell script, ASCII text executable\nlogo.png:         PNG image data, 800 x 600, 8-bit/color RGBA, non-interlaced\ndata.bin:         ELF 64-bit LSB executable, ARM aarch64, dynamically linked\nnotes.txt:        UTF-8 Unicode text",
    "category": "NAVIGATION"
  },
  {
    "id": "nav15",
    "question": "You want to navigate to the very top of the Linux filesystem — the single ancestor directory that contains all other directories. What command takes you there?",
    "answer": "cd /",
    "explanation": "Every folder on a Linux system lives inside another folder, and if you keep going up, you eventually reach a single room that contains everything — the root. This command teleports you to that top-most location. From there, you can see the main categories that the operating system uses to organize itself.",
    "usage": "Jump to the top-level root of the entire filesystem — the starting point for all absolute paths.",
    "examples": [
      "cd /  # the filesystem root",
      "cd / && ls  # see what's at the top",
      "cd /etc  # straight to system config",
      "cd /var/log  # straight to logs",
      "cd /root  # root user's home (needs sudo to enter)",
      "df -h /  # show free space on the root filesystem"
    ],
    "memoryTip": "ONE slash `/` = the filesystem root. `~` = your home. `/root` = root user's home (very different). Quick check: `pwd` after `cd /` always prints a single character: `/`.",
    "outputExample": "$ cd /\n$ pwd\n/\n$ ls\nbin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var",
    "category": "NAVIGATION"
  },
  {
    "id": "nav16",
    "question": "You are in your Downloads folder and want to identify which file takes up the most space — displayed in the long format so you can see sizes. What command lists the files sorted from largest to smallest?",
    "answer": "ls -S",
    "explanation": "Normally a directory listing sorts items alphabetically, like a phone book. This command re-sorts the same information by size instead — biggest items appear first, smallest last — so you can immediately spot what's hogging space without scanning the whole list.",
    "usage": "Sort directory contents by file size with the largest files first — the quick way to spot space hogs in the current directory.",
    "examples": [
      "ls -lSh  # most useful combo: long format + size column + human sizes",
      "ls -S  # just changes order; size isn't visible without -l",
      "ls -lShr  # reverse: smallest first",
      "ls -lSh | head  # top 10 biggest in this folder",
      "ls -lSh /var/log  # find the fattest log file"
    ],
    "memoryTip": "Capital-`S` = Size. Lowercase `-s` (different!) prints allocated blocks per file. Memorize: `-lSh` = 'long, by Size, human' — the everyday combo.",
    "outputExample": "$ ls -lSh\ntotal 1.2G\n-rw-r--r-- 1 alice alice 800M May 15 10:30 bigmovie.mp4\n-rw-r--r-- 1 alice alice 256M May 14 18:01 backup.zip\n-rw-r--r-- 1 alice alice 1.2M May 15 09:55 screenshot.png\ndrwxr-xr-x 2 alice alice 4.0K May 12 11:20 Documents\n-rw-r--r-- 1 alice alice  142 May 15 10:30 notes.txt",
    "category": "NAVIGATION"
  },
  {
    "id": "nav17",
    "question": "After a deployment you want to see which files in your current directory were modified most recently. What command lists the directory contents sorted by modification time with the newest entries at the top, showing only the first ten results?",
    "answer": "ls -lt | head",
    "explanation": "Instead of an alphabetical listing, this command re-sorts the directory by the clock — the most recently touched file appears first. Piping it through a filter shows only the top ten results so you're not overwhelmed by a long list. It's like reading a \"recently edited\" list in a document editor.",
    "usage": "Show the ten most recently modified files in the current directory — the fastest way to find what changed last.",
    "examples": [
      "ls -lt | head  # 10 newest entries here",
      "ls -lt | head -5  # just the 5 newest",
      "ls -lt *.log | head  # newest log files",
      "ls -ltr  # oldest first (chronological)",
      "ls -lu | head  # sort by atime (last accessed) instead",
      "find . -type f -mtime -1  # files modified in last 24h, recursively"
    ],
    "memoryTip": "`-lt` = Long + Time-sorted. Pipe to `head` for top-N. Pair-think: `-t` = newest first, `-tr` = oldest first. To go RECURSIVE switch to `find -mtime`.",
    "outputExample": "$ ls -lt | head -4\ntotal 24\n-rw-r--r-- 1 alice alice 1234 May 17 14:30 latest.md\n-rw-r--r-- 1 alice alice  567 May 17 14:25 newer.txt\ndrwxr-xr-x 2 alice alice 4096 May 17 12:00 drafts",
    "category": "NAVIGATION"
  },
  {
    "id": "nav18",
    "question": "You start typing 'cd /usr/lo' and don't want to type the rest of the path by hand. What key do you press to have the shell automatically complete the path for you?",
    "answer": "<TAB>",
    "explanation": "Instead of typing every letter of a long path, you type just enough to identify what you mean and then press a special key. The shell fills in the rest automatically, like a search engine autocompleting your query. If there are multiple possible completions, pressing the key twice shows you all the options.",
    "usage": "Let the shell complete filenames, paths, and commands for you — eliminates typos and speeds up every command you type.",
    "examples": [
      "cd Doc<TAB>  # completes to Documents/",
      "ls /et<TAB>  # completes to /etc/",
      "cat /etc/pas<TAB>  # completes to /etc/passwd",
      "git che<TAB>  # completes to 'git checkout' (with bash-completion)",
      "cd /usr/lo<TAB><TAB>  # double-Tab: shows both 'local/' and 'lost+found/'",
      "echo $HO<TAB>  # completes the variable name to $HOME"
    ],
    "memoryTip": "Tab once = complete; Tab twice = list possibilities. Linux users press Tab more than any other key — train your fingers: type 2-3 letters then Tab, ALWAYS. If nothing happens, hit Tab a second time to see why.",
    "outputExample": "$ cd /usr/lo<TAB><TAB>\nlocal/      lost+found/\n$ cd /usr/loc<TAB>\n$ cd /usr/local/",
    "category": "NAVIGATION"
  },
  {
    "id": "nav19",
    "question": "You want to know the total disk space consumed by the entire ~/code/myapp directory — a single summary number in human-readable form rather than a per-file breakdown. What command produces that single total?",
    "answer": "du -sh ~/code/myapp",
    "explanation": "Imagine your project folder is a storage unit full of boxes and sub-units. This command walks through every box in every room and comes back with a single total — \"this whole unit takes up 2.3 gigabytes\" — instead of listing each box separately. It's the answer to \"how big is this folder, really?\"",
    "usage": "Get the total disk space used by an entire directory tree condensed into one human-readable number.",
    "examples": [
      "du -sh ~/code/myapp  # one number: total size of the project",
      "du -sh *  # one number per item in the current directory",
      "du -sh .  # total size of current directory",
      "du -sh ~/.cache  # how big is your cache?",
      "du -sh * | sort -h  # sorted smallest to largest",
      "du -sh * | sort -h | tail  # top 10 biggest"
    ],
    "memoryTip": "`-sh` = Summary + Human. Pair-think: `du` per folder, `df` per mountpoint (free space). The 'find the disk hog' incantation: `du -sh * | sort -h | tail`.",
    "outputExample": "$ du -sh ~/code/myapp\n2.3G\t/home/alice/code/myapp\n$ du -sh *\n12M\tCode\n4.5G\tDownloads\n128K\tMusic\n2.1G\tPictures",
    "category": "NAVIGATION"
  },
  {
    "id": "nav20",
    "question": "You want to see every single file inside ~/code/myapp and all of its subdirectories — the complete recursive listing including files nested at any depth. What command produces this full recursive output?",
    "answer": "ls -R",
    "explanation": "A normal directory listing shows only what's directly in the folder you're looking at — like opening one drawer. This command opens every drawer inside every cabinet inside every room, listing everything it finds. The output groups items by directory so you can see where each file lives.",
    "usage": "List all files in the current directory and every subdirectory recursively — a complete inventory of the entire tree.",
    "examples": [
      "ls -R  # recurse from here",
      "ls -lR  # recursive + long format",
      "ls -R | less  # paged (huge trees)",
      "find . -type f  # alternative: one file per line (better for scripts)",
      "ls -R ~/code/myapp  # recurse from a specific path",
      "tree  # prettier visualization (needs install)"
    ],
    "memoryTip": "Capital `-R` = Recursive. Lowercase `-r` = Reverse (different!). For huge trees, switch to `find` or `tree` — `ls -R` was designed for small directories.",
    "outputExample": "$ ls -R\n.:\nDocuments  Pictures  projects\n\n./Documents:\nnotes.txt  resume.pdf\n\n./Pictures:\nvacation.jpg\n\n./projects:\nmyapp\n\n./projects/myapp:\nREADME.md  src",
    "category": "NAVIGATION"
  },
  {
    "id": "file1",
    "question": "You want to make a duplicate of report.txt named report-backup.txt in the same directory, leaving the original file untouched. What command creates that copy?",
    "answer": "cp report.txt report-backup.txt",
    "explanation": "Copying a file is like photocopying a document — the original stays in the filing cabinet exactly as it was, and you get an identical duplicate that you can edit or send away without touching the original. If you point the destination at a folder instead of a filename, the copy lands inside that folder keeping the original name.",
    "usage": "Duplicate any file to a new name or location — the source always remains intact.",
    "examples": [
      "cp report.txt report-backup.txt  # rename-style: new file in same dir",
      "cp report.txt /tmp/  # copy file INTO /tmp/ (trailing slash matters)",
      "cp -r myproject/ backup/  # recursive: needed for directories",
      "cp notes.txt summary.txt archive/  # multiple sources into one dir",
      "cp -i deploy.sh deploy-new.sh  # interactive: prompt before overwrite",
      "cp -a /etc/nginx /etc/nginx.bak  # archive: preserves perms/timestamps"
    ],
    "memoryTip": "`cp` = CoPy. Source first, destination second (same order as `mv`). For directories you NEED `-r`. To avoid blindly overwriting, alias `cp` to `cp -i` in your `.bashrc`.",
    "outputExample": "$ cp notes.txt notes-backup.txt\n$ ls\nnotes-backup.txt  notes.txt\n$ cp notes.txt /tmp/\n$ ls /tmp/notes.txt\n/tmp/notes.txt",
    "category": "FILE OPS"
  },
  {
    "id": "file2",
    "question": "You want to rename draft-v1.md to final-report.md in the same directory. What single command both renames and moves files — handling both operations identically?",
    "answer": "mv draft-v1.md final-report.md",
    "explanation": "This command does double duty as both a rename tool and a mover — it's the same command regardless of whether you're changing a file's name, moving it to a different folder, or both at once. The file disappears from its old location and appears at the new one. Think of it as relabeling and relocating a box in one action.",
    "usage": "Rename a file in place or move it to a different directory — the same command handles both operations.",
    "examples": [
      "mv draft-v1.md final-report.md  # rename in place",
      "mv final-report.md ~/Documents/  # move into a directory",
      "mv *.log /var/log/archive/  # move all matching files",
      "mv -i report.txt backup/  # interactive: prompt if backup/report.txt exists",
      "mv -n config.txt config-new.txt  # no-clobber: skip silently if config-new.txt exists",
      "mv myproject myproject-2026  # rename a whole directory (no -r needed)"
    ],
    "memoryTip": "`mv` = MoVe. Same command does both move AND rename — depends on whether the destination is in a different directory. Source first, destination second. `mv` is INSTANT on the same filesystem but COPIES across filesystems.",
    "outputExample": "$ ls\ndraft-v1.md\n$ mv draft-v1.md final-report.md\n$ ls\nfinal-report.md\n$ mv final-report.md ~/Documents/\n$ ls ~/Documents/final-report.md\n/home/alice/Documents/final-report.md",
    "category": "FILE OPS"
  },
  {
    "id": "file3",
    "question": "You have a temporary file called scratch.txt that you no longer need and want to remove it permanently from the filesystem. What command deletes it — with no undo and no trash bin?",
    "answer": "rm scratch.txt",
    "explanation": "This command is a one-way door: the file goes in and nothing comes back out. Unlike moving a document to the recycle bin on a desktop computer, this operation does not place the file anywhere recoverable — it is gone immediately. This is intentional and powerful, but it means you must be certain before pressing Enter.",
    "usage": "Permanently delete a file from the filesystem — no recycle bin, no undo, no second chances.",
    "examples": [
      "rm scratch.txt  # delete a single file (NO undo!)",
      "rm -i *.tmp  # interactive: prompt for each file",
      "rm -r old_project/  # recursive: delete a folder + contents",
      "rm -rf node_modules  # force recursive: zero prompts, used in scripts",
      "rm -- -weirdfile  # -- ends flags, lets you rm a file named '-weirdfile'",
      "trash-put scratch.txt  # safer alternative: recoverable from trash"
    ],
    "memoryTip": "`rm` = ReMove. Permanent. No trash bin. The combo `rm -rf` deletes ANYTHING. Mental rule: before pressing Enter on `rm`, READ THE COMMAND TWICE. Alias `rm` to `rm -i` for a seatbelt.",
    "outputExample": "$ ls\nnotes.txt  scratch.txt\n$ rm scratch.txt\n$ ls\nnotes.txt\n$ rm -i notes.txt\nrm: remove regular file 'notes.txt'? y\n$ ls\n$",
    "category": "FILE OPS"
  },
  {
    "id": "file4",
    "question": "You need an empty placeholder file called .gitkeep to make Git track an otherwise-empty directory. What command creates a zero-byte file with that name?",
    "answer": "touch .gitkeep",
    "explanation": "This command is like pressing a button that either conjures a brand new empty file out of thin air, or stamps a \"touched at this moment\" label on a file that already exists — without changing anything inside it. It's the simplest way to create an empty placeholder or refresh a file's timestamp.",
    "usage": "Create an empty file instantly, or update an existing file's timestamp to the current time.",
    "examples": [
      "touch .gitkeep  # create one empty placeholder file",
      "touch access.log error.log debug.log  # create three at once",
      "touch /etc/nginx/nginx.conf  # bumps timestamps to NOW (file unchanged)",
      "touch -c config.yml  # only update if exists; don't create",
      "touch -t 202605170900 deploy.sh  # set timestamp to 2026-05-17 09:00",
      "touch -r reference.txt report.txt  # copy timestamp from reference"
    ],
    "memoryTip": "`touch` literally 'touches' the file to mark it modified now. If the file is missing, touching it conjures it into existence empty. Pair-think `touch` (timestamp + create) vs `> file` (also creates, but truncates if exists).",
    "outputExample": "$ touch report.txt\n$ ls -l report.txt\n-rw-r--r-- 1 alice alice 0 May 17 16:42 report.txt\n$ touch report.txt\n$ ls -l report.txt\n-rw-r--r-- 1 alice alice 0 May 17 16:43 report.txt",
    "category": "FILE OPS"
  },
  {
    "id": "file5",
    "question": "You want to read the contents of /etc/hostname directly in your terminal without opening a text editor. What command prints a file's content to the screen?",
    "answer": "cat /etc/hostname",
    "explanation": "This command is like reading a note out loud — it takes the contents of a file and prints every line to your screen from top to bottom. It's perfect for small files where you want a quick look. For large files it will scroll past your entire terminal history, so for those you'd use a different tool that lets you page through the content.",
    "usage": "Print a file's entire contents to the terminal — best for small files where you want an instant full view.",
    "examples": [
      "cat /etc/hostname  # display a tiny system file",
      "cat notes.txt  # display the file",
      "cat header.txt body.txt footer.txt > full-report.txt  # concatenate into a new file",
      "cat -n deploy.sh  # display with line numbers",
      "cat -A config.txt  # show tabs (^I), line endings ($)",
      "less nginx.log  # use 'less' instead for huge files"
    ],
    "memoryTip": "`cat` = CATenate. For ONE small file, it's a quick view. For BIG files, use `less`. For HEAD/TAIL portions, use `head`/`tail`. Don't write `cat file | grep X` — write `grep X file`.",
    "outputExample": "$ cat /etc/hostname\nmachine.local\n$ cat -n notes.txt\n     1\tBuy groceries\n     2\tFinish report\n     3\tCall mom",
    "category": "FILE OPS"
  },
  {
    "id": "file6",
    "question": "You want to copy nginx.conf to nginx.conf.bak but the destination already exists and you don't want to silently overwrite it. What flag makes the copy command ask for confirmation before overwriting?",
    "answer": "cp -i nginx.conf nginx.conf.bak",
    "explanation": "By default, copying onto an existing file replaces it instantly with no warning — like pasting a document on top of another one and the original vanishing. Adding this option turns that silent replacement into a question: it stops and asks \"are you sure?\" before proceeding, giving you a chance to say no.",
    "usage": "Add an overwrite confirmation prompt to copy operations — the essential safety flag for interactive sessions.",
    "examples": [
      "cp -i nginx.conf nginx.conf.bak  # prompts if nginx.conf.bak exists",
      "cp -i *.conf /etc/myapp/  # asks for each existing file in the destination",
      "cp -ir project_v1/ project_v2/  # recursive interactive copy of a whole folder",
      "cp -n config.txt config-new.txt  # the no-prompt sibling: skip if config-new.txt exists",
      "yes n | cp -i src.txt dst.txt  # script trick: auto-answer 'no' to every prompt"
    ],
    "memoryTip": "`-i` = Interactive ('Inquire before clobbering'). Same `-i` works for `cp`, `mv`, and `rm` — one mnemonic, three commands. Pair-think: `-i` asks, `-n` never overwrites, `-f` forces.",
    "outputExample": "$ ls\nnginx.conf  nginx.conf.bak\n$ cp -i nginx.conf nginx.conf.bak\ncp: overwrite 'nginx.conf.bak'? n\n$ cp -i nginx.conf nginx.conf.bak\ncp: overwrite 'nginx.conf.bak'? y\n$",
    "category": "FILE OPS"
  },
  {
    "id": "file7",
    "question": "You want to rename report-draft.md to report-final.md but report-final.md might already exist and you don't want to silently destroy it. What flag makes the move command ask before overwriting?",
    "answer": "mv -i source destination",
    "explanation": "Normally, moving or renaming a file onto an existing file name causes the existing file to vanish without any warning — it's replaced instantly and silently. Adding this option changes that behavior so the command pauses and asks you to confirm before overwriting anything, protecting you from accidental data loss.",
    "usage": "Rename or move files with a confirmation prompt before any overwrite — the safe interactive mode for mv.",
    "examples": [
      "mv -i report-draft.md report-final.md  # prompts if report-final.md already exists",
      "mv -i *.png ~/Pictures/  # asks before clobbering same-name files in Pictures",
      "mv -i ~/Downloads/archive.tar.gz ~/Archives/  # prompts if Archives/archive.tar.gz exists",
      "mv -n report-draft.md report-final.md  # no-clobber sibling: skip silently if target exists",
      "mv --backup=numbered old.conf new.conf  # keep new.conf~1~, new.conf~2~ backups instead of prompting"
    ],
    "memoryTip": "Same `-i` rule as `cp -i` / `rm -i`. Think of `mv` as `cp+rm` combined — so the same Inquire flag applies.",
    "outputExample": "$ ls\nreport-draft.md  report-final.md\n$ mv -i report-draft.md report-final.md\nmv: overwrite 'report-final.md'? y\n$ ls\nreport-final.md",
    "category": "FILE OPS"
  },
  {
    "id": "file8",
    "question": "You want to delete several *.tmp files in your current directory but want to confirm each deletion before it happens. What flag adds a per-file confirmation prompt to the remove command?",
    "answer": "rm -i *.tmp",
    "explanation": "The normal delete command acts like a paper shredder with no preview — files go in and nothing comes back. Adding this option turns it into a checkpoint: before destroying each file it pauses and shows you the filename, asking \"are you sure?\" You can say yes to proceed or no to skip that particular file. This is especially useful when deleting by wildcard because you can catch unexpected matches before they're gone.",
    "usage": "Delete files one-by-one with a confirmation prompt before each removal — the safest way to use rm interactively.",
    "examples": [
      "rm -i *.tmp  # asks for each .tmp file before deleting",
      "rm -I *.tmp  # asks ONCE for the whole batch (less spammy for many files)",
      "rm -ri old_project/  # interactive recursive — confirms each file inside",
      "rm -- -weirdfile  # the -- ends flags, lets you delete a file named '-weirdfile'",
      "trash-put scratch.txt  # safer alternative: sends to trash, recoverable"
    ],
    "memoryTip": "Capital `-I` = ONE prompt for the batch. Lowercase `-i` = per-file. Both stand for Interactive. Remember: `rm` has no undo — `-i` is your only seatbelt unless you've installed `trash-cli`.",
    "outputExample": "$ rm -i notes.txt scratch.txt\nrm: remove regular file 'notes.txt'? n\nrm: remove regular file 'scratch.txt'? y\n$ ls\nnotes.txt",
    "category": "FILE OPS"
  },
  {
    "id": "file9",
    "question": "You are backing up /etc/nginx to /etc/nginx.bak and need the copy to have identical permissions, ownership, and timestamps as the original — not the defaults your shell would apply. What flag preserves all of that metadata?",
    "answer": "cp -p source destination",
    "explanation": "When you normally copy a file, the copy gets a fresh birth certificate — your username as owner, the current time as creation date, and your default permission settings. This option is like making a certified copy instead: every piece of identifying information from the original — who owns it, when it was last changed, what access it allows — is reproduced exactly on the copy.",
    "usage": "Copy a file while keeping its original permissions, ownership, and timestamps intact — essential for backups and deployments.",
    "examples": [
      "cp -p nginx.conf nginx.conf.bak  # preserve all attributes",
      "cp -pr /etc/nginx /etc/nginx.bak  # recursive backup with permissions",
      "cp -p deploy.sh /usr/local/bin/deploy  # keep executable bit from source",
      "cp -a /etc/nginx /backup/nginx  # archive: also follows symlinks and ACLs",
      "cp --preserve=timestamps only.txt only-ts.txt  # preserve only timestamps"
    ],
    "memoryTip": "`cp -p` = Copy + Preserve. Use `-a` (archive) when you want to preserve EVERYTHING including symlinks. Neither preserves ownership for non-root users — that requires `sudo`.",
    "outputExample": "$ ls -l nginx.conf\n-rw-r--r-- 1 www-data www-data 2048 May 10 12:00 nginx.conf\n$ cp -p nginx.conf nginx.conf.bak\n$ ls -l nginx.conf.bak\n-rw-r--r-- 1 www-data www-data 2048 May 10 12:00 nginx.conf.bak",
    "category": "FILE OPS"
  },
  {
    "id": "file10",
    "question": "You want /usr/local/bin/python to be a shortcut that transparently points to /usr/bin/python3.11, so that running 'python' actually executes python3.11. What command creates this kind of pointer file?",
    "answer": "ln -s /usr/bin/python3 /usr/local/bin/python",
    "explanation": "A symbolic link is like a sticky note on a filing cabinet drawer that says \"the real thing is over there.\" When you open the drawer (run the link), the system automatically follows the note and brings you to the actual file. The link itself contains only a path — no copy of the data. If you move the real file, the link breaks and points to nothing.",
    "usage": "Create a symbolic link — a pointer file that transparently redirects access to a target path elsewhere on the filesystem.",
    "examples": [
      "ln -s /usr/bin/python3.11 /usr/local/bin/python  # shortcut to a specific Python",
      "ln -s ../shared/config.toml ./config.toml  # relative symlink to a sibling file",
      "ln -sf /opt/myapp-v2 /opt/myapp/current  # atomically replace existing symlink (deploy pattern)",
      "readlink -f /usr/local/bin/python  # follow the chain to the real file",
      "find / -xtype l 2>/dev/null  # find all BROKEN symlinks on the system"
    ],
    "memoryTip": "`ln -s TARGET LINKNAME` — same order as `cp` (source first, destination second). Forget it and you'll create the link in the wrong place. Without `-s` you get a HARD link (rare, advanced). Trailing `f` (`-sf`) forces overwrite — essential for the 'current → v2' deploy pattern.",
    "outputExample": "$ ln -s /usr/bin/python3.11 /usr/local/bin/python\n$ ls -l /usr/local/bin/python\nlrwxrwxrwx 1 alice alice 19 May 15 10:00 /usr/local/bin/python -> /usr/bin/python3.11\n$ python --version\nPython 3.11.7\n$ readlink /usr/local/bin/python\n/usr/bin/python3.11",
    "category": "FILE OPS"
  },
  {
    "id": "file11",
    "question": "Your disk is filling up and you want to see which folders inside your home directory are consuming the most space — one size per folder, displayed in human-readable units like G, M, and K. What command lists that breakdown?",
    "answer": "du -h",
    "explanation": "This command walks through every folder and reports how much space each one is using. Without any options it lists every single subdirectory, which can be overwhelming. The human-readable option converts raw byte counts into familiar units like megabytes and gigabytes so you can immediately tell which folder is the space hog.",
    "usage": "Measure how much disk space each directory and its contents consume — the key tool for tracking down space usage.",
    "examples": [
      "du -sh *  # one-line size per item in current folder — the everyday command",
      "du -sh ~/Downloads  # how big is my Downloads folder?",
      "du -h --max-depth=1  # current dir + immediate children only",
      "du -sh * | sort -h | tail  # 10 biggest items in current dir",
      "du -hxd1 /  # top-level sizes of / without crossing filesystems"
    ],
    "memoryTip": "`du` = Disk Usage. Pair-think: `du` (per-folder) vs `df` (per-mountpoint free space). Memorize `du -sh *` — it answers 'where did my disk go?' in one breath. For interactive disk hunting install `ncdu` (`sudo apt install ncdu`).",
    "outputExample": "$ du -sh *\n12M     Documents\n4.5G    Downloads\n128K    Music\n2.1G    Pictures\n42M     Projects\n$ du -sh * | sort -h | tail -3\n42M     Projects\n2.1G    Pictures\n4.5G    Downloads",
    "category": "FILE OPS"
  },
  {
    "id": "file12",
    "question": "You edited /etc/nginx/nginx.conf and want to see exactly which lines changed compared to the backup at /etc/nginx/nginx.conf.bak — showing the differences side by side in a readable format. What command compares two text files line by line?",
    "answer": "diff file1 file2",
    "explanation": "This command reads two files and acts like a teacher marking differences between two essays — it shows you exactly which lines were removed, added, or changed, and where those changes appear. Lines marked with < exist only in the first file, and lines marked with > exist only in the second. The unified format (-u) is even friendlier, showing a few lines of context around each change like a code review comment.",
    "usage": "Compare two text files line by line and show exactly what differs — essential for reviewing configuration changes before deployment.",
    "examples": [
      "diff nginx.conf nginx.conf.bak  # show differences between current and backup",
      "diff -u nginx.conf nginx.conf.bak  # unified format (good for patches, readable context)",
      "diff -r /etc/nginx /backup/nginx  # compare directories recursively",
      "diff <(sort file1.txt) <(sort file2.txt)  # compare sorted versions",
      "diff --color=auto old.conf new.conf  # colorized output"
    ],
    "memoryTip": "'diff' = 'differences'. Like spotting the differences between two similar pictures. `-u` (unified) format is what git uses — learn to read + and - lines.",
    "outputExample": "$ diff nginx.conf nginx.conf.bak\n2c2\n< worker_processes 4;\n---\n> worker_processes 2;\n4a5\n> # legacy setting",
    "category": "FILE OPS"
  },
  {
    "id": "file13",
    "question": "You want to copy the entire ~/code/myapp directory and all of its subdirectories and files into ~/backups/myapp-copy. What flag is required to make cp descend into directories?",
    "answer": "cp -r ~/code/myapp ~/code/myapp-backup",
    "explanation": "By default, the copy command refuses to copy a folder — it only knows how to copy individual files. Adding this option tells it to dig inside the folder, then inside all the subfolders inside that, and so on, copying every file it finds no matter how deeply nested. It's like telling a moving company to pack the entire contents of a filing cabinet rather than just one drawer.",
    "usage": "Copy an entire directory tree including all nested subdirectories and files.",
    "examples": [
      "cp -r ~/code/myapp ~/backups/myapp-copy  # copy entire project",
      "cp -r /etc /backup/etc-$(date +%F)  # backup system config with date stamp",
      "cp -r ~/Documents/* ~/external-drive/  # copy all documents",
      "cp -a /etc/nginx /etc/nginx.bak  # archive mode: preserve permissions + symlinks",
      "rsync -av ~/code/myapp/ ~/backups/myapp/  # smarter alternative: only copies changes"
    ],
    "memoryTip": "'cp -r' = 'copy recursive'. The 'r' means it copies everything inside directories too.",
    "outputExample": "$ cp -r ~/code/myapp ~/backups/myapp-copy\n$ ls ~/backups/\nmyapp-copy/",
    "category": "FILE OPS"
  },
  {
    "id": "file14",
    "question": "You want to move the entire project_v1 directory and everything inside it to the archive folder in one command, without specifying any recursion flag. What command handles moving entire directory trees natively?",
    "answer": "mv source_dir destination_dir",
    "explanation": "Moving a folder is simpler than copying one — you don't need any special option to handle the contents inside, because the folder itself just gets picked up and put down elsewhere. If you're staying on the same storage device, it happens instantly regardless of how many files are inside. If you're crossing to a different storage device, it copies everything over first and then removes the original.",
    "usage": "Move or rename an entire directory tree in one command — no recursion flag needed, and instant on the same filesystem.",
    "examples": [
      "mv project_v1 project_v1-archived  # rename a directory in place",
      "mv project_v1 archive/  # move folder INTO archive/ (note the trailing slash convention)",
      "mv ~/Downloads/photos ~/Pictures/  # cross-folder move on same disk = instant",
      "mv -i src/ backup/  # interactive: prompt if backup/src already exists",
      "mv -v src/ /mnt/usb/  # verbose; on a different filesystem this becomes a real copy+delete"
    ],
    "memoryTip": "`mv` already walks directories — no `-r`. Mnemonic: `mv` doesn't need `-r` because moving a folder is usually just renaming one entry, not touching the contents. Compare: `cp -r`, `rm -r`, `mv` (no flag).",
    "outputExample": "$ ls\nproject_v1/\n$ mv project_v1 project_v1-archived\n$ ls\nproject_v1-archived/\n$ mv project_v1-archived archive/\n$ ls archive/\nproject_v1-archived/",
    "category": "FILE OPS"
  },
  {
    "id": "file15",
    "question": "You have a directory called old-logs that contains hundreds of files in nested subdirectories, and you want to delete the entire directory and all of its contents. What flag enables rm to descend into and remove directory trees?",
    "answer": "rm -r old-logs",
    "explanation": "By default, the remove command refuses to touch a folder — it only deletes individual files. Adding this option tells it to go inside the folder, delete everything it finds at every level of nesting, and then remove the now-empty folders themselves. This is the digital equivalent of demolishing a building and everything inside it — there is no undo.",
    "usage": "Delete an entire directory tree including all nested files and subdirectories — irreversible, use with care.",
    "examples": [
      "rm -r old-logs/  # remove directory and all contents",
      "rm -rf node_modules/  # force remove without prompts (common in build scripts)",
      "rm -ri old_project/  # interactive recursive removal — confirms each file",
      "rm -rf \"${BUILD_DIR:?variable must be set}/\"  # safe variable-based removal",
      "trash-put old-logs/  # safer alternative: recoverable from trash"
    ],
    "memoryTip": "'rm -r' = 'remove recursive'. Like demolishing a house and everything in it. NEVER combine -rf with unquoted shell variables.",
    "outputExample": "$ rm -r old-logs/\n$ ls\n# old-logs directory is gone",
    "category": "FILE OPS"
  },
  {
    "id": "file16",
    "question": "You are copying a large number of files from ~/Downloads to an external drive and want to see each filename printed as it gets copied so you can monitor progress. What flag makes cp narrate every file operation?",
    "answer": "cp -v source destination",
    "explanation": "Normally, the copy command works in complete silence — success is invisible and you only hear about failures. Adding this option makes it narrate its work, printing a line for every file it processes. It's like having a moving crew read out each box's label as they carry it, so you know exactly what's happening and can spot if something unexpected is being moved.",
    "usage": "Show each file as it is copied — turns silent success into a visible confirmation log.",
    "examples": [
      "cp -v *.txt ~/backup/  # show each text file being copied",
      "cp -rv ~/Documents ~/external-drive/  # verbose recursive copy of Documents",
      "cp -vp config.yml /etc/myapp/config.yml  # verbose + preserve attributes",
      "rsync -av --progress large-file.iso /backup/  # better for large files: shows speed + %"
    ],
    "memoryTip": "'cp -v' = 'copy verbose'. The 'v' makes it 'verbose' — it tells you what it's doing.",
    "outputExample": "$ cp -v *.txt ~/backup/\n'notes.txt' -> '/home/alice/backup/notes.txt'\n'report.txt' -> '/home/alice/backup/report.txt'",
    "category": "FILE OPS"
  },
  {
    "id": "file17",
    "question": "You are moving several *.log files from the current directory to /var/archive/ and want each filename printed as it gets relocated so you can confirm the operation. What flag makes mv show each move?",
    "answer": "mv -v source destination",
    "explanation": "The move command is normally silent — it does its job without saying a word unless something goes wrong. Adding this option makes it announce each file as it's moved, printing the old name and the new location. It's reassuring confirmation that the right files ended up in the right place, especially when moving many files at once with a wildcard.",
    "usage": "Show each file as it is moved or renamed — visual confirmation that the right files went to the right place.",
    "examples": [
      "mv -v *.log /var/archive/  # show each log file being moved",
      "mv -v report-draft.md report-final.md  # show rename operation",
      "mv -rv old-project/ archive/  # verbose move of entire directory",
      "rsync -av --remove-source-files src/ dst/  # alternative: shows progress + moves files"
    ],
    "memoryTip": "'mv -v' = 'move verbose'. Like the moving company telling you each item they're taking.",
    "outputExample": "$ mv -v *.log /var/archive/\n'access.log' -> '/var/archive/access.log'\n'error.log' -> '/var/archive/error.log'",
    "category": "FILE OPS"
  },
  {
    "id": "file18",
    "question": "You want to delete all *.tmp files in /tmp and see a confirmation line printed for each file as it is removed. What flag makes the remove command report each deletion?",
    "answer": "rm -v *.tmp /tmp",
    "explanation": "When you delete files normally the command runs quietly — nothing is printed when it works, and you have to trust it did what you asked. Adding this option makes each deletion visible: it prints the filename as it's removed, giving you a receipt for every file that gets deleted. This is especially reassuring when deleting by wildcard, since you can see the full list of what was matched and removed.",
    "usage": "Print each filename as it is deleted — turns silent removal into a visible deletion log.",
    "examples": [
      "rm -v *.tmp  # show each temp file being deleted",
      "rm -rv build/  # verbose recursive removal — shows every file removed",
      "rm -vi *.log  # verbose + interactive: confirm and report each deletion",
      "rm -v -- *.bak  # verbose with -- to safely handle files starting with -"
    ],
    "memoryTip": "'rm -v' = 'remove verbose'. Like the garbage collector telling you what they're taking away.",
    "outputExample": "$ rm -v *.tmp\nremoved 'session1.tmp'\nremoved 'session2.tmp'\nremoved 'scratch.tmp'",
    "category": "FILE OPS"
  },
  {
    "id": "file19",
    "question": "You want report.txt to be accessible under two different names in two different directories — changes made through either name should immediately be visible through the other. What command creates this second name that shares the same underlying data?",
    "answer": "ln report.txt report-link",
    "explanation": "A hard link is like having two different labels on the exact same physical drawer in a filing cabinet. Both names point to the same stored content — there is no \"original\" and \"copy.\" Editing the file through either name changes both immediately, because they are the same thing viewed from different angles. The content only disappears when every single label pointing to it is removed.",
    "usage": "Create a second filesystem name for the same file — both names access identical content and changes through either name are immediately reflected in both.",
    "examples": [
      "ln report.txt reports/current-report.txt  # create hard link in another directory",
      "ln /etc/nginx/nginx.conf /home/alice/nginx-current.conf  # accessible from home dir",
      "ls -li report.txt  # -i shows inode number — hard links share the same number",
      "ln /bin/bash /usr/local/bin/sh  # another name for bash"
    ],
    "memoryTip": "'ln' = 'link'. A hard link is like having two doors to the same room.",
    "outputExample": "$ ln report.txt reports/current-report.txt\n$ ls -li report.txt reports/current-report.txt\n12345 -rw-r--r-- 2 alice alice 1024 May 17 10:30 report.txt\n12345 -rw-r--r-- 2 alice alice 1024 May 17 10:30 reports/current-report.txt",
    "category": "FILE OPS"
  },
  {
    "id": "file20",
    "question": "After creating a hard link to report.txt, you want to verify that two directory entries now share the same underlying data. What command shows the hard link count for a file?",
    "answer": "ls -l report.txt",
    "explanation": "When you list files in the detailed view, there's a number in the second column that tells you how many names point to this file's data. Normally that number is 1 — one name, one file. After creating a hard link, that number becomes 2, confirming that two different names now both lead to the same stored content. It's like a library book that has two catalog cards filed under different subject headings, both pointing to the same physical book on the shelf.",
    "usage": "Inspect the hard link count for a file — the second column shows how many filesystem names point to the same underlying data.",
    "examples": [
      "ls -l report.txt  # check link count in the second column",
      "ls -li report.txt  # show inode number — hard links share the same inode",
      "ls -l /etc/passwd  # regular files typically show link count of 1",
      "stat report.txt  # alternative: shows link count plus all other inode metadata"
    ],
    "memoryTip": "The number after permissions in 'ls -l' shows how many hard links exist. Like counting how many doors lead to the same room.",
    "outputExample": "$ ls -l report.txt\n-rw-r--r-- 1 alice alice 1024 May 17 10:30 report.txt\n$ ln report.txt report-link.txt\n$ ls -l report.txt\n-rw-r--r-- 2 alice alice 1024 May 17 10:30 report.txt\n# The '2' means 2 hard links now exist",
    "category": "FILE OPS"
  },
  {
    "id": "file21",
    "question": "You want to copy /etc/nginx to /backup/nginx and have the backup preserve all permissions, timestamps, ownership, and symbolic links exactly as they are on the original. What single flag enables this complete metadata preservation?",
    "answer": "cp -a source destination",
    "explanation": "Normally copying a folder produces a copy with today's date as its creation time, your username as its owner, and your default file permissions. This option is like shrink-wrapping the original before copying it — every attribute, label, and permission tag is reproduced exactly on the copy, making it functionally identical to the original.",
    "usage": "Create a complete archive-quality copy that preserves all metadata — the right choice for backups and deployments.",
    "examples": [
      "cp -a /etc/nginx /backup/nginx  # archive backup of nginx config",
      "cp -a ~/code/myapp ~/backups/myapp-$(date +%F)  # dated archive backup",
      "cp -a /var/www/html /var/www/html.bak  # backup web root before upgrade",
      "cp -r /etc/nginx /backup/nginx  # recursive only — does NOT preserve symlinks as symlinks"
    ],
    "memoryTip": "'cp -a' = 'copy archive'. Like making a perfect museum replica that preserves everything.",
    "outputExample": "$ ls -la /etc/nginx/\nlrwxrwxrwx 1 root root   14 May 01 sites-enabled -> ../sites-available\n$ cp -a /etc/nginx /backup/nginx\n$ ls -la /backup/nginx/\nlrwxrwxrwx 1 root root   14 May 01 sites-enabled -> ../sites-available  # symlink preserved",
    "category": "FILE OPS"
  },
  {
    "id": "file22",
    "question": "You want to move a new config file onto an existing one, but you want the old config automatically saved as a backup file before it's overwritten, in case you need to roll back. What option enables automatic backup creation during a move?",
    "answer": "mv --backup source destination",
    "explanation": "Normally moving a file onto an existing file destroys the original silently. This option tells the move command to save the old file first by appending a tilde to its name, like config.txt~, creating an automatic safety copy before the replacement happens. It's like an undo button that triggers automatically — even if you forget to back up manually, the old version is preserved.",
    "usage": "Automatically preserve the existing destination file as a backup before overwriting it during a move.",
    "examples": [
      "mv --backup new-nginx.conf /etc/nginx/nginx.conf  # backup existing as nginx.conf~",
      "mv --backup=numbered deploy.sh /usr/local/bin/deploy  # creates deploy.sh.~1~, .~2~, etc.",
      "mv -b config.yml /etc/myapp/config.yml  # shorthand for --backup",
      "ls /etc/nginx/  # after: see nginx.conf and nginx.conf~ (the backup)"
    ],
    "memoryTip": "'mv --backup' = 'move with backup'. Like keeping the old version in a safe place before replacing it.",
    "outputExample": "$ mv --backup new-nginx.conf /etc/nginx/nginx.conf\n$ ls /etc/nginx/\nnginx.conf  nginx.conf~  # ~ indicates the auto-saved backup",
    "category": "FILE OPS"
  },
  {
    "id": "file23",
    "question": "You ran a build process and want to delete all *.tmp files under /tmp that were created after the build started — using a reference file created at the start of the build as the time marker. What find command selects and deletes only those newer files?",
    "answer": "find . -name \"*.tmp\" -newer reference -delete",
    "explanation": "This command is like telling a search party \"find every file in this area that is dated after this reference document, and throw those away.\" The reference file acts as a timestamp anchor — anything older than it is left alone, and only items created or modified more recently get removed.",
    "usage": "Delete all files matching a pattern that are newer than a reference file — precise time-bounded cleanup without touching older files.",
    "examples": [
      "touch /tmp/build-start; ./run-build.sh; find /tmp -name '*.tmp' -newer /tmp/build-start -delete",
      "find . -name '*.tmp' -newer Makefile -delete  # delete .tmp files newer than Makefile",
      "find /tmp -newer /tmp/cleanup_marker -type f -delete  # delete all files newer than marker",
      "find . -name '*.tmp' -newer marker.txt  # preview without deleting first"
    ],
    "memoryTip": "'-newer reference' finds files created after the reference file. Like cleaning up everything bought after your last shopping trip.",
    "outputExample": "$ touch /tmp/build-start\n$ ./build.sh\n$ find /tmp -name '*.tmp' -newer /tmp/build-start -delete\n# Only .tmp files created during this build are removed",
    "category": "FILE OPS"
  },
  {
    "id": "file24",
    "question": "You want to copy a 4GB ISO file to an external drive and see a live progress indicator showing transfer speed and percentage as it goes. What command provides this progress-aware copy with a real-time display?",
    "answer": "rsync -av --progress source destination",
    "explanation": "The standard copy command works in complete silence with no indication of how far along a large transfer is. This command is like hiring a delivery service that sends you live updates — it shows which file is being transferred, how fast data is moving, and how much is left, so you can see the transfer is actually progressing rather than wondering if it's frozen.",
    "usage": "Copy files with a live progress display showing speed, percentage, and estimated time — far more informative than cp for large transfers.",
    "examples": [
      "rsync -av --progress ubuntu.iso /media/usb/  # copy ISO with progress",
      "rsync -av --progress ~/Documents/ /backup/Documents/  # backup Documents",
      "rsync -av --delete ~/code/ /backup/code/  # sync, removing deleted files",
      "rsync -av --progress user@server:/var/www/html/ ~/web-backup/  # remote copy over SSH"
    ],
    "memoryTip": "'rsync --progress' shows a progress bar. Like watching a download progress bar.",
    "outputExample": "$ rsync -av --progress ubuntu.iso /media/usb/\nsending incremental file list\nubuntu.iso\n  1,073,741,824  45%   52.00MB/s    0:08:15",
    "category": "FILE OPS"
  },
  {
    "id": "file25",
    "question": "You need to permanently destroy a file containing a private SSH key so that data recovery tools cannot retrieve it. What command overwrites the file's content with random data multiple times before deleting it?",
    "answer": "shred -u private-key.pem",
    "explanation": "When you normally delete a file, the data sits on disk until something else is written over it — recovery software can often read it back. This command is like a paper shredder for digital files: it scribbles random data over the file's contents several times so the original information can no longer be recovered, then deletes the filename. It's the appropriate tool when you need to dispose of genuinely sensitive data.",
    "usage": "Overwrite a file's data with random bytes multiple times before deleting it — prevents recovery of sensitive content.",
    "examples": [
      "shred -u private_key.pem  # overwrite 3 times then delete",
      "shred -n 7 -u confidential.pdf  # 7 overwrite passes then delete",
      "shred -uz passwords.txt  # overwrite + zero fill + delete",
      "shred -v -u secret.txt  # verbose: shows each pass as it runs"
    ],
    "memoryTip": "'shred' = 'destroy beyond recognition'. Like shredding a document so it can't be pieced back together.",
    "outputExample": "$ shred -u private_key.pem\n$ ls private_key.pem\nls: cannot access 'private_key.pem': No such file or directory",
    "category": "FILE OPS"
  },
  {
    "id": "view1",
    "question": "You need to read through a 50,000-line /var/log/syslog interactively — scrolling forward and backward and searching for specific terms — without the entire file flooding your terminal. What command opens the file in a scrollable viewer?",
    "answer": "less /var/log/syslog",
    "explanation": "This command opens a file in a controlled reading environment — like a reading app rather than pasting the whole book on the floor. You see one screen at a time, can scroll up and down, and can search for words without the content scrolling away. When you're done reading, you press a key to close it and return to your normal prompt.",
    "usage": "Open any file or piped output in a scrollable, searchable reader — the right tool any time a file is too long to cat.",
    "examples": [
      "less /var/log/syslog  # browse a long log file interactively",
      "less +G app.log  # open at the END of the file (newest log lines)",
      "less +F app.log  # follow mode — like 'tail -f' but you can stop and search",
      "journalctl -u nginx | less  # pipe any command's output into less",
      "less -N deploy.sh  # show line numbers on the left",
      "less -S data.csv  # don't wrap long lines — scroll right with arrow keys"
    ],
    "memoryTip": "`less` is more. Mental model: it's a read-only mini text editor — the same search (`/`), navigation (`g`/`G`), and quit (`q`) keys as `vim`, which is why Linux folks feel at home in it.",
    "outputExample": "$ less /var/log/syslog\nMay 15 09:14:01 host CRON[1234]: (root) CMD (run-parts /etc/cron.hourly)\nMay 15 09:14:02 host systemd[1]: Started Session 42 of user alice.\nMay 15 09:14:05 host sshd[2210]: Accepted publickey for alice from 10.0.0.5\nMay 15 09:14:10 host kernel: [12345.678] usb 1-2: new high-speed USB device\n:",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view2",
    "question": "You received a large CSV file and want to see just the header row and the first few data rows to understand its structure without printing all 50,000 lines. What command shows only the beginning of a file?",
    "answer": "head names.csv",
    "explanation": "This command is like reading only the first page of a book to decide whether it's worth continuing. It shows the opening lines of a file and then stops — you never see the rest, which makes it extremely fast even on enormous files. It's the standard \"quick preview\" tool before committing to reading or processing an entire file.",
    "usage": "Preview the first lines of any file instantly — useful before committing to reading or processing a large file.",
    "examples": [
      "head report.csv  # see the header and first 9 data rows",
      "head -n 3 /etc/passwd  # just the first three user accounts",
      "head -n 20 *.log  # first 20 lines of every .log file, each labeled",
      "ls -lS /var/log | head  # the 10 biggest files in /var/log",
      "head -c 100 archive.bin  # first 100 BYTES (handy for magic-number checks)"
    ],
    "memoryTip": "`head` of a file = the top of the file, like the head of a list. Pair it in your mind with `tail` (bottom). Default for both is 10 lines.",
    "outputExample": "$ head -n 5 /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view3",
    "question": "You want to watch /var/log/nginx/access.log in real time as new HTTP requests arrive — seeing each new line printed as it is appended to the file. What command follows a file and streams new content to your terminal live?",
    "answer": "tail -f /var/log/nginx/access.log",
    "explanation": "This command starts by showing the last few lines of a file and then keeps watching — whenever the file gets new content added to the end, it immediately prints those new lines to your terminal. It's like sitting by a printer that's continuously receiving documents and reading each page as it comes out. The normal version shows the final lines and exits; the follow version stays open and never stops printing new arrivals until you press Ctrl+C.",
    "usage": "Show the most recent lines of a file, or follow it live to see new content appended in real time.",
    "examples": [
      "tail /var/log/auth.log  # most recent 10 auth events",
      "tail -n 50 app.log  # last 50 lines",
      "tail -f /var/log/nginx/access.log  # watch new requests appear live",
      "tail -F /var/log/syslog  # follow across log rotation",
      "tail -n +2 data.csv  # everything FROM line 2 onward (skip CSV header)",
      "tail -f app.log | grep ERROR  # live-watch only the error lines"
    ],
    "memoryTip": "`head` of the file vs. `tail` of the file — like a dog: head at the front, tail at the back. `-f` = follow, like following someone in real time.",
    "outputExample": "$ tail -n 4 /var/log/auth.log\nMay 15 09:12:01 host sshd[2204]: Failed password for invalid user admin from 203.0.113.7\nMay 15 09:12:02 host sshd[2204]: Connection closed by 203.0.113.7 port 51422\nMay 15 09:14:05 host sshd[2210]: Accepted publickey for alice from 10.0.0.5\nMay 15 09:14:05 host sshd[2210]: pam_unix(sshd:session): session opened for user alice",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view4",
    "question": "You want to scan /var/log/nginx/error.log and print only the lines that contain the word 'upstream' — ignoring all other lines. What command filters a file to show only matching lines?",
    "answer": "grep error /var/log/nginx/error.log",
    "explanation": "This command reads through a file line by line and acts as a filter — it keeps only the lines that contain the word or phrase you're looking for and discards everything else. Instead of reading thousands of log lines, you instantly see only the ones relevant to your investigation. You can also feed the output of other commands into it as a second stage of filtering.",
    "usage": "Filter any file or command output to show only lines containing a specific pattern — the most-used text tool on Linux.",
    "examples": [
      "grep upstream /var/log/nginx/error.log  # all lines mentioning upstream",
      "grep -i 'failed' /var/log/auth.log  # case-insensitive: 'Failed', 'FAILED', 'failed'",
      "grep -r 'TODO' ~/code/myapp/src/  # recursive: every TODO in any file under src/",
      "grep -v '^#' /etc/ssh/sshd_config  # show config WITHOUT comment lines",
      "ps aux | grep nginx  # which nginx processes are running",
      "grep -w 'cat' notes.txt  # match 'cat' but not 'category' or 'concatenate'"
    ],
    "memoryTip": "`grep` came from an old `ed` editor command: `g/re/p` — Globally search for a Regular Expression and Print matches. That literal acronym is the name.",
    "outputExample": "$ grep -i error /var/log/nginx/error.log\n2026-05-15 09:12:43 [error] upstream timed out\n2026-05-15 09:13:01 [error] upstream connection refused\n2026-05-15 09:13:08 [error] client sent invalid header",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view5",
    "question": "You want to know exactly how many lines are in /etc/passwd and also see the total word count and byte count for the file. What command reports all three counts at once?",
    "answer": "wc -l /etc/passwd",
    "explanation": "This command counts things in a file and reports back three numbers: how many lines it has, how many words, and how many bytes. It's a quick measurement tool — like a ruler for text files. The most common use is counting lines, which answers questions like \"how many user accounts are defined?\" or \"how many errors did today's log produce?\"",
    "usage": "Count lines, words, and bytes in a file — most commonly used as wc -l for a quick line count.",
    "examples": [
      "wc /etc/passwd  # lines, words, bytes — all three",
      "wc -l /etc/passwd  # how many user accounts are defined?",
      "grep ERROR app.log | wc -l  # how many error lines in the log?",
      "ls /usr/bin | wc -l  # how many commands are in /usr/bin?",
      "find . -name '*.py' | wc -l  # how many Python files in this project?",
      "wc -m essay.txt  # character count (proper, UTF-8 aware)"
    ],
    "memoryTip": "`wc` = Word Count, but its main job in practice is Line Count via `wc -l`. Mnemonic: 'pipe-it-to-wc-dash-l' is the universal way to answer 'how many?' on the command line.",
    "outputExample": "$ wc /etc/passwd\n  47  85 2814 /etc/passwd\n$ wc -l *.txt\n  10 todo.txt\n 142 notes.txt\n 152 total",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view6",
    "question": "You have a file of city names in random order and want to view them arranged alphabetically from A to Z, without modifying the original file. What command sorts the lines of a file and prints the result?",
    "answer": "sort cities.txt",
    "explanation": "This command reads through a file and rearranges all the lines into order before printing them. The file itself is never changed — it's like spreading index cards on a table, sorting them, and reading them out in sequence without rewriting any cards. If you want to keep the sorted version, you redirect the output to a new file.",
    "usage": "Sort the lines of a file alphabetically and print the result — does not modify the original file.",
    "examples": [
      "sort cities.txt  # alphabetical sort, output to terminal",
      "sort -n numbers.txt  # numeric sort (10 after 9, not after 1)",
      "sort -r names.txt  # reverse: Z to A",
      "sort cities.txt > cities-sorted.txt  # save sorted output to a new file",
      "sort -k2 employees.txt  # sort by the second field (e.g. last name)"
    ],
    "memoryTip": "sort = organize. Like arranging items in order. sort never modifies the original — redirect with > to save.",
    "outputExample": "$ sort cities.txt\nAmsterdam\nBerlin\nChicago\nTokyo",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view7",
    "question": "You have a sorted list of IP addresses and want to collapse consecutive duplicate entries into single lines, also showing how many times each address appeared. What command removes adjacent duplicate lines and can optionally count them?",
    "answer": "uniq ips-sorted.txt",
    "explanation": "This command removes repeated lines that appear one after another — if the same entry appears three times in a row, it keeps only one copy. The counting option turns it into a frequency report: instead of just removing duplicates, it tells you how many times each line appeared. The important catch is that it only handles consecutive duplicates, so you almost always sort the data first to bring identical lines together.",
    "usage": "Remove adjacent duplicate lines from sorted input — combine with -c to count occurrences for frequency analysis.",
    "examples": [
      "sort ip-addresses.txt | uniq  # dedupe — sort first because uniq only sees adjacent dupes",
      "sort -u ip-addresses.txt  # one-step dedupe (same result)",
      "sort access.log | uniq -c | sort -rn | head  # top 10 most-frequent lines",
      "sort events.txt | uniq -d  # only lines that appear more than once",
      "awk '{print $1}' access.log | sort | uniq -c | sort -rn  # request count per IP"
    ],
    "memoryTip": "`uniq` = UNIQue, but ADJACENT-only. Mantra: 'sort then uniq' or use `sort -u`. The `-c` flag is the secret sauce for any 'count occurrences' question — `sort | uniq -c | sort -rn` is the universal top-N pattern.",
    "outputExample": "$ cat ip-log.txt | sort | uniq -c\n      2 10.0.0.1\n      1 10.0.0.2\n      3 10.0.0.5\n$ cat ip-log.txt | sort | uniq -c | sort -rn\n      3 10.0.0.5\n      2 10.0.0.1\n      1 10.0.0.2",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view8",
    "question": "You want to display deploy.sh with every line preceded by its line number so you can reference specific lines when discussing the script with a colleague. What command adds line numbers to a file's output?",
    "answer": "nl deploy.sh",
    "explanation": "This command acts like a word processor that adds line numbers in the margin before printing. The file itself is not changed — the numbers are only part of the display. This makes it easy to say \"the problem is on line 42\" when reviewing code or a configuration file with someone else.",
    "usage": "Display a file with sequential line numbers added to each content line — useful for code reviews and precise line references.",
    "examples": [
      "nl deploy.sh  # number non-blank lines",
      "nl -ba config.yml  # number every line (blanks too)",
      "cat -n deploy.sh  # equivalent, simpler (numbers all lines including blanks)",
      "nl -nrz deploy.sh  # zero-padded line numbers (000001, 000002, ...)",
      "awk '{print NR\": \"$0}' deploy.sh  # alternative via awk"
    ],
    "memoryTip": "`nl` = Number Lines. Default skips blanks. For 'number absolutely everything' use `cat -n`. For inline numbering in `less`, press `=` or use `less -N file`.",
    "outputExample": "$ nl deploy.sh\n     1\t#!/bin/bash\n     2\tset -e\n      \n     3\techo 'Deploying...'\n     4\tcp -a dist/ /var/www/html/",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view9",
    "question": "A shell script you copied from a Windows machine is failing mysteriously. You suspect it contains invisible carriage return characters causing the problem. What command reveals all non-printable characters — showing line endings, tabs, and control characters explicitly?",
    "answer": "cat -A script.sh",
    "explanation": "Normally you can only see the text in a file, not the invisible control characters that surround it. This option is like switching on an ultraviolet light that makes hidden marks visible: every line ending appears as a dollar sign, tabs appear as ^I, and Windows-style carriage returns appear as ^M. This is invaluable for diagnosing \"the script looks fine but doesn't work\" problems.",
    "usage": "Reveal all invisible characters in a text file — essential for diagnosing Windows line endings and hidden whitespace problems.",
    "examples": [
      "cat -A deploy.sh  # show all characters including ^M Windows line endings",
      "cat -A config.yml | grep '\\^M'  # find lines with Windows line endings",
      "dos2unix deploy.sh  # fix Windows line endings in place",
      "file deploy.sh  # often reports 'CRLF line terminators' for Windows files"
    ],
    "memoryTip": "cat -A = cat with All characters visible. `$` at end of line = normal Unix newline. `^M$` = Windows CRLF ending (the ^M is the problem). `^I` = tab character.",
    "outputExample": "$ cat -A deploy.sh\n#!/bin/bash^M$\nset -e^M$\necho 'Deploying...' ^M$\n# ^M on every line = Windows CRLF line endings causing failures",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view10",
    "question": "You have an append-only log file where the newest entries are at the bottom, and you want to read it with the most recent entry first so you don't have to scroll to the end. What command reverses the line order of a file's output?",
    "answer": "tac access.log",
    "explanation": "This command reads a file from top to bottom but prints the lines in the opposite order — the last line comes out first, the first line comes out last. It's like reading a stack of papers from the bottom instead of the top. It's useful for logs where newer events are appended at the end and you want to see the most recent entries without scrolling past thousands of old ones.",
    "usage": "Print a file's lines in reverse order — newest-first viewing of append-style logs without needing tail.",
    "examples": [
      "tac /var/log/nginx/access.log  # log in newest-first order",
      "tac /var/log/nginx/access.log | head -20  # 20 most recent requests",
      "tac names.txt  # last line printed first",
      "history | tac | head  # show most-recent shell commands first",
      "rev deploy.sh  # DIFFERENT — reverses each line's CHARACTERS, not line order"
    ],
    "memoryTip": "`tac` = `cat` spelled backwards. Pair-think: `tac` reverses LINE order, `rev` reverses CHARACTER order within each line. Two reversers, very different jobs.",
    "outputExample": "$ cat colors.txt\nred\ngreen\nblue\n$ tac colors.txt\nblue\ngreen\nred",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view11",
    "question": "You need to email a 1.5GB database dump but email has a 25MB attachment limit. What command breaks it into multiple smaller pieces that can later be reassembled?",
    "answer": "split -b 20M database.dump",
    "explanation": "This command is like cutting a long document into chapters for easier handling — each piece gets a sequential name like piece_aa, piece_ab, and so on. You can specify how big each piece should be. When you're ready to put it back together, you concatenate all the pieces in order and the original content is restored exactly.",
    "usage": "Divide a large file into smaller pieces for transport or parallel processing — reassemble with cat.",
    "examples": [
      "split -b 20M database-dump.sql email-part_  # 20 MB chunks named email-part_aa, email-part_ab, ...",
      "split -l 1000 huge.csv chunk_  # 1000 lines per file",
      "split -b 5M -d -a 3 archive.tar part_  # numeric suffix: part_000, part_001, ...",
      "cat email-part_* > restored-dump.sql  # reassemble in alphabetic order",
      "sha256sum database-dump.sql restored-dump.sql  # verify reassembly is bit-identical"
    ],
    "memoryTip": "`split` defaults to 1000-line text chunks named `xaa, xab, ...`. Always pass a prefix (second arg) so you get readable filenames. Reassemble with plain `cat prefix_* > original`. For binary files use `-b SIZE`; for line-oriented files use `-l N`.",
    "outputExample": "$ ls -lh database-dump.sql\n-rw-r--r-- 1 alice alice 1.5G May 15 10:00 database-dump.sql\n$ split -b 20M database-dump.sql email-part_\n$ ls -lh email-part_*\n-rw-r--r-- 1 alice alice 20M May 15 10:00 email-part_aa\n-rw-r--r-- 1 alice alice 20M May 15 10:00 email-part_ab\n...",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view12",
    "question": "You received a large ISO file as three email attachments named piece_aa, piece_ab, and piece_ac and want to reassemble them into the original file. What command concatenates multiple files into one in the correct order?",
    "answer": "cat xaa xab xac > original_file",
    "explanation": "This command reads several files in sequence and pours their contents one after another into a single destination file. The order of the names you list determines the assembly order — if you get it wrong, the result is corrupted. It's like taping the torn pages of a book back together: page one, then page two, then page three, in exact order.",
    "usage": "Reassemble files that were split into numbered or sequentially named pieces back into the original single file.",
    "examples": [
      "cat piece_aa piece_ab piece_ac > ubuntu.iso  # specific pieces in exact order",
      "cat part_* > restored-database.sql  # glob: shell sorts alphabetically = correct order",
      "sha256sum ubuntu.iso restored.iso  # verify the reassembly is identical"
    ],
    "memoryTip": "'cat' concatenates files together. Like gluing puzzle pieces back into a complete picture. Order matters — always list or glob in the correct sequence.",
    "outputExample": "$ cat piece_aa piece_ab piece_ac > ubuntu.iso\n$ sha256sum ubuntu.iso\nabc123...  ubuntu.iso\n$ sha256sum piece_* | sha256sum  # verify all pieces accounted for",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view13",
    "question": "You found several occurrences of 'connection refused' in /var/log/app/server.log and need to know their exact line numbers so you can jump to each one in your text editor. What flag adds line numbers to grep's output?",
    "answer": "grep -n \"connection refused\" /var/log/app/server.log",
    "explanation": "Normally when grep finds a matching line it just prints the line itself — you see the content but not where in the file it lives. Adding this option is like finding matching paragraphs in a book and having the page numbers printed next to each one, so you can flip directly to the right spot.",
    "usage": "Show line numbers alongside grep matches — makes it easy to navigate directly to each finding in an editor.",
    "examples": [
      "grep -n 'connection refused' /var/log/app/server.log  # show line numbers",
      "grep -ni 'error' server.log  # case-insensitive match with line numbers",
      "grep -n -A 3 'exception' server.log  # line numbers + 3 lines context after each match",
      "grep -rn 'TODO' ~/code/myapp/src/  # recursive search with file:line references"
    ],
    "memoryTip": "'grep -n' = 'grep with numbers'. Like having page numbers in a book so you can find things easily.",
    "outputExample": "$ grep -n 'connection refused' /var/log/app/server.log\n15:ERROR: connection refused to 10.0.0.5:5432\n23:WARN: connection refused, retrying in 5s\n67:ERROR: connection refused after 3 attempts",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view14",
    "question": "You want to know how many lines in /var/log/nginx/error.log contain the word 'timeout' — just the count, not the lines themselves. What flag makes grep output only the count?",
    "answer": "grep -c error /var/log/nginx/access.log",
    "explanation": "Normally grep shows you every matching line. Sometimes you just want a number — \"how many times does this problem appear?\" This option suppresses the actual lines and just reports the count, like a search tool that tells you \"47 results\" without displaying them all. It's a quick diagnostic: if the number is zero, the pattern isn't there; if it's in the thousands, you have a serious volume of that event.",
    "usage": "Get a count of matching lines rather than the lines themselves — the fastest way to measure how often something appears.",
    "examples": [
      "grep -c 'timeout' /var/log/nginx/error.log  # count timeout errors",
      "grep -ci 'failed' /var/log/auth.log  # case-insensitive count",
      "grep -c 'error' *.log  # count per log file",
      "grep -c '^#' /etc/ssh/sshd_config  # count comment lines in sshd config"
    ],
    "memoryTip": "'grep -c' = 'grep count'. Like counting how many times a word appears in a document.",
    "outputExample": "$ grep -c 'timeout' /var/log/nginx/error.log\n47",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view15",
    "question": "You want to share a snippet of /etc/ssh/sshd_config with a colleague via a chat message and need each line to have a reference number prepended. What command displays a file with sequential numbers at the start of every line?",
    "answer": "cat -n /etc/ssh/sshd_config",
    "explanation": "This command is like printing a legal document with line numbers in the margin. Every single line — even blank ones — gets a sequential number prepended before the content. The file itself is never altered; the numbers only appear in the terminal output. This makes it easy for two people to discuss a file and say \"look at line 23\" rather than \"it's about halfway down.\"",
    "usage": "Display a file with sequential line numbers prepended — useful for precise line references in code reviews and discussions.",
    "examples": [
      "cat -n /etc/ssh/sshd_config  # number all lines including blanks",
      "cat -b /etc/ssh/sshd_config  # number only non-blank lines",
      "less -N /etc/ssh/sshd_config  # same but scrollable in less"
    ],
    "memoryTip": "'cat -n' = 'cat numbered'. Like having numbered lines in a legal document.",
    "outputExample": "$ cat -n /etc/ssh/sshd_config | head -5\n     1\t# /etc/ssh/sshd_config\n     2\t\n     3\tPort 22\n     4\tListenAddress 0.0.0.0\n     5\tProtocol 2",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view16",
    "question": "You have a list of deployment timestamps and want to display them from newest to oldest — the most recent timestamp first and the oldest last. What flag reverses the sort order?",
    "answer": "sort -r timestamps.txt",
    "explanation": "Normally sorting arranges items from smallest to largest, or A to Z. Adding this option flips the direction entirely — the largest value or the last letter comes first. It's like reading a sorted list from the bottom up rather than the top down. This is especially useful for timestamps and numbers where \"biggest first\" is what you care about.",
    "usage": "Reverse the sort direction so the largest, newest, or last-alphabetically items appear first.",
    "examples": [
      "sort -r deploy-timestamps.txt  # newest timestamp first (lexicographic reverse)",
      "sort -nr scores.txt | head  # top 10 numerical values",
      "du -sh * | sort -hr  # biggest directories first (human-readable sizes)",
      "ls | sort -Vr  # reverse version-aware sort (v2.0 before v1.10)",
      "sort -k2 -nr data.txt  # sort by 2nd column, numerically, descending"
    ],
    "memoryTip": "`-r` = Reverse. Most useful in the combo `sort -nr` (numeric reverse) which answers 'who's on top of the leaderboard?' — pipe to `head` for a top-N list.",
    "outputExample": "$ cat scores.txt\n42\n7\n100\n23\n$ sort -nr scores.txt\n100\n42\n23\n7",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view17",
    "question": "You have a log file with thousands of event types and want to see a frequency table — each unique event name listed alongside how many times it occurred, so you can identify the most common events. What pipeline produces that count-per-unique-value output?",
    "answer": "sort filename | uniq -c",
    "explanation": "This two-step process first lines up all identical entries together (like sorting a deck of cards so all the aces are together, all the kings together, and so on), and then counts how many are in each group. The result is a list showing each unique value alongside how many times it appeared. It's the command-line equivalent of a spreadsheet pivot table's \"count\" summary.",
    "usage": "Build a frequency table of all unique values in a file — the canonical 'count occurrences of each value' pipeline.",
    "examples": [
      "sort events.log | uniq -c  # count occurrences of each unique event",
      "sort events.log | uniq -c | sort -rn  # ranked by frequency, highest first",
      "sort events.log | uniq -c | sort -rn | head  # top 10 most frequent",
      "awk '{print $7}' access.log | sort | uniq -c | sort -rn  # most-requested URLs"
    ],
    "memoryTip": "'sort | uniq -c' = 'sort and count uniques'. Like taking inventory and counting how many of each item you have.",
    "outputExample": "$ sort events.log | uniq -c\n      3 connection_refused\n      1 disk_full\n      5 timeout\n      2 unauthorized\n$ sort events.log | uniq -c | sort -rn\n      5 timeout\n      3 connection_refused\n      2 unauthorized\n      1 disk_full",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view18",
    "question": "You have a fixed-width data file where the timestamp always occupies the first 19 characters of each line. What command extracts exactly those first 19 characters from every line?",
    "answer": "cut -b 1-10 /etc/passwd",
    "explanation": "This command acts like a precise pair of scissors that cuts the same slice from every line of a file. You specify which character positions you want by number, and it extracts exactly those positions — discarding everything else. It's ideal for fixed-width data where every field is always in the same column positions regardless of the content.",
    "usage": "Extract a specific byte-position range from every line of a file — the right tool for fixed-width columnar data.",
    "examples": [
      "cut -b 1-19 app.log  # extract first 19 characters (e.g., timestamp)",
      "cut -b 1-5 report.txt  # first 5 bytes of each line",
      "cut -b 20- report.txt  # from byte 20 to end of line",
      "cut -b 1-10,25-35 fixed-width.dat  # two non-contiguous ranges"
    ],
    "memoryTip": "'cut -b' = 'cut bytes'. Like cutting out specific pieces of paper from a document.",
    "outputExample": "$ cut -b 1-19 app.log\n2026-05-17 14:30:01\n2026-05-17 14:30:02\n2026-05-17 14:30:05",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view19",
    "question": "You want to extract just the username column from /etc/passwd — a colon-delimited file where the username is the first field on each line. What command extracts a specific field from a delimited file?",
    "answer": "cut -d: -f1 /etc/passwd",
    "explanation": "This command is like asking a spreadsheet program to show you only one specific column. You tell it what character separates the columns (the colon in /etc/passwd) and which column number you want, and it extracts that column from every row. It's the quick way to pull a single field out of a structured text file without a full programming language.",
    "usage": "Extract a specific field by position from any delimiter-separated text file — faster than awk for simple column extraction.",
    "examples": [
      "cut -d: -f1 /etc/passwd  # extract usernames (field 1)",
      "cut -d: -f7 /etc/passwd  # extract login shells (field 7)",
      "cut -d, -f2,4 data.csv  # extract columns 2 and 4 from a CSV",
      "cut -d' ' -f1 access.log  # extract first space-delimited field (IP addresses)",
      "cut -d: -f1,6 /etc/passwd  # username and home directory"
    ],
    "memoryTip": "'cut -d: -f1' = 'cut delimiter colon field 1'. Like cutting out the first column from a spreadsheet.",
    "outputExample": "$ cut -d: -f1 /etc/passwd\nroot\ndaemon\nbin\nsys\nsync\ngames\nalice",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view20",
    "question": "You have names.txt with one name per line and scores.txt with one score per line, and you want to combine them side by side so each line shows 'name\\tscore'. What command merges files horizontally by joining corresponding lines?",
    "answer": "paste file1 file2",
    "explanation": "The cat command stacks files on top of each other vertically. This command instead places them next to each other horizontally — it reads one line from each file simultaneously and joins them side by side with a tab between them. The result looks like a two-column table where the left column comes from the first file and the right column from the second.",
    "usage": "Merge files horizontally by joining corresponding lines with a delimiter — the side-by-side complement to cat's vertical stacking.",
    "examples": [
      "paste names.txt scores.txt  # join with tab: 'Alice\\t95'",
      "paste -d, names.txt scores.txt  # join with comma: 'Alice,95'",
      "paste -d: usernames.txt shells.txt  # join with colon",
      "ls | paste -d, - - -  # compact: three filenames per line separated by commas"
    ],
    "memoryTip": "'paste' = 'paste together'. Like taping two pieces of paper side by side.",
    "outputExample": "$ paste names.txt scores.txt\nAlice\t95\nBob\t87\nCharlie\t92",
    "category": "VIEWING TEXT"
  },
  {
    "id": "perm1",
    "question": "You have a shell script deploy.sh that you need everyone to be able to run, but only you (the owner) should be able to edit. What octal permission value sets owner to full access, and group/others to read and execute only?",
    "answer": "chmod 755 deploy.sh",
    "explanation": "Every file on Linux has three groups of people who might try to access it: you (the owner), your team (the group), and everyone else (others). For each group, three things can be allowed or denied: reading, writing, and executing. You express this as a three-digit code where each digit encodes what one group is allowed to do. This command sets those permissions in one step using that numeric code.",
    "usage": "Set file permissions in a single step using the three-digit octal notation — the most direct way to specify exact permissions for owner, group, and others.",
    "examples": [
      "chmod 644 notes.txt  # owner can edit, group and others read-only",
      "chmod 755 deploy.sh  # everyone can run it; only owner can edit",
      "chmod 600 ~/.ssh/id_ed25519  # SSH refuses to use the key if anyone else can read it",
      "chmod 700 ~/private  # directory only the owner can enter",
      "chmod 775 /srv/shared  # owner + group can write, others read"
    ],
    "memoryTip": "Octal digits: r=4, w=2, x=1. Add them up per slot, in order owner-group-others. `755` = `rwx r-x r-x` = 'I can do anything, you can look and run'.",
    "outputExample": "$ chmod 755 deploy.sh\n$ ls -l deploy.sh\n-rwxr-xr-x 1 alice alice 1240 May 15 10:02 deploy.sh",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm2",
    "question": "After extracting a tarball as root, the files are owned by root but need to be owned by the alice user and the developers group so alice can edit them. What command changes the owner and group simultaneously?",
    "answer": "chown user:group config.txt",
    "explanation": "Every file on Linux has two labels attached to it: a user label (the person who owns it) and a group label (the team that has group-level access). This command lets you reassign both labels at once. Changing ownership is a privileged action — you need administrator permission to hand a file to someone else, just as you'd need authorization to retitle property in someone else's name.",
    "usage": "Reassign both the user owner and group of a file in a single command — the standard tool for fixing ownership after privileged file operations.",
    "examples": [
      "sudo chown alice report.pdf  # change owner only",
      "sudo chown alice:developers project/  # set both owner and group",
      "sudo chown :www-data /var/www/uploads  # change group only — note the leading colon",
      "sudo chown -R www-data:www-data /var/www/html  # recurse through every file/folder inside",
      "sudo chown --reference=template.conf new.conf  # copy ownership from another file"
    ],
    "memoryTip": "`chown` = 'change owner'. Format mirrors `ls -l` columns: `USER:GROUP`. The colon is the separator; either side can be omitted.",
    "outputExample": "$ ls -l report.pdf\n-rw-r--r-- 1 root root 18K May 15 09:00 report.pdf\n$ sudo chown alice:staff report.pdf\n$ ls -l report.pdf\n-rw-r--r-- 1 alice staff 18K May 15 09:00 report.pdf",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm3",
    "question": "You are trying to run a script and getting 'Permission denied'. You want to inspect the current permission settings on deploy.sh to understand who can read, write, and execute it. What command shows a file's detailed permissions?",
    "answer": "ls -l script.sh",
    "explanation": "When a file refuses to open or run, the first thing to check is who has what kind of access. This command shows each file on its own line with a ten-character code on the left that tells you everything about its access settings — whether it's a file or directory, and exactly what the owner, group members, and everyone else are allowed to do with it.",
    "usage": "Inspect the current permission bits, owner, and group of any file — the first diagnostic step for any permission-related problem.",
    "examples": [
      "ls -l deploy.sh  # check permissions on the script",
      "ls -ld /var/www/html/  # check directory permissions (not its contents)",
      "ls -l /etc/passwd  # check system file permissions",
      "ls -la ~/.ssh/  # check SSH directory and key permissions"
    ],
    "memoryTip": "ls = list. The first column of ls -l is a 10-character permission string: type + 3 triplets (owner/group/others) of rwx.",
    "outputExample": "$ ls -l deploy.sh\n-rw-r--r-- 1 alice alice 142 May 15 10:00 deploy.sh\n# Missing 'x' bits — that's why it won't execute",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm4",
    "question": "You just wrote a shell script called setup.sh. When you try to run it with ./setup.sh you get 'Permission denied' even though you own the file. What command adds the execute permission so you can run it?",
    "answer": "chmod +x setup.sh",
    "explanation": "A text file containing shell commands is just a text file until you mark it as executable. Without the execute permission, the operating system won't run it as a program, even if you wrote it and own it. Adding this permission is like stamping a \"licensed to run\" label on the script — after that, typing ./script.sh actually runs it.",
    "usage": "Grant the execute bit to a script or program so it can be run directly — a one-time setup step after writing any new script.",
    "examples": [
      "chmod +x setup.sh  # turn a script into a runnable program",
      "chmod +x *.sh  # all .sh files in current folder",
      "chmod u+x private.sh  # only owner can execute (not group/others)",
      "chmod a+x public-tool.sh  # explicitly everyone (a = all)",
      "chmod -x setup.sh  # remove execute bit again"
    ],
    "memoryTip": "`+x` = add eXecute. The three permission bits in `ls -l` are `rwx` — read/write/execute. If you see `-rw-r--r--` and the file won't run, it's missing the `x`. Mnemonic: `+x` = 'plus eXecute'.",
    "outputExample": "$ ls -l setup.sh\n-rw-r--r-- 1 alice alice 142 May 15 10:00 setup.sh\n$ ./setup.sh\nbash: ./setup.sh: Permission denied\n$ chmod +x setup.sh\n$ ls -l setup.sh\n-rwxr-xr-x 1 alice alice 142 May 15 10:00 setup.sh\n$ ./setup.sh\nSetting up...",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm5",
    "question": "You deployed a web application to /var/www/myapp and need every file and subdirectory in that entire tree to have permissions 755 so the web server can read and traverse them all. What flag makes chmod apply to the entire directory tree?",
    "answer": "chmod -R 755 /var/www/myapp",
    "explanation": "Normally the permissions command only changes the one specific file or folder you name. Adding this option tells it to go inside that folder, and inside every subfolder inside that, applying the new permissions to absolutely every file and directory it finds. It's like changing the lock settings on every room in a building at once rather than going door by door.",
    "usage": "Apply a permission change to every file and subdirectory within an entire directory tree in one operation.",
    "examples": [
      "chmod -R 755 /var/www/myapp  # every file and dir becomes rwxr-xr-x",
      "chmod -R 644 ~/public_html  # web files readable but not executable",
      "chmod -R g+w /srv/shared/  # add group write access to entire shared folder",
      "find /var/www/myapp -type f -exec chmod 644 {} + && find /var/www/myapp -type d -exec chmod 755 {} +"
    ],
    "memoryTip": "chmod -R = change mode Recursively. Like adjusting who can access an entire building's rooms in one sweep.",
    "outputExample": "$ chmod -R 755 /var/www/myapp\n$ ls -la /var/www/myapp/\ndrwxr-xr-x 3 alice alice 4096 May 17 deploy.sh\n-rwxr-xr-x 1 alice alice 1240 May 17 setup.sh",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm6",
    "question": "You want to give the www-data group ownership of /var/www/html so the web server process (which runs as www-data) can read and write files there, without changing the user owner. What command changes only the group associated with a file or directory?",
    "answer": "chgrp www-data /var/www/html",
    "explanation": "Every file has two ownership labels: one for an individual user and one for a group of users. This command changes only the group label, leaving the individual user label unchanged. Groups are like access badges — belonging to the right group grants you whatever permissions that group has on a file. This is useful for sharing files among a team or giving a service process the right group to access the files it needs.",
    "usage": "Change the group ownership of a file or directory — leaves the user owner unchanged.",
    "examples": [
      "sudo chgrp www-data /var/www/html  # give web server group access",
      "sudo chgrp -R developers /srv/project/  # recursive — every file inside gets the new group",
      "sudo chown alice:developers report.txt  # change BOTH user and group at once",
      "ls -l report.txt  # fourth column shows the group name",
      "groups  # show which groups YOU are in (you can only chgrp to those, unless root)"
    ],
    "memoryTip": "`chgrp` = CHange GRouP. Sibling of `chown` (change owner) and `chmod` (change mode). All three start with `ch` for 'change'. If you get 'Operation not permitted', it usually means you're not a member of the target group — run `groups` to check.",
    "outputExample": "$ ls -l /var/www/html\ndrwxr-xr-x 2 alice alice 4096 May 15 10:00 /var/www/html\n$ sudo chgrp www-data /var/www/html\n$ ls -l /var/www/html\ndrwxr-xr-x 2 alice www-data 4096 May 15 10:00 /var/www/html",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm7",
    "question": "You are setting up a shared build server where all team members compile code and their output files should be readable and writable by the whole team by default. What command controls the default permission bits applied to all newly created files?",
    "answer": "umask 022",
    "explanation": "When you create a new file, the system applies a set of default permission rules. Think of these defaults as a template with some slots pre-blocked. This command sets which permission slots are blocked by default — so you can ensure that every new file you create starts with the right access level without having to chmod it every time.",
    "usage": "Set the default permission mask for all newly created files and directories — controls what permissions they start with without manual chmod.",
    "examples": [
      "umask  # print current umask, e.g. 0022",
      "umask -S  # symbolic form: u=rwx,g=rx,o=rx (easier to read)",
      "umask 022  # standard: new files 644, new dirs 755",
      "umask 077  # private: new files 600, new dirs 700 — only you",
      "umask 002  # group-friendly: new files 664, new dirs 775 (collaboration on shared dirs)"
    ],
    "memoryTip": "`umask` = User MASK. Think 'subtract-from-max'. Numerically: file_max(666) - umask = actual_perm. So umask of `022` → `666 - 022 = 644`. The leading zero you sometimes see (`0022`) is the special-bits digit (setuid/sticky), almost always 0.",
    "outputExample": "$ umask\n0022\n$ umask -S\nu=rwx,g=rx,o=rx\n$ touch newfile && ls -l newfile\n-rw-r--r-- 1 alice alice 0 May 15 10:00 newfile\n$ umask 077\n$ touch secret && ls -l secret\n-rw------- 1 alice alice 0 May 15 10:00 secret",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm8",
    "question": "After running a sudo command that switched your identity, you want to confirm which user this shell is currently running as before proceeding with a privileged operation. What command prints the current effective username?",
    "answer": "whoami",
    "explanation": "After switching users with sudo or su, it can be easy to lose track of which identity your current terminal session is running as. This command answers that single question with one word — your current username. It's the quickest possible sanity check before doing anything that depends on running as a specific user.",
    "usage": "Print the current effective username — the one-line answer to 'who am I right now?'",
    "examples": [
      "whoami  # who is this shell running as?",
      "sudo whoami  # prints 'root' — proves sudo elevated successfully",
      "who am i  # different! shows the LOGIN user, not effective user",
      "id  # full identity: uid, gid, all groups",
      "[ \"$(whoami)\" = root ] || { echo 'must be root'; exit 1; }  # guard-clause idiom in scripts"
    ],
    "memoryTip": "`whoami` = 'who am I?' (one word). Returns EFFECTIVE user. Don't confuse with `who am i` (three words = login user) or `who` (all logged-in users system-wide). For full identity details use `id`.",
    "outputExample": "$ whoami\nalice\n$ sudo whoami\nroot\n$ sudo -u bob whoami\nbob\n$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker)",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm9",
    "question": "You need to install several packages, edit multiple config files, and restart services — a sequence of tasks that all require root access. Instead of prefixing every line with sudo, how do you open a persistent root shell for an entire administrative session?",
    "answer": "sudo -i",
    "explanation": "Normally, asking for administrative permission only works for one command at a time — you have to ask again for each one. This option opens a whole new command-line session logged in as the administrator, where every command you type automatically has full system access. When you're done, you close it and return to your regular session. It's like temporarily moving into the server room versus making individual calls through an intercom.",
    "usage": "Open a persistent root shell for an administrative session — every subsequent command runs with full system privileges until you exit.",
    "examples": [
      "sudo -i  # become root, fresh root environment — prompt changes to #",
      "sudo -s  # root shell but keep YOUR environment ($HOME, aliases)",
      "sudo apt update  # one-off command — no shell switch needed",
      "exit  # leave the root shell, back to your user",
      "sudo -u alice -i  # become 'alice' (not root) with her login environment"
    ],
    "memoryTip": "`sudo -i` = `i`nitial-login as root (fresh env). `sudo -s` = `s`hell (your env). `sudo COMMAND` = one-shot. Mental rule: prefer one-shot `sudo COMMAND` 95% of the time — `-i` is for sustained admin sessions only.",
    "outputExample": "$ whoami\nalice\n$ sudo -i\n[sudo] password for alice: ******\nroot@ubuntu:~# whoami\nroot\nroot@ubuntu:~# pwd\n/root\nroot@ubuntu:~# exit\nlogout\n$ whoami\nalice",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm10",
    "question": "A colleague says 'you need to be in the docker group to run Docker without sudo' — but you're not sure which groups your account currently belongs to. What command lists all group memberships for your user?",
    "answer": "groups",
    "explanation": "Think of groups as access clubs you belong to. Being in the right club (group) unlocks certain resources — the audio club gives you sound access, the docker club lets you use Docker, the sudo club lets you run admin commands. This command tells you which clubs your account currently belongs to, so you can quickly determine whether you have the access you need or whether you need to be added to a group.",
    "usage": "List all Unix group memberships for your account — the first diagnostic step when a permission requires a specific group.",
    "examples": [
      "groups  # your group memberships",
      "groups alice  # another user's group memberships",
      "id -Gn  # same info, alternative command",
      "id  # full identity: uid, gid, all groups, plus SELinux context if relevant",
      "getent group docker  # who else is in the 'docker' group?"
    ],
    "memoryTip": "`groups` literally answers 'which groups?'. Don't confuse with `getent group NAME` which asks the opposite — 'who's IN this group?'. If you just added yourself to a group with `usermod -aG`, you won't see it in `groups` until next login.",
    "outputExample": "$ groups\nalice sudo docker users\n$ groups bob\nbob: bob audio video\n$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker),100(users)",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm11",
    "question": "You have correct ownership and chmod permissions on a file but still cannot delete or modify it. You suspect a filesystem-level attribute is blocking you. What command reveals these hidden filesystem attributes on a file?",
    "answer": "lsattr config.php",
    "explanation": "Beyond the normal read/write/execute permissions that chmod controls, Linux filesystems can attach a second layer of special properties to files that affect how they behave — properties that even the root administrator cannot override without explicitly removing them. This command reveals those hidden properties so you can see if one of them is the reason a file is resisting your changes.",
    "usage": "Reveal filesystem-level attributes that can block file operations even when permissions appear correct — the diagnostic tool for mysterious 'Operation not permitted' errors.",
    "examples": [
      "lsattr /etc/resolv.conf  # check if resolv.conf has the immutable flag",
      "lsattr -d /var/log/nginx/  # check directory attributes",
      "lsattr -R /etc/  # recursive check of entire /etc",
      "sudo chattr -i /etc/resolv.conf  # remove immutable flag if it's blocking changes"
    ],
    "memoryTip": "'lsattr' = 'list attributes'. Like checking the special properties of a file at the filesystem level. If you see 'i', that's immutable — even root can't touch it without removing the flag first.",
    "outputExample": "$ lsattr /etc/resolv.conf\n----i--------e-- /etc/resolv.conf\n# 'i' flag = immutable — no changes allowed until removed with chattr -i",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm12",
    "question": "You want to protect /etc/nginx/nginx.conf from any accidental modification — even by root — until you explicitly unlock it. What command sets the immutable attribute that prevents all writes?",
    "answer": "sudo chattr +i /var/log/important.log",
    "explanation": "Normal file permissions can always be overridden by the administrator, but this option creates a stronger lock. Once you apply it, the file becomes completely untouchable — nobody can change it, delete it, or rename it, not even the system administrator, until someone explicitly removes this lock. It's like putting a file in a sealed case with an extra lock that requires a separate key to open.",
    "usage": "Set the immutable filesystem attribute to prevent any modification or deletion of a file — stronger protection than permissions alone.",
    "examples": [
      "sudo chattr +i /etc/nginx/nginx.conf  # protect nginx config from any changes",
      "sudo chattr -i /etc/nginx/nginx.conf  # remove immutable flag to allow changes",
      "lsattr /etc/nginx/nginx.conf  # verify: 'i' flag should appear",
      "sudo chattr +a /var/log/audit.log  # append-only: can add to log but not overwrite"
    ],
    "memoryTip": "'chattr +i' = 'change attribute immutable'. Like locking a file so even root can't change it accidentally. Remove with 'chattr -i'.",
    "outputExample": "$ sudo chattr +i /etc/nginx/nginx.conf\n$ sudo rm /etc/nginx/nginx.conf\nrm: cannot remove '/etc/nginx/nginx.conf': Operation not permitted\n$ lsattr /etc/nginx/nginx.conf\n----i--------e-- /etc/nginx/nginx.conf",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm13",
    "question": "You need to give your colleague bob read and write access to project-report.txt, but you don't want to change the file's group or the permissions of other users. What command grants per-user permissions beyond the standard owner/group/others model?",
    "answer": "setfacl -m u:bob:rw project-file",
    "explanation": "The standard Linux permission system only has three groups to assign permissions to: the file owner, the file's group, and everyone else. ACLs (Access Control Lists) break that limitation — they let you add individual permission entries for any specific user or group, like adding extra doors with their own keys to a room that already has standard locks.",
    "usage": "Grant or modify access for a specific user on a file — more precise than chmod when you need per-user control.",
    "examples": [
      "setfacl -m u:bob:rw project-report.txt  # give bob read+write",
      "setfacl -m u:carol:r project-report.txt  # give carol read-only",
      "setfacl -m g:developers:rwx /srv/project/  # dev group gets full access",
      "getfacl project-report.txt  # view the complete ACL",
      "setfacl -x u:bob project-report.txt  # remove bob's ACL entry"
    ],
    "memoryTip": "'setfacl -m' = 'set file ACL modify'. Like creating custom access rules for specific people.",
    "outputExample": "$ setfacl -m u:bob:rw project-report.txt\n$ getfacl project-report.txt\n# file: project-report.txt\n# owner: alice\n# group: alice\nuser::rw-\nuser:bob:rw-\ngroup::r--\nother::r--",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm14",
    "question": "After running setfacl on /var/www/html/config.php, you want to see the complete list of who has what access to this file — including any extra ACL entries beyond the standard owner/group/others. What command displays the full ACL?",
    "answer": "getfacl /var/www/html/config.php",
    "explanation": "When a file has the standard three-way permissions plus extra individual access rules, the normal directory listing only shows a hint (a plus sign) that extra rules exist. This command reads out the complete access list — every user and group with their specific permissions — so you can see exactly who can do what with the file. It's like reading the full guest list for a secured room rather than just the general admission sign.",
    "usage": "Display the complete ACL for a file including all named user and group entries — the definitive answer to 'who has access to this file?'",
    "examples": [
      "getfacl /var/www/html/config.php  # show all access rules",
      "getfacl -d /srv/shared/  # show default ACL inherited by new files",
      "getfacl -R /var/www/  # recursive ACL display for entire web root",
      "getfacl config.php > config-acl-backup.txt  # save for later restoration"
    ],
    "memoryTip": "'getfacl' = 'get file ACL'. Like reading the detailed permission list that shows exactly who can do what.",
    "outputExample": "$ getfacl /var/www/html/config.php\n# file: /var/www/html/config.php\n# owner: alice\n# group: www-data\nuser::rw-\nuser:bob:r--\ngroup::r--\ngroup:developers:rw-\nmask::rw-\nother::---",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm15",
    "question": "During a security audit you need to find every executable on the system that runs with elevated root privileges because of the setuid bit — these are potential privilege escalation targets. What command searches the filesystem for setuid files?",
    "answer": "find / -perm -4000",
    "explanation": "Normally when you run a program, it runs with your permissions. The setuid bit is a special flag that makes a program run with the file owner's permissions instead — so a setuid program owned by root runs as root even when a regular user launches it. This is how commands like passwd change your own password (it needs root access to write /etc/shadow). This command finds every program on the system that has this special elevated-privilege flag, which is important for security reviews.",
    "usage": "Find every executable with the setuid bit set — the security audit command for identifying potential privilege escalation vectors.",
    "examples": [
      "find / -perm -4000 2>/dev/null  # all setuid files (suppress permission errors)",
      "find /usr -perm -4000  # setuid files in /usr only",
      "find / -perm -2000 2>/dev/null  # setgid files (run as owning group)",
      "find / -perm /6000 2>/dev/null  # any suid OR sgid files"
    ],
    "memoryTip": "'find -perm -4000' = 'find setuid'. Like searching for programs that can run as root when executed by users.",
    "outputExample": "$ find /usr/bin -perm -4000\n/usr/bin/sudo\n/usr/bin/su\n/usr/bin/passwd\n/usr/bin/pkexec",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm16",
    "question": "A security scan reported 'world-writable files' on your server and you need to locate every file that any user on the system can modify. What command finds files with the world-write bit set?",
    "answer": "find / -perm -2",
    "explanation": "\"World-writable\" means any user logged into the system — whether they're an administrator, a service account, or a low-privileged user — can write to and modify that file. This is a serious security concern for anything that isn't a scratch area like /tmp: a world-writable config file means any user could sabotage the application it configures. This command hunts down every such file so you can review and fix them.",
    "usage": "Find all files that any system user can write to — a key security audit command for detecting dangerous world-writable file misconfigurations.",
    "examples": [
      "find / -perm -2 -type f 2>/dev/null  # world-writable regular files only",
      "find /home -perm -2  # check home directories for over-permissive files",
      "find /var -perm -2 -not -type l 2>/dev/null  # exclude symlinks",
      "find / -perm -2 -type f -not -path '/proc/*' -not -path '/sys/*' 2>/dev/null"
    ],
    "memoryTip": "'find -perm -2' = 'find world-writable'. Like finding files that anyone on the system can modify.",
    "outputExample": "$ find /etc -perm -2 -type f 2>/dev/null\n/etc/some-misconfigured-script.sh\n# Any result here is a security issue — /etc files should not be world-writable",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm17",
    "question": "You've been added to a server as a standard user and need to understand what administrative commands you're permitted to run with elevated privileges before attempting anything. What command lists your sudo permissions?",
    "answer": "sudo -l",
    "explanation": "Before attempting an administrative task, it's useful to check whether your account has been granted permission to perform it. This command reads your sudo configuration and prints a human-readable list of exactly what you're allowed to do — which commands, on which systems, and whether you need a password. It's like reading your access badge permissions before walking into a restricted area.",
    "usage": "List your sudo permissions — tells you exactly which commands you can run with elevated privileges before attempting them.",
    "examples": [
      "sudo -l  # list your sudo permissions",
      "sudo -l -U alice  # check alice's permissions (requires root)",
      "sudo whoami  # test that sudo actually works and elevates to root"
    ],
    "memoryTip": "'sudo -l' = 'sudo list'. Like checking your admin privileges to see what you can do as root.",
    "outputExample": "$ sudo -l\nUser alice may run the following commands on webserver:\n    (ALL : ALL) ALL\n# or more restricted:\n    (root) /usr/bin/apt, /usr/sbin/nginx",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm18",
    "question": "After deploying your application to /var/www/myapp, you need every file and directory inside it to be owned by the www-data user and www-data group so the web server can read and write them all. What command recursively changes ownership throughout the entire directory?",
    "answer": "sudo chown -R apache:apache /var/www/myapp",
    "explanation": "Changing the owner of a folder normally only affects that one folder, leaving all the files inside belonging to whoever put them there. Adding the recursive option applies the ownership change to every file, every subfolder, and every file inside every subfolder throughout the entire tree — no matter how deeply nested. It's like re-labeling every item in a filing cabinet at once rather than one drawer at a time.",
    "usage": "Recursively change the owner and group of an entire directory tree — the standard setup step for application deployments.",
    "examples": [
      "sudo chown -R www-data:www-data /var/www/myapp  # web server ownership",
      "sudo chown -R alice:developers /srv/project/  # project folder for a developer",
      "sudo chown -R :developers /srv/shared/  # change group only throughout the tree",
      "sudo chown -R alice:alice /home/olduser/  # transfer old user's files"
    ],
    "memoryTip": "'chown -R' = 'chown recursive'. Like giving away a whole folder and everything inside it to someone else.",
    "outputExample": "$ sudo chown -R www-data:www-data /var/www/myapp\n$ ls -la /var/www/myapp/\ndrwxr-xr-x 3 www-data www-data 4096 May 17 .\n-rw-r--r-- 1 www-data www-data 2048 May 17 index.html",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm19",
    "question": "You are creating /tmp/shared-workspace where all users can create files, but you want to prevent users from deleting files that don't belong to them. What special permission bit makes a shared directory respect file ownership for deletions?",
    "answer": "chmod +t /tmp/shared-workspace",
    "explanation": "In a folder where everyone can write (like a shared workspace), normally any user with write permission on the folder can delete anyone else's files inside it. The sticky bit is a special protective flag for directories: with it set, you can only delete files that you own, even if you have write permission on the folder itself. It's how /tmp works on every Linux system — anyone can create files there, but only the creator can delete their own files.",
    "usage": "Set the sticky bit on a shared directory so users can only delete their own files — the standard protection for multi-user scratch spaces.",
    "examples": [
      "chmod +t /tmp/shared-workspace  # sticky bit: users can only delete their own files",
      "chmod 1777 /srv/shared-uploads  # sticky + world-writable in one command",
      "ls -ld /tmp  # verify: should show 'drwxrwxrwt' (the 't' is the sticky bit)",
      "chmod -t /tmp/shared-workspace  # remove sticky bit"
    ],
    "memoryTip": "'chmod +t' = 'chmod sticky'. Like a directory where you can only touch your own stuff, not others'.",
    "outputExample": "$ chmod +t /tmp/shared-workspace\n$ ls -ld /tmp/shared-workspace\ndrwxrwxrwt 2 alice alice 4096 May 17 /tmp/shared-workspace\n# The 't' at the end confirms the sticky bit is set",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm20",
    "question": "You're writing a deployment script that needs to read a file's current permission value as a number like 755 so it can check whether the file needs to be reconfigured. What command outputs just the octal permission number for a file?",
    "answer": "stat -c '%a' /tmp/upload.bin",
    "explanation": "The normal directory listing shows permissions as a letter code like rwxr-xr-x which is readable to humans but awkward for programs. This command outputs the same information as the number that chmod uses — like 755 or 644 — making it easy for a script to read, compare, and act on. It's the programmatic interface to file permissions.",
    "usage": "Output a file's permissions as an octal number like 755 — the scriptable way to read permissions for comparison or conditional logic.",
    "examples": [
      "stat -c '%a' /etc/nginx/nginx.conf  # show octal permissions",
      "stat -c '%a %n' /etc/nginx/*  # permissions and filename for all nginx configs",
      "PERMS=$(stat -c '%a' deploy.sh) && echo \"Permissions: $PERMS\"  # capture in script",
      "stat /etc/nginx/nginx.conf  # full metadata including all timestamps"
    ],
    "memoryTip": "'stat -c '%a'' = 'stat octal'. Like getting the numeric code that represents the permission settings.",
    "outputExample": "$ stat -c '%a' /etc/nginx/nginx.conf\n644\n$ stat -c '%a' /usr/local/bin/deploy\n755",
    "category": "PERMISSIONS"
  },
  {
    "id": "pipe1",
    "question": "You ran 'ls -lh /var/www/html' and want to save the directory listing to a file called filelist.txt for a report — overwriting any previous version of that file. What operator redirects a command's standard output into a file?",
    "answer": "command > file.txt",
    "explanation": "Normally, when a command finishes it prints its results directly to your screen and they're gone when you close the terminal. Adding this operator is like aiming the output away from your screen and into a file instead — the file captures everything the command would have printed. If the file already exists, it gets completely replaced with the new output.",
    "usage": "Redirect a command's standard output into a file — creates the file if needed, or overwrites it completely if it exists.",
    "examples": [
      "ls -lh /var/www/html > filelist.txt  # save directory listing",
      "echo 'server_name localhost;' > /tmp/nginx-test.conf  # one-line file creation",
      "date > /tmp/deploy-timestamp.txt  # snapshot current date",
      "make > build.log  # capture stdout; errors still go to terminal",
      "> empty.txt  # zero-byte 'truncate' trick — same as `: > empty.txt`"
    ],
    "memoryTip": "`>` = arrow pointing INTO a file. ONE arrow = overwrite. TWO arrows (`>>`) = append. Mnemonic: a single `>` is a sharp 'replace' — it clobbers. Only catches stdout (channel 1); for stderr use `2>`.",
    "outputExample": "$ echo 'hello' > greeting.txt\n$ cat greeting.txt\nhello\n$ echo 'world' > greeting.txt\n$ cat greeting.txt\nworld",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe2",
    "question": "You have a running deployment script that logs to build.log and you want each new run to add its output to the end of the file without erasing previous run records. What operator appends standard output to a file without overwriting it?",
    "answer": "command >> file.txt",
    "explanation": "Instead of replacing a file's contents each time, this operator adds new output to the bottom of whatever was already there. It's like adding entries to a running journal rather than starting a new page — previous content stays intact and new content accumulates at the end. If the file doesn't exist yet, it gets created.",
    "usage": "Append standard output to the end of a file — adds to existing content rather than replacing it.",
    "examples": [
      "echo '[DEPLOY] Started' >> /var/log/deploy.log  # add one line to the log",
      "date >> /var/log/access.log  # append a timestamp; existing log preserved",
      "echo 'export PATH=$PATH:~/bin' >> ~/.bashrc  # add a line to your shell config",
      "make 2>> build-errors.log  # APPEND stderr only to errors log",
      "./script.sh >> output.log 2>&1  # append both stdout and stderr"
    ],
    "memoryTip": "ONE `>` = overwrite. TWO `>>` = append (think 'extra hop, extra arrow'). Pair-think: `> file` is destructive once you press Enter — `>> file` is safe to repeat. When in doubt about a log file, always use `>>`.",
    "outputExample": "$ echo 'line 1' > log.txt\n$ echo 'line 2' >> log.txt\n$ echo 'line 3' >> log.txt\n$ cat log.txt\nline 1\nline 2\nline 3",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe3",
    "question": "You want to run the tr command (which only reads from stdin, not from a file argument) on the contents of notes.txt to convert lowercase to uppercase. What operator feeds a file's contents into a command's standard input?",
    "answer": "command < input.txt",
    "explanation": "This operator is the mirror image of the output redirect — instead of sending output to a file, it feeds a file's contents into the command as if someone had typed that file's text at the keyboard. It's particularly useful for commands that can only read from the keyboard (stdin) and don't accept a filename argument.",
    "usage": "Feed a file's contents as standard input to a command — useful for tools that only read from stdin or when you want output without filename annotations.",
    "examples": [
      "tr 'a-z' 'A-Z' < notes.txt  # uppercase a file (tr can't take a filename arg)",
      "mysql mydb < schema.sql  # run SQL script against the 'mydb' database",
      "mail -s 'Daily report' boss@company.com < report.txt  # email a file as body",
      "wc -l < /etc/passwd  # line count, no filename in output (cleaner for scripts)",
      "while read line; do echo \"got: $line\"; done < urls.txt  # bash loop over a file"
    ],
    "memoryTip": "`<` = arrow pointing FROM a file INTO the command. Mirror image of `>`. Most everyday commands don't need it (they accept filenames), but for tools that ONLY read stdin (`tr`, `mail`, DB clients), `<` is the bridge.",
    "outputExample": "$ cat names.txt\ncharlie\nalice\nbob\n$ sort < names.txt\nalice\nbob\ncharlie\n$ wc -l < /etc/passwd\n47",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe4",
    "question": "You want to filter the output of 'ps aux' to show only lines mentioning 'nginx' — without saving to a temporary file. What operator connects one command's output directly into another command's input?",
    "answer": "command1 | command2",
    "explanation": "Instead of saving a command's output to a temporary file and then reading that file with the next command, this operator connects them directly — the output from the first flows instantly into the input of the second, like a water pipe between two processing stations. You can chain as many stages as you need, each one transforming or filtering the data it receives.",
    "usage": "Connect two commands so the first command's output becomes the second command's input — the fundamental Unix composition operator.",
    "examples": [
      "ps aux | grep nginx  # filter running processes for nginx",
      "ls | grep '.txt'  # list current dir, keep only lines with .txt",
      "cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head  # top-10 IPs",
      "echo 'hello' | tr 'a-z' 'A-Z'  # HELLO",
      "find . -type f | wc -l  # count files in this tree"
    ],
    "memoryTip": "`|` (vertical bar) = pipe. Reads left-to-right like a flowchart: 'take this, then this, then this'. Stdout of left → stdin of right. The fundamental Unix combinator — small tools, big results.",
    "outputExample": "$ ps aux | grep nginx | grep -v grep\nalice   1234  2.1  4.5 ... nginx: master process\nalice   1235  0.1  0.5 ... nginx: worker process\n$ ls | wc -l\n12",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe5",
    "question": "You are running 'find / -name sshd_config' which produces hundreds of 'Permission denied' lines mixed in with the real results. What redirect captures only the error messages so the real output remains clean on your terminal?",
    "answer": "command 2> error.log",
    "explanation": "Commands produce two kinds of output: normal results and error messages. Normally they both appear on your screen mixed together, which is confusing when you're looking for actual results buried in a flood of errors. This redirect sends the error messages to a file while the normal results continue printing to your screen — separating the two streams so each is useful on its own.",
    "usage": "Redirect error messages (stderr) to a file while leaving normal output printing to the terminal — separates errors from results.",
    "examples": [
      "find / -name sshd_config 2> /dev/null  # discard all 'Permission denied' noise",
      "make 2> build-errors.log  # only errors captured; build output still on screen",
      "command > stdout.log 2> stderr.log  # separate files for each stream",
      "command > all.log 2>&1  # MERGE: send stderr to wherever stdout goes (the file)",
      "command 2>&1 | grep -i error  # pipe both streams to grep (after merge)"
    ],
    "memoryTip": "`1>` = stdout, `2>` = stderr. The number is the file descriptor. `2>&1` means 'channel 2 follows channel 1's current destination'. Order matters: `> file 2>&1` merges to file; `2>&1 > file` keeps stderr on the terminal.",
    "outputExample": "$ find / -name sshd_config\nfind: '/root': Permission denied\nfind: '/proc/tty': Permission denied\n/etc/ssh/sshd_config\n$ find / -name sshd_config 2> /dev/null\n/etc/ssh/sshd_config",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe6",
    "question": "You are running a build script and want everything — both normal build output and any error messages — saved together in one log file. What bash shorthand redirects both stdout and stderr to the same file simultaneously?",
    "answer": "command &> file.txt",
    "explanation": "Normally, normal output and error messages are separate streams. Sometimes you just want everything in one place — a single log file that captures all of a command's output regardless of which stream it came from. This shorthand is the quickest way to achieve that.",
    "usage": "Capture both standard output and error messages in a single file — the simplest way to get a complete command log.",
    "examples": [
      "make &> build.log  # capture stdout AND stderr in one file",
      "./deploy.sh &> /dev/null  # silence everything",
      "command > all.log 2>&1  # POSIX-portable equivalent — works in sh too",
      "./script.sh &> script.log; echo \"exit code: $?\"  # log everything + check exit code"
    ],
    "memoryTip": "`&>` = 'redirect & (and) everything-output-related'. Bash-only. Portable equivalent: `> file 2>&1` (note the order: redirect 1 FIRST, then dup 2 to 1). To APPEND both streams, use `&>>` instead.",
    "outputExample": "$ ./deploy.sh &> deploy.log\n$ cat deploy.log\nStarting deployment...\nls: cannot access '/opt/app-v3': No such file or directory\nDeploy completed with warnings.",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe7",
    "question": "You want to write a script that generates a multi-line nginx configuration block inline — embedding several lines of text into a command without creating a separate template file. What shell syntax feeds a block of literal text to a command's stdin?",
    "answer": "command << EOF content EOF",
    "explanation": "Instead of creating a separate text file to feed into a command, you can embed the text directly in your script between special marker lines. Everything between the opening marker and the matching closing marker is treated as the command's input — as if someone had typed those lines at the keyboard. This makes scripts self-contained without needing external template files.",
    "usage": "Embed multi-line text directly in a script as standard input to a command — no external file needed.",
    "examples": [
      "cat << EOF > /etc/nginx/sites-available/mysite\nserver {\n    listen 80;\n    server_name mysite.com;\n}\nEOF",
      "cat << 'EOF'\n$HOME is not expanded with quoted delimiter\nEOF",
      "mysql mydb << SQL\nSELECT * FROM users WHERE active = 1;\nSQL",
      "ssh webserver 'bash -s' << 'REMOTE'\necho 'running on' $(hostname)\nsystemctl restart nginx\nREMOTE"
    ],
    "memoryTip": "`<<` = here-document (literal text input). Pick any MARKER (convention: `EOF`). Quote it (`<< 'EOF'`) to TURN OFF variable expansion. `<<-` strips leading tabs for clean indented blocks. Cousin: `<<<` (three) = here-STRING (one line of input).",
    "outputExample": "$ cat << EOF > greeting.txt\n> Hello, $USER\n> Today is $(date +%A)\n> EOF\n$ cat greeting.txt\nHello, alice\nToday is Friday",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe8",
    "question": "You are running 'find / -name passwd' and it produces thousands of 'Permission denied' error lines along with a few actual results. You want only the real results displayed with no error clutter. How do you discard all error output by redirecting it to the special discard device?",
    "answer": "command > /dev/null",
    "explanation": "Linux has a special virtual file that acts like a bottomless trash can — anything you write to it disappears instantly without taking up any space. By redirecting unwanted output (usually error messages) to this virtual trash can, you can clean up noisy command output while keeping the useful parts visible on your screen.",
    "usage": "Discard command output completely by redirecting to /dev/null — use selectively for stdout, stderr, or both.",
    "examples": [
      "find / -name sshd_config 2> /dev/null  # find without Permission denied spam",
      "command > /dev/null 2>&1  # discard EVERYTHING — caller only sees exit code",
      "command &> /dev/null  # same, bash shorthand",
      "if ping -c1 8.8.8.8 > /dev/null 2>&1; then echo connected; fi  # silent reachability check",
      "command < /dev/null  # provide empty stdin (instant EOF)"
    ],
    "memoryTip": "`/dev/null` = the bit bucket. Anything written there vanishes. Reading from it = empty. Mnemonic: 'write-only black hole'. To silence ONLY errors, use `2> /dev/null`. To silence everything, `> /dev/null 2>&1` or `&> /dev/null`.",
    "outputExample": "$ find / -name passwd 2>&1 | wc -l\n452\n$ find / -name passwd 2> /dev/null | wc -l\n3",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe9",
    "question": "You want to change into /tmp/build-workspace and then run make — but only if the directory change actually succeeded. What operator runs the second command only when the first one exits with success?",
    "answer": "command1 && command2",
    "explanation": "Normally, when you put two commands on the same line separated by a semicolon, the second one runs regardless of whether the first succeeded or failed. This operator adds a condition: \"only proceed if the previous step worked.\" It's the digital equivalent of \"and only then\" — if step one fails, the whole chain stops and step two never runs. This is a critical safety mechanism for sequences where later steps depend on earlier ones.",
    "usage": "Chain two commands so the second runs only if the first succeeded — the essential safety operator for dependent command sequences.",
    "examples": [
      "mkdir /tmp/build-workspace && cd /tmp/build-workspace  # cd only if mkdir succeeded",
      "make && sudo make install  # install only if build succeeded",
      "ping -c1 8.8.8.8 && echo 'network is up'  # echo only if ping returned 0",
      "command || echo 'FAILED'  # opposite: echo only if command FAILED",
      "test -f deploy.sh && chmod +x deploy.sh"
    ],
    "memoryTip": "`&&` = 'and only then'. Mirror operator: `||` = 'or else'. Mental model: short-circuit boolean logic — bash stops evaluating once the result is decided. Every chain step DEPENDS on its predecessor's exit code; use `;` instead if you want sequential-but-independent.",
    "outputExample": "$ true && echo ok\nok\n$ false && echo ok\n$ mkdir /tmp/test && cd /tmp/test && pwd\n/tmp/test",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe10",
    "question": "You want to run three diagnostic commands — show the current date, system uptime, and disk usage — one after another on a single line, where each runs regardless of whether the previous one failed. What separator runs commands sequentially and unconditionally?",
    "answer": "command1 ; command2",
    "explanation": "Sometimes you just want to run several commands one after another with no conditions attached — each one runs whether the previous succeeded or failed. The semicolon separator is the \"next\" without any judgment. It's useful for independent status-checking commands or cleanup operations where it doesn't matter if an individual step encounters an error.",
    "usage": "Run multiple commands in sequence with no dependency between them — each runs unconditionally after the previous one finishes.",
    "examples": [
      "date ; uptime ; free -h  # three independent status reports",
      "echo 'start' ; ./deploy.sh ; echo 'end'  # bracket a script with markers",
      "cd /tmp && rm -rf junk  # SAFER than cd /tmp ; rm -rf junk for dependent steps",
      "date; df -h; ps aux | head  # quick system snapshot on one line"
    ],
    "memoryTip": "`;` = 'next, no matter what'. `&&` = 'next only if win'. `||` = 'next only if lose'. `&` = 'next in parallel'. When chaining commands that depend on each other, NEVER use `;` — use `&&`.",
    "outputExample": "$ false ; echo 'still ran'\nstill ran\n$ date ; uptime\nFri May 15 14:32:10 UTC 2026\n 14:32:10 up 3 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe11",
    "question": "Your hourly cron job runs a backup script and you want all its output — both normal messages and any error messages — appended to /var/log/backup.log without overwriting previous run records. What operator appends both stdout and stderr to a file?",
    "answer": "command &>> file.txt",
    "explanation": "This is the combination of two things you've seen before: capturing both normal output and error messages together (like &>), and adding to the end of a file rather than replacing it (like >>). It's the right tool for cron job logging where you want a complete, growing record of every run in a single file.",
    "usage": "Append both stdout and stderr to a file without overwriting it — the right operator for accumulating cron job logs.",
    "examples": [
      "./backup.sh &>> /var/log/backup.log  # accumulate all output across runs",
      "make &>> build.log  # append (won't wipe previous build output)",
      "command >> all.log 2>&1  # POSIX-portable append-both equivalent",
      "echo '--- run at '$(date)' ---' >> /var/log/job.log; ./script.sh &>> /var/log/job.log"
    ],
    "memoryTip": "`&>` truncates. `&>>` appends. Same difference as `>` vs `>>` but for both streams. Bash-only — for portable scripts use `>> file 2>&1`.",
    "outputExample": "$ ./backup.sh &>> /var/log/backup.log\n$ ./backup.sh &>> /var/log/backup.log\n$ cat /var/log/backup.log\nRun 1: backing up /home...\nRun 1: done, 2.3G copied\nRun 2: backing up /home...\nRun 2: done, 2.3G copied",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe12",
    "question": "In a deployment script, if the main deploy command fails you want to immediately print an error message. What operator runs a fallback command only when the preceding command exits with an error?",
    "answer": "command1 || command2",
    "explanation": "This operator is the \"or else\" counterpart to the \"and then\" operator. Instead of running the next command when the previous one succeeds, it runs the next command only when the previous one fails. It's useful for error handling, fallback behaviors, and ensuring that something always happens even when the primary step breaks.",
    "usage": "Run a fallback or error-handling command only when the preceding command fails — the essential operator for error recovery and defensive scripting.",
    "examples": [
      "./deploy.sh || echo 'DEPLOY FAILED — check logs'",
      "[ -d /tmp/cache ] || mkdir -p /tmp/cache  # create only if missing",
      "ping -c1 10.0.0.1 || echo 'host unreachable'",
      "git pull || exit 1  # bail on failure (common in deploy scripts)",
      "command || { echo 'failed'; cleanup; exit 1; }  # multi-command fallback"
    ],
    "memoryTip": "`||` = 'or else'. Mirror of `&&` ('and then'). The pair (`&&`/`||`) is bash's short-circuit boolean logic. For complex branches use proper `if`/`then`/`else` — chained `&&`/`||` has a subtle pitfall when the middle command fails.",
    "outputExample": "$ true || echo 'fallback'\n$ false || echo 'fallback'\nfallback\n$ [ -d /tmp/work ] || mkdir /tmp/work  # idempotent setup",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe13",
    "question": "Your backup script runs nightly via cron and you want its error messages appended to /var/log/backup-errors.log across each run, while the normal output still prints to the terminal (or wherever stdout goes). What redirect appends only stderr to a file?",
    "answer": "command 2>> error.log",
    "explanation": "This is the append mode version of stderr redirection. Instead of replacing the error log with each run, new error messages are added to the end of whatever was already logged there. This lets you build up a history of errors over time — each night's errors accumulate after the previous nights' errors — so you can see patterns or investigate when something first went wrong.",
    "usage": "Append only error messages (stderr) to a file while leaving normal output unaffected — builds up an error history across multiple runs.",
    "examples": [
      "./backup.sh 2>> /var/log/backup-errors.log  # accumulate errors only",
      "command >> /var/log/output.log 2>> /var/log/errors.log  # separate logs, both appended",
      "make 2>> build-errors.log  # add today's build errors to the log",
      "find / -name '*.conf' 2>> perm-errors.log  # accumulate permission errors from find"
    ],
    "memoryTip": "`2>>` = stderr append. `>>` (no digit) = stdout append. The digit `2` always means stderr — prefix any redirection with `2` to target errors specifically.",
    "outputExample": "$ ls /nope 2>> errors.log\n$ ls /also-nope 2>> errors.log\n$ cat errors.log\nls: cannot access '/nope': No such file or directory\nls: cannot access '/also-nope': No such file or directory",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe14",
    "question": "You're running a long build and want to watch the output live on your terminal AND have it saved to build.log simultaneously — so you don't have to choose between seeing it now and having a record. What command splits output to both the screen and a file at the same time?",
    "answer": "command | tee file.txt",
    "explanation": "When you redirect output to a file, it disappears from your screen. When you don't redirect, it stays on screen but doesn't get saved. This command solves that dilemma by acting like a T-junction in a pipe — it reads the stream and sends it in two directions at once: both to the file and to your screen. You see everything live and end up with a complete file record.",
    "usage": "See output live on screen AND save it to a file at the same time — the T-junction for command output.",
    "examples": [
      "make 2>&1 | tee build.log  # save build output while watching live",
      "./deploy.sh | tee -a /var/log/deploy.log  # append (don't truncate)",
      "echo 'worker_processes 4;' | sudo tee /etc/nginx/nginx.conf  # the sudo-redirect workaround",
      "make | tee build.log | grep ERROR  # full log saved, only errors on screen"
    ],
    "memoryTip": "`tee` = T-pipe-junction (one stream in, two out). Use cases: (1) see-AND-save, (2) the famous `sudo tee` trick for writing to root-owned files. Append mode: `-a`.",
    "outputExample": "$ ls -la | tee listing.txt | head -3\ntotal 24\ndrwxr-xr-x 4 alice alice 4096 May 15 10:00 .\ndrwxr-xr-x 5 root  root  4096 May  1 09:00 ..\n$ wc -l listing.txt\n8 listing.txt  # full output was saved",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe15",
    "question": "You want to run 'dmesg' and save its output to two places simultaneously: a local log file and a dated archive file. What command writes the same input stream to multiple destination files at once?",
    "answer": "command | tee file1.txt file2.txt",
    "explanation": "Just as a T-junction in plumbing can split one pipe into two, tee can send one stream of data to multiple destinations at once. You list as many destination files as you need, and each one gets an identical copy of everything that passes through. This is useful when you need the same output in multiple places without reading or running the command multiple times.",
    "usage": "Write the same stream to multiple files simultaneously — avoids re-running expensive commands when you need output in multiple places.",
    "examples": [
      "dmesg | tee /var/log/boot.log /var/log/archive/boot-$(date +%F).log",
      "./build.sh | tee -a build.log archive/build-$(date +%F).log  # append to both",
      "dd if=/dev/sda | tee >(gzip > backup.gz) >(sha256sum > backup.sha) > /dev/null",
      "echo 'test line' | tee /tmp/a /tmp/b /tmp/c  # same content in three files"
    ],
    "memoryTip": "Multiple files = multiple copies. The killer pattern is `tee >(cmd1) >(cmd2)` for fan-out to OTHER commands (bash-only process substitution).",
    "outputExample": "$ date | tee /var/log/boot.log /var/log/archive/boot-2026-05-17.log\nFri May 17 14:32:10 UTC 2026\n$ cat /var/log/boot.log\nFri May 17 14:32:10 UTC 2026",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe16",
    "question": "You want to write a script that creates an nginx server block configuration file using inline text rather than an external template file. What shell syntax lets you type multi-line content directly in a script and feed it as input to a command?",
    "answer": "command << EOF content EOF",
    "explanation": "A here-document lets you write multi-line text directly inside your script surrounded by a pair of delimiter words. Everything between the opening and closing delimiter is treated as if it came from a file. This keeps your script self-contained — no need for separate template files that could be missing when the script runs.",
    "usage": "Embed multi-line literal text directly in a script as stdin for any command — produces self-contained scripts without external template files.",
    "examples": [
      "cat << EOF > /etc/nginx/sites-available/myapp\nserver {\n    listen 80;\n    server_name myapp.com;\n    root /var/www/myapp;\n}\nEOF",
      "mail user@domain.com << EOF\nSubject: Deployment complete\n\nThe deployment finished at $(date).\nEOF",
      "mysql mydb << SQL\nSELECT * FROM users WHERE active = 1;\nSQL"
    ],
    "memoryTip": "'<< EOF' = 'here document'. Like writing a letter directly in the command, ending with your signature (EOF).",
    "outputExample": "$ cat << END\n> Hello\n> World\n> END\nHello\nWorld",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe17",
    "question": "You have a string stored in a shell variable and want to pass it directly as input to grep without using a pipe or a temporary file. What three-angle-bracket operator feeds a single string as stdin to a command?",
    "answer": "command <<< 'string input'",
    "explanation": "This operator is a compact way to hand a single line of text directly to a command as its input, as if you had typed that text at the keyboard. Instead of using a pipe from echo or creating a file, you just write the text right there in the command. It's cleaner and faster for one-liner situations where you have a variable or a short string to process.",
    "usage": "Feed a single string directly as standard input to a command — cleaner than echo | for variable-based inputs.",
    "examples": [
      "grep 'error' <<< 'this line has an error in it'  # search string directly",
      "wc -c <<< 'hello world'  # count characters in string",
      "grep -q 'root' <<< \"$(cat /etc/passwd | head -1)\" && echo 'root is first'",
      "tr 'a-z' 'A-Z' <<< \"$my_variable\"  # process a variable"
    ],
    "memoryTip": "'<<<' = 'here string'. Like feeding a string directly into a command's input stream. Three arrows for one string; two arrows (<<) for multi-line blocks.",
    "outputExample": "$ wc -w <<< 'The quick brown fox'\n4\n$ grep 'error' <<< 'connection error occurred'\nconnection error occurred",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe18",
    "question": "You want to count how many nginx processes are currently running by listing all processes, keeping only the nginx-related lines, and then counting those lines — all in a single expression. What construct chains multiple commands so each one's output flows into the next?",
    "answer": "command1 | command2 | command3",
    "explanation": "Pipelines connect multiple specialized tools in sequence — the output of each one becomes the raw material for the next. Each tool does one job well (list processes, filter lines, count lines) and the combination accomplishes something none of them could do alone. This is the Unix philosophy in action: small, composable tools chained into powerful workflows.",
    "usage": "Chain multiple commands into a pipeline where each transforms the stream — the fundamental Unix composition pattern.",
    "examples": [
      "ps aux | grep nginx | wc -l  # how many nginx processes are running",
      "cat /var/log/nginx/error.log | grep 'error' | wc -l  # count error lines",
      "ps aux | grep apache | awk '{print $2}' | xargs kill  # kill apache processes",
      "find . -name '*.log' | xargs grep 'ERROR' | sort | uniq -c | sort -rn"
    ],
    "memoryTip": "'|' chain = 'pipeline assembly line'. Like passing work through multiple stations, each doing their part. All commands run concurrently.",
    "outputExample": "$ ps aux | grep nginx | grep -v grep | wc -l\n3\n$ cat names.txt | sort | uniq | wc -l\n15",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe19",
    "question": "You want to read names from names.txt, sort them alphabetically, and save the sorted result to sorted-names.txt — all in one command that reads from one file and writes to another. What command combines both input and output redirection?",
    "answer": "sort < names.txt > sorted.txt",
    "explanation": "You can combine the input-from-file and output-to-file redirects in a single command. The file on the left of < feeds in the data to be processed, and the file on the right of > receives the processed output. Think of the command sitting in the middle of a pipeline: data flows in from one file, gets transformed, and flows out to another.",
    "usage": "Process a file as input and save the output to another file in one command — combines input and output redirection.",
    "examples": [
      "sort < names.txt > sorted-names.txt  # sort file and save result",
      "grep 'active' < users.csv > active-users.csv  # filter and save",
      "tr 'a-z' 'A-Z' < notes.txt > NOTES-UPPER.txt  # transform and save"
    ],
    "memoryTip": "'< input > output' = 'in and out'. Like taking input from one file and sending results to another.",
    "outputExample": "$ sort < names.txt > sorted-names.txt\n$ head -3 sorted-names.txt\nAlice\nBob\nCharlie",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe20",
    "question": "Your cron job runs a maintenance script and sends you email every time it produces output. You want the job to run completely silently — no output from stdout or stderr — so it only emails you when something actually breaks. What redirect suppresses all output from a command?",
    "answer": "command > /dev/null 2>&1",
    "explanation": "This redirect combination sends everything the command produces — both normal output and error messages — into the virtual trash can, making the command run in complete silence. Cron sends email when a job produces output, so silencing everything prevents the daily noise while still running the maintenance tasks.",
    "usage": "Suppress all output from a command — both stdout and stderr — so it runs completely silently.",
    "examples": [
      "/usr/local/bin/backup.sh > /dev/null 2>&1  # silent cron job",
      "command &> /dev/null  # same, bash shorthand",
      "if ping -c1 8.8.8.8 > /dev/null 2>&1; then echo 'connected'; fi",
      "apt-get update > /dev/null 2>&1 && echo 'updated silently'"
    ],
    "memoryTip": "'> /dev/null 2>&1' = 'black hole redirect'. Like throwing everything into a trash can that never fills up. Order matters: stdout first, then redirect stderr to follow it.",
    "outputExample": "$ noisy_command > /dev/null 2>&1\n$ echo $?\n0  # exit code preserved even though output was discarded",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "proc1",
    "question": "Your system is running slowly and you suspect a runaway process is consuming CPU. What command shows a snapshot of every process from every user, with CPU usage, memory usage, and the command that launched each one?",
    "answer": "ps aux",
    "explanation": "This command is like taking a photograph of everything running on your computer at this exact moment. Every program, every background service, every scheduled task — each one appears as a row with columns telling you who owns it, how much CPU and memory it's using, and what it actually is. It's the first thing you check when diagnosing a performance problem.",
    "usage": "Get a complete snapshot of all running processes system-wide — the starting point for any process-related investigation.",
    "examples": [
      "ps aux  # everything, everyone — the standard starting point",
      "ps aux | grep nginx  # find nginx PIDs",
      "ps aux --sort=-%cpu | head  # the 10 worst CPU offenders right now",
      "ps aux --sort=-%mem | head  # the 10 worst memory offenders",
      "ps -ef  # System V style — adds PPID column, useful on non-Linux Unix",
      "ps -u alice  # only processes owned by user alice"
    ],
    "memoryTip": "Two ps dialects exist: BSD (`ps aux`, no dashes) and System V (`ps -ef`, with dashes). Mnemonic for `aux`: All Users eXtended. Sister tools: `top`/`htop` (live view), `pgrep` (find PID by name), `pstree` (tree view).",
    "outputExample": "$ ps aux | head -5\nUSER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot           1  0.0  0.1 168720 11264 ?        Ss   May14   0:02 /sbin/init\nroot         412  0.0  0.0  35200  6144 ?        Ss   May14   0:00 /lib/systemd/systemd-journald\nalice       1872  0.2  0.4 412000 65536 tty1     Sl   09:14   0:18 /usr/bin/gnome-shell\nalice       2412 12.5  3.1 2400000 524288 ?      Sl   09:15   1:42 /usr/lib/firefox/firefox",
    "category": "PROCESSES"
  },
  {
    "id": "proc2",
    "question": "A process is behaving unexpectedly and you want to see which other processes launched it and which child processes it has spawned — the full family tree. What command shows all processes as an indented hierarchy with their parent-child relationships?",
    "answer": "pstree",
    "explanation": "Every process on Linux was started by another process — just like how every employee was hired by a manager. This command draws the entire organizational chart of processes as a tree diagram, with the very first process at the top and all its descendants branching below it. You can immediately see which parent started which children and how they all relate.",
    "usage": "Visualize the entire process hierarchy as an indented tree — immediately shows parent-child relationships that ps aux doesn't make obvious.",
    "examples": [
      "pstree  # the full tree, names only",
      "pstree -p  # add PIDs in parentheses — most useful flag",
      "pstree -a  # also show the command-line arguments of each process",
      "pstree alice  # only the branches owned by user alice",
      "pstree -p 1234  # tree rooted at PID 1234 (just that subtree)",
      "ps -ef --forest  # alternative tree view from plain ps"
    ],
    "memoryTip": "`pstree` = process tree. PID 1 (systemd/init) is the root ancestor of EVERYTHING. If a parent dies before its child, the child becomes an ORPHAN and is adopted by PID 1.",
    "outputExample": "$ pstree -p | head -8\nsystemd(1)-+-sshd(1432)---sshd(2001)---bash(2003)---vim(2412)\n           |-nginx(1832)-+-nginx(1833)\n           |              `-nginx(1834)\n           `-gnome-terminal(2500)---bash(2501)---pstree(3000)",
    "category": "PROCESSES"
  },
  {
    "id": "proc3",
    "question": "Firefox has become unresponsive and the GUI close button is doing nothing. After finding its PID with ps aux, what command sends it a polite 'please shut down' request that gives it a chance to clean up before exiting?",
    "answer": "kill PID",
    "explanation": "Despite the dramatic name, this command doesn't instantly destroy a process — it sends a message to the process asking it to stop. The default message is a polite request, and a well-behaved program will finish what it's doing, save any open files, and exit cleanly. If the program is frozen and ignores your polite request, there's a more forceful version that the kernel enforces regardless.",
    "usage": "Send a graceful shutdown request to a process — try this before reaching for the more forceful kill -9.",
    "examples": [
      "kill 2412  # send SIGTERM — the polite shutdown request",
      "kill -15 2412  # same thing, signal 15 explicitly",
      "kill -9 2412  # the nuclear option (SIGKILL) — when SIGTERM was ignored",
      "kill -HUP 1832  # 'hang up' — many daemons reload their config on this",
      "kill %1  # kill background job number 1 from jobs (no PID needed)",
      "kill -0 2412  # send no signal, just check if PID 2412 exists (exit code 0 = yes)"
    ],
    "memoryTip": "Escalation ladder: SIGTERM (15, 'please stop') → wait a few seconds → SIGKILL (9, 'die now'). Family: `kill PID` (one PID), `killall name` (all by exact name), `pkill pattern` (all matching regex).",
    "outputExample": "$ pgrep firefox\n2412\n$ kill 2412\n$ pgrep firefox\n$ # (empty — firefox exited cleanly after SIGTERM)",
    "category": "PROCESSES"
  },
  {
    "id": "proc4",
    "question": "You want to start a long-running build script that may take an hour, but you don't want to sit watching it — you want your terminal prompt back immediately so you can do other work while it runs. What shell syntax starts a command without waiting for it to finish?",
    "answer": "./build.sh &",
    "explanation": "Normally when you run a command, your terminal freezes until it finishes — you can't type anything or run other commands. Adding this symbol at the end of a command changes that: the command starts running, but you get your prompt back immediately. The command runs \"in the background\" simultaneously with whatever else you do in the terminal.",
    "usage": "Start a command and return the prompt immediately — the command continues running concurrently in the background.",
    "examples": [
      "./build.sh &  # start, return to prompt; output still mixes into terminal",
      "./build.sh > build.log 2>&1 &  # redirect output to a file so it doesn't spam you",
      "nohup ./server.py > server.log 2>&1 &  # survives terminal closing",
      "jobs  # see what's running in the background",
      "wait  # block until ALL background jobs finish (useful in scripts)"
    ],
    "memoryTip": "`&` at end = run in background, hand prompt back NOW. Don't confuse with `;` (sequential) or `&&` (conditional). For long-running things you'll log out from, use `nohup ... &` or `tmux`/`screen`.",
    "outputExample": "$ sleep 30 &\n[1] 12345\n$ jobs\n[1]+  Running                 sleep 30 &\n$ # 30 seconds later:\n[1]+  Done                    sleep 30",
    "category": "PROCESSES"
  },
  {
    "id": "proc5",
    "question": "You suspended a long-running command with Ctrl+Z to answer a quick question, and now you want it to take over your terminal again and continue running interactively. What command brings a background or stopped job back to the foreground?",
    "answer": "fg %job_number",
    "explanation": "When you press Ctrl+Z, a running command gets paused and frozen — like hitting pause on a video. Your prompt comes back, but the job is still there, waiting. This command is like pressing play again, but it also takes the command back to your main screen so you can interact with it. Your terminal reconnects to that job as if you never left.",
    "usage": "Resume a stopped or backgrounded job and make it the active foreground process — reconnects your terminal to it.",
    "examples": [
      "fg  # bring the most recent job back to the foreground",
      "fg %1  # bring job number 1 forward (numbers come from jobs)",
      "fg %vim  # bring the suspended vim back (matched by name)",
      "jobs  # see job numbers and states first"
    ],
    "memoryTip": "`fg` = ForeGround. `bg` = BackGround. `Ctrl+Z` = suspend (a one-key pause). Once suspended: `fg` to resume in foreground, `bg` to resume in background, `kill %N` to terminate.",
    "outputExample": "$ sleep 30\n^Z\n[1]+  Stopped                 sleep 30\n$ fg %1\nsleep 30\n# (now in foreground again; Ctrl+C to stop)",
    "category": "PROCESSES"
  },
  {
    "id": "proc6",
    "question": "You accidentally started a long compilation in the foreground and want it to continue running but give you your terminal prompt back without stopping it. What is the two-step sequence to move a running foreground job to the background?",
    "answer": "bg %job_number",
    "explanation": "When you realize a command you're already running is going to take a long time, you can pause it with Ctrl+Z (which freezes it without losing any work), and then tell it to continue running in the background while your prompt comes back. The job resumes from exactly where it paused, now running alongside your terminal session.",
    "usage": "Resume a stopped (Ctrl+Z) job in the background — lets it continue running while freeing up your terminal prompt.",
    "examples": [
      "Ctrl+Z  # suspend the foreground job (sends SIGTSTP)",
      "bg  # resume it, but in the background",
      "bg %2  # specifically resume job 2",
      "jobs  # confirm what's running where",
      "disown %1  # detach job 1 from this shell so it survives logout"
    ],
    "memoryTip": "Workflow: `Ctrl+Z` (pause) → `bg` (continue in background). Trio to memorize: `Ctrl+Z` pauses, `fg` foregrounds, `bg` backgrounds.",
    "outputExample": "$ make -j8  # started in foreground, takes too long\n^Z\n[1]+  Stopped                 make -j8\n$ bg\n[1]+ make -j8 &\n$ jobs\n[1]+  Running                 make -j8 &\n# build continues, prompt is yours",
    "category": "PROCESSES"
  },
  {
    "id": "proc7",
    "question": "You have several commands running in the background from your current terminal session and want to see all of them — their status, job numbers, and whether they're running or stopped — before deciding which to bring forward. What command lists the current shell's background jobs?",
    "answer": "jobs",
    "explanation": "Your shell keeps track of commands you've sent to the background or suspended with Ctrl+Z, each identified by a small job number. This command lists all of them — what number they are, whether they're currently running or paused, and what command they're running. Think of it as a task manager for just the things you launched from your current terminal session.",
    "usage": "List all background and stopped jobs in the current shell session — shows job numbers for use with fg, bg, and kill.",
    "examples": [
      "jobs  # current shell's job table",
      "jobs -l  # add PID column",
      "jobs -r  # only running jobs",
      "jobs -s  # only stopped (suspended) jobs"
    ],
    "memoryTip": "`jobs` = this shell's jobs only. For system-wide use `ps` or `pgrep`. The `+` next to a job means 'default target'. The `[N]` number is what you pass with `%N`.",
    "outputExample": "$ sleep 100 &\n[1] 12345\n$ sleep 300\n^Z\n[2]+  Stopped                 sleep 300\n$ jobs\n[1]-  Running                 sleep 100 &\n[2]+  Stopped                 sleep 300\n$ jobs -l\n[1]- 12345 Running             sleep 100 &\n[2]+ 12347 Stopped             sleep 300",
    "category": "PROCESSES"
  },
  {
    "id": "proc8",
    "question": "Your server's performance has degraded and you want to see which processes are consuming the most CPU and memory right now, updated in real time. What command opens an interactive live process monitor?",
    "answer": "top",
    "explanation": "This command is like a constantly-updating dashboard for your computer's processes. It refreshes every few seconds, showing which programs are running and how much CPU and memory each one is using, ranked by the most resource-hungry first. You can sort, filter, and even kill processes without leaving the monitor. It's available on every Linux system, even minimal or containerized installations.",
    "usage": "Open an interactive real-time process monitor — shows CPU and memory usage per process, continuously updated.",
    "examples": [
      "top  # interactive — press q to quit",
      "top -u alice  # only processes owned by user alice",
      "top -p 1234,5678  # watch only these PIDs",
      "top -b -n 1  # batch mode, one snapshot (for scripts/cron)",
      "top -o %MEM  # start sorted by memory instead of CPU"
    ],
    "memoryTip": "Inside top: M=Memory sort, P=Processor (CPU) sort, q=quit, k=kill, 1=per-core view. Always available on every Linux box. If `htop` is installed, prefer it.",
    "outputExample": "$ top\ntop - 14:32:18 up 3 days, load average: 0.42, 0.31, 0.28\nTasks: 312 total,   2 running, 310 sleeping\n%Cpu(s):  4.2 us,  1.1 sy, 94.5 id\n   PID USER      PR  NI    VIRT    RES  S  %CPU  %MEM     TIME+ COMMAND\n  2412 alice     20   0 2400000 524288  S  12.5   3.1   1:42.10 firefox\n     1 root      20   0  168720  11264  S   0.0   0.1   0:02.41 systemd",
    "category": "PROCESSES"
  },
  {
    "id": "proc9",
    "question": "You want to find the PID of every running nginx process to send them all a reload signal — but you don't want to parse the full ps aux output manually. What command searches running processes by name and prints only their PIDs?",
    "answer": "pgrep nginx",
    "explanation": "Instead of listing every running process and visually scanning for the one you want, this command does the searching for you. You give it a name to look for, and it prints back only the process ID numbers of the matching processes — one per line, ready to be used in the next command. It's the efficient way to find PIDs when you know what you're looking for.",
    "usage": "Find PIDs of processes matching a name — the clean alternative to parsing ps aux output manually.",
    "examples": [
      "pgrep nginx  # all PIDs of nginx processes",
      "pgrep -l sshd  # PIDs and names of anything matching 'sshd'",
      "pgrep -a python  # PID + full command line — see which Python scripts are running",
      "pgrep -f 'python server.py'  # match the full command line",
      "pgrep -u alice firefox  # firefox processes belonging only to user alice",
      "kill $(pgrep nginx)  # kill all nginx processes in one shot"
    ],
    "memoryTip": "`pgrep` = process + grep. Sibling: `pkill` (same matching, but kills). Use `pgrep -f` when the executable is generic (python, java) and you need to match by script name.",
    "outputExample": "$ pgrep nginx\n1832\n1833\n1834\n$ pgrep -l sshd\n1432 sshd\n2001 sshd\n$ pgrep nonexistent\n$ echo $?\n1",
    "category": "PROCESSES"
  },
  {
    "id": "proc10",
    "question": "All Firefox browser processes have become unresponsive and you want to terminate every one of them at once without looking up individual PIDs. What command sends a signal to all processes matching a name pattern?",
    "answer": "pkill -9 firefox",
    "explanation": "Instead of finding PIDs one by one and then killing each individually, this command combines the search and the kill in one step — it finds every process matching the name you give and signals them all simultaneously. It's the \"close all windows\" approach for command-line processes.",
    "usage": "Send a signal to all processes matching a name pattern — the efficient way to terminate or signal multiple processes at once.",
    "examples": [
      "pkill firefox  # SIGTERM all firefox processes — graceful shutdown",
      "pkill -9 firefox  # SIGKILL — when firefox is completely frozen",
      "pkill -f 'python server.py'  # match the full command line",
      "pkill -HUP nginx  # tell nginx to reload its config (no restart)",
      "sudo pkill -u baduser  # kill every process owned by baduser",
      "pgrep -fa python  # ALWAYS preview with pgrep first before pkill"
    ],
    "memoryTip": "`pkill` = process kill (by pattern). Triple: `pgrep` (find), `pkill` (find + kill), `killall` (kill by exact name). RULE: always run `pgrep` first to preview before `pkill`.",
    "outputExample": "$ pgrep -a firefox  # preview first\n2412 /usr/lib/firefox/firefox\n2500 /usr/lib/firefox/firefox -contentproc\n$ pkill firefox\n$ pgrep firefox\n$ # (empty — all instances terminated)",
    "category": "PROCESSES"
  },
  {
    "id": "proc11",
    "question": "You're inside the top monitor and want to sort the process list by memory usage instead of CPU to find the process using the most RAM. What key do you press inside top to re-sort by memory?",
    "answer": "top",
    "explanation": "The live process monitor has a full set of keyboard shortcuts you can use while it's running without leaving the screen. Pressing a single letter immediately changes how the list is sorted — the next refresh will show processes in the new order. These shortcuts make top a powerful interactive tool rather than just a passive display.",
    "usage": "Use top's interactive keyboard shortcuts to sort, filter, and act on processes without leaving the live monitor.",
    "examples": [
      "top  # launch, then press M to sort by memory",
      "top -d 1  # update every 1 second instead of 3",
      "top -u alice  # only show alice's processes on launch",
      "top -b -n 1 > snapshot.txt  # batch mode: one snapshot to file",
      "top -H -p 1234  # show individual THREADS of PID 1234"
    ],
    "memoryTip": "Inside top, capital letters sort: P=Processor (CPU), M=Memory, T=Time. Lowercase do other things: k=kill, r=renice, q=quit, u=filter user, h=help. `top` is your fallback when `htop` is missing.",
    "outputExample": "$ top\n# Press M to sort by memory...\n   PID USER      PR  NI    VIRT    RES  %MEM     TIME+ COMMAND\n  2412 alice     20   0 2400000 524288  3.1   1:42.10 firefox\n  3821 alice     20   0  819200 122880  0.7   0:08.20 code",
    "category": "PROCESSES"
  },
  {
    "id": "proc12",
    "question": "You know the PID of a running nginx master process and want to see all the worker processes it has spawned, displayed as a tree with their own PIDs visible. What command shows the process hierarchy rooted at a specific PID?",
    "answer": "pstree",
    "explanation": "When you have the PID of a specific process and want to see its entire family — all its children, grandchildren, and so on — you can focus the tree diagram on just that branch. This is much less overwhelming than the complete system tree and immediately shows you whether a process has the expected number of workers or whether any unexpected children have appeared.",
    "usage": "Show the process subtree rooted at a specific PID — all its children and descendants in a visual hierarchy.",
    "examples": [
      "pstree -p 1832  # tree rooted at nginx master PID 1832, with PIDs",
      "pstree -pa $(pgrep -o nginx)  # all nginx descendants + arguments",
      "pstree -T  # hide kernel threads for cleaner output",
      "pstree -s 5678  # the REVERSE: show ancestors of PID 5678",
      "ps -ef --forest | less  # alternative tree with full ps columns"
    ],
    "memoryTip": "`pstree -p PID` = the subtree under PID. `pstree -s PID` = the ancestors of PID ('s' for 'show parents').",
    "outputExample": "$ pstree -pa 1832\nnginx,1832 -g daemon off;\n  |-nginx,1833\n  |-nginx,1834\n  `-nginx,1835",
    "category": "PROCESSES"
  },
  {
    "id": "proc13",
    "question": "A monitoring alert references a specific PID from a .pid file. You want to see exactly how long that process has been running and what its CPU usage is — just those fields, no irrelevant columns. What command queries a specific PID with a custom output format?",
    "answer": "ps -p PID -o pid,cmd,etime,cpu",
    "explanation": "The default process listing shows many columns of information you might not need. You can ask for only the specific pieces of information you care about — just the elapsed time, or just the command name, or just the CPU percentage — without the noise of 15 other columns. This makes it much easier to script around and parse programmatically.",
    "usage": "Query a specific PID with a custom-selected set of output columns — the scriptable way to get exactly the process information you need.",
    "examples": [
      "ps -p 1234 -o pid,cmd,%cpu,%mem  # specific info about one PID",
      "ps -p 1234 -o etime=  # uptime only, no header (= suppresses the label)",
      "ps -eo pid,ppid,user,comm --sort=-%cpu | head  # whole system, custom columns, sorted by CPU",
      "ps --no-headers -p 1234 -o stat  # check state code (R/S/Z/D) for scripting",
      "ps -p $(pgrep -o nginx) -o pid,etimes,rss,cmd"
    ],
    "memoryTip": "Mnemonic: `-p` for PID, `-o` for Output format. Append `=` to a column name to hide the header. `etime` is human-readable, `etimes` is plain seconds — pick the right one for scripts.",
    "outputExample": "$ ps -p 1234 -o pid,user,etime,%cpu,cmd\n    PID USER         ELAPSED %CPU CMD\n   1234 alice       02:14:33 12.5 /usr/lib/firefox/firefox\n$ ps -p 1234 -o etime=\n02:14:33",
    "category": "PROCESSES"
  },
  {
    "id": "proc14",
    "question": "A process is consuming more disk space than expected and you suspect it has a deleted file still open, preventing the space from being reclaimed. What command lists every open file, socket, and pipe currently held by a specific process?",
    "answer": "lsof -p PID",
    "explanation": "On Linux, almost everything is represented as a file — not just text files and images, but also network connections, devices, pipes between programs, and even the program's own executable. This command shows every \"file\" that a specific process currently has open, which reveals what it's reading, what it's writing to, what network connections it has, and critically, whether it's holding onto any files that have been deleted but whose disk space can't be recovered until the process closes them.",
    "usage": "List every open file, network connection, and pipe held by a process — the diagnostic tool for file descriptor and disk space mysteries.",
    "examples": [
      "sudo lsof -p 1234  # everything PID 1234 has open",
      "sudo lsof -p 1234 | grep deleted  # find deleted files still held open",
      "lsof -c nginx  # all open files for every process named nginx",
      "sudo lsof /var/log/nginx/access.log  # which processes have this file open?",
      "sudo lsof -i :8080  # which process is bound to TCP port 8080?",
      "sudo lsof +D /mnt/usb  # everything open under this directory (why can't I unmount?)"
    ],
    "memoryTip": "`lsof` = LiSt Open Files. `-p PID` filters by process, `-i :PORT` filters by network port. The `cwd` FD is the process's working directory; the `txt` FD is the executable itself. Look for '(deleted)' in NAME to find disk-space leaks.",
    "outputExample": "$ sudo lsof -p 1234 | grep deleted\nnginx 1234 www-data  5w  REG 8,1 0 131074 /var/log/nginx/old.log (deleted)\n# This deleted file is preventing 50MB from being freed",
    "category": "PROCESSES"
  },
  {
    "id": "proc15",
    "question": "Your script launches several background downloads with & and must wait for all of them to complete before continuing to the next step. What built-in command blocks execution until all background child processes have finished?",
    "answer": "wait PID",
    "explanation": "When you launch multiple things in the background at once, they all run simultaneously but your script doesn't automatically wait for them to finish before moving on. This command is a pause button that holds your script at that line until all the background tasks have completed, then releases it to continue. You can wait for all background jobs at once, or wait for a specific one and check whether it succeeded.",
    "usage": "Block script execution until all background child processes finish — the synchronization point for parallel shell scripts.",
    "examples": [
      "for url in $URLS; do curl -O \"$url\" & done; wait  # parallel downloads, continue when all done",
      "build1 & p1=$!; build2 & p2=$!; wait $p1 $p2; echo 'both builds done'",
      "task & if wait $!; then echo success; else echo 'failed'; fi  # check exit status",
      "wait -n  # bash 5+: return as soon as ANY one background job completes"
    ],
    "memoryTip": "Pattern: `cmd & pid=$!` saves PID, `wait $pid` waits for it, exit status of `wait` = exit status of the child. `wait` only sees direct children of the current shell.",
    "outputExample": "$ for i in 1 2 3; do (sleep $i; echo \"task $i done\") & done; wait; echo all-done\ntask 1 done\ntask 2 done\ntask 3 done\nall-done",
    "category": "PROCESSES"
  },
  {
    "id": "proc16",
    "question": "You ran 'ps aux | grep java' and the COMMAND column is truncated, so you can't tell which Java application this is or what arguments it was started with. What flag tells ps to print the complete untruncated command line?",
    "answer": "ps aux",
    "explanation": "The standard process listing cuts off long command lines at your terminal's edge, so a long Java or Python command with many arguments gets truncated with no indication. Adding this width flag tells ps to ignore terminal width limits and print the complete command no matter how long it is — essential when you need to see the actual configuration flags and file paths used to start a process.",
    "usage": "Print untruncated full command lines in ps output — essential when the COMMAND column is cut short and arguments are hidden.",
    "examples": [
      "ps auxww  # ALL processes with full command lines",
      "ps auxww | grep java  # find which java application with full args",
      "cat /proc/1234/cmdline | tr '\\0' ' '; echo  # kernel-provided full command",
      "pgrep -af python  # PID and full command line for python processes",
      "ps -p 1234 wwo cmd=  # full command for one PID, no header"
    ],
    "memoryTip": "Width flag: no `w` = truncated to terminal width, `w` = double width, `ww` = unlimited. `/proc/PID/cmdline` is the kernel's authoritative source for the full argument list.",
    "outputExample": "$ ps auxww | grep java | grep -v grep\nappuser 8421  3.2 8.5 ... java -Xms512m -Xmx2g -Dspring.profiles.active=prod -jar /opt/myapp/app.jar --config=/etc/myapp/prod.yml",
    "category": "PROCESSES"
  },
  {
    "id": "proc17",
    "question": "After installing a new version of nginx, you want to ask the running nginx master process to reload its configuration file without a full restart — avoiding any downtime. What command sends a specific named signal to a process?",
    "answer": "kill -SIGNAL PID",
    "explanation": "Processes can receive many different types of messages beyond just \"stop.\" Each message type has a name and a number, and different programs respond to them in different ways. The \"hangup\" message, despite its old-fashioned name, is commonly used to tell running servers to re-read their configuration files without stopping. Sending this message to nginx tells it to reload its config while continuing to serve requests.",
    "usage": "Send a specific named or numbered signal to a process — enables graceful config reloads, pausing, and controlled shutdown.",
    "examples": [
      "kill -HUP $(pgrep -o nginx)  # reload nginx config without restart",
      "kill -TERM 1234  # polite shutdown (also the default)",
      "kill -KILL 1234  # force kill — last resort when TERM was ignored",
      "kill -USR1 $(pgrep -o nginx)  # nginx: reopen log files (used by logrotate)",
      "kill -STOP 1234; sleep 5; kill -CONT 1234  # freeze for 5 seconds then resume"
    ],
    "memoryTip": "TERM = polite request, KILL = forced. HUP = 'reload config' for daemons. USR1/USR2 = app-defined — check man page. SIGKILL and SIGSTOP are the only signals a process can never ignore.",
    "outputExample": "$ kill -HUP $(pgrep -o nginx)\n$ tail -1 /var/log/nginx/error.log\n2026/05/17 14:32:18 [notice] nginx: signal 1 (SIGHUP) received, reconfiguring",
    "category": "PROCESSES"
  },
  {
    "id": "proc18",
    "question": "You need to understand the complete job control workflow: how to start a command in the background, pause it, switch it between foreground and background, list all jobs, and kill one by job number. What are the key commands and keystrokes in this workflow?",
    "answer": "command & # background fg # foreground",
    "explanation": "The shell gives you complete control over commands you've started — you can pause them, resume them, push them to the background, bring them back, and kill them, all using simple commands and keyboard shortcuts. Understanding this workflow lets you manage multiple long-running tasks from a single terminal without needing to open multiple windows.",
    "usage": "Manage multiple running jobs from a single terminal — start, pause, resume, foreground, background, and kill by job number.",
    "examples": [
      "long_task &  # start in background, prompt returns immediately",
      "Ctrl+Z  # suspend current foreground job",
      "bg  # resume last stopped job in background",
      "fg %2  # bring job number 2 to the foreground",
      "jobs -l  # list jobs with their PIDs",
      "kill %2  # kill job 2 without needing its PID",
      "disown %1  # detach job 1 so it survives logout"
    ],
    "memoryTip": "Cheat sheet: START bg=`&`, PAUSE=`Ctrl+Z`, LIST=`jobs`, FOREGROUND=`fg [%N]`, BACKGROUND=`bg [%N]`, KILL by job=`kill %N`, SURVIVE LOGOUT=`disown`.",
    "outputExample": "$ sleep 100 &\n[1] 5678\n$ sleep 200\n^Z\n[2]+  Stopped                 sleep 200\n$ bg %2\n[2]+ sleep 200 &\n$ kill %1\n[1]-  Terminated              sleep 100",
    "category": "PROCESSES"
  },
  {
    "id": "proc19",
    "question": "You want to run a video encoding job that will take hours, but you don't want it competing aggressively with your other work. What command starts a new process with a reduced CPU priority so it yields to more important processes?",
    "answer": "nice -n 10 ffmpeg -i video.mp4 output.mp4",
    "explanation": "Every process has a politeness setting that tells the system how aggressively to compete for CPU time. A normal process uses the default setting. By starting your encoding job with a higher politeness number, you're telling the system \"this job can wait whenever something more important needs the CPU.\" On a busy system, your encoding job will run slower but won't make your text editor or browser feel sluggish. On an idle system, it runs at full speed.",
    "usage": "Start a command with reduced CPU priority so it yields to more important processes when the CPU is contested.",
    "examples": [
      "nice -n 19 backup.sh  # most yielding — runs only when nothing else needs CPU",
      "nice -n 10 make -j$(nproc)  # background-friendly parallel compile",
      "sudo nice -n -5 realtime_daemon  # boost priority (root only)",
      "nice ./script  # shorthand: with no -n, nice defaults to +10",
      "nice -n 19 ionice -c3 rsync src/ dst/  # CPU-nice AND idle I/O — nearly invisible"
    ],
    "memoryTip": "Range: -20 (CPU hog) ↔ 0 (default) ↔ +19 (super polite). A HIGH nice number = a NICE process that waits its turn. Only root can go negative. To change a running process's niceness, use `renice`.",
    "outputExample": "$ nice -n 15 sha256sum ubuntu.iso &\n[1] 8421\n$ ps -p 8421 -o pid,ni,%cpu\n    PID  NI %CPU\n   8421  15  4.2",
    "category": "PROCESSES"
  },
  {
    "id": "proc20",
    "question": "A service is failing to start with 'Address already in use' on port 8080. You need to find out which process is currently bound to that port. What command shows which processes are listening on which network ports?",
    "answer": "netstat -tlnp",
    "explanation": "When a program listens for network connections, it claims a specific port number — like reserving a specific table at a restaurant. If someone else tries to use the same port, they get an error. This command shows you the complete seating chart: every port that's currently occupied, what process is sitting there, and what address it's listening on (whether it's accepting connections from anywhere or just from the local machine).",
    "usage": "Show all TCP listening ports and the process bound to each — the diagnostic tool for 'Address already in use' errors.",
    "examples": [
      "sudo ss -tlnp  # MODERN equivalent — same idea, faster, always installed",
      "sudo netstat -tlnp  # the classic",
      "sudo ss -tulnp  # add UDP listeners too",
      "sudo lsof -i :8080  # which process specifically has port 8080?",
      "sudo ss -tnp state established  # active connections (not just listeners)"
    ],
    "memoryTip": "Acronym `tlnp`: TCP, Listening, Numeric, Process. Replace `t` with `u` for UDP, drop `l` to see active connections. Prefer `ss` over `netstat` on any modern system.",
    "outputExample": "$ sudo ss -tlnp\nState   Local Address:Port  Process\nLISTEN  0.0.0.0:22         users:((\"sshd\",pid=1432,fd=3))\nLISTEN  0.0.0.0:80         users:((\"nginx\",pid=1832,fd=6))\nLISTEN  127.0.0.1:5432     users:((\"postgres\",pid=712,fd=5))\nLISTEN  0.0.0.0:8080       users:((\"node\",pid=3821,fd=12))",
    "category": "PROCESSES"
  },
  {
    "id": "net1",
    "question": "Your team's staging server at 10.20.30.40 stopped responding. What command sends three ICMP test packets to it and automatically stops, telling you if the network path is alive?",
    "answer": "ping hostname",
    "explanation": "Sending a ping is like knocking on someone's door and listening for an answer. You tap the remote machine with tiny network messages and wait to hear back. If you get replies, the path between your computer and that machine is working. No reply usually means something is blocking or the machine is down.",
    "usage": "Verify network reachability to 10.20.30.40 by sending three packets and viewing round-trip latency and packet-loss statistics.",
    "examples": [
      "ping google.com  # run until Ctrl+C",
      "ping -c 4 192.168.1.1  # send 4 packets to the router, then stop",
      "ping -i 0.2 host  # 5 pings per second (root only below 0.2s)",
      "ping -s 1400 host  # large payload — useful for finding MTU issues",
      "ping6 ::1  # ping over IPv6 (or use `ping -6`)"
    ],
    "memoryTip": "`ping` is named after sonar: a submarine pings a target and listens for the echo. Time between ping and echo = round-trip latency. No echo = no contact.",
    "outputExample": "$ ping -c 3 google.com\nPING google.com (142.250.185.46) 56(84) bytes of data.\n64 bytes from lga25s71-in-f14: icmp_seq=1 ttl=118 time=14.2 ms\n64 bytes from lga25s71-in-f14: icmp_seq=2 ttl=118 time=14.6 ms\n64 bytes from lga25s71-in-f14: icmp_seq=3 ttl=118 time=14.1 ms\n\n--- google.com ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max/mdev = 14.103/14.305/14.601/0.214 ms",
    "category": "NETWORKING"
  },
  {
    "id": "net2",
    "question": "Your laptop just connected to the office network. What command shows every network interface on the machine together with its current IP address and link state?",
    "answer": "ip addr show",
    "explanation": "Your computer can have several different \"doorways\" to the network — a wired port, a wireless card, a VPN tunnel. This command lists all of them and shows what address each one has been given, like checking which phone lines are active and what numbers they have.",
    "usage": "Display all network interfaces and their IP addresses on a freshly connected machine to confirm the correct addresses were assigned by DHCP.",
    "examples": [
      "ip addr show  # full listing of every interface",
      "ip a  # short alias, same output",
      "ip addr show eth0  # only the eth0 interface",
      "ip -4 addr  # IPv4 addresses only",
      "ip -br addr  # one-line-per-interface summary — much easier to skim"
    ],
    "memoryTip": "`ip addr` = 'IP addresses'. The `ip` tool has sub-commands: `ip addr` (addresses), `ip link` (interface up/down/MAC), `ip route` (routing table), `ip neigh` (ARP). Same pattern every time.",
    "outputExample": "$ ip -br addr\nlo               UNKNOWN        127.0.0.1/8 ::1/128\neth0             UP             192.168.1.42/24 fe80::a00:27ff:fe4e:5/64\nwlan0            DOWN\ndocker0          DOWN           172.17.0.1/16",
    "category": "NETWORKING"
  },
  {
    "id": "net3",
    "question": "You need to download the latest Ubuntu 24.04 ISO from a URL to the current directory using a single command. Which command does this and also supports resuming if interrupted?",
    "answer": "wget URL",
    "explanation": "Think of this command as a download manager you control from the terminal. You give it a web address and it saves the file to your current folder, showing a progress bar. If the download gets cut off partway through, you can re-run it with a resume flag and it picks up where it left off instead of starting over.",
    "usage": "Download the Ubuntu 24.04 ISO to the current directory, resuming any previous partial download with `-c` if the connection drops.",
    "examples": [
      "wget https://example.com/file.zip  # save as file.zip in current dir",
      "wget -c https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso  # resume an interrupted download",
      "wget -O myname.tar.gz https://example.com/release.tar.gz  # rename on save",
      "wget -q -O- https://example.com/index.html | grep title  # print to stdout, no progress",
      "wget -r -np -k https://site.com/docs/  # mirror docs subtree (no parent, fix links)"
    ],
    "memoryTip": "`wget` = 'web get' — defaults to SAVE to file. Mirror-image of `curl` which defaults to PRINT to stdout. `wget -c` resumes; `wget -O-` makes it act like curl. If neither is installed: `sudo apt install wget` or `sudo dnf install wget`.",
    "outputExample": "$ wget https://example.com/file.zip\n--2026-05-15 14:32:10--  https://example.com/file.zip\nResolving example.com (example.com)... 93.184.216.34\nConnecting to example.com (example.com)|93.184.216.34|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 4194304 (4.0M) [application/zip]\nSaving to: 'file.zip'\n\nfile.zip          100%[==============>]   4.00M  12.5MB/s    in 0.3s\n\n2026-05-15 14:32:10 (12.5 MB/s) - 'file.zip' saved [4194304/4194304]",
    "category": "NETWORKING"
  },
  {
    "id": "net4",
    "question": "You built a new binary at ~/code/myapp/dist/server and need to send it to the deploy user on web1.example.com so it lands in /opt/myapp/. What single command accomplishes this over an encrypted connection?",
    "answer": "scp file user@host:destination",
    "explanation": "This command is like emailing a file attachment, but the connection is always encrypted and the delivery goes straight to the remote server's filesystem. You say which file to send, who to send it to, and exactly which folder on the other machine should receive it.",
    "usage": "Copy ~/code/myapp/dist/server to deploy@web1.example.com:/opt/myapp/ over SSH in a single command.",
    "examples": [
      "scp report.pdf alice@server.com:/home/alice/  # upload to alice's home",
      "scp alice@server.com:/var/log/app.log .  # download to current dir",
      "scp -r project/ alice@server.com:/backups/  # whole folder, recursive",
      "scp -P 2222 file.txt alice@server.com:~/  # non-default SSH port",
      "rsync -avP file user@host:dest/  # better alternative: resume on failure, progress bar"
    ],
    "memoryTip": "`scp` = Secure CoPy (over SSH). The COLON is the magic — `host:path` = remote, plain `path` = local. Capital `-P` for port (different from `ssh`'s `-p`). For anything beyond simple one-shot copies, prefer `rsync -avP`.",
    "outputExample": "$ scp report.pdf alice@server.com:~/\nalice@server.com's password:\nreport.pdf                                100% 2456KB  12.3MB/s   00:00\n$ scp -r project/ alice@server.com:/backups/\nproject/README.md                         100% 1234     45.6KB/s   00:00\nproject/src/main.py                       100% 8901    234.5KB/s   00:00",
    "category": "NETWORKING"
  },
  {
    "id": "net5",
    "question": "You need to log into the remote host web1.example.com as the user deploy to run administrative commands. What command opens an encrypted interactive shell on that machine?",
    "answer": "ssh user@hostname",
    "explanation": "This command is your secure remote control panel. It opens an encrypted tunnel to another computer and gives you a command prompt there, as if you were sitting at its keyboard. Everything you type travels through the internet encrypted so no one can eavesdrop.",
    "usage": "Open an interactive encrypted shell on web1.example.com as deploy to run administrative commands.",
    "examples": [
      "ssh alice@server.com  # interactive remote shell",
      "ssh alice@server.com 'df -h /'  # run a single remote command and exit",
      "ssh -p 2222 alice@server.com  # custom port",
      "ssh -L 8080:localhost:80 user@host  # tunnel: localhost:8080 → host:80",
      "ssh-copy-id alice@server.com  # install your public key for password-free login"
    ],
    "memoryTip": "`ssh` = Secure SHell. Always `user@host` (omit `user@` if local username matches). For password-free login: `ssh-keygen` then `ssh-copy-id`. For frequently-used hosts, set up aliases in `~/.ssh/config`. To run one command without an interactive shell, just append the command in quotes.",
    "outputExample": "$ ssh alice@server.com\nalice@server.com's password:\nWelcome to Ubuntu 24.04.1 LTS\nLast login: Fri May 15 09:00:01 2026 from 192.168.1.42\nalice@server:~$ hostname\nserver.com\nalice@server:~$ exit\nlogout\nConnection to server.com closed.\n$",
    "category": "NETWORKING"
  },
  {
    "id": "net6",
    "question": "You want to start an nginx web server but suspect port 80 is already occupied. What command shows which process is bound to each listening TCP port?",
    "answer": "netstat -tlnp",
    "explanation": "Every service that accepts network connections is like a business with a street address (port number). This command lists all the \"open for business\" addresses and shows you which program is sitting at each one — so you can see immediately whether port 80 is already claimed before you try to start something new there.",
    "usage": "List every TCP port currently in the LISTEN state along with the process name and PID holding each socket.",
    "examples": [
      "sudo netstat -tlnp  # listening TCP ports + owning process — the classic combo",
      "sudo netstat -tulnp  # add UDP too",
      "sudo ss -tlnp  # modern replacement (preferred — faster, fewer dependencies)",
      "sudo ss -tlnp 'sport = :80'  # only port 80 listeners",
      "sudo lsof -i :443  # alternative: who's using port 443?"
    ],
    "memoryTip": "`netstat -tlnp` mnemonic: 'TCP Listening Numeric Process'. Modern equivalent: `ss -tlnp` (Socket Statistics — same flags). If neither is installed: `sudo apt install net-tools` or `iproute2`. Alternative for 'who's on port X?': `sudo lsof -i :X` or `sudo fuser X/tcp`.",
    "outputExample": "$ sudo netstat -tlnp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address      Foreign Address  State    PID/Program name\ntcp        0      0 127.0.0.1:631      0.0.0.0:*        LISTEN   1234/cupsd\ntcp        0      0 0.0.0.0:22         0.0.0.0:*        LISTEN   1456/sshd\ntcp        0      0 0.0.0.0:80         0.0.0.0:*        LISTEN   2104/nginx: master\ntcp6       0      0 :::22              :::*             LISTEN   1456/sshd",
    "category": "NETWORKING"
  },
  {
    "id": "net7",
    "question": "A colleague reports that api.example.com is unreachable. You want to confirm what IP address that hostname currently resolves to using the simplest available DNS query tool. What command do you run?",
    "answer": "nslookup domain",
    "explanation": "Every website name like \"api.example.com\" is secretly an IP address in disguise. This command asks your DNS server — the internet's phone book — to look up what number goes with that name, and also tells you which phone book it asked so you know whether your local network's DNS is involved.",
    "usage": "Resolve api.example.com to its current IP address and display which DNS server answered the query.",
    "examples": [
      "nslookup google.com  # default DNS answers with the A record",
      "nslookup google.com 8.8.8.8  # query Google's public DNS specifically",
      "nslookup -type=mx gmail.com  # mail exchanger records",
      "nslookup -type=txt example.com  # TXT records (SPF, DMARC, verification)",
      "dig +short example.com  # alternative — terser output, one IP per line"
    ],
    "memoryTip": "`nslookup` = Name Server LOOKUP. Modern preference: `dig` (more detailed) or `host` (terser). Two-line check: `nslookup domain` then `nslookup domain 8.8.8.8` — if first fails and second works, your local DNS resolver is broken, not the world.",
    "outputExample": "$ nslookup google.com\nServer:         192.168.1.1\nAddress:        192.168.1.1#53\n\nNon-authoritative answer:\nName:   google.com\nAddress: 142.250.185.46\nName:   google.com\nAddress: 2607:f8b0:4006:80f::200e\n\n$ nslookup -type=mx gmail.com 8.8.8.8\nServer:         8.8.8.8\nAddress:        8.8.8.8#53\n\nNon-authoritative answer:\ngmail.com       mail exchanger = 5 gmail-smtp-in.l.google.com.\ngmail.com       mail exchanger = 10 alt1.gmail-smtp-in.l.google.com.",
    "category": "NETWORKING"
  },
  {
    "id": "net8",
    "question": "After a system reboot the server can no longer reach the internet. You suspect the default gateway is missing. What command prints the kernel's routing table so you can check?",
    "answer": "ip route show",
    "explanation": "The routing table is your computer's road map for where to send network traffic. Every destination gets a road; the \"default\" road handles everything that doesn't match a more specific address. Printing this map lets you see immediately whether the road to the internet (the default route) is present.",
    "usage": "Print the kernel routing table and check for a `default via` entry pointing to the expected gateway.",
    "examples": [
      "ip route show  # full routing table",
      "ip route  # shorter, same thing",
      "ip route get 8.8.8.8  # which interface/gateway would the kernel use to reach 8.8.8.8?",
      "ip route get 192.168.1.5  # confirm LAN traffic doesn't go through gateway",
      "sudo ip route add 10.0.0.0/24 via 192.168.1.254  # add a static route (temp; lost on reboot)"
    ],
    "memoryTip": "`ip route` is part of the modern `iproute2` suite. Old `route -n` is deprecated but still works. Top of the table = most-specific match wins; `default` matches anything else. If `ip route show default` is empty, you have NO internet route — that's the bug.",
    "outputExample": "$ ip route show\ndefault via 192.168.1.1 dev wlan0 proto dhcp metric 600\n169.254.0.0/16 dev wlan0 scope link metric 1000\n192.168.1.0/24 dev wlan0 proto kernel scope link src 192.168.1.42 metric 600\n$ ip route get 8.8.8.8\n8.8.8.8 via 192.168.1.1 dev wlan0 src 192.168.1.42 uid 1000",
    "category": "NETWORKING"
  },
  {
    "id": "net9",
    "question": "You deployed a new microservice on web1.example.com and need to verify that port 9090 is actually accepting TCP connections from your laptop. What command checks this without starting an interactive session?",
    "answer": "telnet host port",
    "explanation": "This command is like walking up to a door and testing whether the doorbell works. You knock on a specific port on a remote machine and immediately find out whether someone is listening there or whether the door is locked (the port is closed or firewalled).",
    "usage": "Verify that TCP port 9090 on web1.example.com is accepting connections from your workstation.",
    "examples": [
      "telnet google.com 443  # is 443 open? exit with Ctrl+] then 'quit'",
      "nc -zv google.com 443  # modern: just reports success/failure, no interactive shell",
      "nc -zv host 1-1000  # scan a range of ports",
      "echo 'GET / HTTP/1.0' | nc google.com 80  # manual HTTP request",
      "curl -v telnet://host:port  # one more way to do the same check"
    ],
    "memoryTip": "`telnet` as a LOGIN tool is dead (use ssh). `telnet HOST PORT` as a 'is the port open?' tester is still useful. Modern equivalent: `nc -zv HOST PORT` (cleaner, scriptable). Inside an interactive telnet session, escape with `Ctrl+]` then type `quit`.",
    "outputExample": "$ telnet google.com 443\nTrying 142.250.185.46...\nConnected to google.com.\nEscape character is '^]'.\n^]\ntelnet> quit\nConnection closed.\n\n$ nc -zv google.com 443\nConnection to google.com (142.250.185.46) 443 port [tcp/https] succeeded!\n\n$ nc -zv google.com 9999\nnc: connect to google.com port 9999 (tcp) failed: Connection refused",
    "category": "NETWORKING"
  },
  {
    "id": "net10",
    "question": "Your web server is under heavy load and you need to see every active TCP connection — not just listening ports, but all established sessions — along with the process owning each socket. What command does this?",
    "answer": "sudo ss -antp",
    "explanation": "The listening-ports view is like a list of open storefronts. This broader view also shows every customer currently inside — every live connection. It tells you who (which process), where they're connecting from, and what state the conversation is in, giving you a full picture of your server's current network activity.",
    "usage": "Show all TCP sockets in every state with their owning process to audit live connections on a loaded web server.",
    "examples": [
      "sudo ss -antp  # all TCP connections with process",
      "sudo netstat -antp  # legacy equivalent",
      "sudo ss -ntp state established  # only ESTABLISHED connections",
      "sudo ss -ntp 'dport = :443'  # only outbound HTTPS",
      "sudo ss -ant | awk 'NR>1 {print $1}' | sort | uniq -c  # count per state",
      "sudo ss -ntp state close-wait  # find leaked CLOSE_WAIT sockets (app bug)"
    ],
    "memoryTip": "`ss -antp` = All TCP Numeric Process. Add `state established` / `state listening` / etc. to filter. Modern, fast — `netstat` is being phased out. Watch CLOSE_WAIT — many lingering ones means an APP isn't closing sockets properly.",
    "outputExample": "$ sudo ss -antp | head\nState        Recv-Q Send-Q  Local Address:Port    Peer Address:Port      Process\nLISTEN       0      128         0.0.0.0:22              0.0.0.0:*          users:((\"sshd\",pid=1432,fd=3))\nLISTEN       0      511         0.0.0.0:80              0.0.0.0:*          users:((\"nginx\",pid=2401,fd=6))\nESTAB        0      0      192.168.1.42:55232    142.250.185.46:443        users:((\"firefox\",pid=2412,fd=22))\nESTAB        0      0      192.168.1.42:22         192.168.1.5:48201       users:((\"sshd\",pid=8923,fd=4))\nTIME-WAIT    0      0      192.168.1.42:55321    142.250.185.46:443\nCLOSE-WAIT   0      0           127.0.0.1:8080      127.0.0.1:55321       users:((\"myapp\",pid=4521,fd=12))",
    "category": "NETWORKING"
  },
  {
    "id": "net11",
    "question": "You are writing a shell script that monitors database availability and must stop pinging automatically rather than run forever. What command sends exactly four ICMP packets to db1.internal and then exits?",
    "answer": "ping -c 4 hostname",
    "explanation": "Without a stop condition, pinging runs until you press Ctrl+C — which is fine in a terminal but breaks automation. The count flag is like setting a timer: ping exactly this many times, then stop and report whether any replies came back.",
    "usage": "Send exactly four ICMP packets to db1.internal and exit with code 0 if the host replies, non-zero if all packets are lost.",
    "examples": [
      "ping -c 4 google.com  # exactly 4 packets, then stop with summary",
      "ping -c 1 -W 2 host >/dev/null 2>&1 && echo up || echo down  # script health check",
      "ping -c 100 -q -i 0.2 host  # 100 fast pings, summary only",
      "ping -c 4 -W 1 host  # 4 packets, max 1s wait each",
      "for h in web1 web2 db1; do ping -c 1 -W 1 $h >/dev/null && echo \"$h UP\" || echo \"$h DOWN\"; done",
      "fping -c 3 web1 web2 web3  # PARALLEL ping of many hosts (install fping)"
    ],
    "memoryTip": "`-c N` Count of packets, `-i SEC` Interval, `-W SEC` Wait-per-packet, `-w SEC` Whole-deadline. Exit code: 0 = at least one reply, non-zero = all lost. For HOSTS-IN-PARALLEL use `fping -c N host1 host2 ...`. For port-level health checks, `nc -zv -w 2 host PORT` is more direct.",
    "outputExample": "$ ping -c 4 google.com\nPING google.com (142.250.185.46) 56(84) bytes of data.\n64 bytes from lga25s71-in-f14: icmp_seq=1 ttl=118 time=14.2 ms\n64 bytes from lga25s71-in-f14: icmp_seq=2 ttl=118 time=14.6 ms\n64 bytes from lga25s71-in-f14: icmp_seq=3 ttl=118 time=14.1 ms\n64 bytes from lga25s71-in-f14: icmp_seq=4 ttl=118 time=14.5 ms\n\n--- google.com ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3005ms\nrtt min/avg/max/mdev = 14.103/14.350/14.601/0.214 ms\n$ echo $?\n0",
    "category": "NETWORKING"
  },
  {
    "id": "net12",
    "question": "An IP address 203.0.113.55 appeared in your nginx access log and you want to know what hostname it belongs to. What is the fastest one-line DNS tool for this reverse lookup?",
    "answer": "host google.com",
    "explanation": "Just as you can look up a phone number to find whose name it belongs to, this command lets you give an IP address and get back the hostname it's registered under. It's the fastest and friendliest DNS lookup tool for a quick answer, forward or backward.",
    "usage": "Perform a reverse DNS lookup on 203.0.113.55 to identify the registered hostname in a single short command.",
    "examples": [
      "host google.com  # forward lookup: name → IP + IPv6 + mail",
      "host 8.8.8.8  # reverse lookup: IP → hostname (PTR)",
      "host -t MX gmail.com  # specifically mail exchanger records",
      "host -t TXT example.com  # TXT records (SPF, DMARC, domain verification)",
      "host google.com 1.1.1.1  # use Cloudflare's public DNS, not your default",
      "host -a example.com  # show ALL record types"
    ],
    "memoryTip": "Three DNS tools: `host` (terse, friendly), `dig` (detailed, admin-default), `nslookup` (interactive/legacy). `host NAME` forward. `host IP` reverse. `-t TYPE` for specific record (MX/TXT/NS/CNAME). `host NAME @SERVER` queries a specific resolver.",
    "outputExample": "$ host google.com\ngoogle.com has address 142.250.185.46\ngoogle.com has IPv6 address 2607:f8b0:4004:81d::200e\ngoogle.com mail is handled by 10 smtp.google.com.\n$ host 8.8.8.8\n8.8.8.8.in-addr.arpa domain name pointer dns.google.\n$ host -t MX gmail.com\ngmail.com mail is handled by 5 gmail-smtp-in.l.google.com.\ngmail.com mail is handled by 10 alt1.gmail-smtp-in.l.google.com.\n$ host -t TXT example.com | head -3\nexample.com descriptive text \"v=spf1 -all\"\nexample.com descriptive text \"_dmarc.example.com\"",
    "category": "NETWORKING"
  },
  {
    "id": "net13",
    "question": "API calls from your office to api.partner.com are slow and you need to find which router hop along the path is introducing the latency. What command reveals every network hop between you and the destination?",
    "answer": "traceroute hostname",
    "explanation": "Imagine sending a series of letters, each addressed to travel one stop further than the last. Every post office (router) along the route has to write back and say \"I got this letter.\" By reading all the return postcards in order, you build a map of the entire path and see how long each leg of the journey takes.",
    "usage": "Trace the network path from your office to api.partner.com and identify which hop introduces the most latency.",
    "examples": [
      "traceroute google.com  # default UDP trace",
      "traceroute -n google.com  # numeric only — skip reverse DNS (faster)",
      "traceroute -T -p 443 google.com  # TCP traceroute to port 443 (bypasses some firewalls)",
      "traceroute -I google.com  # ICMP echo (like Windows tracert)",
      "mtr -r -c 10 google.com  # MTR report mode: 10 cycles, batch output",
      "traceroute -m 20 host  # cap at 20 hops (default 30)"
    ],
    "memoryTip": "`traceroute` = path discovery via expiring TTL packets. Each hop = one router. `*` = hop didn't reply (often firewalled, not necessarily down). Modern preferred: `mtr` (continuous trace with rolling loss/latency). Variants: `-T` TCP, `-I` ICMP, `-U` UDP (default).",
    "outputExample": "$ traceroute -n google.com\ntraceroute to google.com (142.250.185.46), 30 hops max, 60 byte packets\n 1  192.168.1.1     1.234 ms  1.142 ms  1.089 ms\n 2  10.0.0.1        5.678 ms  5.523 ms  5.421 ms\n 3  72.14.213.69    8.234 ms  8.012 ms  7.891 ms\n 4  108.170.250.34  12.345 ms  12.103 ms  11.987 ms\n 5  * * *\n 6  142.250.185.46  14.234 ms  14.103 ms  13.987 ms\n$ mtr -r -c 3 google.com\nStart: 2026-05-17T14:35:00\nHOST: web1                            Loss%   Snt   Last   Avg  Best  Wrst StDev\n  1.|-- 192.168.1.1                    0.0%     3    1.2   1.1   1.0   1.2   0.1\n  2.|-- 10.0.0.1                       0.0%     3    5.7   5.5   5.4   5.7   0.2",
    "category": "NETWORKING"
  },
  {
    "id": "net14",
    "question": "After changing a cable on the server, eth0 no longer shows LOWER_UP in its flags. You want to toggle the interface off and back on to reset the link. What two commands do this?",
    "answer": "sudo ip link set eth0 up",
    "explanation": "A network interface is like a light switch for a network socket. Even if the hardware is physically connected, the operating system can turn the port on or off in software. Taking it down and bringing it back up forces the system to renegotiate the connection, which often fixes stuck states.",
    "usage": "Bring eth0 down and then up again to reset the link after a cable swap.",
    "examples": [
      "sudo ip link set eth0 up  # bring interface up",
      "sudo ip link set eth0 down  # take it down (kills active connections)",
      "ip link show  # list all interfaces with state and flags",
      "ip link show eth0  # just one interface",
      "sudo ip link set eth0 mtu 9000  # enable jumbo frames",
      "sudo ip link set eth0 address aa:bb:cc:11:22:33  # change MAC (must be down)"
    ],
    "memoryTip": "`ip link` = LAYER 2 (link). `ip addr` = LAYER 3 (IP). Verbs: `set IFACE up`/`down`, `set IFACE mtu N`, `set IFACE address MAC`, `set IFACE name NEW`. Flags to know: `UP` (admin enabled), `LOWER_UP` (cable/wifi connected — hardware), `RUNNING`.",
    "outputExample": "$ ip link show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff\n$ sudo ip link set eth0 down\n$ ip link show eth0\n2: eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff\n$ sudo ip link set eth0 up\n$ ip link show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff",
    "category": "NETWORKING"
  },
  {
    "id": "net15",
    "question": "Your server has both a VPN tunnel (tun0) and a LAN interface (eth0). You need to verify that traffic to 10.10.5.20 will go through the VPN and not out the LAN gateway. What single command confirms this?",
    "answer": "ip route get 8.8.8.8",
    "explanation": "Instead of reading the whole routing table and figuring out which entry wins, this command does the kernel's own evaluation for you: give it a destination IP and it tells you exactly which road (interface and gateway) the kernel would choose to reach it, including what source address the packet would carry.",
    "usage": "Confirm that the kernel would route packets to 10.10.5.20 through the VPN interface tun0 rather than through eth0.",
    "examples": [
      "ip route get 8.8.8.8  # which path to public DNS?",
      "ip route get 10.0.0.5  # which path to a LAN/VPN IP?",
      "ip route get to 1.1.1.1 from 192.168.1.42  # specify source IP",
      "ip route show  # the whole routing table (net8)",
      "ip rule list  # policy rules that select WHICH table to use",
      "ip route show table all | head -20  # ALL tables, not just 'main'"
    ],
    "memoryTip": "`ip route show` = whole table. `ip route get DEST` = 'for THIS dest, which rule wins?'. Pair with `ip rule list` for policy-based routing (multiple tables). Read fields: `via GW` (gateway), `dev IF` (interface), `src ADDR` (source IP we'd use).",
    "outputExample": "$ ip route get 8.8.8.8\n8.8.8.8 via 192.168.1.1 dev wlan0 src 192.168.1.42 uid 1000\n    cache\n$ ip route get 10.0.0.5\n10.0.0.5 via 10.8.0.1 dev tun0 src 10.8.0.42 uid 1000\n    cache\n$ ip rule list\n0:      from all lookup local\n100:    from 10.8.0.0/24 lookup vpn\n32766:  from all lookup main\n32767:  from all lookup default",
    "category": "NETWORKING"
  },
  {
    "id": "net16",
    "question": "You suspect a microservice is sending unexpected outbound requests. What command lets you capture every packet crossing eth0 and save it to a file for later inspection in Wireshark?",
    "answer": "tcpdump -i eth0",
    "explanation": "This command is a wiretap for your network interface. It copies every packet flowing in or out and lets you read them — or save them to a file. You can add filters so you only see the traffic you care about, like conversations on a specific port or to a specific address.",
    "usage": "Capture all traffic on eth0 and write it to /tmp/capture.pcap for analysis in Wireshark.",
    "examples": [
      "sudo tcpdump -i any -n -c 20  # 20 packets on any interface, no DNS lookup",
      "sudo tcpdump -i eth0 'port 53'  # only DNS traffic",
      "sudo tcpdump -i eth0 'host 8.8.8.8 and tcp'  # only TCP to/from 8.8.8.8",
      "sudo tcpdump -i eth0 -w /tmp/capture.pcap  # save raw packets for Wireshark",
      "sudo tcpdump -r /tmp/capture.pcap 'port 443'  # replay a pcap with a filter"
    ],
    "memoryTip": "`tcpdump` = TCP DUMP (but it captures UDP/ICMP/etc. too — name is historical). Always needs `sudo`. The filter syntax is called BPF — `host X`, `port N`, `tcp`, `udp`, combined with `and`/`or`/`not`. For visual analysis save with `-w` and open in Wireshark.",
    "outputExample": "$ sudo tcpdump -i eth0 -n -c 5\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes\n14:35:20.123456 IP 192.168.1.42.54321 > 8.8.8.8.53: 12345+ A? example.com. (29)\n14:35:20.130012 IP 8.8.8.8.53 > 192.168.1.42.54321: 12345 1/0/0 A 93.184.216.34 (45)\n14:35:20.131245 IP 192.168.1.42.41234 > 93.184.216.34.443: Flags [S], seq 1234567\n14:35:20.140891 IP 93.184.216.34.443 > 192.168.1.42.41234: Flags [S.], seq 7654321, ack 1234568\n14:35:20.141012 IP 192.168.1.42.41234 > 93.184.216.34.443: Flags [.], ack 1, win 502\n5 packets captured",
    "category": "NETWORKING"
  },
  {
    "id": "net17",
    "question": "You need to temporarily host a service on a second IP address (10.10.0.100/24) on eth0 for a migration test without rebooting. What command adds that address at runtime?",
    "answer": "sudo ip addr add 192.168.1.50/24 dev eth0",
    "explanation": "Linux lets you assign more than one address to the same network card — like having two phone extensions on the same physical desk phone. Adding an address at runtime is instant and doesn't affect existing connections, but it only lasts until the next reboot unless you also update your network configuration files.",
    "usage": "Temporarily bind a second IP 10.10.0.100/24 to eth0 so a migration test service can be reached at that address without a reboot.",
    "examples": [
      "sudo ip addr add 192.168.1.50/24 dev eth0  # add a secondary IPv4",
      "sudo ip addr add 2001:db8::1/64 dev eth0  # add an IPv6 address",
      "sudo ip addr del 192.168.1.50/24 dev eth0  # remove that IP",
      "sudo ip addr flush dev eth0  # wipe ALL addresses on eth0 (caution!)",
      "ip addr show eth0  # verify after",
      "sudo ip addr add 10.0.0.5/32 dev lo  # bind a service IP to loopback (common for keepalived/HA)"
    ],
    "memoryTip": "`ip addr add IP/PREFIX dev IFACE` adds; `ip addr del` removes; `ip addr flush` wipes. CIDR `/24` = 256 addresses, `/32` = single host. RUNTIME ONLY — gone on reboot. For persistence: NetworkManager / netplan / systemd-networkd / `/etc/network/interfaces`. Don't remove the PRIMARY IP if you're SSHed in!",
    "outputExample": "$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.42/24 brd 192.168.1.255 scope global dynamic eth0\n$ sudo ip addr add 192.168.1.50/24 dev eth0\n$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.42/24 brd 192.168.1.255 scope global dynamic eth0\n    inet 192.168.1.50/24 scope global secondary eth0\n$ ping -c1 192.168.1.50  # other hosts on the LAN can now reach this IP too\n64 bytes from 192.168.1.50: icmp_seq=1 ttl=64 time=0.045 ms",
    "category": "NETWORKING"
  },
  {
    "id": "net18",
    "question": "A deployment script needs to verify that ports 22, 80, and 443 are open on db.prod.internal before proceeding. What command tests a single TCP port and exits with a meaningful success or failure code — without starting an interactive session?",
    "answer": "nc -zv hostname port",
    "explanation": "This command is a no-nonsense port knock. It connects to a specific port on a remote machine, immediately reports whether the door opened or was slammed shut, and exits with a code your script can read — all without any interactive session or data exchange.",
    "usage": "Check whether TCP port 443 on db.prod.internal is reachable from the deployment script's host, with a 2-second timeout.",
    "examples": [
      "nc -zv google.com 443  # is 443 reachable?",
      "nc -zv -w 2 host 22  # SSH check with 2-second timeout",
      "nc -zv -w 1 host 80 443 8080  # check multiple ports (some nc versions)",
      "nc -zv host 1-1024  # scan port range (slow — use nmap for serious scanning)",
      "echo -e 'GET / HTTP/1.0\\r\\n\\r\\n' | nc -w 2 example.com 80 | head  # manual HTTP",
      "for p in 22 80 443 3306; do nc -zv -w 1 server $p 2>&1 | grep -E 'succeeded|failed'; done"
    ],
    "memoryTip": "`nc -zv host port` = Zero-I/O + Verbose port check. ALWAYS add `-w SEC` timeout or it can hang forever. Exit 0 = open, non-zero = closed/filtered. UDP with `-u` is unreliable (no handshake). For real port scans, use `nmap`. Modern alt: `ncat` (from nmap-ncat).",
    "outputExample": "$ nc -zv google.com 443\nConnection to google.com (142.250.185.46) 443 port [tcp/https] succeeded!\n$ nc -zv -w 2 google.com 12345\nnc: connect to google.com (142.250.185.46) port 12345 (tcp) failed: Connection refused\n$ for p in 22 80 443 3306 5432; do nc -zv -w 1 web1 $p 2>&1 | head -1; done\nConnection to web1 22 port [tcp/ssh] succeeded!\nConnection to web1 80 port [tcp/http] succeeded!\nConnection to web1 443 port [tcp/https] succeeded!\nnc: connect to web1 port 3306 (tcp) failed: Connection refused\nnc: connect to web1 port 5432 (tcp) failed: Connection refused",
    "category": "NETWORKING"
  },
  {
    "id": "net19",
    "question": "You need to call the GitHub REST API from a cron job, follow any redirects, suppress the progress bar, but still exit with a non-zero code if the server returns a 4xx or 5xx status. What curl flag combination achieves this?",
    "answer": "curl -fsSL https://example.com",
    "explanation": "This curl combination is designed for scripts that can't afford surprises. It downloads a URL quietly, follows any forwarding redirects automatically, and — critically — treats server-side errors as failures rather than silently handing an HTML error page to your script as if it were valid data.",
    "usage": "Call the GitHub REST API with curl in a cron job, following redirects silently, and failing with a non-zero exit code on any HTTP error response.",
    "examples": [
      "curl https://example.com  # GET the page, print body to stdout",
      "curl -fsSL https://example.com  # canonical 'fail-on-error, silent, follow-redirect' download",
      "curl -I https://example.com  # HEAD request — headers only, no body",
      "curl -X POST -d '{\"name\":\"Alice\"}' -H 'Content-Type: application/json' https://api.example.com/users",
      "curl -o /tmp/file.zip https://example.com/file.zip  # save to file",
      "curl -w '%{http_code}\\n' -o /dev/null -s https://example.com  # just the status code"
    ],
    "memoryTip": "`-fsSL` = Fail + Silent + Show-errors + Follow-redirects. `-I` HEAD. `-X` method. `-d` body. `-H` header. `-u user:pass` basic auth. `-w` extract field. The fail-fast pattern: `curl -fsSL URL` exits non-zero on 4xx/5xx — never silently use HTML error pages as data.",
    "outputExample": "$ curl -I https://example.com\nHTTP/2 200\ncontent-type: text/html; charset=UTF-8\ncontent-length: 1256\ndate: Sat, 17 May 2026 14:35:22 GMT\nlast-modified: Thu, 17 Oct 2019 07:18:26 GMT\n\n$ curl -w '%{http_code} %{time_total}s %{size_download}b\\n' -o /dev/null -s https://example.com\n200 0.103s 1256b\n$ curl -fsS https://api.github.com/users/torvalds | jq -r '.public_repos'\n9",
    "category": "NETWORKING"
  },
  {
    "id": "net20",
    "question": "You changed an A record for staging.example.com and need to verify the new IP is returning correctly from Google's public resolver (8.8.8.8) before announcing the change. What command queries that specific resolver with full detail?",
    "answer": "dig google.com",
    "explanation": "This is the power tool for DNS lookups. Unlike simpler alternatives that just give you an answer, this command shows the full conversation: what you asked, what the server replied, which server answered, how long it took, and the validity of the response. It's the choice of engineers who need to be certain about DNS.",
    "usage": "Query 8.8.8.8 specifically for the current A record of staging.example.com and display the full DNS response including which server answered.",
    "examples": [
      "dig google.com  # full detailed lookup",
      "dig +short google.com  # just the answer, scripting-friendly",
      "dig google.com MX  # mail exchanger records",
      "dig google.com TXT +short  # TXT records (SPF, DMARC)",
      "dig @8.8.8.8 google.com  # query Google's DNS specifically",
      "dig +trace example.com  # walk delegation from root — diagnose propagation"
    ],
    "memoryTip": "`dig` = DNS power tool. `+short` for scripts, `TYPE` (MX/TXT/NS/CNAME/SOA) at end, `@SERVER` to query a specific resolver, `+trace` to walk delegation, `-x IP` reverse lookup. Concise alt: `host`. Both ship in dnsutils/bind-utils package.",
    "outputExample": "$ dig +short google.com\n142.250.185.46\n$ dig google.com MX +short\n10 smtp.google.com.\n$ dig google.com\n; <<>> DiG 9.18.28 <<>> google.com\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345\n;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;google.com.\t\t\tIN\tA\n\n;; ANSWER SECTION:\ngoogle.com.\t\t300\tIN\tA\t142.250.185.46\n\n;; Query time: 14 msec\n;; SERVER: 192.168.1.1#53(192.168.1.1) (UDP)\n;; WHEN: Sat May 17 14:35:22 UTC 2026\n;; MSG SIZE  rcvd: 55",
    "category": "NETWORKING"
  },
  {
    "id": "text1",
    "question": "Your Nginx error log at /var/log/nginx/error.log has thousands of lines. You need to see only the lines that contain the word 'upstream'. What is the simplest command for this?",
    "answer": "grep error /var/log/nginx/error.log",
    "explanation": "Think of this command as the terminal version of Ctrl+F. You describe what you're looking for and it scans through potentially huge files and prints only the lines that match, no matter how many thousands of unrelated lines it has to skip.",
    "usage": "Search /var/log/nginx/error.log for all lines containing 'upstream' to diagnose reverse-proxy errors.",
    "examples": [
      "grep 'error' /var/log/nginx/error.log  # Find error lines",
      "grep -r 'TODO' ~/code/myapp/  # Search recursively for TODO comments",
      "grep -i 'linux' /etc/os-release  # Case-insensitive search"
    ],
    "memoryTip": "grep = search. Like using find function to search for text.",
    "outputExample": "$ grep 'pattern' file.txt\nline with pattern",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text2",
    "question": "An Nginx config file at /etc/nginx/sites-available/myapp.conf uses the old domain 'old.example.com' everywhere. What command replaces every occurrence with 'new.example.com' and saves the change in place?",
    "answer": "sed 's/old/new/g' data.txt",
    "explanation": "This command is a find-and-replace that works on files without opening an editor. You describe the old text, the new text, and tell it to swap every single occurrence throughout the file. Without the \"save in place\" flag, it just prints the result so you can preview the change before committing.",
    "usage": "Replace every occurrence of 'old.example.com' with 'new.example.com' directly in /etc/nginx/sites-available/myapp.conf, creating a .bak backup first.",
    "examples": [
      "sed 's/old/new/g' /etc/nginx/nginx.conf  # print result to stdout — file unchanged",
      "sed -i 's/old.example.com/new.example.com/g' /etc/nginx/sites-available/myapp.conf  # modify the file IN PLACE (GNU sed)",
      "sed -i.bak 's/old/new/g' /etc/nginx/nginx.conf  # in-place, but save original as .bak",
      "sed '/^#/d' /etc/nginx/nginx.conf  # delete every comment line (starts with #)",
      "sed -E 's/[0-9]+/NUM/g' /var/log/app/app.log  # extended regex: replace any number with 'NUM'"
    ],
    "memoryTip": "`sed` = Stream EDitor. `s/old/new/g` mnemonic: 'substitute / old / with / new / globally'. Without `g`, only the FIRST match per line is replaced. Without `-i`, the FILE is NOT modified — sed only prints to stdout. Always test once without `-i` before doing the destructive edit.",
    "outputExample": "$ cat hello.txt\nhello world\nhello again\n$ sed 's/hello/goodbye/' hello.txt\ngoodbye world\ngoodbye again\n$ sed 's/o/O/g' hello.txt\nhellO wOrld\nhellO again\n$ sed -i.bak 's/hello/hi/g' hello.txt\n$ cat hello.txt\nhi world\nhi again\n$ cat hello.txt.bak\nhello world\nhello again",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text3",
    "question": "Your server's 'ps aux' output has many columns. You want to print only the second column (the PID) from each line. What command extracts a specific whitespace-delimited column from text?",
    "answer": "awk '{print $1}' users.csv",
    "explanation": "Some text files and command outputs are like spreadsheets — each line has the same structure with values separated by spaces. This command lets you say \"show me only column 2\" from every row, regardless of how many other columns exist, without any complex scripting.",
    "usage": "Extract the PID column (column 2) from 'ps aux' output to get a clean list of running process IDs.",
    "examples": [
      "awk '{print $1, $3}' /var/log/access.log  # Print columns 1 and 3",
      "awk '$3 > 100 {print $1}' /var/log/metrics.log  # Print lines where column 3 > 100",
      "awk '{sum += $2} END {print sum}' /var/log/bytes.log  # Sum column 2"
    ],
    "memoryTip": "'awk' = powerful text processor. Like using advanced filtering to extract exactly what you need.",
    "outputExample": "$ awk '{print $1}' /etc/passwd\nroot\ndaemon\nbin",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text4",
    "question": "You have a file /tmp/hostnames.txt with one hostname per line in random order. What command arranges its lines alphabetically and prints the result?",
    "answer": "sort numbers.txt",
    "explanation": "This command reads every line of a file and rearranges them from top to bottom in a chosen order, like alphabetizing a pile of index cards. It prints the sorted result without modifying the original file, so you can preview it, redirect it, or pipe it into another command.",
    "usage": "Sort /tmp/hostnames.txt alphabetically and print the result to stdout.",
    "examples": [
      "sort /tmp/hostnames.txt  # Alphabetical sort",
      "sort -n /tmp/ports.txt  # Numeric sort",
      "sort -k 2 /var/log/access.log  # Sort by second column"
    ],
    "memoryTip": "sort = organize. Like arranging items in order.",
    "outputExample": "$ sort /tmp/hostnames.txt\nalice\nbob\ncharlie",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text5",
    "question": "You generated a list of 500 email addresses in /tmp/emails.txt but suspect many are repeated. What pipeline deduplicates the list, keeping only one copy of each address?",
    "answer": "sort file | uniq",
    "explanation": "This two-step pipeline is like sorting a stack of business cards alphabetically so all duplicates end up next to each other, then going through the stack and keeping only the first card when you see two identical ones in a row.",
    "usage": "Sort /tmp/emails.txt and remove duplicate lines so each email address appears only once.",
    "examples": [
      "sort /tmp/emails.txt | uniq  # deduplicate (sort required for non-adjacent dups)",
      "sort /tmp/emails.txt | uniq -c  # count occurrences of each unique email",
      "sort /tmp/emails.txt | uniq -d  # show only emails that have DUPLICATES",
      "sort /tmp/emails.txt | uniq -u  # show only emails that appear EXACTLY ONCE",
      "awk '!seen[$0]++' /tmp/emails.txt  # dedup WITHOUT sorting (preserve order)",
      "sort -u /tmp/emails.txt  # sort + uniq combined — same result as `sort | uniq`"
    ],
    "memoryTip": "`uniq` only collapses ADJACENT duplicates — always `sort` first or use `sort -u` (sort + uniq in one). Flags: `-c` count, `-d` only duplicates, `-u` only unique. Order-preserving dedup: `awk '!seen[$0]++'`.",
    "outputExample": "$ cat /tmp/emails.txt\nalice@example.com\nbob@example.com\nalice@example.com\nalice@example.com\ncharlie@example.com\nbob@example.com\n$ uniq /tmp/emails.txt  # NOT what you want — adjacent only\nalice@example.com\nbob@example.com\nalice@example.com\ncharlie@example.com\nbob@example.com\n$ sort /tmp/emails.txt | uniq  # correct\nalice@example.com\nbob@example.com\ncharlie@example.com\n$ sort /tmp/emails.txt | uniq -c\n      3 alice@example.com\n      2 bob@example.com\n      1 charlie@example.com",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text6",
    "question": "A config file /etc/myapp/settings.conf was created on Windows and contains carriage returns (\\r) at the end of each line, causing parse errors on Linux. What command strips all \\r characters from the file?",
    "answer": "tr 'a-z' 'A-Z' < names.txt",
    "explanation": "This command is a character-by-character substitution machine. You tell it which characters to look for and what to replace them with (or delete them entirely). It's perfect for mechanical transformations like stripping Windows line endings or converting uppercase to lowercase throughout a stream.",
    "usage": "Remove all carriage return characters (\\r) from /etc/myapp/settings.conf to fix Windows line endings.",
    "examples": [
      "tr 'a-z' 'A-Z' < /etc/myapp/settings.conf  # uppercase the file",
      "tr -d '\\r' < /etc/myapp/settings.conf > /tmp/settings_unix.conf  # strip CRs from a Windows file",
      "echo 'eth0,eth1,eth2' | tr ',' '\\n'  # turn comma list into one-per-line",
      "echo 'hello   world' | tr -s ' '  # squeeze multiple spaces to one",
      "tr -dc 'a-zA-Z0-9' < /dev/urandom | head -c 16  # random 16-char password"
    ],
    "memoryTip": "`tr` = TRanslate. Remember: NO FILENAME ARG — always use `<` or a pipe. Pair-think: `tr` for chars, `sed` for patterns, `awk` for fields/columns.",
    "outputExample": "$ echo 'Hello World' | tr 'a-z' 'A-Z'\nHELLO WORLD\n$ echo 'eth0,eth1,eth2' | tr ',' '\\n'\neth0\neth1\neth2\n$ echo 'aaabbbccc' | tr -s 'abc'\nabc",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text7",
    "question": "You need to extract just the usernames (first colon-separated field) from /etc/passwd without writing an awk script. What simpler command does this?",
    "answer": "cut -d: -f1 /etc/passwd",
    "explanation": "This command is a column-slicer for files that use a consistent separator character. You tell it what character separates the columns and which column number you want, and it prints only that column from every line — much simpler than awk when you just need one field from a predictably structured file.",
    "usage": "Extract only the username field (first colon-delimited column) from every line of /etc/passwd.",
    "examples": [
      "cut -d: -f1 /etc/passwd  # all usernames on the system",
      "cut -d, -f2,4 /tmp/sales.csv  # columns 2 and 4 of a simple CSV (no quoted commas!)",
      "cut -c1-10 /var/log/syslog  # first 10 characters of every line (e.g. extract dates)",
      "echo 'a:b:c:d' | cut -d: -f3-  # 'c:d' — from field 3 to end",
      "ps aux | tr -s ' ' | cut -d' ' -f2,11  # PID and command name (after squeezing spaces)"
    ],
    "memoryTip": "`cut` -d=Delimiter, -f=Field, -c=Character. The most common use is `cut -d: -f1` on `/etc/passwd`. If you need multi-char delimiters or smart CSV parsing, escalate to `awk` or `csvkit`.",
    "outputExample": "$ head -3 /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\n$ cut -d: -f1 /etc/passwd | head -3\nroot\ndaemon\nbin",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text8",
    "question": "You have two files: /tmp/usernames.txt (one username per line) and /tmp/emails.txt (one email per line, same order). What command combines them into a single two-column tab-separated file?",
    "answer": "paste file1 file2",
    "explanation": "Where stacking files on top of each other gives you more rows, this command puts files side by side to give you more columns. The first line from file one and the first line from file two become one combined line, separated by a tab. It's the horizontal equivalent of stacking.",
    "usage": "Combine /tmp/usernames.txt and /tmp/emails.txt side by side with a comma delimiter to produce a user-email mapping.",
    "examples": [
      "paste /tmp/usernames.txt /tmp/emails.txt  # tab-separated: username<TAB>email",
      "paste -d, /tmp/usernames.txt /tmp/emails.txt  # CSV: username,email",
      "paste -d: /tmp/usernames.txt /tmp/emails.txt /tmp/roles.txt  # three files joined with colons",
      "paste -s /tmp/usernames.txt  # SERIAL: all usernames on ONE tab-separated line",
      "paste -sd, /tmp/usernames.txt  # all usernames as a comma-separated list",
      "ls /etc/nginx/sites-enabled/ | paste -sd, -  # convert filenames to comma list (- = stdin)"
    ],
    "memoryTip": "`paste a b` = column merge (HORIZONTAL). `cat a b` = vertical concatenate. `-d CHAR` change delimiter (default TAB). `-s` SERIAL mode = each file's lines onto ONE line. For key-based joins (like SQL JOIN), use `join` instead.",
    "outputExample": "$ cat /tmp/usernames.txt\nalice\nbob\ncharlie\n$ cat /tmp/emails.txt\nalice@example.com\nbob@example.com\ncharlie@example.com\n$ paste /tmp/usernames.txt /tmp/emails.txt\nalice\talice@example.com\nbob\tbob@example.com\ncharlie\tcharlie@example.com\n$ paste -d, /tmp/usernames.txt /tmp/emails.txt\nalice,alice@example.com\nbob,bob@example.com\ncharlie,charlie@example.com\n$ paste -sd, /tmp/usernames.txt\nalice,bob,charlie\n$ ls /tmp/*.txt | paste -sd, -\n/tmp/emails.txt,/tmp/usernames.txt",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text9",
    "question": "A colleague deployed a new version of /etc/nginx/nginx.conf and you want to see exactly what lines changed compared to the backup at /etc/nginx/nginx.conf.bak. What command shows the differences in a format that looks like a git diff?",
    "answer": "diff file1 file2",
    "explanation": "This command places two files side by side in memory and lists every line that is present in one but not the other. The unified format output (with `-u`) uses `+` to mark lines added and `-` for lines removed, with surrounding context lines shown for reference — exactly like the output you see in `git diff`.",
    "usage": "Show what changed between /etc/nginx/nginx.conf.bak and the current /etc/nginx/nginx.conf in unified diff format.",
    "examples": [
      "diff /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf  # default format",
      "diff -u /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf  # unified format (preferred — git/patch style)",
      "diff -r /etc/nginx/sites-available.bak/ /etc/nginx/sites-available/  # recursive directory comparison",
      "diff -q /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf  # brief: just 'differ' or silent",
      "diff -y -W 100 /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf  # side-by-side, 100 cols wide",
      "diff -u /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf > /tmp/nginx_changes.patch  # produce a patch file"
    ],
    "memoryTip": "`diff` = file differences. `-u` UNIFIED format (preferred, like git diff), `-y` side-by-side, `-r` recursive (dirs), `-q` brief, `-i`/`-w`/`-B` ignore case/whitespace/blanks. Exit code: 0 same, 1 different. Generate patches with `>`, apply with `patch`. Color: pipe to `colordiff` or use `git diff --no-index`.",
    "outputExample": "$ diff -u /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf\n--- /etc/nginx/nginx.conf.bak\t2026-05-17 14:32:18.000000000 +0000\n+++ /etc/nginx/nginx.conf\t2026-05-17 14:32:42.000000000 +0000\n@@ -1,3 +1,4 @@\n worker_processes 1;\n-# listen 80\n+listen 80;\n events {}\n+server_name example.com;\n$ diff -q /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf\nFiles /etc/nginx/nginx.conf.bak and /etc/nginx/nginx.conf differ\n$ echo $?\n1",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text10",
    "question": "You wrote a script and want to know how many lines of code are in ~/code/myapp/src/main.py. What is the fastest single command for this?",
    "answer": "wc data.txt",
    "explanation": "This command is the terminal equivalent of a \"document statistics\" dialog. Feed it a file and it reports three numbers: how many lines, how many words, and how many bytes. You can ask for just one statistic at a time with a flag, which is perfect for scripts that need to check a file's size or line count.",
    "usage": "Count the number of lines in ~/code/myapp/src/main.py to get the code line count.",
    "examples": [
      "wc ~/code/myapp/src/main.py  # Show lines, words, chars",
      "wc -l ~/code/myapp/src/main.py  # Count only lines",
      "wc -w ~/code/myapp/src/*.py  # Count words in all py files"
    ],
    "memoryTip": "wc = word count. Like counting words in a document.",
    "outputExample": "$ wc -l ~/code/myapp/src/main.py\n312 /home/alice/code/myapp/src/main.py",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text11",
    "question": "The hostname 'dev-server' appears on hundreds of lines across /etc/hosts and needs to be updated to 'prod-server'. What command replaces every occurrence in the file directly?",
    "answer": "sed 's/old/new/g' data.txt",
    "explanation": "This is the command-line equivalent of \"Replace All\" in a text editor. You provide the text to find and the text to substitute, and it updates every single matching occurrence throughout the entire file — without you having to open an editor at all.",
    "usage": "Replace every occurrence of 'dev-server' with 'prod-server' in /etc/hosts, modifying the file in place.",
    "examples": [
      "sed 's/dev-server/prod-server/g' /etc/hosts  # Replace all occurrences (preview)",
      "sed -i 's/dev-server/prod-server/g' /etc/hosts  # Edit file in place",
      "sed '5d' /etc/hosts  # Delete line 5"
    ],
    "memoryTip": "'sed' = stream editor. Like automatically find-and-replace across a whole file.",
    "outputExample": "$ sed 's/dev-server/PROD-SERVER/g' /etc/hosts\n127.0.0.1 localhost\n192.168.1.10 PROD-SERVER\n192.168.1.11 PROD-SERVER-2",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text12",
    "question": "The 'df -h' output has multiple space-separated columns. You want to print only the filesystem name (column 1) and percent-used (column 5) for each line. What command does this?",
    "answer": "awk '{print $1}' users.csv",
    "explanation": "When a command outputs a table with many columns, this tool lets you cherry-pick exactly which columns to display. Unlike a simpler column-slicer, it's smart enough to handle variable amounts of whitespace between columns and can combine fields with custom formatting.",
    "usage": "Extract columns 1 (filesystem) and 5 (percent used) from 'df -h' output to build a compact disk usage summary.",
    "examples": [
      "df -h | awk '{print $1, $5}' # Print filesystem and percent used",
      "awk '$5 > 80 {print $1}' /tmp/disk.txt  # Print lines where column 5 > 80%",
      "awk '{sum += $1} END {print sum}' /tmp/bytes.txt  # Sum column 1"
    ],
    "memoryTip": "'awk' = advanced text processor. Like using a spreadsheet formula on text files.",
    "outputExample": "$ df -h | awk '{print $1, $5}'\nFilesystem Use%\n/dev/sda1 42%\ntmpfs 1%\n/dev/sda2 78%",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text13",
    "question": "You collected 300 IP addresses from your access log into /tmp/ips.txt (one per line) and want to see a unique sorted list. What pipeline accomplishes this?",
    "answer": "sort file | uniq",
    "explanation": "This two-step pipeline is the classic recipe for deduplication. First it alphabetizes the list so all copies of the same address end up next to each other, then it walks through and removes any line that's identical to the one above it. The result is a sorted list with exactly one copy of each unique entry.",
    "usage": "Produce a sorted deduplicated list of unique IP addresses from /tmp/ips.txt.",
    "examples": [
      "sort /tmp/ips.txt | uniq  # Sorted unique IPs",
      "sort /tmp/ips.txt | uniq -d  # Show only duplicate IPs",
      "sort /tmp/ips.txt | uniq -c  # Count occurrences of each IP"
    ],
    "memoryTip": "'sort | uniq' = deduplicate. Like removing duplicate entries from a list.",
    "outputExample": "$ sort /tmp/ips.txt | uniq\n10.0.0.1\n192.168.1.42\n203.0.113.5\n203.0.113.99",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text14",
    "question": "A CSV file /tmp/report.csv has fields separated by commas. You want to extract just the third field from every line without writing a script. What command does this?",
    "answer": "cut -d: -f1 /etc/passwd",
    "explanation": "This command splits each line at a specified separator character and hands back only the column number you want — like telling a CSV viewer \"show me column 3 only.\" It's much faster to type than writing an awk or Python script for this common task.",
    "usage": "Extract the third comma-separated field from every line in /tmp/report.csv.",
    "examples": [
      "cut -d: -f1 /etc/passwd  # Extract usernames",
      "cut -d, -f3 /tmp/report.csv  # Extract column 3 from CSV",
      "cut -d' ' -f1,3 /var/log/syslog  # Extract fields 1 and 3"
    ],
    "memoryTip": "'cut -d' = cut by delimiter. Like cutting a string at specific separators.",
    "outputExample": "$ cut -d, -f3 /tmp/report.csv\nregion\nus-east-1\neu-west-1\nap-south-1",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text15",
    "question": "A build script outputs hostnames in uppercase (WEBSERVER1, DBSERVER1) but your config file expects them in lowercase. What command converts uppercase letters to lowercase on stdin?",
    "answer": "tr 'a-z' 'A-Z' < names.txt",
    "explanation": "This command is a character-level find-and-replace. You give it two sets of characters — \"replace each character from set one with the matching character from set two.\" Mapping all uppercase letters to their lowercase counterparts makes every capital letter in the stream switch to lowercase.",
    "usage": "Convert uppercase hostnames from a build script to lowercase for use in configuration files.",
    "examples": [
      "echo 'WEBSERVER1' | tr 'A-Z' 'a-z'  # Convert to lowercase",
      "tr -d ' ' < /tmp/config.txt  # Remove all spaces",
      "echo 'a,b,c' | tr ',' '\\n'  # Convert commas to newlines"
    ],
    "memoryTip": "'tr' = translate characters. Like using find-and-replace at the character level.",
    "outputExample": "$ echo 'WEBSERVER1 DBSERVER1' | tr 'A-Z' 'a-z'\nwebserver1 dbserver1",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text16",
    "question": "You have /tmp/firstnames.txt and /tmp/lastnames.txt, each with one name per line in the same order. What command produces a tab-separated file combining them side by side?",
    "answer": "paste file1 file2",
    "explanation": "While stacking files on top of each other makes them taller, this command makes them wider. It reads the first line from each file simultaneously and joins them with a tab, then the second lines, and so on — like zipping two lists together into two columns.",
    "usage": "Merge /tmp/firstnames.txt and /tmp/lastnames.txt into one tab-separated file with two columns.",
    "examples": [
      "paste /tmp/firstnames.txt /tmp/lastnames.txt  # Combine two files",
      "paste -d, /tmp/firstnames.txt /tmp/lastnames.txt  # Use comma as separator",
      "paste -d'\\t' /tmp/firstnames.txt /tmp/lastnames.txt  # Tab-delimited merge"
    ],
    "memoryTip": "'paste' = tape together. Like pasting columns side by side.",
    "outputExample": "$ paste /tmp/firstnames.txt /tmp/lastnames.txt\nJohn\tSmith\nJane\tDoe\nBob\tJones",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text17",
    "question": "A monitoring script needs to print a formatted status line like 'web1: 99%' using a variable for the hostname and a variable for the percentage. Which command produces consistent, predictable formatted output in a shell script?",
    "answer": "printf '%s: %d\\n' name age",
    "explanation": "This command works like a fill-in-the-blank template. You write the format with placeholders that say \"put a string here\" or \"put a number here,\" then supply the actual values afterward. The result is precisely formatted, consistent output — unlike `echo`, which behaves differently across shells.",
    "usage": "Print a formatted status line 'web1: 99%' with consistent field widths using variables for hostname and percentage.",
    "examples": [
      "printf '%-10s %5d%%\\n' web1 99  # Left-aligned hostname, right-aligned percentage",
      "printf '%x\\n' 255  # Convert to hexadecimal: ff",
      "printf '%.2f\\n' 3.14159  # Round to 2 decimal places: 3.14"
    ],
    "memoryTip": "'printf' = formatted print. Like using a template to format output nicely.",
    "outputExample": "$ printf '%s: %d%%\\n' web1 99\nweb1: 99%",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text18",
    "question": "You want to find lines in /var/log/auth.log that contain either 'Failed password' or 'Invalid user'. What single grep command matches both patterns on the same file?",
    "answer": "grep -E '[0-9]{3}-[0-9]{4}' phonelist.txt",
    "explanation": "Extended regular expressions let you describe \"match this OR that\" patterns in a single command. Instead of running grep twice and combining the output, you write a single pattern with a pipe character between the alternatives, and every line matching either phrase is returned.",
    "usage": "Find all lines in /var/log/auth.log that contain either 'Failed password' or 'Invalid user' to identify login attack patterns.",
    "examples": [
      "grep -E '^[0-9]+' /var/log/syslog  # Lines starting with digits",
      "grep -E '(Failed password|Invalid user)' /var/log/auth.log  # Lines with either pattern",
      "grep -E '[a-z]+@[a-z]+\\.[a-z]+' /tmp/contacts.txt  # Email-like patterns"
    ],
    "memoryTip": "'grep -E' = extended patterns. Like using powerful search rules to find things.",
    "outputExample": "$ grep -E '(Failed password|Invalid user)' /var/log/auth.log\nMay 17 14:23:01 web1 sshd: Failed password for root from 203.0.113.5 port 54321\nMay 17 14:23:15 web1 sshd: Invalid user admin from 203.0.113.5 port 54322",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text19",
    "question": "You want to sort a list of domain names in /tmp/domains.txt by their top-level domain suffix (the part after the last dot). What trick uses a command that reverses each line's characters to accomplish this?",
    "answer": "rev words.txt",
    "explanation": "Sometimes sorting backward is the trick you need. Reversing every line character-by-character turns \"example.com\" into \"moc.elpmaxe\" — now a normal alphabetical sort groups all .com domains together, all .org domains together, and so on. Reversing again at the end restores the original names in suffix-sorted order.",
    "usage": "Sort /tmp/domains.txt by TLD suffix using the reverse-sort-reverse technique.",
    "examples": [
      "echo 'hello world' | rev  # dlrow olleh",
      "rev /tmp/domains.txt  # reverse every line of the file",
      "rev /tmp/domains.txt | sort | rev  # sort domain names by suffix (TLD)",
      "echo 'api.example.com/v1/users' | rev | cut -d/ -f1 | rev  # extract 'users' (last segment)",
      "tac /tmp/domains.txt  # DIFFERENT — reverses LINE ORDER, not characters"
    ],
    "memoryTip": "`rev` = REVerse each line's chars. `tac` = `cat` spelled backwards = reverse line order. So two reversers exist; remember the difference: rev = per-character, tac = per-line.",
    "outputExample": "$ echo 'example.com' | rev\nmoc.elpmaxe\n$ printf 'one\\ntwo\\nthree\\n' | rev\neno\nowt\neerht\n$ printf 'one\\ntwo\\nthree\\n' | tac\nthree\ntwo\none",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text20",
    "question": "A Python source file /home/alice/code/myapp/app.py uses real tab characters for indentation. Your team's style guide requires 4-space indentation. What command converts all tabs to 4-space groups?",
    "answer": "expand file.txt",
    "explanation": "This command converts the invisible tab characters that indent code into the equivalent number of spaces, respecting where each tab stop falls. The result looks identical on screen but uses spaces internally, which is what most style guides and linters expect.",
    "usage": "Convert all tab indentation in /home/alice/code/myapp/app.py to 4 spaces and save the result.",
    "examples": [
      "expand /home/alice/code/myapp/app.py  # tabs → 8 spaces (default), prints to stdout",
      "expand -t 4 /home/alice/code/myapp/app.py  # use 4 spaces per tab (common for code)",
      "expand -t 4 /home/alice/code/myapp/app.py > /tmp/app.py  # save the expanded version",
      "printf 'a\\tb\\tc\\n' | expand -t 4  # 'a   b   c' (3-space gaps to reach col 4, 8)",
      "unexpand -a /home/alice/code/myapp/app.py  # the reverse: spaces back to tabs (rarely needed)"
    ],
    "memoryTip": "`expand` = expand tabs (which are 'compressed' indentation) into spaces. Pair-think: `expand` (tab→space), `unexpand` (space→tab). Default tab width is 8 — set with `-t N`. To overwrite the original file, pipe through `sponge` (or use a temp file).",
    "outputExample": "$ printf 'col1\\tcol2\\tcol3\\n' > /tmp/demo.txt\n$ cat -A /tmp/demo.txt  # show the actual tab characters\ncol1^Icol2^Icol3$\n$ expand -t 4 /tmp/demo.txt\ncol1    col2    col3\n$ expand -t 4 /tmp/demo.txt | cat -A\ncol1    col2    col3$",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "sys1",
    "question": "You need to download the correct pre-built binary for your server's CPU architecture. What command tells you the kernel version and whether the machine is x86_64 or aarch64 in a single line?",
    "answer": "uname -a",
    "explanation": "Every Linux machine is running a specific kernel — the core operating system program — on a specific type of processor chip. This command prints a one-line summary of both, so you know exactly what kind of machine you're on before downloading software that must match.",
    "usage": "Display the full kernel version string and CPU architecture to choose the correct binary package for this server.",
    "examples": [
      "uname -a  # everything in one line",
      "uname -r  # just kernel release (e.g. 6.8.0-31-generic)",
      "uname -m  # just machine arch (x86_64 / aarch64 / armv7l)",
      "cat /etc/os-release  # DIFFERENT — distribution info, not kernel",
      "hostnamectl  # combined kernel+distro+hostname (systemd)"
    ],
    "memoryTip": "`uname` = Unix Name (of the kernel). `-a` = All. For DISTRO info you need `/etc/os-release` or `lsb_release -a`, NOT uname. Mnemonic: 'uname tells you about the kernel; os-release tells you about the OS flavor'.",
    "outputExample": "$ uname -a\nLinux laptop 6.8.0-31-generic #31-Ubuntu SMP PREEMPT_DYNAMIC Sat Apr 20 00:40:06 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux\n$ uname -r\n6.8.0-31-generic\n$ uname -m\nx86_64\n$ cat /etc/os-release | head -3\nPRETTY_NAME=\"Ubuntu 24.04.1 LTS\"\nNAME=\"Ubuntu\"\nVERSION_ID=\"24.04\"",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys2",
    "question": "A cron job that writes to /var/log/ fails with 'No space left on device', but you don't know which filesystem is full. What command shows free and used disk space on every mounted filesystem?",
    "answer": "df -h",
    "explanation": "Your server's storage is divided into separate filing cabinets (filesystems), each mounted at a different directory. This command lists all of them with how much is used and how much is left, so you can immediately see which cabinet is overflowing.",
    "usage": "Show disk usage for every mounted filesystem in human-readable format to find which one is causing 'No space left on device'.",
    "examples": [
      "df -h  # human-readable size per mounted filesystem",
      "df -hT  # add filesystem type column (ext4, xfs, tmpfs, ...)",
      "df -i  # inode usage (run out of these = same error as no space)",
      "df -h /var/log  # only the filesystem containing /var/log",
      "df -h --total  # add a TOTAL row at the bottom"
    ],
    "memoryTip": "`df` = Disk Free (per FILESYSTEM). Pair-think: `df` (mounts) vs `du` (folders). 'No space left on device' = check `df -h` first, then `df -i` (inode exhaustion is the sneaky cause).",
    "outputExample": "$ df -hT\nFilesystem     Type      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p2 ext4      450G  142G  286G  34% /\ntmpfs          tmpfs     7.9G  3.2M  7.9G   1% /run\n/dev/nvme0n1p1 vfat      511M  6.1M  505M   2% /boot/efi\ntmpfs          tmpfs     7.9G   42M  7.9G   1% /run/user/1000",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys3",
    "question": "Your Node.js application is unexpectedly slow and you suspect memory pressure. What command shows total RAM, how much is genuinely available for new processes, and whether the system is swapping?",
    "answer": "free -h",
    "explanation": "This command prints a concise memory report. The key number is not \"used\" but \"available\" — Linux deliberately fills unused RAM with file caches to speed things up, so the \"used\" column looks scary but most of it is reclaimable. If \"available\" is tiny and the swap row shows significant usage, the machine is under real memory pressure.",
    "usage": "Check how much RAM is genuinely available for new processes and whether the system has started using swap.",
    "examples": [
      "free -h  # human-readable GiB/MiB",
      "free -m  # force MiB units (numeric)",
      "free -s 2  # refresh every 2 seconds — watch usage change live (Ctrl+C to quit)",
      "free -h -t  # add a TOTAL row that includes swap",
      "watch -n1 free -h  # alternative live view via watch"
    ],
    "memoryTip": "Look at the `available` column, NOT `free`. `free` is misleadingly small because Linux uses spare RAM for caches; `available` is the honest 'room for new work'. Mnemonic: 'free is a liar, available is the truth'.",
    "outputExample": "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:            15Gi       6.2Gi       2.1Gi       342Mi       7.4Gi       8.5Gi\nSwap:          2.0Gi          0B       2.0Gi",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys4",
    "question": "Before launching a parallel build job that uses all CPU cores, you want to check whether the server is already under load. What command shows how long the server has been running and the current 1/5/15-minute load averages?",
    "answer": "uptime",
    "explanation": "This command gives you a three-number traffic report for your CPU. Each number is the average \"busyness\" over the last 1, 5, and 15 minutes. Compare them to the number of CPU cores: if the load matches the core count, the machine is fully busy; double the core count means things are already queueing up.",
    "usage": "Check whether the 12-core build server is already under significant load before launching an additional parallel make job.",
    "examples": [
      "uptime  # the standard one-line summary",
      "uptime -p  # pretty: 'up 3 days, 4 hours, 21 minutes'",
      "uptime -s  # absolute: '2026-05-12 09:43:21'",
      "nproc  # how many CPUs — compare against load avg to interpret",
      "watch -n5 uptime  # refresh every 5 seconds to watch load trend"
    ],
    "memoryTip": "Load average's three numbers are 1/5/15 MINUTE averages in that order. Compare each to `nproc` (total CPUs). Trend reading: middle number HIGHER than first = recovering; LOWER than first = climbing. Don't confuse load with CPU % — load includes processes waiting for disk too.",
    "outputExample": "$ uptime\n 14:32:18 up 3 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28\n$ uptime -p\nup 3 days, 4 hours, 21 minutes\n$ uptime -s\n2026-05-12 10:11:32\n$ nproc\n12   # so load 0.42 means we're using ~4% of CPU capacity — plenty of headroom",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys5",
    "question": "A machine learning library requires AVX2 CPU instructions. Before installing it, you need to verify whether the server's CPU supports that feature. What command shows CPU architecture, core count, and supported instruction sets?",
    "answer": "lscpu",
    "explanation": "Every processor has a \"feature sheet\" listing what special operations it can perform — things like hardware encryption, advanced math shortcuts, or virtualization support. This command reads that sheet and presents it in a clean summary alongside core counts and cache sizes.",
    "usage": "Verify whether the server's CPU supports the AVX2 instruction set required by a machine learning library.",
    "examples": [
      "lscpu  # full summary",
      "lscpu | grep '^CPU(s):'  # just the total logical CPU count",
      "lscpu | grep -i avx  # check for AVX instruction support",
      "nproc  # shorter way to get just the logical CPU count for scripts",
      "cat /proc/cpuinfo  # raw, per-core data (much longer)"
    ],
    "memoryTip": "`lscpu` follows the `ls*` family pattern: `ls`=list-files, `lsblk`=list-block-devices, `lspci`=list-PCI, `lsusb`=list-USB, `lscpu`=list-CPU. Once you spot the pattern, you'll guess these correctly forever.",
    "outputExample": "$ lscpu\nArchitecture:        x86_64\nCPU op-mode(s):      32-bit, 64-bit\nByte Order:          Little Endian\nCPU(s):              12\nThread(s) per core:  2\nCore(s) per socket:  6\nSocket(s):           1\nVendor ID:           GenuineIntel\nModel name:          Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nCPU MHz:             2600.000\nL1d cache:           192 KiB\nL2 cache:            1.5 MiB\nL3 cache:            12 MiB\nFlags:               fpu vme ... sse4_2 ... avx avx2 aes",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys6",
    "question": "Wi-Fi stopped working after a kernel update. You need to identify the network card's hardware name and confirm which kernel driver (if any) is currently bound to it. What command lists all PCI devices with driver information?",
    "answer": "lspci",
    "explanation": "Your computer's expansion cards — graphics, Wi-Fi, wired network, sound — connect through an internal bus called PCI. This command asks the kernel to list every device on that bus along with its name and, with the right flag, which driver software is currently managing it.",
    "usage": "List all PCI devices with their current kernel driver to diagnose why the Wi-Fi card lost its driver after a kernel update.",
    "examples": [
      "lspci  # one-line-per-device summary",
      "lspci | grep -i 'network\\|wireless'  # find wireless/NIC cards",
      "lspci | grep -i ethernet  # find the wired NIC",
      "sudo lspci -v  # verbose: kernel driver, IRQ, memory regions",
      "lspci -k  # show kernel driver and modules per device"
    ],
    "memoryTip": "`ls*` family: `lspci` = list PCI. Sister commands: `lsusb`, `lscpu`, `lsblk`, `lsmod`. All print 'what hardware/kernel objects are present'. If `lspci` shows a device but `-k` shows no driver, that's typically why the device isn't working.",
    "outputExample": "$ lspci\n00:00.0 Host bridge: Intel Corporation Coffee Lake HOST and DRAM Controller\n00:02.0 VGA compatible controller: Intel Corporation UHD Graphics 630\n00:14.0 USB controller: Intel Corporation Cannon Lake PCH USB 3.1 xHCI\n00:1f.6 Ethernet controller: Intel Corporation Ethernet Connection (7) I219-LM\n01:00.0 VGA compatible controller: NVIDIA Corporation TU117M [GeForce GTX 1650 Mobile]",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys7",
    "question": "You plugged in a USB flash drive but the system doesn't seem to recognize it. What command lists all currently detected USB devices so you can confirm whether Linux saw the insertion?",
    "answer": "lsusb",
    "explanation": "The moment you plug in a USB device, the kernel writes a note about it. This command reads those notes and lists every USB device currently connected — keyboards, flash drives, phones, webcams, and their identifying numbers. If your device isn't in this list at all, the problem is physical (cable, port, or the device itself).",
    "usage": "List all connected USB devices to confirm whether the newly inserted flash drive was detected by the kernel.",
    "examples": [
      "lsusb  # flat list of all USB devices",
      "lsusb -t  # tree view: which device is on which hub",
      "lsusb -v 2>/dev/null | less  # full descriptor, paged (sudo for complete data)",
      "lsusb -d 0781:5567  # show only the SanDisk device with that VID:PID",
      "watch -n1 lsusb  # see device list update live as you plug/unplug"
    ],
    "memoryTip": "`ls*` family: `lsusb` = list USB. Counterpart for storage: `lsblk` (shows USB sticks as block devices once mounted). If a device isn't in `lsusb`, the cable/port is the problem. If it's in `lsusb` but the OS can't use it, check `dmesg`.",
    "outputExample": "$ lsusb\nBus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 001 Device 003: ID 046d:c52b Logitech, Inc. Unifying Receiver\nBus 001 Device 005: ID 0781:5567 SanDisk Corp. Cruzer Blade\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys8",
    "question": "After updating to a new NVIDIA driver, you want to verify that the nvidia kernel module is actually loaded and not the old nouveau open-source driver. What command lists all currently loaded kernel modules?",
    "answer": "lsmod",
    "explanation": "The Linux kernel is built from plug-in pieces called modules — each one is a driver or feature that can be loaded and unloaded at runtime. This command lists every module that is currently active, so you can see at a glance which drivers the kernel is running right now.",
    "usage": "Confirm that the nvidia kernel module is loaded and nouveau is not, after installing an updated NVIDIA driver.",
    "examples": [
      "lsmod  # list loaded modules",
      "lsmod | grep -E 'nvidia|nouveau'  # is the NVIDIA driver loaded?",
      "lsmod | grep ext4  # is the ext4 filesystem driver loaded?",
      "modinfo i915  # everything known about the i915 (Intel GPU) module",
      "sudo modprobe -r nouveau  # unload (only if Used-by count is 0)"
    ],
    "memoryTip": "`ls*` family: `lsmod` = list MODules. Related verbs: `modprobe` (load/unload), `modinfo` (describe). If hardware is in `lspci`/`lsusb` but isn't working, the next stop is checking `lsmod` for its driver — and `dmesg` for why the driver didn't bind.",
    "outputExample": "$ lsmod | head\nModule                  Size  Used by\nnvidia_uvm           1404928  0\nnvidia_drm             77824  4\nbluetooth             786432  20 btusb,btrtl,btintel\next4                  933888  1\nbtrfs                1937408  0\nxhci_pci               24576  0\nxhci_hcd              315392  1 xhci_pci",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys9",
    "question": "A Python script is picking up unexpected configuration because an environment variable is set somewhere. What command prints every environment variable currently exported in your shell session?",
    "answer": "env",
    "explanation": "Environment variables are name-value pairs that get passed automatically to every program you launch. They're used to configure tools, pass secrets, and set preferences. This command prints all of them at once so you can see what \"invisible\" context your programs are inheriting.",
    "usage": "Print all environment variables in the current shell session to find which one is providing unexpected configuration to a Python script.",
    "examples": [
      "env  # print all environment variables",
      "env | sort  # alphabetical",
      "env | grep -i 'python\\|path'  # variables relevant to Python",
      "env -i bash -c 'env'  # run bash with EMPTY env — see what's truly required",
      "env VAR=value LANG=C ./script.sh  # run script with specific env, no side effects",
      "cat /proc/$$/environ | tr '\\0' '\\n' | sort  # MY shell's env from kernel POV"
    ],
    "memoryTip": "`env` = print environment. `env -i CMD` = empty env (debug). `env VAR=VAL CMD` = override for one command. `export NAME=value` to set + export, `unset NAME` to remove. Per-process env in `/proc/PID/environ` (NUL-separated — pipe through `tr '\\0' '\\n'`).",
    "outputExample": "$ env | sort | head\nHOME=/home/alice\nLANG=en_US.UTF-8\nLOGNAME=alice\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nPWD=/home/alice\nSHELL=/bin/bash\nTERM=xterm-256color\nUSER=alice\nXDG_RUNTIME_DIR=/run/user/1000\n_=/usr/bin/env\n$ env -i bash -c 'env'\nPWD=/home/alice\nSHLVL=1\n_=/usr/bin/env",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys10",
    "question": "A new team member asks what the server's hostname is before setting up an SSH config alias. What single command prints just the machine's hostname?",
    "answer": "hostname",
    "explanation": "Every computer on a network has a human-readable name — its hostname. It's what appears in the terminal prompt before the `$` and what other machines use to refer to it by name. This command simply prints that name.",
    "usage": "Print the server's hostname to use as the Host value in an SSH client config alias.",
    "examples": [
      "hostname  # Show current hostname",
      "hostname -i  # Show IP address",
      "hostname -f  # Show fully qualified domain name"
    ],
    "memoryTip": "'hostname' = system name. Like asking 'what is my computer called?'",
    "outputExample": "$ hostname\nweb1\n$ hostname -i\n192.168.1.42\n$ hostname -f\nweb1.example.com",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys11",
    "question": "A backup script needs to name output files with today's date in YYYY-MM-DD format, like 'backup_2026-05-19.tar.gz'. What command prints the current date in that exact format?",
    "answer": "date",
    "explanation": "The date command displays or sets the system time. Essential for understanding when events occurred in logs.",
    "usage": "Print today's date in YYYY-MM-DD format to use in a backup filename.",
    "examples": [
      "date  # Current date and time in default locale format",
      "date '+%Y-%m-%d'  # YYYY-MM-DD format: 2026-05-19",
      "date '+%s'  # Unix timestamp",
      "date -d 'yesterday' '+%Y-%m-%d'  # yesterday's date",
      "FILENAME=\"backup_$(date '+%Y-%m-%d').tar.gz\"  # use in a variable"
    ],
    "memoryTip": "'date' = show date/time. Like checking a clock to see what time it is.",
    "outputExample": "$ date '+%Y-%m-%d'\n2026-05-19\n$ date '+%Y-%m-%dT%H:%M:%S'\n2026-05-19T14:35:22\n$ date '+%s'\n1747665322",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys12",
    "question": "During a post-incident review, you need to know how long the production server has been running since its last reboot. What command shows both the uptime and the current CPU load?",
    "answer": "uptime",
    "explanation": "This command answers two questions at once: how long has this machine been running since it was last rebooted, and how busy is the CPU right now? The load numbers give you a quick sense of whether the server is handling its workload comfortably or struggling.",
    "usage": "Check how long the production server has been running and its current load averages for an incident post-mortem.",
    "examples": [
      "uptime  # System uptime and load",
      "uptime -p  # Pretty format: 'up 45 days, 12 hours'",
      "uptime -s  # Exact reboot datetime for incident timeline correlation",
      "w  # Uptime plus list of active users and their current commands"
    ],
    "memoryTip": "'uptime' = how long running. Like checking how long the server has been up.",
    "outputExample": "$ uptime\n 10:30:45 up 45 days, 12:34,  2 users,  load average: 0.15, 0.12, 0.10\n$ uptime -s\n2026-04-04 22:08:31",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys13",
    "question": "A suspicious login alert arrived. You need to see which users are currently logged into the server and what commands they are running. What command shows all active sessions with their current activity?",
    "answer": "hostnamectl status",
    "explanation": "This command is the security desk's visitor log for your server. It shows who is logged in, where they connected from, how long they've been idle, and what command they're currently running. Unlike a simple login list, it gives you enough context to spot unusual activity.",
    "usage": "List all currently logged-in users, their source IPs, and what commands they are executing to respond to a suspicious login alert.",
    "examples": [
      "w  # All logged-in users with activity",
      "w alice  # Show only alice's sessions",
      "who  # Simpler format — login info only, no current command"
    ],
    "memoryTip": "'w' = who's logged in AND what they're doing. Like checking a visitor log to see who's in the building and what they're up to.",
    "outputExample": "$ w\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU  WHAT\nalice    pts/0    192.168.1.5      10:00    5.00s  0.20s  0.10s bash\nbob      pts/1    203.0.113.99     14:32    0.00s  0.05s  0.01s vim /etc/passwd",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys14",
    "question": "You plugged in a new USB hard drive but the system doesn't mount it automatically. You want to check the kernel's hardware event log to see if Linux detected the device. What command shows recent kernel messages?",
    "answer": "dmesg",
    "explanation": "The kernel is constantly writing notes to itself as it deals with hardware events — plug in a USB device, load a driver, detect a disk error. This command reads those notes, which are stored in a circular memory buffer. It's the first place to look when something at the hardware level is behaving unexpectedly.",
    "usage": "Show the last 20 kernel messages to see whether the recently plugged-in USB hard drive was detected.",
    "examples": [
      "sudo dmesg | tail -20  # last 20 kernel messages — handy right after plugging in hardware",
      "sudo dmesg -T  # human-readable timestamps instead of seconds-since-boot",
      "sudo dmesg -w  # follow live, like tail -f (Ctrl+C to stop)",
      "sudo dmesg | grep -i usb  # only USB-related lines",
      "sudo dmesg --level=err,warn  # only errors and warnings"
    ],
    "memoryTip": "`dmesg` = 'display message'. Think of it as the kernel's diary: every time hardware sneezes, it scribbles a note here. First place to look when 'the computer is doing something weird at the hardware level'.",
    "outputExample": "$ sudo dmesg -T | tail -3\n[Wed May 15 14:02:11 2026] usb 1-2: new high-speed USB device number 5 using xhci_hcd\n[Wed May 15 14:02:11 2026] usb-storage 1-2:1.0: USB Mass Storage device detected\n[Wed May 15 14:02:12 2026] sd 6:0:0:0: [sdb] 30310400 512-byte logical blocks: (15.5 GB/14.5 GiB)",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys15",
    "question": "A web server returns 'No space left on device' even though 'df -h' shows 40% disk space remaining on /. What alternate df flag reveals whether inodes are exhausted?",
    "answer": "df -i",
    "explanation": "Besides capacity for data, a filesystem also has a limited number of \"slots\" (inodes) for tracking individual files. You can fill up all the slots — and start getting \"no space\" errors — while still having plenty of actual storage space left. This flag checks the slot count rather than the byte count.",
    "usage": "Check whether the root filesystem has exhausted its inode count, which would explain 'No space left on device' despite available disk bytes.",
    "examples": [
      "df -i  # Show inode usage for all filesystems",
      "df -i /var  # Check inode usage on /var specifically",
      "df -i | sort -k5 -rn  # Sort by inode usage percentage, highest first"
    ],
    "memoryTip": "'df -i' = disk inodes. Like counting file slots instead of disk space.",
    "outputExample": "$ df -i\nFilesystem     Inodes   IUsed    IFree IUse% Mounted on\n/dev/sda1     1310720  1310719        1  100% /\ntmpfs          2023424    1023  2022401    1% /run\n$ df -h\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G    20G   30G  40% /  # space left but inodes full!",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys16",
    "question": "A security audit requires showing the last time each user account on the system logged in. What command produces a per-user most-recent-login report?",
    "answer": "lastlog",
    "explanation": "This command reads a special login database maintained by the system and prints one row per user account showing when each person last signed in. Accounts that have never been used appear as \"Never logged in,\" which is useful for spotting and disabling stale accounts.",
    "usage": "Show the most recent login timestamp for every user account to support a security audit of inactive accounts.",
    "examples": [
      "lastlog  # All users with their last login timestamp",
      "lastlog -u alice  # Specific user's last login",
      "lastlog -b 90  # Users who haven't logged in for 90+ days (stale accounts)"
    ],
    "memoryTip": "'lastlog' = last logins. Like checking an access log to see when people logged in.",
    "outputExample": "$ lastlog\nUsername         Port     From             Latest\nroot             pts/0    192.168.1.1     Mon May 19 14:35:00 +0000 2026\nalice            pts/0    192.168.1.5     Mon May 19 10:00:00 +0000 2026\nwww-data                                  **Never logged in**\nbackup                                    **Never logged in**",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys17",
    "question": "An nginx service failed to start and you need to see the systemd service logs from the current boot to find the error. What command shows those journal log entries?",
    "answer": "journalctl --boot",
    "explanation": "On modern systemd-based Linux systems, logs from all services flow into a central journal. This command opens that journal and shows you everything from the current boot session — from the very first system message to right now — so you can trace exactly what happened when a service failed to start.",
    "usage": "View all systemd journal entries from the current boot to find the nginx startup error message.",
    "examples": [
      "journalctl --boot  # Current boot logs",
      "journalctl -u nginx --boot  # nginx service logs from current boot",
      "journalctl -n 50 -u nginx  # Last 50 nginx log lines",
      "journalctl -f -u nginx  # Follow nginx logs in real time"
    ],
    "memoryTip": "'journalctl' = system journal. Like reading the system's diary of events.",
    "outputExample": "$ journalctl -u nginx -b --no-pager | tail -5\nMay 19 14:35:00 web1 systemd[1]: Starting A high performance web server...\nMay 19 14:35:00 web1 nginx[2341]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nMay 19 14:35:00 web1 nginx[2341]: nginx: configuration file /etc/nginx/nginx.conf test failed\nMay 19 14:35:00 web1 systemd[1]: nginx.service: Control process exited, code=exited, status=1/FAILURE\nMay 19 14:35:00 web1 systemd[1]: Failed to start A high performance web server.",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys18",
    "question": "Your application server is being considered for an upgrade from 8GB to 16GB RAM. Before ordering, you want to know the current memory utilization at peak load. What command gives a concise summary of RAM and swap usage?",
    "answer": "free -h",
    "explanation": "This command prints a compact three-row table showing your total RAM, how much is genuinely in use vs. reserved for caching, and how much of the slower swap space is being used. The \"available\" column tells you the honest answer to \"how much room is left for new programs.\"",
    "usage": "Show total, used, available RAM, and swap usage to measure peak-load memory consumption before deciding on a RAM upgrade.",
    "examples": [
      "free -h  # Human readable GiB/MiB",
      "free -m  # Force megabytes",
      "free -w  # Wide display with separate buffers/cache columns"
    ],
    "memoryTip": "'free -h' = free memory. Like checking how much RAM is available.",
    "outputExample": "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:            7.8G        5.9G        512M        256M        1.4G        1.5G\nSwap:           2.0G        800M        1.2G  # swap in use = memory pressure!",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys19",
    "question": "Your Node.js application crashes with 'EMFILE: too many open files'. Before modifying system configs, you need to check what the current per-process open-file limit is in your shell session. What command shows all resource limits?",
    "answer": "ulimit -a",
    "explanation": "The operating system puts safety limits on how many resources each process can use — how many files it can open, how many processes it can spawn, how much CPU time it can consume. This command prints all those limits for your current shell session at once, so you can see where the bottleneck is.",
    "usage": "Display all resource limits for the current shell session to find the open-file descriptor limit causing the Node.js EMFILE crash.",
    "examples": [
      "ulimit -a  # Show all limits",
      "ulimit -n 65536  # Temporarily raise max open files for this session",
      "ulimit -v 2000000  # Set max virtual memory to ~2GB"
    ],
    "memoryTip": "'ulimit' = user limits. Like setting speed limits on different system resources.",
    "outputExample": "$ ulimit -a\ncore file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0\nfile size               (blocks, -f) unlimited\nopen files                      (-n) 1024\nmax user processes              (-u) 15674\nvirtual memory          (kbytes, -v) unlimited",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys20",
    "question": "A new colleague runs a script on a server and the script needs to detect the Linux distribution to choose the right package manager. What file contains the standard machine-readable distribution identity information?",
    "answer": "cat /etc/os-release",
    "explanation": "Every mainstream Linux distribution ships a small text file that acts as its identity card. It contains the official name, version, and a short identifier in a standardized format that scripts can read without parsing complex command output.",
    "usage": "Read /etc/os-release to determine the distribution name and version for a package-manager detection script.",
    "examples": [
      "cat /etc/os-release  # Full info",
      "grep '^ID=' /etc/os-release  # Just the distro short name",
      "lsb_release -a  # Alternative (requires lsb-release package)",
      "hostnamectl  # Modern format with distro + kernel"
    ],
    "memoryTip": "'cat /etc/os-release' = system info file. Like reading the system's identification card.",
    "outputExample": "$ cat /etc/os-release\nNAME=\"Ubuntu\"\nVERSION=\"24.04.1 LTS (Noble Numbat)\"\nID=ubuntu\nID_LIKE=debian\nPRETTY_NAME=\"Ubuntu 24.04.1 LTS\"\nVERSION_ID=\"24.04\"\nHOME_URL=\"https://www.ubuntu.com/\"\n$ source /etc/os-release && echo \"Distro: $ID, Version: $VERSION_ID\"\nDistro: ubuntu, Version: 24.04",
    "category": "SYSTEM INFO"
  },
  {
    "id": "pkg1",
    "question": "A fresh Ubuntu 24.04 server needs the git package installed for a CI pipeline. What command installs it from the official repositories?",
    "answer": "apt-get install git",
    "explanation": "A package manager is like an app store for your Linux server. You type the name of the software you want and the manager downloads it, installs it, and automatically handles everything else it needs to work — no hunting for download links or manual setup.",
    "usage": "Install the git package on a fresh Ubuntu server so the CI pipeline can check out repositories.",
    "examples": [
      "sudo apt install git  # install one package",
      "sudo apt install -y nginx curl  # install several without the y/n prompt",
      "sudo apt install ./mypkg.deb  # install a local .deb (resolves its deps from repos)",
      "sudo apt install nginx=1.24.0-1  # pin to a specific version",
      "sudo apt install --no-install-recommends vim  # skip 'recommended' extras"
    ],
    "memoryTip": "`apt install` = 'app store install'. APT is your distro's shop; `install` puts something on the shelf into your system. Always run `sudo apt update` first so APT knows what's currently on offer.",
    "outputExample": "$ sudo apt install git\nReading package lists... Done\nBuilding dependency tree... Done\nThe following additional packages will be installed:\n  git-man liberror-perl\nAfter this operation, 30.4 MB of additional disk space will be used.\nDo you want to continue? [Y/n] Y\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 git amd64 1:2.43.0-1 [3,679 kB]\nFetched 3,679 kB in 1s (5,123 kB/s)\nSelecting previously unselected package git.\nSetting up git (1:2.43.0-1) ...\nProcessing triggers for man-db (2.12.0-1) ...",
    "category": "PACKAGES"
  },
  {
    "id": "pkg2",
    "question": "You want to remove the apache2 package from a server and also delete its configuration files in /etc/apache2/ so a clean reinstall will use default settings. What command completely removes both the package and its configs?",
    "answer": "apt-get remove --purge apache2",
    "explanation": "Removing a package has two levels. The basic removal takes the programs away but leaves your customized settings behind in case you want them when you reinstall. The complete removal wipes everything — programs AND config files — giving you a clean slate.",
    "usage": "Completely remove the apache2 package and all its config files in /etc/apache2/ so a fresh reinstall starts from defaults.",
    "examples": [
      "sudo apt remove apache2  # uninstall apache2, keep /etc/apache2/ configs",
      "sudo apt purge apache2  # uninstall AND delete /etc/apache2/ configs",
      "sudo apt autoremove  # remove orphan dependencies nothing needs anymore",
      "sudo apt remove --purge apache2 apache2-common  # purge several at once",
      "sudo apt autoremove --purge  # orphans plus their configs (a deep clean)"
    ],
    "memoryTip": "`remove` keeps configs as a souvenir; `purge` is the scorched-earth version that scrubs `/etc/` too. Equivalent on RHEL/Fedora: `dnf remove PACKAGE`. Pair with `apt autoremove` after to mop up the dependencies that came along for the ride.",
    "outputExample": "$ sudo apt purge apache2\nReading package lists... Done\nBuilding dependency tree... Done\nThe following packages will be REMOVED:\n  apache2*\n0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.\nAfter this operation, 3,521 kB disk space will be freed.\nDo you want to continue? [Y/n] Y\n(Reading database ... 184231 files currently installed.)\nRemoving apache2 (2:2.4.58-1ubuntu8) ...\nPurging configuration files for apache2 (2:2.4.58-1ubuntu8) ...",
    "category": "PACKAGES"
  },
  {
    "id": "pkg3",
    "question": "Before installing a new package on an Ubuntu server, you want to make sure APT has the latest information about available packages. What command refreshes the package catalog without installing anything?",
    "answer": "apt-get update",
    "explanation": "Your package manager keeps a local copy of the software catalog, listing what's available and which versions. Over time that catalog gets stale. This command downloads a fresh copy from all your configured software sources — it's like hitting \"refresh\" on the app store before browsing. It doesn't install anything; it just updates the list.",
    "usage": "Refresh the APT package catalog to ensure the latest package versions and security updates are visible before installing anything.",
    "examples": [
      "sudo apt update  # refresh the package catalog",
      "sudo apt update && sudo apt upgrade  # the standard 'patch the system' combo",
      "sudo apt update 2>&1 | grep -i security  # focus on security-channel hits",
      "sudo apt update --error-on=any  # exit non-zero on ANY warning (useful in CI)",
      "ls /var/lib/apt/lists/  # see the cached metadata files themselves"
    ],
    "memoryTip": "`apt update` = refresh the SHOP CATALOG. `apt upgrade` = actually BUY the new versions. Two separate steps on Debian/Ubuntu, unlike `dnf upgrade` which does both. Stale catalog → mysterious 'Unable to locate package' errors.",
    "outputExample": "$ sudo apt update\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://archive.ubuntu.com/ubuntu noble-updates InRelease [128 kB]\nGet:3 http://security.ubuntu.com/ubuntu noble-security InRelease [128 kB]\nGet:4 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [342 kB]\nFetched 598 kB in 2s (271 kB/s)\nReading package lists... Done\nBuilding dependency tree... Done\n42 packages can be upgraded. Run 'apt list --upgradable' to see them.",
    "category": "PACKAGES"
  },
  {
    "id": "pkg4",
    "question": "After refreshing the package catalog, you want to install all available security patches and updates for every installed package. What command applies those upgrades?",
    "answer": "apt-get upgrade",
    "explanation": "After refreshing the catalog of available packages, this command compares what you have installed against what's available and installs the newer versions. It's the equivalent of pressing \"Update All\" in an app store — applying security patches, bug fixes, and new features across everything on the system.",
    "usage": "Install all available security patches and updates after running 'sudo apt update' on an Ubuntu server.",
    "examples": [
      "sudo apt update && sudo apt upgrade  # the standard combo",
      "sudo apt upgrade -y  # unattended (good in scripts/cron)",
      "sudo apt full-upgrade  # allow REMOVING packages to complete the upgrade",
      "sudo apt list --upgradable  # what WOULD upgrade — safe preview",
      "sudo apt upgrade --only-upgrade nginx  # upgrade just one package",
      "[ -f /var/run/reboot-required ] && echo 'Reboot needed'  # post-upgrade check"
    ],
    "memoryTip": "`upgrade` = safe (keeps packages held back), `full-upgrade` = allows REMOVALS, more powerful but riskier. Compare with Fedora's `dnf upgrade` which does both refresh + install in one shot. Always preview with `apt list --upgradable` if you're nervous.",
    "outputExample": "$ sudo apt upgrade\nReading package lists... Done\nBuilding dependency tree... Done\nCalculating upgrade... Done\nThe following packages have been kept back:\n  ubuntu-drivers-common\nThe following packages will be upgraded:\n  bash bash-completion curl git libc-bin libc6 libssl3 openssl\n8 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.\nNeed to get 12.4 MB of archives.\nAfter this operation, 18.4 kB of additional disk space will be used.\nDo you want to continue? [Y/n]",
    "category": "PACKAGES"
  },
  {
    "id": "pkg5",
    "question": "You need a tool to convert Markdown files to HTML but don't know the package name. What command searches the package catalog for packages related to 'markdown'?",
    "answer": "apt-cache search markdown",
    "explanation": "When you know what you want to do but not which program does it, this command searches the package catalog's names and descriptions for your keyword and lists all matching packages. It's the command-line equivalent of searching the app store for a category of software.",
    "usage": "Search the APT package catalog for packages related to 'markdown' to find a tool that converts Markdown to HTML.",
    "examples": [
      "apt search markdown  # find packages mentioning markdown",
      "apt search --names-only '^python3-flask'  # name-only regex search",
      "apt-cache search 'web server' | head  # older form, scripting-friendly",
      "apt search markdown | grep -i html  # narrow a broad keyword",
      "apt list --installed | grep python  # list ALREADY-installed packages by pattern",
      "apt-file search /usr/bin/pandoc  # which package ships this file?"
    ],
    "memoryTip": "`apt search` = catalog text search. Add `--names-only` for tighter results. To search by FILE not keyword, use `apt-file search` or `dpkg -S`. The 'WARNING: apt does not have a stable CLI' line on scripts is why scripts still prefer `apt-cache search` / `apt-get install`.",
    "outputExample": "$ apt search markdown\nSorting... Done\nFull Text Search... Done\ngoldmark/noble 1.7.0-1 amd64\n  Fast Markdown parser written in Go\n\npandoc/noble 3.1.11.1-1 amd64\n  general markup converter\n\nmarkdown/noble 1.0.1-13 all\n  Text-to-HTML conversion tool\n\ncmark/noble 0.30.3-1 amd64\n  CommonMark parsing and rendering program",
    "category": "PACKAGES"
  },
  {
    "id": "pkg6",
    "question": "Before installing the postgresql package you want to read its full description, version, and list of dependencies. What command displays this metadata for a package without installing it?",
    "answer": "apt-cache show postgresql",
    "explanation": "Before committing to installing a package, this command shows you the full product description — what it does, who maintains it, what other packages it needs, and how much space it will use. It reads from the locally cached catalog so it works even offline.",
    "usage": "Display the full metadata for the postgresql package including version, dependencies, and description before deciding whether to install it.",
    "examples": [
      "apt show postgresql  # full metadata for the candidate version",
      "apt-cache show postgresql  # full metadata for ALL available versions",
      "apt show postgresql 2>/dev/null | grep ^Version  # quick version grab",
      "apt show postgresql | grep -E '^(Depends|Recommends)'  # dependency line(s)",
      "dpkg -s postgresql  # installed version + status (no repo data)",
      "apt-cache policy postgresql  # candidate + installed + repo priority info"
    ],
    "memoryTip": "`apt show` = read the BOX before you BUY. RHEL/Fedora equivalent: `dnf info`. For installed-only info from the LOCAL dpkg DB use `dpkg -s`; for repo policy + version table use `apt-cache policy`.",
    "outputExample": "$ apt show postgresql\nPackage: postgresql\nVersion: 16+257\nPriority: optional\nSection: database\nOrigin: Ubuntu\nMaintainer: Debian PostgreSQL Maintainers <team+postgresql@tracker.debian.org>\nInstalled-Size: 66.6 kB\nDepends: postgresql-16 (>= 16+257)\nRecommends: postgresql-doc\nDescription: object-relational SQL database (supported version)\nHomepage: https://www.postgresql.org/",
    "category": "PACKAGES"
  },
  {
    "id": "pkg7",
    "question": "A deployment script needs to check whether the curl package is installed before attempting to download files. What pipeline confirms whether a package is installed and exits with a meaningful status code?",
    "answer": "dpkg -l | grep curl",
    "explanation": "This command looks up the local package database and shows the installation status of any package matching your keyword. Each line starts with a two-letter status code that tells you exactly what state the package is in — installed, config-only, or missing.",
    "usage": "Check whether the curl package is installed in a deployment script, exiting with failure if it is missing.",
    "examples": [
      "dpkg -l | grep -i curl  # case-insensitive search across all installed",
      "dpkg -l curl  # status of one specific package (no grep needed)",
      "dpkg -s curl >/dev/null 2>&1 && echo INSTALLED || echo MISSING  # script-friendly check",
      "apt list --installed 2>/dev/null | grep ^curl  # APT-style version of the same",
      "dpkg -l | awk '/^ii/ {print $2}' > /tmp/installed.txt  # clean manifest of installed pkgs",
      "command -v curl >/dev/null && echo found  # check executable on PATH (faster but not the same)"
    ],
    "memoryTip": "`dpkg -l` = list local DB. The two-letter status code: first = WANT, second = HAVE — `ii` is the normal happy state. For scripts, `dpkg -s pkg` exits 0 iff installed, no piping needed.",
    "outputExample": "$ dpkg -l | grep -i curl\nii  curl                         8.5.0-2ubuntu10.3  amd64        command line tool for transferring data with URL syntax\nii  libcurl4t64:amd64            8.5.0-2ubuntu10.3  amd64        easy-to-use client-side URL transfer library (OpenSSL flavour)",
    "category": "PACKAGES"
  },
  {
    "id": "pkg8",
    "question": "You added a PPA for a newer version of nginx and want to confirm which version APT would install and which repository it would come from. What command shows the installed version, candidate version, and all available sources for a package?",
    "answer": "apt-cache policy nginx",
    "explanation": "When you have multiple software sources (official repos, PPAs, third-party repos), APT has to decide which version to install from which source. This command exposes that decision process: it shows what's currently installed, what APT would pick next, and all the available versions ranked by priority.",
    "usage": "Show which nginx version is installed, which version APT would install next, and which repository each version comes from.",
    "examples": [
      "apt-cache policy nginx  # full picture for one package",
      "apt-cache policy  # the global view: every source's priority",
      "apt-cache policy nginx | grep -E 'Installed|Candidate'  # quick installed vs. candidate",
      "apt-cache madison nginx  # tabular per-version+repo view (one line per version)",
      "dpkg -s nginx | grep Version  # installed version only, from local DB",
      "apt list -a nginx  # newer apt's view of available versions"
    ],
    "memoryTip": "`apt-cache policy` = the COURT case for a package: who wants to install it, who CAN install it, what's the priority. `Installed:` (none) means not installed; `Candidate:` shows what `apt install` would do. Use to investigate 'wrong version got picked' mysteries.",
    "outputExample": "$ apt-cache policy nginx\nnginx:\n  Installed: 1.24.0-2ubuntu7\n  Candidate: 1.24.0-2ubuntu7.3\n  Version table:\n     1.24.0-2ubuntu7.3 500\n        500 http://archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages\n        500 http://security.ubuntu.com/ubuntu noble-security/main amd64 Packages\n *** 1.24.0-2ubuntu7 100\n        100 /var/lib/dpkg/status",
    "category": "PACKAGES"
  },
  {
    "id": "pkg9",
    "question": "A Dockerfile's final layer is very large because APT cached the downloaded .deb files during installation. What command deletes those cached archives to shrink the image?",
    "answer": "apt-get clean",
    "explanation": "Every time APT installs a package, it saves a copy of the downloaded installer file in a cache folder — in case you need to reinstall later without downloading again. Over time this cache grows significantly. This command empties that folder, reclaiming the disk space without affecting any installed software.",
    "usage": "Delete all cached .deb archives from /var/cache/apt/archives/ to reduce a Docker image layer size.",
    "examples": [
      "sudo apt clean  # delete EVERY cached .deb — maximum free space",
      "sudo apt autoclean  # only delete .debs no longer obtainable from any repo (safer)",
      "du -sh /var/cache/apt/archives  # see how big the cache is right now",
      "sudo apt-get clean && sudo apt-get autoremove  # clean cache + drop orphan deps",
      "RUN apt-get install -y git && apt-get clean && rm -rf /var/lib/apt/lists/*  # Dockerfile pattern"
    ],
    "memoryTip": "`apt clean` = empty the DOWNLOAD folder. Does NOT touch installed software. Companion: `apt autoremove` (drops orphan DEPS) — these two are commonly run together to free space. RHEL equivalent: `dnf clean all`.",
    "outputExample": "$ du -sh /var/cache/apt/archives\n412M\t/var/cache/apt/archives\n$ sudo apt clean\n$ du -sh /var/cache/apt/archives\n8.0K\t/var/cache/apt/archives",
    "category": "PACKAGES"
  },
  {
    "id": "pkg10",
    "question": "Your staging environment must stay on nginx 1.24 while production runs 1.26, and you want to prevent 'apt upgrade' from updating nginx on staging. What command freezes a package at its current version?",
    "answer": "apt-mark hold nginx",
    "explanation": "This command puts a freeze on a specific package so the system's update process skips it entirely. The package stays at its current version no matter what newer versions become available, until you explicitly remove the freeze.",
    "usage": "Prevent 'apt upgrade' from updating nginx on the staging server that must stay on version 1.24.",
    "examples": [
      "sudo apt-mark hold nginx  # freeze nginx — never upgrade",
      "sudo apt-mark unhold nginx  # release the hold; will upgrade on next run",
      "apt-mark showhold  # list currently held packages",
      "sudo apt-mark manual nginx  # mark as user-installed (won't be autoremoved)",
      "echo 'nginx hold' | sudo dpkg --set-selections  # alt low-level form"
    ],
    "memoryTip": "`apt-mark hold` = FREEZE this package. Sibling commands: `unhold` (thaw), `auto`/`manual` (autoremove eligibility), `showhold`/`showauto`/`showmanual` (audit). Compare with Fedora `sudo dnf versionlock add PKG`.",
    "outputExample": "$ sudo apt-mark hold nginx\nnginx set on hold.\n$ apt-mark showhold\nnginx\n$ sudo apt upgrade\n...\nThe following packages have been kept back:\n  nginx\n0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.",
    "category": "PACKAGES"
  },
  {
    "id": "pkg11",
    "question": "You downloaded the Google Chrome .deb file from Google's website to /tmp/google-chrome-stable_current_amd64.deb. What is the recommended command to install it, ensuring dependencies are resolved automatically?",
    "answer": "dpkg -i package.deb",
    "explanation": "Installing a package file you downloaded directly is slightly different from installing from the official repositories. The recommended approach uses APT rather than the low-level installer, because APT automatically figures out any other packages that are needed and downloads them from the internet.",
    "usage": "Install the downloaded Google Chrome .deb file from /tmp/, automatically resolving any missing dependencies.",
    "examples": [
      "sudo apt install ./google-chrome-stable_current_amd64.deb  # modern: APT resolves deps automatically",
      "sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb  # low-level — may leave system 'broken' if deps missing",
      "sudo apt install -f  # fix broken state after a failed dpkg -i",
      "dpkg-deb -c /tmp/google-chrome-stable_current_amd64.deb  # PEEK inside the .deb without installing (list contents)",
      "dpkg-deb -I /tmp/google-chrome-stable_current_amd64.deb  # print the .deb's control/metadata file"
    ],
    "memoryTip": "Prefer `sudo apt install ./file.deb` over `dpkg -i` — APT resolves deps; dpkg doesn't. If you do use dpkg and it breaks: `sudo apt install -f` cleans up. Always `./` for a local file, otherwise APT looks in repos for that name.",
    "outputExample": "$ sudo apt install ./google-chrome-stable_current_amd64.deb\nReading package lists... Done\nNote, selecting 'google-chrome-stable' instead of './google-chrome-stable_current_amd64.deb'\nThe following additional packages will be installed:\n  fonts-liberation libu2f-udev libvulkan1\nAfter this operation, 270 MB of additional disk space will be used.\nDo you want to continue? [Y/n] Y\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 libu2f-udev all 1.1.10-3 [9,160 B]\nSelecting previously unselected package google-chrome-stable.\nSetting up google-chrome-stable (124.0.6367.118-1) ...",
    "category": "PACKAGES"
  },
  {
    "id": "pkg12",
    "question": "Before removing libssl3 from a server, you need to know which other installed packages depend on it — removing it might break them. What command shows the reverse dependencies of a package?",
    "answer": "apt-cache depends libssl3",
    "explanation": "Every package can declare that it needs other packages to work. This command shows that dependency graph — both forward (what this package needs) and backward (what other packages need this one). Before removing something, always check who depends on it to avoid accidentally breaking other software.",
    "usage": "List all installed packages that depend on libssl3 to assess the impact of removing it.",
    "examples": [
      "apt-cache depends nginx  # one level — direct deps + recommends + suggests",
      "apt-cache depends --recurse --no-recommends --no-suggests nginx | sort -u  # full clean tree",
      "apt-cache rdepends libssl3  # who needs libssl3? (before removing it)",
      "apt-cache rdepends --installed --recurse libssl3 | wc -l  # how many installed things use it",
      "apt show nginx | grep -E '^Depends|^Recommends'  # alt: read from `apt show` output"
    ],
    "memoryTip": "`depends` = what I need. `rdepends` = who needs me (reverse). Five flavors: Depends/PreDepends (must), Recommends/Suggests (nice-to-have), Conflicts/Breaks (must NOT). `|` in a dep line means alternatives.",
    "outputExample": "$ apt-cache rdepends --installed libssl3\nlibssl3\nReverse Depends:\n  wget\n  curl\n  openssh-client\n  openssl\n  git\n  apt\n  python3\n  nginx",
    "category": "PACKAGES"
  },
  {
    "id": "pkg13",
    "question": "You need Python 3.12 on Ubuntu 22.04 but the official repos only ship 3.10. A colleague says to use the deadsnakes PPA. What command adds that PPA and automatically updates the package catalog?",
    "answer": "apt-add-repository 'ppa:user/ppa-name'",
    "explanation": "A PPA is a personal software repository hosted by a developer or team that contains packages not in the official Ubuntu repositories — often newer versions. Adding one makes those packages available to APT as if they were in the official repos, and this command handles the whole process in one step.",
    "usage": "Add the deadsnakes PPA to install Python 3.12 on Ubuntu 22.04 and automatically update the package catalog.",
    "examples": [
      "sudo add-apt-repository ppa:deadsnakes/ppa  # add a PPA + auto-update",
      "sudo add-apt-repository --remove ppa:deadsnakes/ppa  # remove it cleanly",
      "sudo add-apt-repository 'deb https://download.docker.com/linux/ubuntu noble stable'  # arbitrary apt source",
      "sudo apt install software-properties-common  # provides add-apt-repository (if missing)",
      "ls /etc/apt/sources.list.d/  # see which third-party repos are active"
    ],
    "memoryTip": "PPAs = Ubuntu-only third-party repos. `add-apt-repository` adds source file + key + auto-update in one command. SECURITY: anything you add can install root code on every `apt upgrade` — only add what you trust. Prefer the modern `signed-by=` pattern.",
    "outputExample": "$ sudo add-apt-repository ppa:deadsnakes/ppa\nThis PPA contains newer Python versions for various Ubuntu releases.\n More info: https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa\nPress [ENTER] to continue or Ctrl-c to cancel.\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 https://ppa.launchpadcontent.net/deadsnakes/ppa/ubuntu noble InRelease [18.1 kB]\n...\nReading package lists... Done",
    "category": "PACKAGES"
  },
  {
    "id": "pkg16",
    "question": "During a security audit you need to list every active APT repository configured on the server, including any third-party sources that were added. What command shows all active repo lines?",
    "answer": "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list",
    "explanation": "Your server's software sources are configured in text files in two locations. This command reads all of them at once and shows every active repository line — both the official Ubuntu sources and any third-party repositories that have been added, so you can see exactly where software is coming from.",
    "usage": "List all active APT repository entries across both /etc/apt/sources.list and /etc/apt/sources.list.d/ for a security audit.",
    "examples": [
      "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/  # legacy .list files",
      "grep -R 'URIs:' /etc/apt/sources.list.d/  # modern DEB822 .sources files",
      "apt-cache policy  # priority view of every active source",
      "ls -la /etc/apt/sources.list.d/  # one file per third-party repo",
      "cat /etc/apt/sources.list.d/docker.list  # peek at a specific third-party source"
    ],
    "memoryTip": "Two locations: `/etc/apt/sources.list` (distro) + `/etc/apt/sources.list.d/*` (third party). Ubuntu 24.04 mostly uses `.sources` files (DEB822 multi-line). Tip: `apt-cache policy` gives a priority-aware view if you don't want to grep raw files.",
    "outputExample": "$ grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list 2>/dev/null\n/etc/apt/sources.list:deb http://archive.ubuntu.com/ubuntu noble main restricted universe multiverse\n/etc/apt/sources.list:deb http://archive.ubuntu.com/ubuntu noble-updates main restricted universe multiverse\n/etc/apt/sources.list.d/docker.list:deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable",
    "category": "PACKAGES"
  },
  {
    "id": "pkg17",
    "question": "You encounter the 'rsync' command but don't know what flags it accepts. What command opens its offline manual page?",
    "answer": "man rsync",
    "explanation": "Every command on a Linux system comes with a built-in instruction manual. This command opens that manual in a pager so you can read the full documentation, including every flag, configuration option, and usage example — without needing an internet connection.",
    "usage": "Open the offline manual page for rsync to look up its available flags and syntax.",
    "examples": [
      "man rsync  # the everyday command page",
      "man 5 crontab  # specifically section 5 — file format of crontabs",
      "man -k 'list directory'  # apropos: search descriptions for a phrase",
      "man -f ls  # whatis: one-line description",
      "man bash  # epic 5000+-line shell reference",
      "rsync --help | less  # quick flag summary alternative"
    ],
    "memoryTip": "`man` = MANUAL. Section numbers matter when names collide: `man 1 passwd` (command) vs `man 5 passwd` (file format). Navigation in less: `/` search, `n`/`N` next/prev, `space`/`b` page, `q` quit. Companion: `apropos`, `whatis`, `--help`, `tldr`.",
    "outputExample": "$ man ls\nLS(1)                                        User Commands                                        LS(1)\n\nNAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n\nDESCRIPTION\n       List information about the FILEs (the current directory by default).  Sort entries alphabetically\n       if none of -cftuvSUX nor --sort is specified.\n\n       -a, --all\n              do not ignore entries starting with .\n\nManual page ls(1) line 1 (press h for help or q to quit)",
    "category": "PACKAGES"
  },
  {
    "id": "pkg14",
    "question": "An apt install failed halfway through due to a network error and now every apt command says 'E: Unmet dependencies'. What command performs a health check and identifies the broken packages?",
    "answer": "apt-get check",
    "explanation": "When a package installation crashes in the middle, it can leave the package system in a broken state where some packages are only half-installed or have unsatisfied dependencies. This command scans the installed-package database for exactly those inconsistencies, reporting what's broken so you know what to fix.",
    "usage": "Run a consistency check on the dpkg package database to identify broken or unsatisfied dependencies after a failed installation.",
    "examples": [
      "sudo apt-get check  # quick health check",
      "sudo apt --fix-broken install  # the everyday recovery command (alias: apt install -f)",
      "sudo dpkg --configure -a  # finish configuring packages stuck mid-install",
      "sudo apt --fix-missing install  # retry downloads that failed mid-transaction",
      "dpkg -l | awk '$1 !~ /^ii$/ {print}'  # spot packages NOT in clean 'ii' state",
      "sudo apt update && sudo apt --fix-broken install && sudo dpkg --configure -a  # full recovery dance"
    ],
    "memoryTip": "Recovery order: `apt-get check` (diagnose) → `apt --fix-broken install` (resolve deps) → `dpkg --configure -a` (finish half-configured packages). Anything other than `ii` in `dpkg -l` first column = potential trouble.",
    "outputExample": "$ sudo apt-get check\nReading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\n# (silent = healthy. If broken you'll see:)\n# E: Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution).",
    "category": "PACKAGES"
  },
  {
    "id": "pkg15",
    "question": "The command 'htop' is not found and you need to know which package provides the /usr/bin/htop binary. What command searches repository metadata to find which package ships a specific file path?",
    "answer": "apt-file list htop",
    "explanation": "Sometimes you know the file or command you need but not which package to install to get it. This tool lets you search in reverse — give it a file path and it tells you which package contains that file, even if the package isn't currently installed.",
    "usage": "Find which package provides /usr/bin/htop so you can install the correct package.",
    "examples": [
      "sudo apt install apt-file && sudo apt-file update  # one-time setup",
      "apt-file search /usr/bin/htop  # which package provides /usr/bin/htop?",
      "apt-file list nginx  # every file the nginx package ships",
      "apt-file search bin/pandoc  # broader path search",
      "dpkg -L nginx  # alternative: installed-only file list",
      "dpkg -S /etc/nginx/nginx.conf  # installed-only reverse search"
    ],
    "memoryTip": "Two pairs: `apt-file list` ↔ `apt-file search` (repo-wide), `dpkg -L` ↔ `dpkg -S` (installed only). Repo-wide tools need an explicit cache update. Fedora equivalents: `dnf repoquery -l PKG` and `dnf provides PATH`.",
    "outputExample": "$ apt-file search /usr/bin/htop\nhtop: /usr/bin/htop\n$ apt-file list nginx | head -10\nnginx: /etc/init.d/nginx\nnginx: /etc/nginx/nginx.conf\nnginx: /etc/nginx/sites-available/default\nnginx: /usr/sbin/nginx\n$ dpkg -S /usr/bin/htop\nhtop: /usr/bin/htop",
    "category": "PACKAGES"
  },
  {
    "id": "bash1",
    "question": "You want to automate your project's build-and-deploy sequence as a shell script. The file will start with two lines: the shebang telling the kernel to use bash, and an echo statement. What do those two lines look like?",
    "answer": "#!/bin/bash echo 'Hello World'",
    "explanation": "A shell script is just a text file containing the same commands you'd type in the terminal, saved so you can replay them anytime. The first line is a special instruction telling the operating system which program to use to run the file — without it, the system doesn't know how to interpret the rest.",
    "usage": "Create a bash script that automates the project build-and-deploy sequence, starting with the shebang and a status echo.",
    "examples": [
      "#!/bin/bash\necho 'Starting backup'\ntar -czf /tmp/backup.tar.gz /etc  # archive etc directory",
      "#!/usr/bin/env bash\n# portable shebang — finds bash on PATH instead of hardcoding /bin/bash\necho \"Running on $(hostname)\"",
      "#!/bin/bash\nset -euo pipefail  # strict mode (recommended top line)\necho 'Safer script'",
      "#!/bin/bash\n# A comment — anything after # is ignored by bash\necho \"Hello, $USER\"  # $USER is an env var holding your username",
      "$ chmod +x deploy.sh  # mark executable\n$ ./deploy.sh  # run it (must prefix ./ for current dir)"
    ],
    "memoryTip": "`#!` = SHE-BANG (`#` = sharp/hash, `!` = bang). The line says 'use THIS interpreter for the rest of the file'. Must be the VERY FIRST line — even one blank line above it disables it.",
    "outputExample": "$ cat deploy.sh\n#!/bin/bash\necho 'Hello World'\n$ chmod +x deploy.sh\n$ ./deploy.sh\nHello World",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash2",
    "question": "A script needs to load /etc/myapp/config.sh only if that file actually exists. What bash if-statement checks whether a file exists before sourcing it?",
    "answer": "if [ -f file ]; then echo 'exists'; fi",
    "explanation": "Before your script tries to use a file, you can ask a yes/no question: \"does this file exist?\" The if-statement runs the code inside only when the answer is yes. This prevents the script from crashing when an optional file is absent.",
    "usage": "Load /etc/myapp/config.sh only when that file exists, silently skipping the source if it is absent.",
    "examples": [
      "if [ -f /etc/myapp/config.sh ]; then\n  source /etc/myapp/config.sh  # load variables from the file\nfi",
      "if [ -d /backup ]; then\n  cd /backup\nelse\n  echo '/backup missing' >&2; exit 1\nfi",
      "if [ ! -e \"$path\" ]; then  # ! negates: true when path does NOT exist\n  echo 'creating' && touch \"$path\"\nfi",
      "[ -x /usr/local/bin/myapp ] && /usr/local/bin/myapp  # one-liner: run only if executable",
      "if [[ -f $file && -r $file ]]; then echo readable; fi  # [[ ]] = bash, no quoting needed"
    ],
    "memoryTip": "`-f` = File (regular), `-d` = Directory, `-e` = Exists (any type). Always spell it `if [ -f \"$x\" ]; then ... ; fi`. Mnemonic for the closers: `fi` ends `if`, `done` ends `do`, `esac` ends `case` — keywords spelled backwards.",
    "outputExample": "$ touch /tmp/hello\n$ if [ -f /tmp/hello ]; then echo 'exists'; else echo 'missing'; fi\nexists\n$ if [ -f /tmp/nope ]; then echo 'exists'; else echo 'missing'; fi\nmissing",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash3",
    "question": "A script needs to compress every .log file in /var/log/myapp/ individually. What for-loop iterates over all matching files in a directory?",
    "answer": "for file in *.txt; do echo $file; done",
    "explanation": "A for-loop is like handing each item in a list to a worker one at a time. The glob pattern expands to every matching filename before the loop starts, so each run of the loop body receives one specific file. It's the standard way to perform the same operation on a group of files.",
    "usage": "Iterate over every .log file in /var/log/myapp/ and compress each one with gzip.",
    "examples": [
      "for f in /var/log/myapp/*.log; do\n  gzip \"$f\"  # compress each log file\ndone",
      "for i in {1..5}; do\n  echo \"Run $i\"  # brace expansion: 1 2 3 4 5\ndone",
      "for dir in /etc/nginx/sites-enabled/*/; do  # trailing / matches only directories\n  echo \"Found dir: $dir\"\ndone",
      "for arg in \"$@\"; do  # iterate over script arguments safely\n  echo \"arg=$arg\"\ndone",
      "for ((i=0; i<3; i++)); do echo \"i=$i\"; done  # C-style numeric loop"
    ],
    "memoryTip": "`for VAR in LIST; do ... done`. The glob `*.log` is expanded BEFORE the loop starts, not while it runs. Always QUOTE `\"$file\"` — filenames with spaces will betray you otherwise.",
    "outputExample": "$ touch a.log b.log 'two words.log'\n$ for f in /var/log/myapp/*.log; do echo \"got: $f\"; done\ngot: /var/log/myapp/a.log\ngot: /var/log/myapp/b.log\ngot: /var/log/myapp/two words.log",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash4",
    "question": "A script needs to ask the user to type a database password and store it without echoing the characters to the screen. What read command captures input silently?",
    "answer": "read -p 'Enter name: ' name",
    "explanation": "This command pauses the script and waits for the user to type something and press Enter. With the silent flag, the typed characters don't appear on screen — essential for passwords. The typed text is stored in a variable for the script to use later.",
    "usage": "Prompt for a database password and store it silently in a variable without echoing characters to the terminal.",
    "examples": [
      "read -rp 'Enter your name: ' username\necho \"Hello $username\"  # always use -r in scripts",
      "read -srp 'Enter password: ' password; echo  # -s = silent, echo adds the missing newline",
      "read -rp 'Continue? [y/N] ' -n1 ans; echo  # single-key prompt, no Enter needed",
      "read -rp 'Path: ' -t 10 path || { echo 'Timed out'; exit 1; }  # 10-second timeout",
      "while IFS= read -r line; do echo \"got: $line\"; done < /etc/hosts  # line-by-line file read"
    ],
    "memoryTip": "Flag cheat-sheet: `-p` PROMPT, `-r` RAW (use always), `-s` SILENT (password), `-n N` exactly N chars, `-t SECS` timeout, `-a ARR` into array. No variable name? Read into magic `$REPLY`. For file reading: `while IFS= read -r line` is the canonical safe loop.",
    "outputExample": "$ read -rp 'Enter name: ' name\nEnter name: Alice\n$ echo \"Hello $name\"\nHello Alice\n$ read -srp 'Password: ' pw; echo\nPassword: \n$ echo \"got ${#pw} chars\"\ngot 12 chars",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash5",
    "question": "A deploy script needs to name a backup file with today's date, like 'db_backup_2026-05-19.sql'. How do you capture the output of 'date +%F' into a variable to use in the filename?",
    "answer": "files=$(ls *.txt)",
    "explanation": "Command substitution lets you run a command and use its output as a value — like plugging the answer of one command directly into another. Wrapping a command in `$(...)` says \"run this, and replace this whole expression with whatever the command printed.\"",
    "usage": "Capture the current date in YYYY-MM-DD format into a variable and use it to construct a timestamped backup filename.",
    "examples": [
      "today=$(date +%F)\nbackup=\"db_backup_${today}.sql\"  # produce db_backup_2026-05-19.sql",
      "count=$(grep -c ERROR /var/log/app/app.log)\necho \"$count errors found\"  # capture a number",
      "user_home=$(getent passwd alice | cut -d: -f6)  # nested chains work fine",
      "mapfile -t logfiles < <(find /var/log -name '*.log')  # array of paths, newline-safe",
      "size=$(stat -c%s \"$f\")  # file size in bytes"
    ],
    "memoryTip": "`$(cmd)` modern, backtick legacy. Always QUOTE the result on use: `\"$var\"`. Captured command runs in a SUBSHELL — variables set inside don't leak out. For multi-word/newline output, prefer `mapfile -t arr < <(cmd)` over `arr=($(cmd))`.",
    "outputExample": "$ today=$(date +%F)\n$ echo \"Today is $today\"\nToday is 2026-05-19\n$ backup=\"db_backup_${today}.sql\"\n$ echo $backup\ndb_backup_2026-05-19.sql",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash6",
    "question": "A deploy script is called as './deploy.sh web1.example.com /opt/myapp'. The script needs to access the hostname as the first argument and the path as the second. How does bash expose command-line arguments?",
    "answer": "echo \"First arg: $1\"",
    "explanation": "When you run a script with extra words after its name, those words are automatically available inside the script as numbered variables — the first word as $1, the second as $2, and so on. The script can check how many were passed and use each one independently.",
    "usage": "Access the first argument (hostname) as $1 and the second argument (deploy path) as $2 in the deploy.sh script.",
    "examples": [
      "echo \"Script: $0\"\necho \"Host: $1\"\necho \"Path: $2\"\necho \"All args ($#): $@\"",
      "if [ $# -lt 2 ]; then echo \"Usage: $0 HOST PATH\" >&2; exit 1; fi",
      "while [ $# -gt 0 ]; do echo \"processing: $1\"; shift; done  # consume args one by one",
      "for host in \"$@\"; do  # safely iterate over args with spaces\n  ssh \"$host\" uptime\ndone",
      "echo \"Tenth arg: ${10}\"  # MUST use braces past 9"
    ],
    "memoryTip": "`$0` script name, `$1`..`$9` positional, `${10}` and up need BRACES, `$#` count, `\"$@\"` all-as-words (use), `\"$*\"` all-as-one-string (avoid). Functions REDEFINE `$1`/`$2` inside — they don't see the script's args.",
    "outputExample": "$ cat deploy.sh\n#!/bin/bash\necho \"Host: $1\"\necho \"Path: $2\"\necho \"Count: $#\"\n$ ./deploy.sh web1.example.com /opt/myapp\nHost: web1.example.com\nPath: /opt/myapp\nCount: 2",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash7",
    "question": "A nightly backup script runs 'mysqldump' and you want successful output saved to /var/log/backup.log while errors go separately to /var/log/backup.err. What redirection syntax achieves this?",
    "answer": "command > output.txt 2> error.txt",
    "explanation": "Every program has two separate output streams: one for normal results and one for error messages. By default both appear mixed together on the terminal. Redirection lets you route each stream to a different file, so you can review successes and failures independently.",
    "usage": "Run mysqldump, saving normal output to /var/log/backup.log and error messages to /var/log/backup.err.",
    "examples": [
      "mysqldump mydb > /var/log/backup.log 2> /var/log/backup.err  # stdout and stderr to separate files",
      "command > /var/log/all.log 2>&1  # BOTH to one file; equivalent: command &> /var/log/all.log",
      "command >> /var/log/append.log 2>&1  # append both (don't truncate)",
      "command 2>/dev/null  # discard errors, keep stdout on terminal",
      "command < /tmp/input.txt > /tmp/output.txt  # read from input, write to output"
    ],
    "memoryTip": "FDs: 0=in, 1=out, 2=err. `>` overwrite stdout, `>>` append, `2>` errors, `2>&1` 'errors go where stdout goes' (order matters — put it AFTER `> file`). `&>` is the bash 'both' shortcut. `/dev/null` = throw away. To DISCARD errors but keep stdout: `cmd 2>/dev/null`.",
    "outputExample": "$ mysqldump mydb > /var/log/backup.log 2> /var/log/backup.err\n$ cat /var/log/backup.log | head -3\n-- MySQL dump 10.13  Distrib 8.0.36\n-- Host: localhost    Database: mydb\n-- ------------------------------------------------------\n$ cat /var/log/backup.err\nmysqldump: Got error: 1044: Access denied for user 'backup'@'localhost'",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash8",
    "question": "Multiple scripts all need the same logging logic. You want to define a reusable 'log' function in a bash script that prints a timestamped message. What is the syntax for defining a bash function?",
    "answer": "log_message() { echo \"[$(date)] $1\"; }",
    "explanation": "A function is a named block of reusable code. Once defined, you can call it by name just like any command, passing arguments to it. This is how scripts stay maintainable — you write complex logic once, give it a name, and reuse it throughout the script.",
    "usage": "Define a reusable 'log' function that prepends a timestamp to every message and appends it to /var/log/myapp/deploy.log.",
    "examples": [
      "log() { echo \"[$(date +%F\\ %T)] $*\" >> /var/log/myapp/deploy.log; }\nlog 'started deployment'  # reusable logger",
      "die() { echo \"FATAL: $*\" >&2; exit 1; }\n[ -f /etc/myapp/config.sh ] || die 'config missing'",
      "backup() {\n  local src=$1 dest=$2  # local: doesn't leak\n  tar -czf \"$dest\" \"$src\"\n}\nbackup /etc /tmp/etc.tgz",
      "is_root() { [ \"$(id -u)\" -eq 0 ]; }\nis_root && echo 'root' || echo 'not root'  # boolean via exit code",
      "declare -F  # list all defined functions"
    ],
    "memoryTip": "`name() { ... }` defines, `name args` calls. `$1`..`$#` SHADOW the script's args inside. `local x=...` to avoid leaking variables. `return N` sets exit code (0-255), not a string — to 'return' data, echo it and let the caller use `$(...)`. Define before use.",
    "outputExample": "$ greet() { local name=$1; echo \"Hello, ${name:-stranger}\"; }\n$ greet World\nHello, World\n$ greet\nHello, stranger\n$ declare -F\ndeclare -f greet",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash9",
    "question": "A script needs to create a directory, and if mkdir fails, it should print an error and exit. What if-statement directly tests whether a command succeeded or failed?",
    "answer": "if command; then echo 'success'; fi",
    "explanation": "In bash, the if-statement doesn't take a \"true or false\" expression — it runs a command and checks whether that command succeeded. Success means the command's exit code is 0; any non-zero exit code means failure. This lets you test the outcome of any command directly.",
    "usage": "Attempt to create /opt/myapp/deployments and exit the script with an error message if mkdir fails.",
    "examples": [
      "if mkdir /opt/myapp/deployments; then echo 'created'; else echo 'failed' >&2; exit 1; fi",
      "if command -v jq >/dev/null; then echo 'jq present'; fi  # is a command installed?",
      "if grep -q ERROR /var/log/app/app.log; then echo 'errors found'; fi  # -q for quiet",
      "cmd; rc=$?; if [ $rc -ne 0 ]; then echo \"cmd failed with $rc\"; fi  # capture $? if needed",
      "set -euo pipefail  # strict mode: exit on first failure, unset var, or pipe failure"
    ],
    "memoryTip": "`if CMD; then ... fi` — `if` takes a COMMAND, not an expression. Exit code: 0 = success/true, non-zero = failure/false. `$?` holds the LAST exit code. The clean idiom is `if cmd; then ...`; the messy alternative is `cmd; if [ $? -eq 0 ]; then ...`. Strict-mode top line: `set -euo pipefail`.",
    "outputExample": "$ if mkdir /tmp/testdir; then echo created; else echo failed; fi\ncreated\n$ if mkdir /tmp/testdir; then echo created; else echo failed; fi\nmkdir: cannot create directory '/tmp/testdir': File exists\nfailed\n$ if grep -q ^root /etc/passwd; then echo 'root user exists'; fi\nroot user exists",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash10",
    "question": "A script needs to process every line from /etc/hosts and print lines that contain a real IP address. What loop reads the file line-by-line without creating a subshell?",
    "answer": "while IFS= read -r line; do echo $line; done < file.txt",
    "explanation": "Reading a file line-by-line in bash requires a specific pattern to work correctly. This pattern uses a while loop with the \"read\" built-in, feeding the file as input from the right side. The key parts prevent common bugs: one flag stops backslash from being interpreted as an escape, and the IFS setting preserves leading whitespace on each line.",
    "usage": "Read /etc/hosts line-by-line and print only the lines that contain a real IP address (not comments).",
    "examples": [
      "while IFS= read -r line; do echo \"got: $line\"; done < /etc/hosts  # safe canonical form",
      "while IFS=: read -r user _ uid _ _ home _; do echo \"$user $uid $home\"; done < /etc/passwd",
      "while IFS= read -r line; do echo \"$line\"; done < <(curl -s https://example.com/hosts)  # process subst, no subshell",
      "tail -f /var/log/app/app.log | while read -r line; do [[ $line == *ERROR* ]] && echo \"$line\"; done",
      "n=0; while read -r _; do n=$((n+1)); done < /etc/hosts; echo \"$n lines\""
    ],
    "memoryTip": "Memorize: `while IFS= read -r line; do ... done < file`. `IFS=` keeps whitespace, `-r` keeps backslashes. Avoid `cat file | while read`; that creates a subshell and variables LEAK away. For maximum filename safety with `find`, use `-print0` + `read -d ''`.",
    "outputExample": "$ while IFS= read -r line; do echo \"checking: $line\"; done < /etc/hosts\nchecking: 127.0.0.1 localhost\nchecking: 127.0.1.1 myhostname\nchecking: # The following lines are for IPv6 capable hosts\nchecking: ::1     ip6-localhost ip6-loopback",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "arch1",
    "question": "You need to bundle the entire /home/alice/code/myapp/ directory into a single file to send to a colleague, preserving the directory structure. What tar command creates an uncompressed archive?",
    "answer": "tar -cvf archive.tar files/",
    "explanation": "The tar command is the packing tape of Linux — it takes a whole directory tree with all its subdirectories and files and wraps them into a single portable file. \"Archiving\" just means bundling; without a compression flag the resulting file is the same size as the original contents, just packaged together.",
    "usage": "Bundle the entire /home/alice/code/myapp/ directory into a single myapp.tar file, preserving all structure and permissions.",
    "examples": [
      "tar -cvf myapp.tar /home/alice/code/myapp/  # bundle a whole folder",
      "tar -cvf config_backup.tar /etc/nginx/ /etc/mysql/  # multiple source paths",
      "tar -cvf notes.tar *.txt *.md  # archive only matching files in cwd",
      "tar -cvf - /home/alice/code/myapp/ | gzip > myapp.tar.gz  # tar to stdout, pipe through gzip",
      "tar -cvf - /home/alice/code/myapp/ | ssh web1 'cat > /backups/myapp.tar'  # stream to a remote host"
    ],
    "memoryTip": "`tar -cvf` = 'See Vee File' (Create Verbose Filename). Without `-z`/`-j`/`-J` there is NO compression — `.tar` is just a bundle, like a ZIP with no compression.",
    "outputExample": "$ tar -cvf myapp.tar /home/alice/code/myapp/\n/home/alice/code/myapp/\n/home/alice/code/myapp/README.md\n/home/alice/code/myapp/src/\n/home/alice/code/myapp/src/main.py\n/home/alice/code/myapp/tests/test_main.py\n$ ls -lh myapp.tar\n-rw-r--r-- 1 alice alice 24K May 19 14:35 myapp.tar",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch2",
    "question": "A colleague sent you a release archive at /tmp/myapp-1.0.tar. What command extracts all its contents into the current directory?",
    "answer": "tar -xvf archive.tar",
    "explanation": "Extracting a tar archive is the reverse of creating one. The command unpacks the bundled file and recreates all the original files and directories in your current location, showing you each file's name as it appears.",
    "usage": "Extract all contents of /tmp/myapp-1.0.tar into the current directory.",
    "examples": [
      "tar -xvf /tmp/myapp-1.0.tar  # extract into current directory",
      "tar -xvf /tmp/myapp-1.0.tar -C /opt/  # extract to a specific folder",
      "tar -xvf /tmp/myapp-1.0.tar.gz  # modern tar auto-detects gzip",
      "tar -xvf /tmp/myapp-1.0.tar path/to/config.yml  # extract only one file",
      "mkdir /opt/myapp && tar -xvf /tmp/myapp-1.0.tar -C /opt/myapp  # contain in a subfolder"
    ],
    "memoryTip": "`tar -xvf` = 'eXtract Vee File'. Flip `x` to `c` and you're back to Create. Same command on Debian/Ubuntu, RHEL/Fedora, macOS — `tar` is one of the most portable Unix tools.",
    "outputExample": "$ tar -xvf /tmp/myapp-1.0.tar\nmyapp-1.0/\nmyapp-1.0/README.md\nmyapp-1.0/src/\nmyapp-1.0/src/main.py\nmyapp-1.0/tests/test_main.py\n$ ls myapp-1.0/\nREADME.md  src  tests",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch3",
    "question": "Your Nginx access log at /var/log/nginx/access.log has grown to 8GB. You need to compress it in place to free disk space. What command compresses it to a .gz file?",
    "answer": "gzip file.txt",
    "explanation": "This command shrinks a single file using a standard compression algorithm. The original file disappears and is replaced by a smaller compressed version with a .gz extension. You can decompress it later to get the original back, or read it directly with tools that understand the compressed format.",
    "usage": "Compress /var/log/nginx/access.log to access.log.gz, replacing the original to free disk space.",
    "examples": [
      "gzip /var/log/nginx/access.log  # access.log -> access.log.gz, original removed",
      "gzip -k /var/log/nginx/access.log  # keep both access.log AND access.log.gz",
      "gzip -9 /var/backups/db_dump.sql  # maximum compression, slowest",
      "gzip -c /var/log/nginx/access.log > /var/backups/access.log.gz  # -c writes to stdout",
      "gzip /var/log/nginx/*.log  # compress every .log file in the directory"
    ],
    "memoryTip": "`gzip` = GNU zip. Replaces the original by default — use `-k` to KEEP it. The reverse is `gunzip` or `gzip -d`. On Debian/Ubuntu and RHEL/Fedora alike — `gzip` ships with every standard Linux base.",
    "outputExample": "$ ls -lh /var/log/nginx/access.log\n-rw-r--r-- 1 root root 8.0G May 19 14:35 /var/log/nginx/access.log\n$ sudo gzip /var/log/nginx/access.log\n$ ls -lh /var/log/nginx/access.log*\n-rw-r--r-- 1 root root 950M May 19 14:35 /var/log/nginx/access.log.gz",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch4",
    "question": "A support ticket requires you to read /var/log/nginx/access.log.1.gz. What command decompresses it back to the original .log file?",
    "answer": "gunzip file.txt.gz",
    "explanation": "The reverse of compression — this takes a .gz compressed file and expands it back to its original form. The compressed version is removed and replaced by the decompressed original, just as if you'd never compressed it in the first place.",
    "usage": "Decompress /var/log/nginx/access.log.1.gz back to access.log.1 to allow reading with standard text tools.",
    "examples": [
      "gunzip /var/log/nginx/access.log.1.gz  # decompress — .gz removed, original appears",
      "gunzip -k /var/log/nginx/access.log.1.gz  # keep both .gz and the decompressed copy",
      "gunzip -c /var/log/nginx/access.log.1.gz > /tmp/access_copy.log  # decompress to a new name",
      "gunzip /var/log/nginx/*.gz  # decompress all .gz files in the directory",
      "zcat /var/log/nginx/access.log.1.gz | grep '404'  # read a .gz log directly, no decompress step"
    ],
    "memoryTip": "`gunzip` = G-UNzip (undo gzip). Equivalent: `gzip -d` (decompress). For .bz2 use `bunzip2`; for .xz use `unxz`. To AVOID decompressing first when grepping logs, use the `z`-prefixed tools: `zcat`, `zgrep`, `zless`.",
    "outputExample": "$ ls -lh /var/log/nginx/access.log.1.gz\n-rw-r--r-- 1 root root 1.2G May 18 00:00 /var/log/nginx/access.log.1.gz\n$ sudo gunzip /var/log/nginx/access.log.1.gz\n$ ls -lh /var/log/nginx/access.log.1\n-rw-r--r-- 1 root root 7.8G May 18 00:00 /var/log/nginx/access.log.1",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch5",
    "question": "Before a major upgrade you want to create a compressed backup of /etc/nginx/ named 'nginx_backup_2026-05-19.tar.gz'. What tar command creates a gzip-compressed archive of that directory?",
    "answer": "tar -czvf archive.tar.gz directory/",
    "explanation": "This is the most common archiving operation on Linux: bundle a directory and compress it in one step. The result is a single small file that contains your entire directory tree and can be unpacked later to restore everything exactly as it was.",
    "usage": "Create a gzip-compressed archive of /etc/nginx/ named nginx_backup_2026-05-19.tar.gz as a pre-upgrade backup.",
    "examples": [
      "tar -czvf nginx_backup_2026-05-19.tar.gz /etc/nginx/  # gzip — the everyday default",
      "tar -cjvf /tmp/nginx_backup.tar.bz2 /etc/nginx/  # bzip2 — better compression, slower",
      "tar -cJvf /tmp/nginx_backup.tar.xz /etc/nginx/   # xz — best compression, slowest",
      "tar -czvf - /etc/nginx/ | ssh backup@storage.internal 'cat > /backups/nginx.tar.gz'  # stream over SSH",
      "tar -tzvf nginx_backup_2026-05-19.tar.gz | head  # peek inside without extracting"
    ],
    "memoryTip": "`tar -czvf` mnemonic: 'See Zee Vee File' (Create gZip Verbose Filename). For extract: `tar -xzvf` = 'eXtract Zee Vee File'. Compression letters: `z`=gzip, `j`=bzip2 (bJip2... close enough), `J`=xz. Modern tar auto-detects on extract, but always specify on CREATE.",
    "outputExample": "$ tar -czvf nginx_backup_2026-05-19.tar.gz /etc/nginx/\n/etc/nginx/\n/etc/nginx/nginx.conf\n/etc/nginx/sites-available/\n/etc/nginx/sites-available/myapp.conf\n/etc/nginx/sites-enabled/myapp.conf\n$ ls -lh nginx_backup_2026-05-19.tar.gz\n-rw-r--r-- 1 alice alice 12K May 19 14:35 nginx_backup_2026-05-19.tar.gz",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch6",
    "question": "A deployment script downloads myapp-2.0.tar.gz from the release server and needs to extract it to /opt/myapp/. What command extracts a gzip-compressed tarball to a specific directory?",
    "answer": "tar -xzvf archive.tar.gz",
    "explanation": "This is the reverse of creating a compressed archive — it both decompresses and unpacks the tarball in one step, recreating all the original files and directories. Specifying a target directory with -C tells tar where to put everything instead of dumping it in the current directory.",
    "usage": "Extract myapp-2.0.tar.gz into /opt/myapp/ during a deployment.",
    "examples": [
      "tar -xzvf /tmp/myapp-2.0.tar.gz -C /opt/myapp/  # extract to specific folder",
      "tar -xjvf /tmp/myapp-2.0.tar.bz2 -C /opt/  # bzip2 variant (-j)",
      "tar -xJvf /tmp/myapp-2.0.tar.xz -C /opt/  # xz variant (capital -J)",
      "tar -xvf /tmp/myapp-2.0.tar.gz  # modern tar auto-detects gzip without -z"
    ],
    "memoryTip": "`tar -xzvf` = 'eXtract Zee Vee File'. Same letters as create but `c` flips to `x`. Compression letters: lowercase `z`=gzip, lowercase `j`=bzip2, UPPERCASE `J`=xz.",
    "outputExample": "$ mkdir -p /opt/myapp && tar -xzvf /tmp/myapp-2.0.tar.gz -C /opt/myapp/\nmyapp-2.0/\nmyapp-2.0/README.md\nmyapp-2.0/bin/server\nmyapp-2.0/config/app.yml\n$ ls /opt/myapp/\nmyapp-2.0",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch7",
    "question": "You need to compress a 500MB PostgreSQL dump file /var/backups/db.sql and bzip2 is preferred for its tighter compression than gzip. What command compresses it with bzip2?",
    "answer": "bzip2 file.txt",
    "explanation": "Bzip2 is a compression tool that typically squeezes files somewhat smaller than gzip — at the cost of taking longer. Like gzip, it compresses one file at a time and replaces the original with the compressed version by default.",
    "usage": "Compress /var/backups/db.sql with bzip2 to produce a smaller archive than gzip would provide.",
    "examples": [
      "bzip2 /var/backups/db.sql  # db.sql -> db.sql.bz2, original removed",
      "bzip2 -k /var/backups/db.sql  # keep both files",
      "bzip2 -9 /var/backups/db.sql  # max compression (default is already near max)",
      "bzip2 -c /var/backups/db.sql > /var/backups/db.sql.bz2  # write to stdout, keep original",
      "bunzip2 /var/backups/db.sql.bz2  # reverse: decompress back to db.sql"
    ],
    "memoryTip": "`bzip2` = the 'middle child' compressor: better than gzip, worse than xz. Replaces the original unless you use `-k`. Reverse: `bunzip2`. For directory archives use `tar -cjf` (j for bzip2).",
    "outputExample": "$ ls -lh /var/backups/db.sql\n-rw-r--r-- 1 postgres postgres 500M May 19 14:35 /var/backups/db.sql\n$ bzip2 /var/backups/db.sql\n$ ls -lh /var/backups/db.sql*\n-rw-r--r-- 1 postgres postgres 58M May 19 14:35 /var/backups/db.sql.bz2",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "daily1",
    "question": "You just SSH'd into a production server and want to know if it's been rebooted recently and whether it's currently under heavy CPU load. What single command gives you both pieces of information at a glance?",
    "answer": "uptime",
    "explanation": "Running this command prints one line telling you how long the server has been on, how many people are logged in, and three numbers showing how busy the CPU has been over the last 1, 5, and 15 minutes. Think of it like glancing at a car's speedometer and fuel gauge at once — it's the fastest possible pulse-check before you start any real work.",
    "usage": "Run immediately on login to a server to verify uptime and spot CPU pressure before running expensive commands.",
    "examples": [
      "uptime  # the classic one-liner",
      "uptime -p  # 'pretty' form: 'up 3 weeks, 2 days, 5 hours'",
      "uptime -s  # exact timestamp the system booted",
      "w  # 'uptime' plus a list of who's logged in and what they're running",
      "cat /proc/loadavg  # raw load numbers if you're scripting"
    ],
    "memoryTip": "`uptime` = how long it's been 'up'. The three load numbers go newest to oldest (1 min, 5 min, 15 min) — read them like 'right now / recently / a while ago' to see if load is rising or falling.",
    "outputExample": "$ uptime\n 10:34:52 up 45 days,  3:21,  2 users,  load average: 0.52, 0.48, 0.45",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily2",
    "question": "Your application is logging 'No space left on device' errors. What command shows how full every mounted filesystem is, with sizes in gigabytes and megabytes rather than raw block counts?",
    "answer": "df -h",
    "explanation": "This command lists every storage area the OS has attached — your main disk, any extra partitions, USB drives — and tells you how big each one is, how much is used, and what percentage is full. The flag makes it show \"45G\" instead of a confusing number like 47185920 (kilobyte blocks). When something crosses 90% full, programs start failing in unexpected ways.",
    "usage": "Check disk space across all filesystems before installing software or when a 'disk full' error appears.",
    "examples": [
      "df -h  # all filesystems, human sizes — the daily go-to",
      "df -h /home  # only the filesystem that holds /home",
      "df -hT  # add the 'Type' column (ext4, xfs, btrfs...)",
      "df -h --total  # add a grand-total row at the bottom",
      "df -i  # switch to inode counts instead of bytes — for 'no space' errors when df -h still shows free space"
    ],
    "memoryTip": "`df` = 'disk free', `-h` = 'human'. Mnemonic: `du` measures a Directory's Usage; `df` measures the whole Disk's Free space. One zooms in, one zooms out.",
    "outputExample": "$ df -h\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p2  234G  112G  111G  51% /\n/dev/nvme0n1p1  511M  6.1M  505M   2% /boot/efi\ntmpfs           7.8G   45M  7.7G   1% /run\n/dev/sdb1        29G   18G   12G  61% /media/usb",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily3",
    "question": "Your Node.js server is responding slowly and you suspect it's running out of RAM. What command shows total, used, and free memory (including swap) in human-readable units?",
    "answer": "free -h",
    "explanation": "This command shows how much RAM your machine has, how much is being used, and how much is still available for new programs. There's a tricky column called \"free\" that looks scary-low — that's normal, because Linux fills idle RAM with a disk cache to make things faster. The column that actually matters is \"available,\" which tells you how much new programs can grab without the OS being forced to swap out to disk.",
    "usage": "Check RAM and swap availability before launching a memory-intensive job or when performance degrades unexpectedly.",
    "examples": [
      "free -h  # human-readable RAM + swap snapshot",
      "free -m  # force megabytes regardless of size",
      "free -g  # force gigabytes (loses precision under 1G)",
      "free -h -s 2  # refresh every 2 seconds (Ctrl+C to stop)",
      "free -h -t  # add a 'Total:' row (RAM + swap combined)"
    ],
    "memoryTip": "`free` answers 'how free is my RAM?'. Trick: look at `available`, not `free`. Linux philosophy: 'free RAM is wasted RAM' — the kernel caches aggressively, and `available` already accounts for cache it can reclaim.",
    "outputExample": "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:            15Gi       4.2Gi       512Mi       320Mi        10Gi        10Gi\nSwap:          2.0Gi          0B       2.0Gi",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily4",
    "question": "Something is pegging your server's CPU. What command prints a snapshot of every running process owned by every user, showing CPU and memory percentages, then shows only the first screenful?",
    "answer": "ps aux | head",
    "explanation": "This pipes two commands together. The first asks the OS for a table of every single running program — who owns it, what it is, and how much CPU and memory it's using right now. The second command cuts the output to just the first ten lines so your screen doesn't fill with hundreds of entries. It's a one-shot photo of what your system is doing, unlike a live monitor.",
    "usage": "Get a quick PID or CPU/memory snapshot for any running process, especially to find what's causing high load.",
    "examples": [
      "ps aux | head  # first 10 lines for a quick peek",
      "ps aux | head -20  # first 20 lines including headers",
      "ps aux | grep -i firefox | grep -v grep  # find firefox processes (excluding the grep itself)",
      "ps aux --sort=-%cpu | head  # top CPU users (- for descending)",
      "ps aux --sort=-rss | head  # top memory consumers",
      "ps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head  # custom columns"
    ],
    "memoryTip": "`ps aux` = All users, User format, also no-tty (daemons). Top CPU: `ps aux --sort=-%cpu | head`. Top RAM: `--sort=-rss`. For live updating, switch to `top` or `htop`. The `aux` mnemonic: 'AUXiliary view of processes'.",
    "outputExample": "$ ps aux | head\nUSER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot           1  0.1  0.0 167400 11944 ?        Ss   May15   0:14 /sbin/init\nroot           2  0.0  0.0      0     0 ?        S    May15   0:00 [kthreadd]\nsystemd+     682  0.0  0.0  90252  6024 ?        Ss   May15   0:00 /lib/systemd/systemd-resolved\nalice       1842  2.3  4.1 2880340 658432 ?      Sl   09:01   0:42 /usr/lib/firefox/firefox\nalice       2104  0.1  0.2  24400  4892 pts/0    Ss   09:30   0:00 -bash",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily5",
    "question": "Your Ubuntu server hasn't been patched in two months. What single compound command both refreshes the list of available packages from the internet AND installs all upgrades that are waiting?",
    "answer": "sudo apt update && sudo apt upgrade",
    "explanation": "This runs two commands in sequence, stopping if the first one fails. The first command doesn't install anything — it's like refreshing a news feed to see what's new. The second command actually downloads and installs the newer versions of everything you already have installed. The double-ampersand means \"only do step 2 if step 1 succeeded,\" which is safer than a plain semicolon.",
    "usage": "Patch all installed software on a Debian/Ubuntu system in one compound command.",
    "examples": [
      "sudo apt update && sudo apt upgrade  # the standard combo",
      "sudo apt update && sudo apt upgrade -y  # unattended (good for scripts/cron)",
      "sudo apt update && apt list --upgradable  # preview pending upgrades without installing",
      "sudo apt update && sudo apt full-upgrade  # allow REMOVALS to satisfy upgrade dependencies",
      "sudo apt update && sudo apt upgrade && sudo apt autoremove  # patch + clean up orphan deps",
      "[ -f /var/run/reboot-required ] && echo 'reboot to finish'  # post-upgrade reboot check"
    ],
    "memoryTip": "Two-step pattern on Debian: `update` (refresh CATALOG) → `upgrade` (apply new VERSIONS). On RHEL/Fedora a single `dnf upgrade` does both. Use `&&` not `;` so step 2 is skipped if step 1 fails. Add `autoremove` afterwards to drop orphan dependency packages.",
    "outputExample": "$ sudo apt update && sudo apt upgrade\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://security.ubuntu.com/ubuntu noble-security InRelease [128 kB]\nFetched 128 kB in 1s (193 kB/s)\nReading package lists... Done\n42 packages can be upgraded. Run 'apt list --upgradable' to see them.\n...\nThe following packages will be upgraded:\n  bash curl git libc6 libssl3 linux-image-generic openssh-server\n7 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\nNeed to get 87.5 MB of archives.\nDo you want to continue? [Y/n] Y",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily6",
    "question": "After upgrading the kernel on your Ubuntu server, you notice old kernel packages are still taking up ~500MB of disk space. What command finds and removes packages that were installed as dependencies but are no longer needed by anything?",
    "answer": "sudo apt autoremove",
    "explanation": "When apt installs a program, it also pulls in any helper libraries that program needs and labels them \"auto-installed.\" If you later remove the program, those helpers are now orphaned — nobody needs them but they're still on disk. This command finds and removes all those orphans. After a kernel upgrade, multiple old kernel images typically get cleaned out this way, often recovering hundreds of megabytes.",
    "usage": "Remove leftover dependency packages after uninstalling software or upgrading the kernel.",
    "examples": [
      "sudo apt autoremove  # interactive — shows what will be removed",
      "sudo apt autoremove --purge  # also delete config files of removed packages",
      "sudo apt autoremove -y  # unattended — only safe in scripts after reviewing",
      "sudo apt update && sudo apt upgrade && sudo apt autoremove  # the full housekeeping triple",
      "sudo apt-mark manual nginx  # keep nginx safe from future autoremoves",
      "apt-mark showauto | head  # which packages are currently 'auto' (autoremove-eligible)"
    ],
    "memoryTip": "`autoremove` = auto-installed but no longer needed → REMOVE. Often the bulk of space gain after kernel upgrades. Compare with `apt clean` (removes downloaded .deb cache, NOT installed packages). The full sweep: `update && upgrade && autoremove`.",
    "outputExample": "$ sudo apt autoremove\nReading package lists... Done\nThe following packages will be REMOVED:\n  linux-headers-6.5.0-15 linux-headers-6.5.0-15-generic\n  linux-image-6.5.0-15-generic linux-modules-6.5.0-15-generic\n  linux-modules-extra-6.5.0-15-generic\n0 upgraded, 0 newly installed, 5 to remove and 0 not upgraded.\nAfter this operation, 487 MB disk space will be freed.\nDo you want to continue? [Y/n] Y",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily7",
    "question": "The `/var/cache/apt/archives` directory on your server has grown to over 400MB. What command removes only the cached `.deb` files for package versions that are no longer available to download, while keeping current cached packages intact?",
    "answer": "sudo apt autoclean",
    "explanation": "Every time apt installs or upgrades a package, it keeps the downloaded installer file in a cache folder on disk. Over time that folder balloons. This command is the conservative cleanup: it only deletes cached packages whose version is so old that no enabled repository offers it anymore — the ones you could never reinstall without a manual download anyway. The current cached packages stay, so future reinstalls are still fast.",
    "usage": "Reclaim disk space taken by obsolete cached package files without deleting any currently-installable packages from the cache.",
    "examples": [
      "sudo apt autoclean  # remove obsolete cached .debs (safe everyday cleanup)",
      "sudo apt clean  # remove EVERY cached .deb (maximum reclaim)",
      "du -sh /var/cache/apt/archives  # see how big the cache is before/after",
      "sudo apt update && sudo apt upgrade && sudo apt autoclean  # routine combo",
      "ls /var/cache/apt/archives/*.deb | wc -l  # how many cached .debs",
      "sudo apt-get clean && sudo rm -rf /var/lib/apt/lists/*  # Dockerfile shrink-line"
    ],
    "memoryTip": "`autoclean` = remove only OBSOLETE cached .debs (gentle, no downside). `clean` = remove ALL cached .debs (maximum space, slight re-download cost). Neither removes installed packages — only cached installer files. Companion: `autoremove` for orphan packages.",
    "outputExample": "$ du -sh /var/cache/apt/archives\n412M\t/var/cache/apt/archives\n$ sudo apt autoclean\nReading package lists... Done\nBuilding dependency tree... Done\nDel curl 8.5.0-2ubuntu10.3 amd64 [228 kB]\nDel libc6 2.39-0ubuntu8.3 amd64 [3,247 kB]\nDel linux-image-6.5.0-15-generic 6.5.0-15.15 amd64 [14.2 MB]\n$ du -sh /var/cache/apt/archives\n267M\t/var/cache/apt/archives",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily8",
    "question": "You need to see every file in `/etc/nginx`, including hidden dotfiles, with their permissions, owner, size, and modification time all on one line each. What command does that?",
    "answer": "ls -la",
    "explanation": "Adding two flags to the normal directory listing command gives you the full picture. One flag shows files that start with a dot — config files, git folders, environment files — which are hidden by default. The other flag switches from a simple name list to a detailed view: one file per line, showing who owns it, what the permissions are (who can read, write, or execute it), how big it is, and when it was last changed.",
    "usage": "List all files including hidden ones in long format to inspect permissions, owners, and modification times.",
    "examples": [
      "ls -la  # everything, long format",
      "ls -lah  # add human-readable sizes — the everyday combo",
      "ls -lat  # sort by modification time, newest first",
      "ls -laS  # sort by size, largest first",
      "ls -la --color=auto  # colored output (usually default via alias)",
      "ls -la | grep '^d'  # only directories (filter by first char)"
    ],
    "memoryTip": "`-l` long, `-a` all (include `.dotfiles`), `-h` human sizes, `-t` newest first, `-S` biggest first, `-r` reverse. The everyday combo: `ls -lah`. The first char of the permission string tells you what it is: `-` file, `d` directory, `l` symlink.",
    "outputExample": "$ ls -lah\ntotal 28K\ndrwxr-xr-x  5 alice alice 4.0K May 17 10:30 .\ndrwxr-xr-x 15 alice alice 4.0K May 14 10:00 ..\n-rw-------  1 alice alice  680 May 17 09:15 .bash_history\n-rw-r--r--  1 alice alice  220 May 14 10:00 .bashrc\ndrwxr-xr-x  8 alice alice 4.0K May 17 10:28 .git\n-rw-r--r--  1 alice alice  142 May 15 11:30 notes.txt\nlrwxrwxrwx  1 alice alice    9 May 17 10:30 link -> notes.txt\ndrwxr-xr-x  3 alice alice 4.0K May 15 14:20 src/",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily9",
    "question": "You remember writing a notes file somewhere under your home directory but can't remember where. What command recursively searches the entire current directory tree and prints paths of every file whose name ends in `.txt`?",
    "answer": "find . -name \"*.txt\"",
    "explanation": "This command walks every folder inside the current one, going as deep as needed, and prints the path to any file whose name matches the pattern. The asterisk is a wildcard meaning \"anything can come before .txt.\" It's like using the OS file search dialog but in the terminal, and you can chain extra conditions to narrow down results — by size, by age, by file type, and so on.",
    "usage": "Recursively locate files by name pattern anywhere under a directory — the go-to for 'I know the filename but not the path.'",
    "examples": [
      "find . -name '*.txt'  # all .txt files under current dir",
      "find . -type f -name '*.log' -size +10M  # big log files",
      "find /var/log -name '*.log' -mtime +7  # logs older than 7 days",
      "find ~ -iname '*resume*'  # case-insensitive — matches Resume.pdf, resume.docx",
      "find . -name '*.py' -exec wc -l {} +  # line-count every .py file",
      "find . -name 'node_modules' -type d -prune -o -name '*.js' -print  # skip node_modules"
    ],
    "memoryTip": "`find PATH EXPRESSION` — actions at the end. `-name` glob (case-sens), `-iname` case-insens, `-type f/d`, `-mtime ±N` days, `-size ±N[k/M/G]`. Quote globs to stop shell expansion. Use `-exec ... {} +` (batch) over `;` (one-per-file) for speed. Modern faster alternative: `fd PATTERN`.",
    "outputExample": "$ find . -name '*.txt'\n./notes.txt\n./backup/data.txt\n./archive/old.txt\n./src/README.txt\n$ find . -name '*.txt' -size +1k\n./backup/data.txt\n$ find /var/log -name '*.log' -mtime -1 -type f\n/var/log/syslog\n/var/log/auth.log\n/var/log/nginx/access.log",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily10",
    "question": "Your deploy script needs to create the path `~/projects/myapp/logs/archive` even if none of those directories exist yet. What single command creates the full directory chain, succeeding silently even if some directories already exist?",
    "answer": "mkdir -p ~/projects/myapp/logs/archive",
    "explanation": "Creating nested directories efficiently is key. The mkdir -p flag creates parent directories as needed, saving you from creating each level separately.",
    "usage": "Create a full directory path including all missing parents in one idempotent command — the standard script pattern.",
    "examples": [
      "mkdir -p ~/projects/myapp/src  # creates ~/projects and ~/projects/myapp if missing",
      "mkdir -p logs cache output  # multiple separate dirs",
      "mkdir -p src/{api,web,worker}/{handlers,models,tests}  # brace expansion — 9 dirs in one call",
      "mkdir -pv build/{debug,release}  # -v shows each created path",
      "mkdir -p -m 0700 ~/.config/myapp  # create with restricted perms (owner-only)",
      "mkdir -p \"$(dirname \"$file\")\"  # ensure the parent dir of $file exists"
    ],
    "memoryTip": "`-p` = parents + idempotent (no error if exists). Standard 'ensure this dir' idiom in scripts. Companion with `-v` for verbosity, `-m MODE` for perms. Use BRACE expansion `{a,b,c}` to create many siblings in one call: `mkdir -p src/{api,web,worker}`.",
    "outputExample": "$ mkdir -pv src/{api,web}/{handlers,tests}\nmkdir: created directory 'src'\nmkdir: created directory 'src/api'\nmkdir: created directory 'src/api/handlers'\nmkdir: created directory 'src/api/tests'\nmkdir: created directory 'src/web'\nmkdir: created directory 'src/web/handlers'\nmkdir: created directory 'src/web/tests'",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily11",
    "question": "You just made several edits across a git repository and want to see which files have changed, which are staged for the next commit, and which new files haven't been added to git yet. What command shows all of this at once?",
    "answer": "git status",
    "explanation": "This is the dashboard for your git repository — it tells you which branch you're on and organizes your changes into three buckets: files ready to be committed (staged), files you've changed but not staged yet, and completely new files that git has never tracked. It also prints suggested next-step commands at the bottom of each section, which are genuinely useful hints.",
    "usage": "Check the state of your working tree and staging area before committing — run this before every git commit.",
    "examples": [
      "git status  # full human-readable status",
      "git status -s  # short: two-letter status + filename per line",
      "git status --porcelain  # machine-readable for scripts",
      "git status --branch -s  # short form + branch info on first line",
      "git status -uall  # show untracked files INSIDE untracked dirs (default: just the dir)",
      "git status --ignored  # also list files ignored by .gitignore"
    ],
    "memoryTip": "Three buckets: STAGED (`Changes to be committed`), MODIFIED (`not staged`), UNTRACKED. Short form: first char = INDEX/staged, second = WORKING TREE/unstaged. `M ` = staged-modified, ` M` = unstaged-modified, `MM` = both. Run before EVERY commit.",
    "outputExample": "$ git status\nOn branch main\nChanges to be committed:\n\tmodified:   src/app.js\n\tnew file:   src/utils.js\n\nChanges not staged for commit:\n\tmodified:   README.md\n\nUntracked files:\n\tdraft.txt\n\n$ git status -s\nM  src/app.js\nA  src/utils.js\n M README.md\n?? draft.txt",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily12",
    "question": "You just cloned a TypeScript project from GitHub. The `src/` folder exists but nothing runs yet. What command reads `package.json` and downloads all the declared dependencies into `node_modules/`?",
    "answer": "npm install",
    "explanation": "Keep track of directory history using the stack. With pushd and popd, navigate between multiple directories without typing full paths repeatedly.",
    "usage": "Install all Node.js project dependencies from package.json into node_modules — the first command to run in any cloned JS project.",
    "examples": [
      "npm install  # install everything from package.json + package-lock.json",
      "npm install lodash  # add lodash to dependencies",
      "npm install --save-dev jest  # add jest as dev dependency",
      "npm install -g typescript  # install globally (system-wide CLI)",
      "npm ci  # CLEAN install from lockfile — preferred in CI",
      "npm install --omit=dev  # production install: skip devDependencies"
    ],
    "memoryTip": "`npm install` reads package.json. `npm ci` reads package-lock.json (faster, clean, CI-safe). `--save-dev` (`-D`) for dev deps, `-g` for global. ALWAYS gitignore `node_modules/`. Modern alternatives: `pnpm`, `yarn`, `bun` — same idea, different tradeoffs.",
    "outputExample": "$ npm install\nnpm warn deprecated some-old-pkg@1.0.0: please upgrade\nadded 487 packages, and audited 488 packages in 12s\nfound 0 vulnerabilities\n$ npm install --save-dev eslint\nadded 81 packages, and audited 569 packages in 4s",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily13",
    "question": "You've compiled a C program from source using `./configure && make` and now want to install the resulting binary to `/usr/local/bin`. The install step needs elevated privileges. What command runs the Makefile's install recipe with root access?",
    "answer": "make install",
    "explanation": "A Makefile is a recipe book for building software. It has named targets like \"build everything,\" \"run the tests,\" and \"install to the system.\" Running this command executes the \"install\" recipe, which typically copies the compiled binary and its man pages to standard system directories. It needs `sudo` because those directories are owned by root.",
    "usage": "Install compiled source-code software to system paths after running `./configure && make`.",
    "examples": [
      "make  # default target (usually 'all' — just builds)",
      "make install  # install built files into system paths",
      "sudo make install  # needed if installing to /usr/local/",
      "make install PREFIX=$HOME/.local  # install to ~/.local, no sudo",
      "make clean  # delete build artifacts",
      "make -j$(nproc) all  # parallel build using every CPU core"
    ],
    "memoryTip": "Conventional targets: `all` (build), `install` (system-install), `clean` (delete artifacts), `test`. `sudo` for system paths. `make -jN` parallel build. Classic source dance: `./configure && make && sudo make install`. Bypass sudo with `PREFIX=$HOME/.local`.",
    "outputExample": "$ ./configure --prefix=/usr/local && make -j$(nproc)\n...\ngcc -O2 build/main.o build/util.o -o myapp\n$ sudo make install\ninstall -m 0755 myapp /usr/local/bin/\ninstall -m 0644 doc/myapp.1 /usr/local/share/man/man1/\n$ which myapp\n/usr/local/bin/myapp",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily14",
    "question": "You don't have `htop` installed but need to watch which processes are consuming the most CPU in real time. What command comes pre-installed on every Linux system and shows a live, auto-refreshing process list?",
    "answer": "top",
    "explanation": "This is the classic built-in process monitor — always available, no install needed. It shows a live header with CPU and memory totals, then a table of all running processes that refreshes every few seconds. The busiest processes float to the top. Press Q to quit. It's not pretty, but it's always there.",
    "usage": "Monitor live CPU and memory usage interactively — available on every Linux system without installation.",
    "examples": [
      "top  # interactive — press q to quit, P/M to sort",
      "top -u alice  # only processes owned by user alice",
      "top -p 1234,5678  # watch only these PIDs",
      "top -b -n 1 | head -20  # ONE snapshot for logging/piping",
      "top -d 1  # refresh every 1 second instead of 3",
      "top -o %MEM  # sort by memory from the start"
    ],
    "memoryTip": "`top` = always installed, live snapshot. Keys: `q` quit, `P` CPU sort, `M` MEM sort, `k` kill, `1` per-CPU, `c` full cmdline. For prettier UI install `htop` or `btop`. Batch one-shot: `top -b -n 1`. Refresh rate: `-d N` seconds.",
    "outputExample": "$ top\ntop - 09:42:18 up 2 days,  4:21,  2 users,  load average: 0.42, 0.31, 0.28\nTasks: 142 total,   1 running, 141 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  3.2 us,  0.8 sy,  0.0 ni, 95.8 id,  0.1 wa\nMiB Mem :  15938.5 total,   1238.1 free,   4521.4 used,  10179.0 buff/cache\n\n    PID USER      PR  NI    VIRT    RES  %CPU  %MEM     TIME+ COMMAND\n   1842 alice     20   0 2880340 658432   2.3   4.0   0:42.10 firefox\n   2104 alice     20   0   24400   4892   0.0   0.0   0:00.42 bash",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily15",
    "question": "You installed `htop` on a server and want to launch the color-coded interactive process monitor that shows per-CPU bars and supports mouse navigation. What command starts it?",
    "answer": "htop",
    "explanation": "Running commands in the background lets your shell remain interactive. The ampersand (&) launches processes that run independently, perfect for long-running tasks.",
    "usage": "Launch an interactive color-coded process monitor with per-CPU bars and mouse support — the friendlier replacement for top.",
    "examples": [
      "htop  # interactive monitor — q to quit",
      "htop -u alice  # show only processes owned by user 'alice'",
      "htop -p 1234,5678  # watch only these PIDs",
      "htop -t  # start in tree view (parent→child)",
      "htop -s PERCENT_MEM  # start sorted by memory usage"
    ],
    "memoryTip": "`htop` = 'Hisham's top' (the author) but easier to remember as 'highlighted top' — colorful version of `top`. If `htop` isn't installed, fall back to plain `top`, which is on every system.",
    "outputExample": "$ htop\n  CPU[|||||||||                28.4%]   Tasks: 142, 312 thr; 2 running\n  Mem[||||||||||||||||      6.2G/16G]   Load average: 0.42 0.31 0.28\n\n  PID USER      PRI  NI  VIRT   RES  S CPU% MEM%   TIME+  Command\n 1234 alice      20   0 2400M  512M S 12.5  3.2  0:42.10 firefox\n 5678 alice      20   0  800M  120M S  2.3  0.7  0:08.20 bash\n\n F1Help  F2Setup  F3Search  F5Tree  F9Kill  F10Quit",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily16",
    "question": "Your application is throwing errors and you want to watch `/var/log/myapp/error.log` in real time as new lines are written, so you can see errors the moment they happen. What command keeps the file open and prints new lines continuously?",
    "answer": "tail -f /var/log/myapp/error.log",
    "explanation": "Real-time monitoring is essential for debugging. Using tail -f shows new log entries as they appear, letting you watch behavior instantly.",
    "usage": "Watch a log file in real time as new lines are appended — the first tool to reach for when investigating live issues.",
    "examples": [
      "tail -f /var/log/syslog  # follow syslog live",
      "tail -F /var/log/nginx/access.log  # capital F: survives log rotation",
      "tail -n 200 -f /var/log/myapp/error.log  # show last 200, then follow",
      "tail -f /var/log/myapp/error.log | grep --line-buffered ERROR  # live error filter",
      "tail -f /var/log/{syslog,auth.log}  # follow several files at once",
      "less +F /var/log/syslog  # follow inside less — Ctrl-C to pause-and-search"
    ],
    "memoryTip": "`-f` follow, `-F` follow-and-handle-rotation (USE THIS for production logs). `-n N` last N lines. `--line-buffered` on `grep` to avoid lag when filtering live. Modern alt: `less +F`. Server convention: `tail -F` is your friend.",
    "outputExample": "$ tail -F /var/log/nginx/access.log\n192.168.1.42 - - [17/May/2026:09:32:01 +0000] \"GET / HTTP/1.1\" 200 612\n192.168.1.42 - - [17/May/2026:09:32:05 +0000] \"GET /api/health HTTP/1.1\" 200 24\n10.0.0.7   - - [17/May/2026:09:32:08 +0000] \"POST /api/login HTTP/1.1\" 401 32\n# (continues live as new requests arrive — Ctrl-C to stop)",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily17",
    "question": "A colleague says 'port 5432 is already in use' on your server. What command shows every TCP port that is currently listening and which process is holding each one?",
    "answer": "ss -tlnp",
    "explanation": "This command asks the OS kernel directly for a list of every network port that a program is sitting on and waiting for connections. For each one it shows the port number and which program owns it. The flags mean: show TCP sockets, only listening ones, use raw numbers (not translated names), and include the process. You need `sudo` to see processes owned by other users.",
    "usage": "List every TCP listening port and the process holding it — the go-to for 'what is using port X' questions.",
    "examples": [
      "sudo ss -tlnp  # all TCP listeners + owning process",
      "sudo ss -tulnp  # TCP and UDP listeners",
      "ss -tuln  # without -p — no process info, no sudo needed",
      "sudo ss -tlnp | grep :80  # what's on port 80?",
      "ss -s  # one-line summary: total sockets per state",
      "sudo netstat -tlnp  # legacy equivalent (if netstat is installed)"
    ],
    "memoryTip": "`ss -tlnp` = TCP + Listening + Numeric + Process. Modern, fast, replaces `netstat`. Need sudo for process info on other users' sockets. Same flag pattern works for UDP: `ss -ulnp`. To see ESTABLISHED connections instead of listeners, drop `-l`: `ss -tnp`.",
    "outputExample": "$ sudo ss -tlnp\nState   Recv-Q  Send-Q  Local Address:Port  Peer Address:Port  Process\nLISTEN  0       128     0.0.0.0:22          0.0.0.0:*          users:((\"sshd\",pid=1234,fd=3))\nLISTEN  0       511     0.0.0.0:80          0.0.0.0:*          users:((\"nginx\",pid=2401,fd=6))\nLISTEN  0       4096    127.0.0.1:5432      0.0.0.0:*          users:((\"postgres\",pid=1789,fd=7))",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily18",
    "question": "You need to find every file in `~/code/myapp` that contains the string `DATABASE_URL`, including files in subdirectories. What command recursively searches through all files and prints the filename and line for each match?",
    "answer": "grep -r \"pattern\" .",
    "explanation": "The standard text-search tool by default searches only one file or reads from the keyboard. Adding the recursive flag tells it to walk every subdirectory and search every file it finds, printing the file path and line content for each match. It's the fastest way to find \"where in this whole codebase does X appear?\"",
    "usage": "Search every file under a directory for a text pattern — the standard 'find where this string appears' command.",
    "examples": [
      "grep -rn 'TODO' ~/code/myapp  # find every TODO with line numbers",
      "grep -rn --include='*.py' 'def main' .  # search Python files only",
      "grep -rli 'password' .  # case-insensitive, list files with at least one hit",
      "grep -rn --exclude-dir=node_modules --exclude-dir=.git 'fetch' .  # skip junk dirs",
      "grep -rnC 2 'ERROR' /var/log  # show 2 lines of context around each match",
      "rg 'DATABASE_URL' .  # ripgrep — same idea, much faster, respects .gitignore"
    ],
    "memoryTip": "`grep -r PATTERN DIR`. Useful flags pile up: `-r` recurse, `-n` line numbers, `-i` case-insens, `-l` filenames only, `-w` whole word, `-C N` context. Use `-F` for literal strings (no regex headaches). Modern: install `ripgrep` (`rg`) — same concept, 10x faster.",
    "outputExample": "$ grep -rn 'TODO' --include='*.js' --include='*.ts' src/\nsrc/app.js:23:    // TODO: fix this bug\nsrc/utils/parse.ts:14:  // TODO: handle edge case\nsrc/components/Header.tsx:42:  // TODO: a11y review\n$ grep -rn 'TODO' src/ | wc -l\n12",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily19",
    "question": "A config file at `/etc/myapp/settings.conf` uses `localhost` as the database host everywhere, but you need to change it to `db.internal`. What `sed` command replaces every occurrence on every line, printing the result to stdout first so you can verify before modifying the file?",
    "answer": "sed 's/old/new/g'",
    "explanation": "This stream editor reads text line by line and applies a substitution command to each line. The pattern `s/old/new/g` means \"substitute: find 'old', replace with 'new', g = do it globally (every match on the line, not just the first).\" Without the `-i` flag, the original file is untouched — the modified output goes to the screen. Once you're happy with what you see, re-run with `-i.bak` to edit the file in place and create a backup first.",
    "usage": "Replace text patterns across a file or stream — inspect output without `-i`, then add `-i.bak` to modify in place with a backup.",
    "examples": [
      "echo 'cat cat cat' | sed 's/cat/dog/g'  # → dog dog dog",
      "sed 's/localhost/db.internal/g' /etc/myapp/settings.conf  # print to stdout (file unchanged)",
      "sed -i 's/localhost/db.internal/g' /etc/myapp/settings.conf  # edit IN PLACE — irreversible",
      "sed -i.bak 's/localhost/db.internal/g' /etc/myapp/settings.conf  # in-place with .bak backup",
      "sed -E 's|^([a-z]+)=.*|\\1|' .env  # extract keys; -E for extended regex + | delimiter",
      "sed -i '/^#/d; /^$/d' config.conf  # delete comment lines AND blank lines"
    ],
    "memoryTip": "`sed 's/old/new/g'`: SUBSTITUTE, with `g` for GLOBAL (all matches per line). No `-i` = print to stdout (safe). With `-i` = overwrite file. `-i.bak` makes a backup first — always use this for one-shot edits. Change delimiter to `|` or `#` if pattern has `/`.",
    "outputExample": "$ sed 's/localhost/db.internal/g' /etc/myapp/settings.conf\ndb_host=db.internal\ndb_port=5432\ncache_host=db.internal\n$ sed -i.bak 's/localhost/db.internal/g' /etc/myapp/settings.conf\n$ ls /etc/myapp/\nsettings.conf  settings.conf.bak",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily20",
    "question": "The output of `ps aux` has 11 columns. You want to extract only the first column (usernames) from every line using a command-line tool that understands fields. What command does that?",
    "answer": "awk '{print $1}' file.txt",
    "explanation": "This tool reads text line by line and splits each line into numbered fields based on whitespace (or any delimiter you choose). Referring to the fields as `$1`, `$2`, and so on, you tell it what to do with each line. `{print $1}` means \"for every line, print the first field.\" It's like a tiny programming language designed specifically for working with tabular text data.",
    "usage": "Extract, filter, or aggregate columns from tabular text — the right tool when cut is too simple but Python is overkill.",
    "examples": [
      "awk '{print $1}' /etc/passwd  # print first whitespace-separated field",
      "awk -F: '{print $1}' /etc/passwd  # split on `:`, print field 1 (username)",
      "ps aux | awk '$3 > 5 {print $2, $11}'  # PIDs + commands using > 5% CPU",
      "awk '{sum += $2} END {print sum}' data.txt  # sum the second column",
      "awk -F, 'NR>1 {print $2}' report.csv  # CSV — skip header (NR>1), print 2nd column",
      "awk '/ERROR/ {count++} END {print count}' /var/log/myapp/app.log  # count ERROR lines"
    ],
    "memoryTip": "`awk 'PATTERN { ACTION }' FILE`. Fields: `$1`,`$2`,...,`$NF` (last); whole line `$0`. Specials: `NR` line number, `NF` field count, `FS`/`-F` separator, `BEGIN`/`END` blocks. Sum a column: `awk '{s+=$N} END {print s}'`. Tab-separated: `-F'\\t'`.",
    "outputExample": "$ ps aux | awk 'NR>1 {print $2, $3, $11}' | sort -k2 -nr | head\n1842 12.3 /usr/lib/firefox/firefox\n3201  5.2 /usr/bin/node\n2104  0.0 -bash\n$ awk -F: '$3 >= 1000 {print $1, $3}' /etc/passwd\nalice 1000\nbob 1001",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily21",
    "question": "Your nginx access log has thousands of lines. You want to find the top 5 most repeated IP addresses in the first column. What pipeline produces a ranked frequency count of every unique first-column value?",
    "answer": "sort | uniq -c",
    "explanation": "This two-command pipeline first sorts all lines alphabetically so identical ones end up adjacent, then collapses adjacent duplicates into one line and prefixes each with a count of how many times it appeared. Adding a third step — sort the result numerically in reverse — makes the most common items bubble to the top. It's the shell's quick-and-dirty \"count how often each thing appears\" recipe.",
    "usage": "Count occurrences of each unique line in a stream — always preceded by `sort` and usually followed by `sort -rn | head` for a top-N frequency table.",
    "examples": [
      "awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -5  # top 5 IPs",
      "sort /var/log/myapp/access.log | uniq -c | sort -rn | head  # most repeated log lines",
      "grep ERROR /var/log/myapp/app.log | sort | uniq -c | sort -rn  # error message frequency",
      "git log --pretty=format:'%an' | sort | uniq -c | sort -rn  # commits per author",
      "sort users.txt | uniq -d  # only show LINES THAT REPEAT",
      "sort users.txt | uniq -u  # only LINES THAT APPEAR ONCE"
    ],
    "memoryTip": "`sort | uniq -c | sort -rn | head` = the 'top N of anything' incantation. Must SORT first because uniq only collapses ADJACENT duplicates. `-c` count, `-d` only-duplicates, `-u` only-unique, `-i` case-insens. Pre-filter with `awk '{print $COL}'` to group by a specific column.",
    "outputExample": "$ awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -5\n  4231 192.168.1.42\n  2187 10.0.0.7\n   942 203.0.113.5\n   514 198.51.100.22\n   312 192.168.1.101\n$ grep -oP 'level=\\w+' /var/log/myapp/app.log | sort | uniq -c | sort -rn\n  4218 level=info\n   892 level=warn\n   201 level=error",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily22",
    "question": "You want to set up a script to run automatically every night at 2:30am that backs up your database. What command opens your personal scheduled-task list in an editor so you can add the new job?",
    "answer": "crontab -e",
    "explanation": "Every user on Linux has a personal list of scheduled tasks — the cron table. This command opens that list in your text editor. Each line you add specifies when to run something (using five time fields: minute, hour, day-of-month, month, day-of-week) and what command to run. When you save and exit, the scheduler immediately picks up the changes.",
    "usage": "Edit your personal cron schedule to add, modify, or remove scheduled tasks.",
    "examples": [
      "crontab -e  # edit YOUR crontab",
      "crontab -l  # list current jobs (read-only, no editor)",
      "crontab -r  # REMOVE all jobs — DANGEROUS, no prompt",
      "sudo crontab -e -u alice  # edit alice's crontab (as root)",
      "EDITOR=nano crontab -e  # use nano instead of vi",
      "crontab -l | grep -v '^#'  # show only active job lines"
    ],
    "memoryTip": "`-e` edit, `-l` list, `-r` remove all. `EDITOR=nano` to escape vi. Personal crontab is per-user; system jobs go in `/etc/cron.d/`. Always validate with `crontab -l` after editing. Watch `/var/mail/$USER` for cron job output if you forgot to redirect it.",
    "outputExample": "$ EDITOR=nano crontab -e\ncrontab: installing new crontab\n$ crontab -l\n# m h  dom mon dow   command\n30 2  *   *   *     /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1\n0  *  *   *   *     /usr/local/bin/heartbeat.sh\n*/15 * *   *   *    /opt/health-check.sh >/dev/null 2>&1",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily23",
    "question": "After changing nginx's config file, you want to confirm whether the nginx service is currently running or stopped, see its PID, and check whether it's set to start automatically on reboot — all in one command.",
    "answer": "systemctl status nginx",
    "explanation": "This command is the dashboard for a single system service. It tells you in plain colored text whether the service is running (green dot) or stopped/failed (red dot), when it started, what process ID it has, whether it will start on the next reboot, and the last ten lines of its log output. It's the first command to run when something might not be working.",
    "usage": "Check a service's running state, PID, boot persistence, and recent log lines in one command.",
    "examples": [
      "systemctl status nginx  # state + 10 log lines",
      "sudo systemctl restart nginx  # stop and start (apply config changes)",
      "sudo systemctl enable --now nginx  # start now + persist on boot",
      "systemctl is-active nginx  # one-word answer (script-friendly)",
      "systemctl list-units --failed  # show every FAILED service",
      "systemctl --user status myapp  # for user (non-root) services"
    ],
    "memoryTip": "`systemctl status` = the service dashboard. Verbs: `start/stop` (now), `enable/disable` (boot), `--now` (both), `restart/reload`. Scripts: `is-active`, `is-enabled`. Health check: `systemctl list-units --failed`. Pair with `journalctl -xeu SERVICE` for deep logs.",
    "outputExample": "$ systemctl status nginx\n● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; preset: enabled)\n     Active: active (running) since Sat 2026-05-17 09:32:01 UTC; 1h 14min ago\n   Main PID: 2402 (nginx)\n      Tasks: 3 (limit: 9468)\n     Memory: 4.8M\nMay 17 09:32:01 server1 systemd[1]: Starting nginx.service ...\nMay 17 09:32:01 server1 systemd[1]: Started nginx.service.",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily24",
    "question": "The nginx service failed silently overnight. You want to read all of its log output captured by systemd since the server was last rebooted, not just the last 10 lines. What command shows the full journal for the nginx service?",
    "answer": "journalctl -u nginx",
    "explanation": "Modern Linux systems capture every service's output — what would normally scroll past in the terminal — into a structured database called the journal. This command reads all the saved output for a specific service from that database. By default it opens in a pager (like `less`) so you can scroll. Add flags to limit it to the last hour, follow it live, or filter only error messages.",
    "usage": "Read the full captured log output for a systemd service from the journal — goes deeper than `systemctl status`.",
    "examples": [
      "sudo journalctl -u nginx  # all nginx logs (paged)",
      "sudo journalctl -u nginx -n 50  # just last 50 lines",
      "sudo journalctl -u nginx -f  # live follow (Ctrl-C to stop)",
      "sudo journalctl -u nginx --since '1 hour ago'  # time-bound",
      "sudo journalctl -xeu nginx  # the canonical 'recent errors with context'",
      "sudo journalctl -u nginx -p err --since today  # errors only, today"
    ],
    "memoryTip": "`journalctl -u UNIT` = logs for one service. Stack flags: `-n N` last N, `-f` follow, `-e` end of pager, `-x` explain, `-r` reverse, `-p err` errors-only, `--since/--until` time bounds. The standard 'why did this fail?' incantation: `journalctl -xeu SERVICE`.",
    "outputExample": "$ sudo journalctl -u nginx -n 5\nMay 17 09:32:01 server1 systemd[1]: Starting nginx.service...\nMay 17 09:32:01 server1 nginx[2400]: nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nMay 17 09:32:01 server1 systemd[1]: Started nginx.service.\nMay 17 10:14:22 server1 nginx[2402]: [error] open() \"/var/www/html/missing.css\" failed (2: No such file)\n$ sudo journalctl -u nginx -p err --since today | wc -l\n14",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily25",
    "question": "You want to see every TCP and UDP port currently listening on a server, including which process is bound to each, in a single command.",
    "answer": "ss -tulnp",
    "explanation": "This is an expanded version of the TCP-only port check, covering both TCP and UDP at once. The extra flag adds UDP sockets to the list. The result is a complete picture of every port any program is sitting on and waiting for traffic — useful for security audits and debugging \"address already in use\" errors for UDP-based services like DNS.",
    "usage": "List all listening TCP and UDP ports with the owning process — the complete port-audit command.",
    "examples": [
      "sudo ss -tulnp  # TCP+UDP listeners with process info",
      "sudo ss -tnp state established  # active TCP connections only",
      "sudo ss -tnp | grep :443  # who's connected to HTTPS?",
      "ss -s  # one-line socket summary",
      "sudo ss -tlnp '( sport = :80 or sport = :443 )'  # specific ports",
      "ss -tnp | wc -l  # rough count of TCP connections"
    ],
    "memoryTip": "`ss -tulnp` = TCP + UDP + Listening + Numeric + Process. Drop `-l` to see active connections. `ss -s` for summary. Need sudo for process info on other users' sockets. Modern replacement for legacy `netstat`. Filter syntax: `'( sport = :80 )'`.",
    "outputExample": "$ sudo ss -tulnp\nNetid   State    Local Address:Port   Process\nudp     UNCONN   127.0.0.53%lo:53     users:((\"systemd-resolve\",pid=682,fd=13))\nudp     UNCONN   0.0.0.0:68           users:((\"systemd-network\",pid=678,fd=21))\ntcp     LISTEN   0.0.0.0:22           users:((\"sshd\",pid=1234,fd=3))\ntcp     LISTEN   0.0.0.0:80           users:((\"nginx\",pid=2401,fd=6))\ntcp     LISTEN   127.0.0.1:5432       users:((\"postgres\",pid=1789,fd=7))",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily26",
    "question": "In a shell script you want to run `cd /deploy/app`, then `tar -xzf release.tar.gz`, then `systemctl restart myapp` — all in sequence, regardless of whether any of the previous steps fail. How do you write all three on one line?",
    "answer": "command1 ; command2",
    "explanation": "The semicolon is the simplest way to chain commands: run the first one, wait for it to finish, then run the second one — no matter what happened. It's like listing steps in a recipe where you continue to the next step regardless of whether the last one went well. Compare this to double-ampersand (`&&`), which stops the chain if any step fails.",
    "usage": "Chain commands that should all run sequentially regardless of success or failure — use `&&` instead when later steps depend on earlier ones succeeding.",
    "examples": [
      "echo first ; echo second ; echo third  # always all three",
      "{ date; uptime; df -h; } > /tmp/daily-snapshot.txt  # group + single redirect",
      "cd /tmp && rm -rf scratch  # PREFER this over `cd /tmp ; rm -rf scratch` for safety",
      "make ; echo \"done at $(date)\"  # second runs even if make fails",
      "(cd /tmp; ls)  # subshell — cd doesn't affect calling shell",
      "git pull; git submodule update; npm install  # three independent steps"
    ],
    "memoryTip": "`;` = unconditional sequence (no matter what). `&&` = continue ONLY on success. `||` = continue ONLY on failure. `&` = run in background. `{ a; b; c; }` groups (note spaces and trailing `;`). For ANY destructive second step, prefer `&&` over `;` for safety.",
    "outputExample": "$ false ; echo 'still runs'\nstill runs\n$ false && echo 'this would NOT run'\n$ { date; uptime; } > /tmp/snap.txt\n$ cat /tmp/snap.txt\nSat May 17 11:14:22 UTC 2026\n 11:14:22 up 2 days,  5:48,  1 user,  load average: 0.42, 0.31, 0.28",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily27",
    "question": "Your deploy script does: pull the latest code, then install dependencies, then run tests. If any step fails, the remaining steps should be skipped. What operator chains these three commands so each one only runs if the previous one succeeded?",
    "answer": "command1 && command2",
    "explanation": "The double-ampersand is the \"and then, but only if that worked\" operator. If the left command fails (returns a non-zero exit code), the right command is skipped — the whole chain short-circuits. Chain many commands: `cmd1 && cmd2 && cmd3` and the first failure stops everything. This is the safe way to write dependent steps.",
    "usage": "Chain dependent commands so each step only runs if the previous succeeded — the safe way to write multi-step sequences.",
    "examples": [
      "git pull && npm install && npm test  # stop at first failure",
      "mkdir -p /deploy/app && cd /deploy/app && tar -xzf /tmp/release.tar.gz",
      "[ -f /etc/myapp/config.sh ] && source /etc/myapp/config.sh  # source only if exists",
      "make && sudo make install  # only install if build succeeded",
      "ping -c1 -W2 10.20.30.40 >/dev/null 2>&1 && echo up || echo down",
      "command -v jq >/dev/null && echo 'jq is installed'"
    ],
    "memoryTip": "`&&` = AND-then, only on SUCCESS. `||` = OR-else, only on FAILURE. Use `&&` for SAFE chains: `cd dir && rm -rf *` won't wipe wrong directory if cd fails. The `cmd && a || b` 'if/else' one-liner has a corner-case bug — when correctness matters, use real `if`.",
    "outputExample": "$ true && echo 'success ran'\nsuccess ran\n$ false && echo 'this would NOT print'\n$ mkdir /tmp/testwork && cd /tmp/testwork && touch a b c && ls\na  b  c\n$ [ -f .env ] && source .env || echo 'no .env (continuing with defaults)'\nno .env (continuing with defaults)",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily28",
    "question": "In a bash script you want to download a config file from an internal server, but if the download fails you want to fall back to copying a local default instead of crashing. What operator runs the fallback command only when the primary command fails?",
    "answer": "command1 || command2",
    "explanation": "The double-pipe is the \"or else\" operator — it runs the right command only when the left one fails. It's the fallback direction, the opposite of double-ampersand. Use it for error recovery, default-value patterns, and providing alternatives when something is unavailable.",
    "usage": "Run a fallback command only when the primary fails — the 'or else' direction for inline error handling.",
    "examples": [
      "curl -fsS https://config.internal/app.conf -o /etc/myapp/app.conf || cp /etc/myapp/app.conf.default /etc/myapp/app.conf",
      "mkdir -p ~/data || exit 1  # bail if creation impossible",
      "grep -q PATTERN /etc/myapp/settings.conf || echo 'setting not found'",
      "risky_cmd || true  # explicit opt-out of `set -e` for ONE command",
      "cd /work || cd /tmp || cd /  # fall back through alternatives",
      "[ -f .env ] || cp .env.example .env  # create default if missing"
    ],
    "memoryTip": "`||` = OR-else, runs on FAILURE. Use for fallback paths and recovery. Under `set -e`, LEFT side is exempt from auto-exit — that's how `cmd || true` opts out. Group multi-step fallbacks: `cmd || { cleanup; exit 1; }`. The `&& A || B` 'if/else' pattern has a corner case — use real `if` when it matters.",
    "outputExample": "$ false || echo 'fallback ran'\nfallback ran\n$ true || echo 'this would NOT print'\n$ cat /tmp/missing.conf || echo 'file missing, using defaults'\ncat: /tmp/missing.conf: No such file or directory\nfile missing, using defaults\n$ set -e; false || true; echo 'survived'\nsurvived",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily29",
    "question": "You want to find all lines containing 'ERROR' in `/var/log/myapp/app.log`, then count how many there are, using only built-in text tools and no temp files. How do you connect the output of the first command directly into the input of the second?",
    "answer": "command1 | command2",
    "explanation": "The pipe character connects two commands so the output of the first flows directly into the input of the second, without needing a temporary file. Both programs run at the same time — the first writes, the second reads. This is one of Unix's core design ideas: build small tools that do one thing well, then chain them together. Most complex shell one-liners are just three or four tools piped together.",
    "usage": "Connect two commands so the first's output feeds directly into the second's input — the core Unix composition operator.",
    "examples": [
      "grep ERROR /var/log/myapp/app.log | wc -l  # count error lines",
      "ps aux | grep -v grep | grep nginx  # find nginx processes",
      "ls /etc | wc -l  # count files in /etc",
      "git log --oneline | head -10  # last 10 commits, one per line",
      "df -h 2>&1 | grep -v tmpfs  # pipe both stdout and stderr, filter out tmpfs lines",
      "set -o pipefail; false | grep x  # pipefail makes the whole pipeline fail"
    ],
    "memoryTip": "`|` connects stdout → stdin. Only STDOUT travels through (use `|&` or `2>&1 |` for stderr too). Pipeline runs in PARALLEL. Last command's exit code wins unless `set -o pipefail`. Subshells in pipes can swallow variables — use process substitution or mapfile for those cases.",
    "outputExample": "$ grep ERROR /var/log/myapp/app.log | wc -l\n201\n$ ps aux | grep nginx | grep -v grep\nroot   2400  0.0  0.0 56012  1432 ? Ss 09:32  nginx: master\nwww-data 2401 0.0 0.1 56428 4892 ? S  09:32  nginx: worker\n$ cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -3\n  4231 192.168.1.42\n  2187 10.0.0.7\n   942 203.0.113.5",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily30",
    "question": "You need to kick off a 20-minute database reindex operation on a remote server but want the terminal prompt back immediately so you can do other work while it runs. How do you start the command so it runs in the background?",
    "answer": "nohup database-reindex.sh &",
    "explanation": "Adding an ampersand at the end of a command immediately returns your prompt, while the command continues running in the background. The shell prints a job number and process ID so you can refer to it later. Be aware: the command's output will still appear in your terminal interleaved with whatever else you type, so redirect it to a log file to keep things tidy.",
    "usage": "Start a long-running command in the background so the shell prompt returns immediately.",
    "examples": [
      "pg_dump mydb > /var/backups/mydb.sql &  # background database dump",
      "./reindex.sh > /var/log/reindex.log 2>&1 &  # redirect output, then background",
      "build_step1 & build_step2 & build_step3 & wait  # three parallel jobs, wait for all",
      "nohup ./long-task.sh > out.log 2>&1 &  # survives logout",
      "jobs  # list current background jobs",
      "fg %1  # bring job 1 to foreground"
    ],
    "memoryTip": "`&` = background. `jobs` list, `fg %N` foreground, `bg %N` resume in background, `kill %N` terminate. For LOGOUT-survival use `nohup ... &` or `disown` or `tmux`/`screen`. For persistent services, write a systemd unit. Always REDIRECT output (`> log 2>&1`) when backgrounding non-interactive jobs.",
    "outputExample": "$ pg_dump mydb > /var/backups/mydb.sql 2>&1 &\n[1] 12345\n$ jobs\n[1]+  Running  pg_dump mydb > /var/backups/mydb.sql 2>&1 &\n$ # (do other work here)\n[1]+  Done     pg_dump mydb > /var/backups/mydb.sql 2>&1",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily31",
    "question": "Your script generates a report and you want to save it to `/tmp/daily-report.txt`, replacing the file's contents completely each time the script runs. What redirection operator writes to a file and truncates it first?",
    "answer": "command > file.txt",
    "explanation": "The single right-angle bracket sends a command's output to a file. If the file already exists, its contents are erased first — then the new output is written. If the file doesn't exist, it's created. This is the basic \"save output to a file\" operator, but be careful: there's no undo if you overwrite something you needed.",
    "usage": "Redirect a command's output to a file, creating it if new or overwriting it if it exists.",
    "examples": [
      "ls /etc > /tmp/etc-listing.txt  # save listing to file (overwrites)",
      "date > /tmp/timestamp.txt  # snapshot current time",
      "make > /tmp/build.log 2>&1  # capture both stdout and stderr",
      "cmd > /dev/null  # discard output completely",
      "set -o noclobber; ls > /tmp/existing.txt  # errors out instead of truncating",
      "> /tmp/lockfile.txt  # create empty file without a command"
    ],
    "memoryTip": "`>` = overwrite (TRUNCATES first!). `>>` = append. `2>` = stderr. `&>` = both. `> /dev/null` = throw away. Enable `set -o noclobber` to refuse overwrites. NEVER `> samefile` you're reading — it empties the file first.",
    "outputExample": "$ echo 'first' > /tmp/log.txt\n$ echo 'second' > /tmp/log.txt  # OVERWRITES — 'first' is gone\n$ cat /tmp/log.txt\nsecond\n$ ls /etc > /tmp/etc-listing.txt\n$ wc -l /tmp/etc-listing.txt\n237 /tmp/etc-listing.txt\n$ set -o noclobber; echo x > /tmp/log.txt\nbash: /tmp/log.txt: cannot overwrite existing file",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily32",
    "question": "A cron job writes a timestamped entry to `/var/log/myapp/events.log` on each run and you need each run's entry to be added to the file without overwriting previous entries. What redirection operator appends to a file instead of overwriting it?",
    "answer": "command >> file.txt",
    "explanation": "The double right-angle bracket is exactly like the single one, except it adds new output at the END of the file instead of erasing the existing content first. Every run accumulates another entry, building up a history. Use this for log files, audit trails, or any situation where you want to keep adding to a file over time.",
    "usage": "Append output to the end of a file without erasing existing content — for log files and accumulating records.",
    "examples": [
      "echo \"[$(date '+%Y-%m-%d %H:%M:%S')] deploy started\" >> /var/log/myapp/events.log",
      "for h in web1 web2 web3; do ssh $h uptime >> /tmp/uptimes.log; done",
      "make >> /tmp/build.log 2>&1  # append BOTH stdout and stderr",
      "printf '%s\\n' '10.20.30.40 db.internal' >> /etc/hosts  # add a host entry",
      "command >> /tmp/stdout.log 2>> /tmp/stderr.log  # split streams to separate logs"
    ],
    "memoryTip": "`>>` append (preserve existing). `>` overwrite (TRUNCATE). `2>>` append stderr. `>> file 2>&1` for both. No `noclobber` equivalent — appends always work. For multi-process safety use `flock`. For audit-quality logs prefer `logger` over `>> file.log`.",
    "outputExample": "$ echo first > /tmp/log.txt\n$ echo second >> /tmp/log.txt\n$ echo third >> /tmp/log.txt\n$ cat /tmp/log.txt\nfirst\nsecond\nthird\n$ for i in 1 2 3; do echo \"run $i at $(date +%T)\" >> /tmp/runs.log; sleep 1; done\n$ cat /tmp/runs.log\nrun 1 at 11:14:22\nrun 2 at 11:14:23\nrun 3 at 11:14:24",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily33",
    "question": "You're running `find / -name 'config.yml'` but it floods the output with hundreds of 'Permission denied' lines for directories you can't read, drowning out the actual results. How do you redirect only the error messages away so only the real results appear on screen?",
    "answer": "command 2> error.log",
    "explanation": "Every program sends two separate streams of text to your terminal: normal output (results, data) and error output (warnings, problems). Normally both appear mixed together on the screen. This redirection sends only the error stream to a file (or to the void if you use `/dev/null`), while normal output continues to appear on screen — letting you see just the results you care about.",
    "usage": "Redirect only error output to a file or `/dev/null`, leaving normal output on screen.",
    "examples": [
      "find / -name 'config.yml' 2>/dev/null  # SILENCE all 'Permission denied' noise",
      "ls /tmp /nope > /tmp/out.txt 2> /tmp/err.txt  # split clean output and errors",
      "make > /tmp/build.out 2> /tmp/build.err  # split clean output and errors",
      "make > /tmp/build.log 2>&1  # both to ONE file (order matters!)",
      "cmd 2>&1 | grep -i error  # merge to stdout then filter with grep",
      "cmd 2>> /var/log/myapp/errors.log  # APPEND stderr instead of overwrite"
    ],
    "memoryTip": "FD numbers: 0 stdin, 1 stdout, 2 stderr. `2>` redirect stderr (overwrite), `2>>` append, `2>&1` 'stderr follows stdout' (the `&` says 'this is FD, not filename'). `2>/dev/null` = discard errors. `&>` and `&>>` = both, bash shorthand. Order matters: put `2>&1` AFTER `> file`, not before.",
    "outputExample": "$ find / -name 'config.yml' 2>/dev/null\n/etc/myapp/config.yml\n/home/alice/code/myapp/config.yml\n$ ls /tmp /nope > /tmp/out.txt 2> /tmp/err.txt\n$ cat /tmp/out.txt\n/tmp:\nfile1\nfile2\n$ cat /tmp/err.txt\nls: cannot access '/nope': No such file or directory",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily34",
    "question": "You're running a deploy script and want to save absolutely everything — both normal output and any error messages — into a single timestamped log file so you can review it afterward. What is the bash shorthand redirection that sends both stdout and stderr to one file?",
    "answer": "command &> output.log",
    "explanation": "Programs produce two output streams — normal results and error messages. Usually both end up on screen mixed together. This shorthand captures both into a single file at once. It's the cleanest way to save the complete transcript of a script run for later review.",
    "usage": "Capture both normal output and errors into one file — use `&>` for overwrite or `&>>` to append.",
    "examples": [
      "make &> /tmp/build.log  # all output (stdout + stderr) into one file",
      "./deploy.sh &> /var/log/deploy-$(date +%F).log  # dated log file",
      "noisy_cmd &> /dev/null  # silence completely",
      "cmd 2>&1 | tee /tmp/run.log  # capture to file AND see live output on screen",
      "make >> /tmp/build.log 2>&1  # append form (POSIX)",
      "cmd &>> /var/log/myapp/daily.log  # append both streams"
    ],
    "memoryTip": "Two forms: bash shorthand `&> file` (overwrite) / `&>> file` (append), or POSIX `> file 2>&1` / `>> file 2>&1`. ORDER matters: `2>&1` must come AFTER `> file`. To see AND save, replace with `| tee`. For silence: `&> /dev/null`.",
    "outputExample": "$ ./deploy.sh &> /var/log/deploy-2026-05-17.log\n$ tail -3 /var/log/deploy-2026-05-17.log\nCompiling src/main.c ... ok\nLinking ... ok\ndeploy successful in 4.2s\n$ ls /nope /tmp &> /tmp/all.log\n$ cat /tmp/all.log\nls: cannot access '/nope': No such file or directory\n/tmp:\nfile1\nfile2",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily35",
    "question": "You want to understand every flag that `rsync` accepts but have no internet access. What command opens the offline documentation page for `rsync` right in your terminal?",
    "answer": "man rsync",
    "explanation": "Every command on Linux ships with a built-in help page — the manual page — that lives on your own system. This command opens that page in a scrollable viewer (like a simple e-reader). Press space to page down, Q to quit, and forward-slash followed by a word to search. No internet required.",
    "usage": "Open the offline built-in manual page for any command or config file format.",
    "examples": [
      "man rsync  # the rsync reference page",
      "man 5 passwd  # the FILE FORMAT of /etc/passwd (not the command)",
      "man -k 'copy files'  # apropos: search descriptions for matching pages",
      "man -f ls  # whatis: one-line summary of the ls man page",
      "man bash  # the comprehensive bash reference (5000+ lines)",
      "tldr rsync  # community cheat-sheet alternative (install tldr first)"
    ],
    "memoryTip": "`man` = MANUAL. 9 sections; collisions resolved by `man N name` (e.g., `man 5 passwd`). Navigation in less: `/` search, `n` next, `space` page, `q` quit. Quick alternatives: `cmd --help` for flag summary, `tldr CMD` for cheat-sheet, `apropos KEYWORD` to search.",
    "outputExample": "$ man rsync\nRSYNC(1)                         User Commands                        RSYNC(1)\n\nNAME\n       rsync - a fast, versatile, remote (and local) file-copying tool\n\nSYNOPSIS\n       Local:  rsync [OPTION...] SRC... [DEST]\n       Access via remote shell:\n         Pull: rsync [OPTION...] [USER@]HOST:SRC... [DEST]\n         Push: rsync [OPTION...] SRC... [USER@]HOST:DEST\n\nDESCRIPTION\n       Rsync is a fast and extraordinarily versatile file copying tool...\nManual page rsync(1) line 1 (press h for help or q to quit)",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily36",
    "question": "You have both system Python and a pyenv-managed Python installed. You want to confirm which `python` executable will actually run when you type `python`, and also see all other `python` executables in your PATH. What command shows the full resolution including any aliases or functions, and all alternatives?",
    "answer": "which python",
    "explanation": "When you type a command name, the shell searches through a list of directories to find the right executable to run. This command answers \"where exactly will that search stop and what will it run?\" — including whether the name is an alias, a shell function, or an actual binary on disk. The version shown here also finds ALL matches, not just the first winner.",
    "usage": "Find which executable (or alias/function) will run for a given command name, and see all alternatives in PATH order.",
    "examples": [
      "command -v python  # POSIX, script-friendly — exit non-zero if missing",
      "type python  # bash builtin — shows aliases and functions too",
      "type -a python  # show ALL matches in PATH order, not just the winner",
      "which python  # classic — searches PATH only (misses aliases/functions)",
      "whereis git  # binary + man page + source paths",
      "command -v jq >/dev/null || { echo 'install jq first' >&2; exit 1; }  # tool-check idiom"
    ],
    "memoryTip": "`command -v` (POSIX, scripts), `type` (bash builtin, shows aliases/functions), `which` (classic but quirky), `whereis` (binary + man + source). Prefer `command -v` in scripts: `if command -v CMD >/dev/null; then ...; fi`. Use `type -a` to see EVERY match in PATH.",
    "outputExample": "$ command -v python\n/home/alice/.pyenv/shims/python\n$ type -a python\npython is /home/alice/.pyenv/shims/python\npython is /usr/bin/python\n$ type ls\nls is aliased to `ls --color=auto'\n$ which python\n/home/alice/.pyenv/shims/python\n$ if command -v jq >/dev/null; then echo 'jq present'; else echo 'install jq'; fi\njq present",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily37",
    "question": "You remember running a long `rsync` command last week but can't recall the exact flags and paths. What command searches through your command history to find it?",
    "answer": "history | grep keyword",
    "explanation": "Your shell remembers every command you've typed, stored in a file in your home directory. This two-command pipeline shows that history and then filters it to only lines containing your search word. Once you spot the right entry, you can re-run it by its number. For interactive searching without knowing the exact word, press Ctrl-R in the terminal and start typing.",
    "usage": "Search shell command history for a past command — the fastest way to recover a command you know you ran before.",
    "examples": [
      "history | grep -i rsync  # case-insensitive search for rsync commands",
      "history | grep 'ssh -p'  # find SSH commands using a specific port",
      "history 20  # last 20 commands",
      "!!  # re-run the last command",
      "sudo !!  # re-run last command WITH sudo (when you forgot)",
      "!rsync  # re-run the most recent command starting with 'rsync'"
    ],
    "memoryTip": "`history` prints history. `history | grep X` searches. `!N` re-run entry N, `!!` re-run last, `!STR` re-run most recent matching prefix. INTERACTIVE search: Ctrl-R then type, Ctrl-R again for older, Enter to run. Save after every command: `PROMPT_COMMAND='history -a'` in `.bashrc`.",
    "outputExample": "$ history | grep rsync\n  102  rsync -avz --delete ~/code/myapp/ deploy@web1:/var/www/myapp/\n  113  rsync -avz --progress -e 'ssh -p 2222' ./dist/ deploy@staging:/var/www/\n$ !113\nrsync -avz --progress -e 'ssh -p 2222' ./dist/ deploy@staging:/var/www/",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily38",
    "question": "You just typed `apt update` and got 'Permission denied'. Instead of retyping the whole command, what two-token shortcut re-runs your last command with `sudo` prepended?",
    "answer": "sudo !!",
    "explanation": "The double exclamation mark (!!) is a bash history expansion that runs your last command again. Useful when you forgot to use sudo.",
    "usage": "Re-run the last command with `sudo` — the fastest recovery when you forgot to use elevated privileges.",
    "examples": [
      "apt update  # Permission denied\nsudo !!  # retry with sudo → sudo apt update",
      "vim /etc/nginx/nginx.conf  # opens read-only\nsudo !!  # reopens with sudo",
      "mkdir /opt/myapp && cd !$  # !$ = last argument (/opt/myapp) of previous command",
      "^localhost^db.internal  # fix a typo in the last command and re-run",
      "set +H  # disable history expansion if it causes problems"
    ],
    "memoryTip": "`!!` = the last command. `sudo !!` = redo with sudo. `!STR` re-run most recent starting with STR. `!$` = last arg of previous command. `^old^new^` = swap and rerun. Bash echoes the expansion before running — read it. Disable with `set +H` if dangerous.",
    "outputExample": "$ apt update\nE: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)\n$ sudo !!\nsudo apt update\n[sudo] password for alice: \nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\n...\n$ mkdir /opt/myapp && cd !$\ncd /opt/myapp\n$ pwd\n/opt/myapp",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily39",
    "question": "You just added a new alias to `~/.bashrc` and want it to be available in your current terminal session without closing and reopening it. What command reads the file and applies its contents to the current shell?",
    "answer": "source ~/.bashrc",
    "explanation": "Normally, editing a shell config file doesn't affect the terminal window you're already in — those settings only take effect in new terminals. This command re-reads the file and applies every setting, alias, and function in it to the current session right now. It's the standard \"make my edits take effect immediately\" command.",
    "usage": "Apply changes from a config file to the current shell immediately without restarting the terminal.",
    "examples": [
      "source ~/.bashrc  # reload bash config after edits",
      ". ~/.bashrc  # dot syntax — identical, POSIX-portable",
      "set -a; source .env; set +a  # load .env and auto-export every var",
      "source ~/code/myapp/venv/bin/activate  # enter a Python venv",
      "source ~/.bash_aliases  # load a separate aliases file"
    ],
    "memoryTip": "`source FILE` (or `. FILE`) runs in CURRENT shell — settings stick. `bash FILE` or `./FILE` runs in SUBSHELL — settings disappear. Use source after editing `.bashrc`, for `.env` files, and for Python venv activate. Foot-gun: sourcing an untrusted file is like running it with shell access.",
    "outputExample": "$ echo 'alias hello=\"echo Hello World\"' >> ~/.bashrc\n$ hello\nbash: hello: command not found\n$ source ~/.bashrc\n$ hello\nHello World\n$ cat ~/code/myapp/.env\nDB_HOST=localhost\nDB_PORT=5432\n$ set -a; source ~/code/myapp/.env; set +a\n$ echo $DB_HOST\nlocalhost",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily40",
    "question": "You find yourself typing `git status` and `ls -lah` dozens of times per day. What command creates short aliases `gs` and `ll` for them so you can type less, and how do you make those aliases permanent?",
    "answer": "alias ll='ls -la'",
    "explanation": "An alias is a custom short name for a longer command. Once you define one, typing the short name runs the longer command automatically. The trick to making it permanent is adding the same definition to your `~/.bashrc` file — otherwise it disappears when you close the terminal. After editing the file, reload it with `source ~/.bashrc` to activate the aliases in your current session.",
    "usage": "Define a short alias for a long command, then save it to `~/.bashrc` to make it permanent.",
    "examples": [
      "alias ll='ls -lah'  # detailed listing with human sizes",
      "alias gs='git status'  # 2-letter git shortcut",
      "alias rm='rm -i'  # SAFETY: confirm before deleting",
      "alias ..='cd ..'  # 2-dot shortcut for going up",
      "alias  # list all currently defined aliases",
      "unalias rm  # remove the rm alias for this session"
    ],
    "memoryTip": "`alias name='value'` literal substitution at start of command. Add to `~/.bashrc` to persist. Reload with `source ~/.bashrc` (see daily39). Aliases can't take middle-of-command args — use a FUNCTION for that. Bypass alias with `\\name` or `command name`.",
    "outputExample": "$ alias ll='ls -lah'\n$ alias gs='git status'\n$ ll | head -3\ntotal 28K\ndrwxr-xr-x 5 alice alice 4.0K May 17 10:30 .\ndrwxr-xr-x 15 alice alice 4.0K May 14 10:00 ..\n$ alias\nalias gs='git status'\nalias ll='ls -lah'\nalias rm='rm -i'",
    "category": "DAILY TIPS"
  },
  {
    "id": "nav21",
    "question": "You're deep inside `/var/log/nginx` debugging an issue and need to jump to `/etc/nginx` to check the config, then jump back to where you were. What command saves your current directory on a stack and changes to the new one simultaneously?",
    "answer": "pushd /tmp",
    "explanation": "Know your location in the filesystem with pwd. This command shows your absolute path, essential for understanding where you are navigating.",
    "usage": "Jump to a new directory while bookmarking the current one on a stack, so `popd` can bring you back.",
    "examples": [
      "pushd /tmp  # save current, cd to /tmp",
      "pushd /etc/nginx  # save /tmp on stack, cd to /etc/nginx",
      "pushd  # no args: swap top two, toggling",
      "pushd +1  # rotate to the second stack entry",
      "dirs -v  # show the full stack with indexes",
      "popd  # pop one entry and cd back"
    ],
    "memoryTip": "`pushd` PUSHES a directory onto the stack; `popd` POPS one off. Pair-think `pushd`/`popd`/`dirs` — three commands, one mental model: a stack of bookmarks.",
    "outputExample": "$ pwd\n/home/alice/projects\n$ pushd /tmp\n/tmp ~/projects\n$ pushd /var/log\n/var/log /tmp ~/projects\n$ dirs -v\n 0  /var/log\n 1  /tmp\n 2  ~/projects",
    "category": "NAVIGATION"
  },
  {
    "id": "nav22",
    "question": "You used `pushd` three times to navigate into different directories. Now you want to undo the last jump and return to where you were before. What command removes the current directory from the stack and takes you to the previous one?",
    "answer": "popd",
    "explanation": "Return to previous directories efficiently. The popd command removes from the stack and changes directory in one action.",
    "usage": "Return to the previous `pushd` location by removing the current directory from the stack.",
    "examples": [
      "popd  # remove top, cd to new top",
      "popd  # do it again to unwind another pushd",
      "popd +1  # remove the 2nd entry, stay where you are",
      "popd -0  # remove the BOTTOM entry",
      "dirs -c  # clear the stack entirely",
      "dirs -v  # peek at the stack before popd-ing"
    ],
    "memoryTip": "`popd` POPs and lands. `pushd /tmp` then `popd` is the canonical 'jump and return' pattern. Empty stack = use plain `cd`.",
    "outputExample": "$ dirs -v\n 0  /var/log\n 1  /tmp\n 2  ~/projects\n$ popd\n/tmp ~/projects\n$ popd\n~/projects\n$ popd\nbash: popd: directory stack empty",
    "category": "NAVIGATION"
  },
  {
    "id": "nav23",
    "question": "After several `pushd` calls you've lost track of what directories are saved on the stack. What command shows the entire stack, numbered, one entry per line?",
    "answer": "dirs -v",
    "explanation": "This command simply lists every saved directory from the stack with a number next to each one. Index 0 is where you are right now. Those numbers are how you refer to specific entries when rotating or removing stack items. Think of it as displaying your navigation bookmarks.",
    "usage": "Display the full directory stack with numeric indexes so you can see all `pushd` bookmarks at a glance.",
    "examples": [
      "dirs -v  # numbered, one per line — the useful form",
      "dirs  # default: everything on one line",
      "dirs -c  # clear the entire stack",
      "dirs -l  # full paths, no ~ shortening",
      "pushd +2  # rotate to the entry shown as 2 in `dirs -v`",
      "popd +1  # remove entry 1 from the stack"
    ],
    "memoryTip": "`dirs -v` = View the stack of dirs, numbered. Index 0 is always 'here'. To use the numbers, pair with `pushd +N` (rotate) or `popd +N` (remove).",
    "outputExample": "$ pushd /tmp; pushd /var/log; dirs -v\n 0  /var/log\n 1  /tmp\n 2  ~/projects\n$ pushd +2\n~/projects /var/log /tmp",
    "category": "NAVIGATION"
  },
  {
    "id": "nav24",
    "question": "You need to inspect files in the home directory of user `deploy` on this server. What `cd` syntax takes you directly to another user's home directory without typing its full path?",
    "answer": "cd ~user",
    "explanation": "The tilde character is a shortcut that the shell replaces with a home directory path before running the command. On its own it becomes your home. When followed immediately by a username (no space), it becomes that user's home directory. The shell looks up where that user lives in the system's user database and substitutes the correct path automatically.",
    "usage": "Jump to any user's home directory using tilde expansion — no need to know or type the full path.",
    "examples": [
      "cd ~deploy  # cd to deploy user's home (needs permission)",
      "cd ~root  # cd to /root — needs root privileges",
      "echo ~alice  # print the path WITHOUT cd-ing",
      "ls ~alice/public_html  # list a file under another user's home",
      "sudo -u alice ls ~alice  # list as alice to bypass permission walls",
      "getent passwd deploy | cut -d: -f6  # alternative: look up the home directly"
    ],
    "memoryTip": "`~` alone = your home. `~user` = that user's home. The shell turns the tilde into a path BEFORE the command runs — confirm with `echo ~user`.",
    "outputExample": "$ echo ~alice\n/home/alice\n$ echo ~root\n/root\n$ sudo -u deploy bash -c 'cd ~ && pwd'\n/home/deploy",
    "category": "NAVIGATION"
  },
  {
    "id": "nav25",
    "question": "Your script uses `../../configs/app.yml` as a path. You need to know what absolute path that resolves to from the script's current working directory, with all `..` components eliminated. What command prints the canonical absolute path?",
    "answer": "realpath ../../configs/app.yml",
    "explanation": "Get the true path of symlinks with realpath. This shows absolute paths with all symbolic links resolved to their actual targets.",
    "usage": "Convert any path — relative, with `..`, with symlinks — to its single canonical absolute path.",
    "examples": [
      "realpath ../../configs/app.yml  # resolve from current directory",
      "realpath /usr/bin/python  # follow symlinks to the real binary",
      "realpath --relative-to=/etc /etc/nginx/nginx.conf  # → nginx/nginx.conf",
      "realpath -e mightnotexist.txt  # error out if path doesn't exist",
      "realpath -m /opt/app/future/dir  # OK even if path doesn't exist yet",
      "DIR=\"$(realpath \"$(dirname \"$0\")\")\"  # script's own dir, works regardless of where called from"
    ],
    "memoryTip": "`realpath` = the REAL path. Pair-think: `realpath` (canonical absolute) vs `readlink -f` (follow links). For a script's own location, `realpath \"$0\"` is bullet-proof.",
    "outputExample": "$ pwd\n/home/alice\n$ realpath ./projects/../docs/notes.md\n/home/alice/docs/notes.md\n$ realpath /usr/bin/python\n/usr/bin/python3.12\n$ realpath --relative-to=/etc /etc/nginx/nginx.conf\nnginx/nginx.conf",
    "category": "NAVIGATION"
  },
  {
    "id": "nav26",
    "question": "`/usr/bin/vim` is a symlink that points to another symlink, which eventually points to the actual binary. What command follows the entire chain of symlinks and prints the final real file path?",
    "answer": "readlink -f symlink",
    "explanation": "A symlink is a file whose entire content is \"go look over there instead.\" They can form chains — link A points to link B which points to the actual file. The basic version of this command shows only the first hop. Adding the flag makes it keep following until it reaches a real file and shows you that final destination.",
    "usage": "Follow an entire symlink chain to the final real file — goes deeper than a single `readlink` call.",
    "examples": [
      "readlink -f /usr/bin/vi  # final binary at the end of the chain",
      "readlink /usr/bin/vi  # ONE hop only (e.g. /etc/alternatives/vi)",
      "readlink -e /usr/bin/vi  # error if any part of the chain is broken",
      "ls -l /usr/bin/vi  # see the immediate link without using readlink",
      "find /opt/app -xtype l 2>/dev/null  # find broken symlinks under /opt/app",
      "readlink -f /opt/app/current  # follow a deploy 'current' symlink"
    ],
    "memoryTip": "`readlink -f` = Follow the link, fully. Without `-f`, you get just the first hop (often `/etc/alternatives/...`) which is rarely what you want. For a quick view of the immediate link target, plain `ls -l` shows `link -> target`.",
    "outputExample": "$ ls -l /usr/bin/vi\nlrwxrwxrwx 1 root root 20 May 14 /usr/bin/vi -> /etc/alternatives/vi\n$ readlink /usr/bin/vi\n/etc/alternatives/vi\n$ readlink -f /usr/bin/vi\n/usr/bin/vim.basic",
    "category": "NAVIGATION"
  },
  {
    "id": "nav27",
    "question": "You're in `~/code/myapp` and want a listing that shows only directories (not regular files), without the command descending into them. What `ls` invocation filters to subdirectory names only?",
    "answer": "ls -d */",
    "explanation": "Change your working directory with cd. This fundamental command supports both relative paths (./, ../) and absolute paths (/var/log).",
    "usage": "List only subdirectory names in the current directory, ignoring regular files.",
    "examples": [
      "ls -d */  # visible subdirectories only",
      "ls -d .*/ */  # include hidden directories too",
      "ls -ld */  # long format (perms, owner, date)",
      "ls -d */ | wc -l  # how many subdirs are there?",
      "find . -maxdepth 1 -mindepth 1 -type d  # alternative using find",
      "echo */  # the raw shell glob (same matches, space-separated)"
    ],
    "memoryTip": "`-d` = don't Descend (show the entry, not its contents). `*/` = glob that only matches directories (the trailing slash is the trick). Without `-d`, `ls */` would dump every directory's contents instead of names.",
    "outputExample": "$ ls -d */\napi/  docs/  node_modules/  src/  tests/\n$ ls -ld */\ndrwxr-xr-x 2 alice alice 4096 May 17 09:00 api/\ndrwxr-xr-x 3 alice alice 4096 May 16 18:30 docs/\ndrwxr-xr-x 9 alice alice 4096 May 15 10:02 node_modules/",
    "category": "NAVIGATION"
  },
  {
    "id": "nav28",
    "question": "You're piping a file list into `wc -l` to count entries but `ls` is outputting multiple columns. What flag forces `ls` to output exactly one filename per line regardless of terminal width?",
    "answer": "ls -1",
    "explanation": "Navigate home quickly with the tilde shorthand. The ~ represents your home directory, getting you there instantly from anywhere.",
    "usage": "Force `ls` to output one filename per line — useful for consistent output regardless of piping context.",
    "examples": [
      "ls -1  # one per line",
      "ls -1 *.log | wc -l  # count matching files",
      "ls -1 | grep '^test_'  # filter to lines starting with 'test_'",
      "ls -1a  # one per line, include dotfiles",
      "ls -1t | head  # newest 10, one per line",
      "for f in *; do echo \"$f\"; done  # safer alternative when filenames are weird"
    ],
    "memoryTip": "`-1` is the digit ONE (looks like a lowercase L — easy mistake). Mnemonic: 'one column, one entry per line'. For scripts that handle weird filenames safely, prefer shell globs (`for f in *`) over `ls`.",
    "outputExample": "$ ls -1\nREADME.md\napi\ndocs\npackage.json\nsrc\ntests\n$ ls -1 *.md | wc -l\n3",
    "category": "NAVIGATION"
  },
  {
    "id": "nav29",
    "question": "You want to see the top two levels of directory structure under `~/code/myapp` — direct subdirectories and their immediate children — but stop there so you don't descend into `node_modules` and hundreds of other deep paths. What `find` command limits recursion depth to 2 levels and shows only directories?",
    "answer": "find . -maxdepth 2 -type d",
    "explanation": "Save your location for later with pushd. This command saves your current directory to a stack then changes to a new one.",
    "usage": "List directories up to 2 levels deep — the controlled-depth alternative to an unlimited recursive find.",
    "examples": [
      "find . -maxdepth 2 -type d  # the everyday shallow dir overview",
      "find . -mindepth 1 -maxdepth 1 -type d  # JUST direct children, no '.'",
      "find . -maxdepth 3 -name node_modules -prune -o -type d -print  # skip node_modules",
      "find /etc -maxdepth 2 -type f -name '*.conf'  # shallow config search",
      "find . -maxdepth 2 -type d | wc -l  # count directories at depth ≤ 2"
    ],
    "memoryTip": "`-maxdepth N` caps recursion. `.` (the start) is depth 0; immediate children are depth 1. Put `-maxdepth` BEFORE other tests for clarity. For 'skip this subtree entirely' use `-prune` instead.",
    "outputExample": "$ find . -maxdepth 2 -type d\n.\n./src\n./src/lib\n./docs\n./tests\n./tests/fixtures",
    "category": "NAVIGATION"
  },
  {
    "id": "nav30",
    "question": "You need to run `make` inside the `/opt/app/build` directory, but you don't want to change your shell's current directory permanently — your current location matters for subsequent commands. How do you run a command in another directory without affecting your shell's `$PWD`?",
    "answer": "(cd /opt/app/build && make)",
    "explanation": "Wrapping commands in parentheses creates an isolated mini-shell that inherits your environment but runs independently. Any directory change inside the parentheses stays inside — when the command finishes, the outer shell's location is unchanged. The double-ampersand ensures the second command runs only if the `cd` succeeded.",
    "usage": "Run a command in a different directory without changing your shell's current working directory — the parentheses create an isolated subshell.",
    "examples": [
      "(cd /opt/app/build && make)  # build without polluting your shell's CWD",
      "(cd /var/log/nginx && grep -c ERROR access.log)  # one-off analysis",
      "(cd $(mktemp -d) && wget https://example.com/archive.tar.gz && tar -xzf *.tar.gz)",
      "{ cd /tmp; ls; }  # DIFFERENT: braces = NOT a subshell, cd persists",
      "(set -e; cd /tmp && rm -f *.tmp)  # subshell-local strict mode"
    ],
    "memoryTip": "Parens `(...)` = SUBSHELL sandbox; changes inside (including `cd`) don't leak out. Braces `{...}` = same shell, changes DO persist. Pair-think: parens for 'temporary side trip', braces for 'group commands'.",
    "outputExample": "$ pwd\n/home/alice\n$ (cd /opt/app/build && pwd && make)\n/opt/app/build\nBuilding...\ndone\n$ pwd\n/home/alice",
    "category": "NAVIGATION"
  },
  {
    "id": "file26",
    "question": "You wrote a deploy script at `~/scripts/deploy.sh` and want to copy it to `/usr/local/bin/` with owner-read/write/execute and group/other read-execute permissions (755) in one command, without a separate `chmod` step. What command does the copy and sets permissions atomically?",
    "answer": "install -m 755 script.sh /usr/local/bin/",
    "explanation": "The tee command bridges output and files perfectly. It reads from stdin and writes to both stdout and a file, useful for logging while watching.",
    "usage": "Copy a file to a destination and set its permissions in one atomic step — the standard Makefile install idiom.",
    "examples": [
      "sudo install -m 755 ~/scripts/deploy.sh /usr/local/bin/",
      "sudo install -d -m 750 /opt/myapp  # Create dir with specific perms",
      "sudo install -o root -g root -m 644 myapp.conf /etc/myapp/myapp.conf",
      "install -m 755 dist/myapp ~/.local/bin/  # user-local install, no sudo"
    ],
    "memoryTip": "install = cp + chmod + chown in one shot.",
    "outputExample": "$ sudo install -m 755 ~/scripts/deploy.sh /usr/local/bin/\n$ ls -l /usr/local/bin/deploy.sh\n-rwxr-xr-x 1 root root 421 May 14 deploy.sh",
    "category": "FILE OPS"
  },
  {
    "id": "file27",
    "question": "Your nginx access log at `/var/log/nginx/access.log` has grown to 2GB and the nginx process has it open. You need to empty it without stopping nginx and without breaking nginx's open file handle. What command sets the file to zero bytes in place?",
    "answer": "truncate -s 0 /var/log/nginx/access.log",
    "explanation": "Deleting and recreating a log file would break the running program's file handle — it would keep writing to the now-deleted file descriptor, and the new file would stay empty. This command empties the file without touching its inode, so the running program's file handle stays valid. It's like erasing all the writing from a whiteboard without swapping in a new whiteboard.",
    "usage": "Empty a log file in place without disrupting any processes that have it open.",
    "examples": [
      "sudo truncate -s 0 /var/log/nginx/access.log  # empty nginx log in place",
      "> /var/log/myapp/app.log  # shell equivalent — also works",
      "truncate -s 1G /var/lib/postgresql/testdb/pg_wal/000000010000000  # create sparse file",
      "truncate -s 0 *.log  # empty multiple log files at once"
    ],
    "memoryTip": "truncate -s 0 = chop the file down to 0 bytes.",
    "outputExample": "$ ls -lh /var/log/nginx/access.log\n-rw-r--r-- 1 www-data adm 2.1G May 19 /var/log/nginx/access.log\n$ sudo truncate -s 0 /var/log/nginx/access.log\n$ ls -lh /var/log/nginx/access.log\n-rw-r--r-- 1 www-data adm 0 May 19 /var/log/nginx/access.log",
    "category": "FILE OPS"
  },
  {
    "id": "file28",
    "question": "You're benchmarking disk write performance and need to create a 10MB file filled with zeros as test data. What `dd` command generates exactly 10 megabytes of zero bytes from a system source and writes them to `test.bin`?",
    "answer": "dd if=/dev/zero of=test.bin bs=1M count=10",
    "explanation": "This command reads zeros from a special device that the OS provides (which produces an endless supply of null bytes) and writes them to a file in 1-megabyte chunks, stopping after 10 chunks. The result is a 10MB file of zeros. It also reports exactly how fast the write happened, making it useful as a rough disk speed benchmark.",
    "usage": "Generate a file of exactly N megabytes of zeros — useful for disk benchmarks, swap file creation, and generating test data.",
    "examples": [
      "dd if=/dev/zero of=/tmp/test.bin bs=1M count=10  # 10MB zeros",
      "dd if=/dev/urandom of=/tmp/random.bin bs=1M count=5  # 5MB random data",
      "sudo dd if=ubuntu-24.04-desktop-amd64.iso of=/dev/sdb bs=4M status=progress",
      "dd if=/dev/zero of=/tmp/test.bin bs=1M count=500 conv=fdatasync  # raw write speed test"
    ],
    "memoryTip": "dd = 'data duplicator' (or, jokingly, 'disk destroyer' — double-check of=).",
    "outputExample": "$ dd if=/dev/zero of=/tmp/test.bin bs=1M count=10\n10+0 records in\n10+0 records out\n10485760 bytes (10 MB) copied, 0.012 s, 874 MB/s",
    "category": "FILE OPS"
  },
  {
    "id": "file29",
    "question": "You need to set up a project directory structure with `app/logs/2026` and `app/data/2026`. What single `mkdir` command using brace expansion creates both subdirectory trees at once?",
    "answer": "mkdir -p app/{logs,data}/2026",
    "explanation": "Batch operations on search results are powerful. Using find with -exec runs commands on matching files, automating tasks across many files.",
    "usage": "Create multiple parallel directory paths in one command using bash brace expansion.",
    "examples": [
      "mkdir -p app/{logs,data}/2026",
      "mkdir -p {dev,staging,prod}/{config,secrets}  # 6 directories",
      "mkdir -p ~/code/myapp/src/{api,web,worker}/{handlers,models,tests}  # 9 directories",
      "mkdir -p releases/$(date +%Y-%m-%d)/{build,logs,artifacts}"
    ],
    "memoryTip": "Brace expansion = combinations; -p = make parents.",
    "outputExample": "$ mkdir -p app/{logs,data}/2026\n$ tree app\napp\n├── data\n│   └── 2026\n└── logs\n    └── 2026",
    "category": "FILE OPS"
  },
  {
    "id": "file30",
    "question": "Before editing `/etc/nginx/nginx.conf` you want to save a quick backup copy as `nginx.conf.bak` in the same directory. What compact brace-expansion `cp` command does this in one token?",
    "answer": "cp config.yml{,.bak}",
    "explanation": "Bash brace expansion creates compact commands. The syntax {,.bak} expands to multiple paths, perfect for creating backups with minimal typing.",
    "usage": "Create a `.bak` backup copy of a file in one compact command before editing.",
    "examples": [
      "sudo cp /etc/nginx/nginx.conf{,.bak}  # backup before editing",
      "mv config.yml{,.old}  # rename with .old suffix using the same trick",
      "cp -a /etc/nginx{,.bak}  # recursive copy with all attributes preserved",
      "cp nginx.conf{,.$(date +%Y%m%d)}  # dated backup: nginx.conf.20260519"
    ],
    "memoryTip": "{,.bak} = expand to '' and '.bak' — instant backup.",
    "outputExample": "$ sudo cp /etc/nginx/nginx.conf{,.bak}\n$ ls /etc/nginx/\nnginx.conf  nginx.conf.bak  sites-available/  sites-enabled/",
    "category": "FILE OPS"
  },
  {
    "id": "file31",
    "question": "Your project directory has accumulated dozens of `.tmp` scratch files scattered across subdirectories. What `find` command recursively locates and immediately deletes all files matching `*.tmp` without piping to `xargs rm`?",
    "answer": "find . -name '*.tmp' -delete",
    "explanation": "Find open files across your system with lsof. This shows which processes have files open, essential for troubleshooting locked files.",
    "usage": "Recursively find and delete all files matching a name pattern in one command — no pipe to `rm` needed.",
    "examples": [
      "find . -name '*.tmp' -delete",
      "find /var/cache/myapp -mtime +30 -delete  # delete files older than 30 days",
      "find . -type d -empty -delete  # remove empty directories",
      "find . -name '*.tmp'  # PREVIEW first — run without -delete to check",
      "find ~/Downloads -name '*.part' -delete  # clean up incomplete downloads"
    ],
    "memoryTip": "find ... -delete = filter then remove, no rm pipe needed.",
    "outputExample": "$ find . -name '*.tmp'  # preview first\n./build/tmp_stage1.tmp\n./build/tmp_stage2.tmp\n./cache/render.tmp\n$ find . -name '*.tmp' -delete\n$ find . -name '*.tmp'\n(no output)",
    "category": "FILE OPS"
  },
  {
    "id": "file32",
    "question": "A file shows 0 bytes in `ls -l` but `du` says it's using 8KB of disk space. You need to see the inode-level metadata including exact byte size, allocated blocks, all three timestamps, and the inode number. What command shows all of that?",
    "answer": "stat server",
    "explanation": "Detailed file metadata reveals inode info. The stat command shows exact permissions, ownership, and timestamps down to nanoseconds.",
    "usage": "Show the complete inode-level metadata for a file — everything `ls -l` shows plus blocks, inode number, and all three timestamps.",
    "examples": [
      "stat /etc/nginx/nginx.conf  # full metadata",
      "stat -c '%n %s %y' /var/log/*.log  # custom format: name, size, mtime",
      "stat -c '%a' /etc/shadow  # octal permissions only",
      "stat -c '%i' /bin/sh  # inode number only",
      "find . -inum $(stat -c '%i' /bin/sh) 2>/dev/null  # find all hard links to a file"
    ],
    "memoryTip": "stat = file statistics from the inode.",
    "outputExample": "$ stat /etc/nginx/nginx.conf\n  File: /etc/nginx/nginx.conf\n  Size: 1490\t\tBlocks: 8\t IO Block: 4096   regular file\nDevice: fd00h/64768d\tInode: 524291\t  Links: 1\nAccess: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)\nAccess: 2026-05-19 09:32:01.000000000 +0000\nModify: 2026-05-17 14:22:10.000000000 +0000\nChange: 2026-05-17 14:22:10.000000000 +0000\n Birth: -",
    "category": "FILE OPS"
  },
  {
    "id": "file33",
    "question": "Your deploy script needs to atomically switch `/opt/app/current` to point to the new release at `/opt/app/releases/v2.1.0`. The symlink already exists pointing to the old release. What `ln` command replaces the existing symlink without a 'file exists' error?",
    "answer": "ln -sf newtarget linkname",
    "explanation": "Compression during archiving reduces size dramatically. Adding -z for gzip reduces backups significantly, crucial for storage and transfers.",
    "usage": "Create or replace a symlink atomically — the standard pattern for deploy cutover.",
    "examples": [
      "ln -sf /opt/app/releases/v2.1.0 /opt/app/current  # deploy cutover",
      "ln -sfn /opt/app/releases/v2.1.0 /opt/app/current  # -n: safer if current points to a dir",
      "ln -sf ../shared/log ~/code/myapp/log  # relative symlink to shared directory",
      "ln -sf /usr/bin/python3 /usr/local/bin/python  # alias python → python3"
    ],
    "memoryTip": "-s symbolic, -f force-replace.",
    "outputExample": "$ readlink /opt/app/current\n/opt/app/releases/v2.0.0\n$ ln -sf /opt/app/releases/v2.1.0 /opt/app/current\n$ readlink /opt/app/current\n/opt/app/releases/v2.1.0",
    "category": "FILE OPS"
  },
  {
    "id": "file34",
    "question": "A script receives the full path `/var/log/nginx/access.log.1` as input and needs to extract just the filename `access.log.1` (without the directory prefix) to use as an output file name. What command strips the directory portion?",
    "answer": "basename /var/log/syslog.1",
    "explanation": "Efficient syncing finds only changed files. Rsync transfers only differences, making backups and migrations much faster than copying everything.",
    "usage": "Extract just the filename from a full path — the inverse of `dirname`.",
    "examples": [
      "basename /var/log/nginx/access.log.1  # → access.log.1",
      "basename /var/log/nginx/access.log.1 .1  # → access.log (strip suffix)",
      "basename /etc/nginx/nginx.conf .conf  # → nginx",
      "outfile=\"$(basename \"$infile\" .csv).json\"  # convert csv filename to json filename",
      "echo \"Usage: $(basename \"$0\") [options] FILE\"  # script usage message"
    ],
    "memoryTip": "basename = the 'base' name with no directory.",
    "outputExample": "$ basename /var/log/nginx/access.log.1\naccess.log.1\n$ basename /var/log/nginx/access.log.1 .1\naccess.log\n$ basename /etc/nginx/nginx.conf .conf\nnginx",
    "category": "FILE OPS"
  },
  {
    "id": "file35",
    "question": "Your script processes a file whose path is stored in `$INFILE`. Before writing output you need to create the directory that will hold the output file. You need just the directory portion of the input path. What command extracts that directory?",
    "answer": "dirname /var/log/syslog.1",
    "explanation": "Find and delete safely in one command. Use find -print first to preview results before adding -delete to avoid accidents.",
    "usage": "Extract the directory portion of a path — the inverse of `basename`.",
    "examples": [
      "dirname /var/log/nginx/access.log  # → /var/log/nginx",
      "mkdir -p \"$(dirname \"$OUTFILE\")\"  # ensure output directory exists",
      "cd \"$(dirname \"$0\")\"  # cd to the script's own directory at startup",
      "logdir=\"$(dirname \"$CONFIGFILE\")/logs\"  # derive log dir from config dir"
    ],
    "memoryTip": "dirname = the 'dir' portion of the name.",
    "outputExample": "$ dirname /var/log/nginx/access.log\n/var/log/nginx\n$ dirname /var/log/syslog.1\n/var/log\n$ dirname config.yml\n.",
    "category": "FILE OPS"
  },
  {
    "id": "view21",
    "question": "You have a CSV export from your database at `/tmp/users.csv` with columns `id,name,email,role` and the values are hard to read because the column widths vary wildly. What command reformats it into neatly aligned columns on the terminal?",
    "answer": "column -t -s, file.csv",
    "explanation": "This command reads your comma-separated file and automatically widens each column to fit the longest value in that column, producing a neatly aligned table. It's for display only — the original file is untouched. Pipe it into `less` for files longer than your screen.",
    "usage": "Align a CSV or delimited file into readable fixed-width columns for terminal display.",
    "examples": [
      "column -t -s, /tmp/users.csv  # comma-separated",
      "mount | column -t  # tabular mount info",
      "column -t -s $'\\t' /tmp/data.tsv  # tab-separated",
      "cat /etc/passwd | column -t -s:  # colon-separated"
    ],
    "memoryTip": "column -t = tabular; -s = separator.",
    "outputExample": "$ column -t -s, /tmp/users.csv\nid  name   email                  role\n1   alice  alice@example.com      admin\n2   bob    bob@example.com        user",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view22",
    "question": "You received a compiled binary at `/opt/app/bin/server` and suspect it contains embedded credentials. What command displays its raw bytes as a hex dump with the ASCII interpretation alongside, so you can read any embedded text?",
    "answer": "xxd /opt/app/bin/server",
    "explanation": "This tool displays a file's raw bytes in two columns side-by-side: the left shows the bytes as hexadecimal numbers, and the right shows the same bytes as printable ASCII characters (with dots for bytes that don't print). Each row covers 16 bytes. You can see file format headers (the \"magic bytes\" that identify a PNG, PDF, ELF binary, etc.) and any embedded text strings.",
    "usage": "View a file's raw bytes as a hex+ASCII dump — essential for inspecting binary files and file headers.",
    "examples": [
      "xxd /opt/app/bin/server | head -20  # first 320 bytes",
      "xxd -s 0x10 -l 32 /opt/app/bin/server  # 32 bytes starting at offset 16",
      "xxd -r /tmp/dump.hex > /tmp/recovered.bin  # reverse a hex dump back to binary",
      "xxd image.png | head -1  # check PNG magic bytes"
    ],
    "memoryTip": "xxd = hex dump (think 'eXamine heX Dump').",
    "outputExample": "$ xxd /opt/app/bin/server | head -2\n00000000: 7f45 4c46 0201 0100 0000 0000 0000 0000  .ELF............\n00000010: 0200 3e00 0100 0000 4010 4000 0000 0000  ..>.....@.@.....",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view23",
    "question": "A bash script copied from a Windows machine fails with mysterious errors. You suspect it has Windows-style CRLF line endings (carriage return + newline). What `cat` flag makes invisible characters like `^M` (carriage return) and trailing spaces visible?",
    "answer": "cat -E script.sh",
    "explanation": "This flag adds a visible dollar sign at the end of every line just before the newline character. In a clean Unix file you see `text$`. In a file with Windows line endings you see `text^M$` — the carriage return is exposed as `^M`. In a file with trailing spaces you see `text   $`. This immediately reveals the hidden characters that are breaking your script.",
    "usage": "Reveal invisible line endings and trailing whitespace that break scripts and config files.",
    "examples": [
      "cat -E deploy.sh  # show $ at line ends — ^M$ means Windows line endings",
      "cat -A deploy.sh  # show tabs (^I), line ends ($), and all non-print chars",
      "cat -T deploy.sh  # show only tabs as ^I",
      "dos2unix deploy.sh  # FIX Windows line endings (install dos2unix first)",
      "sed -i 's/\\r//' deploy.sh  # fix CRLF without installing dos2unix"
    ],
    "memoryTip": "-E = End-of-line $ marker.",
    "outputExample": "$ cat -E deploy.sh\n#!/bin/bash^M$\nset -e^M$\ncd /opt/app^M$\n$ dos2unix deploy.sh\ndos2unix: converting file deploy.sh to Unix format...",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view24",
    "question": "You're debugging a 10,000-line log file and want to read it page by page in your terminal, with line numbers shown on the left so you can refer to specific lines. What command opens the file in a scrollable pager with persistent line numbers?",
    "answer": "less -N debug.log",
    "explanation": "This opens the file in a viewer where you can scroll forward and backward through it a screen at a time, without loading the whole file into memory first. The `-N` flag adds line numbers on the left edge. Navigation keys: spacebar to page down, `b` to page back, `j`/`k` (or arrow keys) for line-by-line, `g` to go to start, `G` to go to end, `/pattern` to search, `n`/`N` for next/previous match, `q` to quit.",
    "usage": "Open a file in a scrollable pager with line numbers — the standard way to read large files in the terminal.",
    "examples": [
      "less -N /var/log/myapp/app.log  # paged with line numbers",
      "less +F /var/log/nginx/access.log  # start in follow mode like tail -f",
      "less +/ERROR /var/log/myapp/app.log  # jump to first 'ERROR' match",
      "less -S /var/log/nginx/access.log  # disable line wrapping for wide lines"
    ],
    "memoryTip": "-N = numbered lines in less.",
    "outputExample": "$ less -N /var/log/myapp/app.log\n      1 2026-05-17 09:32:01 [INFO] starting...\n      2 2026-05-17 09:32:02 [INFO] connected to db\n      3 2026-05-17 09:35:17 [WARN] cache miss\n      4 2026-05-17 09:41:08 [ERROR] timeout after 30s",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view25",
    "question": "A CSV report file has a summary/totals section in the last 3 lines that you want to exclude from processing. What `head` flag prints all lines except the last N lines?",
    "answer": "head -n -3 report.csv",
    "explanation": "The head command shows the first lines of a file. Using head -n -3 skips the last 3 lines, removing summary footers.",
    "usage": "Print all lines except the last N — strip trailers and footers before piping to processing tools.",
    "examples": [
      "head -n -3 /tmp/report.csv  # skip last 3 summary lines",
      "head -n -1 /tmp/data.csv  # drop the last row only",
      "head -c -100 /tmp/file  # all but the last 100 bytes",
      "tail -n +2 /tmp/report.csv | head -n -3  # skip header AND footer"
    ],
    "memoryTip": "head -n -N = head excluding the last N lines.",
    "outputExample": "$ cat /tmp/report.csv\nid,name,sales\n1,alice,120\n2,bob,95\nTOTAL,,215\n$ head -n -1 /tmp/report.csv\nid,name,sales\n1,alice,120\n2,bob,95",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view26",
    "question": "A CSV file at `/tmp/users.csv` has a header on line 1 that you want to skip before piping the data rows to `awk` for processing. What `tail` flag starts printing from line 2 instead of from the end?",
    "answer": "tail -n +5 /tmp/users.csv",
    "explanation": "The tail command shows the last lines of a file. Using tail -n +5 starts from line 5, removing header rows.",
    "usage": "Skip the first N-1 lines and print everything from line N to the end — the standard header-skipping idiom.",
    "examples": [
      "tail -n +2 /tmp/users.csv  # skip CSV header, pipe data rows to awk",
      "tail -n +10 /var/log/myapp/app.log  # print from line 10 onward",
      "tail -n +5 /tmp/report.csv | head -n 3  # extract lines 5-7",
      "tail -n +2 /tmp/users.csv | awk -F, '{print $2}'"
    ],
    "memoryTip": "tail -n +N = tail starting at line N (the + means 'from').",
    "outputExample": "$ cat /tmp/users.csv\nid,name,role\n1,alice,admin\n2,bob,user\n$ tail -n +2 /tmp/users.csv\n1,alice,admin\n2,bob,user",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view27",
    "question": "A configuration file at `/etc/myapp/settings.conf` has 500 lines. You need to quickly inspect only lines 50 through 65 without opening the file in an editor. What `sed` one-liner extracts just that range and exits?",
    "answer": "sed -n '10,20p' /var/log/syslog",
    "explanation": "The sed command does stream editing with patterns and actions. It is powerful for text substitution and manipulation of files.",
    "usage": "Print a specific line range from a file without loading the whole file — faster than an editor for spot-checking.",
    "examples": [
      "sed -n '50,65p' /etc/myapp/settings.conf",
      "sed -n '/START_BLOCK/,/END_BLOCK/p' /etc/myapp/settings.conf  # between patterns",
      "sed -n '50p' /etc/myapp/settings.conf  # just line 50",
      "sed -n '50,$p' /etc/myapp/settings.conf  # from line 50 to end of file"
    ],
    "memoryTip": "-n + Np = quiet, then print only line N (or range).",
    "outputExample": "$ sed -n '50,52p' /etc/myapp/settings.conf\ndb_host=localhost\ndb_port=5432\ndb_name=myapp_prod",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view28",
    "question": "You're debugging a generated file and need to inspect only line 42. What `awk` one-liner uses the built-in record counter to print exactly that line and nothing else?",
    "answer": "awk 'NR==5' access.log",
    "explanation": "The awk command processes text by patterns and actions. It is excellent for structured text analysis and field extraction.",
    "usage": "Print a specific line number or range using awk's built-in line counter NR.",
    "examples": [
      "awk 'NR==42' /tmp/generated.conf  # print only line 42",
      "awk 'NR>=10 && NR<=20' /tmp/generated.conf  # range of lines",
      "awk 'NR%10==0' /var/log/myapp/app.log  # every 10th line (sampling)",
      "awk 'NR==42 {print $2, $3}' /tmp/generated.conf  # specific fields from line 42"
    ],
    "memoryTip": "NR = number of records (lines) so far.",
    "outputExample": "$ awk 'NR==42' /tmp/generated.conf\ntimeout=30\n$ awk 'NR>=40 && NR<=42' /tmp/generated.conf\ndb_pool_size=10\nmax_connections=100\ntimeout=30",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view29",
    "question": "You have two sorted lists of server hostnames — `expected.txt` and `actual.txt` — and want to see which hostnames are only in the expected list, which are only in actual, and which are in both. What command produces this three-column comparison of two sorted files?",
    "answer": "comm file1 file2",
    "explanation": "This command compares two pre-sorted files and splits the result into three categories displayed in three columns: lines that only appear in the first file, lines that only appear in the second file, and lines that appear in both. You can suppress any column with flags. It's a fast set-comparison tool for sorted text lists.",
    "usage": "Three-column comparison of two sorted files — fast set operations without a full diff.",
    "examples": [
      "comm expected.txt actual.txt  # all three columns",
      "comm -12 expected.txt actual.txt  # lines in BOTH (intersection)",
      "comm -23 expected.txt actual.txt  # lines only in expected (missing from actual)",
      "comm -13 expected.txt actual.txt  # lines only in actual (unexpected)",
      "sort hosts1.txt > /tmp/s1.txt; sort hosts2.txt > /tmp/s2.txt; comm /tmp/s1.txt /tmp/s2.txt"
    ],
    "memoryTip": "comm = common; suppress columns with -1/-2/-3.",
    "outputExample": "$ comm expected.txt actual.txt\nweb1.internal\n\tweb2.internal\n\t\tdb1.internal\n# Column 1: only in expected, Column 2: only in actual, Column 3: in both",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view30",
    "question": "After a build, you want to confirm that `dist/app.bin` is byte-for-byte identical to the previously verified `dist/app.bin.golden` reference file. What command checks binary equality and exits 0 if they match, non-zero if they differ?",
    "answer": "cmp file1 file2",
    "explanation": "This tool does a byte-for-byte comparison of two files and tells you immediately whether they're identical. If they match, it exits silently with a success code. If they differ, it prints the exact byte position and line number of the first difference. It's faster than `diff` for a simple yes/no identity check because it stops at the first difference.",
    "usage": "Verify two files are byte-for-byte identical — faster than diff for binary equality checks.",
    "examples": [
      "cmp dist/app.bin dist/app.bin.golden  # check equality",
      "cmp -s dist/app.bin dist/app.bin.golden && echo identical || echo differ  # silent",
      "cmp -l file1.bin file2.bin | head  # list differing bytes",
      "cmp -s expected_output.txt actual_output.txt || { echo 'TEST FAILED'; exit 1; }"
    ],
    "memoryTip": "cmp = compare bytes; silent = identical.",
    "outputExample": "$ cmp dist/app.bin dist/app.bin.golden\n$ echo $?\n0\n$ cmp dist/app.bin dist/app.bin.tampered\ndist/app.bin dist/app.bin.tampered differ: byte 1024, line 8",
    "category": "VIEWING TEXT"
  },
  {
    "id": "perm21",
    "question": "You've written a compiled C tool that needs to run as its owner (`root`) regardless of which user invokes it — similar to how `ping` or `passwd` work. What `chmod` command adds the setuid bit to the binary?",
    "answer": "chmod u+s /usr/local/bin/tool",
    "explanation": "The setuid bit is a special permission flag that makes an executable run as the user who OWNS the file, not as the user who runs it. When a file with setuid set is owned by root, anyone who executes it temporarily gains root's privileges for the duration of that program. This is how `passwd` lets ordinary users change their own passwords — it briefly becomes root to write to `/etc/shadow`, then gives up that privilege.",
    "usage": "Add the setuid bit so a compiled binary runs as its owner regardless of who invokes it.",
    "examples": [
      "sudo chmod u+s /usr/local/bin/mytool  # add setuid",
      "sudo chmod 4755 /usr/local/bin/mytool  # same in octal",
      "ls -l /usr/local/bin/mytool  # verify: should show -rwsr-xr-x",
      "find / -perm -4000 -type f 2>/dev/null  # audit all setuid binaries on system"
    ],
    "memoryTip": "u+s = setUid; the 4 in 4755 is the SUID octal bit.",
    "outputExample": "$ sudo chmod u+s /usr/local/bin/mytool\n$ ls -l /usr/local/bin/mytool\n-rwsr-xr-x 1 root root 12420 May 17 /usr/local/bin/mytool",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm22",
    "question": "Your team shares a project directory at `/srv/projects/myapp`. When team members create files there, the files belong to their personal group instead of the shared `developers` group. What `chmod` sets the setgid bit so new files automatically inherit the directory's group?",
    "answer": "chmod g+s /srv/projects/myapp",
    "explanation": "Normally a new file gets the primary group of whoever creates it. The setgid bit on a directory overrides this: any file or subdirectory created inside will automatically inherit the directory's group, not the creator's personal group. This ensures everyone on the team owns files under the same shared group without anyone needing to remember to `chgrp` after creating files.",
    "usage": "Set the setgid bit on a shared directory so all new files automatically inherit the directory's group.",
    "examples": [
      "sudo chmod g+s /srv/projects/myapp  # add setgid to shared dir",
      "sudo chmod 2775 /srv/projects/myapp  # same in octal",
      "ls -ld /srv/projects/myapp  # verify: should show drwxrwsr-x",
      "find /srv -perm -2000 -type d  # audit all setgid directories"
    ],
    "memoryTip": "g+s on a dir = group-inherit-sticky; 2 is the SGID bit.",
    "outputExample": "$ sudo chmod g+s /srv/projects/myapp\n$ ls -ld /srv/projects/myapp\ndrwxrwsr-x 2 alice developers 4096 May 17 /srv/projects/myapp\n$ touch /srv/projects/myapp/newfile.txt\n$ ls -l /srv/projects/myapp/newfile.txt\n-rw-r--r-- 1 alice developers 0 May 17 newfile.txt  # inherits 'developers' group",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm23",
    "question": "You added your user to the `docker` group but you're not sure if the change is reflected in your current session. What command shows your current user ID, primary group ID, and all supplementary groups?",
    "answer": "id (or id -a)",
    "explanation": "This command displays your identity as the Linux kernel sees it right now: your numeric user ID, your primary group, and every supplementary group your account belongs to. If you just added yourself to a group and it doesn't show up here, you need to log out and back in (or start a new login shell) for the kernel to pick up the change.",
    "usage": "Show your current user ID, primary group, and all group memberships — the 'who am I and what can I access' command.",
    "examples": [
      "id  # current user",
      "id alice  # specific user's identity",
      "id -nG  # just group names, no numbers",
      "id -u  # just the numeric UID",
      "id -nG | grep -qw docker && echo 'in docker group' || echo 'NOT in docker group'"
    ],
    "memoryTip": "id = identity (uid + gids).",
    "outputExample": "$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),130(docker),1001(developers)\n$ id -nG\nalice sudo docker developers",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm24",
    "question": "You need to create files in `/srv/projects/myapp` that belong to the `developers` group, but your primary group is your personal group. Without logging out, what command switches your active primary group for the current shell session?",
    "answer": "newgrp groupname",
    "explanation": "This command starts a new sub-shell where your effective primary group has changed to the named group. Any files you create in that shell session will be owned by the new group instead of your personal one. When you're done, type `exit` to return to your previous shell with your original primary group restored.",
    "usage": "Switch your active primary group for the current shell session so new files are owned by that group.",
    "examples": [
      "newgrp developers  # switch to developers group for this shell",
      "newgrp docker  # use docker group without re-login",
      "id -gn  # confirm the switch worked",
      "exit  # return to previous shell with original primary group",
      "sg developers -c 'touch /srv/projects/myapp/newfile'  # single command, no sub-shell"
    ],
    "memoryTip": "newgrp = new (primary) group for this shell.",
    "outputExample": "$ id -gn\nalice\n$ newgrp developers\n$ id -gn\ndevelopers\n$ touch /srv/projects/myapp/test.txt\n$ ls -l /srv/projects/myapp/test.txt\n-rw-r--r-- 1 alice developers 0 May 17 test.txt\n$ exit\n$ id -gn\nalice",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm25",
    "question": "Your company's security policy requires you to change your server login password every 90 days. The last time you changed it was over 90 days ago. What command starts the interactive password change process for your own account?",
    "answer": "passwd",
    "explanation": "Running this command without any arguments changes YOUR own password. It first asks for your current password to verify your identity, then asks for the new password twice (to catch typos). Nothing appears on screen as you type — that's intentional, for security. The password is stored as a cryptographic hash, never as plain text.",
    "usage": "Change your own login password interactively — or change another user's password with sudo.",
    "examples": [
      "passwd  # change your own password",
      "sudo passwd alice  # as root, reset alice's password",
      "sudo passwd -l alice  # lock alice's account (disable password login)",
      "sudo passwd -u alice  # unlock alice's account"
    ],
    "memoryTip": "passwd = the password utility.",
    "outputExample": "$ passwd\nChanging password for alice.\nCurrent password: \nNew password: \nRetype new password: \npasswd: password updated successfully",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm26",
    "question": "You need to grant a new user `bob` full sudo access on a server. What is the safe command to open the sudoers file for editing, with built-in syntax validation that prevents saving a broken config?",
    "answer": "sudo visudo",
    "explanation": "The sudoers file controls who can run commands with elevated privileges. A single syntax error in it can permanently lock you out of root access — you'd need physical console access or a recovery boot to fix it. This command opens the file in a safe editor that checks the syntax before saving and refuses to write a broken file.",
    "usage": "Safely edit the sudoers file with built-in syntax validation — never edit it with a plain text editor.",
    "examples": [
      "sudo visudo  # edit /etc/sudoers safely",
      "sudo visudo -f /etc/sudoers.d/bob  # create a drop-in file for bob",
      "sudo visudo -c  # syntax-check the current sudoers file without editing",
      "echo 'bob ALL=(ALL:ALL) ALL' | sudo tee /etc/sudoers.d/bob  # non-interactive alternative"
    ],
    "memoryTip": "visudo = vi for sudoers, with safety checks.",
    "outputExample": "$ sudo visudo\n# editor opens — add: bob ALL=(ALL:ALL) ALL\n# on save, visudo validates syntax before writing",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm27",
    "question": "You're setting up SSH key authentication to a new server and need to generate a key pair. What `ssh-keygen` command creates a modern ed25519 key pair with a comment identifying which machine it's from?",
    "answer": "ssh-keygen -t ed25519",
    "explanation": "This command generates two mathematically linked files: a private key (which you keep on your machine and never share) and a public key (which you put on every server you want to access). Once the public key is in the server's authorized keys file, SSH uses the key pair to authenticate you without asking for a password. The comment helps you remember which device a key came from.",
    "usage": "Generate a modern ed25519 SSH key pair for passwordless authentication.",
    "examples": [
      "ssh-keygen -t ed25519 -C 'alice@laptop-2026'  # with identifying comment",
      "ssh-keygen -t ed25519 -f ~/.ssh/deploy_key  # custom filename for deploy key",
      "ssh-keygen -p -f ~/.ssh/id_ed25519  # change passphrase on existing key",
      "ssh-copy-id -i ~/.ssh/id_ed25519.pub alice@web1.internal  # install public key on server",
      "cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys  # manual install on same machine"
    ],
    "memoryTip": "ssh-keygen -t ed25519 = generate modern SSH key.",
    "outputExample": "$ ssh-keygen -t ed25519 -C 'alice@laptop-2026'\nGenerating public/private ed25519 key pair.\nEnter file in which to save the key (~/.ssh/id_ed25519): \nEnter passphrase (empty for no passphrase): \nYour identification has been saved in /root/.ssh/id_ed25519\nYour public key has been saved in /root/.ssh/id_ed25519.pub\n$ cat ~/.ssh/id_ed25519.pub\nssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA... alice@laptop-2026",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm28",
    "question": "Your organization requires password rotation every 90 days. You want to check when user `alice` last changed her password and whether it's due to expire soon. What command lists her password aging policy?",
    "answer": "sudo chage -l alice",
    "explanation": "This command shows the complete password life cycle record for a user account: when the password was last changed, when it expires, how many days' warning she gets before expiry, and when the account itself expires. It's the first thing to check when a user reports they can't log in — an expired password or account is often the cause.",
    "usage": "View a user's password aging policy and expiry dates — the first diagnostic step when password-related login issues arise.",
    "examples": [
      "sudo chage -l alice  # list alice's password aging info",
      "sudo chage -M 90 -W 14 alice  # set 90-day max + 14-day warning",
      "sudo chage -d 0 alice  # force password change on next login",
      "sudo chage -E 2026-12-31 alice  # set account expiry date"
    ],
    "memoryTip": "chage = change age (password lifetime).",
    "outputExample": "$ sudo chage -l alice\nLast password change                                    : Mar 01, 2026\nPassword expires                                        : May 30, 2026\nPassword inactive                                       : never\nAccount expires                                         : never\nMinimum number of days between password change          : 0\nMaximum number of days between password change          : 90\nNumber of days of warning before password expires       : 14",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm29",
    "question": "Before running a script that creates log files and config files, you want to confirm what default permissions new files will get in your current shell. What command shows your current umask in human-readable `rwx` form?",
    "answer": "umask -S",
    "explanation": "Every time you create a file or directory, the permissions it gets are the maximum allowed permissions minus the \"umask\" filter. The default umask of 022 means group and other can't write to files you create. This command shows that filter in the easier-to-read letters format (like `u=rwx,g=rx,o=rx`) instead of the octal number (0022).",
    "usage": "Show what permission bits will be applied to newly created files and directories.",
    "examples": [
      "umask -S  # symbolic: u=rwx,g=rx,o=rx",
      "umask  # octal form: 0022",
      "umask 0027  # tighten: new files get 0640, dirs get 0750",
      "umask 0077  # very restrictive: new files owner-only (0600)"
    ],
    "memoryTip": "-S = Symbolic umask display.",
    "outputExample": "$ umask -S\nu=rwx,g=rx,o=rx\n$ umask\n0022\n$ umask 0027; umask -S\nu=rwx,g=rx,o=",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm30",
    "question": "Your web application is failing because it can't write to `/var/lib/myapp/data`. You want to test whether the `www-data` user can actually write to that directory without switching to that user's full shell. What `sudo` flag runs a single command as a specific non-root user?",
    "answer": "sudo -u www-data chmod u+w /var/www/app",
    "explanation": "File permission bits represent read (4), write (2), and execute (1). Combine these numbers to set permissions concisely in chmod commands.",
    "usage": "Run a single command as a specific user — test service account permissions or run service-specific commands.",
    "examples": [
      "sudo -u www-data ls -la /var/lib/myapp/data  # can www-data list this dir?",
      "sudo -u www-data touch /var/lib/myapp/data/test  # can www-data write here?",
      "sudo -u postgres psql -c 'SELECT version();'  # run psql as postgres",
      "sudo -u www-data php artisan queue:work  # run Laravel queue as www-data",
      "sudo -u alice -i  # full interactive login shell as alice"
    ],
    "memoryTip": "sudo -u USER = substitute user.",
    "outputExample": "$ sudo -u www-data touch /var/lib/myapp/data/test\ntouch: cannot touch '/var/lib/myapp/data/test': Permission denied\n$ sudo chown www-data:www-data /var/lib/myapp/data\n$ sudo -u www-data touch /var/lib/myapp/data/test\n$ ls -l /var/lib/myapp/data/\n-rw-r--r-- 1 www-data www-data 0 May 17 test",
    "category": "PERMISSIONS"
  },
  {
    "id": "pipe21",
    "question": "You're running `make` and the build is failing, but errors are going to stderr while the rest of the output goes to stdout. You want to pipe ALL output (both streams) into `grep` to search for the word 'error'. How do you merge stderr into stdout before the pipe?",
    "answer": "command 2>&1 | grep error",
    "explanation": "Programs send two separate output streams to your terminal: normal output (stdout) and error messages (stderr). A pipe only connects stdout by default — errors bypass it and appear separately on screen. The `2>&1` redirection, placed before the pipe, merges the error stream into the normal output stream so everything flows through the pipe together.",
    "usage": "Merge stderr into stdout so a pipe or grep sees both streams together.",
    "examples": [
      "make 2>&1 | grep -i error  # search compiler output for errors",
      "make 2>&1 | tee /tmp/build.log  # save everything to file AND show on screen",
      "{ cmd1; cmd2; } 2>&1 | grep FAIL  # pipe combined output of multiple commands",
      "cmd |& grep pattern  # bash shorthand for cmd 2>&1 | grep"
    ],
    "memoryTip": "2>&1 = redirect fd 2 (stderr) into fd 1 (stdout).",
    "outputExample": "$ make 2>&1 | grep -i error\nsrc/main.c:42:10: error: expected ';' before '}' token\nmake: *** [Makefile:12: main.o] Error 1",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe22",
    "question": "Your bash script pipes several commands together: `generate_list | filter | upload`. If `generate_list` fails, you want the script to stop immediately rather than silently passing empty output downstream. What setting makes a pipeline fail if ANY stage fails, not just the last?",
    "answer": "set -o pipefail",
    "explanation": "Normally a pipeline's success or failure is determined only by the LAST command in the chain. So if the first command fails silently, the pipeline reports success as long as the final command exits 0. This setting changes that: if ANY command in the pipeline fails, the whole pipeline is considered failed. It's critical for robust scripts where silent intermediate failures would be catastrophic.",
    "usage": "Make the whole pipeline fail if any stage exits non-zero — essential for robust scripts.",
    "examples": [
      "set -o pipefail  # standalone",
      "set -euo pipefail  # the standard strict-mode header for production scripts",
      "false | true; echo $?  # without pipefail: 0; with pipefail: 1",
      "echo ${PIPESTATUS[@]}  # inspect each stage's exit code after a pipeline"
    ],
    "memoryTip": "pipefail = the pipe's exit code reflects any stage that failed.",
    "outputExample": "$ set -o pipefail; false | true; echo $?\n1\n$ set -o pipefail; true | true; echo $?\n0",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe23",
    "question": "You have a file `servers.txt` with one hostname per line. You want to run `ssh HOST uptime` for each hostname, substituting the hostname into the middle of the command. What `xargs` invocation uses a placeholder to insert each line into an arbitrary position in the command?",
    "answer": "xargs -I {} cmd {} < list.txt",
    "explanation": "Redirection operators change where input and output go. The > redirects stdout, < provides stdin, and 2> redirects stderr separately.",
    "usage": "Run a command for each input line with the line substituted into a specific position via a placeholder.",
    "examples": [
      "xargs -I {} ssh {} uptime < servers.txt  # run uptime on each server",
      "cat urls.txt | xargs -I {} curl -fsSO {}  # download each URL",
      "find . -name '*.bak' | xargs -I {} mv {} /tmp/  # move files to /tmp",
      "cat jobs.txt | xargs -P 4 -I {} ./process.sh {}  # 4 parallel workers"
    ],
    "memoryTip": "-I {} = the placeholder gets each input substituted in.",
    "outputExample": "$ cat servers.txt\nweb1.internal\nweb2.internal\n$ xargs -I {} ssh {} uptime < servers.txt\n web1.internal:  12:30:01 up 45 days, load: 0.12\n web2.internal:  12:30:02 up 12 days, load: 0.08",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe24",
    "question": "You have 200 log files to gzip and the process is CPU-bound. You want to compress up to 8 files simultaneously to use all CPU cores. What `xargs` flags enable parallel execution with exactly 8 concurrent workers and one file per invocation?",
    "answer": "xargs -P 4 -n 1 cmd < list.txt",
    "explanation": "Using tee in pipelines saves output to a file while displaying it. Perfect for logging command results while monitoring them live.",
    "usage": "Process a list of inputs in parallel with N simultaneous workers — dramatically speeds up batch tasks.",
    "examples": [
      "find . -name '*.log' | xargs -P 8 -n 1 gzip  # compress 8 files at a time",
      "cat urls.txt | xargs -P 8 -n 1 wget  # download 8 URLs simultaneously",
      "ls *.wav | xargs -P $(nproc) -I {} ffmpeg -i {} -codec:a libmp3lame {}.mp3",
      "seq 1 100 | xargs -P 16 -n 1 -I {} curl -s https://api.example.com/item/{}"
    ],
    "memoryTip": "-P = parallel workers; -n = inputs per call.",
    "outputExample": "$ time find . -name '*.log' | xargs -P 8 -n 1 gzip\nreal    0m4.2s  # vs ~33s serial with 8 files",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe25",
    "question": "You want two separate processes — a data generator and a data consumer — to communicate through a named file in the filesystem instead of a shell pipe, so they can run independently and asynchronously. What command creates a named pipe at `/tmp/data_stream`?",
    "answer": "mkfifo /tmp/myfifo",
    "explanation": "The xargs command converts stdin into command arguments. Essential for processing lists of files from find or other commands.",
    "usage": "Create a named pipe in the filesystem so independent processes can communicate without a temporary file.",
    "examples": [
      "mkfifo /tmp/data_stream  # create the named pipe",
      "tail -F /var/log/nginx/access.log > /tmp/data_stream &  # writer in background",
      "grep --line-buffered ERROR < /tmp/data_stream  # reader (blocks until writer connects)",
      "rm /tmp/data_stream  # clean up when done"
    ],
    "memoryTip": "mkfifo = make a named (filesystem-visible) FIFO pipe.",
    "outputExample": "$ mkfifo /tmp/data_stream\n$ ls -l /tmp/data_stream\nprw-r--r-- 1 alice alice 0 May 17 /tmp/data_stream",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe26",
    "question": "You're writing a cron script and want ALL output (stdout and stderr) from every command in the script to go to `/var/log/myjob.log` automatically, without appending a redirect to every single line. What `exec` redirection at the top of the script achieves this?",
    "answer": "exec > script.log 2>&1",
    "explanation": "Command substitution with $(command) captures command output and uses it as input for another command or variable value.",
    "usage": "Redirect all subsequent output in a script to a log file with one line at the top.",
    "examples": [
      "exec > /var/log/myjob.log 2>&1  # overwrite on each run",
      "exec >> /var/log/myjob.log 2>&1  # append on each run",
      "exec > >(tee -a /var/log/myjob.log) 2>&1  # log AND show on screen"
    ],
    "memoryTip": "exec > file = from now on, stdout goes here.",
    "outputExample": "$ cat /usr/local/bin/backup.sh\n#!/bin/bash\nexec >> /var/log/backup.log 2>&1\necho \"[$(date)] backup starting\"\nrsync -av /data/ /backup/\necho \"[$(date)] done\"\n$ ./backup.sh\n$ cat /var/log/backup.log\n[2026-05-17 02:00:01] backup starting\n...",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe27",
    "question": "Your script initializes a log file at the start of each run. You want to create the file if it doesn't exist, or empty it if it does, using only bash built-in syntax without any external command. What shell construct does this?",
    "answer": ": > /var/log/app.log",
    "explanation": "Using : > filename creates or clears a file by redirecting empty output to it. More efficient than touch for clearing large files.",
    "usage": "Create or empty a file using only bash built-ins — no external commands required.",
    "examples": [
      ": > /var/log/myjob.log  # clear the log before each run",
      "> /var/log/myjob.log  # bash shorthand (same effect, less portable)",
      ": >> /var/log/myjob.log  # ensure file exists without emptying it (= touch)",
      "truncate -s 0 /var/log/myjob.log  # more explicit external alternative"
    ],
    "memoryTip": "Colon = silent true; > = open empty for writing.",
    "outputExample": "$ echo 'old content' > /tmp/test.log\n$ : > /tmp/test.log\n$ wc -c /tmp/test.log\n0 /tmp/test.log",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe28",
    "question": "You're running `find / -name 'config.yml'` and the output is buried under hundreds of 'Permission denied' error lines. You want to see only the real results on screen and discard all the errors silently. How do you redirect only stderr to nowhere?",
    "answer": "command 2>/dev/null",
    "explanation": "Programs produce two separate output streams. Normal results go one way; error messages go another. This redirect sends the error stream into the void — a special system device that accepts and discards everything written to it. Your normal results still appear on screen as if the errors never existed. Use it when you're certain the errors are expected noise.",
    "usage": "Discard all error output from a command while keeping normal output — suppress expected noise.",
    "examples": [
      "find / -name 'config.yml' 2>/dev/null  # suppress 'Permission denied'",
      "grep -r 'pattern' /proc 2>/dev/null  # ignore /proc read errors",
      "command -v jq 2>/dev/null && echo 'jq found'  # silent tool check",
      "rsync -av /data/ /backup/ 2>/dev/null  # hide minor rsync warnings"
    ],
    "memoryTip": "2>/dev/null = drop stderr into the void.",
    "outputExample": "$ find / -name 'config.yml' 2>/dev/null\n/etc/myapp/config.yml\n/home/alice/code/myapp/config.yml\n# No 'Permission denied' noise above",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe29",
    "question": "You're running a long deploy script and want to see its output live on screen while also saving a complete transcript to `/var/log/deploy.log` for postmortem review. What command does both simultaneously?",
    "answer": "command | tee -a app.log",
    "explanation": "The /dev/null device discards all data written to it. Use 2>/dev/null to suppress error messages from commands completely.",
    "usage": "Write output to the terminal AND to a file simultaneously — watch live and keep a log.",
    "examples": [
      "./deploy.sh 2>&1 | tee -a /var/log/deploy.log  # capture everything, show live",
      "make 2>&1 | tee /tmp/build.log | grep -i error  # save all, show only errors",
      "cmd | sudo tee /var/log/privileged.log  # write to root-owned log via sudo",
      "curl -fsSL https://install.example.com | tee /tmp/installer.sh | bash"
    ],
    "memoryTip": "tee = T-junction in the pipe; -a = append.",
    "outputExample": "$ ./deploy.sh 2>&1 | tee -a /var/log/deploy.log\n[09:32:01] pulling latest code...\n[09:32:05] running migrations...\n[09:32:08] restarting service...\n[09:32:09] deploy complete\n$ wc -l /var/log/deploy.log\n12",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe30",
    "question": "Your bash script needs to capture the output of `hostname -f` into a variable called `FQDN` so you can use it later in log messages and config file paths. What syntax captures a command's stdout into a variable?",
    "answer": "FQDN=$(hostname -f)",
    "explanation": "Variable assignment with $(command) captures command output into a variable for later use in the same command or script.",
    "usage": "Capture a command's standard output into a bash variable for use in subsequent commands.",
    "examples": [
      "FQDN=$(hostname -f)  # capture fully qualified hostname",
      "TODAY=$(date +%Y-%m-%d)  # capture today's date",
      "LATEST=$(ls -t /opt/releases/ | head -1)  # find most recent release",
      "mapfile -t ERRORS < <(grep ERROR /var/log/myapp/app.log)  # multiline into array"
    ],
    "memoryTip": "$(...) = capture command stdout into a value.",
    "outputExample": "$ FQDN=$(hostname -f)\n$ echo \"This server is: $FQDN\"\nThis server is: web1.example.com\n$ LOGFILE=\"/var/log/myapp/${FQDN}-$(date +%Y%m%d).log\"\n$ echo $LOGFILE\n/var/log/myapp/web1.example.com-20260517.log",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "proc21",
    "question": "You're SSH'd into a server and kick off a database import that takes 6 hours. You're worried your SSH connection might drop and kill the process. What command starts the import so it continues running even if the terminal closes?",
    "answer": "nohup command &",
    "explanation": "When a terminal closes (or an SSH connection drops), Linux sends a \"hangup\" signal to every process attached to that terminal, which kills them by default. This wrapper program makes the launched command ignore that signal, so it survives. The ampersand at the end returns your prompt immediately. Any output that wasn't redirected goes to a file called `nohup.out` in the current directory.",
    "usage": "Start a command that keeps running after the terminal closes or the SSH session disconnects.",
    "examples": [
      "nohup ./import.sh > /var/log/import.log 2>&1 &  # redirect output explicitly",
      "nohup python3 train.py > training.log 2>&1 &  # ML training job",
      "nohup make all > build.log 2>&1 & disown  # belt+suspenders: nohup AND disown",
      "tail -f nohup.out  # follow the default log if you didn't redirect",
      "ssh web1 'nohup ./deploy.sh > /tmp/deploy.log 2>&1 & echo $!'"
    ],
    "memoryTip": "`nohup` = NO HangUP. Always pair with `&` to background. Always redirect output (`> log 2>&1`) unless you're happy with `nohup.out`. For serious detached use prefer `tmux`/`screen` or a `systemd` user service. After-the-fact alternative: background normally then `disown`.",
    "outputExample": "$ nohup ./import.sh > /var/log/import.log 2>&1 &\n[1] 12345\n$ exit  # close SSH session\n# ...reconnect later...\n$ ps -p 12345\n    PID TTY          TIME CMD\n  12345 ?        00:14:21 import.sh\n$ tail /var/log/import.log\nRow 4123422 imported",
    "category": "PROCESSES"
  },
  {
    "id": "proc22",
    "question": "You started a background job with `&` and now realize you need to log out. The job is still running as `[1] 5678`. How do you detach it from your shell so it won't be killed when you exit?",
    "answer": "disown %1",
    "explanation": "The nice command runs a process with lower priority, allowing other tasks more CPU time when resources are contended.",
    "usage": "Remove a background job from the shell's job table so it won't be killed when you log out — the 'forgot nohup' rescue.",
    "examples": [
      "disown %1  # detach job 1 from shell",
      "long_task > /tmp/task.log 2>&1 & disown  # one-liner: background AND disown",
      "Ctrl+Z; bg; disown %1  # rescue a foreground job you want to survive logout",
      "disown -a  # disown every background job at once before exiting",
      "jobs  # check job numbers before disowning"
    ],
    "memoryTip": "Compare with `nohup` (proc21): `nohup cmd &` works at LAUNCH (and handles output); `disown` works AFTER. Mnemonic: 'disown the kid so they can leave the house when the shell closes.' For interactive sessions, prefer `tmux` — much more flexible.",
    "outputExample": "$ sleep 1000 &\n[1] 4567\n$ jobs\n[1]+  Running                 sleep 1000 &\n$ disown %1\n$ jobs\n$ # (empty — the shell no longer tracks it, but it's still running)\n$ ps -p 4567\n    PID TTY          TIME CMD\n   4567 ?        00:00:00 sleep",
    "category": "PROCESSES"
  },
  {
    "id": "proc23",
    "question": "You regularly work on a remote server via SSH and need a persistent named session you can detach from and reattach to later — even from a different machine. What command creates a new `tmux` session named `dev`?",
    "answer": "tmux new -s work",
    "explanation": "This creates a persistent terminal session managed by a background server. You do your work inside it, and when you're done (or your SSH drops), you detach with Ctrl+b then D. The session keeps running. Next time you connect, you reattach to find everything exactly as you left it — running commands, open files, shell history. It's like parking a car and picking up where you left off.",
    "usage": "Create a persistent named terminal session that survives SSH disconnects and can be reattached from anywhere.",
    "examples": [
      "tmux new -s dev  # create named session and attach",
      "Ctrl+b d  # detach (session keeps running in background)",
      "tmux ls  # list running sessions",
      "tmux attach -t dev  # reattach to 'dev' session",
      "tmux kill-session -t dev  # destroy the session",
      "tmux new-session -d -s build './build.sh'  # create detached session running a command"
    ],
    "memoryTip": "Naming sessions with `-s` is essential; nameless sessions get numbers and become impossible to identify. Detach = `Ctrl+b d`, list = `tmux ls`, attach = `tmux a` (short for attach). Learn one feature per week — start with split panes (`Ctrl+b %` and `Ctrl+b \"`).",
    "outputExample": "$ tmux new -s dev\n# (cleared screen, status bar at bottom: [dev] 0:bash*)\n# work happens here, then Ctrl+b d\n[detached (from session dev)]\n$ tmux ls\ndev: 1 windows (created Sun May 17 14:32:18 2026)\n$ tmux attach -t dev\n# (you're back, exactly where you left off)",
    "category": "PROCESSES"
  },
  {
    "id": "proc24",
    "question": "A crashed process left a message saying it was 'killed by signal 11'. You need to know what signal 11 is. What command prints the full signal name and number table so you can look it up?",
    "answer": "kill -l",
    "explanation": "This command lists every signal the Linux kernel knows about, with a number next to each name. Signal 11 is SIGSEGV (segmentation fault — the process tried to access memory it shouldn't have). You can also look up a specific signal by number or name to convert between them.",
    "usage": "List all signals with their numbers and names — the reference for translating between signal numbers and names.",
    "examples": [
      "kill -l  # full signal table",
      "kill -l 11  # translate 11 to SEGV",
      "kill -l TERM  # translate TERM to 15",
      "trap -l  # same table from bash's trap builtin",
      "man 7 signal  # detailed semantics of each signal"
    ],
    "memoryTip": "`kill -l` reads as 'kill list' — same letter that lists files in `ls`, jobs in `jobs`, etc. Pair it with `kill -SIGNAL PID` — `kill -l` tells you WHICH signals exist, `kill -SIG PID` sends them.",
    "outputExample": "$ kill -l\n 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL\n 5) SIGTRAP      6) SIGABRT      7) SIGBUS       8) SIGFPE\n 9) SIGKILL     10) SIGUSR1     11) SIGSEGV     12) SIGUSR2\n13) SIGPIPE     14) SIGALRM     15) SIGTERM     17) SIGCHLD\n18) SIGCONT     19) SIGSTOP     20) SIGTSTP\n$ kill -l 11\nSEGV",
    "category": "PROCESSES"
  },
  {
    "id": "proc25",
    "question": "A backup script is running at normal priority and making your interactive shell laggy. You want to lower its priority without stopping it. What `renice` command lowers the priority of an already-running process by raising its nice value to 15?",
    "answer": "sudo renice -n 5 -p 1234",
    "explanation": "Every process has a priority number called \"niceness\" that affects how much CPU time the scheduler gives it. Higher niceness means \"be nicer to everyone else\" — the process gets less CPU. Lower niceness means more CPU. This command changes the niceness of a process that's already running, without stopping or restarting it.",
    "usage": "Lower a running process's CPU priority without stopping it — the 'soft throttle' for resource contention.",
    "examples": [
      "sudo renice -n 15 -p $(pgrep backup)  # de-prioritize backup process",
      "sudo renice -n 19 -u alice  # de-prioritize ALL of alice's processes",
      "renice -n 10 -p $$  # be nicer from THIS shell (affects child processes)",
      "sudo renice -n -5 -p 4567  # boost priority (root only)",
      "ps -eo pid,ni,cmd --sort=ni | head  # confirm changes — check NI column"
    ],
    "memoryTip": "Mnemonic: RE-NICE = change niceness LATER. Range/rules identical to `nice`. Decision tree: launching new? `nice`. Already running? `renice`. Don't own it or going below 0? `sudo renice`. Verify with the `NI` column in ps, top, or htop.",
    "outputExample": "$ ps -p 1234 -o pid,ni,cmd\n    PID  NI CMD\n   1234   0 ./backup.sh\n$ sudo renice -n 15 -p 1234\n1234 (process ID) old priority 0, new priority 15\n$ ps -p 1234 -o pid,ni,cmd\n    PID  NI CMD\n   1234  15 ./backup.sh",
    "category": "PROCESSES"
  },
  {
    "id": "proc26",
    "question": "You're comparing two implementations of a function and want to know which one finishes faster, including how much CPU time each uses. What built-in shell command measures wall-clock time, user CPU time, and system CPU time for any command?",
    "answer": "time ./function1.sh",
    "explanation": "The time command measures how long a process takes to execute, showing real, user, and system time spent.",
    "usage": "Measure wall-clock and CPU time for any command — the built-in benchmark tool.",
    "examples": [
      "time ./build.sh  # real/user/sys summary",
      "time { sleep 1; sleep 1; }  # time a compound block",
      "/usr/bin/time -v ./script.sh  # GNU time with peak memory and context switches",
      "/usr/bin/time -f 'elapsed=%E peak-rss=%M kb' ./process.py",
      "time (generate_data | filter | upload)  # time a pipeline"
    ],
    "memoryTip": "Three numbers: REAL (your watch), USER (your code's CPU), SYS (kernel's CPU). USER+SYS > REAL = parallelism. USER+SYS < REAL = waiting (I/O, sleep, network). For peak memory and detailed stats use `/usr/bin/time -v` (full path — bypasses the builtin).",
    "outputExample": "$ time ./build.sh\nreal    0m12.483s\nuser    0m45.221s\nsys     0m2.108s\n# user+sys (47s) > real (12s) → parallel build using ~4 cores",
    "category": "PROCESSES"
  },
  {
    "id": "proc27",
    "question": "Starting your development server fails with 'address already in use' for port 8080. What command shows which process is holding that port, including the process name and PID?",
    "answer": "sudo lsof -i :8080",
    "explanation": "This command asks the OS for a list of every open \"socket\" (network endpoint) on a specific port. It shows you the program name, process ID, and username for each entry. Once you have the PID, you can kill it to free the port, or investigate why it's still running.",
    "usage": "Find which process holds a specific port — the first step when a 'port in use' error blocks your server from starting.",
    "examples": [
      "sudo lsof -i :8080  # who has port 8080?",
      "sudo lsof -i tcp:443 -sTCP:LISTEN  # TCP listeners only",
      "sudo ss -tnlp 'sport = :8080'  # modern faster alternative",
      "sudo fuser 8080/tcp  # alternative — just print the PID",
      "sudo lsof -nP -iTCP -sTCP:LISTEN  # all TCP listeners, no name resolution"
    ],
    "memoryTip": "`lsof -i :PORT` = list open NET sockets on that port. Need sudo to see other users'. Modern alternative: `ss -tnlp 'sport = :PORT'`. To free a stuck port: find PID then `kill PID`.",
    "outputExample": "$ sudo lsof -i :8080\nCOMMAND  PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\nnode    8421  app    22u  IPv4  12abc      0t0  TCP *:8080 (LISTEN)\n$ kill 8421\n$ sudo lsof -i :8080\n# (no output — port is now free)",
    "category": "PROCESSES"
  },
  {
    "id": "proc28",
    "question": "Your application process is mysteriously hanging. You want to see in real time which system calls it's making — file opens, reads, network calls — to understand where it's stuck. What command attaches to the running process and streams its system calls?",
    "answer": "sudo strace -p 1234",
    "explanation": "Every action a program takes that involves the outside world — opening a file, reading a network socket, allocating memory — requires asking the OS kernel for help via a \"system call.\" This tool taps into that conversation and shows you every request the program makes and what the kernel responds. If a program is hung, this almost always reveals exactly what it's waiting for.",
    "usage": "Stream system calls from a running process to diagnose hangs, missing files, and permission errors.",
    "examples": [
      "sudo strace -p 1234  # attach to running process",
      "strace ./myapp  # trace from launch",
      "strace -f -e trace=openat ./myapp  # file opens only, including in child processes",
      "strace -c -p 1234  # syscall summary (Ctrl-C to print)",
      "strace -tt -T -o /tmp/trace.log -p 1234  # timestamped trace saved to file"
    ],
    "memoryTip": "`strace -p PID` attach, `strace cmd` launch. `-f` follow children, `-e trace=GROUP` filter, `-c` summary, `-o file` save. Look for `= -1 ENOENT` lines for 'file not found'. Slow: turn it OFF in production.",
    "outputExample": "$ sudo strace -p 4567 2>&1 | head\nstrace: Process 4567 attached\nepoll_wait(7, [], 1024, 100)            = 0\nrecvfrom(8, \"\", 4096, 0, NULL, NULL)    = 0\nread(9, 0x..., 4096)                    = -1 ENOENT (No such file or directory)",
    "category": "PROCESSES"
  },
  {
    "id": "proc29",
    "question": "You need a scriptable snapshot of processes sorted by CPU usage — something you can pipe to `grep`, log to a file, or embed in an alert script, unlike the interactive `top`. What `ps` command with custom columns outputs a sorted CPU ranking?",
    "answer": "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head",
    "explanation": "The bg command resumes a stopped job in the background, letting you continue using the shell without interruption.",
    "usage": "Produce a scriptable ranked list of processes by CPU usage — the `top`-alternative that can be piped and logged.",
    "examples": [
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head  # top 9 CPU consumers",
      "ps -eo pid,user,%mem,rss,cmd --sort=-%mem | head  # top memory consumers",
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu --no-headers | awk '$3>5'  # processes using >5% CPU",
      "watch -n 2 'ps -eo pid,%cpu,cmd --sort=-%cpu | head'  # refresh every 2s"
    ],
    "memoryTip": "`ps -e -o COL,COL,... --sort=-KEY | head` = custom-ranked snapshot. `-` before key = DESCENDING. Useful keys: `%cpu`, `%mem`, `rss`, `etime`. `--no-headers` for clean scripting.",
    "outputExample": "$ ps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head\n    PID USER     %CPU %MEM CMD\n   2412 alice    14.0  3.1 /usr/lib/firefox/firefox\n   1822 alice     8.3  0.7 node server.js\n   3201 alice     5.2  0.4 code .\n    684 root      2.1  0.5 /usr/sbin/sssd",
    "category": "PROCESSES"
  },
  {
    "id": "proc30",
    "question": "You just updated nginx's configuration to add a new virtual host. You want nginx to reload its config and start serving the new virtual host, without dropping any of the thousands of active connections it's currently handling. What command sends the 'reload config' signal to the nginx master process?",
    "answer": "sudo kill -HUP $(pidof nginx)",
    "explanation": "Many server daemons (nginx, sshd, rsyslog, and others) are programmed to respond to signal 1 (SIGHUP) by re-reading their configuration files while keeping existing connections alive. It's like telling a busy restaurant manager \"read the new menu\" without kicking out the customers who are already eating. Always test the config syntax first — a broken config means the reload silently does nothing and you're left wondering why it didn't work.",
    "usage": "Trigger a zero-downtime config reload in nginx (or other daemons) by sending SIGHUP to the master process.",
    "examples": [
      "sudo nginx -t && sudo kill -HUP $(pidof nginx)  # test config FIRST, then reload",
      "sudo systemctl reload nginx  # preferred when systemd manages the service",
      "sudo kill -HUP $(cat /var/run/nginx.pid)  # via the PID file",
      "sudo systemctl reload-or-restart nginx  # reload if supported, restart otherwise",
      "sudo journalctl -fu nginx  # watch the journal to confirm reload happened"
    ],
    "memoryTip": "SIGHUP (1) = 'hang up the phone' → repurposed as 'reload config'. Use `sudo systemctl reload SERVICE` when possible (logged, systemd-aware). ALWAYS validate config (`nginx -t`) BEFORE reloading.",
    "outputExample": "$ sudo nginx -t\nnginx: configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n$ sudo kill -HUP $(pidof nginx)\n$ sudo tail -3 /var/log/nginx/error.log\n2026/05/17 14:32:18 [notice] 8421#8421: signal 1 (SIGHUP) received\n2026/05/17 14:32:18 [notice] 8421#8421: reconfiguring\n2026/05/17 14:32:18 [notice] 8421#8421: reload completed",
    "category": "PROCESSES"
  },
  {
    "id": "net21",
    "question": "You want to download the file at https://releases.example.com/app-v2.1.tar.gz and have it saved under whatever filename the server uses. Which command does this without you specifying a local filename?",
    "answer": "curl -O https://releases.example.com/app-v2.1.tar.gz",
    "explanation": "This command downloads a file from the web and saves it using the same filename that appears at the end of the URL. You don't have to type out a destination name — it figures that out from the URL itself.",
    "usage": "Download a remote file and save it locally using the filename from the URL.",
    "examples": [
      "curl -O https://releases.example.com/app-v2.1.tar.gz  # saves as app-v2.1.tar.gz",
      "curl -OL https://short.link/app  # follow redirects, then save with final URL's filename"
    ],
    "memoryTip": "`-O` = 'Output to the original name'",
    "outputExample": "$ curl -O https://releases.example.com/app-v2.1.tar.gz\n  % Total    % Received  ...\n  100  5120  100  5120  ...\n$ ls app-v2.1.tar.gz\napp-v2.1.tar.gz",
    "category": "NETWORKING"
  },
  {
    "id": "net22",
    "question": "A REST API at https://api.example.com/orders expects a POST request with a JSON body containing an order ID. How do you send that request from the command line and see the response?",
    "answer": "curl -X POST -H 'Content-Type: application/json' -d '{\"order_id\":\"ORD-9981\"}' https://api.example.com/orders",
    "explanation": "This command sends data to a web server using the POST method, the way a browser form or mobile app would. It also tells the server the data is in JSON format so the server parses it correctly.",
    "usage": "POST JSON data to a REST API endpoint and print the response to the terminal.",
    "examples": [
      "curl -X POST -H 'Content-Type: application/json' -d '{\"order_id\":\"ORD-9981\"}' https://api.example.com/orders",
      "curl -s -X POST -H 'Content-Type: application/json' -d @payload.json https://api.example.com/orders | jq ."
    ],
    "memoryTip": "`-X` = method, `-H` = header, `-d` = data",
    "outputExample": "$ curl -s -X POST -H 'Content-Type: application/json' -d '{\"order_id\":\"ORD-9981\"}' https://api.example.com/orders\n{\"status\":\"created\",\"id\":\"ORD-9981\"}",
    "category": "NETWORKING"
  },
  {
    "id": "net23",
    "question": "You are on your laptop and need to reach an internal web server at 10.10.5.20:80 that is only accessible from the jump host gateway.example.com. How do you make that internal server available at localhost:8080 on your laptop?",
    "answer": "ssh -L 8080:10.10.5.20:80 user@gateway.example.com",
    "explanation": "This command creates a secure tunnel so that anything you open at port 8080 on your own machine gets forwarded through the SSH server to the internal machine on its network. It's like running a secret pipe from your laptop to a machine you can't normally reach.",
    "usage": "Forward a local port through an SSH jump host to reach an otherwise-unreachable internal service.",
    "examples": [
      "ssh -L 8080:10.10.5.20:80 user@gateway.example.com  # browse localhost:8080 to reach internal server",
      "ssh -L 5432:db.internal:5432 -N -f user@gateway.example.com  # background Postgres tunnel"
    ],
    "memoryTip": "`-L` = Local port forwarding; traffic flows Local → SSH server → destination",
    "outputExample": "$ ssh -L 8080:10.10.5.20:80 -N user@gateway.example.com &\n[1] 84021\n# Now open http://localhost:8080 in your browser",
    "category": "NETWORKING"
  },
  {
    "id": "net24",
    "question": "You are on a remote server behind a strict firewall and want to let a colleague on the internet reach your local development server running on port 3000. How do you expose your local port 3000 as port 9000 on the remote SSH server?",
    "answer": "ssh -R 9000:localhost:3000 user@remote.example.com",
    "explanation": "This command punches a hole outward through a firewall. Your local machine connects to a remote server and tells it: whenever someone connects to your port 9000, send that traffic back to my machine on port 3000.",
    "usage": "Expose a port on your local machine through a remote SSH server so outside parties can reach it.",
    "examples": [
      "ssh -R 9000:localhost:3000 user@remote.example.com  # remote:9000 → local:3000",
      "ssh -R 9000:localhost:3000 -N -f user@remote.example.com  # backgrounded tunnel"
    ],
    "memoryTip": "`-R` = Remote port forwarding; traffic flows Remote server → back to you",
    "outputExample": "$ ssh -R 9000:localhost:3000 -N user@remote.example.com &\n# Colleague visits http://remote.example.com:9000 to see your local dev server",
    "category": "NETWORKING"
  },
  {
    "id": "net25",
    "question": "You just generated an SSH key pair on your laptop and want to log into deploy.example.com without a password from now on. What single command copies your public key to that server?",
    "answer": "ssh-copy-id user@deploy.example.com",
    "explanation": "This command copies the public half of your SSH key to the remote server and adds it to the list of keys allowed to log in. After running it once — using your password — you can SSH in without a password from then on.",
    "usage": "Install your SSH public key on a remote server to enable password-free login.",
    "examples": [
      "ssh-copy-id user@deploy.example.com  # copies default public key",
      "ssh-copy-id -i ~/.ssh/deploy_ed25519.pub user@deploy.example.com  # copies specific key"
    ],
    "memoryTip": "`ssh-copy-id` = copy my ID (public key) to the remote machine",
    "outputExample": "$ ssh-copy-id user@deploy.example.com\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed.\nuser@deploy.example.com's password:\nNumber of key(s) added: 1\nNow try logging in: ssh 'user@deploy.example.com'",
    "category": "NETWORKING"
  },
  {
    "id": "net26",
    "question": "Requests to db.example.com are taking an unusually long time and you suspect packet loss somewhere along the route. Which tool gives you a continuously-updating traceroute with per-hop loss statistics?",
    "answer": "mtr db.example.com",
    "explanation": "This tool combines a ping and a traceroute into one live display that refreshes every second. You can watch each router along the path and immediately see which one is dropping packets or adding latency.",
    "usage": "Run a live traceroute with per-hop packet-loss statistics to diagnose network path issues.",
    "examples": [
      "mtr db.example.com  # interactive live display",
      "mtr --report --report-cycles 20 db.example.com  # 20-cycle summary report"
    ],
    "memoryTip": "`mtr` = My Traceroute — a traceroute that never stops",
    "outputExample": "$ mtr db.example.com\n                             My traceroute\nHOST: laptop            Loss%   Snt  Last   Avg  Best  Wrst StDev\n 1. 192.168.1.1          0.0%    10   1.2   1.3   1.1   1.8   0.2\n 2. 10.0.0.1             0.0%    10   8.4   8.1   7.9   8.9   0.3\n 3. db.example.com       2.0%    10  22.1  21.8  20.9  24.1   1.0",
    "category": "NETWORKING"
  },
  {
    "id": "net27",
    "question": "You need just the IP address that example.com resolves to — no extra lines, no TTL, no record type prefix. What command produces that clean output?",
    "answer": "dig +short example.com",
    "explanation": "This command asks the DNS system for the IP address of a hostname and prints only the IP, with nothing else — no headers, no explanations. It's perfect when you need to grab the result in a script.",
    "usage": "Resolve a hostname to its IP address(es) with clean, script-friendly output.",
    "examples": [
      "dig +short example.com  # A record IPs only",
      "dig +short example.com MX  # mail exchanger records only",
      "dig +short @8.8.8.8 example.com  # query Google's DNS specifically"
    ],
    "memoryTip": "`+short` strips everything except the answer — short answer only",
    "outputExample": "$ dig +short example.com\n93.184.216.34",
    "category": "NETWORKING"
  },
  {
    "id": "net28",
    "question": "You want to see how many bytes each network interface on the server has transmitted and received since the last boot, including error counts. Which command shows per-interface RX/TX statistics?",
    "answer": "ip -s link",
    "explanation": "This command lists every network interface on the machine along with counters showing how much data has flowed through each one and how many errors occurred. It's a fast way to confirm traffic is actually moving on a given interface.",
    "usage": "Display cumulative byte, packet, and error counters for all network interfaces.",
    "examples": [
      "ip -s link  # stats for all interfaces",
      "ip -s link show eth0  # stats for eth0 only",
      "watch -n1 ip -s link  # live refresh every second"
    ],
    "memoryTip": "`-s` = statistics; `link` = layer-2 link info",
    "outputExample": "$ ip -s link show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    RX: bytes  packets  errors  dropped\n    104857600  75000    0       12\n    TX: bytes  packets  errors  dropped\n    52428800   40000    0       0",
    "category": "NETWORKING"
  },
  {
    "id": "net29",
    "question": "You received a phishing email appearing to come from support@acme-bank.example.com and want to find out who registered that domain, when, and through which registrar. What command retrieves that registration information?",
    "answer": "whois acme-bank.example.com",
    "explanation": "This command contacts a public database that stores information about every registered domain name: who owns it, which company sold it to them, and when it expires. It's one of the first tools security analysts use when investigating a suspicious domain.",
    "usage": "Query public WHOIS records to identify a domain's registrar, owner, and registration dates.",
    "examples": [
      "whois acme-bank.example.com  # domain registration details",
      "whois 93.184.216.34  # netblock ownership for an IP"
    ],
    "memoryTip": "`whois` = 'Who IS the owner of this domain?'",
    "outputExample": "$ whois acme-bank.example.com\nDomain Name: ACME-BANK.EXAMPLE.COM\nRegistrar: Shady Domains LLC\nCreation Date: 2026-04-01\nExpiry Date: 2027-04-01\nName Server: ns1.shadydomains.com",
    "category": "NETWORKING"
  },
  {
    "id": "net30",
    "question": "You are troubleshooting why a server at 192.168.1.50 is unreachable on the local network and want to check whether the machine's ARP table has an entry for that IP. Which command displays the neighbor/ARP table?",
    "answer": "ip neigh",
    "explanation": "This command shows the machine's ARP table — the list of IP-to-MAC address mappings the machine has discovered on the local network. If a machine's IP doesn't appear, or shows as \"FAILED,\" you know there's a layer-2 connectivity problem.",
    "usage": "Display the ARP/neighbor table to see IP-to-MAC address mappings on the local network.",
    "examples": [
      "ip neigh  # full neighbor table",
      "ip neigh show dev eth0  # entries on eth0 only",
      "ip neigh show 192.168.1.50  # lookup one specific IP"
    ],
    "memoryTip": "`ip neigh` = IP neighbor table = who's next to me on the network",
    "outputExample": "$ ip neigh\n192.168.1.1  dev eth0 lladdr aa:bb:cc:dd:ee:ff REACHABLE\n192.168.1.50 dev eth0                           FAILED",
    "category": "NETWORKING"
  },
  {
    "id": "pkg18",
    "question": "You are about to migrate a Ubuntu 24.04 server to a new VM and need a manifest of every installed package. Which command lists all installed packages?",
    "answer": "apt list --installed",
    "explanation": "This command prints a list of every software package currently installed on the machine. You can use it to see everything that has been put on the system, or pipe it to other tools to filter or count packages.",
    "usage": "List every installed package on a Debian/Ubuntu system, optionally filtering to only manually-installed ones.",
    "examples": [
      "apt list --installed 2>/dev/null  # all installed packages",
      "apt list --installed 2>/dev/null | wc -l  # total count",
      "apt list --installed 2>/dev/null | grep ^python  # filter by name",
      "apt list --installed --manual-installed 2>/dev/null  # only your explicit installs",
      "dpkg-query -W -f='${binary:Package}\\n' | sort > /tmp/manifest.txt  # script-friendly manifest"
    ],
    "memoryTip": "`apt list --installed` for humans; `dpkg-query -W` for scripts. `--manual-installed` separates 'I wanted this' from 'pulled in as dep'.",
    "outputExample": "$ apt list --installed 2>/dev/null | head\nListing...\nadduser/now 3.137ubuntu1 all [installed,automatic]\napt/now 2.7.14build2 amd64 [installed]\nbash/now 5.2.21-2ubuntu4 amd64 [installed]\n...\n$ apt list --installed 2>/dev/null | wc -l\n812",
    "category": "PACKAGES"
  },
  {
    "id": "pkg19",
    "question": "Before patching a production Ubuntu server you want to preview exactly which packages would be upgraded without actually upgrading anything. What command shows the list?",
    "answer": "apt list --upgradable",
    "explanation": "After refreshing the package catalog, this command shows you exactly which packages have newer versions available — like a preview of what would change if you ran the upgrade. Use it to check for any surprises before touching a production system.",
    "usage": "Preview all packages that would be upgraded without actually making any changes to the system.",
    "examples": [
      "sudo apt update && apt list --upgradable  # standard preview",
      "apt list --upgradable 2>/dev/null | tail -n +2 | wc -l  # count of pending upgrades",
      "apt list --upgradable 2>/dev/null | grep security  # security upgrades only (Ubuntu)",
      "apt list --upgradable 2>/dev/null | awk -F/ '/upgradable/ {print $1}'  # just names",
      "apt-get -s upgrade  # alternative: full simulated upgrade transaction"
    ],
    "memoryTip": "Workflow: `apt update` (refresh) → `apt list --upgradable` (preview) → `apt upgrade` (apply).",
    "outputExample": "$ apt list --upgradable 2>/dev/null\nListing...\nbash/noble-updates 5.2.21-2ubuntu4.1 amd64 [upgradable from: 5.2.21-2ubuntu4]\ncurl/noble-updates,noble-security 8.5.0-2ubuntu10.4 amd64 [upgradable from: 8.5.0-2ubuntu10.3]\nlinux-generic/noble-updates 6.8.0-40.40 amd64 [upgradable from: 6.8.0-38.38]\n6 upgradable packages",
    "category": "PACKAGES"
  },
  {
    "id": "pkg20",
    "question": "You installed nginx and want to find where its binary, config files, and documentation were placed on disk. Which command lists every file the package put on the system?",
    "answer": "dpkg -L nginx",
    "explanation": "This command prints every file path that a package owns on the system — binaries, configuration files, documentation, and more. It's how you track down where a package installed things without having to search the whole filesystem.",
    "usage": "List every file an installed package placed on disk, useful for locating configs, binaries, and docs.",
    "examples": [
      "dpkg -L nginx  # every path nginx ships",
      "dpkg -L curl | grep bin  # just the binaries",
      "dpkg -L nginx | grep ^/etc  # just config files",
      "dpkg -L nginx | xargs ls -ld 2>/dev/null  # detailed listing of each file",
      "apt-file list nginx  # alternative that works on UNINSTALLED packages too"
    ],
    "memoryTip": "`dpkg -L PKG` (List files), `dpkg -S PATH` (Search owner). For uninstalled packages: `apt-file list`.",
    "outputExample": "$ dpkg -L curl | head\n/.\n/usr\n/usr/bin\n/usr/bin/curl\n/usr/share\n/usr/share/doc\n/usr/share/doc/curl\n$ dpkg -L curl | wc -l\n14",
    "category": "PACKAGES"
  },
  {
    "id": "pkg21",
    "question": "You found an unexpected binary at /usr/bin/nc and want to know which package installed it. What command tells you the owning package?",
    "answer": "dpkg -S /usr/bin/nc",
    "explanation": "This command answers the question \"which software package put this file here?\" You give it a file path, and it tells you the package name. This is useful when debugging, tracing unfamiliar files, or deciding which package to reinstall.",
    "usage": "Identify which installed package owns a given file path on a Debian/Ubuntu system.",
    "examples": [
      "dpkg -S /usr/bin/curl  # exact path",
      "dpkg -S $(which python3)  # command-name → package",
      "dpkg -S libssl  # substring search (will return many)",
      "dpkg -S /etc/nginx/nginx.conf  # config file owner",
      "apt-file search /usr/bin/htop  # if not installed yet"
    ],
    "memoryTip": "`dpkg -S` = Search by path. `dpkg -L` = List files in a package. Reverse pair for repo: `apt-file search` / `apt-file list`.",
    "outputExample": "$ dpkg -S /usr/bin/curl\ncurl: /usr/bin/curl\n$ dpkg -S /tmp/test.txt\ndpkg-query: no path found matching pattern /tmp/test.txt",
    "category": "PACKAGES"
  },
  {
    "id": "pkg22",
    "question": "You killed an apt upgrade mid-run and now every subsequent apt command fails with 'dpkg was interrupted'. What command recovers the system?",
    "answer": "sudo dpkg --configure -a",
    "explanation": "When an installation is interrupted halfway through, packages can get stuck in a half-configured state that blocks all future package management. This command resumes and finishes the configuration step for every package that was left incomplete.",
    "usage": "Finish configuring packages left in a half-configured state after an interrupted installation.",
    "examples": [
      "sudo dpkg --configure -a  # finish all pending configurations",
      "sudo apt --fix-broken install  # more aggressive: can remove a problem package",
      "sudo apt-get -f install  # same as above, older syntax",
      "dpkg -l | grep -v ^ii  # find non-clean packages (not 'ii' state)",
      "sudo apt install --reinstall nginx  # if reconfigure keeps failing for one package"
    ],
    "memoryTip": "Two-phase install: UNPACK then CONFIGURE. If config phase breaks, `dpkg --configure -a` retries it. Status code `ii` in `dpkg -l` = healthy; anything else = potential trouble.",
    "outputExample": "$ sudo apt install curl\nE: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.\n$ sudo dpkg --configure -a\nSetting up nginx (1.24.0-2ubuntu7.3) ...\nProcessing triggers for man-db (2.12.0-1) ...\n$ sudo apt install curl  # now works",
    "category": "PACKAGES"
  },
  {
    "id": "pkg23",
    "question": "You inherited a server and suspect some packages are pinned and won't receive security updates. What command shows you the list of held packages?",
    "answer": "apt-mark showhold",
    "explanation": "This command lists all packages that are frozen at their current version and will be skipped during upgrades. When you inherit a server, checking this list is an important security audit step — held packages may be missing months of security patches.",
    "usage": "List all packages frozen at their current version and excluded from automatic upgrades.",
    "examples": [
      "apt-mark showhold  # list of held packages",
      "apt-mark showhold | wc -l  # how many holds in place",
      "apt-mark showmanual  # packages you explicitly installed",
      "apt-mark showauto  # packages installed as deps, eligible for autoremove",
      "sudo apt-mark unhold $(apt-mark showhold)  # release every hold at once"
    ],
    "memoryTip": "Three `show*` queries: `showhold` (pinned), `showmanual` (you wanted), `showauto` (came as dep). Holds persist across reboots — always audit them on a system you didn't build.",
    "outputExample": "$ apt-mark showhold\nlinux-image-6.5.0-15-generic\nmysql-server-8.0\nnginx",
    "category": "PACKAGES"
  },
  {
    "id": "pkg24",
    "question": "The reason you originally froze nginx at its current version no longer applies and you want upgrades to resume for it. What command lifts the hold?",
    "answer": "sudo apt-mark unhold nginx",
    "explanation": "This command unfreezes a single package so it will be included in future upgrades again. It doesn't upgrade the package immediately — it just removes the pin so the next time you run apt upgrade, the package is eligible.",
    "usage": "Release a held package so it becomes eligible for upgrades again on a Debian/Ubuntu system.",
    "examples": [
      "sudo apt-mark unhold nginx  # release one package",
      "sudo apt-mark unhold nginx mysql-server-8.0  # release several at once",
      "sudo apt-mark unhold $(apt-mark showhold)  # release EVERY hold",
      "apt-mark showhold  # confirm the hold is gone",
      "sudo apt install --only-upgrade nginx  # force immediate upgrade of just nginx"
    ],
    "memoryTip": "`apt-mark unhold` = lift the freeze. Does NOT upgrade by itself — run `apt upgrade` afterwards to actually move the version forward.",
    "outputExample": "$ apt-mark showhold\nnginx\nmysql-server-8.0\n$ sudo apt-mark unhold nginx\nCanceled hold on nginx.\n$ apt-mark showhold\nmysql-server-8.0\n$ apt list --upgradable 2>/dev/null | grep nginx\nnginx/noble-updates 1.24.0-2ubuntu7.3 amd64 [upgradable from: 1.24.0-1]",
    "category": "PACKAGES"
  },
  {
    "id": "pkg25",
    "question": "You want to read the source code for the curl package to understand how it was compiled and what patches Canonical applied. What command fetches and unpacks the source?",
    "answer": "apt source curl",
    "explanation": "This command downloads the original source code for a package along with all the Debian-specific patches and build scripts, then unpacks everything into a directory in your current folder. You can then read the code, modify it, and rebuild a custom package.",
    "usage": "Download and unpack the source code and Debian packaging metadata for an installed package.",
    "examples": [
      "apt source curl  # fetch + unpack curl source",
      "sudo apt build-dep curl  # install build dependencies",
      "apt source --compile curl  # source + immediate rebuild",
      "apt source --download-only curl  # download files only, don't unpack",
      "cd curl-* && dpkg-buildpackage -b -us -uc  # rebuild after editing"
    ],
    "memoryTip": "`apt source` needs `deb-src` enabled in sources.list. Pair with `apt build-dep PKG` to install build tooling. Rebuild with `dpkg-buildpackage`.",
    "outputExample": "$ apt source curl\nNeed to get 4,148 kB of source archives.\nGet:1 http://archive.ubuntu.com/ubuntu noble/main curl 8.5.0-2ubuntu10 (dsc) [2,612 B]\nGet:2 http://archive.ubuntu.com/ubuntu noble/main curl 8.5.0-2ubuntu10 (tar) [4,142 kB]\ndpkg-source: info: extracting curl in curl-8.5.0",
    "category": "PACKAGES"
  },
  {
    "id": "pkg26",
    "question": "You added the deadsnakes PPA to test Python 3.12 but now want to remove it so its packages stop appearing. What command removes the PPA source?",
    "answer": "sudo add-apt-repository --remove ppa:deadsnakes/ppa",
    "explanation": "This command removes the third-party software source you added earlier. After running it, APT will no longer know about packages from that PPA. However, any packages you already installed from it stay at their PPA versions until you explicitly downgrade or remove them.",
    "usage": "Remove a PPA repository source so APT stops seeing its packages on the next update.",
    "examples": [
      "sudo add-apt-repository --remove ppa:deadsnakes/ppa  # remove the source file",
      "sudo apt update  # refresh metadata after removal",
      "sudo apt install ppa-purge && sudo ppa-purge ppa:deadsnakes/ppa  # also revert packages",
      "ls /etc/apt/sources.list.d/  # confirm the source file is gone",
      "sudo rm /etc/apt/sources.list.d/deadsnakes-ubuntu-ppa-*.list  # manual fallback"
    ],
    "memoryTip": "`--remove` only deletes the source file — not the installed packages. To revert installed packages too, use `ppa-purge`. Always run `sudo apt update` after removal.",
    "outputExample": "$ sudo add-apt-repository --remove ppa:deadsnakes/ppa\nRemoving from /etc/apt/sources.list.d/deadsnakes-ubuntu-ppa-noble.list\n$ sudo apt update\nHit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nReading package lists... Done",
    "category": "PACKAGES"
  },
  {
    "id": "pkg27",
    "question": "You are choosing between nginx and apache2 and want to read the full description, version, dependencies, and homepage for nginx before installing. What command shows this information?",
    "answer": "apt show nginx",
    "explanation": "This command shows the full information sheet for a package — its description, version, size, what other packages it needs, and a link to its project homepage. Read this before installing so there are no surprises about what gets pulled in alongside it.",
    "usage": "Display full package metadata — version, description, dependencies, and homepage — before installing.",
    "examples": [
      "apt show nginx  # candidate version only",
      "apt show -a nginx  # ALL available versions",
      "apt show nginx 2>/dev/null | grep -E '^(Version|Depends|Homepage)'  # key fields",
      "apt show nginx 2>/dev/null | grep ^Installed-Size  # disk usage",
      "apt-cache show nginx  # scripting-friendly equivalent (no stderr warning)"
    ],
    "memoryTip": "`apt show` = read the box before buying. RHEL equivalent: `dnf info`. For scripts: `apt-cache show`. For installed package info only: `dpkg -s pkg`.",
    "outputExample": "$ apt show nginx 2>/dev/null\nPackage: nginx\nVersion: 1.24.0-2ubuntu7.3\nInstalled-Size: 96.3 kB\nDepends: nginx-core (= 1.24.0-2ubuntu7.3) | nginx-full (= 1.24.0-2ubuntu7.3)\nHomepage: https://nginx.net\nDescription: small, powerful, scalable web/proxy server",
    "category": "PACKAGES"
  },
  {
    "id": "text21",
    "question": "A CSV file at /var/data/sales.csv has columns: date, region, revenue. You want to print only the region column for every row. Which awk command does this?",
    "answer": "awk -F, '{print $2}' /var/data/sales.csv",
    "explanation": "This command reads each line of a comma-separated file and prints only the second column. It is the quickest way to extract a specific column from CSV data without opening a spreadsheet.",
    "usage": "Extract a specific comma-separated column from a CSV file without a spreadsheet.",
    "examples": [
      "awk -F, '{print $2}' /var/data/sales.csv",
      "awk -F, 'NR>1{print $1}' /var/data/sales.csv  # Skip header",
      "awk -F'\\t' '{print $3}' /var/data/metrics.tsv  # Tab-separated"
    ],
    "memoryTip": "-F = input field separator.",
    "outputExample": "$ cat /var/data/sales.csv\ndate,region,revenue\n2026-05-01,west,4200\n2026-05-02,east,5100\n$ awk -F, 'NR>1{print $2}' /var/data/sales.csv\nwest\neast",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text22",
    "question": "A file /var/data/response_times.txt contains one millisecond value per line. You want to sum all the values to find the total. Which awk command produces that sum?",
    "answer": "awk '{sum+=$1} END {print sum}' /var/data/response_times.txt",
    "explanation": "This command reads every number in the file, adds them all together, then prints the total once it reaches the end of the file. It is a one-liner way to sum a column of numbers without exporting to a spreadsheet.",
    "usage": "Sum a column of numbers in a text file using awk's accumulator pattern.",
    "examples": [
      "awk '{sum+=$1} END {print sum}' /var/data/response_times.txt",
      "awk -F, '{s+=$3} END {printf \"%.2f\\n\", s}' /var/data/sales.csv",
      "awk '{c++; s+=$1} END {print s/c}' /var/data/response_times.txt  # Average"
    ],
    "memoryTip": "{accumulate} END {print} = streaming reduce.",
    "outputExample": "$ printf '100\\n200\\n300\\n' | awk '{s+=$1} END {print s}'\n600",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text23",
    "question": "A config file at /etc/myapp/settings.conf uses 'localhost' in several places but the service moved to 'db.internal'. You want to update the file in place while keeping a backup. What command does this safely?",
    "answer": "sed -i.bak 's/localhost/db.internal/g' /etc/myapp/settings.conf",
    "explanation": "This command replaces every occurrence of a word in a file and saves the original with a .bak extension before making changes. The .bak file is your safety net if the replacement turns out to be wrong.",
    "usage": "Replace all occurrences of a string in a file in place, keeping the original as a .bak backup.",
    "examples": [
      "sed -i.bak 's/localhost/db.internal/g' /etc/myapp/settings.conf",
      "sed -i 's/foo/bar/g' /etc/nginx/nginx.conf  # No backup",
      "sed -i -e 's/http:/https:/' -e 's/port=80/port=443/' /etc/myapp/settings.conf  # Multiple substitutions"
    ],
    "memoryTip": "-i.bak = in-place edit with a .bak safety net.",
    "outputExample": "$ sed -i.bak 's/localhost/db.internal/g' /etc/myapp/settings.conf\n$ ls /etc/myapp/\nsettings.conf  settings.conf.bak",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text24",
    "question": "A log file at /var/log/app.log is full of DEBUG lines that add noise. You want to print the file contents with all DEBUG lines removed. What sed command does this?",
    "answer": "sed '/DEBUG/d' /var/log/app.log",
    "explanation": "This command prints the file but skips any line that contains the word DEBUG. The original file is not changed — the filtered output goes to your screen (or you can redirect it to a new file).",
    "usage": "Filter out all lines matching a pattern from a file, printing the rest to stdout.",
    "examples": [
      "sed '/DEBUG/d' /var/log/app.log",
      "sed -i '/^#/d' /etc/myapp/settings.conf  # Delete comment lines in place",
      "sed '/^$/d' /var/log/app.log  # Drop blank lines"
    ],
    "memoryTip": "/pattern/d = delete (don't print) matching lines.",
    "outputExample": "$ printf 'INFO ok\\nDEBUG hi\\nWARN slow\\n' | sed '/DEBUG/d'\nINFO ok\nWARN slow",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text25",
    "question": "You are searching /var/log/app.log for 'PANIC' errors but the useful information is in the three lines following each match, not on the matching line itself. How do you see those context lines?",
    "answer": "grep -A 3 'PANIC' /var/log/app.log",
    "explanation": "Normally grep only shows the line that contains your search term. With this flag, it also shows the next three lines after each match. This is essential when the interesting detail — like a stack trace — comes after the error line rather than on it.",
    "usage": "Print matching lines plus N lines of following context, useful for log stack traces.",
    "examples": [
      "grep -A 3 'PANIC' /var/log/app.log",
      "grep -B 2 -A 5 'panic' /var/log/kernel.log",
      "grep -C 1 'TODO' /home/alice/project/src/*.py"
    ],
    "memoryTip": "-A After, -B Before, -C Context (both).",
    "outputExample": "$ grep -A 2 'PANIC' /var/log/app.log\nPANIC: nil pointer dereference\n  goroutine 42 [running]:\n  main.handleRequest(0xc000014500)",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text26",
    "question": "You want to find which files in /etc/nginx/conf.d/ contain the string 'proxy_pass' so you know which configs to review. What grep flag shows only filenames?",
    "answer": "grep -l 'proxy_pass' /etc/nginx/conf.d/*.conf",
    "explanation": "Normally grep prints the matching lines from every file mixed together. This flag changes it to print only the name of each file that contains at least one match — nothing else. This lets you see which files to open next.",
    "usage": "Find which files contain a pattern, returning filenames only rather than matching lines.",
    "examples": [
      "grep -l 'proxy_pass' /etc/nginx/conf.d/*.conf",
      "grep -rl 'secret_key' /home/alice/project/  # Recursive",
      "grep -L 'license' /home/alice/project/docs/*.md  # Files WITHOUT a match"
    ],
    "memoryTip": "-l = list matching files only.",
    "outputExample": "$ grep -l 'proxy_pass' /etc/nginx/conf.d/*.conf\n/etc/nginx/conf.d/api.conf\n/etc/nginx/conf.d/app.conf",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text27",
    "question": "An nginx access log at /var/log/nginx/access.log contains lines with IP addresses and you want to extract just the IP addresses, one per line, for analysis. What grep flag extracts only the matching portion?",
    "answer": "grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' /var/log/nginx/access.log",
    "explanation": "Normally grep shows the entire line that contains a match. This flag changes it to print only the part of each line that matched the pattern — nothing else. If one line has multiple matches, each gets its own output line.",
    "usage": "Extract and print only the text that matched the pattern, discarding the rest of each line.",
    "examples": [
      "grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' /var/log/nginx/access.log  # IPs",
      "grep -o 'href=\"[^\"]*\"' /var/www/html/index.html",
      "grep -oP '\\bORD-[0-9]+\\b' /var/log/app.log"
    ],
    "memoryTip": "-o = output only the match.",
    "outputExample": "$ echo 'client 10.0.0.5 accessed 192.168.1.1' | grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+'\n10.0.0.5\n192.168.1.1",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text28",
    "question": "You want to find all lines in /var/log/app.log where a 3-digit status code is followed by a 4-digit request ID, using \\d shorthand for digits. Which grep flag enables that shorthand?",
    "answer": "grep -P '\\d{3}\\s+\\d{4}' /var/log/app.log",
    "explanation": "Standard grep does not understand \\d for digits — you would have to write [0-9] instead. Adding this flag switches grep to Perl-compatible regular expressions, which support \\d, \\w, \\s, lookaheads, and other powerful constructs unavailable in basic regex.",
    "usage": "Enable Perl-compatible regex in grep for shorthand classes and lookahead/lookbehind assertions.",
    "examples": [
      "grep -P '\\d{3}-\\d{4}' /var/log/app.log  # Phone-like patterns",
      "grep -P '(?<=Bearer )\\S+' /var/log/nginx/access.log  # Lookbehind",
      "grep -Pi '\\bemail\\b.*@' /var/data/users.txt"
    ],
    "memoryTip": "-P = Perl regex flavor.",
    "outputExample": "$ echo 'status=404 reqid=1234' | grep -P '\\d{3}\\s+\\w+=\\d{4}'\nstatus=404 reqid=1234",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text29",
    "question": "An API returns a token that looks like 'Bearer abc 123 def' and you need to strip all whitespace before storing it. Which command removes every whitespace character from stdin?",
    "answer": "echo 'abc 123 def' | tr -d '[:space:]'",
    "explanation": "This command removes every whitespace character — spaces, tabs, newlines — from the input. It is the fastest way to strip all spacing from a string in a shell pipeline.",
    "usage": "Delete all whitespace characters from stdin, producing a compact output string.",
    "examples": [
      "echo ' a b c ' | tr -d '[:space:]'  # abc",
      "tr -d '\\r' < /tmp/windows.txt > /tmp/unix.txt  # Strip CR",
      "echo 'Hello, World!' | tr -d '[:punct:]'  # Hello World"
    ],
    "memoryTip": "-d = delete; [:space:] = POSIX whitespace class.",
    "outputExample": "$ echo ' a b c ' | tr -d '[:space:]'\nabc",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text30",
    "question": "A CSV export from a European database uses accented characters like é and ü, but your downstream parser only accepts ASCII. How do you convert the file to ASCII, substituting accented characters with their closest ASCII equivalents?",
    "answer": "iconv -f UTF-8 -t ASCII//TRANSLIT /var/data/export.csv > /var/data/export_ascii.csv",
    "explanation": "Converting character encodings is important for international text. The iconv command translates files between UTF-8, ASCII, and ISO-8859-1.",
    "usage": "Convert a UTF-8 text file to ASCII, substituting accented characters with close ASCII equivalents.",
    "examples": [
      "iconv -f UTF-8 -t ASCII//TRANSLIT /var/data/export.csv > /var/data/export_ascii.csv",
      "iconv -f WINDOWS-1252 -t UTF-8 /tmp/legacy.txt > /tmp/legacy_utf8.txt",
      "iconv -l | head  # List all supported encodings"
    ],
    "memoryTip": "iconv -f FROM -t TO; //TRANSLIT = best-effort ASCII substitution.",
    "outputExample": "$ echo 'café résumé' | iconv -f UTF-8 -t ASCII//TRANSLIT\ncafe resume",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "sys21",
    "question": "You SSH'd into an unfamiliar Ubuntu server and want to know the exact distribution version and codename. Which command prints all LSB release fields?",
    "answer": "lsb_release -a",
    "explanation": "This command prints a short summary of which Linux distribution and version is running — like reading the label on the operating system. It shows the distributor name, version number, and the release codename.",
    "usage": "Print the full Linux distribution name, version, and codename in a consistent format.",
    "examples": [
      "lsb_release -a",
      "lsb_release -cs  # Just the codename (e.g. noble)",
      "cat /etc/os-release  # Modern equivalent, also works on RHEL"
    ],
    "memoryTip": "lsb_release = Linux Standard Base release info. `-cs` gives just the codename for scripting.",
    "outputExample": "$ lsb_release -a\nDistributor ID: Ubuntu\nDescription:    Ubuntu 24.04 LTS\nRelease:        24.04\nCodename:       noble",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys22",
    "question": "You just plugged in a USB drive and need to find its device name (like /dev/sdb1) before mounting it. Which command shows all block devices as a tree?",
    "answer": "lsblk",
    "explanation": "This command lists every storage device connected to the machine — SSDs, hard drives, USB sticks, partitions — and shows them as a tree so you can see how partitions relate to physical disks. It immediately shows you the device name you need for mounting.",
    "usage": "Show all block devices and partitions as a tree, with device names and mount points.",
    "examples": [
      "lsblk  # the basic tree view — start here",
      "lsblk -f  # add FSTYPE, LABEL, UUID — needed for /etc/fstab",
      "lsblk -o NAME,SIZE,MOUNTPOINT,FSTYPE,MODEL  # pick exact columns",
      "lsblk /dev/sda  # only one device's tree"
    ],
    "memoryTip": "`lsblk` = list block devices. Like `ls` for storage chunks. The tree shape shows which partitions belong to which disk.",
    "outputExample": "$ lsblk\nNAME        SIZE TYPE MOUNTPOINT\nsda         500G disk\n├─sda1        1G part /boot\n└─sda2      499G part /\nsdb          16G disk\n└─sdb1       16G part /media/usb",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys23",
    "question": "You need the UUID of /dev/sdb1 to write a stable /etc/fstab entry that won't break if the drive order changes on reboot. Which command shows UUIDs and filesystem types?",
    "answer": "sudo blkid /dev/sdb1",
    "explanation": "This command shows the permanent UUID identifier and filesystem type for a storage partition. UUIDs are unique labels that never change, unlike device names like /dev/sdb1 which can shift if you plug in drives in a different order.",
    "usage": "Show the UUID and filesystem type of a block device for use in /etc/fstab.",
    "examples": [
      "sudo blkid  # all devices",
      "sudo blkid /dev/sdb1  # just one partition",
      "blkid -o export /dev/sdb1  # shell-friendly KEY=VALUE output"
    ],
    "memoryTip": "blkid = block ID (UUID/label). Use UUID in /etc/fstab, not /dev/sdX names.",
    "outputExample": "$ sudo blkid /dev/sdb1\n/dev/sdb1: UUID=\"a1b2c3d4-e5f6-7890-abcd-ef1234567890\" TYPE=\"ext4\" LABEL=\"data\"",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys24",
    "question": "You mounted an NFS share but are not sure which filesystem /var/data is actually on or how it was mounted. Which command shows the mount entry for that specific path?",
    "answer": "findmnt /var/data",
    "explanation": "This command looks up where a path is mounted and shows you the source device or network share, the filesystem type, and the mount options. It is faster than reading /proc/mounts manually and shows exactly the entry relevant to a given path.",
    "usage": "Show the source device, filesystem type, and mount options for a given path.",
    "examples": [
      "findmnt /var/data",
      "findmnt -t ext4  # All ext4 mounts",
      "findmnt --target /  # Show root filesystem info"
    ],
    "memoryTip": "findmnt = find mount entry for a path.",
    "outputExample": "$ findmnt /var/data\nTARGET     SOURCE         FSTYPE  OPTIONS\n/var/data  nfs.example.com:/exports/data  nfs  rw,relatime,vers=4",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys25",
    "question": "Someone may have logged into this server without authorization this week. Which command shows recent login history including SSH sessions and reboots?",
    "answer": "last",
    "explanation": "This command reads the login history log and prints one line per login event, from newest to oldest. Each line shows who logged in, from which IP address, when they connected, and when they disconnected. Reboot events are also shown so you can spot unexpected restarts.",
    "usage": "Display login history for all users, showing session times, source IPs, and reboot events.",
    "examples": [
      "last  # full login history (newest first)",
      "last -n 10  # only the most recent 10 entries",
      "last alice  # only logins by user alice",
      "last reboot  # only reboot markers",
      "sudo lastb -n 20  # most recent FAILED logins"
    ],
    "memoryTip": "`last` = LAST logins. Siblings: `lastb` (bad/failed, needs sudo), `lastlog` (one row per user). All read /var/log/{wtmp,btmp,lastlog}.",
    "outputExample": "$ last -n 3\nalice   pts/0  192.168.1.10  Sat May 14 09:00   still logged in\nbob     pts/1  10.0.0.5      Sat May 14 08:42 - 09:15  (00:33)\nreboot  system boot         Sat May 14 08:30   still running",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys26",
    "question": "The web server is slow but CPU usage looks fine. You suspect I/O or memory pressure. Which command shows a one-line-per-second summary of memory, swap, and CPU states?",
    "answer": "vmstat 1",
    "explanation": "This command prints a one-line dashboard every second showing how busy the CPU is, how much memory is free, whether the system is swapping to disk, and how much I/O is happening. It is the fastest way to see whether a slowdown is due to CPU, memory, or disk activity.",
    "usage": "Show a live one-line-per-second summary of CPU, memory, swap, and I/O activity.",
    "examples": [
      "vmstat 1  # refresh every second",
      "vmstat 1 5  # 5 samples then exit",
      "vmstat -SM 1  # Memory in MiB"
    ],
    "memoryTip": "vmstat = virtual memory + system stats. High `wa` = I/O bound. High `si/so` = swap pressure. Skip the first line (it's a boot average).",
    "outputExample": "$ vmstat 1\nprocs ---memory---    ---swap-- ---io-- ---system-- ------cpu-----\n r b   swpd free buff cache  si so  bi  bo  in   cs  us sy id wa\n 2 0      0 512m  64m   2g   0  0   8  42 312  891   8  3 85  4",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys27",
    "question": "CPU and memory look normal but the database server is still slow. You want to see per-disk read/write rates and utilization percentages updated every second. Which command shows extended disk I/O statistics?",
    "answer": "iostat -xz 1",
    "explanation": "This command shows a live table of disk activity — how many reads and writes per second each disk is handling, how fast data is moving, and what percentage of time each disk is busy. Hiding idle disks keeps the display focused on the ones actually doing work.",
    "usage": "Show live per-disk read/write throughput and utilization, hiding idle devices.",
    "examples": [
      "iostat -xz 1  # extended, hide idle, refresh each second",
      "iostat -xz 2 5  # 5 samples then exit, 2 seconds apart",
      "iostat -m  # use MB/s instead of KB/s",
      "sudo iotop -o  # per-process I/O (different command)"
    ],
    "memoryTip": "`iostat` = I/O STATistics. Key metrics: `await` (latency), `%util` (saturation). Pair: `vmstat`=system-wide, `iostat`=per-disk, `iotop`=per-process.",
    "outputExample": "$ iostat -xz 1\nDevice  r/s   w/s  rkB/s  wkB/s  await  %util\nnvme0n1 12.0  34.5  384.0  1840.0  1.42   3.10\nsda      0.0  48.2    0.0  9200.0  82.3  97.4",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys28",
    "question": "You inherited an unfamiliar physical server and need a compact summary of all its hardware — CPU, RAM, NICs, and disks — in one command. What produces this hardware inventory?",
    "answer": "sudo lshw -short",
    "explanation": "This command lists every piece of hardware detected in the server — processor, memory slots, network cards, and storage devices — in a compact table format. It is the fastest way to answer \"what is actually in this machine?\" on a system you have never worked with before.",
    "usage": "Print a compact table of all detected hardware including CPU, memory, NICs, and disks.",
    "examples": [
      "sudo lshw -short  # compact table — start here",
      "sudo lshw -C network  # only NICs",
      "sudo lshw -C disk -C storage  # disks and controllers",
      "sudo lshw -json > /tmp/inventory.json  # machine-readable inventory"
    ],
    "memoryTip": "`lshw` = LiSt HardWare. Use `-short` for a compact view. Cousins: `lscpu`, `lspci`, `lsusb`, `lsblk` for narrower jobs.",
    "outputExample": "$ sudo lshw -short\nH/W path        Device   Class      Description\n================================================\n                         system     PowerEdge R740\n/0/4                     processor  Intel Xeon Gold 6226R\n/0/15                    memory     64GiB System Memory\n/0/100/1f.6     eno1     network    Ethernet I350-LM\n/0/100/1d/0     /dev/sda disk       1TB SAS HDD",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys29",
    "question": "A Java process appears to have a memory leak. You want to see the kernel's raw memory accounting — total, free, available, and cached — beyond what the 'free' command shows. Which file holds that data?",
    "answer": "grep -E 'MemTotal|MemFree|MemAvailable|Cached' /proc/meminfo",
    "explanation": "The kernel maintains a running page-by-page account of every byte of memory in a virtual file. Reading it gives you detailed memory statistics including how much is cached and how much is truly available for new processes — a distinction the simpler 'free' command sometimes obscures.",
    "usage": "Read the kernel's detailed memory accounting file to see all memory categories in kilobytes.",
    "examples": [
      "grep -E 'MemTotal|MemAvailable|Cached' /proc/meminfo",
      "awk '/MemAvailable/ {print $2/1024 \" MB\"}' /proc/meminfo",
      "watch -n 1 'grep -E \"Mem|Swap\" /proc/meminfo'  # live view"
    ],
    "memoryTip": "/proc/meminfo = the kernel's memory ledger. MemAvailable is what matters for OOM risk — not MemFree.",
    "outputExample": "$ grep -E 'MemTotal|MemFree|MemAvailable|Cached' /proc/meminfo\nMemTotal:       16384000 kB\nMemFree:          512000 kB\nMemAvailable:    8192000 kB\nCached:          6144000 kB",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys30",
    "question": "The system journal is hundreds of megabytes long and you only care about lines that indicate actual errors or worse. Which journalctl filter shows only error-level and above entries?",
    "answer": "journalctl -p err",
    "explanation": "This command filters the system journal to show only entries at the 'error' severity level and above — which includes errors, critical messages, alerts, and emergencies. Everything informational is hidden, leaving only the messages that indicate real problems.",
    "usage": "Filter the systemd journal to show only error, critical, alert, and emergency priority entries.",
    "examples": [
      "journalctl -p err -b  # Errors since current boot",
      "journalctl -p err -u nginx  # nginx errors only",
      "journalctl -p warning..err  # warnings and errors only",
      "journalctl -p err --since '1 hour ago'"
    ],
    "memoryTip": "-p = priority filter. 0=emerg 1=alert 2=crit 3=err 4=warning 5=notice 6=info 7=debug. `-p err` shows 0-3.",
    "outputExample": "$ journalctl -p err -b -n 5\nMay 17 10:12:33 web1 nginx[1234]: open() '/var/run/nginx.pid' failed (13: Permission denied)\nMay 17 10:14:01 web1 kernel: usb 2-1: device not accepting address, error -71",
    "category": "SYSTEM INFO"
  },
  {
    "id": "bash11",
    "question": "You are writing a bash script that will run in a cron job. You want it to exit immediately on any failed command, error on unset variables, and not silently swallow pipeline failures. What three-option set command achieves all of this?",
    "answer": "set -euo pipefail",
    "explanation": "By default, bash keeps running even when commands fail — it just ignores the error and moves on. This single line at the top of your script activates three safety nets that together make the script exit with an error whenever something goes wrong, rather than continuing with broken state.",
    "usage": "Add as the first executable line of every non-trivial bash script to make failure explicit and loud.",
    "examples": [
      "#!/usr/bin/env bash\nset -euo pipefail\nIFS=$'\\n\\t'  # canonical strict-mode preamble",
      "risky_cmd || true  # explicit opt-out of -e for one command",
      "set +e; risky_block; set -e  # temporarily disable -e around a block"
    ],
    "memoryTip": "`-e` exit-on-error, `-u` unset-vars-are-errors, `-o pipefail` pipeline-fails-if-any-stage-fails. The trinity of bash safety.",
    "outputExample": "$ cat strict.sh\n#!/usr/bin/env bash\nset -euo pipefail\nfalse\necho 'never seen'\n$ bash strict.sh; echo \"exit=$?\"\nexit=1\n$ bash -c 'set -u; echo \"$NOPE\"'\nbash: NOPE: unbound variable",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash12",
    "question": "Your script creates a temp directory at the start and you want it to be automatically deleted when the script exits, even if the script crashes partway through. What trap idiom achieves this?",
    "answer": "tmp=$(mktemp -d); trap 'rm -rf \"$tmp\"' EXIT",
    "explanation": "The trap command registers a cleanup action that runs whenever the script exits — whether it finishes normally, hits an error, or is killed. Combining it with mktemp ensures temporary files are always removed, even if something goes wrong halfway through.",
    "usage": "Register a cleanup function that runs automatically when the script exits for any reason.",
    "examples": [
      "tmp=$(mktemp -d)\ntrap 'rm -rf \"$tmp\"' EXIT  # the classic temp-dir pattern",
      "trap 'echo \"FAILED at line $LINENO\" >&2' ERR  # report where errors happen",
      "cleanup() { rm -f /var/run/myapp.lock; }\ntrap cleanup EXIT  # function as handler",
      "trap '' INT  # IGNORE Ctrl-C (use sparingly)"
    ],
    "memoryTip": "`trap CMD SIGNAL` = run CMD when SIGNAL fires. Pseudo-signals: `EXIT` (always), `ERR` (on failure), `DEBUG` (before each command). Use `mktemp -d` + `trap 'rm -rf' EXIT` as the standard temp-dir idiom.",
    "outputExample": "$ cat with-trap.sh\n#!/usr/bin/env bash\nset -euo pipefail\ntmp=$(mktemp -d)\ntrap 'echo \"cleaning $tmp\"; rm -rf \"$tmp\"' EXIT\ntouch \"$tmp/file\"\nfalse  # provoke error\n$ bash with-trap.sh\ncleaning /tmp/tmp.AbcDe\n$ ls /tmp/tmp.AbcDe\nls: cannot access: No such file or directory",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash13",
    "question": "You want your bash script to accept a -f filename flag and a -v verbose flag. Which builtin parses short flags like these, and what does the basic loop look like?",
    "answer": "while getopts \"f:v\" opt; do case $opt in f) file=$OPTARG;; v) verbose=1;; esac; done",
    "explanation": "This loop reads command-line flags one at a time. For each flag it finds, a case statement routes to the right action — storing the filename for -f or enabling verbose mode for -v. When all flags are consumed, the loop ends automatically.",
    "usage": "Parse short command-line flags in a bash script without external dependencies.",
    "examples": [
      "while getopts 'f:vh' opt; do\n  case $opt in\n    f) file=$OPTARG ;;\n    v) verbose=1 ;;\n    h) echo \"usage: $0 [-f FILE] [-v]\"; exit 0 ;;\n    \\?) echo \"bad flag\" >&2; exit 1 ;;\n  esac\ndone\nshift $((OPTIND-1))",
      "OPTIND=1  # reset before reusing getopts inside a function"
    ],
    "memoryTip": "Spec `\"f:v\"` = `-f` needs arg (colon after), `-v` doesn't. Value in `$OPTARG`, position in `$OPTIND`. After loop: `shift $((OPTIND-1))`. SHORT FLAGS ONLY.",
    "outputExample": "$ ./opts.sh -f /etc/nginx/nginx.conf -v extra\nfile=/etc/nginx/nginx.conf verbose=1 remaining=extra",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash14",
    "question": "Your script reads a PORT variable from the environment but needs to default to 8080 if the variable is unset or empty. What parameter expansion achieves this without an if statement?",
    "answer": "port=\"${PORT:-8080}\"",
    "explanation": "This shorthand checks whether a variable has a value and uses a fallback if it doesn't. You write the variable name and the default value in one expression, eliminating the need for a separate if-else block just to handle a missing value.",
    "usage": "Provide a fallback value when a variable is unset or empty, without an if statement.",
    "examples": [
      "port=\"${PORT:-8080}\"  # default port",
      "branch=\"${1:-main}\"  # default if no argument passed",
      "echo \"Hello, ${NAME:-stranger}\"",
      "log_dir=\"${LOG_DIR:=/var/log/myapp}\"  # set AND assign default (note :=)"
    ],
    "memoryTip": "`:-` use-default (no assign), `:=` assign-and-use, `:+` use-only-if-set, `:?` error-if-empty. Colon = 'or empty also counts'.",
    "outputExample": "$ unset PORT\n$ port=\"${PORT:-8080}\"; echo $port\n8080\n$ PORT=9000 bash -c 'port=\"${PORT:-8080}\"; echo $port'\n9000",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash15",
    "question": "Your deployment script requires the API_TOKEN environment variable to be set and must exit loudly with a clear message if it is not. What parameter expansion does this in one line?",
    "answer": ": \"${API_TOKEN:?API_TOKEN env var is required}\"",
    "explanation": "This line checks whether a required variable is set and exits the script with an informative error message if it is not. It is cleaner than writing a full if-then-exit block and communicates the requirement clearly to anyone reading the script.",
    "usage": "Exit the script with a clear error message if a required environment variable is missing.",
    "examples": [
      ": \"${API_TOKEN:?API_TOKEN env var is required}\"  # canonical guard",
      "TARGET=\"${1:?Usage: $0 <hostname>}\"  # required positional argument",
      ": \"${DB_PASSWORD:?Set DB_PASSWORD before running}\""
    ],
    "memoryTip": "`:?` = error-if-empty (LOUD). `:-` = use-if-empty (QUIET). Leading `:` is the null command — runs the expansion for its check effect only. Exits the script; does NOT just warn.",
    "outputExample": "$ cat req.sh\n#!/usr/bin/env bash\nset -euo pipefail\n: \"${API_TOKEN:?API_TOKEN env var is required}\"\necho \"deploying with token\"\n$ bash req.sh\nreq.sh: line 3: API_TOKEN: API_TOKEN env var is required\n$ API_TOKEN=sk-abc bash req.sh\ndeploying with token",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash16",
    "question": "A bash variable $filename contains 'My Photo 2026.JPG' and you want to replace all spaces with underscores using only bash, without spawning a sed process. What parameter expansion does this?",
    "answer": "echo \"${filename// /_}\"",
    "explanation": "Bash has a built-in string substitution that can replace characters inside a variable without running an external command. The double slash means 'replace all occurrences', the first space is what to find, and the underscore is the replacement.",
    "usage": "Replace all occurrences of a character or substring within a bash variable without forking sed.",
    "examples": [
      "echo \"${filename// /_}\"  # spaces to underscores",
      "echo \"${filename,,}\"  # lowercase (bash 4+)",
      "file=image.png; echo \"${file%.png}.jpg\"  # change extension",
      "path=/tmp/foo/bar.txt; echo \"${path##*/}\"  # basename"
    ],
    "memoryTip": "`/` first, `//` all, `/#` anchor start, `/%` anchor end. `%`/`%%` strip suffix, `#`/`##` strip prefix. Faster than `sed` for variable transformations.",
    "outputExample": "$ filename='My Photo 2026.JPG'\n$ echo \"${filename// /_}\"\nMy_Photo_2026.JPG\n$ echo \"${filename%.JPG}.jpg\"\nMy Photo 2026.jpg",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash17",
    "question": "Your script accepts a subcommand as its first argument — start, stop, or status — and should print usage for anything else. What bash construct handles multi-way branching on a string value?",
    "answer": "case \"$1\" in start) start_service ;; stop) stop_service ;; status) status_service ;; *) echo \"usage: $0 {start|stop|status}\" >&2; exit 1 ;; esac",
    "explanation": "The case statement is bash's version of a switch statement. It compares a value against several patterns and runs the matching block. It is much cleaner than a chain of if/elif/elif/else when testing one variable against many fixed values.",
    "usage": "Branch on one of several known string values more cleanly than a chain of if/elif statements.",
    "examples": [
      "case \"$1\" in\n  start) echo 'starting'; start_service ;;\n  stop)  echo 'stopping'; stop_service ;;\n  *) echo \"usage: $0 {start|stop}\" >&2; exit 1 ;;\nesac",
      "case \"$file\" in *.tar.gz|*.tgz) tar -xzf \"$file\" ;; *.zip) unzip \"$file\" ;; esac",
      "case \"$(uname -s)\" in Linux*) os=linux ;; Darwin*) os=mac ;; esac  # OS detection"
    ],
    "memoryTip": "`case VAL in PAT) ACT ;; *) DEFAULT ;; esac`. Patterns are GLOBS. `|` means OR. `;;` ends branch. Always quote the value.",
    "outputExample": "$ ./svc.sh start\nstarting service\n$ ./svc.sh foo; echo $?\nusage: ./svc.sh {start|stop|status}\n1",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash18",
    "question": "Your script needs a lookup table mapping environment names to deployment URLs — dev to https://dev.example.com, prod to https://example.com. How do you declare a string-keyed associative array in bash?",
    "answer": "declare -A url=([dev]=https://dev.example.com [prod]=https://example.com)",
    "explanation": "Bash supports two kinds of arrays: plain lists with numeric indexes and lookup tables with string keys. To use string keys you must explicitly declare the variable as an associative array before assigning to it, or bash will silently ignore the string keys and produce wrong results.",
    "usage": "Create a string-keyed map in bash for O(1) lookups by environment name, hostname, or any string key.",
    "examples": [
      "declare -A url=([dev]=https://dev.example.com [prod]=https://example.com)\necho \"${url[prod]}\"",
      "declare -A count\nfor word in apple banana apple; do ((count[$word]++)); done",
      "for k in \"${!url[@]}\"; do echo \"$k -> ${url[$k]}\"; done  # iterate keys",
      "[[ -v url[dev] ]] && echo 'dev key exists'  # check key presence"
    ],
    "memoryTip": "`-A` Associative (string keys). MUST declare before use. `${!arr[@]}` = keys, `${arr[@]}` = values. Bash 4+ only — macOS default bash is 3.x.",
    "outputExample": "$ declare -A url=([dev]=https://dev.x [prod]=https://x)\n$ echo \"${url[dev]}\"\nhttps://dev.x\n$ for k in \"${!url[@]}\"; do echo \"$k: ${url[$k]}\"; done\ndev: https://dev.x\nprod: https://x",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash19",
    "question": "Your script needs to process every hostname from /etc/deploy/hosts.txt as an array element. What single command reads the file into a bash array with no trailing newlines on each element?",
    "answer": "mapfile -t hosts < /etc/deploy/hosts.txt",
    "explanation": "This command reads an entire file into a bash array, putting each line into its own array slot. The -t flag strips the newline character from the end of each element so you get clean strings rather than strings with a trailing newline.",
    "usage": "Read all lines of a file into a bash array, one line per element, without trailing newlines.",
    "examples": [
      "mapfile -t hosts < /etc/deploy/hosts.txt",
      "mapfile -t errors < <(grep ERROR /var/log/app.log)  # from a pipeline",
      "mapfile -t -n 10 first_ten < /var/log/app.log  # only first 10 lines",
      "mapfile -t -s 1 data < /var/data/report.csv  # skip CSV header",
      "for h in \"${hosts[@]}\"; do ssh \"$h\" uptime; done  # iterate safely"
    ],
    "memoryTip": "`mapfile -t arr < file` = lines into array, no trailing `\\n`. Pipeline input: use `< <(cmd)` not `|`. Bash 4+ only.",
    "outputExample": "$ cat /etc/deploy/hosts.txt\nweb1\nweb2\ndb1\n$ mapfile -t hosts < /etc/deploy/hosts.txt\n$ echo \"count: ${#hosts[@]}\"\ncount: 3\n$ echo \"${hosts[1]}\"\nweb2",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash20",
    "question": "Your script loops over a counter and you want to increment it using bash arithmetic without calling an external program. What syntax increments a variable named i in place?",
    "answer": "(( i++ ))",
    "explanation": "Bash has a built-in arithmetic mode where you can write math expressions using the same style as C — no dollar signs needed on variable names, and C operators like ++ for increment all work. This is faster than calling expr or bc for simple integer math.",
    "usage": "Increment an integer counter variable in bash using built-in arithmetic without calling external tools.",
    "examples": [
      "i=0; (( i++ )); echo $i  # → 1",
      "if (( count > 100 )); then echo 'too many'; fi",
      "n=$(( 2 ** 10 ))  # n=1024 — arithmetic expansion",
      "for (( i=0; i<5; i++ )); do echo $i; done  # C-style for loop",
      "(( i++ )) || true  # prevent set -e from killing on pre-zero increment"
    ],
    "memoryTip": "`(( expr ))` STATEMENT (no $ on vars inside), `$((expr))` EXPRESSION (use result). C operators work. INTEGER ONLY — use `bc -l` or awk for floats. Under `set -e`, `(( i++ ))` can exit when i was 0.",
    "outputExample": "$ i=0; (( i++ )); echo $i\n1\n$ if (( i > 0 )); then echo positive; fi\npositive\n$ echo $((2**16))\n65536",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash21",
    "question": "You want a daily cron job to back up /etc with a filename that includes today's date, like backup-2026-05-17.tar.gz. How do you create this timestamped compressed archive?",
    "answer": "tar -czf \"backup-$(date +%F).tar.gz\" /etc",
    "explanation": "This command creates a compressed archive of a directory and names the file using today's date automatically inserted into the filename. Running the same command tomorrow produces a different filename, so daily backups don't overwrite each other.",
    "usage": "Create a date-stamped gzip-compressed tarball for use in automated backup scripts.",
    "examples": [
      "tar -czf \"backup-$(date +%F).tar.gz\" /etc  # daily: backup-2026-05-17.tar.gz",
      "tar -czf \"snap-$(date +%F-%H%M%S).tgz\" /etc  # second-precision",
      "tar -czf - /etc | ssh alice@backup.example.com 'cat > /var/backups/etc.tgz'  # stream off-site",
      "find /var/backups -name 'backup-*.tar.gz' -mtime +30 -delete  # rotate 30+ days old"
    ],
    "memoryTip": "`tar -czf` = Create, gZip, File. `$(date +%F)` = today YYYY-MM-DD. Quote the filename. Rotate with `find -mtime +N -delete`.",
    "outputExample": "$ tar -czf \"backup-$(date +%F).tar.gz\" /etc\n$ ls -lh backup-*.tar.gz\n-rw-r--r-- 1 alice alice 1.8M May 17 09:32 backup-2026-05-17.tar.gz",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash22",
    "question": "Log files older than 7 days are piling up in /var/log/myapp/ and you want a cron command that deletes them. What find command removes only .log files older than 7 days?",
    "answer": "find /var/log/myapp -name '*.log' -type f -mtime +7 -delete",
    "explanation": "This command walks a directory tree, finds files matching the age and name criteria, and deletes them. The type filter ensures only regular files are deleted, not directories. Always run a preview first by removing the -delete to see what would be affected.",
    "usage": "Delete files matching a name pattern that are older than N days, as part of a log rotation job.",
    "examples": [
      "find /var/log/myapp -name '*.log' -mtime +7 -print  # DRY RUN first!",
      "find /var/log/myapp -name '*.log' -type f -mtime +7 -delete",
      "find /tmp -mindepth 1 -mmin +60 -delete  # /tmp files older than 60 min",
      "find /var/backups -name 'backup-*.tar.gz' -mtime +30 -delete"
    ],
    "memoryTip": "`-mtime +N` = older than N days. ALWAYS preview with `-print` before `-delete`. Add `-type f` to avoid deleting directories. Put `-delete` LAST.",
    "outputExample": "$ find /var/log/myapp -name '*.log' -mtime +7 -print | head\n/var/log/myapp/app-2026-04-01.log\n/var/log/myapp/app-2026-04-02.log\n$ find /var/log/myapp -name '*.log' -type f -mtime +7 -delete\n$ find /var/log/myapp -name '*.log' -mtime +7 | wc -l\n0",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash23",
    "question": "You just converted a directory of .txt files to Markdown and want to rename them all from .txt to .md. What for loop with parameter expansion renames all of them?",
    "answer": "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done",
    "explanation": "This loop goes through every .txt file in the current directory and renames each one to have a .md extension instead. The parameter expansion strips the old extension and adds the new one — no external rename utility required.",
    "usage": "Batch-rename files by changing their extension using bash parameter expansion and a for loop.",
    "examples": [
      "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done",
      "shopt -s nullglob; for f in *.jpg; do mv \"$f\" \"${f%.jpg}.jpeg\"; done  # safer",
      "for f in IMG_*.JPG; do mv \"$f\" \"photo-${f#IMG_}\"; done  # strip prefix, add new one",
      "rename 's/\\.txt$/.md/' *.txt  # if perl rename is installed"
    ],
    "memoryTip": "`${f%.txt}` = strip suffix (one `%` shortest, `%%` longest). `${f#prefix}` = strip prefix. ALWAYS quote `\"$f\"`. Set `shopt -s nullglob` so empty globs give empty list.",
    "outputExample": "$ touch notes.txt draft.txt 'my doc.txt'\n$ for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done\n$ ls\ndraft.md  'my doc.md'  notes.md",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash24",
    "question": "You want every line of output from a deploy script to appear both on the terminal and be appended to /var/log/deploy.log, including stderr. What exec redirect at the top of the script achieves this?",
    "answer": "exec > >(tee -a /var/log/deploy.log) 2>&1",
    "explanation": "This line, placed near the top of a script, redirects all subsequent output to both the terminal and a log file simultaneously. It is the 'log everything' pattern — after this line runs, you never have to add redirection to individual commands in the script.",
    "usage": "Redirect all script output to both the terminal and a log file with a single line at the top.",
    "examples": [
      "exec > >(tee -a /var/log/deploy.log) 2>&1  # canonical 'log everything'",
      "LOG=\"/var/log/myapp-$(date +%F).log\"\nexec > >(tee -a \"$LOG\") 2>&1  # daily log file",
      "exec > >(tee -a /var/log/out.log) 2> >(tee -a /var/log/err.log >&2)  # separate stdout/stderr"
    ],
    "memoryTip": "`exec > FILE` = redirect this shell's stdout for the rest of its life. `>(cmd)` = process substitution (bash-only). Combo: `exec > >(tee -a log) 2>&1`. Put after strict-mode at the top.",
    "outputExample": "$ cat deploy.sh\n#!/usr/bin/env bash\nset -euo pipefail\nexec > >(tee -a /var/log/deploy.log) 2>&1\necho 'deploy started'\nls /nonexistent  # error\necho 'done'\n$ ./deploy.sh\ndeploy started\nls: cannot access '/nonexistent': No such file or directory\ndone\n$ tail /var/log/deploy.log\ndeploy started\nls: cannot access '/nonexistent': No such file or directory\ndone",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash25",
    "question": "Your script runs a curl command to fetch a config and must exit with an error message if the fetch fails. What idiom provides a clean fallback in a single line?",
    "answer": "curl -fsS https://config.example.com/app.json || { echo 'fetch failed' >&2; exit 1; }",
    "explanation": "The double pipe means \"if the command on the left fails, run what is on the right\". Using curly braces lets you group multiple actions as the fallback, so you can both print an error message and exit in one logical block.",
    "usage": "Run a fallback action (print error and exit) if a command fails, using inline conditional syntax.",
    "examples": [
      "curl -fsS https://config.example.com/app.json || { echo 'fetch failed' >&2; exit 1; }",
      "mkdir -p /var/run/myapp || exit 1  # single statement, no braces",
      "command -v jq >/dev/null || { echo 'install jq first' >&2; exit 1; }",
      "risky_cmd || true  # explicit opt-out of set -e for one command"
    ],
    "memoryTip": "`cmd || action` = run action ON FAILURE. `{ a; b; }` groups (note spaces + closing `;`). Under `set -e`, left of `||` is exempt. The `&& X || Y` pattern is NOT a clean if/else — use real `if` when it matters.",
    "outputExample": "$ false || { echo 'first'; echo 'second'; exit 1; }\nfirst\nsecond\n$ echo $?\n1\n$ curl -fsS https://nope.invalid || echo 'fallback'\nfallback",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash26",
    "question": "You want a cron job to run the script /usr/local/bin/backup.sh every day at 2:30 AM and log its output. What crontab line sets this up?",
    "answer": "30 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1",
    "explanation": "A cron line has five time fields followed by the command to run. This one runs every night at exactly 2:30 AM and redirects all output to a log file so you can review it later.",
    "usage": "Schedule a script to run at a specific time daily and capture its output to a log file.",
    "examples": [
      "30 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1  # daily at 02:30",
      "0 3 * * 0 /usr/local/bin/weekly.sh  # 03:00 every Sunday",
      "0 9-17 * * 1-5 /opt/heartbeat.sh  # hourly during work hours, weekdays",
      "@reboot /opt/start-on-boot.sh  # run at boot"
    ],
    "memoryTip": "Five fields: `min hour dom mon dow`. `*` every, `*/N` every N, `,` list, `-` range. Mnemonic: 'My Hat Doesn't Match Dad's'. ALWAYS use absolute paths; cron has a minimal $PATH.",
    "outputExample": "$ crontab -l\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n30 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash27",
    "question": "You want a health check script to run every 15 minutes but must ensure two instances never overlap if the script takes too long. What crontab line uses flock to prevent overlap?",
    "answer": "*/15 * * * * /usr/bin/flock -n /var/lock/healthcheck.lock /opt/healthcheck.sh >> /var/log/healthcheck.log 2>&1",
    "explanation": "The */15 syntax means every 15 minutes. Wrapping the script with flock means the second instance will skip itself immediately if the first one is still running, preventing them from running at the same time and potentially corrupting shared state.",
    "usage": "Run a cron job every 15 minutes with overlap prevention using an exclusive file lock.",
    "examples": [
      "*/15 * * * * /usr/bin/flock -n /var/lock/healthcheck.lock /opt/healthcheck.sh >/dev/null 2>&1",
      "*/2 * * * * /opt/sync.sh  # every 2 minutes (no lock)",
      "0 */6 * * * /opt/longjob.sh  # every 6 hours on the hour",
      "*/5 9-17 * * 1-5 /opt/poll.sh  # every 5 min during weekday work hours"
    ],
    "memoryTip": "`*/N` = every N units. `flock -n LOCKFILE CMD` = skip if already running. Silence frequent jobs with `>/dev/null 2>&1`. For sub-minute scheduling, use systemd timers.",
    "outputExample": "$ crontab -l\n*/15 * * * * /usr/bin/flock -n /var/lock/hc.lock /opt/healthcheck.sh >> /var/log/hc.log 2>&1\n$ tail /var/log/hc.log\n[2026-05-17 09:15:01] OK\n[2026-05-17 09:30:01] OK",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash28",
    "question": "You need to keep /var/www/html/ on web1.example.com synchronized with your local ./site/ directory, deleting remote files that no longer exist locally, but want to preview first. How do you dry-run then apply?",
    "answer": "rsync -avz --dry-run --delete ./site/ alice@web1.example.com:/var/www/html/ && rsync -avz --delete ./site/ alice@web1.example.com:/var/www/html/",
    "explanation": "rsync is a smarter file copy tool that only transfers files that have changed. The --delete flag makes the destination exactly mirror the source by removing any extra files. The --dry-run flag lets you preview what would happen without actually making any changes.",
    "usage": "Synchronize a local directory to a remote host, deleting files removed at the source, with dry-run preview.",
    "examples": [
      "rsync -avz --dry-run --delete ./site/ alice@web1.example.com:/var/www/html/  # preview",
      "rsync -avz --delete ./site/ alice@web1.example.com:/var/www/html/  # apply",
      "rsync -avzP --exclude '*.log' --exclude 'node_modules' src/ host:/dst/",
      "rsync -avz -e 'ssh -p 2222 -i ~/.ssh/deploy.pem' src/ deploy@host:/srv/app/"
    ],
    "memoryTip": "`-a archive, -v verbose, -z compress, --delete mirror, -P progress`. TRAILING SLASH on src/ = 'contents of src'. ALWAYS `--dry-run` before `--delete`.",
    "outputExample": "$ rsync -avz --dry-run --delete ./site/ alice@web1.example.com:/var/www/html/\nsending incremental file list\nindex.html\ndeleting old-page.html\n(DRY RUN)\n$ rsync -avz --delete ./site/ alice@web1.example.com:/var/www/html/\nsent 8,193 bytes  received 87 bytes",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash29",
    "question": "Your script needs to handle both --file path/to/file and --verbose long flags. What loop pattern consumes arguments one at a time while supporting these long flags?",
    "answer": "while [[ $# -gt 0 ]]; do case \"$1\" in --file) file=\"$2\"; shift 2 ;; --verbose) verbose=1; shift ;; *) shift ;; esac; done",
    "explanation": "This loop reads command-line arguments one at a time, matches each against known flag names, and advances past them. It handles both flags with values (like --file which needs the next argument) and boolean flags (like --verbose which stands alone).",
    "usage": "Parse long command-line flags by consuming arguments one at a time in a while loop.",
    "examples": [
      "while [[ $# -gt 0 ]]; do\n  case \"$1\" in\n    --file) file=\"$2\"; shift 2 ;;\n    --verbose) verbose=1; shift ;;\n    --file=*) file=\"${1#--file=}\"; shift ;;\n    --) shift; break ;;\n    -*) echo \"unknown: $1\" >&2; exit 1 ;;\n    *) positional+=(\"$1\"); shift ;;\n  esac\ndone",
      "for arg in \"$@\"; do echo \"arg=$arg\"; done  # read-only iteration without consuming"
    ],
    "memoryTip": "`$#` count, `$1` next, `shift` consume one, `shift 2` consume flag+value. Always quote `\"$1\"`. Combine with `case` for routing. Handles long flags unlike `getopts`.",
    "outputExample": "$ ./parse.sh --file /etc/nginx/nginx.conf --verbose extra\nfile=/etc/nginx/nginx.conf verbose=1 remaining=extra",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash30",
    "question": "A nightly backup cron job runs silently and you want to see its start and finish events in the system journal alongside other service logs. What command writes a tagged message to the journal?",
    "answer": "logger -t mybackup -p user.notice 'backup completed in 142s'",
    "explanation": "This command writes a single message to the system log — the same place where all your services write their logs. Adding a tag makes all your script's messages easily searchable later. It is the shell equivalent of writing to a log file, but integrated with the system's unified logging infrastructure.",
    "usage": "Write a tagged, priority-labeled message to the system journal from a shell script or cron job.",
    "examples": [
      "logger -t mybackup -p user.notice 'backup started'",
      "logger -t mybackup -p user.notice 'backup completed in 142s, 1247 files'",
      "some_cmd 2>&1 | logger -t mycron  # pipe command output into journal",
      "journalctl -t mybackup --since today  # read back your script's events"
    ],
    "memoryTip": "`logger MSG` writes one line to journal/syslog. `-t TAG` for greppability, `-p FAC.SEV` for priority. Read back with `journalctl -t TAG`.",
    "outputExample": "$ logger -t mybackup -p user.notice 'backup started'\n$ logger -t mybackup -p user.notice 'backup completed'\n$ journalctl -t mybackup --since today\nMay 17 02:30:00 web1 mybackup[18234]: backup started\nMay 17 02:32:22 web1 mybackup[18234]: backup completed",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "arch8",
    "question": "You need to compress a 2.4 GB SQL dump at /var/backups/db.sql to the smallest possible size for long-term cold storage and disk space is tight. Which compression tool typically produces the smallest output?",
    "answer": "xz /var/backups/db.sql",
    "explanation": "The xz tool uses a more powerful compression algorithm than gzip or bzip2, producing files that are typically 25-30% smaller on text data like SQL dumps. The trade-off is that it is slower and uses more memory during compression.",
    "usage": "Compress a file to the smallest possible size using the xz algorithm, replacing the original.",
    "examples": [
      "xz /var/backups/db.sql  # db.sql → db.sql.xz, original removed",
      "xz -k /var/backups/db.sql  # keep both db.sql and db.sql.xz",
      "xz -9 -T0 /var/backups/db.sql  # max compression, all CPU threads",
      "xz -c /var/backups/db.sql > /var/backups/db.sql.xz  # stdout mode, keep original",
      "tar -cJf /var/backups/db.tar.xz /var/backups/  # tar+xz a directory"
    ],
    "memoryTip": "`xz` = the tightest of gzip/bzip2/xz. Same `-k` rule to keep original. `-T0` to parallelize. Capital J in tar for xz.",
    "outputExample": "$ ls -lh /var/backups/db.sql\n-rw-r--r-- 1 alice alice 2.4G May 17 11:00 /var/backups/db.sql\n$ xz -T0 /var/backups/db.sql\n$ ls -lh /var/backups/db.sql.xz\n-rw-r--r-- 1 alice alice 142M May 17 11:02 /var/backups/db.sql.xz",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch9",
    "question": "You received a compressed SQL dump at /tmp/db.sql.xz and need to restore it to the database. Which command decompresses it back to the original file?",
    "answer": "unxz /tmp/db.sql.xz",
    "explanation": "This command is the reverse of xz — it decompresses an .xz file back to its original contents. Like its companion xz, it replaces the compressed file with the decompressed one by default.",
    "usage": "Decompress an .xz file, replacing it with the original uncompressed file.",
    "examples": [
      "unxz /tmp/db.sql.xz  # db.sql.xz → db.sql, original removed",
      "unxz -k /tmp/db.sql.xz  # keep both files",
      "xz -d /tmp/db.sql.xz  # exactly the same as unxz",
      "xzcat /var/log/old.log.xz | grep ERROR  # peek without writing to disk",
      "tar -xJf /tmp/linux-6.8.tar.xz  # one step: decompress + untar"
    ],
    "memoryTip": "`unxz` = UN-xz (undo xz). Equivalent: `xz -d`. Stream without touching disk: `xzcat`. For tar.xz: use `tar -xJf`.",
    "outputExample": "$ ls -lh /tmp/db.sql.xz\n-rw-r--r-- 1 alice alice 18M May 17 11:30 /tmp/db.sql.xz\n$ unxz /tmp/db.sql.xz\n$ ls -lh /tmp/db.sql\n-rw-r--r-- 1 alice alice 142M May 17 11:30 /tmp/db.sql",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch10",
    "question": "You need to ship a tarball of your project source code that produces the smallest possible download for a public release page. Which tar command uses xz compression?",
    "answer": "tar -cJf project-v1.0.tar.xz project/",
    "explanation": "This command bundles an entire directory into a single compressed file using xz — the algorithm that produces the smallest archives. The capital J is the critical flag that tells tar to use xz instead of gzip.",
    "usage": "Create an xz-compressed tarball of a directory for maximum compression in a release archive.",
    "examples": [
      "tar -cJf project-v1.0.tar.xz project/",
      "tar -cvJf project-v1.0.tar.xz project/  # verbose: print filenames",
      "XZ_OPT='-9 -T0' tar -cJf project.tar.xz project/  # max compression, all cores",
      "tar -cJf - project/ | ssh host 'cat > /backups/project.tar.xz'  # stream to remote",
      "tar -cJf src.tar.xz --exclude='*.pyc' project/  # skip compiled files"
    ],
    "memoryTip": "Capital `J` = xz. Compression letters: `z`=gzip, lowercase `j`=bzip2, capital `J`=xz. Combine with `XZ_OPT=-T0` for parallel speed.",
    "outputExample": "$ tar -cJf project-v1.0.tar.xz project/\n$ ls -lh project-v1.0.tar.xz\n-rw-r--r-- 1 alice alice 8.4K May 17 12:00 project-v1.0.tar.xz\n$ tar -tJf project-v1.0.tar.xz | head -3\nproject/\nproject/README.md\nproject/src/main.py",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch11",
    "question": "You downloaded an unfamiliar tarball at /tmp/vendor.tar.gz from the internet. Before extracting it, you want to check whether it has a top-level directory or will scatter files into your current directory. Which command lists its contents?",
    "answer": "tar -tf /tmp/vendor.tar.gz",
    "explanation": "This command lists every file inside an archive without extracting anything to disk. Use it to preview what you're about to unpack — specifically to check whether all files are inside a top-level folder or whether they'll scatter loose files into your current directory.",
    "usage": "List the contents of a tarball without extracting it, to audit structure before unpacking.",
    "examples": [
      "tar -tf /tmp/vendor.tar.gz  # bare list of paths",
      "tar -tvf /tmp/vendor.tar.gz | head  # long listing with sizes/perms",
      "tar -tf /tmp/vendor.tar.gz | wc -l  # count files",
      "tar -tf /var/backups/etc.tar.gz | grep nginx.conf  # is this file inside?"
    ],
    "memoryTip": "`-t` = Table of contents. Preview unknown archives with `-tvf` before extracting. Auto-detects compression.",
    "outputExample": "$ tar -tvf /tmp/vendor.tar.gz | head -5\ndrwxr-xr-x alice/alice    0 2026-05-17 12:00 vendor-1.2/\n-rw-r--r-- alice/alice 1024 2026-05-17 12:00 vendor-1.2/README.md\n-rw-r--r-- alice/alice 4096 2026-05-17 12:00 vendor-1.2/lib/main.py",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch12",
    "question": "You want to extract the contents of /tmp/release.tar.gz into /opt/staging rather than your current directory. Which tar flag changes the extraction target directory?",
    "answer": "tar -xzf /tmp/release.tar.gz -C /opt/staging",
    "explanation": "By default tar extracts into the current directory. This flag tells tar to change to a different directory first before extracting, so the files land exactly where you want them without having to cd first.",
    "usage": "Extract a tarball into a specific target directory rather than the current working directory.",
    "examples": [
      "mkdir -p /opt/staging && tar -xzf /tmp/release.tar.gz -C /opt/staging",
      "tar -xJf /tmp/linux-6.8.tar.xz -C ~/src  # extract xz tarball into ~/src",
      "tar -xzf /tmp/release.tar.gz -C /tmp/staging etc/nginx/nginx.conf  # one file, specific dir",
      "tar -tf /tmp/unknown.tar.gz | head -3  # ALWAYS preview before extracting"
    ],
    "memoryTip": "`-C DIR` = Change directory before doing the operation. Target dir must EXIST. Safe extract idiom: `mkdir -p target && tar -xzf foo.tgz -C target`.",
    "outputExample": "$ mkdir -p /opt/staging\n$ tar -xzf /tmp/release.tar.gz -C /opt/staging\n$ ls /opt/staging\nproject/\n$ ls /opt/staging/project/\nREADME.md  src/  tests/",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch13",
    "question": "A 10 GB backup tarball at /var/backups/full.tar.gz contains the file etc/nginx/nginx.conf somewhere inside it. You need only that one file without extracting everything. How do you extract just that one path?",
    "answer": "tar -xzf /var/backups/full.tar.gz etc/nginx/nginx.conf",
    "explanation": "You can extract a single file from a large archive by specifying its path inside the archive as an argument to tar. This avoids writing several gigabytes to disk just to recover one configuration file.",
    "usage": "Extract a single named file from a large tarball without decompressing the entire archive.",
    "examples": [
      "tar -tf /var/backups/full.tar.gz | grep nginx.conf  # find exact path first",
      "tar -xzf /var/backups/full.tar.gz etc/nginx/nginx.conf  # extract it",
      "tar --wildcards -xzf /var/backups/full.tar.gz '*.yml'  # glob match",
      "tar -xzf /var/backups/full.tar.gz -C /tmp etc/nginx/nginx.conf  # extract into /tmp",
      "tar -xzOf /var/backups/full.tar.gz etc/nginx/nginx.conf | less  # view without writing"
    ],
    "memoryTip": "Append the archive-INTERNAL path as args to extract only those. Find the exact path first with `tar -tf | grep`. `-O` extracts to stdout.",
    "outputExample": "$ tar -tf /var/backups/full.tar.gz | grep nginx.conf\netc/nginx/nginx.conf\n$ tar -xzf /var/backups/full.tar.gz etc/nginx/nginx.conf\n$ ls etc/nginx/\nnginx.conf",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch14",
    "question": "You need to send a project directory to a Windows colleague who will open it on their PC. Which command creates a .zip archive that any operating system can open natively?",
    "answer": "zip -r project.zip project/",
    "explanation": "The zip format is the universal archive that Windows, macOS, mobile devices, and email clients can all open without installing extra software. The -r flag is required to include the contents of directories — without it, only empty directories are stored.",
    "usage": "Create a universally-compatible .zip archive of a directory for cross-platform file sharing.",
    "examples": [
      "zip -r project.zip project/  # the everyday recursive zip",
      "zip -9 -r tight.zip project/  # maximum compression",
      "zip -er secret.zip secrets/  # password-protected",
      "zip -r src.zip src/ -x 'src/node_modules/*' '*.log'  # exclude patterns",
      "zip -j flat.zip docs/*.pdf  # flat: just filenames, no directory structure"
    ],
    "memoryTip": "`-r` recursive (required for directories!). `-9` max compression. `-x 'PAT'` exclude. For Linux→Linux, prefer `tar -czf`. For cross-platform, prefer `.zip`.",
    "outputExample": "$ zip -r project.zip project/\n  adding: project/ (stored 0%)\n  adding: project/README.md (deflated 32%)\n  adding: project/src/main.py (deflated 65%)\n$ ls -lh project.zip\n-rw-r--r-- 1 alice alice 8.4K May 17 11:42 project.zip",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch15",
    "question": "You received project.zip from a colleague and need to extract it into /tmp/review rather than your current directory. Which unzip command extracts to a specific target?",
    "answer": "unzip project.zip -d /tmp/review",
    "explanation": "This command opens a .zip archive and extracts its contents into a specific directory. The -d flag (not -C like tar uses) tells it where to put the files. Always preview the archive first to avoid accidentally scattering files into an unexpected location.",
    "usage": "Extract a .zip archive into a specific target directory rather than the current working directory.",
    "examples": [
      "unzip project.zip -d /tmp/review  # extract into /tmp/review",
      "unzip project.zip  # extract into cwd",
      "unzip -l project.zip  # list contents WITHOUT extracting",
      "unzip -o project.zip -d /tmp/review  # overwrite without prompts",
      "unzip -j project.zip -d ~/Documents  # junk paths — extract files flat"
    ],
    "memoryTip": "`unzip foo.zip -d TARGET` extract elsewhere. `-l` LIST. `-o` overwrite, `-n` never overwrite, `-j` flat extract. Note: it's `-d`, NOT `-C` like tar.",
    "outputExample": "$ unzip -l project.zip\n  Length   Date    Time    Name\n      1024  2026-05-17 11:30   project/README.md\n      4096  2026-05-17 11:30   project/src/main.py\n$ unzip project.zip -d /tmp/review\ncreating: /tmp/review/project/\ninflating: /tmp/review/project/README.md\ninflating: /tmp/review/project/src/main.py",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch16",
    "question": "You need to create an encrypted archive of a confidential directory where even the filenames inside are hidden from anyone without the password. Which tool supports filename encryption?",
    "answer": "7z a -p -mhe=on secret.7z private/",
    "explanation": "This command creates an encrypted archive where both the file contents and the filenames are protected by a password. Without the password, an attacker cannot even see what files are inside. The standard zip encryption is much weaker — 7z with its native format provides real security.",
    "usage": "Create a 7z archive with AES-256 encryption that hides both file contents and filenames.",
    "examples": [
      "7z a -p -mhe=on secret.7z private/  # encrypted with hidden filenames",
      "7z a -mx=9 tight.7z bigdir/  # maximum compression, no encryption",
      "7z x secret.7z  # extract with path preservation",
      "7z l secret.7z  # list contents",
      "7z t secret.7z  # test archive integrity"
    ],
    "memoryTip": "Verbs: `a` add, `x` extract, `l` list, `t` test. `-p` password, `-mhe=on` hide filenames. For Linux backups, prefer `tar` (7z doesn't preserve Unix perms).",
    "outputExample": "$ 7z a -p -mhe=on secret.7z private/\nEnter password:\nVerify password:\nEverything is Ok\nArchive size: 142836 bytes\n$ 7z l secret.7z\nEnter password:\n   Date      Time  Name\n2026-05-17 11:30  private/README.md",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch17",
    "question": "A rotated log at /var/log/nginx/access.log.1.gz is taking up disk space. You want to count how many lines it contains without decompressing it to disk first. What command does this?",
    "answer": "zcat /var/log/nginx/access.log.1.gz | wc -l",
    "explanation": "zcat decompresses a .gz file and streams the output to your terminal — or in this case, into a pipe. Combining it with wc -l counts the lines without ever writing the uncompressed version to disk, saving both time and disk space.",
    "usage": "Read a gzipped file and stream its decompressed content to stdout for piping, without writing to disk.",
    "examples": [
      "zcat /var/log/nginx/access.log.1.gz | wc -l  # line count without decompressing",
      "zcat /var/log/nginx/access.log.1.gz | head -50  # first 50 lines",
      "zcat *.log.gz | grep -i error  # search across many gzipped logs",
      "zless /var/log/syslog.1.gz  # interactive pager for .gz",
      "xzcat /var/log/audit/audit.log.xz | grep DENIED  # .xz equivalent"
    ],
    "memoryTip": "z-family: `zcat`/`zless`/`zgrep`/`zdiff` for `.gz`. xz-family for `.xz`, bz-family for `.bz2`. All decompress on the fly, no temp file.",
    "outputExample": "$ ls -lh /var/log/nginx/access.log.1.gz\n-rw-r----- 1 www-data adm 412K May 16 06:25 access.log.1.gz\n$ zcat /var/log/nginx/access.log.1.gz | wc -l\n42103\n$ zcat /var/log/nginx/access.log.1.gz | head -3\n10.0.0.5 - - [16/May/2026:00:00:01 +0000] \"GET / HTTP/1.1\" 200 612",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch18",
    "question": "You want to search for 'permission denied' errors across all rotated nginx error logs at /var/log/nginx/error.log.*.gz without decompressing them. Which command searches inside .gz files?",
    "answer": "zgrep -i 'permission denied' /var/log/nginx/error.log.*.gz",
    "explanation": "zgrep does what grep does, but it decompresses .gz files on the fly first so you never have to unpack them to disk. All the usual grep flags work — case-insensitive search, line counts, context lines, and more.",
    "usage": "Search inside gzipped log files with grep semantics, without decompressing to disk.",
    "examples": [
      "zgrep -i 'permission denied' /var/log/nginx/error.log.*.gz",
      "zgrep -c failed /var/log/auth.log.*.gz  # count failures per file",
      "zgrep -l 'OutOfMemory' /var/log/*.gz  # filenames only",
      "zgrep -C 3 'segfault' /var/log/kern.log.*.gz  # 3 lines of context",
      "rg --search-zip 'permission denied' /var/log/nginx/  # modern faster alternative"
    ],
    "memoryTip": "`zgrep` = grep on `.gz`. `xzgrep` for `.xz`, `bzgrep` for `.bz2`. All grep flags work. Search rotated logs: `zgrep PATTERN /var/log/syslog*.gz`.",
    "outputExample": "$ zgrep -c 'permission denied' /var/log/nginx/error.log.*.gz\n/var/log/nginx/error.log.1.gz:42\n/var/log/nginx/error.log.2.gz:38\n$ zgrep -i 'permission denied' /var/log/nginx/error.log.1.gz | head -3\n2026/05/16 10:12:33 [error] 1234#0: open() '/var/www/private' failed (13: Permission denied)",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch19",
    "question": "You are creating a tarball of a Node.js project but want to exclude the node_modules directory and all .log files. Which tar command uses --exclude to skip these patterns?",
    "answer": "tar --exclude='node_modules' --exclude='*.log' -czf project.tar.gz project/",
    "explanation": "The --exclude flag tells tar to skip any file or directory matching a pattern. You can stack multiple --exclude flags for multiple patterns. The patterns must come BEFORE the source directory in the command.",
    "usage": "Create a tarball while excluding specific directories and file patterns from the archive.",
    "examples": [
      "tar --exclude='node_modules' --exclude='*.log' -czf project.tar.gz project/",
      "tar --exclude-from=.tarignore -czf release.tar.gz project/  # patterns in a file",
      "tar --exclude-vcs -czf src.tar.gz src/  # auto-skip .git, .svn, etc.",
      "tar --exclude='build/*' --exclude='dist/*' -czf project.tar.gz project/",
      "tar -tzf project.tar.gz | grep node_modules | wc -l  # verify (should be 0)"
    ],
    "memoryTip": "`--exclude='PAT'` (QUOTE it!) before the source dir. `--exclude-vcs` skips all VCS dirs. Always verify with `tar -tzf | grep PAT`.",
    "outputExample": "$ tar --exclude='node_modules' --exclude='*.log' --exclude-vcs -czf project.tar.gz project/\n$ tar -tzf project.tar.gz | grep -E '(node_modules|\\.git)' | wc -l\n0\n$ tar -tzf project.tar.gz | wc -l\n42",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch20",
    "question": "You need to gzip a 4 GB log file for archiving and the default single-threaded gzip is too slow on this 16-core server. Which drop-in replacement uses all CPU cores and produces standard .gz output?",
    "answer": "pigz /var/log/myapp/app.log",
    "explanation": "pigz is a parallelized version of gzip that uses all available CPU cores simultaneously, making compression several times faster on modern multi-core servers. The output is a standard .gz file that any other tool can decompress normally.",
    "usage": "Compress a large file using all CPU cores to produce a standard .gz file much faster than single-threaded gzip.",
    "examples": [
      "pigz /var/log/myapp/app.log  # all cores, produces app.log.gz",
      "pigz -k -p 8 /var/log/myapp/app.log  # keep original, use 8 threads",
      "tar -I pigz -cf backup.tar.gz /var/www/  # tar + parallel gzip",
      "tar -c /var/www/ | pigz > backup.tar.gz  # same via pipe",
      "zstd -T0 /var/log/myapp/app.log  # modern alternative — faster AND often smaller"
    ],
    "memoryTip": "`pigz` = Parallel gzip — multi-core, output is standard `.gz`. Same flags as gzip (`-k`, `-9`, `-d`). Tar integration: `tar -I pigz -cf ...`. Modern even-better alt: `zstd -T0`.",
    "outputExample": "$ time gzip -k /var/log/myapp/app.log\nreal    0m38s\n$ time pigz -k /var/log/myapp/app.log\nreal    0m06s  # ~6x faster on 8-core box\n$ ls -lh /var/log/myapp/app.log.gz  # compatible with normal gunzip\n-rw-r--r-- 1 alice alice 412M May 17 12:00 app.log.gz",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "daily41",
    "question": "You remember running a complicated ssh port-forwarding command earlier in the day but don't want to retype it. What keyboard shortcut opens an interactive incremental search through your command history?",
    "answer": "Ctrl+R",
    "explanation": "Pressing this key combination puts the shell into a live search mode where each character you type immediately narrows down to the most recent command in your history that contains what you've typed so far. It is far faster than pressing the up-arrow key dozens of times.",
    "usage": "Search command history incrementally by typing a substring, faster than pressing up-arrow repeatedly.",
    "examples": [
      "Ctrl+R  # then type 'ssh' — highlights most recent ssh command",
      "Ctrl+R again  # step to next-older match",
      "Esc or arrow key  # put command on prompt for editing",
      "Ctrl+G  # cancel search",
      "history | grep ssh  # non-interactive alternative"
    ],
    "memoryTip": "Ctrl+R = Reverse search. Type to narrow, Ctrl+R again for older, Enter to run, Esc to edit, Ctrl+G to cancel. Works in bash + zsh + most REPLs.",
    "outputExample": "$ # press Ctrl+R, type 'ssh'\n(reverse-i-search)`ssh': ssh -L 8080:10.10.5.20:80 alice@gateway.example.com\n# press Enter to run or Esc to edit",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily42",
    "question": "You just ran 'ls /var/log/nginx/' and now want to 'cd' into that same directory without retyping the path. What history expansion reuses the last argument of the previous command?",
    "answer": "cd !$",
    "explanation": "After any command, !$ expands to the last argument of that previous command. So if you just listed a directory, you can immediately cd into it without retyping the path. Bash shows you what it expanded to before running it.",
    "usage": "Reuse the last argument of the previous command to avoid retyping long paths.",
    "examples": [
      "ls /var/log/nginx\ncd !$  # cd /var/log/nginx",
      "mkdir /tmp/new/deep && cd !$",
      "vim /etc/nginx/nginx.conf\nsudo cp !$ !$.bak  # backup the same file",
      "Alt+.  # interactive: insert last arg at cursor (repeat to cycle older)"
    ],
    "memoryTip": "`!$` last arg. `!^` first arg. `!*` all args. Interactive alternative: `Alt+.` inserts last arg at cursor — friendlier because you see it before running.",
    "outputExample": "$ ls /var/log/nginx\naccess.log  error.log\n$ cd !$\ncd /var/log/nginx\n$ pwd\n/var/log/nginx",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily43",
    "question": "You are on a screen share and just ran a command that printed sensitive output. You want to clear the visible screen without losing what you typed so far at the prompt. Which key combination does this?",
    "answer": "Ctrl+L",
    "explanation": "Pressing this clears the visible terminal screen and redraws your prompt at the top, but keeps your scrollback buffer intact and preserves any text you had already typed at the prompt. It is faster and more targeted than the 'clear' command.",
    "usage": "Clear the visible terminal screen while preserving scrollback history and any typed command text.",
    "examples": [
      "Ctrl+L  # clear visible screen (keep scrollback + typed text)",
      "clear  # command form — only works at empty prompt",
      "reset  # full terminal reset (after binary got cat'd into terminal)"
    ],
    "memoryTip": "Ctrl+L = clear visible screen, keep scrollback and typed text. `clear` is similar but slower. `reset` for mangled terminals.",
    "outputExample": "$ ls /var/log\nnginx  syslog  auth.log\n$ echo 'partial'  # type something\n# press Ctrl+L — screen clears, 'partial' command still at prompt\n$ echo 'partial'",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily44",
    "question": "You typed a long apt command and realized you forgot 'sudo' at the very beginning. Instead of re-typing the whole command, which readline shortcut jumps the cursor to the start of the line?",
    "answer": "Ctrl+A",
    "explanation": "Pressing Ctrl+A jumps the cursor to the very beginning of what you've typed. You can then type 'sudo ' and press Ctrl+E to jump to the end, or just press Enter if you're already done editing. The symmetric shortcut Ctrl+E jumps to the end.",
    "usage": "Jump the cursor to the very beginning of the current command line instantly.",
    "examples": [
      "Ctrl+A  # cursor to start",
      "Ctrl+E  # cursor to end",
      "Alt+B  # back one word",
      "Alt+F  # forward one word",
      "Ctrl+U  # erase from cursor to start of line",
      "Ctrl+K  # erase from cursor to end of line"
    ],
    "memoryTip": "Ctrl+A = beginning (Alpha), Ctrl+E = End. By WORD: Alt+B/Alt+F. ERASE: Ctrl+U (to start), Ctrl+K (to end), Ctrl+W (one word back). PASTE killed text: Ctrl+Y.",
    "outputExample": "$ apt update && apt upgrade -y  # forgot sudo — cursor is at end\n# press Ctrl+A — cursor jumps to before 'apt'\n# type 'sudo '\n$ sudo apt update && apt upgrade -y",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily45",
    "question": "You need a command to check disk space but can't remember its name — you only know it reports 'filesystem disk usage'. Which command searches man-page descriptions for a keyword?",
    "answer": "apropos 'disk usage'",
    "explanation": "This command searches the short description lines of every installed man page for your keyword. It answers the question \"I know what I want to do — which command does it?\" and shows you a list of matching tools you might not have known existed.",
    "usage": "Search man-page descriptions by topic keyword to find the command name for a task.",
    "examples": [
      "apropos 'disk usage'  # find disk usage tools",
      "apropos compress  # find compression tools",
      "man -k regex  # identical to apropos regex",
      "whatis df  # one-line summary of a specific command",
      "sudo mandb  # rebuild the apropos database if results seem missing"
    ],
    "memoryTip": "`apropos KEYWORD` = `man -k KEYWORD`. `whatis CMD` = `man -f CMD` = one-line summary. If 'nothing appropriate', run `sudo mandb`.",
    "outputExample": "$ apropos 'disk usage'\ndf (1)               - report file system disk space usage\ndu (1)               - estimate file space usage\nncdu (1)             - NCurses Disk Usage",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily46",
    "question": "Before your deployment script runs rsync, it needs to verify that rsync is installed and exit with an error if not. Which POSIX-portable command checks whether a command exists?",
    "answer": "command -v rsync >/dev/null || { echo 'install rsync first' >&2; exit 1; }",
    "explanation": "This check tests whether a command exists on the system before trying to use it. It is the standard portable way to do this in shell scripts — unlike 'which', it works consistently across all shells and also detects shell functions and aliases.",
    "usage": "Check whether a command is installed in a portable, script-safe way that works in all shells.",
    "examples": [
      "command -v rsync >/dev/null || { echo 'install rsync first' >&2; exit 1; }",
      "command -v git >/dev/null || { echo 'install git first' >&2; exit 1; }",
      "if command -v nvim >/dev/null; then EDITOR=nvim; else EDITOR=vim; fi",
      "for c in jq curl git; do command -v $c >/dev/null || echo \"missing: $c\"; done"
    ],
    "memoryTip": "`command -v CMD` = POSIX-portable tool check. Exit 0 if exists. `which` is quirky, avoid in scripts. `command CMD` also bypasses aliases — useful escape hatch.",
    "outputExample": "$ command -v rsync\n/usr/bin/rsync\n$ command -v nonexistent; echo $?\n1\n$ command -v git >/dev/null && echo installed || echo missing\ninstalled",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily47",
    "question": "Kubernetes pods are being deployed and you want to watch them transition through Pending → Running status with the display updating every second. Which command re-runs a command on an interval?",
    "answer": "watch -n 1 'kubectl get pods'",
    "explanation": "The watch command re-runs any command repeatedly on a timer and updates the display in place, turning a one-shot command into a live dashboard. The -n flag sets how often to refresh in seconds.",
    "usage": "Run a command on a timer and display its refreshing output as a live dashboard.",
    "examples": [
      "watch -n 1 'kubectl get pods'  # refresh every second",
      "watch -d -n 5 'free -h'  # memory snapshot every 5s with diffs highlighted",
      "watch -c 'systemctl status nginx'  # keep ANSI colors",
      "watch -g 'curl -s -o /dev/null -w \"%{http_code}\" http://localhost'  # exit when code changes",
      "watch 'ls -lt /var/log/ | head -10'  # newest logs, top 10"
    ],
    "memoryTip": "`watch -n SECONDS 'cmd'` = re-run on a clock. `-d` diffs, `-c` colors, `-t` no header, `-g` exit on change. ALWAYS quote the command. Stop with Ctrl-C.",
    "outputExample": "$ watch -n 1 -d 'kubectl get pods'\nNAME             READY   STATUS    RESTARTS   AGE\napp-7d9b6-xk2p   0/1     Pending   0          3s\n# (one second later, 'Pending' highlighted as it changes to 'Running')",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily48",
    "question": "You are writing a 4 GB database dump to a USB drive with 'dd' and have no idea if it's progressing or how long it will take. What tool can you insert into the pipe to show throughput and ETA?",
    "answer": "pv /var/backups/db.sql | dd of=/dev/sdb bs=4M",
    "explanation": "pv (pipe viewer) sits inside a Unix pipe and shows you a live progress bar, current transfer speed, and estimated time to completion while passing all the data through unchanged. It transforms a silent, opaque operation into one you can monitor.",
    "usage": "Insert into any pipe to show live throughput, transfer progress, and estimated completion time.",
    "examples": [
      "pv /var/backups/db.sql | dd of=/dev/sdb bs=4M  # progress for dd",
      "pv -s 4G < /dev/zero > /tmp/big.bin  # known size for percentage",
      "pv -L 1M < /var/backups/db.sql > /tmp/copy  # throttle to 1 MB/s",
      "tar -czf - /var/www/ | pv | ssh alice@backup 'cat > www.tgz'  # progress mid-ssh"
    ],
    "memoryTip": "`pv` = Pipe Viewer. Drop into any pipeline for throughput + ETA. `-s SIZE` for percentage, `-L RATE` to throttle, `-N NAME` to label. Install with `apt install pv`.",
    "outputExample": "$ pv /var/backups/db.sql > /dev/null\n 1.34GiB 0:00:08 [ 168MiB/s] [=================>      ] 62% ETA 0:00:05",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily49",
    "question": "Your root filesystem is almost full and you need to find which directories under /var are consuming the most space, sorted from smallest to largest. Which command shows this?",
    "answer": "sudo du -sh /var/* 2>/dev/null | sort -h",
    "explanation": "This command calculates how much disk space each item in a directory uses and sorts them from smallest to largest. The human-readable flag makes sizes show as megabytes and gigabytes rather than raw bytes, and sort understands those unit suffixes.",
    "usage": "Show disk usage for each item in a directory sorted by size, with human-readable units.",
    "examples": [
      "sudo du -sh /var/* 2>/dev/null | sort -h  # all of /var",
      "du -sh * | sort -h  # current directory",
      "du -sh * | sort -hr | head  # TOP 10 biggest (descending)",
      "sudo du -sh /var/log/* 2>/dev/null | sort -h | tail  # biggest under /var/log",
      "find . -type f -printf '%s %p\\n' | sort -rn | head -10  # biggest individual files"
    ],
    "memoryTip": "`du -sh * | sort -h` = disk-hog hunter. `-s` summary, `-h` human size. `sort -h` understands K/M/G. Modern interactive alt: `ncdu`.",
    "outputExample": "$ sudo du -sh /var/* 2>/dev/null | sort -h | tail -5\n96M\t/var/cache\n412M\t/var/lib\n1.8G\t/var/log\n4.2G\t/var/backups",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily50",
    "question": "You just typed a complex 300-character pipeline and realize there is a mistake in the middle. Instead of editing it character-by-character at the shell prompt, how do you open it in your $EDITOR for comfortable editing before running?",
    "answer": "fc (or history)",
    "explanation": "The fc command opens your most recent command in your text editor. You can fix typos, restructure the pipeline, and make any changes you want. When you save and exit the editor, the edited command runs automatically.",
    "usage": "Open the previous command in your text editor for comfortable multi-line editing before re-running.",
    "examples": [
      "fc  # edit last command in $EDITOR, run on save",
      "fc -l  # list last ~16 commands with line numbers",
      "fc 102  # edit command #102 only",
      "fc 100 105  # edit commands 100-105 as one block",
      "fc -s localhost=db.internal  # substitute + re-run (no editor)"
    ],
    "memoryTip": "`fc` = Fix Command. Opens last command in $EDITOR. `fc -l` = list. `fc N` = edit entry N. Interactive alternative: `Ctrl-X Ctrl-E` opens the current line while typing.",
    "outputExample": "$ fc\n# editor opens with last command\n# fix the mistake, save+quit\n# corrected command runs automatically\n$ fc -l -5\n  198  echo hello\n  199  ls\n  200  cd /etc/nginx\n  201  cat nginx.conf\n  202  fc",
    "category": "DAILY TIPS"
  },
  {
    "id": "rhel1",
    "question": "You just SSH'd into a fresh Fedora 40 server and need to install nginx. What dnf command installs it from the configured repositories?",
    "answer": "sudo dnf install nginx",
    "explanation": "This command downloads nginx and all its required dependencies from Fedora's package repositories and installs them. It shows you what it will install and asks for confirmation before making any changes.",
    "usage": "Install a package and all its dependencies from the configured dnf repositories on RHEL/Fedora.",
    "examples": [
      "sudo dnf install nginx  # interactive install with y/N prompt",
      "sudo dnf install -y vim git curl  # install three packages, no prompt",
      "sudo dnf install ./local-pkg.rpm  # install a downloaded RPM with dep resolution",
      "sudo dnf reinstall nginx  # reinstall to repair a broken/modified package"
    ],
    "memoryTip": "`dnf install` ~ `apt install`. Under dnf calls `rpm`, the way apt calls `dpkg`.",
    "outputExample": "$ sudo dnf install nginx\nDependencies resolved.\nInstalling:\n nginx  x86_64  1:1.24.0-1.fc40  fedora  34 k\nInstalling dependencies:\n nginx-core  x86_64  1:1.24.0-1.fc40  fedora  579 k\nIs this ok [y/N]: y\nComplete!",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel2",
    "question": "You decommissioned the Apache httpd service and want to uninstall it and clean up any packages that were only installed as its dependencies. What command removes it?",
    "answer": "sudo dnf remove httpd",
    "explanation": "This command uninstalls a package and also removes any dependency packages that were pulled in for it and are no longer needed by anything else. Unlike Debian's apt remove, dnf remove also deletes configuration files — it behaves like apt purge.",
    "usage": "Uninstall a package and its orphaned dependencies on RHEL/Fedora.",
    "examples": [
      "sudo dnf remove httpd  # remove httpd + any deps it uniquely needed",
      "sudo dnf remove -y old-pkg  # no prompt (for scripts)",
      "sudo dnf autoremove  # remove orphaned dependency packages",
      "sudo dnf history undo last  # oops — roll back the most recent remove"
    ],
    "memoryTip": "`dnf remove` = uninstall + auto-clean orphan deps. Unlike `apt remove`, dnf also removes configs (like `apt purge`).",
    "outputExample": "$ sudo dnf remove httpd\nRemoving:\n httpd  x86_64  2.4.59-1.fc40  @fedora  10 M\nRemoving unused dependencies:\n httpd-core  x86_64  ...\nIs this ok [y/N]: y\nComplete!",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel3",
    "question": "A Fedora server has been running for two months without updates. You want to upgrade every installed package to the newest available version in one command. What does this?",
    "answer": "sudo dnf upgrade",
    "explanation": "This command checks every installed package against the repository and downloads and installs all newer versions available. It handles kernels, security patches, and dependency updates in one pass.",
    "usage": "Upgrade all installed packages to their newest available versions on RHEL/Fedora.",
    "examples": [
      "sudo dnf upgrade  # interactive upgrade of every outdated package",
      "sudo dnf upgrade -y  # unattended (for scripts)",
      "sudo dnf upgrade --refresh  # force re-download of repo metadata first",
      "sudo dnf upgrade nginx  # upgrade just one package",
      "sudo dnf check-update  # dry-run: list what WOULD upgrade"
    ],
    "memoryTip": "`dnf upgrade` = the whole-system bump. Compare: `apt update && apt upgrade` is two steps; `dnf upgrade` does both. `check-update` is the safe dry-run.",
    "outputExample": "$ sudo dnf upgrade\nDependencies resolved.\nUpgrading:\n kernel-core  x86_64  6.8.9-300.fc40  updates  37 M\n openssl-libs  x86_64  3.2.2-1.fc40  updates  2.4 M\nTransaction Summary: Upgrade 4 Packages\nIs this ok [y/N]: y",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel4",
    "question": "You want to find packages related to markdown rendering in the Fedora repositories but don't know exact package names. What dnf command searches by keyword?",
    "answer": "dnf search markdown",
    "explanation": "This command searches package names and short descriptions in all enabled repositories for your keyword and shows you matching packages. It is how you discover what is available when you know what you need to do but not what the package is called.",
    "usage": "Search repository metadata for packages matching a keyword in their name or description.",
    "examples": [
      "dnf search markdown  # find markdown tools",
      "dnf search --all 'web server'  # also search long descriptions",
      "dnf search 'python3-flask*'  # glob — quote to prevent shell expansion",
      "dnf list 'python3-*' | head -20  # list by name pattern"
    ],
    "memoryTip": "`dnf search` reads NAME+SUMMARY. Add `--all` for full description. `dnf provides PATH` for file-to-package lookups.",
    "outputExample": "$ dnf search markdown\nName & Summary Matched: markdown\nmarkdown.noarch : Text-to-HTML conversion tool\ncmark.x86_64 : CommonMark parsing and rendering library\npython3-markdown.noarch : Python implementation of Markdown",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel5",
    "question": "Before installing a package called podman from the Fedora repos, you want to read its full description, version, license, and project URL. What command shows this metadata?",
    "answer": "dnf info podman",
    "explanation": "This command shows the full information sheet for a package before you install it — its version, architecture, size, license, project URL, and complete description. Use it to vet a package before committing to installing it.",
    "usage": "Display complete package metadata — version, description, license, and homepage — before installing.",
    "examples": [
      "dnf info podman  # full metadata",
      "dnf info --installed podman  # only the installed version",
      "dnf info --available podman  # only repo version",
      "rpm -qi podman  # local database only (no repo data)"
    ],
    "memoryTip": "`dnf info` ~ `apt show`. The 'man page' for a package — read before installing. `rpm -qi` for local database only.",
    "outputExample": "$ dnf info podman\nAvailable Packages\nName     : podman\nVersion  : 5.0.3\nRelease  : 1.fc40\nSize     : 14 M\nLicense  : Apache-2.0\nURL      : https://podman.io\nSummary  : Manage Pods, Containers and Container Images",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel6",
    "question": "Yesterday's dnf upgrade caused a service to break and you want to see what packages changed, and potentially undo just that transaction. What command shows the transaction history?",
    "answer": "dnf history",
    "explanation": "dnf keeps a numbered log of every installation, upgrade, and removal with the exact timestamp and what changed. You can inspect any transaction in detail and, crucially, undo a specific transaction to roll back changes it made.",
    "usage": "View and optionally undo past package installation, upgrade, and removal transactions.",
    "examples": [
      "dnf history  # full transaction list, newest first",
      "dnf history list nginx  # only transactions that touched nginx",
      "sudo dnf history info 44  # exact packages in transaction 44",
      "sudo dnf history undo 44  # reverse just transaction 44",
      "sudo dnf history undo last  # undo the most recent transaction"
    ],
    "memoryTip": "`dnf history` = the time machine for packages. `info` to inspect, `undo` to reverse one txn. No equivalent in stock `apt` — this is a real dnf advantage.",
    "outputExample": "$ dnf history\nID  | Command             | Date             | Action  | Altered\n44  | upgrade             | 2026-05-17 08:01 | Upgrade |    4\n43  | install nginx       | 2026-05-16 14:22 | Install |    3\n42  | remove httpd        | 2026-05-15 09:10 | Erase   |    1",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel7",
    "question": "A script failed with 'bash: jq: command not found' on a RHEL 8 server. You want to find which dnf package provides the /usr/bin/jq binary. What command does this repo-wide search?",
    "answer": "dnf provides /usr/bin/jq",
    "explanation": "This command searches all enabled repositories for any package that ships a file at a given path. It is how you translate 'command not found' into the package name you need to install — and it works even for packages not yet installed.",
    "usage": "Find which repository package ships a specific file path or binary on RHEL/Fedora.",
    "examples": [
      "dnf provides /usr/bin/jq  # find the jq package",
      "dnf provides '*/nginx.conf'  # glob search — quote it!",
      "dnf provides 'libssl.so.3()(64bit)'  # capability lookup",
      "rpm -qf /usr/bin/jq  # local-DB-only equivalent (only if already installed)"
    ],
    "memoryTip": "`dnf provides PATH` = 'who ships this?' across all repos. `rpm -qf PATH` = same but only for installed files. Debian equivalents: `apt-file search` / `dpkg -S`.",
    "outputExample": "$ dnf provides /usr/bin/jq\njq-1.7.1-3.fc40.x86_64 : Command-line JSON processor\nRepo     : fedora\nFilename : /usr/bin/jq",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel8",
    "question": "dnf is failing with 'Error: Failed to download metadata' after a recent repo URL change. What command wipes the stale cached metadata and forces a fresh download?",
    "answer": "sudo dnf clean all",
    "explanation": "dnf caches repository metadata and downloaded packages to speed up repeated operations. When this cache becomes stale or corrupted — especially after a repository URL change — cleaning it forces dnf to start fresh and re-download everything it needs.",
    "usage": "Wipe dnf's cached metadata and packages to force a fresh download from repositories.",
    "examples": [
      "sudo dnf clean all  # nuke metadata + packages",
      "sudo dnf clean metadata  # only repo metadata",
      "sudo dnf clean packages  # only downloaded .rpm files",
      "sudo dnf makecache  # re-warm the cache after a clean",
      "du -sh /var/cache/dnf  # check cache size"
    ],
    "memoryTip": "`dnf clean all` = forget everything. Pair with `dnf makecache` to immediately re-fetch. Debian equivalent: `sudo apt clean` + `sudo rm -rf /var/lib/apt/lists/*`.",
    "outputExample": "$ sudo dnf clean all\n47 files removed\n$ sudo dnf makecache\nFedora 40 - x86_64                  1.2 MB/s |  82 MB\nMetadata cache created.",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel9",
    "question": "You need to set up a C/C++ build environment on a fresh Fedora server with gcc, make, autoconf, and related tools. Instead of installing them one-by-one, what group install command installs the full development toolchain?",
    "answer": "sudo dnf group install \"Development Tools\"",
    "explanation": "dnf groups are named bundles of related packages. Installing a group installs a curated set of packages in one command — like a meta-package that brings in everything you need for a specific purpose such as a build environment or a desktop.",
    "usage": "Install a curated set of related packages in one command using a dnf group on RHEL/Fedora.",
    "examples": [
      "sudo dnf group install \"Development Tools\"  # full C/C++ build toolchain",
      "sudo dnf group install --with-optional \"Development Tools\"  # plus optional extras",
      "dnf group list  # see all available groups",
      "dnf group info \"Development Tools\"  # see exactly which packages are in the group",
      "sudo dnf group remove \"GNOME Desktop\"  # uninstall the whole group"
    ],
    "memoryTip": "Group = meta-package. Quote names with spaces. `info` to inspect, `install` to apply, `remove` to undo. Debian equivalent: `apt install build-essential` (single meta-package).",
    "outputExample": "$ sudo dnf group install \"Development Tools\"\nInstalling group/module packages:\n gcc  x86_64  14.0.1-0.16.fc40  updates  38 M\n make  x86_64  4.4.1-2.fc40  fedora  588 k\n autoconf  noarch  2.71-7.fc40  fedora  714 k\n...\nInstall  47 Packages\nIs this ok [y/N]: y",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel10",
    "question": "You want to generate a complete manifest of every installed package on an RHEL server to recreate the same environment on a new host. Which rpm command lists every installed package?",
    "answer": "rpm -qa",
    "explanation": "This command queries the local RPM database and prints the full name of every installed package — one per line, in name-epoch-version-release-architecture format. It is the fastest way to get a complete package inventory on a Red Hat-family system.",
    "usage": "List every installed package on a RHEL/Fedora system with full version information.",
    "examples": [
      "rpm -qa | sort  # alphabetical full list",
      "rpm -qa | wc -l  # how many packages are installed",
      "rpm -qa | grep -i nginx  # is nginx installed?",
      "rpm -qa --queryformat '%{NAME}\\n' | sort  # names only",
      "rpm -qa --last | head  # 10 most recently installed"
    ],
    "memoryTip": "`rpm -qa` = Query All. Build vocabulary: `-q` = query, `-a` = all, `-f FILE` = file owner, `-l PKG` = list files, `-i PKG` = info. Debian equivalent: `dpkg -l`.",
    "outputExample": "$ rpm -qa | head -5\nbasesystem-11-20.fc40.noarch\nglibc-2.39-7.fc40.x86_64\nbash-5.2.26-3.fc40.x86_64\nnginx-1.24.0-1.fc40.x86_64\n$ rpm -qa | wc -l\n812",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel11",
    "question": "A binary at /usr/bin/nc is behaving unexpectedly on an RHEL server and you want to know which package installed it so you know what to reinstall or investigate. What rpm command traces a file to its owner?",
    "answer": "rpm -qf /usr/bin/nc",
    "explanation": "This command asks the local RPM database which package owns a given file. You get the full package name back, which tells you what to investigate, reinstall, or file a bug against.",
    "usage": "Identify which installed RPM package owns a specific file path on RHEL/Fedora.",
    "examples": [
      "rpm -qf /usr/bin/nc  # which package shipped nc?",
      "rpm -qf $(which curl)  # binary lookup via $(which ...)",
      "rpm -qf /lib/systemd/system/sshd.service  # systemd unit owner",
      "dnf provides /usr/bin/nc  # alternative: repo-wide search (works even if not installed)"
    ],
    "memoryTip": "`rpm -qf` = Query File owner. Trio: `rpm -qa` (all installed), `rpm -qf PATH` (who owns this), `rpm -ql PKG` (list files in pkg). Debian equivalent: `dpkg -S /path`.",
    "outputExample": "$ rpm -qf /usr/bin/nc\nnmap-ncat-7.93-8.fc40.x86_64\n$ rpm -qf /tmp/myfile\nfile /tmp/myfile is not owned by any package",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel12",
    "question": "You installed nginx via dnf and want to see every file it placed on the system — binaries, configs, systemd unit files, and docs. Which rpm command lists them?",
    "answer": "rpm -ql nginx",
    "explanation": "This command lists every file path that an installed RPM package owns. It shows you exactly what a package put on your system — useful for finding config files, binaries, or unit files without searching the whole filesystem.",
    "usage": "List every file installed by a package on a RHEL/Fedora system.",
    "examples": [
      "rpm -ql nginx  # every file the package owns",
      "rpm -ql nginx | grep /etc  # just config paths",
      "rpm -qc nginx  # ONLY config files",
      "rpm -qd nginx  # ONLY documentation files",
      "rpm -qlp ./downloaded.rpm  # list contents of an uninstalled .rpm file"
    ],
    "memoryTip": "`rpm -ql` = Query List. `-qc` configs, `-qd` docs, `-qi` info, `-qf` file owner. For uninstalled .rpm files, add `-p`.",
    "outputExample": "$ rpm -ql nginx | grep -E '(conf|service|bin)'\n/etc/nginx/nginx.conf\n/usr/lib/systemd/system/nginx.service\n/usr/sbin/nginx",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel13",
    "question": "You installed nginx via dnf but it is not running. You need to start it immediately without affecting whether it starts at boot. What systemctl command does this?",
    "answer": "sudo systemctl start nginx",
    "explanation": "This command starts a service right now. It does not change whether the service will start automatically after a reboot — that is controlled by a separate 'enable' command. Think of start as 'run it now' and enable as 'run it always'.",
    "usage": "Start a systemd service immediately without changing its boot-time auto-start configuration.",
    "examples": [
      "sudo systemctl start nginx  # launch now, boot state unchanged",
      "sudo systemctl stop nginx  # stop now",
      "sudo systemctl restart nginx  # stop then start",
      "sudo systemctl reload nginx  # re-read config without dropping connections",
      "systemctl status nginx  # verify status (no sudo needed to read)"
    ],
    "memoryTip": "`start/stop/restart` = NOW only. `enable/disable` = boot only. `enable --now` = both at once.",
    "outputExample": "$ sudo systemctl start nginx\n$ systemctl status nginx\n● nginx.service - nginx\n   Active: active (running) since Sat 2026-05-17 09:32:01 UTC; 4s ago\n   Main PID: 4821 (nginx)",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel14",
    "question": "After installing and testing nginx on a Fedora server, you want to make it start automatically at every boot AND start it right now in a single command. What does this?",
    "answer": "sudo systemctl enable --now nginx",
    "explanation": "This single command both starts the service immediately and marks it to start automatically at every future boot. Without --now, enable would only schedule it for future boots but leave it stopped right now.",
    "usage": "Start a service immediately and configure it to auto-start at every subsequent boot.",
    "examples": [
      "sudo systemctl enable --now nginx  # start now + persist on boot",
      "sudo systemctl disable --now nginx  # stop now + don't start at boot",
      "sudo systemctl enable nginx  # boot-only — does NOT start now",
      "systemctl is-enabled nginx  # check: enabled / disabled / masked / static",
      "sudo systemctl mask nginx  # forbid the service entirely"
    ],
    "memoryTip": "`enable --now` = persist + run. Cheat-sheet: `start/stop` (now), `enable/disable` (boot), `--now` (both). On RHEL/Fedora, dnf install does NOT auto-enable — opt in explicitly.",
    "outputExample": "$ sudo systemctl enable --now nginx\nCreated symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /usr/lib/systemd/system/nginx.service.\n$ systemctl is-enabled nginx\nenabled\n$ systemctl is-active nginx\nactive",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel15",
    "question": "You edited /etc/systemd/system/myapp.service to change the ExecStart path, then ran 'systemctl restart myapp' but the change had no effect and systemctl warned the file changed on disk. What command must you run first?",
    "answer": "sudo systemctl daemon-reload",
    "explanation": "systemd reads unit files once at boot and caches them. When you edit a unit file, systemd does not know about the change until you tell it to re-read. This command does that re-read without restarting any services.",
    "usage": "Tell systemd to re-read all unit files after you have made manual edits to them.",
    "examples": [
      "sudo systemctl daemon-reload  # re-parse all unit files",
      "sudo systemctl daemon-reload && sudo systemctl restart myapp  # apply your edit",
      "sudo systemctl edit myapp  # modern alternative: opens override, auto-reloads on save"
    ],
    "memoryTip": "Edit unit → `daemon-reload` → `restart`. Or use `systemctl edit UNIT` which handles the reload for you. `reload` (no daemon) = reload the SERVICE's config, not systemd's unit file cache.",
    "outputExample": "$ sudo vim /etc/systemd/system/myapp.service\n$ sudo systemctl restart myapp\nWarning: The unit file ... changed on disk. Run 'systemctl daemon-reload' to reload units.\n$ sudo systemctl daemon-reload\n$ sudo systemctl restart myapp\n# success",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel16",
    "question": "nginx failed to start and 'systemctl status nginx' only shows a few lines. What journalctl command shows the full log for nginx with error explanations and jumps to the most recent entries?",
    "answer": "sudo journalctl -xeu nginx",
    "explanation": "This command shows the complete log output from a specific service, jumps to the most recent entries, and adds explanatory hint lines for known systemd errors. It is the go-to debugging command after a service fails to start.",
    "usage": "View full systemd service logs with error explanations, jumping to the most recent entries.",
    "examples": [
      "sudo journalctl -xeu nginx  # newest + explanations for nginx",
      "sudo journalctl -fu nginx  # follow live (Ctrl-C to stop)",
      "sudo journalctl -u nginx --since '10 min ago'",
      "sudo journalctl -p err -b  # only errors from THIS boot"
    ],
    "memoryTip": "Mnemonic `-xeu`: eXplain + End + Unit. The trio for debugging failed services. Add `-f` for follow, `-b` for current boot.",
    "outputExample": "$ sudo journalctl -xeu nginx\nMay 17 09:32:01 server1 nginx[4820]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nMay 17 09:32:01 server1 systemd[1]: nginx.service: Failed with result 'exit-code'.\n░░ Subject: Unit process exited\n░░ The process \"/usr/sbin/nginx -t\" exited with status 1.",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel17",
    "question": "You added a new web application on port 8080 but clients cannot reach it. You suspect firewalld is blocking the port. What command shows all active firewall rules for the default zone?",
    "answer": "sudo firewall-cmd --list-all",
    "explanation": "This command prints the complete firewall configuration for the active zone — which services and ports are allowed, which interface is bound to the zone, and any source IP restrictions. It is the first thing to check when connections are being blocked unexpectedly.",
    "usage": "Display all active firewall rules, services, and ports for the default zone on RHEL/Fedora.",
    "examples": [
      "sudo firewall-cmd --list-all  # full state of the default zone",
      "sudo firewall-cmd --list-all --zone=public  # specific zone",
      "sudo firewall-cmd --get-active-zones  # which zones are live",
      "sudo firewall-cmd --list-ports  # just the raw port list"
    ],
    "memoryTip": "`--list-all` = everything in the active zone. RHEL/Fedora default = `public` zone, allowing only `ssh` and `dhcpv6-client` by default.",
    "outputExample": "$ sudo firewall-cmd --list-all\npublic (active)\n  interfaces: eth0\n  services: ssh dhcpv6-client http\n  ports: \n  rich rules:",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel18",
    "question": "Your app server listens on TCP port 8080 and you need to permanently open it through firewalld so it survives a reboot. What two-step process achieves this?",
    "answer": "sudo firewall-cmd --add-port=8080/tcp --permanent && sudo firewall-cmd --reload",
    "explanation": "firewalld has two separate configurations: one that is active right now (runtime) and one that is saved to disk (permanent). Changes to permanent don't take effect until you reload. Changes to runtime don't survive reboots. The two-step process writes the rule to disk and then loads it into the active firewall.",
    "usage": "Persistently open a TCP port through firewalld so it survives reboots on RHEL/Fedora.",
    "examples": [
      "sudo firewall-cmd --add-port=8080/tcp --permanent  # persist",
      "sudo firewall-cmd --reload  # activate permanent rules",
      "sudo firewall-cmd --add-service=http --permanent  # cleaner for named services",
      "sudo firewall-cmd --add-port=8080/tcp  # runtime-only test (gone on reboot)",
      "sudo firewall-cmd --remove-port=8080/tcp --permanent && sudo firewall-cmd --reload  # undo"
    ],
    "memoryTip": "Two configs: `--permanent` writes disk, `--reload` activates. Without `--permanent`, rules vanish on reboot. Without `--reload`, permanent rules aren't yet active.",
    "outputExample": "$ sudo firewall-cmd --add-port=8080/tcp --permanent\nsuccess\n$ sudo firewall-cmd --reload\nsuccess\n$ sudo firewall-cmd --list-ports\n8080/tcp",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel19",
    "question": "nginx is returning 403 Forbidden on a RHEL server even though the file permissions look correct. You suspect SELinux might be blocking it. What command tells you the current SELinux enforcement mode?",
    "answer": "getenforce",
    "explanation": "This command prints a single word — Enforcing, Permissive, or Disabled — telling you whether SELinux is actively blocking actions or just logging them. If it says Enforcing and your permissions look correct, SELinux is likely the culprit behind unexpected 403 errors.",
    "usage": "Check whether SELinux is actively blocking access or running in audit-only mode.",
    "examples": [
      "getenforce  # Enforcing / Permissive / Disabled",
      "sestatus  # detailed: mode, policy name, MLS status",
      "sudo setenforce 0  # switch to permissive (gone on reboot)",
      "sudo setenforce 1  # back to enforcing",
      "sudo ausearch -m AVC -ts recent  # see recent SELinux denials"
    ],
    "memoryTip": "Three modes: Enforcing (block + log), Permissive (log only), Disabled. If a service breaks 'for no reason' on RHEL, check SELinux: `getenforce`, then `ausearch -m AVC`.",
    "outputExample": "$ getenforce\nEnforcing\n$ sestatus\nSELinux status: enabled\nCurrent mode: enforcing\nLoaded policy name: targeted",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel20",
    "question": "You copied website files from your home directory into /var/www/html/ but nginx is returning 403 Forbidden even though SELinux is enforcing and file permissions look correct. What command fixes the SELinux file context labels?",
    "answer": "sudo restorecon -Rv /var/www/html",
    "explanation": "When you copy files from one location to another, the files keep their original SELinux label — which may not match what is expected in the new location. This command resets those labels to the correct values according to the SELinux policy, fixing the 403 errors caused by incorrect file contexts.",
    "usage": "Reset SELinux file context labels on a directory tree to the policy-defined correct values.",
    "examples": [
      "sudo restorecon -Rv /var/www/html  # recurse + verbose",
      "sudo restorecon -v /etc/nginx/nginx.conf  # single file",
      "ls -Z /var/www/html  # see current contexts before/after",
      "matchpathcon /var/www/html  # what context should this path have?",
      "sudo semanage fcontext -a -t httpd_sys_content_t '/srv/web(/.*)?'  # teach policy a new path"
    ],
    "memoryTip": "`restorecon` = RESTORE the CONtext. Workflow: `ls -Z` to see, `matchpathcon` to learn expected, `restorecon -Rv` to fix. `-Rv` = recurse + verbose, the everyday combo.",
    "outputExample": "$ ls -Z /var/www/html/index.html\nunconfined_u:object_r:user_home_t:s0 /var/www/html/index.html\n$ sudo restorecon -Rv /var/www/html\nRelabeled /var/www/html/index.html from user_home_t to httpd_sys_content_t\n$ ls -Z /var/www/html/index.html\nsystem_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html",
    "category": "RHEL/FEDORA"
  }
];

export const categories = [
  {
    "id": "NAVIGATION",
    "name": "Navigation",
    "count": 30
  },
  {
    "id": "FILE OPS",
    "name": "File Operations",
    "count": 35
  },
  {
    "id": "VIEWING TEXT",
    "name": "Viewing Text",
    "count": 30
  },
  {
    "id": "PERMISSIONS",
    "name": "Permissions",
    "count": 30
  },
  {
    "id": "PIPES & REDIRECT",
    "name": "Pipes & Redirect",
    "count": 30
  },
  {
    "id": "PROCESSES",
    "name": "Processes",
    "count": 30
  },
  {
    "id": "NETWORKING",
    "name": "Networking",
    "count": 30
  },
  {
    "id": "PACKAGES",
    "name": "Packages (Debian/Ubuntu)",
    "count": 27
  },
  {
    "id": "RHEL/FEDORA",
    "name": "RHEL / Fedora",
    "count": 20
  },
  {
    "id": "TEXT PROCESSING",
    "name": "Text Processing",
    "count": 30
  },
  {
    "id": "SYSTEM INFO",
    "name": "System Info",
    "count": 30
  },
  {
    "id": "BASH SCRIPTING",
    "name": "Bash Scripting & Practice",
    "count": 30
  },
  {
    "id": "ARCHIVES & COMPRESS",
    "name": "Archives & Compress",
    "count": 20
  },
  {
    "id": "DAILY TIPS",
    "name": "Daily Linux Tips",
    "count": 50
  }
];
