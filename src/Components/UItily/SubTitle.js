import React from 'react'

const SubTiltle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="sub-tile">{title}</div>
            {btntitle ? (
                    <div className="shopping-now">{btntitle}</div>
            ) : null}
        </div>
    )
}

export default SubTiltle