interface props {
  router: any
  page?: number
  category?: string
  sort?: string
  search?: string
}

const filterSearch = ({ router, page, category, sort, search }: props) => {
  const path =
    router.pathname === '/customer' ? '/customer/products' : router.pathname
  const query = router.query

  if (category) {
    query.category = category
    delete query.page
    delete query.sort
  }
  if (search) {
    query.search = search
    delete query.page
    delete query.sort
  }
  if (page) query.page = page
  if (sort) query.sort = sort

  router.push({
    pathname: path,
    query: query,
  })
}

export default filterSearch
