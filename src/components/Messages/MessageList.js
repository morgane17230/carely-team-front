import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "@mdi/react";
import Textarea from "src/containers/ConnectedComponents/Textarea";
import { mdiChevronDown, mdiPen, mdiDelete, mdiClose, mdiCheck } from "@mdi/js";
const dayjs = require("dayjs");

import "src/styles/messages.scss";

const MessageList = ({
    content,
    id,
    userId,
    end_time,
    title,
    type,
    messages,
    changeField,
    onModifyMSG,
    onDeleteMSG,
    onCreateMSG,
    selectGroup,
    onChangeGroup,
}) => {
    const [showDropdown, setDropdown] = useState(false);
    const [showTextarea, setshowTextarea] = useState(false);
    const [validation, setValidation] = useState("");
    const [createMessageOpen, setCreateMessageOpen] = useState(false);

    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation("");
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleDeleteMsg, handleModifyMessage]);

    const handleCreateMessage = (evt) => {
        evt.preventDefault();
        onCreateMSG(Number(evt.currentTarget.value));
        setValidation("Le message a été créé");
        setCreateMessageOpen(false);
        setDropdown(false);
    };

    const handleModifyMessage = (evt) => {
        evt.preventDefault();
        onModifyMSG(evt.currentTarget.value);
        setshowTextarea(false);
        setDropdown(false);
        setValidation("Le message a été modifié");
    };

    const handleDeleteMsg = (evt) => {
        onDeleteMSG(evt.currentTarget.value);
        setDropdown(false);
        setValidation("Le message a été supprimé");
    };

    let isOpen;
    const statutNow = (end) => {
        const today = Date.now();
        today < end || today === end ? (isOpen = true) : (isOpen = false);
        return isOpen;
    };

    const messageArticle = (message) => {
        if (message) {
            return (
                <div key={message.id} className="group-list">
                    {showTextarea ? (
                        <form
                            action="post"
                            onSubmit={handleModifyMessage}
                            className="messages__item-form"
                        >
                            <Textarea
                                className="messages__item-input"
                                name="content"
                                type="text"
                                placeholder={message.content}
                                onChange={changeField}
                                value={content}
                            />
                            <div className="messages__buttons">
                                <button
                                    value={message.id}
                                    onClick={handleModifyMessage}
                                    type="submit"
                                    className="messages__button"
                                >
                                    <span>Valider</span>
                                </button>
                                <button
                                    onClick={() => setshowTextarea(false)}
                                    type="submit"
                                    className="messages__button"
                                >
                                    <span>Renoncer</span>
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div
                            className="dropdown__text-message"
                            value={message.id}
                            name={message.content}
                        >
                            {message.content}
                        </div>
                    )}
                    {isOpen ? (
                        <button className="dropdown__text-modify">
                            <Icon
                                path={mdiPen}
                                size={1}
                                onClick={() => setshowTextarea(true)}
                            />
                        </button>
                    ) : null}
                    {isOpen ? (
                        <button
                            className="dropdown__text-delete"
                            value={message.id}
                            onClick={handleDeleteMsg}
                        >
                            <Icon path={mdiDelete} size={1} />
                        </button>
                    ) : null}
                </div>
            );
        } else {
            return (
                <>
                    {isOpen ? (
                        <div>
                            {createMessageOpen ? (
                                <form
                                    action="post"
                                    onSubmit={handleCreateMessage}
                                    className="dropdown__form"
                                >
                                    <button
                                        onClick={() => {
                                            setCreateMessageOpen(false);
                                        }}
                                        type="button"
                                        className="modify__form-close"
                                    >
                                        <Icon
                                            path={mdiClose}
                                            title="addCompany"
                                            size={1}
                                            color="white"
                                        />
                                    </button>
                                    <Textarea
                                        name="content"
                                        type="text"
                                        placeholder={content}
                                        onChange={changeField}
                                        value={content}
                                    />
                                        <button
                                            onClick={handleCreateMessage}
                                            value={id}
                                            type="submit"
                                            className="messages__button"
                                        >
                                            <span>Valider</span>
                                        </button>
                                    {validation && (
                                        <div className="modale-container__validation">
                                            {validation}
                                        </div>
                                    )}
                                </form>
                            ) : (
                                <button
                                    className="messages__create"
                                    onClick={() => setCreateMessageOpen(true)}
                                >
                                    <span>Ecrire un message</span>
                                </button>
                            )}
                        </div>
                    ) : null}
                </>
            );
        }
    };

    const toggleList = (evt) => {
        onChangeGroup(Number(evt.currentTarget.value));
        selectGroup(Number(evt.currentTarget.value));
        setDropdown(!showDropdown);
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
                    type="button"
                    value={id}
                    onClick={toggleList}
                    className="group-list__more"
                >
                    <Icon path={mdiChevronDown} size={1.2} />
                </button>
            </div>
            {validation && (
                <div className="dropdown__text-validation">{validation}</div>
            )}

            {showDropdown ? (
                <div className="dropdown">
                    {messageArticle(
                        Object.values(messages).find(
                            ({ user_id }) => user_id === userId
                        )
                    )}
                </div>
            ) : null}
        </div>
    );
};
MessageList.propTypes = {
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            group: PropTypes.objectOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    type: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    end_time: PropTypes.string.isRequired,
                    messages: PropTypes.arrayOf(
                        PropTypes.shape({
                            message: PropTypes.objectOf(
                                PropTypes.shape({
                                    id: PropTypes.number,
                                    content: PropTypes.string,
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    ).isRequired,
    onDeleteMSG: PropTypes.func.isRequired,
    onModifyMSG: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    onCreateMSG: PropTypes.func.isRequired,
    selectGroup: PropTypes.func.isRequired,
    onChangeGroup: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired,
    content: PropTypes.string,
};

MessageList.defaultProps = {
    messages: [],
    content: "",
    id: 0,
};
export default MessageList;
