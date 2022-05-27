const grocery_helper = {
    title: 'Grocery Helper',
    githubUrl: 'https://github.com/NTielman/Grocery_helper',
    demoUrl: 'https://hungry-jennings-92ae10.netlify.app',
    shortDescription: 'A web app that keeps track of your groceries list and cart items',
    longDescription: 'A web application that keeps track of your grocery list and the items already in your cart.',
    tools: [
        'React',
        'JavaScript',
        'CSS',
        'HTML'],
    image: '/assets/images/projects/devProjects/groceryHelper.jpg',
    webpImage: '/assets/images/projects/devProjects/groceryHelper.webp',
    key: 0
}

const lil_playlist = {
    title: 'Playlist',
    githubUrl: 'https://github.com/NTielman/Lil_Playlist',
    demoUrl: 'https://hardcore-thompson-95495f.netlify.app',
    shortDescription: 'A web app to organize your music',
    longDescription: 'A single-page application (SPA) that allows you to add, sort, filter, and organize your music.',
    tools: [
        'React',
        'Redux',
        'JavaScript',
        'CSS',
        'HTML'],
    image: '/assets/images/projects/devProjects/lilPlaylist.jpg',
    webpImage: '/assets/images/projects/devProjects/lilPlaylist.webp',
    key: 1
}

const student_dashboard = {
    title: 'Student Dashboard',
    githubUrl: 'https://github.com/NTielman/Student_Dashboard',
    demoUrl: 'https://eloquent-darwin-440c3c.netlify.app',
    shortDescription: 'A dashboard that displays student satisfaction numbers',
    longDescription: 'Built a dashboard that displays how satisfied students are with the assignments they received from their university/ academy, using charts and tables to visualize the data.',
    tools: [
        'React',
        'Redux',
        'JavaScript',
        'CSS',
        'HTML',
        'Chart.js'],
    image: '/assets/images/projects/devProjects/dashboard.jpg',
    webpImage: '/assets/images/projects/devProjects/dashboard.webp',
    key: 2
}

const superpy = {
    title: 'SuperPy',
    githubUrl: 'https://github.com/NTielman/superPy',
    demoUrl: '',
    shortDescription: 'A CLI tool for creating and tracking an inventory',
    longDescription: "Developed a command-line interface tool, using argparse, that keeps track of a (supermarket's) inventory, and is able to produce various reports (expiration report, sales report, purchases, low stock, best-selling items, etc.) for that inventory.",
    tools: [
        'Python'],
    image: '/assets/images/projects/devProjects/superpy.jpg',
    webpImage: '/assets/images/projects/devProjects/superpy.webp',
    key: 3
}

const betsy = {
    title: 'Betsy',
    githubUrl: 'https://github.com/NTielman/Betsy',
    videoDemoUrl: 'https://www.youtube.com/watch?v=gcu0Do8sEho',
    shortDescription: 'A multi-vendor marketplace modeled after Etsy',
    longDescription: "Created a multi-vendor marketplace modeled after Etsy. Using SQLite, modeled a database that stores a user's information, the products they sell, the tags and images associated with each product, and a user's transactions on the site. Implemented Peewee ORM to query and retrieve data from the database. Built a front-end for the application using Flask, and attempted to create a near-identical clone to the original Etsy site by using Bulma (CSS framework).",
    tools: [
        'Python',
        'Flask',
        'CSS',
        'Bulma',
        'HTML',
        'SQLite',
        'Peewee'],
    image: '/assets/images/projects/devProjects/betsy.jpg',
    webpImage: '/assets/images/projects/devProjects/betsy.webp',
    key: 4
}

const wincHackathon = {
    title: 'Boss Button',
    githubUrl: 'https://github.com/NTielman/Boss-button',
    demoUrl: 'https://unruffled-lichterman-d3e059.netlify.app/',
    shortDescription: 'Hackathon project - creating a button with surprising effects',
    longDescription: "Participated in Winc Academy's 'best button' hackathon. Collaborated with team members by making use of VsCode's Live Share extension, which allowed us to share a live server and code simultaneously in the same files. Our team came up with the combined idea of making a button that multiplies on click, and whose 'child buttons' all have differing effects. My tasks: Wrote the user story as a guideline for how the final site experience should look and feel. Developed the 'water' and 'cat' buttons. Responsible for the site's design and fixing animations.",
    tools: [
        'CSS',
        'HTML',
        'JavaScript'],
    image: '/assets/images/projects/devProjects/bestButton.jpg',
    webpImage: '/assets/images/projects/devProjects/bestButton.webp',
    key: 5
}

const portfolio = {
    title: 'Portfolio',
    githubUrl: 'https://github.com/NTielman/Portfolio',
    shortDescription: 'A portfolio website showcasing personal projects',
    longDescription: "This is the website you are viewing right now. Using React built a portfolio website that allows users to toggle between designer and developer mode and view past and current projects. Designed 2 interactive homepages and 2 projectcards that react to the user's cursor movements.",
    tools: [
        'React',
        'Redux',
        'JavaScript',
        'CSS',
        'HTML',
        'parallax.js'],
    image: '/assets/images/projects/devProjects/portfolio.png',
    webpImage: '/assets/images/projects/devProjects/portfolio.webp',
    key: 6
}

const tarot = {
    title: 'Tarot Api',
    githubUrl: 'https://github.com/NTielman/Tarot-Reader',
    demoUrl: 'https://awesome-albattani-455531.netlify.app/',
    shortDescription: 'Find out what the future holds for you with this Tarot reader',
    longDescription: "Using a public tarot API in combination with a printable tarot deck found online, I created a web app that provides users with daily tarot readings as well as an image library where users can learn the meanings behind all 78 cards.",
    tools: [
        'Vue',
        'JavaScript',
        'CSS',
        'HTML'],
    image: '/assets/images/projects/devProjects/tarot.jpg',
    webpImage: '/assets/images/projects/devProjects/tarot.webp',
    key: 7
}

const hamiltonApi = {
    title: 'Hamilton Api',
    githubUrl: 'https://github.com/NTielman/hamilton-api',
    videoDemoUrl: 'https://www.youtube.com/watch?v=pqT8HnUO_Q8',
    shortDescription: 'A RESTful API containing information on the Hamilton musical',
    longDescription: "Using FastAPI and Peewee designed a relational database of the Hamilton musical and created a REST API for querying the database. API contains information on the cast, musical tracks, and roles found in the Hamilton musical",
    tools: [
        'Python',
        'FastAPI',
        'Peewee',
        'SQLite',
        'Uvicorn'],
    image: '/assets/images/projects/devProjects/hamilton.jpeg',
    webpImage: '/assets/images/projects/devProjects/hamilton.webp',
    key: 8
}

// reverse array to ensure last projects added to array appear on top
export const featured_projects = [grocery_helper, lil_playlist, student_dashboard, superpy, betsy, wincHackathon, portfolio, tarot, hamiltonApi].reverse()