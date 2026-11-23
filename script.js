
/* ======================================================
   GITHUB MASTERY TRACKER
   BEGINNER TO ADVANCED LEARNING SYSTEM

   Main responsibilities:
   1. Store the course curriculum.
   2. Display GitHub lessons.
   3. Track experiments and mastery.
   4. Save progress and notes.
   5. Manage practical missions.
====================================================== */


/* ======================================================
   PART 1 — COURSE STAGES
====================================================== */

const stages = [

    {
        id: "foundations",
        number: "01",
        title: "Git & GitHub Foundations",
        level: "Beginner",
        description: "Understand the tools, the terminology and the complete development workflow.",
        goal: "Explain Git, GitHub, repositories, local work, remote work, commits and the relationship between them.",
        output: "You can explain what happens when a developer creates a repository and stores code on GitHub."
    },

    {
        id: "profile",
        number: "02",
        title: "GitHub Account & Developer Profile",
        level: "Beginner",
        description: "Configure your GitHub identity and understand how your profile represents your work.",
        goal: "Create a professional, secure profile that displays genuine projects and contributions.",
        output: "A complete GitHub profile with a profile README and useful pinned repositories."
    },

    {
        id: "repositories",
        number: "03",
        title: "Repository Mastery",
        level: "Beginner",
        description: "Create, configure, structure and manage repositories using GitHub.com.",
        goal: "Independently create and configure repositories with appropriate descriptions, visibility and project files.",
        output: "A clean practice repository with README, .gitignore and license decisions."
    },

    {
        id: "file-ops",
        number: "04",
        title: "Files, Commits & Repository History",
        level: "Beginner",
        description: "Learn the actual GitHub website interface for managing project files and examining changes.",
        goal: "Create, edit, upload, inspect and compare repository files using the browser.",
        output: "A repository containing a sequence of understandable changes."
    },

    {
        id: "git-core",
        number: "05",
        title: "Git Fundamentals & Terminal Workflow",
        level: "Intermediate",
        description: "Understand the underlying Git system that powers GitHub.",
        goal: "Understand working trees, staging, commits, remotes, branches, pushes, pulls and conflicts.",
        output: "A local Git project synchronized with a GitHub repository."
    },

    {
        id: "planning",
        number: "06",
        title: "Issues, Labels & Project Management",
        level: "Intermediate",
        description: "Learn how real teams organize bugs, feature requests, priorities and project progress.",
        goal: "Turn unstructured development work into tracked and actionable work.",
        output: "A functioning issue tracker and GitHub Project board."
    },

    {
        id: "pull-requests",
        number: "07",
        title: "Pull Requests & Code Collaboration",
        level: "Intermediate",
        description: "Learn the central collaboration workflow used in GitHub development.",
        goal: "Create, review, update and merge pull requests correctly.",
        output: "A complete branch-to-review-to-merge workflow."
    },

    {
        id: "open-source",
        number: "08",
        title: "Open Source Contribution",
        level: "Intermediate",
        description: "Understand how developers find projects, follow contribution guidelines and collaborate with maintainers.",
        goal: "Make a small responsible contribution to an external open-source project.",
        output: "At least one properly submitted contribution, preferably a merged pull request."
    },

    {
        id: "releases",
        number: "09",
        title: "Tags, Versions & Releases",
        level: "Intermediate",
        description: "Learn how software versions are identified and published.",
        goal: "Create tags, understand semantic versioning and publish a release.",
        output: "A versioned release with a useful changelog."
    },

    {
        id: "pages",
        number: "10",
        title: "GitHub Pages & Website Deployment",
        level: "Intermediate",
        description: "Turn a repository into a published website.",
        goal: "Deploy a static web project, understand Pages settings and investigate publishing problems.",
        output: "A published project website."
    },

    {
        id: "actions",
        number: "11",
        title: "GitHub Actions & Automation",
        level: "Advanced",
        description: "Automate development workflows with event-driven workflows and jobs.",
        goal: "Understand workflow YAML, triggers, runners, steps, secrets, artifacts and debugging.",
        output: "A working automated repository workflow."
    },

    {
        id: "security",
        number: "12",
        title: "Security, Permissions & Governance",
        level: "Advanced",
        description: "Protect accounts, repositories, dependencies, credentials and code review processes.",
        goal: "Apply sensible security controls and understand how repository governance works.",
        output: "A repository with security-conscious access and maintenance settings."
    },

    {
        id: "advanced",
        number: "13",
        title: "Advanced GitHub Ecosystem",
        level: "Advanced",
        description: "Understand organizations, teams, automation interfaces and advanced development environments.",
        goal: "Know when and how to use GitHub CLI, APIs, webhooks, Codespaces and organizational workflows.",
        output: "An understanding of how GitHub fits into larger engineering systems."
    },

    {
        id: "capstone",
        number: "14",
        title: "Professional GitHub Mastery Capstone",
        level: "Mastery",
        description: "Bring the complete workflow together in an independently managed project.",
        goal: "Demonstrate the ability to manage a repository from planning to release and maintenance.",
        output: "A professional, documented, versioned and demonstrably maintained GitHub project."
    }

];


/* ======================================================
   PART 2 — LESSON CREATION HELPER
====================================================== */

function makeLesson(
    id,
    stage,
    title,
    level,
    minutes,
    what,
    why,
    steps,
    experiment,
    evidence,
    explain,
    resource = "https://docs.github.com/en",
    command = ""
) {

    return {
        id,
        stage,
        title,
        level,
        minutes,
        what,
        why,
        steps,
        experiment,
        evidence,
        explain,
        resource,
        command
    };

}


/* ======================================================
   PART 3 — COMPLETE 44-LESSON CURRICULUM
====================================================== */

const lessons = [

    /* ----------------------------------
       STAGE 01 — FOUNDATIONS
    ---------------------------------- */

    makeLesson(
        "git-vs-github",
        "foundations",
        "What are Git and GitHub?",
        "Beginner",
        25,

        "Git is a distributed version control system. It records changes to files over time. GitHub is a platform that hosts Git repositories and adds collaboration, code review, project management, automation and other development services.",

        "You must understand the difference before using either tool. Git handles version history. GitHub provides a shared platform where people can store and collaborate on Git repositories. They work together, but they are not the same product.",

        [
            "Open github.com and examine its main page.",
            "Sign in to your GitHub account.",
            "Open your GitHub dashboard.",
            "Find the Repositories section.",
            "Open an existing public repository.",
            "Notice the files, branches, commits, Issues and Pull requests tabs where available.",
            "Open GitHub Docs and find the introduction to Git and GitHub."
        ],

        "Explain Git and GitHub in your own words. Write one example of something Git does and one example of something GitHub provides. Then create a small text file locally and explain why Git alone and GitHub together solve different problems.",

        [
            "You can explain the difference between Git and GitHub.",
            "You can identify a GitHub repository.",
            "You can explain why version control is useful."
        ],

        "What problem does version control solve? Why is Git not the same as GitHub? Why would a team use GitHub instead of exchanging files through email?",

        "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    ),

    makeLesson(
        "repo-model",
        "foundations",
        "Understand repositories, local copies and remote copies",
        "Beginner",
        25,

        "A repository is a managed project containing files and version history. A local repository lives on your computer. A remote repository is a hosted copy, commonly on GitHub. Clone creates a local copy. Push sends local commits to a remote. Pull brings remote changes into your local working branch.",

        "The relationship between local and remote repositories explains how individual developers and teams share work without directly modifying each other's computers.",

        [
            "Open one of your GitHub repositories.",
            "Identify its owner and repository name.",
            "Find the Code button.",
            "Inspect the HTTPS and SSH clone options.",
            "Notice the branches and commit history.",
            "Find the button or link for opening a repository in GitHub Codespaces if available.",
            "Draw a simple diagram showing your computer, Git and GitHub."
        ],

        "Create a diagram with three boxes: local project, Git version history and GitHub remote repository. Draw the direction of clone, commit, push and pull. Explain which operations happen locally and which involve the remote.",

        [
            "You can explain local versus remote.",
            "You can explain clone, commit, push and pull.",
            "You know that a GitHub repository can have multiple local clones."
        ],

        "What is a repository? What is a remote? What is the difference between clone and download ZIP? Why is a commit not automatically the same as a push?"
    ),

    makeLesson(
        "public-private",
        "foundations",
        "Public repositories, private repositories and open-source visibility",
        "Beginner",
        20,

        "A public repository can generally be viewed by anyone. A private repository restricts access to authorized users. Repository visibility determines who can discover and inspect its contents, subject to GitHub's access rules.",

        "Visibility matters because publishing code can reveal implementation details, private data and accidentally committed credentials. Selecting the right visibility is an important engineering decision.",

        [
            "Open a repository you own, or create a practice repository.",
            "Open its Settings tab.",
            "Find the repository visibility area if your access allows it.",
            "Read the difference between public and private.",
            "Inspect the collaborators and access settings.",
            "Do not change the visibility of an important existing repository during this experiment.",
            "Create a separate private test repository if you need to experiment."
        ],

        "Plan two hypothetical repositories. One is a public portfolio project. The other contains a private work-in-progress project. Decide the visibility for each and write your reasons. Do not upload personal information, passwords or API keys to either one.",

        [
            "You can explain public versus private.",
            "You know that a public repository should contain only information you intend to disclose.",
            "You can locate repository access settings."
        ],

        "Can a public repository be viewed by strangers? Does private visibility automatically make careless credential storage safe? Who should have access to a team repository?"
    ),


    /* ----------------------------------
       STAGE 02 — PROFILE
    ---------------------------------- */

    makeLesson(
        "profile-setup",
        "profile",
        "Configure your GitHub profile",
        "Beginner",
        20,

        "A GitHub profile represents a developer account. It can show a username, profile picture, biography, links, organizations, activity and public repositories.",

        "Developers, collaborators and potential employers may use a profile to understand what you build and how you contribute. A useful profile presents evidence rather than empty claims.",

        [
            "Click your GitHub profile picture.",
            "Choose Your profile.",
            "Open Edit profile.",
            "Review your name, bio and public profile information.",
            "Add a concise and accurate description.",
            "Review your public contributions and repositories.",
            "Inspect the profile settings and account settings separately."
        ],

        "Write a short developer biography describing what you are learning and what kinds of projects you build. Update your profile with accurate information. Do not claim skills or experience you do not have.",

        [
            "Your profile is accessible.",
            "Your biography is accurate.",
            "You understand profile information versus repository information."
        ],

        "What does your profile communicate? Which profile fields are public? Why should a profile reflect genuine work?"
    ),

    makeLesson(
        "profile-readme",
        "profile",
        "Profile README, pinned repositories and contribution display",
        "Beginner",
        25,

        "GitHub supports a special profile README when you create a public repository whose name exactly matches your GitHub username and include a README.md. You can also pin selected repositories or relevant public work on your profile.",

        "The profile README provides a customizable introduction. Pinned repositories help visitors find meaningful work without searching through every repository.",

        [
            "Find your exact GitHub username.",
            "Open github.com/new.",
            "Create a public repository with exactly the same name as your username.",
            "Select the option to add a README file.",
            "Open README.md and edit it using GitHub's web editor.",
            "Add a brief introduction and links to real projects.",
            "Visit your profile and inspect the result.",
            "Use the profile customization controls to pin relevant repositories."
        ],

        "Build a profile README containing an introduction, current learning goals, three real projects or learning repositories, and contact links you intentionally wish to publish.",

        [
            "The special profile repository name matches your username exactly.",
            "The README appears on your profile.",
            "You understand how to pin repositories."
        ],

        "Why does this repository have to match your username? What makes a pinned repository worth highlighting?",

        "https://docs.github.com/en/account-and-profile"
    ),


    /* ----------------------------------
       STAGE 03 — REPOSITORIES
    ---------------------------------- */

    makeLesson(
        "repo-create",
        "repositories",
        "Create your first repository through GitHub.com",
        "Beginner",
        25,

        "Creating a repository establishes a project space on GitHub. You choose the owner, name, description, visibility and optional initial files.",

        "A repository is the basic unit for hosting and managing a project on GitHub. Correct naming and initial configuration make future collaboration easier.",

        [
            "Open https://github.com/new.",
            "Choose the owner account.",
            "Enter the repository name github-mastery-lab.",
            "Write a clear description explaining its learning purpose.",
            "Choose Private for your initial practice repository.",
            "Select Add a README file.",
            "Review the options and create the repository.",
            "Open the new repository."
        ],

        "Create a repository called github-mastery-lab. Use it as your safe experimental environment for the rest of the course. Keep your separate application project in a separate repository.",

        [
            "The repository exists on GitHub.",
            "You can identify its owner and full repository name.",
            "It has an initial README.",
            "You can explain why you selected its visibility."
        ],

        "What did the owner field decide? Why give a repository a clear description? What was the purpose of the README option?",

        "https://docs.github.com/en/repositories/creating-and-managing-repositories"
    ),

    makeLesson(
        "repo-settings",
        "repositories",
        "Explore repository settings and permissions",
        "Beginner",
        25,

        "Repository settings control configuration such as the repository name, description, features, collaborators, branches, webhooks and other administrative options. Available controls vary by account, repository type and organizational policy.",

        "A repository is more than a directory of source files. Repository configuration determines how people access it, collaborate, automate work and protect important changes.",

        [
            "Open github-mastery-lab.",
            "Open the Settings tab.",
            "Look through General settings.",
            "Identify the repository name and description.",
            "Inspect the Features section.",
            "Find Collaborators or the access management section.",
            "Inspect the branches and security-related sections.",
            "Do not change settings you do not understand."
        ],

        "Create a settings map in your notebook. List five settings, what they control and why you might use them. Include one permission-related setting.",

        [
            "You can locate repository settings.",
            "You can identify general and access configuration.",
            "You understand the difference between repository content and repository administration."
        ],

        "Why are permissions separate from files? Why should a repository owner understand its settings?"
    ),

    makeLesson(
        "repo-starter-files",
        "repositories",
        "README, .gitignore and LICENSE",
        "Beginner",
        30,

        "README.md explains a project. A .gitignore file tells Git which matching untracked files or paths to ignore. A LICENSE file defines the terms under which others may use, modify or distribute the project.",

        "These files make repositories understandable and maintainable. A README improves communication, .gitignore reduces accidental commits of generated files and a license clarifies reuse permissions.",

        [
            "Open your practice repository.",
            "Open README.md and choose Edit.",
            "Add a project description, purpose, features and instructions.",
            "Commit the README changes.",
            "Choose Add file and Create new file.",
            "Create a file named .gitignore.",
            "Add suitable entries such as node_modules/ for a Node project.",
            "Read the difference between common open-source licenses before selecting one.",
            "Do not add a license unless you understand the permission you are granting."
        ],

        "Create a README for github-mastery-lab with sections for About, Learning Objectives, Experiments and Current Progress. Add a suitable .gitignore entry only if the project needs it. Research MIT and Apache-2.0 licenses and explain their general purposes.",

        [
            "README renders correctly.",
            ".gitignore is a plain repository file.",
            "You can explain why a license is a legal choice rather than a decorative badge."
        ],

        "What does README communicate? What does .gitignore do? Why should you not choose a license at random?",

        "https://docs.github.com/en/repositories"
    ),


    /* ----------------------------------
       STAGE 04 — FILE OPERATIONS
    ---------------------------------- */

    makeLesson(
        "web-edit",
        "file-ops",
        "Create, edit, upload and delete files on GitHub",
        "Beginner",
        25,

        "GitHub's web interface can create files, edit existing files, upload files, rename paths and delete files when you have the required permissions.",

        "Browser editing is useful for small documentation changes, quick fixes and working without a local development setup. Larger software changes should still be developed and tested appropriately.",

        [
            "Open github-mastery-lab.",
            "Select Add file > Create new file.",
            "Create a file named learning-log.md.",
            "Write three useful lines.",
            "Commit the change with a meaningful message.",
            "Open the file again and choose Edit.",
            "Change one sentence and commit again.",
            "Try uploading a small harmless text file.",
            "Inspect the options for renaming or deleting a test file."
        ],

        "Create learning-log.md. Make two separate commits: one to create it and one to improve it. Keep both commits meaningful and inspect the repository after each change.",

        [
            "The file exists in the repository.",
            "There are two understandable commits.",
            "You can distinguish editing a file from committing the edit."
        ],

        "Why does GitHub ask you to commit a browser edit? Does clicking Edit alone create a new commit?"
    ),

    makeLesson(
        "history-diff",
        "file-ops",
        "Commit history, diffs and blame",
        "Beginner",
        30,

        "Commit history lists recorded changes. A diff shows what changed between versions. Blame displays which commit last changed individual lines and identifies the author and commit associated with them.",

        "History helps investigate regressions, understand project evolution and attribute changes. Diff and blame are particularly useful during code review and debugging.",

        [
            "Open your repository.",
            "Click the commits link near the file list.",
            "Open a recent commit.",
            "Inspect the files changed section.",
            "Examine added and removed lines in the diff.",
            "Open a file.",
            "Find its History option.",
            "Explore Blame if available.",
            "Compare two commits or versions of a file."
        ],

        "Make three changes to learning-log.md in three commits. Inspect the history, open the second commit and identify the exact lines changed. Use Blame to investigate one line.",

        [
            "You can open commit history.",
            "You can interpret additions and deletions in a diff.",
            "You can trace a line to a commit."
        ],

        "What question does a diff answer? What does blame show? Does blame by itself prove who originally invented an idea?"
    ),

    makeLesson(
        "branch-web",
        "file-ops",
        "Create a branch and edit a file through the GitHub website",
        "Beginner",
        25,

        "A branch is a separate line of development. GitHub allows you to create branches, switch the displayed branch and create changes on a branch without immediately changing the default branch.",

        "Branches help isolate work. A developer can experiment or build a feature without making an incomplete change directly in the main development line.",

        [
            "Open github-mastery-lab.",
            "Find the branch selector above the file list.",
            "Open the branch selector.",
            "Create a branch called experiment/profile-readme.",
            "Confirm that the new branch is selected.",
            "Edit learning-log.md while on that branch.",
            "Commit the change.",
            "Switch back to the default branch.",
            "Notice that the new branch change is not yet in the default branch."
        ],

        "Create an experiment branch, make a harmless README change and verify that the main branch has not received it. Record the names of both branches.",

        [
            "The experiment branch exists.",
            "A commit exists on the experiment branch.",
            "You can switch between branches.",
            "You understand that a branch isolates development."
        ],

        "Why use a branch? What is the default branch? What would happen if every experimental change were made directly on main?"
    ),


    /* ----------------------------------
       STAGE 05 — GIT FUNDAMENTALS
    ---------------------------------- */

    makeLesson(
        "working-tree",
        "git-core",
        "The working directory, staging area and repository",
        "Intermediate",
        30,

        "Git separates your working directory, staging area and committed repository history. The working directory contains your current files. The staging area contains selected changes for the next commit. The repository stores commits.",

        "The staging area lets you choose exactly which changes belong in a commit. Understanding this model helps prevent unrelated changes from being bundled together.",

        [
            "Open your local project in VS Code.",
            "Open the integrated terminal.",
            "Run git status.",
            "Change a harmless text file.",
            "Run git status again.",
            "Run git diff to inspect unstaged changes.",
            "Use git add on that file.",
            "Run git status again and observe the staged section.",
            "Do not commit yet until you can explain the different states."
        ],

        "Modify two separate files. Stage only one of them. Use git status and git diff to explain why one change is staged and the other remains unstaged.",

        [
            "You can identify the working directory.",
            "You can identify staged and unstaged changes.",
            "You can use git status and git diff."
        ],

        "What does staging mean? Why not automatically put every changed file into every commit?",

        "https://git-scm.com/docs",
        "git status\ngit diff\ngit add README.md\ngit status"
    ),

    makeLesson(
        "stage-commit",
        "git-core",
        "Commits and meaningful commit messages",
        "Intermediate",
        25,

        "A commit is a recorded snapshot of the staged project changes, with metadata such as author, message, parent history and an identifier. Commits form the history of a Git repository.",

        "Small, descriptive commits make code review, debugging, rollback and collaboration easier. A commit message should explain the purpose of the change.",

        [
            "Modify a harmless file.",
            "Run git status.",
            "Stage only the file you intend to commit.",
            "Inspect the staged changes.",
            "Create a commit with a meaningful message.",
            "Run git log to inspect history.",
            "Open the same repository on GitHub after pushing a commit.",
            "Compare your local history with the GitHub history."
        ],

        "Create three small commits with clear messages. Avoid vague messages such as update or changes. Explain the purpose of each commit.",

        [
            "You can create a commit.",
            "You can inspect commits with git log.",
            "Your messages describe the actual changes."
        ],

        "What is saved in a commit? Why review changes before committing? What makes a message useful?",

        "https://git-scm.com/docs/git-commit",
        "git add README.md\ngit commit -m \"Improve project overview\"\ngit log --oneline"
    ),

    makeLesson(
        "clone-push-pull",
        "git-core",
        "Clone, remotes, push, pull and fetch",
        "Intermediate",
        30,

        "Clone creates a local copy of a remote repository. A remote is a named reference to another repository. Push transfers local commits to a remote. Fetch retrieves remote information. Pull fetches remote changes and integrates them into the current branch.",

        "Remote synchronization is the mechanism that lets developers collaborate across different computers while keeping a shared project history.",

        [
            "Open your GitHub practice repository.",
            "Find the HTTPS URL under Code.",
            "In PowerShell, change to the parent directory where you want the clone.",
            "Run git clone followed by the repository URL.",
            "Open the cloned directory in VS Code.",
            "Run git remote -v.",
            "Create and commit a small local change.",
            "Push your branch to GitHub.",
            "Make a browser edit on GitHub and then fetch or pull the change locally."
        ],

        "Clone github-mastery-lab to a second local folder. Change README locally, commit and push. Then make a separate change on GitHub.com and bring it back to your local project.",

        [
            "The repository is cloned locally.",
            "You can identify origin as a remote name if configured that way.",
            "You can push your commit.",
            "You can retrieve and integrate a remote change."
        ],

        "What does clone do? How is fetch different from pull? Why can pushing be rejected if the remote has changes you do not have?"
    ),

    makeLesson(
        "branch-merge",
        "git-core",
        "Branches, merging and merge conflicts",
        "Intermediate",
        35,

        "Branches allow independent development. Merging integrates changes from one line of development into another. A merge conflict occurs when Git cannot automatically reconcile overlapping changes.",

        "Teams need branches to work in parallel. Developers must understand merges and conflicts so that independent changes can be integrated safely.",

        [
            "Create a branch named feature/about-section.",
            "Make and commit a change on that branch.",
            "Create a separate change on another branch or the default branch.",
            "Merge the feature branch into your default branch.",
            "Inspect the resulting history.",
            "Create a harmless conflicting edit in two branches of a test repository.",
            "Attempt a merge.",
            "Inspect the conflict markers and resolve the conflict.",
            "Commit the resolution."
        ],

        "Create two branches that edit the same sentence in learning-log.md. Cause a merge conflict intentionally. Resolve it carefully and explain which final content should remain.",

        [
            "You can create branches.",
            "You can merge a branch.",
            "You can identify a merge conflict.",
            "You can resolve a conflict without blindly deleting valid work."
        ],

        "Why does Git sometimes need human input? What does a conflict marker represent? Why should you inspect both sides before resolving?",

        "https://git-scm.com/docs/git-merge",
        "git switch -c feature/about-section\ngit add README.md\ngit commit -m \"Add about section\"\ngit switch main\ngit merge feature/about-section"
    ),


    /* ----------------------------------
       STAGE 06 — PROJECT MANAGEMENT
    ---------------------------------- */

    makeLesson(
        "issues-lifecycle",
        "planning",
        "GitHub Issues: bugs, features and tasks",
        "Intermediate",
        25,

        "An Issue is a discussion and tracking record for a bug, feature request, question or other unit of work. Issues support descriptions, comments, labels, assignees, milestones and references to development work.",

        "Issues keep work visible and searchable. They help teams discuss a problem before, during and after implementation.",

        [
            "Open your practice repository.",
            "Open the Issues tab.",
            "Create an issue titled Improve the project README.",
            "Write a clear description of the problem.",
            "Describe the expected outcome.",
            "Submit the issue.",
            "Add a comment with a proposed solution.",
            "Close the issue after the task is completed."
        ],

        "Create two practice issues: one bug report and one feature request. Give each a title, context, expected result and completion criteria.",

        [
            "Both issues exist.",
            "The titles describe actionable work.",
            "The issue descriptions explain expected outcomes.",
            "You can comment and close an issue."
        ],

        "Why use an issue instead of sending a vague chat message? What makes a bug report reproducible?"
    ),

    makeLesson(
        "issue-quality",
        "planning",
        "Labels, milestones, assignees and issue templates",
        "Intermediate",
        25,

        "Labels categorize issues and pull requests. Assignees indicate responsibility. Milestones group work around a target or release. Issue templates provide a consistent format for new reports and requests.",

        "Structured metadata helps maintainers triage and prioritize work rather than relying on memory or unstructured conversations.",

        [
            "Open the Issues tab.",
            "Open one of your practice issues.",
            "Inspect the labels section.",
            "Create or apply labels such as bug, documentation and enhancement.",
            "Inspect assignee controls.",
            "Create a milestone for your next practice release.",
            "Add an issue to that milestone.",
            "Explore the repository settings for issue templates or forms."
        ],

        "Classify your practice issues with appropriate labels, assign responsibility where appropriate and group related work into a milestone.",

        [
            "You can identify and apply labels.",
            "You understand assignees and milestones.",
            "You know why issue templates improve consistency."
        ],

        "What does a label communicate? How is a milestone different from a project board? When is an issue template useful?"
    ),

    makeLesson(
        "projects",
        "planning",
        "GitHub Projects: boards, tables, fields and views",
        "Intermediate",
        35,

        "GitHub Projects provides structured work planning. It can organize issues and pull requests using fields, views, filters and workflows. Views can present work as tables, boards or roadmaps, depending on configuration.",

        "Issues track individual units of work. Projects organize multiple units of work into a broader workflow. Teams use project views to understand status, priorities and progress.",

        [
            "Open the Projects area from your repository or profile.",
            "Create a new practice project if permitted.",
            "Choose a board or table layout.",
            "Add your practice issues to the project.",
            "Create or inspect a Status field.",
            "Set meaningful status values such as Todo, In Progress and Done.",
            "Add a priority field if useful.",
            "Create another view and inspect its filters.",
            "Move one issue through the workflow."
        ],

        "Create a mini project board for your habit tracker or GitHub mastery tracker. Add at least five real tasks and move them through Todo, In Progress and Done.",

        [
            "The project exists.",
            "It contains issues or work items.",
            "You can change item status.",
            "You can explain the difference between a project and a repository."
        ],

        "Why use a project board? What is an item? Why are custom fields and views useful?",

        "https://docs.github.com/en/issues/planning-and-tracking-with-projects"
    ),


    /* ----------------------------------
       STAGE 07 — PULL REQUESTS
    ---------------------------------- */

    makeLesson(
        "fork-branch",
        "pull-requests",
        "Forks, clones and contribution branches",
        "Intermediate",
        30,

        "A fork is a GitHub-hosted copy of a repository under a different owner. A clone is a local copy of a repository. A branch is a separate development line within a repository.",

        "Forks let contributors propose changes to repositories they do not control. Branches isolate changes. Clones provide a local workspace for editing and testing.",

        [
            "Open a public repository that permits contributions.",
            "Inspect its owner and repository name.",
            "Use Fork to create your own GitHub copy if you have a suitable test repository.",
            "Open your fork.",
            "Clone your fork to your computer.",
            "Add or identify the original repository as the upstream remote.",
            "Create a feature branch.",
            "Make a small and focused change."
        ],

        "Fork a safe practice repository you own or a suitable tutorial repository. Clone your fork, create a branch and make a documentation change.",

        [
            "You can explain fork versus clone.",
            "A fork appears under your account.",
            "A local clone exists.",
            "Your work is isolated on a branch."
        ],

        "Why fork another person's repository? Why is a fork not the same thing as a branch?"
    ),

    makeLesson(
        "pull-request",
        "pull-requests",
        "Create and understand a pull request",
        "Intermediate",
        30,

        "A pull request proposes changes from one branch into another. It displays the proposed changes, discussion, review feedback, commits and automated checks. It is a collaboration and review mechanism, not merely a command to pull code.",

        "Pull requests give developers a place to discuss and evaluate changes before integrating them. They make code review, accountability and collaboration visible.",

        [
            "Open your practice repository on GitHub.",
            "Create a feature branch.",
            "Make and commit a small change.",
            "Push the branch if you worked locally.",
            "Open the Pull requests tab.",
            "Choose New pull request.",
            "Select the correct base and compare branches.",
            "Inspect the changed files.",
            "Write a meaningful title and description.",
            "Create the pull request."
        ],

        "Create a pull request that improves a documentation file. Explain the reason for the change, what files were modified and how you verified it.",

        [
            "The pull request exists.",
            "The base and compare branches are correct.",
            "Its description explains the purpose.",
            "You can inspect the proposed diff."
        ],

        "What does base mean? What does compare mean? Why should a pull request description mention testing?"
    ),

    makeLesson(
        "review",
        "pull-requests",
        "Code review, review comments and requested changes",
        "Intermediate",
        35,

        "Code review is the process of examining proposed changes. Reviewers can comment on specific lines, submit general feedback and approve or request changes, depending on repository rules and permissions.",

        "Review catches mistakes, improves code quality, transfers knowledge and helps maintain shared engineering standards. It should focus on the change and its impact, not personal criticism.",

        [
            "Open your test pull request.",
            "Select Files changed.",
            "Read each changed section.",
            "Add a harmless review comment on a specific line.",
            "Inspect the review options.",
            "Submit a review if your test setup supports it.",
            "Open the Conversation tab.",
            "Inspect how comments and review status appear."
        ],

        "Review a pull request created by you or a practice collaborator. Leave one actionable review comment that identifies a problem and suggests how to improve it.",

        [
            "You can inspect Files changed.",
            "You understand comments versus formal reviews.",
            "You can explain approval and change requests."
        ],

        "Why do reviewers examine a diff? What makes feedback useful? Does a review comment automatically modify the source file?"
    ),

    makeLesson(
        "merge-sync",
        "pull-requests",
        "Merge pull requests and keep branches synchronized",
        "Intermediate",
        30,

        "Merging a pull request integrates its changes into the base branch using an available merge strategy. Teams may use merge commits, squash merging or rebase merging. Forks and feature branches may need synchronization as the upstream project changes.",

        "Understanding merge strategy and synchronization prevents confusion and keeps development history usable.",

        [
            "Open your test pull request.",
            "Review its diff and checks.",
            "Inspect the available merge options.",
            "Understand the difference between merge, squash and rebase.",
            "Merge the practice pull request when the change is safe.",
            "Inspect the resulting default branch.",
            "Delete the merged test branch if appropriate.",
            "Inspect how a fork can be synchronized with its upstream."
        ],

        "Merge a small practice pull request. Record which strategy you used and why. Then explain how you would update a feature branch after the default branch has changed.",

        [
            "The pull request is merged.",
            "The expected change appears in the base branch.",
            "You understand the three common merge strategies."
        ],

        "What does squash merge do? Why should a branch be kept synchronized? What should be checked before merging?"
    ),


    /* ----------------------------------
       STAGE 08 — OPEN SOURCE
    ---------------------------------- */

    makeLesson(
        "find-project",
        "open-source",
        "Find repositories and understand project health",
        "Intermediate",
        25,

        "Public repositories can be discovered through GitHub search, topics, organizations and community recommendations. Project health can be assessed by examining documentation, recent activity, issues, release history and contribution instructions.",

        "Choosing a suitable project is a major part of successful open-source contribution. A project should match your skills, have understandable expectations and welcome responsible contributions.",

        [
            "Search GitHub for projects in a technology you understand.",
            "Explore repository Topics.",
            "Open a candidate repository.",
            "Read its README.",
            "Find CONTRIBUTING.md if available.",
            "Inspect open and closed issues.",
            "Inspect recent pull requests.",
            "Review the license and release history."
        ],

        "Select three repositories. Compare their documentation, maintenance activity, issue quality and contribution instructions. Choose one suitable beginner contribution opportunity.",

        [
            "You have reviewed three projects.",
            "You can identify contribution instructions.",
            "You can explain why a project is suitable or unsuitable."
        ],

        "What is a maintained project? Why inspect its license? Why should you read contribution guidelines before opening a pull request?"
    ),

    makeLesson(
        "contribution-rules",
        "open-source",
        "Contribution guidelines, code of conduct and project norms",
        "Intermediate",
        25,

        "Contribution guidelines explain the expected process for proposing changes. A code of conduct sets expectations for respectful community behavior. Projects may also specify issue formats, testing requirements, branch naming and review rules.",

        "A technically correct change can still be a poor contribution when it ignores the project's workflow or community expectations.",

        [
            "Open the selected project's README.",
            "Find CONTRIBUTING.md or equivalent instructions.",
            "Read the testing and pull request requirements.",
            "Find its code of conduct if provided.",
            "Inspect whether the project wants an issue before implementation.",
            "Read its license and decide whether contributing is appropriate.",
            "Write a short summary of its contribution process."
        ],

        "Create a one-page contribution checklist for the project you selected. Include how to report a bug, prepare a branch, test changes and submit a pull request.",

        [
            "You can identify contributor documentation.",
            "You can explain project-specific contribution expectations.",
            "You have a written contribution checklist."
        ],

        "Why might a maintainer reject an otherwise working change? What is the purpose of a code of conduct?"
    ),

    makeLesson(
        "first-contribution",
        "open-source",
        "Make your first responsible open-source contribution",
        "Intermediate",
        45,

        "An open-source contribution is a change proposed to a project whose code or materials are published under terms that allow the relevant form of contribution. Contributions may include documentation, tests, bug fixes or features.",

        "A real contribution teaches you to work within an existing codebase, follow instructions, explain changes and respond to review rather than working only on isolated personal projects.",

        [
            "Choose a small, clearly scoped issue or documentation improvement.",
            "Check whether the issue is still open and appropriate.",
            "Ask for clarification if the project requests it.",
            "Fork the repository if needed.",
            "Create a focused branch.",
            "Make the smallest useful change.",
            "Run the requested checks.",
            "Write a precise pull request description.",
            "Respond constructively to maintainer feedback."
        ],

        "Submit one small, genuine contribution. Documentation improvements are acceptable when they fix a real problem and follow project rules. Do not submit meaningless edits just to increase contribution numbers.",

        [
            "You followed the project's contribution rules.",
            "You submitted a focused pull request.",
            "You can explain what you changed and how you tested it.",
            "You responded appropriately to any review feedback."
        ],

        "What made the change useful? How did you verify it? What did you learn from a real maintainer review?"
    ),


    /* ----------------------------------
       STAGE 09 — RELEASES
    ---------------------------------- */

    makeLesson(
        "tags-semver",
        "releases",
        "Git tags and semantic versioning",
        "Intermediate",
        25,

        "A Git tag identifies a particular point in repository history. Semantic Versioning commonly represents a release as MAJOR.MINOR.PATCH, with each number communicating a category of change under the project's versioning policy.",

        "Tags make releases identifiable and reproducible. Version numbers help users and developers understand compatibility expectations.",

        [
            "Open a repository that has published versions.",
            "Find its Releases section.",
            "Inspect its tags.",
            "Compare two release versions.",
            "Read the release notes.",
            "Learn what major, minor and patch changes generally communicate.",
            "Create a test tag in your practice repository when ready."
        ],

        "Plan three hypothetical updates to a project: a breaking API change, a backwards-compatible feature and a backwards-compatible bug fix. Assign a suitable semantic version change to each.",

        [
            "You can explain tags.",
            "You can explain major, minor and patch version categories.",
            "You can identify a tagged version."
        ],

        "What does a tag identify? Why should developers avoid changing the meaning of a published version?"
    ),

    makeLesson(
        "publish-release",
        "releases",
        "Create and publish a GitHub release",
        "Intermediate",
        25,

        "A GitHub release packages a selected repository version for users. A release can be associated with a tag and can include a title, description, generated notes and downloadable assets.",

        "A release creates a clear distribution point for a project. Users can see what changed, identify the source version and download associated assets when provided.",

        [
            "Open github-mastery-lab.",
            "Find Releases.",
            "Choose Draft a new release.",
            "Create a new tag for your practice project.",
            "Select the correct target branch.",
            "Write a meaningful release title.",
            "Describe the changes and limitations.",
            "Review generated release notes if available.",
            "Publish only when you are satisfied with the release."
        ],

        "Create a practice release named v0.1.0 for your learning repository. Include a summary of what is included, known limitations and the next planned milestone.",

        [
            "A release appears in your repository.",
            "It is associated with the intended tag.",
            "The release notes explain the contents."
        ],

        "What is the relationship between a tag and release? Why do release notes matter?"
    ),

    makeLesson(
        "changelog",
        "releases",
        "Changelogs and release communication",
        "Intermediate",
        20,

        "A changelog records notable changes between project versions. It may group changes into features, fixes, breaking changes and maintenance updates.",

        "Users need to understand what changed between releases. A useful changelog provides a human-readable summary instead of forcing everyone to inspect every commit.",

        [
            "Open a project with a changelog.",
            "Find CHANGELOG.md if one exists.",
            "Compare its structure with release notes.",
            "Review how versions are grouped.",
            "Create CHANGELOG.md in your practice repository.",
            "Document your v0.1.0 changes.",
            "Link the changelog to the release if useful."
        ],

        "Write a changelog entry for your practice repository. Include one addition, one fix if applicable and known limitations. Keep statements factual.",

        [
            "The changelog is readable.",
            "It identifies the relevant version.",
            "You understand changelog versus release notes."
        ],

        "Who benefits from a changelog? Why is a list of unexplained commit hashes not an adequate user-facing changelog?"
    ),


    /* ----------------------------------
       STAGE 10 — GITHUB PAGES
    ---------------------------------- */

    makeLesson(
        "pages-first-site",
        "pages",
        "Deploy your first website using GitHub Pages",
        "Intermediate",
        35,

        "GitHub Pages can publish static websites from a repository using supported publishing configurations. A static site can contain HTML, CSS, JavaScript and other supported assets.",

        "Pages lets you publish project documentation, portfolios and simple frontend applications directly from GitHub. It is not a general backend application hosting environment.",

        [
            "Use a test repository containing a valid index.html.",
            "Open repository Settings.",
            "Find the Pages section.",
            "Review available build and deployment source choices.",
            "Select an appropriate branch or publishing workflow.",
            "Save the configuration.",
            "Wait for the deployment workflow to complete.",
            "Open the published URL.",
            "Inspect the Pages deployment status if it fails."
        ],

        "Publish a simple personal project website from a practice repository. Include a heading, project description and navigation. Confirm that the public website loads.",

        [
            "Pages is configured.",
            "A successful deployment is reported.",
            "The website is reachable.",
            "You can explain why a static frontend is suitable for Pages."
        ],

        "What does Pages publish? Why won't a static Pages site automatically run your Python backend?",

        "https://docs.github.com/en/pages"
    ),

    makeLesson(
        "pages-customize",
        "pages",
        "Pages settings, custom domains and deployment troubleshooting",
        "Intermediate",
        30,

        "GitHub Pages supports configuration options such as publishing sources and custom domains. Successful deployment depends on correct files, paths, repository settings and deployment status.",

        "Knowing how to investigate publishing problems is more important than just switching Pages on. A professional developer must understand where a deployment can fail.",

        [
            "Open the Pages settings for your test repository.",
            "Review the published site URL.",
            "Inspect the deployment history.",
            "Check whether the expected branch or workflow is configured.",
            "Investigate common 404 causes such as missing index.html or incorrect paths.",
            "Read the custom domain documentation.",
            "Do not change DNS for a domain you do not control."
        ],

        "Introduce a harmless broken file path in a test site, observe the failure and correct it. Write down the symptom, diagnosis and fix. Restore the correct version afterward.",

        [
            "You can identify the published URL.",
            "You know where to inspect deployment status.",
            "You can investigate a basic missing-file or path problem."
        ],

        "What could cause a 404? Why is custom-domain configuration more than a text field?"
    ),


    /* ----------------------------------
       STAGE 11 — GITHUB ACTIONS
    ---------------------------------- */

    makeLesson(
        "actions-mental-model",
        "actions",
        "GitHub Actions: events, workflows, jobs and runners",
        "Advanced",
        30,

        "GitHub Actions is an automation platform. Events trigger workflows. Workflows contain jobs. Jobs execute on runners and contain steps. Steps can use actions or run commands.",

        "Automation reduces repetitive manual work and provides consistent checks. Teams use it for tests, linting, builds, deployment and many other tasks.",

        [
            "Open your practice repository.",
            "Find the Actions tab.",
            "Inspect the workflow templates.",
            "Open a repository that uses workflows if available.",
            "Look for the .github/workflows directory.",
            "Inspect an existing YAML workflow.",
            "Identify the trigger, jobs, runner and steps.",
            "Draw the workflow structure."
        ],

        "Explain the path from a code push to a workflow run. Draw the relationship between event, workflow, job, runner and step.",

        [
            "You can locate GitHub Actions.",
            "You can identify workflow components.",
            "You can explain why automation is useful."
        ],

        "What triggers a workflow? What is a runner? How is a job different from a step?",

        "https://docs.github.com/en/actions"
    ),

    makeLesson(
        "actions-workflow",
        "actions",
        "Build your first GitHub Actions workflow",
        "Advanced",
        35,

        "A workflow is a YAML file stored in .github/workflows. It defines events, jobs, runners and steps. GitHub reads the workflow file and runs it when its configured events occur.",

        "This turns a repository event into a repeatable automated process. It is the starting point for continuous integration and deployment.",

        [
            "Open your practice repository.",
            "Choose Add file > Create new file.",
            "Enter .github/workflows/hello.yml as the filename.",
            "Create a workflow named Basic workflow.",
            "Configure it for push and pull_request events.",
            "Define one job using a supported hosted runner.",
            "Add a simple step that prints Hello from GitHub Actions.",
            "Commit the workflow file.",
            "Open Actions and inspect the run."
        ],

        "Create and execute a harmless workflow in your practice repository. After a successful run, edit the workflow to print another message and observe the next run.",

        [
            "The workflow file exists in the required directory.",
            "A run appears in the Actions tab.",
            "The run completes successfully.",
            "You can open the logs."
        ],

        "Why does the file have a YAML extension? What event triggered the run? Where do you find the output?",

        "https://docs.github.com/en/actions/writing-workflows"
    ),

    makeLesson(
        "actions-secrets",
        "actions",
        "Secrets, variables and workflow permissions",
        "Advanced",
        30,

        "GitHub Actions supports secrets and variables for workflow configuration. Workflow permissions control the access a workflow token receives. Sensitive values should not be written into workflow files or printed into logs.",

        "Automation may need access to external services or repository resources. Excessive permissions and leaked credentials can turn an otherwise helpful workflow into a security risk.",

        [
            "Open your practice repository Settings.",
            "Find Actions secrets and variables.",
            "Explore repository secrets and variables.",
            "Read the documentation about the built-in GITHUB_TOKEN.",
            "Inspect workflow permissions.",
            "Review how minimal permissions are declared in workflow YAML.",
            "Never paste a real password or API key into the repository.",
            "Create only a harmless test variable if needed."
        ],

        "Write a hypothetical workflow configuration that requires a repository permission. Document the minimum permission it needs. Do not create or expose real secrets for this exercise.",

        [
            "You can find the Actions secrets area.",
            "You understand the purpose of secrets versus variables.",
            "You can explain least-privilege permissions."
        ],

        "Why should secrets be kept outside source code? What damage can an overprivileged workflow cause?"
    ),

    makeLesson(
        "actions-debug",
        "actions",
        "Artifacts, matrices, logs and debugging failed workflows",
        "Advanced",
        30,

        "Workflow logs show execution details. Artifacts preserve generated files from a workflow run. Caching can reduce repeated work. A matrix strategy runs a job across multiple combinations of configuration values.",

        "Useful workflows must be diagnosable. Understanding logs, failed steps and generated artifacts lets you distinguish application failures from automation configuration problems.",

        [
            "Open a successful workflow run.",
            "Expand each job and step.",
            "Inspect the execution logs.",
            "Read how artifacts are uploaded and downloaded.",
            "Read the matrix strategy documentation.",
            "Modify a harmless test workflow so one step exits with a failure code.",
            "Run it and inspect the failure.",
            "Correct the step and run it again."
        ],

        "Make one deliberate workflow failure. Record the failed step, the relevant log line, the cause and the fix. Then demonstrate a successful run.",

        [
            "You can inspect job logs.",
            "You can locate a failed step.",
            "You understand the general purposes of artifacts and matrices.",
            "You corrected a deliberate workflow failure."
        ],

        "What is an artifact? What does a matrix change? Why should debugging start with the first failing step?"
    ),


    /* ----------------------------------
       STAGE 12 — SECURITY
    ---------------------------------- */

    makeLesson(
        "account-security",
        "security",
        "Secure your GitHub account",
        "Advanced",
        25,

        "Account security includes strong unique credentials, two-factor authentication, passkeys or security keys where supported, recovery options and careful management of authorized applications.",

        "Your GitHub account can control access to code, automation, releases and project permissions. Account compromise can expose or alter important software.",

        [
            "Open GitHub account Settings.",
            "Find Password and authentication.",
            "Review two-factor authentication options.",
            "Read about passkeys and security keys.",
            "Review recovery codes and recovery options.",
            "Inspect authorized applications.",
            "Review active sessions if available.",
            "Never share authentication codes or recovery codes."
        ],

        "Review your account security checklist. Enable an appropriate second factor after securely preparing recovery options. Store recovery information outside your repository.",

        [
            "You can locate the security settings.",
            "You understand two-factor authentication.",
            "You have considered recovery before changing authentication.",
            "You can identify unexpected account access."
        ],

        "Why is a password alone insufficient protection? Why are recovery codes sensitive?"
    ),

    makeLesson(
        "repo-rules",
        "security",
        "Protected branches and repository rulesets",
        "Advanced",
        30,

        "Rulesets and branch protection controls can restrict operations on important branches. Depending on configuration, they can require pull requests, status checks, reviews or other conditions before changes are integrated.",

        "Critical code should not depend entirely on an individual remembering good practice. Repository rules can enforce important collaboration and quality requirements.",

        [
            "Open your practice repository Settings.",
            "Find Branches or Rules where available.",
            "Inspect existing rulesets.",
            "Read which branches a rule targets.",
            "Study required pull request reviews.",
            "Study required status checks.",
            "Review restrictions on force pushes and deletion.",
            "Use a separate practice repository for any configuration experiment."
        ],

        "Design a rule for a hypothetical production repository. Require changes to go through pull requests and include suitable checks. Document the trade-offs and permissions involved.",

        [
            "You can locate branch rules.",
            "You understand the purpose of required reviews.",
            "You can explain why critical branches should be protected."
        ],

        "Why protect main? What does a required status check enforce? Why might an overly strict rule block legitimate work?"
    ),

    makeLesson(
        "dependency-security",
        "security",
        "Dependabot and dependency security",
        "Advanced",
        25,

        "Dependencies are external packages a project uses. Dependabot can help identify vulnerable dependencies and propose dependency updates. GitHub provides related dependency graph and security features subject to availability and repository configuration.",

        "A project can be vulnerable even when its own source code was written carefully. External packages must be maintained and updated responsibly.",

        [
            "Open a repository that contains a supported dependency manifest.",
            "Find its Security tab.",
            "Inspect the dependency graph or dependency insights where available.",
            "Read the Dependabot alerts documentation.",
            "Understand security update pull requests.",
            "Review the proposed version change before accepting any update.",
            "Inspect whether tests are needed after dependency updates."
        ],

        "Select one project using dependencies. Identify its dependency manifest, explain how an outdated dependency could cause risk and describe how you would review a Dependabot update.",

        [
            "You can explain what a dependency is.",
            "You understand the general role of Dependabot.",
            "You know to review dependency updates and test compatibility."
        ],

        "What is a vulnerable dependency? Why should a security update still be tested?"
    ),

    makeLesson(
        "secrets-codeowners",
        "security",
        "Secret scanning, code scanning and CODEOWNERS",
        "Advanced",
        30,

        "Secret scanning can help detect exposed credentials. Code scanning can identify potential vulnerabilities in source code. CODEOWNERS defines people or teams responsible for reviewing changes in specified paths.",

        "Repository security is a combination of prevention, detection and accountability. Secret and code scanning can find risks, while code ownership helps route review to the right people.",

        [
            "Open the Security tab of a suitable repository.",
            "Review the available code security features.",
            "Read the documentation for secret scanning.",
            "Read the documentation for code scanning.",
            "Create a test CODEOWNERS file in a practice repository.",
            "Study how path patterns map to owners.",
            "Understand how code ownership can interact with review rules.",
            "Never create a real credential exposure to test scanning."
        ],

        "Write a practice CODEOWNERS file assigning a documentation folder and a source folder to suitable example owners. Explain who should review each area.",

        [
            "You can explain secret scanning and code scanning.",
            "You understand the purpose of CODEOWNERS.",
            "You have created a harmless CODEOWNERS example."
        ],

        "What is the difference between scanning for exposed secrets and analyzing code? Why does ownership matter?",

        "https://docs.github.com/en/code-security"
    ),


    /* ----------------------------------
       STAGE 13 — ADVANCED
    ---------------------------------- */

    makeLesson(
        "org-teams",
        "advanced",
        "Organizations, teams and access management",
        "Advanced",
        30,

        "A GitHub organization provides a shared account structure for a group. Organizations can contain repositories, teams, members and permissions. Access can be managed through organizational roles, teams and repository-level settings.",

        "Professional software projects often involve several developers. Organizations make ownership, permissions, project administration and collaboration more manageable.",

        [
            "Explore an organization you can view.",
            "Open its People section if available.",
            "Inspect the team structure.",
            "Open one repository owned by the organization.",
            "Find its access or collaborators area.",
            "Study organization roles and repository roles.",
            "Read about least-privilege access.",
            "Do not create an organization or invite users unless you have a genuine need."
        ],

        "Design a fictional organization with three teams: frontend, backend and reviewers. Decide what each team should be able to do and document the minimum repository access required.",

        [
            "You can explain organization versus personal account.",
            "You understand team-based permission assignment.",
            "You can explain least privilege."
        ],

        "Why should permissions be based on responsibilities? What could happen if every team member has admin access?"
    ),

    makeLesson(
        "cli-api-webhooks",
        "advanced",
        "GitHub CLI, REST API, GraphQL and webhooks",
        "Advanced",
        35,

        "GitHub CLI provides command-line access to GitHub operations. The REST API provides HTTP endpoints for programmatic interaction. GraphQL offers a query language for retrieving structured data. Webhooks send event notifications to external systems.",

        "These interfaces let developers automate GitHub operations and integrate repositories with external services. They are important when manual browser actions are insufficient.",

        [
            "Read what the GitHub CLI does.",
            "Inspect its commands for repositories, issues and pull requests.",
            "Read the REST API overview.",
            "Inspect one read-only public API endpoint in the documentation.",
            "Explore GraphQL Explorer documentation.",
            "Read how webhooks deliver events.",
            "Compare polling an API with receiving a webhook.",
            "Do not publish access tokens in scripts or repositories."
        ],

        "Design an automation that detects a new GitHub issue and sends a notification to another system. Identify which interface or event mechanism would fit and why.",

        [
            "You can explain the role of the CLI.",
            "You understand API requests and responses at a high level.",
            "You can explain a webhook event."
        ],

        "When should you use the GitHub UI, CLI, API or webhook? What is the security concern with an access token?"
    ),

    makeLesson(
        "codespaces-discussions",
        "advanced",
        "Codespaces, Discussions and GitHub ecosystem tools",
        "Advanced",
        30,

        "Codespaces provides cloud-hosted development environments associated with repositories. Discussions provides community conversations separate from issue tracking. GitHub also integrates additional tools for documentation, collaboration and development.",

        "Mastery means choosing the right tool for the job. Some work belongs in issue tracking, some in community discussions and some in a development environment.",

        [
            "Open a repository and inspect Codespaces options where available.",
            "Read how a Codespace creates a development environment.",
            "Understand development environment configuration.",
            "Open a repository with Discussions enabled.",
            "Compare an issue with a discussion.",
            "Explore repository Wiki if it is enabled.",
            "Document which collaboration tool fits different situations."
        ],

        "For five hypothetical situations, choose Issues, Discussions, Projects, Wiki or Codespaces. Explain the choice in your notebook.",

        [
            "You can explain the purpose of Codespaces.",
            "You understand Issues versus Discussions.",
            "You can select an appropriate collaboration tool."
        ],

        "Why does a question for the wider community not always need to become a bug issue? When is a cloud development environment useful?"
    ),


    /* ----------------------------------
       STAGE 14 — CAPSTONE
    ---------------------------------- */

    makeLesson(
        "capstone-plan",
        "capstone",
        "Plan a professional GitHub repository",
        "Mastery",
        35,

        "A professional repository has a clear purpose, sensible structure, documentation, issue tracking, contribution expectations, release strategy and maintenance approach.",

        "The capstone tests whether you can bring together the different parts of GitHub rather than understanding each feature in isolation.",

        [
            "Choose a real project, such as your SPARK dating app.",
            "Write a one-paragraph project purpose.",
            "Define the repository owner and appropriate visibility.",
            "Plan the README structure.",
            "Identify important features.",
            "Create issues for planned work.",
            "Choose a sensible branch and pull request workflow.",
            "Plan how you will test changes.",
            "Define a release target.",
            "Identify security and maintenance needs."
        ],

        "Write a project plan for one of your applications. Include the repository structure, README, issues, milestones, branches, pull requests, testing and release strategy.",

        [
            "A written project plan exists.",
            "The work is divided into actionable issues.",
            "You can justify repository visibility and workflow decisions."
        ],

        "Why did you choose this structure? How will work be tracked? How will you prevent unreviewed changes from entering a stable branch?"
    ),

    makeLesson(
        "capstone-build",
        "capstone",
        "Manage the project with a complete GitHub workflow",
        "Mastery",
        60,

        "Project management with GitHub involves connected workflows: Issues describe work, branches isolate changes, commits record progress, pull requests enable review, Actions run automated checks and Projects provide planning visibility.",

        "A developer demonstrates mastery by using these pieces together to maintain understandable and reliable software over time.",

        [
            "Create or configure the real project repository.",
            "Write and maintain its README.",
            "Create a project board.",
            "Break work into meaningful issues.",
            "Create a feature branch for one issue.",
            "Make and commit an actual improvement.",
            "Open a pull request.",
            "Review the changes and run checks.",
            "Merge only after appropriate verification.",
            "Update the issue and project status."
        ],

        "Complete one full feature workflow in your application repository. The feature must be real, the issue must explain the work, and the pull request must document and show the change.",

        [
            "The issue exists.",
            "The feature branch exists.",
            "The pull request is linked to the work where appropriate.",
            "The change was reviewed and verified.",
            "The project board reflects the completed work."
        ],

        "Explain the full flow from an identified need to a merged change. Why is each part separate?"
    ),

    makeLesson(
        "capstone-release",
        "capstone",
        "Publish, document and demonstrate your mastery",
        "Mastery",
        45,

        "A well-maintained project has understandable documentation, tagged releases, visible change history, suitable automated checks and a clear way for users to discover and evaluate it.",

        "The final proof of mastery is the ability to maintain and explain a software project, not simply the number of GitHub features you have clicked.",

        [
            "Review your project's README.",
            "Inspect the repository structure.",
            "Review merged pull requests.",
            "Inspect open and closed issues.",
            "Check its branch and security configuration.",
            "Confirm relevant automated workflows are understandable.",
            "Prepare a changelog.",
            "Create a release for a meaningful project version.",
            "Publish documentation or a project site if suitable.",
            "Review your GitHub profile and pin this project if appropriate."
        ],

        "Publish a documented release of your project. Prepare a short demonstration showing the repository, an issue, a pull request, a commit history, automated checks and the published result.",

        [
            "A release exists.",
            "Documentation accurately describes the project.",
            "The development history is understandable.",
            "You can demonstrate the major GitHub workflows.",
            "You can explain the choices you made."
        ],

        "Which GitHub skills can you now demonstrate independently? Which parts still need more practice? What would you improve before inviting outside contributors?"
    )

];


/* ======================================================
   PART 4 — PRACTICAL MISSIONS
====================================================== */

const missions = [

    {
        id: "mission-repository",
        title: "Mission 01 — Create your GitHub laboratory",
        goal: "Create and configure a dedicated repository using the GitHub website.",
        duration: "30–45 minutes",
        steps: [
            "Open GitHub.com and sign in.",
            "Create a private repository named github-mastery-lab.",
            "Add its first README.",
            "Write a project description and learning objectives.",
            "Create learning-log.md using the browser.",
            "Open Settings and explore repository configuration."
        ]
    },

    {
        id: "mission-file-history",
        title: "Mission 02 — Become fluent in repository files",
        goal: "Make several changes and inspect the resulting history.",
        duration: "30–45 minutes",
        steps: [
            "Edit README.md on the GitHub website.",
            "Create a separate documentation file.",
            "Make two meaningful commits.",
            "Open the commit history.",
            "Inspect a commit diff.",
            "Use file history or Blame to investigate a line."
        ]
    },

    {
        id: "mission-planning",
        title: "Mission 03 — Run a project using Issues and Projects",
        goal: "Organize actual development work.",
        duration: "45–60 minutes",
        steps: [
            "Create three useful project issues.",
            "Add bug, enhancement or documentation labels.",
            "Create a milestone.",
            "Create a GitHub Project.",
            "Add your issues to the Project.",
            "Move work through Todo, In Progress and Done."
        ]
    },

    {
        id: "mission-pull",
        title: "Mission 04 — Complete a professional pull request",
        goal: "Execute a change through review and merge.",
        duration: "45–60 minutes",
        steps: [
            "Create a feature branch.",
            "Make a focused project change.",
            "Commit the change with a clear message.",
            "Open a pull request.",
            "Inspect the Files changed tab.",
            "Add and respond to a review comment.",
            "Merge the pull request and verify the result."
        ]
    },

    {
        id: "mission-release",
        title: "Mission 05 — Publish a release and a website",
        goal: "Demonstrate versioning and static deployment.",
        duration: "45–60 minutes",
        steps: [
            "Create or update CHANGELOG.md.",
            "Select an appropriate version number.",
            "Create a release on GitHub.",
            "Review the release notes.",
            "Prepare a simple static project website.",
            "Configure GitHub Pages.",
            "Open and verify the published website."
        ]
    },

    {
        id: "mission-automation",
        title: "Mission 06 — Automate and secure your repository",
        goal: "Explore automated checks and security controls.",
        duration: "60 minutes",
        steps: [
            "Create a workflow under .github/workflows.",
            "Configure a harmless workflow triggered by a push.",
            "Open the Actions tab and inspect a run.",
            "Cause and diagnose one controlled workflow failure.",
            "Explore branch protection or rulesets.",
            "Review account and repository security settings.",
            "Document how the project will prevent credential exposure."
        ]
    }

];


/* ======================================================
   PART 5 — GITHUB DICTIONARY
====================================================== */

const glossary = [

    {
        term: "Git",
        definition: "A distributed version control system that records file changes and repository history."
    },

    {
        term: "GitHub",
        definition: "A platform for hosting Git repositories and collaborating through issues, pull requests, projects and automation."
    },

    {
        term: "Repository",
        definition: "A project workspace containing files and version history."
    },

    {
        term: "Commit",
        definition: "A recorded snapshot of staged changes in Git history."
    },

    {
        term: "Branch",
        definition: "An independent development line within a Git repository."
    },

    {
        term: "Remote",
        definition: "A named reference to another repository, usually hosted on a service such as GitHub."
    },

    {
        term: "Clone",
        definition: "Create a local copy of a remote repository and its history."
    },

    {
        term: "Push",
        definition: "Send local commits to a remote repository."
    },

    {
        term: "Pull",
        definition: "Fetch changes from a remote and integrate them into the current branch."
    },

    {
        term: "Fetch",
        definition: "Retrieve remote repository information without automatically integrating the changes into your current branch."
    },

    {
        term: "Fork",
        definition: "A GitHub-hosted copy of a repository under another account or organization."
    },

    {
        term: "Pull Request",
        definition: "A proposal to integrate changes from one branch into another, usually with discussion and review."
    },

    {
        term: "Issue",
        definition: "A GitHub record for tracking bugs, feature requests, questions or other work."
    },

    {
        term: "Diff",
        definition: "A representation of differences between versions of files."
    },

    {
        term: "Merge",
        definition: "An operation that integrates changes from different lines of development."
    },

    {
        term: "Merge Conflict",
        definition: "A situation where Git cannot automatically reconcile competing changes."
    },

    {
        term: "Main",
        definition: "A common name for a repository's default development branch; the actual default name can vary."
    },

    {
        term: "Origin",
        definition: "The conventional default name often assigned to the remote from which a repository was cloned."
    },

    {
        term: "README",
        definition: "A project document that explains its purpose, setup, usage and other important information."
    },

    {
        term: ".gitignore",
        definition: "A file containing patterns for paths Git should ignore when identifying untracked files."
    },

    {
        term: "License",
        definition: "Terms defining permitted use, modification and distribution of a project."
    },

    {
        term: "GitHub Actions",
        definition: "GitHub's platform for automating workflows triggered by repository or platform events."
    },

    {
        term: "Workflow",
        definition: "An automated process defined in a YAML file and executed by GitHub Actions."
    },

    {
        term: "Runner",
        definition: "The environment or machine that executes an Actions job."
    },

    {
        term: "Artifact",
        definition: "A file or collection of files preserved or shared from a workflow run."
    },

    {
        term: "Release",
        definition: "A GitHub publication associated with a repository version, typically including release notes and assets."
    },

    {
        term: "Tag",
        definition: "A Git reference that identifies a particular point in repository history."
    },

    {
        term: "Changelog",
        definition: "A document recording notable changes between project versions."
    },

    {
        term: "CODEOWNERS",
        definition: "A file that associates repository paths with people or teams responsible for reviewing changes."
    },

    {
        term: "Webhook",
        definition: "An event-driven HTTP notification sent to an external URL when a configured event occurs."
    },

    {
        term: "API",
        definition: "An interface through which software can request or modify information provided by another system."
    },

    {
        term: "Pull Request Review",
        definition: "A formal assessment of proposed code changes, often resulting in approval or requested changes."
    },

    {
        term: "GitHub Pages",
        definition: "A GitHub service for publishing static websites from repositories."
    },

    {
        term: "Milestone",
        definition: "A way to group issues and pull requests around a target or release."
    },

    {
        term: "GitHub Project",
        definition: "A work-management tool for planning, tracking and organizing issues and pull requests."
    },

    {
        term: "Two-Factor Authentication",
        definition: "An account security method that requires another factor beyond a password."
    },

    {
        term: "Dependabot",
        definition: "GitHub tooling that helps identify dependency updates and known vulnerabilities."
    },

    {
        term: "Codespaces",
        definition: "Cloud-hosted development environments associated with repositories."
    },

    {
        term: "Semantic Versioning",
        definition: "A versioning convention commonly represented as MAJOR.MINOR.PATCH."
    },

    {
        term: "Working Tree",
        definition: "The files and directories in your current checkout where you make changes."
    },

    {
        term: "Staging Area",
        definition: "The intermediate area where selected changes are prepared for the next Git commit."
    }

];


/* ======================================================
   PART 6 — APPLICATION STATE
====================================================== */

const STORAGE_KEY = "github-mastery-progress-v1";


function createDefaultState() {

    return {

        view: "dashboard",

        lessonId: "git-vs-github",

        expandedStage: "foundations",

        openMission: "mission-repository",

        search: "",

        glossarySearch: "",

        progress: {},

        missionChecks: {},

        journal: ""

    };

}


function loadState() {

    const defaults = createDefaultState();

    try {

        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
            return defaults;
        }

        const saved = JSON.parse(raw);

        if (!saved || typeof saved !== "object") {
            return defaults;
        }

        return {

            ...defaults,
            ...saved,

            progress:
                saved.progress &&
                typeof saved.progress === "object"
                    ? saved.progress
                    : {},

            missionChecks:
                saved.missionChecks &&
                typeof saved.missionChecks === "object"
                    ? saved.missionChecks
                    : {}

        };

    } catch (error) {

        console.error("Progress loading failed:", error);

        return defaults;

    }

}


let state = loadState();


/* ======================================================
   PART 7 — SAVE PROGRESS
====================================================== */

function saveState() {

    const indicator = document.getElementById("saveIndicator");

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

        if (indicator) {
            indicator.textContent = "● Saved locally";
        }

    } catch (error) {

        console.error("Progress saving failed:", error);

        if (indicator) {
            indicator.textContent = "● Save error";
        }

        notify("Could not save progress. Export a backup.");

    }

}


/* ======================================================
   PART 8 — COMMON HELPERS
====================================================== */

function escapeHTML(value) {

    return String(value ?? "").replace(
        /[&<>"']/g,
        character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]
    );

}


function getLessonProgress(id) {

    if (!state.progress[id] ||
        typeof state.progress[id] !== "object") {

        state.progress[id] = {
            done: false,
            explain: false,
            notes: ""
        };

    }

    return state.progress[id];

}


function isMastered(id) {

    const progress = getLessonProgress(id);

    return progress.done === true &&
           progress.explain === true;

}


function getLesson(id) {

    return lessons.find(lesson => lesson.id === id);

}


function getStage(id) {

    return stages.find(stage => stage.id === id);

}


function getStageLessons(stageId) {

    return lessons.filter(
        lesson => lesson.stage === stageId
    );

}


function getStageStats(stageId) {

    const list = getStageLessons(stageId);

    const mastered = list.filter(
        lesson => isMastered(lesson.id)
    ).length;

    const experiments = list.filter(
        lesson => getLessonProgress(lesson.id).done
    ).length;

    return {
        total: list.length,
        mastered,
        experiments,
        percentage: list.length
            ? Math.round(mastered / list.length * 100)
            : 0
    };

}


