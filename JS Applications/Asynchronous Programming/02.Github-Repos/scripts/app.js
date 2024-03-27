const list = document.getElementById("repos");

function loadRepos() {
  //console.log("TODO...");
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url).then(onHeaders).then(onSuccess).catch(onError);
}

//simplifeid from \/ \/ \/

// fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         throw "Error. User not found.";
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }

function onHeaders(response) {
  if (!response.ok) {
    throw "Error. User not found.";
  }
  return response.json();
}

function onSuccess(data) {
  list.replaceChildren(...data.map(creatListItem)); //replce children access a list of nodes, that why we spread the data
}

function onError(error) {
  list.textContent = error;
}

function creatListItem({ html_url, full_name }) {
  const item = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = html_url;
  anchor.textContent = full_name;
  item.appendChild(anchor);

  return item;
}
