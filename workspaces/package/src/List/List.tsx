import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { TypeSize } from '../types';
import Box, { BoxProps } from '../Box/Box';
import './List.css';

/**
 * A list component that can be used to display a list of items.
 */
export interface ListProps extends BoxProps {
  /**
   * Spacing applied between child ListItems, values are global spacing variables.
   *
   * @default "x1"
   */
  gap?: TypeSize;
}

const List: React.ForwardRefRenderFunction<HTMLUListElement, ListProps> = (
  props,
  ref
) => {
  const { gap = 'x1', ...rest } = props;
  const classes = classnames('List', `List--${gap}`);

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      className={classes}
      flex="horizontal"
      gap={gap}
      ref={ref}
      tag="ul"
      wrap
    />
  );
};

export default forwardRef(List);
