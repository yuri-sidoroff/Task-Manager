import {
    ADD_NEW_TASK_HANDLER,
    TASK_WITHOUT_DATE_HANDLER,
    SUBMIT_ADD_NEW_TASK_HANDLER,
    CANCEL_ADD_NEW_TASK_HANDLER,
    TASK_EDIT_HANDLER,
    TASK_DELETE_HANDLER,
    INPUT_TASK_NAME,
    INPUT_TASK_DESCRIPTION,
    INPUT_TASK_DEADLINE_DATE,
    INPUT_TASK_DEADLINE_TIME,
    INPUT_TASK_PRIORITY,
    FILTER_TASKS_HANDLER,
    COMPLETED_TASK_HANDLER,
    EDIT_TASK_NAME,
    EDIT_TASK_DESCRIPTION,
    EDIT_TASK_DEADLINE_DATE,
    EDIT_TASK_DEADLINE_TIME,
    EDIT_TASK_PRIORITY,
    DELETE_ALL_TASK_LIST_HANDLER
} from './constants'

const initialState = {
    addNewTask: false,
    taskWithoutDate: false,
    filterTasks: 'All tasks',
    newTask: {
        taskName: '',
        description: '',
        deadline: { date: '', time: '' },
        priority: '',
        edit: false,
        completed: false
    },
    taskList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK_HANDLER:
            return {
                ...state,
                addNewTask: !state.addNewTask,
                taskWithoutDate: false,
                newTask: {
                    ...state.newTask,
                    taskName: action.payload.taskName,
                    description: action.payload.description,
                    deadline: action.payload.deadline,
                    priority: action.payload.priority,
                    status: action.payload.status,
                    edit: false,
                    completed: false
                }
            };
        case TASK_WITHOUT_DATE_HANDLER:
            return {
                ...state,
                taskWithoutDate: !state.taskWithoutDate,
                newTask: { ...state.newTask, deadline: { ...state.newTask.deadline, date: '', time: '' } }
            };
        case SUBMIT_ADD_NEW_TASK_HANDLER:
            return {
                ...state,
                addNewTask: !state.addNewTask,
                taskList: state.taskList.concat(state.newTask)
            };
        case CANCEL_ADD_NEW_TASK_HANDLER:
            return { ...state, addNewTask: !state.addNewTask };
        case TASK_EDIT_HANDLER:
            return {
                ...state, taskList: state.taskList.map((item, key) => {
                    return key === action.payload ? { ...item, edit: !item.edit } : item
                })
            };
        case TASK_DELETE_HANDLER:
            return { ...state, taskList: state.taskList.filter((_, key) => key !== action.payload) };
        case INPUT_TASK_NAME:
            return { ...state, newTask: { ...state.newTask, taskName: action.payload } };
        case INPUT_TASK_DESCRIPTION:
            return { ...state, newTask: { ...state.newTask, description: action.payload } };
        case INPUT_TASK_DEADLINE_DATE:
            return { ...state, newTask: { ...state.newTask, deadline: { ...state.newTask.deadline, date: action.payload } } };
        case INPUT_TASK_DEADLINE_TIME:
            return { ...state, newTask: { ...state.newTask, deadline: { ...state.newTask.deadline, time: action.payload } } };
        case INPUT_TASK_PRIORITY:
            return { ...state, newTask: { ...state.newTask, priority: action.payload } };
        case FILTER_TASKS_HANDLER:
            return { ...state, filterTasks: action.payload };
        case COMPLETED_TASK_HANDLER:
            return {
                ...state,
                taskList: state.taskList.map((item, key) => {
                    return key === action.payload
                        ? {
                            ...item,
                            completed: !item.completed,
                            edit: false,
                            status: {
                                ...item.status,
                                progress: '',
                                date: new Date().toLocaleString().slice(0, 10).split('.').reverse().join('-'),
                                time: new Date().toLocaleString().slice(12, 17)
                            }
                        }
                        : item
                })
            };
        case EDIT_TASK_NAME:
            return {
                ...state, taskList: state.taskList.map((item, key) => {
                    return key === action.payload.key ? { ...item, taskName: action.payload.item } : item
                })
            };
        case EDIT_TASK_DESCRIPTION:
            return {
                ...state, taskList: state.taskList.map((item, key) => {
                    return key === action.payload.key ? { ...item, description: action.payload.item } : item
                })
            };
        case EDIT_TASK_DEADLINE_DATE:
            return {
                ...state, taskList: state.taskList.map((item, key) => {
                    return key === action.payload.key ? { ...item, deadline: {...item.deadline, date: action.payload.item} } : item
                })
            };
        case EDIT_TASK_DEADLINE_TIME:
            return {
                ...state, taskList: state.taskList.map((item, key) => {
                    return key === action.payload.key ? { ...item, deadline: {...item.deadline, time: action.payload.item} } : item
                })
            };
        case EDIT_TASK_PRIORITY:
            return {
                ...state, taskList: state.taskList.map((item, key) => {
                    return key === action.payload.key ? { ...item, priority: action.payload.item } : item
                })
            };
        case DELETE_ALL_TASK_LIST_HANDLER:
            return { ...state, taskList:[]};

        default:
            return state;
    }
};