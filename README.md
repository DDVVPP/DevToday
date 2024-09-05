## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Version 1](#version-one)

## <a name="introduction">Introduction</a>

DevToday Version 2 - A content creation platform for developers which offers a feed of dev news, podcasts, and events, keeping you up-to-date with the latest tech. It has interactive features like podcast audio playback, meetup maps, and more. Developed as part of the JSM Masterclass, DevToday can be thought of as the go-to developer community hub.

[Deployed Site](https://dev-today-v2.vercel.app/)\
*Please contact me for Demo User credentials if you would like to use an existing account

## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- Prism.js
- TinyMCE
- PostgreSQL
- Prisma.io
- Supabase
- Tailwind CSS

## <a name="features">Features</a>
- Clerk authorization for sign-up and login
- Onboarding
- Post and podcast feeds
- List of groups and meetups
- Users with profiles
- User specific actions such as:
  - Following other users
  - Liking posts, podcasts, and comments
  - Commenting on posts and podcasts
  - Editing, creating, and deleting posts, groups, meetups, podcasts, and comments
  - Joining and leaving groups
  - Editing profile details
- CmdK fuzzy search
- Notifications
- Use of Git and Github with an Asana board of tickets for efficient team collaboration.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/[username]/DevToday.git
cd DevToday
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

For a few specific applications, we require environment variables. Create .env file in the root of your project.

```env
DATABASE_URL=""
DIRECT_URL=""

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_CLERK_WEBHOOK_SECRET=""

NEXT_PUBLIC_CLERK_SIGN_IN_URL=""
NEXT_PUBLIC_CLERK_SIGN_UP_URL=""
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=""
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=""

UPLOADTHING_SECRET=""

NEXT_PUBLIC_GMAPSKEY=""
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="version-one">Version 1 of DevToday</a>
Teammate LinkedIn: [Adam Gordon](https://www.linkedin.com/in/adam-gordon119/)\
v1.0 Deployed Site: [https://capstone-darshin-adam.vercel.app/](https://capstone-darshin-adam.vercel.app/)\
*Please contact me for Demo User credentials if you would like to use an existing account
