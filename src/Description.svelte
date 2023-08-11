<script>
  import CustomAdd from "./CustomAdd.svelte";
  import { updateDescription } from "./api";
  let queryParams = window.location.href;
  let url = queryParams.split("=");
  let id = url[1];
  let newTask = "";
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
            placeholder="Enter Description"
          />
        </div>
      </div>
      <div>
        <a href="/">
          <CustomAdd
            name={"Update Description"}
            on:click={updateDescription(id, newTask)}
          />
        </a>
      </div>
    </div>
  </div>
</main>
