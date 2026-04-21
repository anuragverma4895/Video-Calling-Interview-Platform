import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, SendIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/languageConfig";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  isSubmitting,
  onLanguageChange,
  onCodeChange,
  onRunCode,
  onSubmitCode,
  readOnly = false,
  submitHint = "",
}) {
  const availableLanguages = Object.entries(LANGUAGE_CONFIG).filter(
    ([, language]) => language.enabled !== false
  );

  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6"
          />
          <select className="select select-sm" value={selectedLanguage} onChange={onLanguageChange}>
            {availableLanguages.map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
          {readOnly && (
            <span className="badge badge-warning badge-sm">Read Only</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button className="btn btn-primary btn-sm gap-2" disabled={isRunning || isSubmitting} onClick={onRunCode}>
            {isRunning ? (
              <>
                <Loader2Icon className="size-4 animate-spin" />
                Running...
              </>
            ) : (
              <>
                <PlayIcon className="size-4" />
                Run Code
              </>
            )}
          </button>

          {onSubmitCode && (
            <button className="btn btn-success btn-sm gap-2" disabled={isRunning || isSubmitting} onClick={onSubmitCode}>
              {isSubmitting ? (
                <>
                  <Loader2Icon className="size-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <SendIcon className="size-4" />
                  Submit
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {submitHint && (
        <div className="px-4 py-2 text-xs text-base-content/60 bg-base-200 border-t border-base-300">
          {submitHint}
        </div>
      )}

      <div className="flex-1">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange || (() => {})}
          theme="vs-dark"
          options={{
            fontSize: 16,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            readOnly: readOnly,
          }}
        />
      </div>
    </div>
  );
}
export default CodeEditorPanel;
