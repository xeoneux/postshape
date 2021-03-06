import { Box, BoxProps } from "postshape";

type Props = BoxProps;

export const PageSection = (props: Props) => {
  return <Box {...props} margin="x16" />;
};
