const { userRoom } =
require("../utils/notificationRooms");

module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log(
      "User Connected:",
      socket.id
    );

   

    socket.on(
      "joinUserRoom",
      (payload) => {

        const room =
        typeof payload === "object"
        ? userRoom(payload.userType,payload.userId)
        : null;

        if(!room){
          return;
        }

        socket.join(room);

        console.log(
          `User joined room: ${room}`
        );
      }
    );

   

    socket.on(
      "joinAuction",
      (auctionId) => {

        socket.join(
          `auction_${auctionId}`
        );
      }
    );

    socket.on(
      "leaveAuction",
      (auctionId) => {

        socket.leave(
          `auction_${auctionId}`
        );
      }
    );

   

    socket.on(
      "placeBid",
      (data) => {

        const {
          auctionId,
          bidAmount
        } = data;

        io.to(
          `auction_${auctionId}`
        ).emit(
          "newBid",
          {
            bidAmount,
            timestamp:new Date()
          }
        );
      }
    );

   

    socket.on(
      "disconnect",
      () => {

        console.log(
          "User disconnected"
        );
      }
    );

  });
};
