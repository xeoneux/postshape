import { Spinner, SpinnerProps } from 'postshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramSpinner';

const Item: CatalogueItem<{
  Spinner: SpinnerProps;
}> = {
  name: 'Spinner',
  description: 'A continuously rotating spinner.',
  Pictogram,
  apis: [
    {
      module: '"Spinner/Spinner"',
      name: 'SpinnerProps',
      rename: 'Spinner',
    },
  ],
  showcase: {
    state: {
      Spinner: {
        size: '3rem',
      },
    },
    Component: (props) => <Spinner {...props.Spinner} />,
    code: `
import { Spinner } from 'postshape';

<Spinner />`,
  },
};

export default Item;
