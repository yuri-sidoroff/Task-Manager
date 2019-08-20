import { connect } from 'react-redux'
import {
    addNewTaskHandler,
    filterTasksHandler
} from '../store/actionCreators'
import TaskControl from './TaskControl'

const mapStateToProps = state => ({
    addNewTask: state.addNewTask,
    taskWithoutDate: state.taskWithoutDate
})

const mapDispatchToProps = {
    addNewTaskHandler,
    filterTasksHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControl);