export const CHANGE_FIELD = "CHANGE_FIELD";
export const ON_CREATE_MSG = "ON_CREATE_MSG";
export const CREATE_MSG = "CREATE_MSG";
export const ON_MODIFY_MSG = "ON_MODIFY_MSG";
export const ON_DELETE_MSG = "ON_DELETE_MSG";
export const ON_PASS_VALUE = "ON_PASS_VALUE";

// Create a message
export const onCreateMSG = (createPayload) => ({
    type: ON_CREATE_MSG,
    createPayload,
});

// Modify a message
export const onModifyMSG = (modifyPayload) => {
    return {
        type: ON_MODIFY_MSG,
        modifyPayload,
    };
};

// Delete a message
export const onDeleteMSG = (deletePayload) => ({
    type: ON_DELETE_MSG,
    deletePayload,
});
