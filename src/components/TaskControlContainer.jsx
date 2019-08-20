import { connect } from 'react-redux'
import {
    addNewTaskHandler,
    filterTasksHandler,
    deleteAllTaskListHandler
} from '../store/actionCreators'
import TaskControl from './TaskControl'

const mapStateToProps = state => ({
    addNewTask: state.addNewTask,
    taskWithoutDate: state.taskWithoutDate
})

const mapDispatchToProps = {
    addNewTaskHandler,
    filterTasksHandler,
    deleteAllTaskListHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControl);