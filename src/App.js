import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [card2State, setCard2State] = useState("center"); // Initial state for Card 2
  const [showAll, setShowAll] = useState(false); // State to trigger the rest of the animations

  useEffect(() => {
    // Transition Card 2 to normal and show other cards after 2 seconds
    const timer = setTimeout(() => {
      setCard2State("normal");
      setShowAll(true);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Variants for Card 2 to control its centered and normal positions
  const card2Variants = {
    center: { opacity: 1, scale: 1.2, x: 0, y: 0, zIndex: 10 },
    normal: { opacity: 1, scale: 1, x: 0, y: 0, zIndex: 0 ,transition: { duration:1 }},
  };

  // Variants for other cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1, // Stagger animation for children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration:1 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration:1 } },
  };

  return (
    <div className="min-h-screen bg-black text-[#EDE8D4] p-2 flex flex-col gap-2">
      {/* Header */}
      <motion.header
        className="flex justify-between items-center text-[#4E4C45] rounded-lg bg-[#D4C7B4] px-4 py-3 min-h-[10dvh]"
        variants={headerVariants}
        initial="hidden"
        animate={showAll ? "show" : "hidden"}
      >
        <h1 className="text-2xl font-bold">Dev</h1>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Weddings</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </motion.header>

      <motion.div
        className="flex flex-col md:flex-row gap-2 min-h-[86dvh]"
        variants={containerVariants}
        // initial="hidden"
        // animate={showAll ? "show" : "hidden"}
      >
        <motion.div
          className="grid grid-cols-12 gap-2 min-w-[65%]"
          variants={containerVariants}
        >
          <motion.div
            className="card col-span-12 md:col-span-8 bg-[#D4C7B4] text-[#4E4C45] p-5 rounded-lg flex items-center justify-center text-center"
            variants={cardVariants}
            initial="hidden"
            animate={showAll ? "show" : "hidden"}
          >
            {/* Content for Card 1 */}
          </motion.div>

          <motion.div
            className="card col-span-12 md:col-span-4 bg-[#4B4A45] rounded-lg  min-h-[30dvh]"
            variants={card2Variants}
            initial="center"
            animate={showAll ? "normal" : "center"} // Dynamically controlled by card2State
          >
            {/* Content for Card 2 */}
          </motion.div>

          <motion.div
            className="card col-span-12 md:col-span-6 bg-[#D4C7B4] text-[#4E4C45] p-6 rounded-lg"
            variants={cardVariants}
            initial="hidden"
            animate={showAll ? "show" : "hidden"}
          >
            {/* Content for Card 3 */}
          </motion.div>

          <motion.div
            className="card col-span-12 md:col-span-6 bg-[#4B4A45] p-6 rounded-lg"
            variants={cardVariants}
            initial="hidden"
            animate={showAll ? "show" : "hidden"}
          >
            {/* Content for Card 4 */}
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col w-full gap-2" variants={cardVariants}>
          <motion.div className="bg-[#D4C7B4] p-6 rounded-lg min-h-[65dvh]" variants={cardVariants} initial="hidden"
            animate={showAll ? "show" : "hidden"}>
            {/* Additional content */}
          </motion.div>
          <motion.div className="bg-[#D4C7B4] p-6 rounded-lg h-full" variants={cardVariants} initial="hidden"
            animate={showAll ? "show" : "hidden"}>
            {/* Additional content */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