function getOverallStats() {

    const total = lessons.length;

    const mastered = lessons.filter(
        lesson => isMastered(lesson.id)
    ).length;

    const experiments = lessons.filter(
        lesson => getLessonProgress(lesson.id).done
    ).length;

    return {
        total,
        mastered,
        experiments,
        percentage: Math.round(mastered / total * 100)
    };

}


function getNextLesson() {

    return lessons.find(
        lesson => !isMastered(lesson.id)
    ) || null;

}


function getLessonIndex(id) {

    return lessons.findIndex(
        lesson => lesson.id === id
    );

}


function formatText(value) {

    return escapeHTML(value).replace(/\n/g, "<br>");

}


let toastTimer = null;

function notify(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


/* ======================================================
   PART 9 — SIDEBAR PROGRESS
====================================================== */

function renderSidebarProgress() {

    const stats = getOverallStats();

    document.getElementById("sidePercentage").textContent =
        `${stats.percentage}%`;

    document.getElementById("sideProgressFill").style.width =
        `${stats.percentage}%`;

    document.getElementById("sideProgressText").textContent =
        `${stats.mastered} of ${stats.total} lessons mastered`;

}


/* ======================================================
   PART 10 — DASHBOARD
====================================================== */

function renderDashboard() {

    const stats = getOverallStats();

    const next = getNextLesson();

    const currentStage = next
        ? getStage(next.stage)
        : stages[stages.length - 1];


    return `

        <div class="page-heading">

            <div class="eyebrow">YOUR LEARNING ENVIRONMENT</div>

        </div>


        <section class="welcome-panel">

            <div>

                <div class="eyebrow" style="color:#cbc2ff">
                    GITHUB MASTERY PROGRAM
                </div>

                <h1>Build real GitHub fluency.</h1>

                <p>
                    Learn the platform by operating it.
                    Understand the engineering concepts behind it.
                    Complete experiments, record evidence and prove
                    your knowledge through practical work.
                </p>

            </div>

            <button
                class="primary-button"
                data-action="continue"
            >
                Continue learning →
            </button>

        </section>


        <section class="stats-grid">

            <div class="stat-card">
                <div class="stat-label">Overall mastery</div>
                <div class="stat-value">${stats.percentage}%</div>
                <div class="stat-detail">Experiment + explanation</div>
            </div>

            <div class="stat-card">
                <div class="stat-label">Lessons mastered</div>
                <div class="stat-value">${stats.mastered}</div>
                <div class="stat-detail">Out of ${stats.total} lessons</div>
            </div>

            <div class="stat-card">
                <div class="stat-label">Experiments completed</div>
                <div class="stat-value">${stats.experiments}</div>
                <div class="stat-detail">Practical work marked complete</div>
            </div>

            <div class="stat-card">
                <div class="stat-label">Learning stages</div>
                <div class="stat-value">${stages.length}</div>
                <div class="stat-detail">Beginner to mastery</div>
            </div>

        </section>


        <section class="dashboard-grid">


            <div>

                <div class="section-title">
                    Your next learning step
                </div>

                ${
                    next
                    ? `

                        <div class="continue-card">

                            <span class="badge badge-purple">
                                ${escapeHTML(currentStage.number)}
                                · ${escapeHTML(currentStage.title)}
                            </span>

                            <h3>${escapeHTML(next.title)}</h3>

                            <p>${escapeHTML(next.what)}</p>

                            <div class="muted small-text">
                                ${escapeHTML(next.minutes)} minutes
                                · ${escapeHTML(next.level)}
                            </div>

                            <div style="margin-top:17px">

                                <button
                                    class="primary-button"
                                    data-lesson="${escapeHTML(next.id)}"
                                >
                                    Open next lesson →
                                </button>

                            </div>

                        </div>

                    `
                    : `

                        <div class="continue-card">

                            <span class="badge badge-green">
                                All lessons mastered
                            </span>

                            <h3>Now demonstrate your skills.</h3>

                            <p>
                                Complete the practical missions and
                                capstone demonstrations to validate
                                your skills in a real project.
                            </p>

                            <button
                                class="primary-button"
                                data-view="lab"
                            >
                                Open Practice Lab →
                            </button>

                        </div>

                    `
                }


                <div class="divider"></div>


                <div class="section-title">
                    Your learning stages
                </div>


                <div class="stage-list">

                    ${stages.map(stage => {

                        const progress = getStageStats(stage.id);

                        return `

                            <button
                                class="stage-summary"
                                data-action="open-stage"
                                data-id="${escapeHTML(stage.id)}"
                            >

                                <span class="stage-number">
                                    ${escapeHTML(stage.number)}
                                </span>

                                <span class="stage-summary-info">

                                    <strong>
                                        ${escapeHTML(stage.title)}
                                    </strong>

                                    <small>
                                        ${progress.mastered}/${progress.total}
                                        lessons mastered
                                    </small>

                                </span>

                                <span class="stage-summary-percent">
                                    ${progress.percentage}%
                                </span>

                            </button>

                        `;

                    }).join("")}

                </div>

            </div>


            <div>

                <div class="section-title">
                    How to use this tracker
                </div>

                <div class="card">

                    <div class="lesson-step">
                        <span class="step-number">1</span>
                        <p>
                            <strong>Understand.</strong>
                            Read what the feature is and why it exists.
                        </p>
                    </div>

                    <div class="lesson-step">
                        <span class="step-number">2</span>
                        <p>
                            <strong>Navigate.</strong>
                            Open GitHub and find the actual interface.
                        </p>
                    </div>

                    <div class="lesson-step">
                        <span class="step-number">3</span>
                        <p>
                            <strong>Experiment.</strong>
                            Perform the task in your practice repository.
                        </p>
                    </div>

                    <div class="lesson-step">
                        <span class="step-number">4</span>
                        <p>
                            <strong>Verify.</strong>
                            Check the result, history and expected evidence.
                        </p>
                    </div>

                    <div class="lesson-step">
                        <span class="step-number">5</span>
                        <p>
                            <strong>Explain.</strong>
                            Describe what you did and why it works.
                        </p>
                    </div>

                    <div class="divider"></div>

                    <span class="badge badge-green">
                        Your mastery standard
                    </span>

                    <p class="muted small-text"
                       style="line-height:1.8;margin-top:12px">

                        A lesson is mastered only when you confirm
                        both the experiment and your understanding.
                        Be honest with these checks.

                    </p>

                </div>


                <div class="card" style="margin-top:14px">

                    <div class="section-title">
                        Your practice repository
                    </div>

                    <p class="muted small-text"
                       style="line-height:1.8;margin-bottom:15px">

                        Use one safe repository for experiments.
                        Avoid practicing destructive actions on
                        important personal or production projects.

                    </p>

                    <a class="primary-button"
                       href="https://github.com/new"
                       target="_blank"
                       rel="noopener noreferrer">

                        Create practice repository ↗

                    </a>

                </div>

            </div>


        </section>

    `;

}


/* ======================================================
   PART 11 — LEARNING PATH
====================================================== */

function renderPath() {

    const query = state.search.toLowerCase().trim();

    return `

        <div class="page-heading">

            <div class="eyebrow">44 PRACTICAL LESSONS</div>

            <h1>Learning Path</h1>

            <p>
                Follow the curriculum from GitHub foundations
                through repositories, collaboration, automation,
                security and professional workflows.
            </p>

        </div>


        ${stages.map(stage => {

            const list = getStageLessons(stage.id);

            const stats = getStageStats(stage.id);

            const filtered = list.filter(lesson => {

                const content = [
                    lesson.title,
                    lesson.what,
                    lesson.why,
                    lesson.experiment,
                    stage.title
                ].join(" ").toLowerCase();

                return !query || content.includes(query);

            });

            if (query && filtered.length === 0) {
                return "";
            }

            const expanded = query
                ? true
                : state.expandedStage === stage.id;

            return `

                <section class="stage-card">


                    <button
                        class="stage-header"
                        data-action="toggle-stage"
                        data-id="${escapeHTML(stage.id)}"
                    >

                        <span class="stage-number">
                            ${escapeHTML(stage.number)}
                        </span>

                        <span class="stage-header-info">

                            <strong>
                                ${escapeHTML(stage.title)}
                            </strong>

                            <small>
                                ${escapeHTML(stage.description)}
                            </small>

                        </span>

                        <span class="stage-header-stats">

                            ${stats.mastered}/${stats.total}

                            <span>
                                ${expanded ? "⌄" : "›"}
                            </span>

                        </span>

                    </button>


                    ${
                        expanded
                        ? `

                            <div class="stage-body">

                                <div class="stage-goal">

                                    <strong>Stage objective:</strong>

                                    ${escapeHTML(stage.goal)}

                                    <br><br>

                                    <strong>Expected output:</strong>

                                    ${escapeHTML(stage.output)}

                                </div>


                                ${
                                    filtered.map(lesson => {

                                        const mastered = isMastered(lesson.id);

                                        const progress = getLessonProgress(
                                            lesson.id
                                        );

                                        let status = mastered
                                            ? "MASTERED"
                                            : progress.done
                                                ? "EXPERIMENT DONE"
                                                : "NOT STARTED";

                                        return `

                                            <button
                                                class="lesson-row ${
                                                    mastered ? "mastered" : ""
                                                }"
                                                data-lesson="${escapeHTML(lesson.id)}"
                                            >

                                                <span class="lesson-icon">

                                                    ${mastered ? "✓" : "○"}

                                                </span>

                                                <span class="lesson-row-info">

                                                    <strong>
                                                        ${escapeHTML(lesson.title)}
                                                    </strong>

                                                    <small>
                                                        ${escapeHTML(lesson.level)}
                                                        · ${lesson.minutes} min
                                                    </small>

                                                </span>

                                                <span class="lesson-row-status">
                                                    ${status}
                                                </span>

                                            </button>

                                        `;

                                    }).join("")

                                }

                            </div>

                        `
                        : ""
                    }


                </section>

            `;

        }).join("")}


        ${
            query
            ? `
                <p class="muted small-text">
                    Search results for:
                    <strong>${escapeHTML(query)}</strong>
                </p>
            `
            : ""
        }

    `;

}


