import { CheckCircleIcon, XCircleIcon, AlertTriangleIcon } from "lucide-react";

function OutputPanel({ output, submitResult }) {
  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>
      <div className="flex-1 overflow-auto p-4">
        {/* Submit Result */}
        {submitResult && (
          <div className={`mb-4 p-3 rounded-lg border ${
            submitResult.passed
              ? "bg-success/10 border-success/30"
              : "bg-error/10 border-error/30"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {submitResult.passed ? (
                <CheckCircleIcon className="size-5 text-success" />
              ) : (
                <XCircleIcon className="size-5 text-error" />
              )}
              <span className={`font-bold text-sm ${submitResult.passed ? "text-success" : "text-error"}`}>
                {submitResult.passed ? "✅ All Test Cases Passed!" : "❌ Hidden Test Cases Failed"}
              </span>
            </div>
            {submitResult.message && (
              <p className="text-xs text-base-content/70 mt-1">{submitResult.message}</p>
            )}
            {submitResult.expected && !submitResult.passed && (
              <div className="mt-2 text-xs font-mono">
                <div className="text-base-content/60">Expected:</div>
                <pre className="text-warning whitespace-pre-wrap">{submitResult.expected}</pre>
                <div className="text-base-content/60 mt-1">Got:</div>
                <pre className="text-error whitespace-pre-wrap">{submitResult.actual}</pre>
              </div>
            )}
          </div>
        )}

        {/* Run Output */}
        {output === null && !submitResult ? (
          <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>
        ) : output && output.success ? (
          <pre className="text-sm font-mono text-success whitespace-pre-wrap">{output.output}</pre>
        ) : output && !output.success ? (
          <div>
            {output.output && (
              <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
                {output.output}
              </pre>
            )}
            <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default OutputPanel;
