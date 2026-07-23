

const Tools = ({tools}) => {
  return (
    <ul className="flex items-center gap-2 flex-wrap">
        {
            tools.map((tool, index) => {
                return <li key={index} className="bg-background px-2 py-2 rounded-lg text-sm">{tool}</li>
            })
        }
    </ul>
  )
}

export default Tools