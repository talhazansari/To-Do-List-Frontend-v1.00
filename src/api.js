export let data = null;
export function addTask() {
  data.itemData = [...data.itemData, { description: newTask, status: false }];
  sendData();
  data.itemData = data.itemData;
  location.reload();
}
export async function sendData() {
    try {
      let firstItem = data.itemData[data.itemData.length - 1];
      const response = await fetch("http://localhost:3000/item", {
        method: "POST",
        body: JSON.stringify(firstItem),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Data sent successfully");
        location.reload();
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
export async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/item");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      data = await response.json();
      return data.itemData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    console.log(data);
  }

  export function removeItem(id) {
    let link = "http://localhost:3000/item/";
    let result = link.concat(id);

    fetch(result, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
    location.reload();
  }
 export function updateItem(id, tempStatus) {
    let link = "http://localhost:3000/item/";
    let res = link.concat(id);
    tempStatus = !tempStatus;

    fetch(res, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: tempStatus,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
    location.reload();
  }
  export function updateDescription(id, userInput) {
    let link = "http://localhost:3000/item/";
    let res = link.concat(id);

    fetch(res, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: userInput,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
    location.reload();
  }
