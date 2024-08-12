const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { faker } = require("@faker-js/faker");

const {
  Goals,
  Levels,
  Tech,
  NotificationType,
  Platform,
} = require("@prisma/client");

async function main() {
  const techArray = Object.values(Tech);
  const platformArray = Object.values(Platform);
  const userIds = [];
  const postIds = [];
  const meetupIds = [];
  const podcastIds = [];
  const groupIds = [];
  const techTerms = [
    "AI",
    "Blockchain",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "DevOps",
    "Machine Learning",
    "Quantum Computing",
    "Software Development",
    "Web Development",
  ];
  const techTrends = [
    "latest advancements",
    "emerging technologies",
    "cutting-edge solutions",
    "innovative practices",
    "industry trends",
    "best practices",
    "tech breakthroughs",
  ];
  const techTags = [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript",
    "Ruby",
    "C++",
    "React",
    "Angular",
    "Vue",
    "Django",
    "Node.js",
    "Express",
    "HTML",
    "CSS",
    "GraphQL",
    "REST",
    "APIs",
    "WebAssembly",
    "Docker",
    "Kubernetes",
    "Git",
    "Webpack",
    "Babel",
    "Jenkins",
    "Agile",
    "Scrum",
    "DevOps",
    "Continuous Integration",
    "Test-Driven Development",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Redis",
    "Firebase",
    "AWS",
    "Azure",
    "Google Cloud",
    "Heroku",
    "DigitalOcean",
    "Encryption",
    "OAuth",
    "Authentication",
    "Penetration Testing",
    "Firewalls",
    "UI/UX",
    "Responsive Design",
    "Wireframes",
    "Prototyping",
    "User Testing",
    "AI",
    "Machine Learning",
    "Blockchain",
    "AR/VR",
    "IoT",
  ];
  const audioSamples = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  ];

  // USERS
  for (let i = 0; i < 20; i++) {
    const firstName = faker.person.firstName();
    const level = faker.helpers.enumValue(Levels);
    const socialMedia = platformArray.map((platform) => ({
      platform,
      handle: faker.internet.userName(),
      link: faker.internet.url(),
    }));

    const user = await prisma.user.create({
      data: {
        email: faker.internet.exampleEmail(),
        firstName,
        lastName: faker.person.lastName(),
        username: faker.internet.displayName(),
        level,
        bio: `${firstName} loves ${faker.company.buzzVerb()} and exploring new tech. Always keen on learning about ${faker.helpers.arrayElement(techArray)}, ${firstName} enjoys diving into various projects and expanding their skills.`,
        image: faker.image.urlLoremFlickr({ category: "avatar" }),
        goal: faker.helpers.enumValue(Goals),
        tech: faker.helpers.arrayElements(techArray),
        SocialMedia: {
          create: socialMedia, // Creating social media entries
        },
      },
    });
    userIds.push(user.id);
  }

  // GROUPS
  for (let i = 0; i < 20; i++) {
    const adminsConnect = faker.helpers
      .arrayElements(userIds)
      .map((userId: number) => {
        return { id: userId };
      });
    const membersConnect = faker.helpers
      .arrayElements(userIds)
      .map((userId: number) => {
        return { id: userId };
      });

    const group = await prisma.group.create({
      data: {
        name: faker.commerce.department() + " Enthusiasts",
        about: `Welcome to the ${faker.commerce.department()} Enthusiasts group! In this community, we dive into various topics such as ${faker.helpers.arrayElement(techTerms)}. We’re here to explore ${faker.helpers.arrayElement(techTrends)} and stay updated on the latest tech developments.

        Join us to connect with like-minded individuals, share your knowledge, and collaborate on exciting projects. Whether you’re passionate about ${faker.helpers.arrayElement(techTerms)} or eager to learn more, there’s a place for you here.`,
        coverImage: faker.image.urlLoremFlickr({ category: "business" }),
        profileImage: faker.image.avatar(),
        admins: {
          connect: adminsConnect,
        },
        members: {
          connect: membersConnect,
        },
        author: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
      },
    });
    groupIds.push(group.id);
  }

  // POSTS
  for (let i = 0; i < 50; i++) {
    const tags = faker.helpers.arrayElements(techTags, 3);
    const post = await prisma.post.create({
      data: {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}: ${faker.hacker.phrase()}`,
        body: `In the rapidly evolving field of web development, staying ahead of the curve is crucial. This post explores key trends and best practices in web development, including the latest advancements in ${faker.commerce.department()} frameworks and tools.

        We dive into how emerging technologies such as ${faker.company.buzzAdjective()} API integrations and ${faker.commerce.product()} optimization are transforming the development landscape. Learn about ${faker.commerce.product()} performance enhancements and the role of ${faker.commerce.department()} in creating responsive and scalable applications.

        From implementing ${faker.commerce.product()} solutions to optimizing front-end and back-end workflows, this guide provides actionable insights to enhance your web development projects. Discover strategies for effective ${faker.commerce.product()} and how to leverage ${faker.commerce.department()} trends to build cutting-edge applications.

        Join the conversation on how these innovations are shaping the future of web development. Share your experiences, ask questions, and connect with fellow developers to continue advancing your skills and knowledge in this exciting field.`,
        likes: faker.number.int(400),
        views: faker.number.int(1000),
        image: faker.image.urlLoremFlickr({ category: "abstract" }),
        tags,
        group: {
          connect: {
            id: faker.helpers.arrayElement(groupIds),
          },
        },
        user: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
      },
    });
    postIds.push(post.id);
  }

  // MEETUPS
  for (let i = 0; i < 40; i++) {
    const tags = faker.helpers.arrayElements(techTags, 3);
    const streetAddress = faker.location.streetAddress();
    const city = faker.location.city();
    const state = faker.location.state({ abbreviated: true });
    const zipCode = faker.location.zipCode();
    const latitude = faker.location.latitude({
      min: 24.396308,
      max: 49.384358,
    }); // Range covering the continental U.S.
    const longitude = faker.location.longitude({
      min: -125.00165,
      max: -66.93457,
    }); // Range covering the continental U.S.

    const meetup = await prisma.meetup.create({
      data: {
        title: `${faker.hacker.noun()} ${faker.hacker.verb()} ${faker.hacker.adjective()}`,
        body: `Join us for an exciting meetup on ${faker.hacker.noun()} where we'll dive into ${faker.hacker.adjective()} topics like ${faker.hacker.verb()} and ${faker.hacker.noun()}. This event is perfect for ${faker.hacker.adjective()} professionals and enthusiasts looking to expand their knowledge and network with others in the field.

        Our session will cover various aspects of ${faker.hacker.noun()} development, including practical ${faker.hacker.verb()} techniques and the latest ${faker.hacker.adjective()} trends. Don't miss out on this opportunity to engage with industry experts and fellow participants.

        The meetup will be held at ${streetAddress}, ${city}, ${state} ${zipCode}. We look forward to seeing you there and discussing all things ${faker.hacker.noun()}!`,
        startTime: faker.date.future(),
        address: `${streetAddress} ${city}, ${state} ${zipCode}`,
        latitude,
        longitude,
        likes: faker.number.int(400),
        views: faker.number.int(1000),
        image: faker.image.urlLoremFlickr({ category: "nature" }),
        tags,
        group: {
          connect: {
            id: faker.helpers.arrayElement(groupIds),
          },
        },
        user: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
      },
    });
    meetupIds.push(meetup.id);
  }

  // PODCASTS
  for (let i = 0; i < 30; i++) {
    const audio = faker.helpers.arrayElement(audioSamples);
    const tags = faker.helpers.arrayElements(techTags, 3);
    const podcast = await prisma.podcast.create({
      data: {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}: ${faker.hacker.verb()} in Tech`,
        body: `In this episode, we explore ${faker.hacker.adjective()} ${faker.hacker.noun()} and discuss ${faker.hacker.verb()} strategies in the ${faker.hacker.adjective()} tech world. We'll cover ${faker.hacker.noun()} development, ${faker.hacker.adjective()} trends, and practical ${faker.hacker.verb()} tips. Join us for expert opinions on how ${faker.hacker.noun()} is shaping the tech landscape.

        This podcast features ${faker.hacker.adjective()} insights, ${faker.hacker.noun()} interviews, and hands-on advice to help you stay ahead in the ${faker.hacker.noun()} field. Don't miss out on expanding your ${faker.hacker.noun()} knowledge.
`,
        likes: faker.number.int(800),
        views: faker.number.int(800),
        image: faker.image.urlLoremFlickr({ category: "technics" }),
        audio,
        tags,
        group: {
          connect: {
            id: faker.helpers.arrayElement(groupIds),
          },
        },
        user: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
      },
    });
    podcastIds.push(podcast.id);
  }

  // COMMENTS
  for (let i = 0; i < 100; i++) {
    const postIsIncluded = faker.datatype.boolean();
    const meetupIsIncluded = faker.datatype.boolean();
    const podcastIsIncluded = faker.datatype.boolean();

    await prisma.comment.create({
      data: {
        body: `I recently came across ${faker.hacker.adjective()} insights on ${faker.hacker.noun()} and found the discussion on ${faker.hacker.verb()} particularly ${faker.hacker.adjective()}. The way ${faker.hacker.noun()} was handled in this ${faker.hacker.noun()} is impressive. It's clear that ${faker.hacker.noun()} is becoming more ${faker.hacker.adjective()} and ${faker.hacker.adjective()} in the ${faker.hacker.adjective()} landscape. Looking forward to more ${faker.hacker.verb()} and ${faker.hacker.noun()} in future updates!`,
        likes: faker.number.int(800),
        ...(postIsIncluded && {
          post: {
            connect: { id: faker.helpers.arrayElement(postIds) },
          },
        }),
        ...(meetupIsIncluded && {
          meetup: {
            connect: { id: faker.helpers.arrayElement(meetupIds) },
          },
        }),
        ...(podcastIsIncluded && {
          podcast: {
            connect: { id: faker.helpers.arrayElement(podcastIds) },
          },
        }),
        author: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
      },
    });
  }

  // NOTIFICATIONS
  for (let i = 0; i < 100; i++) {
    const notificationType = faker.helpers.enumValue(NotificationType);

    await prisma.notification.create({
      data: {
        owner: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
        actionBy: {
          connect: {
            id: faker.helpers.arrayElement(userIds),
          },
        },
        type: notificationType,
        ...(notificationType !== NotificationType.follow && {
          post: {
            connect: { id: faker.helpers.arrayElement(postIds) },
          },
        }),
        read: faker.datatype.boolean(),
      },
    });
  }
}

main();
