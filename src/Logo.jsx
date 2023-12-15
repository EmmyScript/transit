import { FaBeer, FaStarOfDavid } from "react-icons/fa";
import {GoListOrdered} from "react-icons/go"

//export default function Logo(){
  //  return <h1><span><LuPalmtree /></span>far away</h1>
//}


function Logo() {
  return (
    <h1 className="bg-warning text-black"><span><FaStarOfDavid /></span>enter list of item packed.. or remained <GoListOrdered /></h1>
  );
}

export default Logo;


// copy all to App later

//<Logo />
   // <Form  onAddItems={handleAddItems} />
   // <PackingList  items={items} 
    //onDeleteItem ={handleDeleteItem}
    // onToggleItem ={handleToggleItem}
      //onClearList ={handleClearList} />
   // <Stats items={items} />
   // <Currency />

    //<Accordion data={faqs} />
    