import { useEffect, useState, forwardRef } from "react"

type TypingTextProps = {
    text: string
    speed: number
    className?: string
}

export const TypingText = forwardRef<HTMLDivElement, TypingTextProps>(({ text, speed, className }, ref) => {
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        const worker = new Worker(new URL("../../scripts/typing-worker.js", import.meta.url))

        worker.postMessage({ text, speed })

        worker.onmessage = (e) => {
            if (e.data === "done") {
                worker.terminate()
            } else {
                setDisplayText((prev) => prev + e.data)
            }
        }

        return () => worker.terminate()
    }, [text, speed])

    return (
        <div ref={ref} className={className}>
            {displayText}
            <span className="animate-pulse">|</span>
        </div>
    )
})

TypingText.displayName = "TypingText"
