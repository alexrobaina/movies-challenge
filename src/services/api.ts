const API_URL = 'https://api.npoint.io/546fd85e8651aa8e648a'

export const fetchContent = async () => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
