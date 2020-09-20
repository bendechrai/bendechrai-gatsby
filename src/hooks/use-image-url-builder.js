import imageUrlBuilder from "@sanity/image-url"

let builder = null

const useImageUrlBuilder = () => {
  if (!builder)
    builder = imageUrlBuilder({
      projectId: process.env.GATSBY_SANITY_PROJECTID,
      dataset: process.env.GATSBY_SANITY_DATASET,
    })

  return builder
}

export default useImageUrlBuilder
