import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import "src/styles/groups.scss";

const Messages = ({
    setOpenMessages,
    groupId,
    groups, 
    setOpenCreateButton,
}) => {
    const group = groups.filter((group) => {
        if (group.id === groupId) return group;
    });

    const messagesList = (message) => (
        <div key={message.id} className="group-list">
            <div className="group-list__row">
                <p className="group-list__text">{message.content}</p>
            </div>
        </div>
    ); 

    return (
        <>
            <div className="lists__titles-right">
                <p className="lists__title">Les Messages</p>
                <button className="group-list__close" type="button">
                    <Icon
                        path={mdiClose}
                        size={1}
                        onClick={() => {
                            setOpenMessages(false);
                            setOpenCreateButton(true);
                        }}
                    />
                </button>
            </div>
            <div className="group-list-container">
                {group[0].messages.map(messagesList)}
            </div>
        </>
    );
};

Messages.propTypes = {
    groupId: PropTypes.number,
    setOpenMessages: PropTypes.func.isRequired,
    setOpenCreateButton: PropTypes.func.isRequired,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            group: PropTypes.objectOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    type: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    end_time: PropTypes.string.isRequired,
                    users: PropTypes.arrayOf(
                        PropTypes.shape({
                            id: PropTypes.number,
                            lastname: PropTypes.string,
                            firstname: PropTypes.string,
                            email: PropTypes.string,
                        })
                    ),
                })
            ),
        })
    ),
};

Messages.defaultProps = {
    groupId: 0,
};

export default Messages;
