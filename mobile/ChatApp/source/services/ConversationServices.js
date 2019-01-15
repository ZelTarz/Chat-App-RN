import {dataTest} from '../../DataTest'

export default class ConversationService{
    static getAllConversationofUser(userID)
    {
        var allConversation = dataTest.conversations;
        var allParticipant = dataTest.participants;
        const conversationsID = [];
        const conversations = [];

        allParticipant.forEach(function(item,index,object) {
            if(item.memberID == userID){
                conversationsID.push(item.conversationID);
            }
        });
        conversationsID.forEach(function(itemc,indexc,objectc){
            allConversation.forEach(function(item,index,object){
                if(item.conversationID == itemc && item.activeStatus == 'true')
                {
                    conversations.push(item);
                }
            })
        });
        return conversations;
    }

    static getLastMessageofConversation(conversationID)
    {
        var allMessage = dataTest.messages;
        var lastMessage = {
            messageID: "",
            senderID: "",
            conversationID: "",
            message: "",
            createdAt: "",
            status: "",
            activeStatus: ""
        };

        allMessage.forEach(function (item,index,object){
            if(item.conversationID == conversationID 
                && (lastMessage.messageID != "" ? item.messageID > lastMessage.messageID : true) 
                && item.activeStatus == 'true'){

                    lastMessage = item;
                }
        })

        return lastMessage;
    }
}