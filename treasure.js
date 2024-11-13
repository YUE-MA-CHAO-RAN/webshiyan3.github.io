class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      alert("正在提取线索，请等待一秒")
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
        console.log("在古老的图书馆里找到了第一个线索...守卫出现！")
        alert("在古老的图书馆里找到了第一个线索...守卫出现！")
        shouweiShow = 1;
        drawshouwei();
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中间...");
        console.log("解码成功!宝藏在一座古老的神庙中间...")
        alert("解码成功!宝藏在一座古老的神庙中间...")
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      alert("正在跟寺庙守卫战斗！")
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          console.log("糟糕!被神庙守卫打败了!")
          reject("糟糕!被神庙守卫打败了!");
          return
        }
        resolve("箱子就在寺庙正中间");
        console.log("打败守卫后，他交代：箱子就在寺庙正中间！")
        alert("打败守卫后，他交代：箱子就在寺庙正中间！")
        shouweiShow = 0;
        xiangziShow = 1;
        drawTreasure();
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      alert("正在解题中")
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.7) {
          resolve("谜题解决了! 箱子可以打开了...");
          console.log("谜题解决了! 箱子可以打开了...")
          alert("谜题解决了! 箱子可以打开了...")
          resolve("恭喜!你找到了传说中的宝藏!");
          console.log("恭喜!你找到了传说中的宝藏!")
          alert("恭喜!你找到了传说中的宝藏!");
        } else {
          reject("谜题太难了，无法解决...");
          alert("谜题太难了，无法解决...再试一次？")
        }

      }, 1000);
    });
  }

  static solvePuzzle(box) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.7) {
          resolve("谜题解决了! 箱子可以打开了...");
          console.log("谜题解决了! 箱子可以打开了...")
          alert("谜题解决了! 箱子可以打开了...")
        } else {
          reject("谜题太难了，无法解决...");

        }
      }, 1500);
    });
  }
}

async function findTreasureWithAsyncAwait() {
  try {
    const initialClue = await TreasureMap.getInitialClue();
    console.log(initialClue);

    const location = await TreasureMap.decodeAncientScript(initialClue);
    console.log(location);

    const box = await TreasureMap.searchTemple(location);
    console.log(box);

    const puzzleSolved = await TreasureMap.solvePuzzle(box);
    console.log(puzzleSolved);

    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
    alert(treasure); 
  } catch (error) {
    console.error("任务失败:", error);
    alert("任务失败: " + error);
  }
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const treasureMap = new Image();
treasureMap.src = './map.png'; 
treasureMap.onload = function () {
  drawMap();

};

function drawMap() {
  ctx.drawImage(treasureMap, 0, 0, canvas.width, canvas.height);
}

const markerPosition = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50
};

function drawMarker() {
  ctx.fillStyle = 'red';
  ctx.fillRect(markerPosition.x - markerPosition.size / 2, markerPosition.y - markerPosition.size / 2, markerPosition.size, markerPosition.size);
}


function isMarkerClicked(x, y) {
  return (
    x >= markerPosition.x - markerPosition.size / 2 &&
    x <= markerPosition.x + markerPosition.size / 2 &&
    y >= markerPosition.y - markerPosition.size / 2 &&
    y <= markerPosition.y + markerPosition.size / 2
  );
}
// -------------线索模块---------------

const xiansuoPosition = {
  x: canvas.width / 3,
  y: canvas.height / 3,
  size: 50
};
const xiansuoImage = new Image();
xiansuoImage.src = './xiansuo.png'; 
xiansuoImage.onload = function () {
  drawMap(); // 当宝藏图片加载完成后，重新绘制地图和宝藏
};

function drawxiansuo() {
  ctx.drawImage(xiansuoImage, xiansuoPosition.x - xiansuoPosition.size / 2, xiansuoPosition.y - xiansuoPosition.size / 2, xiansuoPosition.size, xiansuoPosition.size);
}
function xiansuo(x, y) {
  return (
    x >= xiansuoPosition.x - xiansuoPosition.size / 2 &&
    x <= xiansuoPosition.x + xiansuoPosition.size / 2 &&
    y >= xiansuoPosition.y - xiansuoPosition.size / 2 &&
    y <= xiansuoPosition.y + xiansuoPosition.size / 2
  );
}
//----------------------------
// -------------守卫模块---------------
let shouweiShow = 0;
const shouweiPosition = {
  x: canvas.width * 2 / 3,
  y: canvas.height * 2 / 3,
  size: 80
};
const shouweiImage = new Image();
shouweiImage.src = './shouwei.png'; 
shouweiImage.onload = function () {
  drawMap(); 
};
// Draw the treasure on the canvas
function drawshouwei() {
  if (shouweiShow === 1) {
    ctx.drawImage(shouweiImage, shouweiPosition.x - shouweiPosition.size / 2, shouweiPosition.y - shouweiPosition.size / 2, shouweiPosition.size, shouweiPosition.size);
  }
}
function shouwei(x, y) {
  return (
    x >= shouweiPosition.x - shouweiPosition.size / 2 &&
    x <= shouweiPosition.x + shouweiPosition.size / 2 &&
    y >= shouweiPosition.y - shouweiPosition.size / 2 &&
    y <= shouweiPosition.y + shouweiPosition.size / 2
  );
}
//----------------------------
let xiangziShow = 0;
const treasureImage = new Image();
treasureImage.src = './xiangzi.jpg'; 
treasureImage.onload = function () {
  drawMap(); 
};

