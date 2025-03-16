// ---------- 变量声明 (02_Declaration) ----------
// 使用 let 声明可变变量
let tasks = [];
let currentFilter = "all";

// 使用 const 声明不可变常量
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const statsElement = document.getElementById("stats");

// ---------- 数据类型 (03_CommonTypes) ----------
// 数值类型示例
const defaultTaskCount = 0;
const defaultCompletionRate = 0.0;

// 字符串类型示例
const appName = "任务管理系统";
const appVersion = "1.0";
const appDescription = `${appName} 版本 ${appVersion}`;
console.log(appDescription); // 任务管理系统 版本 1.0

// 布尔类型示例
const isAppRunning = true;
const isDebugMode = false;

// ---------- 运算符 (04_Operators) ----------
// 函数：添加任务
function addTask() {
  // 算术运算符示例
  const currentTaskCount = tasks.length + 1;

  // 比较运算符示例
  if (taskInput.value === "") {
    alert("任务不能为空!");
    return;
  }

  // 逻辑运算符示例
  if (isTaskDuplicate(taskInput.value) && !isDebugMode) {
    alert("任务已存在!");
    return;
  }

  // 创建新任务对象
  const newTask = {
    id: Date.now(),
    text: taskInput.value,
    completed: false,
    createdAt: new Date(),
  };

  // 将新任务添加到数组
  tasks.push(newTask);

  // 清空输入框
  taskInput.value = "";

  // 更新界面
  renderTasks();
  updateStats();
}

// ---------- 函数 (05_Function) ----------
// 函数声明
function renderTasks() {
  // 清空任务列表
  taskList.innerHTML = "";

  // 根据过滤条件筛选任务
  const filteredTasks = filterTasks(tasks, currentFilter);

  // 遍历任务数组并渲染
  for (let i = 0; i < filteredTasks.length; i++) {
    renderTask(filteredTasks[i]);
  }
}

// 函数表达式
const filterTasks = function (taskArray, filter) {
  if (filter === "active") {
    return taskArray.filter((task) => !task.completed);
  } else if (filter === "completed") {
    return taskArray.filter((task) => task.completed);
  } else {
    return taskArray;
  }
};

// 箭头函数
const isTaskDuplicate = (text) => {
  return tasks.some((task) => task.text === text);
};

// ---------- 条件语句 (06_Condition) ----------
function toggleTaskStatus(id) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      // 使用条件语句
      if (tasks[i].completed) {
        tasks[i].completed = false;
      } else {
        tasks[i].completed = true;
      }

      // 三元运算符示例
      const statusMessage = tasks[i].completed ? "已完成" : "未完成";
      console.log(`任务 "${tasks[i].text}" 状态更新为: ${statusMessage}`);

      renderTasks();
      updateStats();
      break;
    }
  }
}

// ---------- 循环 (07_Loop) ----------
function updateStats() {
  let totalTasks = tasks.length;
  let completedTasks = 0;

  // for 循环示例
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completedTasks++;
    }
  }

  // 计算完成率
  let completionRate = 0;

  // while 循环示例
  let j = 0;
  while (j < 1) {
    if (totalTasks > 0) {
      completionRate = (completedTasks / totalTasks) * 100;
    }
    j++;
  }

  // 使用 break 和 continue 的示例
  let specialTasks = 0;
  for (let i = 0; i < tasks.length; i++) {
    // 如果没有任务，提前跳出循环
    if (tasks.length === 0) break;

    // 跳过已完成的任务
    if (tasks[i].completed) continue;

    // 计算特殊任务数量（这里以任务名称包含"重要"为例）
    if (tasks[i].text.includes("重要")) {
      specialTasks++;
    }
  }

  // 更新统计数据显示
  statsElement.innerHTML = `总任务: ${totalTasks} | 已完成: ${completedTasks} | 完成率: ${completionRate.toFixed(
    1
  )}% | 未完成重要任务: ${specialTasks}`;
}

// ---------- 数组 (08_Array) ----------
function renderTask(task) {
  // 创建列表项
  const li = document.createElement("li");
  li.className = task.completed ? "completed" : "";

  // 创建任务文本元素
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = task.text;

  // 创建任务操作区域
  const actions = document.createElement("div");
  actions.className = "task-actions";

  // 完成/取消按钮
  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = task.completed ? "取消完成" : "完成";
  completeBtn.onclick = function () {
    toggleTaskStatus(task.id);
  };

  // 删除按钮
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "删除";
  deleteBtn.onclick = function () {
    deleteTask(task.id);
  };

  // 编辑按钮
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "编辑";
  editBtn.onclick = function () {
    editTask(task.id);
  };

  // 添加元素到DOM
  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
}

function deleteTask(id) {
  // 使用数组方法filter创建新数组
  const newTasks = tasks.filter(function (task) {
    return task.id !== id;
  });

  // 更新任务数组
  tasks = newTasks;

  // 更新界面
  renderTasks();
  updateStats();
}

function editTask(id) {
  // 查找要编辑的任务
  const task = tasks.find((task) => task.id === id);
  if (!task) return;

  // 弹出提示框获取新的任务文本
  const newText = prompt("请输入新的任务内容:", task.text);

  // 如果用户取消或输入为空，不做更改
  if (newText === null || newText === "") return;

  // 更新任务文本
  task.text = newText;

  // 更新界面
  renderTasks();
}

// 按名称排序
function sortTasksByName() {
  // 复制数组并排序
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => {
    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  });

  // 更新任务数组
  tasks = sortedTasks;

  // 更新界面
  renderTasks();
}

// 按创建日期排序
function sortTasksByDate() {
  // 复制数组并排序
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => a.createdAt - b.createdAt);

  // 更新任务数组
  tasks = sortedTasks;

  // 更新界面
  renderTasks();
}

// 事件监听器
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// 过滤按钮点击事件
document.getElementById("filterAll").addEventListener("click", function () {
  currentFilter = "all";
  renderTasks();
});

document.getElementById("filterActive").addEventListener("click", function () {
  currentFilter = "active";
  renderTasks();
});

document
  .getElementById("filterCompleted")
  .addEventListener("click", function () {
    currentFilter = "completed";
    renderTasks();
  });

// 排序按钮点击事件
document
  .getElementById("sortByName")
  .addEventListener("click", sortTasksByName);
document
  .getElementById("sortByDate")
  .addEventListener("click", sortTasksByDate);

// 初始化
updateStats();

// 添加一些示例任务
const sampleTasks = [
  {
    id: 1,
    text: "学习JavaScript基础",
    completed: true,
    createdAt: new Date(2023, 0, 15),
  },
  {
    id: 2,
    text: "完成数组练习",
    completed: false,
    createdAt: new Date(2023, 0, 16),
  },
  {
    id: 3,
    text: "重要：准备项目演示",
    completed: false,
    createdAt: new Date(2023, 0, 17),
  },
];

// 使用数组方法将示例任务添加到任务数组
tasks = tasks.concat(sampleTasks);

// 更新界面
renderTasks();
updateStats();

console.log("任务管理系统初始化完成！");
