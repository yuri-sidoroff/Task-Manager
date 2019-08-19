import React from 'react';

// const initialState = {
//     taskName: 'New Task',
//     description: 'New description',
//     deadline: {
//         date: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().slice(0, 10).split('.').reverse().join('-'),
//         time: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().slice(12, 17)
//     },
//     priority: 'Common',
//     status: { progress: 'In progress...', date: '', time: '' }
// }

class TaskAdd extends React.Component {

    render() {
        return (
            <div>
                <table align='center'>
                    <tbody>
                        <tr align='left'>
                            <th>Task name:</th>
                            <td>
                                <input
                                    type="text"
                                    name="taskname"
                                    placeholder='Enter task name'
                                    onChange={(event) => this.props.inputTaskName(event.target.value)}
                                    autoFocus
                                />
                            </td>
                        </tr>
                        <tr align='left'>
                            <th valign='top'>Description:</th>
                            <td>
                                <textarea
                                    rows='10'
                                    cols='50'
                                    wrap='soft'
                                    name="taskdescription"
                                    placeholder='Enter task description'
                                    onChange={(event) => this.props.inputTaskDescription(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr align='left'>
                            <th>Deadline:</th>
                            <td>
                                {!this.props.taskWithoutDate
                                    ? <React.Fragment>
                                        <input
                                            type="date"
                                            min={new Date().toLocaleString().slice(0, 10).split('.').reverse().join('-')}
                                            value={this.props.newTask.deadline.date}
                                            onChange={(event) => this.props.inputTaskDeadlineDate(event.target.value)}
                                        />
                                        <input
                                            type="time"
                                            value={this.props.newTask.deadline.time}
                                            onChange={(event) => this.props.inputTaskDeadlineTime(event.target.value)}
                                        />
                                    </React.Fragment>
                                    : null}
                                <input type="checkbox" id='without' onChange={this.props.taskWithoutDateHandler} />
                                <label htmlFor="without">Without deadline</label>
                            </td>
                        </tr>
                        <tr align='left'>
                            <th>Priority:</th>
                            <td>
                                <select onChange={(event) => this.props.inputTaskPriority(event.target.value)}>
                                    <option selected='selected' value='Common'>Common</option>
                                    <option value='Important'>Important</option>
                                    <option value='Very important'>Very important</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button onClick={this.props.submitAddNewTaskHandler}>Submit</button>
                                <button onClick={this.props.cancelAddNewTaskHandler}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};

export default TaskAdd;