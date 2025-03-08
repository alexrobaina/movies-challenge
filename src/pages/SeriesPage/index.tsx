import { useQuery } from '@tanstack/react-query'
import { fetchContent } from '../../services/api'

export const SeriesPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['content'],
    queryFn: fetchContent,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>

  const series = data.entries
    .filter(
      (item: any) => item.programType === 'series' && item.releaseYear >= 2010,
    )
    .sort((a: any, b: any) => a.title.localeCompare(b.title))
    .slice(0, 20)

  return (
    <div>
      {series.map((item: any) => (
        <div key={item.title}>
          <img src={item.images['Poster Art'].url} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
