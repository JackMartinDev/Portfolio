import cx from 'clsx';
import { useState, useRef, useEffect, ReactNode } from "react";
import classes from "./FadeInSection.module.css";

interface FadeInSectionProps {
    children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setVisible(true);
                    break; 
                }
            }
        });
        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }
        // Clean-up function
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);
    return (
        <div
            className={cx(classes.fadeIn, {[classes.isVisible]: isVisible})}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection
