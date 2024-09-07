# <a name="introduction">DevToday v2.0</a>
DevToday is a comprehensive platform for developers, providing a curated feed of tech news, podcasts, and events. Developed as part of the JSM Masterclass, this personal project serves as a comprehensive developer community hub with interactive features such as podcast playback and maps for meetup maps.

**v2.0 Deployed Site (Work in Progress)**\
&nbsp;&nbsp;&nbsp;&nbsp;[https://dev-today-v2.vercel.app/](https://dev-today-v2.vercel.app/)\
&nbsp;&nbsp;&nbsp;&nbsp;**Please contact me for Demo User credentials if you would like to use an existing account*

## <a name="tech-stack">⚙️ Tech Stack</a>
- **Next.js** - Framework for building server-side-rendered React applications.
- **Clerk** - Handles user authentication with secure sign-up, sign-in, and logout functionalities.
- **PostgreSQL** - Relational database management system.
- **Prisma.io** - ORM for interacting with the database.
- **Supabase** - Backend-as-a-Service for database management.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Shadcn** - Component library for Tailwind CSS.
- **Framer Motion** - Animation library for React.
- **React DatePicker** - Flexible date and time picker component for React applications.
- **TinyMCE** - WYSIWYG HTML editor.
- **Upload Dropzone** - Library for file uploads.
- **Google Maps API** - Maps and location services.

## <a name="features">☀️ Key Features</a>
- **Authentication** – Clerk auth for secure sign-up, sign-in, and logout functionalities.
- **Onboarding** – Provides an introduction and walkthrough for new users.
- **Interactive Feeds** – Displays posts, podcasts, and group feeds.
- **Meetups List** – Lists upcoming meetups.
- **Profile Management** – Manage user profiles, follow other users, and update profile details.
- **Interactions** – Like posts, podcasts, and comments.
- **Comments** – Comment on posts, meetups, and podcasts.
- **Content Management** – Edit, create, and delete posts, groups, meetups, podcasts, and comments.
- **Group Membership** – Join and leave groups.
- **Search** – CmdK search provides fuzzy search functionality.
- **Notifications** – Provides real-time updates with features for marking notifications as read and infinite scrolling.
- **Mobile Responsiveness** – Ensures usability on mobile devices.
- **Light and Dark Modes** – Supports both themes.
- **Version Control and Project Management** – Integrated with Git, GitHub, and Asana for efficient team collaboration.
  
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
