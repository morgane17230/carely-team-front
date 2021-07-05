export const ON_DELETE_MEMBER = "ON_DELETE_MEMBER";
export const CHANGE_GROUP = "CHANGE_GROUP";
export const SELECT_GROUP = "SELECT_GROUP";
export const SELECT_MEMBER = "SELECT_MEMBER";
export const ON_ADD_MEMBER = "ON_ADD_MEMBER";
export const ON_MODIFY_GROUP = "ON_MODIFY_GROUP";
export const CHANGE_SELECT_TYPE = "CHANGE_SELECT_TYPE";
export const ON_CREATE_GROUP = "ON_CREATE_GROUP";
export const ON_DELETE_GROUP = "ON_DELETE_GROUP";

// Select member to add it in a group
export const selectMember = (selectedUserId) => ({
    type: SELECT_MEMBER,
    selectedUserId,
});

// Create a group
export const onCreateGroup = () => ({
    type: ON_CREATE_GROUP,
});

// Add a member to a group
export const onAddMember = (selectedUserId) => ({
    type: ON_ADD_MEMBER,
    selectedUserId,
});

// Delete a member from a group
export const onDeleteMember = (payload) => ({
    type: ON_DELETE_MEMBER,
    payload,
});

// Modify group_id token
export const changeGroup = (payload) => ({
    type: CHANGE_GROUP,
    payload,
});

// Select a group in select field
export const selectGroup = (payload) => ({
    type: SELECT_GROUP,
    payload,
});

// Select a type of day order
export const changeSelectType = (selectedType) => ({
    type: CHANGE_SELECT_TYPE,
    selectedType,
});

// Modify a group
export const onModifyGroup = (payload) => ({
    type: ON_MODIFY_GROUP,
    payload,
});

// Delete a group
export const onDeleteGroup = (payload) => ({
    type: ON_DELETE_GROUP,
    payload,
});
