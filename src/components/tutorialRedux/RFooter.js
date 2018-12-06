import React from 'react'
import FilterLink from '../container/FilterLink'
import { VisibilityFilters } from '../../store/action'

const RFooter = () => {
    return (
        <p>
          Show: <FilterLink
            filter={VisibilityFilters.SHOW_ALL}
        >All</FilterLink>
            {'，'}
            <FilterLink
                filter={VisibilityFilters.SHOW_ACTIVE}
            >Active</FilterLink>
            {'，'}
            <FilterLink
                filter={VisibilityFilters.SHOW_COMPLETED}
            >
                Completed
            </FilterLink>
        </p>
    )
}

export default RFooter