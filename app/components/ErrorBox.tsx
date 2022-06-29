import { Box, Button, Text } from "@mantine/core";
import { InterpreterFrom } from "xstate/lib/types";
import settingsPageMachine from "~/machines/settingsPageMachine";

type ErrorContext = Pick<
  InterpreterFrom<typeof settingsPageMachine>["state"]["context"],
  "errorCount" | "errorMessage"
>;
type Send = InterpreterFrom<typeof settingsPageMachine>["send"];

type ErrorBoxProps = {
  context: ErrorContext;
  send: Send;
  canRetry?: boolean;
};

const ErrorBox: React.FC<ErrorBoxProps> = ({ context, send, canRetry }) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.red[3],
        color: theme.colors.red[9],
        padding: theme.spacing.xs,
        borderRadius: theme.radius.md,
      })}
    >
      <Text>{context.errorMessage}</Text>
      <Text>error count: {context.errorCount}</Text>
      {canRetry && (
        <Button color="red" onClick={() => send("RETRY")}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default ErrorBox;
