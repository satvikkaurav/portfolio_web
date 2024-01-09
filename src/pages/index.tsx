import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Project } from "@/components/project";
import { FooterBlob } from "@/components/footerblob";
import { Footer } from "@/components/footer";
import { useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    {
      name: "TaskTribe",
      description: [
        "Habit building application enabling Group and Partner Accountability and Habit Tracking",
        "Used Firebase (for backend) ,Tailwind css, Typescript and deployed on vercel",
      ],
      image: "/images/projects/tasktribe.png",
      link: "https://task-tribe.vercel.app/splashscreens",
    },
    {
      name: "E-Vendor",
      description: [
        "Implemented authentication via phone and email",
        "Developed users and vendor management allowing for Wishlist, Edit Users, Add Product, etc",
        "Created Automatic Location Fetching, Inventory management, utilized React-hot-toast"
      ],
      image: "/images/projects/tasktribe.png",
      link: "https://alumniconnect.vercel.app/a",
    },
    {
      name: "Housing Data EDA",
      description: [
        "Performed EDA on the housing data for feature selection and getting insights, using different Encoding Techniques",
        "Developed a pipeline for doing sequence of transformations",
        "Trained model using multiple models and fine-Tuned model using GridSearchCV",
      ],
      image: "/images/projects/tasktribe.png",
      link: "https://github.com/satvikkaurav/housing-data-analysis",
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
    },
  ];
  
  return (
    <main>
      <div className="max-w-screen-lg mx-auto">
        {/* Header */}
        <Header />

        <div className="flex flex-col sm:flex-row gap-5 pt-4 mt-40 mb-44">
          <div className="flex gap-5 flex-col justify-center flex-1 px-10">
            <div className="flex uppercase text-yellow-500 font-medium">
              Software Developer
            </div>
            <div className="flex text-5xl font-medium">
              Hello, my name is Satvik Kaurav
            </div>
            <div className="flex text-gray-500">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </div>
            <div className="flex gap-2">
              <Link
                href={
                  "https://drive.google.com/file/d/1QbeOzCzrGlFU3ooP9CgFZDM-BY99R1yQ/view?usp=drive_link"
                }
                target="blank"
              >
                <button className="px-6 py-1 bg-teal-500 text-white rounded-lg">
                  Resume
                </button>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/satvik-kaurav/"}
                target="blank"
              >
                <button className="px-6 py-1 border border-black rounded-lg">
                  Linkedin
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-column justify-center flex-1 object-cover">
            <img src="/images/profile_n.svg" className=""></img>
          </div>
        </div>

        {/*  */}
       
        <div  id='projects' className="flex flex-col mt-10">
          <h2 className="font-semibold mx-auto text-3xl">Projects</h2>
          <div className="border rounded-sm border-teal-500 mt-1 w-[4rem] mx-auto mb-6"></div>

          <div className="flex flex-col gap-5">
            {data.map((d, key) => {
              console.log(key);
              return <Project flag={key % 2} data={d} key={key} />;
            })}
          </div>
        </div>
        <a href="#projects"></a>

        {/*  Footer */}
        <Footer />
      </div>
      <FooterBlob />
    </main>
  );
}
