import * as React from 'react' ;
import { BlockQuote, BlockQuoteProps, Link, Text } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  BlockQuote: BlockQuoteProps;
}> = {
  name: 'BlockQuote',
  description: 'A visually indented way of representing quoted text.',
  pictogram: require('../../../assets/pictogram-blockquote.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <BlockQuote { ...props.BlockQuote }>
          <Text margin="x1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            suscipit ante ante, a venenatis mauris auctor a. Donec est ante,
            ornare tincidunt porttitor id, vulputate id quam. Nam sollicitudin
            est in efficitur pulvinar. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Praesent non lacinia
            tortor."
          </Text>

          <Text margin="x1">
            <Link href="https://www.lipsum.com/feed/html" strong underline>Lorem Ipsum</Link>
          </Text>
        </BlockQuote>
      </Showcase>
    ),
    state: {
      BlockQuote: {},
    },
  },
  apis: [{
    module: '"BlockQuote/BlockQuote"',
    name: 'BlockQuoteProps',
    rename: 'BlockQuote',
  }],
};

export default Item;
