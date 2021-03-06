import { forwardRef } from "react";
import { Text, TextProps } from "../Text/Text";

/**
 * A styled component to be rendered around
 * CodeBlocks to give them a window-like appearance.
 */
export interface CodeWindowProps extends TextProps {}

export const CodeWindow = forwardRef<any, CodeWindowProps>((props, ref) => {
  const { children, borderRadius = "x3", padding = "x6", ...rest } = props;

  return (
    <Text
      {...rest}
      backgroundColor="background-shade-3"
      borderColor="background-shade-4"
      borderSize="x1"
      borderRadius={borderRadius}
      margin="x8"
      ref={ref}
      overflow="auto"
      theme="night"
    >
      <Text flex="vertical" gap="x6" padding={padding} width="max-content">
        {children}
      </Text>
    </Text>
  );
});
