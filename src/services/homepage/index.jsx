export const GetHomePageDataService = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const jsonRes = await response.json()
  return jsonRes
}

export const GetPostCommentsDataService = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  const jsonRes = await response.json()
  return await jsonRes
}
