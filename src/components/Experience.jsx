import { motion } from "framer-motion";

const Experience = () => {

  const container = {
    hidden: {
      opacity: 0,
      x : -30,
    },
    visible: {
      opacity: 1,
      x : 0,
    }
  }

    return (
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-auto w-[100%]"
      >
        <main className="overflow-auto max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
          <span>
            <img src="/logo.png" alt="" />
          </span>
          <h1 className="__className_399708  text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-3">
            {" "}
            Experience
          </h1>
          <h1 className="__className_399708 text-base md:text-xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black mb-1">
            {" "}
            Front-End Developer
          </h1>
          <p className="font-semibold text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
            E-Skill
          </p>
          <p className="font-semibold text-secondary text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
            October 2023 - Current 2024
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary mt-4">
            During my internship at E-Skill, I had the opportunity to immerse
            myself in a dynamic and innovative environment, where I contributed
            to various development projects and honed my technical skills. My
            key responsibilities and achievements included:
          </p>
          <ul>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Front-End Development:
                </span>{" "}
                Assisted in the development and maintenance of web applications
                using technologies such as React. Focused on building responsive
                and user-friendly interfaces, ensuring seamless integration with
                back-end services. Contributed to enhancing the user experience
                and optimizing performance.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Debugging and Troubleshooting:
                </span>{" "}
                Identified and resolved bugs and performance issues in front-end
                codebases. Utilized debugging tools and techniques to improve
                application stability and enhance the user experience
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Learning and Development
                </span>{" "}
                Took advantage of the learning resources and mentorship
                available at E-Skill to continuously improve my technical skills
                and stay updated with the latest industry trends and best
                practices.
              </p>
            </li>
            <li className="list-disc">
              <p className="text-sm lg:text-base font-normal text-secondary mt-4">
                <span className="bg-neutral-200 p-1">
                  Feature Implementation:
                </span>{" "}
                Implemented new features and enhancements based on user feedback
                and business requirements. Developed reusable components and
                optimized code for better performance and scalability.
              </p>
            </li>
          </ul>
        </main>
      </motion.section>
    );
};

export default Experience;
