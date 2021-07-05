import React from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import "src/styles/groups.scss";

const Users = ({
    userId,
    setOpenPersons,
    setOpenCreateButton,
    groups,
    users,
    onDeleteMember,
    groupId,
    selectedUserId,
    onSelectMember,
    onAddMember,
}) => {
    const group = groups.filter((group) => {
        if (group.id === groupId) return group;
    });

    const handleSelectMember = (evt) => {
        console.log(Number(evt.target.value));
        onSelectMember(Number(evt.target.value));
        onAddMember(Number(evt.target.value));
    };

    const handleDeleteMember = (evt) => {
        console.log(Number(evt.currentTarget.value));
        onDeleteMember(Number(evt.currentTarget.value));
    };

    let isAuthor = groups.find(
        (group) =>
            group.id === groupId &&
            group.users.find(
                (user) =>
                    user.group_has_user.role === "author" && user.id === userId
            )
    );

    const userList = (user) => {
        if (user.id !== userId)
            return (
                <option key={user.id} value={user.id}>
                    {user.lastname} {user.firstname}
                </option>
            );
    };

    const membersList = (user) => {
        return (
            <div key={user.id} className="group-list">
                <div className="group-list__row">
                    <span className="group-list">{user.firstname}</span>
                    <span className="group-list">{user.lastname}</span>
                    <span className="group-list">{user.func}</span>
                    {isAuthor && (
                        <button
                            className="group-list__close"
                            type="button"
                            value={user.id}
                            onClick={handleDeleteMember}
                        >
                            {user.id !== userId && (
                                <Icon path={mdiClose} size={1} />
                            )}
                        </button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="lists__titles-right">
                <span className="lists__title">Les Participants</span>
                {isAuthor && (
                    <select
                        className="group-list__select"
                        name="members"
                        onChange={handleSelectMember}
                        value={selectedUserId}
                    >
                        <option value="">Ajouter un participant...</option>
                        {users.map(userList)}
                    </select>
                )}

                <button className="group-list__close">
                    <Icon
                        path={mdiClose}
                        size={1}
                        onClick={() => {
                            setOpenPersons(false);
                            setOpenCreateButton(true);
                        }}
                    />
                </button>
            </div>
            <div className="group-list-container">
                {group[0].users.map(membersList)}
            </div>
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    selectedUserId: PropTypes.number,
    groupId: PropTypes.number,
    userId: PropTypes.number,
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
    setOpenPersons: PropTypes.func.isRequired,
    setOpenCreateButton: PropTypes.func.isRequired,
    onDeleteMember: PropTypes.func.isRequired,
    onSelectMember: PropTypes.func.isRequired,
    onAddMember: PropTypes.func.isRequired,
};

Users.defaultProps = {
    groupId: 0,
    selectedUserId: 0,
};

export default Users;
