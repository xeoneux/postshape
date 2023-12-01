import { Link, LinkProps } from 'postshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramLink';

const Item: CatalogueItem<{
  Link: LinkProps;
}> = {
  name: 'Link',
  description:
    'React Router compatible links (when provided with a "to" destination).',
  Pictogram,
  apis: [
    {
      module: '"Link/Link"',
      name: 'LinkProps',
      rename: 'Link',
    },
  ],
  showcase: {
    state: {
      Link: {
        underline: true,
      },
    },
    Component: (props) => <Link {...props.Link}>Lorem ipsum</Link>,
    code: `
import { Link } from 'postshape';

<Link to="/some-destination">
  Lorem ipsum
</Link>

<Link underline href="http://postshape.hogg.io" target="SomeTarget">
  Lorem ipsum
</Link>`,
  },
};

export default Item;
