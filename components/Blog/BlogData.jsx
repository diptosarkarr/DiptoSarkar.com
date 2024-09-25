import Blog1 from '@/public/images/how-to-learn-web-development.jpg'


export const blogData = {
    mainData: {
        title: "Blog",
        title2: "Latest Blog Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    posts: [
        {
            title: 'Learn Full-Stack Web Development by Own in 2024',
            slug: 'learn-full-stack-2024',
            description: 'Discover effective strategies and resources to master full-stack web development on your own in 2024. Equip yourself with both front-end and back-end skills, and become a proficient full-stack developer.',
            keywords: 'Full-Stack Development, Learning Web Development, Self-Study, 2024',
            category: 'Web Development',
            date: 'Sept 24',
            postedBy: 'Dipto Sarkar',
            image: Blog1,
            content: `
                <div class="row g-4 mt-2">
                    <div class="col-12">
                        <h4 class="fw-medium">Introduction</h4>
                        <p>Learning full-stack web development can be a rewarding journey, offering numerous opportunities in the tech industry. In 2024, with the plethora of online resources and communities, learning these skills by yourself is more accessible than ever. Here's a step-by-step guide to becoming a full-stack web developer.</p>
                    </div>
                    <div class="col-12">
                        <h4 class="fw-medium">Step-by-Step Guide</h4>
                        <ul class="list-circle">
                            <li><strong>Start with the Basics:</strong> Begin with understanding the core technologies of front-end development—HTML, CSS, and JavaScript. Websites like MDN Web Docs and freeCodeCamp offer comprehensive tutorials.</li>
                            <li><strong>Learn Front-End Frameworks:</strong> Once you're comfortable with the basics, move on to libraries and frameworks like React.js or Vue.js. These enable you to build dynamic and responsive user interfaces.</li>
                            <li><strong>Dive into Back-End Development:</strong> Learn server-side programming with languages like Node.js or Python (using frameworks like Express.js for Node and Django for Python). Understand how to handle databases, server logic, and APIs.</li>
                            <li><strong>Practice with Projects:</strong> Apply your knowledge by working on projects. Start with simple applications and gradually take on more complex projects to build your portfolio. Platforms like GitHub are essential for version control and showcasing your work.</li>
                            <li><strong>Understand DevOps and Deployment:</strong> Learn about deploying your web applications using services like Heroku, AWS, or DigitalOcean. Understanding CI/CD (Continuous Integration/Continuous Deployment) pipelines can be beneficial.</li>
                            <li><strong>Stay Updated & Network:</strong> Technology evolves rapidly. Follow industry trends through blogs, forums, and social media. Join developer communities to network and stay informed about the latest developments.</li>
                        </ul>
                    </div>
                </div>
            `,
            images: [
                // { image: Image },
                // { image: Image }
            ],
            tags: [
                { name: 'Full-Stack' },
                { name: 'Web Development' },
                { name: 'Self-Learning' }
            ]
        }

    ],

};