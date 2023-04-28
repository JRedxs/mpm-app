import React, { useEffect } from 'react';
import { DataSet, Network } from 'vis-network/standalone';

const PERTChart = ({ tasks }) => {
  const container = React.createRef();

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const nodes = tasks.map((task) => ({
      id: task.id,
      label: `${task.name}\n(${task.duration} jours)`,
    }));

    const edges = tasks
      .filter((task) => task.prevTasks.length > 0)
      .flatMap((task) =>
        task.prevTasks.map((prevTaskId) => ({
          from: prevTaskId,
          to: task.id,
        }))
      );

    const data = {
      nodes: new DataSet(nodes),
      edges: new DataSet(edges),
    };

    const options = {
      layout: {
        hierarchical: {
          direction: 'LR',
          sortMethod: 'directed',
        },
      },
      edges: {
        arrows: 'to',
      },
    };

    new Network(container.current, data, options);
  }, [container, tasks]);

  return <div ref={container} className="pert-chart"></div>;
};

export default PERTChart;
