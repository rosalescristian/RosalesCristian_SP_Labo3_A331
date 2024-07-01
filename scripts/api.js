const ENDPOINT = "http://localhost:3000/monedas";


export function obtenerTodos(clave) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        }
        else {
          reject(new Error("ERR " + xhr.status + " :" + xhr.statusText));
        }
      }
    });

    xhr.open("GET", `${ENDPOINT}`);
    xhr.send();
  });
}

export function obtenerUno(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          reject(new Error("ERR " + xhr.status + " :" + xhr.statusText));
        }
      }
    });

    xhr.open("GET", `${ENDPOINT}/${id}`);
    xhr.send();
  });
}

export function crearUno(data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const responseData = JSON.parse(xhr.responseText);
          resolve(responseData);
        } else {
          reject(new Error("ERR " + xhr.status + " :" + xhr.statusText));
        }
      }
    });

    xhr.open("POST", `${ENDPOINT}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  });
}

export function actualizarUno(id, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const responseData = JSON.parse(xhr.responseText);
          resolve(responseData);
        } else {
          reject(new Error("ERR " + xhr.status + " :" + xhr.statusText));
        }
      }
    });

    xhr.open("PUT", `${ENDPOINT}/${id}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  });
}

export function eliminarUno(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve();
        } else {
          reject(new Error("ERR " + xhr.status + " :" + xhr.statusText));
        }
      }
    });

    xhr.open("DELETE", `${ENDPOINT}/${id}`);
    xhr.send();
  });
}

export function eliminarTodos() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve();
        } else {
          reject(new Error("ERR " + xhr.status + " :" + xhr.statusText));
        }
      }
    });

    xhr.open("DELETE", `${ENDPOINT}`);
    xhr.send();
  });
}


///FETCH!!

export async function getAllFetch(){
  const options = {
    method : 'GET',
    headers : ("Content-Type", "application/json"),
  };
  let res = await fetch(`${ENDPOINT}`,options);
  res = await res.json();

}

export async function getOneFetch(id){
  const options = {
    method : 'GET',
    headers : ("Content-Type", "application/json"),
  };
  let res = await fetch(`${ENDPOINT}/${id}`,options);
  res = await res.json();
}

export async function addOneFetch(data){
  const options = {
    method : 'POST',
    headers : ("Content-Type", "application/json"),
    body: JSON.stringify(data),
  };
  let res = await fetch(`${ENDPOINT}`,options);
  res = await res.json();
}

export async function editOneFetch(data){
  const options = {
    method : 'PUT',
    headers : ("Content-Type", "application/json"),
    body: JSON.stringify(data),
  };
  let res = await fetch(`${ENDPOINT}/${data.id}`, options);
  /* res = await res.json(); */
}

export async function deleteOneFetch(id){
  const options = {
    method : 'DELETE',
    /* headers : ("Content-Type", "application/json"), */
  };
  let res = await fetch(`${ENDPOINT}/${id}`, options);
  /* res = await res.json(); */
}
