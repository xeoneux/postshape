import * as React from 'react' ;
import { BulletPoint, BulletPointProps, BulletPoints, BulletPointsProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  BulletPoint: BulletPointProps;
  BulletPoints: BulletPointsProps;
}> = {
  name: 'BulletPoints',
  description: 'A vertical list component for listing your todos.',
  pictogram: require('../../../assets/pictogram-bulletpoints.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <BulletPoints { ...props.BulletPoints }>
          { Array.from({ length: 5 }).map((_, n) => (
            <BulletPoint { ...props.BulletPoint } key={ n }>
              Lorem ipsum
            </BulletPoint>
          )) }
        </BulletPoints>
      </Showcase>
    ),
    state: {
      BulletPoint: {},
      BulletPoints: {},
    },
  },
  apis: [{
    module: '"BulletPoints/BulletPoints"',
    name: 'BulletPointsProps',
    rename: 'BulletPoints',
  }, {
    module: '"BulletPoints/BulletPoint"',
    name: 'BulletPointProps',
    rename: 'BulletPoint',
  }],
};

export default Item;
