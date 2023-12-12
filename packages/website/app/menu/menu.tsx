import {
  Box,
  BoxProps,
  Image,
  Link,
  Text,
  ThemeSwitcher,
  useThemeContext,
} from "postshape";
import { Logo } from "../../src/components/Logo/PostshapeIcon";
import { catalogueListing } from "../../src/docs";
import { MenuItem } from "./menu-item";

type MenuProps = BoxProps & {
  onSelect?: () => void;
};

export const Menu = ({ onSelect, ...props }: MenuProps) => {
  const { colors } = useThemeContext();

  return (
    <Box {...props}>
      <Box alignChildren="middle" flex="vertical" gap="x4" padding="x8">
        <Logo height="4rem" width="4rem" />

        <Box>
          <Text align="middle" margin="x2" size="x6" weight="x5">
            Postshape
          </Text>

          <Text align="middle" size="x3" textColor="text-shade-4">
            A design system and library of composable React component, hooks,
            and utilities for my personal projects .
          </Text>
        </Box>

        <Link display="block" href="https://www.npmjs.com/package/postshape">
          <Image
            alt="npm version"
            async
            height="18"
            src={`https://img.shields.io/npm/v/postshape?color=${encodeURIComponent(
              colors.colorAccentShade4,
            )}&label=NPM`}
          />
        </Link>
      </Box>

      <Box
        alignChildren="middle"
        borderColor="background-shade-2"
        borderTop
        borderBottom
        flex="horizontal"
        paddingVertical="x4"
      >
        <ThemeSwitcher />
      </Box>

      <Box paddingHorizontal="x8" paddingVertical="x8">
        <MenuItem onClick={onSelect} to="/colors">
          Colors
        </MenuItem>
        <MenuItem onClick={onSelect} to="/themes">
          Themes
        </MenuItem>
        <MenuItem onClick={onSelect} to="/sizings">
          Sizings
        </MenuItem>
        <MenuItem onClick={onSelect} to="/components">
          Components
        </MenuItem>
        {catalogueListing.map(({ name }) => (
          <MenuItem
            key={name}
            onClick={onSelect}
            nested
            to={`/components/${name}`}
          >
            {name}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};