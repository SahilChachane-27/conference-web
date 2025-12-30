"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useState } from "react";
import { cn } from "@/lib/utils";

const AirplaneIcon = () => (
    <svg className="airplane_icon" viewBox="0 0 149 149" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(0.000000, -10.000000)">
          <g transform="translate(0.000000, 10.000000)">
            <path d="M42.4,141.9 L38.6,138.1 C38.4,137.9 38.3,137.6 38.3,137.4 L38.3,137.4 L38.3,137.4 L38.3,99.3 L7.9,110.1 L7.9,110.1 C7.5,110.2 7.2,110.1 7,109.9 C6.8,109.7 6.7,109.4 6.8,109.1 L14.1,80.3 L14.1,80.3 C14.2,80 14.5,79.8 14.8,79.9 C15.1,79.9 15.3,80.2 15.3,80.5 L12.5,100.8 L39.8,91.8 L39.8,55.1 C39.8,54.8 40,54.6 40.2,54.6 L44.7,54.6 C44.9,54.6 45.1,54.8 45.1,55.1 L45.1,91.8 L72.3,100.8 L69.6,80.5 C69.5,80.2 69.7,79.9 70,79.9 C70.3,79.8 70.6,80 70.7,80.3 L70.7,80.3 L78,109.1 C78.1,109.4 78,109.7 77.8,109.9 C77.6,110.1 77.3,110.2 77,110.1 L77,110.1 L46.5,99.3 L46.5,137.4 C46.5,137.6 46.4,137.9 46.2,138.1 L42.4,141.9 L42.4,141.9 C42.2,142.1 41.9,142.1 41.7,141.9 C41.5,141.7 41.5,141.4 41.7,141.2 L45.5,137.4 L45.5,99.3 L45.1,99.2 L45.1,55.1 L40.8,55.1 L40.8,99.2 L13.5,108.2 L20.8,79.4 C20.9,79.1 20.8,78.8 20.6,78.6 C20.4,78.4 20.1,78.4 19.8,78.5 L19.8,78.5 L12.5,107.3 L45.5,97.8 L45.5,137.4 L41.7,141.2 L42.4,141.9 C42.6,142 42.8,142 43,141.9 L46.8,138.1 C47,137.9 47.1,137.6 47.1,137.4 L47.1,97.8 L80,108.2 L72.7,79.4 C72.6,79.1 72.7,78.8 72.9,78.6 C73.1,78.4 73.4,78.4 73.7,78.5 L73.7,78.5 L81,107.3 C81.3,108.1 80.9,109 80.1,109.3 C79.8,109.4 79.5,109.4 79.2,109.3 L47.1,98.9 L47.1,99.3 L47.1,137.4 L46.8,137.8 L46.2,138.1 L43,141.9 L42.4,141.9 Z" fill="#FFFFFF"></path>
            <polygon fill="#FFFFFF" points="42.4 141.8 43 141.2 45.5 138.3 45.5 137.3 45.5 99.3 45.5 98.3 46.5 98.6 78.6 108.9 80.4 102.3 73.3 80.5 70.7 80.3 71.3 82.2 78.1 107.3 47.5 95.8 47.5 55.1 47.5 54 46.5 54 45.7 54 39.1 54 38.3 54 38.3 55.1 38.3 95.8 8.4 107.3 15.5 82.2 14.1 80.3 11.5 80.5 8.7 100.8 7.9 101.1 7.9 107.7 37.2 96.3 39.8 98.3 39.8 137.3 39.8 138.3 41.8 140.2 42.4 140.8"></polygon>
            <path d="M42.4,141.9 L38.6,138.1 C38.4,137.9 38.3,137.6 38.3,137.4 L38.3,99.3 L7.9,110.1 C7.5,110.2 7.2,110.1 7,109.9 C6.8,109.7 6.7,109.4 6.8,109.1 L14.1,80.3 C14.2,80 14.5,79.8 14.8,79.9 C15.1,79.9 15.3,80.2 15.3,80.5 L12.5,100.8 L39.8,91.8 L39.8,55.1 C39.8,54.8 40,54.6 40.2,54.6 L44.7,54.6 C44.9,54.6 45.1,54.8 45.1,55.1 L45.1,91.8 L72.3,100.8 L69.6,80.5 C69.5,80.2 69.7,79.9 70,79.9 C70.3,79.8 70.6,80 70.7,80.3 L78,109.1 C78.1,109.4 78,109.7 77.8,109.9 C77.6,110.1 77.3,110.2 77,110.1 L46.5,99.3 L46.5,137.4 C46.5,137.6 46.4,137.9 46.2,138.1 L42.4,141.9 C42.2,142.1 41.9,142.1 41.7,141.9 C41.5,141.7 41.5,141.4 41.7,141.2 L45.5,137.4 L45.5,99.3 L13.5,108.2 L20.8,79.4 C20.9,79.1 20.8,78.8 20.6,78.6 C20.4,78.4 20.1,78.4 19.8,78.5 L12.5,107.3 C8.4,108.9 8.2,109.3 8.1,109.3 C7.8,109.4 7.5,109.4 7.2,109.3 L46.5,98.9 L46.5,99.3 L46.5,137.4 L46.2,138.1 L42.4,141.9 Z" fill="#FFFFFF"></path>
          </g>
        </g>
      </g>
    </svg>
  );
  
const ExpandIcon = ({ isReversed }: { isReversed: boolean }) => (
<svg className={cn("expand_icon", { is_reversed: isReversed })} viewBox="0 0 19.8 19.8">
    <g>
    <path d="M4.2,19.8c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l7.1-7.1L2.7,1.6C1.8,0.7,1.8-0.7,2.7-1.6s2.3-0.9,3.2,0l8.7,8.7 c0.9,0.9,0.9,2.3,0,3.2l-8.7,8.7C5.4,19.6,4.8,19.8,4.2,19.8z"></path>
    </g>
</svg>
);


export function Toaster() {
  const { toasts } = useToast()
  const [isOpen, setIsOpen] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMoving(true);
      setTimeout(() => setIsMoving(false), 1000); 
    }
  };

  const latestToast = toasts[0];

  if (!latestToast) return null;

  const { id, title, description, action } = latestToast;

  return (
    <div className={cn("toaster", { "is_open": isOpen })}>
      <div className="airplane_icon_wrapper airplane_left is_moving">
          <AirplaneIcon />
      </div>
      <div className="airplane_icon_wrapper airplane_right is_moving">
          <AirplaneIcon />
      </div>

      <div className="wrapper">
        <header onClick={handleToggle} style={{ cursor: 'pointer' }}>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <ExpandIcon isReversed={isOpen} />
        </header>

        <main>
          <p>
            This is a demonstration of how an interactive toast notification could work.
            You can add any content here, including forms, images, or calls to action.
          </p>
        </main>
        
        <footer>
            {action}
        </footer>
      </div>
    </div>
  )
}
