import { assign, createMachine } from "xstate";
import { Company } from "~/generated/merchantData";

export const getBackOffDelay = (errorCount: number) =>
  1000 + 100 * errorCount ** 2;

const settingsPageMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5SzAF1QSwHZVgAgAcBDGPAWyIGMALbMAOgBsB7IibKPFdD-YmAMQRmWBtgBuzANYNumHHxJhyVWqKat2OLmnm5CShBOaUimEQG0ADAF1EoAs1gZzWeyAAeiAIwB2AKz0AGwAzGFBAJwB3gAcMSEATL4ANCAAnogAtAlW9HEALDFBVjFW-iEx3lUAvtWpcrwGpBQ0dBpsHDo8Ck1gAmAATgPMA-QEjGYAZiNk9A09-MotagwsHdrz+otGWJKmrtZ2SCCOzq7uXgiZQQne9N4hETn5CYne-r4p6T4J+fS3+SC-isQSCMWBSXytXqukaixUrXUm0UpDWEEgAgAogARACSABUAPoAMVxmIAMtj3KcXBgRBdEMVfP98hEYhEQh9Hg8vhkEJyQvR-JErBVWfl-B9fCFoSBkb0ESt6NhaURGHgIGYiHhBsMBhiAEqY-EGgCa1KctPpx0umUSMXoJRirwe-j83ieqT53l+-28gOBoPBViS3ll8vhyzaKswao1Wp1QxGGI8sFQZgYREmqEGAApMQaDQB5A2EgBCAEEAMIAaUJReJxMJ2IpFdNAEoBBGlIro1hVerNenE3rIBaznS3DashE-n5fhErBEoiVfKCvT8-gCbr5lx9vCCIuHYQse1H1JBaTgBFWKwA5KsU8dWqegS6AoL0fIhXyVV6+b8nn8DcEHyb97gifxSjZACJSBGU6jlE8tjPVQ2kvPQbwACXvABxTESTJSln3Oad+UiL8EkqCUyiKWJIJAyUEnuYMim-aVJV8Y9uhQ5o0IvdhMIAZQAVTLABZAkSMnBkEEqXIAKCVkbm-KxfASCJGN8O4wWBXwQQ+Jdfm4vQUSWfiGAwjgsTxIlSQpKljhpUi30ZEE8gCKxCn8CV2XybwQMiZjgQ9dlf05SCghMuFUMRWQAFcACMyBcPQ8BoIgcD6YR1GMGQ5mQszeyRJKUp49LqEymAdj2MxJ0OaTrVchAomYipvCBGJtOFHIYhAzJ2RZDltOlSIQj8KLEO7Pi4rmUrUs6DKsv6JNRnGKYZgKniivPBLkoW7Qluq4x9nq2xGtfTxEHiZlKjZEJ-J69qQIFIURX86USglEJJsQrBmHReBjmm8zZrRToQYu2S7W0vIpU+8acgeoJ+oPZiPzo8aD08-xotPGalRBvA0THJzLRcq6EH8NlgmKNTIP0oIOs0745MCCoqNeIEQp-MMpsKhVduVftY0HBNdWTCAobIu0wiFPwOReIK-GlF61PoRTkc+eJqYlPHeNBpUrJwaXmqUz8D1nA8Hn9CIAtZ4VAliN1bgSHclKhfntsFiy5v28qjrAU3KcgtqwP9KpwlZFm+XKCJgnBKoAS6-IrD5mFvcjCzg9tJSnceZ5XluKVUYCL8g3KDqD3GspalqIA */
  createMachine(
    {
      context: {
        companyData: undefined as Company | undefined,
        errorMessage: undefined as string | undefined,
        errorCount: 0,
        editFieldKey: undefined as string | undefined,
        editFieldValue: undefined as string | undefined,
      },
      tsTypes: {} as import("./settingsPageMachine.typegen").Typegen0,
      schema: {} as {
        services: {
          loadSettingsPageData: { data: Company };
        };
        events:
          | {
              type: "RETRY";
            }
          | { type: "EDIT_FIELD"; key: string }
          | { type: "CHANGE_FIELD"; value: string }
          | { type: "CANCEL" }
          | { type: "SUBMIT" };
      },
      initial: "loading settings page",
      states: {
        "loading settings page": {
          invoke: {
            src: "loadSettingsPageData",
            onDone: [
              {
                actions: ["assignInitialDataToContext", "clearErrorCount"],
                target: "settings page loaded",
              },
            ],
            onError: [
              {
                actions: "assignErrorToContext",
                target: "initial data errored",
              },
            ],
          },
        },
        "settings page loaded": {
          on: {
            EDIT_FIELD: {
              actions: "assignFieldKeyToContext",
              target: "editing",
            },
          },
        },
        "initial data errored": {
          tags: "error",
          after: {
            ERROR_BACK_OFF_DELAY: {
              actions: "clearErrorFromContext",
              target: "loading settings page",
            },
          },
          on: {
            RETRY: {
              actions: "clearErrorFromContext",
              target: "loading settings page",
            },
          },
        },
        editing: {
          on: {
            CANCEL: {
              target: "settings page loaded",
            },
            CHANGE_FIELD: {
              actions: "assignFieldValueToContext",
            },
            SUBMIT: {
              target: "submitting change",
            },
            EDIT_FIELD: {
              actions: "assignFieldKeyToContext",
            },
          },
        },
        "submitting change": {
          invoke: {
            src: "updateFieldValue",
            onDone: [
              {
                actions: ["clearErrorCount", "clearFieldFromContext"],
                target: "loading settings page",
              },
            ],
            onError: [
              {
                actions: "assignErrorToContext",
                target: "editing",
              },
            ],
          },
        },
      },
      id: "settings page machine",
    },
    {
      actions: {
        assignInitialDataToContext: assign((_, state) => ({
          companyData: state.data,
        })),
        assignErrorToContext: assign((context, state) => ({
          errorMessage: (state.data as Error).message,
          errorCount: (context.errorCount += 1),
        })),
        clearErrorFromContext: assign((_) => ({
          errorMessage: undefined,
        })),
        assignFieldKeyToContext: assign((_, event) => ({
          editFieldKey: event.key,
        })),
        assignFieldValueToContext: assign((_, event) => ({
          editFieldValue: event.value,
        })),
        clearFieldFromContext: assign((_) => ({
          editFieldKey: undefined,
          editFieldValue: undefined,
        })),
        clearErrorCount: assign((_) => ({
          errorCount: 0,
        })),
      },
      delays: {
        ERROR_BACK_OFF_DELAY: (context) => getBackOffDelay(context.errorCount),
      },
    }
  );

export default settingsPageMachine;
