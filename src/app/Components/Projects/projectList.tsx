import { projectParams } from "@/app/Types/Types";

export const projectList: projectParams[] = [
  // Rosé Picnic
  {
    title: "Rosé Picnic",
    info: {
      name: ".rosePicnic",
      type: "freelance contract",
      role: "lead developer",
      status: "completed",
    },
    tags: [
      "Typescript",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Git",
      "Vercel",
      "CLIs",
      "Wordpress",
      "Google Analytics",
      "Photoshop",
    ],
    summary: (
      <p>
        As the lead engineer for the Rosé Picnic platform, I architected and
        deployed a full-stack exhibitor portal that automated onboarding and
        coordination for event vendors. Built with Next.js, Node.js, PostgreSQL,
        and integrated with Google Cloud, the portal allowed vendors to upload
        required documents, register team members, specify setup requirements,
        and opt into additional services. I also engineered an internal admin
        dashboard with advanced filters and real-time payment tracking,
        significantly improving vendor management workflows.
        <br />
        <br />
        Additionally, I led the complete redesign of the public-facing website,
        migrating from WordPress to Next.js to boost performance, accessibility,
        and SEO. These improvements drove a 20% increase in user engagement and
        an 18% boost in ticket sales. Collaborating with the marketing team, I
        leveraged Google Analytics to analyze user behavior and shipped
        data-driven UI enhancements to optimize conversions.
        <br />
        <br />
        To support fast, reliable iteration, I implemented a CI/CD pipeline
        using GitHub Actions and Vercel for automated testing and zero-downtime
        deployments. I also developed a modular UI component library,
        accelerating new feature development by 35% while ensuring brand
        consistency across the site.
      </p>
    ),
    pictures: [
      "/Projects/EP1.png",
      "/Projects/EP2.png",
      "/Projects/EP3.png",
      "/Projects/EP4.png",
      "/Projects/EP5.png",
      "/Projects/EP6.png",
      // -----
      "/Projects/RP1.png",
      "/Projects/RP2.png",
      "/Projects/RP3.png",
      "/Projects/RP4.png",
      "/Projects/RP5.png",
      "/Projects/RP6.png",
      "/Projects/RP7.png",
    ],
    link: "https://www.rosepicnic.com/",
    slug: "rose-picnic",
  },
  // Toronto Musicians Hub
  {
    title: "Toronto Musicians Hub",
    info: {
      name: ".torontoMusiciansHub",
      type: "startup",
      role: "co-founder & CTO",
      status: "ongoing",
    },
    tags: [
      "Typescript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Git",
      "Vercel",
      "Firebase",
      "Shopify",
      "GraphQL",
    ],
    summary: (
      <p>
        I designed and built a scalable, user-friendly event website using
        Next.js, focusing on accessibility and a seamless user experience.
        Through A/B testing and analyzing user behavior with tools like
        Mouseflow, I refined layouts to remove barriers to conversions and drive
        higher engagement. To keep the site running smoothly, I implemented
        CI/CD pipelines with Vercel and GitHub, enabling bug-free zero-downtime
        deployments and quick updates. <br />
        <br />
        Integrating Shopify for e-commerce, I developed sales tracking workflows
        and tailored post-purchase experiences using Liquid scripting. To
        support affiliates and partners, I built automated dashboards with
        Node.js and Shopify's GraphQL API, making it easy to track ticket sales
        and payouts.
        <br />
        <br />
        Outside of development, I led marketing efforts through email campaigns
        and social media. I automated audience segmentation in Mailchimp,
        improving campaign efficiency by 40%, and grew our social media
        following by 2,200 in just eight months through creative content
        creation. By combining technical skills with thoughtful design and
        automation, I delivered a platform that not only enhanced user
        experience but also simplified operations for everyone involved.
      </p>
    ),
    pictures: [
      "/Projects/TM1.png",
      "/Projects/TM2.png",
      "/Projects/TM3.png",
      "/Projects/TM4.png",
      "/Projects/TM5.png",
      "/Projects/TM6.png",
    ],
    link: "https://www.tomusicians.com/",
    slug: "toronto-musicians-hub",
  },
  // QuantumApps
  {
    title: "QuantumApps",
    info: {
      name: ".quantumApps",
      type: "freelance project",
      role: "full-stack engineer",
      status: "completed",
    },
    tags: [
      "Typescript",
      "Next.js",
      "Tailwind",
      "Git",
      "Vercel",
      "CLIs",
      "Blender",
      "Photoshop",
    ],
    summary: (
      <p>
        I developed a scalable and visually engaging website for QuantumApps
        using Next.js, enabling businesses to easily discover the available
        digital transformation services and book consultation calls. By
        prioritizing interactive elements and streamlining user journeys, we
        increased consultation requests by 20%. <br />
        <br />
        To maximize the browsing experience, I began the project by conducting
        research on UI/UX trends in the digital agency space. With this
        information, I created high-fidelity Figma prototypes, which I then
        translated into reusable code components. I also built an automated page
        generation system, cutting manual development time by 50%.
        <br />
        <br />
        The website features integrations with the SendGrid and Calendly APIs to
        automate email communications and enable straightforward consultation
        booking and rescheduling. These features led to a 30% boost in lead
        conversions and further empowered QuantumApps to connect with clients
        and achieve their digital transformation goals.
      </p>
    ),
    pictures: [
      "/Projects/QA1.png",
      "/Projects/QA2.png",
      "/Projects/QA3.png",
      "/Projects/QA4.png",
      "/Projects/QA5.png",
      "/Projects/QA6.png",
      "/Projects/QA7.png",
      "/Projects/QA8.png",
    ],
    link: "https://www.quantumapps.ca/",
    slug: "quantumapps",
  },
  // Langulife
  {
    title: "Langulife",
    info: {
      name: ".langulife",
      type: "contract",
      role: "full-stack engineer",
      status: "ongoing",
    },
    tags: [
      "Javascript",
      "React Native",
      "Node.js",
      "Redux",
      "Git",
      "CLIs",
      "Figma",
      "Jest",
      "Supabase",
      "PostgeSQL",
      "Google Cloud",
    ],
    summary: (
      <p>
        Langulife is a language learning app that takes a unique approach by
        enabling users to learn foreign languages through real conversations
        with native speakers. It combines interactive voice and text-based
        quizzes, designed get users comfortable with new languages, with social
        features that encourage meaningful interactions. <br /> <br />
        I joined the project in its early stages, stepping in to improve the
        foundation after the initial developer was unable to continue. One of my
        first priorities was identifying areas for optimization, creating a more
        maintainable and scalable standard for developing and testing the app.
        Collaborating closely with designers, the product manager, and
        prospective users, I worked to ensure every aspect of the user
        experience was intuitive, engaging, and aligned with the app's vision.
        <br /> <br />
        Some of the most impactful contributions included optimizing loading
        times by 35% and reducing network traffic by 60% through improved state
        management and caching strategies. I also enhanced app stability by 80%,
        introducing rigorous test-driven development (TDD) practices with Jest
        to catch potential issues early. On the backend, I reengineered critical
        systems using Node.js, PostgreSQL, Supabase, and Google Cloud Platform
        (GCP), improving error handling and data reliability while reducing
        user-facing errors by 20%. On the frontend, I transformed Figma designs
        into dynamic React Native UI components, resulting in a 15% boost in
        user engagement thanks to a cleaner, more intuitive interface.
      </p>
    ),
    pictures: [
      "/Projects/LA2.png",
      "/Projects/LA3.png",
      "/Projects/LA4.png",
      "/Projects/LA5.png",
      "/Projects/LA6.png",
      "/Projects/LA7.png",
      "/Projects/LA8.png",
      "/Projects/LA9.png",
    ],
    link: "",
    slug: "langulife",
  },
  // Little Lemon Reservations
  {
    title: "Little Lemon Reservations",
    info: {
      name: ".littleLemon",
      type: "course project",
      role: "frontend developer",
      status: "completed",
    },
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Figma",
      "Git",
      "Firebase",
      "Command-line Interfaces",
    ],
    summary: (
      <p>
        The Little Lemon reservations web app was the capstone project of the
        Meta Front-End Developer Certification I completed in 2023. It combines
        design with technical foundation, showcasing a highly interactive table
        booking system designed to deliver a seamless and personalized
        experience for restaurant guests.
        <br />
        <br />
        The project included designing an eye-catching landing page for this
        fictional restaurant to create a visually appealing and user-friendly
        introduction to the brand. The core highlight, however, was the dynamic
        reservations page. Built with real-time interactivity, users could input
        their preferences and immediately receive feedback on table
        availability. This was powered by a mocked scheduling API that
        dynamically generated table availability, simulating real-world backend
        functionality.
        <br />
        <br />
        To make the experience as realistic as possible, I implemented
        client-side state management to handle updates seamlessly and optimized
        the user flow for both speed and clarity. The app demonstrates not only
        the technical capabilities gained through the course but also a deep
        understanding of user-centric design, creating a product that is both
        functional and delightful to use.
      </p>
    ),
    pictures: ["/Projects/LL1.png", "/Projects/LL2.png", "/Projects/LL3.png"],
    link: "https://little-lemon-reservations.web.app/",
    slug: "little-lemon-reservations",
  },
  // PixelPraise
  {
    title: "Pixel Praise",
    info: {
      name: ".pixelPraise",
      type: "independent project",
      role: "full stack engineer",
      status: "ongoing",
    },
    tags: [
      "Typescript",
      "React Native",
      "Node.js",
      "Redux",
      "Git",
      "CLIs",
      "Figma",
    ],
    summary: (
      <p>
        PixelPraise is a social app designed to bring photo enthusiasts together
        in a community built around sharing and constructive feedback. The app
        allows users to upload their photos, receive star ratings and comments,
        and browse through a diverse gallery of images from others. With its
        minimalistic and intuitive interface, navigating the app is effortless,
        ensuring an enjoyable and engaging user experience. <br />
        <br />
        I engineered the app's backend and frontend from the ground up,
        achieving a 98% success rate in seamless data transfer through
        custom-built REST APIs. This ensured smooth and uninterrupted
        interactions between users and the app. I prioritized quality and
        reliability by incorporating extensive unit and integration tests with
        Jest, reducing debugging time by 50% and laying the foundation for a
        maintainable and scalable codebase. <br />
        <br />
        The project was powered by a modern tech stack, including TypeScript,
        React Native, Expo, Node.js, Express.js, and MySQL, combining
        cutting-edge tools to deliver a polished and responsive digital
        platform.
      </p>
    ),
    pictures: [
      "/Projects/PP2.png",
      "/Projects/PP3.png",
      "/Projects/PP4.png",
      "/Projects/PP5.png",
      "/Projects/PP6.png",
      "/Projects/PP7.png",
      "/Projects/PP8.png",
      "/Projects/PP9.png",
      "/Projects/PP10.png",
      "/Projects/PP11.png",
      "/Projects/PP12.png",
      "/Projects/PP13.png",
      "/Projects/PP14.png",
      "/Projects/PP15.png",
      "/Projects/PP16.png",
      "/Projects/PP17.png",
    ],
    link: "",
    slug: "pixelpraise",
  },
  // tasQR
  {
    title: "tasQR",
    info: {
      name: ".tasQR",
      type: "collaborative project",
      role: "full-stack developer",
      status: "ongoing",
    },
    tags: ["Typescript", "React Native", "Node.js", "Git", "CLIs", "Framer"],
    summary: (
      <p>
        tasQR is a task app that helps users form better habits and routines in
        their daily lives. Instead of giving users a simple to-do list, with
        tasQR, users register tasks to various QR codes that they can place in
        the vicinity of their specified task. Users will then be able to simply
        scan the QR code to start or end a task. This allows tasQR to track the
        user's completion of tasks and give them reports in the app's dashboard
        so that the users can track their habits and better manage their time!
      </p>
    ),
    pictures: ["/Projects/QR2.png", "/Projects/QR3.png", "/Projects/QR4.png"],
    link: "",
    slug: "tasqr",
  },
  // SickKids
  {
    title: "SickKids PICU Clinic",
    info: {
      name: ".sickKids",
      type: "contract",
      role: "full-stack developer",
      status: "completed",
    },
    tags: ["TypeScript", "React", "Node.js", "Tailwind CSS", "Git", "CLIs"],
    summary: (
      <p>
        The SickKids PICU Clinic site was designed to serve as a comprehensive
        hub for patients and their families, providing all the essential
        information needed for follow-up appointments. The site's flagship
        feature was a smart survey system that guided users to complete required
        pre-appointment surveys while maintaining compliance with privacy
        standards by avoiding the collection of protected health information.
        <br />
        <br />
        I designed and developed the site's accessible and user-friendly
        interface, simplifying the process of accessing appointment information
        and pre-appointment requirements. The intuitive form flow directed
        patients or caregivers to relevant surveys based on their input, while a
        custom-built readiness dashboard allowed users to track their survey
        progress and ensure they were fully prepared for their appointments.
        <br />
        <br />
        Though the website was ultimately not deployed due to JavaScript
        compatibility issues with the existing SickKids CMS, the project
        highlighted my ability to create tailored, privacy-conscious solutions
        that prioritize user experience and accessibility.
      </p>
    ),
    pictures: [
      "/Projects/SK1.png",
      "/Projects/SK2.png",
      "/Projects/SK3.png",
      "/Projects/SK4.png",
      "/Projects/SK5.png",
      "/Projects/SK6.png",
      "/Projects/SK7.png",
      "/Projects/SK8.png",
      "/Projects/SK9.png",
      "/Projects/SK10.png",
    ],
    link: "",
    slug: "sickkids-picu-clinic",
  },
  // TechinTO
  {
    title: "TechinTO",
    info: {
      name: ".techinTO",
      type: "freelance contract",
      role: "frontend developer",
      status: "completed",
    },
    tags: [
      "JavaScript",
      "Tailwind",
      "Next.js",
      "Git",
      "Vercel",
      "CLIs",
      "Photoshop",
    ],
    summary: (
      <p>
        TechinTO is a Toronto-based organization that connects tech
        entrepreneurs, startup teams, and industry professionals through
        in-person events, helping them build relationships, showcase work, and
        discover career prospects. To support this mission, I collaborated with
        their team to deliver a redesigned website that effectively reflected
        their goals and improved community engagement. <br />
        <br />
        I worked closely with UI/UX designers to revamp the website's interface,
        creating interactive pages with Next.js. This redesign improved
        usability and boosted website traffic by 30%. To encourage engagement, I
        implemented a mailing list signup form, integrated with HubSpot via a
        REST API, to subscribe community members to the newsletter, which drove
        a 15% increase in community growth.
        <br />
        <br />I also built a dynamic job board to simplify how the team managed
        job postings. Using markdown files and dynamic routing, I enabled
        instant deployment of new listings, empowering non-technical team
        members to update the board effortlessly. This project provided TechinTO
        with a modern, user-friendly digital platform that strengthened their
        ability to connect Toronto's tech community.
      </p>
    ),
    pictures: [
      "/Projects/TO1.png",
      "/Projects/TO2.png",
      "/Projects/TO3.png",
      "/Projects/TO4.png",
      "/Projects/TO5.png",
      "/Projects/TO6.png",
      "/Projects/TO8.png",
      "/Projects/TO7.png",
    ],
    link: "https://www.techinto.ca/",
    slug: "techinto",
  },
];

// {
//     title: "",
//     info: {
//       name: "",
//       type: "",
//       role: "",
//       status: "",
//     },
//     tags: [
//     ],
//     summary: (
//     ),
//     pictures: [

//     ],
//      link: ""
//      slug: ""
//   },
