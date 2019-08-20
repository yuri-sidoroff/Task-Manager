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
    EDIT_TASK_PRIORITY
} from './constants'

export const addNewTaskHandler = (payload) => ({ type: ADD_NEW_TASK_HANDLER, payload });
export const taskWithoutDateHandler = () => ({ type: TASK_WITHOUT_DATE_HANDLER });
export const submitAddNewTaskHandler = () => ({ type: SUBMIT_ADD_NEW_TASK_HANDLER });
export const cancelAddNewTaskHandler = () => ({ type: CANCEL_ADD_NEW_TASK_HANDLER });
export const taskEditHandler = (payload) => ({ type: TASK_EDIT_HANDLER, payload });
export const taskDeleteHandler = (payload) => ({ type: TASK_DELETE_HANDLER, payload });
export const inputTaskName = (payload) => ({ type: INPUT_TASK_NAME, payload });
export const inputTaskDescription = (payload) => ({ type: INPUT_TASK_DESCRIPTION, payload });
export const inputTaskDeadlineDate = (payload) => ({ type: INPUT_TASK_DEADLINE_DATE, payload });
export const inputTaskDeadlineTime = (payload) => ({ type: INPUT_TASK_DEADLINE_TIME, payload });
export const inputTaskPriority = (payload) => ({ type: INPUT_TASK_PRIORITY, payload });
export const filterTasksHandler = (payload) => ({ type: FILTER_TASKS_HANDLER, payload });
export const completedTaskHandler = (payload) => ({ type: COMPLETED_TASK_HANDLER, payload });
export const editTaskName = (payload) => ({ type: EDIT_TASK_NAME, payload });
export const editTaskDescription = (payload) => ({ type: EDIT_TASK_DESCRIPTION, payload });
export const editTaskDeadlineDate = (payload) => ({ type: EDIT_TASK_DEADLINE_DATE, payload });
export const editTaskDeadlineTime = (payload) => ({ type: EDIT_TASK_DEADLINE_TIME, payload });
export const editTaskPriority = (payload) => ({ type: EDIT_TASK_PRIORITY, payload });