import create from 'zustand';

const useDarkMode = create((set) => ({
  isDarkMode: false, 
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarkMode;
