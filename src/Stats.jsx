export  default function Stats({ items }) {

  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your packing list</em>
      </p>
    );


  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "you got everythingg! ready to go it display when i packed all" :
          `you have ${numItems} items on ur list, 
    and u already packed ${numPacked} 
    (${percentage}%)`}
      </em>
    </footer>
  );
}
