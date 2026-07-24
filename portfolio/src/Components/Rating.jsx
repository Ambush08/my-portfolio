import { useState } from "react";
import useLocalStorage from './useLocalStorage';
import { FaStar } from "react-icons/fa";

const Rating = ({rating, storageKey}) => {

    const [rate, setRate] = useLocalStorage(storageKey, 0);
    const [hover, setHover] = useState(0);

    

  return (
    <div className="flex gap-1">
        {
            [...Array(rating)].map((_, index) => {

                    const currentRating = index + 1;
                return (
                    <FaStar key={index}
                        onClick={()=>setRate(currentRating)}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={()=>setHover(0)}
                        className={`${currentRating <= (hover || rate) ? 'text-yellow-300' : ''}`}
                    />
                )
            })
        }
    </div>
  )
}

export default Rating