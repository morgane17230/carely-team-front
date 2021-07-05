export const ON_SEARCH_COMPANY = 'ON_SEARCH_COMPANY';
export const SEARCH_COMPANY = 'SEARCH_COMPANY';
export const CHANGE_FIELD = "CHANGE_FIELD";

// Modify form fields content
export const changeField = (key, value) => ({
    type: CHANGE_FIELD,
    key,
    value,
});

// Search company in sub form
export const onSearchCompany = (payload) => ({
    type: ON_SEARCH_COMPANY,
    payload,
});

// Search company in sub form
export const searchCompany = (payload) => ({
    type: SEARCH_COMPANY,
    payload,
});
