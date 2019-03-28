
# multiple commits into one
git reset --soft "HEAD~n" # n - number of commits to uncommit
git commit --amend

##############
# .gitignore #
##############
Each file in separate line.

git add . && git reset src/test/resources/

### Getting & Creating Projects

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |

### Basic Snapshotting

| Command | Description |
| ------- | ----------- |
| `git status` | Check status |
| `git add [file-name.txt]` | Add a file to the staging area |
| `git add -A` | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove a file (or folder) |

### Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (the asterisk denotes the current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a branch |
| `git push origin --delete [branchName]` | Delete a remote branch |
| `git checkout -b [branch name]` | Create a new branch and switch to it |
| `git checkout -b [branch name] origin/[branch name]` | Clone a remote branch and switch to it |
| `git checkout [branch name]` | Switch to a branch |
| `git checkout -` | Switch to the branch last checked out |
| `git checkout -- [file-name.txt]` | Discard changes to a file |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git merge [source branch] [target branch]` | Merge a branch into a target branch |
| `git stash` | Stash changes in a dirty working directory |
| `git stash clear` | Remove all stashed entries |

### Sharing & Updating Projects

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote repository (and remember the branch) |
| `git push` | Push changes to remote repository (remembered branch) |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git pull` | Update local repository to the newest commit |
| `git pull origin [branch name]` | Pull changes from remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add a remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set a repository's origin branch to SSH |


### Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git diff [source branch] [target branch]` | Preview changes before merging |


# renames any branch
$ git rename-branch new-name old-name

# renames current branch
$ git rename-branch new-name

# Show information about the repo:

$ git info

  ## Remote URLs:

  origin              git@github.com:sampleAuthor/git-extras.git (fetch)
  origin              git@github.com:sampleAuthor/git-extras.git (push)

  ## Remote Branches:

  origin/HEAD -> origin/master
  origin/myBranch

  ## Local Branches:

  myBranch
  * master

  ## Most Recent Commit:

  commit e3952df2c172c6f3eb533d8d0b1a6c77250769a7
  Author: Sample Author <sampleAuthor@gmail.com>

  Added git-info command.

  Type 'git log' for more commits, or 'git show <commit id>' for full commit details.

  ## Configuration (.git/config):

  color.diff=auto
  color.status=auto
  color.branch=auto
  user.name=Sample Author
  user.email=sampleAuthor@gmail.com
  core.repositoryformatversion=0
  core.filemode=true
  core.bare=false
  core.logallrefupdates=true
  core.ignorecase=true
  remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
  remote.origin.url=git@github.com:mub/git-extras.git
  branch.master.remote=origin
  branch.master.merge=refs/heads/master


### Track upstream branch 

git branch -u origin/mybranch

### List all branches and their upstreams as well as last commit on branch
git branch -vv

### Show all tracked files
git ls-files -t
### Show all untracked files
git ls-files --others
### Show all ignored files
git ls-files --others -i --exclude-standard
### Create new working tree from a repository (git 2.5)
git worktree add -b <branch-name> <path> <start-point>
### Create new working tree from HEAD state
git worktree add --detach <path> HEAD
### Untrack files without deleting
git rm --cached <file_path>
### Alternatives:

git rm --cached -r <directory_path>
### Before deleting untracked files/directory, do a dry run to get the list of these files/directories
git clean -n
