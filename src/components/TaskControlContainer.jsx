import { connect } from 'react-redux'
import {
    addNewTaskHandler,
    taskWithoutDateHandler, 
    submitAddNewTaskHandler, 
    cancelAddNewTaskHandler,
    inputTaskName,
    inputTaskDescription,
    inputTaskDeadlineDate,
    inputTaskDeadlineTime,
    inputTaskPriority
} from '../store/actionCreators'
import TaskControl from './TaskControl'


const mapStateToProps = state => ({
    addNewTask: state.addNewTask,
    taskWithoutDate: state.taskWithoutDate,
    newTask: state.newTask
})

const mapDispatchToProps = {
    addNewTaskHandler,
    taskWithoutDateHandler, 
    submitAddNewTaskHandler, 
    cancelAddNewTaskHandler,
    inputTaskName,
    inputTaskDescription,
    inputTaskDeadlineDate,
    inputTaskDeadlineTime,
    inputTaskPriority
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControl);