/**
 * Client Side Pagination helper which returns amountOfPages, itemCount,
 * itemsStart, itemsEnd, and paginated rows
 */
export default function paginate(_ref) {
  var page = _ref.page,
      perPage = _ref.perPage;

  return function () {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // adapt to zero indexed logic
    var p = page - 1 || 0;
    var amountOfPages = Math.ceil(rows.length / perPage);
    var startPage = p < amountOfPages ? p : 0;
    var endOfPage = startPage * perPage + perPage;
    return {
      amountOfPages: amountOfPages,
      itemCount: rows.length,
      itemsStart: startPage * perPage + 1,
      itemsEnd: endOfPage > rows.length ? rows.length : endOfPage,
      rows: rows.slice(startPage * perPage, endOfPage)
    };
  };
}