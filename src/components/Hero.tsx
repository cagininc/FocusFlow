
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
export default function Hero(){



    return(
        <section
        className="hero h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center "
        style={{ backgroundImage: `url('public/images/focusFlowhero.jpeg')` }}
        >
      <h1 className="text-5xl font-bold text-white mb-4">
        
      </h1>
      <p className="text-xl text-white mb-8">
        
      </p>
      <Link to="/login">
      <motion.button
          className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}   
        >
          Get Started
        </motion.button>
      </Link>
    </section>
    
  
  );
};
