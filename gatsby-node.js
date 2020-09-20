exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // ARTICLE
  const sanityArticle = await graphql(`
    {
      articles: allSanityArticle {
        edges {
          node {
            slug {
              current
            }
            publishDate {
              local(formatString: "YYYY/MM/DD")
            }
          }
        }
      }
    }
  `)
  if (sanityArticle.errors) throw sanityArticle.errors
  const articles = sanityArticle.data.articles.edges || []
  articles.forEach((edge, index) => {
    const oldPath = `/${edge.node.publishDate.local}/${edge.node.slug.current}`
    const path = `/articles/${edge.node.slug.current}`
    console.log(`Create redirect from ${oldPath} to ${path}`)
    createRedirect({
      fromPath: oldPath,
      toPath: path,
      redirectInBrowser: true,
      isPermanent: true,
    })
    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // TALKS
  const sanityTalks = await graphql(`
    {
      talks: allSanityTalk {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (sanityTalks.errors) throw sanityTalks.errors
  const talks = sanityTalks.data.talks.edges || []
  talks.forEach((edge, index) => {
    const path = `/talks/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/talk.js"),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // EVENTS
  const sanityEvents = await graphql(`
    {
      events: allSanityEvent {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (sanityEvents.errors) throw sanityEvents.errors
  const events = sanityEvents.data.events.edges || []
  events.forEach((edge, index) => {
    const path = `/events/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/event.js"),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
