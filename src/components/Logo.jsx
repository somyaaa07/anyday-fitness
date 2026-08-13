import { Link } from "react-router-dom";
// import { Dumbbell } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
    
 <div>
  <img src ="/logo.jpeg" alt="logo" className="h-15 w-20" />
 
 </div>
      
    </Link>
  );
}
