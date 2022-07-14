let evaluator
let vectorField

function Shader(spec) {
  const {
    self,
    screen,
  } = Entity(spec, 'Shader')

  const {
    fullscreen = false,
    quad,
    walkerPosition,
  } = spec

  const ctx = screen.ctx

  const transform = Transform(spec, self)

  evaluator = math.compile('(sin(x)-(y-2)*i)*i/2')

  vectorField = (x, y, t) => {
    const c = evaluator.evaluate({ x, y, t })
    
    try {
      // Either real or complex
      return typeof c === 'number'
        ? [ c, 0 ]
        : [ math.re(c), math.im(c) ]
    }
    catch (ex) {
      return [0, 0]
    }
  }

  function setVectorFieldExpression(text) {
    console.log('text', text)

    try {
      const e = math.compile(text)
      e.evaluate({ x: 0, y: 0 }) // Make sure can evaluate properly
      evaluator = e
      console.log('Set new evaluator to: ', text, evaluator)
    } catch (err) {}
  }

  function tick() {
    quad.update(vectorField)
  }

  function draw() {
    // quad.draw(Math.max(0, walkerPosition.x / 20))
    quad.draw(walkerPosition.x / 20)
    ctx.drawImage(quad.getBuffer(), 0, 0, screen.width, screen.height)
  }

  function resize() {
    if (fullscreen) {
      xRes = screen.size.x
      yRes = screen.size.y
    }
  }

  return _.mixIn(self, {
    tick,
    draw,
    resize,

    transform,

    setVectorFieldExpression,
  })
}