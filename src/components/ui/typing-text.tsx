import { useEffect, useState, forwardRef } from "react"

type TypingTextProps = {
    text: string
    speed: number
    className?: string
}

export const TypingText = forwardRef<HTMLDivElement, TypingTextProps>(({ text, speed, className }, ref) => {
    const [displayElements, setDisplayElements] = useState<JSX.Element[]>([])
    useEffect(() => {
        const worker = new Worker(new URL("../../scripts/typing-worker.js", import.meta.url))

        worker.postMessage({ text, speed })

        worker.onmessage = (e) => {
            if (e.data.char === "done") {
                worker.terminate()
            } else {
                const { char, isBold } = e.data

                setDisplayElements((prev) => [
                    ...prev,
                    <span key={prev.length} className={isBold ? "font-semibold" : ""}>
                        {char}
                    </span>,
                ])
            }
        }

        return () => worker.terminate()
    }, [text, speed])

    return (
        <div ref={ref} className={className}>
            {displayElements}
        </div>
    )
})

TypingText.displayName = "TypingText"
