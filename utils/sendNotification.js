const Notification =
require("../models/Notification");

const sendNotification =
async({

    io,
    userId,
    userType,
    title,
    message

})=>{

    // save in DB

    const notification =
    await Notification.create({

        userId,
        userType,
        title,
        message
    });

    // realtime emit

    io.to(userId.toString())
    .emit(
        "new-notification",
        notification
    );
};

module.exports =
sendNotification;