/* ======================================================
   PART 12 — INDIVIDUAL LESSON
====================================================== */

function renderLesson(id) {

    const lesson = getLesson(id);

    if (!lesson) {

        state.view = "path";

        return renderPath();

    }

    const stage = getStage(lesson.stage);

    const progress = getLessonProgress(id);

    const index = getLessonIndex(id);

    const previous = lessons[index - 1];

    const next = lessons[index + 1];

    const mastered = isMastered(id);


    return `

        <div class="breadcrumb">

            <button data-view="path">
                Learning Path
            </button>

            <span>›</span>

            <span>${escapeHTML(stage.title)}</span>

        </div>


        <section class="lesson-header">

            <div class="eyebrow">

                STAGE ${escapeHTML(stage.number)}
                · ${escapeHTML(stage.level)}

            </div>

            <h1>${escapeHTML(lesson.title)}</h1>

            <p>
                ${escapeHTML(lesson.what)}
            </p>

            <div class="lesson-meta">

                <span class="badge badge-purple">
                    ${escapeHTML(lesson.level)}
                </span>

                <span class="badge">
                    ${lesson.minutes} minutes
                </span>

                <span class="badge ${
                    mastered ? "badge-green" : "badge-orange"
                }">

                    ${mastered ? "MASTERED" : "IN PROGRESS"}

                </span>

            </div>

        </section>



        <div class="lesson-layout">


            <div class="lesson-content">


                <section class="lesson-section">

                    <h2>01 · What is it?</h2>

                    <p>
                        ${escapeHTML(lesson.what)}
                    </p>

                </section>



                <section class="lesson-section">

                    <h2>02 · Why do we use it?</h2>

                    <p>
                        ${escapeHTML(lesson.why)}
                    </p>

                </section>



                <section class="lesson-section">

                    <h2>03 · What should you do on GitHub?</h2>

                    <p style="margin-bottom:17px">

                        Follow these practical steps.
                        Open GitHub in another browser tab and
                        perform the experiment in your practice
                        repository whenever appropriate.

                    </p>


                    ${lesson.steps.map((step, i) => `

                        <div class="lesson-step">

                            <span class="step-number">
                                ${i + 1}
                            </span>

                            <p>
                                ${escapeHTML(step)}
                            </p>

                        </div>

                    `).join("")}


                    <a
                        href="${escapeHTML(lesson.resource)}"
                        class="secondary-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        Read official documentation ↗

                    </a>

                </section>



                <section class="lesson-section">

                    <h2>04 · Practical experiment</h2>

                    <div class="experiment-box">

                        <h3>YOUR EXPERIMENT</h3>

                        <p>
                            ${escapeHTML(lesson.experiment)}
                        </p>

                    </div>

                    ${
                        lesson.command
                        ? `

                            <div style="margin-top:17px">

                                <h3 style="font-size:11px;margin-bottom:9px">
                                    Optional terminal practice
                                </h3>

                                <pre class="code-example">${escapeHTML(lesson.command)}</pre>

                            </div>

                        `
                        : ""
                    }

                </section>



                <section class="lesson-section">

                    <h2>05 · Evidence: How do you know it worked?</h2>

                    <p style="margin-bottom:15px">

                        Check the actual result. Do not mark
                        an experiment as complete merely because
                        you read the instructions.

                    </p>


                    <div class="proof-list">

                        ${lesson.evidence.map(item => `

                            <div class="proof-item">
                                <span>✓</span>
                                <span>${escapeHTML(item)}</span>
                            </div>

                        `).join("")}

                    </div>

                </section>



                <section class="lesson-section">

                    <h2>06 · Explain it in your own words</h2>

                    <div class="experiment-box">

                        <h3>TEST YOUR UNDERSTANDING</h3>

                        <p>
                            ${escapeHTML(lesson.explain)}
                        </p>

                    </div>


                    <p style="margin-top:14px">

                        Explain the answer aloud or write it in
                        the notebook. You should be able to
                        describe the concept without simply
                        repeating this lesson.

                    </p>

                </section>



                <section class="lesson-section">

                    <h2>07 · Your experiment notes</h2>

                    <p style="margin-bottom:12px">

                        Record what you did, what happened,
                        errors you encountered and what you learned.

                    </p>

                    <textarea
                        class="note-area"
                        data-lesson-note="${escapeHTML(id)}"
                        placeholder="Write what you did and what you discovered..."
                    >${escapeHTML(progress.notes || "")}</textarea>

                    <p class="muted small-text" style="margin-top:8px">

                        Notes save automatically in this browser.

                    </p>

                </section>



                <div class="lesson-navigation">


                    ${
                        previous
                        ? `
                            <button
                                class="ghost-button"
                                data-lesson="${escapeHTML(previous.id)}"
                            >
                                ← Previous lesson
                            </button>
                        `
                        : `<span></span>`
                    }


                    ${
                        next
                        ? `
                            <button
                                class="primary-button"
                                data-lesson="${escapeHTML(next.id)}"
                            >
                                Next lesson →
                            </button>
                        `
                        : `
                            <button
                                class="primary-button"
                                data-view="lab"
                            >
                                Open Practice Lab →
                            </button>
                        `
                    }


                </div>


            </div>



            <!-- MASTERY SIDEBAR -->

            <aside class="lesson-side">


                <div class="card">

                    <div class="eyebrow">
                        YOUR MASTERY CHECK
                    </div>

                    <h3 style="font-size:15px;margin-bottom:12px">

                        ${mastered ? "Lesson mastered" : "Complete both checks"}

                    </h3>


                    <label class="mastery-check">

                        <input
                            type="checkbox"
                            data-progress="done"
                            data-id="${escapeHTML(id)}"
                            ${progress.done ? "checked" : ""}
                        >

                        <span>

                            <strong>Experiment completed</strong>

                            <small>
                                I performed the task and verified its result.
                            </small>

                        </span>

                    </label>


                    <label class="mastery-check">

                        <input
                            type="checkbox"
                            data-progress="explain"
                            data-id="${escapeHTML(id)}"
                            ${progress.explain ? "checked" : ""}
                        >

                        <span>

                            <strong>I can explain it</strong>

                            <small>
                                I understand what it is and why it is used.
                            </small>

                        </span>

                    </label>


                    <div class="divider"></div>


                    <span class="badge ${
                        mastered ? "badge-green" : "badge-orange"
                    }">

                        ${mastered ? "MASTERY VERIFIED BY YOU" : "NOT YET MASTERED"}

                    </span>


                    <p class="muted small-text"
                       style="margin-top:12px;line-height:1.8">

                        These are self-assessments, not external
                        certifications. Keep evidence in your
                        actual GitHub repository.

                    </p>

                </div>



                <div class="card">

                    <h3 style="font-size:12px;margin-bottom:10px">
                        Open GitHub
                    </h3>

                    <p class="muted small-text"
                       style="line-height:1.7;margin-bottom:13px">

                        Perform your experiment in your practice
                        repository rather than changing an
                        important production project.

                    </p>

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="primary-button full-width"
                    >

                        Open GitHub ↗

                    </a>

                </div>



                <div class="card">

                    <h3 style="font-size:12px;margin-bottom:9px">
                        Stage output
                    </h3>

                    <p class="muted small-text" style="line-height:1.8">
                        ${escapeHTML(stage.output)}
                    </p>

                </div>


            </aside>


        </div>

    `;

}


