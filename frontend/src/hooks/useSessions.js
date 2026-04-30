import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      toast.success("Session created successfully!");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
  });

  return result;
};

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });

  return result;
};

export const useMyRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });

  return result;
};

export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000, // refetch every 5 seconds to detect session status changes
  });

  return result;
};

export const useJoinSession = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: sessionApi.joinSession,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["session", id] });
      toast.success("Joined session successfully!");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
  });

  return result;
};

export const useEndSession = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: sessionApi.endSession,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
      queryClient.invalidateQueries({ queryKey: ["session", id] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
      toast.success("Session ended successfully!");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
  });

  return result;
};

export const useLeaveSession = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["leaveSession"],
    mutationFn: sessionApi.leaveSession,
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
      queryClient.invalidateQueries({ queryKey: ["session", id] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
    },
  });

  return result;
};

export const useAdminAccess = () => {
  const result = useQuery({
    queryKey: ["adminAccess"],
    queryFn: sessionApi.getAdminAccess,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return result;
};

export const useAdminOverview = () => {
  const result = useQuery({
    queryKey: ["adminOverview"],
    queryFn: sessionApi.getAdminOverview,
    retry: false,
  });

  return result;
};

export const useAdminEndSession = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["adminEndSession"],
    mutationFn: sessionApi.adminEndSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
      toast.success("Session closed by admin");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to close session"),
  });

  return result;
};

export const useAdminDeleteSession = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["adminDeleteSession"],
    mutationFn: sessionApi.deleteSessionAsAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
      toast.success("Session deleted successfully");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to delete session"),
  });

  return result;
};

export const useAdminDeleteUser = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ["adminDeleteUser"],
    mutationFn: sessionApi.deleteUserAsAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
      queryClient.invalidateQueries({ queryKey: ["adminOverview"] });
      toast.success("User deleted successfully");
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to delete user"),
  });

  return result;
};
