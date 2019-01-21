import {dataTest} from '../../DataTest'

export default class ContactService{
    static getAllContactOf(userID)
    {
        var yourContacts = dataTest.friend;
        var userList = dataTest.users;
        const friendIDList = [];
        const friendList = [];

        yourContacts.forEach(function(user, index,object) {
            if(user.friendStatus == "Accept" && user.activeStatus == "true"){
                if(user.userIDAccepet == userID){
                    friendIDList.push(user.userIDRequest);
                }
                else if(user.userIDRequest == userID){
                    friendIDList.push(user.userIDAccepet);
                }
            }
            
        });

        friendIDList.forEach(function(userFriendID,indexc,objectc){
            userList.forEach(function(user,index,object){
                if(user.userID == userFriendID && user.activeStatus == 'true')
                {
                    friendList.push(user);
                }
            })
        });
        return friendList;
    }
}