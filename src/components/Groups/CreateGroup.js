import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Field from "src/containers/ConnectedComponents/Field";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import "src/styles/groups.scss";

const CreateGroup = ({
    setOpenCreate,
    end_time,
    title,
    onSelect,
    changeField,
    onCreateGroup,
    selectedType,
    setOpenCreateButton,
    error,
}) => {
    const [validation, setValidation] = useState(false);

     const handleCreateGroup = (evt) => {
         evt.preventDefault();
         onCreateGroup();
         setValidation(true)
     };

    useEffect(() => {
        let timeout;
        if (validation) {
            timeout = setTimeout(() => {
                if (!error.data) {
                    setValidation(false);
                    setOpenCreate(false);
                    setOpenCreateButton(true);
                } else {
                    setValidation(true);
                    setOpenCreate(true);
                    setOpenCreateButton(false);
                }
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [validation, handleCreateGroup]);

   

    console.log(!error.data);
    return (
        <div className="modify__group">
            <button
                type="button"
                className="modify__form-close"
                onClick={() => {
                    setOpenCreate(false);
                    setOpenCreateButton(true);
                }}
            >
                <Icon path={mdiClose} size={1} color="white" />
            </button>
            <form
                action="post"
                className="modify__form"
                onSubmit={handleCreateGroup}
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
                {!!error.data ? error.data : "Le groupe a été créé"}
            </span>
        </div>
    );
};

CreateGroup.propTypes = {
    error: PropTypes.object,
    title: PropTypes.string,
    end_time: PropTypes.string,
    setOpenCreate: PropTypes.func.isRequired,
    setOpenCreateButton: PropTypes.func.isRequired,
    changeField: PropTypes.func.isRequired,
    email: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    onCreateGroup: PropTypes.func.isRequired,
    selectedType: PropTypes.string,
};

CreateGroup.defaultProps = {
    email: "",
    selectedType: "",
    selectedUserId: 0,
    title: "",
    end_time: "",
    error: {},
};

export default CreateGroup;
