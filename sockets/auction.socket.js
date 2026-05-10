module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log(
      "User Connected:",
      socket.id
    );

   

    socket.on(
      "joinUserRoom",
      (userId) => {

        socket.join(userId);

        console.log(
          `User joined room: ${userId}`
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