import {
  Button,
  Container,
  Group,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMachine } from "@xstate/react";
import api from "~/api";
import ErrorBox from "~/components/ErrorBox";
import settingsPageMachine from "~/machines/settingsPageMachine";

export default function Index() {
  const [state, send] = useMachine(settingsPageMachine, {
    services: {
      loadSettingsPageData: async () => {
        const companyDetails = await api.getCompany();
        return companyDetails;
      },
      updateFieldValue: async (context) => {
        if (!context.editFieldKey) throw new Error("No field key");
        await api.setCompany({
          [context.editFieldKey]: context.editFieldValue,
        });
      },
    },
  });

  return (
    <Container>
      {state.hasTag("error") && (
        <ErrorBox
          context={{
            errorCount: state.context.errorCount,
            errorMessage: state.context.errorMessage,
          }}
          send={send}
          canRetry={state.nextEvents.includes("RETRY")}
        />
      )}

      {state.context.companyData && (
        <Stack>
          {Object.entries(state.context.companyData).map(([key, value]) => {
            if (typeof value === "object") return null;
            const isEditing =
              state.matches("editing") && state.context.editFieldKey === key;

            return (
              <form
                key={key}
                onSubmit={(e) => {
                  e.preventDefault();
                  send({ type: "SUBMIT" });
                }}
              >
                <SimpleGrid cols={3}>
                  <Text component="label">{key}</Text>
                  {isEditing ? (
                    <Input
                      defaultValue={state.context.editFieldValue}
                      onChange={(e: { target: { value: string } }) =>
                        send({ type: "CHANGE_FIELD", value: e.target.value })
                      }
                      autoFocus
                    />
                  ) : (
                    <Text sx={{ paddingBlock: ".38rem" }}>{value}</Text>
                  )}

                  <Group>
                    {state.matches("submitting change") && <Text>Loading</Text>}
                    {isEditing ? (
                      <>
                        <Button onClick={() => send({ type: "CANCEL" })}>
                          Cancel
                        </Button>
                        <Button type="submit">Submit</Button>
                      </>
                    ) : (
                      state.nextEvents.includes("EDIT_FIELD") && (
                        <Button
                          onClick={() => send({ type: "EDIT_FIELD", key })}
                        >
                          Edit
                        </Button>
                      )
                    )}
                  </Group>
                </SimpleGrid>
              </form>
            );
          })}
        </Stack>
      )}
    </Container>
  );
}