/* ======================================================
   PART 13 — PRACTICE LAB
====================================================== */

function getMissionProgress(mission) {

    const checks = state.missionChecks[mission.id] || [];

    const total = mission.steps.length;

    const completed = mission.steps.filter(
        (step, index) => checks[index] === true
    ).length;

    return {
        total,
        completed,
        percentage: total
            ? Math.round(completed / total * 100)
            : 0
    };

}


function renderLab() {

    const completed = missions.filter(mission => {

        return getMissionProgress(mission).percentage === 100;

    }).length;


    return `

        <div class="page-heading">

            <div class="eyebrow">HANDS-ON LEARNING</div>

            <h1>Practice Lab</h1>

            <p>

                Complete these real-world missions in GitHub.
                Use your github-mastery-lab repository for the
                experiments unless a mission specifically
                needs a separate public or local project.

            </p>

        </div>


        <div class="card" style="margin-bottom:20px">

            <h3 style="font-size:14px;margin-bottom:8px">
                Mission progress
            </h3>

            <p class="muted small-text">

                ${completed} of ${missions.length} missions completed

            </p>

            <div class="progress-track" style="margin-top:13px">

                <div
                    class="progress-fill"
                    style="width:${completed / missions.length * 100}%"
                ></div>

            </div>

        </div>



        ${missions.map(mission => {

            const progress = getMissionProgress(mission);

            const opened = state.openMission === mission.id;

            const done = progress.percentage === 100;

            return `

                <section class="mission-card">


                    <div class="mission-header">

                        <div class="mission-icon">⚒</div>


                        <div class="mission-heading">

                            <strong>
                                ${escapeHTML(mission.title)}
                            </strong>

                            <small>
                                ${escapeHTML(mission.duration)}
                                · ${progress.completed}/${progress.total} tasks
                            </small>

                        </div>


                        <span class="badge ${
                            done ? "badge-green" : "badge-orange"
                        }">

                            ${done ? "COMPLETED" : progress.percentage + "%"}

                        </span>


                        <button
                            class="ghost-button"
                            data-action="toggle-mission"
                            data-id="${escapeHTML(mission.id)}"
                        >

                            ${opened ? "Hide" : "Open"}

                        </button>

                    </div>



                    ${
                        opened
                        ? `

                            <div class="mission-body">

                                <p>
                                    <strong>Objective:</strong>
                                    ${escapeHTML(mission.goal)}
                                </p>

                                ${mission.steps.map((step, index) => {

                                    const checks =
                                        state.missionChecks[mission.id] || [];

                                    return `

                                        <label class="mission-task">

                                            <input
                                                type="checkbox"
                                                data-mission-check="${escapeHTML(mission.id)}"
                                                data-index="${index}"
                                                ${checks[index] ? "checked" : ""}
                                            >

                                            <span>
                                                ${escapeHTML(step)}
                                            </span>

                                        </label>

                                    `;

                                }).join("")}

                            </div>

                        `
                        : ""
                    }


                </section>

            `;

        }).join("")}


        <div class="card" style="margin-top:20px">

            <h3 style="font-size:13px;margin-bottom:10px">
                Mission completion standard
            </h3>

            <p class="muted small-text" style="line-height:1.8">

                Tick a task only after you actually perform it.
                The mission tracker stores your checklist locally.
                It does not inspect GitHub automatically or verify
                your remote repository.

            </p>

        </div>

    `;

}


