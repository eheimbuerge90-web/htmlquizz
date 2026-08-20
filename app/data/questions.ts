export interface Question {
  id: string;
  question: string;
  answer: string;
  /** Other phrasings that are equally correct. Many questions genuinely
   *  admit more than one right command (`realpath` vs `readlink -f`,
   *  symbolic vs octal chmod). Without these the app rejects correct
   *  answers, which is worse than accepting a near-miss. */
  altAnswers?: string[];
  explanation: string;
  usage: string;
  examples: string[];
  memoryTip: string;
  outputExample: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  /** Menu section. 26 categories as a flat grid gives a learner no
   *  sense of where to start; the menu groups them under these. */
  group: string;
}

export const questions: Question[] = [
  {
    "id": "term1",
    "question": "Look at the command line `ls -l /var/log`. The first word, `ls`, is the name of the program being run. What is the general term for this first word of any command line?",
    "answer": "command",
    "altAnswers": [
      "the command",
      "command name",
      "program"
    ],
    "explanation": "Every line you type in a terminal starts the same way: the name of the thing you want to run. The shell takes that first word, looks it up (in its built-ins, aliases, and the directories listed in $PATH), and starts that program. Everything after the first word is just information handed to that program — the program decides what to do with it.",
    "usage": "Understanding command-line anatomy is the foundation for reading documentation, error messages, and examples: docs always describe 'the command', its 'options', and its 'arguments'.",
    "examples": [
      "ls -l /var/log  # command: ls",
      "grep -i error app.log  # command: grep",
      "sudo apt install git  # sudo is the command; 'apt install git' is its argument list",
      "type ls  # ask the shell what 'ls' actually resolves to",
      "which ls  # show which file on disk provides the ls command"
    ],
    "memoryTip": "First word = WHO does the work. The rest = instructions FOR that worker. When a command line fails, read it left to right: is the worker's name even spelled right?",
    "outputExample": "$ type ls\nls is aliased to `ls --color=auto'\n$ type cd\ncd is a shell builtin\n$ type python3\npython3 is /usr/bin/python3",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term2",
    "question": "In the command `ls -l /var/log`, the `-l` part starts with a dash and switches on long-format output. What is the general one-word term for these dash-prefixed modifiers?",
    "answer": "flag",
    "altAnswers": [
      "a flag",
      "option",
      "options",
      "switch"
    ],
    "explanation": "A flag is like a switch on a machine: the machine (command) does its basic job either way, but flipping switches changes HOW it does the job. `ls` lists files; `ls -l` lists them in long format; `ls -a` includes hidden ones. Flags are recognized because they start with a dash, which is how the program tells 'a setting' apart from 'a thing to operate on'.",
    "usage": "Flags customize a command's behavior without changing what it fundamentally does — nearly every Linux command accepts them, and man pages are mostly long lists of available flags.",
    "examples": [
      "ls -l  # one short flag",
      "ls -la  # two short flags combined into one cluster",
      "rm -i file.txt  # -i makes rm interactive",
      "sort -r names.txt  # -r reverses the sort order",
      "grep --ignore-case error app.log  # the long-form spelling of -i"
    ],
    "memoryTip": "Think of raising a flag to signal something: `-l` signals 'long format, please'. Short flags = one dash + one letter. Long flags = two dashes + a word.",
    "outputExample": "$ ls\nnotes.txt  reports\n$ ls -l\ntotal 8\n-rw-r--r-- 1 alice alice 120 Jul  1 09:00 notes.txt\ndrwxr-xr-x 2 alice alice 4096 Jun 30 17:22 reports",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term3",
    "question": "In the command `ls -l /var/log`, the final part `/var/log` is the thing the command actually operates on. What is the general one-word term for these targets given to a command?",
    "answer": "argument",
    "altAnswers": [
      "an argument",
      "operand",
      "parameter"
    ],
    "explanation": "If the command is the worker and flags are its settings, arguments are the material handed to the worker: the files to list, the text to search for, the directory to enter. Unlike flags, arguments don't start with a dash — they're the actual data. Many commands accept several arguments at once and process them in order.",
    "usage": "Recognizing what's an argument versus a flag lets you read any command in documentation: `cp [OPTIONS] SOURCE DEST` means cp takes flags, then two arguments.",
    "examples": [
      "cat /etc/hostname  # one argument: the file to print",
      "cp report.txt backup.txt  # two arguments: source and destination",
      "grep error app.log  # two arguments: the pattern and the file",
      "mkdir docs src tests  # three arguments: three folders to create",
      "man cp  # see cp's argument structure: cp [OPTION]... SOURCE DEST"
    ],
    "memoryTip": "Arguments answer 'on WHAT?'. `rm` — remove what? `cd` — go where? If a command 'is missing an operand', it means you forgot the argument.",
    "outputExample": "$ cp\ncp: missing file operand\nTry 'cp --help' for more information.\n$ cp report.txt backup.txt\n$",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term4",
    "question": "Shell command lines follow a conventional three-part structure. Name the three parts in the order they appear on the line.",
    "answer": "command options arguments",
    "altAnswers": [
      "command flags arguments",
      "command option argument",
      "command flag argument"
    ],
    "explanation": "The convention is: first WHO does the work (the command), then HOW to do it (options/flags), then WHAT to do it on (arguments). Programs read their command line left to right, so putting the settings before the data is the pattern virtually all tools expect. Modern GNU tools often tolerate flags after arguments too, but the canonical order always works — which is why every man page synopsis is written as `command [OPTIONS] ARGUMENTS`.",
    "usage": "Whenever a command misbehaves, check the order: a flag placed where an argument is expected gets treated as a filename, and vice versa.",
    "examples": [
      "ls -lh /var/log  # command, options, argument",
      "grep -in 'error' app.log  # command, options, argument, argument",
      "tar -czf backup.tar.gz project/  # order matters: -f must be directly before the archive name",
      "rm -- -weirdfile  # the -- marker says 'no more options; everything after is an argument'",
      "man tar | head  # synopsis line shows the expected structure"
    ],
    "memoryTip": "WHO, HOW, WHAT — in that order. `command -how what`. When in doubt, mimic the SYNOPSIS line at the top of the man page.",
    "outputExample": "$ man cp | head -6\nCP(1)                    User Commands                   CP(1)\n\nNAME\n       cp - copy files and directories\n\nSYNOPSIS\n       cp [OPTION]... SOURCE... DEST",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term6",
    "question": "You want to run ls with three short flags at once: long format (-l), all files including hidden (-a), and human-readable sizes (-h). Type the command with all three combined into a single flag cluster starting with -l.",
    "answer": "ls -lah",
    "altAnswers": [
      "ls -lha"
    ],
    "explanation": "Short flags can be glued together behind one dash: `-l -a -h` becomes `-lah`. The program sees exactly the same three switches — clustering is purely a typing convenience the option-parsing convention provides. Order inside the cluster doesn't matter for independent flags (only flags that take a value, like tar's `-f`, must come last in a cluster).",
    "usage": "Combining flags is how experienced users type quickly — `ls -lah`, `rm -rf`, `tar -xzvf` are all clusters of independent single-letter flags.",
    "examples": [
      "ls -l -a -h  # three separate flags — works",
      "ls -lah  # identical meaning, less typing",
      "rm -rf build/  # cluster of -r and -f",
      "ps -ef  # cluster of -e and -f",
      "tar -czf out.tar.gz dir/  # f LAST in the cluster because it takes a filename"
    ],
    "memoryTip": "One dash, many letters = many switches flipped at once. Rule of thumb: a flag that needs a value goes at the END of the cluster (or on its own).",
    "outputExample": "$ ls -lah\ntotal 20K\ndrwxr-xr-x  3 alice alice 4.0K Jul  1 10:02 .\ndrwxr-x--- 12 alice alice 4.0K Jul  1 09:55 ..\n-rw-r--r--  1 alice alice   28 Jun 30 18:11 .env\n-rw-r--r--  1 alice alice 1.2K Jul  1 10:02 notes.txt",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term7",
    "question": "You want to read the full built-in manual page for the ls command — the complete reference with every flag explained, opened in a scrollable viewer. What command opens it?",
    "answer": "man ls",
    "explanation": "Linux ships its documentation with the system: every standard command has a manual page. The man command opens that reference in a pager where you can scroll (arrow keys), search (press / then type), and quit (press q). Man pages follow a fixed layout — NAME, SYNOPSIS, DESCRIPTION, OPTIONS — so once you can read one, you can read them all.",
    "usage": "The authoritative reference for any command's flags and behavior, available offline on every Linux system.",
    "examples": [
      "man ls  # the full ls reference",
      "man -k copy  # search all man pages for 'copy' (same as apropos)",
      "man 5 crontab  # section 5: the file FORMAT, not the command",
      "man man  # the manual about the manual",
      "MANPAGER='less -p OPTIONS' man ls  # open jumping straight to OPTIONS"
    ],
    "memoryTip": "`man` = MANual. Inside: `/word` to search, `n` for next hit, `q` to quit — the same keys as less. Read the SYNOPSIS line first; it shows the command/options/arguments structure.",
    "outputExample": "$ man ls\nLS(1)                     User Commands                    LS(1)\n\nNAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n:",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term8",
    "question": "You need a quick usage summary of cp's flags printed straight to the terminal — faster than opening the full manual. Using the long-form help flag, what command prints it?",
    "answer": "cp --help",
    "explanation": "Almost every command answers --help by printing a condensed cheat sheet: one usage line plus a list of its flags with one-line descriptions. Unlike man, it prints directly to the terminal (no pager) and reflects exactly the version of the tool you have installed. It's the fastest 'remind me how this works' available.",
    "usage": "The quickest built-in reference: check a flag's spelling or a command's argument order without leaving your prompt.",
    "examples": [
      "cp --help  # cp's flag summary",
      "cp --help | grep -- -r  # find just the recursive flag's description",
      "python3 --help | head  # works for most non-GNU tools too",
      "git commit --help  # git redirects --help to the full man page",
      "help cd  # shell BUILTINS like cd use 'help' instead",
      "ls --help | less  # page through ls's many options"
    ],
    "memoryTip": "`--help` prints and exits; `man` opens a book. Pipe --help through `grep` to find one flag fast. For shell builtins (cd, echo, type), use `help cd` — they have no man page of their own.",
    "outputExample": "$ cp --help | head -5\nUsage: cp [OPTION]... [-T] SOURCE DEST\n  or:  cp [OPTION]... SOURCE... DIRECTORY\n  or:  cp [OPTION]... -t DIRECTORY SOURCE...\nCopy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.\n",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term9",
    "question": "You've seen the command grep mentioned but only want its one-line description from the manual database — not the whole man page. What command prints just that one-liner?",
    "answer": "whatis grep",
    "altAnswers": [
      "man -f grep"
    ],
    "explanation": "The manual system keeps an index of every command's NAME line — the one-sentence summary at the top of its man page. This command looks up a name in that index and prints only the summary. It's the dictionary-definition lookup: 'grep — print lines that match patterns' tells you instantly whether this is the tool you're looking for.",
    "usage": "Identify an unfamiliar command in one line without opening its manual — great when reading someone else's script.",
    "examples": [
      "whatis grep  # one-line summary of grep",
      "whatis ls cp mv rm  # several at once",
      "man -f grep  # identical: -f means 'whatis lookup'",
      "apropos pattern  # the reverse: search summaries by keyword",
      "sudo mandb  # rebuild the index if whatis finds nothing"
    ],
    "memoryTip": "`whatis X` answers literally 'what is X?'. Pair-think: `whatis` = name → description; `apropos` = keyword → names.",
    "outputExample": "$ whatis grep\ngrep (1)             - print lines that match patterns\n$ whatis tar\ntar (1)              - an archiving utility",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term10",
    "question": "You can't remember what a command is called, but you know it has to do with renaming. What command searches all manual page descriptions for the keyword rename?",
    "answer": "apropos rename",
    "altAnswers": [
      "man -k rename"
    ],
    "explanation": "This is the reverse phone book of the manual system: instead of looking up a known name, you search the descriptions. It scans every man page's one-line summary for your keyword and lists all commands that mention it. It's how you discover tools you didn't know existed — the answer to 'there must be a command for this...'",
    "usage": "Discover commands by topic when you know what you want to do but not what the tool is called.",
    "examples": [
      "apropos rename  # everything mentioning 'rename'",
      "apropos -s 1 compress  # only section 1 (user commands)",
      "apropos 'disk usage'  # multi-word phrase",
      "man -k rename  # identical: -k means 'keyword search'",
      "apropos . | wc -l  # count every documented command",
      "apropos compress  # find compression tools"
    ],
    "memoryTip": "apropos = 'concerning...' (French). Ask it a topic, get command names back. `man -k` is the same thing — k for Keyword.",
    "outputExample": "$ apropos rename\nfile-rename (1p)     - renames multiple files\nmv (1)               - move (rename) files\nprename (1p)         - renames multiple files\nrename (1)           - rename files\nrename (2)           - change the name or location of a file",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term11",
    "question": "When you type python3 the shell finds and runs an executable file somewhere on disk. What command prints the full path of the executable that would run, using the classic path-lookup tool?",
    "answer": "which python3",
    "altAnswers": [
      "command -v python3",
      "type -a python3"
    ],
    "explanation": "The shell doesn't magically know your commands — it searches the directories listed in your $PATH variable, in order, and runs the first match. This command performs the same search and shows you where it landed. That's invaluable when two versions of a tool are installed and you need to know which one you're actually running.",
    "usage": "Find out which file on disk provides a command — the first debugging step for 'wrong version' problems.",
    "examples": [
      "which python3  # /usr/bin/python3",
      "which -a python3  # ALL matches along $PATH, in order",
      "command -v python3  # POSIX way; also reports aliases/builtins",
      "type python3  # shell's own answer: alias? builtin? file?",
      "readlink -f $(which python3)  # resolve symlinks to the real binary",
      "command -v python  # POSIX, script-friendly — exit non-zero if missing"
    ],
    "memoryTip": "'WHICH one runs?' — that's exactly the question it answers. For the full truth (aliases and builtins included) prefer `type`, because `which` only checks $PATH.",
    "outputExample": "$ which python3\n/usr/bin/python3\n$ which -a python3\n/home/alice/.venv/bin/python3\n/usr/bin/python3",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term12",
    "question": "You want to see the numbered list of commands you have previously typed in this shell. What command prints it?",
    "answer": "history",
    "explanation": "Your shell quietly records every command you run into a history list (saved to ~/.bash_history between sessions). This command prints that list with numbers. The numbers matter: you can re-run entry 105 by typing !105. The history is one of the terminal's biggest speed advantages over clicking — everything you ever figured out is retrievable.",
    "usage": "Recall past commands: audit what you did, re-run complex one-liners, or copy a command you crafted last week.",
    "examples": [
      "history  # everything, numbered",
      "history 10  # just the last 10",
      "history | grep ssh  # every ssh command you've typed",
      "!105  # re-run history entry number 105",
      "history -c  # clear the current session's history"
    ],
    "memoryTip": "The shell remembers so you don't have to. Trio to memorize: `history` (list), `!N` (run entry N), `Ctrl+R` (interactive search).",
    "outputExample": "$ history | tail -4\n  101  cd ~/code/myapp\n  102  git status\n  103  npm run build\n  104  history | tail -4",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term15",
    "question": "A command is running in your foreground and you want to cancel it right now by sending it an interrupt signal from the keyboard. What key combination do you press? (answer like: ctrl+x)",
    "answer": "ctrl+c",
    "altAnswers": [
      "ctrl-c",
      "ctrl c",
      "^c"
    ],
    "explanation": "This key combination makes the terminal send SIGINT (interrupt) to whatever is running in the foreground. Well-behaved programs stop what they're doing and exit, returning you to your prompt. It's the emergency brake of the terminal — not a graceful shutdown request like 'q' in a pager, but a 'stop now' signal. (It does NOT kill background jobs — only the foreground one.)",
    "usage": "Cancel a runaway command, an accidental huge output, a hung network request — the universal 'make it stop'.",
    "examples": [
      "ping example.com  → Ctrl+C  # ping runs forever until interrupted",
      "cat hugefile.log  → Ctrl+C  # stop the flood of output",
      "Ctrl+Z  # different: SUSPEND (pause) instead of interrupt",
      "kill -INT 1234  # send the same SIGINT signal to any PID",
      "q  # pagers like less want q, not Ctrl+C"
    ],
    "memoryTip": "Ctrl+C = Cancel. Contrast: Ctrl+Z pauses (job control), Ctrl+D says 'end of input', q quits pagers. Four different 'stops' — Ctrl+C is the interrupter.",
    "outputExample": "$ ping example.com\n64 bytes from 93.184.215.14: icmp_seq=1 ttl=56 time=11.2 ms\n64 bytes from 93.184.215.14: icmp_seq=2 ttl=56 time=10.8 ms\n^C\n--- example.com ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss\n$",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term16",
    "question": "You typed a long rsync command three days ago and want to find it by interactively searching backwards through your shell history as you type. What key combination starts that reverse search? (answer like: ctrl+x)",
    "answer": "ctrl+r",
    "altAnswers": [
      "^r",
      "ctrl r",
      "ctrl-r"
    ],
    "explanation": "This opens reverse-incremental-search: the prompt changes and as you type any fragment, the shell live-searches backwards through your history for the most recent command containing it. Press the combination again to jump to older matches, Enter to run the found command, or Escape to edit it first. It turns your entire command history into an instantly searchable database.",
    "usage": "Retrieve any past command by typing a fragment of it — dramatically faster than scrolling with the up-arrow.",
    "examples": [
      "Ctrl+R then 'rsync'  # most recent rsync command appears",
      "Ctrl+R again  # step to the next-older match",
      "Enter  # run the match; Esc/arrows to edit it first",
      "history | grep rsync  # non-interactive alternative",
      "Ctrl+G  # abort the search, keep your empty prompt",
      "Ctrl+R  # then type 'ssh' — highlights most recent ssh command"
    ],
    "memoryTip": "Ctrl+R = Reverse search. The workflow: R, type fragment, R-R-R to go further back, Enter. Once this is muscle memory you almost never retype a long command.",
    "outputExample": "$ (press Ctrl+R)\n(reverse-i-search)`rsy': rsync -av --progress ~/code/myapp/ /backup/myapp/",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term17",
    "question": "Your terminal is cluttered with old output and you want a fresh, empty screen with your prompt at the top. What command clears the terminal?",
    "answer": "clear",
    "explanation": "This command wipes the visible terminal and puts your prompt back at the top. Nothing is deleted — your scrollback buffer and history are untouched — it just gives you a clean workspace, like sweeping a desk before starting a new task. The keyboard shortcut Ctrl+L does the same thing without disturbing the line you're currently typing.",
    "usage": "Declutter your screen between tasks so new output isn't visually mixed with old.",
    "examples": [
      "clear  # blank screen, prompt at top",
      "Ctrl+L  # same effect as a keystroke",
      "clear -x  # clear screen but keep scrollback reachable",
      "reset  # stronger: reinitialize a garbled terminal (e.g. after catting a binary)"
    ],
    "memoryTip": "`clear` clears the VIEW, not your data. If the terminal is printing garbage symbols after you viewed a binary file, you need `reset` instead.",
    "outputExample": "$ clear\n$ █  (screen is now empty, cursor at top)",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term19",
    "question": "The shell finds commands by searching a colon-separated list of directories stored in an environment variable. What command prints that list using echo?",
    "answer": "echo $PATH",
    "altAnswers": [
      "printenv PATH"
    ],
    "explanation": "When you type a command name, the shell walks through the directories in the PATH variable — left to right — and runs the first matching executable it finds. That's the entire magic of 'commands just working': they're ordinary files living in directories like /usr/bin, and PATH is the search route. 'command not found' usually means the program's directory isn't on this list.",
    "usage": "Inspect your command search path — the first step when a freshly installed tool 'isn't found' or the wrong version runs.",
    "examples": [
      "echo $PATH  # show the search list",
      "echo $PATH | tr ':' '\\n'  # one directory per line, easier to read",
      "which -a python3  # see how PATH order picks a winner",
      "export PATH=\"$HOME/bin:$PATH\"  # put your own scripts first (this session)",
      "printenv PATH  # same value via the environment printer"
    ],
    "memoryTip": "PATH = the shell's search route, checked LEFT to RIGHT — first hit wins. New tool 'not found'? Its folder isn't on the route (or you need a new shell to re-read it).",
    "outputExample": "$ echo $PATH\n/home/alice/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n$ echo $PATH | tr ':' '\\n' | head -3\n/home/alice/.local/bin\n/usr/local/sbin\n/usr/local/bin",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "term20",
    "question": "You are finished working in this shell session and want to end it cleanly with a command. What do you type?",
    "answer": "exit",
    "altAnswers": [
      "logout"
    ],
    "explanation": "This command terminates the current shell. If it's a local terminal window, the window typically closes; if you're logged into a remote server over SSH, you're returned to your local machine; if you're in a nested shell (after su or running bash inside bash), you pop back out one level. The keyboard shortcut Ctrl+D — 'end of input' — does the same thing at an empty prompt.",
    "usage": "End shell sessions cleanly — especially important for remote SSH sessions and nested root shells you don't want to leave open.",
    "examples": [
      "exit  # leave the current shell",
      "exit 1  # leave a script with a failure status code",
      "Ctrl+D  # same effect at an empty prompt",
      "logout  # login shells only (e.g. SSH sessions)",
      "su - && ... && exit  # drop root privileges when done — don't linger as root"
    ],
    "memoryTip": "One `exit` = up one level. SSH inside su inside bash? Count your layers — it may take several exits to get all the way out. Ctrl+D is the silent twin.",
    "outputExample": "$ ssh alice@web1\nalice@web1:~$ uptime\n 10:04:11 up 42 days,  3:17,  1 user,  load average: 0.03, 0.05, 0.01\nalice@web1:~$ exit\nlogout\nConnection to web1 closed.\n$",
    "category": "TERMINAL BASICS"
  },
  {
    "id": "nav1",
    "question": "You are five directories deep inside a project folder. What command using the tilde shortcut takes you directly to your home directory?",
    "answer": "cd ~",
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
    "id": "nav3",
    "question": "You've just changed into an unfamiliar directory and want to see the names of all files and folders it contains, displayed alphabetically in columns. What command shows the directory contents with no extra details?",
    "answer": "ls",
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
    "altAnswers": [
      "find /var/log -name *.log"
    ],
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
    "memoryTip": "ALWAYS quote the pattern (`'*.log'`) so the shell doesn't expand it. Order is `find WHERE TESTS ACTIONS`. The friendlier modern alternative is `fd` — same job, simpler syntax: `fd '\\.log$'`. On Debian/Ubuntu `sudo apt install fd-find` installs the binary as `fdfind` (the name `fd` is taken by another package); `dnf install fd-find` or `pacman -S fd` give you `fd` directly.",
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
    "outputExample": "$ file *\nbackup.tar.gz:    gzip compressed data, from Unix, original size modulo 2^32 102400\ndeploy.sh:        Bourne-Again shell script, ASCII text executable\nlogo.png:         PNG image data, 800 x 600, 8-bit/color RGBA, non-interlaced\ndata.bin:         ELF 64-bit LSB executable, ARM aarch64, dynamically linked\nnotes.txt:        UTF-8 Unicode text",
    "category": "NAVIGATION"
  },
  {
    "id": "nav16",
    "question": "You are in your Downloads folder and want to identify which file takes up the most space — displayed in the long format so you can see sizes. What command lists the files sorted from largest to smallest?",
    "answer": "ls -lS",
    "altAnswers": [
      "ls -Sl"
    ],
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
    "outputExample": "$ ls -lS\ntotal 1081360\n-rw-r--r-- 1 alice alice 838860800 May 15 10:30 bigmovie.mp4\n-rw-r--r-- 1 alice alice 268435456 May 14 18:01 backup.zip\n-rw-r--r-- 1 alice alice   1258291 May 15 09:55 screenshot.png\ndrwxr-xr-x 2 alice alice      4096 May 12 11:20 Documents\n-rw-r--r-- 1 alice alice       142 May 15 10:30 notes.txt",
    "category": "NAVIGATION"
  },
  {
    "id": "nav17",
    "question": "After a deployment you want to see which files in your current directory were modified most recently. What command lists the directory contents sorted by modification time with the newest entries at the top, showing only the first ten results?",
    "answer": "ls -lt | head",
    "altAnswers": [
      "ls -1t | head -10",
      "ls -lt | head -10",
      "ls -lt | head -n 10",
      "ls -t | head",
      "ls -t | head -10"
    ],
    "explanation": "Instead of an alphabetical listing, this command re-sorts the directory by the clock — the most recently touched file appears first. Piping it through a filter shows only the top ten results so you're not overwhelmed by a long list. It's like reading a \"recently edited\" list in a document editor.",
    "usage": "Show the ten most recently modified files in the current directory — the fastest way to find what changed last.",
    "examples": [
      "ls -lt | head  # 10 newest entries here",
      "ls -lt | head -5  # just the 5 newest",
      "ls -lt *.log | head  # newest log files",
      "ls -ltr  # oldest first (chronological)",
      "ls -lut | head  # sort by atime — -u alone with -l only *shows* atime, it still sorts by name",
      "find . -type f -mtime -1  # files modified in last 24h, recursively"
    ],
    "memoryTip": "`-lt` = Long + Time-sorted. Pipe to `head` for top-N. Pair-think: `-t` = newest first, `-tr` = oldest first. To go RECURSIVE switch to `find -mtime`.",
    "outputExample": "$ ls -lt | head -4\ntotal 24\n-rw-r--r-- 1 alice alice 1234 May 17 14:30 latest.md\n-rw-r--r-- 1 alice alice  567 May 17 14:25 newer.txt\ndrwxr-xr-x 2 alice alice 4096 May 17 12:00 drafts",
    "category": "NAVIGATION"
  },
  {
    "id": "nav18",
    "question": "You are inside ~/code/myapp/src/components and want to move up exactly two directory levels to ~/code/myapp in a single command. What path do you use with cd?",
    "answer": "cd ../..",
    "explanation": "Each `..` in a path means 'the directory one level up'. Chaining them with slashes — `../..` — means 'two levels up' from your current position. This works in any command that takes a path, not just `cd`. It's faster than typing the full absolute path and works regardless of where you are in the tree. You can chain as many as needed: `../../..` jumps three levels up.",
    "usage": "Navigate up multiple directory levels in one command instead of running `cd ..` repeatedly, especially when working deep inside nested project folders.",
    "examples": [
      "cd ..  # up one level",
      "cd ../..  # up two levels",
      "cd ../../..  # up three levels",
      "cd ../sibling-dir  # up one then into a sibling",
      "ls ../  # list contents of parent without changing into it",
      "cd ../sibling-folder  # up one, then into a folder next to where you were"
    ],
    "memoryTip": "Each `..` = one step up. Two dots = parent. Two pairs (`../..`) = grandparent. Count the slashes: one slash, one level up beyond the first `..`.",
    "outputExample": "$ pwd\n/home/elias/code/myapp/src/components\n$ cd ../..\n$ pwd\n/home/elias/code/myapp",
    "category": "NAVIGATION"
  },
  {
    "id": "nav19",
    "question": "You want to know the total disk space consumed by the entire ~/code/myapp directory — a single summary number in human-readable form rather than a per-file breakdown. What command produces that single total?",
    "answer": "du -sh ~/code/myapp",
    "altAnswers": [
      "du -hs ~/code/myapp"
    ],
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
    "answer": "ls -R ~/code/myapp",
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
    "outputExample": "$ ls -R ~/code/myapp\n/home/alice/code/myapp:\nREADME.md  package.json  src\n\n/home/alice/code/myapp/src:\nindex.ts  utils.ts",
    "category": "NAVIGATION",
    "altAnswers": [
      "find ~/code/myapp",
      "find ~/code/myapp -type f",
      "tree -a ~/code/myapp"
    ]
  },
  {
    "id": "nav21",
    "question": "You're deep inside `/var/log/nginx` debugging an issue and need to jump to `/etc/nginx` to check the config, then jump back to where you were. What command saves your current directory on a stack and changes to the new one simultaneously?",
    "answer": "pushd /etc/nginx",
    "explanation": "The directory stack is a built-in shell feature for tracking multiple working directories. `pushd /etc/nginx` does two things at once: saves your current location on the stack AND changes to /etc/nginx. Later, `popd` removes the top of the stack and returns you exactly where you were. Unlike `cd -` which only remembers one previous directory, the stack has unlimited depth. This is invaluable when bouncing between several deeply nested directories.",
    "usage": "Jump to a new directory while bookmarking the current one on a stack, so `popd` can bring you back.",
    "examples": [
      "pushd /etc/nginx  # save current dir, cd to /etc/nginx",
      "pushd /var/log  # save /etc/nginx on stack, cd to /var/log",
      "dirs -v  # show numbered stack: top is current",
      "popd  # return to /etc/nginx (top of stack removed)",
      "pushd +1  # rotate to stack position 1 without modifying",
      "dirs  # default: everything on one line"
    ],
    "memoryTip": "`pushd` PUSHES a directory onto the stack; `popd` POPS one off. Pair-think `pushd`/`popd`/`dirs` — three commands, one mental model: a stack of bookmarks.",
    "outputExample": "$ pwd\n/var/log/nginx\n$ pushd /etc/nginx\n/etc/nginx /var/log/nginx\n$ pushd /etc/ssh\n/etc/ssh /etc/nginx /var/log/nginx\n$ dirs -v\n 0  /etc/ssh\n 1  /etc/nginx\n 2  /var/log/nginx",
    "category": "NAVIGATION"
  },
  {
    "id": "nav22",
    "question": "You used `pushd` three times to navigate into different directories. Now you want to undo the last jump and return to where you were before. What command removes the current directory from the stack and takes you to the previous one?",
    "answer": "popd",
    "explanation": "When you are juggling multiple directories — hopping between a build directory, config directory, and log directory — the directory stack keeps your history. pushd saves your current location and moves you to a new one. popd undoes that: it removes the top of the stack and returns you to where you were. Think of it as a browser back button for the terminal. The stack depth is unlimited, so you can push three directories and pop back through them in reverse order without typing any paths.",
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
    "id": "nav24",
    "question": "You need to inspect files in the home directory of user `deploy` on this server. What `cd` syntax takes you directly to another user's home directory without typing its full path?",
    "answer": "cd ~deploy",
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
    "memoryTip": "`~` alone = your home. `~deploy` = user deploy's home. `~root` = root's home. The shell turns the tilde into a real path BEFORE the command runs — confirm with `echo ~deploy`.",
    "outputExample": "$ echo ~alice\n/home/alice\n$ echo ~root\n/root\n$ sudo -u deploy bash -c 'cd ~ && pwd'\n/home/deploy",
    "category": "NAVIGATION"
  },
  {
    "id": "nav25",
    "question": "Your script uses `../../configs/app.yml` as a path. You need to know what absolute path that resolves to from the script's current working directory, with all `..` components eliminated. What command prints the canonical absolute path?",
    "answer": "realpath ../../configs/app.yml",
    "altAnswers": [
      "readlink -f ../../configs/app.yml",
      "readlink -m ../../configs/app.yml"
    ],
    "explanation": "Symlinks are aliases — they point to a real file or directory somewhere else on the filesystem. Commands like pwd show the logical path through the symlink, not the physical path where the file actually lives. realpath resolves every symlink in a path and gives you the canonical absolute path to the actual file on disk. This is critical in scripts that need to know where a file truly is, not just the name it was accessed through. It also expands relative paths to absolute, which is useful for logging and constructing reliable paths in scripts.",
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
    "id": "nav27",
    "question": "You're in `~/code/myapp` and want a listing that shows only directories (not regular files), without the command descending into them. What `ls` invocation filters to subdirectory names only?",
    "answer": "ls -d */",
    "explanation": "The trick is the combination of a glob and a flag. The `*/` glob only matches entries that are directories (the trailing slash filters out regular files). Normally `ls` would then list the CONTENTS of each matched directory — the `-d` flag says 'show the directory entry itself, don't descend into it.' Together they produce a clean list of just the subdirectory names.",
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
    "explanation": "When `ls` writes to a terminal it arranges names in multiple columns to fit the screen width, but when it writes to a pipe it already switches to one-per-line automatically. The `-1` flag (the digit one) forces the single-column format explicitly, which makes your intent clear and guarantees consistent line-oriented output for tools like `wc -l` and `grep` regardless of where the output goes.",
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
    "outputExample": "$ ls -1\nCHANGELOG.md\nCONTRIBUTING.md\nREADME.md\napi\ndocs\npackage.json\nsrc\ntests\n$ ls -1 *.md | wc -l\n3",
    "category": "NAVIGATION"
  },
  {
    "id": "nav29",
    "question": "You're in `~/code/myapp` and want to see the top two levels of directory structure under the current directory — direct subdirectories and their immediate children — but stop there so you don't descend into `node_modules` and hundreds of other deep paths. What `find` command limits recursion depth to 2 levels and shows only directories?",
    "answer": "find . -maxdepth 2 -type d",
    "altAnswers": [
      "find . -type d -maxdepth 2"
    ],
    "explanation": "By default `find` recurses without limit, which in a JavaScript project means drowning in node_modules paths. The `-maxdepth 2` test caps how deep it descends: the starting directory is depth 0, its children are depth 1, and their children are depth 2. Adding `-type d` filters the results to directories only, giving you a quick structural overview of the project without the noise.",
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
    "altAnswers": [
      "(cd /opt/app/build; make)",
      "cd /opt/app/build && make && cd -",
      "env --chdir=/opt/app/build make",
      "make -C /opt/app/build",
      "pushd /opt/app/build && make && popd"
    ],
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
    "id": "ed1",
    "question": "`visudo` has dropped you into GNU nano and you have finished typing the new sudoers line. The two-line bar at the bottom of the screen lists commands like `^G Help`, where `^` stands for the Control key. Which keystroke writes the buffer to disk and leaves you sitting in the editor?",
    "answer": "^O",
    "altAnswers": [
      "ctrl+o",
      "ctrl-o",
      "control+o",
      "control-o"
    ],
    "explanation": "nano does not edit the file on disk — it reads the file into an in-memory buffer and every keystroke changes only that copy. `^O` is nano's 'Write Out' command: it flushes the buffer back to a file, first offering a prompt (`Write to File:`) already filled in with the current name. Press Enter to accept it and nano reports `[ Wrote N lines ]` and drops you straight back into the text, cursor where you left it. That is the difference from `^X`: writing out is not leaving.",
    "usage": "Checkpointing a long edit so a dropped SSH session or a stray Ctrl-C cannot cost you the work, and any time a tool like `visudo` or `crontab -e` is waiting on the file you are editing.",
    "examples": [
      "^O then Enter  # accept the offered filename and overwrite the file in place",
      "^O then type a new name  # writes the buffer elsewhere, like Save As, and keeps editing the new name",
      "^S  # writes straight to the current file with no filename prompt at all",
      "^O then M-D then Enter  # write the file out with DOS (CRLF) line endings instead of Unix",
      "^X then Y then Enter  # exit, answering the 'Save modified buffer?' prompt on the way out"
    ],
    "memoryTip": "Read `^` as 'hold Control' — that is what the whole bottom bar means. `^O` = Output: you are pushing your buffer out to the disk. nano's own word for it is 'Write Out'. Pair it with `^X` = eXit: O keeps you in the file, X takes you out of it.",
    "outputExample": "(bottom of the nano screen after ^O)\nWrite to File: /etc/sudoers.tmp\n(press Enter)\n[ Wrote 32 lines ]",
    "category": "EDITORS"
  },
  {
    "id": "ed2",
    "question": "You opened /etc/hosts in nano just to read it, changed nothing, and now want the editor gone and your shell prompt back. Which keystroke leaves nano?",
    "answer": "^X",
    "altAnswers": [
      "ctrl+x",
      "ctrl-x",
      "control+x",
      "control-x"
    ],
    "explanation": "`^X` is nano's 'Exit'. Because nano tracks whether the buffer differs from what it read in, an unmodified buffer exits instantly — nano tears down the screen and your shell prompt reappears. Had you changed a single character, the same keystroke would first ask `Save modified buffer?` and wait for `Y`, `N`, or `^C` to cancel, so `^X` can never silently throw work away.",
    "usage": "The way out of every nano session — including the ones you did not ask for, when `crontab -e` or a git commit opens nano and you decide to abandon the edit.",
    "examples": [
      "^X  # unmodified buffer: quits immediately, no questions",
      "^X then N  # modified buffer: discard the changes and quit",
      "^X then Y then Enter  # modified buffer: save under the same name, then quit",
      "^C at the save prompt  # cancel the exit entirely and go back to editing",
      "nano -v /etc/hosts  # open read-only in the first place, so there is nothing to discard"
    ],
    "memoryTip": "`^X` = eXit — the same X that means 'close' on a window button. It sits bottom-left in nano's bar because it is the one command you always need. Mnemonic pairing: `^O` writes Out but stays, `^X` crosses you Out of the editor.",
    "outputExample": "$ nano /etc/hosts\n(the file fills the screen; ^X pressed, buffer unmodified)\n$",
    "category": "EDITORS"
  },
  {
    "id": "ed3",
    "question": "You are 400 lines into a long nginx.conf inside nano and need to land on the first line containing `server_name` instead of scrolling for it. Which keystroke opens nano's search prompt?",
    "answer": "^W",
    "altAnswers": [
      "^F",
      "ctrl+w",
      "ctrl-w",
      "ctrl+f",
      "ctrl-f"
    ],
    "explanation": "nano calls its search menu 'Where Is'. The keystroke opens a `Search:` prompt at the bottom; type the text, press Enter, and the cursor jumps to the next match below the current position, wrapping to the top and reporting `Search Wrapped` when it runs off the end. Repeat the same keystroke and press Enter on the now-remembered term to walk to the following match. Since nano 8.0 the help bar advertises `^F` (find) instead, to match other editors, but `^W` is still bound to the same menu, so both open it.",
    "usage": "Navigating any config file too big to scroll — jumping to the `Listen` directive, the failing line number a service complained about, or the one commented-out setting you came to change.",
    "examples": [
      "^W then server_name then Enter  # jump forward to the next occurrence",
      "^W then Enter  # repeat the previous search without retyping it",
      "^W then M-B then Enter  # search backwards, up the file, instead of forwards",
      "^W then M-R  # switch the prompt into regular-expression mode",
      "^\\  # open Replace instead of plain search, prompting for the text and its replacement"
    ],
    "memoryTip": "`^W` = 'Where is?' — nano's own name for the menu is literally 'Where Is'. `W` is nowhere near `X` or `O` on the keyboard, which is the point: nano put the three commands you need most (Write out, eXit, Where is) on keys you cannot fat-finger into each other.",
    "outputExample": "(nano's bottom bar after the keystroke)\nSearch: server_name\n^C Cancel   M-R Reg.expression   ^R Replace",
    "category": "EDITORS"
  },
  {
    "id": "ed4",
    "question": "`systemctl edit` opened a drop-in file in vim. You typed your `[Service]` block, the bottom-left of the screen reads `-- INSERT --`, and now every colon you type lands in the text instead of starting a command. Which single key returns you to normal mode so `:` works again?",
    "answer": "Esc",
    "altAnswers": [
      "escape",
      "<esc>",
      "ctrl+[",
      "ctrl-[",
      "^["
    ],
    "explanation": "vim is modal: the same keys mean different things depending on which mode you are in. In insert mode every printable key is inserted literally, which is why `:wq` just appears in your file. Esc ends insert mode and returns to normal mode, where keys are commands again — `:` opens the ex command line, `d` starts a delete, `/` starts a search. vim clears the `-- INSERT --` indicator from the status line to confirm. This is the single fact that unsticks almost everyone who feels trapped: press Esc first, then give the command.",
    "usage": "Every single time you finish typing text in vim. It is also the safe first keystroke whenever you are unsure what state vim is in — Esc from normal mode is harmless (it just beeps or flashes), so pressing it twice costs nothing.",
    "examples": [
      "i then text then Esc  # insert before the cursor, type, then return to normal mode",
      "a then text then Esc  # append after the cursor instead of before it",
      "o then text then Esc  # open a fresh line below and type on it",
      "Ctrl-[  # the exact same signal as Esc, for keyboards where Esc is far away",
      "Esc then :  # normal mode reached, so the colon now opens the ex command line"
    ],
    "memoryTip": "Esc = escape — you are escaping out of typing and back into commanding. The mental model: vim's normal mode is the neutral gear you steer from, insert mode is the one gear where letters are letters. When in doubt, Esc puts you back in neutral, and `-- INSERT --` vanishing from the bottom-left is your confirmation.",
    "outputExample": "(bottom-left of the vim screen)\nbefore Esc:  -- INSERT --\nafter Esc:   (the indicator is gone; the ruler still shows 12,3)",
    "category": "EDITORS"
  },
  {
    "id": "ed5",
    "question": "You have finished editing /etc/systemd/system/backup.service in vim and you are already back in normal mode. Which ex command saves the file and closes vim in one go?",
    "answer": ":wq",
    "altAnswers": [
      ":x",
      "ZZ",
      ":wq!",
      ":xit",
      ":exit"
    ],
    "explanation": "`:` opens vim's ex command line, `w` writes the buffer to the file it was read from, and `q` quits the window. Chained as `:wq` they run in that order, so the write is guaranteed to have happened before vim exits — and vim confirms with a line like `\"file\" 12L, 340B written`. `:x` and `ZZ` do almost the same thing, with one difference worth knowing: they write only if the buffer was actually modified, so they leave the file's timestamp alone when you changed nothing, while `:wq` always rewrites it.",
    "usage": "The end of every vim edit you want to keep — closing a `visudo` session, a `systemctl edit` drop-in, or a git commit message.",
    "examples": [
      ":wq  # write the buffer, then quit; always touches the file",
      ":x  # write only if modified, then quit; leaves the mtime alone otherwise",
      "ZZ  # the normal-mode keystroke version of :x, no colon needed",
      ":w  # write and stay in the file, the way ^O works in nano",
      ":wq /tmp/copy.conf  # write the buffer to a different path, then quit"
    ],
    "memoryTip": "Read it aloud as the two letters do: `w` = write, `q` = quit. Order matters and matches the sentence — write, then quit. `:q` alone refuses to leave with unsaved changes, so `:wq` is `:q` with permission granted by the `w` in front of it.",
    "outputExample": "$ sudo vim /etc/systemd/system/backup.service\n(after :wq)\n\"/etc/systemd/system/backup.service\" 12L, 340B written\n$",
    "category": "EDITORS"
  },
  {
    "id": "ed6",
    "question": "You opened a file in vim just to read it, fat-fingered a few keys, and the buffer is now modified. `:q` refuses to leave, answering `E37: No write since last change`. You want vim to throw your accidental edits away and exit, leaving the file on disk exactly as it was. What do you type?",
    "answer": ":q!",
    "altAnswers": [
      "ZQ",
      ":quit!"
    ],
    "explanation": "vim keeps your edits in a buffer and refuses to discard a modified buffer by accident — that is the whole meaning of E37. The `!` suffix on an ex command means 'I know, do it anyway': it forces the quit and abandons the buffer unwritten, so the file on disk is untouched because vim never wrote to it in the first place. `ZQ` is the normal-mode keystroke with identical effect. Nothing is recovered afterwards except from vim's swap file, so `!` really is final.",
    "usage": "The escape hatch when you opened the wrong file, pasted into the wrong place, or simply want out of an editor you did not mean to be in — and the classic answer to 'how do I get out of vim'.",
    "examples": [
      ":q!  # abandon this buffer's changes and close the window",
      "ZQ  # same thing without the colon, straight from normal mode",
      ":qa!  # abandon every open buffer and quit vim entirely, tabs and splits included",
      ":e!  # reload the file from disk, discarding changes but staying in vim",
      ":w !sudo tee %  # the opposite decision: keep the edits by writing them out as root"
    ],
    "memoryTip": "In vim, `!` always means 'override the objection you just made'. So `:q!` reads as 'quit — yes, I heard you'. The full stuck-in-vim recipe is three keystrokes in order: Esc (leave insert mode), then `:q!`, then Enter.",
    "outputExample": "(vim's message line)\nE37: No write since last change (add ! to override)\n(after :q! — the shell prompt returns and the file on disk is unchanged)",
    "category": "EDITORS"
  },
  {
    "id": "ed7",
    "question": "In vim, in normal mode, the cursor is sitting somewhere on line 3 of an /etc/fstab you are cleaning up — a stale entry you want gone completely, not blanked out. Which two-keystroke normal-mode command deletes that whole line?",
    "answer": "dd",
    "altAnswers": [
      ":d",
      ":delete",
      "d d"
    ],
    "explanation": "`d` is vim's delete operator and it waits for a motion telling it how much to delete — `dw` a word, `d$` to end of line. Doubling the operator (`dd`) is vim's shorthand for 'apply to the whole current line', the same pattern as `yy` to copy a line or `cc` to change one. The line is removed entirely, the lines below shift up, and the deleted text goes into the unnamed register, so `p` immediately pastes it back if you change your mind. The column position does not matter — `dd` takes the line wherever the cursor sits in it.",
    "usage": "Surgical config editing: dropping a stale fstab entry, a dead repo line, or one bad export from a shell rc file, without leaving a blank line behind.",
    "examples": [
      "dd  # delete the line under the cursor",
      "3dd  # delete this line and the two below it, three lines in one stroke",
      "u  # undo the delete; vim's undo is per-command, so one u restores the whole line",
      "p  # paste the just-deleted line back below the cursor, which turns dd into 'move a line'",
      "yy  # the non-destructive twin: copy the current line instead of deleting it"
    ],
    "memoryTip": "`d` = delete, and doubling an operator in vim always means 'the current line'. So dd = delete-line, yy = yank-line, cc = change-line. Say 'd-d' as 'delete duplicate of the line I'm on' and the doubling stops feeling arbitrary.",
    "outputExample": "(vim, a 4-line fstab, cursor on line 3)\nbefore: 4 lines shown\nafter dd: 3 lines remain, one more ~ filler appears, ruler reads 3,1",
    "category": "EDITORS"
  },
  {
    "id": "ed8",
    "question": "You are reading a 6,000-line application log in vim, in normal mode, and want the cursor moved to the next occurrence of the word `TIMEOUT` below your current position. What do you type to start that forward search and run it?",
    "answer": "/TIMEOUT",
    "explanation": "`/` opens vim's search prompt on the bottom line, echoing what you type. Enter runs the search: vim moves the cursor to the next match after the current position, wrapping to the top of the file if it reaches the end (and saying `search hit BOTTOM, continuing at TOP`). If nothing matches it refuses to move and prints `E486: Pattern not found: TIMEOUT`. The pattern is a regular expression, so plain words work as-is but characters like `.` and `*` are special.",
    "usage": "Reading logs and long configs in vim, where scrolling is hopeless — jump straight to the error, the directive, or the hostname you care about, then hit `n` to walk through every other hit.",
    "examples": [
      "/TIMEOUT  # search forward from the cursor for the next TIMEOUT",
      "?TIMEOUT  # search the other way, backwards up the file",
      "n  # jump to the next match of the search you already ran",
      "N  # jump to the previous match, reversing direction",
      "*  # search for the whole word already under the cursor, no typing needed"
    ],
    "memoryTip": "Think of `/` as the leading slash of a URL or a path: it means 'go find this'. Its mirror `?` searches backwards — the two keys share a physical key on most layouts, forward on the unshifted one, backward on the shifted one. Then n = next, N = next-the-other-way.",
    "outputExample": "(vim's bottom line as you type, then Enter)\n/TIMEOUT\n(cursor jumps to the match; the ruler moves from 1,1 to 3,1)\n(no match instead:)\nE486: Pattern not found: TIMEOUT",
    "category": "EDITORS"
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
      "trash-put scratch.txt  # safer alternative: sends to trash, recoverable",
      "cp -i nginx.conf nginx.conf.bak  # prompts if nginx.conf.bak exists"
    ],
    "memoryTip": "Capital `-I` = ONE prompt for the batch. Lowercase `-i` = per-file. Both stand for Interactive. Remember: `rm` has no undo — `-i` is your only seatbelt unless you've installed `trash-cli`.",
    "outputExample": "$ rm -i notes.txt scratch.txt\nrm: remove regular file 'notes.txt'? n\nrm: remove regular file 'scratch.txt'? y\n$ ls\nnotes.txt",
    "category": "FILE OPS"
  },
  {
    "id": "file9",
    "question": "You are backing up nginx.conf to nginx.conf.bak in your current directory and need the copy to have identical permissions, ownership, and timestamps as the original — not the defaults your shell would apply. What flag preserves all of that metadata?",
    "answer": "cp -p nginx.conf nginx.conf.bak",
    "explanation": "When you normally copy a file, the copy gets a fresh birth certificate — your username as owner, the current time as creation date, and your default permission settings. This option is like making a certified copy instead: every piece of identifying information from the original — who owns it, when it was last changed, what access it allows — is reproduced exactly on the copy.",
    "usage": "Copy a file while keeping its original permissions, ownership, and timestamps intact — essential for backups and deployments.",
    "examples": [
      "cp -p nginx.conf nginx.conf.bak  # preserve all attributes",
      "cp -pr /etc/nginx /etc/nginx.bak  # recursive backup with permissions",
      "cp -p deploy.sh /usr/local/bin/deploy  # keep executable bit from source",
      "cp -a /etc/nginx /backup/nginx  # archive: preserves symlinks as symlinks (never follows them), plus perms, ownership, timestamps, ACLs",
      "cp --preserve=timestamps only.txt only-ts.txt  # preserve only timestamps",
      "cp -a ~/code/myapp ~/backups/myapp-$(date +%F)  # dated archive backup"
    ],
    "memoryTip": "`cp -p` = Copy + Preserve. Use `-a` (archive) when you want to preserve EVERYTHING including symlinks. Neither preserves ownership for non-root users — that requires `sudo`.",
    "outputExample": "$ ls -l nginx.conf\n-rw-r--r-- 1 www-data www-data 2048 May 10 12:00 nginx.conf\n$ cp -p nginx.conf nginx.conf.bak\n$ ls -l nginx.conf.bak\n-rw-r--r-- 1 www-data www-data 2048 May 10 12:00 nginx.conf.bak",
    "category": "FILE OPS",
    "altAnswers": [
      "cp --preserve=all nginx.conf nginx.conf.bak",
      "cp -a nginx.conf nginx.conf.bak"
    ]
  },
  {
    "id": "file10",
    "question": "You want /usr/local/bin/python to be a shortcut that transparently points to /usr/bin/python3.11, so that running 'python' actually executes python3.11. What command creates this kind of pointer file?",
    "answer": "ln -s /usr/bin/python3.11 /usr/local/bin/python",
    "explanation": "A symbolic link is like a sticky note on a filing cabinet drawer that says \"the real thing is over there.\" When you open the drawer (run the link), the system automatically follows the note and brings you to the actual file. The link itself contains only a path — no copy of the data. If you move the real file, the link breaks and points to nothing.",
    "usage": "Create a symbolic link — a pointer file that transparently redirects access to a target path elsewhere on the filesystem.",
    "examples": [
      "ln -s /usr/bin/python3.11 /usr/local/bin/python  # shortcut to a specific Python",
      "ln -s ../shared/config.toml ./config.toml  # relative symlink to a sibling file",
      "ln -sfn /opt/myapp-v2 /opt/myapp/current  # -n is required so an existing dir symlink is REPLACED, not written into",
      "readlink -f /usr/local/bin/python  # follow the chain to the real file",
      "find / -xtype l 2>/dev/null  # find all BROKEN symlinks on the system",
      "ln -sf /opt/app/releases/v2.1.0 /opt/app/current  # deploy cutover"
    ],
    "memoryTip": "`ln -s TARGET LINKNAME` — same order as `cp` (source first, destination second). Forget it and you'll create the link in the wrong place. Without `-s` you get a HARD link (rare, advanced). Trailing `f` (`-sf`) forces overwrite — essential for the 'current → v2' deploy pattern.",
    "outputExample": "$ ln -s /usr/bin/python3.11 /usr/local/bin/python\n$ ls -l /usr/local/bin/python\nlrwxrwxrwx 1 alice alice 19 May 15 10:00 /usr/local/bin/python -> /usr/bin/python3.11\n$ python --version\nPython 3.11.7\n$ readlink /usr/local/bin/python\n/usr/bin/python3.11",
    "category": "FILE OPS"
  },
  {
    "id": "file12",
    "question": "You edited nginx.conf in your current directory and want to see exactly which lines changed compared to the backup copy nginx.conf.bak — showing removed, added, and changed lines. What command compares the two files line by line?",
    "answer": "diff nginx.conf nginx.conf.bak",
    "altAnswers": [
      "diff nginx.conf.bak nginx.conf"
    ],
    "explanation": "This command reads two files and acts like a teacher marking differences between two essays — it shows you exactly which lines were removed, added, or changed, and where those changes appear. Lines marked with < exist only in the first file, and lines marked with > exist only in the second. The unified format (-u) is even friendlier, showing a few lines of context around each change like a code review comment.",
    "usage": "Compare two text files line by line and show exactly what differs — essential for reviewing configuration changes before deployment.",
    "examples": [
      "diff nginx.conf nginx.conf.bak  # show differences between current and backup",
      "diff -u nginx.conf nginx.conf.bak  # unified format (good for patches, readable context)",
      "diff -r /etc/nginx /backup/nginx  # compare directories recursively",
      "diff <(sort file1.txt) <(sort file2.txt)  # compare sorted versions",
      "diff --color=auto old.conf new.conf  # colorized output",
      "diff /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf  # default format"
    ],
    "memoryTip": "'diff' = 'differences'. Like spotting the differences between two similar pictures. `-u` (unified) format is what git uses — learn to read + and - lines.",
    "outputExample": "$ diff nginx.conf nginx.conf.bak\n2c2\n< worker_processes 4;\n---\n> worker_processes 2;\n4a5\n> # legacy setting",
    "category": "FILE OPS"
  },
  {
    "id": "file14",
    "question": "You want to move the entire project_v1 directory and everything inside it to the archive folder in one command, without specifying any recursion flag. What command handles moving entire directory trees natively?",
    "answer": "mv project_v1 archive/",
    "altAnswers": [
      "mv project_v1 archive"
    ],
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
    "outputExample": "$ ls\narchive  project_v1\n$ mv project_v1 archive/\n$ ls archive/\nproject_v1",
    "category": "FILE OPS"
  },
  {
    "id": "file15",
    "question": "You have a directory called old-logs that contains hundreds of files in nested subdirectories, and you want to delete the entire directory and all of its contents. What flag enables rm to descend into and remove directory trees?",
    "answer": "rm -r old-logs",
    "altAnswers": [
      "rm -r old-logs/"
    ],
    "explanation": "By default, the remove command refuses to touch a folder — it only deletes individual files. Adding this option tells it to go inside the folder, delete everything it finds at every level of nesting, and then remove the now-empty folders themselves. This is the digital equivalent of demolishing a building and everything inside it — there is no undo.",
    "usage": "Delete an entire directory tree including all nested files and subdirectories — irreversible, use with care.",
    "examples": [
      "rm -r old-logs/  # remove directory and all contents",
      "rm -rf node_modules/  # force remove without prompts (common in build scripts)",
      "rm -ri old_project/  # interactive recursive removal — confirms each file",
      "rm -rf \"${BUILD_DIR:?variable must be set}/\"  # safe variable-based removal",
      "trash-put old-logs/  # safer alternative: recoverable from trash",
      "cp -r ~/code/myapp ~/backups/myapp-copy  # copy entire project"
    ],
    "memoryTip": "'rm -r' = 'remove recursive'. Like demolishing a house and everything in it. NEVER combine -rf with unquoted shell variables.",
    "outputExample": "$ rm -r old-logs/\n$ ls\n# old-logs directory is gone",
    "category": "FILE OPS"
  },
  {
    "id": "file16",
    "question": "You are copying all *.txt files from your current directory to ~/backup/ and want to see each filename printed as it gets copied so you can monitor progress. What flag makes cp narrate every file operation?",
    "answer": "cp -v *.txt ~/backup/",
    "altAnswers": [
      "cp -v *.txt ~/backup"
    ],
    "explanation": "Normally, the copy command works in complete silence — success is invisible and you only hear about failures. Adding this option makes it narrate its work, printing a line for every file it processes. It's like having a moving crew read out each box's label as they carry it, so you know exactly what's happening and can spot if something unexpected is being moved.",
    "usage": "Show each file as it is copied — turns silent success into a visible confirmation log.",
    "examples": [
      "cp -v *.txt ~/backup/  # show each text file being copied",
      "cp -rv ~/Documents ~/external-drive/  # verbose recursive copy of Documents",
      "cp -vp config.yml /etc/myapp/config.yml  # verbose + preserve attributes",
      "rsync -av --progress large-file.iso /backup/  # better for large files: shows speed + %",
      "mv -v *.log /var/archive/  # show each log file being moved",
      "mv -v report-draft.md report-final.md  # show rename operation"
    ],
    "memoryTip": "'rm -v' = 'remove verbose'. Like the garbage collector telling you what they're taking away.",
    "outputExample": "$ cp -v *.txt ~/backup/\n'notes.txt' -> '/home/alice/backup/notes.txt'\n'report.txt' -> '/home/alice/backup/report.txt'",
    "category": "FILE OPS"
  },
  {
    "id": "file19",
    "question": "You want report.txt to also be accessible as current-report.txt inside the reports subdirectory — a second name for the same file, where changes made through either name are immediately visible through the other. What command creates this second name that shares the same underlying data?",
    "answer": "ln report.txt reports/current-report.txt",
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
    "altAnswers": [
      "find . -samefile report.txt",
      "ls -li report.txt",
      "stat -c %h report.txt",
      "stat report.txt"
    ],
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
    "id": "file22",
    "question": "You want to move new-nginx.conf onto the existing config /etc/nginx/nginx.conf, but you want the old config automatically saved as a backup file (nginx.conf~) before it's overwritten, in case you need to roll back. What option enables automatic backup creation during a move?",
    "answer": "mv --backup new-nginx.conf /etc/nginx/nginx.conf",
    "altAnswers": [
      "mv -b new-nginx.conf /etc/nginx/nginx.conf"
    ],
    "explanation": "Normally moving a file onto an existing file destroys the original silently. This option tells the move command to save the old file first by appending a tilde to its name, like config.txt~, creating an automatic safety copy before the replacement happens. It's like an undo button that triggers automatically — even if you forget to back up manually, the old version is preserved.",
    "usage": "Automatically preserve the existing destination file as a backup before overwriting it during a move.",
    "examples": [
      "mv --backup new-nginx.conf /etc/nginx/nginx.conf  # backup existing as nginx.conf~",
      "mv --backup=numbered deploy.sh /usr/local/bin/deploy  # backs up the DESTINATION: /usr/local/bin/deploy.~1~, .~2~, etc.",
      "mv -b config.yml /etc/myapp/config.yml  # shorthand for --backup",
      "ls /etc/nginx/  # after: see nginx.conf and nginx.conf~ (the backup)"
    ],
    "memoryTip": "'mv --backup' = 'move with backup'. Like keeping the old version in a safe place before replacing it.",
    "outputExample": "$ mv --backup new-nginx.conf /etc/nginx/nginx.conf\n$ ls /etc/nginx/\nnginx.conf  nginx.conf~  # ~ indicates the auto-saved backup",
    "category": "FILE OPS"
  },
  {
    "id": "file24",
    "question": "You want to copy the 4GB file ubuntu.iso to an external drive mounted at /media/usb/ and see a live progress indicator showing transfer speed and percentage as it goes. What command (using rsync in archive-verbose mode) provides this progress-aware copy?",
    "answer": "rsync -av --progress ubuntu.iso /media/usb/",
    "altAnswers": [
      "rsync -av --info=progress2 ubuntu.iso /media/usb/",
      "rsync -av --progress ubuntu.iso /media/usb",
      "rsync -avP ubuntu.iso /media/usb/"
    ],
    "explanation": "The standard copy command works in complete silence with no indication of how far along a large transfer is. This command is like hiring a delivery service that sends you live updates — it shows which file is being transferred, how fast data is moving, and how much is left, so you can see the transfer is actually progressing rather than wondering if it's frozen.",
    "usage": "Copy files with a live progress display showing speed, percentage, and estimated time — far more informative than cp for large transfers.",
    "examples": [
      "rsync -av --progress ubuntu.iso /media/usb/  # copy ISO with progress",
      "rsync -av --progress ~/Documents/ /backup/Documents/  # backup Documents",
      "rsync -av --delete ~/code/ /backup/code/  # sync, removing deleted files",
      "rsync -av --progress user@server:/var/www/html/ ~/web-backup/  # remote copy over SSH"
    ],
    "memoryTip": "'rsync --progress' shows a progress bar. Like watching a download progress bar.",
    "outputExample": "$ rsync -av --progress ubuntu.iso /media/usb/\nsending incremental file list\nubuntu.iso\n  1,073,741,824  25%   52.00MB/s    0:01:02",
    "category": "FILE OPS"
  },
  {
    "id": "file25",
    "question": "You need to permanently destroy the file private-key.pem containing a private SSH key so that data recovery tools cannot retrieve it. What command overwrites the file's content with random data multiple times before deleting it?",
    "answer": "shred -u private-key.pem",
    "explanation": "When you normally delete a file, the data sits on disk until something else is written over it — recovery software can often read it back. This command is like a paper shredder for digital files: it scribbles random data over the file's contents several times so the original information can no longer be recovered, then deletes the filename. It's the appropriate tool when you need to dispose of genuinely sensitive data.",
    "usage": "Overwrite a file's data with random bytes multiple times before deleting it — prevents recovery of sensitive content.",
    "examples": [
      "shred -u private-key.pem  # overwrite 3 times then delete",
      "shred -n 7 -u confidential.pdf  # 7 overwrite passes then delete",
      "shred -uz passwords.txt  # overwrite + zero fill + delete",
      "shred -v -u secret.txt  # verbose: shows each pass as it runs"
    ],
    "memoryTip": "'shred' = 'destroy beyond recognition'. Like shredding a document so it can't be pieced back together.",
    "outputExample": "$ shred -u private-key.pem\n$ ls private-key.pem\nls: cannot access 'private-key.pem': No such file or directory",
    "category": "FILE OPS"
  },
  {
    "id": "file26",
    "question": "You wrote a deploy script at `script.sh` and want to copy it to `/usr/local/bin/` with owner-read/write/execute and group/other read-execute permissions (755) in one command, without a separate `chmod` step. What command does the copy and sets permissions atomically?",
    "answer": "install -m 755 script.sh /usr/local/bin",
    "altAnswers": [
      "install -m 755 script.sh /usr/local/bin/"
    ],
    "explanation": "The install command combines copy, chmod, and (optionally) chown into a single atomic operation — it's what Makefiles use for their `make install` targets. The `-m 755` flag sets the permission bits on the destination copy at creation time, so there's no window where the file exists with wrong permissions. It can also create directories (`-d`) and set ownership (`-o`/`-g`), replacing a three-command sequence with one.",
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
    "altAnswers": [
      ": > /var/log/nginx/access.log",
      "> /var/log/nginx/access.log",
      "cat /dev/null > /var/log/nginx/access.log",
      "dd if=/dev/null of=/var/log/nginx/access.log"
    ],
    "explanation": "Deleting and recreating a log file would break the running program's file handle — it would keep writing to the now-deleted file descriptor, and the new file would stay empty. This command empties the file without touching its inode, so the running program's file handle stays valid. It's like erasing all the writing from a whiteboard without swapping in a new whiteboard.",
    "usage": "Empty a log file in place without disrupting any processes that have it open.",
    "examples": [
      "sudo truncate -s 0 /var/log/nginx/access.log  # empty nginx log in place",
      "> /var/log/myapp/app.log  # shell equivalent — also works",
      "truncate -s 1G /tmp/sparse-test.img  # create a 1G sparse file (allocates no blocks until written)",
      "truncate -s 0 *.log  # empty multiple log files at once",
      ": > /var/log/myjob.log  # clear the log before each run",
      "> /var/log/myjob.log  # bash shorthand (same effect, less portable)"
    ],
    "memoryTip": "Colon = silent true; > = open empty for writing.",
    "outputExample": "$ ls -lh /var/log/nginx/access.log\n-rw-r--r-- 1 www-data adm 2.1G May 19 /var/log/nginx/access.log\n$ sudo truncate -s 0 /var/log/nginx/access.log\n$ ls -lh /var/log/nginx/access.log\n-rw-r--r-- 1 www-data adm 0 May 19 /var/log/nginx/access.log",
    "category": "FILE OPS"
  },
  {
    "id": "file28",
    "question": "You're benchmarking disk write performance and need to create a 10MB file filled with zeros as test data. What `dd` command generates exactly 10 megabytes of zero bytes from a system source and writes them to `test.bin`?",
    "answer": "dd if=/dev/zero of=test.bin bs=1M count=10",
    "altAnswers": [
      "dd if=/dev/zero of=test.bin bs=1024 count=10240",
      "dd if=/dev/zero of=test.bin bs=10M count=1",
      "dd if=/dev/zero of=test.bin bs=1MB count=10",
      "dd if=/dev/zero of=test.bin count=10 bs=1M"
    ],
    "explanation": "This command reads zeros from a special device that the OS provides (which produces an endless supply of null bytes) and writes them to a file in 1-megabyte chunks, stopping after 10 chunks. The result is a 10MB file of zeros. It also reports exactly how fast the write happened, making it useful as a rough disk speed benchmark.",
    "usage": "Generate a file of exactly N megabytes of zeros — useful for disk benchmarks, swap file creation, and generating test data.",
    "examples": [
      "dd if=/dev/zero of=/tmp/test.bin bs=1M count=10  # 10MB zeros",
      "dd if=/dev/urandom of=/tmp/random.bin bs=1M count=5  # 5MB random data",
      "sudo dd if=ubuntu-24.04-desktop-amd64.iso of=/dev/sdb bs=4M status=progress",
      "dd if=/dev/zero of=/tmp/test.bin bs=1M count=500 conv=fdatasync  # raw write speed test"
    ],
    "memoryTip": "dd = 'data duplicator' (or, jokingly, 'disk destroyer' — double-check of=).",
    "outputExample": "$ dd if=/dev/zero of=/tmp/test.bin bs=1M count=10\n10+0 records in\n10+0 records out\n10485760 bytes (10 MB, 10 MiB) copied, 0.012 s, 874 MB/s",
    "category": "FILE OPS"
  },
  {
    "id": "file29",
    "question": "You need to set up a project directory structure with `app/logs/2026` and `app/data/2026`. What single `mkdir` command using brace expansion creates both subdirectory trees at once?",
    "answer": "mkdir -p app/{logs,data}/2026",
    "altAnswers": [
      "mkdir -p app/{data,logs}/2026"
    ],
    "explanation": "Brace expansion happens in the shell before mkdir ever runs: `app/{logs,data}/2026` expands to the two words `app/logs/2026 app/data/2026`. The `-p` flag then creates every missing parent along both paths and stays silent if any already exist. Braces can be nested and combined — `{a,b}/{x,y}` generates all four combinations — which makes scaffolding an entire project tree a one-liner.",
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
    "answer": "sudo cp /etc/nginx/nginx.conf{,.bak}",
    "explanation": "Brace expansion is a shell feature that generates multiple strings from a compact pattern before the command runs. {,.bak} means \"and also with .bak appended\" — so file.txt{,.bak} expands to file.txt file.txt.bak, giving you both names in one go. {a,b,c} expands to three separate words. {1..10} generates a sequence. This happens entirely in the shell before the command sees it, so it works with any command. The most useful patterns: cp file.txt{,.bak} to backup, mkdir {src,tests,docs} to create multiple directories at once.",
    "usage": "Create a `.bak` backup copy of a file in one compact command before editing.",
    "examples": [
      "sudo cp /etc/nginx/nginx.conf{,.bak}  # backup before editing",
      "mv myapp.conf{,.old}  # rename with .old suffix",
      "cp file.txt{,.$(date +%F)}  # backup with date stamp",
      "mkdir -p project/{src,tests,docs}  # create 3 dirs in one command",
      "echo file_{1..5}.txt  # generates file_1.txt file_2.txt ... file_5.txt"
    ],
    "memoryTip": "{,.bak} = expand to '' and '.bak' — instant backup.",
    "outputExample": "$ sudo cp /etc/nginx/nginx.conf{,.bak}\n$ ls /etc/nginx/\nnginx.conf  nginx.conf.bak  sites-available  sites-enabled",
    "category": "FILE OPS"
  },
  {
    "id": "file31",
    "question": "Your project directory has accumulated dozens of `.tmp` scratch files scattered across subdirectories. What `find` command recursively locates and immediately deletes all files matching `*.tmp` without piping to `xargs rm`?",
    "answer": "find . -name '*.tmp' -delete",
    "altAnswers": [
      "find . -name '*.tmp' -exec rm {} +",
      "find . -type f -name '*.tmp' -delete",
      "find . -type f -name '*.tmp' -exec rm -f {} \\;",
      "find /tmp -name *.tmp -newer /tmp/build-start -delete",
      "find /var/log/myapp -name '*.log' -mtime +7 -type f -delete",
      "find /var/log/myapp -type f -name '*.log' -mtime +7 -delete"
    ],
    "explanation": "The `-delete` action makes find itself remove every file that matched the preceding tests, eliminating the `| xargs rm` or `-exec rm {} +` step entirely. It's efficient and handles odd filenames safely, but it's also irreversible — the universal safety habit is to run the identical command WITHOUT `-delete` first and eyeball the list of matches, then re-run with `-delete` appended. Note `-delete` must come after the tests, never before.",
    "usage": "Recursively find and delete all files matching a name pattern in one command — no pipe to `rm` needed.",
    "examples": [
      "find . -name '*.tmp' -delete",
      "find /var/cache/myapp -mtime +30 -delete  # delete files older than 30 days",
      "find . -type d -empty -delete  # remove empty directories",
      "find . -name '*.tmp'  # PREVIEW first — run without -delete to check",
      "find ~/Downloads -name '*.part' -delete  # clean up incomplete downloads",
      "touch /tmp/build-start; ./run-build.sh; find /tmp -name '*.tmp' -newer /tmp/build-start -delete"
    ],
    "memoryTip": "`-mtime +N` = older than N days. ALWAYS preview with `-print` before `-delete`. Add `-type f` to avoid deleting directories. Put `-delete` LAST.",
    "outputExample": "$ find . -name '*.tmp'  # preview first\n./build/tmp_stage1.tmp\n./build/tmp_stage2.tmp\n./cache/render.tmp\n$ find . -name '*.tmp' -delete\n$ find . -name '*.tmp'\n(no output)",
    "category": "FILE OPS"
  },
  {
    "id": "file32",
    "question": "A file named `server` in your current directory shows 0 bytes in `ls -l` but `du` says it's using 8KB of disk space. You need to see its inode-level metadata including exact byte size, allocated blocks, all three timestamps, and the inode number. What command shows all of that?",
    "answer": "stat server",
    "explanation": "ls -l shows file metadata but in a human-readable format that is hard to parse. stat shows the same information in a structured way designed for scripts and investigation. The output includes: inode number, block count, access/modify/change timestamps (three different times), file type, permissions in both octal and symbolic, owner UID/GID, and device information. The octal permissions (like 644) are what chmod expects, so stat saves you from mentally converting rwxr-xr-x. The three timestamps are: atime (last accessed), mtime (content modified), ctime (metadata changed).",
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
    "id": "file34",
    "question": "A script receives the full path `/var/log/nginx/access.log.1` as input and needs to extract just the filename `access.log.1` (without the directory prefix) to use as an output file name. What command strips the directory portion?",
    "answer": "basename /var/log/nginx/access.log.1",
    "explanation": "basename strips everything up to and including the last slash, leaving just the final path component — here `access.log.1`. It's pure string manipulation: the file doesn't need to exist. An optional second argument removes a trailing suffix too, so `basename path/file.csv .csv` yields `file`. Its counterpart `dirname` returns the other half (the directory portion), and together they let scripts split any path cleanly.",
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
    "answer": "dirname \"$INFILE\"",
    "altAnswers": [
      "dirname $INFILE"
    ],
    "explanation": "dirname strips the final path component and returns everything before the last slash — the directory that contains the file. Like basename it's pure string manipulation, so the path doesn't need to exist yet. The classic script pattern is `mkdir -p \"$(dirname \"$OUTFILE\")\"` to guarantee an output file's directory exists before writing. Quote the variable so paths containing spaces survive word splitting.",
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
    "question": "You received a large CSV file called 'bigfile.csv' and want to see just the header row and the first few data rows to understand its structure without printing all 50,000 lines. What command shows only the beginning of a file?",
    "answer": "head bigfile.csv",
    "altAnswers": [
      "head -n 10 bigfile.csv",
      "head -10 bigfile.csv"
    ],
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
    "answer": "grep upstream /var/log/nginx/error.log",
    "altAnswers": [
      "grep 'upstream' /var/log/nginx/error.log"
    ],
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
    "outputExample": "$ grep upstream /var/log/nginx/error.log\n2026-05-15 09:12:43 [error] upstream timed out\n2026-05-15 09:13:01 [error] upstream connection refused",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view5",
    "question": "You want to know exactly how many lines are in /etc/passwd and also see the total word count and byte count for the file. What command reports all three counts at once?",
    "answer": "wc /etc/passwd",
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
    "id": "view8",
    "question": "You want to display deploy.sh with every line preceded by its line number so you can reference specific lines when discussing the script with a colleague. What command adds line numbers to a file's output?",
    "answer": "nl deploy.sh",
    "altAnswers": [
      "awk '{print NR\": \"$0}' deploy.sh",
      "cat -n deploy.sh",
      "less -N deploy.sh",
      "nl -ba deploy.sh"
    ],
    "explanation": "This command acts like a word processor that adds line numbers in the margin before printing. The file itself is not changed — the numbers are only part of the display. This makes it easy to say \"the problem is on line 42\" when reviewing code or a configuration file with someone else.",
    "usage": "Display a file with sequential line numbers added to each content line — useful for code reviews and precise line references.",
    "examples": [
      "nl deploy.sh  # number non-blank lines",
      "nl -ba config.yml  # number every line (blanks too)",
      "cat -n deploy.sh  # equivalent, simpler (numbers all lines including blanks)",
      "nl -nrz deploy.sh  # zero-padded line numbers (000001, 000002, ...)",
      "awk '{print NR\": \"$0}' deploy.sh  # alternative via awk",
      "cat -n /etc/ssh/sshd_config  # number all lines including blanks"
    ],
    "memoryTip": "`nl` = Number Lines. Default skips blanks. For 'number absolutely everything' use `cat -n`. For inline numbering in `less`, press `=` or use `less -N file`.",
    "outputExample": "$ nl deploy.sh\n     1\t#!/bin/bash\n     2\tset -e\n      \n     3\techo 'Deploying...'\n     4\tcp -a dist/ /var/www/html/",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view9",
    "question": "A shell script 'script.sh' you copied from a Windows machine is failing mysteriously. You suspect it contains invisible carriage return characters causing the problem. What command reveals all non-printable characters — showing line endings, tabs, and control characters explicitly?",
    "answer": "cat -A script.sh",
    "explanation": "Normally you can only see the text in a file, not the invisible control characters that surround it. This option is like switching on an ultraviolet light that makes hidden marks visible: every line ending appears as a dollar sign, tabs appear as ^I, and Windows-style carriage returns appear as ^M. This is invaluable for diagnosing \"the script looks fine but doesn't work\" problems.",
    "usage": "Reveal all invisible characters in a text file — essential for diagnosing Windows line endings and hidden whitespace problems.",
    "examples": [
      "cat -A deploy.sh  # show all characters including ^M Windows line endings",
      "cat -A config.yml | grep '\\^M'  # find lines with Windows line endings",
      "dos2unix deploy.sh  # fix Windows line endings in place",
      "file deploy.sh  # often reports 'CRLF line terminators' for Windows files",
      "cat -E deploy.sh  # only $ line-end markers (won't render ^M itself)",
      "cat -T deploy.sh  # show only tabs as ^I"
    ],
    "memoryTip": "cat -A = cat with All characters visible. `$` at end of line = normal Unix newline. `^M$` = Windows CRLF ending (the ^M is the problem). `^I` = tab character.",
    "outputExample": "$ cat -A deploy.sh\n#!/bin/bash^M$\nset -e^M$\necho 'Deploying...' ^M$\n# ^M on every line = Windows CRLF line endings causing failures",
    "category": "VIEWING TEXT",
    "altAnswers": [
      "cat -e script.sh",
      "cat -v script.sh",
      "file script.sh",
      "hexdump -C script.sh",
      "od -c script.sh",
      "sed -n l script.sh"
    ]
  },
  {
    "id": "view10",
    "question": "You have 'access.log', an append-only log file where the newest entries are at the bottom, and you want to read it with the most recent entry first so you don't have to scroll to the end. What command reverses the line order of a file's output?",
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
    "question": "You need to email a 1.5GB database dump called 'database.dump' but email has a 25MB attachment limit. What command breaks it into 20MB pieces (using the default xaa, xab, ... naming) that can later be reassembled?",
    "answer": "split -b 20M database.dump",
    "explanation": "This command is like cutting a long document into chapters for easier handling — each piece gets a sequential name like xaa, xab, and so on. You can specify how big each piece should be. When you're ready to put it back together, you concatenate all the pieces in order and the original content is restored exactly.",
    "usage": "Divide a large file into smaller pieces for transport or parallel processing — reassemble with cat.",
    "examples": [
      "split -b 20M database-dump.sql email-part_  # 20 MB chunks named email-part_aa, email-part_ab, ...",
      "split -l 1000 huge.csv chunk_  # 1000 lines per file",
      "split -b 5M -d -a 3 archive.tar part_  # numeric suffix: part_000, part_001, ...",
      "cat email-part_* > restored-dump.sql  # reassemble in alphabetic order",
      "sha256sum database-dump.sql restored-dump.sql  # verify reassembly is bit-identical",
      "cat piece_aa piece_ab piece_ac > ubuntu.iso  # specific pieces in exact order"
    ],
    "memoryTip": "`split` defaults to 1000-line text chunks named `xaa, xab, ...`. Always pass a prefix (second arg) so you get readable filenames. Reassemble with plain `cat prefix_* > original`. For binary files use `-b SIZE`; for line-oriented files use `-l N`.",
    "outputExample": "$ ls -lh database.dump\n-rw-r--r-- 1 alice alice 1.5G May 15 10:00 database.dump\n$ split -b 20M database.dump\n$ ls -lh xa*\n-rw-r--r-- 1 alice alice 20M May 15 10:05 xaa\n-rw-r--r-- 1 alice alice 20M May 15 10:05 xab\n...",
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
    "answer": "grep -c timeout /var/log/nginx/error.log",
    "altAnswers": [
      "grep -c 'timeout' /var/log/nginx/error.log"
    ],
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
    "id": "view16",
    "question": "You have a list of deployment timestamps in 'timestamps.txt' and want to display them from newest to oldest — the most recent timestamp first and the oldest last. What flag reverses the sort order?",
    "answer": "sort -r timestamps.txt",
    "explanation": "Normally sorting arranges items from smallest to largest, or A to Z. Adding this option flips the direction entirely — the largest value or the last letter comes first. It's like reading a sorted list from the bottom up rather than the top down. This is especially useful for timestamps and numbers where \"biggest first\" is what you care about.",
    "usage": "Reverse the sort direction so the largest, newest, or last-alphabetically items appear first.",
    "examples": [
      "sort -r deploy-timestamps.txt  # newest timestamp first (lexicographic reverse)",
      "sort -nr scores.txt | head  # top 10 numerical values",
      "du -sh * | sort -hr  # biggest directories first (human-readable sizes)",
      "ls | sort -Vr  # reverse version-aware sort (v2.0 before v1.10)",
      "sort -k2 -nr data.txt  # sort by 2nd column, numerically, descending",
      "sort cities.txt  # alphabetical sort, output to terminal"
    ],
    "memoryTip": "`-r` = Reverse. Most useful in the combo `sort -nr` (numeric reverse) which answers 'who's on top of the leaderboard?' — pipe to `head` for a top-N list.",
    "outputExample": "$ cat scores.txt\n42\n7\n100\n23\n$ sort -nr scores.txt\n100\n42\n23\n7",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view17",
    "question": "You have a log file 'events.log' with thousands of event entries and want to see a frequency table — each unique event name listed alongside how many times it occurred, so you can identify the most common events. What pipeline produces that count-per-unique-value output?",
    "answer": "sort events.log | uniq -c",
    "altAnswers": [
      "awk '{c[$0]++} END {for (k in c) print c[k], k}' events.log",
      "sort events.log | uniq -c | sort -nr | head",
      "sort events.log | uniq -c | sort -rn"
    ],
    "explanation": "This two-step process first lines up all identical entries together (like sorting a deck of cards so all the aces are together, all the kings together, and so on), and then counts how many are in each group. The result is a list showing each unique value alongside how many times it appeared. It's the command-line equivalent of a spreadsheet pivot table's \"count\" summary.",
    "usage": "Build a frequency table of all unique values in a file — the canonical 'count occurrences of each value' pipeline.",
    "examples": [
      "sort events.log | uniq -c  # count occurrences of each unique event",
      "sort events.log | uniq -c | sort -rn  # ranked by frequency, highest first",
      "sort events.log | uniq -c | sort -rn | head  # top 10 most frequent",
      "awk '{print $7}' access.log | sort | uniq -c | sort -rn  # most-requested URLs",
      "sort ip-addresses.txt | uniq  # dedupe — sort first because uniq only sees adjacent dupes",
      "sort -u ip-addresses.txt  # one-step dedupe (same result)"
    ],
    "memoryTip": "'sort | uniq -c' = 'sort and count uniques'. Like taking inventory and counting how many of each item you have.",
    "outputExample": "$ sort events.log | uniq -c\n      3 connection_refused\n      1 disk_full\n      5 timeout\n      2 unauthorized\n$ sort events.log | uniq -c | sort -rn\n      5 timeout\n      3 connection_refused\n      2 unauthorized\n      1 disk_full",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view18",
    "question": "You have a fixed-width data file 'app.log' where the timestamp always occupies the first 19 characters (bytes) of each line. What command extracts exactly those first 19 characters from every line?",
    "answer": "cut -b 1-19 app.log",
    "altAnswers": [
      "awk '{print substr($0,1,19)}' app.log",
      "colrm 20 < app.log",
      "cut -b1-19 app.log",
      "cut -c 1-19 app.log",
      "sed 's/^\\(.\\{19\\}\\).*/\\1/' app.log"
    ],
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
    "altAnswers": [
      "awk -F: '{print $1}' /etc/passwd",
      "cut -d ':' -f 1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd",
      "cut -d: -f 1 /etc/passwd"
    ],
    "explanation": "This command is like asking a spreadsheet program to show you only one specific column. You tell it what character separates the columns (the colon in /etc/passwd) and which column number you want, and it extracts that column from every row. It's the quick way to pull a single field out of a structured text file without a full programming language.",
    "usage": "Extract a specific field by position from any delimiter-separated text file — faster than awk for simple column extraction.",
    "examples": [
      "cut -d: -f1 /etc/passwd  # extract usernames (field 1)",
      "cut -d: -f7 /etc/passwd  # extract login shells (field 7)",
      "cut -d, -f2,4 data.csv  # extract columns 2 and 4 from a CSV",
      "cut -d' ' -f1 access.log  # extract first space-delimited field (IP addresses)",
      "cut -d: -f1,6 /etc/passwd  # username and home directory",
      "cut -d, -f2,4 /tmp/sales.csv  # columns 2 and 4 of a simple CSV (no quoted commas!)"
    ],
    "memoryTip": "'cut -d: -f1' = 'cut delimiter colon field 1'. Like cutting out the first column from a spreadsheet.",
    "outputExample": "$ cut -d: -f1 /etc/passwd\nroot\ndaemon\nbin\nsys\nsync\ngames\nalice",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view20",
    "question": "You have names.txt with one name per line and scores.txt with one score per line, and you want to combine them side by side so each line shows 'name\\tscore'. What command merges files horizontally by joining corresponding lines?",
    "answer": "paste names.txt scores.txt",
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
    "id": "view21",
    "question": "You have a CSV export from your database at `/tmp/users.csv` with columns `id,name,email,role` and the values are hard to read because the column widths vary wildly. What command reformats it into neatly aligned columns on the terminal?",
    "answer": "column -t -s, /tmp/users.csv",
    "altAnswers": [
      "column -s, -t /tmp/users.csv",
      "cat /tmp/users.csv | column -t -s,"
    ],
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
    "altAnswers": [
      "hexdump -C /opt/app/bin/server",
      "od -A x -t x1z /opt/app/bin/server",
      "strings /opt/app/bin/server"
    ],
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
    "id": "view25",
    "question": "A CSV report file named `report.csv` has a summary/totals section in its last 3 lines that you want to exclude from processing. What `head` command prints all of the file's lines except the last 3?",
    "answer": "head -n -3 report.csv",
    "altAnswers": [
      "head -n-3 report.csv"
    ],
    "explanation": "By default head prints the first 10 lines — enough to see a file's format, headers, or first few log entries without loading the entire file. The -n flag controls the count. The unusual syntax head -n -3 means \"all lines except the last 3\" — useful when the last lines are footers or incomplete records. -c reads bytes instead of lines, which matters for binary files or when you need exactly N bytes. Combine with tail to extract any range: head -n 50 file | tail -n 10 gets lines 41-50.",
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
    "answer": "tail -n +2 /tmp/users.csv",
    "altAnswers": [
      "tail -n+2 /tmp/users.csv"
    ],
    "explanation": "Most useful for log files where the newest events are at the bottom. By default prints the last 10 lines. The -f flag makes it follow a file in real-time: it keeps watching and prints new lines as they arrive, the standard way to monitor a live service log. The unusual syntax tail -n +2 means \"start from line 2 and print everything to the end\" — skip a CSV header and dump the data section. -F (capital) handles log rotation by reopening the file if it gets replaced by a new one.",
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
    "answer": "sed -n '50,65p' /etc/myapp/settings.conf",
    "explanation": "sed is a stream editor — it reads input line by line, applies text transformation rules, and writes the result. Unlike interactive editors you use it in pipelines and scripts without opening a file. The s/old/new/ substitution is the workhorse: substitute the first match per line; add g for all matches. -i edits in place with an optional backup suffix. -n suppresses default output, used with p to print only matching lines. -e allows multiple expressions in one command. Think of sed as find-and-replace for the terminal.",
    "usage": "Print a specific line range from a file without loading the whole file — faster than an editor for spot-checking.",
    "examples": [
      "sed -n '50,65p' /etc/myapp/settings.conf",
      "sed -n '/START_BLOCK/,/END_BLOCK/p' /etc/myapp/settings.conf  # between patterns",
      "sed -n '50p' /etc/myapp/settings.conf  # just line 50",
      "sed -n '50,$p' /etc/myapp/settings.conf  # from line 50 to end of file"
    ],
    "memoryTip": "-n + Np = quiet, then print only line N (or range).",
    "outputExample": "$ sed -n '50,52p' /etc/myapp/settings.conf\ndb_host=localhost\ndb_port=5432\ndb_name=myapp_prod",
    "category": "VIEWING TEXT",
    "altAnswers": [
      "sed '50,65!d;65q' ...",
      "sed -n '50,65p; 65q' ..."
    ]
  },
  {
    "id": "view28",
    "question": "You're debugging 'access.log' and need to inspect only line 5. What `awk` one-liner uses the built-in record counter to print exactly that line and nothing else?",
    "answer": "awk 'NR==5' access.log",
    "explanation": "awk is a complete programming language designed for processing structured text. It reads input line by line, splits each line into fields ($1, $2, $NF for last), and applies pattern-action rules. The pattern is a condition; the action runs when the condition is true. BEGIN runs before any input; END runs after all input. This makes awk ideal for column extraction, field math, and filtered reporting. It has variables, loops, arrays, and printf formatting, making it more powerful than grep or sed for anything involving arithmetic or multi-column logic.",
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
    "answer": "comm expected.txt actual.txt",
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
    "outputExample": "$ comm expected.txt actual.txt\n\t\tdb1.internal\nweb1.internal\n\tweb2.internal\n# Column 1: only in expected, Column 2: only in actual, Column 3: in both",
    "category": "VIEWING TEXT"
  },
  {
    "id": "view30",
    "question": "After a build, you want to confirm that `dist/app.bin` is byte-for-byte identical to the previously verified `dist/app.bin.golden` reference file. What command checks binary equality and exits 0 if they match, non-zero if they differ?",
    "answer": "cmp dist/app.bin dist/app.bin.golden",
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
    "id": "re1",
    "question": "The file /tmp/access.log has four lines in this order: 'ERROR disk full', 'WARN disk nearly full', 'ERROR network down' and 'INFO saw ERROR in payload'. Using grep, print only the two lines that begin with ERROR - the fourth line contains the word but must not match.",
    "answer": "grep '^ERROR' /tmp/access.log",
    "altAnswers": [
      "grep ^ERROR /tmp/access.log",
      "grep -e '^ERROR' /tmp/access.log"
    ],
    "explanation": "^ is an anchor, not a character: it matches the zero-width position at the start of a line rather than consuming anything. So ^ERROR requires the five letters to sit at offset zero, which excludes the fourth line where ERROR appears in the middle. grep tests each line independently, so ^ means start-of-line, not start-of-file. Quoting the pattern is habit rather than necessity here, but it becomes essential the moment the pattern contains *, ? or a space.",
    "usage": "Filtering log severity levels, pulling a specific user's line out of /etc/passwd, listing indented versus unindented lines in a config, or finding function definitions that must start in column one.",
    "examples": [
      "grep '^ERROR' /tmp/access.log  # anchored: only lines starting with ERROR",
      "grep 'ERROR' /tmp/access.log  # unanchored: also matches ERROR mid-line",
      "grep -c '^ERROR' /tmp/access.log  # -c prints the count of matching lines instead",
      "grep -v '^#' /etc/fstab  # -v inverts: everything that is not a comment line"
    ],
    "memoryTip": "The caret points up at the top of the line, the dollar guards the end - and both are zero-width, matching a position rather than eating a character. That is why ^ERROR is still a five-character match. Watch the context though: inside square brackets a leading ^ means negation instead, an entirely different job.",
    "outputExample": "$ grep '^ERROR' /tmp/access.log\nERROR disk full\nERROR network down",
    "category": "REGEX"
  },
  {
    "id": "re2",
    "question": "The file /tmp/hosts.txt lists four names, one per line: web01.internal, db01.internal.bak, api02.internal and cache.internal.bak. Using grep, print only the two lines that end with 'internal' - the two .bak lines contain the word but must not match.",
    "answer": "grep 'internal$' /tmp/hosts.txt",
    "altAnswers": [
      "grep internal$ /tmp/hosts.txt",
      "grep -e 'internal$' /tmp/hosts.txt"
    ],
    "explanation": "$ anchors a pattern to the end of the line, matching the zero-width position just before the line break. Placing it after 'internal' demands that nothing follow those eight characters, which rules out the lines continuing with .bak. Because the anchor matches a position and not a character, the trailing newline itself is never part of the match. Anchoring at both ends with ^...$ pins a pattern to the whole line, which is how you test for exact equality.",
    "usage": "Matching by file extension in a list of paths, finding accounts with a given login shell in /etc/passwd, spotting lines with trailing whitespace, or picking out blank lines.",
    "examples": [
      "grep 'internal$' /tmp/hosts.txt  # anchored at the end",
      "grep '^web' /tmp/hosts.txt  # the other anchor, at the start",
      "grep -c '^$' /tmp/notes.txt  # ^ and $ with nothing between them: the idiom for counting blank lines",
      "grep -n ' $' /tmp/notes.txt  # a space immediately before end-of-line finds trailing whitespace"
    ],
    "memoryTip": "Dollar sign at the end, like the total at the bottom of a receipt. Pairing it with ^ pins both ends, so ^$ is the pattern for a line with nothing in it at all - a genuinely useful idiom for counting or stripping blanks. Neither anchor consumes a character, so neither ever includes the newline in the match.",
    "outputExample": "$ grep 'internal$' /tmp/hosts.txt\nweb01.internal\napi02.internal",
    "category": "REGEX"
  },
  {
    "id": "re3",
    "question": "The file /tmp/tickets.txt has four lines: 'A1234 open', 'b5678 closed', 'C9012 open' and '7xyz open'. Using grep, print only the two lines whose very first character is an uppercase letter, using a bracketed range.",
    "answer": "grep '^[A-Z]' /tmp/tickets.txt",
    "altAnswers": [
      "grep '^[[:upper:]]' /tmp/tickets.txt",
      "grep -e '^[A-Z]' /tmp/tickets.txt"
    ],
    "explanation": "A bracket expression matches exactly one character from the set inside it, and a hyphen between two characters denotes an inclusive range in the locale's collating sequence. Combined with the ^ anchor outside the brackets, ^[A-Z] requires the line's first character to be one uppercase letter, rejecting the lowercase b and the digit 7. Note the two meanings of ^: outside brackets it anchors, inside brackets and in first position it negates. Most regex metacharacters, including . and *, lose their special meaning inside brackets.",
    "usage": "Classifying lines by their first character: separating comments from directives, finding entries that start with a digit, or picking out capitalised headings in a plain-text document.",
    "examples": [
      "grep '^[A-Z]' /tmp/tickets.txt  # first character is an uppercase letter",
      "grep '^[[:upper:]]' /tmp/tickets.txt  # POSIX class, correct in every locale",
      "grep '^[0-9]' /tmp/tickets.txt  # first character is a digit: matches 7xyz",
      "grep '^[^A-Z]' /tmp/tickets.txt  # leading ^ inside brackets negates the set"
    ],
    "memoryTip": "Brackets are a one-character menu and the shell of the pattern must pick exactly one item. The trap is that ^ has two unrelated jobs: outside the brackets it anchors to line start, inside them and only in first position it inverts the set. Prefer [[:upper:]] over [A-Z] in scripts, since ranges follow locale collation.",
    "outputExample": "$ grep '^[A-Z]' /tmp/tickets.txt\nA1234 open\nC9012 open",
    "category": "REGEX"
  },
  {
    "id": "re4",
    "question": "The file /tmp/codes.txt has four lines: 'order 12 pending', 'order 345 shipped', 'order 6789 pending' and 'order 42 shipped'. Using grep in extended-regex mode, print the two lines that contain a run of at least three consecutive digits, expressing the count as a brace quantifier rather than repeating the class.",
    "answer": "grep -E '[0-9]{3}' /tmp/codes.txt",
    "altAnswers": [
      "grep '[0-9]\\{3\\}' /tmp/codes.txt",
      "grep -E '[[:digit:]]{3}' /tmp/codes.txt"
    ],
    "explanation": "{3} is an interval quantifier: it requires exactly three repetitions of the preceding atom. Since the pattern is not anchored, grep only needs to find three consecutive digits somewhere in the line, so the four-digit 6789 matches too - {3} means 'at least three here', not 'exactly three in total'. The reason -E is required is the basic-versus-extended split: in basic regex the braces are literal characters and you must write \\{3\\}, so grep '[0-9]{3}' finds nothing at all and exits 1.",
    "usage": "Validating fixed-width fields: three-digit area codes, five-digit postcodes, hex colour values, or finding overly long runs of anything in generated output.",
    "examples": [
      "grep -E '[0-9]{3}' /tmp/codes.txt  # three or more consecutive digits",
      "grep '[0-9]{3}' /tmp/codes.txt  # in basic regex the braces are literal: no matches",
      "grep -E '\\b[0-9]{2}\\b' /tmp/codes.txt  # boundaries pin it to exactly two: the 12 and 42 lines",
      "grep -E '[0-9]{2,4}' /tmp/codes.txt  # a range: between two and four repetitions"
    ],
    "memoryTip": "Braces are a repetition count: {3} exactly three, {2,4} two to four, {2,} two or more. They are the headline difference between basic and extended regex - BRE needs \\{3\\} while ERE takes {3} plain, which is why the same pattern silently finds nothing until you add -E. Without anchors, {3} only sets a minimum.",
    "outputExample": "$ grep -E '[0-9]{3}' /tmp/codes.txt\norder 345 shipped\norder 6789 pending",
    "category": "REGEX"
  },
  {
    "id": "re5",
    "question": "The file /tmp/animals.txt has five lines: 'the cat sat', 'a dog barked', 'concatenate the strings', 'a bird flew' and 'dogma is rigid'. Using a single extended-regex alternation in one grep, print the four lines that contain either cat or dog anywhere in them.",
    "answer": "grep -E 'cat|dog' /tmp/animals.txt",
    "altAnswers": [
      "grep -E 'dog|cat' /tmp/animals.txt",
      "grep 'cat\\|dog' /tmp/animals.txt"
    ],
    "explanation": "The | operator means alternation: match the expression on its left or the one on its right. It has the lowest precedence of all regex operators, so cat|dog splits at the bar into two whole alternatives rather than binding to a single character. In extended regex the bar is special on its own; in basic regex it is a literal character and GNU grep requires the escaped form \\|. Order does not affect the output, since grep still prints matching lines in file order.",
    "usage": "Searching for several terms in one pass: matching multiple log levels, finding any of a set of hostnames, or grepping a codebase for several function names at once without piping grep into grep.",
    "examples": [
      "grep -E 'cat|dog' /tmp/animals.txt  # either alternative, anywhere in the line",
      "grep 'cat\\|dog' /tmp/animals.txt  # basic regex needs the bar escaped",
      "grep -E '^(cat|dog)' /tmp/animals.txt  # parentheses limit the alternation's reach",
      "grep -E 'ERROR|WARN' /tmp/access.log  # the everyday use: several severities at once"
    ],
    "memoryTip": "The bar is 'or', and it is the greediest operator in the sense that it binds last: ^cat|dog reads as '^cat' or 'dog', not '^(cat|dog)'. Wrap alternatives in parentheses whenever an anchor or quantifier should apply to all of them. In basic regex the bar is just a character, so BRE needs \\| to get the operator.",
    "outputExample": "$ grep -E 'cat|dog' /tmp/animals.txt\nthe cat sat\na dog barked\nconcatenate the strings\ndogma is rigid",
    "category": "REGEX"
  },
  {
    "id": "re6",
    "question": "Still working on that /tmp/animals.txt with its five lines. Now print only the single line where cat appears as a standalone word, so that 'concatenate the strings' is excluded. Use word-boundary assertions on both sides inside the pattern itself.",
    "answer": "grep '\\bcat\\b' /tmp/animals.txt",
    "altAnswers": [
      "grep '\\<cat\\>' /tmp/animals.txt",
      "grep -w cat /tmp/animals.txt"
    ],
    "explanation": "\\b is a zero-width assertion that matches wherever a word constituent (letter, digit or underscore) meets a non-constituent or a line edge. Wrapping cat in \\b on both sides therefore demands that the letters are not touching more word characters, which rejects 'concatenate' where c is preceded by n and t is followed by e. GNU also provides the directional pair \\< and \\> for start and end of word specifically. All of these are GNU extensions rather than POSIX, so they are not guaranteed on every platform's grep.",
    "usage": "Renaming a variable or function without hitting every name that contains it, searching logs for a short identifier like 'id' or 'db', or finding a word in prose where substring matches would drown the result.",
    "examples": [
      "grep '\\bcat\\b' /tmp/animals.txt  # cat as a whole word only",
      "grep '\\<cat\\>' /tmp/animals.txt  # GNU's directional pair: word start and word end",
      "grep -w cat /tmp/animals.txt  # the flag form; applies the boundary to the whole pattern",
      "grep 'cat' /tmp/animals.txt  # unbounded: also matches inside concatenate"
    ],
    "memoryTip": "b is for boundary, and like ^ and $ it is zero-width - it marks the seam between a word character and anything else rather than matching a character of its own. \\< and \\> are the directional versions, pointing into the word from each side. All three are GNU extensions, so reach for the -w flag when portability matters.",
    "outputExample": "$ grep '\\bcat\\b' /tmp/animals.txt\nthe cat sat",
    "category": "REGEX"
  },
  {
    "id": "re7",
    "question": "The file /tmp/names.txt holds three lines, each two words: 'John Smith', 'Ada Lovelace' and 'Grace Hopper'. Using sed in extended-regex mode with two capture groups and a substitution, print each line with the two words swapped, so the first line comes out as 'Smith John'.",
    "answer": "sed -E 's/(.*) (.*)/\\2 \\1/' /tmp/names.txt",
    "altAnswers": [
      "sed -r 's/(.*) (.*)/\\2 \\1/' /tmp/names.txt",
      "sed 's/\\(.*\\) \\(.*\\)/\\2 \\1/' /tmp/names.txt",
      "sed -E 's/(\\w+) (\\w+)/\\2 \\1/' /tmp/names.txt"
    ],
    "explanation": "Parentheses do two jobs at once: they group, and they capture. Each group is numbered from the left by its opening parenthesis, and \\1 and \\2 in the replacement text reinsert whatever those groups actually matched. Quantifiers here are greedy: .* takes as much as it can while still allowing the rest of the pattern to match. On a three-word line 'Ada Van Lovelace' the first group therefore swallows 'Ada Van' and only the final word lands in group two. POSIX regex has no lazy .*? to change that, so use a narrower atom such as [^ ]* instead.",
    "usage": "Reformatting structured text without a full parser: swapping CSV columns, rewriting log timestamps, turning 'key: value' into 'value = key', or restructuring paths in bulk.",
    "examples": [
      "sed -E 's/(.*) (.*)/\\2 \\1/' /tmp/names.txt  # swap two fields using both groups",
      "sed 's/\\(.*\\) \\(.*\\)/\\2 \\1/' /tmp/names.txt  # basic regex needs escaped parentheses",
      "sed -E 's/(.*) (.*)/\\2, \\1/' /tmp/names.txt  # the replacement is free text plus backreferences",
      "sed -E 's/([^ ]*) (.*)/\\2 \\1/' /tmp/names.txt  # [^ ]* is non-greedy by construction"
    ],
    "memoryTip": "Count the opening parentheses left to right and you have your group numbers; \\1 and \\2 paste back what they caught. The catch is greed: .* grabs the longest match that still lets the pattern finish, so on 'Ada Van Lovelace' group one takes two words. POSIX has no lazy .*?, so narrow the atom to [^ ]* when you mean one field.",
    "outputExample": "$ sed -E 's/(.*) (.*)/\\2 \\1/' /tmp/names.txt\nSmith John\nLovelace Ada\nHopper Grace",
    "category": "REGEX"
  },
  {
    "id": "re8",
    "question": "The file /tmp/paths.txt has five lines: /var/log/syslog.log, /var/log/syslog.log.1, report.log, notes.txt and mylog. The shell glob *.log would select a whole name ending in .log, but pasted into grep it matches nothing at all, because grep reads * as 'zero or more of the previous atom' and . as 'any character'. Write the grep whose pattern is the true regex translation of that glob: anchored at both ends, with the dot escaped, so it prints the two .log lines and not mylog.",
    "answer": "grep '^.*\\.log$' /tmp/paths.txt",
    "altAnswers": [
      "grep -E '^.*\\.log$' /tmp/paths.txt",
      "grep '\\.log$' /tmp/paths.txt",
      "grep -x '.*\\.log' /tmp/paths.txt"
    ],
    "explanation": "Globs and regexes share punctuation and mean different things by it. In a glob * is 'any run of characters' all by itself; in a regex * is a quantifier that needs something to repeat, so the pattern *.log has nothing to its left and matches no line here. The glob equivalent of a bare * is the regex .* - a dot meaning any character, quantified by zero or more. The dot in .log must then be escaped, because an unescaped . matches any character and would let mylog through on its own l. Finally a glob is matched against the whole name, whereas grep matches anywhere in the line, which is what the ^ and $ anchors restore.",
    "usage": "Any time you carry a filename pattern from the shell into grep, awk, sed, a .gitignore-style config or a programming language's regex library, and the same characters quietly change meaning underneath you.",
    "examples": [
      "grep '^.*\\.log$' /tmp/paths.txt  # the faithful translation of the glob *.log",
      "grep '*.log' /tmp/paths.txt  # the naive paste: * has nothing to repeat, no matches",
      "grep '.log$' /tmp/paths.txt  # unescaped dot is 'any character', so mylog matches too",
      "grep -F '.log' /tmp/paths.txt  # -F turns off regex entirely: every character is literal"
    ],
    "memoryTip": "Same asterisk, different job: a glob's * is 'anything', a regex's * is 'more of the thing before me'. Translate a glob by expanding * to .*, ? to ., escaping every literal dot, and adding ^ and $ - because globs match a whole name while grep matches anywhere in a line. When in doubt, -F switches regex off completely.",
    "outputExample": "$ grep '^.*\\.log$' /tmp/paths.txt\n/var/log/syslog.log\nreport.log",
    "category": "REGEX"
  },
  {
    "id": "text3",
    "question": "Your server's 'ps aux' output has many columns. You want to print only the second column (the PID) from each line. What command extracts a specific whitespace-delimited column from text?",
    "answer": "ps aux | awk '{print $2}'",
    "explanation": "Some text files and command outputs are like spreadsheets — each line has the same structure with values separated by spaces. This command lets you say \"show me only column 2\" from every row, regardless of how many other columns exist, without any complex scripting.",
    "usage": "Extract the PID column (column 2) from 'ps aux' output to get a clean list of running process IDs.",
    "examples": [
      "awk '{print $1, $3}' /var/log/access.log  # Print columns 1 and 3",
      "awk '$3 > 100 {print $1}' /var/log/metrics.log  # Print lines where column 3 > 100",
      "awk '{sum += $2} END {print sum}' /var/log/bytes.log  # Sum column 2",
      "df -h | awk '{print $1, $5}' # Print filesystem and percent used",
      "awk '$5 > 80 {print $1}' /tmp/disk.txt  # Print lines where column 5 > 80%",
      "awk '{sum += $1} END {print sum}' /tmp/bytes.txt  # Sum column 1"
    ],
    "memoryTip": "'awk' = powerful text processor. Like using advanced filtering to extract exactly what you need.",
    "outputExample": "$ awk -F: '{print $1}' /etc/passwd\nroot\ndaemon\nbin\n# without -F: the default separator is whitespace, so $1 would be the ENTIRE line",
    "category": "TEXT PROCESSING",
    "altAnswers": [
      "df -h | awk '{print $1,$5}'"
    ]
  },
  {
    "id": "text5",
    "question": "You generated a list of 500 email addresses in /tmp/emails.txt but suspect many are repeated. What pipeline deduplicates the list, keeping only one copy of each address?",
    "answer": "sort /tmp/emails.txt | uniq",
    "altAnswers": [
      "sort -u /tmp/emails.txt"
    ],
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
    "answer": "tr -d '\\r' < /etc/myapp/settings.conf",
    "altAnswers": [
      "dos2unix /etc/myapp/settings.conf",
      "perl -pi -e 's/\\r//g' ...",
      "sed -i 's/\\r$//' /etc/myapp/settings.conf",
      "sed -i 's/\\r//g' ..."
    ],
    "explanation": "This command is a character-by-character substitution machine. You tell it which characters to look for and what to replace them with (or delete them entirely). It's perfect for mechanical transformations like stripping Windows line endings or converting uppercase to lowercase throughout a stream.",
    "usage": "Print /etc/myapp/settings.conf with every carriage return (\\r) removed. `tr` only writes to standard output — the file on disk is untouched, so to actually fix it you redirect and replace: `tr -d '\\r' < settings.conf > settings.unix.conf && mv settings.unix.conf settings.conf` (or use `dos2unix`, which edits in place).",
    "examples": [
      "tr 'a-z' 'A-Z' < /etc/myapp/settings.conf  # uppercase the file",
      "tr -d '\\r' < /etc/myapp/settings.conf > /tmp/settings_unix.conf  # strip CRs from a Windows file",
      "echo 'eth0,eth1,eth2' | tr ',' '\\n'  # turn comma list into one-per-line",
      "echo 'hello   world' | tr -s ' '  # squeeze multiple spaces to one",
      "tr -dc 'a-zA-Z0-9' < /dev/urandom | head -c 16  # random 16-char password",
      "echo ' a b c ' | tr -d '[:space:]'  # abc"
    ],
    "memoryTip": "`tr` = TRanslate. Remember: NO FILENAME ARG — always use `<` or a pipe. Pair-think: `tr` for chars, `sed` for patterns, `awk` for fields/columns.",
    "outputExample": "$ echo 'Hello World' | tr 'a-z' 'A-Z'\nHELLO WORLD\n$ echo 'eth0,eth1,eth2' | tr ',' '\\n'\neth0\neth1\neth2\n$ echo 'aaabbbccc' | tr -s 'abc'\nabc",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text8",
    "question": "You have two files: /tmp/usernames.txt (one username per line) and /tmp/emails.txt (one email per line, same order). What command combines them into a single two-column tab-separated file?",
    "answer": "paste /tmp/usernames.txt /tmp/emails.txt",
    "explanation": "Where stacking files on top of each other gives you more rows, this command puts files side by side to give you more columns. The first line from file one and the first line from file two become one combined line, separated by a tab. It's the horizontal equivalent of stacking.",
    "usage": "Combine /tmp/usernames.txt and /tmp/emails.txt side by side with the default tab delimiter to produce a user-email mapping.",
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
    "id": "text15",
    "question": "A build script outputs hostnames in uppercase (WEBSERVER1, DBSERVER1) but your config file expects them in lowercase. What command converts uppercase letters to lowercase on stdin?",
    "answer": "tr 'A-Z' 'a-z'",
    "altAnswers": [
      "awk '{print tolower($0)}'",
      "dd conv=lcase",
      "sed 's/.*/\\L&/'",
      "tr '[:upper:]' '[:lower:]'"
    ],
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
    "id": "text17",
    "question": "What command — the one POSIX recommends over `echo` because its output is portable and format-controlled — would you use to render 'web1: 99%' from a hostname and a number in a script?",
    "answer": "printf '%s: %d%%\\n' web1 99",
    "explanation": "This command works like a fill-in-the-blank template. You write the format with placeholders that say \"put a string here\" or \"put a number here,\" then supply the actual values afterward. The result is precisely formatted, consistent output — unlike `echo`, which behaves differently across shells.",
    "usage": "Print a formatted status line 'web1: 99%' with consistent field widths using variables for hostname and percentage.",
    "examples": [
      "printf '%-10s %5d%%\\n' web1 99  # Left-aligned hostname, right-aligned percentage",
      "printf '%x\\n' 255  # Convert to hexadecimal: ff",
      "printf '%.2f\\n' 3.14159  # Round to 2 decimal places: 3.14"
    ],
    "memoryTip": "'printf' = formatted print. Like using a template to format output nicely.",
    "outputExample": "$ printf '%s: %d%%\\n' web1 99\nweb1: 99%",
    "category": "TEXT PROCESSING",
    "altAnswers": [
      "echo \"$host: $pct%\"",
      "printf \"%s: %s%%\\n\" \"$host\" \"$pct\""
    ]
  },
  {
    "id": "text18",
    "question": "You want to find lines in /var/log/auth.log that contain either 'Failed password' or 'Invalid user'. What single grep command matches both patterns on the same file?",
    "answer": "grep -E 'Failed password|Invalid user' /var/log/auth.log",
    "altAnswers": [
      "egrep 'Failed password|Invalid user' /var/log/auth.log",
      "grep 'Failed password\\|Invalid user' /var/log/auth.log",
      "grep -E '(Failed password|Invalid user)' /var/log/auth.log",
      "grep -e 'Failed password' -e 'Invalid user' /var/log/auth.log"
    ],
    "explanation": "Extended regular expressions let you describe \"match this OR that\" patterns in a single command. Instead of running grep twice and combining the output, you write a single pattern with a pipe character between the alternatives, and every line matching either phrase is returned.",
    "usage": "Find all lines in /var/log/auth.log that contain either 'Failed password' or 'Invalid user' to identify login attack patterns.",
    "examples": [
      "grep -E '^[0-9]+' /var/log/syslog  # Lines starting with digits",
      "grep -E '(Failed password|Invalid user)' /var/log/auth.log  # Lines with either pattern",
      "grep -E '[a-z]+@[a-z]+\\.[a-z]+' /tmp/contacts.txt  # Email-like patterns",
      "grep -F 'Failed password' /var/log/auth.log  # -F = literal string, no regex. Note: egrep/fgrep still run but GNU grep 3.8+ warns 'egrep is obsolescent; using grep -E' — write grep -E / grep -F"
    ],
    "memoryTip": "'grep -E' = extended patterns. Like using powerful search rules to find things.",
    "outputExample": "$ grep -E '(Failed password|Invalid user)' /var/log/auth.log\nMay 17 14:23:01 web1 sshd: Failed password for root from 203.0.113.5 port 54321\nMay 17 14:23:15 web1 sshd: Invalid user admin from 203.0.113.5 port 54322",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text19",
    "question": "You want to sort a list of domain names in /tmp/domains.txt by their top-level domain suffix (the part after the last dot). What trick uses a command that reverses each line's characters to accomplish this?",
    "answer": "rev /tmp/domains.txt | sort | rev",
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
    "answer": "expand -t 4 /home/alice/code/myapp/app.py",
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
    "id": "text21",
    "question": "A CSV file at /var/data/sales.csv has columns: date, region, revenue. You want to print only the region column for every row. Which awk command does this?",
    "answer": "awk -F, '{print $2}' /var/data/sales.csv",
    "altAnswers": [
      "awk -F ',' '{print $2}' /var/data/sales.csv",
      "awk -F, '{ print $2 }' /var/data/sales.csv"
    ],
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
    "question": "A file /var/data/response_times.txt contains one millisecond value per line. You want to sum all the values to find the total, accumulating into an awk variable named sum. Which awk command produces that sum?",
    "answer": "awk '{sum+=$1} END {print sum}' /var/data/response_times.txt",
    "altAnswers": [
      "awk '{sum += $1} END {print sum}' /var/data/response_times.txt",
      "awk '{sum+=$1}END{print sum}' /var/data/response_times.txt",
      "awk '{ sum += $1 } END { print sum }' /var/data/response_times.txt"
    ],
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
    "altAnswers": [
      "grep -A3 'PANIC' /var/log/app.log",
      "grep -A 3 PANIC /var/log/app.log",
      "grep -A3 PANIC /var/log/app.log"
    ],
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
    "altAnswers": [
      "grep -l proxy_pass /etc/nginx/conf.d/*.conf"
    ],
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
    "question": "An nginx access log at /var/log/nginx/access.log contains lines with IP addresses and you want to extract just the IP addresses, one per line, using the extended regex '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+'. Which grep command prints only the matching portion of each line?",
    "answer": "grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' /var/log/nginx/access.log",
    "altAnswers": [
      "grep -Eo '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' /var/log/nginx/access.log",
      "grep -o -E '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' /var/log/nginx/access.log",
      "grep -E -o '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' /var/log/nginx/access.log"
    ],
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
    "question": "You want to find all lines in /var/log/app.log matching the Perl-compatible pattern '\\d{3}\\s+\\d{4}' — a 3-digit status code, whitespace, then a 4-digit request ID. Standard grep does not understand \\d. Which grep command enables that shorthand?",
    "answer": "grep -P '\\d{3}\\s+\\d{4}' /var/log/app.log",
    "explanation": "Standard grep does not understand \\d for digits — you would have to write [0-9] instead. Adding this flag switches grep to Perl-compatible regular expressions, which support \\d, \\w, \\s, lookaheads, and other powerful constructs unavailable in basic regex.",
    "usage": "Enable Perl-compatible regex in grep for shorthand classes and lookahead/lookbehind assertions.",
    "examples": [
      "grep -P '\\d{3}-\\d{4}' /var/log/app.log  # Phone-like patterns",
      "grep -P '(?<=Bearer )\\S+' /var/log/nginx/access.log  # Lookbehind",
      "grep -Pi '\\bemail\\b.*@' /var/data/users.txt"
    ],
    "memoryTip": "-P = Perl regex flavor.",
    "outputExample": "$ echo '404 1234 GET /index.html' | grep -P '\\d{3}\\s+\\d{4}'\n404 1234 GET /index.html\n$ echo '404 12' | grep -P '\\d{3}\\s+\\d{4}'\n$  # no match — request ID is not 4 digits",
    "category": "TEXT PROCESSING"
  },
  {
    "id": "text30",
    "question": "A UTF-8 CSV export at /var/data/export.csv from a European database uses accented characters like é and ü, but your downstream parser only accepts ASCII. Output the converted file as `/var/data/export_ascii.csv`. How do you convert the file to ASCII with iconv, substituting accented characters with their closest ASCII equivalents?",
    "answer": "iconv -f UTF-8 -t ASCII//TRANSLIT /var/data/export.csv > /var/data/export_ascii.csv",
    "explanation": "Different systems, programs, and historical files use different character encodings. UTF-8 is the modern standard, but you will encounter Latin-1 (ISO-8859-1), Windows-1252, Shift-JIS, and others. iconv converts between them. -f specifies the FROM encoding, -t specifies the TO encoding. -l lists all supported encodings. Without knowing the source encoding the conversion is impossible — file --mime-encoding filename can often detect it. Incorrect encoding causes mojibake (garbled characters). UTF-8 with BOM (byte order mark) is a common Windows legacy that iconv can strip: convert from UTF-8-BOM to UTF-8.",
    "usage": "Convert a UTF-8 text file to ASCII, substituting accented characters with close ASCII equivalents.",
    "examples": [
      "iconv -f UTF-8 -t ASCII//TRANSLIT /var/data/export.csv > /var/data/export_ascii.csv",
      "iconv -f WINDOWS-1252 -t UTF-8 /tmp/legacy.txt > /tmp/legacy_utf8.txt",
      "iconv -l | head  # List all supported encodings"
    ],
    "memoryTip": "iconv -f FROM -t TO; //TRANSLIT = best-effort ASCII substitution.",
    "outputExample": "$ echo 'café résumé' | iconv -f UTF-8 -t ASCII//TRANSLIT\ncafe resume",
    "category": "TEXT PROCESSING",
    "altAnswers": [
      "iconv -c -f UTF-8 -t ASCII//TRANSLIT ...",
      "iconv -f utf-8 -t ascii//TRANSLIT ... -o ..."
    ]
  },
  {
    "id": "json1",
    "question": "A webhook has dumped its entire payload as one unbroken line into /tmp/payload.json and you cannot read the nesting. You want it reprinted to your terminal with each key on its own line and nested objects indented, leaving the file itself untouched. What command prints the formatted version?",
    "answer": "jq '.' /tmp/payload.json",
    "altAnswers": [
      "jq . /tmp/payload.json",
      "python3 -m json.tool /tmp/payload.json"
    ],
    "explanation": "The filter '.' is the identity filter: it names the input document and returns it unchanged. Nothing is transformed -- the reformatting is simply what the tool's printer always does on the way out, indenting two spaces per level and putting one key per line. That is why '.' is also the cheapest validity test you have: a document that parses gets pretty-printed, a document that does not gets a parse error naming the line and column, and a non-zero exit status.",
    "usage": "Making a minified API response, a log line or a config file readable before you start picking fields out of it.",
    "examples": [
      "jq '.' /tmp/payload.json  # identity filter: reformat, change nothing",
      "jq -c '.' /tmp/payload.json  # the opposite: compact each document onto one line",
      "jq --indent 4 '.' /tmp/payload.json  # widen the indent from the default two spaces",
      "jq -e '.' /tmp/payload.json >/dev/null  # use it purely as a validator, via the exit status"
    ],
    "memoryTip": "Read the dot as the word 'this'. Every filter in this language is a path starting from 'this document', so '.' alone means 'this document, unchanged' -- exactly like a lone . means the current directory in a shell. Once that clicks, .name, .[0] and .a.b all read as ordinary paths hanging off the same root.",
    "outputExample": "$ cat /tmp/payload.json\n{\"event\":\"push\",\"repo\":{\"name\":\"glados\",\"private\":true},\"commits\":2}\n$ jq '.' /tmp/payload.json\n{\n  \"event\": \"push\",\n  \"repo\": {\n    \"name\": \"glados\",\n    \"private\": true\n  },\n  \"commits\": 2\n}",
    "category": "JSON & DATA"
  },
  {
    "id": "json2",
    "question": "/tmp/status.json holds a flat object with the keys name, version, uptime and healthy. You want to print just the value stored under version, still in its JSON form with the quotes intact. What command prints it?",
    "answer": "jq '.version' /tmp/status.json",
    "altAnswers": [
      "jq .version /tmp/status.json"
    ],
    "explanation": "A leading dot followed by a key name is a path expression: it descends from the root document into that one member and emits its value. Because the output is still JSON, a string comes back wrapped in double quotes -- that is not decoration, it is the value's type showing through, and it is what lets you chain further filters onto the result. A key that does not exist is not an error; you get the JSON value null, which is why a typo in the field name fails quietly rather than loudly.",
    "usage": "Pulling one field out of an API response or a service's status endpoint, for logging, comparison or a version gate.",
    "examples": [
      "jq '.version' /tmp/status.json  # one member of the root object",
      "jq '.repo.name' /tmp/payload.json  # dotted path descends through nested objects",
      "jq '.\"content-type\"' /tmp/headers.json  # quote keys containing dashes or spaces",
      "jq '.version, .healthy' /tmp/status.json  # comma emits several values, one per line"
    ],
    "memoryTip": "The syntax deliberately mirrors JavaScript member access, obj.version, with the object name replaced by the bare dot that means 'this document'. So .version reads as 'this document's version'. Keep in mind that a missing key yields null rather than an error -- if you need a missing field to be fatal, add -e and check the exit status.",
    "outputExample": "$ jq '.version' /tmp/status.json\n\"3.2.1\"",
    "category": "JSON & DATA"
  },
  {
    "id": "json3",
    "question": "/tmp/containers.json is a JSON array of objects, each carrying name, status and cpu. You want the name value of every element printed one per line, still JSON-quoted, without knowing in advance how many elements there are. What command produces that?",
    "answer": "jq '.[].name' /tmp/containers.json",
    "altAnswers": [
      "jq '.[] | .name' /tmp/containers.json",
      "jq .[].name /tmp/containers.json"
    ],
    "explanation": "Empty square brackets are the iterator: applied to an array they emit each element as a separate value in the output stream, and everything to the right of them runs once per element. So .[] turns one array into three documents, and the trailing .name then plucks that field from each -- which is why you get three lines rather than one array. Put an index inside the brackets, as in .[0], and you get exactly one element instead. The same iterator works on objects, where it emits the values and discards the keys.",
    "usage": "Flattening an array response -- container names, user logins, release tags -- into a line-per-record stream you can pipe into a shell loop.",
    "examples": [
      "jq '.[].name' /tmp/containers.json  # every element's name, one JSON value per line",
      "jq '.[0].name' /tmp/containers.json  # just the first element's name",
      "jq '.[-1].name' /tmp/containers.json  # negative index counts back from the end",
      "jq 'length' /tmp/containers.json  # how many elements the array holds",
      "jq '[.[].name]' /tmp/containers.json  # wrap the stream back up into a single JSON array"
    ],
    "memoryTip": "Think of [] as an open box you tip out: .[] pours the array's contents into the output stream so that later filters see one item at a time, while [ ... ] wrapped around a filter scoops a stream back into an array. Iterate with .[], index with .[0], collect with [...]. Empty brackets mean 'all of them, one at a time'.",
    "outputExample": "$ jq '.[].name' /tmp/containers.json\n\"web\"\n\"db\"\n\"cache\"",
    "category": "JSON & DATA"
  },
  {
    "id": "json4",
    "question": "A deploy script captures the token field from /tmp/session.json into a shell variable, but the value arrives wrapped in literal double quotes because JSON strings print as JSON, and the API rejects it. You need that field emitted as a bare unquoted string instead. What command prints it?",
    "answer": "jq -r '.token' /tmp/session.json",
    "altAnswers": [
      "jq --raw-output '.token' /tmp/session.json",
      "jq -r .token /tmp/session.json"
    ],
    "explanation": "By default every value leaves the tool as valid JSON, so a string keeps its surrounding quotes and its backslash escapes -- correct if the next stage is another JSON parser, wrong if the next stage is a shell variable or an HTTP header. Raw output mode strips the quotes and unescapes the content, but only for values that are strings: numbers, booleans, objects and arrays are unaffected, because there is no quoting to remove. That selectivity is the point -- -r is safe to leave on when you are extracting a mix of fields.",
    "usage": "Assigning a JSON field to a shell variable, or feeding one into curl, ssh or a filename, where stray quotes become part of the value.",
    "examples": [
      "jq -r '.token' /tmp/session.json  # bare string, ready for TOKEN=$(...)",
      "jq '.token' /tmp/session.json  # default: quoted, because that is valid JSON",
      "jq -r '.expires_in' /tmp/session.json  # numbers are unchanged: -r only affects strings",
      "jq -r '.[].name' /tmp/containers.json  # unquoted lines, ideal for a while read loop",
      "jq -j -r '.token' /tmp/session.json  # -j also drops the trailing newline"
    ],
    "memoryTip": "r is for raw -- as in raw text rather than raw JSON. The mental test: ask whether the next thing to read this output is a JSON parser or a human/shell. Parser, leave the quotes on; shell, add -r. And remember it is a no-op on numbers and booleans, so it never silently mangles a non-string field.",
    "outputExample": "$ jq '.token' /tmp/session.json\n\"eyJhbGciOiJIUzI1NiJ9\"\n$ jq -r '.token' /tmp/session.json\neyJhbGciOiJIUzI1NiJ9",
    "category": "JSON & DATA"
  },
  {
    "id": "json5",
    "question": "/tmp/containers.json is an array of objects, each with name, status and cpu. You want the complete object for every element whose status field equals the string running, and the filtering has to happen inside the JSON processor rather than by grepping its output, so that a container merely named 'running-tests' cannot match. What single filter expression command prints them?",
    "answer": "jq '.[] | select(.status == \"running\")' /tmp/containers.json",
    "altAnswers": [
      "jq '.[]|select(.status == \"running\")' /tmp/containers.json",
      "jq '.[] | select(.status==\"running\")' /tmp/containers.json",
      "jq -c '.[] | select(.status == \"running\")' /tmp/containers.json"
    ],
    "explanation": "select is a gate, not a transformer. It evaluates its argument against the value flowing through it and re-emits that value untouched when the argument is true, or emits nothing at all when it is false -- so items are dropped from the stream rather than replaced by null. That is why it has to sit downstream of an iterator: .[] pours the array out one object at a time, and select then decides which of those objects survive. Because the comparison is against a typed JSON field rather than against a line of text, a value that merely contains the word 'running' elsewhere in the record cannot slip through the way it would with grep.",
    "usage": "Narrowing a large API response to the records you care about -- failed jobs, running containers, users over a quota -- before extracting fields from them.",
    "examples": [
      "jq '.[] | select(.status == \"running\")' /tmp/containers.json  # whole matching objects",
      "jq -r '.[] | select(.status == \"running\") | .name' /tmp/containers.json  # just their names",
      "jq '.[] | select(.cpu > 10)' /tmp/containers.json  # numeric comparison, no quotes needed",
      "jq '[.[] | select(.status != \"running\")]' /tmp/containers.json  # negate, and collect into an array",
      "jq '.[] | select(.name | startswith(\"we\"))' /tmp/containers.json  # any boolean expression works"
    ],
    "memoryTip": "Think of select as a bouncer on the pipeline: each value walks up, the condition is checked, and the value either walks through unchanged or is turned away entirely. That is the key difference from map, which changes everyone and turns nobody away. It only makes sense downstream of .[], because a bouncer needs a queue of individuals, not one large crowd.",
    "outputExample": "$ jq '.[] | select(.status == \"running\")' /tmp/containers.json\n{\n  \"name\": \"web\",\n  \"status\": \"running\",\n  \"cpu\": 12.5\n}\n{\n  \"name\": \"cache\",\n  \"status\": \"running\",\n  \"cpu\": 3.1\n}",
    "category": "JSON & DATA"
  },
  {
    "id": "json6",
    "question": "A monitoring cron job must fetch https://api.example.com/health, which answers with a JSON object, and print the bare unquoted value of its status field. curl must not emit its progress meter, since that would pollute the output. Here the pipeline itself is the skill: what is the full two-stage pipeline?",
    "answer": "curl -s https://api.example.com/health | jq -r '.status'",
    "altAnswers": [
      "curl -s https://api.example.com/health | jq -r .status",
      "curl -sS https://api.example.com/health | jq -r '.status'"
    ],
    "explanation": "curl writes the response body to stdout and its progress meter to stderr, so in an interactive shell the two are interleaved and look like one stream; -s silences the meter so that stdout carries nothing but the body. The JSON processor reads stdin when given no filename, so no temporary file is needed -- the body goes straight from the socket into the parser. Two flags earn their keep in cron: -s for clean output, and -f, which makes curl exit non-zero on a 4xx or 5xx instead of cheerfully piping an HTML error page into a JSON parser.",
    "usage": "Health checks, version gates and metric scrapes in cron jobs or CI steps, where a single field from a JSON endpoint decides what happens next.",
    "examples": [
      "curl -s URL | jq -r '.status'  # silent fetch, bare string out",
      "curl -fsS URL | jq -r '.status'  # -f fails on HTTP errors, -S still shows real curl errors",
      "curl -s URL | jq -r '.checks | keys[]'  # dig into a nested object in the same pass",
      "curl -s URL | jq -e '.status == \"ok\"' >/dev/null  # exit status becomes the health verdict"
    ],
    "memoryTip": "Remember the flag trio by what each one silences or restores: -s silences everything, -S puts real errors back, -f refuses to treat an HTTP error page as a successful body. In cron the useful combination is -fsS, because a silent curl that happily pipes a 500-page into a JSON parser produces a parse error a hundred lines away from the actual cause.",
    "outputExample": "$ curl -s https://api.example.com/health | jq -r '.status'\nok",
    "category": "JSON & DATA"
  },
  {
    "id": "arch1",
    "question": "You need to bundle the entire /home/alice/code/myapp/ directory into a single uncompressed file named myapp.tar to send to a colleague, preserving the directory structure. What tar command (verbose) creates that archive?",
    "answer": "tar -cvf myapp.tar /home/alice/code/myapp",
    "altAnswers": [
      "tar cvf myapp.tar /home/alice/code/myapp",
      "tar -cvf myapp.tar /home/alice/code/myapp/",
      "tar cvf myapp.tar /home/alice/code/myapp/"
    ],
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
    "outputExample": "$ tar -cvf myapp.tar /home/alice/code/myapp/\ntar: Removing leading `/' from member names\n/home/alice/code/myapp/\n/home/alice/code/myapp/README.md\n/home/alice/code/myapp/src/\n/home/alice/code/myapp/src/main.py\n/home/alice/code/myapp/tests/test_main.py\n$ tar -tf myapp.tar | head -1\nhome/alice/code/myapp/\n# stored WITHOUT the leading slash, so extraction lands under the CURRENT directory",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch2",
    "question": "A colleague sent you a release archive at /tmp/myapp-1.0.tar. What command extracts all its contents into the current directory?",
    "answer": "tar -xvf /tmp/myapp-1.0.tar",
    "altAnswers": [
      "tar xvf /tmp/myapp-1.0.tar",
      "tar -xf /tmp/myapp-1.0.tar",
      "tar xf /tmp/myapp-1.0.tar"
    ],
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
    "answer": "gzip /var/log/nginx/access.log",
    "explanation": "This command shrinks a single file using a standard compression algorithm. The original file disappears and is replaced by a smaller compressed version with a .gz extension. You can decompress it later to get the original back, or read it directly with tools that understand the compressed format.",
    "usage": "Compress /var/log/nginx/access.log to access.log.gz, replacing the original to free disk space.",
    "examples": [
      "gzip /var/log/nginx/access.log  # access.log -> access.log.gz, original removed",
      "gzip -k /var/log/nginx/access.log  # keep both access.log AND access.log.gz",
      "gzip -9 /var/backups/db_dump.sql  # maximum compression, slowest",
      "gzip -c /var/log/nginx/access.log > /var/backups/access.log.gz  # -c writes to stdout",
      "gzip /var/log/nginx/*.log  # compress every .log file in the directory",
      "bzip2 /var/backups/db.sql  # db.sql -> db.sql.bz2, original removed"
    ],
    "memoryTip": "`gzip` = GNU zip. Replaces the original by default — use `-k` to KEEP it. The reverse is `gunzip` or `gzip -d`. On Debian/Ubuntu and RHEL/Fedora alike — `gzip` ships with every standard Linux base.",
    "outputExample": "$ ls -lh /var/log/nginx/access.log\n-rw-r--r-- 1 root root 8.0G May 19 14:35 /var/log/nginx/access.log\n$ sudo gzip /var/log/nginx/access.log\n$ ls -lh /var/log/nginx/access.log*\n-rw-r--r-- 1 root root 950M May 19 14:35 /var/log/nginx/access.log.gz",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch6",
    "question": "A deployment script downloads myapp-2.0.tar.gz from the release server and needs to extract it to /opt/myapp/. What command extracts a gzip-compressed tarball to a specific directory?",
    "answer": "tar -xzvf myapp-2.0.tar.gz -C /opt/myapp",
    "altAnswers": [
      "tar -xvzf myapp-2.0.tar.gz -C /opt/myapp",
      "tar -xzf myapp-2.0.tar.gz -C /opt/myapp",
      "tar -xzvf myapp-2.0.tar.gz -C /opt/myapp/",
      "tar xzvf myapp-2.0.tar.gz -C /opt/myapp"
    ],
    "explanation": "This is the reverse of creating a compressed archive — it both decompresses and unpacks the tarball in one step, recreating all the original files and directories. Specifying a target directory with -C tells tar where to put everything instead of dumping it in the current directory.",
    "usage": "Extract myapp-2.0.tar.gz into /opt/myapp/ during a deployment.",
    "examples": [
      "tar -xzvf /tmp/myapp-2.0.tar.gz -C /opt/myapp/  # extract to specific folder",
      "tar -xjvf /tmp/myapp-2.0.tar.bz2 -C /opt/  # bzip2 variant (-j)",
      "tar -xJvf /tmp/myapp-2.0.tar.xz -C /opt/  # xz variant (capital -J)",
      "tar -xvf /tmp/myapp-2.0.tar.gz  # modern tar auto-detects gzip without -z",
      "mkdir -p /opt/staging && tar -xzf /tmp/release.tar.gz -C /opt/staging",
      "tar -xJf /tmp/linux-6.8.tar.xz -C ~/src  # extract xz tarball into ~/src"
    ],
    "memoryTip": "`tar -xzvf` = 'eXtract Zee Vee File'. Same letters as create but `c` flips to `x`. Compression letters: lowercase `z`=gzip, lowercase `j`=bzip2, UPPERCASE `J`=xz.",
    "outputExample": "$ mkdir -p /opt/myapp && tar -xzvf /tmp/myapp-2.0.tar.gz -C /opt/myapp/\nmyapp-2.0/\nmyapp-2.0/README.md\nmyapp-2.0/bin/server\nmyapp-2.0/config/app.yml\n$ ls /opt/myapp/\nmyapp-2.0",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch8",
    "question": "Among gzip, bzip2 and xz, which one uses LZMA2 and produces the smallest output? Give the command that compresses /var/backups/db.sql with it at maximum level.",
    "answer": "xz /var/backups/db.sql",
    "altAnswers": [
      "7z a db.sql.7z /var/backups/db.sql",
      "bzip2 -9 /var/backups/db.sql",
      "xz",
      "xz -9 /var/backups/db.sql",
      "xz -9e /var/backups/db.sql",
      "zstd --ultra -22 /var/backups/db.sql"
    ],
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
    "altAnswers": [
      "xz --decompress /tmp/db.sql.xz",
      "xz -d /tmp/db.sql.xz"
    ],
    "explanation": "This command is the reverse of xz — it decompresses an .xz file back to its original contents. Like its companion xz, it replaces the compressed file with the decompressed one by default.",
    "usage": "Decompress an .xz file, replacing it with the original uncompressed file.",
    "examples": [
      "unxz /tmp/db.sql.xz  # db.sql.xz → db.sql, original removed",
      "unxz -k /tmp/db.sql.xz  # keep both files",
      "xz -d /tmp/db.sql.xz  # exactly the same as unxz",
      "xzcat /var/log/old.log.xz | grep ERROR  # peek without writing to disk",
      "tar -xJf /tmp/linux-6.8.tar.xz  # one step: decompress + untar",
      "gunzip /var/log/nginx/access.log.1.gz  # decompress — .gz removed, original appears"
    ],
    "memoryTip": "`unxz` = UN-xz (undo xz). Equivalent: `xz -d`. Stream without touching disk: `xzcat`. For tar.xz: use `tar -xJf`.",
    "outputExample": "$ ls -lh /tmp/db.sql.xz\n-rw-r--r-- 1 alice alice 18M May 17 11:30 /tmp/db.sql.xz\n$ unxz /tmp/db.sql.xz\n$ ls -lh /tmp/db.sql\n-rw-r--r-- 1 alice alice 142M May 17 11:30 /tmp/db.sql",
    "category": "ARCHIVES & COMPRESS"
  },
  {
    "id": "arch11",
    "question": "You downloaded an unfamiliar tarball at /tmp/vendor.tar.gz from the internet. Before extracting it, you want to check whether it has a top-level directory or will scatter files into your current directory. Which command lists its contents?",
    "answer": "tar -tf /tmp/vendor.tar.gz",
    "altAnswers": [
      "tar tf /tmp/vendor.tar.gz",
      "tar -tzf /tmp/vendor.tar.gz",
      "tar tzf /tmp/vendor.tar.gz",
      "tar -tvf /tmp/vendor.tar.gz"
    ],
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
    "id": "arch13",
    "question": "A 10 GB backup tarball at /var/backups/full.tar.gz contains the file etc/nginx/nginx.conf somewhere inside it. You need only that one file without extracting everything. How do you extract just that one path?",
    "answer": "tar -xzf /var/backups/full.tar.gz etc/nginx/nginx.conf",
    "altAnswers": [
      "tar xzf /var/backups/full.tar.gz etc/nginx/nginx.conf",
      "tar -xf /var/backups/full.tar.gz etc/nginx/nginx.conf"
    ],
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
    "altAnswers": [
      "zip -r project.zip project"
    ],
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
    "altAnswers": [
      "unzip -d /tmp/review project.zip"
    ],
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
    "altAnswers": [
      "7z",
      "7z a -mhe -p secret.7z private/",
      "7z a -mhe=on -p secret.7z private/",
      "7z a -p -mhe secret.7z private/",
      "7za a -p -mhe=on archive.7z dir/",
      "tar -cz dir | gpg -c > dir.tar.gz.gpg",
      "zip --encrypt (does NOT hide filenames)"
    ],
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
    "altAnswers": [
      "gunzip -c /var/log/nginx/access.log.1.gz | wc -l",
      "gzip -dc /var/log/nginx/access.log.1.gz | wc -l",
      "zcat < /var/log/nginx/access.log.1.gz | wc -l"
    ],
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
    "question": "What tar command creates project.tar.gz from the current directory (.) while excluding the node_modules directory and all *.log files, with the glob quoted so the shell does not expand it?",
    "answer": "tar --exclude='node_modules' --exclude='*.log' -czf project.tar.gz project/",
    "altAnswers": [
      "tar --exclude='*.log' --exclude='node_modules' -czf project.tar.gz project/",
      "tar --exclude=node_modules --exclude=*.log -czf out.tar.gz .",
      "tar -czf ../project.tar.gz --exclude=./node_modules --exclude='*.log' .",
      "tar -czf app.tar.gz --exclude='node_modules' --exclude='*.log' /path/to/project",
      "tar -czf project.tar.gz --exclude='*.log' --exclude='node_modules' project/",
      "tar -czf project.tar.gz --exclude='node_modules' --exclude='*.log' project/"
    ],
    "explanation": "The --exclude flag tells tar to skip any file or directory matching a pattern. You can stack multiple --exclude flags for multiple patterns. With GNU tar the --exclude options may appear anywhere among the options, but always quote the patterns so the shell doesn't expand them.",
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
    "question": "You need to gzip a 4 GB log file `/var/log/myapp/app.log` for archiving and the default single-threaded gzip is too slow on this 16-core server. Which drop-in replacement uses all CPU cores and produces standard .gz output?",
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
    "id": "syn1",
    "question": "Your current directory holds exactly four files: access.log, error.log, notes.txt and data.csv. Using ls, list only the two whose names end in .log, letting the shell expand a wildcard pattern before ls is ever executed.",
    "answer": "ls *.log",
    "explanation": "The shell does the matching, not ls. Before ls runs, bash scans the current directory, replaces the word *.log with every filename that matches in sorted order, and hands ls the result as separate arguments. The * metacharacter stands for a run of zero or more characters, so access.log and error.log qualify and notes.txt does not. By the time ls starts it has been given two ordinary filenames and has no idea a pattern was typed. This is why ls needs no special wildcard support: every command on the system inherits globbing for free.",
    "usage": "Whenever you want to act on a family of files at once instead of naming them one by one: cleaning up a directory of rotated logs, feeding all .csv exports to a script, or just checking how many .jpg files a download left behind.",
    "examples": [
      "ls *.log  # every name ending in .log, in the current directory only",
      "ls /tmp/proj/*.log  # a glob may carry a path prefix; only the last segment is matched",
      "echo *.log  # echo prints the exact list the shell built, so you can preview a glob safely",
      "ls -l *.log  # flags and globs mix freely: the shell expands the glob, ls just sees filenames"
    ],
    "memoryTip": "Read * as 'anything at all, including nothing', so *.log is 'any characters, then .log'. The habit that saves you: run echo with the pattern first. echo prints the very list the shell is about to hand your real command, so you can look before you leap on anything destructive.",
    "outputExample": "$ ls *.log\naccess.log  error.log",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn2",
    "question": "A variable in your shell holds a value with runs of internal spacing: greeting='hello   world', with three spaces in the middle. Running echo $greeting prints 'hello world' with a single space, because the unquoted expansion is chopped into words and echo rejoins them with one space each. Rewrite that echo so the value reaches echo as a single unsplit argument.",
    "answer": "echo \"$greeting\"",
    "explanation": "After bash substitutes a variable's value it performs word splitting on the result, breaking it at every run of characters in IFS (space, tab, newline by default). Unquoted, $greeting becomes two words, 'hello' and 'world', which echo receives as two arguments and prints with one space between them. Double quotes suppress that splitting step entirely: the expansion stays one word regardless of what is inside it. Double quotes still allow the variable to expand, which is the difference from single quotes.",
    "usage": "Any time a variable's value could contain a space, tab or newline: filenames, user input, a line read from a file, the output of a command. Quoting costs nothing when the value has no spaces, so quote every expansion by default.",
    "examples": [
      "echo \"$greeting\"  # one argument, internal spacing preserved exactly",
      "echo $greeting  # split into two arguments, runs of whitespace collapse to one space",
      "printf \"%s\\n\" $greeting  # printf reuses its format per argument: proves two words arrived",
      "echo \"${greeting}s\"  # braces delimit the name so the trailing s is not read as part of it"
    ],
    "memoryTip": "Double quotes are a fence around the value: expansion happens inside, but the splitting saw cannot reach in. Unquoted, bash hands the value to the word splitter, which cuts at every IFS character. The rule to internalise: quotes do not stop $var from expanding, they stop the result from being torn apart.",
    "outputExample": "$ echo $greeting\nhello world\n$ echo \"$greeting\"\nhello   world",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn3",
    "question": "You are writing documentation in the terminal and need echo to print the five literal characters $HOME, dollar sign included, instead of expanding it to your home directory path. Use the quoting style that suppresses every expansion inside it.",
    "answer": "echo '$HOME'",
    "altAnswers": [
      "echo \\$HOME",
      "echo \"\\$HOME\""
    ],
    "explanation": "Single quotes are the strongest quoting in bash: between them every character is literal, including $, backtick, backslash and *. Nothing is expanded, nothing is split, nothing is globbed. The only character you cannot place inside single quotes is another single quote. Double quotes are weaker: they block word splitting and globbing but still perform variable expansion, command substitution and arithmetic expansion, which is exactly why \"$HOME\" would have printed your home directory.",
    "usage": "Single-quote anything the shell must not touch: awk and sed programs full of $ and backslashes, regex patterns, passwords containing $ or !, and any string you want printed verbatim in a here-doc or a message.",
    "examples": [
      "echo '$HOME'  # single quotes: nothing expands, prints the literal text",
      "echo \"$HOME\"  # double quotes: expands to your home directory path",
      "echo '*'  # single quotes also stop globbing, so the asterisk stays an asterisk",
      "awk '{print $1}' /tmp/names.txt  # the classic reason for single quotes: $1 is awk's, not bash's"
    ],
    "memoryTip": "Single quotes are the shell's mute button, double quotes are the volume knob. Mute means literally nothing happens inside; the knob still lets $ and $(...) through while blocking splitting and globbing. If a string contains a dollar sign you want to survive intact, reach for the single quote first.",
    "outputExample": "$ echo $HOME\n/home/eliash\n$ echo '$HOME'\n$HOME",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn4",
    "question": "You are assembling a backup filename inside a script and need today's date in YYYY-MM-DD form spliced into the middle of a string. The command date +%F prints it. Write just the command-substitution expression that runs that command and yields its output, using the modern POSIX form that nests without escaping rather than the legacy backtick form.",
    "answer": "$(date +%F)",
    "explanation": "Command substitution forks the command, captures everything it writes to standard output, strips all trailing newlines, and substitutes the remaining text in place of the whole $(...) construct. The result then takes part in the rest of the expansion, so it can be concatenated with adjacent text without quotes or separators. The $(...) form supersedes backticks because it nests directly (backticks require escaping each inner level) and because backslashes inside it are not given a second, surprising round of interpretation.",
    "usage": "Whenever one command's output must become part of another command's arguments: date-stamped filenames, feeding a computed path to cd, embedding a version string in a log line, or capturing a count into a variable.",
    "examples": [
      "\"backup-$(date +%F).tar.gz\"  # splices straight into a filename, no separators needed",
      "count=$(ls | wc -l)  # capture into a variable; assignment does not need extra quoting",
      "\"$(basename \"$(dirname /tmp/app/src/a.py)\")\"  # nests directly, which backticks cannot do cleanly",
      "echo \"$(cat /tmp/notes.txt)\"  # quote the substitution to keep the captured newlines"
    ],
    "memoryTip": "Read $(...) as 'the value of running this', exactly like $var is 'the value of this name' - the dollar sign always means substitute a value here, and the parentheses say the value comes from a command rather than a variable. Trailing newlines are always stripped, which is why $(pwd) never leaves a stray line break.",
    "outputExample": "$ date +%F\n2026-08-18\n$ echo \"backup-$(date +%F).tar.gz\"\nbackup-2026-08-18.tar.gz",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn5",
    "question": "A directory contains exactly four files: log1.txt, log2.txt, log9.txt and log10.txt. Using ls, list only the three whose digit portion is a single character, with a pattern that matches exactly one character in that position.",
    "answer": "ls log?.txt",
    "explanation": "The ? metacharacter matches exactly one character, no more and no fewer. log?.txt therefore requires precisely one character between 'log' and '.txt', which log1.txt, log2.txt and log9.txt satisfy while log10.txt, with two characters there, does not. This is the sharp distinction from *, which matches any number of characters including none. Like all globbing, ? is expanded by the shell against real directory entries, so a pattern only produces names that actually exist.",
    "usage": "Useful when a naming scheme has a fixed-width field: matching single-digit sequence numbers, two-letter language codes with ??, or a file whose extension you know is three characters long.",
    "examples": [
      "ls log?.txt  # exactly one character in that slot",
      "ls log*.txt  # zero or more characters, so log10.txt matches too",
      "ls log??.txt  # exactly two characters: matches only log10.txt here",
      "ls ?????????  # nine characters total, a way to select by name length alone"
    ],
    "memoryTip": "Think of ? as the crossword blank: one square, one letter, mandatory. The * is the ellipsis: as much or as little as you like. So log?.txt is a nine-square crossword answer with one blank, while log*.txt has no fixed length at all - which is why the ten in log10.txt slips through * but is stopped by ?.",
    "outputExample": "$ ls log?.txt\nlog1.txt  log2.txt  log9.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn6",
    "question": "A directory contains file1.txt, filea.txt, fileA.txt, fileb.txt and filez.txt. Using ls, list only the three whose single character between 'file' and '.txt' is a lowercase letter, using a bracketed range rather than a list of alternatives.",
    "answer": "ls file[a-z].txt",
    "explanation": "Square brackets form a bracket expression that matches exactly one character from the set inside. A hyphen between two characters denotes a range taken from the current locale's collating sequence, so [a-z] accepts one lowercase letter and nothing else. Like ?, a bracket expression consumes precisely one character, so file1.txt is rejected for being a digit and fileA.txt for being uppercase. Because ranges follow locale collation rather than raw ASCII, the POSIX class [[:lower:]] is the unambiguous spelling when a script must behave identically everywhere.",
    "usage": "Good for selecting a slice of a numbered or lettered series without listing every member: log[0-4].txt for the first five, backup-[0-9][0-9].tar for two-digit sequence numbers, or chapter[a-c].md for a subset.",
    "examples": [
      "ls file[a-z].txt  # one lowercase letter in that position",
      "ls file[0-9].txt  # one digit instead; matches file1.txt only",
      "ls file[[:lower:]].txt  # POSIX class, immune to locale collation surprises",
      "ls file[abz].txt  # an explicit set rather than a range; no hyphen means no range"
    ],
    "memoryTip": "Brackets are a one-character menu: the shell must pick exactly one item from inside them, so [a-z] never matches two letters or none. The hyphen means 'through' and is read against the locale's collating order, not ASCII - which is why [[:lower:]] is the spelling that survives a change of LANG.",
    "outputExample": "$ ls file[a-z].txt\nfilea.txt  fileb.txt  filez.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn7",
    "question": "You need three empty files in the current directory - report_jan.txt, report_feb.txt and report_mar.txt - created by a single touch that spells the shared prefix and suffix only once. Use brace expansion for the three varying parts.",
    "answer": "touch report_{jan,feb,mar}.txt",
    "explanation": "Brace expansion is a purely textual step that happens before any other expansion and before the command is run. Bash rewrites report_{jan,feb,mar}.txt into three separate words by pairing each comma-separated item with the surrounding preamble and postscript, so touch receives three arguments. Crucially this is not globbing: brace expansion never consults the filesystem, which is precisely why it can name files that do not exist yet. Globs can only ever produce names that already exist.",
    "usage": "Creating a set of files or directories in one stroke, copying a file to a backup name without retyping the path, or generating a list of URLs and hostnames that share a common shape.",
    "examples": [
      "touch report_{jan,feb,mar}.txt  # three new files from one word",
      "mkdir -p site/{css,js,img}  # same trick for directories",
      "cp config.yml{,.bak}  # empty first item expands to config.yml config.yml.bak",
      "echo report_{jan,feb,mar}.txt  # preview the three words before committing to them"
    ],
    "memoryTip": "Braces multiply, globs match. A brace expansion is a text stamping machine that runs before the shell has looked at a single directory entry, so it happily invents names for files that do not exist - which is exactly what you want when creating things. A glob can only ever hand back names already on disk.",
    "outputExample": "$ touch report_{jan,feb,mar}.txt\n$ ls\nreport_feb.txt  report_jan.txt  report_mar.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn8",
    "question": "In an empty directory you need five files named file1.txt through file5.txt, created by a single touch that uses a numeric brace range instead of listing each number.",
    "answer": "touch file{1..5}.txt",
    "explanation": "The {x..y} sequence form of brace expansion generates every integer from x to y inclusive, so {1..5} becomes the five words 1 2 3 4 5 before they are wrapped in the surrounding prefix and suffix. It counts downward automatically when the first number is larger, accepts an optional third field as a step, and also works on single characters as in {a..e}. Note that ls then lists the results in sorted order, which is not the order they were created in.",
    "usage": "Scaffolding numbered test fixtures, generating a sequence of hostnames like web{01..09}, or producing a range of arguments to feed a loop without writing out seq.",
    "examples": [
      "touch file{1..5}.txt  # five files, one word",
      "echo {5..1}  # counts down when the first number is larger: 5 4 3 2 1",
      "echo {0..20..5}  # a third field is the step: 0 5 10 15 20",
      "echo {a..e}  # character ranges work too: a b c d e"
    ],
    "memoryTip": "Two dots mean 'through', the same way you would say 'files one through five' out loud, and a third field adds 'in steps of'. Unlike seq this needs no external command and glues the prefix and suffix on for you - but because it is plain text generation, {1..$n} does not work: brace expansion runs before $n is known.",
    "outputExample": "$ touch file{1..5}.txt\n$ ls\nfile1.txt  file2.txt  file3.txt  file4.txt  file5.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn9",
    "question": "A file is literally named 'my report.txt', with one space in the middle, and a variable holds that name: f='my report.txt'. Running ls $f prints two 'cannot access' errors, one for 'my' and one for 'report.txt', because the unquoted expansion is split into two words. Rewrite that ls so the name arrives as a single argument.",
    "answer": "ls \"$f\"",
    "explanation": "Word splitting happens after the variable is substituted, not before, so the shell sees the text 'my report.txt' and cuts it at the space into two separate arguments. ls dutifully looks for a file called 'my' and another called 'report.txt', finds neither, and reports two errors. Double quotes stop the splitting step, so the whole value arrives as one argument. The same mechanism makes rm $file genuinely dangerous: with f set to 'my report.txt' the shell turns it into rm my report.txt, which deletes two unrelated files if they happen to exist and reports nothing wrong.",
    "usage": "Every single time a variable holding a path is passed to a command. Filenames from downloads, media libraries, Windows shares and phone cameras routinely contain spaces, and the failure is silent when the split-up names coincidentally exist.",
    "examples": [
      "ls \"$f\"  # one argument, the space is part of the name",
      "ls $f  # two arguments, two errors - word splitting at the space",
      "cp \"$f\" \"$f.bak\"  # quote every expansion, including the one being built",
      "find /tmp -name \"*.txt\" -print0 | xargs -0 ls  # NUL separators survive names with spaces"
    ],
    "memoryTip": "The shell splits the value after it substitutes it, so a space inside a variable becomes an argument boundary you never typed. Picture rm $file with file set to 'my report.txt': the shell hands rm two names, not one. Quoting is not politeness, it is the difference between one file and two.",
    "outputExample": "$ ls $f\nls: cannot access 'my': No such file or directory\nls: cannot access 'report.txt': No such file or directory\n$ ls \"$f\"\nmy report.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn10",
    "question": "A directory contains visible.txt, .bashrc and .profile. Running echo * prints only visible.txt, because a leading dot must be matched explicitly and a glob never supplies one. Turn on the bash option that makes * include names beginning with a dot.",
    "answer": "shopt -s dotglob",
    "explanation": "Pathname expansion deliberately refuses to let a leading . be matched by *, ? or a bracket expression. The rule exists so that a stray glob cannot sweep up configuration files, and historically so that * would never expand to . and .. and send a recursive command back up the tree. Setting dotglob removes that special case for the leading dot, so * matches hidden entries as well. Even with dotglob on, bash still excludes . and .. themselves, so recursion into the parent directory remains impossible.",
    "usage": "Essential when copying or archiving a whole directory's contents with *, since the default silently leaves .git, .env and every dotfile behind. Also useful for auditing hidden files with a plain loop.",
    "examples": [
      "shopt -s dotglob  # * now matches .bashrc and .profile as well",
      "shopt -u dotglob  # -u unsets it again; -s sets, -u unsets",
      "shopt dotglob  # query the current state without changing it",
      "ls -A  # ls has its own equivalent: almost-all, hidden files minus . and .."
    ],
    "memoryTip": "Read the name literally: dot-glob makes globs see dots. The default hiding rule is not ls being polite, it is the pattern matcher refusing to let *, ? or a bracket match a leading period at all. Remember that even with dotglob set, . and .. stay excluded, so * can never walk you up into the parent directory.",
    "outputExample": "$ echo *\nvisible.txt\n$ shopt -s dotglob\n$ echo *\n.bashrc .profile visible.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn11",
    "question": "A directory contains 1backup.tar, 2backup.tar, 9log.txt, alpha.txt and beta.txt. Using ls, list only the two files whose first character is not a digit, using a negated bracket expression followed by a wildcard.",
    "answer": "ls [!0-9]*",
    "altAnswers": [
      "ls [^0-9]*"
    ],
    "explanation": "Placing ! (or ^, which bash accepts as a synonym) immediately after the opening bracket inverts the set: the expression then matches any single character that is not listed. [!0-9] therefore consumes exactly one non-digit character, and the trailing * absorbs whatever else the name contains. Note that the negation still requires a character to be present, so it can never match an empty name. POSIX specifies ! for this role and ^ is the widely supported extension, which is why ! is the portable choice in scripts.",
    "usage": "Filtering out a class of names without enumerating the rest: skipping numbered rotations, ignoring temporary files that start with a known prefix character, or selecting everything that is not a backup.",
    "examples": [
      "ls [!0-9]*  # first character is not a digit",
      "ls [^0-9]*  # ^ is bash's accepted synonym for ! inside brackets",
      "ls [0-9]*  # drop the ! and you get exactly the three files it excluded",
      "ls *[!0-9].tar  # the same negation used mid-pattern: last character before .tar"
    ],
    "memoryTip": "Inside brackets the bang means 'not', and it only counts in first position - [a!b] is the three literal characters a, ! and b. Bash also honours ^ there for familiarity with regex, but POSIX blesses only !, so write [!0-9] in anything you expect to run on another shell. The negation still eats exactly one character.",
    "outputExample": "$ ls [!0-9]*\nalpha.txt  beta.txt",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn12",
    "question": "Log files live at several depths under /tmp/proj. From a working directory that itself contains app.log and second.log you type find /tmp/proj -name *.log and find dies with 'paths must precede expression', because the shell expanded the pattern into two filenames before find saw it. Rewrite the command so find receives the pattern itself.",
    "answer": "find /tmp/proj -name '*.log'",
    "altAnswers": [
      "find /tmp/proj -name \"*.log\"",
      "find /tmp/proj -name \\*.log"
    ],
    "explanation": "find does its own pattern matching against each filename it visits, at every depth. But the shell expands globs in every unquoted word before the command starts, so an unquoted *.log is replaced by whatever matches in your current directory. With two matches find gets three arguments after -name and errors out. The far nastier case is exactly one match: the command then succeeds while silently searching for that one hardcoded name and missing everything else. Quoting hands the asterisk to find untouched.",
    "usage": "Every find invocation using -name, -iname or -path with a wildcard, and the same reasoning applies to any tool that takes a pattern as an argument, including rsync filters and tar wildcards.",
    "examples": [
      "find /tmp/proj -name '*.log'  # find receives the asterisk and matches at every depth",
      "find /tmp/proj -name *.log  # shell expands first: silently wrong, or a hard error",
      "find /tmp/proj -iname '*.LOG'  # -iname is the case-insensitive variant",
      "find /tmp/proj -path '*/src/*.log'  # -path matches the whole path, so slashes are allowed"
    ],
    "memoryTip": "Two pattern engines are competing for the same asterisk and the shell always goes first. Quote it and find wins. The reason this bug survives so long is that with exactly one match in your current directory the command runs cleanly and just returns the wrong answer - no error, no warning, only missing results.",
    "outputExample": "$ find /tmp/proj -name *.log\nfind: paths must precede expression: `second.log'\nfind: possible unquoted pattern after predicate `-name'?\n$ find /tmp/proj -name '*.log'\n/tmp/proj/second.log\n/tmp/proj/app.log\n/tmp/proj/src/other.log\n/tmp/proj/src/db.log",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn13",
    "question": "A cleanup script loops with 'for f in *.log; do ...; done'. Run in a directory containing no .log files at all, the loop body still executes exactly once with f set to the literal string *.log, and the script then tries to process a file by that name. Turn on the bash option that makes a pattern matching nothing expand to no words at all.",
    "answer": "shopt -s nullglob",
    "explanation": "POSIX requires that a pattern matching no files be left in place unchanged, so *.log survives as an ordinary five-character word and the for loop faithfully iterates over that one word. Setting nullglob changes the rule: an unmatched pattern is removed from the command line entirely, producing zero words, so the loop body never runs. The related failglob option instead makes an unmatched pattern an error, aborting the command rather than passing a bogus argument.",
    "usage": "Any loop or command over a glob that might legitimately match nothing: nightly cleanup of rotated logs, processing an inbox directory, or building an array of matching files whose length you intend to test.",
    "examples": [
      "shopt -s nullglob  # unmatched patterns vanish, so the loop runs zero times",
      "shopt -s failglob  # unmatched patterns become an error instead of a literal word",
      "files=(*.log); echo ${#files[@]}  # with nullglob this correctly reports 0",
      "for f in *.log; do [ -e \"$f\" ] || continue; done  # the portable guard when shopt is unavailable"
    ],
    "memoryTip": "Null glob means a glob that matched nothing becomes null - it disappears rather than surviving as literal text. The default POSIX behaviour of leaving *.log in place is the reason scripts report 'no such file: *.log': that is not a wildcard failing, it is a wildcard being taken literally by a command that trusted it.",
    "outputExample": "$ for f in *.log; do echo \"processing: $f\"; done\nprocessing: *.log\n$ shopt -s nullglob\n$ for f in *.log; do echo \"processing: $f\"; done\n$",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn14",
    "question": "The file /tmp/notes.txt holds three lines: alpha, beta and gamma. Running echo $(cat /tmp/notes.txt) prints them on one line as 'alpha beta gamma', because the unquoted substitution is split on newlines into three words. Rewrite that echo so the three lines print on three lines.",
    "answer": "echo \"$(cat /tmp/notes.txt)\"",
    "explanation": "The default IFS contains a newline, so an unquoted command substitution is word split at every line break exactly as it is at every space. echo then receives three arguments and joins them with single spaces, flattening the file onto one line. Quoting the substitution suppresses word splitting, so the entire captured text arrives as one argument with its newlines intact. Command substitution still strips trailing newlines whether quoted or not, which is why there is no blank line at the end.",
    "usage": "Whenever multi-line output is captured and must keep its shape: storing a command's report in a variable to email later, comparing two blocks of text, or passing a multi-line message to a program that expects one argument.",
    "examples": [
      "echo \"$(cat /tmp/notes.txt)\"  # newlines preserved, three lines out",
      "echo $(cat /tmp/notes.txt)  # split on newlines, flattened to one line",
      "msg=\"$(cat /tmp/notes.txt)\"  # capture into a variable with its structure intact",
      "printf \"%s\\n\" \"$(cat /tmp/notes.txt)\"  # printf is safer than echo for arbitrary text"
    ],
    "memoryTip": "IFS is space, tab and newline - people remember the first two and forget the third, which is why multi-line output silently collapses onto one line. Same fix as always: wrap the whole $(...) in double quotes. Trailing newlines are stripped regardless, so quoting changes the shape of the middle, never the end.",
    "outputExample": "$ echo $(cat /tmp/notes.txt)\nalpha beta gamma\n$ echo \"$(cat /tmp/notes.txt)\"\nalpha\nbeta\ngamma",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn15",
    "question": "You are writing a wrapper script that must hand every positional parameter it was called with on to ./show.sh, with each parameter preserved as exactly one argument even when it contains spaces. Called with 'my report.txt' and final.pdf the inner script must see two arguments. Write just the expansion you place after ./show.sh.",
    "answer": "\"$@\"",
    "explanation": "\"$@\" is the one expansion in bash that produces multiple words while still being quoted. Inside double quotes it expands to as many separate arguments as there are positional parameters, each individually quoted, so embedded spaces never become argument boundaries. It is special-cased further: with zero positional parameters it expands to nothing at all rather than to one empty argument, so a wrapper called with no arguments passes none along. Unquoted $@ and $* both lose all of this and word split.",
    "usage": "The standard idiom for any wrapper, dispatcher or entrypoint script that forwards its arguments, and for function bodies that pass their parameters to an inner command. Docker entrypoints and git aliases live on this.",
    "examples": [
      "./show.sh \"$@\"  # each parameter forwarded as its own argument, spaces intact",
      "./show.sh $*  # word split: 'my report.txt' arrives as two arguments",
      "for a in \"$@\"; do echo \"$a\"; done  # iterate one parameter per pass",
      "echo \"$#\"  # the matching count: how many parameters \"$@\" would produce"
    ],
    "memoryTip": "Remember the @ as 'at each' - it addresses the parameters individually, keeping the fences between them, while * mashes them into one blob. The quotes are not optional decoration: bare $@ and bare $* behave identically and badly. Quoted \"$@\" is also the only form that expands to nothing when there are no arguments.",
    "outputExample": "$ ./wrap.sh \"my report.txt\" final.pdf\narg[my report.txt]\narg[final.pdf]",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn16",
    "question": "In that same wrapper you now want the opposite behaviour: all positional parameters collapsed into a single argument, joined by the first character of IFS, so that calling it with 'my report.txt' and final.pdf makes ./show.sh see exactly one argument reading 'my report.txt final.pdf'. Write just the expansion that does that.",
    "answer": "\"$*\"",
    "explanation": "Inside double quotes, $* joins all positional parameters into one single word, inserting the first character of IFS between them - a space under the default IFS. Because the whole thing is one quoted word, spaces already inside a parameter are indistinguishable from the separators the join added, which is precisely why \"$*\" must never be used to forward arguments. Change IFS and the separator changes with it, which is the one situation where \"$*\" is genuinely the right tool.",
    "usage": "Building a single human-readable string out of the arguments: a log line recording how the script was invoked, an error message quoting the whole command, or joining a list with a chosen delimiter by setting IFS first.",
    "examples": [
      "./show.sh \"$*\"  # one argument containing all parameters joined by spaces",
      "echo \"called with: $*\"  # the honest use: a readable log line, not argument passing",
      "IFS=,; echo \"$*\"  # the join character comes from IFS: a,b,c",
      "./show.sh \"$@\"  # contrast: separate arguments, each preserved"
    ],
    "memoryTip": "Star means squash: \"$*\" glues everything into one string, and the glue is IFS's first character, not a hardcoded space. That makes it a join operator, which is useful for messages and fatal for filenames - once squashed you cannot tell an added separator from a space that was inside an argument all along.",
    "outputExample": "$ ./wrap.sh \"my report.txt\" final.pdf\narg[my report.txt final.pdf]",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn17",
    "question": "A project under /tmp/app has Python files at top.py, src/a.py, src/lib/b.py and src/lib/deep/c.py. From /tmp/app the command echo **/*.py reports only src/a.py, because ** is currently treated as an ordinary * that stops at a slash. Turn on the bash option that makes ** span directory levels.",
    "answer": "shopt -s globstar",
    "explanation": "A normal glob never matches the / separator, so a pattern can only ever describe one path segment and **/*.py is just */*.py written twice over. With globstar set, a ** that forms an entire path component matches any number of directories including zero, so bash walks the tree itself. The zero case is why top.py appears in the results: **/ collapsed to nothing, leaving *.py in the current directory. The traversal happens in the shell, so results come back sorted and already checked to exist.",
    "usage": "Recursive matching without spawning find: linting every .py in a repo, deleting every stray .pyc, or counting sources across a nested tree. For very large trees find is still faster and does not build the whole list in memory.",
    "examples": [
      "shopt -s globstar  # ** now crosses directory boundaries",
      "echo **/*.py  # every .py at any depth, including the current directory",
      "echo **/  # a trailing slash restricts the matches to directories: src/ src/lib/ src/lib/deep/",
      "find /tmp/app -name '*.py'  # the tool-based alternative, better on huge trees"
    ],
    "memoryTip": "One star stays inside a directory because a glob never matches the slash; two stars are the licence to cross it. The detail that catches people is that **/ can match zero directories, so **/*.py finds files in the current directory too - the pattern means 'here and everywhere below', not 'only below'.",
    "outputExample": "$ echo **/*.py\nsrc/a.py\n$ shopt -s globstar\n$ echo **/*.py\nsrc/a.py src/lib/b.py src/lib/deep/c.py top.py",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "syn18",
    "question": "A bash array holds three names, two of which contain spaces: files=('my report.txt' 'budget 2026.csv' notes.md). Written as 'for f in ${files[@]}' the loop runs five times because each spaced name is torn in two. Write the expansion that makes the loop run exactly three times, once per element.",
    "answer": "\"${files[@]}\"",
    "explanation": "An array subscripted with [@] expands to one word per element, but that guarantee only survives if the expansion is quoted. Unquoted, the elements are concatenated and then put through ordinary word splitting on IFS, so 'my report.txt' becomes two words and the element boundaries the array was storing are destroyed. The quoted form is special-cased exactly like \"$@\" - it is the quoted expansion that still yields multiple words. Using [*] instead would join everything into a single word.",
    "usage": "Any time an array holds paths, command arguments or user-supplied strings: building an argument list for a command incrementally, collecting glob matches into files=(*.txt), or iterating over a list read from a file.",
    "examples": [
      "for f in \"${files[@]}\"; do echo \"$f\"; done  # three iterations, spaces preserved",
      "for f in ${files[@]}; do echo \"$f\"; done  # five iterations: the array's boundaries are lost",
      "\"${files[*]}\"  # one single word instead: all elements joined by IFS's first character",
      "\"${#files[@]}\"  # the element count, 3 here regardless of spaces inside elements"
    ],
    "memoryTip": "\"${arr[@]}\" is the array's version of \"$@\" and behaves identically: quoted, yet still expanding to one word per element. Drop the quotes and the array degrades into a plain string that gets re-split on IFS, which throws away the very boundaries you used an array to keep. Quote it, always, and use [*] only to join.",
    "outputExample": "$ for f in ${files[@]}; do echo \"item: $f\"; done\nitem: my\nitem: report.txt\nitem: budget\nitem: 2026.csv\nitem: notes.md\n$ for f in \"${files[@]}\"; do echo \"item: $f\"; done\nitem: my report.txt\nitem: budget 2026.csv\nitem: notes.md",
    "category": "SHELL SYNTAX"
  },
  {
    "id": "pipe1",
    "question": "You ran 'ls -lh /var/www/html' and want to save the directory listing to a file called filelist.txt for a report — overwriting any previous version of that file. What operator redirects a command's standard output into a file?",
    "answer": "ls -lh /var/www/html > filelist.txt",
    "altAnswers": [
      "ls -lh /var/www/html >filelist.txt"
    ],
    "explanation": "Normally, when a command finishes it prints its results directly to your screen and they're gone when you close the terminal. Adding this operator is like aiming the output away from your screen and into a file instead — the file captures everything the command would have printed. If the file already exists, it gets completely replaced with the new output.",
    "usage": "Redirect a command's standard output into a file — creates the file if needed, or overwrites it completely if it exists.",
    "examples": [
      "ls -lh /var/www/html > filelist.txt  # save directory listing",
      "echo 'server_name localhost;' > /tmp/nginx-test.conf  # one-line file creation",
      "date > /tmp/deploy-timestamp.txt  # snapshot current date",
      "make > build.log  # capture stdout; errors still go to terminal",
      "> empty.txt  # zero-byte 'truncate' trick — same as `: > empty.txt`",
      "ls /etc > /tmp/etc-listing.txt  # save listing to file (overwrites)"
    ],
    "memoryTip": "`>` = arrow pointing INTO a file. ONE arrow = overwrite. TWO arrows (`>>`) = append. Mnemonic: a single `>` is a sharp 'replace' — it clobbers. Only catches stdout (channel 1); for stderr use `2>`.",
    "outputExample": "$ echo 'hello' > greeting.txt\n$ cat greeting.txt\nhello\n$ echo 'world' > greeting.txt\n$ cat greeting.txt\nworld",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe2",
    "question": "Each run of your deployment script ./deploy.sh should add its output to the end of build.log without erasing previous run records. What operator appends standard output to a file without overwriting it?",
    "answer": "./deploy.sh >> build.log",
    "altAnswers": [
      "./deploy.sh >>build.log"
    ],
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
    "answer": "tr a-z A-Z < notes.txt",
    "altAnswers": [
      "tr '[:lower:]' '[:upper:]' < notes.txt",
      "tr 'a-z' 'A-Z' < notes.txt",
      "tr [:lower:] [:upper:] < notes.txt"
    ],
    "explanation": "This operator is the mirror image of the output redirect — instead of sending output to a file, it feeds a file's contents into the command as if someone had typed that file's text at the keyboard. It's particularly useful for commands that can only read from the keyboard (stdin) and don't accept a filename argument.",
    "usage": "Feed a file's contents as standard input to a command — useful for tools that only read from stdin or when you want output without filename annotations.",
    "examples": [
      "tr 'a-z' 'A-Z' < notes.txt  # uppercase a file (tr can't take a filename arg)",
      "mysql mydb < schema.sql  # run SQL script against the 'mydb' database",
      "mail -s 'Daily report' boss@company.com < report.txt  # email a file as body",
      "wc -l < /etc/passwd  # line count, no filename in output (cleaner for scripts)",
      "while read line; do echo \"got: $line\"; done < urls.txt  # bash loop over a file",
      "sort < names.txt > sorted-names.txt  # sort file and save result"
    ],
    "memoryTip": "`<` = arrow pointing FROM a file INTO the command. Mirror image of `>`. Most everyday commands don't need it (they accept filenames), but for tools that ONLY read stdin (`tr`, `mail`, DB clients), `<` is the bridge.",
    "outputExample": "$ cat names.txt\ncharlie\nalice\nbob\n$ sort < names.txt\nalice\nbob\ncharlie\n$ wc -l < /etc/passwd\n47",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe4",
    "question": "You want to filter the output of 'ps aux' to show only lines mentioning 'nginx' — without saving to a temporary file. What operator connects one command's output directly into another command's input?",
    "answer": "ps aux | grep nginx",
    "explanation": "Instead of saving a command's output to a temporary file and then reading that file with the next command, this operator connects them directly — the output from the first flows instantly into the input of the second, like a water pipe between two processing stations. You can chain as many stages as you need, each one transforming or filtering the data it receives.",
    "usage": "Connect two commands so the first command's output becomes the second command's input — the fundamental Unix composition operator.",
    "examples": [
      "ps aux | grep nginx  # filter running processes for nginx",
      "ls | grep '.txt'  # list current dir, keep only lines with .txt",
      "cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head  # top-10 IPs",
      "echo 'hello' | tr 'a-z' 'A-Z'  # HELLO",
      "find . -type f | wc -l  # count files in this tree",
      "ps aux | grep nginx | wc -l  # how many nginx processes are running"
    ],
    "memoryTip": "`|` (vertical bar) = pipe. Reads left-to-right like a flowchart: 'take this, then this, then this'. Stdout of left → stdin of right. The fundamental Unix combinator — small tools, big results.",
    "outputExample": "$ ps aux | grep nginx | grep -v grep\nalice   1234  2.1  4.5 ... nginx: master process\nalice   1235  0.1  0.5 ... nginx: worker process\n$ ls | wc -l\n12",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe6",
    "question": "You are running a build with 'make' and want everything — both normal build output and any error messages — saved together in build.log. What bash shorthand redirects both stdout and stderr to the same file simultaneously?",
    "answer": "make &> build.log",
    "altAnswers": [
      "make &>build.log"
    ],
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
    "id": "pipe9",
    "question": "You want to change into /tmp/build-workspace and then run make — but only if the directory change actually succeeded. What operator runs the second command only when the first one exits with success?",
    "answer": "cd /tmp/build-workspace && make",
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
    "answer": "date ; uptime ; df -h",
    "altAnswers": [
      "date; uptime; df -h",
      "date;uptime;df -h",
      "date; uptime; df"
    ],
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
    "question": "Your hourly cron job runs ./backup.sh and you want all its output — both normal messages and any error messages — appended to /var/log/backup.log without overwriting previous run records. What operator appends both stdout and stderr to a file?",
    "answer": "./backup.sh &>> /var/log/backup.log",
    "altAnswers": [
      "./backup.sh &>>/var/log/backup.log",
      "./backup.sh >> /var/log/backup.log 2>&1"
    ],
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
    "question": "In a deployment script, if ./deploy.sh fails you want to immediately print the message 'deploy failed' with echo. What operator runs a fallback command only when the preceding command exits with an error?",
    "answer": "./deploy.sh || echo \"deploy failed\"",
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
    "question": "Your backup script ./backup.sh runs nightly via cron and you want its error messages appended to /var/log/backup-errors.log across each run, while the normal output still prints to the terminal (or wherever stdout goes). What redirect appends only stderr to a file?",
    "answer": "./backup.sh 2>> /var/log/backup-errors.log",
    "altAnswers": [
      "./backup.sh 2>>/var/log/backup-errors.log"
    ],
    "explanation": "This is the append mode version of stderr redirection. Instead of replacing the error log with each run, new error messages are added to the end of whatever was already logged there. This lets you build up a history of errors over time — each night's errors accumulate after the previous nights' errors — so you can see patterns or investigate when something first went wrong.",
    "usage": "Append only error messages (stderr) to a file while leaving normal output unaffected — builds up an error history across multiple runs.",
    "examples": [
      "./backup.sh 2>> /var/log/backup-errors.log  # accumulate errors only",
      "command >> /var/log/output.log 2>> /var/log/errors.log  # separate logs, both appended",
      "make 2>> build-errors.log  # add today's build errors to the log",
      "find / -name '*.conf' 2>> perm-errors.log  # accumulate permission errors from find",
      "find / -name sshd_config 2> /dev/null  # discard all 'Permission denied' noise",
      "make 2> build-errors.log  # only errors captured; build output still on screen"
    ],
    "memoryTip": "`2>>` = stderr append. `>>` (no digit) = stdout append. The digit `2` always means stderr — prefix any redirection with `2` to target errors specifically.",
    "outputExample": "$ ls /nope 2>> errors.log\n$ ls /also-nope 2>> errors.log\n$ cat errors.log\nls: cannot access '/nope': No such file or directory\nls: cannot access '/also-nope': No such file or directory",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe14",
    "question": "You're running a long build with 'make' and want to watch the output live on your terminal AND have it saved to build.log simultaneously — so you don't have to choose between seeing it now and having a record. What command splits output to both the screen and a file at the same time?",
    "answer": "make | tee build.log",
    "altAnswers": [
      "make 2>&1 | tee build.log"
    ],
    "explanation": "When you redirect output to a file, it disappears from your screen. When you don't redirect, it stays on screen but doesn't get saved. This command solves that dilemma by acting like a T-junction in a pipe — it reads the stream and sends it in two directions at once: both to the file and to your screen. You see everything live and end up with a complete file record.",
    "usage": "See output live on screen AND save it to a file at the same time — the T-junction for command output.",
    "examples": [
      "make 2>&1 | tee build.log  # save build output while watching live",
      "./deploy.sh | tee -a /var/log/deploy.log  # append (don't truncate)",
      "echo 'worker_processes 4;' | sudo tee /etc/nginx/nginx.conf  # the sudo-redirect workaround",
      "make | tee build.log | grep ERROR  # full log saved, only errors on screen",
      "./deploy.sh 2>&1 | tee -a /var/log/deploy.log  # capture everything, show live",
      "make 2>&1 | tee /tmp/build.log | grep -i error  # save all, show only errors"
    ],
    "memoryTip": "`tee` = T-pipe-junction (one stream in, two out). Use cases: (1) see-AND-save, (2) the famous `sudo tee` trick for writing to root-owned files. Append mode: `-a`.",
    "outputExample": "$ ls -la | tee listing.txt | head -3\ntotal 24\ndrwxr-xr-x 4 alice alice 4096 May 15 10:00 .\ndrwxr-xr-x 5 root  root  4096 May  1 09:00 ..\n$ wc -l listing.txt\n8 listing.txt  # full output was saved",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe15",
    "question": "You want to run 'dmesg' and save its output to two files simultaneously: local.log and archive.log. What command writes the same input stream to multiple destination files at once?",
    "answer": "dmesg | tee local.log archive.log",
    "explanation": "Just as a T-junction in plumbing can split one pipe into two, tee can send one stream of data to multiple destinations at once. You list as many destination files as you need, and each one gets an identical copy of everything that passes through. This is useful when you need the same output in multiple places without reading or running the command multiple times.",
    "usage": "Write the same stream to multiple files simultaneously — avoids re-running expensive commands when you need output in multiple places.",
    "examples": [
      "dmesg | tee /var/log/boot.log /var/log/archive/boot-$(date +%F).log",
      "./build.sh | tee -a build.log archive/build-$(date +%F).log  # append to both",
      "dd if=/dev/sda | tee >(gzip > backup.gz) >(sha256sum > backup.sha) > /dev/null",
      "echo 'test line' | tee /tmp/a /tmp/b /tmp/c  # same content in three files"
    ],
    "memoryTip": "Multiple files = multiple copies. The killer pattern is `tee >(cmd1) >(cmd2)` for fan-out to OTHER commands (bash-only process substitution).",
    "outputExample": "$ date | tee /var/log/boot.log /var/log/archive/boot-2026-05-17.log\nSun May 17 14:32:10 UTC 2026\n$ cat /var/log/boot.log\nSun May 17 14:32:10 UTC 2026",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe16",
    "question": "On a single line, what is the opening of a here-document that redirects cat's output into /etc/nginx/sites-available/app, with the redirect written before the << operator and the delimiter EOF unquoted?",
    "answer": "cat > /etc/nginx/sites-available/app << EOF",
    "altAnswers": [
      "cat > /etc/nginx/sites-available/app <<EOF",
      "tee /etc/nginx/sites-available/app << EOF",
      "tee /etc/nginx/sites-available/app <<EOF"
    ],
    "explanation": "A here-document lets you write multi-line text directly inside your script surrounded by a pair of delimiter words. Everything between the opening and closing delimiter is treated as if it came from a file. This keeps your script self-contained — no need for separate template files that could be missing when the script runs.",
    "usage": "Embed multi-line literal text directly in a script as stdin for any command — produces self-contained scripts without external template files.",
    "examples": [
      "cat << EOF > /etc/nginx/sites-available/myapp\nserver {\n    listen 80;\n    server_name myapp.com;\n    root /var/www/myapp;\n}\nEOF",
      "mail user@domain.com << EOF\nSubject: Deployment complete\n\nThe deployment finished at $(date).\nEOF",
      "mysql mydb << SQL\nSELECT * FROM users WHERE active = 1;\nSQL",
      "cat << EOF > /etc/nginx/sites-available/mysite\nserver {\n    listen 80;\n    server_name mysite.com;\n}\nEOF",
      "cat << 'EOF'\n$HOME is not expanded with quoted delimiter\nEOF",
      "ssh webserver 'bash -s' << 'REMOTE'\necho 'running on' $(hostname)\nsystemctl restart nginx\nREMOTE"
    ],
    "memoryTip": "'<< EOF' = 'here document'. Like writing a letter directly in the command, ending with your signature (EOF).",
    "outputExample": "$ cat << END\n> Hello\n> World\n> END\nHello\nWorld",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe17",
    "question": "What bash operator feeds the contents of the variable $LOG_LINE to grep's stdin as a single line, without a pipe, temp file, or here-document block?",
    "answer": "grep error <<< \"$LOG_LINE\"",
    "altAnswers": [
      "<<<",
      "grep 'error' <<< \"$LOG_LINE\""
    ],
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
    "id": "pipe20",
    "question": "Your cron job runs /usr/local/bin/maintenance.sh and sends you email every time it produces output. You want the job to run completely silently — no output from stdout or stderr — so it only emails you when something actually breaks. What redirect suppresses all output from a command?",
    "answer": "/usr/local/bin/maintenance.sh > /dev/null 2>&1",
    "altAnswers": [
      "&> /dev/null",
      "&>>/dev/null",
      "/usr/local/bin/maintenance.sh &> /dev/null",
      "/usr/local/bin/maintenance.sh &>/dev/null",
      "/usr/local/bin/maintenance.sh >/dev/null 2>&1",
      "2>&1 >/dev/null (subtly different)",
      ">/dev/null 2>&1"
    ],
    "explanation": "This redirect combination sends everything the command produces — both normal output and error messages — into the virtual trash can, making the command run in complete silence. Cron sends email when a job produces output, so silencing everything prevents the daily noise while still running the maintenance tasks.",
    "usage": "Suppress all output from a command — both stdout and stderr — so it runs completely silently.",
    "examples": [
      "/usr/local/bin/backup.sh > /dev/null 2>&1  # silent cron job",
      "command &> /dev/null  # same, bash shorthand",
      "if ping -c1 8.8.8.8 > /dev/null 2>&1; then echo 'connected'; fi",
      "apt-get update > /dev/null 2>&1 && echo 'updated silently'",
      "find / -name sshd_config 2> /dev/null  # find without Permission denied spam",
      "command > /dev/null 2>&1  # discard EVERYTHING — caller only sees exit code"
    ],
    "memoryTip": "'> /dev/null 2>&1' = 'black hole redirect'. Like throwing everything into a trash can that never fills up. Order matters: stdout first, then redirect stderr to follow it.",
    "outputExample": "$ noisy_command > /dev/null 2>&1\n$ echo $?\n0  # exit code preserved even though output was discarded",
    "category": "PIPES & REDIRECT"
  },
  {
    "id": "pipe21",
    "question": "You're running `make` and the build is failing, but errors are going to stderr while the rest of the output goes to stdout. You want to pipe ALL output (both streams) into `grep` to search for the word 'error'. How do you merge stderr into stdout before the pipe?",
    "answer": "make 2>&1 | grep error",
    "altAnswers": [
      "make |& grep error"
    ],
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
    "id": "pipe23",
    "question": "You have a file `servers.txt` with one hostname per line. You want to run `ssh HOST uptime` for each hostname, substituting the hostname into the middle of the command. What `xargs` invocation uses a placeholder to insert each line into an arbitrary position in the command?",
    "answer": "xargs -I {} ssh {} uptime < servers.txt",
    "altAnswers": [
      "cat servers.txt | xargs -I {} ssh {} uptime",
      "xargs -I% ssh % uptime < servers.txt",
      "xargs -i ssh {} uptime < servers.txt"
    ],
    "explanation": "By default xargs appends its input tokens to the END of the command, but here the hostname must go in the middle — between `ssh` and `uptime`. The `-I {}` option defines a placeholder: for each input line, xargs substitutes that line wherever `{}` appears in the command template and runs it once per line. The `< servers.txt` feeds the file into xargs's stdin.",
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
    "question": "You have 200 `.log` files in the current directory to gzip and the process is CPU-bound. Starting from `ls *.log`, write the pipeline that compresses up to 8 files simultaneously, one file per gzip invocation, using xargs.",
    "answer": "ls *.log | xargs -P 8 -n 1 gzip",
    "altAnswers": [
      "ls *.log | xargs -n 1 -P 8 gzip"
    ],
    "explanation": "Two xargs flags combine here: `-n 1` says pass exactly one filename per gzip invocation, and `-P 8` says keep up to 8 of those invocations running at the same time. As each gzip finishes, xargs launches the next, keeping 8 CPU cores busy until the queue is empty. For a CPU-bound task this gives close to an 8x speedup over compressing the files one at a time.",
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
    "answer": "mkfifo /tmp/data_stream",
    "explanation": "A named pipe (FIFO) is a pipe with a filename: it appears in the filesystem, but data written to it is passed directly in memory to whatever process reads it — nothing is stored on disk. This lets two unrelated processes, started at different times or from different terminals, stream data to each other just by opening the same path. Writers block until a reader connects (and vice versa), which naturally synchronizes the two sides.",
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
    "id": "exit1",
    "question": "You just ran 'ls missing.txt' in a directory where that file does not exist and it printed an error. Before running anything else, print the numeric exit status that command left behind.",
    "answer": "echo $?",
    "explanation": "Every process ends by handing the kernel a single byte of status, which the shell stores in the special parameter ?. By convention 0 means success and any non-zero value means failure, which is the reverse of the usual true/false intuition: there is exactly one way to succeed and many distinct ways to fail, so the non-zero values carry the detail. ls returns 2 for a serious problem such as a missing operand. The value is overwritten by the very next command, so you must capture or test it immediately.",
    "usage": "Debugging a command that failed quietly, discovering what status a tool uses so you can branch on it, or checking why a pipeline in a script took an unexpected path.",
    "examples": [
      "echo $?  # the status of the immediately preceding command",
      "status=$?  # capture it first; the next command overwrites $? instantly",
      "grep -q zulu /tmp/notes.txt; echo $?  # grep returns 1 for no match, 2 for a real error",
      "true; echo $?  # true exists solely to exit 0, false solely to exit 1"
    ],
    "memoryTip": "Think of it as the shell asking 'how did that go?' - and zero problems means success. That inversion is the point: 0 is the single success value, while 1, 2, 127 and the rest each name a different failure. 127 specifically means the shell could not find the command at all. Read $? before anything else runs, because it is replaced by every command.",
    "outputExample": "$ ls missing.txt\nls: cannot access 'missing.txt': No such file or directory\n$ echo $?\n2",
    "category": "EXIT CODES"
  },
  {
    "id": "exit2",
    "question": "A shell script checks for a required config file. If it is absent the script has already written a message to stderr and must now stop right there, reporting failure to whatever invoked it. Write the single statement that ends the script with a failure status of 1.",
    "answer": "exit 1",
    "explanation": "exit terminates the shell running the script immediately, skipping every remaining line, and hands the given number back to the parent process as the script's exit status. 1 is the conventional catch-all for a generic failure. Without an explicit exit, a script ends with the status of its last command, which is very often a successful echo - so a script that clearly failed reports success. Only the low 8 bits are passed on, so exit values are limited to 0-255 and exit 256 arrives as 0.",
    "usage": "Guard clauses at the top of a script: missing configuration, absent dependency, wrong number of arguments, insufficient privileges. It is what lets a caller, a Makefile or a CI job know the run did not succeed.",
    "examples": [
      "exit 1  # generic failure, the conventional default",
      "exit 0  # explicit success, useful when the last command's status is irrelevant",
      "exit  # no argument reuses the status of the last command run",
      "echo \"config missing\" >&2; exit 1  # diagnostics to stderr, then bail"
    ],
    "memoryTip": "A script with no exit inherits the status of whatever ran last, and that is usually a friendly echo returning 0 - so the script announces disaster and then reports success. Say what you mean with exit 1. Remember only the low byte survives: valid values are 0-255, and exit 256 reaches the caller as 0.",
    "outputExample": "$ ./fail.sh\nabout to bail\n$ echo $?\n1",
    "category": "EXIT CODES"
  },
  {
    "id": "exit3",
    "question": "You are compiling in a source tree and want 'make install' to run only if 'make' finishes successfully, written on one line so that a compile error stops you before anything is installed. Write that line.",
    "answer": "make && make install",
    "explanation": "&& is a short-circuit AND on exit status. The shell runs the left command, inspects its status, and runs the right one only if the status was 0. A non-zero status means the right side is never started at all, and the whole list takes the left side's failing status as its own. This is not the same as make; make install, where the semicolon simply sequences commands and the install would proceed on top of a broken build.",
    "usage": "Chaining steps where each depends on the previous succeeding: build then install, cd then act, download then unpack, test then deploy. It is the one-line form of an if statement.",
    "examples": [
      "make && make install  # install only after a clean build",
      "make; make install  # a semicolon just sequences: install runs even after a failure",
      "mkdir -p /tmp/build && cd /tmp/build  # only enter the directory if creating it worked",
      "command -v jq >/dev/null && echo 'jq present'  # a cheap presence check"
    ],
    "memoryTip": "Read && as 'and then, if that worked' and || as 'or else'. They short-circuit exactly like the boolean operators in C, but the truth value is the exit status, where 0 is true. That inversion is the whole trick: success is zero, so && proceeds on zero and || fires on anything else.",
    "outputExample": "$ make && make install\ncompiling\nmake: *** [Makefile:2: all] Error 1\n$ echo $?\n2",
    "category": "EXIT CODES"
  },
  {
    "id": "exit4",
    "question": "The first line of a deploy script must change into /tmp/data, and if that directory does not exist the script must stop immediately with status 1 rather than carrying on and operating in whatever directory it happens to be in. Write that single line.",
    "answer": "cd /tmp/data || exit 1",
    "explanation": "|| is the short-circuit OR: the right side runs only when the left side exits non-zero. A failed cd returns 1 and prints its own error, so exit 1 fires and the script stops. This particular pairing matters more than most, because a bare cd that fails leaves the script running in the original directory, where subsequent relative paths silently address the wrong files. Note that this guard works even under set -e, which deliberately ignores commands on the left of || and would not abort here on its own.",
    "usage": "The standard first line of any script that operates on relative paths, and the same pattern guards mkdir, source, mount and any step whose failure would make everything after it meaningless.",
    "examples": [
      "cd /tmp/data || exit 1  # stop rather than run in the wrong directory",
      "cd /tmp/data || { echo \"no such dir\" >&2; exit 1; }  # braces group several fallback commands",
      "grep -q ok /tmp/notes.txt || echo 'not ok'  # the general form: act only on failure",
      "true && echo yes || echo no  # && and || chain left to right, not as if/else"
    ],
    "memoryTip": "'Do this or else' reads exactly as it runs: || fires only when the left side failed. Pairing it with cd is the classic safety belt, because a cd that fails does not stop the script - it just leaves you somewhere else, and every relative path after it quietly points at the wrong files.",
    "outputExample": "$ ./deploy.sh\n./deploy.sh: line 2: cd: /tmp/data: No such file or directory\n$ echo $?\n1",
    "category": "EXIT CODES"
  },
  {
    "id": "exit5",
    "question": "A 40-line provisioning script currently runs every line regardless of what came before, so a failed download is followed by an attempt to unpack a file that does not exist, and the mess compounds. Write the statement you put near the top to make the shell abort the script the moment any simple command exits non-zero.",
    "answer": "set -e",
    "altAnswers": [
      "set -o errexit"
    ],
    "explanation": "set -e, also spelled set -o errexit, makes the shell exit immediately if a simple command fails, using that command's status as the script's own. It has deliberate exemptions that surprise people: a command is not fatal when it is the condition of an if or while, when it is on the left of && or ||, or when its result is inverted with !. In all those positions the failure is being tested rather than ignored. It also does not look inside a pipeline, where only the last command's status counts unless pipefail is also set.",
    "usage": "The top of nearly every deployment, provisioning, backup or CI script - anywhere continuing after an error does more damage than stopping. It is usually written alongside -u for undefined variables and -o pipefail.",
    "examples": [
      "set -e  # abort on the first failing simple command",
      "set -euo pipefail  # the common trio: errexit, nounset and pipefail together",
      "if ! curl -sf \"$url\"; then echo retry; fi  # inside an if, a failure is tested, not fatal",
      "risky_command || true  # the explicit escape hatch when a failure is acceptable"
    ],
    "memoryTip": "The e is for errexit: exit on error. Its exemptions all share one logic - a failure the script is already testing is not an unhandled failure, so conditions of if and while, the left of && or ||, and anything behind ! are all spared. That is also why cmd || true is the sanctioned way to say 'this one is allowed to fail'.",
    "outputExample": "$ ./withe.sh\nls: cannot access '/tmp/definitely-missing-xyz': No such file or directory\n$ echo $?\n2",
    "category": "EXIT CODES"
  },
  {
    "id": "exit6",
    "question": "In a backup script the pipeline 'curl -sS \"$url\" | gzip -d > out' reports success whenever gzip succeeds, even when curl failed and fed it nothing, because a pipeline's status is by default only the status of its last command. Write the statement that makes the pipeline instead report the status of the rightmost command that failed.",
    "answer": "set -o pipefail",
    "explanation": "By default a pipeline exits with the status of its final command, so any failure upstream is invisible: false | true returns 0. pipefail changes the rule to return the status of the rightmost command that exited non-zero, or 0 when every stage succeeded. This is what makes set -e effective on pipelines, which it otherwise ignores entirely. When you need the individual statuses rather than one summary, the PIPESTATUS array holds one element per stage in order.",
    "usage": "Any script where a pipeline's first stage can fail meaningfully: curl into tar, a database dump into gzip, a build log into tee, or any 'produce | filter | store' chain where losing the producer silently would corrupt the output.",
    "examples": [
      "set -o pipefail  # the pipeline reports the rightmost failure",
      "false | true; echo $?  # 0 by default, 1 once pipefail is set",
      "set -euo pipefail  # the usual combination; pipefail is what makes -e see pipelines",
      "false | true | false; echo \"${PIPESTATUS[@]}\"  # per-stage statuses: 1 0 1"
    ],
    "memoryTip": "Without it a pipeline only reports on its last stage, so curl can die and gzip still says everything is fine. Read the name as 'let the pipe fail' - permission for an upstream error to reach the exit status. Pair it with set -e, which otherwise never notices a pipeline, and use PIPESTATUS when you need per-stage detail.",
    "outputExample": "$ false | true; echo $?\n0\n$ set -o pipefail\n$ false | true; echo $?\n1",
    "category": "EXIT CODES"
  },
  {
    "id": "bash1",
    "question": "You are writing your project's build-and-deploy script and need the very first line, the one that tells the kernel to run the file with the Bash interpreter at /bin/bash. What exactly is that first line?",
    "answer": "#!/bin/bash",
    "altAnswers": [
      "#!/usr/bin/env bash"
    ],
    "explanation": "The first two bytes of a file, `#!`, are a kernel-level marker called the shebang. When you execute a file, the kernel reads those bytes and, if it finds them, runs the interpreter named on the rest of the line and hands it your file. Without it the kernel has no idea what language the file is in, so it falls back to whatever shell invoked it — which is why a bash-only script can mysteriously fail under a different shell. `#!/usr/bin/env bash` is the portable variant: it looks bash up on PATH instead of assuming it lives at /bin/bash.",
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
    "question": "A script needs to load /etc/myapp/config.sh only if that file actually exists. Using a single-line if-statement with the [ -f ] test and the source command (no else branch), how do you source the file only when it exists?",
    "answer": "if [ -f /etc/myapp/config.sh ]; then source /etc/myapp/config.sh; fi",
    "altAnswers": [
      "if [ -f /etc/myapp/config.sh ]; then . /etc/myapp/config.sh; fi",
      "[ -f /etc/myapp/config.sh ] && source /etc/myapp/config.sh",
      "if [[ -f /etc/myapp/config.sh ]]; then source /etc/myapp/config.sh; fi"
    ],
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
    "outputExample": "$ if [ -f /etc/myapp/config.sh ]; then source /etc/myapp/config.sh; fi\n$ echo $DB_HOST\ndb1.internal\n$ if [ -f /etc/myapp/missing.sh ]; then source /etc/myapp/missing.sh; fi\n$ # file absent — nothing sourced, no error",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash3",
    "question": "A script needs to compress every .log file in /var/log/myapp/ individually. Using loop variable f and gzip \"$f\" as the body, what one-line for-loop iterates over /var/log/myapp/*.log?",
    "answer": "for f in /var/log/myapp/*.log; do gzip \"$f\"; done",
    "altAnswers": [
      "for f in /var/log/myapp/*.log; do gzip $f; done"
    ],
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
    "outputExample": "$ ls /var/log/myapp/\napp.log  worker.log\n$ for f in /var/log/myapp/*.log; do gzip \"$f\"; done\n$ ls /var/log/myapp/\napp.log.gz  worker.log.gz",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash4",
    "question": "A script needs to show the prompt 'Password: ' and store the typed database password in a variable named password without echoing the characters to the screen. Using the combined flags -sp, what read command captures input silently?",
    "answer": "read -sp 'Password: ' password",
    "altAnswers": [
      "read -s -p 'Password: ' password",
      "read -srp 'Password: ' password"
    ],
    "explanation": "This command pauses the script and waits for the user to type something and press Enter. With the silent flag, the typed characters don't appear on screen — essential for passwords. The typed text is stored in a variable for the script to use later.",
    "usage": "Prompt with 'Password: ' and store the typed database password silently in the variable named password, without echoing characters to the terminal.",
    "examples": [
      "read -rp 'Enter your name: ' username\necho \"Hello $username\"  # always use -r in scripts",
      "read -srp 'Enter password: ' password; echo  # -s = silent, echo adds the missing newline",
      "read -rp 'Continue? [y/N] ' -n1 ans; echo  # single-key prompt, no Enter needed",
      "read -rp 'Path: ' -t 10 path || { echo 'Timed out'; exit 1; }  # 10-second timeout",
      "while IFS= read -r line; do echo \"got: $line\"; done < /etc/hosts  # line-by-line file read"
    ],
    "memoryTip": "Flag cheat-sheet: `-p` PROMPT, `-r` RAW (use always), `-s` SILENT (password), `-n N` exactly N chars, `-t SECS` timeout, `-a ARR` into array. No variable name? Read into magic `$REPLY`. For file reading: `while IFS= read -r line` is the canonical safe loop.",
    "outputExample": "$ read -sp 'Password: ' password; echo\nPassword: \n$ echo \"captured ${#password} characters\"\ncaptured 12 characters",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash5",
    "question": "A deploy script needs to name a backup file with today's date, like 'db_backup_2026-05-19.sql'. How do you capture the output of 'date +%F' into a variable named today using command substitution?",
    "answer": "today=$(date +%F)",
    "altAnswers": [
      "today=`date +%F`"
    ],
    "explanation": "Command substitution lets you run a command and use its output as a value — like plugging the answer of one command directly into another. Wrapping a command in `$(...)` says \"run this, and replace this whole expression with whatever the command printed.\"",
    "usage": "Capture the current date in YYYY-MM-DD format into a variable and use it to construct a timestamped backup filename.",
    "examples": [
      "today=$(date +%F)\nbackup=\"db_backup_${today}.sql\"  # produce db_backup_2026-05-19.sql",
      "count=$(grep -c ERROR /var/log/app/app.log)\necho \"$count errors found\"  # capture a number",
      "user_home=$(getent passwd alice | cut -d: -f6)  # nested chains work fine",
      "mapfile -t logfiles < <(find /var/log -name '*.log')  # array of paths, newline-safe",
      "size=$(stat -c%s \"$f\")  # file size in bytes",
      "FQDN=$(hostname -f)  # capture fully qualified hostname"
    ],
    "memoryTip": "`$(cmd)` modern, backtick legacy. Always QUOTE the result on use: `\"$var\"`. Captured command runs in a SUBSHELL — variables set inside don't leak out. For multi-word/newline output, prefer `mapfile -t arr < <(cmd)` over `arr=($(cmd))`.",
    "outputExample": "$ today=$(date +%F)\n$ echo \"Today is $today\"\nToday is 2026-05-19\n$ backup=\"db_backup_${today}.sql\"\n$ echo $backup\ndb_backup_2026-05-19.sql",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash6",
    "question": "A deploy script is called as './deploy.sh web1.example.com /opt/myapp'. The script needs to access the hostname as the first argument and the path as the second. What echo command prints the text 'First arg: ' followed by the value of the first positional parameter (in one double-quoted string)?",
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
    "id": "bash8",
    "question": "Multiple scripts all need the same logging logic. You want a reusable function named log whose body is: echo \"[$(date)] $1\". Using the name() { ...; } syntax, what is the one-line definition?",
    "answer": "log() { echo \"[$(date)] $1\"; }",
    "altAnswers": [
      "function log { echo \"[$(date)] $1\"; }",
      "function log() { echo \"[$(date)] $1\"; }"
    ],
    "explanation": "A function is a named block of reusable code. Once defined, you can call it by name just like any command, passing arguments to it. This is how scripts stay maintainable — you write complex logic once, give it a name, and reuse it throughout the script.",
    "usage": "Define a reusable 'log' function that prints its first argument prefixed with the current date in square brackets.",
    "examples": [
      "log() { echo \"[$(date +%F\\ %T)] $*\" >> /var/log/myapp/deploy.log; }\nlog 'started deployment'  # reusable logger",
      "die() { echo \"FATAL: $*\" >&2; exit 1; }\n[ -f /etc/myapp/config.sh ] || die 'config missing'",
      "backup() {\n  local src=$1 dest=$2  # local: doesn't leak\n  tar -czf \"$dest\" \"$src\"\n}\nbackup /etc /tmp/etc.tgz",
      "is_root() { [ \"$(id -u)\" -eq 0 ]; }\nis_root && echo 'root' || echo 'not root'  # boolean via exit code",
      "declare -F  # list all defined functions"
    ],
    "memoryTip": "`name() { ... }` defines, `name args` calls. `$1`..`$#` SHADOW the script's args inside. `local x=...` to avoid leaking variables. `return N` sets exit code (0-255), not a string — to 'return' data, echo it and let the caller use `$(...)`. Define before use.",
    "outputExample": "$ log() { echo \"[$(date)] $1\"; }\n$ log 'deploy started'\n[Tue May 19 14:35:02 UTC 2026] deploy started\n$ log 'deploy finished'\n[Tue May 19 14:36:10 UTC 2026] deploy finished\n$ declare -F\ndeclare -f log",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash9",
    "question": "A script must create the directory /var/run/myapp. On success it should echo 'created'; if mkdir fails it should echo 'failed' to stderr (>&2) and exit 1. What if-statement tests the mkdir command's exit status directly (no [ ] brackets)?",
    "answer": "if mkdir /var/run/myapp; then echo 'created'; else echo 'failed' >&2; exit 1; fi",
    "altAnswers": [
      "if mkdir /var/run/myapp; then echo created; else echo failed >&2; exit 1; fi"
    ],
    "explanation": "In bash, the if-statement doesn't take a \"true or false\" expression — it runs a command and checks whether that command succeeded. Success means the command's exit code is 0; any non-zero exit code means failure. This lets you test the outcome of any command directly.",
    "usage": "Attempt to create /var/run/myapp and exit the script with an error message if mkdir fails.",
    "examples": [
      "if mkdir /var/run/myapp; then echo 'created'; else echo 'failed' >&2; exit 1; fi",
      "if command -v jq >/dev/null; then echo 'jq present'; fi  # is a command installed?",
      "if grep -q ERROR /var/log/app/app.log; then echo 'errors found'; fi  # -q for quiet",
      "cmd; rc=$?; if [ $rc -ne 0 ]; then echo \"cmd failed with $rc\"; fi  # capture $? if needed",
      "set -euo pipefail  # strict mode: exit on first failure, unset var, or pipe failure"
    ],
    "memoryTip": "`if CMD; then ... fi` — `if` takes a COMMAND, not an expression. Exit code: 0 = success/true, non-zero = failure/false. `$?` holds the LAST exit code. The clean idiom is `if cmd; then ...`; the messy alternative is `cmd; if [ $? -eq 0 ]; then ...`. Strict-mode top line: `set -euo pipefail`.",
    "outputExample": "$ if mkdir /var/run/myapp; then echo 'created'; else echo 'failed' >&2; exit 1; fi\ncreated\n$ if mkdir /var/run/myapp; then echo 'created'; else echo 'failed' >&2; exit 1; fi\nmkdir: cannot create directory '/var/run/myapp': File exists\nfailed",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash10",
    "question": "A script needs to process every line from /etc/hosts, echoing each line as it goes. Using the canonical safe pattern with IFS= and read -r into a variable named line, what while-loop reads the file line-by-line without creating a subshell?",
    "answer": "while IFS= read -r line; do echo \"$line\"; done < /etc/hosts",
    "altAnswers": [
      "while IFS= read -r line; do echo $line; done < /etc/hosts"
    ],
    "explanation": "Reading a file line-by-line in bash requires a specific pattern to work correctly. This pattern uses a while loop with the \"read\" built-in, feeding the file as input from the right side. The key parts prevent common bugs: one flag stops backslash from being interpreted as an escape, and the IFS setting preserves leading whitespace on each line.",
    "usage": "Read /etc/hosts line-by-line, echoing each line, without losing whitespace, backslashes, or variables to a subshell.",
    "examples": [
      "while IFS= read -r line; do echo \"got: $line\"; done < /etc/hosts  # safe canonical form",
      "while IFS=: read -r user _ uid _ _ home _; do echo \"$user $uid $home\"; done < /etc/passwd",
      "while IFS= read -r line; do echo \"$line\"; done < <(curl -s https://example.com/hosts)  # process subst, no subshell",
      "tail -f /var/log/app/app.log | while read -r line; do [[ $line == *ERROR* ]] && echo \"$line\"; done",
      "n=0; while read -r _; do n=$((n+1)); done < /etc/hosts; echo \"$n lines\""
    ],
    "memoryTip": "Memorize: `while IFS= read -r line; do ... done < file`. `IFS=` keeps whitespace, `-r` keeps backslashes. Avoid `cat file | while read`; that creates a subshell and variables LEAK away. For maximum filename safety with `find`, use `-print0` + `read -d ''`.",
    "outputExample": "$ while IFS= read -r line; do echo \"$line\"; done < /etc/hosts\n127.0.0.1 localhost\n127.0.1.1 myhostname\n# The following lines are for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash11",
    "question": "You are writing a bash script that will run in a cron job. You want it to exit immediately on any failed command, error on unset variables, and not silently swallow pipeline failures. What three-option set command achieves all of this?",
    "answer": "set -euo pipefail",
    "altAnswers": [
      "set -e -u -o pipefail",
      "set -eu -o pipefail",
      "set -o errexit -o nounset -o pipefail"
    ],
    "explanation": "By default, bash keeps running even when commands fail — it just ignores the error and moves on. This single line at the top of your script activates three safety nets that together make the script exit with an error whenever something goes wrong, rather than continuing with broken state.",
    "usage": "Add as the first executable line of every non-trivial bash script to make failure explicit and loud.",
    "examples": [
      "#!/usr/bin/env bash\nset -euo pipefail\nIFS=$'\\n\\t'  # canonical strict-mode preamble",
      "risky_cmd || true  # explicit opt-out of -e for one command",
      "set +e; risky_block; set -e  # temporarily disable -e around a block",
      "set -o pipefail  # standalone",
      "set -euo pipefail  # the standard strict-mode header for production scripts",
      "false | true; echo $?  # without pipefail: 0; with pipefail: 1"
    ],
    "memoryTip": "`-e` exit-on-error, `-u` unset-vars-are-errors, `-o pipefail` pipeline-fails-if-any-stage-fails. The trinity of bash safety.",
    "outputExample": "$ cat strict.sh\n#!/usr/bin/env bash\nset -euo pipefail\nfalse\necho 'never seen'\n$ bash strict.sh; echo \"exit=$?\"\nexit=1\n$ bash -c 'set -u; echo \"$NOPE\"'\nbash: NOPE: unbound variable",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash12",
    "question": "Your script needs a temp directory created with mktemp -d, stored in a variable named tmp, and automatically deleted (rm -rf) when the script exits — even if it crashes partway through. What one-line create-plus-trap idiom achieves this?",
    "answer": "tmp=$(mktemp -d); trap 'rm -rf \"$tmp\"' EXIT",
    "altAnswers": [
      "tmp=$(mktemp -d); trap 'rm -rf $tmp' EXIT",
      "tmp=`mktemp -d`; trap 'rm -rf \"$tmp\"' EXIT",
      "tmp=`mktemp -d`; trap 'rm -rf $tmp' EXIT"
    ],
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
    "question": "You want your bash script to accept a -f filename flag and a -v verbose flag using the getopts builtin with optstring \"f:v\" and loop variable opt. Write the one-line while loop whose case statement stores -f's argument as file=$OPTARG and sets verbose=1 for -v.",
    "answer": "while getopts \"f:v\" opt; do case $opt in f) file=$OPTARG;; v) verbose=1;; esac; done",
    "altAnswers": [
      "while getopts \"f:v\" opt; do case $opt in f) file=$OPTARG ;; v) verbose=1 ;; esac; done",
      "while getopts \"f:v\" opt; do case \"$opt\" in f) file=$OPTARG;; v) verbose=1;; esac; done",
      "while getopts \"f:v\" opt; do case \"$opt\" in f) file=$OPTARG ;; v) verbose=1 ;; esac; done"
    ],
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
    "question": "Your script reads a PORT variable from the environment and must assign it to a lowercase variable named port, defaulting to 8080 if PORT is unset or empty. What parameter-expansion assignment achieves this without an if statement?",
    "answer": "port=\"${PORT:-8080}\"",
    "altAnswers": [
      "port=${PORT:-8080}"
    ],
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
    "question": "Your deployment script requires the API_TOKEN environment variable and must exit loudly with the message 'API_TOKEN env var is required' if it is missing. Using the null command : followed by a parameter expansion, what one line does this?",
    "answer": ": \"${API_TOKEN:?API_TOKEN env var is required}\"",
    "altAnswers": [
      ": ${API_TOKEN:?API_TOKEN env var is required}"
    ],
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
    "question": "A bash variable $filename contains 'My Photo 2026.JPG' and you want to echo it with all spaces replaced by underscores using only bash parameter expansion, without spawning a sed process. What echo command does this?",
    "answer": "echo \"${filename// /_}\"",
    "altAnswers": [
      "echo ${filename// /_}"
    ],
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
    "question": "Your script accepts a subcommand as its first argument — start, stop, or status — calling functions start_service, stop_service, or status_service respectively. For anything else it must print 'usage: $0 {start|stop|status}' to stderr and exit 1. Write the one-line case statement on \"$1\" that does this.",
    "answer": "case \"$1\" in start) start_service ;; stop) stop_service ;; status) status_service ;; *) echo \"usage: $0 {start|stop|status}\" >&2; exit 1 ;; esac",
    "altAnswers": [
      "case $1 in start) start_service ;; stop) stop_service ;; status) status_service ;; *) echo \"usage: $0 {start|stop|status}\" >&2; exit 1 ;; esac",
      "case \"$1\" in start) start_service;; stop) stop_service;; status) status_service;; *) echo \"usage: $0 {start|stop|status}\" >&2; exit 1;; esac",
      "case $1 in start) start_service;; stop) stop_service;; status) status_service;; *) echo \"usage: $0 {start|stop|status}\" >&2; exit 1;; esac"
    ],
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
    "question": "Your script needs a lookup table named url mapping environment names to deployment URLs — key dev to https://dev.example.com and key prod to https://example.com. How do you declare and initialize this string-keyed associative array in bash?",
    "answer": "declare -A url=([dev]=https://dev.example.com [prod]=https://example.com)",
    "altAnswers": [
      "declare -A url=([dev]=\"https://dev.example.com\" [prod]=\"https://example.com\")",
      "declare -A url=( [dev]=https://dev.example.com [prod]=https://example.com )"
    ],
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
    "question": "Your script needs to process every hostname from /etc/deploy/hosts.txt as an element of a bash array named hosts. What single command reads the file into the array with no trailing newlines on each element?",
    "answer": "mapfile -t hosts < /etc/deploy/hosts.txt",
    "altAnswers": [
      "IFS=$'\\n' read -d '' -ra hosts < /etc/deploy/hosts.txt",
      "hosts=($(cat /etc/deploy/hosts.txt))",
      "readarray -t hosts < /etc/deploy/hosts.txt"
    ],
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
    "altAnswers": [
      "(( i+=1 ))",
      "((++i))",
      "((i++))",
      "((i+=1))",
      "i=$((i+1))",
      "let \"i=i+1\"",
      "let i++"
    ],
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
    "altAnswers": [
      "tar -czf \"backup-$(date +%Y-%m-%d).tar.gz\" /etc",
      "tar -czvf /backups/backup-$(date +%F).tar.gz /etc",
      "tar czf \"backup-$(date +%F).tar.gz\" /etc",
      "tar czf \"backup-$(date +%Y-%m-%d).tar.gz\" /etc",
      "tar czf backup-$(date +%Y-%m-%d).tar.gz /etc"
    ],
    "explanation": "This command creates a compressed archive of a directory and names the file using today's date automatically inserted into the filename. Running the same command tomorrow produces a different filename, so daily backups don't overwrite each other.",
    "usage": "Create a date-stamped gzip-compressed tarball for use in automated backup scripts.",
    "examples": [
      "tar -czf \"backup-$(date +%F).tar.gz\" /etc  # daily: backup-2026-05-17.tar.gz",
      "tar -czf \"snap-$(date +%F-%H%M%S).tgz\" /etc  # second-precision",
      "tar -czf - /etc | ssh alice@backup.example.com 'cat > /var/backups/etc.tgz'  # stream off-site",
      "find /var/backups -name 'backup-*.tar.gz' -mtime +30 -delete  # rotate 30+ days old",
      "tar -czvf nginx_backup_2026-05-19.tar.gz /etc/nginx/  # gzip — the everyday default",
      "tar -cjvf /tmp/nginx_backup.tar.bz2 /etc/nginx/  # bzip2 — better compression, slower"
    ],
    "memoryTip": "`tar -czf` = Create, gZip, File. `$(date +%F)` = today YYYY-MM-DD. Quote the filename. Rotate with `find -mtime +N -delete`.",
    "outputExample": "$ tar -czf \"backup-$(date +%F).tar.gz\" /etc\n$ ls -lh backup-*.tar.gz\n-rw-r--r-- 1 alice alice 1.8M May 17 09:32 backup-2026-05-17.tar.gz",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash23",
    "question": "You just converted a directory of .txt files to Markdown and want to rename them all from .txt to .md. Using a for loop with loop variable f and parameter expansion, what one-liner renames all of them?",
    "answer": "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done",
    "altAnswers": [
      "for f in *.txt; do mv -- \"$f\" \"${f%.txt}.md\"; done"
    ],
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
    "altAnswers": [
      "exec &> >(tee -a /var/log/deploy.log)",
      "exec 2>&1 > >(tee -a /var/log/deploy.log)",
      "exec > >(tee -a /var/log/deploy.log) 2> >(tee -a /var/log/deploy.log >&2)",
      "exec >> /var/log/myjob.log 2>&1"
    ],
    "explanation": "This line, placed near the top of a script, redirects all subsequent output to both the terminal and a log file simultaneously. It is the 'log everything' pattern — after this line runs, you never have to add redirection to individual commands in the script.",
    "usage": "Redirect all script output to both the terminal and a log file with a single line at the top.",
    "examples": [
      "exec > >(tee -a /var/log/deploy.log) 2>&1  # canonical 'log everything'",
      "LOG=\"/var/log/myapp-$(date +%F).log\"\nexec > >(tee -a \"$LOG\") 2>&1  # daily log file",
      "exec > >(tee -a /var/log/out.log) 2> >(tee -a /var/log/err.log >&2)  # separate stdout/stderr",
      "exec > /var/log/myjob.log 2>&1  # overwrite on each run",
      "exec >> /var/log/myjob.log 2>&1  # append on each run",
      "exec > >(tee -a /var/log/myjob.log) 2>&1  # log AND show on screen"
    ],
    "memoryTip": "`exec > FILE` = redirect this shell's stdout for the rest of its life. `>(cmd)` = process substitution (bash-only). Combo: `exec > >(tee -a log) 2>&1`. Put after strict-mode at the top.",
    "outputExample": "$ cat deploy.sh\n#!/usr/bin/env bash\nset -euo pipefail\nexec > >(tee -a /var/log/deploy.log) 2>&1\necho 'deploy started'\nls /nonexistent  # error\necho 'done'\n$ ./deploy.sh\ndeploy started\nls: cannot access '/nonexistent': No such file or directory\ndone\n$ tail /var/log/deploy.log\ndeploy started\nls: cannot access '/nonexistent': No such file or directory\ndone",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash25",
    "question": "Your script runs `curl -fsS https://config.example.com/config` and, if the fetch fails, must print 'fetch failed' to stderr and exit 1. What single line uses || with a brace command group to do this?",
    "answer": "curl -fsS https://config.example.com/config || { echo 'fetch failed' >&2; exit 1; }",
    "altAnswers": [
      "curl -fsS https://config.example.com/config || { echo 'fetch failed' 1>&2; exit 1; }"
    ],
    "explanation": "The double pipe means \"if the command on the left fails, run what is on the right\". Using curly braces lets you group multiple actions as the fallback, so you can both print an error message and exit in one logical block.",
    "usage": "Run a fallback action (print error and exit) if a command fails, using inline conditional syntax.",
    "examples": [
      "curl -fsS https://config.example.com/config || { echo 'fetch failed' >&2; exit 1; }",
      "mkdir -p /var/run/app || { echo 'cannot create dir' >&2; exit 1; }",
      "command -v jq >/dev/null || { echo 'jq not installed' >&2; exit 1; }",
      "[ -f config.txt ] || { echo 'config missing' >&2; exit 1; }",
      "systemctl is-active nginx >/dev/null || { echo 'nginx not running' >&2; exit 1; }"
    ],
    "memoryTip": "`cmd || action` = run action ON FAILURE. `{ a; b; }` groups (note spaces + closing `;`). Under `set -e`, left of `||` is exempt. The `&& X || Y` pattern is NOT a clean if/else — use real `if` when it matters.",
    "outputExample": "$ false || { echo 'first'; echo 'second'; exit 1; }\nfirst\nsecond\n$ echo $?\n1\n$ curl -fsS https://nope.invalid || echo 'fallback'\nfallback",
    "category": "BASH SCRIPTING"
  },
  {
    "id": "bash26",
    "question": "You want a cron job to run the script /usr/local/bin/backup.sh every day at 2:30 AM, appending both stdout and stderr to /var/log/backup.log. What crontab line sets this up?",
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
    "question": "You want `/opt/healthcheck.sh` to run every 15 minutes, appending stdout and stderr to `/var/log/healthcheck.log`, but must ensure two instances never overlap if the script takes too long. What crontab line wraps the script with a non-blocking flock on `/var/lock/healthcheck.lock`?",
    "answer": "*/15 * * * * /usr/bin/flock -n /var/lock/healthcheck.lock /opt/healthcheck.sh >> /var/log/healthcheck.log 2>&1",
    "altAnswers": [
      "*/15 * * * * flock -n /var/lock/healthcheck.lock /opt/healthcheck.sh >> /var/log/healthcheck.log 2>&1"
    ],
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
    "question": "You need to keep /var/www/html/ on web1.example.com (SSH user alice) synchronized with your local ./site/ directory using rsync -avz with --delete for removed files. You want a --dry-run preview, then the real run, joined by &&. What is the full command line?",
    "answer": "rsync -avz --dry-run --delete ./site/ alice@web1.example.com:/var/www/html/ && rsync -avz --delete ./site/ alice@web1.example.com:/var/www/html/",
    "altAnswers": [
      "rsync -avz --delete --dry-run ./site/ alice@web1.example.com:/var/www/html/ && rsync -avz --delete ./site/ alice@web1.example.com:/var/www/html/",
      "rsync -avzn --delete ./site/ alice@web1.example.com:/var/www/html/ && rsync -avz --delete ./site/ alice@web1.example.com:/var/www/html/"
    ],
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
    "question": "Your script must handle the long flags --file (whose next argument is stored in a variable named file) and --verbose (which sets verbose=1), simply shifting past anything else. Write the one-line `while [[ $# -gt 0 ]]` loop with a case statement that consumes arguments this way.",
    "answer": "while [[ $# -gt 0 ]]; do case \"$1\" in --file) file=\"$2\"; shift 2 ;; --verbose) verbose=1; shift ;; *) shift ;; esac; done",
    "altAnswers": [
      "while [[ $# -gt 0 ]]; do case $1 in --file) file=$2; shift 2 ;; --verbose) verbose=1; shift ;; *) shift ;; esac; done",
      "while [[ $# -gt 0 ]]; do case \"$1\" in --file) file=\"$2\"; shift 2;; --verbose) verbose=1; shift;; *) shift;; esac; done",
      "while [[ $# -gt 0 ]]; do case $1 in --file) file=$2; shift 2;; --verbose) verbose=1; shift;; *) shift;; esac; done"
    ],
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
    "question": "A nightly backup cron job runs silently and you want its events in the system journal. What command writes the message 'backup completed in 142s' to the journal, tagged mybackup, at priority user.notice?",
    "answer": "logger -t mybackup -p user.notice 'backup completed in 142s'",
    "altAnswers": [
      "logger -p user.notice -t mybackup 'backup completed in 142s'"
    ],
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
    "id": "dbg1",
    "question": "A colleague's 400-line script at /tmp/deploy.sh is failing somewhere in the middle and you want to watch every command it executes with its variables already expanded. You must not modify the file, because it is checked out from a shared repo. What command runs it with tracing turned on from the outside?",
    "answer": "bash -x /tmp/deploy.sh",
    "altAnswers": [
      "bash -x /tmp/deploy.sh",
      "bash -o xtrace /tmp/deploy.sh"
    ],
    "explanation": "Tracing is a shell option, and options can be set either from inside the script (`set -x` on a line of its own) or by the shell you launch it with. Passing -x to bash itself turns on the same xtrace option for the whole run without touching a single byte of the file. Each traced line is printed to stderr, prefixed with the value of PS4 (a `+` by default), AFTER expansion — so you see `mkdir -p /tmp/dbgv/app`, the real command, rather than the `mkdir -p \"$dir\"` you wrote. That expansion is the whole point: most script bugs are a variable holding something other than what you assumed.",
    "usage": "Debugging a script you cannot or should not edit — someone else's code, a file under version control, or a script running from a read-only mount.",
    "examples": [
      "bash -x /tmp/deploy.sh  # trace the whole run, script untouched",
      "bash -x /tmp/deploy.sh 2> /tmp/trace.log  # trace goes to stderr, so capture it separately",
      "bash -n /tmp/deploy.sh  # different check: parse for syntax errors without running anything",
      "PS4='+ ${LINENO}: ' bash -x /tmp/deploy.sh  # put line numbers in the trace prefix"
    ],
    "memoryTip": "-x is for e(x)ecution trace. Remember the pair: `bash -n` says 'would this even parse?' and `bash -x` says 'show me what it actually ran'. Both take the script as an argument rather than needing an edit, which is what makes them safe on code you do not own.",
    "outputExample": "$ bash -x /tmp/deploy.sh\n+ name=app\n+ mkdir -p /tmp/dbgv/app\n+ cp /etc/hostname /tmp/dbgv/app/",
    "category": "DEBUGGING"
  },
  {
    "id": "dbg2",
    "question": "You have a 400-line bash deployment script at /tmp/deploy.sh that takes twenty minutes to run and cannot safely be run twice. Before the maintenance window you want bash to parse the entire file and report any syntax error, without executing a single command inside it. What command does that?",
    "answer": "bash -n /tmp/deploy.sh",
    "altAnswers": [
      "bash -o noexec /tmp/deploy.sh"
    ],
    "explanation": "The -n option puts bash in noexec mode: it runs its full parser over the file, builds the command tree, and then throws it away instead of executing it. So unterminated quotes, a for without its done, a missing fi or a stray parenthesis are all caught, and nothing on disk is touched. What it cannot catch is anything that is only knowable at run time -- a misspelled command name, an undefined variable, a wrong path -- because those are valid syntax. It reports the line where the parser gave up and, helpfully, the line where the unclosed construct began; exit status is 0 for clean and 2 for a syntax error.",
    "usage": "Gating a long or destructive script in CI, or sanity-checking an edit to something you cannot afford to half-run.",
    "examples": [
      "bash -n /tmp/deploy.sh  # parse only; exits 0 when the syntax is clean",
      "bash -n /tmp/deploy.sh && echo OK  # chain the verdict into a pre-commit hook",
      "bash -nv /tmp/deploy.sh  # -v also echoes each line as it is parsed",
      "for f in *.sh; do bash -n \"$f\" || echo \"BAD: $f\"; done  # sweep a directory"
    ],
    "memoryTip": "n is for noexec -- the long form is literally set -o noexec, so bash -n and bash -o noexec are the same switch. Pair it in your head with its opposite, bash -x, which executes and narrates: -n is 'read but do not do', -x is 'do and say'. Remember its blind spot with the phrase 'grammar, not spelling': it proves the script parses, never that the commands exist.",
    "outputExample": "$ bash -n /tmp/deploy.sh\n/tmp/deploy.sh: line 7: syntax error: unexpected end of file from `for' command on line 3\n$ echo $?\n2",
    "category": "DEBUGGING"
  },
  {
    "id": "dbg3",
    "question": "A long provisioning script runs correctly through its first two hundred lines and then misbehaves inside one function. You want bash to start echoing every command it runs, with variables already expanded, from a chosen point in the file onward rather than from line 1. What line do you insert at that point?",
    "answer": "set -x",
    "altAnswers": [
      "set -o xtrace"
    ],
    "explanation": "set changes shell options in the running shell, and -x turns on execution tracing: before each simple command is run, bash writes the command to stderr with all expansions already performed, so you see the values that actually reached it rather than the variables you wrote. Each traced line is prefixed by the PS4 prompt, which defaults to '+ ', and nesting adds one plus per level of subshell or function. Because it is an option and not a wrapper, you can switch it off again with set +x, which is what makes it usable for narrowing to a single region -- launching the whole file with bash -x would bury the interesting part in two hundred lines of noise. The trace goes to stderr, so it does not corrupt output you are piping.",
    "usage": "Isolating the failing step in a long script, and seeing what a variable or glob really expanded to at the moment of use.",
    "examples": [
      "set -x  # start tracing here; every command echoes to stderr, fully expanded",
      "set +x  # stop tracing; plus turns options off, minus turns them on",
      "bash -x ./provision.sh  # trace the whole run instead, without editing the file",
      "PS4='+ ${LINENO}: ' ; set -x  # prefix each trace line with its line number",
      "set -x; cmd 2>/tmp/trace.log  # trace goes to stderr, so redirect it away from stdout"
    ],
    "memoryTip": "x is for execution trace (its long name is xtrace) -- picture x-raying the script as it runs. The sign convention looks backwards but is consistent across all shell options: minus enables, plus disables, because set -x adds the option to the shell's flag set and set +x removes it. The '+ ' at the start of each traced line is the PS4 prompt, the fourth prompt string after PS1, PS2 and PS3.",
    "outputExample": "$ bash /tmp/provision.sh\n+ mkdir -p /tmp/qout/releases/inventory-4.2.0\n+ cp /tmp/status.json /tmp/qout/releases/inventory-4.2.0/\n+ set +x\nprovisioned inventory 4.2.0",
    "category": "DEBUGGING"
  },
  {
    "id": "dbg4",
    "question": "Before merging a colleague's bash script at /tmp/deploy.sh you want a static analyser to read it and warn about the classic shell mistakes it cannot catch by parsing alone -- unquoted variables that will word-split, useless uses of cat, tests that always succeed. What command runs that analyser over the file?",
    "answer": "shellcheck /tmp/deploy.sh",
    "altAnswers": [
      "shellcheck -s bash /tmp/deploy.sh"
    ],
    "explanation": "A syntax check only proves a script parses; a linter reasons about what the parsed code will do. This one walks the same tree bash would build and matches it against several hundred known hazards, each with a stable SC#### identifier you can look up or silence -- SC2086 for an unquoted expansion that will word-split and glob, SC2164 for a cd whose failure goes unhandled, SC2046 for unquoted command substitution. Output points at the offending column with a caret and names the code, and the exit status is non-zero when anything is reported, so it drops straight into a pre-commit hook or CI step. It is a separate package, not part of coreutils or bash, so it has to be installed before it is available.",
    "usage": "Code review and CI for shell scripts, where the failure modes are quoting and error handling rather than syntax.",
    "examples": [
      "shellcheck /tmp/deploy.sh  # report every finding, with SC codes and carets",
      "shellcheck -S error /tmp/deploy.sh  # raise the severity floor; ignore style and info notes",
      "shellcheck -e SC2086 /tmp/deploy.sh  # exclude one check you have deliberately accepted",
      "shellcheck -f gcc /tmp/deploy.sh  # file:line:col format that editors and CI can parse",
      "shellcheck ./*.sh  # lint a whole directory in one invocation"
    ],
    "memoryTip": "The name says the job: it checks shell, the way a spell-checker checks prose -- your sentence is grammatical, but you still meant 'their'. Remember the pairing with bash -n as grammar versus meaning: -n proves the script parses, this proves the parsed code is not quietly wrong. The SC numbers are stable and googleable, so treat each one as a short essay rather than a nag.",
    "outputExample": "$ shellcheck /tmp/deploy.sh\n\nIn /tmp/deploy.sh line 4:\nrm -rf $TARGET/\n       ^-----^ SC2086: Double quote to prevent globbing and word splitting.",
    "category": "DEBUGGING"
  },
  {
    "id": "dbg5",
    "question": "The same script behaves differently on two machines, and you suspect that on one of them the name echo is not resolving to the binary in /usr/bin at all. You want a one-word verdict -- alias, keyword, function, builtin or file -- naming what kind of thing the shell will actually run for that name. What command prints it?",
    "answer": "type -t echo",
    "altAnswers": [],
    "explanation": "Before running a word, bash resolves it in a fixed order: alias, then shell keyword, then function, then builtin, then a PATH search for a file. Anything earlier in that list shadows everything after it, which is why echo, printf, kill and test all run as builtins even though real binaries of the same name sit in /usr/bin -- and why the builtin's flags can differ from the manual page you are reading. The -t option reports only the category as a single lowercase word, with no path and no prose, which is what makes it usable in a script condition. Note this is a shell builtin itself, so it knows about the aliases and functions of the shell you are in; an external tool cannot.",
    "usage": "Explaining a behaviour difference between machines or shells, and guarding a script that must call the real binary rather than a builtin or someone's alias.",
    "examples": [
      "type -t echo  # prints: builtin",
      "type -t if  # prints: keyword -- part of the grammar, not a command at all",
      "type -P echo  # skip the builtin and print the PATH match: /usr/bin/echo",
      "type -a echo  # list every resolution in order, builtin first then each file",
      "command -v echo  # prints just 'echo' for a builtin, a full path for a file"
    ],
    "memoryTip": "t is for type-of-thing: type alone gives you a sentence, type -t gives you the single word a script can test. Learn the resolution order as a ladder the shell climbs only until it finds a rung: Alias, Keyword, Function, Builtin, File. Anything higher hides everything lower, which is the entire explanation for 'but it works on my machine'. Capital -P forces the PATH rung specifically.",
    "outputExample": "$ type echo\necho is a shell builtin\n$ type -t echo\nbuiltin\n$ type -P echo\n/usr/bin/echo",
    "category": "DEBUGGING"
  },
  {
    "id": "dbg6",
    "question": "A script sets TARGET_DIR=/tmp/out but a later line misspells it as $TARGE_DIR. Bash expands the unknown name to an empty string and carries on, so the script silently operates on the wrong path. What single `set` option makes bash abort with 'unbound variable' the moment it expands a name that was never assigned?",
    "answer": "set -u",
    "altAnswers": [
      "set -o nounset"
    ],
    "explanation": "By default bash treats an unset variable as an empty string — a design choice that is convenient interactively and dangerous in scripts. `$TARGE_DIR` is not an error, it is nothing, so `rm -rf \"$TARGE_DIR/cache\"` becomes `rm -rf /cache`. Setting the nounset option makes any expansion of an unassigned name a fatal error instead: the script prints 'unbound variable' with the line number and exits non-zero. The single most common cause is exactly the case above — a typo in a name that looks right at a glance.",
    "usage": "Put it near the top of any script that builds paths or commands out of variables, which is nearly all of them.",
    "examples": [
      "set -u  # abort on the first use of an unassigned variable",
      "set -o nounset  # identical, spelled out in full",
      "echo \"${MAYBE:-fallback}\"  # opt out per-use: :- supplies a default and never trips -u",
      "set -euo pipefail  # the common trio: exit on error, on unset, and on a failed pipe stage"
    ],
    "memoryTip": "-u is for (u)nset. Pair it with the escape hatch: once -u is on, any variable that is genuinely optional must be read as `${VAR:-default}` — the `:-` says 'if unset or empty, use this instead', which is deliberate rather than accidental emptiness.",
    "outputExample": "$ bash typo.sh\ntypo.sh: line 4: TARGE_DIR: unbound variable\n$ echo $?\n1",
    "category": "DEBUGGING"
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
    "id": "perm3",
    "question": "You are trying to run a script and getting 'Permission denied'. You want to inspect the current permission settings on deploy.sh to understand who can read, write, and execute it. What command shows a file's detailed permissions?",
    "answer": "ls -l deploy.sh",
    "altAnswers": [
      "getfacl deploy.sh",
      "ls -la deploy.sh",
      "namei -l ./deploy.sh",
      "stat deploy.sh"
    ],
    "explanation": "When a file refuses to open or run, the first thing to check is who has what kind of access. This command shows each file on its own line with a ten-character code on the left that tells you everything about its access settings — whether it's a file or directory, and exactly what the owner, group members, and everyone else are allowed to do with it.",
    "usage": "Inspect the current permission bits, owner, and group of any file — the first diagnostic step for any permission-related problem.",
    "examples": [
      "ls -l deploy.sh  # check permissions on the script",
      "ls -ld /var/www/html/  # check directory permissions (not its contents)",
      "ls -l /etc/passwd  # check system file permissions",
      "ls -la ~/.ssh/  # check SSH directory and key permissions",
      "ls -l  # the basic long format",
      "ls -lh  # human-readable sizes — almost always what you want"
    ],
    "memoryTip": "ls = list. The first column of ls -l is a 10-character permission string: type + 3 triplets (owner/group/others) of rwx.",
    "outputExample": "$ ls -l deploy.sh\n-rw-r--r-- 1 alice alice 142 May 15 10:00 deploy.sh\n# Missing 'x' bits — that's why it won't execute",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm4",
    "question": "You just wrote a shell script called setup.sh. When you try to run it with ./setup.sh you get 'Permission denied' even though you own the file. What command adds the execute permission so you can run it?",
    "answer": "chmod +x setup.sh",
    "altAnswers": [
      "chmod u+x setup.sh",
      "chmod a+x setup.sh"
    ],
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
    "altAnswers": [
      "chmod 755 -R /var/www/myapp"
    ],
    "explanation": "Normally the permissions command only changes the one specific file or folder you name. Adding this option tells it to go inside that folder, and inside every subfolder inside that, applying the new permissions to absolutely every file and directory it finds. It's like changing the lock settings on every room in a building at once rather than going door by door.",
    "usage": "Apply a permission change to every file and subdirectory within an entire directory tree in one operation.",
    "examples": [
      "chmod -R 755 /var/www/myapp  # every file and dir becomes rwxr-xr-x",
      "chmod -R a+rX,u+w ~/public_html  # files 644, dirs keep +x — plain \"-R 644\" strips the dir traversal bit and breaks the tree",
      "chmod -R g+w /srv/shared/  # add group write access to entire shared folder",
      "find /var/www/myapp -type f -exec chmod 644 {} + && find /var/www/myapp -type d -exec chmod 755 {} +",
      "sudo chown -R www-data:www-data /var/www/myapp  # web server ownership",
      "sudo chown -R alice:developers /srv/project/  # project folder for a developer"
    ],
    "memoryTip": "chmod -R = change mode Recursively. Like adjusting who can access an entire building's rooms in one sweep.",
    "outputExample": "$ chmod -R 755 /var/www/myapp\n$ ls -la /var/www/myapp/\ndrwxr-xr-x 3 alice alice 4096 May 17 deploy.sh\n-rwxr-xr-x 1 alice alice 1240 May 17 setup.sh",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm6",
    "question": "You want to give the www-data group ownership of /var/www/html so the web server process (which runs as www-data) can read and write files there, without changing the user owner. What command changes only the group associated with a file or directory?",
    "answer": "chgrp www-data /var/www/html",
    "altAnswers": [
      "chown :www-data /var/www/html"
    ],
    "explanation": "Every file has two ownership labels: one for an individual user and one for a group of users. This command changes only the group label, leaving the individual user label unchanged. Groups are like access badges — belonging to the right group grants you whatever permissions that group has on a file. This is useful for sharing files among a team or giving a service process the right group to access the files it needs.",
    "usage": "Change the group ownership of a file or directory — leaves the user owner unchanged.",
    "examples": [
      "sudo chgrp www-data /var/www/html  # give web server group access",
      "sudo chgrp -R developers /srv/project/  # recursive — every file inside gets the new group",
      "sudo chown alice:developers report.txt  # change BOTH user and group at once",
      "ls -l report.txt  # fourth column shows the group name",
      "groups  # show which groups YOU are in (you can only chgrp to those, unless root)",
      "sudo chown alice report.pdf  # change owner only"
    ],
    "memoryTip": "`chgrp` = CHange GRouP. Sibling of `chown` (change owner) and `chmod` (change mode). All three start with `ch` for 'change'. If you get 'Operation not permitted', it usually means you're not a member of the target group — run `groups` to check.",
    "outputExample": "$ ls -ld /var/www/html\ndrwxr-xr-x 2 alice alice 4096 May 15 10:00 /var/www/html\n$ sudo chgrp www-data /var/www/html\n$ ls -ld /var/www/html\ndrwxr-xr-x 2 alice www-data 4096 May 15 10:00 /var/www/html",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm8",
    "question": "After running a sudo command that switched your identity, you want to confirm which user this shell is currently running as before proceeding with a privileged operation. What command prints the current effective username?",
    "answer": "whoami",
    "altAnswers": [
      "id -un"
    ],
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
    "altAnswers": [
      "su -",
      "sudo -i -u root",
      "sudo -s",
      "sudo bash",
      "sudo su -"
    ],
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
    "altAnswers": [
      "getent group | grep $USER",
      "id",
      "id -Gn",
      "id -Gn $USER",
      "id -nG"
    ],
    "explanation": "Think of groups as access clubs you belong to. Being in the right club (group) unlocks certain resources — the audio club gives you sound access, the docker club lets you use Docker, the sudo club lets you run admin commands. This command tells you which clubs your account currently belongs to, so you can quickly determine whether you have the access you need or whether you need to be added to a group.",
    "usage": "List all Unix group memberships for your account — the first diagnostic step when a permission requires a specific group.",
    "examples": [
      "groups  # your group memberships",
      "groups alice  # another user's group memberships",
      "id -Gn  # same info, alternative command",
      "id  # full identity: uid, gid, all groups, plus SELinux context if relevant",
      "getent group docker  # who else is in the 'docker' group?",
      "id alice  # specific user's identity"
    ],
    "memoryTip": "`groups` literally answers 'which groups?'. Don't confuse with `getent group NAME` which asks the opposite — 'who's IN this group?'. If you just added yourself to a group with `usermod -aG`, you won't see it in `groups` until next login.",
    "outputExample": "$ groups\nalice sudo docker users\n$ groups bob\nbob: bob audio video\n$ id\nuid=1000(alice) gid=1000(alice) groups=1000(alice),27(sudo),998(docker),100(users)",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm11",
    "question": "You have correct ownership and chmod permissions on 'config.php' but still cannot delete or modify it. You suspect a filesystem-level attribute is blocking you. What command reveals these hidden filesystem attributes on the file?",
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
    "answer": "sudo chattr +i /etc/nginx/nginx.conf",
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
    "answer": "setfacl -m u:bob:rw project-report.txt",
    "altAnswers": [
      "setfacl -m user:bob:rw project-report.txt"
    ],
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
    "outputExample": "$ setfacl -m u:bob:rw project-report.txt\n$ getfacl project-report.txt\n# file: project-report.txt\n# owner: alice\n# group: alice\nuser::rw-\nuser:bob:rw-\ngroup::r--\nmask::rw-\nother::r--",
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
    "altAnswers": [
      "find / -perm -4000 -type f -ls",
      "find / -perm -4000 2>/dev/null",
      "find / -perm -u+s",
      "find / -perm -u=s",
      "find / -perm /4000",
      "find / -perm /4000 2>/dev/null",
      "find / -type f -perm -4000 2>/dev/null"
    ],
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
    "altAnswers": [
      "find / -perm -002",
      "find / -perm -002 2>/dev/null",
      "find / -perm -2 2>/dev/null",
      "find / -perm -o+w",
      "find / -perm -o=w",
      "find / -type f -perm -002 2>/dev/null"
    ],
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
    "id": "perm19",
    "question": "What `chmod` command sets the sticky bit on /tmp/shared-workspace so users can only delete their own files there?",
    "answer": "chmod +t /tmp/shared-workspace",
    "altAnswers": [
      "chmod 1777 /tmp/shared-workspace",
      "chmod o+t /tmp/shared-workspace",
      "sticky bit"
    ],
    "explanation": "In a folder where everyone can write (like a shared workspace), normally any user with write permission on the folder can delete anyone else's files inside it. The sticky bit is a special protective flag for directories: with it set, you can only delete files that you own, even if you have write permission on the folder itself. It's how /tmp works on every Linux system — anyone can create files there, but only the creator can delete their own files.",
    "usage": "Set the sticky bit on a shared directory so users can only delete their own files — the standard protection for multi-user scratch spaces.",
    "examples": [
      "chmod +t /tmp/shared-workspace  # sticky bit: users can only delete their own files",
      "chmod 1777 /srv/shared-uploads  # sticky + world-writable in one command",
      "ls -ld /tmp  # verify: should show 'drwxrwxrwt' (the 't' is the sticky bit)",
      "chmod -t /tmp/shared-workspace  # remove sticky bit"
    ],
    "memoryTip": "'chmod +t' = 'chmod sticky'. Like a directory where you can only touch your own stuff, not others'.",
    "outputExample": "$ chmod 1777 /tmp/shared-workspace\n$ ls -ld /tmp/shared-workspace\ndrwxrwxrwt 2 alice alice 4096 May 17 /tmp/shared-workspace\n# chmod +t ALONE would give drwxr-xr-t (1755) — the 777 is what makes it group-writable",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm20",
    "question": "You're writing a deployment script that needs to read the current permission of '/tmp/upload.bin' as a number like 755 so it can check whether the file needs to be reconfigured. What command outputs just the octal permission number for a file?",
    "answer": "stat -c '%a' /tmp/upload.bin",
    "altAnswers": [
      "stat -c %a /tmp/upload.bin"
    ],
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
    "id": "perm21",
    "question": "Your compiled C tool installed at `/usr/local/bin/tool` needs to run as its owner (`root`) regardless of which user invokes it — similar to how `ping` or `passwd` work. What `chmod` command adds the setuid bit to that binary?",
    "answer": "chmod u+s /usr/local/bin/tool",
    "altAnswers": [
      "chmod +s /usr/local/bin/tool",
      "chmod 4755 /usr/local/bin/tool",
      "chmod g+s,u+s ..."
    ],
    "explanation": "The setuid bit is a special permission flag that makes an executable run as the user who OWNS the file, not as the user who runs it. When a file with setuid set is owned by root, anyone who executes it temporarily gains root's privileges for the duration of that program. This is how `passwd` lets ordinary users change their own passwords — it briefly becomes root to write to `/etc/shadow`, then gives up that privilege. (`ping` is the other textbook example, but it is out of date: mainstream distributions dropped setuid on `ping` years ago in favour of the `CAP_NET_RAW` file capability, or unprivileged ICMP sockets allowed by the `net.ipv4.ping_group_range` sysctl. `passwd` and `sudo` are the setuid binaries you will actually find set today.)",
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
    "altAnswers": [
      "chmod +s /srv/projects/myapp",
      "chmod 2770 /srv/projects/myapp",
      "chmod 2775 /srv/projects/myapp"
    ],
    "explanation": "Normally a new file gets the primary group of whoever creates it. The setgid bit on a directory overrides this: any file or subdirectory created inside will automatically inherit the directory's group, not the creator's personal group. This ensures everyone on the team owns files under the same shared group without anyone needing to remember to `chgrp` after creating files.",
    "usage": "Set the setgid bit on a shared directory so all new files automatically inherit the directory's group.",
    "examples": [
      "sudo chmod g+s /srv/projects/myapp  # add setgid to shared dir",
      "sudo chmod 2775 /srv/projects/myapp  # same in octal",
      "ls -ld /srv/projects/myapp  # verify: should show drwxrwsr-x",
      "find /srv -perm -2000 -type d  # audit all setgid directories"
    ],
    "memoryTip": "`g+s` on a DIRECTORY = SETGID: new files and subdirectories inherit the directory's group instead of the creator's. The 2 in 2775 is the SGID octal bit. Do not confuse it with the sticky bit `+t` (1000, shown as `t` in the other triplet), which limits deletion to each file's owner.",
    "outputExample": "$ sudo chmod g+s /srv/projects/myapp\n$ ls -ld /srv/projects/myapp\ndrwxrwsr-x 2 alice developers 4096 May 17 /srv/projects/myapp\n$ touch /srv/projects/myapp/newfile.txt\n$ ls -l /srv/projects/myapp/newfile.txt\n-rw-r--r-- 1 alice developers 0 May 17 newfile.txt  # inherits 'developers' group",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm24",
    "question": "You need to create files in `/srv/projects/myapp` that belong to the `developers` group, but your primary group is your personal group. Without logging out, what command switches your active primary group for the current shell session?",
    "answer": "newgrp developers",
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
      "echo 'bob ALL=(ALL:ALL) ALL' | sudo visudo -cf - && echo 'bob ALL=(ALL:ALL) ALL' | sudo tee /etc/sudoers.d/bob  # non-interactive: syntax-check from stdin FIRST, write only if it parses"
    ],
    "memoryTip": "visudo = vi for sudoers, with safety checks.",
    "outputExample": "$ sudo visudo\n# editor opens — add: bob ALL=(ALL:ALL) ALL\n# on save, visudo validates syntax before writing",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm27",
    "question": "You're setting up SSH key authentication to a new server and need to generate a key pair using the modern ed25519 algorithm. What `ssh-keygen` command creates it (accepting the default file location)?",
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
    "outputExample": "$ ssh-keygen -t ed25519 -C 'alice@laptop-2026'\nGenerating public/private ed25519 key pair.\nEnter file in which to save the key (/home/alice/.ssh/id_ed25519): \nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /home/alice/.ssh/id_ed25519\nYour public key has been saved in /home/alice/.ssh/id_ed25519.pub\nThe key fingerprint is:\nSHA256:eciHLrFw1fnfo2seya6hfYe09WebDk2Uq8OSEwWRw00 alice@laptop-2026\nThe key's randomart image is:\n+--[ED25519 256]--+\n|          .o=E   |\n|         . =..  .|\n|        . o .. o |\n|       o + .. . .|\n|    . o S o..  o |\n|     o + o  =o=o |\n|      o .  =.O=oo|\n|       .  o ===.*|\n|         . o==+=o|\n+----[SHA256]-----+",
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
      "umask 0077  # very restrictive: new files owner-only (0600)",
      "umask 022  # standard: new files 644, new dirs 755",
      "umask 077  # private: new files 600, new dirs 700 — only you"
    ],
    "memoryTip": "`umask` = User MASK. It CLEARS bits rather than subtracting them: actual = 666 AND NOT umask. With `022` that happens to look like subtraction (`644`), but with `077` the real result is `600` — subtraction would give nonsense. Work it per digit, not as arithmetic. The leading zero you sometimes see (`0022`) is the special-bits digit (setuid/sticky), almost always 0.",
    "outputExample": "$ umask -S\nu=rwx,g=rx,o=rx\n$ umask\n0022\n$ umask 0027; umask -S\nu=rwx,g=rx,o=",
    "category": "PERMISSIONS"
  },
  {
    "id": "perm30",
    "question": "Your web application is failing because it can't write to `/var/lib/myapp/data`. You want to test whether the `www-data` user can actually write there — without switching to that user's full shell — by running `touch /var/lib/myapp/data/test` as `www-data`. What's the full command?",
    "answer": "sudo -u www-data touch /var/lib/myapp/data/test",
    "explanation": "The `-u` flag tells sudo to run the command as the named user instead of root. Creating a test file with touch is the most direct way to answer 'can this service account write here?' — if the permissions are wrong you get an immediate 'Permission denied' from the exact identity your application runs as. This avoids the guesswork of reading permission bits and mentally simulating what www-data can do, and it works even for accounts like www-data whose shell is set to nologin.",
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
    "id": "permx1",
    "question": "A long listing of /tmp/staging/deploy.sh shows the permission string -rwxr-x--- and your runbook records every mode as three octal digits. What three-digit octal number is that permission string?",
    "answer": "750",
    "altAnswers": [
      "0750"
    ],
    "explanation": "The nine characters after the file-type character are three groups of three -- owner, group, others -- and each group is one octal digit built from three bits: read is 4, write is 2, execute is 1, and a dash is 0. So rwx is 4+2+1 = 7, r-x is 4+0+1 = 5, and --- is 0, giving 750. The reason a digit holds exactly one group is that three bits is precisely one octal digit, which is why permissions are written in base 8 and never in decimal. Read the string left to right in threes and you can convert any mode in your head.",
    "usage": "Translating what ls shows into the number chmod, stat and configuration-management tools expect.",
    "examples": [
      "stat -c '%a %A' /tmp/staging/deploy.sh  # prints both notations side by side: 750 -rwxr-x---",
      "chmod 750 /tmp/staging/deploy.sh  # set that same mode from the octal form",
      "chmod u=rwx,g=rx,o= /tmp/staging/deploy.sh  # the identical mode written symbolically",
      "stat -c '%a' /tmp/staging/deploy.sh  # just the number, for a script to compare"
    ],
    "memoryTip": "Memorise the three bit values once -- r=4, w=2, x=1 -- and every digit becomes a sum you can do instantly: 7 is all three, 6 is rw, 5 is rx, 4 is read only. The values are powers of two in the order the letters appear, and three bits fit exactly one octal digit, which is why modes are octal. The leading dash in -rwxr-x--- is not part of the number; it is the file type, and d there would mean directory.",
    "outputExample": "$ ls -l /tmp/staging/deploy.sh\n-rwxr-x--- 1 eliash eliash 0 Aug 18 17:38 /tmp/staging/deploy.sh\n$ stat -c '%a %A' /tmp/staging/deploy.sh\n750 -rwxr-x---",
    "category": "PERMISSIONS"
  },
  {
    "id": "permx2",
    "question": "A hardening standard states that /tmp/staging/db.conf must be mode 640, and the auditor wants the permissions written out the way a long listing displays them. Give the nine permission characters, with no spaces, exactly as they appear after the file-type character.",
    "answer": "rw-r-----",
    "altAnswers": [
      "-rw-r-----"
    ],
    "explanation": "Going from octal back to letters is the same arithmetic run backwards: split the number into its three digits, then decompose each into 4, 2 and 1. Six is 4+2, so the owner gets read and write but not execute, written rw-. Four is 4 alone, so the group gets read only, written r--. Zero is no bits at all, written ---. A dash always means the bit is absent, and the positions are fixed -- read, write, execute, in that order, never rearranged -- which is what makes the string readable at a glance. 640 is the canonical mode for a secret a service must read: the owner maintains it, one group reads it, everybody else is shut out.",
    "usage": "Reading a hardening baseline or CIS benchmark that quotes octal modes, and confirming by eye that a listing matches it.",
    "examples": [
      "chmod 640 /tmp/staging/db.conf  # apply the mode the standard asks for",
      "stat -c '%A' /tmp/staging/db.conf  # print the symbolic form to compare against",
      "chmod u=rw,g=r,o= /tmp/staging/db.conf  # the same mode, spelled out symbolically",
      "find /etc -type f -perm 640  # find every file already at exactly this mode"
    ],
    "memoryTip": "Work digit by digit and always write all three characters, using a dash for each missing bit, so the string stays nine characters wide and the columns line up. Sanity-check the ends: an even digit can never include execute, since x is the 1 bit, so 640 cannot possibly contain an x anywhere. And 0 is not blank, it is three dashes.",
    "outputExample": "$ chmod 640 /tmp/staging/db.conf\n$ stat -c '%a %A' /tmp/staging/db.conf\n640 -rw-r-----",
    "category": "PERMISSIONS"
  },
  {
    "id": "permx3",
    "question": "/tmp/staging/license.key is currently -rwxrw-r-- and compliance requires it to become read-only for absolutely everyone: no write bit and no execute bit for owner, group or others. You want one symbolic chmod that sets the bits outright rather than adding to or subtracting from whatever is there now. What command?",
    "answer": "chmod a=r /tmp/staging/license.key",
    "altAnswers": [
      "chmod ugo=r /tmp/staging/license.key",
      "chmod 444 /tmp/staging/license.key",
      "chmod a=r,a-wx /tmp/staging/license.key"
    ],
    "explanation": "Symbolic mode has three operators and they are not interchangeable. Plus adds the listed bits and leaves the rest alone; minus removes the listed bits and leaves the rest alone; equals replaces that class's bits entirely, so anything not listed is cleared. That is why a=r is a single move here: it says 'for all three classes, the permissions are exactly read', which sets the read bit and simultaneously wipes the write bit the owner and group had and the execute bit the owner had. Writing a-wx would reach the same place, but only because you happened to enumerate every unwanted bit -- equals is declarative and does not depend on knowing the starting state. The class letters are u, g and o, with a as shorthand for all three.",
    "usage": "Forcing a file to an exact, known permission state from an unknown one -- licence keys, checked-in certificates, anything an audit pins down.",
    "examples": [
      "chmod a=r file  # every class exactly read: 444, whatever it was before",
      "chmod u+x file  # add execute for the owner only, leaving group and others untouched",
      "chmod go-w file  # remove write from group and others; 666 becomes 644",
      "chmod u=rw,go= file  # different rule per class, comma-separated, applied left to right",
      "chmod +x file  # no class given: means a+x but masked by your umask, so it may set fewer bits"
    ],
    "memoryTip": "Three operators, three intents: plus adds, minus removes, equals declares. Equals is the only one whose result does not depend on the current mode, which makes it the safe choice when you do not know what you are starting from. Remember the classes as u-g-o for user, group, other, with a as all -- and note the last example's trap: a bare +x consults your umask, whereas a+x never does.",
    "outputExample": "$ stat -c '%a %A' /tmp/staging/license.key\n764 -rwxrw-r--\n$ chmod a=r /tmp/staging/license.key\n$ stat -c '%a %A' /tmp/staging/license.key\n444 -r--r--r--",
    "category": "PERMISSIONS"
  },
  {
    "id": "permx4",
    "question": "Something odd is happening with a directory you own: `ls /tmp/reports` prints q3.csv perfectly well, but `cat /tmp/reports/q3.csv` fails with Permission denied and so does cd into it. `stat -c '%a' /tmp/reports` returns 644. You need to restore your own ability to descend into that directory, granting group and others nothing new. What command?",
    "answer": "chmod u+x /tmp/reports",
    "altAnswers": [
      "chmod 744 /tmp/reports",
      "chmod u=rwx /tmp/reports"
    ],
    "explanation": "On a directory the three bits mean something entirely different from what they mean on a file. Read grants permission to list the names inside -- which is why ls still worked. Execute grants permission to traverse the directory, meaning to resolve a name inside it into the inode it refers to. Without execute you can see that q3.csv exists but you cannot reach it, so cat, stat, cd and even ls -l all fail with Permission denied, since ls -l has to stat each entry it just listed. Execute is also required on every directory along a path, not just the last one: a mode-644 directory anywhere in /a/b/c makes everything below it unreachable regardless of the permissions on the files themselves. This is why 755 and not 644 is the normal mode for a directory.",
    "usage": "Diagnosing the classic 'I can see the file but not open it' failure, and repairing a tree after a recursive chmod stripped the traversal bit.",
    "examples": [
      "chmod u+x /tmp/reports  # restore traversal for the owner only: 644 becomes 744",
      "chmod 755 /tmp/reports  # the conventional directory mode: everyone may list and traverse",
      "chmod o+x /srv/share  # traverse-only for others: they may reach known names, not list them",
      "namei -l /tmp/reports/q3.csv  # show the mode of every directory along the path at once",
      "ls -ld /tmp/reports  # -d shows the directory's own mode instead of its contents"
    ],
    "memoryTip": "On a directory, read is the index card and execute is the key to the door: r lets you read the list of names, x lets you go in and use them. That is why a directory with r but no x gives you filenames and nothing else -- and why ls succeeds while ls -l fails, since the long listing must stat each entry. A directory with x but no r is the opposite: you can open a name you already know, but you cannot discover it.",
    "outputExample": "$ stat -c '%a %A' /tmp/reports\n644 drw-r--r--\n$ ls /tmp/reports\nq3.csv\n$ cat /tmp/reports/q3.csv\ncat: /tmp/reports/q3.csv: Permission denied\n$ chmod u+x /tmp/reports\n$ cat /tmp/reports/q3.csv\nregion,revenue\nEU,412000",
    "category": "PERMISSIONS"
  },
  {
    "id": "permx5",
    "question": "Someone ran `chmod -R 644 /tmp/www` on a web tree and broke it: the directories lost their execute bit and nothing below the top level can be reached. In one recursive pass you now need to grant read to everyone and grant execute only where it belongs -- on directories, and on files that already had an execute bit -- so that plain .html files are never turned into executables. What command?",
    "answer": "chmod -R a+rX /tmp/www",
    "altAnswers": [
      "chmod -R ugo+rX /tmp/www",
      "chmod a+rX -R /tmp/www",
      "chmod -R +rX /tmp/www"
    ],
    "explanation": "Capital X is a conditional execute bit and it is the whole answer to recursive chmod. Lowercase x sets execute on everything it touches, which on a tree marks every text file executable. Capital X sets execute only if the target is a directory, or if the file already has an execute bit set for some class -- so directories regain traversal, existing programs keep working, and .html and .css files are left alone. This is also why the original chmod -R 644 was so destructive: it cleared execute from directories, and because chmod recurses by descending as it goes, it stripped the top directory first and then could not enter it, failing partway with 'Permission denied' on the very files it was trying to change. A recursive chmod with a plain octal number applies file semantics to directories, which is almost never what you mean.",
    "usage": "Repairing a tree after a bad recursive chmod, and the safe idiom for setting permissions across a mixed directory of code, assets and subdirectories.",
    "examples": [
      "chmod -R a+rX /tmp/www  # read for all, execute only on directories and existing executables",
      "chmod -R u+rwX,go+rX /tmp/www  # owner may also write; everyone else read and traverse",
      "chmod -R 644 /tmp/www  # the destructive form: strips traversal, then cannot finish descending",
      "find /tmp/www -type d -exec chmod 755 {} +  # the explicit alternative: directories only",
      "find /tmp/www -type f -exec chmod 644 {} +  # and files only, in a second pass"
    ],
    "memoryTip": "Capital X is the eXception to lowercase x: 'execute, but only where it makes sense'. Say it as 'X respects the difference between a program and a document'. The reason chmod -R 644 is worse than it looks is that chmod descends as it changes, so it saws off the branch it is standing on -- it removes the top directory's execute bit and is then locked out of its own recursion.",
    "outputExample": "$ chmod -R 644 /tmp/www\nchmod: cannot access '/tmp/www/index.html': Permission denied\nchmod: cannot access '/tmp/www/assets': Permission denied\n$ stat -c '%a %A' /tmp/www\n644 drw-r--r--\n$ chmod -R a+rX /tmp/www\n$ stat -c '%a %A' /tmp/www /tmp/www/index.html\n755 drwxr-xr-x\n644 -rw-r--r--",
    "category": "PERMISSIONS"
  },
  {
    "id": "permx6",
    "question": "A service unit sets umask 023 before starting, and the daemon then creates a fresh log file with an ordinary open call, which requests base mode 666 as every normal file creation does. Give the resulting three-digit octal mode of that new file.",
    "answer": "644",
    "altAnswers": [
      "0644"
    ],
    "explanation": "The value is a mask of bits to clear, not a number to subtract: the kernel computes mode AND NOT umask, bit by bit. Work the last digit and the difference shows up. Others start at 6, which is 110 in binary -- read and write, no execute. The umask digit 3 is 011, asking to clear write and execute. Clearing write turns 110 into 100, and clearing execute does nothing at all because that bit was never set. So others end at 4, and the file is 644. Naive digit-by-digit subtraction predicts 6-3 = 3 and gives the wrong answer 643, a mode with an execute bit that the mask was actually trying to remove. Subtraction only appears to work when every umask bit happens to already be set in the base mode, which is why the common masks 022 and 077 hide the bug. Directories differ too: they are created from base 777, so the same 023 mask yields 754.",
    "usage": "Predicting what permissions a daemon, cron job or build will give its output files, and choosing a mask for a shared directory without testing by trial and error.",
    "examples": [
      "umask 023  # set the mask; new files become 644 here, new directories 754",
      "umask  # print the current mask as an octal number, 0022 on most systems",
      "umask -S  # print it as symbolic permissions that are kept, e.g. u=rwx,g=rx,o=rx",
      "(umask 077; touch secret) # subshell: applies to that command only, giving 600",
      "umask 000; touch f; mkdir d  # reveals the base modes: f is 666, d is 777"
    ],
    "memoryTip": "Read the mask as a list of bits to knock out, never as an amount to deduct: the kernel does mode AND NOT umask. The classic trap is 023 on a file, where the 3 asks to clear write and execute but only write was ever there, so you land on 644 rather than the 643 subtraction predicts. Remember the two starting points as well -- files begin at 666 and directories at 777, because the kernel never hands out an execute bit on a plain new file.",
    "outputExample": "$ (umask 023; touch /tmp/umtest/app.log; mkdir -p /tmp/umtest/cache)\n$ stat -c '%a %A %n' /tmp/umtest/app.log /tmp/umtest/cache\n644 -rw-r--r-- /tmp/umtest/app.log\n754 drwxr-xr-- /tmp/umtest/cache",
    "category": "PERMISSIONS"
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
    "id": "proc3",
    "question": "Firefox has become unresponsive and the GUI close button is doing nothing. After finding its PID (2412) with ps aux, what command sends it a polite 'please shut down' request that gives it a chance to clean up before exiting?",
    "answer": "kill 2412",
    "altAnswers": [
      "kill -15 2412",
      "kill -SIGTERM 2412",
      "kill -TERM 2412"
    ],
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
    "question": "You want to start the long-running build script ./build.sh, which may take an hour, but you don't want to sit watching it — you want your terminal prompt back immediately so you can do other work while it runs. What shell syntax starts a command without waiting for it to finish?",
    "answer": "./build.sh &",
    "explanation": "Normally when you run a command, your terminal freezes until it finishes — you can't type anything or run other commands. Adding this symbol at the end of a command changes that: the command starts running, but you get your prompt back immediately. The command runs \"in the background\" simultaneously with whatever else you do in the terminal.",
    "usage": "Start a command and return the prompt immediately — the command continues running concurrently in the background.",
    "examples": [
      "./build.sh &  # start, return to prompt; output still mixes into terminal",
      "./build.sh > build.log 2>&1 &  # redirect output to a file so it doesn't spam you",
      "nohup ./server.py > server.log 2>&1 &  # survives terminal closing",
      "jobs  # see what's running in the background",
      "wait  # block until ALL background jobs finish (useful in scripts)",
      "long_task &  # start in background, prompt returns immediately"
    ],
    "memoryTip": "`&` at end = run in background, hand prompt back NOW. Don't confuse with `;` (sequential) or `&&` (conditional). For long-running things you'll log out from, use `nohup ... &` or `tmux`/`screen`.",
    "outputExample": "$ sleep 30 &\n[1] 12345\n$ jobs\n[1]+  Running                 sleep 30 &\n$ # 30 seconds later:\n[1]+  Done                    sleep 30",
    "category": "PROCESSES"
  },
  {
    "id": "proc5",
    "question": "You suspended a long-running command with Ctrl+Z to answer a quick question, and now you want it to take over your terminal again and continue running interactively. It is job number 1 in the jobs list. What command brings it back to the foreground?",
    "answer": "fg %1",
    "altAnswers": [
      "fg 1",
      "fg"
    ],
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
    "question": "You accidentally started a long compilation in the foreground and want it to continue running but give you your terminal prompt back without stopping it. You have already suspended it with Ctrl+Z and it became job 1. What command resumes it in the background?",
    "answer": "bg %1",
    "altAnswers": [
      "bg 1",
      "bg"
    ],
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
    "category": "PROCESSES",
    "altAnswers": [
      "pgrep -f nginx",
      "pgrep -x nginx",
      "pidof nginx"
    ]
  },
  {
    "id": "proc10",
    "question": "All Firefox browser processes are completely frozen and you want to force-kill every one of them at once with SIGKILL (signal 9), without looking up individual PIDs. What command sends that signal to all processes matching the name firefox?",
    "answer": "pkill -9 firefox",
    "altAnswers": [
      "killall -9 firefox",
      "killall -s KILL firefox",
      "pkill -9 -f firefox",
      "pkill -KILL firefox"
    ],
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
    "id": "proc12",
    "question": "The nginx master process is running as PID 1832 and you want to see all the worker processes it has spawned, displayed as a tree with their own PIDs visible. What command shows the process hierarchy rooted at that PID?",
    "answer": "pstree -p 1832",
    "explanation": "When you have the PID of a specific process and want to see its entire family — all its children, grandchildren, and so on — you can focus the tree diagram on just that branch. This is much less overwhelming than the complete system tree and immediately shows you whether a process has the expected number of workers or whether any unexpected children have appeared.",
    "usage": "Show the process subtree rooted at a specific PID — all its children and descendants in a visual hierarchy.",
    "examples": [
      "pstree -p 1832  # tree rooted at nginx master PID 1832, with PIDs",
      "pstree -pa $(pgrep -o nginx)  # all nginx descendants + arguments",
      "pstree -T  # hide per-process threads (the {name} entries), showing only processes",
      "pstree -s 5678  # the REVERSE: show ancestors of PID 5678",
      "ps -ef --forest | less  # alternative tree with full ps columns",
      "pstree  # the full tree, names only"
    ],
    "memoryTip": "`pstree -p PID` = the subtree under PID. `pstree -s PID` = the ancestors of PID ('s' for 'show parents').",
    "outputExample": "$ pstree -pa 1832\nnginx,1832 -g daemon off;\n  |-nginx,1833\n  |-nginx,1834\n  `-nginx,1835",
    "category": "PROCESSES"
  },
  {
    "id": "proc13",
    "question": "A monitoring alert references PID 1234 from a .pid file. You want to see how long that process has been running and what its CPU usage is — showing only the pid, cmd, etime, and %cpu columns, no irrelevant ones. What command queries that PID with this custom output format?",
    "answer": "ps -p 1234 -o pid,cmd,etime,%cpu",
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
    "outputExample": "$ ps -p 1234 -o pid,cmd,etime,%cpu\n    PID CMD                          ELAPSED %CPU\n   1234 /usr/lib/firefox/firefox    02:14:33 12.5\n$ ps -p 1234 -o etime=\n02:14:33",
    "category": "PROCESSES"
  },
  {
    "id": "proc14",
    "question": "A process is consuming more disk space than expected and you suspect it has a deleted file still open, preventing the space from being reclaimed. What command lists every open file, socket, and pipe currently held by the process with PID 1234?",
    "answer": "lsof -p 1234",
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
    "outputExample": "$ sudo lsof -p 1234 | grep deleted\nnginx 1234 www-data  5w  REG  8,1 52428800 131074 /var/log/nginx/old.log (deleted)\n# the SIZE/OFF column is the proof: 52428800 bytes (50MB) still allocated\n# but unreachable, and not freed until nginx closes that fd",
    "category": "PROCESSES"
  },
  {
    "id": "proc15",
    "question": "Your script launches several background downloads with & and must wait for all of them to complete before continuing to the next step. What built-in command blocks execution until all background child processes have finished?",
    "answer": "wait",
    "explanation": "When you launch multiple things in the background at once, they all run simultaneously but your script doesn't automatically wait for them to finish before moving on. This command is a pause button that holds your script at that line until all the background tasks have completed, then releases it to continue. You can wait for all background jobs at once, or wait for a specific one and check whether it succeeded.",
    "usage": "Block script execution until all background child processes finish — the synchronization point for parallel shell scripts.",
    "examples": [
      "for url in $URLS; do curl -O \"$url\" & done; wait  # parallel downloads, continue when all done",
      "build1 & p1=$!; build2 & p2=$!; wait $p1 $p2; echo 'both builds done'",
      "task & if wait $!; then echo success; else echo 'failed'; fi  # check exit status",
      "wait -n  # bash 4.3+: return as soon as ANY one background job finishes (bash 5.1+ adds -p VAR to capture which)"
    ],
    "memoryTip": "Pattern: `cmd & pid=$!` saves PID, `wait $pid` waits for it, exit status of `wait` = exit status of the child. `wait` only sees direct children of the current shell.",
    "outputExample": "$ for i in 1 2 3; do (sleep $i; echo \"task $i done\") & done; wait; echo all-done\ntask 1 done\ntask 2 done\ntask 3 done\nall-done",
    "category": "PROCESSES"
  },
  {
    "id": "proc16",
    "question": "You ran 'ps aux | grep java' and the COMMAND column is truncated, so you can't tell which Java application this is or what arguments it was started with. What variant of ps aux prints the complete untruncated command line for all processes?",
    "answer": "ps auxww",
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
    "id": "proc19",
    "question": "You want to run the encoding job 'ffmpeg -i video.mp4 output.mp4', which will take hours, but you don't want it competing aggressively with your other work. What command starts it with a niceness of 10 so it yields to more important processes?",
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
    "id": "proc21",
    "question": "You're SSH'd into a server and kick off a database import script `db-import.sh` that takes 6 hours. You're worried your SSH connection might drop and kill the process. What command starts the import so it continues running even if the terminal closes?",
    "answer": "nohup ./db-import.sh &",
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
    "category": "PROCESSES",
    "altAnswers": [
      "./db-import.sh & disown",
      "nohup ./db-import.sh",
      "screen -dm ./db-import.sh",
      "setsid ./db-import.sh",
      "tmux new -s import './db-import.sh'"
    ]
  },
  {
    "id": "proc22",
    "question": "You started a background job with `&` and now realize you need to log out. The job is still running as `[1] 5678`. How do you detach it from your shell so it won't be killed when you exit?",
    "answer": "disown %1",
    "altAnswers": [
      "disown",
      "disown -a",
      "disown -h %1",
      "disown 5678"
    ],
    "explanation": "If your terminal window or SSH connection dies, the kernel sends SIGHUP to the shell, and bash forwards that hangup signal to every job still in its job table — which normally kills them. (Typing `exit` on its own usually does not, because bash's `huponexit` option is off by default — but do not build a workflow on that.) `disown` removes a job from the job table entirely, so the shell forgets about it and can never signal it: the process keeps running after you are gone. It's the after-the-fact rescue for when you started something with `&` and only later realized you need it to survive logout (the before-the-fact tool is `nohup`).",
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
    "answer": "tmux new -s dev",
    "altAnswers": [
      "tmux new-session -s dev"
    ],
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
    "outputExample": "$ kill -l | head -4\n 1) SIGHUP\t 2) SIGINT\t 3) SIGQUIT\t 4) SIGILL\t 5) SIGTRAP\n 6) SIGABRT\t 7) SIGBUS\t 8) SIGFPE\t 9) SIGKILL\t10) SIGUSR1\n11) SIGSEGV\t12) SIGUSR2\t13) SIGPIPE\t14) SIGALRM\t15) SIGTERM\n16) SIGSTKFLT\t17) SIGCHLD\t18) SIGCONT\t19) SIGSTOP\t20) SIGTSTP\n$ kill -l 11\nSEGV",
    "category": "PROCESSES"
  },
  {
    "id": "proc25",
    "question": "A backup script running as PID 1234 at normal priority is making your interactive shell laggy. You want to lower its priority without stopping it. What `renice` command raises the nice value of PID 1234 to 15?",
    "answer": "sudo renice -n 15 -p 1234",
    "altAnswers": [
      "renice -n 15 -p 1234",
      "renice -n 15 1234",
      "renice 15 -p 1234",
      "renice 15 1234"
    ],
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
    "question": "You're comparing two implementations of a function in a script called `impl.sh` and want to know which one finishes faster, including how much CPU time each uses. What built-in shell command measures wall-clock time, user CPU time, and system CPU time for any command?",
    "answer": "time ./impl.sh",
    "explanation": "Performance debugging starts with measurement. time command runs the command normally and afterward prints three numbers: real (wall-clock time from start to finish), user (CPU time spent in your code), sys (CPU time spent in kernel calls on your behalf). If real is much larger than user+sys, your program is waiting for I/O or sleeping. If user is large, the program is CPU-bound. If sys is large, there is heavy filesystem or network activity. These three numbers together diagnose WHERE time is spent and what kind of optimization to pursue.",
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
    "id": "proc28",
    "question": "Your application process (PID 1234) is mysteriously hanging. You want to see in real time which system calls it's making — file opens, reads, network calls — to understand where it's stuck. What command attaches to that running process by PID and streams its system calls?",
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
    "outputExample": "$ sudo strace -p 1234 2>&1 | head\nstrace: Process 1234 attached\nepoll_wait(7, [], 1024, 100)            = 0\nrecvfrom(8, \"\", 4096, 0, NULL, NULL)    = 0\nopenat(AT_FDCWD, \"/etc/myapp/missing.conf\", O_RDONLY) = -1 ENOENT (No such file or directory)",
    "category": "PROCESSES"
  },
  {
    "id": "proc29",
    "question": "You need a scriptable snapshot of processes sorted by CPU usage — something you can pipe to `grep`, log to a file, or embed in an alert script, unlike the interactive `top`. What command lists every process with exactly the columns `pid,user,%cpu,cmd`, sorted by descending `%cpu`, piped to `head` to keep just the top of the list?",
    "answer": "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head",
    "explanation": "`ps -e` selects every process on the system, and `-o pid,user,%cpu,cmd` outputs exactly the columns you name — no more, no less. `--sort=-%cpu` orders the rows by CPU usage; the leading minus means descending, so the hungriest processes come first. Piping to `head` keeps just the top of the ranking. Unlike the interactive `top`, this prints plain text once and exits, so you can pipe it to `grep`, redirect it to a log file, or embed it in a cron alert script.",
    "usage": "Produce a scriptable ranked list of processes by CPU usage — the `top`-alternative that can be piped and logged.",
    "examples": [
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head  # top 9 CPU consumers",
      "ps -eo pid,user,%mem,rss,cmd --sort=-%mem | head  # top memory consumers",
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu --no-headers | awk '$3>5'  # processes using >5% CPU",
      "watch -n 2 'ps -eo pid,%cpu,cmd --sort=-%cpu | head'  # refresh every 2s"
    ],
    "memoryTip": "`ps -e -o COL,COL,... --sort=-KEY | head` = custom-ranked snapshot. `-` before key = DESCENDING. Useful keys: `%cpu`, `%mem`, `rss`, `etime`. `--no-headers` for clean scripting.",
    "outputExample": "$ ps -eo pid,user,%cpu,%mem,cmd --sort=-%cpu | head\n    PID USER     %CPU %MEM CMD\n   2412 alice    14.0  3.1 /usr/lib/firefox/firefox\n   1822 alice     8.3  0.7 node server.js\n   3201 alice     5.2  0.4 code .\n    684 root      2.1  0.5 /usr/sbin/sssd",
    "category": "PROCESSES",
    "altAnswers": [
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head -10",
      "ps -eo pid,user,pcpu,cmd --sort=-pcpu | head",
      "ps axo pid,user,%cpu,cmd --sort=-%cpu | head -n 20"
    ]
  },
  {
    "id": "proc30",
    "question": "You just updated nginx's configuration to add a new virtual host. You want nginx to reload its config and start serving the new virtual host, without dropping any of the thousands of active connections it's currently handling. What command sends the 'reload config' signal to the nginx master process?",
    "answer": "sudo kill -HUP $(pidof nginx)",
    "altAnswers": [
      "kill -1 $(cat /run/nginx.pid)",
      "kill -SIGHUP 1832",
      "nginx -s reload",
      "sudo kill -1 $(pidof nginx)",
      "sudo kill -SIGHUP $(pidof nginx)",
      "sudo nginx -s reload",
      "systemctl reload nginx"
    ],
    "explanation": "Many server daemons (nginx, sshd, rsyslog, and others) are programmed to respond to signal 1 (SIGHUP) by re-reading their configuration files while keeping existing connections alive. It's like telling a busy restaurant manager \"read the new menu\" without kicking out the customers who are already eating. Always test the config syntax first — a broken config means the reload silently does nothing and you're left wondering why it didn't work.",
    "usage": "Trigger a zero-downtime config reload in nginx (or other daemons) by sending SIGHUP to the master process.",
    "examples": [
      "sudo nginx -t && sudo kill -HUP $(pidof nginx)  # test config FIRST, then reload",
      "sudo systemctl reload nginx  # preferred when systemd manages the service",
      "sudo kill -HUP $(cat /var/run/nginx.pid)  # via the PID file",
      "sudo systemctl reload-or-restart nginx  # reload if supported, restart otherwise",
      "sudo journalctl -fu nginx  # watch the journal to confirm reload happened",
      "kill -HUP $(pgrep -o nginx)  # reload nginx config without restart"
    ],
    "memoryTip": "SIGHUP (1) = 'hang up the phone' → repurposed as 'reload config'. Use `sudo systemctl reload SERVICE` when possible (logged, systemd-aware). ALWAYS validate config (`nginx -t`) BEFORE reloading.",
    "outputExample": "$ sudo nginx -t\nnginx: configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n$ sudo kill -HUP $(pidof nginx)\n$ sudo tail -3 /var/log/nginx/error.log\n2026/05/17 14:32:18 [notice] 8421#8421: signal 1 (SIGHUP) received\n2026/05/17 14:32:18 [notice] 8421#8421: reconfiguring\n2026/05/17 14:32:18 [notice] 8421#8421: reload completed",
    "category": "PROCESSES"
  },
  {
    "id": "rhel14",
    "question": "After installing and testing nginx on a server, you want to make it start automatically at every boot AND start it right now in a single command. What does this?",
    "answer": "sudo systemctl enable --now nginx",
    "altAnswers": [
      "systemctl enable --now nginx.service"
    ],
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
    "category": "SERVICES"
  },
  {
    "id": "rhel16",
    "question": "nginx failed to start and 'systemctl status nginx' only shows a few lines. What journalctl command shows the full log for nginx with error explanations and jumps to the most recent entries?",
    "answer": "sudo journalctl -xeu nginx",
    "altAnswers": [
      "journalctl -b",
      "journalctl -u nginx --boot",
      "journalctl -u nginx -b",
      "journalctl -xe -u nginx",
      "journalctl -xeu nginx.service"
    ],
    "explanation": "This command shows the complete log output from a specific service, jumps to the most recent entries, and adds explanatory hint lines for known systemd errors. It is the go-to debugging command after a service fails to start.",
    "usage": "View full systemd service logs with error explanations, jumping to the most recent entries.",
    "examples": [
      "sudo journalctl -xeu nginx  # newest + explanations for nginx",
      "sudo journalctl -fu nginx  # follow live (Ctrl-C to stop)",
      "sudo journalctl -u nginx --since '10 min ago'",
      "sudo journalctl -p err -b  # only errors from THIS boot",
      "journalctl --boot  # Current boot logs",
      "journalctl -u nginx --boot  # nginx service logs from current boot"
    ],
    "memoryTip": "Mnemonic `-xeu`: eXplain + End + Unit. The trio for debugging failed services. Add `-f` for follow, `-b` for current boot.",
    "outputExample": "$ sudo journalctl -xeu nginx\nMay 17 09:32:01 server1 nginx[4820]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nMay 17 09:32:01 server1 systemd[1]: nginx.service: Failed with result 'exit-code'.\n░░ Subject: Unit process exited\n░░ The process \"/usr/sbin/nginx -t\" exited with status 1.",
    "category": "SERVICES"
  },
  {
    "id": "svc1",
    "question": "You just installed PostgreSQL on a fresh server. `systemctl status postgresql` reports `Active: inactive (dead)` and you need the database up right now to run a migration. You have not decided yet whether it should come back after a reboot, so leave that untouched. What command brings it up?",
    "answer": "sudo systemctl start postgresql",
    "altAnswers": [
      "sudo systemctl start postgresql.service"
    ],
    "explanation": "`start` sends a job to PID 1 asking it to activate that unit now: systemd reads the unit's ExecStart, forks the process, puts it in its own cgroup and starts tracking it. It touches nothing on disk, so the unit's boot-time behaviour is exactly as it was a second ago. Starting a service is a runtime act; making it survive a reboot is a separate, on-disk act. On success systemctl prints nothing at all — silence means it worked, and the exit status is 0.",
    "usage": "Right after installing a package that ships a service, or after you stopped something by hand and want it back without waiting for a reboot.",
    "examples": [
      "sudo systemctl start postgresql  # activate now; boot behaviour unchanged",
      "sudo systemctl start postgresql nginx  # activate several units in one call",
      "systemctl is-active postgresql  # ask for the runtime state as one word, no pager",
      "sudo systemctl start postgresql@14  # start one instance of a templated unit",
      "sudo systemctl stop postgresql  # the exact inverse: deactivate now, boot behaviour still unchanged"
    ],
    "memoryTip": "start/stop are about NOW; enable/disable are about BOOT. Two axes, four words, and they are completely independent — a service can be running and disabled (dies at the next reboot) or stopped and enabled (comes back at the next reboot). Ask yourself 'now, or next time?' before choosing the verb.",
    "outputExample": "$ sudo systemctl start postgresql\n$ systemctl is-active postgresql\nactive",
    "category": "SERVICES"
  },
  {
    "id": "svc2",
    "question": "You changed `worker_processes` in /etc/nginx/nginx.conf. nginx is running with the old value and you want the process torn down and brought back up on the new config in a single command — a brief drop of in-flight connections is acceptable here. What command does that?",
    "answer": "sudo systemctl restart nginx",
    "altAnswers": [
      "sudo systemctl restart nginx.service"
    ],
    "explanation": "`restart` is a stop job followed by a start job, run in that order against the same unit. Because the old process is killed and a brand-new one is forked, every setting is re-read from scratch — including the ones a running daemon can never change, like the number of worker processes or the user it runs as. The cost is the gap: for the moment between stop and start nothing is listening, so in-flight requests fail. That gap is the whole reason `reload` exists as a separate verb.",
    "usage": "Any config change a daemon cannot absorb while running, and the standard move after upgrading a package whose binary is already loaded in memory.",
    "examples": [
      "sudo systemctl restart nginx  # stop then start, unconditionally",
      "sudo systemctl try-restart nginx  # restart only if it is already running; do nothing if it is stopped",
      "sudo systemctl reload-or-restart nginx  # reload if the unit supports it, otherwise fall back to a restart",
      "sudo nginx -t  # check the config parses before you bounce anything",
      "systemctl show -p MainPID --value nginx  # print the main PID, so you can see it change across a restart"
    ],
    "memoryTip": "restart = stop + start, in that order, with a gap in the middle where nothing is serving. If you cannot afford that gap and the daemon can re-read its config in place, you want reload instead. Rule of thumb: restart replaces the process, reload only re-reads the file.",
    "outputExample": "$ systemctl show -p MainPID --value nginx\n2481\n$ sudo systemctl restart nginx\n$ systemctl show -p MainPID --value nginx\n3117",
    "category": "SERVICES"
  },
  {
    "id": "svc3",
    "question": "You have written a `backup.service` unit that runs a nightly job. The backup window is 02:00 and running it now, in the middle of the working day, would hammer the disks — so it must not be activated. It does need systemd to pull it in automatically at every boot from then on. What command registers it for boot without activating it?",
    "answer": "sudo systemctl enable backup",
    "altAnswers": [
      "sudo systemctl enable backup.service"
    ],
    "explanation": "`enable` is purely an on-disk operation. systemd reads the unit's `[Install]` section, finds its `WantedBy=` target (usually multi-user.target) and creates a symlink to the unit inside that target's `.wants` directory — that is literally all 'enabled' means. Nothing is activated, no process is forked, and systemctl tells you exactly which symlink it made. At the next boot systemd pulls in multi-user.target, sees the symlink, and starts the unit then. This is why `enable` alone leaves a service still sitting at `inactive (dead)`, which is the single most common source of 'I enabled it and nothing happened'.",
    "usage": "Preparing a service that must survive reboots but must not run at the moment you configure it — maintenance jobs, anything with a schedule, or a service you are staging before a cutover.",
    "examples": [
      "sudo systemctl enable backup  # create the boot-time symlink, do not activate",
      "sudo systemctl enable --now backup  # create the symlink AND start it immediately",
      "systemctl is-enabled backup  # print just the word: enabled, disabled, static or masked",
      "sudo systemctl disable backup  # remove the symlink; a running instance keeps running",
      "sudo systemctl mask backup  # link the unit to /dev/null so it cannot be started even by hand"
    ],
    "memoryTip": "'enabled' is not a state of the process, it is a symlink on disk. Picture a guest list: enable writes the service's name onto the boot-time guest list, start opens the door for it right now. Writing someone onto a list does not make them walk in — that is why `--now` exists.",
    "outputExample": "$ sudo systemctl enable backup\nCreated symlink '/etc/systemd/system/multi-user.target.wants/backup.service' → '/etc/systemd/system/backup.service'.\n$ systemctl is-active backup\ninactive",
    "category": "SERVICES"
  },
  {
    "id": "svc4",
    "question": "A headless build server has no Bluetooth hardware, yet `bluetooth.service` is running and reappears after every reboot. You want it shut down immediately and never pulled in at boot again, and you want both effects from one command. What command does it?",
    "answer": "sudo systemctl disable --now bluetooth",
    "altAnswers": [
      "sudo systemctl disable bluetooth --now",
      "sudo systemctl disable --now bluetooth.service"
    ],
    "explanation": "`disable` deletes the `.wants` symlinks that `enable` created, so no target pulls the unit in at the next boot — but on its own it leaves the running process completely alone, which surprises people who expect a disabled service to stop. `--now` bolts the runtime half onto the on-disk half: disable plus stop, or enable plus start, in a single invocation. Note that disabling does not make a unit unstartable — anything with a `Requires=` on it, or you with a `start` command, can still bring it up. `mask` is the stronger tool for that.",
    "usage": "Trimming a server's boot: turning off hardware daemons that have no hardware, or retiring a service you are decommissioning but do not want to uninstall yet.",
    "examples": [
      "sudo systemctl disable --now bluetooth  # stop it and remove the boot-time symlink",
      "sudo systemctl disable bluetooth  # remove the symlink only; it keeps running until reboot",
      "sudo systemctl stop bluetooth  # stop it only; it comes straight back at the next boot",
      "sudo systemctl mask bluetooth  # point the unit at /dev/null so nothing can start it, not even a dependency",
      "systemctl is-enabled bluetooth  # confirm afterwards; should now answer disabled"
    ],
    "memoryTip": "`--now` is the bridge between the two axes: it adds the runtime action to the on-disk one. enable --now = enable + start. disable --now = disable + stop. Without it you have changed only the next boot, and everyone forgets that at least once.",
    "outputExample": "$ sudo systemctl disable --now bluetooth\nRemoved '/etc/systemd/system/bluetooth.target.wants/bluetooth.service'.\n$ systemctl is-active bluetooth\ninactive",
    "category": "SERVICES"
  },
  {
    "id": "svc5",
    "question": "You added a new `server` block to /etc/nginx/nginx.conf. nginx is serving live traffic and must keep every in-flight request alive while it picks up the change. The unit declares an `ExecReload=`, so systemd can signal the running process instead of replacing it. What command applies the new config?",
    "answer": "sudo systemctl reload nginx",
    "altAnswers": [
      "sudo systemctl reload nginx.service"
    ],
    "explanation": "`reload` runs whatever the unit file put in `ExecReload=` — for nginx that is a `SIGHUP`-style signal telling the master process to re-read its config, spawn workers on the new one and let the old workers finish the requests they already accepted. The main PID never changes and the listening socket is never closed, so no connection is dropped. It only works when the unit actually declares ExecReload: ask a unit without one to reload and systemd refuses the job rather than silently restarting.",
    "usage": "Applying config changes on anything user-facing — web servers, load balancers, DNS — where a restart's momentary gap would show up as errors for real users.",
    "examples": [
      "sudo systemctl reload nginx  # signal the running process to re-read its config",
      "sudo systemctl reload-or-restart nginx  # reload where supported, restart where it is not",
      "sudo nginx -t  # validate the config first; a reload on a broken file leaves the old config running",
      "sudo systemctl restart nginx  # the heavier alternative when the change cannot be absorbed live",
      "systemctl cat nginx  # read the unit to see whether it declares an ExecReload at all"
    ],
    "memoryTip": "reload re-reads the FILE; restart replaces the PROCESS. If the setting is something a running daemon can change on the fly (virtual hosts, upstreams, log paths) reload is enough; if it is baked in at startup (user, worker count, listening port on some daemons) only a restart will do.",
    "outputExample": "$ systemctl show -p MainPID --value nginx\n2481\n$ sudo systemctl reload nginx\n$ systemctl show -p MainPID --value nginx\n2481",
    "category": "SERVICES"
  },
  {
    "id": "svc6",
    "question": "You are about to trigger a deploy of `myapp.service` and want a second terminal showing that one unit's journal as it happens, so you catch the crash the moment it appears rather than reading about it afterwards. What command tails just that unit's journal live?",
    "answer": "journalctl -u myapp -f",
    "altAnswers": [
      "journalctl -fu myapp",
      "journalctl -f -u myapp",
      "journalctl -u myapp.service -f",
      "journalctl -u myapp --follow"
    ],
    "explanation": "`-u` filters the journal on the `_SYSTEMD_UNIT` field, which systemd stamps onto every message a unit's process writes to stdout, stderr or the syslog socket — so you get that service's output and nothing else, no grepping required. `-f` (follow) prints the last ten matching entries for context and then blocks, waking up and printing each new entry as it is written. It is the systemd equivalent of `tail -f` on a log file, except the filtering is done on indexed metadata rather than by matching text.",
    "usage": "Watching a deploy, a restart or a flaky service in real time; keep it running in one pane while you drive the service from another.",
    "examples": [
      "journalctl -u myapp -f  # follow this unit's journal as it is written",
      "journalctl -u myapp -f -n 50  # start with 50 lines of history instead of the default 10",
      "journalctl -f  # follow everything on the box, all units at once",
      "journalctl -u myapp -p err  # only entries at priority error or worse, no follow",
      "journalctl -u myapp -o cat  # strip the timestamp and unit prefix, showing just the app's own lines"
    ],
    "memoryTip": "`-u` = unit (not 'user' — that flag is `--user`), `-f` = follow, the same `-f` as `tail -f`. Read the pair as 'follow this unit'. Ctrl-C is how you stop it; the journal keeps recording whether or not you are watching.",
    "outputExample": "$ journalctl -u myapp -f\nAug 18 17:44:02 web1 myapp[2481]: worker 3 ready\nAug 18 17:44:09 web1 myapp[2481]: GET /health 200 1ms\n(blocks here, printing each new line as it arrives)",
    "category": "SERVICES"
  },
  {
    "id": "svc7",
    "question": "Users report that myapp started returning 502s some time after 09:00 this morning. You want every journal entry for `myapp.service` from 09:00 today onward and nothing from before that, printed once rather than followed. What command shows that window?",
    "answer": "journalctl -u myapp --since 09:00",
    "altAnswers": [
      "journalctl --since 09:00 -u myapp",
      "journalctl -u myapp -S 09:00",
      "journalctl -u myapp.service --since 09:00",
      "journalctl -u myapp --since '09:00'"
    ],
    "explanation": "The journal stores a monotonic and a wallclock timestamp on every entry and keeps them indexed, so `--since` is a cheap seek to a position in the file rather than a scan. A bare `HH:MM` is interpreted as that time today, so `--since 09:00` means 09:00 this morning; the same flag also takes full dates (`2026-08-18 09:00:00`) and plain English (`yesterday`, `-1h`, `1 hour ago`). Pair it with `--until` to bound the other end and you have an arbitrary time window. If no entry matches, journalctl prints `-- No entries --` rather than nothing at all.",
    "usage": "Incident work: you know roughly when it broke, so you cut the journal down to that window instead of reading a day of noise.",
    "examples": [
      "journalctl -u myapp --since 09:00  # from 09:00 today to now",
      "journalctl -u myapp --since 09:00 --until 10:30  # bound both ends of the window",
      "journalctl -u myapp --since '1 hour ago'  # relative English is accepted too",
      "journalctl -u myapp --since yesterday  # from 00:00 yesterday onwards",
      "journalctl -u myapp -b  # a different cut of the same journal: only this boot"
    ],
    "memoryTip": "`--since` and `--until` are the two ends of a window, with short forms `-S` and `-U` (Start and Until). A bare clock time always means today; anything longer is parsed as a date, and words like 'yesterday' or '-1h' work because systemd runs the string through its own timestamp parser first.",
    "outputExample": "$ journalctl -u myapp --since 09:00\nAug 18 09:04:11 web1 myapp[2481]: upstream timed out (110: Connection timed out)\nAug 18 09:04:11 web1 myapp[2481]: GET /api/orders 502 30001ms\n(when nothing matches instead:)\n-- No entries --",
    "category": "SERVICES"
  },
  {
    "id": "svc8",
    "question": "A server has come back from a reboot and the login banner warns that some units failed, without naming any of them. You want the complete list of units systemd currently considers failed, and only those. What command lists them?",
    "answer": "systemctl list-units --failed",
    "altAnswers": [
      "systemctl --failed",
      "systemctl list-units --state=failed",
      "systemctl list-units --state failed"
    ],
    "explanation": "systemd keeps every unit it has loaded in memory along with its state, so this is a query against PID 1 rather than a log search — it is instant and it is exact. A unit lands in `failed` when its main process exits non-zero, is killed by a signal, times out, or its ExecStart cannot be run at all; it stays there until something restarts it or you run `systemctl reset-failed`. `systemctl --failed` is the documented shorthand for the same query. The output's LOAD/ACTIVE/SUB columns tell you the difference between 'the unit file is broken' and 'the unit file is fine but the program died'.",
    "usage": "The first command to run on any machine you have just been handed or that has just rebooted badly — it turns 'something is wrong' into a specific unit name you can then feed to journalctl.",
    "examples": [
      "systemctl list-units --failed  # every failed unit, nothing else",
      "systemctl --failed  # the shorthand for exactly the same query",
      "systemctl --user --failed  # the same question asked of your own per-user manager",
      "systemctl list-units --state=activating  # units still trying to come up, a common cause of slow boots",
      "sudo systemctl reset-failed  # clear the failed marks once you have fixed the cause"
    ],
    "memoryTip": "`list-units` shows what systemd has in memory; `--failed` is a filter on that list, a shorthand for `--state=failed`. Remember the triage loop: list-units --failed names the unit, `journalctl -u <that unit>` says why, `systemctl status <that unit>` says what state it is in now.",
    "outputExample": "$ systemctl list-units --failed\n  UNIT             LOAD   ACTIVE SUB    DESCRIPTION\n× backup.service   loaded failed failed Nightly backup\n\nLegend: LOAD   -> Reflects whether the unit definition was properly loaded.\n        ACTIVE -> The high-level unit activation state, i.e. generalization of SUB.\n        SUB    -> The low-level unit activation state, values depend on unit type.\n\n1 loaded units listed.",
    "category": "SERVICES"
  },
  {
    "id": "svc9",
    "question": "You have just created /etc/systemd/system/backup.service with a text editor and saved it. `sudo systemctl start backup` answers `Failed to start backup.service: Unit backup.service not found.` even though the file is sitting right there and its syntax is fine. What command makes systemd notice the new file?",
    "answer": "sudo systemctl daemon-reload",
    "altAnswers": [
      "sudo systemctl daemon-reload --system"
    ],
    "explanation": "systemd parses unit files once and keeps the resulting objects — dependencies, cgroup settings, exec lines — in PID 1's memory. It does not watch the unit directories for changes, so a file you created a second ago simply does not exist as far as the running manager is concerned, which is exactly what 'Unit not found' means here. `daemon-reload` makes PID 1 rescan every unit directory and rebuild that in-memory graph, without restarting anything that is currently running. Editing an existing unit needs it too: there systemd notices the mismatch and prints a warning telling you to run it. The same staleness bites in the other direction too: if you EDIT a unit that systemd has already loaded, `systemctl restart` keeps using the old copy and warns that the file changed on disk. Either way the rule is the same — systemd reads unit files once into memory, and daemon-reload is what makes it read them again.",
    "usage": "Every time you add, rename or edit a unit file by hand. (`systemctl edit` and package managers run it for you, which is why the requirement is easy to forget when you finally hand-write one.)",
    "examples": [
      "sudo systemctl daemon-reload  # rescan the unit directories and rebuild the in-memory graph",
      "systemctl cat backup  # after reloading, print the unit exactly as systemd now sees it, drop-ins included",
      "sudo systemd-analyze verify /etc/systemd/system/backup.service  # syntax-check the file before reloading",
      "sudo systemctl edit backup  # edit via a drop-in; this one reloads for you automatically",
      "sudo systemctl daemon-reexec  # the much bigger hammer: re-execute PID 1 itself, normally only after a systemd upgrade",
      "sudo systemctl daemon-reload  # also required after EDITING a loaded unit, not just after creating one"
    ],
    "memoryTip": "The daemon in 'daemon-reload' is systemd itself, not your service — you are reloading PID 1's picture of the world, not restarting nginx. Sequence to memorise: write the unit file, daemon-reload, then enable and/or start. Skip the middle step and systemd is still looking at yesterday's directory listing.",
    "outputExample": "$ sudo systemctl start backup\nFailed to start backup.service: Unit backup.service not found.\n$ sudo systemctl daemon-reload\n$ sudo systemctl start backup\n$",
    "category": "SERVICES"
  },
  {
    "id": "svc10",
    "question": "Syncthing runs on your workstation as your own user unit, defined in ~/.config/systemd/user/syncthing.service rather than under /etc/systemd/system. `systemctl status syncthing` answers `Unit syncthing.service could not be found.` What command asks your own per-user systemd instance for that unit's status instead?",
    "answer": "systemctl --user status syncthing",
    "altAnswers": [
      "systemctl status --user syncthing",
      "systemctl --user status syncthing.service"
    ],
    "explanation": "There are two kinds of service manager on a systemd box. PID 1 owns the system instance and its units live in /etc/systemd/system and /usr/lib/systemd/system. Separately, every logged-in user gets their own `systemd --user` instance, whose units live in ~/.config/systemd/user and which runs as you, with your environment and your session's access to the desktop. `--user` points systemctl at that second manager over your user bus. Without the flag systemctl talks to PID 1, which has genuinely never heard of syncthing.service — hence the 'could not be found'. The corollary is that user units need no sudo; using it would put you in root's user manager, not yours.",
    "usage": "Anything that should run as you rather than as a system daemon: a sync client, a personal backup timer, a language server or a media daemon that needs your session.",
    "examples": [
      "systemctl --user status syncthing  # query your own manager, no sudo",
      "systemctl --user enable --now syncthing  # start it and have it come back at every login",
      "systemctl --user daemon-reload  # the user manager caches unit files exactly like PID 1 does",
      "journalctl --user -u syncthing  # the matching journal filter for user units",
      "loginctl enable-linger alice  # keep alice's user manager running when she is not logged in, so her units survive logout"
    ],
    "memoryTip": "Two managers, two namespaces. `--user` is the switch that says 'my systemd, not the machine's'. Watch out for the near-miss: `-u` means unit, `--user` means the per-user manager, and journalctl needs both together (`journalctl --user -u syncthing`) to ask for one unit inside your own instance.",
    "outputExample": "$ systemctl status syncthing\nUnit syncthing.service could not be found.\n$ systemctl --user status syncthing\n● syncthing.service - Syncthing - Open Source Continuous File Synchronization\n     Loaded: loaded (/home/alice/.config/systemd/user/syncthing.service; enabled; preset: enabled)\n     Active: active (running) since Tue 2026-08-18 08:00:41 CEST; 9h ago",
    "category": "SERVICES"
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
    "category": "SYSTEM INFO",
    "altAnswers": [
      "hostnamectl",
      "uname -m (arch only)",
      "uname -rm",
      "uname -srm"
    ]
  },
  {
    "id": "sys2",
    "question": "A cron job that writes to /var/log/ fails with 'No space left on device', but you don't know which filesystem is full. What command shows free and used disk space on every mounted filesystem?",
    "answer": "df -h",
    "altAnswers": [
      "df"
    ],
    "explanation": "Your server's storage is divided into separate filing cabinets (filesystems), each mounted at a different directory. This command lists all of them with how much is used and how much is left, so you can immediately see which cabinet is overflowing.",
    "usage": "Show disk usage for every mounted filesystem in human-readable format to find which one is causing 'No space left on device'.",
    "examples": [
      "df -h  # human-readable size per mounted filesystem",
      "df -hT  # add filesystem type column (ext4, xfs, tmpfs, ...)",
      "df -i  # inode usage (run out of these = same error as no space)",
      "df -h /var/log  # only the filesystem containing /var/log",
      "df -h --total  # add a TOTAL row at the bottom",
      "df -h /home  # only the filesystem that holds /home"
    ],
    "memoryTip": "`df` = Disk Free (per FILESYSTEM). Pair-think: `df` (mounts) vs `du` (folders). 'No space left on device' = check `df -h` first, then `df -i` (inode exhaustion is the sneaky cause).",
    "outputExample": "$ df -hT\nFilesystem     Type      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p2 ext4      450G  142G  286G  34% /\ntmpfs          tmpfs     7.9G  3.2M  7.9G   1% /run\n/dev/nvme0n1p1 vfat      511M  6.1M  505M   2% /boot/efi\ntmpfs          tmpfs     7.9G   42M  7.9G   1% /run/user/1000",
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
    "answer": "lspci -k",
    "altAnswers": [
      "lspci -v"
    ],
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
    "outputExample": "$ lspci -k\n00:1f.6 Ethernet controller: Intel Corporation Ethernet Connection (7) I219-LM\n\tKernel driver in use: e1000e\n\tKernel modules: e1000e\n02:00.0 Network controller: Intel Corporation Wi-Fi 6 AX200\n\tKernel modules: iwlwifi\n# Wi-Fi card has no 'Kernel driver in use' line — the driver failed to bind",
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
    "altAnswers": [
      "declare -x",
      "export -p",
      "printenv",
      "set (also shows shell vars)"
    ],
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
    "altAnswers": [
      "uname -n"
    ],
    "explanation": "Every computer on a network has a human-readable name — its hostname. It's what appears in the terminal prompt before the `$` and what other machines use to refer to it by name. This command simply prints that name.",
    "usage": "Print the server's hostname to use as the Host value in an SSH client config alias.",
    "examples": [
      "hostname  # Show current hostname",
      "hostname -f  # Show fully qualified domain name",
      "hostname -I  # all real IP addresses — note the CAPITAL I (net-tools). Lowercase `hostname -i` only resolves the name and on Debian/Ubuntu usually prints 127.0.1.1",
      "ip -4 -br addr  # portable alternative: every interface with its IPv4 address"
    ],
    "memoryTip": "'hostname' = system name. Like asking 'what is my computer called?'",
    "outputExample": "$ hostname\nweb1\n$ hostname -f\nweb1.example.com\n$ hostname -i\n127.0.1.1\n# lowercase -i resolves the NAME via /etc/hosts, so it usually\n# reports loopback — use `hostname -I` or `ip -4 -br addr` for real IPs",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys11",
    "question": "A backup script needs to name output files with today's date in YYYY-MM-DD format, like 'backup_2026-05-19.tar.gz'. What command prints the current date in that exact format?",
    "answer": "date +%Y-%m-%d",
    "altAnswers": [
      "date '+%Y-%m-%d'",
      "date +'%Y-%m-%d'",
      "date --iso-8601"
    ],
    "explanation": "Every Linux system keeps a real-time clock. The date command reads it and formats the output however you need — ISO 8601, epoch seconds, custom strings. In scripts it creates timestamped filenames and log entries that sort chronologically. With +FORMAT you control every character. With -d you parse and reformat date strings or do relative arithmetic like \"7 days ago\". The system clock can be queried or set (with sudo), and hardware clock sync is handled by systemd-timesyncd or ntpd.",
    "usage": "Print today's date in YYYY-MM-DD format to use in a backup filename.",
    "examples": [
      "date  # Current date and time in default locale format",
      "date '+%Y-%m-%d'  # YYYY-MM-DD format: 2026-05-19",
      "date '+%s'  # Unix timestamp",
      "date -d 'yesterday' '+%Y-%m-%d'  # yesterday's date",
      "FILENAME=\"backup_$(date '+%Y-%m-%d').tar.gz\"  # use in a variable"
    ],
    "memoryTip": "'date' = show date/time. Like checking a clock to see what time it is.",
    "outputExample": "$ date '+%Y-%m-%d'\n2026-05-19\n$ date '+%Y-%m-%dT%H:%M:%S'\n2026-05-19T14:35:22\n$ date '+%s'\n1779201322",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys12",
    "question": "During a post-incident review, you need to know how long the production server has been running since its last reboot. What command shows both the uptime and the current CPU load?",
    "answer": "uptime",
    "altAnswers": [
      "cat /proc/uptime",
      "uptime -p",
      "w"
    ],
    "explanation": "This command answers two questions at once: how long has this machine been running since it was last rebooted, and how busy is the CPU right now? The load numbers give you a quick sense of whether the server is handling its workload comfortably or struggling.",
    "usage": "Check how long the production server has been running and its current load averages for an incident post-mortem.",
    "examples": [
      "uptime  # System uptime and load",
      "uptime -p  # Pretty format: 'up 45 days, 12 hours'",
      "uptime -s  # Exact reboot datetime for incident timeline correlation",
      "w  # Uptime plus list of active users and their current commands",
      "cat /proc/loadavg  # raw load numbers if you're scripting",
      "nproc  # how many CPUs — compare against load avg to interpret"
    ],
    "memoryTip": "Load average's three numbers are 1/5/15 MINUTE averages in that order. Compare each to `nproc` (total CPUs). Trend reading: middle number HIGHER than first = recovering; LOWER than first = climbing. Don't confuse load with CPU % — load includes processes waiting for disk too.",
    "outputExample": "$ uptime\n 10:30:45 up 45 days, 12:34,  2 users,  load average: 0.15, 0.12, 0.10\n$ uptime -s\n2026-04-04 22:08:31",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys13",
    "question": "A suspicious login alert arrived. You need to see which users are currently logged into the server and what commands they are running. What command shows all active sessions with their current activity?",
    "answer": "w",
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
    "altAnswers": [
      "journalctl -k"
    ],
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
    "question": "What standard file, present on every systemd distro, does a script read to get machine-parseable ID and VERSION_ID fields, and what command prints it?",
    "answer": "cat /etc/os-release",
    "explanation": "Every mainstream Linux distribution ships a small text file that acts as its identity card. It contains the official name, version, and a short identifier in a standardized format that scripts can read without parsing complex command output.",
    "usage": "Read /etc/os-release to determine the distribution name and version for a package-manager detection script.",
    "examples": [
      "cat /etc/os-release  # Full info",
      "grep '^ID=' /etc/os-release  # Just the distro short name",
      "lsb_release -a  # Alternative (requires lsb-release package)",
      "hostnamectl  # Modern format with distro + kernel",
      "lsb_release -cs  # Just the codename (e.g. noble)"
    ],
    "memoryTip": "lsb_release = Linux Standard Base release info. `-cs` gives just the codename for scripting.",
    "outputExample": "$ cat /etc/os-release\nNAME=\"Ubuntu\"\nVERSION=\"24.04.1 LTS (Noble Numbat)\"\nID=ubuntu\nID_LIKE=debian\nPRETTY_NAME=\"Ubuntu 24.04.1 LTS\"\nVERSION_ID=\"24.04\"\nHOME_URL=\"https://www.ubuntu.com/\"\n$ source /etc/os-release && echo \"Distro: $ID, Version: $VERSION_ID\"\nDistro: ubuntu, Version: 24.04",
    "category": "SYSTEM INFO",
    "altAnswers": [
      ". /etc/os-release",
      "less /etc/os-release"
    ]
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
    "outputExample": "$ lsblk\nNAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINTS\nsda    8:0      0 500G  0 disk\n├─sda1 8:1      0   1G  0 part /boot\n└─sda2 8:2      0 499G  0 part /\nsdb    8:16     1  16G  0 disk\n└─sdb1 8:17     1  16G  0 part /media/usb",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys23",
    "question": "You need the UUID of /dev/sdb1 to write a stable /etc/fstab entry that won't break if the drive order changes on reboot. Which command shows UUIDs and filesystem types?",
    "answer": "sudo blkid /dev/sdb1",
    "altAnswers": [
      "blkid /dev/sdb1",
      "findmnt -o SOURCE,UUID,FSTYPE",
      "lsblk -f",
      "lsblk -f /dev/sdb1",
      "lsblk -o NAME,UUID,FSTYPE"
    ],
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
    "altAnswers": [
      "cat /proc/mounts | grep /var/data",
      "df -h /var/data",
      "findmnt --target /var/data",
      "findmnt -T /var/data",
      "mount | grep /var/data"
    ],
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
    "outputExample": "$ last -n 3\nalice   pts/0  192.168.1.10  Thu May 14 09:00   still logged in\nbob     pts/1  10.0.0.5      Thu May 14 08:42 - 09:15  (00:33)\nreboot  system boot         Thu May 14 08:30   still running",
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
    "outputExample": "$ vmstat 1\nprocs -----------memory---------- ---swap-- -----io---- -system-- -------cpu-------\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st gu\n 1  0 6797004 2761980   32 18553284 91  300  2124   822 6992    7  2  0 98  0  0  0\n 0  0 6796996 2762140   32 18553288  8    0     8     4 15024 29062 1 0 98  0  0  0\n^C",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys27",
    "question": "CPU and memory look normal but the database server is still slow. You want per-disk read/write rates and utilization percentages updated every second, with idle devices hidden. Which command shows extended disk I/O statistics while skipping idle devices?",
    "answer": "iostat -xz 1",
    "altAnswers": [
      "iostat -zx 1",
      "iostat -x -z 1",
      "iostat -z -x 1"
    ],
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
    "question": "What `lshw` flag prints a compact one-line-per-device hardware inventory instead of the full verbose tree?",
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
    "category": "SYSTEM INFO",
    "altAnswers": [
      "dmidecode -t system",
      "hwinfo --short",
      "inxi -Fxz",
      "lscpu; free -h; lsblk",
      "lshw -short -sanitize"
    ]
  },
  {
    "id": "sys29",
    "question": "A Java process appears to have a memory leak. You want to see the kernel's raw memory accounting — total, free, available, and cached — beyond what the 'free' command shows. What command prints the kernel's memory accounting file to the terminal?",
    "answer": "cat /proc/meminfo",
    "altAnswers": [
      "less /proc/meminfo",
      "cat /proc/meminfo | less"
    ],
    "explanation": "The kernel maintains a running page-by-page account of every byte of memory in a virtual file. Reading it gives you detailed memory statistics including how much is cached and how much is truly available for new processes — a distinction the simpler 'free' command sometimes obscures.",
    "usage": "Read the kernel's detailed memory accounting file to see all memory categories in kilobytes.",
    "examples": [
      "grep -E 'MemTotal|MemAvailable|Cached' /proc/meminfo",
      "awk '/MemAvailable/ {print $2/1024 \" MB\"}' /proc/meminfo",
      "watch -n 1 'grep -E \"Mem|Swap\" /proc/meminfo'  # live view"
    ],
    "memoryTip": "/proc/meminfo = the kernel's memory ledger. MemAvailable is what matters for OOM risk — not MemFree.",
    "outputExample": "$ cat /proc/meminfo | head -5\nMemTotal:       16384000 kB\nMemFree:          512000 kB\nMemAvailable:    8192000 kB\nBuffers:          256000 kB\nCached:          6144000 kB",
    "category": "SYSTEM INFO"
  },
  {
    "id": "sys30",
    "question": "The system journal is hundreds of megabytes long and you only care about lines that indicate actual errors or worse. Which journalctl filter shows only error-level and above entries?",
    "answer": "journalctl -p err",
    "altAnswers": [
      "journalctl --priority=err",
      "journalctl -b -p err",
      "journalctl -p 3",
      "journalctl -p err..emerg",
      "journalctl -p error"
    ],
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
    "id": "disk1",
    "question": "You have just plugged a USB stick into a server and need, for every partition on every disk at once, what filesystem it holds, its label and where it is currently mounted — as one indented tree, without querying each device separately. What command shows that?",
    "answer": "lsblk -f",
    "altAnswers": [
      "lsblk --fs"
    ],
    "explanation": "Plain `lsblk` reads sysfs and draws the block-device topology — disks, their partitions, size, type — but sysfs knows nothing about what is inside a partition. `-f` makes lsblk additionally probe each device with libblkid, reading the filesystem superblock to pull out FSTYPE, LABEL, UUID and how full it is, and merges those columns into the same tree. That is why the new USB partition appears indented under its disk with `vfat` beside it, and why an unformatted or LUKS-wrapped partition shows a blank FSTYPE. No root needed: the probe results for mounted and known devices come from udev's cache.",
    "usage": "The first command after plugging anything in, and the fastest way to answer 'which /dev/sdX is the new one' before you mount it or point an installer at it.",
    "examples": [
      "lsblk -f  # tree plus filesystem type, label, UUID and mount point",
      "lsblk  # topology and sizes only, no filesystem probing",
      "lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINTS  # choose the exact columns you want",
      "lsblk -no UUID /dev/sdb1  # print one field for one device, ideal for scripts",
      "lsblk -p  # show full device paths like /dev/sdb1 instead of the indented short names"
    ],
    "memoryTip": "`lsblk` = 'ls' for block devices — it lists them the way ls lists files, as a tree. The `-f` is 'filesystems': without it you see the containers, with it you see what is inside them. Its sibling `blkid` answers the same question for one device at a time and needs root; lsblk answers it for all of them and does not.",
    "outputExample": "$ lsblk -f\nNAME   FSTYPE FSVER LABEL    UUID                                 FSAVAIL FSUSE% MOUNTPOINTS\nsda\n├─sda1 vfat   FAT32          A4B2-19C7                             510.3M     0% /boot/efi\n└─sda2 ext4   1.0   root     6e171d6b-4c22-4b44-94aa-27287a0b3cde    359G    60% /\nsdb\n└─sdb1 vfat   FAT32 USBSTICK 8A90-9908",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "disk2",
    "question": "`lsblk -f` shows /dev/sdb1 holding a vfat filesystem with no mount point, and the empty directory /mnt/usb already exists. You want that partition attached at /mnt/usb, letting the kernel work out the filesystem type by itself rather than naming it. What command attaches it?",
    "answer": "sudo mount /dev/sdb1 /mnt/usb",
    "altAnswers": [
      "sudo mount -t auto /dev/sdb1 /mnt/usb"
    ],
    "explanation": "Linux has one filesystem tree, not one per disk, so a new filesystem becomes reachable only by being grafted onto an existing directory — that graft is what mounting is. `mount` asks the kernel to attach the filesystem on the given device at the given directory; from then on paths under /mnt/usb resolve into the USB stick, and whatever /mnt/usb contained before is hidden (not deleted) until you unmount. With no `-t`, mount hands the device to libblkid, which reads the superblock magic and picks the driver for you, which is why naming vfat is unnecessary. It needs root because attaching a filesystem changes the namespace for every process on the machine, and prints nothing when it succeeds.",
    "usage": "Anything not listed in /etc/fstab: USB sticks on a headless box, a rescue disk you are about to copy from, a new data volume you are testing before committing it to fstab.",
    "examples": [
      "sudo mount /dev/sdb1 /mnt/usb  # attach it, letting the kernel detect the type",
      "sudo mount -o ro /dev/sdb1 /mnt/usb  # attach read-only, so nothing can be written to the stick",
      "sudo mount UUID=8A90-9908 /mnt/usb  # name the filesystem by UUID instead of by device path",
      "sudo mount -a  # mount everything listed in /etc/fstab that is not mounted yet",
      "findmnt /mnt/usb  # confirm afterwards what is mounted there and with which options"
    ],
    "memoryTip": "Mounting grafts a filesystem onto a directory — the directory is the socket, the filesystem is the plug. Argument order follows the sentence 'mount THIS device ON THAT directory': source first, target second. The target must already exist, and anything already inside it disappears from view until you unmount.",
    "outputExample": "$ sudo mount /dev/sdb1 /mnt/usb\n$ df -h /mnt/usb\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sdb1        29G  1.2G   28G   5% /mnt/usb",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "disk3",
    "question": "You have finished copying files to the USB stick mounted at /mnt/usb and want the kernel to flush its buffered writes and detach the filesystem so the stick can be pulled out safely. Nothing on the system has a file open there. What command detaches it?",
    "answer": "sudo umount /mnt/usb",
    "altAnswers": [
      "sudo umount -v /mnt/usb"
    ],
    "explanation": "Writes to a filesystem land in the kernel's page cache first and are flushed later, so a file that finished copying may still exist only in RAM — pulling the stick at that moment corrupts it. `umount` forces the flush, marks the filesystem clean and removes it from the mount tree, in that order; only when it returns is the device genuinely safe to unplug. It takes either the mount point or the device and it fails loudly rather than half-detaching: if any process holds an open file or has its working directory inside, you get `target is busy` and the filesystem stays exactly where it was. Note the spelling — the command is umount, with no `n`.",
    "usage": "Before unplugging any removable drive, before running fsck on a filesystem, and any time you need a mount point free so you can mount something else there.",
    "examples": [
      "sudo umount /mnt/usb  # detach by mount point",
      "sudo umount /dev/sdb1  # detach by device; same filesystem, either handle works",
      "sudo umount -R /mnt/usb  # recursively detach this mount and everything mounted underneath it",
      "sudo umount -l /mnt/usb  # lazy: detach from the tree now, release the device once the last user closes it",
      "findmnt /mnt/usb  # verify: after a successful umount it prints nothing and exits 1"
    ],
    "memoryTip": "It is spelled `umount`, not 'unmount' — a missing letter that has confused people since the 1970s (the kernel call is umount(2) and the command was named after it). Mnemonic: mount grafts on, umount cuts loose, and it refuses to cut while anyone is standing on the branch.",
    "outputExample": "$ sudo umount /mnt/usb\n$ findmnt /mnt/usb\n$ echo $?\n1",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "disk4",
    "question": "`df -h` reports that the filesystem holding /var is 94% full. You need to know which of /var's immediate subdirectories is responsible: one human-readable total per subdirectory plus a grand total for /var itself, with no recursion into deeper levels and no per-file listing. What command produces that?",
    "answer": "sudo du -h --max-depth=1 /var",
    "altAnswers": [
      "sudo du -h -d 1 /var",
      "sudo du -hd1 /var",
      "sudo du --max-depth=1 -h /var",
      "sudo du -h --max-depth 1 /var",
      "sudo du -h -d1 /var"
    ],
    "explanation": "`df` and `du` answer different questions and that is why you need both. `df` calls statfs(2) and reports the filesystem's own block accounting — instant, but it can only tell you the whole filesystem is full, never where the bytes are. `du` walks the directory tree, stats every file and adds up the blocks each one actually occupies, so it can attribute usage to directories. `--max-depth=1` still walks the whole tree but only prints totals down to one level below the argument, plus the argument itself as the last line — which is what turns a wall of output into a short list you can read. sudo matters because /var holds directories your user cannot enter, and du silently undercounts what it cannot read.",
    "usage": "The 'disk is full' drill: df names the filesystem, then du walks down it one level at a time until you find the offending directory — usually /var/log or /var/lib/docker.",
    "examples": [
      "sudo du -h --max-depth=1 /var  # one total per subdirectory, plus /var itself",
      "sudo du -h --max-depth=1 /var | sort -h  # same list, ordered so the biggest lands at the bottom",
      "sudo du -sh /var/log  # a single grand total for one directory, nothing broken out",
      "sudo du -h --max-depth=1 -x /var  # stay on one filesystem, ignoring anything mounted underneath",
      "df -h /var  # the other half of the picture: how much room the filesystem has left"
    ],
    "memoryTip": "df = disk free, asks the FILESYSTEM how much is left. du = disk usage, asks the DIRECTORY how much it takes. df is instant because it reads a counter; du is slow because it walks every file. When they disagree, suspect a deleted file still held open by a process — df counts it, du cannot see it.",
    "outputExample": "$ sudo du -h --max-depth=1 /var\n1.4G\t/var/log\n12M\t/var/cache\n38G\t/var/lib\n4.0K\t/var/tmp\n40G\t/var",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "disk5",
    "question": "You are hand-writing the /etc/fstab line for a new data disk and need /dev/sdb1's UUID. Probing that device prints BLOCK_SIZE, TYPE and PARTUUID alongside it, and you want the one tag you are about to copy without those three cluttering the line. What command prints the device with its UUID tag alone?",
    "answer": "sudo blkid -s UUID /dev/sdb1",
    "altAnswers": [
      "sudo blkid --match-tag UUID /dev/sdb1",
      "sudo blkid /dev/sdb1 -s UUID"
    ],
    "explanation": "Kernel device names are assigned in discovery order, so today's /dev/sdb1 becomes tomorrow's /dev/sdc1 the moment you add a disk or the firmware enumerates differently — an fstab full of /dev/sdX names is a boot failure waiting to happen. A UUID is written inside the filesystem's superblock when it is created, so it travels with the data instead of with the cable. `blkid` reads that superblock directly, which is why it needs root to open the raw block device, and by default prints every tag it found. `-s` (match-tag) filters that down to the tags you name, so `-s UUID` leaves exactly the one string you came for. Add `-o value` on top and even the `UUID=` prefix and quotes go away, which is the form you want inside a script.",
    "usage": "Writing or repairing fstab entries, and scripting anything that has to name a specific filesystem reliably across reboots and disk reshuffles.",
    "examples": [
      "sudo blkid -s UUID /dev/sdb1  # the device line, filtered to just the UUID tag",
      "sudo blkid /dev/sdb1  # every tag: UUID, BLOCK_SIZE, TYPE, PARTUUID",
      "sudo blkid -s UUID -o value /dev/sdb1  # the bare value, no device name, no quotes, ideal in a script",
      "sudo blkid  # probe every device on the machine, one line each",
      "lsblk -no UUID /dev/sdb1  # the same value out of udev's cache, no root required"
    ],
    "memoryTip": "blkid = 'block ID': it identifies what is inside a block device by reading its superblock. `-s` is select-tag (the long name is --match-tag) and `-o` is output format — one narrows what you get, the other changes how it is printed. And the rule the whole question exists for: use UUID over /dev/sdX in fstab, always, because device names are handed out at boot while UUIDs are baked into the filesystem.",
    "outputExample": "$ sudo blkid /dev/sdb1\n/dev/sdb1: UUID=\"f2b1c4d8-7a3e-4f19-9c02-1e5d6a8b3047\" BLOCK_SIZE=\"4096\" TYPE=\"ext4\" PARTUUID=\"3c8a1b6e-9d04-4a71-bb28-5f0c7e2d1946\"\n$ sudo blkid -s UUID /dev/sdb1\n/dev/sdb1: UUID=\"f2b1c4d8-7a3e-4f19-9c02-1e5d6a8b3047\"",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "disk6",
    "question": "Your backup disk sits in an external enclosure that is not always powered on. Its /etc/fstab line reads `UUID=f2b1c4d8-... /mnt/backup ext4 defaults 0 2`, and whenever the enclosure is off the machine stops at boot and drops into emergency mode. You want the disk still mounted automatically whenever it is present, but its absence must never block the boot. Which single mount option do you add to the fourth field?",
    "answer": "nofail",
    "altAnswers": [
      "defaults,nofail"
    ],
    "explanation": "systemd-fstab-generator converts every fstab line into a .mount unit at boot. For a local filesystem that unit is ordered `Before=local-fs.target` and pulled in as a requirement of it, so a device that never appears makes local-fs.target fail — and a failed local-fs.target is precisely what drops you into emergency mode. `nofail` in the options field tells the generator to drop that ordering and requirement: the mount is still attempted, still succeeds when the enclosure is on, but the boot no longer waits for it or fails because of it. Note it differs from `noauto`, which would stop the disk being mounted automatically at all — the opposite of what you want here. The six fields on that line, in order, are device, mount point, filesystem type, options, dump flag, and fsck pass order.",
    "usage": "Any fstab entry for hardware that may be absent: external enclosures, USB backup disks, network shares (which usually want `_netdev,nofail`), and optional data volumes on cloud instances.",
    "examples": [
      "defaults,nofail  # mount when present, never block the boot when absent",
      "noauto,user  # do not mount at boot at all; let an ordinary user mount it on demand",
      "nofail,x-systemd.device-timeout=5  # also cap how long the boot waits for the device to appear",
      "defaults,noatime  # a plain performance option: stop updating access times on every read",
      "_netdev,nofail  # for network filesystems: wait for the network, and still boot without them"
    ],
    "memoryTip": "Read the two options as sentences. `noauto` = 'do not mount me automatically'. `nofail` = 'do mount me, but do not fail the boot over me'. You want the second, not the first, whenever the hardware is optional rather than unwanted. The fields in order: what, where, what kind, how, dump, fsck — device, mount point, type, options, 0, pass.",
    "outputExample": "$ grep backup /etc/fstab\nUUID=f2b1c4d8-7a3e-4f19-9c02-1e5d6a8b3047 /mnt/backup ext4 defaults,nofail 0 2\n$ sudo mount -a\n$",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "disk7",
    "question": "`sudo umount /mnt/backup` refuses with `umount: /mnt/backup: target is busy.` You need to see exactly what is holding it: one row per open file, showing the command name, its PID, the owning user and the full path of the file it has open. What command lists them?",
    "answer": "sudo lsof /mnt/backup",
    "altAnswers": [
      "sudo lsof +D /mnt/backup"
    ],
    "explanation": "A filesystem cannot be detached while the kernel still has references into it — an open file descriptor, a process whose working directory is inside, a mapped executable or an active swap file all count, and any one of them produces EBUSY. `lsof` reads /proc/*/fd, /proc/*/maps and /proc/*/cwd for every process and prints one row per reference, so passing it a mount point lists every open file on that filesystem with the path that is pinning it. Run it as root or it only sees your own processes, which is the usual reason it comes back empty while umount still refuses. The most common culprit is a shell sitting in the directory — `cd` out of it and the mount frees itself.",
    "usage": "Whenever umount says busy, and equally when a filesystem shows as full but deleting files frees nothing: a deleted file held open still occupies blocks, and lsof marks it `(deleted)`.",
    "examples": [
      "sudo lsof /mnt/backup  # every open file on that filesystem, with paths",
      "sudo lsof +D /mnt/backup  # walk the directory tree instead, catching anything under it",
      "sudo fuser -vm /mnt/backup  # the terser alternative: users, PIDs and access type, no file paths",
      "sudo lsof -p 4851  # turn it round: everything one specific process has open",
      "sudo umount -l /mnt/backup  # last resort: detach from the tree now, free the device when the holders exit"
    ],
    "memoryTip": "lsof = 'ls open files' — it lists open files the way ls lists directory entries, and on Linux almost everything is a file, so sockets and pipes show up too. Give it a mount point and it filters to files on that filesystem. The ACCESS letters in its terser cousin fuser mean c = current directory, f = open file, e = running executable.",
    "outputExample": "$ sudo lsof /mnt/backup\nCOMMAND    PID   USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME\nbash      4102  alice  cwd    DIR   8,34     4096      2 /mnt/backup\nrsync     4851  alice    3w   REG   8,34 15482880 581524 /mnt/backup/2026-08-18/home.tar",
    "category": "DISKS & MOUNTS"
  },
  {
    "id": "net1",
    "question": "Your team's staging server at 10.20.30.40 stopped responding. What command sends three ICMP test packets to it and automatically stops, telling you if the network path is alive?",
    "answer": "ping -c 3 10.20.30.40",
    "explanation": "Sending a ping is like knocking on someone's door and listening for an answer. You tap the remote machine with tiny network messages and wait to hear back. If you get replies, the path between your computer and that machine is working. No reply usually means something is blocking or the machine is down.",
    "usage": "Verify network reachability to 10.20.30.40 by sending three packets and viewing round-trip latency and packet-loss statistics.",
    "examples": [
      "ping google.com  # run until Ctrl+C",
      "ping -c 4 192.168.1.1  # send 4 packets to the router, then stop",
      "ping -i 0.2 host  # 5 pings per second (root only below 0.2s)",
      "ping -s 1400 host  # large payload — useful for finding MTU issues",
      "ping6 ::1  # ping over IPv6 (or use `ping -6`)",
      "ping -c 4 google.com  # exactly 4 packets, then stop with summary"
    ],
    "memoryTip": "`ping` is named after sonar: a submarine pings a target and listens for the echo. Time between ping and echo = round-trip latency. No echo = no contact.",
    "outputExample": "$ ping -c 3 google.com\nPING google.com (142.250.185.46) 56(84) bytes of data.\n64 bytes from lga25s71-in-f14.1e100.net (142.250.185.46): icmp_seq=1 ttl=118 time=14.2 ms\n64 bytes from lga25s71-in-f14.1e100.net (142.250.185.46): icmp_seq=2 ttl=118 time=14.6 ms\n64 bytes from lga25s71-in-f14.1e100.net (142.250.185.46): icmp_seq=3 ttl=118 time=14.1 ms\n\n--- google.com ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max/mdev = 14.103/14.305/14.601/0.214 ms",
    "category": "NETWORKING"
  },
  {
    "id": "net2",
    "question": "Your laptop just connected to the office network. What command shows every network interface on the machine together with its current IP address and link state?",
    "answer": "ip addr show",
    "altAnswers": [
      "ip addr",
      "ip a"
    ],
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
    "question": "You need to download the Ubuntu 24.04 ISO from https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso to the current directory using a single command. Which command does this and also supports resuming if interrupted?",
    "answer": "wget https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso",
    "altAnswers": [
      "aria2c <url>",
      "curl -LOC - <url>",
      "curl -O -C - https://releases.ubuntu.com/.../ubuntu-24.04-desktop-amd64.iso",
      "curl -O https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso",
      "wget https://releases.example.com/app-v2.1.tar.gz",
      "wget https://releases.ubuntu.com/.../ubuntu-24.04-desktop-amd64.iso"
    ],
    "explanation": "Think of this command as a download manager you control from the terminal. You give it a web address and it saves the file to your current folder, showing a progress bar. If the download gets cut off partway through, you can re-run it with a resume flag and it picks up where it left off instead of starting over.",
    "usage": "Download the Ubuntu 24.04 ISO to the current directory, resuming any previous partial download with `-c` if the connection drops.",
    "examples": [
      "wget https://example.com/file.zip  # save as file.zip in current dir",
      "wget -c https://releases.ubuntu.com/24.04/ubuntu-24.04-desktop-amd64.iso  # resume an interrupted download",
      "wget -O myname.tar.gz https://example.com/release.tar.gz  # rename on save",
      "wget -q -O- https://example.com/index.html | grep title  # print to stdout, no progress",
      "wget -r -np -k https://site.com/docs/  # mirror docs subtree (no parent, fix links)",
      "curl -O https://releases.example.com/app-v2.1.tar.gz  # saves as app-v2.1.tar.gz"
    ],
    "memoryTip": "`wget` = 'web get' — defaults to SAVE to file. Mirror-image of `curl` which defaults to PRINT to stdout. `wget -c` resumes; `wget -O-` makes it act like curl. If neither is installed: `sudo apt install wget` or `sudo dnf install wget`.",
    "outputExample": "$ wget https://example.com/file.zip\n--2026-05-15 14:32:10--  https://example.com/file.zip\nResolving example.com (example.com)... 93.184.216.34\nConnecting to example.com (example.com)|93.184.216.34|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 4194304 (4.0M) [application/zip]\nSaving to: 'file.zip'\n\nfile.zip          100%[==============>]   4.00M  12.5MB/s    in 0.3s\n\n2026-05-15 14:32:10 (12.5 MB/s) - 'file.zip' saved [4194304/4194304]",
    "category": "NETWORKING"
  },
  {
    "id": "net4",
    "question": "You built a new binary at ~/code/myapp/dist/server and need to send it to the deploy user on web1.example.com so it lands in /opt/myapp/. What single command accomplishes this over an encrypted connection?",
    "answer": "scp ~/code/myapp/dist/server deploy@web1.example.com:/opt/myapp/",
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
    "category": "NETWORKING",
    "altAnswers": [
      "rsync -av ~/code/myapp/dist/server deploy@web1.example.com:/opt/myapp/",
      "rsync -e ssh ...",
      "sftp deploy@web1.example.com <<< 'put ...'"
    ]
  },
  {
    "id": "net5",
    "question": "You need to log into the remote host web1.example.com as the user deploy to run administrative commands. What command opens an encrypted interactive shell on that machine?",
    "answer": "ssh deploy@web1.example.com",
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
    "altAnswers": [
      "lsof -i -P -n -sTCP:LISTEN",
      "netstat -tulnp",
      "ss -lntp | grep :80",
      "ss -ltnp",
      "ss -tlnp",
      "ss -tulnp",
      "ss -tulpn"
    ],
    "explanation": "Every service that accepts network connections is like a business with a street address (port number). This command lists all the \"open for business\" addresses and shows you which program is sitting at each one — so you can see immediately whether port 80 is already claimed before you try to start something new there.",
    "usage": "List every TCP port currently in the LISTEN state along with the process name and PID holding each socket.",
    "examples": [
      "sudo netstat -tlnp  # listening TCP ports + owning process — the classic combo",
      "sudo netstat -tulnp  # add UDP too",
      "sudo ss -tlnp  # modern replacement (preferred — faster, fewer dependencies)",
      "sudo ss -tlnp 'sport = :80'  # only port 80 listeners",
      "sudo lsof -i :443  # alternative: who's using port 443?",
      "sudo ss -tulnp  # add UDP listeners too"
    ],
    "memoryTip": "`netstat -tlnp` mnemonic: 'TCP Listening Numeric Process'. Modern equivalent: `ss -tlnp` (Socket Statistics — same flags). If neither is installed: `sudo apt install net-tools` or `iproute2`. Alternative for 'who's on port X?': `sudo lsof -i :X` or `sudo fuser X/tcp`.",
    "outputExample": "$ sudo netstat -tlnp\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address      Foreign Address  State    PID/Program name\ntcp        0      0 127.0.0.1:631      0.0.0.0:*        LISTEN   1234/cupsd\ntcp        0      0 0.0.0.0:22         0.0.0.0:*        LISTEN   1456/sshd\ntcp        0      0 0.0.0.0:80         0.0.0.0:*        LISTEN   2104/nginx: master\ntcp6       0      0 :::22              :::*             LISTEN   1456/sshd",
    "category": "NETWORKING"
  },
  {
    "id": "net7",
    "question": "A colleague reports that api.example.com is unreachable. You want to confirm what IP address that hostname currently resolves to using the simplest available DNS query tool. What command do you run?",
    "answer": "nslookup api.example.com",
    "altAnswers": [
      "dig +short api.example.com",
      "dig api.example.com",
      "getent hosts api.example.com",
      "host api.example.com",
      "ping -c1 api.example.com"
    ],
    "explanation": "Every website name like \"api.example.com\" is secretly an IP address in disguise. This command asks your DNS server — the internet's phone book — to look up what number goes with that name, and also tells you which phone book it asked so you know whether your local network's DNS is involved.",
    "usage": "Resolve api.example.com to its current IP address and display which DNS server answered the query.",
    "examples": [
      "nslookup google.com  # default DNS answers with the A record",
      "nslookup google.com 8.8.8.8  # query Google's public DNS specifically",
      "nslookup -type=mx gmail.com  # mail exchanger records",
      "nslookup -type=txt example.com  # TXT records (SPF, DMARC, verification)",
      "dig +short example.com  # alternative — terser output, one IP per line",
      "dig +short example.com MX  # mail exchanger records only"
    ],
    "memoryTip": "`nslookup` = Name Server LOOKUP. Modern preference: `dig` (more detailed) or `host` (terser). Two-line check: `nslookup domain` then `nslookup domain 8.8.8.8` — if first fails and second works, your local DNS resolver is broken, not the world.",
    "outputExample": "$ nslookup google.com\nServer:         192.168.1.1\nAddress:        192.168.1.1#53\n\nNon-authoritative answer:\nName:   google.com\nAddress: 142.250.185.46\nName:   google.com\nAddress: 2607:f8b0:4006:80f::200e\n\n$ nslookup -type=mx gmail.com 8.8.8.8\nServer:         8.8.8.8\nAddress:        8.8.8.8#53\n\nNon-authoritative answer:\ngmail.com       mail exchanger = 5 gmail-smtp-in.l.google.com.\ngmail.com       mail exchanger = 10 alt1.gmail-smtp-in.l.google.com.",
    "category": "NETWORKING"
  },
  {
    "id": "net9",
    "question": "You deployed a new microservice on web1.example.com and need to verify that port 9090 is actually accepting TCP connections from your laptop. What classic command lets you test whether that port accepts a connection?",
    "answer": "telnet web1.example.com 9090",
    "altAnswers": [
      "curl -v telnet://web1.example.com:9090",
      "nc -vz web1.example.com 9090",
      "nc -zv web1.example.com 9090",
      "timeout 3 bash -c '</dev/tcp/web1.example.com/9090'"
    ],
    "explanation": "This command is like walking up to a door and testing whether the doorbell works. You knock on a specific port on a remote machine and immediately find out whether someone is listening there or whether the door is locked (the port is closed or firewalled).",
    "usage": "Verify that TCP port 9090 on web1.example.com is accepting connections from your workstation.",
    "examples": [
      "telnet google.com 443  # is 443 open? exit with Ctrl+] then 'quit'",
      "nc -zv google.com 443  # modern: just reports success/failure, no interactive shell",
      "nc -zv host 1-1000  # scan a range of ports",
      "echo 'GET / HTTP/1.0' | nc google.com 80  # manual HTTP request",
      "curl -v telnet://host:port  # one more way to do the same check",
      "nc -zv -w 2 host 22  # SSH check with 2-second timeout"
    ],
    "memoryTip": "`telnet` as a LOGIN tool is dead (use ssh). `telnet HOST PORT` as a 'is the port open?' tester is still useful. Modern equivalent: `nc -zv HOST PORT` (cleaner, scriptable). Inside an interactive telnet session, escape with `Ctrl+]` then type `quit`.",
    "outputExample": "$ telnet google.com 443\nTrying 142.250.185.46...\nConnected to google.com.\nEscape character is '^]'.\n^]\ntelnet> quit\nConnection closed.\n\n$ nc -zv google.com 443\nConnection to google.com (142.250.185.46) 443 port [tcp/https] succeeded!\n\n$ nc -zv google.com 9999\nnc: connect to google.com port 9999 (tcp) failed: Connection refused",
    "category": "NETWORKING"
  },
  {
    "id": "net10",
    "question": "Your web server is under heavy load and you need to see every active TCP connection — not just listening ports, but all established sessions — along with the process owning each socket. What command does this?",
    "answer": "sudo ss -antp",
    "altAnswers": [
      "netstat -antp",
      "netstat -tanp",
      "ss -tanp",
      "ss -tanp | grep ESTAB",
      "ss -tp",
      "ss -tp state established",
      "ss -tunap"
    ],
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
    "id": "net12",
    "question": "An IP address 203.0.113.55 appeared in your nginx access log and you want to know what hostname it belongs to. What is the fastest one-line DNS tool for this reverse lookup?",
    "answer": "host 203.0.113.55",
    "altAnswers": [
      "dig -x 203.0.113.55",
      "dig -x 203.0.113.55 +short",
      "nslookup 203.0.113.55"
    ],
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
    "outputExample": "$ host google.com\ngoogle.com has address 142.250.185.46\ngoogle.com has IPv6 address 2607:f8b0:4004:81d::200e\ngoogle.com mail is handled by 10 smtp.google.com.\n$ host 8.8.8.8\n8.8.8.8.in-addr.arpa domain name pointer dns.google.\n$ host -t MX gmail.com\ngmail.com mail is handled by 5 gmail-smtp-in.l.google.com.\ngmail.com mail is handled by 10 alt1.gmail-smtp-in.l.google.com.\n$ host -t TXT example.com\nexample.com descriptive text \"_k2n1y4vw3qtb4skdx9e7dxt97qrmmq9\"\nexample.com descriptive text \"v=spf1 -all\"",
    "category": "NETWORKING"
  },
  {
    "id": "net13",
    "question": "API calls from your office to api.partner.com are slow and you need to find which router hop along the path is introducing the latency. What command reveals every network hop between you and the destination?",
    "answer": "traceroute api.partner.com",
    "altAnswers": [
      "mtr api.partner.com",
      "tracepath api.partner.com"
    ],
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
    "question": "After changing a cable on the server, eth0 no longer shows LOWER_UP in its flags. You want to toggle the interface off and back on to reset the link. After taking it down with 'sudo ip link set eth0 down', what command brings it back up?",
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
    "answer": "ip route get 10.10.5.20",
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
    "outputExample": "$ ip route get 8.8.8.8\n8.8.8.8 via 192.168.1.1 dev wlan0 src 192.168.1.42 uid 1000\n    cache\n$ ip route get 10.10.5.20\n10.10.5.20 via 10.8.0.1 dev tun0 src 10.8.0.42 uid 1000\n    cache\n$ ip rule list\n0:      from all lookup local\n100:    from 10.8.0.0/24 lookup vpn\n32766:  from all lookup main\n32767:  from all lookup default",
    "category": "NETWORKING"
  },
  {
    "id": "net16",
    "question": "You suspect a microservice is sending unexpected outbound requests. What command lets you capture every packet crossing eth0 and save it to /tmp/capture.pcap for later inspection in Wireshark?",
    "answer": "tcpdump -i eth0 -w /tmp/capture.pcap",
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
    "answer": "sudo ip addr add 10.10.0.100/24 dev eth0",
    "altAnswers": [
      "ip a add 10.10.0.100/24 dev eth0"
    ],
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
    "id": "net19",
    "question": "You need to call the GitHub REST API at https://api.github.com from a cron job, follow any redirects, suppress the progress bar, but still exit with a non-zero code if the server returns a 4xx or 5xx status. What curl flag combination achieves this?",
    "answer": "curl -fsSL https://api.github.com",
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
    "outputExample": "$ curl -I https://example.com\nHTTP/2 200\ncontent-type: text/html; charset=UTF-8\ncontent-length: 1256\ndate: Sun, 17 May 2026 14:35:22 GMT\nlast-modified: Thu, 17 Oct 2019 07:18:26 GMT\n\n$ curl -w '%{http_code} %{time_total}s %{size_download}b\\n' -o /dev/null -s https://example.com\n200 0.103s 1256b\n$ curl -fsS https://api.github.com/users/torvalds | jq -r '.public_repos'\n9",
    "category": "NETWORKING",
    "altAnswers": [
      "curl --fail --silent --location https://api.github.com",
      "curl -fsL https://api.github.com",
      "curl -sSfL https://api.github.com",
      "curl -sfL https://api.github.com"
    ]
  },
  {
    "id": "net20",
    "question": "You changed an A record for staging.example.com and need to verify the new IP is returning correctly from Google's public resolver (8.8.8.8) before announcing the change. What command queries that specific resolver with full detail?",
    "answer": "dig @8.8.8.8 staging.example.com",
    "altAnswers": [
      "dig staging.example.com @8.8.8.8"
    ],
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
    "outputExample": "$ dig +short google.com\n142.250.185.46\n$ dig google.com MX +short\n10 smtp.google.com.\n$ dig google.com\n; <<>> DiG 9.18.28 <<>> google.com\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345\n;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1\n\n;; QUESTION SECTION:\n;google.com.\t\t\tIN\tA\n\n;; ANSWER SECTION:\ngoogle.com.\t\t300\tIN\tA\t142.250.185.46\n\n;; Query time: 14 msec\n;; SERVER: 192.168.1.1#53(192.168.1.1) (UDP)\n;; WHEN: Sun May 17 14:35:22 UTC 2026\n;; MSG SIZE  rcvd: 55",
    "category": "NETWORKING"
  },
  {
    "id": "net22",
    "question": "A REST API at https://api.example.com/orders expects a POST request with a `Content-Type: application/json` header and the exact JSON body `{\"order_id\":\"ORD-9981\"}`. Using curl's `-X`, `-H`, and `-d` flags in that order (URL last), how do you send that request and see the response?",
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
    "question": "You are on your laptop and need to reach an internal web server at 10.10.5.20:80 that is only accessible from the jump host gateway.example.com, where your username is `alice`. How do you make that internal server available at localhost:8080 on your laptop?",
    "answer": "ssh -L 8080:10.10.5.20:80 alice@gateway.example.com",
    "explanation": "This command creates a secure tunnel so that anything you open at port 8080 on your own machine gets forwarded through the SSH server to the internal machine on its network. It's like running a secret pipe from your laptop to a machine you can't normally reach.",
    "usage": "Forward a local port through an SSH jump host to reach an otherwise-unreachable internal service.",
    "examples": [
      "ssh -L 8080:10.10.5.20:80 alice@gateway.example.com  # browse localhost:8080 to reach internal server",
      "ssh -L 5432:db.internal:5432 -N -f alice@gateway.example.com  # background Postgres tunnel"
    ],
    "memoryTip": "`-L` = Local port forwarding; traffic flows Local → SSH server → destination",
    "outputExample": "$ ssh -L 8080:10.10.5.20:80 -N alice@gateway.example.com &\n[1] 84021\n# Now open http://localhost:8080 in your browser",
    "category": "NETWORKING"
  },
  {
    "id": "net24",
    "question": "You want to let a colleague on the internet reach your local development server running on port 3000, by exposing it through the public SSH server remote.example.com where your username is `alice`. How do you expose your local port 3000 as port 9000 on that remote SSH server?",
    "answer": "ssh -R 9000:localhost:3000 alice@remote.example.com",
    "explanation": "This command punches a hole outward through a firewall. Your local machine connects to a remote server and tells it: whenever someone connects to your port 9000, send that traffic back to my machine on port 3000.",
    "usage": "Expose a port on your local machine through a remote SSH server so outside parties can reach it.",
    "examples": [
      "ssh -R 9000:localhost:3000 alice@remote.example.com  # remote:9000 → local:3000",
      "ssh -R 9000:localhost:3000 -N -f alice@remote.example.com  # backgrounded tunnel"
    ],
    "memoryTip": "`-R` = Remote port forwarding; traffic flows Remote server → back to you",
    "outputExample": "$ ssh -R 9000:localhost:3000 -N alice@remote.example.com &\n# Colleague visits http://remote.example.com:9000 to see your local dev server",
    "category": "NETWORKING"
  },
  {
    "id": "net25",
    "question": "You just generated an SSH key pair on your laptop and want to log into deploy.example.com as user `alice` without a password from now on. What single command copies your default public key to that server?",
    "answer": "ssh-copy-id alice@deploy.example.com",
    "explanation": "This command copies the public half of your SSH key to the remote server and adds it to the list of keys allowed to log in. After running it once — using your password — you can SSH in without a password from then on.",
    "usage": "Install your SSH public key on a remote server to enable password-free login.",
    "examples": [
      "ssh-copy-id alice@deploy.example.com  # copies default public key",
      "ssh-copy-id -i ~/.ssh/deploy_ed25519.pub alice@deploy.example.com  # copies specific key"
    ],
    "memoryTip": "`ssh-copy-id` = copy my ID (public key) to the remote machine",
    "outputExample": "$ ssh-copy-id alice@deploy.example.com\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed.\nalice@deploy.example.com's password:\nNumber of key(s) added: 1\nNow try logging in: ssh 'alice@deploy.example.com'",
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
    "outputExample": "$ ip -s link show eth0\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff\n    RX:   bytes  packets errors dropped  missed   mcast\n    12917988756 10277128      0       6       0   45214\n    TX:   bytes  packets errors dropped carrier collsns\n      887845814   826164      0      20       0       0",
    "category": "NETWORKING",
    "altAnswers": [
      "cat /proc/net/dev",
      "ifconfig -a",
      "ip -s -s link",
      "ip -s link show",
      "netstat -i"
    ]
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
    "outputExample": "$ whois acme-bank.example.com\nNo match for domain \"ACME-BANK.EXAMPLE.COM\"\n# WHOIS records exist per REGISTERED domain, not per subdomain —\n# query the registrable name instead:\n$ whois example.com\nDomain Name: EXAMPLE.COM\nRegistrar: RESERVED-Internet Assigned Numbers Authority\nCreation Date: 1995-08-14T04:00:00Z\nRegistry Expiry Date: 2027-08-13T04:00:00Z\nName Server: ELLIOTT.NS.CLOUDFLARE.COM\nName Server: HERA.NS.CLOUDFLARE.COM",
    "category": "NETWORKING"
  },
  {
    "id": "net30",
    "question": "You are troubleshooting why a server at 192.168.1.50 is unreachable on the local network and want to check whether the machine's ARP table has an entry for that IP. Which command displays the neighbor/ARP table?",
    "answer": "ip neigh",
    "altAnswers": [
      "arp -a",
      "arp -n",
      "cat /proc/net/arp",
      "ip n",
      "ip neigh show",
      "ip neighbor"
    ],
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
    "id": "fw1",
    "question": "You have just been handed a Linux server whose host firewall is managed by ufw. You need to report whether that firewall is currently active and list the rules it is enforcing, in one command, without changing anything. What do you run?",
    "answer": "sudo ufw status",
    "altAnswers": [
      "sudo ufw status verbose",
      "sudo ufw status numbered"
    ],
    "explanation": "A host firewall filters packets at this machine's own network stack, independently of any router or cloud security group, so a service can be listening happily and still be unreachable. The status subcommand answers the two questions that matter in order: first a single line saying whether the ruleset is loaded at all, and then, only if it is, a table of rules with three columns -- To (the destination port or address on this host), Action, and From (the permitted source). Reading the rules requires root because the underlying netfilter tables are not world-readable; an unprivileged run refuses immediately rather than reporting an empty firewall.",
    "usage": "First thing to check when a service is listening but unreachable, and the standard before-and-after check when changing rules.",
    "examples": [
      "sudo ufw status  # active or inactive, plus the rule table",
      "sudo ufw status verbose  # adds logging level and the default incoming/outgoing policy",
      "sudo ufw status numbered  # prefixes each rule with an index, which delete takes",
      "sudo ufw show added  # the rules as they were typed, even while the firewall is inactive"
    ],
    "memoryTip": "ufw stands for Uncomplicated FireWall -- it is a front-end that writes netfilter rules for you, not a firewall in its own right. Read the status table right to left to make it click: From is who is allowed, To is what on this box they may reach. 'Anywhere' in either column is the tool's word for 0.0.0.0/0 and ::/0, in other words no restriction at all.",
    "outputExample": "$ sudo ufw status\nStatus: active\n\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW       Anywhere\n8080/tcp                   ALLOW       Anywhere",
    "category": "FIREWALL"
  },
  {
    "id": "fw2",
    "question": "A server's ufw rules have all been written and reviewed, but status still reports 'Status: inactive'. You need to load those rules now and have them come back automatically on every subsequent boot. What single command does both?",
    "answer": "sudo ufw enable",
    "altAnswers": [],
    "explanation": "Rules added while the firewall is inactive are recorded in the tool's own configuration but never pushed into the kernel, so nothing is filtered. Enabling does two separate things in one step: it loads the current ruleset into netfilter immediately, and it marks the service to start at boot so the rules survive a reboot. The obvious hazard is doing this over SSH -- if no rule permits port 22, the default deny-incoming policy takes effect the instant the ruleset loads and you lose the session, which is why the allow rule for your own access goes in before this command, never after. On an interactive terminal it warns about exactly that and asks for confirmation.",
    "usage": "Bringing a freshly configured host firewall into service, and re-arming it after a maintenance window where it was disabled.",
    "examples": [
      "sudo ufw enable  # load the rules now and arm the firewall at boot",
      "sudo ufw disable  # unload and stop it starting at boot, for a maintenance window",
      "sudo ufw reload  # re-apply the rules without the enable/disable round trip",
      "sudo ufw allow 22/tcp && sudo ufw enable  # keep your own SSH session alive across the switch"
    ],
    "memoryTip": "Split the word into its two effects -- enable now and enable at boot -- because that pairing is what distinguishes it from reload, which only affects the running ruleset. The SSH lockout is the lesson everyone learns once: write the allow rule first, enable second. Its exact inverse, disable, likewise clears both the running rules and the boot-time arming.",
    "outputExample": "$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup",
    "category": "FIREWALL"
  },
  {
    "id": "fw3",
    "question": "A new internal service listens on TCP port 8080 and remote clients are being dropped by the host firewall, which is managed by ufw. You need a rule permitting inbound connections to port 8080 over TCP only -- UDP on that port must stay blocked. What command adds it?",
    "answer": "sudo ufw allow 8080/tcp",
    "altAnswers": [
      "sudo ufw allow in 8080/tcp",
      "sudo ufw allow proto tcp to any port 8080"
    ],
    "explanation": "In the simple syntax a rule is a port with an optional protocol suffix, and the suffix is not decoration: give a bare port number and the tool writes two rules, one for TCP and one for UDP, because it cannot know which you meant. Appending /tcp restricts the rule to the one transport, which is what the requirement here demands. Direction defaults to incoming when none is given, so a plain allow is an ingress rule; egress needs the word out. A name can be used in place of the number -- the tool consults /etc/services -- but a name resolves to whatever that file says, so a number is the unambiguous form in a runbook.",
    "usage": "Opening a port for a newly deployed service, and the standard first step before enabling a firewall on a machine you reach over SSH.",
    "examples": [
      "sudo ufw allow 8080/tcp  # inbound TCP only; UDP 8080 stays blocked",
      "sudo ufw allow 8080  # bare port: opens both TCP and UDP -- usually more than intended",
      "sudo ufw allow from 10.0.0.0/8 to any port 8080 proto tcp  # restrict by source network",
      "sudo ufw allow 8080/tcp comment 'inventory API'  # annotate the rule for the next reader",
      "sudo ufw delete allow 8080/tcp  # remove it by restating the rule"
    ],
    "memoryTip": "Read the argument as port-slash-protocol, exactly the way the status table prints it back at you -- 8080/tcp in, 8080/tcp out. The trap worth memorising is that omitting the protocol is not a narrower rule but a wider one: no suffix means both transports. Direction follows the same 'unstated means inbound' default, since a host firewall's whole job is what arrives.",
    "outputExample": "$ sudo ufw allow 8080/tcp\nRule added\nRule added (v6)",
    "category": "FIREWALL"
  },
  {
    "id": "fw4",
    "question": "Legacy telnet on TCP port 23 must be blocked at a ufw-managed host firewall, and the security team requires that probes receive no reply whatsoever -- packets silently discarded, rather than answered with a TCP reset that would confirm the host exists. What command adds that rule?",
    "answer": "sudo ufw deny 23/tcp",
    "altAnswers": [
      "sudo ufw deny in 23/tcp",
      "sudo ufw deny proto tcp to any port 23"
    ],
    "explanation": "This tool offers two ways to refuse traffic and they differ in what the sender learns. deny compiles to a netfilter DROP target: the packet is discarded and nothing is sent back, so the client sits there until its own timeout expires and a scanner sees 'filtered' rather than a definite closed port. reject compiles to REJECT instead, and for TCP it adds --reject-with tcp-reset, so the sender gets an immediate RST and knows at once that the port is refused. Silence is the better default facing an untrusted network because it costs an attacker time and yields less information; a fast reject is kinder on a trusted LAN where a hanging client is the worse outcome.",
    "usage": "Blocking a specific legacy or management port on an internet-facing host, and overriding a broader allow rule for one source or port.",
    "examples": [
      "sudo ufw deny 23/tcp  # DROP: no reply at all, the prober waits for a timeout",
      "sudo ufw reject 23/tcp  # REJECT: sends a TCP reset, so the client fails immediately",
      "sudo ufw deny from 203.0.113.7  # block one source address across every port",
      "sudo ufw default deny incoming  # the policy every allow rule then punches holes in",
      "sudo ufw limit 22/tcp  # allow, but rate-limit repeat connections from one address"
    ],
    "memoryTip": "Deny is the cold shoulder, reject is the slammed door -- both keep the visitor out, but only one lets them hear anything. Tie each to its netfilter target and the behaviour follows: deny becomes DROP (silence, sender times out), reject becomes REJECT (a reset arrives instantly). Separately, remember default deny incoming is the policy, while these are the individual rules layered on top.",
    "outputExample": "$ sudo ufw deny 23/tcp\nRule added\nRule added (v6)",
    "category": "FIREWALL"
  },
  {
    "id": "fw5",
    "question": "Before touching anything on an unfamiliar host you want to see the kernel's actual filter-table rules exactly as they stand, with every address and port left as raw numbers rather than reverse-resolved into hostnames and service names -- the resolution stalls for seconds per rule when the DNS server is unreachable. What command lists them?",
    "answer": "sudo iptables -L -n",
    "altAnswers": [
      "sudo iptables -nL",
      "sudo iptables -n -L",
      "sudo iptables --list --numeric",
      "sudo iptables -L -n -t filter"
    ],
    "explanation": "This is the layer underneath any front-end: whatever tool wrote the rules, they end up as netfilter entries and this is how you read them raw. -L lists the chains of one table, defaulting to filter, which holds the three chains that decide the fate of packets -- INPUT for traffic addressed to this host, FORWARD for traffic routed through it, OUTPUT for traffic it originates. Each chain line names its default policy, the fallback applied when no rule matches. -n disables the reverse lookups that would otherwise turn 0.0.0.0/0 into 'anywhere' and 22 into 'ssh': cosmetic when DNS is healthy, but each lookup blocks, so on a host that cannot reach a resolver the listing crawls. Reading the tables needs root.",
    "usage": "Auditing what is really in force on a host, and confirming that a front-end wrote the rules you expected -- or finding rules that no front-end knows about.",
    "examples": [
      "sudo iptables -L -n  # every filter chain, numeric addresses and ports",
      "sudo iptables -L INPUT -n  # narrow it to the chain that governs inbound traffic",
      "sudo iptables -L -n -v  # add packet and byte counters, to see which rules actually match",
      "sudo iptables -L INPUT -n --line-numbers  # index each rule, for -D and -I by position",
      "sudo iptables -S  # print the rules as the iptables commands that would recreate them"
    ],
    "memoryTip": "Two flags, two independent jobs: -L is List, -n is Numeric. Keep them separate in your head, because -n is the one that saves you on a broken network -- without it every address and port is handed to the resolver, and each lookup blocks the listing. Learn the three filter chains by where the packet is going: INPUT to me, OUTPUT from me, FORWARD through me.",
    "outputExample": "$ sudo iptables -L -n\nChain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:22\nDROP       all  --  10.0.0.0/8           0.0.0.0/0\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination",
    "category": "FIREWALL"
  },
  {
    "id": "ssh1",
    "question": "You already have a personal key at ~/.ssh/id_ed25519 and must not overwrite it. For a CI deploy account you need a second ed25519 key pair written to ~/.ssh/deploy_key (with the public half beside it as ~/.ssh/deploy_key.pub), and ssh-keygen must not stop to ask you where to save it. What command generates that pair?",
    "answer": "ssh-keygen -t ed25519 -f ~/.ssh/deploy_key",
    "altAnswers": [
      "ssh-keygen -f ~/.ssh/deploy_key -t ed25519"
    ],
    "explanation": "`-t ed25519` picks the signature algorithm: a fixed 256-bit elliptic-curve key that is short, fast to verify and needs no key-size argument, unlike RSA. `-f` names the output path, and ssh-keygen derives the public file by appending `.pub` — so one flag produces both halves and, crucially, suppresses the interactive 'Enter file in which to save the key' prompt whose default would have been id_ed25519. You are still prompted twice for a passphrase; that encrypts the private file at rest, and pressing Enter twice leaves it unencrypted, which is what unattended CI usually needs. Only the public half ever leaves your machine.",
    "usage": "Giving each purpose its own key — one per server, per deploy pipeline or per laptop — so that revoking one does not lock you out of everything else.",
    "examples": [
      "ssh-keygen -t ed25519 -f ~/.ssh/deploy_key  # named pair, no prompt for the location",
      "ssh-keygen -t ed25519 -C 'deploy@ci'  # default location, with a comment to identify the key later",
      "ssh-keygen -t ed25519 -f ~/.ssh/deploy_key -N ''  # no passphrase, without being asked, for automation",
      "ssh-keygen -y -f ~/.ssh/deploy_key  # regenerate the public half from a private key you still have",
      "ssh-keygen -lf ~/.ssh/deploy_key.pub  # print the key's fingerprint, to compare with what a server reports"
    ],
    "memoryTip": "Read the flags as questions: `-t` = type (which algorithm), `-f` = file (where to write it), `-C` = comment (what to call it), `-N` = new passphrase. Ed25519 over RSA by default: it is a fixed strong size, so there is no key-length flag to get wrong, and it produces a public key short enough to fit on one line.",
    "outputExample": "$ ssh-keygen -t ed25519 -f ~/.ssh/deploy_key\nGenerating public/private ed25519 key pair.\nEnter passphrase for \"/home/alice/.ssh/deploy_key\" (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /home/alice/.ssh/deploy_key\nYour public key has been saved in /home/alice/.ssh/deploy_key.pub\nThe key fingerprint is:\nSHA256:rnTJa4bsFOcZJr++Z5OEUTn1SCLJ2l6xZN1XJnllxRs alice@laptop",
    "category": "SSH & KEYS"
  },
  {
    "id": "ssh2",
    "question": "The deploy key you just generated has its public half at ~/.ssh/deploy_key.pub. You want that one key appended to ~/.ssh/authorized_keys for the `deploy` account on web1.example.com — that key specifically, not whichever public keys happen to be lying in your ~/.ssh. Password login to that account still works for now. What command installs it?",
    "answer": "ssh-copy-id -i ~/.ssh/deploy_key.pub deploy@web1.example.com",
    "altAnswers": [
      "ssh-copy-id -i ~/.ssh/deploy_key deploy@web1.example.com"
    ],
    "explanation": "Public-key auth needs your public key listed in the target account's ~/.ssh/authorized_keys, and getting it there by hand means copying a long line, creating ~/.ssh if it is missing and setting 700 on the directory and 600 on the file — every one of which is easy to get wrong. ssh-copy-id logs in over ordinary ssh (so this is the last time you type the password), creates the directory with the right modes, appends the key and skips keys already present. `-i` names which key to install: without it the script picks the most recently modified id*.pub in your ~/.ssh, which on a machine with several keys is a coin flip. It accepts either the .pub path or the private key path, appending .pub itself.",
    "usage": "The first thing you do on any new server account, and the step that lets you then disable password authentication in sshd_config with confidence.",
    "examples": [
      "ssh-copy-id -i ~/.ssh/deploy_key.pub deploy@web1.example.com  # install this one key",
      "ssh-copy-id deploy@web1.example.com  # install the newest id*.pub it finds in ~/.ssh",
      "ssh-copy-id -p 2222 -i ~/.ssh/deploy_key.pub deploy@web1.example.com  # when sshd listens on a non-default port",
      "ssh-copy-id -n -i ~/.ssh/deploy_key.pub deploy@web1.example.com  # dry run: show what would be installed, change nothing",
      "ssh -i ~/.ssh/deploy_key deploy@web1.example.com  # verify afterwards that the key alone gets you in"
    ],
    "memoryTip": "The name is the whole description: ssh-copy-id copies your identity to a host. Only the .pub half is ever sent — the private key must never leave your machine, and if a tool ever asks you to upload one, something is wrong. Remember `-i` = identity, the same letter ssh itself uses to choose a key.",
    "outputExample": "$ ssh-copy-id -i ~/.ssh/deploy_key.pub deploy@web1.example.com\n/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: \"/home/alice/.ssh/deploy_key.pub\"\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys\ndeploy@web1.example.com's password:\n\nNumber of key(s) added: 1",
    "category": "SSH & KEYS"
  },
  {
    "id": "ssh3",
    "question": "You restored ~/.ssh/deploy_key from a backup that flattened permissions. ssh now prints `WARNING: UNPROTECTED PRIVATE KEY FILE!`, ignores the key and falls back to asking for a password. `ls -l` shows the file as `-rw-r--r--`. What command gives that file the owner-read-write, nothing-for-anyone-else mode ssh insists on?",
    "answer": "chmod 600 ~/.ssh/deploy_key",
    "altAnswers": [
      "chmod 0600 ~/.ssh/deploy_key",
      "chmod u=rw,go= ~/.ssh/deploy_key",
      "chmod go-rwx ~/.ssh/deploy_key",
      "chmod u+rw,go-rwx ~/.ssh/deploy_key"
    ],
    "explanation": "Before using an identity file ssh stats it and refuses outright if the group or other bits allow read access — a private key readable by anyone else on a shared machine is already compromised, and ssh would rather fail loudly than let you carry on believing the key is secret. `-rw-r--r--` is mode 644: the two trailing 4s are what it objects to. 600 is read+write for the owner (4+2) and nothing for group or other, so the check passes. The same applies to ~/.ssh itself, which must not be group- or world-writable (700 is the safe value). Note it is only the private key that is fussy: the .pub half is meant to be public and 644 on it is fine.",
    "usage": "After restoring keys from a backup, copying them off a FAT-formatted USB stick (which has no Unix permissions at all), unpacking them from an archive, or cloning a dotfiles repo — all of which lose or flatten the original modes.",
    "examples": [
      "chmod 600 ~/.ssh/deploy_key  # owner read+write only, what ssh demands of a private key",
      "chmod 700 ~/.ssh  # the directory must not be group- or world-writable either",
      "chmod 644 ~/.ssh/deploy_key.pub  # the public half is meant to be readable; this is fine",
      "ls -l ~/.ssh  # check the modes before ssh does it for you",
      "ssh -v -i ~/.ssh/deploy_key deploy@web1.example.com  # verbose output naming each key it offers and why one is skipped"
    ],
    "memoryTip": "Octal digits are owner-group-other, and each is read 4 + write 2 + execute 1. So 600 = 6 for you (4+2 = read+write), 0 for the group, 0 for everyone else — 'mine, and nobody else's'. Directories need the execute bit to be enterable, which is why ~/.ssh is 700 while the key inside it is 600.",
    "outputExample": "$ ssh -i ~/.ssh/deploy_key deploy@web1.example.com\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0644 for '/home/alice/.ssh/deploy_key' are too open.\nIt is required that your private key files are NOT accessible by others.\nThis private key will be ignored.\nLoad key \"/home/alice/.ssh/deploy_key\": bad permissions",
    "category": "SSH & KEYS"
  },
  {
    "id": "ssh4",
    "question": "Your ~/.ssh/config contains a block reading `Host web1` with `HostName 203.0.113.10`, `User deploy`, `Port 2222` and `IdentityFile ~/.ssh/deploy_key` under it. You want an interactive shell on that machine, naming only the alias on the command line and letting the config supply the user, the address, the port and the key. What do you type?",
    "answer": "ssh web1",
    "explanation": "ssh reads ~/.ssh/config before it does anything else and matches the name you gave against each `Host` pattern in order. On the first match it adopts that block's keywords, so `web1` is expanded into user deploy, address 203.0.113.10, port 2222 and identity ~/.ssh/deploy_key — the alias is not a DNS name and does not need to resolve to anything. Because the settings are read from the file, every tool built on ssh inherits them for free: scp, rsync, git and ssh-copy-id all understand `web1` without being told the port or the key. `ssh -G web1` prints the fully resolved settings if you want to see exactly what a block expands to.",
    "usage": "Any host you reach more than twice, and essential for hosts with a non-default port, an unusual username or a dedicated key — it moves those details out of your shell history and into one file you can version-control.",
    "examples": [
      "ssh web1  # connect using every setting from the matching Host block",
      "ssh -G web1  # print the resolved settings without connecting, to debug a config block",
      "scp report.csv web1:/srv/  # scp reads the same config, so the port and key come along",
      "ssh web1 uptime  # run one command over the alias instead of opening a shell",
      "ssh -F /dev/null web1  # ignore the config entirely, to prove a problem is coming from it"
    ],
    "memoryTip": "The `Host` line is a nickname, not a hostname — `HostName` inside the block is the real address. Keep them straight and the file stops being confusing. First match wins and the file is read top to bottom, so put specific blocks above the catch-all `Host *` at the bottom.",
    "outputExample": "$ ssh -G web1 | grep -E '^(user|hostname|port) '\nuser deploy\nhostname 203.0.113.10\nport 2222\n$ ssh web1\ndeploy@web1:~$",
    "category": "SSH & KEYS"
  },
  {
    "id": "ssh5",
    "question": "sshd on web1.example.com listens on port 2222 and you have no Host alias defined for it. You need the local file backup.tar.gz copied into /srv/ on that host as the `deploy` user, using the file-copy program that ships inside OpenSSH itself rather than rsync. What single command performs the copy?",
    "answer": "scp -P 2222 backup.tar.gz deploy@web1.example.com:/srv/",
    "altAnswers": [
      "scp -P 2222 backup.tar.gz deploy@web1.example.com:/srv",
      "scp -P2222 backup.tar.gz deploy@web1.example.com:/srv/",
      "scp -P 2222 ./backup.tar.gz deploy@web1.example.com:/srv/"
    ],
    "explanation": "scp is ssh with a file-transfer protocol spoken over the encrypted channel, so it authenticates exactly like ssh — same keys, same known_hosts, same config file. The remote side is written `user@host:path`; the colon is what makes an argument remote rather than a local file called `deploy@web1.example.com`. The port flag is the trap: scp had already spent lowercase `-p` on 'preserve modification times and modes', inherited from `cp -p`, so the port had to take the capital `-P`. ssh itself has no such clash and uses lowercase `-p` for the port, which is why the two commands disagree and why `-p 2222` on scp silently means something else entirely.",
    "usage": "One-off transfers where rsync's delta algorithm buys nothing — shipping a build artefact, pulling a log file off a box, dropping a config onto a fresh host.",
    "examples": [
      "scp -P 2222 backup.tar.gz deploy@web1.example.com:/srv/  # local to remote on a non-default port",
      "scp -P 2222 deploy@web1.example.com:/var/log/app.log .  # the other direction: remote to local",
      "scp -r -P 2222 ./dist deploy@web1.example.com:/srv/  # copy a whole directory tree, recursively",
      "scp -p -P 2222 backup.tar.gz deploy@web1.example.com:/srv/  # both flags at once: preserve times, and port 2222",
      "rsync -avz -e 'ssh -p 2222' ./dist/ deploy@web1.example.com:/srv/dist/  # the resumable alternative for repeat transfers"
    ],
    "memoryTip": "Capital `-P` for scp, lowercase `-p` for ssh — the one flag difference that catches everyone. The reason is worth remembering because it makes it stick: scp is modelled on cp, and cp's `-p` already meant 'preserve attributes', so the port had to move up a case. Colon means remote: no colon, no network.",
    "outputExample": "$ scp -P 2222 backup.tar.gz deploy@web1.example.com:/srv/\ndeploy@web1.example.com's password:\nbackup.tar.gz                                 100%   20MB  85.3MB/s   00:00",
    "category": "SSH & KEYS"
  },
  {
    "id": "sum1",
    "question": "You have just downloaded an installer to /tmp/rocky-9.5.iso and the project's website prints a 64-character SHA-256 fingerprint beside the download link. Before you boot from it you want to print the file's own SHA-256 digest so you can compare the two by eye. What command prints it?",
    "answer": "sha256sum /tmp/rocky-9.5.iso",
    "altAnswers": [
      "openssl dgst -sha256 /tmp/rocky-9.5.iso",
      "shasum -a 256 /tmp/rocky-9.5.iso"
    ],
    "explanation": "SHA-256 reads every byte of the file and folds it into a fixed 256-bit value, printed as 64 hexadecimal characters. Flipping a single bit anywhere in the file changes roughly half the output bits, so the digest works as a fingerprint: the same bytes always produce the same 64 characters, on any machine, in any order of reading. Note what it does and does not prove — it proves your copy is byte-identical to the copy the publisher hashed; it proves nothing about who published the hash. If an attacker controls the download page, they control the hash on it too.",
    "usage": "Confirming a large download (ISO, tarball, firmware image) arrived intact and was not silently truncated or swapped out by a bad mirror.",
    "examples": [
      "sha256sum /tmp/rocky-9.5.iso  # 64 hex chars, two spaces, then the path you gave",
      "sha256sum *.iso  # one line per file, emitted in the order the arguments expand",
      "sha256sum < /tmp/rocky-9.5.iso  # reads stdin, so the name column shows - instead",
      "sha256sum -b /tmp/rocky-9.5.iso  # binary mode: the name is prefixed with an asterisk",
      "sha256sum /tmp/rocky-9.5.iso > SHA256SUMS  # save the line so -c can re-check it later"
    ],
    "memoryTip": "The name is the whole recipe: sha256 (the algorithm) plus sum (a checksum). Coreutils ships one binary per digest -- md5sum, sha1sum, sha256sum, sha512sum -- all taking identical flags, so learning one teaches you four. The 256 counts output bits, and since each hex character carries exactly 4 bits, 256/4 = the 64 characters you see.",
    "outputExample": "$ sha256sum /tmp/rocky-9.5.iso\nef8495dd104e33a863e15444029dd1d90c1b931565ae3d12c7f70832c3b51960  /tmp/rocky-9.5.iso",
    "category": "INTEGRITY"
  },
  {
    "id": "sum2",
    "question": "A vendor's decade-old download portal publishes only MD5 fingerprints, and you need to confirm that /tmp/legacy-backup.tar came off the tape without corruption. What command prints that file's MD5 digest in the same format the vendor lists?",
    "answer": "md5sum /tmp/legacy-backup.tar",
    "altAnswers": [
      "openssl dgst -md5 /tmp/legacy-backup.tar"
    ],
    "explanation": "MD5 folds the file into 128 bits, printed as 32 hex characters, and it is still perfectly good at catching accidents: a flipped bit from a bad cable or a decaying tape will not survive it. What it can no longer do is prove authenticity. Wang and Yu published a practical MD5 collision in 2004, and chosen-prefix collisions -- where an attacker starts from two documents they want and forces them to the same digest -- became cheap enough that the Flame malware used one in 2012 to forge a code-signing certificate. So a matching MD5 tells you nothing an attacker could not have arranged. Use it for corruption checks; use SHA-256 whenever the threat model includes a person.",
    "usage": "Matching a legacy vendor's published fingerprint, or spotting bit rot in an archive, where the only question is 'did these bytes survive the copy'.",
    "examples": [
      "md5sum /tmp/legacy-backup.tar  # 32 hex chars -- half the width of a sha256sum line",
      "md5sum -c MD5SUMS  # re-checks every file named in MD5SUMS, printing OK or FAILED",
      "sha256sum /tmp/legacy-backup.tar  # same interface, 64 chars, no known collisions",
      "md5sum /tmp/a /tmp/b  # equal digests here mean 'probably equal', never 'certainly equal'"
    ],
    "memoryTip": "MD stands for Message Digest -- Rivest's series ran MD2, MD4, MD5, and 5 was simply the fifth attempt. Remember the widths by their bit counts: MD5 is 128 bits = 32 hex characters, SHA-256 is 256 bits = 64. Rule of thumb: MD5 answers 'did the wire mangle this?', SHA-256 answers 'is this the file they meant to give me?'",
    "outputExample": "$ md5sum /tmp/legacy-backup.tar\nb427dc6b5d25fb8b167f8673b0505592  /tmp/legacy-backup.tar",
    "category": "INTEGRITY"
  },
  {
    "id": "sum3",
    "question": "The publisher of app-2.4.tgz ships a one-line checksum file, and you have saved it next to the download as /tmp/app-2.4.tgz.sha256. Standing in /tmp, rather than comparing 64 characters by eye you want the checksum tool to read that file, re-hash the name it lists, and report OK or FAILED. What command does that?",
    "answer": "sha256sum -c /tmp/app-2.4.tgz.sha256",
    "altAnswers": [
      "sha256sum --check /tmp/app-2.4.tgz.sha256"
    ],
    "explanation": "In check mode the tool stops hashing and starts parsing: it reads each 'DIGEST  NAME' line out of the file you hand it, recomputes the digest of NAME, and compares. You get a human-readable OK or FAILED per line, plus an exit status of 0 only if every line matched -- which is what makes it usable inside an if statement or a CI step. The classic trap is that NAME is resolved relative to your current working directory, not relative to the checksum file, so running this from the wrong directory reports 'No such file or directory' and FAILED open or read rather than a mismatch.",
    "usage": "Automating download verification in a provisioning script, where a human eyeballing hex is neither reliable nor scriptable.",
    "examples": [
      "sha256sum -c /tmp/app-2.4.tgz.sha256  # prints 'app-2.4.tgz: OK' and exits 0 on a match",
      "sha256sum -c --quiet SHA256SUMS  # suppresses the OK lines; FAILED lines still print",
      "sha256sum -c --status SHA256SUMS  # prints nothing at all, communicates via exit status",
      "sha256sum app-2.4.tgz > app-2.4.tgz.sha256  # produce the file that -c later consumes"
    ],
    "memoryTip": "Think of -c as 'check' rather than 'compute': without it the tool writes fingerprints, with it the tool reads them back and grades. It is the same asymmetry as a locksmith cutting a key versus trying it in the lock. The mnemonic for the trap: -c hashes names, and names are resolved from where you stand, so cd to the download directory first.",
    "outputExample": "$ sha256sum -c /tmp/app-2.4.tgz.sha256\napp-2.4.tgz: OK\n$ printf 'x\\n' >> app-2.4.tgz\n$ sha256sum -c /tmp/app-2.4.tgz.sha256\napp-2.4.tgz: FAILED\nsha256sum: WARNING: 1 computed checksum did NOT match",
    "category": "INTEGRITY"
  },
  {
    "id": "sum4",
    "question": "A distribution publishes one SHA256SUMS file covering all six of its images, but you downloaded only netinst.iso into that directory. A plain check reports the five absent images as 'FAILED open or read' and exits non-zero, which breaks your install script. Still using SHA256SUMS, what command verifies only the file you actually have?",
    "answer": "sha256sum -c --ignore-missing SHA256SUMS",
    "altAnswers": [
      "sha256sum --check --ignore-missing SHA256SUMS"
    ],
    "explanation": "Without the flag, every line in the manifest is treated as a promise: a name that cannot be opened is a failure, because a missing file is usually a real problem. --ignore-missing inverts that for the case where the manifest deliberately covers more than you downloaded -- lines whose file is absent are skipped entirely instead of counted as failures, so the exit status reflects only the files present. One safety note: if none of the listed files exist, older coreutils would report success on an empty set; current versions error with 'no file was verified', so a typo in the directory does not silently pass.",
    "usage": "Verifying a single ISO or package against a distro-wide manifest inside a Kickstart, Packer or CI pipeline, where the non-zero exit from absent siblings would abort the build.",
    "examples": [
      "sha256sum -c --ignore-missing SHA256SUMS  # checks netinst.iso, skips the five absentees",
      "sha256sum -c SHA256SUMS  # the strict form: every listed name must exist and match",
      "sha256sum -c --ignore-missing --status SHA256SUMS  # silent; branch on $? in a script",
      "grep netinst.iso SHA256SUMS | sha256sum -c -  # alternative: feed just the one line on stdin"
    ],
    "memoryTip": "Read the flag as a promise about absence, not about content: 'if it is missing, ignore it -- but if it is here, it had better match.' It never weakens the comparison, only the roll call. Pair it with --status when a script wants the verdict and none of the narration; pair it with --quiet when a human wants to see only the bad news.",
    "outputExample": "$ sha256sum -c SHA256SUMS\nsha256sum: dvd.iso: No such file or directory\ndvd.iso: FAILED open or read\nnetinst.iso: OK\nsha256sum: WARNING: 5 listed files could not be read\n$ sha256sum -c --ignore-missing SHA256SUMS\nnetinst.iso: OK",
    "category": "INTEGRITY"
  },
  {
    "id": "sum5",
    "question": "A config-management script renders a candidate file to /tmp/nginx.conf.new and must reload nginx only when it differs from the live /etc/nginx/nginx.conf. Inside the if condition you need a byte-for-byte comparison that prints absolutely nothing -- not even a 'files differ' line -- and reports the verdict purely through its exit status. What command goes in the condition?",
    "answer": "cmp -s /tmp/nginx.conf.new /etc/nginx/nginx.conf",
    "altAnswers": [
      "cmp --silent /tmp/nginx.conf.new /etc/nginx/nginx.conf",
      "cmp --quiet /tmp/nginx.conf.new /etc/nginx/nginx.conf",
      "cmp -s /etc/nginx/nginx.conf /tmp/nginx.conf.new"
    ],
    "explanation": "cmp walks both files one byte at a time and stops at the first difference, so it never has to build the line-by-line diff that diff computes -- it is the right tool when you only need equal-or-not, and it works on binaries where 'lines' are meaningless. The -s flag suppresses all normal output, leaving three distinct exit statuses to branch on: 0 for identical, 1 for a genuine difference, and 2 for trouble such as an unreadable or missing file. That third value matters here: a script that treats 'non-zero means changed' will reload nginx when the file is merely missing.",
    "usage": "Idempotent deploys and config management -- skip the service reload, the backup copy or the git commit when the rendered artifact is unchanged.",
    "examples": [
      "cmp -s a.conf b.conf  # silent; 0 identical, 1 differ, 2 error -- ideal for an if",
      "cmp a.conf b.conf  # loud form: reports the first differing byte and line number",
      "cmp -l a.conf b.conf  # lists every differing byte offset with both octal values",
      "cmp -n 512 a.img b.img  # compare only the first 512 bytes, e.g. a boot sector"
    ],
    "memoryTip": "cmp = compare, and it is the byte-level sibling of diff: diff tells you how to edit one file into the other, cmp only tells you whether you would need to. Remember -s as 'silent' (its long forms are literally --silent and --quiet). Three exit codes, three meanings: 0 same, 1 different, 2 something went wrong -- so test for 1 explicitly when the distinction matters.",
    "outputExample": "$ cmp -s /tmp/nginx.conf.new /etc/nginx/nginx.conf; echo $?\n1\n$ cmp /tmp/nginx.conf.new /etc/nginx/nginx.conf\n/tmp/nginx.conf.new /etc/nginx/nginx.conf differ: byte 18, line 1",
    "category": "INTEGRITY"
  },
  {
    "id": "pkg1",
    "question": "A fresh Ubuntu 24.04 server needs the git package installed for a CI pipeline. What command installs it from the official repositories?",
    "answer": "apt install git",
    "altAnswers": [
      "apt-get install git"
    ],
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
    "answer": "apt purge apache2",
    "altAnswers": [
      "apt-get purge apache2",
      "apt remove --purge apache2",
      "apt-get remove --purge apache2"
    ],
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
    "answer": "apt update",
    "altAnswers": [
      "apt-get update"
    ],
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
    "answer": "apt upgrade",
    "altAnswers": [
      "apt-get upgrade"
    ],
    "explanation": "After refreshing the catalog of available packages, this command compares what you have installed against what's available and installs the newer versions. It's the equivalent of pressing \"Update All\" in an app store — applying security patches, bug fixes, and new features across everything on the system.",
    "usage": "Install all available security patches and updates after running 'sudo apt update' on an Ubuntu server.",
    "examples": [
      "sudo apt update && sudo apt upgrade  # the standard combo",
      "sudo apt upgrade -y  # unattended (good in scripts/cron)",
      "sudo apt full-upgrade  # allow REMOVING packages to complete the upgrade",
      "sudo apt list --upgradable  # what WOULD upgrade — safe preview",
      "sudo apt install --only-upgrade nginx  # upgrade ONE package (--only-upgrade belongs to install; it refuses to install nginx if it isn't already there)",
      "[ -f /var/run/reboot-required ] && echo 'Reboot needed'  # post-upgrade check"
    ],
    "memoryTip": "`upgrade` = safe (keeps packages held back), `full-upgrade` = allows REMOVALS, more powerful but riskier. Compare with Fedora's `dnf upgrade` which does both refresh + install in one shot. Always preview with `apt list --upgradable` if you're nervous.",
    "outputExample": "$ sudo apt upgrade\nReading package lists... Done\nBuilding dependency tree... Done\nCalculating upgrade... Done\nThe following packages have been kept back:\n  ubuntu-drivers-common\nThe following packages will be upgraded:\n  bash bash-completion curl git libc-bin libc6 libssl3 openssl\n8 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.\nNeed to get 12.4 MB of archives.\nAfter this operation, 18.4 kB of additional disk space will be used.\nDo you want to continue? [Y/n]",
    "category": "PACKAGES"
  },
  {
    "id": "pkg5",
    "question": "You need a tool to convert Markdown files to HTML but don't know the package name. What command searches the package catalog for packages related to 'markdown'?",
    "answer": "apt search markdown",
    "altAnswers": [
      "apt-cache search markdown"
    ],
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
    "id": "pkg7",
    "question": "A deployment script needs to check whether the curl package is installed before attempting to download files. What pipeline confirms whether a package is installed and exits with a meaningful status code?",
    "answer": "dpkg -l | grep curl",
    "altAnswers": [
      "apt list --installed curl | grep -q curl",
      "command -v curl",
      "dpkg -l curl | grep -q '^ii'",
      "dpkg -l | grep -i curl",
      "dpkg-query -W -f='${Status}' curl | grep -q 'install ok installed'"
    ],
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
    "altAnswers": [
      "apt clean"
    ],
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
      "echo 'nginx hold' | sudo dpkg --set-selections  # alt low-level form",
      "sudo apt-mark unhold nginx mysql-server-8.0  # release several at once"
    ],
    "memoryTip": "`apt-mark hold` = FREEZE this package. Sibling commands: `unhold` (thaw), `auto`/`manual` (autoremove eligibility), `showhold`/`showauto`/`showmanual` (audit). Compare with Fedora `sudo dnf versionlock add PKG`.",
    "outputExample": "$ sudo apt-mark hold nginx\nnginx set on hold.\n$ apt-mark showhold\nnginx\n$ sudo apt upgrade\n...\nThe following packages have been kept back:\n  nginx\n0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded.",
    "category": "PACKAGES"
  },
  {
    "id": "pkg11",
    "question": "You downloaded the Google Chrome .deb file from Google's website to /tmp/google-chrome-stable_current_amd64.deb. What is the recommended command to install it, ensuring dependencies are resolved automatically?",
    "answer": "apt install /tmp/google-chrome-stable_current_amd64.deb",
    "altAnswers": [
      "apt-get install /tmp/google-chrome-stable_current_amd64.deb",
      "sudo apt install ./google-chrome-stable_current_amd64.deb",
      "sudo apt-get install -f ./google-chrome-stable_current_amd64.deb",
      "sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb && sudo apt -f install",
      "sudo gdebi /tmp/google-chrome-stable_current_amd64.deb"
    ],
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
    "outputExample": "$ sudo apt install /tmp/google-chrome-stable_current_amd64.deb\nReading package lists... Done\nNote, selecting 'google-chrome-stable' instead of '/tmp/google-chrome-stable_current_amd64.deb'\nThe following additional packages will be installed:\n  fonts-liberation libu2f-udev libvulkan1\nAfter this operation, 270 MB of additional disk space will be used.\nDo you want to continue? [Y/n] Y\nGet:1 http://archive.ubuntu.com/ubuntu noble/main amd64 libu2f-udev all 1.1.10-3 [9,160 B]\nSelecting previously unselected package google-chrome-stable.\nSetting up google-chrome-stable (124.0.6367.118-1) ...",
    "category": "PACKAGES"
  },
  {
    "id": "pkg12",
    "question": "Before removing libssl3 from a server, you need to know which other installed packages depend on it — removing it might break them. What command shows the reverse dependencies of a package?",
    "answer": "apt-cache rdepends libssl3",
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
    "answer": "add-apt-repository ppa:deadsnakes/ppa",
    "altAnswers": [
      "add-apt-repository -y ppa:deadsnakes/ppa",
      "add-apt-repository ppa:deadsnakes/ppa && apt update",
      "add-apt-repository ppa:deadsnakes/ppa && sudo apt update"
    ],
    "explanation": "A PPA is a personal software repository hosted by a developer or team that contains packages not in the official Ubuntu repositories — often newer versions. Adding one makes those packages available to APT as if they were in the official repos, and this command handles the whole process in one step.",
    "usage": "Add the deadsnakes PPA to install Python 3.12 on Ubuntu 22.04 and automatically update the package catalog.",
    "examples": [
      "sudo add-apt-repository ppa:deadsnakes/ppa  # add a PPA + auto-update",
      "sudo add-apt-repository --remove ppa:deadsnakes/ppa  # remove it cleanly",
      "sudo add-apt-repository 'deb https://download.docker.com/linux/ubuntu noble stable'  # arbitrary apt source",
      "sudo apt install software-properties-common  # provides add-apt-repository (if missing)",
      "ls /etc/apt/sources.list.d/  # see which third-party repos are active",
      "sudo apt update  # refresh metadata after removal"
    ],
    "memoryTip": "PPAs = Ubuntu-only third-party repos. `add-apt-repository` adds source file + key + auto-update in one command. SECURITY: anything you add can install root code on every `apt upgrade` — only add what you trust. Prefer the modern `signed-by=` pattern.",
    "outputExample": "$ sudo add-apt-repository ppa:deadsnakes/ppa\nThis PPA contains newer Python versions for various Ubuntu releases.\n More info: https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa\nPress [ENTER] to continue or Ctrl-c to cancel.\nHit:1 http://archive.ubuntu.com/ubuntu jammy InRelease\nGet:2 https://ppa.launchpadcontent.net/deadsnakes/ppa/ubuntu jammy InRelease [18.1 kB]\n...\nReading package lists... Done",
    "category": "PACKAGES"
  },
  {
    "id": "pkg16",
    "question": "What command lists every active (uncommented) repository line across /etc/apt/sources.list and /etc/apt/sources.list.d/?",
    "answer": "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list",
    "altAnswers": [
      "grep -r '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list"
    ],
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
    "outputExample": "$ grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list 2>/dev/null\n/etc/apt/sources.list.d/docker.list:deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable\n# On Ubuntu 24.04 that is the ONLY hit: the installer writes the distro\n# repos in DEB822 format, and /etc/apt/sources.list is left as a stub.\n$ grep -R -E '^(Types|URIs|Suites):' /etc/apt/sources.list.d/ubuntu.sources\nTypes: deb\nURIs: http://archive.ubuntu.com/ubuntu/\nSuites: noble noble-updates noble-backports",
    "category": "PACKAGES"
  },
  {
    "id": "pkg15",
    "question": "The command 'htop' is not found and you need to know which package provides the /usr/bin/htop binary. What command searches repository metadata to find which package ships a specific file path?",
    "answer": "apt-file search /usr/bin/htop",
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
    "id": "pkg18",
    "question": "You are about to migrate a Ubuntu 24.04 server to a new VM and need a manifest of every installed package. Which command lists all installed packages?",
    "answer": "apt list --installed",
    "altAnswers": [
      "dpkg --get-selections",
      "dpkg --list",
      "dpkg -l",
      "dpkg -l | awk '/^ii/{print $2}'",
      "dpkg-query -W -f='${binary:Package}\\n'",
      "dpkg-query -l"
    ],
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
    "altAnswers": [
      "apt list --upgradeable",
      "apt-get --simulate upgrade",
      "apt-get -s upgrade",
      "sudo apt upgrade --dry-run",
      "sudo apt-get --simulate dist-upgrade",
      "sudo apt-get -s upgrade"
    ],
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
    "question": "On a Debian-based system, what dpkg flag lists every file installed by the nginx package?",
    "answer": "dpkg -L nginx",
    "altAnswers": [
      "apt-file list nginx",
      "dpkg --listfiles nginx",
      "dpkg-query -L nginx",
      "pacman -Ql nginx",
      "rpm -ql nginx"
    ],
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
    "altAnswers": [
      "dpkg-query -S /usr/bin/nc",
      "dpkg --search /usr/bin/nc"
    ],
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
    "altAnswers": [
      "dpkg --configure --pending"
    ],
    "explanation": "When an installation is interrupted halfway through, packages can get stuck in a half-configured state that blocks all future package management. This command resumes and finishes the configuration step for every package that was left incomplete.",
    "usage": "Finish configuring packages left in a half-configured state after an interrupted installation.",
    "examples": [
      "sudo dpkg --configure -a  # finish all pending configurations",
      "sudo apt --fix-broken install  # more aggressive: can remove a problem package",
      "sudo apt-get -f install  # same as above, older syntax",
      "dpkg -l | grep -v ^ii  # find non-clean packages (not 'ii' state)",
      "sudo apt install --reinstall nginx  # if reconfigure keeps failing for one package",
      "sudo apt-get check  # quick health check"
    ],
    "memoryTip": "Two-phase install: UNPACK then CONFIGURE. If config phase breaks, `dpkg --configure -a` retries it. Status code `ii` in `dpkg -l` = healthy; anything else = potential trouble.",
    "outputExample": "$ sudo apt install curl\nE: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.\n$ sudo dpkg --configure -a\nSetting up nginx (1.24.0-2ubuntu7.3) ...\nProcessing triggers for man-db (2.12.0-1) ...\n$ sudo apt install curl  # now works",
    "category": "PACKAGES"
  },
  {
    "id": "pkg25",
    "question": "You want to read the source code for the curl package to understand how it was compiled and what patches Canonical applied. What command fetches and unpacks the source?",
    "answer": "apt source curl",
    "altAnswers": [
      "apt-get source curl"
    ],
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
    "id": "pkg27",
    "question": "You are choosing between nginx and apache2 and want to read the full description, version, dependencies, and homepage for nginx before installing. What command shows this information?",
    "answer": "apt show nginx",
    "altAnswers": [
      "apt info nginx",
      "apt-cache show nginx",
      "apt-cache showpkg nginx"
    ],
    "explanation": "This command shows the full information sheet for a package — its description, version, size, what other packages it needs, and a link to its project homepage. Read this before installing so there are no surprises about what gets pulled in alongside it.",
    "usage": "Display full package metadata — version, description, dependencies, and homepage — before installing.",
    "examples": [
      "apt show nginx  # candidate version only",
      "apt show -a nginx  # ALL available versions",
      "apt show nginx 2>/dev/null | grep -E '^(Version|Depends|Homepage)'  # key fields",
      "apt show nginx 2>/dev/null | grep ^Installed-Size  # disk usage",
      "apt-cache show nginx  # scripting-friendly equivalent (no stderr warning)",
      "apt show postgresql  # full metadata for the candidate version"
    ],
    "memoryTip": "`apt show` = read the box before buying. RHEL equivalent: `dnf info`. For scripts: `apt-cache show`. For installed package info only: `dpkg -s pkg`.",
    "outputExample": "$ apt show nginx 2>/dev/null\nPackage: nginx\nVersion: 1.24.0-2ubuntu7.3\nInstalled-Size: 96.3 kB\nDepends: nginx-core (= 1.24.0-2ubuntu7.3) | nginx-full (= 1.24.0-2ubuntu7.3)\nHomepage: https://nginx.net\nDescription: small, powerful, scalable web/proxy server",
    "category": "PACKAGES"
  },
  {
    "id": "rhel1",
    "question": "You just SSH'd into a fresh Fedora 40 server and need to install nginx. What dnf command installs it from the configured repositories?",
    "answer": "sudo dnf install nginx",
    "altAnswers": [
      "yum install nginx"
    ],
    "explanation": "This command downloads nginx and all its required dependencies from Fedora's package repositories and installs them. It shows you what it will install and asks for confirmation before making any changes.",
    "usage": "Install a package and all its dependencies from the configured dnf repositories on RHEL/Fedora.",
    "examples": [
      "sudo dnf install nginx  # interactive install with y/N prompt",
      "sudo dnf install -y vim git curl  # install three packages, no prompt",
      "sudo dnf install ./local-pkg.rpm  # install a downloaded RPM with dep resolution",
      "sudo dnf reinstall nginx  # reinstall to repair a broken/modified package"
    ],
    "memoryTip": "`dnf install` ~ `apt install`. Under the hood dnf calls `rpm`, the way apt calls `dpkg`.",
    "outputExample": "$ sudo dnf install nginx\nDependencies resolved.\nInstalling:\n nginx  x86_64  1:1.24.0-1.fc40  fedora  34 k\nInstalling dependencies:\n nginx-core  x86_64  1:1.24.0-1.fc40  fedora  579 k\nIs this ok [y/N]: y\nComplete!",
    "category": "RHEL/FEDORA"
  },
  {
    "id": "rhel2",
    "question": "You decommissioned the Apache httpd service and want to uninstall it and clean up any packages that were only installed as its dependencies. What command removes it?",
    "answer": "sudo dnf remove httpd",
    "altAnswers": [
      "dnf erase httpd",
      "sudo dnf autoremove httpd",
      "sudo dnf erase httpd",
      "sudo dnf remove httpd && sudo dnf autoremove",
      "yum remove httpd"
    ],
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
    "altAnswers": [
      "dnf update",
      "sudo dnf distro-sync",
      "sudo dnf update",
      "sudo dnf upgrade -y",
      "yum update",
      "yum upgrade"
    ],
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
    "altAnswers": [
      "yum search markdown"
    ],
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
    "altAnswers": [
      "yum info podman"
    ],
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
    "altAnswers": [
      "yum history",
      "dnf history list"
    ],
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
    "altAnswers": [
      "dnf provides '*/jq'",
      "dnf repoquery -f /usr/bin/jq",
      "dnf whatprovides /usr/bin/jq",
      "yum provides /usr/bin/jq",
      "yum whatprovides /usr/bin/jq"
    ],
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
    "question": "What single dnf command deletes all locally cached repository metadata and packages? (The next `dnf` run re-downloads metadata automatically.)",
    "answer": "sudo dnf clean all",
    "altAnswers": [
      "sudo dnf --refresh upgrade",
      "sudo dnf clean all; sudo dnf update --refresh",
      "sudo dnf clean metadata && sudo dnf makecache",
      "yum clean all"
    ],
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
    "question": "You need to set up a C/C++ build environment on a fresh Fedora server with gcc, make, autoconf, and related tools. Instead of installing them one-by-one, what command installs the whole \"Development Tools\" group?",
    "answer": "sudo dnf group install \"Development Tools\"",
    "altAnswers": [
      "dnf groupinstall \"Development Tools\"",
      "sudo dnf group install development-tools",
      "sudo dnf groupinstall \"Development Tools\"",
      "sudo dnf install \"@Development Tools\"",
      "sudo dnf install @development-tools",
      "yum group install \"Development Tools\"",
      "yum groupinstall \"Development Tools\""
    ],
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
    "explanation": "This command queries the local RPM database and prints the full name of every installed package — one per line, in name-version-release.architecture format. The epoch is not shown by default; ask for it explicitly with `rpm -qa --queryformat '%{EPOCH}:%{NAME}-%{VERSION}-%{RELEASE}.%{ARCH}\\n'` if you need it. It is the fastest way to get a complete package inventory on a Red Hat-family system.",
    "usage": "List every installed package on a RHEL/Fedora system with full version information.",
    "examples": [
      "rpm -qa | sort  # alphabetical full list",
      "rpm -qa | wc -l  # how many packages are installed",
      "rpm -qa | grep -i nginx  # is nginx installed?",
      "rpm -qa --queryformat '%{NAME}\\n' | sort  # names only",
      "rpm -qa --last | head  # 10 most recently installed"
    ],
    "memoryTip": "`rpm -qa` = Query All. Build vocabulary: `-q` = query, `-a` = all, `-f FILE` = file owner, `-l PKG` = list files, `-i PKG` = info. Debian equivalent: `dpkg -l`.",
    "outputExample": "$ rpm -qa | head -5\nbasesystem-11-20.fc40.noarch\nglibc-2.39-7.fc40.x86_64\nbash-5.2.26-3.fc40.x86_64\nsystemd-255.7-1.fc40.x86_64\nnginx-1.24.0-1.fc40.x86_64\n$ rpm -qa | wc -l\n812",
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
    "question": "Your app server listens on TCP port 8080 and you need to permanently open it through firewalld so it survives a reboot. What single command line (two firewall-cmd commands chained with &&) achieves this?",
    "answer": "sudo firewall-cmd --add-port=8080/tcp --permanent && sudo firewall-cmd --reload",
    "altAnswers": [
      "firewall-cmd --add-port=8080/tcp --permanent && firewall-cmd --reload",
      "sudo firewall-cmd --permanent --add-port=8080/tcp && sudo firewall-cmd --reload",
      "firewall-cmd --permanent --add-port=8080/tcp && firewall-cmd --reload"
    ],
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
    "altAnswers": [
      "cat /sys/fs/selinux/enforce",
      "sestatus",
      "sestatus | grep 'Current mode'"
    ],
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
    "question": "You copied website files from your home directory into /var/www/html/ but nginx is returning 403 Forbidden even though file permissions look correct and SELinux is enforcing. What command recursively fixes the SELinux file context labels on /var/www/html?",
    "answer": "sudo restorecon -Rv /var/www/html",
    "altAnswers": [
      "restorecon -R /var/www/html",
      "restorecon -vR /var/www/html",
      "restorecon -Rv /var/www/html/",
      "restorecon -R /var/www/html/"
    ],
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
    "outputExample": "$ ls -Z /var/www/html/index.html\nunconfined_u:object_r:user_home_t:s0 /var/www/html/index.html\n$ sudo restorecon -Rv /var/www/html\nRelabeled /var/www/html/index.html from unconfined_u:object_r:user_home_t:s0 to unconfined_u:object_r:httpd_sys_content_t:s0\n$ ls -Z /var/www/html/index.html\nunconfined_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html\n# restorecon fixes the TYPE; add -F if you also want the user part reset to system_u",
    "category": "RHEL/FEDORA"
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
      "free -h -t  # add a 'Total:' row (RAM + swap combined)",
      "free -s 2  # refresh every 2 seconds — watch usage change live (Ctrl+C to quit)"
    ],
    "memoryTip": "`free` answers 'how free is my RAM?'. Trick: look at `available`, not `free`. Linux philosophy: 'free RAM is wasted RAM' — the kernel caches aggressively, and `available` already accounts for cache it can reclaim.",
    "outputExample": "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:            15Gi       4.2Gi       512Mi       320Mi        10Gi        10Gi\nSwap:          2.0Gi          0B       2.0Gi",
    "category": "DAILY TIPS",
    "altAnswers": [
      "free",
      "free -m"
    ]
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
    "category": "DAILY TIPS",
    "altAnswers": [
      "ps aux | head -20",
      "ps aux | head -n 25",
      "ps aux | less",
      "ps aux | more"
    ]
  },
  {
    "id": "daily5",
    "question": "Your Ubuntu server hasn't been patched in two months. What single compound command both refreshes the list of available packages from the internet AND installs all upgrades that are waiting?",
    "answer": "sudo apt update && sudo apt upgrade",
    "altAnswers": [
      "sudo apt-get update && sudo apt-get upgrade"
    ],
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
    "altAnswers": [
      "sudo apt-get autoremove"
    ],
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
    "altAnswers": [
      "sudo apt-get autoclean"
    ],
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
    "altAnswers": [
      "ls -al",
      "ls -lah"
    ],
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
    "explanation": "This command reads the project's package.json file, resolves every package listed under dependencies and devDependencies (honoring package-lock.json when present), downloads them from the npm registry, and places them in the node_modules/ directory. It's the mandatory first step after cloning any Node.js or TypeScript project — nothing will run until the dependencies exist locally. The node_modules/ folder is never committed to git; it's fully reproducible from package.json.",
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
    "id": "daily15",
    "question": "You installed `htop` on a server and want to launch the color-coded interactive process monitor that shows per-CPU bars and supports mouse navigation. What command starts it?",
    "answer": "htop",
    "explanation": "This launches the interactive process monitor that improves on plain `top`: color-coded per-CPU usage bars, a memory meter, scrollable process list, tree view, mouse support, and function-key shortcuts for sorting, searching, and killing processes. Unlike `top` it usually isn't preinstalled — you install it with your package manager — but once present, just typing its name starts it. Press q or F10 to quit.",
    "usage": "Launch an interactive color-coded process monitor with per-CPU bars and mouse support — the friendlier replacement for top.",
    "examples": [
      "htop  # interactive monitor — q to quit",
      "htop -u alice  # show only processes owned by user 'alice'",
      "htop -p 1234,5678  # watch only these PIDs",
      "htop -t  # start in tree view (parent→child)",
      "htop -s PERCENT_MEM  # start sorted by memory usage",
      "top  # interactive — press q to quit"
    ],
    "memoryTip": "`htop` = 'Hisham's top' (the author) but easier to remember as 'highlighted top' — colorful version of `top`. If `htop` isn't installed, fall back to plain `top`, which is on every system.",
    "outputExample": "$ htop\n  CPU[|||||||||                28.4%]   Tasks: 142, 312 thr; 2 running\n  Mem[||||||||||||||||      6.2G/16G]   Load average: 0.42 0.31 0.28\n\n  PID USER      PRI  NI  VIRT   RES  S CPU% MEM%   TIME+  Command\n 1234 alice      20   0 2400M  512M S 12.5  3.2  0:42.10 firefox\n 5678 alice      20   0  800M  120M S  2.3  0.7  0:08.20 bash\n\n F1Help  F2Setup  F3Search  F5Tree  F9Kill  F10Quit",
    "category": "DAILY TIPS",
    "altAnswers": [
      "htop"
    ]
  },
  {
    "id": "daily16",
    "question": "Your application is throwing errors and you want to watch `/var/log/myapp/error.log` in real time as new lines are written, so you can see errors the moment they happen. What command keeps the file open and prints new lines continuously?",
    "answer": "tail -f /var/log/myapp/error.log",
    "altAnswers": [
      "tail -F /var/log/myapp/error.log"
    ],
    "explanation": "Watching a log file update in real-time is one of the most effective debugging techniques. tail -f opens the file, prints the last 10 lines, then keeps watching — any new bytes written to the file are immediately printed to your terminal. Press Ctrl+C to stop following. Use tail -F (capital F) when the log might be rotated: it reopens the file if it disappears and reappears under the same name. Filter live output with grep: tail -f app.log | grep ERROR shows only error lines as they arrive, cutting out the noise.",
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
    "altAnswers": [
      "lsof -i -P -n -sTCP:LISTEN",
      "netstat -tlnp",
      "ss -ltnp | grep 5432",
      "ss -tulpn"
    ],
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
    "answer": "grep -r \"DATABASE_URL\" ~/code/myapp",
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
    "category": "DAILY TIPS",
    "altAnswers": [
      "grep -Rn 'DATABASE_URL' ~/code/myapp",
      "grep -rl DATABASE_URL ~/code/myapp",
      "grep -rn DATABASE_URL ~/code/myapp",
      "rg DATABASE_URL ~/code/myapp"
    ]
  },
  {
    "id": "daily19",
    "question": "A config file at `/etc/myapp/settings.conf` uses `localhost` as the database host everywhere, but you need to change it to `db.internal`. What `sed` command replaces every occurrence on every line, printing the result to stdout first so you can verify before modifying the file?",
    "answer": "sed 's/localhost/db.internal/g' /etc/myapp/settings.conf",
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
    "altAnswers": [
      "systemctl status nginx.service"
    ],
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
    "outputExample": "$ systemctl status nginx\n● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; preset: enabled)\n     Active: active (running) since Sun 2026-05-17 09:32:01 UTC; 1h 14min ago\n   Main PID: 2402 (nginx)\n      Tasks: 3 (limit: 9468)\n     Memory: 4.8M\nMay 17 09:32:01 server1 systemd[1]: Starting nginx.service ...\nMay 17 09:32:01 server1 systemd[1]: Started nginx.service.",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily24",
    "question": "The nginx service failed silently overnight. You want to read all of its log output captured by systemd since the server was last rebooted, not just the last 10 lines. What command shows the full journal for the nginx service?",
    "answer": "journalctl -u nginx",
    "altAnswers": [
      "journalctl -u nginx.service"
    ],
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
    "id": "daily26",
    "question": "In a shell script you want to run `cd /deploy/app`, then `tar -xzf release.tar.gz`, then `systemctl restart myapp` — all in sequence, regardless of whether any of the previous steps fail. How do you write all three on one line?",
    "answer": "cd /deploy/app ; tar -xzf release.tar.gz ; systemctl restart myapp",
    "altAnswers": [
      "cd /deploy/app; tar -xzf release.tar.gz; systemctl restart myapp"
    ],
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
    "outputExample": "$ false ; echo 'still runs'\nstill runs\n$ false && echo 'this would NOT run'\n$ { date; uptime; } > /tmp/snap.txt\n$ cat /tmp/snap.txt\nSun May 17 11:14:22 UTC 2026\n 11:14:22 up 2 days,  5:48,  1 user,  load average: 0.42, 0.31, 0.28",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily27",
    "question": "Your deploy script runs `git pull`, then `npm install`, then `npm test`. If any step fails, the remaining steps should be skipped. How do you chain these three commands on one line so each one only runs if the previous one succeeded?",
    "answer": "git pull && npm install && npm test",
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
    "question": "In a bash script you want to run `curl -fsS https://internal/config > config.yml`, but if that download fails you want to fall back to running `cp /etc/myapp/default.yml config.yml` instead of crashing. Using the operator that runs its right side only when the left side fails, write the full one-liner.",
    "answer": "curl -fsS https://internal/config > config.yml || cp /etc/myapp/default.yml config.yml",
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
    "answer": "grep ERROR /var/log/myapp/app.log | wc -l",
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
    "question": "You need to kick off a 20-minute database reindex script called `reindex.sh` on a remote server but want the terminal prompt back immediately so you can do other work while it runs. How do you start the command so it runs in the background?",
    "answer": "./reindex.sh &",
    "altAnswers": [
      "nohup ./reindex.sh &"
    ],
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
    "id": "daily32",
    "question": "A cron job runs `echo \"[$(date)] event\"` on each run, and its output must be added to the end of `/var/log/myapp/events.log` without overwriting previous entries. Using the redirection operator that appends instead of overwriting, write the full command.",
    "answer": "echo \"[$(date)] event\" >> /var/log/myapp/events.log",
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
    "id": "daily34",
    "question": "You're running `./deploy.sh` and want to save absolutely everything — both normal output and any error messages — into the dated log file `deploy-$(date +%F).log` so you can review it afterward. Using the bash shorthand redirection that sends both stdout and stderr to one file, write the full command.",
    "answer": "./deploy.sh &> deploy-$(date +%F).log",
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
    "id": "daily37",
    "question": "You remember running a long `rsync` command last week but can't recall the exact flags and paths. What command searches through your command history to find it?",
    "answer": "history | grep rsync",
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
    "explanation": "History expansion lets you reference and reuse previous commands without retyping. !! expands to the entire last command before execution. The most common pattern: you run something and get \"permission denied\", so you run sudo !! to repeat it with sudo without retyping. Other expansions: !$ = last argument of previous command (great for mkdir dir then cd !$), !* = all arguments, !vim = last command starting with \"vim\", ^old^new = rerun last command with \"old\" replaced by \"new\". These save significant keystrokes in long sessions.",
    "usage": "Re-run the last command with `sudo` — the fastest recovery when you forgot to use elevated privileges.",
    "examples": [
      "apt update  # Permission denied\nsudo !!  # retry with sudo → sudo apt update",
      "vim /etc/nginx/nginx.conf  # opens read-only\nsudo !!  # reopens with sudo",
      "mkdir /opt/myapp\\ncd !$  # !$ = /opt/myapp, the last word of the PREVIOUS line (same-line equivalent: mkdir /opt/myapp && cd $_)",
      "^localhost^db.internal  # fix a typo in the last command and re-run",
      "set +H  # disable history expansion if it causes problems",
      "sudo !!  # previous command, as root"
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
    "category": "DAILY TIPS",
    "altAnswers": [
      ". ~/.bashrc",
      "exec bash"
    ]
  },
  {
    "id": "daily40",
    "question": "You find yourself typing `ls -la` dozens of times per day. What command defines a shortcut named `ll` for it in your current shell session, so typing `ll` runs `ls -la`?",
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
    "id": "daily42",
    "question": "You just ran 'ls /var/log/nginx/' and now want to 'cd' into that same directory without retyping the path. What history expansion reuses the last argument of the previous command?",
    "answer": "cd !$",
    "explanation": "After any command, !$ expands to the last argument of that previous command. So if you just listed a directory, you can immediately cd into it without retyping the path. Bash shows you what it expanded to before running it.",
    "usage": "Reuse the last argument of the previous command to avoid retyping long paths.",
    "examples": [
      "ls /var/log/nginx\ncd !$  # cd /var/log/nginx",
      "mkdir -p /tmp/new/deep && cd $_  # $_ IS the same-line last argument; !$ only reaches the previous line",
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
    "id": "daily46",
    "question": "Before your deployment script runs rsync, it needs to check whether an `rsync` command exists (exit status 0 if present, non-zero if not, printing its path when found). Which POSIX-portable command performs this check?",
    "answer": "command -v rsync",
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
    "question": "Kubernetes pods are being deployed and you want to re-run `kubectl get pods` every second with the display updating in place, so you can watch pods transition from Pending to Running. What command does this?",
    "answer": "watch -n 1 'kubectl get pods'",
    "altAnswers": [
      "watch -n 1 kubectl get pods"
    ],
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
    "question": "You are writing the 4 GB database dump `/var/backups/db.sql` to a USB drive with `dd of=/dev/sdb bs=4M`, but dd is silent about progress. Write the pipeline that feeds the dump file through `pv` into that dd command so you get live throughput and ETA.",
    "answer": "pv /var/backups/db.sql | dd of=/dev/sdb bs=4M",
    "explanation": "pv (pipe viewer) sits inside a Unix pipe and shows you a live progress bar, current transfer speed, and estimated time to completion while passing all the data through unchanged. It transforms a silent, opaque operation into one you can monitor.",
    "usage": "Insert into any pipe to show live throughput, transfer progress, and estimated completion time.",
    "examples": [
      "pv /var/backups/db.sql | dd of=/dev/sdb bs=4M  # progress for dd",
      "pv -Ss 4G < /dev/zero > /tmp/big.bin  # -S actually STOPS at 4G (without it pv streams /dev/zero until the disk is full)",
      "pv -L 1M < /var/backups/db.sql > /tmp/copy  # throttle to 1 MB/s",
      "tar -czf - /var/www/ | pv | ssh alice@backup 'cat > www.tgz'  # progress mid-ssh"
    ],
    "memoryTip": "`pv` = Pipe Viewer. Drop into any pipeline for throughput + ETA. `-s SIZE` for percentage, `-L RATE` to throttle, `-N NAME` to label. Install with `apt install pv`.",
    "outputExample": "$ pv /var/backups/db.sql > /dev/null\n 1.34GiB 0:00:08 [ 168MiB/s] [=================>      ] 62% ETA 0:00:05",
    "category": "DAILY TIPS"
  },
  {
    "id": "daily50",
    "question": "You just typed a complex 300-character pipeline and realize there is a mistake in the middle. Instead of editing it character-by-character at the shell prompt, how do you open it in your $EDITOR for comfortable editing before running?",
    "answer": "fc",
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
    "category": "DAILY TIPS",
    "altAnswers": [
      "EDITOR=vim fc",
      "ctrl+x ctrl+e"
    ]
  }
];

export const categories: Category[] = [
  {
    "id": "TERMINAL BASICS",
    "name": "Terminal Basics",
    "count": 16,
    "group": "Foundations"
  },
  {
    "id": "NAVIGATION",
    "name": "Navigation",
    "count": 24,
    "group": "Foundations"
  },
  {
    "id": "EDITORS",
    "name": "Editors",
    "count": 8,
    "group": "Foundations"
  },
  {
    "id": "FILE OPS",
    "name": "File Operations",
    "count": 26,
    "group": "Foundations"
  },
  {
    "id": "VIEWING TEXT",
    "name": "Viewing Text",
    "count": 24,
    "group": "Text & Data"
  },
  {
    "id": "REGEX",
    "name": "Regex",
    "count": 8,
    "group": "Text & Data"
  },
  {
    "id": "TEXT PROCESSING",
    "name": "Text Processing",
    "count": 17,
    "group": "Text & Data"
  },
  {
    "id": "JSON & DATA",
    "name": "JSON & Data",
    "count": 6,
    "group": "Text & Data"
  },
  {
    "id": "ARCHIVES & COMPRESS",
    "name": "Archives & Compress",
    "count": 15,
    "group": "Text & Data"
  },
  {
    "id": "SHELL SYNTAX",
    "name": "Shell Syntax",
    "count": 18,
    "group": "The Shell"
  },
  {
    "id": "PIPES & REDIRECT",
    "name": "Pipes & Redirect",
    "count": 19,
    "group": "The Shell"
  },
  {
    "id": "EXIT CODES",
    "name": "Exit Codes",
    "count": 6,
    "group": "The Shell"
  },
  {
    "id": "BASH SCRIPTING",
    "name": "Bash Scripting & Practice",
    "count": 28,
    "group": "The Shell"
  },
  {
    "id": "DEBUGGING",
    "name": "Debugging Scripts",
    "count": 6,
    "group": "The Shell"
  },
  {
    "id": "PERMISSIONS",
    "name": "Permissions",
    "count": 32,
    "group": "System"
  },
  {
    "id": "PROCESSES",
    "name": "Processes",
    "count": 23,
    "group": "System"
  },
  {
    "id": "SERVICES",
    "name": "Services (systemd)",
    "count": 12,
    "group": "System"
  },
  {
    "id": "SYSTEM INFO",
    "name": "System Info",
    "count": 24,
    "group": "System"
  },
  {
    "id": "DISKS & MOUNTS",
    "name": "Disks & Mounts",
    "count": 7,
    "group": "System"
  },
  {
    "id": "NETWORKING",
    "name": "Networking",
    "count": 24,
    "group": "Network & Security"
  },
  {
    "id": "FIREWALL",
    "name": "Firewall",
    "count": 5,
    "group": "Network & Security"
  },
  {
    "id": "SSH & KEYS",
    "name": "SSH & Keys",
    "count": 5,
    "group": "Network & Security"
  },
  {
    "id": "INTEGRITY",
    "name": "Checksums & Integrity",
    "count": 5,
    "group": "Network & Security"
  },
  {
    "id": "PACKAGES",
    "name": "Packages (Debian/Ubuntu)",
    "count": 21,
    "group": "Distro & Practice"
  },
  {
    "id": "RHEL/FEDORA",
    "name": "RHEL / Fedora",
    "count": 16,
    "group": "Distro & Practice"
  },
  {
    "id": "DAILY TIPS",
    "name": "Daily Linux Tips",
    "count": 37,
    "group": "Distro & Practice"
  }
];
