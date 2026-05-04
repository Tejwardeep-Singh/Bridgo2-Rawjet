module.exports = (io) => {
  io.on("connection", (socket) => {

    socket.on("joinAuction", (auctionId) => {
      socket.join(`auction_${auctionId}`);
    });

    socket.on("leaveAuction", (auctionId) => {
      socket.leave(`auction_${auctionId}`);
    });

    socket.on("placeBid", (data) => {
      const { auctionId, bidAmount } = data;

      io.to(`auction_${auctionId}`).emit("newBid", {
        bidAmount,
        timestamp: new Date()
      });
    });

    socket.on("disconnect", () => {
      // optional
    });

  });
};