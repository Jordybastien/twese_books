import { FETCH_DASHBOARD_STATS } from '../actions/actionTypes';

export default function dashboardStats(state = {}, action) {
  switch (action.type) {
    case FETCH_DASHBOARD_STATS:
      return {
        ...state,
        ...action.dashboardStats,
      };
    default:
      return state;
  }
}
