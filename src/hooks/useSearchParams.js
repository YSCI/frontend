import { filterNonNull } from "helpers"
import qs from "qs"
import { history } from "system/history"

export const useSearchParams = () => {
  const queryObject = qs.parse(history.location.search.replace('?', ''))

  queryObject.limit = 6
  queryObject.offset = 0

  const updateSearchParams = (params = {}) => {
    const queryString = qs.stringify(filterNonNull(params))

    history.replace(`${history.location.pathname}?${queryString}`)
  }

  return [queryObject, updateSearchParams]
}