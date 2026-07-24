import Rating from './Rating.jsx';

const ClientTestimonies = ({testimonies}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {
            testimonies.map((testimonie) => {
                return (
                    <div className="flex flex-col items-start space-y-6 p-6 bg-header rounded-xl">
                        <Rating rating={testimonie.rating} storageKey={`rating-${testimonie.name}`}/>

                        <div className="text-sm lg:tracking-wide pb-6 border-b-1 border-b-gray-500 opacity-80">
                            <p>
                                {testimonie.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="contain-content w-12 rounded-full objec-cover transition-transform duration-700 group-hover:scale-110">
                                <img src={testimonie.profile} alt={testimonie.name} />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <h3 className="font-semibold">{testimonie.name}</h3>
                                <h4 className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{testimonie.title}</h4>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ClientTestimonies