import { useEffect } from 'react'

function Observer() {
  /* From Left */
  useEffect(() => {
    const elements = document.querySelectorAll('.init-left')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('init-left-off', entry.isIntersecting)
        })
      },
      { threshold: 0.3 },
    )

    elements.forEach((e) => {
      observer.observe(e)
    })
  })

  /* From Right */
  useEffect(() => {
    const elements = document.querySelectorAll('.init-right')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('init-right-off', entry.isIntersecting)
        })
      },
      { threshold: 0.3 },
    )

    elements.forEach((e) => {
      observer.observe(e)
    })
  })

  /* From Bottom */
  useEffect(() => {
    const elements = document.querySelectorAll('.init-bottom')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('init-bottom-off', entry.isIntersecting)
        })
      },
      { threshold: 0.3 },
    )

    elements.forEach((e) => {
      observer.observe(e)
    })
  })
}

export default Observer
