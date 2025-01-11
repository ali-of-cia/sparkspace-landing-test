let index = 0

self.onmessage = (e) => {
  const text = e.data.text

  const interval = setInterval(() => {
    if (index < text.length) {
      self.postMessage(text[index])
      index++
    } else {
      clearInterval(interval)
      self.postMessage("done")
    }
  }, e.data.speed)
}