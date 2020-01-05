import * as React from 'react' ;
import { Grid, GridProps, GridItem, GridItemProps, Flex } from 'preshape';
import { CatalogueItem } from '.';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';

const Item: CatalogueItem<{
  Grid: GridProps;
  GridItem: GridItemProps;
}> = {
  name: 'Grid',
  description: 'A use case driven grid system (using display: grid;) for auto flowing, flexible and fixed column layouts.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <Grid { ...props.Grid }>
        { Array.from({ length: 9 }).map((_, n) => (
          <GridItem { ...props.GridItem } key={ n }>
            <Flex
                alignChildren="middle"
                backgroundColor="background-shade-3"
                direction="vertical"
                height="6rem"
                width="6rem">
              <ThemeIcon size="1.5rem" />
            </Flex>
          </GridItem>
        )) }
      </Grid>
    ),
    state: {
      Grid: {
        alignChildren: 'middle',
        columnCount: '3',
        gap: 'x1',
      },
      GridItem: {},
    },
  },
  apis: [{
    module:'"Grid/Grid"',
    name: 'GridProps',
    rename: 'Grid',
  }, {
    module:'"Grid/GridItem"',
    name: 'GridItemProps',
    rename: 'GridItem',
  }],
};

export default Item;
