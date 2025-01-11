let index = 0

self.onmessage = (e) => {
  const text = e.data.text
  const speed = e.data.speed

  const chunks = []
  const regex = /\*\*(.*?)\*\*/g // Regex to match text between **...**
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      chunks.push({ text: text.slice(lastIndex, match.index), isBold: false })
    }

    chunks.push({ text: match[1], isBold: true })

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    chunks.push({ text: text.slice(lastIndex), isBold: false })
  }

  let chunkIndex = 0
  let charIndex = 0

  const interval = setInterval(() => {
    if (chunkIndex < chunks.length) {
      const currentChunk = chunks[chunkIndex]
      const currentText = currentChunk.text

      if (charIndex < currentText.length) {
        self.postMessage({ char: currentText[charIndex], isBold: currentChunk.isBold })
        charIndex++
      } else {
        charIndex = 0
        chunkIndex++
      }
    } else {
      clearInterval(interval)
      self.postMessage({ char: "done" })
    }
  }, speed)
}