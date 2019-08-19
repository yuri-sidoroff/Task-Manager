import React from 'react';
import TaskAdd from './TaskAddContainer'

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
                <div align='center'>
                    
                    {
                        !this.props.addNewTask
                            ? <button
                                onClick={() => this.props.addNewTaskHandler(initialState)}
                            >
                                Add new task
                            </button>
                            : null
                    }
                </div>
                {this.props.addNewTask
                    ? <TaskAdd />
                    : null}
            </div>
        );
    }
};

export default TaskControl;