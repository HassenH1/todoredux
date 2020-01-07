// import React, { useState } from "react"

// const useInputValue = (initialValue) => {
//   const [value, setValue] = useState(initialValue)

//   return {
//     value,
//     onChange: (e) => setValue(e.target.value)
//   }
// }

// export default function Form({onSubmit}) {
//   const text = useInputValue("")
//   return (
//     <form onSubmit={e => {
//       e.preventDefault()
//       onSubmit(text.value)
//       }}>
//       <input {...text} />
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

import React from 'react'
import { connect } from "react-redux"

function Form({ todo }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    todo.push(e.target.value)
    console.log(todo)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" {...todo} onChange={(e) => e.target.value}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todo: state.todo
  }
}

export default connect(
  mapStateToProps
)(Form)
