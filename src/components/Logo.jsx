import { Link } from "react-router-dom";
// import { Dumbbell } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
    
 <div>
  <img src ="/logo1.png" alt="logo" className="h-10 w-20 sm:h-12 sm:w-24 lg:h-14 lg:w-28 object-center object-cover" />
 
 </div>
      
    </Link>
  );
}
