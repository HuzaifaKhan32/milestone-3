import { type SchemaTypeDefinition } from 'sanity'
import { product, product2 } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, product2],
}
