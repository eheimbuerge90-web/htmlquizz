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
    question: "Change to the home directory",
    answer: "cd",
    explanation: "The 'cd' command without arguments changes to your home directory. This is equivalent to 'cd ~' or 'cd $HOME'.",
    usage: "Used to quickly return to your personal directory where user files are stored.",
    examples: [
      "cd  # Go to home directory",
      "cd ~  # Same as above",
      "cd $HOME  # Using environment variable"
    ],
    memoryTip: "Think 'cd' = 'change directory' to your 'crib' (home). Like going back to your house after being out.",
    outputExample: "$ cd\n$ pwd\n/home/username",
    category: "NAVIGATION"
  },
  {
    id: "nav2",
    question: "Go up one directory level",
    answer: "cd ..",
    explanation: "'cd ..' moves to the parent directory. The '..' represents the parent directory in Unix-like systems.",
    usage: "Navigate up the directory tree when you need to access files in higher-level directories.",
    examples: [
      "cd ..  # Go up one level",
      "cd ../..  # Go up two levels",
      "cd ../../other  # Go up two levels then into 'other'"
    ],
    memoryTip: "Two dots (..) = go back to parent. Like climbing up a family tree - your parents are above you.",
    outputExample: "$ cd ..\n$ pwd\n/home",
    category: "NAVIGATION"
  },
  {
    id: "nav3",
    question: "List files in current directory",
    answer: "ls",
    explanation: "'ls' lists the contents of the current directory. Without options, it shows filenames in alphabetical order.",
    usage: "Check what files and directories are present in your current location.",
    examples: [
      "ls  # Basic listing",
      "ls -l  # Long format with details",
      "ls -a  # Show hidden files too"
    ],
    memoryTip: "'ls' = 'list stuff'. Like making a shopping list of what's in your directory.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Music  Pictures  Videos",
    category: "NAVIGATION"
  },
  {
    id: "nav4",
    question: "List files with details",
    answer: "ls -l",
    explanation: "'ls -l' provides a long listing format showing permissions, owner, size, modification date, and filename.",
    usage: "Get detailed information about files including permissions, ownership, and timestamps.",
    examples: [
      "ls -l  # Detailed listing",
      "ls -lh  # Human-readable file sizes",
      "ls -lt  # Sort by modification time"
    ],
    memoryTip: "ls = list. Like listing your shopping items.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Pictures  Videos",
    category: "NAVIGATION"
  },
  {
    id: "nav5",
    question: "Show current working directory",
    answer: "pwd",
    explanation: "'pwd' prints the current working directory - the full path from root to your current location.",
    usage: "Confirm your current location in the filesystem, especially useful in scripts or when lost in deep directory structures.",
    examples: [
      "pwd  # Show current directory path",
      "echo $PWD  # Same using environment variable"
    ],
    memoryTip: "'pwd' = 'print working directory'. Like asking 'where am I?' in a big building.",
    outputExample: "$ pwd\n/home/username/projects/myapp",
    category: "NAVIGATION"
  },
  {
    id: "nav6",
    question: "Change to a specific directory",
    answer: "cd /path/to/directory",
    explanation: "'cd' followed by an absolute or relative path changes to that directory.",
    usage: "Navigate to specific locations in the filesystem.",
    examples: [
      "cd /home/user  # Absolute path",
      "cd Documents  # Relative path",
      "cd ./projects  # Explicit relative path"
    ],
    memoryTip: "'cd' = 'change directory'. Like changing rooms in a house - you specify which room to go to.",
    outputExample: "$ cd Documents\n$ pwd\n/home/username/Documents",
    category: "NAVIGATION"
  },
  {
    id: "nav7",
    question: "Go to previous directory",
    answer: "cd -",
    explanation: "'cd -' switches between the current directory and the previous one.",
    usage: "Quickly toggle between two directories you're working in.",
    examples: [
      "cd /some/path  # Go somewhere",
      "cd -  # Go back to previous location",
      "cd -  # Go back to /some/path"
    ],
    memoryTip: "'cd -' = 'go back'. Like the back button in a web browser - takes you to where you were before.",
    outputExample: "$ cd /var/log\n$ cd -\n/home/username\n$ cd -\n/var/log",
    category: "NAVIGATION"
  },
  {
    id: "nav8",
    question: "List all files including hidden",
    answer: "ls -a",
    explanation: "'ls -a' shows all files including those starting with '.' (dot files), which are normally hidden.",
    usage: "View configuration files and hidden directories that control program behavior.",
    examples: [
      "ls -a  # Show all files",
      "ls -A  # Show all except . and ..",
      "ls -la  # Detailed view of all files"
    ],
    memoryTip: "'ls -a' = 'all files'. The 'a' stands for 'all' - shows everything including the hidden stuff.",
    outputExample: "$ ls -a\n.  ..  .bashrc  .config  Desktop  Documents  .git  .hiddenfile  .profile",
    category: "NAVIGATION"
  },
  {
    id: "nav9",
    question: "List files in long format with human-readable sizes",
    answer: "ls -lh",
    explanation: "'ls -lh' combines long format (-l) with human-readable file sizes (-h) using K, M, G suffixes.",
    usage: "Easily understand file sizes without dealing with raw bytes.",
    examples: [
      "ls -lh  # Human-readable sizes",
      "ls -lsh  # Also show total size",
      "ls -lah  # All files with human sizes"
    ],
    memoryTip: "'ls -lh' = 'long list human'. The 'h' makes sizes human-readable, like saying '2 apples' instead of '2 fruit units'.",
    outputExample: "$ ls -lh\ntotal 12K\n-rw-r--r-- 1 user user 4.0K Jan 15 10:30 file1.txt\ndrwxr-xr-x 2 user user 4.0K Jan 15 10:30 Documents\n-rw-r--r-- 1 user user 1.2M Jan 15 10:25 image.jpg",
    category: "NAVIGATION"
  },
  {
    id: "nav10",
    question: "Create a new directory",
    answer: "mkdir directory_name",
    explanation: "'mkdir' creates a new directory with the specified name.",
    usage: "Organize files by creating folders for different projects or file types.",
    examples: [
      "mkdir projects  # Create 'projects' directory",
      "mkdir -p path/to/nested/dirs  # Create nested directories",
      "mkdir dir1 dir2 dir3  # Create multiple directories"
    ],
    memoryTip: "'mkdir' = 'make directory'. Like building a new room in your house.",
    outputExample: "$ mkdir myproject\n$ ls -d */\nDesktop/  Documents/  Downloads/  myproject/  Music/  Pictures/",
    category: "NAVIGATION"
  },
  {
    id: "nav11",
    question: "Remove an empty directory",
    answer: "rmdir directory_name",
    explanation: "'rmdir' removes empty directories. It will fail if the directory contains any files.",
    usage: "Clean up empty directories that are no longer needed.",
    examples: [
      "rmdir empty_dir  # Remove empty directory",
      "rmdir dir1 dir2  # Remove multiple empty directories"
    ],
    memoryTip: "rm = remove. Like deleting something permanently.",
    outputExample: "$ rm file.txt\n$ ls\n(file.txt is gone)",
    category: "NAVIGATION"
  },
  {
    id: "nav12",
    question: "Show directory tree",
    answer: "tree",
    explanation: "'tree' displays a visual tree structure of directories and files.",
    usage: "Get an overview of directory structure and file organization.",
    examples: [
      "tree  # Show current directory tree",
      "tree -d  # Show only directories",
      "tree -L 2  # Limit depth to 2 levels"
    ],
    memoryTip: "Command: 'tree'. Like using a tool to accomplish a task.",
    outputExample: "$ tree\n(output depends on context)",
    category: "NAVIGATION"
  },
  {
    id: "nav13",
    question: "Find files by name",
    answer: "find . -name filename",
    explanation: "'find' searches for files matching criteria. '-name' matches exact filenames.",
    usage: "Locate files when you know the name but not the location.",
    examples: [
      "find . -name '*.txt'  # Find all .txt files",
      "find /home -name config  # Find 'config' files in home",
      "find . -iname '*.JPG'  # Case-insensitive search"
    ],
    memoryTip: "find = locate files. Like searching for something in a storage room.",
    outputExample: "$ find . -name '*.txt'\n./file1.txt\n./folder/file2.txt",
    category: "NAVIGATION"
  },
  {
    id: "nav14",
    question: "Show file type",
    answer: "file filename",
    explanation: "'file' determines and displays the type of a file based on its content.",
    usage: "Identify unknown files or verify file types.",
    examples: [
      "file script.sh  # Show file type",
      "file image.jpg  # Identify image format",
      "file *  # Check types of all files in directory"
    ],
    memoryTip: "'file' = 'what type is this file?'. Like asking a librarian what kind of book something is.",
    outputExample: "$ file script.sh\nscript.sh: Bourne-Again shell script, ASCII text executable\n$ file image.png\nimage.png: PNG image data, 800 x 600, 8-bit/color RGBA, non-interlaced",
    category: "NAVIGATION"
  },
  {
    id: "nav15",
    question: "Go to root directory",
    answer: "cd /",
    explanation: "'cd /' changes to the root directory, the top level of the filesystem hierarchy.",
    usage: "Access system directories or start navigation from the filesystem root.",
    examples: [
      "cd /  # Go to root",
      "cd /etc  # Go to system config",
      "cd /var/log  # Go to system logs"
    ],
    memoryTip: "'cd /' = 'go to root'. Like going to the foundation of a building - everything starts here.",
    outputExample: "$ cd /\n$ pwd\n/",
    category: "NAVIGATION"
  },
  {
    id: "nav16",
    question: "List files by size",
    answer: "ls -S",
    explanation: "'ls -S' sorts files by size, largest first.",
    usage: "Identify large files that might be taking up disk space.",
    examples: [
      "ls -S  # Sort by size, largest first",
      "ls -lS  # Long format, size sorted",
      "ls -lSh  # Human readable sizes"
    ],
    memoryTip: "'ls -S' = 'size sort'. The 'S' stands for 'size' - shows biggest files first.",
    outputExample: "$ ls -lSh\ntotal 1.2G\n-rw-r--r-- 1 user user 800M Jan 15 10:30 bigmovie.mp4\n-rw-r--r-- 1 user user 256M Jan 15 10:25 largefile.zip\ndrwxr-xr-x 2 user user 4.0K Jan 15 10:30 Documents",
    category: "NAVIGATION"
  },
  {
    id: "nav17",
    question: "Show recent files",
    answer: "ls -lt | head",
    explanation: "Combines 'ls -lt' (sort by time) with 'head' to show most recently modified files.",
    usage: "See what files you've been working on recently.",
    examples: [
      "ls -lt | head -10  # Show 10 most recent files",
      "ls -lt *.txt | head  # Recent text files only",
      "find . -mtime -1 -ls  # Files modified in last day"
    ],
    memoryTip: "'ls -lt | head' = 'latest files first'. Like checking your recent browsing history.",
    outputExample: "$ ls -lt | head -5\n-rw-r--r-- 1 user user  1234 Jan 15 14:30 recent.txt\n-rw-r--r-- 1 user user   567 Jan 15 14:25 newer.txt\ndrwxr-xr-x 2 user user  4096 Jan 15 14:20 latest_dir\ndrwxr-xr-x 2 user user  4096 Jan 15 14:15 older_dir",
    category: "NAVIGATION"
  },
  {
    id: "nav18",
    question: "Navigate with tab completion",
    answer: "cd Doc<TAB>",
    explanation: "Tab completion automatically completes filenames and directory names when you press Tab.",
    usage: "Speed up typing and avoid typos when navigating.",
    examples: [
      "cd Doc<TAB>  # Completes to Documents/",
      "ls *.tx<TAB>  # Shows .txt files",
      "cd /etc/ap<TAB><TAB>  # Shows possible completions"
    ],
    memoryTip: "Tab completion = 'auto-complete'. Like auto-complete in your phone - it finishes your words for you.",
    outputExample: "$ cd Doc<TAB>\n$ cd Documents/\n$ pwd\n/home/username/Documents",
    category: "NAVIGATION"
  },
  {
    id: "nav19",
    question: "Show directory size",
    answer: "du -sh directory",
    explanation: "'du -sh' shows the total size of a directory in human-readable format.",
    usage: "Check how much disk space directories are using.",
    examples: [
      "du -sh Documents/  # Size of Documents directory",
      "du -sh *  # Size of all items in current directory",
      "du -sh .  # Size of current directory"
    ],
    memoryTip: "'du -sh' = 'disk usage summary human'. Like checking how much space your closet takes up.",
    outputExample: "$ du -sh Documents/\n2.3G\tDocuments/",
    category: "NAVIGATION"
  },
  {
    id: "nav20",
    question: "List files recursively",
    answer: "ls -R",
    explanation: "'ls -R' lists files recursively, showing the contents of subdirectories.",
    usage: "Get an overview of all files in a directory tree.",
    examples: [
      "ls -R  # Recursive listing",
      "ls -lR  # Recursive with details",
      "find . -type f  # Alternative recursive file listing"
    ],
    memoryTip: "'ls -R' = 'recursive listing'. The 'R' stands for 'recursive' - like exploring all rooms in a house.",
    outputExample: "$ ls -R\n.:\nDocuments  Pictures  projects\n\n./Documents:\nnotes.txt  resume.pdf\n\n./Pictures:\nvacation.jpg\n\n./projects:\nmyapp",
    category: "NAVIGATION"
  },

  // FILE OPS
  {
    id: "file1",
    question: "Copy a file",
    answer: "cp source destination",
    explanation: "'cp' copies files from source to destination. Use -r for directories.",
    usage: "Duplicate files for backup or to work on copies without affecting originals.",
    examples: [
      "cp file.txt backup.txt  # Copy file",
      "cp -r dir1 dir2  # Copy directory recursively",
      "cp file1 file2 file3 dest/  # Copy multiple files"
    ],
    memoryTip: "cp = copy. Like making a duplicate of something.",
    outputExample: "$ cp file.txt file_copy.txt\n$ ls\nfile.txt  file_copy.txt",
    category: "FILE OPS"
  },
  {
    id: "file2",
    question: "Move or rename a file",
    answer: "mv source destination",
    explanation: "'mv' moves files/directories or renames them if destination is in same directory.",
    usage: "Relocate files or rename them. Also used for organizing file structures.",
    examples: [
      "mv oldname.txt newname.txt  # Rename file",
      "mv file.txt /home/user/  # Move to different directory",
      "mv *.txt archive/  # Move all txt files to archive"
    ],
    memoryTip: "mv = move. Like relocating something to a new place.",
    outputExample: "$ mv oldname.txt newname.txt\n$ ls\nnewname.txt",
    category: "FILE OPS"
  },
  {
    id: "file3",
    question: "Remove a file",
    answer: "rm filename",
    explanation: "'rm' removes (deletes) files. Use -r for directories, -f to force.",
    usage: "Delete unwanted files. Be careful as deletion is usually permanent.",
    examples: [
      "rm unwanted.txt  # Delete file",
      "rm -r old_project/  # Delete directory and contents",
      "rm -i *.tmp  # Interactive deletion with confirmation"
    ],
    memoryTip: "rm = remove. Like deleting something permanently.",
    outputExample: "$ rm file.txt\n$ ls\n(file.txt is gone)",
    category: "FILE OPS"
  },
  {
    id: "file4",
    question: "Create an empty file",
    answer: "touch filename",
    explanation: "'touch' creates an empty file or updates the timestamp of existing files.",
    usage: "Create placeholder files or update modification times for build systems.",
    examples: [
      "touch newfile.txt  # Create empty file",
      "touch file1 file2 file3  # Create multiple files",
      "touch -t 202312251200 file.txt  # Set specific timestamp"
    ],
    memoryTip: "touch = create file. Like creating a new blank document.",
    outputExample: "$ touch newfile.txt\n$ ls\nnewfile.txt",
    category: "FILE OPS"
  },
  {
    id: "file5",
    question: "Show file contents",
    answer: "cat filename",
    explanation: "'cat' concatenates and displays file contents to standard output.",
    usage: "View entire file contents, combine multiple files, or pipe to other commands.",
    examples: [
      "cat file.txt  # Display file contents",
      "cat file1 file2 > combined.txt  # Combine files",
      "cat /etc/passwd  # View system file"
    ],
    memoryTip: "cat = concatenate. Like displaying file contents on screen.",
    outputExample: "$ cat file.txt\nHello World",
    category: "FILE OPS"
  },
  {
    id: "file6",
    question: "Copy with interactive prompt",
    answer: "cp -i source destination",
    explanation: "'cp -i' prompts before overwriting existing files.",
    usage: "Safely copy files when you want to avoid accidental overwrites.",
    examples: [
      "cp -i important.txt backup.txt  # Prompt before overwrite",
      "cp -ir dir1 dir2  # Interactive recursive copy"
    ],
    memoryTip: "cp = copy. Like making a duplicate of something.",
    outputExample: "$ cp file.txt file_copy.txt\n$ ls\nfile.txt  file_copy.txt",
    category: "FILE OPS"
  },
  {
    id: "file7",
    question: "Move with interactive prompt",
    answer: "mv -i source destination",
    explanation: "'mv -i' prompts before overwriting existing files.",
    usage: "Safely move/rename files to prevent accidental data loss.",
    examples: [
      "mv -i old.txt new.txt  # Prompt if new.txt exists",
      "mv -i file.txt existing_dir/  # Prompt if file exists in destination"
    ],
    memoryTip: "mv = move. Like relocating something to a new place.",
    outputExample: "$ mv oldname.txt newname.txt\n$ ls\nnewname.txt",
    category: "FILE OPS"
  },
  {
    id: "file8",
    question: "Remove with confirmation",
    answer: "rm -i filename",
    explanation: "'rm -i' asks for confirmation before deleting each file.",
    usage: "Safely delete files with confirmation to prevent mistakes.",
    examples: [
      "rm -i *.log  # Confirm before deleting log files",
      "rm -ri old_project/  # Confirm recursive deletion"
    ],
    memoryTip: "rm = remove. Like deleting something permanently.",
    outputExample: "$ rm file.txt\n$ ls\n(file.txt is gone)",
    category: "FILE OPS"
  },
  {
    id: "file9",
    question: "Copy preserving attributes",
    answer: "cp -p source destination",
    explanation: "'cp -p' preserves file attributes like timestamps, permissions, and ownership.",
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
    question: "Create symbolic link",
    answer: "ln -s target link_name",
    explanation: "'ln -s' creates a symbolic (soft) link pointing to the target file/directory.",
    usage: "Create shortcuts or aliases to files in different locations.",
    examples: [
      "ln -s /usr/bin/python3 python  # Create link to python",
      "ln -s ../shared/config .  # Link to config in parent"
    ],
    memoryTip: "Command: 'ln'. Like using a tool to accomplish a task.",
    outputExample: "$ ln\n(output depends on context)",
    category: "FILE OPS"
  },
  {
    id: "file11",
    question: "Show disk usage",
    answer: "du -h",
    explanation: "'du -h' shows disk usage in human-readable format for directories.",
    usage: "Check how much space directories and files are using.",
    examples: [
      "du -h  # Show sizes of subdirectories",
      "du -sh *  # Show sizes of all items in current directory",
      "du -h --max-depth=1  # Limit depth of reporting"
    ],
    memoryTip: "Command: 'du'. Like using a tool to accomplish a task.",
    outputExample: "$ du\n(output depends on context)",
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
    question: "Move recursively",
    answer: "mv -r source destination",
    explanation: "'mv -r' moves directories and their contents recursively.",
    usage: "Relocate entire directory structures.",
    examples: [
      "mv -r old_location/ new_location/  # Move directory tree",
      "mv -r project_* archive/  # Move multiple project directories"
    ],
    memoryTip: "'mv -r' = 'move recursive'. Like moving your entire house and all its contents.",
    outputExample: "$ mv -r oldproject newproject\n$ ls\nnewproject/",
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
    question: "View file with pager",
    answer: "less filename",
    explanation: "'less' displays file contents one screen at a time with navigation capabilities.",
    usage: "View large files comfortably with search and scroll features.",
    examples: [
      "less large_file.txt  # View with pager",
      "less /var/log/syslog  # Check system logs",
      "less +G file.txt  # Start at end of file"
    ],
    memoryTip: "Command: 'less'. Like using a tool to accomplish a task.",
    outputExample: "$ less\n(output depends on context)",
    category: "VIEWING TEXT"
  },
  {
    id: "view2",
    question: "Display first 10 lines",
    answer: "head filename",
    explanation: "'head' shows the first 10 lines of a file (or specified number with -n).",
    usage: "Preview file contents or check file headers.",
    examples: [
      "head file.txt  # First 10 lines",
      "head -n 5 file.txt  # First 5 lines",
      "head -n 20 /etc/passwd  # Check user file format"
    ],
    memoryTip: "Command: 'head'. Like using a tool to accomplish a task.",
    outputExample: "$ head\n(output depends on context)",
    category: "VIEWING TEXT"
  },
  {
    id: "view3",
    question: "Display last 10 lines",
    answer: "tail filename",
    explanation: "'tail' shows the last 10 lines of a file (or specified number with -n).",
    usage: "Check recent entries in log files or end of documents.",
    examples: [
      "tail /var/log/auth.log  # Recent authentication attempts",
      "tail -n 50 file.txt  # Last 50 lines",
      "tail -f /var/log/syslog  # Follow log file in real-time"
    ],
    memoryTip: "Command: 'tail'. Like using a tool to accomplish a task.",
    outputExample: "$ tail\n(output depends on context)",
    category: "VIEWING TEXT"
  },
  {
    id: "view4",
    question: "Search for text in file",
    answer: "grep pattern filename",
    explanation: "'grep' searches for lines containing the specified pattern in files.",
    usage: "Find specific content in files, search logs, or filter output.",
    examples: [
      "grep error /var/log/apache2/error.log  # Find errors",
      "grep -r 'TODO' .  # Search recursively for TODO comments",
      "grep -i 'linux' file.txt  # Case-insensitive search"
    ],
    memoryTip: "grep = search. Like using find function to search for text.",
    outputExample: "$ grep 'pattern' file.txt\nline with pattern",
    category: "VIEWING TEXT"
  },
  {
    id: "view5",
    question: "Count lines, words, characters",
    answer: "wc filename",
    explanation: "'wc' counts lines, words, and characters in files.",
    usage: "Get statistics about file contents or check file sizes.",
    examples: [
      "wc file.txt  # Show lines, words, chars",
      "wc -l file.txt  # Count only lines",
      "wc -w *.txt  # Count words in all txt files"
    ],
    memoryTip: "wc = word count. Like counting words in a document.",
    outputExample: "$ wc -l file.txt\n42 file.txt",
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
    question: "Remove duplicate lines",
    answer: "uniq filename",
    explanation: "'uniq' removes consecutive duplicate lines from sorted input.",
    usage: "Clean up lists, remove duplicates, or prepare data for analysis.",
    examples: [
      "sort file.txt | uniq  # Remove duplicates",
      "uniq -c file.txt  # Count occurrences",
      "uniq -d file.txt  # Show only duplicates"
    ],
    memoryTip: "Command: 'uniq'. Like using a tool to accomplish a task.",
    outputExample: "$ uniq\n(output depends on context)",
    category: "VIEWING TEXT"
  },
  {
    id: "view8",
    question: "Number lines in file",
    answer: "nl filename",
    explanation: "'nl' numbers lines in a file, useful for referencing specific lines.",
    usage: "Add line numbers for documentation or when discussing specific lines.",
    examples: [
      "nl script.sh  # Number lines in script",
      "nl -ba file.txt  # Number all lines including blanks"
    ],
    memoryTip: "Command: 'nl'. Like using a tool to accomplish a task.",
    outputExample: "$ nl\n(output depends on context)",
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
    question: "View file in reverse",
    answer: "tac filename",
    explanation: "'tac' displays file contents in reverse order (last line first).",
    usage: "View chronological data in reverse or check end-of-file first.",
    examples: [
      "tac logfile.txt  # View log in reverse chronological order",
      "tac /etc/passwd  # Last users first"
    ],
    memoryTip: "Command: 'tac'. Like using a tool to accomplish a task.",
    outputExample: "$ tac\n(output depends on context)",
    category: "VIEWING TEXT"
  },
  {
    id: "view11",
    question: "Split file into pieces",
    answer: "split filename",
    explanation: "'split' divides large files into smaller pieces with default names xaa, xab, etc.",
    usage: "Break up large files for transfer or processing in chunks.",
    examples: [
      "split large_file.txt  # Split into 1000-line pieces",
      "split -b 1M bigfile.iso part_  # 1MB pieces with custom prefix",
      "split -l 500 file.txt chunk_  # 500 lines per file"
    ],
    memoryTip: "Command: 'split'. Like using a tool to accomplish a task.",
    outputExample: "$ split\n(output depends on context)",
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
    question: "Reverse sort file",
    answer: "sort -r filename",
    explanation: "'sort -r' sorts lines in reverse order (Z-A, 9-0).",
    usage: "Sort data in descending order or reverse chronological order.",
    examples: [
      "sort -r names.txt  # Reverse alphabetical",
      "sort -nr numbers.txt  # Reverse numerical"
    ],
    memoryTip: "'sort -r' = 'sort reverse'. Like sorting from biggest to smallest instead of smallest to biggest.",
    outputExample: "$ sort -r names.txt\nZoe\nYara\nXander\nWalter",
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
    question: "Change file permissions",
    answer: "chmod 755 filename",
    explanation: "'chmod' changes file permissions. 755 = rwxr-xr-x (owner full, others read/execute).",
    usage: "Control who can read, write, or execute files for security and functionality.",
    examples: [
      "chmod 644 file.txt  # Owner rw, others r",
      "chmod 755 script.sh  # Executable for all",
      "chmod +x script.sh  # Add execute permission"
    ],
    memoryTip: "chmod = change permissions. Like adjusting who can access something.",
    outputExample: "$ chmod 755 script.sh\n$ ls -l script.sh\n-rwxr-xr-x 1 user user",
    category: "PERMISSIONS"
  },
  {
    id: "perm2",
    question: "Change file ownership",
    answer: "chown user:group filename",
    explanation: "'chown' changes file owner and group. Requires root privileges usually.",
    usage: "Transfer file ownership between users or set correct ownership for services.",
    examples: [
      "sudo chown john:developers file.txt  # Change owner and group",
      "sudo chown :www-data /var/www  # Change group only",
      "sudo chown -R apache:apache /var/www/html  # Recursive change"
    ],
    memoryTip: "chown = change owner. Like transferring ownership to someone.",
    outputExample: "$ chown\n(output depends on context)",
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
    question: "Make file executable",
    answer: "chmod +x filename",
    explanation: "'chmod +x' adds execute permission for the owner.",
    usage: "Allow scripts and programs to be run.",
    examples: [
      "chmod +x script.sh  # Make script executable",
      "chmod +x *.sh  # Make all shell scripts executable",
      "chmod a+x file  # Executable for all users"
    ],
    memoryTip: "chmod = change permissions. Like adjusting who can access something.",
    outputExample: "$ chmod 755 script.sh\n$ ls -l script.sh\n-rwxr-xr-x 1 user user",
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
    question: "Change group ownership",
    answer: "chgrp group filename",
    explanation: "'chgrp' changes the group ownership of files.",
    usage: "Set appropriate group access for collaborative work.",
    examples: [
      "chgrp developers project/  # Set group for project",
      "chgrp -R www-data /var/www  # Web server group",
      "chgrp users file.txt  # Standard users group"
    ],
    memoryTip: "Command: 'chgrp'. Like using a tool to accomplish a task.",
    outputExample: "$ chgrp\n(output depends on context)",
    category: "PERMISSIONS"
  },
  {
    id: "perm7",
    question: "Set default permissions",
    answer: "umask 022",
    explanation: "'umask' sets default permissions for newly created files (022 = 755 for directories, 644 for files).",
    usage: "Control default permissions for new files and directories.",
    examples: [
      "umask 022  # Default: files 644, dirs 755",
      "umask 077  # Private: files 600, dirs 700",
      "umask  # Show current umask value"
    ],
    memoryTip: "Command: 'umask'. Like using a tool to accomplish a task.",
    outputExample: "$ umask\n(output depends on context)",
    category: "PERMISSIONS"
  },
  {
    id: "perm8",
    question: "Check effective user",
    answer: "whoami",
    explanation: "'whoami' shows the effective user ID (who you are currently running as).",
    usage: "Verify your current user context, especially after sudo or su.",
    examples: [
      "whoami  # Show current user",
      "sudo whoami  # Show root when using sudo",
      "id  # More detailed user information"
    ],
    memoryTip: "Command: 'whoami'. Like using a tool to accomplish a task.",
    outputExample: "$ whoami\n(output depends on context)",
    category: "PERMISSIONS"
  },
  {
    id: "perm9",
    question: "Switch to root user",
    answer: "sudo -i",
    explanation: "'sudo -i' switches to root user with root's environment.",
    usage: "Perform administrative tasks requiring root privileges.",
    examples: [
      "sudo -i  # Become root",
      "sudo command  # Run single command as root",
      "su -  # Alternative way to become root"
    ],
    memoryTip: "Command: 'sudo'. Like using a tool to accomplish a task.",
    outputExample: "$ sudo\n(output depends on context)",
    category: "PERMISSIONS"
  },
  {
    id: "perm10",
    question: "Show user groups",
    answer: "groups",
    explanation: "'groups' shows which groups the current user belongs to.",
    usage: "Check group memberships that determine file access permissions.",
    examples: [
      "groups  # Show your groups",
      "groups username  # Show another user's groups",
      "id -Gn  # Same as groups"
    ],
    memoryTip: "'groups' = 'group memberships'. Like checking which teams you belong to for access control.",
    outputExample: "$ groups\nuser adm cdrom sudo dip plugdev lpadmin sambashare",
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
    question: "Redirect output to file",
    answer: "command > file.txt",
    explanation: "'>' redirects standard output to a file, overwriting existing content.",
    usage: "Save command output to files for later use or logging.",
    examples: [
      "ls > filelist.txt  # Save directory listing",
      "echo 'Hello' > greeting.txt  # Create file with content",
      "date > timestamp.txt  # Save current date/time"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe2",
    question: "Append output to file",
    answer: "command >> file.txt",
    explanation: "'>>' appends standard output to a file without overwriting existing content.",
    usage: "Add output to existing files, like logs or accumulating data.",
    examples: [
      "echo 'Line 1' > log.txt  # Create log",
      "echo 'Line 2' >> log.txt  # Append to log",
      "date >> access.log  # Log timestamps"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe3",
    question: "Redirect input from file",
    answer: "command < input.txt",
    explanation: "'<' redirects file content as standard input to commands.",
    usage: "Feed file content to commands that read from stdin.",
    examples: [
      "sort < unsorted.txt  # Sort file contents",
      "wc < file.txt  # Count words in file",
      "mail -s 'Subject' user@example.com < message.txt  # Send file as email body"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe4",
    question: "Pipe output to another command",
    answer: "command1 | command2",
    explanation: "'|' connects stdout of command1 to stdin of command2.",
    usage: "Chain commands together for complex data processing.",
    examples: [
      "ls | grep txt  # Find txt files",
      "cat file.txt | wc -l  # Count lines in file",
      "ps aux | grep apache  # Find apache processes"
    ],
    memoryTip: "Command: 'command1'. Like using a tool to accomplish a task.",
    outputExample: "$ command1\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe5",
    question: "Redirect error output",
    answer: "command 2> error.log",
    explanation: "'2>' redirects standard error (stderr) to a file.",
    usage: "Capture error messages separately from normal output.",
    examples: [
      "find / -name missing 2> errors.txt  # Capture find errors",
      "make 2>&1 > build.log  # Both stdout and stderr to file",
      "command > output.txt 2> error.txt  # Separate stdout and stderr"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe6",
    question: "Redirect both stdout and stderr",
    answer: "command &> file.txt",
    explanation: "'&>' redirects both standard output and standard error to the same file.",
    usage: "Capture all command output (success and errors) in one place.",
    examples: [
      "script.sh &> output.log  # Capture all output",
      "make &> build.log  # Build output and errors",
      "command > file.txt 2>&1  # Alternative syntax"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe7",
    question: "Use here document",
    answer: "command << EOF\ncontent\nEOF",
    explanation: "'<< EOF' creates inline input until EOF marker is reached.",
    usage: "Provide multi-line input to commands without temporary files.",
    examples: [
      "cat << EOF > file.txt\nLine 1\nLine 2\nEOF",
      "mysql -u user << EOF\nSELECT * FROM users;\nEOF"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe8",
    question: "Discard output",
    answer: "command > /dev/null",
    explanation: "'> /dev/null' discards output by sending it to the null device.",
    usage: "Suppress unwanted output, especially in scripts or background jobs.",
    examples: [
      "ping -c 1 google.com > /dev/null  # Silent ping",
      "command > /dev/null 2>&1  # Discard all output",
      "nohup command > /dev/null &  # Background job silent"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe9",
    question: "Chain multiple commands",
    answer: "command1 && command2",
    explanation: "'&&' executes command2 only if command1 succeeds (exit code 0).",
    usage: "Execute dependent commands or handle success/failure scenarios.",
    examples: [
      "mkdir dir && cd dir  # Create and enter directory",
      "make && make install  # Build and install if build succeeds",
      "test -f file.txt && echo 'File exists'  # Conditional execution"
    ],
    memoryTip: "Command: 'command1'. Like using a tool to accomplish a task.",
    outputExample: "$ command1\n(output depends on context)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe10",
    question: "Execute regardless of previous result",
    answer: "command1 ; command2",
    explanation: "';' executes command2 regardless of command1's exit status.",
    usage: "Execute multiple independent commands in sequence.",
    examples: [
      "echo 'Starting' ; date ; echo 'Done'  # Always execute all",
      "cd /tmp ; ls  # Change dir then list, even if cd fails",
      "command1 ; command2 ; command3  # Execute all in order"
    ],
    memoryTip: "';' = 'semicolon always'. Like doing multiple things in order, no matter what happens with the previous step.",
    outputExample: "$ mkdir newdir ; cd newdir ; pwd ; ls\n/home/user/newdir\n(newdir is empty)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe11",
    question: "Redirect both stdout and stderr",
    answer: "command &> file.txt",
    explanation: "'&>' redirects both standard output and standard error to the same file.",
    usage: "Capture all command output (success and error messages) in one file.",
    examples: [
      "make &> build.log  # Capture build output and errors",
      "script.sh &> output.txt  # All script output",
      "command &> /dev/null  # Discard all output"
    ],
    memoryTip: "'&>' = 'and greater-than'. Like catching both the good output and the error messages in the same net.",
    outputExample: "$ ./buggy_script.sh &> debug.log\n$ cat debug.log\nStarting script...\nERROR: File not found\nScript completed with errors",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe12",
    question: "Redirect stderr only",
    answer: "command 2> error.log",
    explanation: "'2>' redirects only standard error (file descriptor 2) to a file.",
    usage: "Separate error messages from normal output for better error handling.",
    examples: [
      "gcc program.c 2> errors.txt  # Capture compilation errors",
      "command 2> /dev/null  # Discard errors only",
      "command > output.txt 2> errors.txt  # Separate stdout and stderr"
    ],
    memoryTip: "'2>' = 'stderr redirect'. Like sending only the error messages to a separate file, keeping good output separate.",
    outputExample: "$ gcc broken.c 2> compile_errors.txt\n$ cat compile_errors.txt\nbroken.c:5: error: expected ';' before '}' token",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe13",
    question: "Append stderr to file",
    answer: "command 2>> error.log",
    explanation: "'2>>' appends standard error to a file without overwriting existing content.",
    usage: "Accumulate error logs over time or multiple command runs.",
    examples: [
      "cron_job.sh 2>> /var/log/cron.log  # Append cron errors",
      "backup.sh 2>> backup_errors.log  # Collect backup issues",
      "service restart 2>> service.log  # Log service restart errors"
    ],
    memoryTip: "'2>>' = 'stderr append'. Like adding error messages to the end of an existing error log file.",
    outputExample: "$ ./script.sh 2>> error_log.txt\n$ cat error_log.txt\nPrevious error: disk full\nNew error: permission denied",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe14",
    question: "Pipe with tee command",
    answer: "command | tee file.txt",
    explanation: "'tee' reads from stdin and writes to both stdout and a file simultaneously.",
    usage: "Monitor command output in real-time while also saving it to a file.",
    examples: [
      "ls -la | tee directory.txt  # See and save listing",
      "ping google.com | tee ping.log  # Monitor and log ping",
      "command | tee -a logfile.txt  # Append to existing log"
    ],
    memoryTip: "'tee' = 'T-junction'. Like splitting a pipe into two directions - one to screen, one to file.",
    outputExample: "$ ps aux | tee processes.txt | head -5\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1 225584  9168 ?        Ss   09:30   0:01 /sbin/init\n... (output also saved to processes.txt)",
    category: "PIPES & REDIRECT"
  },
  {
    id: "pipe15",
    question: "Redirect to multiple files",
    answer: "command | tee file1.txt file2.txt",
    explanation: "'tee' can write to multiple files simultaneously.",
    usage: "Create multiple copies of output or log to different locations.",
    examples: [
      "dmesg | tee boot.log backup.log  # Log to two files",
      "date | tee timestamp1.txt timestamp2.txt  # Duplicate output",
      "command | tee >(gzip > output.gz)  # Pipe and compress"
    ],
    memoryTip: "'tee multiple files' = 'T-junction to many'. Like broadcasting output to multiple destinations at once.",
    outputExample: "$ date | tee time1.txt time2.txt\nMon Jan 15 10:30:00 UTC 2024\n$ cat time1.txt time2.txt\nMon Jan 15 10:30:00 UTC 2024\nMon Jan 15 10:30:00 UTC 2024",
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
    question: "Show running processes",
    answer: "ps aux",
    explanation: "'ps aux' shows all processes with detailed information including user, PID, CPU/memory usage.",
    usage: "Monitor system activity, find specific processes, or debug performance issues.",
    examples: [
      "ps aux  # All processes detailed",
      "ps aux | grep apache  # Find web server processes",
      "ps aux --sort=-%cpu  # Sort by CPU usage"
    ],
    memoryTip: "ps = process status. Like checking what programs are running.",
    outputExample: "$ ps aux | head -3\nUSER  PID  %CPU  %MEM  COMMAND\nroot    1  0.1  0.5  /sbin/init",
    category: "PROCESSES"
  },
  {
    id: "proc2",
    question: "Show process tree",
    answer: "pstree",
    explanation: "'pstree' displays processes in a tree format showing parent-child relationships.",
    usage: "Understand process hierarchy and how processes are related.",
    examples: [
      "pstree  # Show process tree",
      "pstree -p  # Include PIDs",
      "pstree user  # Show specific user's processes"
    ],
    memoryTip: "ps = process status. Like checking what programs are running.",
    outputExample: "$ ps aux | head -3\nUSER  PID  %CPU  %MEM  COMMAND\nroot    1  0.1  0.5  /sbin/init",
    category: "PROCESSES"
  },
  {
    id: "proc3",
    question: "Kill a process",
    answer: "kill PID",
    explanation: "'kill' sends a signal to a process (default SIGTERM). Use PID from ps command.",
    usage: "Stop misbehaving or unwanted processes gracefully.",
    examples: [
      "kill 1234  # Terminate process 1234",
      "kill -9 1234  # Force kill process 1234",
      "killall firefox  # Kill all firefox processes"
    ],
    memoryTip: "kill = terminate. Like stopping a running process.",
    outputExample: "$ ps aux | grep process\nuser  1234  0.0  0.1  process\n$ kill 1234",
    category: "PROCESSES"
  },
  {
    id: "proc4",
    question: "Run process in background",
    answer: "command &",
    explanation: "'&' runs the command in the background, returning control to the shell immediately.",
    usage: "Execute long-running tasks without blocking the terminal.",
    examples: [
      "long_running_script.sh &  # Background execution",
      "ping google.com &  # Continuous ping in background",
      "nohup command &  # Background with no hangup"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "PROCESSES"
  },
  {
    id: "proc5",
    question: "Bring background job to foreground",
    answer: "fg %job_number",
    explanation: "'fg' brings a background job to the foreground. %1 refers to the first background job.",
    usage: "Interact with background processes or bring them back to active control.",
    examples: [
      "fg  # Bring last background job to foreground",
      "fg %1  # Bring job number 1 to foreground",
      "jobs  # List background jobs first"
    ],
    memoryTip: "Command: 'fg'. Like using a tool to accomplish a task.",
    outputExample: "$ fg\n(output depends on context)",
    category: "PROCESSES"
  },
  {
    id: "proc6",
    question: "Send job to background",
    answer: "bg %job_number",
    explanation: "'bg' resumes a stopped job in the background.",
    usage: "Continue suspended jobs without bringing them to foreground.",
    examples: [
      "bg  # Resume last stopped job in background",
      "bg %2  # Resume job number 2",
      "Ctrl+Z then bg  # Suspend then background current job"
    ],
    memoryTip: "Command: 'bg'. Like using a tool to accomplish a task.",
    outputExample: "$ bg\n(output depends on context)",
    category: "PROCESSES"
  },
  {
    id: "proc7",
    question: "Show background jobs",
    answer: "jobs",
    explanation: "'jobs' lists current background and stopped jobs with job numbers.",
    usage: "Monitor background tasks and identify jobs by number.",
    examples: [
      "jobs  # List all jobs",
      "jobs -l  # Include process IDs",
      "jobs -r  # Show only running jobs"
    ],
    memoryTip: "Command: 'jobs'. Like using a tool to accomplish a task.",
    outputExample: "$ jobs\n(output depends on context)",
    category: "PROCESSES"
  },
  {
    id: "proc8",
    question: "Monitor processes in real-time",
    answer: "top",
    explanation: "'top' shows real-time process information sorted by CPU usage.",
    usage: "Monitor system performance and identify resource-intensive processes.",
    examples: [
      "top  # Interactive process monitor",
      "top -u username  # Show specific user's processes",
      "htop  # Enhanced version if available"
    ],
    memoryTip: "Command: 'top'. Like using a tool to accomplish a task.",
    outputExample: "$ top\n(output depends on context)",
    category: "PROCESSES"
  },
  {
    id: "proc9",
    question: "Find process by name",
    answer: "pgrep process_name",
    explanation: "'pgrep' searches for processes by name and returns their PIDs.",
    usage: "Find process IDs for use with kill or other process management commands.",
    examples: [
      "pgrep apache  # Find apache process IDs",
      "pgrep -f 'python script.py'  # Find by full command line",
      "pgrep -u username process  # Find user's processes"
    ],
    memoryTip: "grep = search. Like using find function to search for text.",
    outputExample: "$ grep 'pattern' file.txt\nline with pattern",
    category: "PROCESSES"
  },
  {
    id: "proc10",
    question: "Kill process by name",
    answer: "pkill process_name",
    explanation: "'pkill' kills processes by name without needing to find PIDs first.",
    usage: "Quickly stop processes when you know the name but not the PID.",
    examples: [
      "pkill firefox  # Kill all firefox processes",
      "pkill -f 'python'  # Kill python processes",
      "pkill -u baduser  # Kill all processes of a user"
    ],
    memoryTip: "kill = terminate. Like stopping a running process.",
    outputExample: "$ ps aux | grep process\nuser  1234  0.0  0.1  process\n$ kill 1234",
    category: "PROCESSES"
  },
  {
    id: "proc11",
    question: "Monitor processes in real-time",
    answer: "top",
    explanation: "'top' displays running processes sorted by CPU/memory usage and updates in real-time.",
    usage: "Monitor system performance, find resource-hungry processes, and troubleshoot slowdowns.",
    examples: [
      "top  # Interactive process monitor",
      "top -u username  # Top processes for user",
      "top -n 1  # Single update (non-interactive)"
    ],
    memoryTip: "'top' = top processes. Like a scoreboard showing which programs use the most resources.",
    outputExample: "$ top\nPID USER    PR NI VIRT   RES  CPU  MEM COMMAND\n1234 user   20  0 2.5G  500M  45%  8%  firefox\n1235 user   20  0 1.2G  300M  15%  5%  chrome",
    category: "PROCESSES"
  },
  {
    id: "proc12",
    question: "Show process hierarchy",
    answer: "pstree",
    explanation: "'pstree' displays processes in a tree format showing parent-child relationships.",
    usage: "Understand process structure, find process dependencies, and debug service issues.",
    examples: [
      "pstree  # Show process tree",
      "pstree -p  # Include process IDs",
      "pstree -u user  # Processes for specific user"
    ],
    memoryTip: "'pstree' = family tree. Like showing how processes are related to each other.",
    outputExample: "$ pstree\ninit(1)-+-apache(1234)---apache(1235)\n         |-sshd(2000)---sshd(2001)---bash(2002)\n         `-systemd(1)---cron(1000)",
    category: "PROCESSES"
  },
  {
    id: "proc13",
    question: "Get process information",
    answer: "ps -p PID -o pid,cmd,etime,cpu",
    explanation: "'ps -o' outputs custom columns of process information.",
    usage: "Get specific information about processes in a formatted view.",
    examples: [
      "ps -p 1234 -o pid,cmd,%cpu,%mem  # Custom columns",
      "ps -o pid,user,cmd  # User-defined format",
      "ps -e -o pid,cmd,etime  # All processes with elapsed time"
    ],
    memoryTip: "'ps -o' = custom output. Like choosing which columns to display from process data.",
    outputExample: "$ ps -p 1234 -o pid,cmd,%cpu\nPID CMD           %CPU\n1234 firefox     15.2",
    category: "PROCESSES"
  },
  {
    id: "proc14",
    question: "Show process file descriptors",
    answer: "lsof -p PID",
    explanation: "'lsof' shows all files, sockets, and pipes opened by a process.",
    usage: "Debug process issues, find which files a process uses, or check for resource leaks.",
    examples: [
      "lsof -p 1234  # Files opened by process 1234",
      "lsof -c apache  # All files opened by apache",
      "lsof -i :8080  # Process using port 8080"
    ],
    memoryTip: "'lsof' = list open files. Like tracking what resources a program is currently using.",
    outputExample: "$ lsof -p 1234\nCOMMAND    PID USER   FD   TYPE DEVICE  SIZE  NODE NAME\nfirefox   1234 user  cwd    DIR    801 4096  1000 /home/user\nfirefox   1234 user    0r   REG    801  2048  2000 /dev/urandom",
    category: "PROCESSES"
  },
  {
    id: "proc15",
    question: "Wait for process to finish",
    answer: "wait PID",
    explanation: "'wait' pauses script execution until a background process completes.",
    usage: "Coordinate multiple background jobs in scripts.",
    examples: [
      "long_job &\nwait  # Wait for all background jobs",
      "process1 & pid1=$!\nprocess2 & pid2=$!\nwait $pid1 $pid2",
      "backup.sh & sleep 1 && wait  # Start backup then wait"
    ],
    memoryTip: "'wait' = pause and wait. Like waiting for someone to finish before continuing.",
    outputExample: "$ long_task &\n[1] 1234\n$ wait 1234\n$ echo 'Task completed'",
    category: "PROCESSES"
  },
  {
    id: "proc16",
    question: "Show full command line",
    answer: "ps aux",
    explanation: "'ps aux' shows the full command-line arguments for each process.",
    usage: "Find processes with specific arguments or see what options programs were started with.",
    examples: [
      "ps aux | grep python  # Find python processes with arguments",
      "ps aux | head  # Show some processes",
      "ps aux --sort=-%mem  # Sort by memory usage"
    ],
    memoryTip: "'ps aux' = detailed process info. Like a full resume showing all process details.",
    outputExample: "$ ps aux | grep apache\nwww-data 1234  0.0  0.2 200000 5000 ?  S  09:00   0:01 /usr/sbin/apache2 -k start",
    category: "PROCESSES"
  },
  {
    id: "proc17",
    question: "Send signal to process",
    answer: "kill -SIGNAL PID",
    explanation: "'kill -SIGNAL' sends different signals to processes (TERM, KILL, HUP, USR1, etc).",
    usage: "Control process behavior - graceful shutdown, restart, or forced termination.",
    examples: [
      "kill -TERM 1234  # Graceful shutdown",
      "kill -9 1234  # Force kill",
      "kill -HUP 1234  # Reload configuration"
    ],
    memoryTip: "Signals = messages to processes. Like sending instructions to a program.",
    outputExample: "$ kill -TERM 1234\n[1]+  Terminated  process\n$ kill -9 1234\n$ echo $?",
    category: "PROCESSES"
  },
  {
    id: "proc18",
    question: "Background/foreground processes",
    answer: "command &   # background\nfg  # foreground",
    explanation: "'&' sends a command to background; 'fg' brings it to foreground; 'bg' resumes in background.",
    usage: "Run multiple jobs in one terminal, manage long-running tasks.",
    examples: [
      "long_task &  # Run in background",
      "fg %1  # Bring job 1 to foreground",
      "Ctrl+Z then bg  # Pause and resume in background"
    ],
    memoryTip: "'&' = background operator. Like doing chores while someone else talks to you.",
    outputExample: "$ sleep 100 &\n[1] 5678\n$ jobs\n[1]+  Running  sleep 100\n$ fg\nsleep 100",
    category: "PROCESSES"
  },
  {
    id: "proc19",
    question: "Set process priority",
    answer: "nice -n 10 command",
    explanation: "'nice' starts a process with adjusted priority; 'renice' changes priority of running process.",
    usage: "Lower priority for background jobs or raise priority for critical processes.",
    examples: [
      "nice -n 19 backup.sh  # Very low priority",
      "nice -n -5 important_task  # Higher priority",
      "renice -n 5 -p 1234  # Change existing process priority"
    ],
    memoryTip: "'nice -n' = set priority. Like letting someone go first (high priority) or last (low priority).",
    outputExample: "$ nice -n 10 makeprocess\n$ ps -p $! -o pid,cmd,ni\nPID  COMMAND    NI\n1234 makeprocess 10",
    category: "PROCESSES"
  },
  {
    id: "proc20",
    question: "List open network connections",
    answer: "netstat -tlnp",
    explanation: "'netstat' shows network connections, listening ports, and associated processes.",
    usage: "Find which processes are listening on ports, check network connections, troubleshoot network issues.",
    examples: [
      "netstat -tlnp  # TCP listening ports with processes",
      "ss -tlnp  # Modern netstat alternative",
      "lsof -i :8080  # What process uses port 8080"
    ],
    memoryTip: "'netstat' = network statistics. Like seeing who's talking on the network and on which channels.",
    outputExample: "$ netstat -tlnp\nProto Local Address     Foreign Address  State    PID/Program name\ntcp   0.0.0.0:22        0.0.0.0:*        LISTEN   1000/sshd\ntcp   0.0.0.0:80        0.0.0.0:*        LISTEN   1234/apache2",
    category: "PROCESSES"
  },

  // NETWORKING
  {
    id: "net1",
    question: "Check network connectivity",
    answer: "ping hostname",
    explanation: "'ping' sends ICMP echo requests to test network connectivity and response time.",
    usage: "Test if a host is reachable and measure network latency.",
    examples: [
      "ping google.com  # Test internet connectivity",
      "ping -c 4 192.168.1.1  # Send 4 packets to local router",
      "ping -i 2 host  # Ping every 2 seconds"
    ],
    memoryTip: "Command: 'ping'. Like using a tool to accomplish a task.",
    outputExample: "$ ping\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net2",
    question: "Show network interfaces",
    answer: "ip addr show",
    explanation: "'ip addr show' displays IP addresses and network interface information.",
    usage: "Check network configuration, IP addresses, and interface status.",
    examples: [
      "ip addr show  # Show all interfaces",
      "ip addr show eth0  # Show specific interface",
      "ip route show  # Show routing table"
    ],
    memoryTip: "Command: 'ip'. Like using a tool to accomplish a task.",
    outputExample: "$ ip\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net3",
    question: "Download file from web",
    answer: "wget URL",
    explanation: "'wget' downloads files from web URLs with resume capability.",
    usage: "Download files, websites, or automate file retrieval.",
    examples: [
      "wget https://example.com/file.zip  # Download file",
      "wget -c large_file.iso  # Resume interrupted download",
      "wget -r https://site.com/  # Download entire website"
    ],
    memoryTip: "Command: 'wget'. Like using a tool to accomplish a task.",
    outputExample: "$ wget\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net4",
    question: "Transfer data over network",
    answer: "scp file user@host:destination",
    explanation: "'scp' securely copies files between hosts using SSH.",
    usage: "Transfer files securely between local and remote systems.",
    examples: [
      "scp file.txt user@server:/home/user/  # Upload file",
      "scp user@server:file.txt .  # Download file",
      "scp -r directory user@server:/backup/  # Upload directory"
    ],
    memoryTip: "cp = copy. Like making a duplicate of something.",
    outputExample: "$ cp file.txt file_copy.txt\n$ ls\nfile.txt  file_copy.txt",
    category: "NETWORKING"
  },
  {
    id: "net5",
    question: "Secure shell connection",
    answer: "ssh user@hostname",
    explanation: "'ssh' creates encrypted connections to remote hosts for secure command execution.",
    usage: "Access remote systems securely, run commands remotely, or tunnel connections.",
    examples: [
      "ssh user@server.com  # Connect to remote host",
      "ssh -X user@server  # Enable X11 forwarding",
      "ssh -p 2222 user@server  # Connect to non-standard port"
    ],
    memoryTip: "Command: 'ssh'. Like using a tool to accomplish a task.",
    outputExample: "$ ssh\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net6",
    question: "Show open ports",
    answer: "netstat -tlnp",
    explanation: "'netstat -tlnp' shows listening TCP ports and associated processes.",
    usage: "Check which services are listening on which ports.",
    examples: [
      "netstat -tlnp  # Show listening ports",
      "netstat -tulnp  # Include UDP ports",
      "ss -tlnp  # Modern alternative"
    ],
    memoryTip: "Command: 'netstat'. Like using a tool to accomplish a task.",
    outputExample: "$ netstat\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net7",
    question: "DNS lookup",
    answer: "nslookup domain",
    explanation: "'nslookup' queries DNS servers to find IP addresses for domain names.",
    usage: "Troubleshoot DNS issues or find IP addresses for domains.",
    examples: [
      "nslookup google.com  # Find IP address",
      "nslookup -type=mx domain.com  # Find mail servers",
      "dig domain.com  # More detailed DNS information"
    ],
    memoryTip: "Command: 'nslookup'. Like using a tool to accomplish a task.",
    outputExample: "$ nslookup\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net8",
    question: "Show routing table",
    answer: "ip route show",
    explanation: "'ip route show' displays the kernel routing table.",
    usage: "Check how network traffic is routed and troubleshoot connectivity issues.",
    examples: [
      "ip route show  # Show routing table",
      "ip route get 8.8.8.8  # Show route to specific IP",
      "route -n  # Alternative command"
    ],
    memoryTip: "Command: 'ip'. Like using a tool to accomplish a task.",
    outputExample: "$ ip\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net9",
    question: "Check remote host connectivity",
    answer: "telnet host port",
    explanation: "'telnet' connects to remote hosts on specific ports for testing services.",
    usage: "Test if specific network services are running and accessible.",
    examples: [
      "telnet localhost 80  # Test web server",
      "telnet mail.server.com 25  # Test SMTP server",
      "nc -zv host port  # Modern alternative (netcat)"
    ],
    memoryTip: "Command: 'telnet'. Like using a tool to accomplish a task.",
    outputExample: "$ telnet\n(output depends on context)",
    category: "NETWORKING"
  },
  {
    id: "net10",
    question: "Monitor network connections",
    answer: "netstat -antp",
    explanation: "'netstat -antp' shows all network connections with process information.",
    usage: "Monitor active network connections and identify which processes are communicating.",
    examples: [
      "netstat -antp  # Show all connections",
      "netstat -antp | grep ESTABLISHED  # Show active connections",
      "ss -antp  # Modern alternative"
    ],
    memoryTip: "'netstat -antp' = network snapshot. Like taking a photo of all current network connections.",
    outputExample: "$ netstat -antp | head -3\nProto Local Address      Foreign Address  State  PID/Program\ntcp   0.0.0.0:22         0.0.0.0:*        LISTEN 1000/sshd\ntcp   192.168.1.5:48201 10.0.0.1:443     ESTABLISHED 2000/firefox",
    category: "NETWORKING"
  },
  {
    id: "net11",
    question: "Test network connectivity",
    answer: "ping hostname",
    explanation: "'ping' sends ICMP echo requests to test if a host is reachable and measure latency.",
    usage: "Test network connectivity, check if servers are up, measure response times.",
    examples: [
      "ping google.com  # Test connectivity",
      "ping -c 4 hostname  # Send 4 packets then stop",
      "ping -i 2 hostname  # Ping every 2 seconds"
    ],
    memoryTip: "'ping' = echo request. Like yelling into a canyon and waiting for the echo back.",
    outputExample: "$ ping -c 3 google.com\nPING google.com (142.250.185.46) 56(84) bytes of data.\n64 bytes from 142.250.185.46: icmp_seq=1 ttl=119 time=15.4 ms\n64 bytes from 142.250.185.46: icmp_seq=2 ttl=119 time=14.8 ms",
    category: "NETWORKING"
  },
  {
    id: "net12",
    question: "Find hostname from IP",
    answer: "host IP_address",
    explanation: "'host' performs DNS lookups to resolve IP addresses to hostnames and vice versa.",
    usage: "Look up DNS information, verify domain configuration, troubleshoot DNS issues.",
    examples: [
      "host google.com  # Get IP for domain",
      "host 8.8.8.8  # Reverse DNS lookup",
      "host -v google.com  # Verbose output"
    ],
    memoryTip: "'host' = DNS lookup. Like finding someone's address when you know their name.",
    outputExample: "$ host google.com\ngoogle.com has address 142.250.185.46\ngoogle.com has IPv6 address 2607:f8b0:4004:81d::200e",
    category: "NETWORKING"
  },
  {
    id: "net13",
    question: "Trace network route to host",
    answer: "traceroute hostname",
    explanation: "'traceroute' shows the network path packets take to reach a destination.",
    usage: "Troubleshoot network issues, identify where connections are slow or failing.",
    examples: [
      "traceroute google.com  # Trace path",
      "traceroute -m 30 hostname  # Set max hops",
      "mtr hostname  # Interactive traceroute"
    ],
    memoryTip: "'traceroute' = follow the path. Like tracking where a package travels through the network.",
    outputExample: "$ traceroute google.com\ntraceroute to google.com (142.250.185.46), 30 hops max\n  1  192.168.1.1 (gateway)  1.234 ms\n  2  10.0.0.1 (ISP router)  5.678 ms\n  3  142.250.185.46 (google.com)  15.234 ms",
    category: "NETWORKING"
  },
  {
    id: "net14",
    question: "View network interfaces",
    answer: "ip addr show",
    explanation: "'ip addr show' displays all network interfaces and their IP configurations.",
    usage: "Check network configuration, verify IP assignments, troubleshoot network issues.",
    examples: [
      "ip addr show  # Show all interfaces",
      "ip link show  # Show interface status",
      "ifconfig  # Older alternative"
    ],
    memoryTip: "'ip addr' = show interfaces. Like listing all network cards and their addresses.",
    outputExample: "$ ip addr show\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536\n   inet 127.0.0.1/8\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n   inet 192.168.1.100/24",
    category: "NETWORKING"
  },
  {
    id: "net15",
    question: "Show routing table",
    answer: "ip route show",
    explanation: "'ip route show' displays the kernel routing table showing how packets are routed.",
    usage: "Understand network routing, verify default routes, troubleshoot routing issues.",
    examples: [
      "ip route show  # Show all routes",
      "route  # Older alternative",
      "ip route get 8.8.8.8  # How would IP be routed?"
    ],
    memoryTip: "'ip route' = routing map. Like showing the directions packets take to reach destinations.",
    outputExample: "$ ip route show\ndefault via 192.168.1.1 dev eth0  metric 100\n192.168.1.0/24 dev eth0  proto kernel  scope link  src 192.168.1.100",
    category: "NETWORKING"
  },
  {
    id: "net16",
    question: "Monitor network traffic",
    answer: "tcpdump -i eth0",
    explanation: "'tcpdump' captures network traffic for analysis.",
    usage: "Debug network problems, analyze protocols, security auditing.",
    examples: [
      "tcpdump -i eth0  # Capture on interface",
      "tcpdump -i eth0 -n -l | grep :22  # SSH traffic",
      "tcpdump 'port 443' -w capture.pcap  # Save to file"
    ],
    memoryTip: "'tcpdump' = packet sniffer. Like listening to network conversations.",
    outputExample: "$ sudo tcpdump -i eth0 -c 5\ntcpdump: listening on eth0, link-type EN10MB\n14:35:20.123456 IP 192.168.1.100.54321 > 8.8.8.8.53: UDP query\n14:35:20.124567 IP 8.8.8.8.53 > 192.168.1.100.54321: UDP response",
    category: "NETWORKING"
  },
  {
    id: "net17",
    question: "Configure network interface",
    answer: "sudo ip addr add 192.168.1.50/24 dev eth0",
    explanation: "'ip addr add' assigns IP addresses to network interfaces.",
    usage: "Configure IP addresses, set up multiple IPs on one interface.",
    examples: [
      "sudo ip addr add 192.168.1.50/24 dev eth0  # Add IP",
      "sudo ip addr del 192.168.1.50/24 dev eth0  # Remove IP",
      "sudo ip addr flush dev eth0  # Remove all IPs"
    ],
    memoryTip: "'ip addr add' = assign address. Like giving a network card a new phone number.",
    outputExample: "$ sudo ip addr add 192.168.100.50/24 dev eth0\n$ ip addr show eth0\n2: eth0: <BROADCAST,MULTICAST,UP>\n   inet 192.168.1.100/24\n   inet 192.168.100.50/24  scope global secondary",
    category: "NETWORKING"
  },
  {
    id: "net18",
    question: "Test open port connectivity",
    answer: "nc -zv hostname port",
    explanation: "'nc' (netcat) tests connectivity to a specific host and port.",
    usage: "Verify services are running, test firewall rules, debug connectivity issues.",
    examples: [
      "nc -zv google.com 443  # Test HTTPS port",
      "nc -zv -w 3 hostname 22  # SSH with 3 second timeout",
      "echo 'test' | nc -w 1 hostname 1234  # Send data"
    ],
    memoryTip: "'nc' = network cat. Like trying to open a door to see if someone's home.",
    outputExample: "$ nc -zv google.com 443\nConnection to google.com 443 port [tcp/https] succeeded!",
    category: "NETWORKING"
  },
  {
    id: "net19",
    question: "Download files from network",
    answer: "wget url",
    explanation: "'wget' downloads files from the internet via HTTP, HTTPS, or FTP.",
    usage: "Fetch web content, download scripts, mirror websites.",
    examples: [
      "wget https://example.com/file.zip  # Download file",
      "wget -r https://example.com/  # Recursive download",
      "wget -O newname.zip https://example.com/file.zip  # Rename download"
    ],
    memoryTip: "'wget' = web get. Like grabbing files from the internet.",
    outputExample: "$ wget https://www.gnu.org/licenses/gpl.txt\n--2024-01-15 10:30:00--  https://www.gnu.org/licenses/gpl.txt\nConnecting to www.gnu.org... connected.\nHTTP request sent, awaiting response... 200 OK",
    category: "NETWORKING"
  },
  {
    id: "net20",
    question: "Check DNS resolution",
    answer: "dig domain.com",
    explanation: "'dig' performs DNS lookups and shows detailed DNS record information.",
    usage: "Debug DNS problems, check DNS propagation, verify DNS records.",
    examples: [
      "dig google.com  # Full DNS information",
      "dig google.com +short  # Brief output",
      "dig @8.8.8.8 google.com  # Query specific nameserver"
    ],
    memoryTip: "'dig' = deep inspection. Like digging into DNS records to see everything.",
    outputExample: "$ dig google.com +short\n142.250.185.46\n2607:f8b0:4004:81d::200e",
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
    question: "Replace text in a file",
    answer: "sed 's/old/new/g' file",
    explanation: "'sed' is a stream editor that can perform text transformations on files or streams.",
    usage: "Make bulk text replacements, format output, or perform complex text manipulations.",
    examples: [
      "sed 's/old/new/g' file.txt  # Replace all occurrences",
      "sed 's/^/# /' file.txt  # Comment out lines",
      "sed '1,10d' file.txt  # Delete lines 1-10"
    ],
    memoryTip: "Command: 'sed'. Like using a tool to accomplish a task.",
    outputExample: "$ sed\n(output depends on context)",
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
    question: "Remove duplicate lines",
    answer: "uniq file",
    explanation: "'uniq' removes consecutive duplicate lines. Often used with sort.",
    usage: "Clean up lists, remove duplicates, or count occurrences.",
    examples: [
      "sort file.txt | uniq  # Remove duplicates",
      "uniq -c file.txt  # Count occurrences",
      "uniq -d file.txt  # Show only duplicates"
    ],
    memoryTip: "Command: 'uniq'. Like using a tool to accomplish a task.",
    outputExample: "$ uniq\n(output depends on context)",
    category: "TEXT PROCESSING"
  },
  {
    id: "text6",
    question: "Translate characters",
    answer: "tr 'a-z' 'A-Z' < file",
    explanation: "'tr' translates or deletes characters from input.",
    usage: "Change case, remove characters, or perform simple character transformations.",
    examples: [
      "tr 'a-z' 'A-Z' < file.txt  # Convert to uppercase",
      "tr -d ' ' < file.txt  # Remove spaces",
      "tr ' ' '\\n' < file.txt  # Replace spaces with newlines"
    ],
    memoryTip: "Command: 'tr'. Like using a tool to accomplish a task.",
    outputExample: "$ tr\n(output depends on context)",
    category: "TEXT PROCESSING"
  },
  {
    id: "text7",
    question: "Cut out selected portions",
    answer: "cut -d: -f1 file",
    explanation: "'cut' removes sections from each line of a file.",
    usage: "Extract specific fields from structured text like CSV or passwd files.",
    examples: [
      "cut -d: -f1 /etc/passwd  # Extract usernames",
      "cut -c 1-10 file.txt  # Extract first 10 characters",
      "cut -d, -f2,4 file.csv  # Extract columns 2 and 4 from CSV"
    ],
    memoryTip: "cut = slice. Like cutting pieces from a string.",
    outputExample: "$ cut -d: -f1 /etc/passwd\nroot\nbin\ndaemon",
    category: "TEXT PROCESSING"
  },
  {
    id: "text8",
    question: "Paste lines together",
    answer: "paste file1 file2",
    explanation: "'paste' merges lines from multiple files side by side.",
    usage: "Combine corresponding lines from multiple files or create tabular output.",
    examples: [
      "paste names.txt ages.txt  # Combine name and age files",
      "paste -s file.txt  # Serial paste (all lines on one line)",
      "paste -d, file1 file2  # Use comma as delimiter"
    ],
    memoryTip: "Command: 'paste'. Like using a tool to accomplish a task.",
    outputExample: "$ paste\n(output depends on context)",
    category: "TEXT PROCESSING"
  },
  {
    id: "text9",
    question: "Compare two files",
    answer: "diff file1 file2",
    explanation: "'diff' shows differences between files line by line.",
    usage: "Compare file versions, check for changes, or create patches.",
    examples: [
      "diff old.conf new.conf  # Show differences",
      "diff -u file1 file2  # Unified format",
      "diff -r dir1 dir2  # Compare directories"
    ],
    memoryTip: "Command: 'diff'. Like using a tool to accomplish a task.",
    outputExample: "$ diff\n(output depends on context)",
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
    question: "Reverse lines or words",
    answer: "rev file",
    explanation: "'rev' reverses the characters in each line.",
    usage: "Reverse text for various text processing tasks.",
    examples: [
      "rev file.txt  # Reverse each line",
      "echo 'hello' | rev  # Reverse text in pipe",
      "rev file.txt | sort | rev  # Reverse sort"
    ],
    memoryTip: "'rev' = reverse. Like mirroring text backwards.",
    outputExample: "$ echo 'hello world' | rev\ndlrow olleh",
    category: "TEXT PROCESSING"
  },
  {
    id: "text20",
    question: "Expand tabs to spaces",
    answer: "expand file.txt",
    explanation: "'expand' converts tab characters to spaces.",
    usage: "Normalize whitespace in files or prepare text for tools sensitive to tabs.",
    examples: [
      "expand file.txt  # Convert tabs to spaces",
      "expand -t 4 file.txt  # 4 spaces per tab",
      "expand file.txt > output.txt  # Save expanded version"
    ],
    memoryTip: "'expand' = expand tabs. Like converting tab indents to space indents.",
    outputExample: "$ expand file.txt\nthis    has    spaces    instead    of    tabs",
    category: "TEXT PROCESSING"
  },

  // SYSTEM INFO
  {
    id: "sys1",
    question: "Show system information",
    answer: "uname -a",
    explanation: "'uname' displays system information including kernel version and architecture.",
    usage: "Check what Linux distribution and kernel version you're running.",
    examples: [
      "uname -a  # All system information",
      "uname -r  # Kernel release",
      "uname -m  # Machine hardware name"
    ],
    memoryTip: "Command: 'uname'. Like using a tool to accomplish a task.",
    outputExample: "$ uname\n(output depends on context)",
    category: "SYSTEM INFO"
  },
  {
    id: "sys2",
    question: "Show disk usage",
    answer: "df -h",
    explanation: "'df' displays filesystem disk space usage in human-readable format.",
    usage: "Check available disk space and filesystem usage.",
    examples: [
      "df -h  # Human-readable sizes",
      "df -i  # Show inode usage",
      "df -T  # Show filesystem types"
    ],
    memoryTip: "Command: 'df'. Like using a tool to accomplish a task.",
    outputExample: "$ df\n(output depends on context)",
    category: "SYSTEM INFO"
  },
  {
    id: "sys3",
    question: "Show memory usage",
    answer: "free -h",
    explanation: "'free' displays memory and swap usage statistics.",
    usage: "Monitor memory usage and check for memory pressure.",
    examples: [
      "free -h  # Human-readable format",
      "free -s 5  # Update every 5 seconds",
      "free -t  # Show totals"
    ],
    memoryTip: "Command: 'free'. Like using a tool to accomplish a task.",
    outputExample: "$ free\n(output depends on context)",
    category: "SYSTEM INFO"
  },
  {
    id: "sys4",
    question: "Show system uptime",
    answer: "uptime",
    explanation: "'uptime' shows how long the system has been running and load averages.",
    usage: "Check system stability and current load.",
    examples: [
      "uptime  # Show uptime and load",
      "uptime -p  # Pretty format",
      "uptime -s  # Since when system started"
    ],
    memoryTip: "Command: 'uptime'. Like using a tool to accomplish a task.",
    outputExample: "$ uptime\n(output depends on context)",
    category: "SYSTEM INFO"
  },
  {
    id: "sys5",
    question: "Show CPU information",
    answer: "lscpu",
    explanation: "'lscpu' displays CPU architecture information.",
    usage: "Check CPU details, cores, threads, and architecture.",
    examples: [
      "lscpu  # Detailed CPU information",
      "lscpu | grep 'CPU(s)'  # Number of CPUs",
      "lscpu | grep Architecture  # CPU architecture"
    ],
    memoryTip: "ls = list. Like listing your shopping items.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Pictures  Videos",
    category: "SYSTEM INFO"
  },
  {
    id: "sys6",
    question: "Show PCI devices",
    answer: "lspci",
    explanation: "'lspci' lists all PCI devices in the system.",
    usage: "Check what hardware devices are connected via PCI bus.",
    examples: [
      "lspci  # List all PCI devices",
      "lspci -v  # Verbose output",
      "lspci | grep VGA  # Find graphics card"
    ],
    memoryTip: "ls = list. Like listing your shopping items.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Pictures  Videos",
    category: "SYSTEM INFO"
  },
  {
    id: "sys7",
    question: "Show USB devices",
    answer: "lsusb",
    explanation: "'lsusb' lists USB devices connected to the system.",
    usage: "Check what USB devices are connected and their details.",
    examples: [
      "lsusb  # List USB devices",
      "lsusb -v  # Verbose information",
      "lsusb -t  # Tree view"
    ],
    memoryTip: "ls = list. Like listing your shopping items.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Pictures  Videos",
    category: "SYSTEM INFO"
  },
  {
    id: "sys8",
    question: "Show kernel modules",
    answer: "lsmod",
    explanation: "'lsmod' shows the status of modules in the Linux kernel.",
    usage: "Check which kernel modules are loaded.",
    examples: [
      "lsmod  # List loaded modules",
      "lsmod | grep usb  # Find USB-related modules",
      "lsmod | wc -l  # Count loaded modules"
    ],
    memoryTip: "ls = list. Like listing your shopping items.",
    outputExample: "$ ls\nDesktop  Documents  Downloads  Pictures  Videos",
    category: "SYSTEM INFO"
  },
  {
    id: "sys9",
    question: "Show environment variables",
    answer: "env",
    explanation: "'env' displays all environment variables and their values.",
    usage: "Check current environment settings and debug configuration issues.",
    examples: [
      "env  # Show all environment variables",
      "env | grep PATH  # Check PATH variable",
      "env | sort  # Sorted list"
    ],
    memoryTip: "Command: 'env'. Like using a tool to accomplish a task.",
    outputExample: "$ env\n(output depends on context)",
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
    question: "Show kernel messages",
    answer: "dmesg",
    explanation: "'dmesg' displays kernel ring buffer messages.",
    usage: "Check hardware issues, driver problems, or boot messages.",
    examples: [
      "dmesg  # All kernel messages",
      "dmesg | tail -20  # Recent messages",
      "dmesg | grep error  # Look for errors"
    ],
    memoryTip: "'dmesg' = system debug. Like checking the system's error log.",
    outputExample: "$ dmesg | grep -i error\n[    0.123456] Error: Could not find device\n[    1.234567] USB device error",
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
    question: "Install package",
    answer: "apt-get install package_name",
    explanation: "'apt-get install' downloads and installs packages from repositories.",
    usage: "Add software to your system.",
    examples: [
      "apt-get install vim  # Install vim editor",
      "apt-get install -y package  # Auto-yes",
      "apt install package  # Newer syntax"
    ],
    memoryTip: "'apt install' = get software. Like shopping for apps in an app store.",
    outputExample: "$ sudo apt install git\\nReading package lists... Done\\nSetting up git (1:2.34.1) ...\\nProcessing triggers for man-db (2.10.2-1)...",
    category: "PACKAGES"
  },
  {
    id: "pkg2",
    question: "Remove package",
    answer: "apt-get remove package_name",
    explanation: "'apt-get remove' uninstalls packages but leaves configuration files.",
    usage: "Remove software you no longer need.",
    examples: [
      "apt-get remove vim  # Remove package",
      "apt-get purge vim  # Remove with config files",
      "apt-get autoremove  # Remove dependencies"
    ],
    memoryTip: "'apt remove' = delete app. Like uninstalling software.",
    outputExample: "$ sudo apt remove vim\\nReading package lists... Done\\nRemoving vim (2:8.2.3455-1ubuntu1) ...",
    category: "PACKAGES"
  },
  {
    id: "pkg3",
    question: "Update package list",
    answer: "apt-get update",
    explanation: "'apt-get update' refreshes the list of available packages from repositories.",
    usage: "Get latest package information before installing.",
    examples: [
      "apt-get update  # Refresh package list",
      "apt-get update && apt-get upgrade  # Update then upgrade",
      "apt update  # Newer syntax"
    ],
    memoryTip: "'apt update' = check store. Like checking what products are available.",
    outputExample: "$ sudo apt update\nHit:1 http://archive.ubuntu.com/ubuntu focal InRelease\nFetched 5.2 MB in 2s",
    category: "PACKAGES"
  },
  {
    id: "pkg4",
    question: "Upgrade packages",
    answer: "apt-get upgrade",
    explanation: "'apt-get upgrade' updates all installed packages to newer versions.",
    usage: "Keep your system up-to-date with security and feature updates.",
    examples: [
      "apt-get upgrade  # Upgrade packages",
      "apt-get dist-upgrade  # Major version upgrades",
      "apt full-upgrade  # Same as dist-upgrade"
    ],
    memoryTip: "'apt upgrade' = update apps. Like installing new versions of your software.",
    outputExample: "$ sudo apt upgrade\nReading package lists... Done\nUpgrading 24 packages (450 MB)...",
    category: "PACKAGES"
  },
  {
    id: "pkg5",
    question: "Search for package",
    answer: "apt-cache search package_name",
    explanation: "'apt-cache search' finds packages matching a search term.",
    usage: "Find packages before installing.",
    examples: [
      "apt-cache search python  # Find python packages",
      "apt search database  # Newer syntax",
      "apt-cache search --full text  # Full text search"
    ],
    memoryTip: "'apt search' = find app. Like searching in an app store.",
    outputExample: "$ apt search git\ngit/focal 1:2.25.1-1ubuntu1.1 amd64\n  stupid content tracker\ngit-all/focal 1:2.25.1-1ubuntu1.1 all",
    category: "PACKAGES"
  },
  {
    id: "pkg6",
    question: "Show package information",
    answer: "apt-cache show package_name",
    explanation: "'apt-cache show' displays detailed information about a package.",
    usage: "Check package details before installing.",
    examples: [
      "apt-cache show vim  # Package info",
      "apt show vim  # Newer syntax",
      "dpkg -s vim  # Show installed version"
    ],
    memoryTip: "'apt show' = package details. Like reading a product description.",
    outputExample: "$ apt show git\nPackage: git\nVersion: 1:2.25.1-1ubuntu1.1\nDepends: git-man, liberror-perl\nSize: 3456 kB",
    category: "PACKAGES"
  },
  {
    id: "pkg7",
    question: "Check if package is installed",
    answer: "dpkg -l | grep package_name",
    explanation: "'dpkg -l' lists installed packages; grep filters results.",
    usage: "Verify if a package is installed on your system.",
    examples: [
      "dpkg -l | grep vim  # Check if installed",
      "apt list --installed | grep python  # List format",
      "which vim  # Check if executable is available"
    ],
    memoryTip: "'dpkg -l | grep' = find installed app. Like checking what's on your computer.",
    outputExample: "$ dpkg -l | grep vim\nii  vim  2:8.2.3455-1ubuntu1 amd64  highly configurable text editor",
    category: "PACKAGES"
  },
  {
    id: "pkg8",
    question: "Show package version",
    answer: "apt-cache policy package_name",
    explanation: "'apt-cache policy' shows available and installed versions of a package.",
    usage: "Check version compatibility before installation.",
    examples: [
      "apt-cache policy python3  # Version info",
      "apt-cache policy | head  # All packages",
      "dpkg -s package | grep Version  # Installed version"
    ],
    memoryTip: "'apt-cache policy' = version checker. Like checking what versions are available.",
    outputExample: "$ apt-cache policy python3\npython3:\n  Installed: 3.8.10-0ubuntu1\n  Candidate: 3.8.10-0ubuntu1",
    category: "PACKAGES"
  },
  {
    id: "pkg9",
    question: "Clean package cache",
    answer: "apt-get clean",
    explanation: "'apt-get clean' removes cached package files to free disk space.",
    usage: "Reclaim disk space after installing packages.",
    examples: [
      "apt-get clean  # Remove cache",
      "apt-get autoclean  # Remove old cache",
      "apt-get clean && apt-get autoclean  # Both"
    ],
    memoryTip: "'apt clean' = delete trash. Like emptying your download cache.",
    outputExample: "$ sudo apt clean\n$ du -sh /var/cache/apt/archives\n0\t/var/cache/apt/archives",
    category: "PACKAGES"
  },
  {
    id: "pkg10",
    question: "Hold package at current version",
    answer: "apt-mark hold package_name",
    explanation: "'apt-mark hold' prevents a package from being upgraded.",
    usage: "Keep specific packages at their current version.",
    examples: [
      "apt-mark hold vim  # Hold package",
      "apt-mark unhold vim  # Allow upgrade",
      "apt-mark showhold  # List held packages"
    ],
    memoryTip: "'apt-mark hold' = freeze version. Like pinning a package to prevent updates.",
    outputExample: "$ sudo apt-mark hold vim\nvim set to manually installed\n$ apt-mark showhold\nvim",
    category: "PACKAGES"
  },
  {
    id: "pkg11",
    question: "Install from local file",
    answer: "dpkg -i package.deb",
    explanation: "'dpkg -i' installs a .deb package file directly.",
    usage: "Install packages from downloaded files or offline.",
    examples: [
      "dpkg -i program.deb  # Install local package",
      "apt install ./program.deb  # Modern method",
      "dpkg -i *.deb  # Install all .deb files"
    ],
    memoryTip: "'dpkg -i' = install file. Like opening and running an installer.",
    outputExample: "$ sudo dpkg -i firefox_latest.deb\nSelecting previously unselected package firefox.\nSetting up firefox (91.0-1) ...",
    category: "PACKAGES"
  },
  {
    id: "pkg12",
    question: "List package dependencies",
    answer: "apt-cache depends package_name",
    explanation: "'apt-cache depends' shows what packages this package requires.",
    usage: "Understand package relationships and dependencies.",
    examples: [
      "apt-cache depends vim  # Show dependencies",
      "apt-cache depends --recurse vim  # Recursive dependencies",
      "apt-cache rdepends package  # What depends on this"
    ],
    memoryTip: "'apt depends' = package family. Like seeing what a package needs to work.",
    outputExample: "$ apt-cache depends git\ngit\n  Depends: git-man\n  Depends: perl\n  Depends: liberror-perl",
    category: "PACKAGES"
  },
  {
    id: "pkg13",
    question: "Add package repository",
    answer: "apt-add-repository 'ppa:user/ppa-name'",
    explanation: "'apt-add-repository' adds a new PPA (Personal Package Archive) source.",
    usage: "Access packages from additional repositories.",
    examples: [
      "sudo apt-add-repository ppa:ubuntu-mozilla-security/ppa  # Add PPA",
      "add-apt-repository --remove ppa:name  # Remove PPA",
      "apt-add-repository 'deb http://url/ distro main'  # Add deb source"
    ],
    memoryTip: "'apt-add-repository' = add store. Like adding a new shop to your available stores.",
    outputExample: "$ sudo apt-add-repository ppa:test/ppa\nRepository added.\nUpdating package lists...",
    category: "PACKAGES"
  },
  {
    id: "pkg16",
    question: "Show enabled APT repositories",
    answer: "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list",
    explanation: "APT repositories are configured in /etc/apt/sources.list and the .list files under /etc/apt/sources.list.d.",
    usage: "View which repositories your system uses to download packages.",
    examples: [
      "grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list  # Show enabled repos",
      "cat /etc/apt/sources.list  # View main repository list",
      "ls /etc/apt/sources.list.d/  # View additional source files"
    ],
    memoryTip: "Repositories live in /etc/apt. Think of them as the stores your package manager shops from.",
    outputExample: "$ grep -R '^deb' /etc/apt/sources.list /etc/apt/sources.list.d/*.list\n/etc/apt/sources.list:deb http://archive.ubuntu.com/ubuntu focal main restricted\n/etc/apt/sources.list.d/google-chrome.list:deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main",
    category: "PACKAGES"
  },
  {
    id: "pkg17",
    question: "Read a command manual page",
    answer: "man command",
    explanation: "The man command shows the manual page for a command and its available options.",
    usage: "Use built-in documentation to learn Linux commands and syntax.",
    examples: [
      "man ls  # View ls manual page",
      "man grep  # Read grep documentation",
      "man bash  # Read the bash shell manual"
    ],
    memoryTip: "man = manual. Like opening a command's helpbook when you are learning Linux.",
    outputExample: "$ man ls\nLS(1) User Commands\nName: ls - list directory contents\nSynopsis: ls [OPTION]... [FILE]...",
    category: "PACKAGES"
  },
  {
    id: "pkg14",
    question: "Check for broken dependencies",
    answer: "apt-get check",
    explanation: "'apt-get check' checks the package cache for broken dependencies.",
    usage: "Troubleshoot package installation problems.",
    examples: [
      "apt-get check  # Check dependencies",
      "apt-get install -f  # Fix broken packages",
      "dpkg --configure -a  # Configure unpacked packages"
    ],
    memoryTip: "'apt-get check' = verify health. Like a system diagnostic.",
    outputExample: "$ sudo apt-get check\nReading package lists... Done\nBuilding dependency tree... Done",
    category: "PACKAGES"
  },
  {
    id: "pkg15",
    question: "List package file contents",
    answer: "apt-file list package_name",
    explanation: "'apt-file list' shows all files contained in a package.",
    usage: "Check what files will be installed before installing.",
    examples: [
      "apt-file list vim  # List contents",
      "apt-file search file_name  # Find which package contains file",
      "dpkg -L vim  # Show files from installed package"
    ],
    memoryTip: "'apt-file list' = package inventory. Like listing all items in a box.",
    outputExample: "$ apt-file list git | head -5\ngit\t/usr/bin/git\ngit\t/usr/lib/git-core/git\ngit\t/usr/share/doc/git/",
    category: "PACKAGES"
  },

  // BASH SCRIPTING
  {
    id: "bash1",
    question: "Create a simple script",
    answer: "#!/bin/bash\necho 'Hello World'",
    explanation: "Bash scripts start with a shebang line '#!/bin/bash' and contain shell commands.",
    usage: "Automate repetitive tasks, create utilities, or batch process files.",
    examples: [
      "#!/bin/bash\necho 'Starting backup'\ntar -czf backup.tar.gz /home\n",
      "#!/bin/bash\nif [ $# -eq 0 ]; then\necho 'No arguments'\nfi\n",
      "#!/bin/bash\nfor file in *.txt; do\n  echo \"Processing $file\"\ndone\n"
    ],
    memoryTip: "Command: '#!/bin/bash\necho'. Like using a tool to accomplish a task.",
    outputExample: "$ #!/bin/bash\\necho\n(output depends on context)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash2",
    question: "Check if file exists",
    answer: "if [ -f file ]; then echo 'exists'; fi",
    explanation: "Bash conditional statements use 'if [ condition ]; then commands; fi' syntax.",
    usage: "Make scripts robust by checking conditions before executing commands.",
    examples: [
      "if [ -f config.txt ]; then\n  source config.txt\nfi\n",
      "if [ -d directory ]; then\n  cd directory\nfi\n",
      "if [ $# -gt 0 ]; then\n  echo \"Arguments: $@\"\nfi\n"
    ],
    memoryTip: "Command: 'if'. Like using a tool to accomplish a task.",
    outputExample: "$ if\n(output depends on context)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash3",
    question: "Loop through files",
    answer: "for file in *.txt; do echo $file; done",
    explanation: "Bash 'for' loops iterate over lists of items like filenames.",
    usage: "Process multiple files or perform repetitive operations.",
    examples: [
      "for file in *.jpg; do\n  convert $file ${file%.jpg}.png\ndone\n",
      "for i in {1..10}; do\n  echo \"Number: $i\"\ndone\n",
      "for dir in */; do\n  echo \"Directory: $dir\"\ndone\n"
    ],
    memoryTip: "'for loop' = repeat action. Like doing the same thing multiple times automatically.",
    outputExample: "$ for f in *.txt; do echo $f; done\nfile1.txt\nfile2.txt\nfile3.txt",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash4",
    question: "Read user input",
    answer: "read -p 'Enter name: ' name",
    explanation: "'read' reads a line from standard input into variables.",
    usage: "Create interactive scripts that prompt for user input.",
    examples: [
      "read -p 'Enter your name: ' username\necho \"Hello $username\"\n",
      "read -s -p 'Enter password: ' password  # Silent input\n",
      "read -a array  # Read into array\n"
    ],
    memoryTip: "Command: 'read'. Like using a tool to accomplish a task.",
    outputExample: "$ read\n(output depends on context)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash5",
    question: "Use command substitution",
    answer: "files=$(ls *.txt)",
    explanation: "Command substitution executes a command and replaces it with its output.",
    usage: "Capture command output in variables or use in other commands.",
    examples: [
      "date=$(date +%Y-%m-%d)\necho \"Today is $date\"\n",
      "count=$(wc -l < file.txt)\necho \"$count lines\"\n",
      "files=($(ls *.jpg))\necho \"Found ${#files[@]} images\"\n"
    ],
    memoryTip: "'$()' = command output. Like capturing what a command says and using it in your script.",
    outputExample: "$ files=$(ls *.txt)\n$ echo $files\nfile1.txt file2.txt file3.txt",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash6",
    question: "Handle script arguments",
    answer: "echo \"First arg: $1\"",
    explanation: "Script arguments are accessed as $1, $2, etc. $# gives argument count.",
    usage: "Make scripts flexible by accepting command-line arguments.",
    examples: [
      "echo \"Script name: $0\"\necho \"First arg: $1\"\necho \"All args: $@\"\n",
      "if [ $# -lt 2 ]; then\n  echo \"Usage: $0 file1 file2\"\n  exit 1\nfi\n",
      "while [ $# -gt 0 ]; do\n  echo \"Processing: $1\"\n  shift\ndone\n"
    ],
    memoryTip: "Command: 'echo'. Like using a tool to accomplish a task.",
    outputExample: "$ echo\n(output depends on context)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash7",
    question: "Redirect output and errors",
    answer: "command > output.txt 2> error.txt",
    explanation: "Redirect stdout to file with '>', stderr with '2>', both with '&>'.",
    usage: "Control where command output goes, separate errors from normal output.",
    examples: [
      "make > build.log 2>&1  # Both output and errors to file\n",
      "command >> append.log  # Append to file\n",
      "command 2>/dev/null  # Discard errors\n"
    ],
    memoryTip: "Command: 'command'. Like using a tool to accomplish a task.",
    outputExample: "$ command\n(output depends on context)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash8",
    question: "Use functions",
    answer: "function_name() { echo 'Hello'; }",
    explanation: "Bash functions group commands for reuse. Call with function_name.",
    usage: "Organize code, avoid repetition, and improve script readability.",
    examples: [
      "backup() {\n  tar -czf \"$1.tar.gz\" \"$1\"\n}\nbackup /home\n",
      "error() {\n  echo \"Error: $1\" >&2\n  exit 1\n}\n",
      "log() {\n  echo \"$(date): $1\" >> script.log\n}\n"
    ],
    memoryTip: "'function' = reusable code. Like creating a shortcut for commands you use multiple times.",
    outputExample: "$ greet() { echo \"Hello $1\"; }\n$ greet World\nHello World",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash9",
    question: "Check command success",
    answer: "if command; then echo 'success'; fi",
    explanation: "Commands return exit codes. 0 means success, non-zero means failure.",
    usage: "Handle errors and make scripts robust.",
    examples: [
      "if mkdir newdir; then\n  echo 'Directory created'\nelse\n  echo 'Failed to create directory'\nfi\n",
      "command && echo 'Success' || echo 'Failed'\n",
      "command\nif [ $? -eq 0 ]; then\n  echo 'Success'\nfi\n"
    ],
    memoryTip: "Command: 'if'. Like using a tool to accomplish a task.",
    outputExample: "$ if\n(output depends on context)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash10",
    question: "Process text with while loop",
    answer: "while read line; do echo $line; done < file.txt",
    explanation: "'while read' loops read lines from input, often from files or pipes.",
    usage: "Process files line by line or handle streaming input.",
    examples: [
      "while read user pass; do\n  echo \"User: $user\"\ndone < /etc/passwd\n",
      "cat file.txt | while read line; do\n  echo \"Line: $line\"\ndone\n",
      "while read -r line; do\n  process \"$line\"\ndone < input.txt\n"
    ],
    memoryTip: "Command: 'while'. Like using a tool to accomplish a task.",
    outputExample: "$ while\n(output depends on context)",
    category: "BASH SCRIPTING"
  },

  // ARCHIVES & COMPRESS
  {
    id: "arch1",
    question: "Create tar archive",
    answer: "tar -cvf archive.tar files/",
    explanation: "'tar' creates tape archives. -c create, -v verbose, -f specify filename.",
    usage: "Bundle multiple files into a single archive file.",
    examples: [
      "tar -cvf backup.tar /home/user  # Create archive",
      "tar -cvf project.tar *.py *.txt  # Archive specific files",
      "tar -cvf - files/ | gzip > archive.tar.gz  # Create compressed archive"
    ],
    memoryTip: "tar = tape archive. Like packing items into a box.",
    outputExample: "$ tar -czf archive.tar.gz folder/\n$ ls\narchive.tar.gz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch2",
    question: "Extract tar archive",
    answer: "tar -xvf archive.tar",
    explanation: "'tar -x' extracts archives. -x extract, -v verbose, -f filename.",
    usage: "Unpack archived files and restore directory structures.",
    examples: [
      "tar -xvf backup.tar  # Extract archive",
      "tar -xvf archive.tar -C /tmp  # Extract to specific directory",
      "tar -xvzf archive.tar.gz  # Extract compressed archive"
    ],
    memoryTip: "tar = tape archive. Like packing items into a box.",
    outputExample: "$ tar -czf archive.tar.gz folder/\n$ ls\narchive.tar.gz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch3",
    question: "Compress with gzip",
    answer: "gzip file.txt",
    explanation: "'gzip' compresses files using Lempel-Ziv compression algorithm.",
    usage: "Reduce file sizes for storage or transfer.",
    examples: [
      "gzip large_file.txt  # Compress file",
      "gzip -9 file.txt  # Maximum compression",
      "gzip -c file.txt > file.txt.gz  # Keep original file"
    ],
    memoryTip: "zip = compress. Like vacuum-sealing to make things smaller.",
    outputExample: "$ zip archive.zip folder/\n$ ls\narchive.zip",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch4",
    question: "Decompress gzip file",
    answer: "gunzip file.txt.gz",
    explanation: "'gunzip' decompresses gzip-compressed files.",
    usage: "Restore compressed files to their original form.",
    examples: [
      "gunzip file.txt.gz  # Decompress file",
      "gunzip -c file.txt.gz > output.txt  # Decompress to stdout",
      "gunzip *.gz  # Decompress all gz files"
    ],
    memoryTip: "zip = compress. Like vacuum-sealing to make things smaller.",
    outputExample: "$ zip archive.zip folder/\n$ ls\narchive.zip",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch5",
    question: "Create compressed tar archive",
    answer: "tar -czvf archive.tar.gz directory/",
    explanation: "'tar -z' compresses the archive with gzip automatically.",
    usage: "Create compressed archives in one step.",
    examples: [
      "tar -czvf backup.tar.gz /home  # Create compressed archive",
      "tar -cjvf backup.tar.bz2 /home  # Use bzip2 compression",
      "tar -cJvf backup.tar.xz /home  # Use xz compression"
    ],
    memoryTip: "tar = tape archive. Like packing items into a box.",
    outputExample: "$ tar -czf archive.tar.gz folder/\n$ ls\narchive.tar.gz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch6",
    question: "Extract compressed tar archive",
    answer: "tar -xzvf archive.tar.gz",
    explanation: "'tar -z' automatically detects and decompresses gzip archives.",
    usage: "Extract compressed archives in one step.",
    examples: [
      "tar -xzvf backup.tar.gz  # Extract gzip archive",
      "tar -xjvf backup.tar.bz2  # Extract bzip2 archive",
      "tar -xJvf backup.tar.xz  # Extract xz archive"
    ],
    memoryTip: "tar = tape archive. Like packing items into a box.",
    outputExample: "$ tar -czf archive.tar.gz folder/\n$ ls\narchive.tar.gz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch7",
    question: "Compress with bzip2",
    answer: "bzip2 file.txt",
    explanation: "'bzip2' compresses files using Burrows-Wheeler transform, often better compression than gzip.",
    usage: "Achieve better compression ratios for certain file types.",
    examples: [
      "bzip2 document.txt  # Compress with bzip2",
      "bzip2 -9 file.txt  # Maximum compression",
      "bzip2 -c file.txt > file.txt.bz2  # Keep original"
    ],
    memoryTip: "zip = compress. Like vacuum-sealing to make things smaller.",
    outputExample: "$ zip archive.zip folder/\n$ ls\narchive.zip",
    category: "ARCHIVES & COMPRESS"
  },
  // DAILY TIPS & BEST PRACTICES
  {
    id: "daily1",
    question: "Check current system load and uptime",
    answer: "uptime",
    explanation: "The 'uptime' command shows how long the system has been running, number of users logged in, and average load over the last 1, 5, and 15 minutes.",
    usage: "First command in your morning routine to quickly assess system health.",
    examples: [
      "uptime  # Show system uptime",
      "uptime -p  # Pretty format (human-readable)"
    ],
    memoryTip: "uptime = How long has this machine been 'up' (running)?",
    outputExample: "$ uptime\n 10:34:52 up 45 days, 3:21, 2 users, load average: 0.52, 0.48, 0.45",
    category: "DAILY TIPS"
  },
  {
    id: "daily2",
    question: "Check disk space usage in human-readable format",
    answer: "df -h",
    explanation: "The 'df' command displays disk space usage of file systems. The '-h' flag shows sizes in human-readable format (GB, MB, etc).",
    usage: "Monitor disk usage to prevent running out of space. Essential morning check.",
    examples: [
      "df -h  # All filesystems",
      "df -h /home  # Specific filesystem",
      "df -ih  # Show inode usage instead"
    ],
    memoryTip: "df -h = 'disk free' in human format. Check your disk before it's full!",
    outputExample: "$ df -h\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   45G   50G  47% /",
    category: "DAILY TIPS"
  },
  {
    id: "daily3",
    question: "Check available memory and RAM usage in human-readable format",
    answer: "free -h",
    explanation: "'free' displays memory usage (RAM). The '-h' flag shows sizes in human-readable format.",
    usage: "Part of daily system check to ensure sufficient memory is available.",
    examples: [
      "free -h  # Show memory in GB/MB",
      "free -m  # Show memory in MB",
      "free -g  # Show memory in GB"
    ],
    memoryTip: "free -h = How much RAM is 'free' (available)? Check it!",
    outputExample: "$ free -h\n              total        used        free      shared  buff/cache   available\nMem:          31Gi       12Gi       15Gi       2.0Gi       3.8Gi       16Gi",
    category: "DAILY TIPS"
  },
  {
    id: "daily4",
    question: "Quick check of running processes",
    answer: "ps aux | head",
    explanation: "The 'ps aux' lists all running processes. Piping to 'head' shows only the first 10 lines for a quick view.",
    usage: "Morning routine to quickly check what processes are running without overwhelming output.",
    examples: [
      "ps aux | head  # First 10 processes",
      "ps aux | head -20  # First 20 processes",
      "ps aux | grep firefox  # Find specific process"
    ],
    memoryTip: "ps aux | head = peek at processes (first ones only)",
    outputExample: "$ ps aux | head\nUSER       PID %CPU %MEM    VSZ   RSS TTY STAT START TIME COMMAND\nroot         1  0.1  0.5  24000  5000 ?   Ss   10:00 0:01 /sbin/init",
    category: "DAILY TIPS"
  },
  {
    id: "daily5",
    question: "Update package lists and upgrade all packages",
    answer: "sudo apt update && sudo apt upgrade",
    explanation: "This command updates package lists from repositories and then upgrades all installed packages to their latest versions.",
    usage: "Daily maintenance routine to keep your system secure and up-to-date.",
    examples: [
      "sudo apt update && sudo apt upgrade  # Update and upgrade",
      "sudo apt update  # Just update lists",
      "sudo apt full-upgrade  # More aggressive upgrade"
    ],
    memoryTip: "Update first (get the list), then upgrade (install new versions).",
    outputExample: "$ sudo apt update && sudo apt upgrade\nHit:1 http://archive.ubuntu.com focal InRelease\nSetting up nginx (1.18.0-3ubuntu3) ...",
    category: "DAILY TIPS"
  },
  {
    id: "daily6",
    question: "Remove unused packages automatically",
    answer: "sudo apt autoremove",
    explanation: "'autoremove' removes packages that were automatically installed as dependencies but are no longer needed.",
    usage: "Keep system clean and save disk space by removing orphaned dependencies.",
    examples: [
      "sudo apt autoremove  # Remove unused packages",
      "sudo apt autoremove --purge  # Also remove config files"
    ],
    memoryTip: "autoremove = Remove 'automatic' packages nobody needs anymore.",
    outputExample: "$ sudo apt autoremove\nReading package lists... Done\nRemoving: python3-lib2to3 (0 upgraded, 0 newly installed, 2 removed)",
    category: "DAILY TIPS"
  },
  {
    id: "daily7",
    question: "Clean the package cache",
    answer: "sudo apt autoclean",
    explanation: "'autoclean' removes old cached package files that can no longer be downloaded (their versions are outdated).",
    usage: "Free up disk space by removing obsolete cache files.",
    examples: [
      "sudo apt autoclean  # Remove obsolete cache",
      "sudo apt clean  # Remove all cache (more aggressive)"
    ],
    memoryTip: "autoclean = Clean up old 'auto' cached files you don't need.",
    outputExample: "$ sudo apt autoclean\nReading package lists... Done\nDel lib2to3-doc 3.8.5-1ubuntu1 [25.4 kB]",
    category: "DAILY TIPS"
  },
  {
    id: "daily8",
    question: "List all files in a directory with details and hidden files",
    answer: "ls -la",
    explanation: "'ls -la' lists all files (including hidden ones starting with '.') with detailed information like permissions, size, and modification date.",
    usage: "Common command in daily workflow to see everything about files and folders.",
    examples: [
      "ls -la  # All files with details",
      "ls -lah  # Same but with human-readable sizes",
      "ls -lat  # Sort by time (newest first)"
    ],
    memoryTip: "ls -la = List all files with 'a' (all) and 'l' (long format details)",
    outputExample: "$ ls -la\ntotal 42\ndrwxr-xr-x  5 user group 4096 May 14 10:30 .\ndrwxr-xr-x 15 user group 4096 May 14 10:00 ..",
    category: "DAILY TIPS"
  },
  {
    id: "daily9",
    question: "Find all .txt files in current directory and subdirectories",
    answer: "find . -name \"*.txt\"",
    explanation: "'find' searches for files matching a pattern. '.' means current directory, '-name' specifies the filename pattern.",
    usage: "Daily file management to locate files by type or name pattern.",
    examples: [
      "find . -name \"*.txt\"  # Find all text files",
      "find . -name \"*.log\" -type f  # Find log files",
      "find . -mtime -1  # Find files modified in last day"
    ],
    memoryTip: "find . -name pattern = Find files matching a pattern",
    outputExample: "$ find . -name \"*.txt\"\n./notes.txt\n./backup/data.txt\n./archive/old.txt",
    category: "DAILY TIPS"
  },
  {
    id: "daily10",
    question: "Create a directory and any missing parent directories",
    answer: "mkdir -p project",
    explanation: "'mkdir' creates directories. The '-p' flag creates parent directories as needed.",
    usage: "Create nested directory structures without errors.",
    examples: [
      "mkdir -p project  # Create single dir",
      "mkdir -p src/components/ui  # Create nested structure",
      "mkdir -p a/b/c/d/e  # Multiple levels"
    ],
    memoryTip: "mkdir -p = Make directories with 'p' (parents) if needed",
    outputExample: "$ mkdir -p a/b/c\n$ ls -la a/b/\ndrwxr-xr-x 3 user group 4096 May 14 10:35 c",
    category: "DAILY TIPS"
  },
  {
    id: "daily11",
    question: "Check git repository status",
    answer: "git status",
    explanation: "'git status' shows the state of your working directory and staging area, indicating which files are modified, staged, or untracked.",
    usage: "Essential daily command for developers to see what changes are pending.",
    examples: [
      "git status  # Full status",
      "git status -s  # Short format",
      "git status --porcelain  # Porcelain format"
    ],
    memoryTip: "git status = What's the 'status' of my git repo?",
    outputExample: "$ git status\nOn branch main\nChanges not staged for commit:\n  modified:   app.js",
    category: "DAILY TIPS"
  },
  {
    id: "daily12",
    question: "Install project dependencies from package.json",
    answer: "npm install",
    explanation: "'npm install' reads package.json and installs all required dependencies into the node_modules directory.",
    usage: "Essential for setting up or updating project dependencies.",
    examples: [
      "npm install  # Install all dependencies",
      "npm install package-name  # Install specific package",
      "npm ci  # Clean install (production-safe)"
    ],
    memoryTip: "npm install = Get all the 'packages' your project needs",
    outputExample: "$ npm install\nadded 245 packages, removed 12 packages, and updated 8 packages",
    category: "DAILY TIPS"
  },
  {
    id: "daily13",
    question: "Build and install project using Makefile",
    answer: "make install",
    explanation: "'make install' runs the 'install' target defined in a Makefile, typically used for compilation and installation of software.",
    usage: "Common in legacy projects and build processes to compile code.",
    examples: [
      "make install  # Run install target",
      "make build  # Compile project",
      "make clean  # Remove build artifacts"
    ],
    memoryTip: "make install = Run the 'install' task from Makefile",
    outputExample: "$ make install\ngcc -o myapp *.c\nInstalling myapp to /usr/local/bin",
    category: "DAILY TIPS"
  },
  {
    id: "daily14",
    question: "Monitor real-time system processes and resource usage",
    answer: "top",
    explanation: "'top' displays real-time information about system processes, CPU usage, memory, and more. Press 'q' to quit.",
    usage: "Check which processes are consuming most resources.",
    examples: [
      "top  # Start interactive mode",
      "top -u username  # Show processes for specific user",
      "top -p 1234  # Monitor specific PID"
    ],
    memoryTip: "top = See what's on 'top' (using most resources)",
    outputExample: "$ top\nPID USER      PR  NI    VIRT    RES COMMAND\n1234 root      20   0 1234567 500M firefox",
    category: "DAILY TIPS"
  },
  {
    id: "daily15",
    question: "Process monitor with interactive interface and better visualization",
    answer: "htop",
    explanation: "'htop' is an improved version of 'top' with better visualization, easier navigation, and more features.",
    usage: "Modern alternative to 'top' for monitoring system processes.",
    examples: [
      "htop  # Start interactive monitor",
      "htop -u username  # Filter by user",
      "htop -p 1234  # Monitor specific process"
    ],
    memoryTip: "htop = Better 'top' with interactive display",
    outputExample: "$ htop\n1234 root 12.5% 8.2% firefox\n1235 user  2.3% 4.1% bash",
    category: "DAILY TIPS"
  },
  {
    id: "daily16",
    question: "Follow log file as it grows in real-time",
    answer: "tail -f logs",
    explanation: "'tail -f' shows the last lines of a file and continues displaying new lines as they're added (useful for watching logs).",
    usage: "Monitor logs in real-time while troubleshooting or testing applications.",
    examples: [
      "tail -f /var/log/syslog  # Follow system logs",
      "tail -f app.log | grep ERROR  # Filter for errors",
      "tail -200f logfile.txt  # Show last 200 lines"
    ],
    memoryTip: "tail -f = 'tail' and 'f' (follow) new lines as they appear",
    outputExample: "$ tail -f app.log\n2024-05-14 10:30:45 INFO Server started\n2024-05-14 10:30:46 INFO Request received",
    category: "DAILY TIPS"
  },
  {
    id: "daily17",
    question: "Check network services and listening ports",
    answer: "netstat -tlnp",
    explanation: "'netstat' shows network statistics. '-tlnp' shows TCP listening sockets with numeric addresses and process info.",
    usage: "Check what services are listening on ports.",
    examples: [
      "netstat -tlnp  # Show listening services",
      "netstat -tulnp  # Include UDP",
      "ss -tlnp  # Modern alternative to netstat"
    ],
    memoryTip: "netstat -tlnp = 'net' statistics, 't'(tcp), 'l'(listening), 'n'(numeric), 'p'(process)",
    outputExample: "$ netstat -tlnp\nProto Local Address State      PID/Program\ntcp   0.0.0.0:80 LISTEN  1234/nginx",
    category: "DAILY TIPS"
  },
  {
    id: "daily18",
    question: "Search files recursively for a text pattern",
    answer: "grep -r \"pattern\" .",
    explanation: "'grep -r' searches recursively through all files in the current directory for lines containing the pattern.",
    usage: "Find where in your codebase a specific string appears.",
    examples: [
      "grep -r \"TODO\" .  # Find all TODO comments",
      "grep -r \"error\" . --include=\"*.log\"  # Search only log files",
      "grep -ri \"password\" .  # Case-insensitive search"
    ],
    memoryTip: "grep -r = 'grep' 'r'(recursive) for pattern everywhere",
    outputExample: "$ grep -r \"TODO\" .\n./app.js:23: // TODO: fix this bug\n./config.js:45: // TODO: optimize",
    category: "DAILY TIPS"
  },
  {
    id: "daily19",
    question: "Replace text in a file using stream editor",
    answer: "sed 's/old/new/g'",
    explanation: "'sed' is a stream editor. 's/old/new/g' substitutes 'old' with 'new' globally (g flag = all occurrences).",
    usage: "Batch replace text in files or pipelines.",
    examples: [
      "sed 's/old/new/g' file.txt  # Show result",
      "sed -i 's/old/new/g' file.txt  # Edit in place",
      "sed 's/old/new/' file.txt  # Replace first occurrence only"
    ],
    memoryTip: "sed 's/old/new/g' = Stream editor, 's' (substitute), 'g' (global/all)",
    outputExample: "$ echo 'cat cat cat' | sed 's/cat/dog/g'\ndog dog dog",
    category: "DAILY TIPS"
  },
  {
    id: "daily20",
    question: "Process text data with pattern-action programming language",
    answer: "awk",
    explanation: "'awk' is a programming language for text processing. It processes input line by line and can extract, filter, and transform data.",
    usage: "Extract specific columns or perform calculations on text data.",
    examples: [
      "awk '{print $1}' file.txt  # Print first column",
      "awk -F: '{print $1}' /etc/passwd  # Use different delimiter",
      "awk '$2 > 100' data.txt  # Filter lines where second column > 100"
    ],
    memoryTip: "awk = Process text line by line with 'action' for each line",
    outputExample: "$ echo 'John 25 Engineer' | awk '{print $1 \" is \" $2}'\nJohn is 25",
    category: "DAILY TIPS"
  },
  {
    id: "daily21",
    question: "Sort lines and count unique occurrences",
    answer: "sort | uniq -c",
    explanation: "'sort' arranges lines, 'uniq -c' removes duplicates while counting how many times each line appears.",
    usage: "Analyze logs or data to find which entries appear most frequently.",
    examples: [
      "cat logs.txt | sort | uniq -c  # Count occurrences",
      "sort | uniq -c | sort -rn  # Most frequent first",
      "uniq -c data.txt  # Count in file (must be sorted)"
    ],
    memoryTip: "sort | uniq -c = 'sort' then 'uniq' with 'c' (count)",
    outputExample: "$ cat errors.log | sort | uniq -c\n  15 Connection timeout\n   8 File not found",
    category: "DAILY TIPS"
  },
  {
    id: "daily22",
    question: "Create or edit scheduled tasks",
    answer: "crontab -e",
    explanation: "'crontab -e' opens your personal crontab file in an editor where you can add, edit, or remove scheduled tasks.",
    usage: "Schedule scripts or commands to run automatically at specific times.",
    examples: [
      "crontab -e  # Edit schedule",
      "crontab -l  # List current tasks",
      "crontab -r  # Remove all tasks"
    ],
    memoryTip: "crontab -e = Edit cron tab (scheduler) with 'e' (edit)",
    outputExample: "$ crontab -e\n0 2 * * * /usr/local/bin/backup.sh  # Run at 2 AM daily",
    category: "DAILY TIPS"
  },
  {
    id: "daily23",
    question: "Check or manage system services status",
    answer: "systemctl status",
    explanation: "'systemctl status' shows the current state of a service (running, stopped, failed). Part of the systemd system.",
    usage: "Check if services are running or investigate why they stopped.",
    examples: [
      "systemctl status nginx  # Check nginx",
      "systemctl start nginx  # Start service",
      "systemctl enable nginx  # Auto-start on boot"
    ],
    memoryTip: "systemctl status = Check service 'status' with systemctl",
    outputExample: "$ systemctl status nginx\n● nginx.service - A free, open-source web server\n  Active: active (running) since May 14 09:30:45",
    category: "DAILY TIPS"
  },
  {
    id: "daily24",
    question: "Query system journal logs for a specific service",
    answer: "journalctl -u",
    explanation: "'journalctl -u' displays logs from systemd journal for a specific service unit.",
    usage: "View detailed logs for troubleshooting service issues.",
    examples: [
      "journalctl -u nginx  # View nginx logs",
      "journalctl -u nginx -n 50  # Last 50 lines",
      "journalctl -u nginx --since today  # Today's logs"
    ],
    memoryTip: "journalctl -u = 'journal' of 'u' (unit/service) logs",
    outputExample: "$ journalctl -u nginx -n 5\nMay 14 10:30:45 server nginx[1234]: Connection accepted",
    category: "DAILY TIPS"
  },
  {
    id: "daily25",
    question: "Show network socket statistics and listening ports",
    answer: "ss -tlnp",
    explanation: "'ss' (socket statistics) is a modern replacement for netstat. '-tlnp' shows TCP listening sockets with numeric and process info.",
    usage: "Check what services are listening on which ports.",
    examples: [
      "ss -tlnp  # TCP listening",
      "ss -tulnp  # TCP and UDP",
      "ss -tuln | grep :80  # Find service on port 80"
    ],
    memoryTip: "ss -tlnp = Modern socket 'ss' statistics (replaces netstat)",
    outputExample: "$ ss -tlnp\nListen Local Address:Port     Process\nTCP   0.0.0.0:80        nginx",
    category: "DAILY TIPS"
  },
  {
    id: "daily26",
    question: "Run two commands sequentially regardless of success",
    answer: "command1 ; command2",
    explanation: "The semicolon ';' separates commands so each runs in sequence, even if the previous one fails.",
    usage: "Use when you want multiple commands to run one after another without conditional logic.",
    examples: [
      "echo first ; echo second  # Run both commands",
      "cd /tmp ; ls  # Change directory then list files",
      "mkdir test ; cd test  # Create directory, then enter it"
    ],
    memoryTip: "';' = do this, then do that, no matter what.",
    outputExample: "$ echo first ; echo second\nfirst\nsecond",
    category: "DAILY TIPS"
  },
  {
    id: "daily27",
    question: "Run the second command only if the first succeeds",
    answer: "command1 && command2",
    explanation: "The '&&' operator runs the second command only when the first command exits successfully (status 0).",
    usage: "Use for chains where later commands should run only if earlier ones succeed.",
    examples: [
      "mkdir project && cd project  # Only cd if mkdir succeeds",
      "git pull && npm install  # Install deps only after update succeeds",
      "test -f file && echo exists  # Echo only if file exists"
    ],
    memoryTip: "'&&' = and then, only if the first one works.",
    outputExample: "$ mkdir project && cd project\n$ pwd\n/home/user/project",
    category: "DAILY TIPS"
  },
  {
    id: "daily28",
    question: "Run the second command only if the first fails",
    answer: "command1 || command2",
    explanation: "The '||' operator runs the second command only when the first command exits with an error (non-zero status).",
    usage: "Use for fallback or recovery commands when the first command fails.",
    examples: [
      "cat missing.txt || echo 'File missing'  # Fallback message if cat fails",
      "grep foo file || echo 'No match'  # Handle no results",
      "cd /doesnotexist || mkdir /doesnotexist  # Create only if change dir fails"
    ],
    memoryTip: "'||' = or else, do this if the first fails.",
    outputExample: "$ cat missing.txt || echo 'File missing'\ncat: missing.txt: No such file or directory\nFile missing",
    category: "DAILY TIPS"
  },
  {
    id: "daily29",
    question: "Pipe output from one command into another",
    answer: "command1 | command2",
    explanation: "The pipe '|' sends the stdout of the first command as stdin to the second command.",
    usage: "Use when you want to filter or process output from one command with another.",
    examples: [
      "ps aux | grep ssh  # Find ssh processes",
      "cat file.txt | sort | uniq  # Sort and deduplicate lines",
      "ls -la | less  # View directory listing page-by-page"
    ],
    memoryTip: "'|' = pipe output from one tool into the next.",
    outputExample: "$ echo -e 'c\nb\na' | sort\na\nb\nc",
    category: "DAILY TIPS"
  },
  {
    id: "daily30",
    question: "Send a command to run in the background",
    answer: "command &",
    explanation: "Appending '&' runs a command in the background so the shell prompt returns immediately.",
    usage: "Use for long-running tasks you want to continue while doing other work.",
    examples: [
      "sleep 60 &  # Run sleep in background",
      "./server &  # Start server in background",
      "tail -f logfile &  # Follow log without blocking shell"
    ],
    memoryTip: "'&' = run it in the background and keep working.",
    outputExample: "$ sleep 60 &\n[1] 12345",
    category: "DAILY TIPS"
  },
  {
    id: "daily31",
    question: "Redirect standard output to a file",
    answer: "command > file.txt",
    explanation: "The '>' operator sends a command's stdout to a file, replacing its contents.",
    usage: "Capture command output into a file instead of printing it on screen.",
    examples: [
      "ls > files.txt  # Save listing to file",
      "echo hello > greeting.txt  # Write text to file",
      "date > today.txt  # Save current date"
    ],
    memoryTip: "'>' = overwrite the file with command output.",
    outputExample: "$ echo hello > greeting.txt\n$ cat greeting.txt\nhello",
    category: "DAILY TIPS"
  },
  {
    id: "daily32",
    question: "Append standard output to a file",
    answer: "command >> file.txt",
    explanation: "The '>>' operator appends stdout to the end of a file instead of replacing it.",
    usage: "Add new output to a file without losing existing content.",
    examples: [
      "echo more >> notes.txt  # Append text",
      "date >> history.log  # Add timestamp without erasing old ones",
      "printf 'next\n' >> list.txt  # Append a line"
    ],
    memoryTip: "'>>' = add output to the end of the file.",
    outputExample: "$ echo first > log.txt\n echo second >> log.txt\n$ cat log.txt\nfirst\nsecond",
    category: "DAILY TIPS"
  },
  {
    id: "daily33",
    question: "Redirect standard error to a file",
    answer: "command 2> error.log",
    explanation: "The '2>' operator sends stderr (error messages) to a file, keeping stdout separate.",
    usage: "Capture errors in a separate file for troubleshooting.",
    examples: [
      "ls missing 2> errors.txt  # Save error output",
      "grep foo file 2> grep-errors.log  # Log grep errors",
      "command 2> /dev/null  # Discard error output"
    ],
    memoryTip: "'2>' = send error output (stderr) to a file.",
    outputExample: "$ ls missing 2> errors.txt\n$ cat errors.txt\nls: cannot access 'missing': No such file or directory",
    category: "DAILY TIPS"
  },
  {
    id: "daily34",
    question: "Redirect both standard output and error to the same file",
    answer: "command &> output.log",
    explanation: "The '&>' operator sends both stdout and stderr to the same file in bash.",
    usage: "Capture all command output in one place for debugging or logging.",
    examples: [
      "make &> build.log  # Save all build output",
      "./script.sh &> script.log  # Capture success and errors",
      "command &> /dev/null  # Discard all output"
    ],
    memoryTip: "'&>' = everything goes into the same file.",
    outputExample: "$ ls missing &> output.log\n$ cat output.log\nls: cannot access 'missing': No such file or directory",
    category: "DAILY TIPS"
  },
  {
    id: "daily35",
    question: "Read the manual page for a command",
    answer: "man command",
    explanation: "The 'man' command opens the manual page for a command, showing usage, options, and examples.",
    usage: "Use 'man' whenever you need documentation for a command or its options.",
    examples: [
      "man ls  # Read the ls manual",
      "man grep  # Read grep documentation",
      "man bash  # Read shell manual"
    ],
    memoryTip: "man = manual page. It's the first place to look for command help.",
    outputExample: "$ man ls\nLS(1) User Commands\nName: ls - list directory contents\nSynopsis: ls [OPTION]... [FILE]...",
    category: "DAILY TIPS"
  },
  {
    id: "daily36",
    question: "Find the path to a command executable",
    answer: "which command",
    explanation: "The 'which' command shows the path to the executable that will run when you type a command.",
    usage: "Use it to verify which binary is used in your current PATH.",
    examples: [
      "which python  # Show python location",
      "which ls  # Show ls executable location",
      "which git  # Show git path"
    ],
    memoryTip: "which = which command will run. It points to the actual executable.",
    outputExample: "$ which ls\n/bin/ls",
    category: "DAILY TIPS"
  },
  {
    id: "daily37",
    question: "Search your command history for a previous command",
    answer: "history | grep keyword",
    explanation: "This command searches your shell history for commands containing the keyword.",
    usage: "Use it to find and reuse previously entered commands quickly.",
    examples: [
      "history | grep ssh  # Find ssh-related commands",
      "history | grep npm  # Find npm commands",
      "history | grep apt  # Find package commands"
    ],
    memoryTip: "history | grep = search your past commands like a logbook.",
    outputExample: "$ history | grep git\n  102  git status\n  113  git pull",
    category: "DAILY TIPS"
  },
  {
    id: "daily38",
    question: "Run the last command again with sudo",
    answer: "sudo !!",
    explanation: "The 'sudo !!' shortcut reruns the previous command with sudo, useful when you forgot permissions.",
    usage: "Use it to quickly retry a command that failed due to lack of privileges.",
    examples: [
      "apt update  # Run command and see permission error",
      "sudo !!  # Retry the last command with sudo",
      "mkdir /usr/local/bin  # Need sudo if permission denied"
    ],
    memoryTip: "sudo !! = run the last command again as root.",
    outputExample: "$ apt update\nE: Could not open lock file\n$ sudo !!\n[sudo] password for user:\nHit:1 ...",
    category: "DAILY TIPS"
  },
  {
    id: "daily39",
    question: "Reload shell configuration without restarting the terminal",
    answer: "source ~/.bashrc",
    explanation: "The 'source' command reloads shell configuration files so new aliases and environment variables take effect immediately.",
    usage: "Use it after editing ~/.bashrc or other shell setup files.",
    examples: [
      "source ~/.bashrc  # Reload bash settings",
      ". ~/.bashrc  # Equivalent reload command",
      "source ~/.profile  # Reload profile settings"
    ],
    memoryTip: "source = read and apply this file now.",
    outputExample: "$ source ~/.bashrc\n$ alias ll\nll='ls -la'",
    category: "DAILY TIPS"
  },
  {
    id: "daily40",
    question: "Create a quick alias for a common command",
    answer: "alias ll='ls -la'",
    explanation: "Aliases let you create shortcuts for longer commands so you can type them faster.",
    usage: "Use aliases for commands you run often, like listing directory contents.",
    examples: [
      "alias ll='ls -la'  # Set alias for detailed listing",
      "alias gs='git status'  # Create git status shortcut",
      "alias c='clear'  # Clear terminal screen quickly"
    ],
    memoryTip: "alias = make a shorthand for long commands.",
    outputExample: "$ alias ll='ls -la'\n$ ll\ndrwxr-xr-x  2 user group 4096 May 14 10:00 .",
    category: "DAILY TIPS"
  },

  // NAVIGATION — extended
  {
    id: "nav21",
    question: "Push the current directory onto the stack and switch to /tmp",
    answer: "pushd /tmp",
    explanation: "pushd remembers where you are by pushing the current directory onto a stack, then switches to the target. Pair it with popd to return.",
    usage: "When you need to briefly jump elsewhere and come back without retyping the original path.",
    examples: [
      "pushd /tmp  # Jump to /tmp, remembering where you were",
      "pushd +1  # Rotate to the second entry in the stack",
      "pushd  # No args: swap top two entries"
    ],
    memoryTip: "pushd = push directory (onto a bookmark stack).",
    outputExample: "$ pushd /tmp\n/tmp ~/projects",
    category: "NAVIGATION"
  },
  {
    id: "nav22",
    question: "Return to the previous directory saved on the stack",
    answer: "popd",
    explanation: "popd pops the top entry off the directory stack and cd's into it. It's the counterpart to pushd.",
    usage: "Unwind a pushd jump and get back to where you started.",
    examples: [
      "popd  # Go back to the previous pushd location",
      "popd +1  # Remove the second stack entry without changing dir",
      "dirs -c  # Clear the whole stack"
    ],
    memoryTip: "popd = pop directory off the stack and land on it.",
    outputExample: "$ popd\n~/projects",
    category: "NAVIGATION"
  },
  {
    id: "nav23",
    question: "Show the directory stack with numbered entries",
    answer: "dirs -v",
    explanation: "dirs prints the directory stack; -v shows one entry per line with stack indices so you can pushd/popd by number.",
    usage: "Inspect what pushd has remembered before jumping around.",
    examples: [
      "dirs -v  # Verbose listing",
      "dirs -c  # Clear the stack",
      "pushd +2  # Rotate using an index from dirs -v"
    ],
    memoryTip: "dirs -v = view the stack of dirs.",
    outputExample: "$ dirs -v\n 0  ~/projects\n 1  /tmp\n 2  /var/log",
    category: "NAVIGATION"
  },
  {
    id: "nav24",
    question: "Change into another user's home directory",
    answer: "cd ~user",
    explanation: "The tilde with a username expands to that user's home directory, e.g. ~root → /root, ~alice → /home/alice.",
    usage: "Quickly jump to someone else's home without typing the full path.",
    examples: [
      "cd ~alice  # Go to alice's home",
      "cd ~root  # Go to root's home (/root)",
      "echo ~alice  # Print the path without cd-ing"
    ],
    memoryTip: "~ = home, ~user = that user's home.",
    outputExample: "$ cd ~alice\n$ pwd\n/home/alice",
    category: "NAVIGATION"
  },
  {
    id: "nav25",
    question: "Print the absolute, canonical path of a file",
    answer: "realpath filename",
    explanation: "realpath resolves all symlinks and relative segments and prints the final, absolute path.",
    usage: "Use in scripts when you need a stable reference to a file regardless of where the script was launched.",
    examples: [
      "realpath ./config.yml  # Absolute path",
      "realpath --relative-to=/etc /etc/nginx/nginx.conf  # nginx/nginx.conf",
      "realpath -e missing  # Error if path doesn't exist"
    ],
    memoryTip: "realpath = the real, fully resolved path.",
    outputExample: "$ realpath ./config.yml\n/home/user/project/config.yml",
    category: "NAVIGATION"
  },
  {
    id: "nav26",
    question: "Follow a symlink to its final target",
    answer: "readlink -f symlink",
    explanation: "readlink -f recursively resolves symlinks until it reaches a real file, then prints that path.",
    usage: "Find out where a /usr/bin/foo or /etc/alternatives entry actually points.",
    examples: [
      "readlink -f /usr/bin/vi  # Final resolved binary",
      "readlink /usr/bin/vi  # Only one hop",
      "readlink -e /usr/bin/vi  # Error if any link is broken"
    ],
    memoryTip: "readlink -f = follow the link, fully.",
    outputExample: "$ readlink -f /usr/bin/vi\n/usr/bin/vim.basic",
    category: "NAVIGATION"
  },
  {
    id: "nav27",
    question: "List only subdirectories of the current directory",
    answer: "ls -d */",
    explanation: "The trailing /*/ glob matches only directories, and -d tells ls to show the directory entries themselves instead of their contents.",
    usage: "Get a clean listing of folders without files cluttering it.",
    examples: [
      "ls -d */  # Visible directories",
      "ls -d .*/ */  # Include hidden directories",
      "ls -ld */  # Long format, directories only"
    ],
    memoryTip: "-d = don't descend; */ = pattern matches dirs only.",
    outputExample: "$ ls -d */\napp/  docs/  node_modules/  src/",
    category: "NAVIGATION"
  },
  {
    id: "nav28",
    question: "List entries one per line for scripting",
    answer: "ls -1",
    explanation: "ls -1 prints one entry per line, which is the easy form to pipe into other commands.",
    usage: "When feeding filenames to a loop or another program and you need a clean newline-separated list.",
    examples: [
      "ls -1  # One per line",
      "ls -1 *.log | wc -l  # Count logs",
      "ls -1 | grep '^test_'  # Filter results"
    ],
    memoryTip: "-1 (one) = one per line.",
    outputExample: "$ ls -1\nREADME.md\napp\npackage.json",
    category: "NAVIGATION"
  },
  {
    id: "nav29",
    question: "Show only directories two levels deep",
    answer: "find . -maxdepth 2 -type d",
    explanation: "find walks the tree; -maxdepth 2 stops two levels down and -type d restricts results to directories.",
    usage: "Get a quick overview of project layout without descending into deeply nested folders like node_modules.",
    examples: [
      "find . -maxdepth 2 -type d  # Shallow dir tree",
      "find . -maxdepth 1 -type d -not -path .  # Just direct children",
      "find . -maxdepth 3 -name node_modules -prune -o -type d -print  # Skip node_modules"
    ],
    memoryTip: "maxdepth caps how deep find walks; -type d = directories only.",
    outputExample: "$ find . -maxdepth 2 -type d\n.\n./src\n./src/lib\n./docs",
    category: "NAVIGATION"
  },
  {
    id: "nav30",
    question: "Run a command in a different directory without permanently changing yours",
    answer: "(cd /tmp && command)",
    explanation: "Parentheses run the commands inside a subshell, so the cd only affects that subshell — your interactive shell stays where it was.",
    usage: "Run a one-off command somewhere else without remembering to cd back, especially handy in scripts.",
    examples: [
      "(cd /tmp && ls)  # ls /tmp but stay where you are",
      "(cd build && make)  # Build without polluting CWD",
      "(cd $(mktemp -d) && wget url)  # Download in a throwaway dir"
    ],
    memoryTip: "Parens = subshell sandbox; the cd dies with it.",
    outputExample: "$ (cd /tmp && pwd) ; pwd\n/tmp\n/home/user",
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
    question: "Run a long process that survives logout",
    answer: "nohup command &",
    explanation: "nohup ignores SIGHUP (sent when the controlling terminal closes); & puts the job in the background. stdout/stderr go to nohup.out by default.",
    usage: "Start a long-running task over SSH without losing it when you disconnect.",
    examples: [
      "nohup ./backup.sh &",
      "nohup python serve.py > serve.log 2>&1 &",
      "nohup make all >log 2>&1 & disown"
    ],
    memoryTip: "nohup = no hangup signal will kill it.",
    outputExample: "$ nohup ./backup.sh &\n[1] 12345\nnohup: ignoring input and appending output to 'nohup.out'",
    category: "PROCESSES"
  },
  {
    id: "proc22",
    question: "Detach a background job from the shell so closing it won't kill it",
    answer: "disown %1",
    explanation: "disown removes a job from the shell's job table, so it stops receiving SIGHUP when the shell exits. %1 refers to job number 1.",
    usage: "Forgot nohup? Background the job, then disown.",
    examples: [
      "command &",
      "disown %1",
      "disown -a  # All jobs"
    ],
    memoryTip: "disown = the shell forgets about this job.",
    outputExample: "$ sleep 1000 &\n[1] 4567\n$ disown %1\n$ jobs\n(empty)",
    category: "PROCESSES"
  },
  {
    id: "proc23",
    question: "Start a new tmux session named 'work'",
    answer: "tmux new -s work",
    explanation: "tmux is a terminal multiplexer: detach (Ctrl-b d), reconnect later with the same shell, splits, and windows intact.",
    usage: "Persistent terminal sessions on remote servers across disconnects.",
    examples: [
      "tmux new -s work",
      "tmux attach -t work  # Reconnect",
      "tmux ls  # List sessions"
    ],
    memoryTip: "tmux new -s NAME = new session with a name.",
    outputExample: "$ tmux new -s work\n# (tmux session opens; detach with Ctrl-b d)",
    category: "PROCESSES"
  },
  {
    id: "proc24",
    question: "List every signal the system understands",
    answer: "kill -l",
    explanation: "kill -l prints the signal table — numbers and names like 1) SIGHUP, 9) SIGKILL, 15) SIGTERM.",
    usage: "Look up the right signal number/name before sending it.",
    examples: [
      "kill -l",
      "kill -l 15  # Look up signal 15",
      "kill -l TERM  # Look up the number for SIGTERM"
    ],
    memoryTip: "kill -l = list signals.",
    outputExample: "$ kill -l\n 1) SIGHUP\t 2) SIGINT\t 3) SIGQUIT\t 9) SIGKILL\n15) SIGTERM\t...",
    category: "PROCESSES"
  },
  {
    id: "proc25",
    question: "Lower the priority of a running process by 5 nice units",
    answer: "sudo renice -n 5 -p 1234",
    explanation: "renice changes the nice value of an existing process; positive nice means lower priority. Root can also raise priority.",
    usage: "Throttle a CPU-greedy backup or compile so it doesn't choke interactive apps.",
    examples: [
      "sudo renice -n 5 -p 1234",
      "sudo renice -n 10 -u alice  # Every process by alice",
      "nice -n 19 ./backup.sh  # Start low-priority"
    ],
    memoryTip: "renice = re-set the nice value; higher = nicer (yielding).",
    outputExample: "$ sudo renice -n 5 -p 1234\n1234 (process ID) old priority 0, new priority 5",
    category: "PROCESSES"
  },
  {
    id: "proc26",
    question: "Measure how long a command takes to run",
    answer: "time command",
    explanation: "The shell built-in time prints real, user, and sys CPU times after the command finishes.",
    usage: "Quick benchmarks of scripts or commands.",
    examples: [
      "time ./build.sh",
      "time { cmd1; cmd2; }  # Group",
      "/usr/bin/time -v cmd  # More detailed (GNU time)"
    ],
    memoryTip: "time = how long did it take?",
    outputExample: "$ time sleep 1\nreal    0m1.012s\nuser    0m0.001s\nsys     0m0.003s",
    category: "PROCESSES"
  },
  {
    id: "proc27",
    question: "Find which process is listening on port 8080",
    answer: "sudo lsof -i :8080",
    explanation: "lsof -i :PORT lists open network sockets bound to that port, including the owning process and user.",
    usage: "Discover what's holding a port hostage so you can kill or reconfigure it.",
    examples: [
      "sudo lsof -i :8080",
      "sudo lsof -i tcp:443",
      "sudo lsof -nP -iTCP -sTCP:LISTEN  # All listeners"
    ],
    memoryTip: "lsof -i :PORT = list open sockets on that port.",
    outputExample: "$ sudo lsof -i :8080\nCOMMAND  PID USER FD TYPE NAME\nnode    8421 app 22u IPv4 *:8080 (LISTEN)",
    category: "PROCESSES"
  },
  {
    id: "proc28",
    question: "Trace the system calls a running process is making",
    answer: "sudo strace -p 1234",
    explanation: "strace attaches to a process and prints every system call (open, read, write, etc.) with arguments and return values.",
    usage: "Debug why a program is hanging, missing a file, or failing silently.",
    examples: [
      "sudo strace -p 1234",
      "strace -e openat ./prog  # Only file opens",
      "strace -c ./prog  # Summary counts"
    ],
    memoryTip: "strace = system call trace.",
    outputExample: "$ sudo strace -p 4567\nrecvfrom(8, ...) = 0\nepoll_wait(7, ...)",
    category: "PROCESSES"
  },
  {
    id: "proc29",
    question: "Show the top CPU-consuming processes",
    answer: "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head",
    explanation: "ps -eo selects custom columns; --sort=-%cpu sorts descending by CPU. head trims to the worst offenders.",
    usage: "Snapshot of who's hogging the CPU without launching top.",
    examples: [
      "ps -eo pid,user,%cpu,cmd --sort=-%cpu | head",
      "ps -eo pid,%mem,cmd --sort=-%mem | head  # By memory",
      "ps -eo pid,etime,cmd --sort=etime | head  # Oldest"
    ],
    memoryTip: "ps -eo COLUMNS --sort=KEY = custom ranking.",
    outputExample: "$ ps -eo pid,%cpu,cmd --sort=-%cpu | head -3\n PID %CPU CMD\n2412 14.0 firefox\n1822  8.3 node server.js",
    category: "PROCESSES"
  },
  {
    id: "proc30",
    question: "Reload a daemon's config without restarting it",
    answer: "sudo kill -HUP pid",
    explanation: "Many daemons re-read their configuration on SIGHUP (signal 1) instead of restarting, preserving open connections.",
    usage: "Apply nginx/sshd/rsyslog config changes with zero downtime.",
    examples: [
      "sudo kill -HUP $(pidof nginx)",
      "sudo killall -HUP rsyslogd",
      "sudo systemctl reload nginx  # Higher-level equivalent"
    ],
    memoryTip: "SIGHUP = 'hang up the phone, re-read your notes.'",
    outputExample: "$ sudo kill -HUP $(pidof nginx)\n$ tail nginx/error.log\n[notice] reloading configuration",
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
    question: "List all currently installed packages",
    answer: "apt list --installed",
    explanation: "apt list shows packages with their versions; --installed restricts the output to those actually present.",
    usage: "Inventory a system or grep for a specific name.",
    examples: [
      "apt list --installed",
      "apt list --installed | grep nginx",
      "dpkg-query -W -f='${binary:Package}\\n'  # Scripts-friendly"
    ],
    memoryTip: "apt list --installed = roll call of packages.",
    outputExample: "$ apt list --installed | head\nLikely (only just looked at: ...) accountsservice/now 22.07.5-2 amd64 [installed]\n...",
    category: "PACKAGES"
  },
  {
    id: "pkg19",
    question: "Show which packages have updates available",
    answer: "apt list --upgradable",
    explanation: "After apt update refreshes indexes, --upgradable lists packages whose installed version is older than what's in the repos.",
    usage: "Preview pending upgrades before running apt upgrade.",
    examples: [
      "sudo apt update && apt list --upgradable",
      "apt list --upgradable 2>/dev/null | wc -l",
      "apt-mark showhold  # Anything you've pinned"
    ],
    memoryTip: "apt list --upgradable = what's behind the latest.",
    outputExample: "$ apt list --upgradable\nnginx/now 1.24.0 amd64 [upgradable from: 1.22.0]",
    category: "PACKAGES"
  },
  {
    id: "pkg20",
    question: "List every file a package installs",
    answer: "dpkg -L package_name",
    explanation: "dpkg -L queries the local package database and prints the full file list installed by the named package.",
    usage: "Find configs, binaries, and docs shipped by a package.",
    examples: [
      "dpkg -L nginx",
      "dpkg -L curl | grep bin",
      "dpkg -L nginx | xargs ls -ld 2>/dev/null"
    ],
    memoryTip: "dpkg -L = list files of a package.",
    outputExample: "$ dpkg -L curl | head\n/.\n/usr\n/usr/bin\n/usr/bin/curl",
    category: "PACKAGES"
  },
  {
    id: "pkg21",
    question: "Find which package owns /usr/bin/curl",
    answer: "dpkg -S /usr/bin/curl",
    explanation: "dpkg -S searches the database for the package that installed a given path.",
    usage: "Track a mystery file back to its source package.",
    examples: [
      "dpkg -S /usr/bin/curl",
      "dpkg -S libssl",
      "apt-file search /usr/bin/foo  # For non-installed packages"
    ],
    memoryTip: "dpkg -S = search for the package owning a path.",
    outputExample: "$ dpkg -S /usr/bin/curl\ncurl: /usr/bin/curl",
    category: "PACKAGES"
  },
  {
    id: "pkg22",
    question: "Fix a half-configured package state",
    answer: "sudo dpkg --configure -a",
    explanation: "If an install was interrupted, packages may sit in 'half-configured' state; --configure -a runs post-install scripts for all such packages.",
    usage: "Recover from an aborted apt upgrade.",
    examples: [
      "sudo dpkg --configure -a",
      "sudo apt --fix-broken install",
      "sudo apt-get -f install  # Same thing, classic"
    ],
    memoryTip: "dpkg --configure -a = finish configuring all pending packages.",
    outputExample: "$ sudo dpkg --configure -a\nSetting up nginx (1.22.0) ...",
    category: "PACKAGES"
  },
  {
    id: "pkg23",
    question: "Show which packages are pinned to their current version",
    answer: "apt-mark showhold",
    explanation: "apt-mark showhold lists packages that are held back from automatic upgrades.",
    usage: "Audit which packages won't move during a routine upgrade.",
    examples: [
      "apt-mark showhold",
      "sudo apt-mark hold nginx  # Pin it",
      "sudo apt-mark unhold nginx  # Release it"
    ],
    memoryTip: "showhold = show held packages.",
    outputExample: "$ apt-mark showhold\nnginx\npostgresql-14",
    category: "PACKAGES"
  },
  {
    id: "pkg24",
    question: "Remove a hold so a package can upgrade again",
    answer: "sudo apt-mark unhold package_name",
    explanation: "unhold reverses a hold, restoring the package to normal upgrade flow.",
    usage: "After verifying you no longer need to pin a version.",
    examples: [
      "sudo apt-mark unhold nginx",
      "sudo apt-mark unhold $(apt-mark showhold)",
      "apt-mark showhold  # Confirm it's gone"
    ],
    memoryTip: "unhold = lift the pin.",
    outputExample: "$ sudo apt-mark unhold nginx\nCanceled hold on nginx.",
    category: "PACKAGES"
  },
  {
    id: "pkg25",
    question: "Download the source code for a package",
    answer: "apt source package_name",
    explanation: "apt source fetches and unpacks the upstream source plus Debian packaging. Requires deb-src lines enabled in sources.list.",
    usage: "Inspect or patch a package before rebuilding it.",
    examples: [
      "apt source curl",
      "sudo apt build-dep curl  # Install build deps first",
      "apt source --compile curl  # Source + build"
    ],
    memoryTip: "apt source = fetch the source tree.",
    outputExample: "$ apt source curl\nReading package lists... Done\ndpkg-source: extracting curl in curl-7.81.0",
    category: "PACKAGES"
  },
  {
    id: "pkg26",
    question: "Remove a PPA you previously added",
    answer: "sudo add-apt-repository --remove ppa:user/ppa-name",
    explanation: "--remove deletes the matching deb line from /etc/apt/sources.list.d so the PPA no longer contributes packages.",
    usage: "Clean up after testing an unofficial repository.",
    examples: [
      "sudo add-apt-repository --remove ppa:deadsnakes/ppa",
      "sudo rm /etc/apt/sources.list.d/deadsnakes*.list  # Manual alt.",
      "sudo apt update  # Refresh after removal"
    ],
    memoryTip: "--remove = take that PPA back out.",
    outputExample: "$ sudo add-apt-repository --remove ppa:deadsnakes/ppa\n$ ls /etc/apt/sources.list.d/\n# (deadsnakes file gone)",
    category: "PACKAGES"
  },
  {
    id: "pkg27",
    question: "Show detailed info about a single package",
    answer: "apt show package_name",
    explanation: "apt show prints version, dependencies, description, size, and homepage for a package.",
    usage: "Inspect what a package brings before installing.",
    examples: [
      "apt show nginx",
      "apt show -a nginx  # All candidate versions",
      "apt show $(apt-cache --names-only search '^lib.*-dev$' | head)"
    ],
    memoryTip: "apt show = the package's full data sheet.",
    outputExample: "$ apt show nginx\nPackage: nginx\nVersion: 1.24.0-1\nPriority: optional\nDescription: small, powerful, scalable web/proxy server",
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
    question: "List block devices in a tree view",
    answer: "lsblk",
    explanation: "lsblk shows disks, partitions, and LVM/mount mappings as a tree, with sizes and mountpoints.",
    usage: "Quick visual of storage layout before partitioning or mounting.",
    examples: [
      "lsblk",
      "lsblk -f  # Include filesystem types/UUIDs",
      "lsblk -o NAME,SIZE,MOUNTPOINT,FSTYPE"
    ],
    memoryTip: "lsblk = list block devices.",
    outputExample: "$ lsblk\nNAME   SIZE TYPE MOUNTPOINT\nsda    500G disk\n├─sda1   1G part /boot\n└─sda2 499G part /",
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
    question: "Show the history of logins on this machine",
    answer: "last",
    explanation: "last reads /var/log/wtmp and prints user logins with source IP and durations.",
    usage: "Audit who logged in and when, especially after a suspected incident.",
    examples: [
      "last",
      "last -n 10  # Last 10 entries",
      "last alice  # Only one user"
    ],
    memoryTip: "last = last logins.",
    outputExample: "$ last -n 3\nalice  pts/0  192.168.1.10  Sat May 14 09:00   still logged in\nbob    pts/1  10.0.0.5      Sat May 14 08:42 - 09:15  (00:33)",
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
    question: "Show per-device I/O statistics",
    answer: "iostat -xz 1",
    explanation: "iostat reports CPU and per-device disk activity. -x = extended stats; -z hides idle devices; 1 = refresh every second.",
    usage: "Spot which disk is bottlenecking the system.",
    examples: [
      "iostat -xz 1",
      "iostat -d 2 3  # Disks only, 3 samples, 2s apart",
      "iostat -m  # MB/s instead of KB/s"
    ],
    memoryTip: "iostat = I/O statistics.",
    outputExample: "$ iostat -xz 1\nDevice  r/s  w/s rkB/s wkB/s %util\nsda    1.0  3.2 16    256   2.1",
    category: "SYSTEM INFO"
  },
  {
    id: "sys28",
    question: "Show a concise hardware summary",
    answer: "sudo lshw -short",
    explanation: "lshw queries firmware and the kernel for installed hardware. -short prints a compact table.",
    usage: "Quick overview of CPUs, memory, disks, and NICs.",
    examples: [
      "sudo lshw -short",
      "sudo lshw -C network  # Just NICs",
      "sudo lshw -html > hw.html  # HTML report"
    ],
    memoryTip: "lshw = list hardware.",
    outputExample: "$ sudo lshw -short\nH/W path        Device     Class       Description\n/0/100/2.0/0    eth0       network     Ethernet Controller I219-LM",
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
    question: "Enable strict mode at the top of a bash script",
    answer: "set -euo pipefail",
    explanation: "Combines three safety options: -e exit on error, -u error on unset variables, -o pipefail catch failures in any pipe stage.",
    usage: "Default first line of any non-trivial script — turns silent failures into loud ones.",
    examples: [
      "#!/usr/bin/env bash\nset -euo pipefail",
      "set -euo pipefail\nIFS=$'\\n\\t'  # Safer word splitting",
      "set +e  # Locally disable -e for a risky block"
    ],
    memoryTip: "EUO pipefail = exit on Error, Undefined, broken pipeline.",
    outputExample: "$ bash -c 'set -e; false; echo unreached'\n# (exits with non-zero before 'unreached')",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash12",
    question: "Run cleanup code automatically when a script exits",
    answer: "trap 'cleanup' EXIT",
    explanation: "trap registers a handler for signals/events; EXIT fires when the shell exits for any reason — success, error, or signal.",
    usage: "Delete temp files, release locks, or send notifications no matter how the script ends.",
    examples: [
      "trap 'rm -f \"$tmp\"' EXIT",
      "trap 'echo failed at $LINENO' ERR",
      "trap '' INT  # Ignore Ctrl-C"
    ],
    memoryTip: "trap CMD EVENT = run CMD when EVENT fires.",
    outputExample: "$ bash -c 'trap \"echo cleaning up\" EXIT; echo work'\nwork\ncleaning up",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash13",
    question: "Parse a -f flag in a script using getopts",
    answer: "while getopts \"f:\" opt; do case $opt in f) file=$OPTARG;; esac; done",
    explanation: "getopts walks $@ looking for the listed short options; the colon means -f takes a value, exposed in $OPTARG.",
    usage: "Quick POSIX-friendly flag parsing without external deps.",
    examples: [
      "while getopts 'f:v' opt; do ... done",
      "shift $((OPTIND-1))  # Drop parsed opts",
      "getopts 'hf:' opt; case $opt in h) usage;; esac"
    ],
    memoryTip: "getopts = the built-in for short flags.",
    outputExample: "$ cat script.sh\nwhile getopts 'f:' opt; do case $opt in f) echo \"file=$OPTARG\";; esac; done\n$ ./script.sh -f hi\nfile=hi",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash14",
    question: "Use a default value if a variable is unset or empty",
    answer: "${var:-default}",
    explanation: "Parameter expansion: if $var is unset or empty, the whole expression evaluates to 'default' (without assigning).",
    usage: "Make scripts resilient when env vars or args aren't provided.",
    examples: [
      "echo \"${NAME:-world}\"",
      "port=\"${PORT:-8080}\"",
      ": \"${HOME:?HOME must be set}\""
    ],
    memoryTip: ":- = use-if-empty default.",
    outputExample: "$ unset NAME; echo \"${NAME:-world}\"\nworld",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash15",
    question: "Hard-fail the script if a required variable is missing",
    answer: "${var:?missing var}",
    explanation: "Parameter expansion :? exits the shell (or returns the error in scripts) with the message if the variable is unset/empty.",
    usage: "Make sure callers passed required env or args before doing destructive work.",
    examples: [
      ": \"${API_TOKEN:?API_TOKEN is required}\"",
      "TARGET=\"${1:?usage: $0 <target>}\"",
      "DB=\"${DB:?set DB env var}\""
    ],
    memoryTip: ":? = error-if-empty (loud).",
    outputExample: "$ bash -c ': \"${X:?X is required}\"'\nbash: X: X is required",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash16",
    question: "Replace all occurrences of a substring in a variable",
    answer: "${var//search/replace}",
    explanation: "Double slash means replace every match; a single / replaces only the first.",
    usage: "Sanitize or transform string variables inside scripts without sed.",
    examples: [
      "path=/home/alice; echo \"${path//alice/bob}\"",
      "echo \"${file// /_}\"  # Spaces to underscores",
      "echo \"${s/foo/bar}\"  # First occurrence only"
    ],
    memoryTip: "// = global replace.",
    outputExample: "$ s='one two three'; echo \"${s// /-}\"\none-two-three",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash17",
    question: "Match a value against several options with a case statement",
    answer: "case \"$1\" in start) ... ;; stop) ... ;; *) usage;; esac",
    explanation: "case/esac selects the first matching pattern. * is the default; ;; ends each branch.",
    usage: "Dispatch script subcommands cleanly.",
    examples: [
      "case \"$mode\" in dev|test) ...;; prod) ...;; *) echo bad;; esac",
      "case \"$file\" in *.md) ... ;; *.txt) ...;; esac",
      "case $? in 0) echo ok;; *) echo fail;; esac"
    ],
    memoryTip: "case = labeled branches; *) is the catch-all.",
    outputExample: "$ x=hi; case $x in hi) echo greet;; bye) echo leave;; esac\ngreet",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash18",
    question: "Declare an associative array in bash",
    answer: "declare -A map",
    explanation: "-A creates an associative array (string keys). Requires bash 4+; not available in pure sh.",
    usage: "Lookup tables — e.g., mapping environment names to URLs.",
    examples: [
      "declare -A url=([dev]=https://dev.x [prod]=https://x)",
      "url[staging]=https://staging.x",
      "for k in \"${!url[@]}\"; do echo \"$k -> ${url[$k]}\"; done"
    ],
    memoryTip: "-A = associative; -a = indexed.",
    outputExample: "$ declare -A m=([a]=1 [b]=2); echo \"${m[a]}\"\n1",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash19",
    question: "Read every line of a file into an array",
    answer: "mapfile -t lines < file.txt",
    explanation: "mapfile (alias readarray) reads lines into the named array; -t strips the trailing newline from each element.",
    usage: "When you need indexed access to file contents.",
    examples: [
      "mapfile -t lines < users.txt",
      "echo \"${lines[0]}\"",
      "mapfile -t < <(grep error log)  # Default array MAPFILE"
    ],
    memoryTip: "mapfile -t = each line becomes an element, no trailing \\n.",
    outputExample: "$ printf 'a\\nb\\nc\\n' > f; mapfile -t lines < f; echo \"${lines[1]}\"\nb",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash20",
    question: "Increment a counter using arithmetic syntax",
    answer: "(( i++ ))",
    explanation: "(( ... )) is bash's arithmetic expression context; it supports C-like ops without needing $ on variable names.",
    usage: "Counters in loops, simple math without invoking expr.",
    examples: [
      "(( i++ ))",
      "(( total += $val ))",
      "if (( a > b )); then echo bigger; fi"
    ],
    memoryTip: "(( math )) = C-style integer arithmetic.",
    outputExample: "$ i=0; (( i++ )); echo $i\n1",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash21",
    question: "Create a timestamped tarball backup of /data",
    answer: "tar -czf \"backup-$(date +%F).tar.gz\" /data",
    explanation: "$(date +%F) expands to YYYY-MM-DD, so the archive name carries the date. tar -czf gzip-compresses /data into it.",
    usage: "Nightly cron backup pattern — newest archive named by the day it ran.",
    examples: [
      "tar -czf \"backup-$(date +%F).tar.gz\" /data",
      "tar -czf \"snap-$(date +%F-%H%M).tgz\" /etc",
      "tar -czf - /data | ssh backup@host 'cat > backup.tgz'"
    ],
    memoryTip: "Backup name = base + $(date +%F).",
    outputExample: "$ tar -czf \"backup-$(date +%F).tar.gz\" /data\n$ ls\nbackup-2026-05-15.tar.gz",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash22",
    question: "Delete log files older than 7 days",
    answer: "find /var/log -name '*.log' -mtime +7 -delete",
    explanation: "-mtime +7 matches files modified more than 7 days ago; -delete removes them in place.",
    usage: "Log rotation / cron cleanup of old artifacts.",
    examples: [
      "find /var/log -name '*.log' -mtime +7 -delete",
      "find /tmp -mindepth 1 -mtime +30 -delete",
      "find . -name '*.bak' -mtime +14 -print  # Dry-run first"
    ],
    memoryTip: "-mtime +N = older than N days.",
    outputExample: "$ find /var/log -name '*.log' -mtime +7 -delete\n# (silently removes matching old logs)",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash23",
    question: "Batch-rename every .txt file to .md in the current directory",
    answer: "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done",
    explanation: "Loop over the glob; ${f%.txt} strips the .txt suffix using parameter expansion, then .md is appended.",
    usage: "Quick mass rename without external tools.",
    examples: [
      "for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done",
      "for f in IMG_*.jpg; do mv \"$f\" \"photo-${f#IMG_}\"; done",
      "rename 's/\\.txt$/.md/' *.txt  # If 'rename' is installed"
    ],
    memoryTip: "${name%suffix} = chop suffix; loop + mv = batch rename.",
    outputExample: "$ touch a.txt b.txt; for f in *.txt; do mv \"$f\" \"${f%.txt}.md\"; done; ls\na.md  b.md",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash24",
    question: "Send all script output to both the terminal and a log file",
    answer: "exec > >(tee -a script.log) 2>&1",
    explanation: "Process substitution >(...) launches tee, and exec redirects the script's stdout/stderr into it — so every later command is mirrored.",
    usage: "Cron and deploy scripts where you want a permanent log without losing live visibility when run interactively.",
    examples: [
      "exec > >(tee -a script.log) 2>&1",
      "exec > >(tee -a \"$LOG\") 2> >(tee -a \"$LOG\" >&2)",
      "{ stuff; } | tee -a script.log  # Per-block alternative"
    ],
    memoryTip: ">(tee -a) = process sub that tees output.",
    outputExample: "$ bash -c 'exec > >(tee -a /tmp/o); echo hi'\nhi\n$ cat /tmp/o\nhi",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash25",
    question: "Run a fallback action when a command fails",
    answer: "command || { echo failed; exit 1; }",
    explanation: "|| runs the right side only if the left exits non-zero. The braces group multiple statements as a single conditional block.",
    usage: "Inline error handling without writing a separate if/else.",
    examples: [
      "curl -fsS url || { echo 'fetch failed'; exit 1; }",
      "mkdir -p dir || exit 1",
      "command && echo ok || echo fail"
    ],
    memoryTip: "|| = 'else' for a single command.",
    outputExample: "$ false || echo recovered\nrecovered",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash26",
    question: "Schedule a script to run daily at 2:30 AM in cron",
    answer: "30 2 * * * /usr/local/bin/job.sh",
    explanation: "Cron syntax: minute hour day month weekday command. * means 'every'. 30 2 * * * fires at 02:30 every day.",
    usage: "Backups, cleanup, log rotation — anything you want on a schedule.",
    examples: [
      "30 2 * * * /usr/local/bin/backup.sh",
      "0 * * * * /usr/local/bin/heartbeat.sh  # Hourly",
      "*/5 * * * * /opt/check.sh  # Every 5 minutes"
    ],
    memoryTip: "5 fields: m h dom mon dow.",
    outputExample: "$ crontab -l\n30 2 * * * /usr/local/bin/job.sh",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash27",
    question: "Run a job every 15 minutes via cron",
    answer: "*/15 * * * * /path/to/cmd",
    explanation: "*/N in a cron field means 'every N units'. */15 in the minute slot fires at :00, :15, :30, :45.",
    usage: "Health checks, polling jobs, frequent syncs.",
    examples: [
      "*/15 * * * * /opt/healthcheck.sh",
      "*/2 * * * * /opt/sync.sh  # Every 2 minutes",
      "0 */6 * * * /opt/longjob.sh  # Every 6 hours"
    ],
    memoryTip: "*/N = step every N in that field.",
    outputExample: "$ crontab -l\n*/15 * * * * /opt/healthcheck.sh",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash28",
    question: "Sync a source dir to a remote host, deleting extras at the destination",
    answer: "rsync -avz --delete src/ user@host:/dst/",
    explanation: "-a archive (perms/symlinks/etc), -v verbose, -z compress, --delete makes the destination a mirror by removing files no longer in src/.",
    usage: "Deploys, snapshots, and one-way mirrors.",
    examples: [
      "rsync -avz --delete src/ user@host:/dst/",
      "rsync -av --dry-run src/ host:/dst/  # Preview",
      "rsync -avzP --exclude '*.log' src/ host:/dst/"
    ],
    memoryTip: "-a archive, -z zip, --delete mirror.",
    outputExample: "$ rsync -avz --delete src/ user@host:/dst/\nsending incremental file list\n./\nfile1\n...",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash29",
    question: "Iterate over positional arguments while consuming them",
    answer: "while [[ $# -gt 0 ]]; do echo \"$1\"; shift; done",
    explanation: "$# is the arg count; $1 is the next arg. shift drops $1 and renumbers, so the loop walks through all of them.",
    usage: "Manual flag parsing when getopts isn't expressive enough.",
    examples: [
      "while [[ $# -gt 0 ]]; do case $1 in --name) name=$2; shift 2;; *) shift;; esac; done",
      "while [[ $# -gt 0 ]]; do echo \"arg=$1\"; shift; done",
      "for arg in \"$@\"; do echo \"$arg\"; done  # Read-only variant"
    ],
    memoryTip: "shift = pop $1, renumber the rest.",
    outputExample: "$ set -- a b c; while [[ $# -gt 0 ]]; do echo $1; shift; done\na\nb\nc",
    category: "BASH SCRIPTING"
  },
  {
    id: "bash30",
    question: "Log a message to the system log (syslog/journal)",
    answer: "logger \"deploy completed\"",
    explanation: "logger writes a message to syslog so it shows up in journalctl alongside service logs.",
    usage: "Audit trails from cron jobs and deploy scripts.",
    examples: [
      "logger \"deploy completed\"",
      "logger -t mydeploy -p user.warning \"oops\"",
      "logger -f /var/log/myapp.log  # Forward a file"
    ],
    memoryTip: "logger = log to syslog from the shell.",
    outputExample: "$ logger \"hello from script\"\n$ journalctl -n 1\nMay 14 12:00 host alice: hello from script",
    category: "BASH SCRIPTING"
  },

  // ARCHIVES & COMPRESS — extended
  {
    id: "arch8",
    question: "Compress a file with xz (high compression ratio)",
    answer: "xz file.txt",
    explanation: "xz produces .xz archives with much better compression than gzip, at the cost of CPU. The original file is replaced.",
    usage: "Distributing large source tarballs where size matters more than CPU.",
    examples: [
      "xz file.txt  # Creates file.txt.xz",
      "xz -k file.txt  # Keep original",
      "xz -T0 file.txt  # Multi-threaded"
    ],
    memoryTip: "xz = stronger but slower than gzip.",
    outputExample: "$ xz file.txt && ls\nfile.txt.xz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch9",
    question: "Decompress an .xz file",
    answer: "unxz file.txt.xz",
    explanation: "unxz reverses xz compression; equivalent to xz -d.",
    usage: "Open an .xz archive.",
    examples: [
      "unxz file.txt.xz",
      "xz -d file.txt.xz  # Same thing",
      "xzcat file.txt.xz  # View without extracting"
    ],
    memoryTip: "unxz = un-xz.",
    outputExample: "$ unxz file.txt.xz && ls\nfile.txt",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch10",
    question: "Create an xz-compressed tarball",
    answer: "tar -cJf archive.tar.xz directory/",
    explanation: "-c create, -J use xz, -f filename. The capital J distinguishes xz from gzip (z) and bzip2 (j).",
    usage: "Pack a folder with xz's tight compression in one step.",
    examples: [
      "tar -cJf archive.tar.xz dir/",
      "tar -cvJf snap.tar.xz src/",
      "XZ_OPT=-9 tar -cJf big.tar.xz dir/  # Max compression"
    ],
    memoryTip: "tar zJf = xz; lowercase j = bzip2; z = gzip.",
    outputExample: "$ tar -cJf archive.tar.xz dir/\n$ ls\narchive.tar.xz",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch11",
    question: "List the contents of a tarball without extracting",
    answer: "tar -tf archive.tar.gz",
    explanation: "-t lists; -f names the archive. tar auto-detects the compression for listing.",
    usage: "Inspect what's in an archive before unpacking somewhere risky.",
    examples: [
      "tar -tf archive.tar.gz",
      "tar -tvf archive.tar.gz | head  # Verbose with sizes",
      "tar -tzf archive.tar.gz | wc -l  # Count files"
    ],
    memoryTip: "-t = table of contents.",
    outputExample: "$ tar -tf archive.tar.gz\ndir/\ndir/file1.txt\ndir/file2.txt",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch12",
    question: "Extract a tarball into a specific directory",
    answer: "tar -xzf archive.tar.gz -C /tmp/restore",
    explanation: "-C changes to the target directory before extracting, so files land there instead of the current directory.",
    usage: "Restore a backup into a sandbox without polluting your cwd.",
    examples: [
      "tar -xzf archive.tar.gz -C /tmp/restore",
      "mkdir -p out && tar -xzf a.tar.gz -C out",
      "tar -xJf src.tar.xz -C ~/src"
    ],
    memoryTip: "-C dir = change directory before extracting.",
    outputExample: "$ mkdir restore && tar -xzf a.tar.gz -C restore\n$ ls restore\n(extracted files)",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch13",
    question: "Extract just one file from a tarball",
    answer: "tar -xzf archive.tar.gz path/to/file.txt",
    explanation: "Pass the archive-relative path as an extra argument; tar pulls only that file (and required parent dirs).",
    usage: "Recover a single config from a large backup.",
    examples: [
      "tar -xzf backup.tar.gz etc/nginx/nginx.conf",
      "tar -xzf src.tar.gz src/main.py",
      "tar --wildcards -xzf big.tgz '*.yml'  # Glob"
    ],
    memoryTip: "Pass the path inside the archive as args.",
    outputExample: "$ tar -xzf backup.tar.gz etc/nginx/nginx.conf\n$ ls etc/nginx/\nnginx.conf",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch14",
    question: "Create a .zip archive of a directory",
    answer: "zip -r archive.zip directory/",
    explanation: "-r recurses into subfolders. zip is widely compatible with non-Unix systems.",
    usage: "Sharing files with Windows/macOS users who don't have tar handy.",
    examples: [
      "zip -r project.zip project/",
      "zip -er secrets.zip secrets/  # Encrypted",
      "zip -9 -r tight.zip dir/  # Max compression"
    ],
    memoryTip: "zip -r = recursive zip.",
    outputExample: "$ zip -r project.zip project/\n  adding: project/ (stored 0%)\n  adding: project/main.py (deflated 65%)",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch15",
    question: "Extract a .zip archive",
    answer: "unzip archive.zip",
    explanation: "unzip extracts contents into the current directory (or -d target).",
    usage: "Open a .zip you downloaded.",
    examples: [
      "unzip archive.zip",
      "unzip archive.zip -d /tmp/dest",
      "unzip -l archive.zip  # List contents"
    ],
    memoryTip: "unzip archive.zip = unpack it.",
    outputExample: "$ unzip archive.zip\nArchive:  archive.zip\n inflating: file1.txt\n inflating: file2.txt",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch16",
    question: "Create a .7z archive (high compression)",
    answer: "7z a archive.7z directory/",
    explanation: "7z 'a' adds files to an archive; .7z uses LZMA2 and often beats gzip/xz on text-heavy data.",
    usage: "Maximum compression when CPU time is cheap and bandwidth isn't.",
    examples: [
      "7z a archive.7z dir/",
      "7z a -mx=9 tight.7z dir/  # Max compression",
      "7z x archive.7z  # Extract"
    ],
    memoryTip: "7z a = add (create). 7z x = extract.",
    outputExample: "$ 7z a archive.7z dir/\nCreating archive: archive.7z\nEverything is Ok",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch17",
    question: "View the contents of a gzipped text file without extracting",
    answer: "zcat file.txt.gz",
    explanation: "zcat decompresses on the fly to stdout, like cat for .gz files.",
    usage: "Inspect compressed logs without ever writing the plaintext to disk.",
    examples: [
      "zcat app.log.gz | head",
      "zcat *.log.gz | grep error",
      "zless file.gz  # Pager version"
    ],
    memoryTip: "z* = compressed-aware variants (zcat, zless, zgrep).",
    outputExample: "$ zcat sample.txt.gz\nhello\nworld",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch18",
    question: "Grep inside a .gz log file without extracting",
    answer: "zgrep pattern file.log.gz",
    explanation: "zgrep wraps grep over a transparently decompressed stream so you can search archives directly.",
    usage: "Hunt errors in rotated logs that have been gzipped.",
    examples: [
      "zgrep error /var/log/syslog.1.gz",
      "zgrep -h -E 'panic|oops' *.log.gz",
      "zgrep -c failed *.log.gz  # Count per file"
    ],
    memoryTip: "zgrep = grep on a .gz file.",
    outputExample: "$ zgrep error app.log.gz\n[ERR] timeout reaching upstream",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch19",
    question: "Tar a directory while excluding *.log files",
    answer: "tar --exclude='*.log' -czf archive.tar.gz directory/",
    explanation: "--exclude patterns are evaluated relative to the archive contents; matching files are skipped.",
    usage: "Backup a project without bloating it with rotating logs.",
    examples: [
      "tar --exclude='*.log' -czf archive.tar.gz dir/",
      "tar --exclude-from=ignore.txt -czf a.tgz dir/",
      "tar --exclude='node_modules' -czf src.tar.gz project/"
    ],
    memoryTip: "--exclude = skip matching paths.",
    outputExample: "$ tar --exclude='*.log' -czf a.tar.gz dir/ && tar -tzf a.tar.gz | grep -c '.log'\n0",
    category: "ARCHIVES & COMPRESS"
  },
  {
    id: "arch20",
    question: "Compress a file with parallel gzip for speed",
    answer: "pigz file",
    explanation: "pigz is a drop-in gzip that uses every CPU core; produces a standard .gz file.",
    usage: "Compress big files quickly on multi-core machines.",
    examples: [
      "pigz bigfile",
      "tar -c dir | pigz > dir.tar.gz",
      "pigz -d file.gz  # Decompress (also parallel)"
    ],
    memoryTip: "pigz = parallel gzip (every core helps).",
    outputExample: "$ time pigz huge.txt\nreal    0m2.011s  # vs. gzip's 0m8s",
    category: "ARCHIVES & COMPRESS"
  },

  // DAILY TIPS — extended
  {
    id: "daily41",
    question: "Search backwards through your shell history interactively",
    answer: "Ctrl+R",
    explanation: "Ctrl+R starts an incremental reverse search of command history; keep typing to refine, press Enter to run or Esc/Ctrl+G to cancel.",
    usage: "Find a long command you ran earlier without scrolling.",
    examples: [
      "(press Ctrl+R, type 'ssh', press Enter)",
      "Ctrl+R again to step to older matches",
      "history | grep ssh  # Non-interactive alternative"
    ],
    memoryTip: "Ctrl+R = reverse-search history.",
    outputExample: "(reverse-i-search)`ssh': ssh user@host",
    category: "DAILY TIPS"
  },
  {
    id: "daily42",
    question: "Reuse the last argument of the previous command",
    answer: "!$",
    explanation: "!$ expands to the last argument of the previous command — saves retyping long paths.",
    usage: "After ls /long/path you can mkdir !$ to create the same path.",
    examples: [
      "mkdir /tmp/new && cd !$",
      "vim /etc/hosts; sudo cp !$ !$.bak",
      "!!  # Whole last command; sudo !! to retry as root"
    ],
    memoryTip: "!$ = the last word of the last command.",
    outputExample: "$ ls /var/log\n$ cd !$\ncd /var/log",
    category: "DAILY TIPS"
  },
  {
    id: "daily43",
    question: "Clear the terminal screen",
    answer: "Ctrl+L",
    explanation: "Ctrl+L is a readline shortcut that clears the screen without dropping your current command line.",
    usage: "Tidy the screen mid-command without losing what you've typed.",
    examples: [
      "Ctrl+L  # Clear screen",
      "clear  # Equivalent command",
      "reset  # Full terminal reset if it's mangled"
    ],
    memoryTip: "Ctrl+L = Lift the screen clean.",
    outputExample: "(screen clears, prompt re-renders at top)",
    category: "DAILY TIPS"
  },
  {
    id: "daily44",
    question: "Jump to the start of the command line",
    answer: "Ctrl+A",
    explanation: "Ctrl+A moves the cursor to the beginning of the line; Ctrl+E goes to the end.",
    usage: "Edit the front of a long command without arrow-spamming.",
    examples: [
      "Ctrl+A  # Beginning",
      "Ctrl+E  # End",
      "Alt+B / Alt+F  # Move by word"
    ],
    memoryTip: "A = start (Alpha), E = End.",
    outputExample: "(cursor jumps to the prompt)",
    category: "DAILY TIPS"
  },
  {
    id: "daily45",
    question: "Search the manual pages for a keyword",
    answer: "apropos keyword",
    explanation: "apropos searches short man-page descriptions for a keyword and prints matches.",
    usage: "Find the right command when you only know what it should do.",
    examples: [
      "apropos compress",
      "apropos -e socket  # Exact whole-word match",
      "man -k keyword  # Same thing"
    ],
    memoryTip: "apropos = 'about' that topic.",
    outputExample: "$ apropos compress\ngzip (1)  - compress or expand files\nbzip2 (1) - block-sorting file compressor",
    category: "DAILY TIPS"
  },
  {
    id: "daily46",
    question: "Portably check whether a command exists",
    answer: "command -v git",
    explanation: "command -v prints the path (or alias) if the command exists and exits non-zero otherwise — works in POSIX sh, unlike which.",
    usage: "In scripts, gate behavior on whether a tool is installed.",
    examples: [
      "command -v git >/dev/null || { echo install git; exit 1; }",
      "if command -v nvim; then EDITOR=nvim; fi",
      "type git  # Bash-only alternative"
    ],
    memoryTip: "command -v = the POSIX-correct 'which'.",
    outputExample: "$ command -v git\n/usr/bin/git",
    category: "DAILY TIPS"
  },
  {
    id: "daily47",
    question: "Re-run a command repeatedly to watch its output change",
    answer: "watch -n 1 'ls -l file.log'",
    explanation: "watch re-runs a command every N seconds (default 2) and displays the latest output, highlighting differences.",
    usage: "Monitor a queue, a growing file, or a deploy.",
    examples: [
      "watch -n 1 'kubectl get pods'",
      "watch -d 'free -h'  # Highlight diffs",
      "watch 'date; uptime'  # Multi-command"
    ],
    memoryTip: "watch = re-run on a clock.",
    outputExample: "$ watch -n 1 date\nEvery 1.0s: date\nSat May 14 10:30:01 UTC 2026",
    category: "DAILY TIPS"
  },
  {
    id: "daily48",
    question: "Show a progress bar for a pipe of unknown duration",
    answer: "pv file.iso | dd of=/dev/sdX",
    explanation: "pv (pipe viewer) sits inside a pipe and prints throughput, ETA, and a progress bar based on the input file size.",
    usage: "Watch a long-running copy/transform finish.",
    examples: [
      "pv file.iso | dd of=/dev/sdX bs=4M",
      "pv -s 100M < /dev/urandom > random.bin",
      "tar -czf - dir/ | pv | ssh host 'cat > dir.tgz'"
    ],
    memoryTip: "pv = pipe viewer (progress bar in pipes).",
    outputExample: "$ pv file.iso > /dev/null\n 1.2GB 0:00:08 [ 150MB/s] [============>     ] 62%",
    category: "DAILY TIPS"
  },
  {
    id: "daily49",
    question: "Sort the current directory's children by total size",
    answer: "du -sh * | sort -h",
    explanation: "du -sh prints human-readable sizes per entry; -h on sort understands the K/M/G suffixes for a correct numeric sort.",
    usage: "Find the heavy folders eating your disk.",
    examples: [
      "du -sh * | sort -h",
      "du -sh .[!.]* * | sort -h  # Include hidden",
      "du -sh */ | sort -h  # Directories only"
    ],
    memoryTip: "sort -h = human-readable numeric sort.",
    outputExample: "$ du -sh * | sort -h\n4.0K  README.md\n12M   src\n840M  node_modules",
    category: "DAILY TIPS"
  },
  {
    id: "daily50",
    question: "Open the last command in your editor to tweak and re-run it",
    answer: "fc",
    explanation: "fc (fix command) pulls the previous command into $EDITOR; on save, the edited command runs.",
    usage: "Fix a typo or refactor a long pipeline without retyping it.",
    examples: [
      "fc  # Edit last command",
      "fc -l  # List recent history with numbers",
      "fc 100 105  # Edit commands 100-105 as a block"
    ],
    memoryTip: "fc = fix command (open in editor).",
    outputExample: "$ fc\n# (editor opens with previous command; save+quit to run it)",
    category: "DAILY TIPS"
  },

  // RHEL / FEDORA
  {
    id: "rhel1",
    question: "Install a package on Fedora/RHEL",
    answer: "sudo dnf install package_name",
    explanation: "dnf is the modern package manager on Fedora/RHEL 8+, replacing yum. It resolves dependencies and installs from configured repos.",
    usage: "Add software to a Fedora/RHEL system.",
    examples: [
      "sudo dnf install nginx",
      "sudo dnf install -y vim git  # Multiple, no prompt",
      "sudo dnf install /path/to/pkg.rpm  # Local RPM"
    ],
    memoryTip: "dnf install = the apt install equivalent on Fedora/RHEL.",
    outputExample: "$ sudo dnf install nginx\nDependencies resolved.\nInstalling: nginx-1.24.0-1.fc40",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel2",
    question: "Remove a package on Fedora/RHEL",
    answer: "sudo dnf remove package_name",
    explanation: "dnf remove uninstalls a package and its no-longer-needed dependencies (you'll be prompted).",
    usage: "Uninstall software cleanly.",
    examples: [
      "sudo dnf remove nginx",
      "sudo dnf autoremove  # Drop orphans",
      "sudo dnf history undo last  # Roll back the last txn"
    ],
    memoryTip: "dnf remove = apt remove on the Red Hat side.",
    outputExample: "$ sudo dnf remove nginx\nRemoving:\n nginx  x86_64  1.24.0-1.fc40\nComplete!",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel3",
    question: "Upgrade all installed packages on Fedora/RHEL",
    answer: "sudo dnf upgrade",
    explanation: "dnf upgrade updates every package to the newest available version in the enabled repositories.",
    usage: "Routine system maintenance.",
    examples: [
      "sudo dnf upgrade",
      "sudo dnf upgrade --refresh  # Force metadata refresh first",
      "sudo dnf upgrade nginx  # Just one package"
    ],
    memoryTip: "dnf upgrade = apt upgrade on Fedora/RHEL.",
    outputExample: "$ sudo dnf upgrade\nUpgrading:\n kernel-core   6.8.5  -> 6.8.9",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel4",
    question: "Search for a package by keyword on Fedora/RHEL",
    answer: "dnf search keyword",
    explanation: "dnf search matches the keyword against package names and short descriptions in the repo metadata.",
    usage: "Discover available packages before installing.",
    examples: [
      "dnf search editor",
      "dnf search --all 'web server'  # Match against full description too",
      "dnf list 'python3-*'  # List by glob"
    ],
    memoryTip: "dnf search = apt search.",
    outputExample: "$ dnf search nginx\n=== Name & Summary Matched: nginx ===\nnginx.x86_64 : A high performance web server",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel5",
    question: "Show detailed info about a package",
    answer: "dnf info package_name",
    explanation: "dnf info prints version, architecture, repo, size, and description for a package.",
    usage: "Inspect before installing or filing a bug.",
    examples: [
      "dnf info nginx",
      "dnf info --installed nginx  # Only the installed version",
      "dnf list --installed nginx"
    ],
    memoryTip: "dnf info = apt show.",
    outputExample: "$ dnf info nginx\nName    : nginx\nVersion : 1.24.0\nRelease : 1.fc40\nSummary : A high performance web server",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel6",
    question: "View the dnf transaction history",
    answer: "dnf history",
    explanation: "dnf history lists every install/upgrade/remove transaction with timestamps and IDs you can roll back.",
    usage: "Trace when a package changed or undo a bad upgrade.",
    examples: [
      "dnf history",
      "sudo dnf history info 42  # Details of txn 42",
      "sudo dnf history undo 42  # Roll back that txn"
    ],
    memoryTip: "dnf history = a log of package changes.",
    outputExample: "$ dnf history\nID | Date | Action(s) | Altered\n42 | May 14 | Install | 3",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel7",
    question: "Find which package provides /usr/bin/curl",
    answer: "dnf provides /usr/bin/curl",
    explanation: "dnf provides searches repo metadata for the package that ships a given path or capability.",
    usage: "Track unknown binaries back to their packages.",
    examples: [
      "dnf provides /usr/bin/curl",
      "dnf provides '*/nginx.conf'  # Glob",
      "rpm -qf /usr/bin/curl  # Local DB equivalent"
    ],
    memoryTip: "dnf provides = the dpkg -S of the RPM world.",
    outputExample: "$ dnf provides /usr/bin/curl\ncurl-8.6.0-1.fc40.x86_64 : ...",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel8",
    question: "Clean the dnf cache",
    answer: "sudo dnf clean all",
    explanation: "Removes cached repo metadata and packages from /var/cache/dnf, forcing fresh downloads next time.",
    usage: "Free space or resolve flaky metadata after switching repos.",
    examples: [
      "sudo dnf clean all",
      "sudo dnf clean metadata  # Only repo data",
      "sudo dnf makecache  # Re-prime cache"
    ],
    memoryTip: "dnf clean all = nuke the cached metadata + rpms.",
    outputExample: "$ sudo dnf clean all\n12 files removed",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel9",
    question: "Install a package group like 'Development Tools'",
    answer: "sudo dnf group install \"Development Tools\"",
    explanation: "Groups are curated sets of packages (build tools, dev libs, etc.) installable as one unit.",
    usage: "Bring up a dev environment in one command.",
    examples: [
      "sudo dnf group install \"Development Tools\"",
      "dnf group list  # Show available groups",
      "sudo dnf group install --with-optional \"GNOME Desktop\""
    ],
    memoryTip: "dnf group install = the meta-package install.",
    outputExample: "$ sudo dnf group install \"Development Tools\"\nInstalling Groups:\n Development Tools\nTransaction Summary: Install 47 packages",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel10",
    question: "List all installed RPM packages",
    answer: "rpm -qa",
    explanation: "rpm -qa queries the local RPM database for All installed packages.",
    usage: "Generate an inventory for compliance or migration.",
    examples: [
      "rpm -qa | wc -l",
      "rpm -qa | grep nginx",
      "rpm -qa --queryformat '%{NAME}\\n' | sort"
    ],
    memoryTip: "rpm -qa = query all.",
    outputExample: "$ rpm -qa | head -3\nbasesystem-11-15.fc40\nlibgcc-13.2.1-7.fc40\nfilesystem-3.18-7.fc40",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel11",
    question: "Find which RPM owns /etc/nginx/nginx.conf",
    answer: "rpm -qf /etc/nginx/nginx.conf",
    explanation: "rpm -qf (query file) returns the package that installed the given path.",
    usage: "Identify which package to investigate when a config behaves oddly.",
    examples: [
      "rpm -qf /etc/nginx/nginx.conf",
      "rpm -qf $(which curl)",
      "dnf provides /etc/nginx/nginx.conf  # Repo-side equivalent"
    ],
    memoryTip: "rpm -qf = query owner file.",
    outputExample: "$ rpm -qf /etc/nginx/nginx.conf\nnginx-1.24.0-1.fc40.x86_64",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel12",
    question: "List every file installed by the nginx package",
    answer: "rpm -ql nginx",
    explanation: "-q query, -l list files, NAME = nginx — prints everything in the package payload.",
    usage: "Locate binaries, configs, and docs shipped with a package.",
    examples: [
      "rpm -ql nginx",
      "rpm -ql nginx | grep /etc",
      "rpm -qc nginx  # Config files only"
    ],
    memoryTip: "rpm -ql = query list-files.",
    outputExample: "$ rpm -ql nginx | head -3\n/etc/logrotate.d/nginx\n/etc/nginx/conf.d\n/usr/sbin/nginx",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel13",
    question: "Start a systemd service",
    answer: "sudo systemctl start nginx",
    explanation: "systemctl is the systemd manager. start launches a unit immediately without changing whether it's enabled at boot.",
    usage: "Bring a service up after install or config changes.",
    examples: [
      "sudo systemctl start nginx",
      "sudo systemctl restart nginx",
      "sudo systemctl stop nginx"
    ],
    memoryTip: "systemctl start = run the service now.",
    outputExample: "$ sudo systemctl start nginx\n$ systemctl is-active nginx\nactive",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel14",
    question: "Enable a service to start on boot, and start it now",
    answer: "sudo systemctl enable --now nginx",
    explanation: "--now combines enable (start at boot) with start (start now), so you don't have to run two commands.",
    usage: "Wire up a fresh install in one step.",
    examples: [
      "sudo systemctl enable --now nginx",
      "sudo systemctl disable --now nginx  # Reverse",
      "sudo systemctl is-enabled nginx  # Check"
    ],
    memoryTip: "enable --now = persist boot + start immediately.",
    outputExample: "$ sudo systemctl enable --now nginx\nCreated symlink /etc/systemd/system/multi-user.target.wants/nginx.service",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel15",
    question: "Re-read systemd unit files after editing one",
    answer: "sudo systemctl daemon-reload",
    explanation: "After changing a unit file, systemd needs to re-parse it. daemon-reload reloads its in-memory view without restarting running units.",
    usage: "Always run after editing a .service file before restarting it.",
    examples: [
      "sudo systemctl daemon-reload",
      "sudo systemctl daemon-reexec  # Re-exec systemd itself",
      "sudo systemctl edit nginx  # Drop-in override + auto-reload"
    ],
    memoryTip: "daemon-reload = reload the unit files into systemd.",
    outputExample: "$ sudo systemctl daemon-reload\n# (silent on success)",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel16",
    question: "Tail the live journal of a specific service",
    answer: "journalctl -xeu nginx",
    explanation: "-u limits to a unit; -e jumps to the end; -x adds explanatory hints for errors when available.",
    usage: "Diagnose why a service failed to start or is misbehaving.",
    examples: [
      "sudo journalctl -xeu nginx",
      "sudo journalctl -fu nginx  # Follow live",
      "sudo journalctl --since '10 min ago' -u nginx"
    ],
    memoryTip: "journalctl -xeu = explain + end + unit filter.",
    outputExample: "$ sudo journalctl -xeu nginx -n 3\nnginx[1234]: starting...\nsystemd[1]: Started nginx.service",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel17",
    question: "Show all active firewalld rules",
    answer: "sudo firewall-cmd --list-all",
    explanation: "firewalld groups rules into zones; --list-all on the default zone prints everything currently allowed.",
    usage: "Audit what's open on a server.",
    examples: [
      "sudo firewall-cmd --list-all",
      "sudo firewall-cmd --list-all --zone=public",
      "sudo firewall-cmd --get-active-zones"
    ],
    memoryTip: "--list-all = everything in the current zone.",
    outputExample: "$ sudo firewall-cmd --list-all\npublic (active)\n  services: ssh dhcpv6-client\n  ports: 8080/tcp",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel18",
    question: "Persistently allow TCP port 8080 through firewalld",
    answer: "sudo firewall-cmd --add-port=8080/tcp --permanent",
    explanation: "--permanent writes to the on-disk config; without it the rule only lasts until reboot. Follow up with --reload to apply.",
    usage: "Open a port for a new service.",
    examples: [
      "sudo firewall-cmd --add-port=8080/tcp --permanent",
      "sudo firewall-cmd --reload",
      "sudo firewall-cmd --add-service=http --permanent"
    ],
    memoryTip: "--permanent then --reload = real rules saved + applied.",
    outputExample: "$ sudo firewall-cmd --add-port=8080/tcp --permanent\nsuccess\n$ sudo firewall-cmd --reload\nsuccess",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel19",
    question: "Check the current SELinux enforcement mode",
    answer: "getenforce",
    explanation: "Prints Enforcing, Permissive, or Disabled — the runtime state of SELinux's policy engine.",
    usage: "Quickly check why a service might be getting blocked.",
    examples: [
      "getenforce",
      "sestatus  # More detailed",
      "sudo setenforce 0  # Switch to permissive (temporary)"
    ],
    memoryTip: "getenforce = is SELinux locking the door right now?",
    outputExample: "$ getenforce\nEnforcing",
    category: "RHEL/FEDORA"
  },
  {
    id: "rhel20",
    question: "Restore SELinux file contexts under a directory",
    answer: "sudo restorecon -Rv /var/www/html",
    explanation: "restorecon resets each file's SELinux context to the policy default. -R recurses, -v reports changes.",
    usage: "Fix 403/permission-denied weirdness after moving files around with cp/tar that didn't preserve contexts.",
    examples: [
      "sudo restorecon -Rv /var/www/html",
      "sudo restorecon -v /etc/nginx/nginx.conf",
      "matchpathcon /var/www/html  # See expected context"
    ],
    memoryTip: "restorecon = restore SELinux context.",
    outputExample: "$ sudo restorecon -Rv /var/www/html\nrelabeled /var/www/html/index.html from unconfined_u:... to system_u:object_r:httpd_sys_content_t:s0",
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