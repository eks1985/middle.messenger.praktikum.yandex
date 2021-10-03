import HTTP from '../utilities/http';
import { BaseAPI } from './base-api';

const chatAPIInstance = new HTTP('api/v1/chats');

class ChatAPI extends BaseAPI {

    create() {
        return chatAPIInstance.post('/', {title: 'string'});
    }

    request() {
        return chatAPIInstance.get('/full');
    }

}

export default ChatAPI;