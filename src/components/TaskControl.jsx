import React from 'react';

const initialState = {
    taskName: 'New Task',
    description: 'New description',
    deadline: {
        date: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().slice(0, 10).split('.').reverse().join('-'),
        time: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().slice(12, 17)
    },
    priority: 'Common',
    status: { progress: 'In progress...', date: '', time: '' }
}

class TaskControl extends React.Component {
    render() {
        return (
            <div>
                {
                    !this.props.addNewTask
                        ? <button 
                            onClick={() => this.props.addNewTaskHandler(initialState)}
                            className='new'
                            >
                            </button>
                        : null
                }
                {this.props.addNewTask
                    ? <table>
                        <tbody>
                            <tr> 
                                <td>
                                    <input
                                        type="text"
                                        name="taskname"
                                        placeholder='Name'
                                        onChange={(event) => this.props.inputTaskName(event.target.value)}
                                        className='inputTextName'
                                        autoFocus
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="taskdescription"
                                        placeholder='Description'
                                        onChange={(event) => this.props.inputTaskDescription(event.target.value)}
                                        className='inputTextDescription'
                                    />
                                </td>
                                <td>
                                    {!this.props.taskWithoutDate
                                        ? <React.Fragment>
                                            <input
                                                type="date"
                                                min={new Date().toLocaleString().slice(0, 10).split('.').reverse().join('-')}
                                                value={this.props.newTask.deadline.date}
                                                onChange={(event) => this.props.inputTaskDeadlineDate(event.target.value)}
                                                className='inputDate'
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
                                <td>
                                    <select onChange={(event) => this.props.inputTaskPriority(event.target.value)}>
                                        <option selected='selected' value='Common'>Common</option>
                                        <option value='Important'>Important</option>
                                        <option value='Very important'>Very important</option>
                                    </select>
                                </td>
                                <td>
                                    <button className='new' onClick={this.props.submitAddNewTaskHandler}></button>
                                    <button className='cancel' onClick={this.props.cancelAddNewTaskHandler}></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    : null}
            </div>
        );
    }
};

export default TaskControl;