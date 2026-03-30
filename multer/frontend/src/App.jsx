import React from 'react'

const App = () => {
  return (
    <div>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
