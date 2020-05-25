import React from 'react';

//import './collection-preivew.component.scss';
import './collection-preview.component.scss';

import  CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4 )
                .map(({id, ...otherPprops}) =>
                    <CollectionItem key={id}{...otherPprops}> </CollectionItem>
                )
            }
        </div>
    </div>
);


export default CollectionPreview;