import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App!! || chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit
    google</a>
)


// Below is the correct syntax to create element in react
const anotherUser = "chai aur react"
const reactElement = React.createElement(
  'a',  // tag
  {  // props object
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',  // innerHTML
  anotherUser // varible ingection
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement

)
