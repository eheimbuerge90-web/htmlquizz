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
  }
];

export const categories = [
  { id: "NAVIGATION", name: "Navigation", count: 20 },
  { id: "FILE OPS", name: "File Operations", count: 25 },
  { id: "VIEWING TEXT", name: "Viewing Text", count: 20 },
  { id: "PERMISSIONS", name: "Permissions", count: 20 },
  { id: "PIPES & REDIRECT", name: "Pipes & Redirect", count: 20 },
  { id: "PROCESSES", name: "Processes", count: 20 },
  { id: "NETWORKING", name: "Networking", count: 20 },
  { id: "PACKAGES", name: "Packages", count: 17 },
  { id: "TEXT PROCESSING", name: "Text Processing", count: 20 },
  { id: "SYSTEM INFO", name: "System Info", count: 20 },
  { id: "BASH SCRIPTING", name: "Bash Scripting", count: 20 },
  { id: "ARCHIVES & COMPRESS", name: "Archives & Compress", count: 15 },
  { id: "DAILY TIPS", name: "Daily Linux Tips", count: 40 }
];