/* ======================================================
   PART 14 — GITHUB DICTIONARY
====================================================== */

function renderGlossary() {

    const query = state.glossarySearch.toLowerCase().trim();

    const filtered = glossary.filter(item => {

        return (
            item.term.toLowerCase().includes(query) ||
            item.definition.toLowerCase().includes(query)
        );

    });


    return `

        <div class="page-heading">

            <div class="eyebrow">TECHNICAL VOCABULARY</div>

            <h1>GitHub Dictionary</h1>

            <p>
                Understand the language developers use when
                working with Git, GitHub and software collaboration.
            </p>

        </div>


        <input
            class="glossary-search"
            id="glossarySearch"
            type="search"
            value="${escapeHTML(state.glossarySearch)}"
            placeholder="Search a term or definition..."
        >


        ${
            filtered.length
            ? `
                <div class="glossary-grid">

                    ${filtered.map(item => `

                        <article class="glossary-item">

                            <strong>${escapeHTML(item.term)}</strong>

                            <p>${escapeHTML(item.definition)}</p>

                        </article>

                    `).join("")}

                </div>
            `
            : `
                <div class="empty-state">

                    <h3>No terms found</h3>

                    <p>Try another word.</p>

                </div>
            `
        }

    `;

}


/* ======================================================
   PART 15 — NOTEBOOK
====================================================== */

