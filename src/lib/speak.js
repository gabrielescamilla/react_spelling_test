const speak = (text,rate=1.0) => {
  console.log('speaking', text)
  const u = new SpeechSynthesisUtterance()
  u.text = text
  u.lang = 'en-US'
  // u.voice = voice
  u.rate = rate
  u.pitch = 1.0
  u.volume = 1
  window.speechSynthesis.speak(u)
}

export default speak
