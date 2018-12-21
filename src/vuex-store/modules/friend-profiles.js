import { coreApi } from '../../../../services'
import PAGINATED from '../constants/paginated'
import paginated from './paginated'

const state = {
  client: coreApi,
  url: 'friend_profiles',
}

const perPage = 6

const getters = {}

const mutations = {}

const actions = {}

const namespaced = true

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced,
  modules: {
    [PAGINATED]: paginated(state.client, state.url, perPage),
  },
}
