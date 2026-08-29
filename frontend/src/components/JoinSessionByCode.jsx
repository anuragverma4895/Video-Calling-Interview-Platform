import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { ArrowRightIcon, KeyRoundIcon, LoaderIcon } from "lucide-react";
import { useJoinSessionByCode } from "../hooks/useSessions";

function JoinSessionByCode() {
  const navigate = useNavigate();
  const joinSessionByCodeMutation = useJoinSessionByCode();
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inviteCode.trim()) {
      toast.error("Enter an invite code");
      return;
    }

    joinSessionByCodeMutation.mutate(inviteCode, {
      onSuccess: (data) => {
        setInviteCode("");
        navigate(`/session/${data.session._id}`);
      },
    });
  };

  return (
    <div className="container mx-auto px-6 pb-6">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 border-2 border-base-300 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <KeyRoundIcon className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="font-bold">Join with Invite Code</h2>
            <p className="text-sm text-base-content/60">Use the code shared by the session host.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:min-w-[360px]">
          <input
            className="input input-bordered w-full uppercase tracking-widest"
            value={inviteCode}
            onChange={(event) => setInviteCode(event.target.value.toUpperCase())}
            placeholder="ABC123"
            maxLength={6}
          />
          <button
            type="submit"
            className="btn btn-primary gap-2"
            disabled={joinSessionByCodeMutation.isPending}
          >
            {joinSessionByCodeMutation.isPending ? (
              <LoaderIcon className="size-4 animate-spin" />
            ) : (
              <ArrowRightIcon className="size-4" />
            )}
            Join
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinSessionByCode;
