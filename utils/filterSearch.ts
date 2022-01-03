interface props {
  router: any
  page?: number
  category?: string
  sort?: string
  search?: string
  status?: string
  s?: string
  e?: string
}

const filterSearch = ({
  router,
  page,
  category,
  sort,
  search,
  status,
  s,
  e,
}: props) => {
  const path =
    router.pathname === '/customer' ? '/customer/products' : router.pathname
  const query = router.query

  // filter report admin by date start - end
  if (s) query.s = s
  if (e) query.e = e

  // filter orders admin by status
  if (status) {
    query.status = status
    delete query.page
  }

  // filter products
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
