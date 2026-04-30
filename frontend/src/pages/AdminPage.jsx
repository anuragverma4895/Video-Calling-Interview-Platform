import { useMemo } from "react";
import { Link } from "react-router";
import {
  AlertTriangleIcon,
  Loader2Icon,
  ShieldCheckIcon,
  Trash2Icon,
  UserRoundIcon,
  VideoIcon,
} from "lucide-react";
import { SignInButton, useUser } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import {
  useAdminAccess,
  useAdminDeleteSession,
  useAdminDeleteUser,
  useAdminEndSession,
  useAdminOverview,
} from "../hooks/useSessions";

function AdminPage() {
  const { isSignedIn, isLoaded } = useUser();
  const { data: adminAccessData, isLoading: loadingAccess, error: accessError } = useAdminAccess();
  const { data, isLoading, error } = useAdminOverview();
  const adminEndSessionMutation = useAdminEndSession();
  const adminDeleteSessionMutation = useAdminDeleteSession();
  const adminDeleteUserMutation = useAdminDeleteUser();

  const sessions = data?.sessions || [];
  const users = data?.users || [];
  const stats = data?.stats;

  const activeSessions = useMemo(
    () => sessions.filter((session) => session.status === "active"),
    [sessions]
  );

  const completedSessions = useMemo(
    () => sessions.filter((session) => session.status === "completed"),
    [sessions]
  );

  const handleDeleteSession = (sessionId, problem) => {
    if (!confirm(`Delete session "${problem}" permanently?`)) return;
    adminDeleteSessionMutation.mutate(sessionId);
  };

  const handleEndSession = (sessionId, problem) => {
    if (!confirm(`Close active session "${problem}" right now?`)) return;
    adminEndSessionMutation.mutate(sessionId);
  };

  const handleDeleteUser = (userId, name) => {
    if (!confirm(`Delete user "${name}" and clean up their sessions?`)) return;
    adminDeleteUserMutation.mutate(userId);
  };

  const unauthorized = accessError?.response?.status === 403;
  const unauthenticated = accessError?.response?.status === 401;
  const adminErrorMessage =
    error?.response?.data?.message ||
    accessError?.response?.data?.message ||
    error?.message ||
    accessError?.message ||
    "Failed to load admin data";

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <ShieldCheckIcon className="size-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black">Admin Control Center</h1>
                <p className="text-base-content/65">
                  Users, sessions, forced cleanup, and project-level control in one place.
                </p>
              </div>
            </div>
            {adminAccessData?.admin?.email && (
              <p className="text-sm text-base-content/60">
                Signed in as admin: {adminAccessData.admin.email}
              </p>
            )}
          </div>

          <Link to="/dashboard" className="btn btn-outline">
            Back to Dashboard
          </Link>
        </div>

        {!isLoaded || (isSignedIn && (loadingAccess || isLoading)) ? (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center py-16">
              <Loader2Icon className="size-10 animate-spin text-primary" />
              <p className="text-base-content/70 mt-4">Loading admin controls...</p>
            </div>
          </div>
        ) : !isSignedIn || unauthenticated ? (
          <div className="card bg-base-100 shadow-xl border border-primary/20">
            <div className="card-body items-center text-center py-16">
              <ShieldCheckIcon className="size-12 text-primary" />
              <h2 className="text-2xl font-bold mt-4">Normal login pehle, admin check baad me</h2>
              <p className="text-base-content/65 max-w-xl">
                `/admin` kisi ko admin nahi banata. Pehle normal Clerk login hota hai, uske baad
                backend `ADMIN_EMAILS` ya `ADMIN_CLERK_IDS` se check karta hai ki admin kaun hai.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                <SignInButton mode="modal">
                  <button className="btn btn-primary">Login with Clerk</button>
                </SignInButton>
                <Link to="/" className="btn btn-outline">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        ) : unauthorized ? (
          <div className="card bg-base-100 shadow-xl border border-error/30">
            <div className="card-body items-center text-center py-16">
              <AlertTriangleIcon className="size-12 text-error" />
              <h2 className="text-2xl font-bold mt-4">Admin access required</h2>
              <p className="text-base-content/65 max-w-xl">
                This page is private. Add your email or Clerk ID to `ADMIN_EMAILS` or
                `ADMIN_CLERK_IDS` on the backend to unlock it only for yourself.
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <span>{adminErrorMessage}</span>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="text-sm uppercase tracking-wide text-base-content/60">Total Users</p>
                  <p className="text-4xl font-black text-primary">{stats?.totalUsers || 0}</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="text-sm uppercase tracking-wide text-base-content/60">All Sessions</p>
                  <p className="text-4xl font-black text-secondary">{stats?.totalSessions || 0}</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="text-sm uppercase tracking-wide text-base-content/60">Active</p>
                  <p className="text-4xl font-black text-success">{stats?.activeSessions || 0}</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="text-sm uppercase tracking-wide text-base-content/60">Completed</p>
                  <p className="text-4xl font-black text-accent">{stats?.completedSessions || 0}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <VideoIcon className="size-5 text-primary" />
                    <h2 className="text-2xl font-bold">Session Management</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold mb-3">Active Sessions</p>
                      <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                        {activeSessions.length === 0 ? (
                          <p className="text-sm text-base-content/60">No active sessions right now.</p>
                        ) : (
                          activeSessions.map((session) => (
                            <div
                              key={session._id}
                              className="rounded-2xl border border-base-300 bg-base-200 p-4"
                            >
                              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                  <p className="font-bold text-lg">{session.problem}</p>
                                  <p className="text-sm text-base-content/65">
                                    Host: {session.host?.name || "Unknown"} | Participant:{" "}
                                    {session.participant?.name || "Waiting"}
                                  </p>
                                  <p className="text-xs text-base-content/50 mt-1">
                                    Difficulty: {session.difficulty}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() => handleEndSession(session._id, session.problem)}
                                    disabled={adminEndSessionMutation.isPending}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="btn btn-error btn-sm"
                                    onClick={() => handleDeleteSession(session._id, session.problem)}
                                    disabled={adminDeleteSessionMutation.isPending}
                                  >
                                    <Trash2Icon className="size-4" />
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-3">Recent Completed Sessions</p>
                      <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                        {completedSessions.length === 0 ? (
                          <p className="text-sm text-base-content/60">No completed sessions yet.</p>
                        ) : (
                          completedSessions.slice(0, 10).map((session) => (
                            <div
                              key={session._id}
                              className="rounded-2xl border border-base-300 bg-base-200 p-4"
                            >
                              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                  <p className="font-bold">{session.problem}</p>
                                  <p className="text-sm text-base-content/65">
                                    Host: {session.host?.name || "Unknown"}
                                  </p>
                                </div>
                                <button
                                  className="btn btn-error btn-sm"
                                  onClick={() => handleDeleteSession(session._id, session.problem)}
                                  disabled={adminDeleteSessionMutation.isPending}
                                >
                                  <Trash2Icon className="size-4" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <UserRoundIcon className="size-5 text-primary" />
                    <h2 className="text-2xl font-bold">User Management</h2>
                  </div>

                  <div className="space-y-3 max-h-[700px] overflow-y-auto pr-1">
                    {users.length === 0 ? (
                      <p className="text-sm text-base-content/60">No users found.</p>
                    ) : (
                      users.map((user) => (
                        <div
                          key={user._id}
                          className="rounded-2xl border border-base-300 bg-base-200 p-4"
                        >
                          <div className="flex flex-col gap-3">
                            <div>
                              <p className="font-bold">{user.name}</p>
                              <p className="text-sm text-base-content/65">{user.email}</p>
                              <p className="text-xs text-base-content/45 mt-1">
                                Clerk ID: {user.clerkId}
                              </p>
                            </div>

                            <button
                              className="btn btn-error btn-sm w-full"
                              onClick={() => handleDeleteUser(user._id, user.name)}
                              disabled={adminDeleteUserMutation.isPending}
                            >
                              <Trash2Icon className="size-4" />
                              Delete User
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
