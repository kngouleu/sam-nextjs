import client from '@sanity/client'

export const sanityClient = client({
    projectId:process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion:'2023-03-27',
    useCdn:true
})

