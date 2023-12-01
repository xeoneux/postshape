module.exports = {
  dimensions: false,
  prettier: false,
  typescript: true,
  indexTemplate: () => '',
  replaceAttrValues: {
    '#000': 'var(--color-text-shade-1)',
    '#000001': 'var(--color-text-shade-2)',
    '#000002': 'var(--color-text-shade-3)',
    '#5C7CFA': 'var(--color-accent-shade-3)',
    '#4C6EF5': 'var(--color-accent-shade-4)',
    '#4263EB': 'var(--color-accent-shade-5)',
    '#FFF': 'var(--color-background-shade-1)',
    '#FFFFFE': 'var(--color-background-shade-2)',
    '#FFFFFD': 'var(--color-background-shade-3)',
  },
  template: ({ template }, _, { componentName, props, jsx }) => {
    const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] });

    return typeScriptTpl.ast`/** AUTO GENERATED **/
import { Box, BoxProps } from 'postshape';
import { forwardRef } from 'react';

export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return (
    <Box { ...props }
        className="Pictogram"
        ref={ ref }
        tag="svg"
        viewBox="0 0 248 96">
      {${jsx}}
    </Box>
  );
});
`;
  },
  svgoConfig: {
    plugins: [
      {
        cleanupIDs: false,
      },
    ],
  },
};
