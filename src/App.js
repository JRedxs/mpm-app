import React, { useState } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import PERTChart from './components/PERTChart';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [newProject, setNewProject] = useState('');

  const handleProjectChange = (event) => {
    setNewProject(event.target.value);
  };

  const handleProjectSubmit = (event) => {
    event.preventDefault();
    setProjects([...projects, { id: projects.length + 1, name: newProject, tasks: [] }]);
    setNewProject('');
  };

  const handleProjectSelect = (event) => {
    setSelectedProject(parseInt(event.target.value, 10));
  };

  const selectedProjectObj =
    selectedProject !== null
      ? projects.find((project) => project.id === selectedProject)
      : null;

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState({
    id: '',
    name: '',
    duration: '',
    prevTasks: [],
  });

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setNewTask({
      ...newTask,
      prevTasks: Array.from(event.target.selectedOptions, (option) => option.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTaskObj = {
      ...newTask,
      id: newTask.id || String(selectedProjectObj.tasks.length + 1),
      duration: parseInt(newTask.duration, 10),
    };

    const updatedProjects = projects.map((project) =>
      project.id === selectedProject
        ? { ...project, tasks: [...project.tasks, newTaskObj] }
        : project
    );

    setProjects(updatedProjects);
    setNewTask({ id: '', name: '', duration: '', prevTasks: [] });
  };

  return (
    <div className="App">
      <h1>Application MPM et PERT</h1>

      <form onSubmit={handleProjectSubmit}>
        <input
          type="text"
          value={newProject}
          onChange={handleProjectChange}
          placeholder="Nom du projet"
          required
        />
        <button type="submit">Ajouter un projet</button>
      </form>

      <select value={selectedProject || ''} onChange={handleProjectSelect}>
        <option value="" disabled>
          Sélectionnez un projet
        </option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>

      {selectedProjectObj && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={newTask.name}
              onChange={handleChange}
              placeholder="Nom de la tâche"
              required
            />
            <input
              type="number"
              name="duration"
              value={newTask.duration}
              onChange={handleChange}
              placeholder="Durée (jours)"
              required
            />
            <select
              name="prevTasks"
              value={newTask.prevTasks}
              onChange={handleSelectChange}
              multiple
            >
              {selectedProjectObj.tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                  {task.name}
                </option>
              ))}
            </select>
            <button type="submit">Ajouter une tâche</button>
          </form>

          <TaskBoard tasks={selectedProjectObj.tasks} />
          <PERTChart tasks={selectedProjectObj.tasks} />
        </>
      )}
    </div>
  );
};

export default App;