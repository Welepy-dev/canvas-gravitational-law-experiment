const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight  // fixed typo

// Move listener outside draw()
const rects = []

canvas.addEventListener("click", (e) => {
    rects.push({ x: e.clientX - 4, y: e.clientY - 4 })
})

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(100, 100, 100, 100)
    rects.forEach(r => ctx.fillRect(r.x, r.y, 10, 10))
    requestAnimationFrame(draw)
}

draw()
