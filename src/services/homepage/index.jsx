export const GetHomePageDataService = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const jsonRes = await response.json()
  return jsonRes
}
