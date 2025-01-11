import { useEffect, useState, forwardRef } from "react"
import { cn } from "@/lib/utils"

type GaugeProps = {
    percentage: number
    ariaLabel?: string
    className?: string
    duration?: number
}

export const Gauge = forwardRef<HTMLDivElement, GaugeProps>(
    ({ percentage, ariaLabel, className = "", duration = 1000 }, ref) => {
        const [currentPercentage, setCurrentPercentage] = useState(0)

        useEffect(() => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

            if (prefersReducedMotion) {
                setCurrentPercentage(percentage)
                return
            }

            const startTime = Date.now()
            const startValue = currentPercentage

            const animate = () => {
                const now = Date.now()
                const elapsed = now - startTime
                const progress = Math.min(elapsed / duration, 1)

                const eased = 1 - Math.pow(1 - progress, 3)
                const newValue = startValue + (percentage - startValue) * eased

                setCurrentPercentage(newValue)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }, [percentage, duration, currentPercentage])

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-navy-900",
                    className
                )}
                role="meter"
                aria-valuenow={Math.round(currentPercentage)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={ariaLabel}
            >
                <div
                    className="absolute top-0 aspect-square w-full bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform motion-safe:duration-75"
                    style={{
                        transform: `rotate(${(currentPercentage / 100) * 180 - 45}deg)`,
                    }}
                />
                <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-white" />
                <div className="absolute bottom-0 w-full truncate text-center text-2xl leading-none">
                    {Math.round(currentPercentage)}%
                </div>
            </div>
        )
    }
)

Gauge.displayName = "Gauge"
