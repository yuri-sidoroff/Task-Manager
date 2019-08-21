import { connect } from 'react-redux'
import {
    taskEditHandler,
    taskDeleteHandler,
    completedTaskHandler,
    editTaskName,
    editTaskDescription,
    editTaskDeadlineDate,
    editTaskDeadlineTime,
    editTaskPriority,
    filterTasksHandler
} from '../store/actionCreators'
import TaskList from './TaskList'


const mapStateToProps = state => ({ 
    taskList: state.taskList, 
    filterTasks: state.filterTasks 
})

const mapDispatchToProps = {
    taskEditHandler,
    taskDeleteHandler,
    completedTaskHandler,
    editTaskName,
    editTaskDescription,
    editTaskDeadlineDate,
    editTaskDeadlineTime,
    editTaskPriority,
    filterTasksHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);