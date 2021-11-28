import React ,{Component} from 'react'
import SHOP_DATA from '../Shopdata'
import PreviewCollection from '../components/PreviewCollection'

class ShopPage extends Component{
    constructor(){
        super()

        this.state={
            collections:SHOP_DATA
        }
    }

render(){
    const {collections} = this.state
    return(
        <div className="shop-page">
            {
            collections.map((collection)=>(
                <PreviewCollection key={collection.id}
                title={collection.title}
                items={collection.items}
                imageUrl={collection.items.imageUrl}
                price={collection.items.price}
                 /> 
            ))
            }
        </div>
    )
}
}


export default ShopPage