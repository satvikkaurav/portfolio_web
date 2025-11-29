import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Project } from "@/components/Project";
import { FooterBlob } from "@/components/footerblob";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Profiles } from "@/components/Profiles";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { ThemeProvider } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Metadata } from 'next';
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projects = [
    {
      name: "TaskTribe",
      description: [
        "Habit-building application focused on group and partner accountability with real-time habit tracking.",
        "Built with React, TypeScript, Firebase, and Tailwind CSS, deployed on Vercel for scalable performance.",
      ],
      image: "/images/projects/tasktribe.png",
      link: "https://task-tribe.vercel.app/splashscreens",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "E-Vendor",
      description: [
        "Vendor marketplace platform with secure phone and email authentication and end-to-end vendor–user workflows.",
        "Implemented real-time inventory management, wishlist, vendor dashboards, and location-based services.",
        "Used Next.js, TypeScript, Firebase, AWS S3, and Tailwind CSS to build a production-ready web application.",
      ],
      image: "/images/projects/evendor.png",
      link: "https://alumniconnect.vercel.app/a",
      technologies: ["Next.js", "MongoDB", "Node.js", "Express"],
    },
    {
      name: "Housing Data EDA",
      description: [
        "Performed EDA on the housing data for feature selection and getting insights, using different Encoding Techniques",
        "Developed a pipeline for doing sequence of transformations",
        "Trained model using multiple models and fine-Tuned model using GridSearchCV",
      ],
      image: "/images/projects/eda.png",
      link: "https://github.com/satvikkaurav/housing-data-analysis",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    },
    {
      name: "Sign Language Recognition",
      description: [
        "Collect custom dataset using OpenCV and Preprocessed dataset using various functionalities of OpenCV",
        "Applied CNN to the dataset using TensorFlow keras",
        "Created a UI using Tkinter for the recognition of real time Sign Language given by user using webcam",
      ],
      image: "/images/projects/tasktribe.png",
      link: "https://github.com/satvikkaurav/sign-language-recg-cnn",
      technologies: ["Python", "TensorFlow", "OpenCV", "Tkinter"],
    },
  ];
  
  return (
    <ThemeProvider>
      <main className="bg-gray-900 dark:bg-gray-50 min-h-screen transition-colors duration-300">
        <Head>
          <title>Satvik Kaurav</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 pt-4 mt-20 pb-20 mb-44 px-4"
          >
            <div className="flex gap-5 flex-col justify-center flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex uppercase text-teal-500 dark:text-teal-600 font-medium tracking-wide"
          >
            Software Engineer · Backend, Computer Vision & Full-Stack
          </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex text-5xl font-medium text-white dark:text-gray-900"
              >
                Hello, my name is Satvik Kaurav
              </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex text-gray-400 dark:text-gray-600 max-w-xl"
          >
            Software Engineer at Kloudspot with experience in low-latency computer vision systems, distributed backends, and cloud-native products.
          </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-2"
              >
                <Link
                  href="https://drive.google.com/file/d/1Wej-p7lSnZyL6RWRVUXiltZKFANwfXBb/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Resume
                  </motion.button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/satvik-kaurav/"
                  target="_blank"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border border-white dark:border-gray-900 text-white dark:text-gray-900 rounded-lg hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
                  >
                    LinkedIn
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-column justify-center flex-1 object-cover"
            >
              <img src="/images/profile_n.svg" className="w-full h-auto" alt="Profile" />
            </motion.div>
          </motion.div>

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Experience Section */}
          <Experience />

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-white dark:text-gray-900 mb-2"
            >
              Projects
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-teal-500 dark:bg-teal-600 mx-auto mb-12"
            />

            <div className="space-y-12">
              {projects.map((project, index) => (
                <Project key={index} data={project} flag={index % 2 === 1} />
              ))}
            </div>
          </section>

          {/* Coding Profiles Section */}
          <Profiles />

          {/* Certifications Section */}
          <Certifications />

          {/* Contact Section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
        <FooterBlob />
      </main>
    </ThemeProvider>
  );
}
