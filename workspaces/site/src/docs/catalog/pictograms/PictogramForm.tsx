import { Box, BoxProps } from 'postshape';
import { forwardRef } from 'react';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-form_svg__pictogram-form" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="pictogram-form_svg__Rectangle-Copy-8" fill="var(--color-text-shade-1)" x={52} y={8} width={144} height={24} rx={6} /><rect id="pictogram-form_svg__Rectangle-Copy-10" fill="var(--color-text-shade-1)" x={52} y={36} width={144} height={24} rx={6} /><rect id="pictogram-form_svg__Rectangle-Copy-9" fill="var(--color-background-shade-1)" x={61.6} y={24.8} width={124.8} height={2.4} rx={1} /><rect id="pictogram-form_svg__Rectangle-Copy-11" fill="#E64980" x={61.6} y={52.8} width={124.8} height={2.4} rx={1} /><g id="pictogram-form_svg__Group-Copy" transform="translate(52 64)"><rect id="pictogram-form_svg__Rectangle-Copy-2" fill="var(--color-text-shade-1)" x={0} y={0} width={144} height={24} rx={6} /><rect id="pictogram-form_svg__Rectangle-Copy-2" fill="var(--color-background-shade-1)" x={7.2} y={6} width={12} height={12} rx={4} /><rect id="pictogram-form_svg__Rectangle-Copy-2" fill="var(--color-text-shade-1)" x={10.8} y={9.6} width={4.8} height={4.8} rx={2} /><rect id="pictogram-form_svg__Rectangle" fill="var(--color-background-shade-1)" x={26.4} y={9.6} width={100.8} height={4.8} rx={2} /></g></g></svg>}
    </Box>;
});