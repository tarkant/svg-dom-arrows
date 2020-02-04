window.addEventListener('load', function () {
  const arrowProps = JSON.parse(`{
    "className": "arrow",
    "shapeApparence": "straight-curved",
    "from": {
      "point": {
        "x": 500,
        "y": 100
      },
      "direction": "left",
      "translation": [
        -0.5,
        -1
      ]
    },
    "to": {
      "point": {
        "x": 450,
        "y": 50
      },
      "direction": "right",
      "translation": [
        0.9,
        1
      ]
    }
  }`);

  const nodes = {
    from: document.getElementById('from'),
    to: document.getElementById('to')
  }

  const textarea = document.querySelector('textarea')
  const button = document.querySelector('button')

  let arrow = null

  function update() {
    const arrowProps = JSON.parse(textarea.value)
    arrowProps.from.node = nodes.from
    arrowProps.to.node = nodes.to

    nodes.from.style.left = arrowProps.from.point.x + 'px'
    nodes.from.style.top = arrowProps.from.point.y + 'px'
    nodes.to.style.left = arrowProps.to.point.x + 'px'
    nodes.to.style.top = arrowProps.to.point.y + 'px'
    console.log(arrow)

    if (arrow) document.body.removeChild(arrow.node)
    arrow = new SvgDomArrows.Arrow(arrowProps)
    console.log(arrow)
    document.body.appendChild(arrow.getNode())
  }

  document.querySelector('textarea').value = JSON.stringify(arrowProps, null, 2)
  button.addEventListener('click', update)

  update()
})