declare const useSpinEdit: (initValue: number | undefined, fn: Function) => {
    num: number;
    handleAddClick: () => void;
    handleSubClick: () => void;
};
export default useSpinEdit;
