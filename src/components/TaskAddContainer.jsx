import { connect } from 'react-redux'
import  { 
    taskWithoutDateHandler, 
    submitAddNewTaskHandler, 
    cancelAddNewTaskHandler,
    inputTaskName,
    inputTaskDescription,
    inputTaskDeadlineDate,
    inputTaskDeadlineTime,
    inputTaskPriority
} from '../store/actionCreators'
import TaskAdd from './TaskAdd'

const mapStateToProps = state => ({ 
    addNewTask: state.addNewTask, 
    taskWithoutDate: state.taskWithoutDate , 
    newTask: state.newTask
})

const mapDispatchToProps = {
    taskWithoutDateHandler,
    submitAddNewTaskHandler,
    cancelAddNewTaskHandler,
    inputTaskName,
    inputTaskDescription,
    inputTaskDeadlineDate,
    inputTaskDeadlineTime,
    inputTaskPriority
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAdd);