import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'Feb 5th at 2.30PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Grossary',
        day: 'May 6th at 3.30PM',
        reminder: true
    },
    {
        id: 3,
        text: 'School Material pickup',
        day: 'Feb 13th at 2.00PM',
        reminder: true
    }
  ])

  // delete function for task
  const deleteTask = (id) =>{
    setTasks(tasks.filter(
      (task) => task.id != id)
    )
  }

  const saveTask=(task)=>{
    console.log(task);
    setTasks([...tasks , task])

  }

  // toggle reminder for task
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map(
        (task) =>
        task.id === id ? { ...task, reminder : !task.reminder } : task 
        // ...task means copy all properties from task 
        // and then change reminder with inversion 
      ) 
    )
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}/>
      
      {/* && works as ternary operator for if without else condition 
      which means if showAddTask state is true then include <AddTask> 
      else dont do anything*/}
      {showAddTask && <AddTask saveTask={saveTask}/>} 
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;