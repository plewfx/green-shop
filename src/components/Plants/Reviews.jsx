import { useParams } from "react-router-dom"
import { usePlantsStore } from "../../useStore"

const Reviews = () => {
    const params = useParams()
    const plants = usePlantsStore((state) => state.plants)
    const currPlant = plants.filter((plant) => plant.name.toLowerCase().replace(/\s/g, '-') == params.id)
    const { images, name, price, discount, isFavorite, addedToCart, reviews } = currPlant[0]

    return (
        <div className="flex flex-col gap-10">{
            (reviews > 0) ?
            reviews :
            <span className="font-bold">There are no reviews :(</span>}
        </div>
    )
}

export default Reviews