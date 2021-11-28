import React from 'react'

import './PreviewCollection.styles.scss'
import CollectionItem from './CollectionItem'

const PreviewCollection=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.slice(0,4).map((item)=>(
                    <CollectionItem key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}>
                    </CollectionItem>
                ))
            }
        </div>
    </div>
)

export default PreviewCollection