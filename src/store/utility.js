/**
 * Utility
 * to update state, with old and new
 */

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};
