import React from 'react'


// Default export a React component that accepts `name` as a prop.
export default function Greeting({ name = 'World' }) {
// Inline CSS applied as a JS object
const style = {
backgroundColor: '#e0f7fa',
padding: '0.75rem 1rem',
borderRadius: '8px',
display: 'inline-block',
fontSize: '1rem',
boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
}


return <div style={style}>Hello, {name}!</div>
}