import React from 'react';
import MaterialTable from 'material-table';
import * as taskActions from '../actions/userTaskActions';



export default function EditableTable(props) {
  // isDone: false
  // taskDescription: "task1"
  // taskId: 1
  // taskOwnerId: 1
  const [state, setState] = React.useState({
    columns: [
      { title: 'taskId', field: 'taskId', type: 'numeric', editable: 'never', hidden: true },
      { title: 'taskOwnerId', field: 'taskOwnerId', type: 'numeric', editable: 'never', hidden: true },
      { title: 'taskDescription', field: 'taskDescription' },
      { title: 'isDone', field: 'isDone', },
    ],
    userTasks: [...props.userTasks],
  });

  React.useEffect(() => {
    setState({ ...state, userTasks: [...props.userTasks] })
  }, [props.userTasks])

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.userTasks}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const taskOwnerId = props.userId;
              props.addTask({ ...newData, taskOwnerId: taskOwnerId });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                props.updateRecord(oldData.taskId, newData);
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              // setState((prevState) => {
              //   const data = [...prevState.userTasks];
              //   data.splice(data.indexOf(oldData), 1);
              //   return { ...prevState, userTasks: data };
              // });
              const taskOwnerId = props.userId;
              props.deleteTask(taskOwnerId, oldData.taskId);

            }, 600);
          }),
      }}
    />
  );
}
