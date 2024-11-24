import { baseVariants } from "@/assets/baseVariants";

export const appendVariantClasses = (obj) => {
    const updatedObj = { ...obj };
    // append predefined classes dynamically
    if (updatedObj?.variant) {
        const baseClass = baseVariants[updatedObj.variant] || '';
        // TODO - support arrays
        updatedObj.className = (updatedObj.className || '') + ' ' + baseClass;
    }
    if (updatedObj.labelVariant) {
        const baseClass = baseVariants[updatedObj.labelVariant] || '';
        updatedObj.labelClass = (updatedObj.labelClass || '') + ' ' + baseClass;
    }
    return updatedObj;
};