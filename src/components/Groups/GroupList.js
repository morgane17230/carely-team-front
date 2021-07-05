import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import {
    mdiChevronDown,
    mdiPen,
    mdiDelete,
    mdiMail,
    mdiAccountSupervisor,
    mdiCheck,
    mdiClose,
} from "@mdi/js";

import "src/styles/groups.scss";
const dayjs = require("dayjs");

const GroupList = ({
    groupId,
    userId,
    id,
    end_time,
    title,
    type,
    groups,
    setOpenMessages,
    setOpenCreate,
    setOpenPersons,
    setOpenCreateButton,
    onDeleteGroup,
    onChangeGroup,
    selectGroup,
    setOpenModify,
    users,
}) => {
    const [showDropdown, setDropdown] = useState(false);

    const handleMessages = (evt) => {
        setOpenMessages(true);
        setOpenPersons(false);
        setOpenCreateButton(false);
        setOpenCreate(false);
        setDropdown(false);
        setOpenModify(false);
    };

    const handleUsers = (evt) => {
        setOpenPersons(true);
        setOpenMessages(false);
        setOpenCreate(false);
        setOpenCreateButton(false);
        setDropdown(false);
        setOpenModify(false);
    };

    const handleDeleteGroup = (evt) => {
        setOpenMessages(false);
        setOpenPersons(false);
        setOpenCreate(false);
        setOpenCreateButton(true);
        setDropdown(false);
        setOpenModify(false);
        onDeleteGroup(Number(evt.currentTarget.value));
    };

    const isAuthor = groups.find(
        (group) =>
            group.id === id &&
            group.users.find(
                (user) =>
                    user.id === userId && user.group_has_user.role === "author"
            )
    );

    const author = users.find(
        (user) =>
             user.group_has_user.role === "author"
    );
    

    let isOpen;
    const statutNow = (end) => {
        const today = Date.now();
        today < end || today === end ? (isOpen = true) : (isOpen = false);
        return isOpen;
    };

    const toggleList = (evt) => {
        onChangeGroup(Number(evt.currentTarget.value));
        selectGroup(Number(evt.currentTarget.value));
        setDropdown(!showDropdown);
        setOpenMessages(false);
        setOpenPersons(false);
    };

    statutNow(Date.now(), Date.parse(end_time));

    return (
        <div id={id} className="group-list">
            <div className="group-list__row">
                <span className="group-list__item">
                    {dayjs(Date.parse(end_time)).format("DD-MM-YYYY")}
                </span>
                <span className="group-list__item">{title}</span>
                <span className="group-list__item">{type}</span>
                <span className="group-list__item">
                    { author.firstname } { author.lastname }
                </span>
                {isOpen ? (
                    <span className="group-list__statut-open">
                        <Icon path={mdiCheck} size={1.2} />
                    </span>
                ) : (
                    <span className="group-list__statut-close">
                        <Icon path={mdiClose} size={1.2} />
                    </span>
                )}
                <button
                    className="group-list__more"
                    type="button"
                    value={id}
                    onClick={toggleList}
                >
                    <Icon path={mdiChevronDown} size={1.2} />
                </button>
            </div>
            {showDropdown ? (
                <div className="dropdown">
                    {isOpen ? (
                        <>
                            {isAuthor && (
                                <button
                                    className="group-list__button"
                                    type="button"
                                    onClick={() => {
                                        setOpenModify(true);
                                        setOpenPersons(false);
                                        setOpenMessages(false);
                                        setOpenCreateButton(false);
                                        setOpenCreate(false);
                                        setDropdown(false);
                                    }}
                                >
                                    <Icon path={mdiPen} size={1} />
                                    Modifier
                                </button>
                            )}{" "}
                        </>
                    ) : null}
                    {isOpen ? (
                        <>
                            {isAuthor && (
                                <button
                                    className="group-list__button"
                                    type="button"
                                    onClick={handleDeleteGroup}
                                    value={groupId}
                                >
                                    <Icon path={mdiDelete} size={1} />
                                    Supprimer
                                </button>
                            )}
                        </>
                    ) : null}
                    <button
                        className="group-list__button"
                        type="button"
                        value={id}
                        onClick={handleMessages}
                    >
                        <Icon path={mdiMail} size={1} />
                        Messages
                    </button>

                    <button
                        className="group-list__button"
                        type="button"
                        value={id}
                        onClick={handleUsers}
                    >
                        <Icon path={mdiAccountSupervisor} size={1} />
                        Participants
                    </button>
                </div>
            ) : null}
        </div>
    );
};

GroupList.propTypes = {
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    groupId: PropTypes.number,
    groups: PropTypes.array.isRequired,
    users: PropTypes.array,
    setOpenMessages: PropTypes.func.isRequired,
    setOpenPersons: PropTypes.func.isRequired,
    setOpenCreateButton: PropTypes.func.isRequired,
    setOpenCreate: PropTypes.func.isRequired,
    onChangeGroup: PropTypes.func.isRequired,
    onDeleteGroup: PropTypes.func.isRequired,
    selectGroup: PropTypes.func.isRequired,
    setOpenModify: PropTypes.func.isRequired,
    onDeleteGroup: PropTypes.func.isRequired,
};

GroupList.defaultProps = {
    groupId: 0,
    users: [],
};
export default GroupList;
