import api from "src/middlewares/api";
import jwt_decode from "jwt-decode";
import { refreshState, getError } from "src/actions/user";
import {
    ON_DELETE_MEMBER,
    ON_CREATE_GROUP,
    SELECT_GROUP,
    ON_ADD_MEMBER,
    ON_MODIFY_GROUP,
    ON_DELETE_GROUP,
} from "src/actions/group";

const group = (store) => (next) => async (action) => {
    switch (action.type) {
        
        // Select group to modify token

        case SELECT_GROUP: {
            const token = localStorage.getItem("token");
            try {
                const modifiedGroup = await api.post(
                    `/user/refresh`,
                    {
                        group_id: action.payload,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(modifiedGroup);
                api.defaults.headers.common.Authorization = `Bearer ${modifiedGroup.data.token}`;
                localStorage.setItem("token", modifiedGroup.data.token);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Create a group

        case ON_CREATE_GROUP: {
            const { title, end_time } = store.getState().group;
            const { id, company_id, selectedType } = store.getState().user;
            const token = localStorage.getItem("token");
            try {
                await api.post(
                    `/groups`,
                    {
                        type: selectedType,
                        title,
                        end_time: Date.parse(end_time),
                        company_id,
                        start_time: Date.now(),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const createdGroup = await api.get(`/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const actionCreateGroup = refreshState(createdGroup.data);
                store.dispatch(actionCreateGroup);
                console.log("createdGroup", createdGroup);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

        // Modify a group

        case ON_MODIFY_GROUP: {
            const { title, end_time } = store.getState().group;
            const { group_id, selectedType } = store.getState().user;
            const token = localStorage.getItem("token");
            try {
                await api.put(
                    `/group/${group_id}`,
                    {
                        group_id: group_id,
                        title,
                        type: selectedType,
                        end_time: Date.parse(end_time),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const modifiedGroup = await api.get(
                    `/user/${store.getState().user.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const actionModifyGroup = refreshState(modifiedGroup.data);
                store.dispatch(actionModifyGroup);
                console.log("modifiedGroup", modifiedGroup);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }
            
            // Add member in group

        case ON_ADD_MEMBER: {
            const token = localStorage.getItem("token");
            const decryptToken = jwt_decode(token);
            const { id, selectedUserId } = store.getState().user;
            console.log(decryptToken.groupId);
            try {
                await api.put(
                    `/user/${selectedUserId}`,
                    {
                        group_role: "user",
                        group_id: decryptToken.groupId,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const addedMember = await api.get(`/user/${id}`);
                const actionAddedMember = refreshState(addedMember.data);
                store.dispatch(actionAddedMember);
                console.log("addedMember middleware", addedMember.data);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

            // Delete member from group

        case ON_DELETE_MEMBER: {
            const token = localStorage.getItem("token");
            const { id } = store.getState().user;
            console.log(id, action.payload);
            try {
                await api.put(
                    `/user/${action.payload}`,
                    {
                        group_role: "remove",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const removedMember = await api.get(`/user/${id}`);
                const actionRemovedMember = refreshState(removedMember.data);
                store.dispatch(actionRemovedMember);
                console.log("removedMember middleware", removedMember.data);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }

            // Delete a group
            
        case ON_DELETE_GROUP: {
            console.log("group_id", group_id);
            const { group_id } = store.getState().user;
            try {
                await api.delete(`/group/${group_id}`);
                const refreshedToken = await api.post(`/user/refresh`, {
                    group_id: 0,
                });

                api.defaults.headers.common.Authorization = `Bearer ${refreshedToken.data.token}`;

                const deletedGroup = await api.get(
                    `/user/${store.getState().user.id}`
                );

                const actionDeleteGroup = refreshState(deletedGroup.data);
                store.dispatch(actionDeleteGroup);
                console.log("deletedGroup", deletedGroup);
            } catch (error) {
                const actionGetError = getError(error.response);
                store.dispatch(actionGetError);
            }
            break;
        }
        default:
            next(action);
    }
};

export default group;
