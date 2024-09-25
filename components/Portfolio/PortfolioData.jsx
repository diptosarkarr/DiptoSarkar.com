import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/col-1.jpg';
//QuickBuy
import QuickBuyFront from '@/public/images/quickbuy-ecom/quickbuy-front.jpg'
import QuickBuy1 from '@/public/images/quickbuy-ecom/quickbuy1.jpg'
import QuickBuy2 from '@/public/images/quickbuy-ecom/quickbuy2.jpg'
import QuickBuy3 from '@/public/images/quickbuy-ecom/quickbuy3.jpg'
//Business 1
import Business1Front from '@/public/images/business1/business1-front.jpg'
import Business11 from '@/public/images/business1/business1.jpg'
import Business12 from '@/public/images/business1/business2.jpg'
import Business13 from '@/public/images/business1/business3.jpg'
//WebApp1
import WebApp1Front from '@/public/images/webapp1/webapp1-front.jpg'
import WebApp11 from '@/public/images/webapp1/webapp1.jpg'
import WebApp12 from '@/public/images/webapp1/webapp2.jpg'
import WebApp13 from '@/public/images/webapp1/webapp3.jpg'
//APi1
import API1Front from '@/public/images/api1/api1-front.jpg'
import API11 from '@/public/images/api1/api1.jpg'
import API12 from '@/public/images/api1/api2.jpg'

//imageSrc - 420x420
//mainImage, images - 864x539
export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent Works",
        description: "Discover cutting-edge web projects that showcase my MERN stack expertise and dedication to exceptional digital experiences."
    },
    navigationList: [
        {
            title: "Web App",
            classes: "web-app",
            dataFilter: ".web-app"
        },
        {
            title: "Website",
            classes: "website",
            dataFilter: ".website"
        },
        {
            title: "API",
            classes: "api",
            dataFilter: ".api"
        },
    ],
    projects: [
        {
            projectTitle: 'AI Product Review Web APP',
            slug: 'ai-pr-app',
            description: `Discover my innovative AI Product Review Web App, 
            developed using the ChatGPT API and custom algorithms tailored to 
            provide insightful and accurate product reviews. This web application 
            leverages advanced machine learning techniques to analyze product data 
            and generate comprehensive reviews, enhancing user decision-making and 
            improving the overall shopping experience. By integrating a user-friendly 
            interface with powerful AI capabilities, this project showcases my expertise 
            in modern web development and artificial intelligence.`,
            keywords: 'AI, Machine Learning, Web App, Product Reviews',
            category: 'web-app',
            services: 'API Development, Front-End Development',
            client: 'Komomedia.io',
            duration: '1000+ hours',
            imageSrc: WebApp1Front,
            mainImage: WebApp11,
            categories: [
                { name: 'AI' },
                { name: 'Machine Learning' },
                { name: 'Web App' }
            ],
            images: [
                { image: WebApp12 },
                { image: WebApp13 },
            ]
        },
        {
            projectTitle: 'Business Website Development',
            slug: 'business-1',
            description: `Comprehensive Business Website, developed with a 
            ReactJS front-end and Node.js back-end. This project exemplifies my commitment 
            to delivering high-performance, responsive, and user-friendly web applications. 
            The site integrates dynamic content management, offering seamless navigation 
            and an engaging user experience. By leveraging modern web development practices 
            and robust API structures, this project underscores our expertise in full-stack 
            development and custom solutions tailored to meet business needs.`,
            keywords: 'Web Development, Business Website, ReactJS, Node.js, Full-Stack',
            category: 'website',
            services: 'Full-Stack Development, API Integration',
            client: 'Cambridge Flair',
            duration: '200+ hours',
            imageSrc: Business1Front,
            mainImage: Business11,
            categories: [
                { name: 'Web Development' },
                { name: 'ReactJS' },
                { name: 'Node.js' },
                { name: 'Business Solutions' }
            ],
            images: [
                { image: Business12 },
                { image: Business13 },
            ]
        },
        {
            projectTitle: 'E-commerce Website Development',
            slug: 'e-commerce-website',
            description: `Step into the future of online retail with my state-of-the-art 
            E-commerce Website, developed with a ReactJS front-end and Node.js back-end. 
            This project highlights my expertise in creating scalable, high-performance 
            e-commerce solutions that are both user-friendly and feature-rich. With 
            dynamic product listings, secure payment integrations, and efficient order 
            management, the platform ensures an exceptional shopping experience. Our 
            modern web development practices and robust API structures are tailored to 
            meet the demanding needs of e-commerce businesses, enhancing customer 
            engagement and driving sales growth.`,
            keywords: 'E-commerce, Web Development, ReactJS, Node.js, Online Retail',
            category: 'website',
            services: 'Full-Stack Development, API Integration, Payment Gateway Integration, UI/UX Design',
            client: 'Quick Buy',
            duration: '300+ hours',
            imageSrc: QuickBuyFront,
            mainImage: QuickBuy1,
            categories: [
                { name: 'E-commerce' },
                { name: 'ReactJS' },
                { name: 'Node.js' },
                { name: 'Web Development' }
            ],
            images: [
                { image: QuickBuy2 },
                { image: QuickBuy3 },
            ]
        },
        {
            projectTitle: 'API Development with Digistore24 Integration',
            slug: 'digistore24-api',
            description: `Cutting-edge API Development project leveraging 
            the Digistore24 API, with a Node.js and Express.JS. 
            This project underscores my ability to integrate complex payment and 
            product management systems, enabling seamless transactions and product 
            listings for online businesses.`,
            keywords: 'API Development, Digistore24, ReactJS, Node.js, Payment Integration',
            category: 'api',
            services: 'API Development, Payment Gateway Integration, Front-End Development, Back-End Development',
            client: 'NDA (Cannot Disclose)',
            duration: '400+ hours',
            imageSrc: API1Front,
            mainImage: API11,
            categories: [
                { name: 'API Development' },
                { name: 'ReactJS' },
                { name: 'Node.js' },
                { name: 'Payment Integration' }
            ],
            images: [
                { image: API12 },
                { image: API11 },
            ]
        },
    ]
};