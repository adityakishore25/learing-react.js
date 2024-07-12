

import Chai from "./chai"

function App() {
  const userName = "chai aur code"

  return (
    // We can return only one element here
    // <></> is called fragments, returning one element only
    <>
      <Chai />
      <h3>This is built in react + vite {userName}</h3>
      <p>This a test para</p>
    </>

  )
}

export default App
