import React from "react";
import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";

export const dummyChannels = [
    {
        id: 1,
        title: "test2",
        avatarUrl: null,
        username: "Pentasur",
        isOnline: false,
    },
    {
        id: 2,
        title: "test2",
        avatarUrl: null,
        username: "Raiden",
        isOnline: false,
    },
    {
        id: 3,
        title: "test3",
        avatarUrl: null,
        username: "JCX",
        isOnline: true,
    },
    {
        id: 4,
        title: "test4",
        avatarUrl: null,
        username: "Batman",
        isOnline: false,
    },
];

export const Channels = () => {
    const navigate = useNavigate();

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`);
    };

    return (
        <div className="channels-container">
            {dummyChannels.map((c) => (
                <ChannelCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    username={c.username}
                    isOnline={c.isOnline}
                    avatarUrl={c.avatarUrl}
                    navigateToChannelHandler={() => {}}
                />
            ))}
        </div>
    );
};
