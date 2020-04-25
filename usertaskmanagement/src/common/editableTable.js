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
      { title: 'taskId', field: 'taskId' },
      { title: 'taskOwnerId', field: 'taskOwnerId' },
      { title: 'taskDescription', field: 'taskDescription' },
      { title: 'isDone', field: 'isDone', },
    ],
    data: [],
  });

  React.useEffect(() => {
    setState({ ...state, data: [...props.userTasks] })
  }, [props])

  console.log('---Table---');
  console.log(props.userTasks);
  console.log('--state--');
  console.log(state.data);

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                props.updateRecord(oldData.taskId, newData);
                // setState((prevState) => {
                //   const data = [...prevState.data];
                //   data[data.indexOf(oldData)] = newData;
                //   return { ...prevState, data };
                // });
              }

            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
