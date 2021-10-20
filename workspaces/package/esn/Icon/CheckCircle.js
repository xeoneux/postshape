import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "check-circle_svg__feather check-circle_svg__feather-check-circle" },
        React.createElement("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
        React.createElement("path", { d: "M22 4L12 14.01l-3-3" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=CheckCircle.js.map