import React from "react";
import PropTypes from "prop-types";
import MenuProfil from "src/containers/MenuProfil";
import MessageList from "src/containers/Messages/MessageList";

import "src/styles/messages.scss";

const Messages = ({ groups, userId }) => {
    return (
        <div className="messages">
            <MenuProfil />

            <div className="lists">
                <div className="lists__table">
                    <div className="lists__titles">
                        <p className="lists__title">Fin</p>
                        <p className="lists__title">Ordre du jour</p>
                        <p className="lists__title">Type</p>
                        <p className="lists__title">Statut</p>
                        <p className="lists__title">Plus</p>
                    </div>
                    {groups.map((group) => {
                        return (
                            <div key={group.id}>
                                <MessageList {...group} userId={userId} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

Messages.propTypes = {
    userId: PropTypes.number,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            group: PropTypes.objectOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    type: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    end_time: PropTypes.string.isRequired,
                })
            ),
        })
    ),
};

Messages.defaultProps = {
    userId: 0,
};

export default Messages;