function renderNotebook() {

    const savedLessons = lessons.filter(lesson => {

        const progress = getLessonProgress(lesson.id);

        return progress.notes.trim() !== "";

    });


    return `

        <div class="page-heading">

            <div class="eyebrow">YOUR PERSONAL KNOWLEDGE BASE</div>

            <h1>My Notebook</h1>

            <p>

                Write what you learned, what failed, how you fixed
                it and how GitHub concepts connect to real development.

            </p>

        </div>


        <section class="notebook-card">

            <h3>My learning journal</h3>

            <p style="margin-bottom:13px">

                Use this journal for daily learning summaries,
                questions and personal discoveries.

            </p>


            <textarea
                class="journal-area"
                id="journalArea"
                placeholder="Today I learned...&#10;&#10;The experiment I performed...&#10;&#10;The error I encountered...&#10;&#10;What I now understand..."
            >${escapeHTML(state.journal)}</textarea>


            <p class="muted small-text" style="margin-top:9px">
                Automatically saved in your browser.
            </p>

        </section>



        <section class="notebook-card">

            <h3>Lesson experiment notes</h3>

            <p style="margin-bottom:16px">

                These notes are saved inside their respective lessons.

            </p>


            ${
                savedLessons.length
                ? savedLessons.map(lesson => {

                    const note = getLessonProgress(lesson.id).notes;

                    return `

                        <div class="saved-note">

                            <strong>
                                ${escapeHTML(lesson.title)}
                            </strong>

                            <p>${formatText(note)}</p>

                            <button
                                class="ghost-button"
                                style="margin-top:11px"
                                data-lesson="${escapeHTML(lesson.id)}"
                            >
                                Open lesson →
                            </button>

                        </div>

                    `;

                }).join("")
                : `
                    <div class="empty-state">

                        <h3>No lesson notes yet</h3>

                        <p>
                            Open a lesson and record your first
                            practical experiment.
                        </p>

                    </div>
                `
            }

        </section>

    `;

}


/* ======================================================
   PART 16 — DATA BACKUP SETTINGS
====================================================== */

function renderSettings() {

    return `

        <div class="page-heading">

            <div class="eyebrow">DATA AND CONFIGURATION</div>

            <h1>Settings & Backups</h1>

            <p>
                Manage your saved progress and protect your learning
                records with an exportable backup.
            </p>

        </div>


        <div class="settings-grid">


            <section class="card settings-card">

                <h3>Export my learning data</h3>

                <p>

                    Download your lesson progress, experiment
                    checklists, notebook and personal notes as JSON.

                </p>

                <button
                    class="primary-button"
                    data-action="export"
                >
                    Export backup
                </button>

            </section>



            <section class="card settings-card">

                <h3>Import a learning backup</h3>

                <p>

                    Restore a JSON backup previously exported
                    from this tracker.

                </p>

                <label class="secondary-button" for="importFile">

                    Select backup file

                </label>

                <input
                    class="file-input"
                    id="importFile"
                    type="file"
                    accept=".json,application/json"
                >

            </section>



            <section class="card settings-card">

                <h3>Where is my data stored?</h3>

                <p>

                    Your data is stored in localStorage in this
                    browser. It is not automatically uploaded
                    to GitHub or synchronized to another computer.

                </p>

                <span class="badge badge-green">
                    Local browser storage
                </span>

            </section>



            <section class="card settings-card">

                <h3>Reset learning progress</h3>

                <p>

                    This clears your course progress, practice
                    mission checklists and notes from this browser.
                    Export a backup first if you need one.

                </p>

                <button
                    class="primary-button danger-button"
                    data-action="reset"
                >
                    Reset all progress
                </button>

            </section>


        </div>


        <div class="card" style="margin-top:18px">

            <h3 style="font-size:13px;margin-bottom:10px">
                Important limitations
            </h3>

            <p class="muted small-text" style="line-height:1.9">

                This is a local learning tracker. It cannot access
                your GitHub account, inspect repositories or
                automatically certify whether an experiment was
                performed. You must verify your work on GitHub
                and mark the checklist honestly.

            </p>

        </div>

    `;

}


/* ======================================================
   PART 17 — MAIN APPLICATION RENDERER
====================================================== */

const app = document.getElementById("app");


function renderApp() {

    document.querySelectorAll(".nav-item").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.view === state.view
        );

    });


    renderSidebarProgress();


    switch (state.view) {

        case "dashboard":

            app.innerHTML = renderDashboard();

            break;


        case "path":

            app.innerHTML = renderPath();

            break;


        case "lesson":

            app.innerHTML = renderLesson(state.lessonId);

            break;


        case "lab":

            app.innerHTML = renderLab();

            break;


        case "glossary":

            app.innerHTML = renderGlossary();

            break;


        case "notebook":

            app.innerHTML = renderNotebook();

            break;


        case "settings":

            app.innerHTML = renderSettings();

            break;


        default:

            state.view = "dashboard";

            app.innerHTML = renderDashboard();

    }

}


/* ======================================================
   PART 18 — NAVIGATION
====================================================== */

function navigate(view) {

    state.view = view;

    if (view !== "path") {
        state.search = "";
    }

    saveState();

    renderApp();

}


function openLesson(id) {

    if (!getLesson(id)) {
        return;
    }

    state.lessonId = id;

    state.view = "lesson";

    saveState();

    renderApp();

}


function openStage(id) {

    state.expandedStage = id;

    state.view = "path";

    state.search = "";

    saveState();

    renderApp();

}


/* ======================================================
   PART 19 — CLICK HANDLING
====================================================== */

document.addEventListener("click", function(event) {


    // Navigation buttons.

    const nav = event.target.closest("[data-view]");

    if (nav) {

        navigate(nav.dataset.view);

        return;

    }


    // Lesson links.

    const lessonButton = event.target.closest("[data-lesson]");

    if (lessonButton) {

        openLesson(lessonButton.dataset.lesson);

        return;

    }


    // Action buttons.

    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) {
        return;
    }


    const action = actionButton.dataset.action;

    const id = actionButton.dataset.id;


    switch (action) {


        case "continue": {

            const next = getNextLesson();

            if (next) {
                openLesson(next.id);
            } else {
                navigate("lab");
            }

            break;

        }


        case "open-stage":

            openStage(id);

            break;


        case "toggle-stage":

            state.expandedStage =
                state.expandedStage === id ? "" : id;

            saveState();

            renderApp();

            break;


        case "toggle-mission":

            state.openMission =
                state.openMission === id ? "" : id;

            saveState();

            renderApp();

            break;


        case "export":

            exportBackup();

            break;


        case "reset":

            resetProgress();

            break;

    }

});


/* ======================================================
   PART 20 — MASTERY CHECKBOXES
====================================================== */

document.addEventListener("change", function(event) {

    const input = event.target;


    // Lesson mastery status.

    if (input.matches("[data-progress]")) {

        const id = input.dataset.id;

        const field = input.dataset.progress;

        if (!["done", "explain"].includes(field)) {
            return;
        }

        const progress = getLessonProgress(id);

        progress[field] = input.checked;

        saveState();

        renderApp();

        if (isMastered(id)) {

            notify("Lesson mastered. Good work.");

        } else {

            notify("Progress saved.");

        }

        return;

    }


    // Mission checklist.

    if (input.matches("[data-mission-check]")) {

        const id = input.dataset.missionCheck;

        const index = Number(input.dataset.index);

        if (!Number.isInteger(index) || index < 0) {
            return;
        }

        if (!Array.isArray(state.missionChecks[id])) {

            state.missionChecks[id] = [];

        }

        state.missionChecks[id][index] = input.checked;

        saveState();

        const mission = missions.find(
            item => item.id === id
        );

        if (mission &&
            getMissionProgress(mission).percentage === 100) {

            notify("Mission checklist completed.");

        }

        renderApp();

        return;

    }

});


/* ======================================================
   PART 21 — AUTO-SAVE NOTES AND SEARCH
====================================================== */

document.addEventListener("input", function(event) {

    const input = event.target;


    // Save lesson notes.

    if (input.matches("[data-lesson-note]")) {

        const id = input.dataset.lessonNote;

        const progress = getLessonProgress(id);

        progress.notes = input.value;

        saveState();

        return;

    }


    // Save main learning journal.

    if (input.id === "journalArea") {

        state.journal = input.value;

        saveState();

        return;

    }


    // Search the entire curriculum.

    if (input.id === "globalSearch") {

        state.search = input.value;

        state.view = "path";

        renderApp();

        return;

    }


    // Search the glossary.

    
if (input.id === "glossarySearch") {

    const cursorPosition = input.selectionStart;

    state.glossarySearch = input.value;

    app.innerHTML = renderGlossary();

    const updatedSearch = document.getElementById("glossarySearch");

    updatedSearch.focus();

    updatedSearch.setSelectionRange(
        cursorPosition,
        cursorPosition
    );

    return;
}


});


/* ======================================================
   PART 22 — EXPORT PROGRESS BACKUP
====================================================== */

function exportBackup() {

    const data = {

        application: "GitHub Mastery Tracker",

        version: 1,

        exportedAt: new Date().toISOString(),

        state

    };


    const json = JSON.stringify(data, null, 2);

    const blob = new Blob(
        [json],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "github-mastery-backup.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    notify("Your progress backup has been downloaded.");

}


/* ======================================================
   PART 23 — IMPORT PROGRESS BACKUP
====================================================== */

document.addEventListener("change", function(event) {

    if (event.target.id !== "importFile") {
        return;
    }

    const file = event.target.files[0];

    if (!file) {
        return;
    }


    const reader = new FileReader();

    reader.onload = function() {

        try {

            const data = JSON.parse(reader.result);

            if (
                !data ||
                data.application !== "GitHub Mastery Tracker" ||
                !data.state ||
                typeof data.state !== "object" ||
                Array.isArray(data.state)
            ) {

                throw new Error("Invalid backup format.");

            }


            if (!confirm(
                "Import this backup? Your current browser progress will be replaced."
            )) {

                event.target.value = "";

                return;

            }


            const restored = data.state;

            const defaults = createDefaultState();


            state = {

                ...defaults,

                ...restored,

                progress:
                    restored.progress &&
                    typeof restored.progress === "object" &&
                    !Array.isArray(restored.progress)
                        ? restored.progress
                        : {},

                missionChecks:
                    restored.missionChecks &&
                    typeof restored.missionChecks === "object" &&
                    !Array.isArray(restored.missionChecks)
                        ? restored.missionChecks
                        : {}

            };


            saveState();

            renderApp();

            notify("Backup imported successfully.");

        } catch (error) {

            console.error("Backup import failed:", error);

            notify("Could not import this backup file.");

        } finally {

            event.target.value = "";

        }

    };

    reader.onerror = function() {

        notify("Unable to read the selected file.");

    };

    reader.readAsText(file);

});


/* ======================================================
   PART 24 — RESET PROGRESS
====================================================== */

function resetProgress() {

    const confirmed = confirm(
        "This will delete all saved lessons, mission checks and notes from this browser. Continue?"
    );

    if (!confirmed) {
        return;
    }


    state = createDefaultState();

    saveState();

    renderApp();

    const search = document.getElementById("globalSearch");

    if (search) {
        search.value = "";
    }

    notify("Learning progress reset.");

}


/* ======================================================
   PART 25 — INITIALIZE THE APPLICATION
====================================================== */

renderApp();

saveState();

console.log("GitHub Mastery Tracker initialized.");

console.log("Stages:", stages.length);

console.log("Lessons:", lessons.length);

console.log("Practice missions:", missions.length);

