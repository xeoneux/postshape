import { Box, BoxProps, Text } from "postshape";
import SizingIcon from "./SizingIcon";

export interface SizingProps extends Omit<BoxProps, "children"> {
  name: string;
  css: string;
  js: string;
  value: string;
  prop?: string;
}

const Sizing = ({ name, css, js, value, prop }: SizingProps) => {
  return (
    <Box
      alignChildrenVertical="middle"
      flex="horizontal"
      gap="x6"
      id={name}
      key={name}
    >
      <Box basis="0" grow paddingVertical="x2">
        <Text size="x5" weight="x2">
          {name} / {value}
        </Text>
        <Text>
          {prop ? `"${prop}" /` : ""} var({css}) / {js}
        </Text>
      </Box>

      <Box>
        <SizingIcon css={css} name={name} />
      </Box>
    </Box>
  );
};

export default Sizing;
