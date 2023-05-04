import React, { useState } from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';
import PERTChart from './components/PERTChart';
import Draggable from 'react-draggable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Nom du projet" variant="outlined"
            type="text"
            value={newProject}
            onChange={handleProjectChange}
            placeholder="Nom du projet"
            required
          />
        </Box>
        {/* <input
            type="text"
            value={newProject}
            onChange={handleProjectChange}
            placeholder="Nom du projet"
            required
          />&nbsp;&nbsp; */}
        <Button type="submit" variant="contained">Ajouter un projet</Button>
      </form>
      <br/>

      <Select value={selectedProject || ''} onChange={handleProjectSelect}>
        <option value="" disabled>
          Sélectionnez un projet
        </option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </Select>

      {selectedProjectObj && (
        <>
          <form onSubmit={handleSubmit}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Nom de la tâche" variant="outlined"
                type="text"
                name="name"
                value={newTask.name}
                onChange={handleChange}
                placeholder="Nom de la tâche"
                required

              />
            
            {/* <input
              type="text"
              name="name"
              value={newTask.name}
              onChange={handleChange}
              placeholder="Nom de la tâche"
              required
            /> */}
            <TextField id="outlined-basic" label="Durée de la tâche" variant="outlined"
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
            </Box>
            <Button type="submit" variant="contained">Ajouter une tâche</Button>
          </form>
          <TaskBoard tasks={selectedProjectObj.tasks} />

          <h1>
            {projects.map((project) => (
              <p key={project.id} value={project.id}>
                Projet : {project.name}
              </p>
            ))}
          </h1>
          <PERTChart tasks={selectedProjectObj.tasks} />
        </>
      )}
    </div>
  );
};

export default App;