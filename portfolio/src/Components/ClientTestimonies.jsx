

const ClientTestimonies = ({testimonies}) => {
  return (
    <div>
        {
            testimonies.map((testimonie) => {
                return (
                    <div>
                        <div>Rating</div>
                        <div>
                            <p>
                                {testimonie.description}
                            </p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ClientTestimonies