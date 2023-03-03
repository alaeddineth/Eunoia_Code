import axios from 'axios';
import { SET_SUBJECTS } from './mutation_types';

const state = {
  subjects: [],
};

const getters = {
  subjects(state) {
    return state.subjects;
  },
};

const mutations = {
  [SET_SUBJECTS](state, subjects) {
    state.subjects = subjects;
  },
};

const actions = {
  async fetchSubjects({ commit }) {
    try {
      const response = await axios.get('/subjects');
      const subjects = response.data;
      commit(SET_SUBJECTS, subjects);
    } catch (error) {
      console.error(error);
      // handle fetch subjects error
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
