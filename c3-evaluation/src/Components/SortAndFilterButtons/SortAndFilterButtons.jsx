export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      <button className="sortByTitleAsc" >Title Asce</button>
      <button className="sortByTitleDesc" >Title Desc</button>
      <button className="sortByPriceAsc" >Price Asce</button>
      <button className="sortByPriceDesc" >Price Desc</button>
    </div>
  );
};

/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */