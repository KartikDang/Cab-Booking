import React from "react"
import { motion } from "framer-motion"

export const LightningLoader = () => {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(0, 0, 0, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(0, 0, 0, 1)"
        }
    }

    return(
        <div className="flex justify-center items-center h-32 w-32 p-4">
              <div
            className="flex justify-center items-center h-32 w-32 p-4 ">
            <svg
                width={300}
                height={300}
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    id="logoLoading"
                    d="M99.626 14.348 41.707 161.075c-1.166 2.953 1.01 6.152 4.186 6.152h87.705a1.5 1.5 0 0 1 1.402 2.032L93.607 278.491c-1.742 4.597 4.094 8.258 7.475 4.69l153.727-162.268c2.717-2.868.684-7.595-3.267-7.595h-95.73c-1.219 0-1.929-1.375-1.223-2.369l65.612-92.343c2.117-2.98-.013-7.106-3.668-7.106H103.811a4.5 4.5 0 0 0-4.185 2.848Z"
                    stroke="rgba(0, 0, 0, 1)"
                    strokeWidth={6}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        fill: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1,
                        },
                        pathLength: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1,
                        },
                        ease: "easeInOut",
                    }}
                />
            </svg>
        </div>
        </div>
    )
}