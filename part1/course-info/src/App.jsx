const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(part => part.exercises)} />
    </div>
  )
}

// New Header component
const Header = ({ course }) => {
  console.log(course)
  console.log("ola")
  return <h1>{course}</h1>
}

// New Content component
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  )
}

// New Total component
const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises.reduce((sum, exercise) => sum + exercise, 0)}</p>
}

export default App