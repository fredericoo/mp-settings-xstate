// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    assignInitialDataToContext: "done.invoke.settings page machine.loading settings page:invocation[0]";
    clearErrorCount:
      | "done.invoke.settings page machine.loading settings page:invocation[0]"
      | "done.invoke.settings page machine.submitting change:invocation[0]";
    assignErrorToContext:
      | "error.platform.settings page machine.loading settings page:invocation[0]"
      | "error.platform.settings page machine.submitting change:invocation[0]";
    assignFieldKeyToContext: "EDIT_FIELD";
    clearErrorFromContext:
      | "RETRY"
      | "xstate.after(ERROR_BACK_OFF_DELAY)#settings page machine.initial data errored";
    assignFieldValueToContext: "CHANGE_FIELD";
    clearFieldFromContext: "done.invoke.settings page machine.submitting change:invocation[0]";
  };
  internalEvents: {
    "done.invoke.settings page machine.loading settings page:invocation[0]": {
      type: "done.invoke.settings page machine.loading settings page:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.settings page machine.submitting change:invocation[0]": {
      type: "done.invoke.settings page machine.submitting change:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.settings page machine.loading settings page:invocation[0]": {
      type: "error.platform.settings page machine.loading settings page:invocation[0]";
      data: unknown;
    };
    "error.platform.settings page machine.submitting change:invocation[0]": {
      type: "error.platform.settings page machine.submitting change:invocation[0]";
      data: unknown;
    };
    "xstate.after(ERROR_BACK_OFF_DELAY)#settings page machine.initial data errored": {
      type: "xstate.after(ERROR_BACK_OFF_DELAY)#settings page machine.initial data errored";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    loadSettingsPageData: "done.invoke.settings page machine.loading settings page:invocation[0]";
    updateFieldValue: "done.invoke.settings page machine.submitting change:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: "loadSettingsPageData" | "updateFieldValue";
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    loadSettingsPageData:
      | "RETRY"
      | "xstate.after(ERROR_BACK_OFF_DELAY)#settings page machine.initial data errored"
      | "done.invoke.settings page machine.submitting change:invocation[0]";
    updateFieldValue: "SUBMIT";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {
    ERROR_BACK_OFF_DELAY: "xstate.init";
  };
  matchesStates:
    | "loading settings page"
    | "settings page loaded"
    | "initial data errored"
    | "editing"
    | "submitting change";
  tags: "error";
}
