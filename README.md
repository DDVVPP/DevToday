# <a name="introduction">DevToday v2.0</a>
DevToday is a comprehensive platform for developers, providing a curated feed of tech news, podcasts, and events. Developed as part of the JSM Masterclass, this personal project serves as a comprehensive developer community hub with interactive features such as podcast playback and maps for meetup maps.

**v2.0 Deployed Site (Work in Progress)**\
&nbsp;&nbsp;&nbsp;&nbsp;[https://dev-today-v2.vercel.app/](https://dev-today-v2.vercel.app/)\
&nbsp;&nbsp;&nbsp;&nbsp;**Please contact me for Demo User credentials if you would like to use an existing account*

## <a name="tech-stack">⚙️ Tech Stack</a>
- Next.js
- TypeScript
- Prism.js
- TinyMCE
- PostgreSQL
- Prisma.io
- Supabase
- Tailwind CSS

## <a name="features">☀️ Key Features</a>
- Clerk authorization for sign-up and login
- Onboarding
- Post and podcast feeds
- List of groups and meetups
- Users with profiles
- User specific actions such as:
  - Following other users
  - Liking posts, podcasts, and comments
  - Commenting on posts, meetups, podcasts
  - Editing, creating, and deleting posts, groups, meetups, podcasts, and comments
  - Joining and leaving groups
  - Editing profile details
- CmdK fuzzy search
- Notifications
- Mobile Responsiveness
- Light and Dark modes
- Use of Git and Github with an Asana board of tickets for efficient team collaboration.

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**\
Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Steps**
1. Clone the Repo:
```bash
git clone https://github.com/[username]/DevToday.git
cd DevToday
```

2. Install Dependencies
```bash
npm install
```

3. Set Up Environment Variables: Create a `.env` file in the project root:
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

4. Run the Project
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## <a name="version-one">☎️ DevToday v1.0</a>
**Teammate's LinkedIn**\
&nbsp;&nbsp;&nbsp;&nbsp;[Adam Gordon](https://www.linkedin.com/in/adam-gordon119/)

**v1.0 Deployed Site**\
&nbsp;&nbsp;&nbsp;&nbsp;[https://capstone-darshin-adam.vercel.app/](https://capstone-darshin-adam.vercel.app/)\
&nbsp;&nbsp;&nbsp;&nbsp;**Please contact me for Demo User credentials if you would like to use an existing account*

**My responsibilities**
- Header/Footer Navbar
  - Route setup
  - Clerk menu
    -  Light and dark mode control
    -  Profile and logout / sign in
  - Notifications
    - Continuous scroll, ordering, mark all as read
    - Clicking on each type of notification should navigate user to corresponding content
  - CmdK search
- Post, Meetup, Group Detail Pages
  - Interactive google api map
  - Edit/delete
  - Comments
    - Ordering with animation
    - Edit, add, delete, like according to role
  - Group
    - Members tab
    - Follow and remove users according to role
    - Top ranked groups and statistical highlights
    - Joining and leaving
  - Follow/visit author
- Post, Meetup, Group Create Pages
  - Interactive google api map
  - Zod validation and form generation
  - Admin and member search
  - React date/timepicker
  - TinyMCE code editor
  - Upload Dropzone
- Initial schema setup
- All db CRUD actions associated with each feature
- Seed file
  - Faker.js 
- Mobile responsiveness and styling in each feature
