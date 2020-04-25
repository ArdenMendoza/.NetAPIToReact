import axios from 'axios';

const baseUrl = 'http://localhost:62470/api/';
const baseUrl2 = 'http://localhost:5000/api/';

export default {
    users(url = baseUrl2 + 'Users/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            login: credentials => axios.post(url + 'authenticate', credentials),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url = id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    },
    tasks(url = baseUrl2 + 'UserTasks/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (taskId, updatedRecord) => axios.put(url + taskId, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
}