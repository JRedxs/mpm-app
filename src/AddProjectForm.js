import React, { useState } from "react";

function AddProjectForm(props) {
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddProject({ name: projectName, start: startDate, end: endDate });
    setProjectName("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du projet"
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
      />
      <input
        type="date"
        placeholder="Date de début"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
      />
      <input
        type="date"
        placeholder="Date de fin"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
      />
      <button type="submit">Créer un nouveau projet</button>
    </form>
  );
}

export default AddProjectForm;
