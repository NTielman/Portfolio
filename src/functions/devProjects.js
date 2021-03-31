const grocery_helper = {
    title: 'Grocery Helper',
    githubUrl: 'https://github.com/NTielman/Grocery_helper',
    demoUrl: 'https://hungry-jennings-92ae10.netlify.app',
    shortDescription: 'A web app that keeps track of your groceries list and cart items',
    longDescription: 'A web application that keeps track of your groceries list and the items already in your cart.',
    tools: [
        'React',
        'JavaScript',
        'CSS',
        'HTML'],
    image: '/assets/images/projects/devProjects/groceryHelper.jpg',
    key: 0
}

const lil_playlist = {
    title: 'Lil Playlist',
    githubUrl: 'https://github.com/NTielman/Lil_Playlist',
    demoUrl: 'https://hardcore-thompson-95495f.netlify.app',
    shortDescription: 'A web app to organize your music',
    longDescription: 'An SPA that allows you to add, sort, filter and organise your music.',
    tools: [
        'React',
        'Redux',
        'JavaScript',
        'CSS',
        'HTML'],
    image: '/assets/images/projects/devProjects/lilPlaylist.jpg',
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
    key: 2
}

const superpy = {
    title: 'SuperPy',
    githubUrl: 'https://github.com/NTielman/superPy',
    demoUrl: '',
    shortDescription: 'A CLI Tool for creating and tracking an inventory',
    longDescription: "Developed a CLI Tool, using argparse, that keeps track of a (supermarket's) inventory, and is able to produce various reports (expiration report, sales report, purchases, low stock, best selling items etc.) for that inventory.",
    tools: [
        'Python'],
    image: '/assets/images/projects/devProjects/superpy.jpg',
    key: 3
}

const betsy = {
    title: 'Betsy',
    githubUrl: 'https://github.com/NTielman/Betsy',
    demoUrl: '',
    shortDescription: 'A multi-vendor marketplace modeled after Etsy',
    longDescription: "Created a multi-vendor marketplace modeled after Etsy. Using SQLite, modeled a database that stores a user's information, the products they sell, the tags and images associated with each product, and a user's transactions on the site. Implemented Peewee ORM to query and retreive data from the database. Built a front-end for the application using Flask, and attempted to create a near identical clone to the original Etsy site by using Bulma (CSS framework).",
    tools: [
        'Python',
        'Flask',
        'CSS',
        'Bulma',
        'HTML',
        'SQLite',
        'Peewee'],
    image: '/assets/images/projects/devProjects/betsy.jpg',
    key: 4
}

const wincHackathon = {
    title: 'Boss Button',
    githubUrl: 'https://github.com/WincAcademy/hackathon-0-hongerige-huismuizen',
    demoUrl: 'https://unruffled-lichterman-d3e059.netlify.app/',
    shortDescription: 'Entry project for the winc "best button" hackathon',
    longDescription: "Participated in Winc Academy's 'best button' hackathon. Collaborated with team-members by making use of VsCode's Live Share extension, which allowed us to share a live server and code simultaneuously in the same files. Our team came up with the combined idea of making a button that multiplies onClick, and whose 'child-buttons' all have differing effects. My tasks: Wrote the user story as guideline for how the final site experience should look and feel like. Developed the 'water' and 'cat' buttons. Responsible for the site's design and fixing animations",
    tools: [
        'CSS',
        'HTML',
        'JavaScript'],
    image: '/assets/images/projects/devProjects/bestButton.jpg',
    key: 5
}

export const featured_projects = [grocery_helper, lil_playlist, student_dashboard, superpy, betsy, wincHackathon]