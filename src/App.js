import './App.css';
import { useEffect, useRef } from 'react'

function App() {
  let flag = useRef(false)
  useEffect(() => {
    const one = document.getElementById('caption')
    const two = document.getElementById('handle')
    const button = document.getElementById('span')
    // 鼠标按下事件
    button.addEventListener('mousedown', (e) => {
      flag.current = true
    })
    //  鼠标移动事件
    window.addEventListener('mousemove', (e) => {
      if (flag.current) {
        const offsetLeft = two.getBoundingClientRect().left
        const buttonWidth = button.getBoundingClientRect().width
        one.style.setProperty('--moved', `${e.clientX - offsetLeft - buttonWidth / 2}px`)
      }
    })
    //  鼠标抬起事件
    window.addEventListener('mouseup', (e) => {
      if (flag) {
        const lefts = e.clientX - two.getBoundingClientRect().left
        if (lefts > 190 && lefts < 230) {
          one.classList.add('passed')
          one.style.display = "none"
        } else {
          one.style.setProperty('--moved', '0px')
        }
        flag.current = false
      }
    }, [flag])

    return () => {
    }
  })

  return (
    <div className="App" id="caption">
      <div className='box' id="handle">
        <span id="span"></span>
      </div>
    </div>
  );
}

export default App;
