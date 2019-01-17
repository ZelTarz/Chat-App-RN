import {dataTest} from '../../DataTest'

export default class UserService {
    static getUserInfo(userID){
        var allUser = dataTest.users;
        var user;

        allUser.forEach(function(item, index, object){
            if(item.userID == userID && item.activeStatus == 'true'){
                user = item;
            }
        });

        return user;
    }
    
}