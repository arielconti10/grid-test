"use client";
import { useState, useEffect } from "react";

type ItemState = {
  hasM: boolean;
  color: string;
};

const generateItems = (totalItems: number): ItemState[] => {
  const items = [];
  const hasMItems = [0, 1, 9, 10, 11, 12, 17, 18, 19, 20, 25, 26, 27, 28];

  const coloredItems = [22, 38];

  for (let i = 0; i < totalItems; i++) {
    items.push({
      hasM: hasMItems.includes(i),
      color: hasMItems.includes(i) ? "red" : "gray",
    });
  }

  for (let i = 0; i < coloredItems.length; i++) {
    items[coloredItems[i]].color = "red";
  }

  return items;
};

export default function Grid() {
  const totalItems = 48;
  const [items, setItems] = useState<ItemState[] | []>([]);

  useEffect(() => {
    const items = generateItems(totalItems);
    setItems(items);
  }, []);

  const toggleColor = (index: number) => {
    const newItems = [...items];
    newItems[index].color = newItems[index].color === "red" ? "gray" : "red";
    setItems(newItems);
  };

  return (
    <div>
      <h1>Grid</h1>
      <div className="grid grid-cols-8 grid-rows-6 gap-1">
        {items.map((item, index) => {
          console.log(item);
          return (
            <div
              className={`
              flex
              h-8 w-8 items-center justify-center rounded-[2px] text-xs
              ${item.color === "red" ? "bg-red-400" : "bg-gray-200"}
              text-white hover:scale-150 hover:rounded-md hover:border-2 hover:border-gray-600 hover:bg-gray-600 hover:bg-opacity-75 hover:shadow-sm`}
              onClick={() => toggleColor(index)}
            >
              {item.hasM ? "M" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
