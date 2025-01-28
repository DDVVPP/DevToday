# <a name="introduction">DevToday v.2.0</a>
DevToday is a comprehensive platform for developers, providing a curated feed of tech news, podcasts, and events. Developed as part of the JSM Masterclass, this personal project serves as a comprehensive developer community hub with interactive features such as podcast playback and maps for meetup maps.

**v.2.0 Deployed Site (In Development)**\
&nbsp;&nbsp;&nbsp;&nbsp;[Live Demo](https://dev-today-v2.vercel.app/)\
&nbsp;&nbsp;&nbsp;&nbsp;**Contact me for demo credentials to explore an existing account.*

&nbsp;
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
  
&nbsp;
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
    
&nbsp;
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
  
&nbsp;
## <a name="todo">✅ To Do List</a>
**Header/Footer Nav**

🔳 Close menu when a selection is made from “Create Content“ dropdown\
🔳 Crop notification profile images to a circle

**Home Pages (Post, Meetup, Podcast, Group)**

🔳 Fix sticky footer jumps and scrollbar between route changes on small screens\
🔳 Ensure “Posts“ content width adjusts to screen size

**Group Details Page**

🔳 Add “Delete group“ functionality\
🔳 Add “View all“ members and admins link and page\
🔳 Add user removal or admin assignment functionality

**Post Details Page**

🔳 Match hover effect on “More from ...“ cards with other detail pages

**Profile Page**

🔳 Add “no content“ placeholder for tabs (Posts, Meetups, Podcasts, Groups), “Performance“, and “Recent Posts“ sections\
🔳 Add missing hover states on buttons (Edit Profile, Follow) and links in the “Performance“ section, and tabs (Posts, Meetups, Podcasts, Groups)\
🔳 Ensure “Posts“ tab width adjusts to screen size

**Create Pages**

🔳 Add missing hover effects on buttons (Cancel, Publish Meetup)\
🔳 Resolve Upload Dropzone's re-opening of the finder window on esc, when clicking on “Drag & Drop or upload png or jpeg up to 16MB“ area\
🔳 Add skeleton loading states for route changes\
🔳 Add infinite scroll to “Select Group“ dropdown and fix group hover styles\
🔳 Create Group: Add missing hover effects on buttons (Set a Profile Photo, Upload a cover image)\
🔳 Create Podcast: Fix light mode input style on “Podcast Audio File“ input

**Edit Profile Page**

🔳 “Cancel“ button should not trigger a profile update and a loading state on the “Update Profile“ button\
🔳 Add missing hover effect on “Edit Profile“ button\
🔳 Fix “Interested Tech“ input to wrap tags and space content correctly

**Miscellaneous Updates**

🔳 Connect notifications to user actions\
🔳 Resolve lag between a user click and the loading.tsx file\
🔳 Make tags clickable and link to content\
🔳 Move light/dark mode toggle out of Clerk menu\
🔳 Link comment authors to their profiles\
🔳 Refactor code to remove duplication\
🔳 Add “Share post“ functionality\
🔳 Add live values for number of views\
🔳 Build an admin panel
  
&nbsp;
## <a name="version-one">☎️ DevToday v.1.0</a>
**Teammate's GitHub**\
&nbsp;&nbsp;&nbsp;&nbsp;[Adam Gordon](https://github.com/adamgordonny)

**v1.0 Deployed Site**\
&nbsp;&nbsp;&nbsp;&nbsp;[Live Demo](https://capstone-darshin-adam.vercel.app/)\
&nbsp;&nbsp;&nbsp;&nbsp;**Contact me for demo credentials to explore an existing account.*

**My responsibilities**
- **Header/Footer Navbar** 
  - Route setup and configuration
  - Clerk menu integration
    - Light and dark mode control
    - Profile management and sign-in/sign-out functionality
  - Notifications
    - Continuous scroll, ordering, and mark all as read features
    - Navigation to corresponding content for each notification type
  - CmdK search implementation

- **Post, Meetup, Group Detail Pages** 
  - Interactive Google Maps API integration
  - Edit and delete functionalities for posts, meetups, and groups
  - Comments
    - Ordering with animation
    - Edit, add, delete, and like comments based on user role
  - Group
    - Members tab display
    - Follow and remove users based on role
    - Display of top-ranked groups and statistical highlights
    - Functionality for joining and leaving groups
  - Follow and visit author of post or meetup
    
- **Post, Meetup, Group Create Pages** 
  - Interactive Google Maps API integration
  - Zod validation and form generation
  - Admin and member search functionalities
  - React DatePicker integration
  - TinyMCE code editor implementation
  - Upload Dropzone integration
    
- **Database and Schema Management**
  - Creation and configuration of initial database schema
  - Implementation of create, read, update, and delete actions for each feature
  - Use of Faker.js for generating seed data
    
- **Mobile Responsiveness** 
  - Ensuring usability and styling consistency across mobile devices for each feature
  
&nbsp;
## <a name="license">📋 License</a>
Licensed under the MIT License. See [LICENSE](./LICENSE) for more details.
