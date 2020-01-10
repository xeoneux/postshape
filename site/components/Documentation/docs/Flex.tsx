import * as React from 'react' ;
import pick from 'lodash.pick';
import { Flex, FlexProps } from 'preshape';
import Showcase from '../Showcase';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';
import { CatalogueItem } from '.';

const parentProps = [
  'alignChildren',
  'alignChildrenHorizontal',
  'alignChildrenVertical',
  'direction',
  'gap',
];

const childProps = [
  'alignSelf',
  'basis',
  'grow',
  'shrink',
];

const Item: CatalogueItem<{
  Flex: FlexProps;
}> = {
  name: 'Flex',
  description: 'Simple, all purpose flexing component to achieve common UI layouts and placements.',
  pictogram: require('../../../assets/pictogram-flex.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Flex { ...pick(props.Flex, parentProps) }>
          { Array.from({ length: 3 }).map((_, n) => (
            <Flex { ...pick(props.Flex, childProps) }
                alignChildren="middle"
                backgroundColor="text-shade-1"
                direction="vertical"
                key={ n }
                padding="x3"
                textColor="background-shade-1">
              <ThemeIcon size="1.5rem" />
            </Flex>
          )) }
        </Flex>
      </Showcase>
    ),
    state: {
      Flex: {
        alignChildren: 'middle',
        basis: 'content',
        direction: 'horizontal',
        gap: 'x3',
      },
    },
  },
  apis: [{
    module: '"Flex/Flex"',
    name: 'FlexProps',
    rename: 'Flex',
  }],
};

export default Item;
