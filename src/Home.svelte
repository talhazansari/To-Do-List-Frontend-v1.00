
<script>
  import CustomAdd from "./CustomAdd.svelte";
  import {
    fetchData,
    data,
    sendData,
    removeItem,
    updateItem,
  } from "./api";
  let newTask = "";
  let filteredData = false;
  let tick =false;
  function addTask() {
    data.itemData = [...data.itemData, { description: newTask, status: false }];
    sendData();
    data.itemData = data.itemData;
    location.reload();
  }
  async function filterData() {
    filteredData = !filteredData;
    tick =!tick;
  }
</script>
<main>
  <div class="container">
    <div class="todo-app">
      <h1>To-Do List <img src="assets/icon.png" /></h1>
      <div class="row">
        <div class="task-input">
          <input
            id="checkbox"
            type="text"
            bind:value={newTask}
            placeholder="Enter a new  task..."
          />
        </div>
      </div>
      <CustomAdd name={"Add Task"} on:click={addTask} />
      <CustomAdd name={"Completed"} on:click={filterData}/>
        {#if tick}
        <img id="filterbox" src="assets/checked.png" />
        {/if}
      <br />
      <ul>
        {#await fetchData()}
          <p>Data to be displayed</p>
        {:then data}
          {#each data as item}
            <li>
              {#if filteredData === false}
                <span on:click={() => updateItem(item._id, item.status)}>
                  {item.description}
                </span>
                <a href="#/description?key1={item._id}">
                  <button class="GFG"> Update </button>
                </a>
                {#if item.status}
                  <span><img id="checkedBox" src="assets/checked.png"alt="Sorry" /></span>
                {/if}
                <span on:click={() => removeItem(item._id)}>
                  <i class="fas fa-trash" /></span
                >
              {:else if item.status}
                <span on:click={() => updateItem(item._id, item.status)}>
                  {item.description}</span>
                <img id="checkedBox" src="assets/checked.png" />
        
                <span on:click={() => removeItem(item._id)}>
                  <i class="fas fa-trash" /></span>
              {/if}
            </li>
            <br />
          {/each}
        {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
      </ul>
    </div>
  </div>
</main>