export const useDummyJSON = () => {
  async function getPosts(perPage: number, page: number) {
    const res = await fetch(
      `https://dummyjson.com/posts/?limit=${perPage}&skip=${(page - 1) * perPage}&page=${page}`
    )
    const data = await res.json()
    return data.posts
  }

  return {
    getPosts
  }
}
