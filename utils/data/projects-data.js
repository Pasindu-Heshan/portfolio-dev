import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Thumbnail Rating System',
        description: "As a full stack developer, I built a React JS app where YouTube creators upload thumbnails for ratings based on image quality metrics like color and contrast. A CNN model in Python evaluates the thumbnails, and Flask handles the backend API for image processing.",
        tools: ['React', 'Python', 'Flask', 'InceptionV3', 'Resnet50'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Eye Disease Detection System',
        description: 'As a backend developer in a group project, I worked on a Python and Flask-based system that uses CNNs to detect eye diseases from images. The backend processes medical images for real-time predictions to assist healthcare professionals in diagnosis.',
        tools: ['Flutter', 'Python', "Flask", 'CNN'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI powered medical transcription App',
        description: 'Developed a medical transcription system using ReactJS and Firebase. Utilized Firebase Cloud Functions, Authentication, Pub/Sub, and Google Speech-to-Text AI to streamline transcription tasks for doctors.',
        tools: ['React', 'Firebase', 'TypeScript', 'Google speech to text API', 'Cronjob'],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Dev Sync',
        description: "As a full stack developer, I built a platform to connect developers for pair programming. The app, developed with Next.js and styled using Tailwind and Shadcn, allows users to find programming partners and collaborate through integrated video and screen-sharing features. Typescript was used to ensure type safety and maintainability across the project.",
        tools: ['NextJS', 'Shadcn-ui', 'zustand'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },