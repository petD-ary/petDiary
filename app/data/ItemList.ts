const ItemObj = {
  title: '굉장해 엄청나 영양간식(3종)',
  brand: '펫스룸',
  price: 28000,
  like: 1004,
};
const ItemList = Array.from(Array(12), (_, i) => ({ ...ItemObj, id: i }));

export default ItemList;
