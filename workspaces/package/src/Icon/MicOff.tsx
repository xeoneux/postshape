import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import { Props as IconProps } from './index';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mic-off_svg__feather mic-off_svg__feather-mic-off"><path d="M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6" /><path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8" /></svg>}
    </Box>;
};

export default forwardRef(Icon);