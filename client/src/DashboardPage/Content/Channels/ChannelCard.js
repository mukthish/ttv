import React from "react";

const imageUrl =
    "https://assetsio.gnwcdn.com/co2mvt.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp";

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width="100%" height="100%" />
        </div>
    );
};

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler,
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler();
    };

    return (
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl} />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-text">{username}</span>
            <span
                className="channels-card-text"
                style={{ color: isOnline ? "green" : "red" }}
            >
                {isOnline ? "Online" : "Offline"}
            </span>
        </div>
    );
};
