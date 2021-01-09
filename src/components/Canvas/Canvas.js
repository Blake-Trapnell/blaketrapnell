import React, { useRef, useEffect} from 'react'
import "./Canvas.scss";

const Canvas = props => {
  
  const canvasRef = useRef(null)
  let meteors = {dy: 0, y: -40, x: Math.random(), stop: (80 * Math.random() + 50)}
  let meteorImg = new Image()
  meteorImg.src = "Meteor_large.png"


  const drawMeteors = (ctx) => {
    console.log(meteors.x)
      let  {y, dy, x, stop} = meteors
      if ( y > ctx.canvas.height - stop ) {
        meteors.dy = 0
        setTimeout(()=> {
         meteors = {dy: 0, y: -40, x: Math.random(), stop: (80 * Math.random() + 50)}
        },1000)
      }
      else {
        meteors.dy += .2
        meteors.x = x + 6
      }
      meteors.y += dy
      ctx.drawImage(
       meteorImg , x,  y
      )
    }

  const draw = (ctx) => {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
      drawMeteors(ctx)
    }
  

  const getPixelRatio = ctx => {
    var backingStore =
    ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
   
    return (window.devicePixelRatio || 1) / backingStore;
 };
 
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas)
        .getPropertyValue('width')
        .slice(0, -2);
    let height = getComputedStyle(canvas)
        .getPropertyValue('height')
        .slice(0, -2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    let frameCount = 0
    let animationFrameId = null
     meteors.x = meteors.x * canvas.width
    
    //Our drawMeteors came here
  const render = () => {
      frameCount++
      draw(ctx)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas className={"home--canvas"} ref={canvasRef} {...props}>
    {props.children}
  </canvas>
}

export default Canvas