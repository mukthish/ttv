export const validateTitle = (title) => {
    return title.length >= 3 && title.leength <= 30;
};

export const titleValidationMessage =
    "Title should be between 3 and 30 characters.";
