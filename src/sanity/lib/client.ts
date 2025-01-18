import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'


export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skxBCDvdiFbnet2zYM1oJkXQifOAku1PSHsjaNDxfTAcZbISTmXMM16zunGArsbBp70BaM0zFjzUUOeSEtzUjmB8zo29AOPEC8ZXiB7nQ21IZQv9DTkLvGbiy7pAii35nFauPoISFOoFAk6h3OEpNlfaDI2jfav9rRTdwmiNCfusmcErF34w"
})
