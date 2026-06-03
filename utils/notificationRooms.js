const userRoom = (userType, userId) => {
    if (!userType || !userId) {
        return null;
    }

    return `${userType}-${userId}`;
};

module.exports = {
    userRoom
};
