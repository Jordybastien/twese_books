import { FETCH_DASHBOARD_STATS } from './actionTypes';

export const getDashboardStats = (dashboardStats) => {
  return {
    type: FETCH_DASHBOARD_STATS,
    dashboardStats,
  };
};
