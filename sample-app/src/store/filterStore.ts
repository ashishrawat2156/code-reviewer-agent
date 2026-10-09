import { create } from 'zustand';

interface FilterState {
  status: string;
  search: string;
  setStatus: (status: string) => void;
  setSearch: (search: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  status: 'All',
  search: '',
  setStatus: (status) => set({ status }),
  setSearch: (search) => set({ search }),
}));
