import React from 'react'
import Greeting from './components/Greeting'


export default function App() {
return (
<div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
<h1>Greeting App</h1>
{/* Pass the name prop */}
<Greeting name="Ani" />


{/* You can render it multiple times with different names */}
<div style={{ marginTop: '1rem' }}>
<Greeting name="Ravi" />
</div>


{/* If no name prop is passed, the component falls back to "World" */}
<div style={{ marginTop: '1rem' }}>
<Greeting />
</div>
</div>
)
}