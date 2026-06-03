const Notification =
require("../models/notification");
const { userRoom } =
require("./notificationRooms");

const sendNotification =
async({

    io,
    userId,
    userType,
    title,
    message,
    type="general",
    category="general",
    metadata={}

})=>{

    if(!userId || !userType || !title || !message){
        return null;
    }

    // save in DB

    const notification =
    await Notification.create({

        userId,
        userType,
        title,
        message,
        type,
        category,
        metadata
    });

    // realtime emit

    if(io){
        io.to(userRoom(userType,userId))
        .emit(
            "new-notification",
            notification
        );
    }

    return notification;
};

module.exports =
sendNotification;
