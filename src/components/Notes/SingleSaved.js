import React from 'react'

export default function SingleSaved(props) {
    return (
        <div>
            <div>
                {props.dataItem.url}
            </div>
            <div>
            {props.dataItem.fn}
            </div>
        </div>
    )
}
