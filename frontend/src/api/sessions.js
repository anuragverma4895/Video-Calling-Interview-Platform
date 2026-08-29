import axiosInstance from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    const response = await axiosInstance.post("/sessions", data);
    return response.data;
  },

  getActiveSessions: async () => {
    const response = await axiosInstance.get("/sessions/active");
    return response.data;
  },
  getMyRecentSessions: async () => {
    const response = await axiosInstance.get("/sessions/my-recent");
    return response.data;
  },

  getSessionById: async (id) => {
    const response = await axiosInstance.get(`/sessions/${id}`);
    return response.data;
  },

  joinSession: async ({ id, inviteCode }) => {
    const response = await axiosInstance.post(`/sessions/${id}/join`, { inviteCode });
    return response.data;
  },
  joinSessionByCode: async (inviteCode) => {
    const response = await axiosInstance.post("/sessions/join-by-code", { inviteCode });
    return response.data;
  },
  leaveSession: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/leave`);
    return response.data;
  },
  endSession: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/end`);
    return response.data;
  },
  requestEditAccess: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/edit-access/request`);
    return response.data;
  },
  grantEditAccess: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/edit-access/grant`);
    return response.data;
  },
  revokeEditAccess: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/edit-access/revoke`);
    return response.data;
  },
  updateSessionCode: async ({ id, code, language }) => {
    const response = await axiosInstance.post(`/sessions/${id}/code`, { code, language });
    return response.data;
  },
  getStreamToken: async () => {
    const response = await axiosInstance.get(`/chat/token`);
    return response.data;
  },
  getAdminAccess: async () => {
    const response = await axiosInstance.get("/admin/access");
    return response.data;
  },
  getAdminOverview: async () => {
    const response = await axiosInstance.get("/admin/overview");
    return response.data;
  },
  adminEndSession: async (id) => {
    const response = await axiosInstance.post(`/admin/sessions/${id}/end`);
    return response.data;
  },
  deleteSessionAsAdmin: async (id) => {
    const response = await axiosInstance.delete(`/admin/sessions/${id}`);
    return response.data;
  },
  deleteUserAsAdmin: async (id) => {
    const response = await axiosInstance.delete(`/admin/users/${id}`);
    return response.data;
  },
};


