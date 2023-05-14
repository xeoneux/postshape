import { JSONOutput } from 'typedoc';
import { ApiValueController } from './Types';
import TypeRendererIntrinsic from './TypeRendererIntrinsic';
import TypeRendererReference from './TypeRendererReference';
import TypeRendererReflection from './TypeRendererReflection';
import TypeRendererLiteral from './TypeRendererLiteral';
import TypeRendererUnion from './TypeRendererUnion';
import TypeRendererTypeOperator from './TypeRendererTypeOperator';

export interface TypeRendererProps extends ApiValueController {
  reflection: JSONOutput.DeclarationReflection;
  type: JSONOutput.DeclarationReflection['type'];
}

const typeMap: Partial<
  Record<
    JSONOutput.SomeType['type'],
    (
      props: Omit<TypeRendererProps, 'type'> & { type: any }
    ) => JSX.Element | null
  >
> = {
  intrinsic: TypeRendererIntrinsic,
  literal: TypeRendererLiteral,
  reference: TypeRendererReference,
  reflection: TypeRendererReflection,
  union: TypeRendererUnion,
  typeOperator: TypeRendererTypeOperator,
};

const TypeRenderer = (props: TypeRendererProps) => {
  const TypeRenderer = props.type?.type && typeMap[props.type?.type];

  if (!TypeRenderer) {
    console.log(`No TypeRenderer for '${props.type?.type}'`);
    console.log(props.reflection);
    return null;
  }

  return <TypeRenderer {...props} type={props.type} />;
};

export default TypeRenderer;