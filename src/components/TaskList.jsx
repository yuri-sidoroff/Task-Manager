import React from 'react';

class TaskList extends React.Component {
    render() {
        const taskList = this.props.taskList
            .filter((item) => this.props.filterTasks === 'All tasks' ? item : item.priority === this.props.filterTasks)
            .map((taskList, key) => {
                return (
                    <tr key={key} style={new Date().getTime() > new Date(`${taskList.deadline.date} ${taskList.deadline.time}`).getTime() && !taskList.completed ? { backgroundColor: '#fd6565' } : (taskList.completed ? { backgroundColor: '#65ff65' } : null)}>
                        <td>
                            {
                                taskList.edit
                                    ? <input
                                        type="text"
                                        value={taskList.taskName}
                                        onChange={(event) => this.props.editTaskName({ item: event.target.value, key })}
                                        autoFocus
                                    />
                                    : taskList.taskName
                            }
                        </td>
                        <td>
                            {
                                taskList.edit
                                    ? <input
                                        type="text"
                                        value={taskList.description}
                                        onChange={(event) => this.props.editTaskDescription({ item: event.target.value, key })}
                                    />
                                    : taskList.description
                            }
                        </td>
                        <td>
                            {
                                taskList.edit
                                    ? <React.Fragment>
                                        <input
                                            type="date"
                                            value={taskList.deadline.date}
                                            onChange={(event) => this.props.editTaskDeadlineDate({ item: event.target.value, key })}
                                        />
                                        <input
                                            type="time"
                                            value={taskList.deadline.time}
                                            onChange={(event) => this.props.editTaskDeadlineTime({ item: event.target.value, key })}
                                        />
                                    </React.Fragment>
                                    : `${taskList.deadline.date} ${taskList.deadline.time}`
                            }
                        </td>
                        <td>
                            {
                                taskList.edit
                                    ? <select
                                        value={taskList.priority}
                                        onChange={(event) => this.props.editTaskPriority({ item: event.target.value, key })}
                                    >
                                        <option value='Common'>Common</option>
                                        <option value='Important'>Important</option>
                                        <option value='Very important'>Very important</option>
                                    </select>
                                    : taskList.priority
                            }
                        </td>
                        <td>
                            {
                                new Date().getTime() > new Date(`${taskList.deadline.date} ${taskList.deadline.time}`).getTime() && !taskList.completed
                                    ? 'Overdue'
                                    : (taskList.completed
                                        ? `${taskList.status.date} ${taskList.status.time}`
                                        : 'In progress...')
                            }
                        </td>
                        <td>
                            <button
                                onClick={() => this.props.taskEditHandler(key)}
                                disabled={taskList.completed ? 'disabled' : null}
                            >
                                {taskList.edit ? 'OK' : 'Edit'}
                            </button>
                        </td>
                        <td>
                            <button onClick={() => this.props.taskDeleteHandler(key)}>
                                Delete
                            </button>
                        </td>
                        <td>
                            {taskList.completed
                                ? null
                                : <button onClick={() => this.props.completedTaskHandler(key)}>
                                    Done
                                  </button>
                            }

                        </td>
                    </tr>)
            })
        return (
            <div>
                <table align='center'>
                    <tbody>
                        <tr>
                            <select onChange={(event) => this.props.filterTasksHandler(event.target.value)}>
                                <option selected='selected' value='All tasks'>All tasks</option>
                                <option value='Common'>Common task</option>
                                <option value='Important'>Important task</option>
                                <option value='Very important'>Very important task</option>
                            </select>
                        </tr>
                        <tr>
                            <th>Task name</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {taskList}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default TaskList;