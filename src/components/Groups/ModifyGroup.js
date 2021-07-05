import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Field from "src/containers/ConnectedComponents/Field";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import "src/styles/groups.scss";

const ModifyGroup = ({
    setOpenModify,
    end_time,
    title, 
    onSelect,
    changeField,
    onModifyGroup,
    selectedType,
    setOpenCreateButton,
}) => {
    const [validation, setValidation] = useState("");

    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                setValidation("");
                setOpenModify(false);
                setOpenCreateButton(true);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleModifyGroup]);

    const handleModifyGroup = (evt) => {
        evt.preventDefault();
        onModifyGroup(Number(evt.currentTarget.value));
        setValidation("Le groupe a été modifié");
    };
    return (
        <div className="modify__group">
            <button
                type="button"
                className="modify__form-close"
                onClick={() => {
                    setOpenModify(false);
                    setOpenCreateButton(true);
                }}
            >
                <Icon path={mdiClose} size={1} color="white" />
            </button>
            <form
                action="post"
                className="modify__form"
                onSubmit={handleModifyGroup}
            >
                <select
                    className="modify__group-select"
                    name="type"
                    onChange={(evt) => onSelect(evt.target.value)}
                    value={selectedType}
                >
                    <option value="">Type...</option>
                    <option value="travail">travail</option>
                    <option value="parole">parole</option>
                </select>
                <Field
                    name="title"
                    type="text"
                    placeholder="Ordre du jour"
                    onChange={changeField}
                    value={title}
                />
                <Field
                    name="end_time"
                    type="date"
                    placeholder="Date de fin"
                    onChange={changeField}
                    value={end_time}
                />
                <button type="submit" className="modify__form-button">
                    <span>Valider</span>
                </button>
            </form>
            <span
                className={
                    validation
                        ? "dropdown__text-validation"
                        : "dropdown__text-validation hidden"
                }
            >
                {validation}
            </span>
        </div>
    );
};

ModifyGroup.propTypes = {
    title: PropTypes.string,
    end_time: PropTypes.string,
    setOpenModify: PropTypes.func.isRequired,
    setOpenCreateButton: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    email: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    onModifyGroup: PropTypes.func.isRequired,
    selectedType: PropTypes.string,
};

ModifyGroup.defaultProps = {
    email: "",
    selectedType: "",
    selectedUserId: 0,
    title: "",
    end_time: "",
};

export default ModifyGroup;