function drawTreasure() {
  if (xiangziShow===1) {
    ctx.drawImage(treasureImage, markerPosition.x - markerPosition.size / 2, markerPosition.y - markerPosition.size / 2, markerPosition.size, markerPosition.size);
  }
}


const characterPosition = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50 
};

// Character image
const characterImage = new Image();
characterImage.src = './renwu.jpg'; 


function drawCharacter() {
  ctx.drawImage(characterImage, characterPosition.x - characterPosition.size / 2, characterPosition.y - characterPosition.size / 2, characterPosition.size, characterPosition.size);
}


canvas.addEventListener('click', function (event) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

 
  characterPosition.x = clickX;
  characterPosition.y = clickY;


  drawMap();
  drawTreasure();
  drawCharacter(); // 重新绘制人物在新的位置
  drawxiansuo();
  drawshouwei();
  if (isMarkerClicked(clickX, clickY)) {
    addGameHistoryRecord(new Date().toLocaleString()+"马超打开了宝藏")
    TreasureMap.openTreasureBox();
  }
  if (xiansuo(clickX, clickY)) {
    addGameHistoryRecord(new Date().toLocaleString() + "马超查看了线索")
    TreasureMap.getInitialClue();
  }
  if (shouwei(clickX, clickY)) {
    addGameHistoryRecord(new Date().toLocaleString() + "马超跟守卫进行了战斗")
    TreasureMap.searchTemple();
  }
});

// -----------------------------------------------
// 检查并设置玩家的ID和昵称
function checkAndSetPlayerInfo() {
  // 检查localStorage中是否已经存储了playerId和nickname
  let playerId = localStorage.getItem('playerId');
  let nickname = localStorage.getItem('nickname');

  // 如果没有存储，设置默认值或让用户输入
  if (!playerId || !nickname) {
    // 设置默认值
    playerId = '20224390104';
    nickname = '马超';

    // 然后将用户输入的值赋给playerId和nickname变量

    // 保存默认值或用户输入的信息到localStorage
    savePlayerInfo(playerId, nickname, [ "2024 / 11 / 13 23: 48: 47马超跟守卫进行了战斗", "2024 / 11 / 13 23: 48: 52马超跟守卫进行了战斗", "2024 / 11 / 13 23: 48: 57马超打开了宝藏"]);
  }

  // 如果信息已经存在，则无需操作
}

// 保存玩家信息到localStorage
function savePlayerInfo(playerId, nickname, gameHistory) {
  localStorage.setItem('playerId', playerId);
  localStorage.setItem('nickname', nickname);
  localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
}

// 从localStorage获取玩家信息
function getPlayerInfo() {
  const playerId = localStorage.getItem('playerId');
  const nickname = localStorage.getItem('nickname');
  
  const gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
  return { playerId, nickname, gameHistory };
}

// 添加新的游戏历史记录
function addGameHistoryRecord(record) {
  const playerInfo = getPlayerInfo();
  playerInfo.gameHistory.push(record); // 将新的记录添加到历史数组中
  savePlayerInfo(playerInfo.playerId, playerInfo.nickname, playerInfo.gameHistory); // 保存更新后的信息
}

// 当文档加载完毕时执行
document.addEventListener('DOMContentLoaded', function () {
  checkAndSetPlayerInfo()
  var backgroundMusic = document.getElementById('backgroundMusic');

  // 监听文档的点击事件来播放音乐
  document.addEventListener('click', function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play().catch(function (error) {
        console.error('无法播放音乐:', error);
      });
    }
  });

  // 尝试播放音乐，如果被阻止，则在用户交互后再次尝试
  backgroundMusic.play().catch(function (error) {
    console.error('音乐自动播放被阻止，将在用户交互后尝试播放:', error);
  });
  // 从localStorage获取玩家信息
  const playerInfo = getPlayerInfo(); // 使用您定义的getPlayerInfo函数获取信息

  // 显示个人信息
  const playerInfoDiv = document.getElementById('playerInfo');
  playerInfoDiv.textContent = `玩家ID: ${playerInfo.playerId}\n昵称:${playerInfo.nickname}`;

  // 显示游戏历史
  const gameHistoryDiv = document.getElementById('gameHistory');
  if (gameHistoryDiv) {
    // 确保playerInfo.gameHistory是一个数组
    // 使用join方法将数组元素连接成一个字符串，并用换行符分隔
    if (Array.isArray(playerInfo.gameHistory)) {
      gameHistoryDiv.textContent = playerInfo.gameHistory.join('\n');
    } else {
      console.error('playerInfo.gameHistory 不是一个数组');
    }
  } else {
    console.error('无法找到元素 gameHistory');
  }

    
});



// Initial draw
drawMap();
drawTreasure();
drawCharacter();
drawxiansuo();
drawshouwei();
      
      
      





