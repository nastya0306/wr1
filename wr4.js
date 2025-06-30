/*const json = {
  "rows": 8,
  "cols": 8,
  "cells": [
    { "x": 0, "y": 0, "width": 4, "height": 4, "type": "луг" },
    
	{ "x": 0, "y": 4, "type": "частково 1" },
    { "x": 0, "y": 5, "type": "частково 1" },
    { "x": 0, "y": 6, "type": "частково 1" },
    { "x": 1, "y": 4, "type": "частково 1" },
    { "x": 1, "y": 5, "type": "частково 1" },
    { "x": 1, "y": 6, "type": "частково 1" },
    
	{ "x": 2, "y": 4, "type": "частково" },
    { "x": 2, "y": 5, "type": "частково" },
    { "x": 2, "y": 6, "type": "частково" },
    { "x": 3, "y": 4, "type": "частково" },
    { "x": 3, "y": 5, "type": "частково" },
    { "x": 3, "y": 6, "type": "частково" },
    
	{ "x": 5, "y": 1, "type": "заповнений" },
    { "x": 6, "y": 1, "type": "заповнений" },
    { "x": 7, "y": 1, "type": "заповнений" },
    { "x": 5, "y": 2, "type": "заповнений" },
    { "x": 6, "y": 2, "type": "заповнений" },
    { "x": 7, "y": 2, "type": "заповнений" },
    
	{ "x": 5, "y": 4, "type": "заповнений 1" },
    { "x": 6, "y": 4, "type": "заповнений 1" },
    { "x": 7, "y": 4, "type": "заповнений 1" },
    { "x": 5, "y": 5, "type": "заповнений 1" },
    { "x": 6, "y": 5, "type": "заповнений 1" },
    { "x": 7, "y": 5, "type": "заповнений 1" },
    { "x": 5, "y": 6, "type": "заповнений 1" },
    { "x": 6, "y": 6, "type": "заповнений 1" },
    { "x": 7, "y": 6, "type": "заповнений 1" },
    
	{ "x": 0, "y": 7, "width": 8, "height": 1, "type": "недоступна" },
    
	{ "x": 4, "y": 0, "type": "пішохідна_дорога" },
    { "x": 5, "y": 0, "type": "пішохідна_дорога" },
    { "x": 6, "y": 0, "type": "пішохідна_дорога" },
    { "x": 7, "y": 0, "type": "пішохідна_дорога" },
    { "x": 4, "y": 1, "type": "пішохідна_дорога" },
    { "x": 4, "y": 2, "type": "пішохідна_дорога" },
    { "x": 4, "y": 3, "type": "пішохідна_дорога" },
    { "x": 4, "y": 4, "type": "пішохідна_дорога" },
    { "x": 4, "y": 5, "type": "пішохідна_дорога" },
	
	{ "x": 5, "y": 3, "type": "пішохідна_дорога" },
	{ "x": 6, "y": 3, "type": "пішохідна_дорога" },
	{ "x": 7, "y": 3, "type": "пішохідна_дорога" },
	
    { "x": 4, "y": 6, "type": "пішохідна_дорога" }
  ]
};

const grid = document.getElementById("grid");

json.cells.forEach(cell => {
  const div = document.createElement("div");
  div.className = `cell ${cell.type}`;

  if (cell.width && cell.height) {
    div.style.gridColumn = `${cell.x + 1} / span ${cell.width}`;
    div.style.gridRow = `${cell.y + 1} / span ${cell.height}`;
  } else {
    div.style.gridColumnStart = cell.x + 1;
    div.style.gridRowStart = cell.y + 1;
  }

  div.textContent = cell.type;
  grid.appendChild(div);
});*/

document.getElementById("fileInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const json = JSON.parse(e.target.result);
    renderGrid(json);
  };
  reader.readAsText(file);
});

function renderGrid(json) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; // очистити перед новим рендером

  json.cells.forEach(cell => {
    const div = document.createElement("div");
    div.className = `cell ${cell.type}`; // заміна пробілів у класах

    if (cell.width && cell.height) {
      div.style.gridColumn = `${cell.x + 1} / span ${cell.width}`;
      div.style.gridRow = `${cell.y + 1} / span ${cell.height}`;
    } else {
      div.style.gridColumnStart = cell.x + 1;
      div.style.gridRowStart = cell.y + 1;
    }

    div.textContent = cell.type;
    grid.appendChild(div);
  });
}
