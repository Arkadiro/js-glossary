const defaultValue = 16;

const rem = (px: number): string => {
    return `${px / defaultValue}rem`;
};

export default rem;
