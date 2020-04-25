import axios from 'axios';
import { unstable_StrictModeCollapse } from '@material-ui/core';

const baseUrl = 'http://localhost:62470/api/';
const baseUrl2 = 'http://localhost:5000/api/';

const cleanupNewUserProps = (props) => {
    const newProps = {};
    newProps.FirstName = props.regFirstName;
    newProps.LastName = props.regLastName;
    newProps.Email = props.regEmail;
    newProps.Password = props.regPassword;
    return newProps;
}

export default {
    users(url = baseUrl2 + 'Users/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            login: credentials => {
                return axios.post(url + 'authenticate', credentials)
            },
            register: newRecord => {
                const props = cleanupNewUserProps(newRecord);
                return axios.post(url, props)
            },
            update: (id, updatedRecord) => axios.put(url = id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    },
    tasks(url = baseUrl2 + 'UserTasks/') {
        return {
            fetchAll: () => axios.get(url),
            fetchByUserId: id => axios.get(url + id),
            create: userTask => {
                userTask.isDone = userTask.isDone == 'true' ? true : false;
                return axios.post(url + 'addUser', userTask)
            },
            update: (taskId, updatedRecord) => {
                updatedRecord.isDone = updatedRecord.isDone == 'true' ? true : false;
                return axios.put(url + taskId, updatedRecord)
            },
            delete: id => axios.delete(url + id)
        }
    }
}